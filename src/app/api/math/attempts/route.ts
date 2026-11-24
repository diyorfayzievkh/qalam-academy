import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

const Wrong = z.object({ q: z.string().max(400), given: z.string().max(60), answer: z.string().max(120) });
const S = z.object({
  grade: z.string().regex(/^g[2-5]$/), scope: z.string().max(120), kind: z.enum(["item", "subtopic", "topic", "grade"]),
  title: z.string().max(160), score: z.number().int().min(0).max(100), total: z.number().int().min(1).max(100),
  seconds: z.number().int().min(0).max(86400), wrong: z.array(Wrong).max(100),
});

/** Save one finished math test. */
export async function POST(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const b = await body(req, S); if (!b || b.score > b.total) return fail(400, "Invalid result.");
    const [r] = await db()<{ id: string; created_at: Date }[]>`
      insert into math_attempts (user_id, grade, scope, kind, title, score, total, seconds, wrong)
      values (${me.id}, ${b.grade}, ${b.scope}, ${b.kind}, ${b.title}, ${b.score}, ${b.total}, ${b.seconds}, ${db().json(b.wrong)})
      returning id, created_at`;
    return ok({ id: r.id, createdAt: r.created_at });
  });
}

/** Test history: my own, or (for a parent) a child's in the same family. */
export async function GET(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const u = new URL(req.url);
    const grade = u.searchParams.get("grade"); const scope = u.searchParams.get("scope");
    let userId = me.id; const who = u.searchParams.get("user");
    if (who && who !== me.id) {
      if (me.role !== "PARENT" || !me.familyId) return fail(403, "Only parents can see another member's results.");
      const [m] = await db()<{ id: string }[]>`select id from users where id = ${who} and family_id = ${me.familyId}`;
      if (!m) return fail(404, "Not in your family.");
      userId = who;
    }
    const rows = await db()`
      select id, grade, scope, kind, title, score, total, seconds, wrong, created_at as "createdAt"
      from math_attempts where user_id = ${userId}
        and (${grade}::text is null or grade = ${grade}) and (${scope}::text is null or scope = ${scope})
      order by created_at desc limit 500`;
    return ok({ attempts: rows });
  });
}
