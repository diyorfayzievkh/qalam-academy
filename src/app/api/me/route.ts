import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { currentUser } from "@/lib/auth";
import { db, dbConfigured } from "@/lib/db";
import { AVATAR_IDS } from "@/components/avatar-ids";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!dbConfigured()) return ok({ user: null, available: false });
  return handle(async () => {
    const me = await currentUser();
    if (!me) return ok({ user: null, available: true });
    let family = null;
    if (me.familyId) {
      const [f] = await db()<{ name: string; code: string }[]>`select name, join_code as code from families where id = ${me.familyId}`;
      family = f ? { name: f.name, code: me.role === "PARENT" ? f.code : null } : null;
    }
    return ok({ user: me, family, available: true });
  });
}

const P = z.object({ lang: z.enum(["en", "uz", "ru"]).optional(), name: z.string().trim().min(1).max(60).optional(), avatar: z.enum(AVATAR_IDS).optional() });
export async function PATCH(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const b = await body(req, P); if (!b) return fail(400, "Invalid request.");
    if (b.lang) await db()`update users set lang = ${b.lang} where id = ${me.id}`;
    if (b.name && me.kind === "ADULT") await db()`update users set name = ${b.name} where id = ${me.id}`;
    if (b.avatar) await db()`update users set avatar = ${b.avatar} where id = ${me.id}`;
    return ok();
  });
}

/** Delete my account (parents) and everything stored for it. */
export async function DELETE() {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    if (me.kind !== "ADULT") return fail(403, "Ask your parent to remove your profile.");
    await db().begin(async (sql) => {
      if (me.familyId && me.role === "PARENT") {
        const [{ n }] = await sql<{ n: number }[]>`select count(*)::int as n from users where family_id = ${me.familyId} and role = 'PARENT' and id <> ${me.id}`;
        if (n === 0) {
          await sql`delete from users where family_id = ${me.familyId} and kind = 'CHILD'`;
          await sql`delete from families where id = ${me.familyId}`;
        }
      }
      await sql`delete from users where id = ${me.id}`;
    });
    return ok();
  });
}
