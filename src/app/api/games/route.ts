import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { newPin, QuestionSchema } from "@/lib/games";

export const dynamic = "force-dynamic";

const S = z.object({
  title: z.string().trim().min(1).max(80),
  mode: z.enum(["LIVE", "CHALLENGE"]),
  lang: z.enum(["en", "uz", "ru"]).default("en"),
  seconds: z.number().int().min(5).max(120),
  hours: z.number().int().min(1).max(24 * 14).optional(),
  questions: z.array(QuestionSchema).min(1).max(50),
});

/** Create a game. Hosts are signed-in adults. */
export async function POST(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    if (me.kind !== "ADULT") return fail(403, "Ask a parent to host a game.");
    const b = await body(req, S); if (!b) return fail(400, "Please check the quiz: every question needs text, 2–4 answers and a correct answer.");
    const [{ n }] = await db()<{ n: number }[]>`select count(*)::int as n from games where host_id = ${me.id} and created_at > now() - interval '1 day'`;
    if (n >= 40) return fail(429, "You have created a lot of games today. Please try again tomorrow.");
    const endsAt = b.mode === "CHALLENGE" ? new Date(Date.now() + (b.hours ?? 72) * 3600e3) : null;
    for (let i = 0; i < 6; i++) {
      const pin = newPin();
      try {
        await db()`insert into games (pin, host_id, family_id, title, mode, lang, questions, seconds, state, ends_at)
          values (${pin}, ${me.id}, ${me.familyId}, ${b.title}, ${b.mode}, ${b.lang}, ${db().json(b.questions)}, ${b.seconds},
                  ${b.mode === "CHALLENGE" ? "QUESTION" : "LOBBY"}, ${endsAt})`;
        return ok({ pin });
      } catch (e) {
        if ((e as { code?: string }).code !== "23505") throw e; // PIN already in use: try another
      }
    }
    return fail(503, "Could not create a game PIN. Please try again.");
  });
}

/** My games, plus open games my family members are hosting (internal invites). */
export async function GET() {
  return handle(async () => {
    const me = await currentUser();
    if (!me) return ok({ mine: [], invites: [] });
    // Close live games nobody finished after a day, and expired challenges.
    await db()`update games set state = 'FINISHED' where state <> 'FINISHED' and
      ((mode = 'LIVE' and created_at < now() - interval '1 day') or (mode = 'CHALLENGE' and ends_at < now()))`;
    const mine = await db()`
      select g.pin, g.title, g.mode, g.state, g.created_at as "createdAt", g.ends_at as "endsAt",
             jsonb_array_length(g.questions) as total,
             (select count(*)::int from game_players p where p.game_id = g.id and not p.kicked) as players
      from games g where g.host_id = ${me.id} order by g.created_at desc limit 20`;
    const invites = me.familyId ? await db()`
      select g.pin, g.title, g.mode, g.state, g.ends_at as "endsAt", u.name as host, jsonb_array_length(g.questions) as total
      from games g join users u on u.id = g.host_id
      where g.family_id = ${me.familyId} and g.host_id <> ${me.id} and g.state <> 'FINISHED'
      order by g.created_at desc limit 10` : [];
    return ok({ mine, invites });
  });
}
