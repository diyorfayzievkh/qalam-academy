import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { newJoinCode } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

type Row = { id: string; name: string; kind: string; role: string; points: number | null; data: Record<string, Record<string, unknown>> | null; updated_at: Date | null };

/** The family circle. Parents see each member's learning progress (never worship). */
export async function GET() {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    if (!me.familyId) return ok({ family: null });
    const [f] = await db()<{ name: string; code: string }[]>`select name, join_code as code from families where id = ${me.familyId}`;
    const rows = await db()<Row[]>`
      select u.id, u.name, u.kind, u.role, p.points, p.data, p.updated_at
      from users u left join progress p on p.user_id = u.id
      where u.family_id = ${me.familyId} order by u.role desc, u.created_at`;
    const parent = me.role === "PARENT";
    const members = rows.map((r) => {
      const d = r.data ?? {};
      const hifz = (d.hifz ?? {}) as Record<string, { status?: string }>;
      return {
        id: r.id, name: r.name, kind: r.kind, role: r.role, me: r.id === me.id,
        ...(parent || r.id === me.id ? {
          points: r.points ?? 0,
          studied: Object.keys(d.studied ?? {}).length,
          answered: Object.keys(d.answered ?? {}).length,
          perfect: Object.keys(d.perfect ?? {}).length,
          memorized: Object.values(hifz).filter((h) => h?.status === "memorized").length,
          lastActive: r.updated_at,
        } : {}),
      };
    });
    return ok({ family: { name: f.name, code: parent ? f.code : null }, role: me.role, members });
  });
}

const C = z.object({ name: z.string().trim().min(1).max(60) });
/** Create a family circle; the creator becomes a parent. */
export async function POST(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    if (me.kind !== "ADULT") return fail(403, "Only parents can create a family.");
    if (me.familyId) return fail(409, "You are already in a family.");
    const b = await body(req, C); if (!b) return fail(400, "Please give your family a name.");
    await db().begin(async (sql) => {
      const [f] = await sql<{ id: string }[]>`insert into families (name, join_code) values (${b.name}, ${newJoinCode()}) returning id`;
      await sql`update users set family_id = ${f.id}, role = 'PARENT' where id = ${me.id}`;
    });
    return ok();
  });
}
