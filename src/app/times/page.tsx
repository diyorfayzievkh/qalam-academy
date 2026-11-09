"use client";

import { Page, PageHeader } from "@/components/app-shell";
import { LocationPicker } from "@/components/location-picker";
import { RAKAH_SUMMARY } from "@/content/prayers";
import { formatTime, PRAYER_ORDER, todayWithNext } from "@/lib/prayer-times";
import { useLocation, useNow } from "@/lib/use-location";

export default function TimesPage() {
  const loc = useLocation();
  const now = useNow(60000);
  const day = now ? todayWithNext(loc.lat, loc.lng, loc.tz, loc.method, now) : null;

  const dateLabel = now ? new Intl.DateTimeFormat("en-GB", { timeZone: loc.tz, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now) : "";
  let hijri = "";
  try { if (now) hijri = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", { timeZone: loc.tz, day: "numeric", month: "long", year: "numeric" }).format(now); } catch {}

  return (
    <>
      <PageHeader eyebrow="Prayer times" title="Today’s prayers"
        sub="Asr is calculated by the Hanafi method: when an object’s shadow is twice its length, plus its midday shadow." />
      <Page>
        <LocationPicker />
        <section className="card flex flex-col gap-2.5">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.3rem]">{loc.name}</h2>
            <span className="text-[0.9rem] font-bold text-fg-muted">{dateLabel}{hijri ? ` · ${hijri}` : ""}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse tabular-nums">
              <thead>
                <tr className="text-left text-[0.75rem] uppercase tracking-[0.1em] text-fg-muted">
                  <th className="border-b border-border px-2 py-3">Prayer</th>
                  <th className="border-b border-border px-2 py-3">Time</th>
                  <th className="border-b border-border px-2 py-3">Rakʿahs (Hanafi)</th>
                </tr>
              </thead>
              <tbody>
                {PRAYER_ORDER.map((p) => {
                  const on = day?.next.key === p.key;
                  return (
                    <tr key={p.key} className={on ? "bg-emerald-soft" : ""}>
                      <td className="border-b border-border px-2 py-3"><b>{p.name}</b>{on && <span className="chip chip-fard ml-2">Next</span>}</td>
                      <td className={`border-b border-border px-2 py-3 font-display text-[1.25rem] ${on ? "text-emerald" : ""}`}>{day ? formatTime(day.times[p.key], loc.tz) : "--:--"}</td>
                      <td className="border-b border-border px-2 py-3 text-fg-muted">{RAKAH_SUMMARY[p.key]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[0.85rem] text-fg-muted">
            S = sunnah, F = farḍ. Times are calculated, not official, and can differ by a few minutes. In Uzbekistan, follow the official calendar of the Muslim Board of Uzbekistan; elsewhere, follow your local masjid.
          </p>
        </section>
      </Page>
    </>
  );
}
