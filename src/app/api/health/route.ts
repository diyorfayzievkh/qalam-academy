import { NextResponse } from "next/server";
import { db, dbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

/** Is the app able to reach its database? Reveals no data. */
export async function GET() {
  if (!dbConfigured()) return NextResponse.json({ db: "not-configured" });
  try {
    await db()`select 1 from users limit 1`;
    return NextResponse.json({ db: "ok" });
  } catch (e) {
    const err = e as { code?: string };
    return NextResponse.json({ db: "error", code: err.code ?? "unknown" }, { status: 503 });
  }
}
