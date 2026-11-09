import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { hashSecret, recordFailure, startSession, throttled } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const S = z.object({ name: z.string().trim().min(1).max(60), email: z.string().trim().toLowerCase().email().max(200), password: z.string().min(8).max(200) });

export async function POST(req: Request) {
  return handle(async () => {
    const b = await body(req, S);
    if (!b) return fail(400, "Please enter your name, a valid email and a password of at least 8 characters.");
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "?";
    if (await throttled(`signup:${ip}`, 10)) return fail(429, "Too many attempts. Please wait 15 minutes.");
    const exists = await db()`select 1 from users where email = ${b.email}`;
    if (exists.length) { await recordFailure(`signup:${ip}`); return fail(409, "An account with this email already exists. Try signing in."); }
    const [u] = await db()<{ id: string }[]>`insert into users (email, name, kind, password_hash) values (${b.email}, ${b.name}, 'ADULT', ${await hashSecret(b.password)}) returning id`;
    await startSession(u.id);
    return ok();
  });
}
