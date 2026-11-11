import { createHash } from "node:crypto";
import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { hashSecret, startSession } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";
const S = z.object({ token: z.string().min(20).max(100), password: z.string().min(8).max(200) });

/** Set a new password with a reset link, sign out everywhere else, and sign in here. */
export async function POST(req: Request) {
  return handle(async () => {
    const b = await body(req, S); if (!b) return fail(400, "Please choose a password of at least 8 characters.");
    const hash = createHash("sha256").update(b.token).digest("hex");
    const [r] = await db()<{ user_id: string }[]>`
      update password_resets set used_at = now()
      where token_hash = ${hash} and used_at is null and expires_at > now()
      returning user_id`;
    if (!r) return fail(400, "This link has expired or was already used. Please ask for a new one.");
    await db()`update users set password_hash = ${await hashSecret(b.password)} where id = ${r.user_id}`;
    await db()`delete from sessions where user_id = ${r.user_id}`;
    await db()`delete from password_resets where user_id = ${r.user_id}`;
    await startSession(r.user_id);
    return ok();
  });
}
