import type { Method } from "@/content/places";

// Astronomical prayer-time calculation (same formulas as praytimes.org).
// Asr always uses the Hanafi shadow factor of 2. Accuracy is about ±1–2 min;
// official local timetables take precedence.

const d2r = (d: number) => (d * Math.PI) / 180;
const r2d = (r: number) => (r * 180) / Math.PI;
const wrap = (a: number, b: number) => {
  const x = a - b * Math.floor(a / b);
  return x < 0 ? x + b : x;
};

function julianDay(y: number, m: number, d: number) {
  if (m <= 2) { y--; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

function sunPosition(jd: number) {
  const D = jd - 2451545;
  const g = wrap(357.529 + 0.98560028 * D, 360);
  const q = wrap(280.459 + 0.98564736 * D, 360);
  const L = wrap(q + 1.915 * Math.sin(d2r(g)) + 0.02 * Math.sin(d2r(2 * g)), 360);
  const e = 23.439 - 0.00000036 * D;
  const RA = wrap(r2d(Math.atan2(Math.cos(d2r(e)) * Math.sin(d2r(L)), Math.cos(d2r(L)))) / 15, 24);
  let eqt = q / 15 - RA;
  if (eqt > 12) eqt -= 24;
  if (eqt < -12) eqt += 24;
  return { decl: r2d(Math.asin(Math.sin(d2r(e)) * Math.sin(d2r(L)))), eqt };
}

export type PrayerKey = "fajr" | "sunrise" | "dhuhr" | "asr" | "maghrib" | "isha";
export type DayTimes = Record<PrayerKey, Date>;

export const PRAYER_ORDER: { key: PrayerKey; name: string }[] = [
  { key: "fajr", name: "Fajr" },
  { key: "sunrise", name: "Sunrise" },
  { key: "dhuhr", name: "Dhuhr" },
  { key: "asr", name: "Asr" },
  { key: "maghrib", name: "Maghrib" },
  { key: "isha", name: "Isha" },
];

/** Prayer times for a calendar date (y, m, d) at a location, as UTC Date objects. */
export function calcTimes(y: number, m: number, d: number, lat: number, lng: number, method: Method): DayTimes {
  const jd0 = julianDay(y, m, d);
  const noonAt = (t: number) => 12 - lng / 15 - sunPosition(jd0 + t / 24).eqt;
  const hourAngle = (alt: number, t: number) => {
    const s = sunPosition(jd0 + t / 24);
    const c = (Math.sin(d2r(alt)) - Math.sin(d2r(lat)) * Math.sin(d2r(s.decl))) / (Math.cos(d2r(lat)) * Math.cos(d2r(s.decl)));
    return r2d(Math.acos(Math.max(-1, Math.min(1, c)))) / 15;
  };
  // Hanafi Asr: shadow = 2 × object length + midday shadow.
  const asrAltitude = (t: number) => {
    const s = sunPosition(jd0 + t / 24);
    return r2d(Math.atan(1 / (2 + Math.tan(d2r(Math.abs(lat - s.decl))))));
  };

  let noon = noonAt(12 - lng / 15);
  noon = noonAt(noon);
  const refine = (f: (t: number) => number) => f(f(noon));

  const hours: Record<PrayerKey, number> = {
    fajr: refine((t) => noonAt(t) - hourAngle(-method.fajr, t)),
    sunrise: refine((t) => noonAt(t) - hourAngle(-0.833, t)),
    dhuhr: noon + 1 / 60,
    asr: refine((t) => noonAt(t) + hourAngle(asrAltitude(t), t)),
    maghrib: refine((t) => noonAt(t) + hourAngle(-0.833, t)),
    isha: 0,
  };
  hours.isha = typeof method.isha === "number"
    ? refine((t) => noonAt(t) + hourAngle(-(method.isha as number), t))
    : hours.maghrib + method.isha.minutesAfterMaghrib / 60;

  const base = Date.UTC(y, m - 1, d);
  return Object.fromEntries(Object.entries(hours).map(([k, h]) => [k, new Date(base + h * 3600e3)])) as DayTimes;
}

/** Calendar date [y, m, d] as seen in a time zone. */
export function localYMD(date: Date, tz: string): [number, number, number] {
  const s = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  const [y, m, d] = s.split("-").map(Number);
  return [y, m, d];
}

export function formatTime(date: Date, tz: string) {
  return new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit" }).format(date);
}

/** Today's times plus the next upcoming prayer (sunrise is skipped). */
export function todayWithNext(lat: number, lng: number, tz: string, method: Method, now = new Date()) {
  const [y, m, d] = localYMD(now, tz);
  const times = calcTimes(y, m, d, lat, lng, method);
  const upcoming = PRAYER_ORDER.find((p) => p.key !== "sunrise" && times[p.key] > now);
  if (upcoming) return { times, next: upcoming, nextAt: times[upcoming.key] };
  const [y2, m2, d2] = localYMD(new Date(now.getTime() + 864e5), tz);
  return { times, next: PRAYER_ORDER[0], nextAt: calcTimes(y2, m2, d2, lat, lng, method).fajr };
}

export function countdown(ms: number) {
  const mins = Math.max(0, Math.round(ms / 60000));
  const h = Math.floor(mins / 60);
  return h ? `in ${h} h ${mins % 60} min` : `in ${mins} min`;
}
