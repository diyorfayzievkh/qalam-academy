"use client";

import { MIZAN_PICTURES } from "@/content/mizan-pictures";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { MIZAN, MYTHS, type MizanCard, type MizanCategory, type MizanTime } from "@/content/mizan";

const CATS: (MizanCategory | "All")[] = ["All", "Dhikr", "Akhlaq", "Duas", "Surahs"];
const TIMES: (MizanTime | "Any")[] = ["Any", "Morning", "Evening", "After prayer", "Before sleep", "Friday", "Ramadan"];
const KEY = "iman-mizan-v1";

// The routine and counters are private: stored only on this device, never scored.
type Store = { routine: string[]; counts: Record<string, number>; day: string };
const today = () => new Date().toISOString().slice(0, 10);

function useMizanStore() {
  const [s, setS] = useState<Store>({ routine: [], counts: {}, day: today() });
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const v = JSON.parse(raw) as Store;
        setS(v.day === today() ? v : { ...v, counts: {}, day: today() });
      }
    } catch {}
  }, []);
  const save = (n: Store) => { setS(n); try { localStorage.setItem(KEY, JSON.stringify(n)); } catch {} };
  return {
    ...s,
    toggleRoutine: (id: string) => save({ ...s, routine: s.routine.includes(id) ? s.routine.filter((x) => x !== id) : [...s.routine, id] }),
    tap: (id: string) => save({ ...s, counts: { ...s.counts, [id]: (s.counts[id] ?? 0) + 1 } }),
    resetCount: (id: string) => save({ ...s, counts: { ...s.counts, [id]: 0 } }),
  };
}

function ScaleIcon({ weight }: { weight: MizanCard["weight"] }) {
  const tilt = weight === "Heavy on the scale" || weight === "Outweighs" ? 14 : weight === "Fills the scale" ? 10 : 6;
  return (
    <svg viewBox="0 0 48 40" width="44" height="36" aria-hidden="true" className="flex-none">
      <path d="M24 6v28M16 36h16" stroke="rgb(var(--ink-soft))" strokeWidth={2} strokeLinecap="round" />
      <g className="origin-[24px_8px] transition-transform duration-700 motion-safe:animate-none" style={{ transform: `rotate(${-tilt}deg)` }}>
        <path d="M6 8h36" stroke="rgb(var(--gold))" strokeWidth={2.2} strokeLinecap="round" />
        <path d="M6 8l-4 10h8zM42 8l-4 10h8z" fill="none" stroke="rgb(var(--gold))" strokeWidth={1.6} strokeLinejoin="round" />
        <path d="M1 18a5 3 0 0 0 10 0z" fill="rgb(var(--emerald))" />
        <path d="M37 18a5 3 0 0 0 10 0z" fill="rgb(var(--gold-bright))" />
      </g>
    </svg>
  );
}

function Card({ c, store }: { c: MizanCard; store: ReturnType<typeof useMizanStore> }) {
  const [open, setOpen] = useState(false);
  const inRoutine = store.routine.includes(c.id);
  const n = store.counts[c.id] ?? 0;
  return (
    <article className="flex min-w-0 flex-col gap-3 rounded-card border border-border bg-bg-surface p-[18px]">
      <div className="flex items-start gap-3">
        <ScaleIcon weight={c.weight} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            <span className="chip chip-wajib">{c.weight}</span>
            <span className="chip">{c.category}</span>
          </div>
          <h3 className="mt-1.5 text-[1.1rem]">{c.title}</h3>
        </div>
      </div>
      {c.ar && <p lang="ar" className="arabic !text-[1.45rem]">{c.ar}</p>}
      {c.tr && <p className="font-semibold italic text-emerald">{c.tr}</p>}
      {c.meaning && <p className="text-fg-muted">{c.meaning}</p>}
      <p className="rounded-xl bg-bg-inset px-3.5 py-2.5"><b>Reward:</b> {c.reward}</p>
      {MIZAN_PICTURES[c.id] && <p className="rounded-xl border border-gold-bright/40 bg-gold-bright/10 px-3.5 py-2.5 text-[0.95rem]"><b className="text-gold">Picture it:</b> {MIZAN_PICTURES[c.id]}</p>}
      <p className="text-[0.82rem] font-bold text-fg-muted">{c.source} · {c.grade} · {c.times.join(", ")}</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={`btn ${inRoutine ? "btn-gold" : "btn-ghost"} !px-3.5 !py-2 text-[0.88rem]`} aria-pressed={inRoutine}
          onClick={() => store.toggleRoutine(c.id)}>{inRoutine ? "In my routine ✓" : "Add to my routine"}</button>
        {c.count && <button type="button" className="btn btn-ghost !px-3.5 !py-2 text-[0.88rem]" aria-expanded={open} onClick={() => setOpen(!open)}>Counter</button>}
        {c.link && <Link href={c.link} className="btn btn-ghost !px-3.5 !py-2 text-[0.88rem]">Learn more</Link>}
      </div>
      {open && c.count && (
        <div className="flex flex-wrap items-center gap-3 rounded-xl bg-emerald-soft p-3">
          <button type="button" onClick={() => store.tap(c.id)} aria-label="Count one"
            className="grid h-20 w-20 place-items-center rounded-full bg-emerald font-display text-2xl tabular-nums text-bg-surface active:scale-95">{n}</button>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-emerald">{n >= c.count ? "Target reached, mā shāʾ Allāh" : `Target: ${c.count}`}</span>
            <span className="text-[0.82rem] text-fg-muted">Private and never scored. Resets each day.</span>
            <button type="button" className="self-start text-[0.85rem] font-bold text-fg-muted underline" onClick={() => store.resetCount(c.id)}>Reset</button>
          </div>
        </div>
      )}
    </article>
  );
}

export default function MizanPage() {
  const store = useMizanStore();
  const [cat, setCat] = useState<MizanCategory | "All">("All");
  const [time, setTime] = useState<MizanTime | "Any">("Any");
  const [mine, setMine] = useState(false);

  const list = useMemo(() => MIZAN.filter((c) =>
    (cat === "All" || c.category === cat) &&
    (time === "Any" || c.times.includes(time)) &&
    (!mine || store.routine.includes(c.id))), [cat, time, mine, store.routine]);

  return (
    <>
      <PageHeader eyebrow="Mizan · الميزان" title="Heavy on the scale"
        sub="Dhikr, character, duas and surahs that authentic hadiths describe as heaviest on the scale or carrying the greatest rewards. Every card shows its source." />
      <Page>
        <section className="card flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Category">
            {CATS.map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
                className={`rounded-full border px-3.5 py-1.5 text-[0.88rem] font-bold ${cat === c ? "border-emerald bg-emerald text-bg-surface" : "border-border text-fg-muted"}`}>{c}</button>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <label className="field" htmlFor="when">When
              <select id="when" className="input" value={time} onChange={(e) => setTime(e.target.value as MizanTime | "Any")}>
                {TIMES.map((t) => <option key={t} value={t}>{t === "Any" ? "Any time of day" : t}</option>)}
              </select>
            </label>
            <div className="seg" role="group" aria-label="Show">
              <button type="button" aria-pressed={!mine} onClick={() => setMine(false)}>All cards</button>
              <button type="button" aria-pressed={mine} onClick={() => setMine(true)}>My daily Mizan ({store.routine.length})</button>
            </div>
          </div>
        </section>

        {list.length ? (
          <div className="grid gap-3.5 md:grid-cols-2">{list.map((c) => <Card key={c.id} c={c} store={store} />)}</div>
        ) : (
          <p className="card text-fg-muted">{mine ? "Your routine is empty. Tap “Add to my routine” on any card to build your daily Mizan." : "No cards match these filters."}</p>
        )}

        <section className="flex flex-col gap-3">
          <div>
            <span className="eyebrow">Myth check</span>
            <h2 className="text-[1.3rem]">Popular claims, checked</h2>
            <p className="mt-1 max-w-[65ch] text-fg-muted">Some well-known sayings have weak or no basis. Here is what scholars say, and the authentic alternative.</p>
          </div>
          {MYTHS.map((m) => (
            <article key={m.claim} className="card flex flex-col gap-2">
              <p className="font-display text-[1.05rem] font-semibold">{m.claim}</p>
              <p><b className="text-gold">What scholars say:</b> {m.scholars}</p>
              <p className="rounded-xl bg-emerald-soft px-3.5 py-2.5"><b className="text-emerald">Authentic instead:</b> {m.instead}
                {m.insteadLink && <> <Link href={m.insteadLink} className="font-bold text-emerald underline">Read</Link></>}</p>
            </article>
          ))}
        </section>
        <p className="text-[0.85rem] text-fg-muted">All references must be verified by a qualified scholar before public release.</p>
      </Page>
    </>
  );
}
