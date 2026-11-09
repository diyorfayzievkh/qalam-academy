import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { hashSecret } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const PIN = z.string().regex(/^\d{4}$/);

async function parent() {
  const me = await requireUser();
  if (me instanceof Response) return me;
  if (me.role !== "PARENT" || !me.familyId) return new Response(JSON.stringify({ error: "Only parents in a family can manage children." }), { status: 403 });
  return me;
}

/** Add a child profile. */
export async function POST(req: Request) {
  return handle(async () => {
    const me = await parent(); if (me instanceof Response) return me;
    const b = await body(req, z.object({ name: z.string().trim().min(1).max(40), pin: PIN }));
    if (!b) return fail(400, "Enter the child’s name and a 4-digit PIN.");
    const [{ n }] = await db()<{ n: number }[]>`select count(*)::int as n from users where family_id = ${me.familyId} and kind = 'CHILD'`;
    if (n >= 12) return fail(400, "A family can have up to 12 children.");
    const dup = await db()`select 1 from users where family_id = ${me.familyId} and kind = 'CHILD' and lower(name) = lower(${b.name})`;
    if (dup.length) return fail(409, "There is already a child with this name in your family.");
    await db()`insert into users (name, kind, pin_hash, family_id, role) values (${b.name}, 'CHILD', ${await hashSecret(b.pin)}, ${me.familyId}, 'CHILD')`;
    return ok();
  });
}

/** Change a child’s PIN. */
export async function PATCH(req: Request) {
  return handle(async () => {
    const me = await parent(); if (me instanceof Response) return me;
    const b = await body(req, z.object({ id: z.string().uuid(), pin: PIN }));
    if (!b) return fail(400, "Enter a 4-digit PIN.");
    const r = await db()`update users set pin_hash = ${await hashSecret(b.pin)} where id = ${b.id} and family_id = ${me.familyId} and kind = 'CHILD' returning id`;
    if (!r.length) return fail(404, "Child not found.");
    await db()`delete from sessions where user_id = ${b.id}`;
    return ok();
  });
}

/** Remove a child profile and its progress. */
export async function DELETE(req: Request) {
  return handle(async () => {
    const me = await parent(); if (me instanceof Response) return me;
    const id = new URL(req.url).searchParams.get("id") ?? "";
    if (!z.string().uuid().safeParse(id).success) return fail(400, "Invalid child.");
    const r = await db()`delete from users where id = ${id} and family_id = ${me.familyId} and kind = 'CHILD' returning id`;
    if (!r.length) return fail(404, "Child not found.");
    return ok();
  });
}
