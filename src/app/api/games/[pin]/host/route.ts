import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { db } from "@/lib/db";
import { gameByPin, LEAD_MS, sync } from "@/lib/games";

export const dynamic = "force-dynamic";
const S = z.object({ action: z.enum(["start", "next", "reveal", "end", "kick"]), playerId: z.string().uuid().optional() });

/** Host controls: start, reveal now, next question, end, remove a player. */
export async function POST(req: Request, { params }: { params: { pin: string } }) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const g0 = await gameByPin(params.pin); if (!g0) return fail(404, "No game found with that PIN.");
    if (g0.host_id !== me.id) return fail(403, "Only the host can do that.");
    const g = await sync(g0);
    const b = await body(req, S); if (!b) return fail(400, "Invalid action.");
    const openAt = new Date(Date.now() + LEAD_MS);
    switch (b.action) {
      case "kick":
        if (!b.playerId) return fail(400, "Choose a player.");
        await db()`update game_players set kicked = true where id = ${b.playerId} and game_id = ${g.id}`;
        await sync(g);
        return ok();
      case "end":
        await db()`update games set state = 'FINISHED' where id = ${g.id}`;
        return ok();
      case "start":
        if (g.mode !== "LIVE" || g.state !== "LOBBY") return fail(409, "The game has already started.");
        await db()`update games set state = 'QUESTION', current = 0, started_at = ${openAt} where id = ${g.id} and state = 'LOBBY'`;
        return ok();
      case "reveal":
        if (g.state !== "QUESTION") return ok();
        await db()`update games set started_at = now() - make_interval(secs => ${g.seconds + 5}) where id = ${g.id} and state = 'QUESTION' and current = ${g.current}`;
        await sync({ ...g, started_at: new Date(Date.now() - (g.seconds + 5) * 1000) });
        return ok();
      case "next":
        if (g.mode !== "LIVE" || g.state !== "REVEAL") return fail(409, "Wait for the answers first.");
        if (g.current + 1 >= g.questions.length) await db()`update games set state = 'FINISHED' where id = ${g.id}`;
        else await db()`update games set state = 'QUESTION', current = ${g.current + 1}, started_at = ${openAt} where id = ${g.id} and state = 'REVEAL' and current = ${g.current}`;
        return ok();
    }
  });
}
