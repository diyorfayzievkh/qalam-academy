"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { POINTS, useProgress } from "@/components/progress";
import { RecitationBlock } from "@/components/recitation";
import {
  MISSED_REASONS, QUEST_DAYS, QUEST_THEMES, QURAN_PAGES, RAMADAN_DUAS, RAMADAN_HISTORY, RAMADAN_SURAHS, TRACK_PRAYERS,
} from "@/content/ramadan";
import { useNow } from "@/lib/use-location";

/* ---------- Hijri calendar (Umm al-Qura, via the browser) ---------- */
type Hijri = { y: number; m: number; d: number };
function hijriOf(date: Date): Hijri | null {
  try {
    const parts = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric", timeZone: "UTC" }).formatToParts(date);
    const get = (t: string) => parseInt(parts.find((p) => p.type === t)?.value ?? "", 10);
    const h = { y: get("year"), m: get("month"), d: get("day") };
    return Number.isFinite(h.y + h.m + h.d) ? h : null;
  } catch { return null; }
}
/** Current Ramadan day, or the next Ramadan's estimated start. Moon sighting can shift it by a day. */
function ramadanStatus(now: Date) {
  const base = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 12);
  const h = hijriOf(new Date(base));
  if (!h) return null;
  if (h.m === 9) return { inRamadan: true as const, year: h.y, day: h.d };
  for (let i = 1; i < 400; i++) {
    const d = new Date(base + i * 864e5);
    const x = hijriOf(d);
    if (x && x.m === 9 && x.d === 1) return { inRamadan: false as const, year: x.y, start: d, daysLeft: i };
  }
  return null;
}

/* ---------- Private tracker store (this device only, never scored) ---------- */
type DayLog = {
  fast: "yes" | "missed" | null; reason?: string; madeUp?: boolean;
  prayers: boolean[]; taraweeh: "masjid" | "home" | "skipped" | null;
  pages: number; dhikr: number; sadaqah: string; reflection: string;
};
type TrackerStore = { khatm: number; days: Record<number, DayLog> };
const emptyDay = (): DayLog => ({ fast: null, prayers: [false, false, false, false, false], taraweeh: null, pages: 0, dhikr: 0, sadaqah: "", reflection: "" });

function useTracker(year: number) {
  const key = `iman-ramadan-${year}`;
  const [s, setS] = useState<TrackerStore>({ khatm: 1, days: {} });
  useEffect(() => {
    try { const raw = localStorage.getItem(key); setS(raw ? JSON.parse(raw) : { khatm: 1, days: {} }); } catch {}
  }, [key]);
  const save = (n: TrackerStore) => { setS(n); try { localStorage.setItem(key, JSON.stringify(n)); } catch {} };
  const day = (d: number) => ({ ...emptyDay(), ...(s.days[d] ?? {}) });
  const setDay = (d: number, patch: Partial<DayLog>) => save({ ...s, days: { ...s.days, [d]: { ...day(d), ...patch } } });
  return { s, day, setDay, setKhatm: (k: number) => save({ ...s, khatm: k }) };
}

type Tab = "tracker" | "quest" | "recite" | "history";

export default function RamadanPage() {
  const now = useNow(60000);
  const status = now ? ramadanStatus(now) : null;
  const [tab, setTab] = useState<Tab>("tracker");
  const year = status?.year ?? 1448;

  let banner = "Loading the Hijri calendar…";
  if (status?.inRamadan) banner = `Day ${status.day} of Ramadan ${status.year} AH. Ramadan Mubarak!`;
  else if (status) banner = `Ramadan ${status.year} AH is expected to begin around ${new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(status.start)}: ${status.daysLeft} days to go. The exact date depends on moon sighting.`;
  else if (now) banner = "Ramadan dates are not available in this browser.";

  return (
    <>
      <PageHeader eyebrow="Seasonal · رمضان" title="Ramadan Quest" sub={banner} />
      <Page>
        <div className="seg flex-wrap self-start" role="tablist" aria-label="Ramadan Quest sections">
          {([["tracker", "Daily tracker"], ["quest", "30-day Quest"], ["recite", "Duas & surahs"], ["history", "History"]] as [Tab, string][]).map(([t, l]) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} aria-pressed={tab === t} onClick={() => setTab(t)}>{l}</button>
          ))}
        </div>
        {tab === "tracker" && <Tracker year={year} today={status?.inRamadan ? status.day : 1} />}
        {tab === "quest" && <Quest current={status?.inRamadan ? status.day : null} />}
        {tab === "recite" && <Recite />}
        {tab === "history" && <History />}
      </Page>
    </>
  );
}

function Tracker({ year, today }: { year: number; today: number }) {
  const { s, day, setDay, setKhatm } = useTracker(year);
  const [sel, setSel] = useState(today);
  useEffect(() => setSel(today), [today]);
  const d = day(sel);

  const logs = Object.entries(s.days).map(([k, v]) => [Number(k), { ...emptyDay(), ...v }] as const);
  const fasted = logs.filter(([, v]) => v.fast === "yes").length;
  const missed = logs.filter(([, v]) => v.fast === "missed");
  const qazaLeft = missed.filter(([, v]) => !v.madeUp).length;
  const pages = logs.reduce((a, [, v]) => a + (v.pages || 0), 0);
  const goal = QURAN_PAGES * s.khatm;
  const daysLeft = Math.max(1, 30 - sel + 1);
  const perDay = Math.max(0, Math.ceil((goal - pages) / daysLeft));

  return (
    <>
      <p className="text-[0.92rem] text-fg-muted">Your tracker is private. It stays on this device, is never shared, and earns no points: worship is between you and Allah.</p>

      <section className="card flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[1.3rem]">Day {sel}</h2>
          <span className="text-[0.9rem] font-bold text-fg-muted">{sel >= 21 ? "Last ten nights · seek Laylat al-Qadr" : QUEST_THEMES.find((t) => sel >= t.from && sel <= t.to)?.name}</span>
        </div>
        <div className="grid grid-cols-10 gap-1.5" role="group" aria-label="Choose a day">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => {
            const v = s.days[n];
            const tone = v?.fast === "yes" ? "bg-emerald text-bg-surface" : v?.fast === "missed" ? "bg-danger-soft text-danger" : "bg-bg-inset text-fg-muted";
            return (
              <button key={n} type="button" onClick={() => setSel(n)} aria-pressed={n === sel} aria-label={`Day ${n}`}
                className={`aspect-square rounded-lg text-[0.82rem] font-extrabold tabular-nums ${tone} ${n === sel ? "ring-2 ring-gold-bright ring-offset-2 ring-offset-bg-surface" : ""} ${n >= 21 && n % 2 ? "underline decoration-gold-bright decoration-2 underline-offset-2" : ""}`}>{n}</button>
            );
          })}
        </div>
        <p className="text-[0.8rem] text-fg-muted">Underlined days are the odd nights of the last ten.</p>
      </section>

      <section className="card flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.1rem]">Fast</h3>
          <div className="seg self-start">
            <button type="button" aria-pressed={d.fast === "yes"} onClick={() => setDay(sel, { fast: "yes", reason: undefined })}>Fasted</button>
            <button type="button" aria-pressed={d.fast === "missed"} onClick={() => setDay(sel, { fast: "missed" })}>Missed</button>
          </div>
          {d.fast === "missed" && (
            <label className="field" htmlFor="reason">Reason (private)
              <select id="reason" className="input" value={d.reason ?? ""} onChange={(e) => setDay(sel, { reason: e.target.value })}>
                <option value="">Choose…</option>
                {MISSED_REASONS.map((r) => <option key={r}>{r}</option>)}
              </select>
            </label>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[1.1rem]">Prayers</h3>
          <div className="flex flex-wrap gap-2">
            {TRACK_PRAYERS.map((p, i) => (
              <label key={p} className={`flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 font-bold ${d.prayers[i] ? "border-emerald bg-emerald-soft text-emerald" : "border-border text-fg-muted"}`}>
                <input type="checkbox" className="accent-[rgb(var(--emerald))]" checked={d.prayers[i]}
                  onChange={(e) => { const pr = [...d.prayers]; pr[i] = e.target.checked; setDay(sel, { prayers: pr }); }} />{p}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[1.1rem]">Taraweeh</h3>
          <div className="seg self-start">
            {(["masjid", "home", "skipped"] as const).map((t) => (
              <button key={t} type="button" aria-pressed={d.taraweeh === t} onClick={() => setDay(sel, { taraweeh: t })}>{t === "masjid" ? "At the masjid" : t === "home" ? "At home" : "Skipped"}</button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <label className="field" htmlFor="pages">Quran pages read
            <input id="pages" type="number" min={0} max={604} className="input w-28" value={d.pages || ""} placeholder="0"
              onChange={(e) => setDay(sel, { pages: Math.max(0, Math.min(604, parseInt(e.target.value || "0", 10))) })} />
          </label>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setDay(sel, { dhikr: d.dhikr + 1 })} aria-label="Count one dhikr"
              className="grid h-16 w-16 place-items-center rounded-full bg-emerald font-display text-xl tabular-nums text-bg-surface active:scale-95">{d.dhikr}</button>
            <div className="flex flex-col text-[0.85rem]">
              <b>Dhikr counter</b>
              <button type="button" className="self-start font-bold text-fg-muted underline" onClick={() => setDay(sel, { dhikr: 0 })}>Reset</button>
            </div>
          </div>
        </div>

        <label className="field" htmlFor="sadaqah">Good deed or sadaqah today
          <input id="sadaqah" className="input" value={d.sadaqah} placeholder="Helped with iftar, gave to a neighbour…" onChange={(e) => setDay(sel, { sadaqah: e.target.value })} />
        </label>
        <label className="field" htmlFor="reflection">One line of reflection
          <textarea id="reflection" rows={2} className="input" value={d.reflection} placeholder="What did I learn or feel today?" onChange={(e) => setDay(sel, { reflection: e.target.value })} />
        </label>
      </section>

      <div className="grid gap-3.5 md:grid-cols-2">
        <section className="card flex flex-col gap-2.5">
          <h3 className="text-[1.1rem]">Quran khatm planner</h3>
          <label className="field" htmlFor="khatm">Goal
            <select id="khatm" className="input" value={s.khatm} onChange={(e) => setKhatm(Number(e.target.value))}>
              <option value={0.5}>Half the Quran</option><option value={1}>One khatm</option><option value={2}>Two khatms</option><option value={3}>Three khatms</option>
            </select>
          </label>
          <div className="progress"><i style={{ width: `${Math.min(100, (pages / goal) * 100)}%` }} /></div>
          <p className="tabular-nums"><b>{pages}</b> of {goal} pages. {pages >= goal ? "Goal reached, mā shāʾ Allāh!" : `Read about ${perDay} pages a day from day ${sel} to finish.`}</p>
        </section>
        <section className="card flex flex-col gap-2.5">
          <h3 className="text-[1.1rem]">Summary and make-up fasts</h3>
          <p className="tabular-nums">Fasted <b>{fasted}</b> days · missed <b>{missed.length}</b></p>
          {missed.length ? (
            <ul className="flex flex-col gap-1.5">
              {missed.map(([n, v]) => (
                <li key={n} className="flex flex-wrap items-center gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!v.madeUp} onChange={(e) => setDay(n, { madeUp: e.target.checked })} />
                    Day {n}{v.reason ? ` (${v.reason})` : ""}
                  </label>
                  <span className={`chip ${v.madeUp ? "chip-fard" : ""}`}>{v.madeUp ? "Made up" : "To make up"}</span>
                </li>
              ))}
            </ul>
          ) : <p className="text-fg-muted">No missed fasts logged.</p>}
          {qazaLeft > 0 && <p className="font-bold text-gold">{qazaLeft} fast{qazaLeft > 1 ? "s" : ""} to make up after Ramadan.</p>}
        </section>
      </div>
      <section className="card flex flex-col gap-1.5">
        <h3 className="text-[1.1rem]">Zakāt al-Fiṭr reminder</h3>
        <p>Pay for yourself and every dependant before the Eid prayer (Bukhari 1503). In Uzbekistan the amount per person is announced each year by the Muslim Board of Uzbekistan; elsewhere, check with your local masjid.</p>
      </section>
    </>
  );
}

function Quest({ current }: { current: number | null }) {
  const { studied, markStudied } = useProgress();
  const done = QUEST_DAYS.filter((q) => studied[`quest:${q.day}`]).length;
  return (
    <>
      <section className="card flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[1.3rem]">{done} of 30 days complete</h2>
          <span className="font-bold text-fg-muted">+{POINTS.questDay} points per day</span>
        </div>
        <div className="progress"><i style={{ width: `${(done / 30) * 100}%` }} /></div>
        <p className="text-[0.9rem] text-fg-muted">One short lesson a day. You can read ahead to prepare before Ramadan begins.</p>
      </section>
      {QUEST_THEMES.map((t) => (
        <section key={t.name} className="flex flex-col gap-2.5">
          <h2 className="text-[1.2rem]">Days {t.from}–{t.to}: {t.name}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {QUEST_DAYS.filter((q) => q.day >= t.from && q.day <= t.to).map((q) => {
              const isDone = !!studied[`quest:${q.day}`];
              return (
                <article key={q.day} className={`flex flex-col gap-2 rounded-card border bg-bg-surface p-4 ${current === q.day ? "border-gold-bright" : "border-border"}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`grid h-8 w-8 flex-none place-items-center rounded-full text-[0.85rem] font-extrabold tabular-nums ${isDone ? "bg-emerald text-bg-surface" : "bg-gold-soft text-gold"}`}>{isDone ? "✓" : q.day}</span>
                    <h3 className="text-[1.02rem]">{q.title}</h3>
                    {current === q.day && <span className="chip chip-wajib ml-auto">Today</span>}
                  </div>
                  <p>{q.text}</p>
                  <p className="text-[0.82rem] font-bold text-fg-muted">{q.source}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <button type="button" className={`btn ${isDone ? "btn-ghost" : "btn-gold"} !px-3.5 !py-2 text-[0.88rem]`} disabled={isDone}
                      onClick={() => markStudied(`quest:${q.day}`, `Ramadan day ${q.day}`, POINTS.questDay)}>{isDone ? "Complete ✓" : "Mark complete"}</button>
                    {q.link && <Link href={q.link} className="btn btn-ghost !px-3.5 !py-2 text-[0.88rem]">Go deeper</Link>}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}

function Recite() {
  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.3rem]">Ramadan duas</h2>
        <p className="max-w-[65ch] text-fg-muted">Each duʿāʾ is labelled: <b>Hadith-based</b>, <b>Customary</b> (widely practised wording without a strong hadith), or <b>Madhab-specific</b>.</p>
        {RAMADAN_DUAS.map((d) => (
          <article key={d.occasion} className="card flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[1.1rem]">{d.occasion}</h3>
              <span className={`chip ${d.label === "Hadith-based" ? "chip-fard" : d.label === "Madhab-specific" ? "chip-wajib" : ""}`}>{d.label}</span>
            </div>
            <RecitationBlock r={d.r} />
            {d.note && <p className="text-[0.92rem] text-fg-muted">{d.note}</p>}
            <p className="text-[0.82rem] font-bold text-gold">{d.source}</p>
          </article>
        ))}
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.3rem]">Surahs and verses of Ramadan</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {RAMADAN_SURAHS.map((s) => (
            <article key={s.name} className="card flex flex-col gap-1.5">
              <h3 className="text-[1.05rem]">{s.name}</h3>
              <span className="chip self-start">{s.when}</span>
              <p>{s.why}</p>
              {s.link && <Link href={s.link} className="font-bold text-emerald underline">Read with meaning</Link>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function History() {
  return (
    <section className="card flex flex-col gap-4">
      <h2 className="text-[1.3rem]">The story of Ramadan</h2>
      <ol className="relative flex flex-col gap-4 border-l-2 border-gold-bright/50 pl-5">
        {RAMADAN_HISTORY.map((h) => (
          <li key={h.when} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
            <b className="font-display text-emerald">{h.when}</b>
            <p className="max-w-[60ch]">{h.event}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
