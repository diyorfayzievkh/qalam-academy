import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { db } from "@/lib/db";
import { pushConfigured, sendTo, type SubRow } from "@/lib/push";
import { MSG } from "@/lib/push-messages";

export const dynamic = "force-dynamic";

/** Send a test notification to this device only. */
export async function POST(req: Request) {
  return handle(async () => {
    if (!pushConfigured()) return fail(503, "Notifications are not set up yet.");
    const b = await body(req, z.object({ endpoint: z.string().url().max(1000) })); if (!b) return fail(400, "Invalid request.");
    const [sub] = await db()<SubRow[]>`select id, endpoint, p256dh, auth, lang from push_subs where endpoint = ${b.endpoint}`;
    if (!sub) return fail(404, "Turn notifications on first.");
    return (await sendTo(sub, MSG.test(sub.lang))) ? ok() : fail(502, "The notification could not be delivered.");
  });
}
