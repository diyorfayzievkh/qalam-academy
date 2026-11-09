import { NextResponse } from "next/server";
import { z } from "zod";
import { currentUser, type Me } from "./auth";
import { dbConfigured } from "./db";

export const ok = (data: unknown = { ok: true }) => NextResponse.json(data);
export const fail = (status: number, error: string) => NextResponse.json({ error }, { status });

/** Parse a JSON body against a schema; returns null if invalid. */
export async function body<T extends z.ZodTypeAny>(req: Request, schema: T): Promise<z.infer<T> | null> {
  try { const r = schema.safeParse(await req.json()); return r.success ? r.data : null; } catch { return null; }
}

/** Run a handler, turning a missing database or unexpected error into a clean response. */
export async function handle(fn: () => Promise<Response>): Promise<Response> {
  if (!dbConfigured()) return fail(503, "Accounts are not set up yet.");
  try { return await fn(); } catch (e) { console.error(e); return fail(500, "Something went wrong. Please try again."); }
}

export async function requireUser(): Promise<Me | Response> {
  const me = await currentUser();
  return me ?? fail(401, "Please sign in.");
}
