import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

const Prefs = z.object({
  story: z.boolean(), study: z.boolean(), studyAt: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  prayers: z.boolean(), streak: z.boolean(), arena: z.boolean(),
});
const S = z.object({
  sub: z.object({ endpoint: z.string().url().startsWith("https://").max(1000), keys: z.object({ p256dh: z.string().max(200), auth: z.string().max(100) }) }),
  prefs: Prefs,
  lang: z.enum(["en", "uz", "ru"]),
  tz: z.string().max(64).refine((tz) => { try { new Intl.DateTimeFormat("en", { timeZone: tz }); return true; } catch { return false; } }),
  lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180), place: z.string().max(80),
  method: z.object({ fajr: z.number().min(10).max(25), isha: z.union([z.number().min(10).max(25), z.object({ minutesAfterMaghrib: z.number().int().min(30).max(180) })]) }),
});

/** Save this device's subscription and reminder choices (guests too). */
export async function POST(req: Request) {
  return handle(async () => {
    const b = await body(req, S); if (!b) return fail(400, "Invalid subscription.");
    const me = await currentUser();
    await db()`
      insert into push_subs (endpoint, p256dh, auth, user_id, lang, tz, lat, lng, place, method, prefs, fails, updated_at)
      values (${b.sub.endpoint}, ${b.sub.keys.p256dh}, ${b.sub.keys.auth}, ${me?.id ?? null}, ${b.lang}, ${b.tz}, ${b.lat}, ${b.lng}, ${b.place},
              ${db().json(b.method)}, ${db().json(b.prefs)}, 0, now())
      on conflict (endpoint) do update set p256dh = excluded.p256dh, auth = excluded.auth, user_id = excluded.user_id, lang = excluded.lang,
        tz = excluded.tz, lat = excluded.lat, lng = excluded.lng, place = excluded.place, method = excluded.method, prefs = excluded.prefs,
        fails = 0, updated_at = now()`;
    return ok();
  });
}

const D = z.object({ endpoint: z.string().url().max(1000) });

/** Stop notifications on this device. */
export async function DELETE(req: Request) {
  return handle(async () => {
    const b = await body(req, D); if (!b) return fail(400, "Invalid request.");
    await db()`delete from push_subs where endpoint = ${b.endpoint}`;
    return ok();
  });
}
