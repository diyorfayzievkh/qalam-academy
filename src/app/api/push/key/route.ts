export const dynamic = "force-dynamic";

/** The public VAPID key browsers need to subscribe (safe to share). */
export async function GET() {
  const key = process.env.VAPID_PUBLIC_KEY;
  return key ? Response.json({ key }) : Response.json({ error: "not_configured" }, { status: 503 });
}
