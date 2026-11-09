import { handle, ok } from "@/lib/api";
import { endSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export async function POST() { return handle(async () => { await endSession(); return ok(); }); }
