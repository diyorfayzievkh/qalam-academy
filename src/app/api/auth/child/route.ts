import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { recordFailure, startSession, throttled, verifySecret } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const S = z.object({ code: z.string().trim().toUpperCase().max(20), name: z.string().trim().max(60), pin: z.string().regex(/^\d{4}$/) });

export async function POST(req: Request) {
  return handle(async () => {
    const b = await body(req, S);
    if (!b) return fail(400, "Enter the family code, your name and your 4-digit PIN.");
    const key = `child:${b.code}`;
    if (await throttled(key, 10)) return fail(429, "Too many attempts. Please wait 15 minutes, or ask your parent.");
    const [u] = await db()<{ id: string; pin_hash: string | null }[]>`
      select u.id, u.pin_hash from users u join families f on f.id = u.family_id
      where f.join_code = ${b.code} and u.kind = 'CHILD' and lower(u.name) = lower(${b.name})`;
    if (!u || !(await verifySecret(b.pin, u.pin_hash))) { await recordFailure(key); return fail(401, "That doesn’t match. Check the family code, your name and PIN."); }
    await startSession(u.id);
    return ok();
  });
}
