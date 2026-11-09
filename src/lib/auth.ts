// Accounts: parents sign in with email + password; children sign in with the
// family code, their name and a 4-digit PIN their parent set.
// Sessions are random tokens in an httpOnly cookie; only their SHA-256 hash is stored.

import { createHash, randomBytes, scrypt as _scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { db } from "./db";

const scrypt = promisify(_scrypt) as (pw: string, salt: Buffer, len: number) => Promise<Buffer>;
export const COOKIE = "qa_session";
const SESSION_DAYS = 60;

export type Me = {
  id: string; name: string; email: string | null; kind: "ADULT" | "CHILD";
  role: "PARENT" | "CHILD" | null; familyId: string | null; lang: "en" | "uz" | "ru";
};

export async function hashSecret(secret: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scrypt(secret, salt, 64);
  return `scrypt$${salt.toString("base64")}$${key.toString("base64")}`;
}

export async function verifySecret(secret: string, stored: string | null): Promise<boolean> {
  if (!stored) return false;
  const [alg, s, k] = stored.split("$");
  if (alg !== "scrypt" || !s || !k) return false;
  const want = Buffer.from(k, "base64");
  const got = await scrypt(secret, Buffer.from(s, "base64"), want.length);
  return got.length === want.length && timingSafeEqual(got, want);
}

const sha = (t: string) => createHash("sha256").update(t).digest("hex");

export async function startSession(userId: string) {
  const token = randomBytes(32).toString("base64url");
  const expires = new Date(Date.now() + SESSION_DAYS * 864e5);
  await db()`insert into sessions (token_hash, user_id, expires_at) values (${sha(token)}, ${userId}, ${expires})`;
  cookies().set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", expires });
}

export async function endSession() {
  const t = cookies().get(COOKIE)?.value;
  if (t) await db()`delete from sessions where token_hash = ${sha(t)}`;
  cookies().delete(COOKIE);
}

export async function currentUser(): Promise<Me | null> {
  const t = cookies().get(COOKIE)?.value;
  if (!t) return null;
  const rows = await db()<Me[]>`
    select u.id, u.name, u.email, u.kind, u.role, u.family_id as "familyId", u.lang
    from sessions s join users u on u.id = s.user_id
    where s.token_hash = ${sha(t)} and s.expires_at > now()`;
  return rows[0] ?? null;
}

/** At most `max` failed attempts per key in 15 minutes. */
export async function throttled(key: string, max = 8): Promise<boolean> {
  const [r] = await db()<{ n: number }[]>`select count(*)::int as n from login_attempts where key = ${key} and at > now() - interval '15 minutes'`;
  return r.n >= max;
}
export async function recordFailure(key: string) {
  await db()`insert into login_attempts (key) values (${key})`;
  await db()`delete from login_attempts where at < now() - interval '1 day'`;
}

/** Family join codes: 8 characters, no look-alike letters. */
export function newJoinCode() {
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const b = randomBytes(8);
  return Array.from(b, (x) => A[x % A.length]).join("");
}
