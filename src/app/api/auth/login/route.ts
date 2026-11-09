import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { recordFailure, startSession, throttled, verifySecret } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const S = z.object({ email: z.string().trim().toLowerCase().max(200), password: z.string().max(200) });

export async function POST(req: Request) {
  return handle(async () => {
    const b = await body(req, S);
    if (!b) return fail(400, "Please enter your email and password.");
    const key = `login:${b.email}`;
    if (await throttled(key)) return fail(429, "Too many attempts. Please wait 15 minutes.");
    const [u] = await db()<{ id: string; password_hash: string | null }[]>`select id, password_hash from users where email = ${b.email} and kind = 'ADULT'`;
    if (!u || !(await verifySecret(b.password, u.password_hash))) { await recordFailure(key); return fail(401, "Email or password is not right."); }
    await startSession(u.id);
    return ok();
  });
}
