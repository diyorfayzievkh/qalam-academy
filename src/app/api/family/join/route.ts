import { z } from "zod";
import { body, fail, handle, ok, requireUser } from "@/lib/api";
import { recordFailure, throttled } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const S = z.object({ code: z.string().trim().toUpperCase().min(4).max(20) });

/** A second parent joins an existing family with its code. */
export async function POST(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    if (me.kind !== "ADULT") return fail(403, "Only parents can join a family this way.");
    if (me.familyId) return fail(409, "You are already in a family.");
    const b = await body(req, S); if (!b) return fail(400, "Please enter the family code.");
    const key = `join:${me.id}`;
    if (await throttled(key)) return fail(429, "Too many attempts. Please wait 15 minutes.");
    const [f] = await db()<{ id: string }[]>`select id from families where join_code = ${b.code}`;
    if (!f) { await recordFailure(key); return fail(404, "No family found with that code."); }
    await db()`update users set family_id = ${f.id}, role = 'PARENT' where id = ${me.id}`;
    return ok();
  });
}
