// Sends the scheduled reminders: prayer times, the 8 pm bedtime story, the
// daily 10-minute study nudge and the 7:30 pm streak reminder. Runs every
// minute from pg_cron; each reminder has a window so a late run still sends
// it, and "sent" stops it going twice on the same day.
import webpush from "npm:web-push@3.6.7";
import postgres from "npm:postgres@3.4.5";
import { MSG, type PrayerName, type PushMsg } from "./messages.ts";
import { calcTimes, type Method } from "./prayer.ts";

const sql = postgres(Deno.env.get("SUPABASE_DB_URL")!, { prepare: false, max: 2 });

// Keys live in the Supabase vault, not in function settings.
let secrets: Record<string, string> | null = null;
async function loadSecrets() {
  if (secrets) return secrets;
  const rows = await sql<{ name: string; s: string }[]>`select name, decrypted_secret as s from vault.decrypted_secrets
    where name in ('vapid_public_key', 'vapid_private_key', 'push_tick_secret')`;
  secrets = Object.fromEntries(rows.map((r) => [r.name, r.s]));
  webpush.setVapidDetails("https://qalam-academy-sigma.vercel.app", secrets.vapid_public_key, secrets.vapid_private_key);
  return secrets;
}

type Prefs = { story?: boolean; study?: boolean; studyAt?: string; prayers?: boolean; streak?: boolean };
type Sub = { id: string; endpoint: string; p256dh: string; auth: string; user_id: string | null; lang: string; tz: string;
  lat: number | null; lng: number | null; place: string | null; method: Method | null; prefs: Prefs; sent: Record<string, string> };
type Doc = { days?: Record<string, true>; hifz?: Record<string, { status?: string; nextReview?: string }> };

const WINDOW = 15; // minutes
const PRAYERS: PrayerName[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

function local(now: Date, tz: string) {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(now).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, y: +p.year, m: +p.month, d: +p.day, mins: +p.hour * 60 + +p.minute };
}
const hm = (d: Date, tz: string) => new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(d);
const inWindow = (mins: number, at: number) => mins >= at && mins < at + WINDOW;
const toMins = (s = "17:00") => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
const prevDay = (date: string) => { const d = new Date(date + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - 1); return d.toISOString().slice(0, 10); };

function streak(days: Record<string, true>, today: string) {
  let d = prevDay(today), n = 0;
  while (days[d]) { n++; d = prevDay(d); }
  return n;
}

Deno.serve(async (req) => {
  const sec = await loadSecrets();
  if (!sec.push_tick_secret || req.headers.get("x-tick-secret") !== sec.push_tick_secret) return new Response("forbidden", { status: 403 });
  const now = new Date();
  const subs = await sql<Sub[]>`select id, endpoint, p256dh, auth, user_id, lang, tz, lat, lng, place, method, prefs, sent from qalam.push_subs where fails < 5 limit 20000`;

  // Learning progress for signed-in subscribers who may get a study or streak reminder.
  const ids = [...new Set(subs.filter((s) => s.user_id && (s.prefs.study || s.prefs.streak)).map((s) => s.user_id!))];
  const docs = new Map<string, Doc>();
  if (ids.length) for (const r of await sql<{ user_id: string; data: Doc }[]>`select user_id, data from qalam.progress where user_id = any(${ids}::uuid[])`) docs.set(r.user_id, r.data ?? {});

  let sent = 0;
  await Promise.all(subs.map(async (s) => {
    let L; try { L = local(now, s.tz); } catch { return; }
    const due: [string, PushMsg][] = [];
    const fresh = (k: string) => s.sent?.[k] !== L.date;

    if (s.prefs.prayers && s.lat != null && s.lng != null && s.method) {
      const times = calcTimes(L.y, L.m, L.d, s.lat, s.lng, s.method);
      for (const p of PRAYERS) {
        const t = times[p].getTime(), diff = (now.getTime() - t) / 60000;
        if (diff >= 0 && diff < WINDOW && fresh(`p_${p}`)) due.push([`p_${p}`, MSG.prayer(s.lang, p, hm(times[p], s.tz), s.place ?? undefined)]);
      }
    }
    if (s.prefs.story && inWindow(L.mins, 20 * 60) && fresh("story")) due.push(["story", MSG.story(s.lang)]);
    const doc = s.user_id ? docs.get(s.user_id) ?? {} : {};
    if (s.prefs.study && inWindow(L.mins, toMins(s.prefs.studyAt)) && fresh("study")) {
      const hifzDue = Object.values(doc.hifz ?? {}).filter((h) => h?.status === "memorized" && h.nextReview && h.nextReview <= L.date).length;
      due.push(["study", MSG.study(s.lang, hifzDue)]);
    }
    if (s.prefs.streak && s.user_id && inWindow(L.mins, 19 * 60 + 30) && fresh("streak")) {
      const days = doc.days ?? {};
      const n = streak(days, L.date);
      if (!days[L.date] && n > 0) due.push(["streak", MSG.streak(s.lang, n)]);
      else due.push(["streak", null as never]); // nothing to say today; mark as handled
    }
    if (!due.length) return;

    const done: Record<string, string> = {};
    for (const [key, msg] of due) {
      done[key] = L.date;
      if (!msg) continue;
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(msg), { TTL: 1800, urgency: "high" });
        sent++;
      } catch (e) {
        const code = (e as { statusCode?: number }).statusCode;
        if (code === 404 || code === 410) { await sql`delete from qalam.push_subs where id = ${s.id}`; return; }
        await sql`update qalam.push_subs set fails = fails + 1 where id = ${s.id}`;
      }
    }
    await sql`update qalam.push_subs set sent = sent || ${sql.json(done)} where id = ${s.id}`;
  }));
  return Response.json({ ok: true, subs: subs.length, sent });
});
