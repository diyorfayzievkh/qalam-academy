"use client";

import Link from "next/link";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { HIFZ, HIFZ_GROUPS, type HifzItem } from "@/content/hifz";
import { useHifz } from "@/lib/use-hifz";

type Filter = "all" | "learning" | "memorized" | "due";

export default function HifzPage() {
  const h = useHifz();
  const [filter, setFilter] = useState<Filter>("all");

  const memorized = HIFZ.filter((x) => h.get(x.id).status === "memorized");
  const ayahsMemorized = memorized.reduce((a, x) => a + x.ayahs, 0);
  const due = HIFZ.filter((x) => h.isDue(x.id));
  const started = (x: HifzItem) => h.get(x.id).status === "learning" && h.get(x.id).known.length > 0;

  const show = (x: HifzItem) =>
    filter === "all" ||
    (filter === "memorized" && h.get(x.id).status === "memorized") ||
    (filter === "learning" && started(x)) ||
    (filter === "due" && h.isDue(x.id));

  return (
    <>
      <PageHeader eyebrow="Hifz · الحفظ" title="Memorise the Quran"
        sub="Learn one sūrah at a time, ayah by ayah, with audio. When you know it, mark it memorised, and it comes back for review before it fades." />
      <Page>
        <section className="grid grid-cols-3 gap-3">
          {[
            { n: memorized.length, l: "sūrahs memorised" },
            { n: ayahsMemorized, l: "ayahs memorised" },
            { n: due.length, l: "due for review today" },
          ].map((s) => (
            <div key={s.l} className="card flex flex-col !p-4">
              <b className="font-display text-[1.8rem] leading-none tabular-nums text-emerald">{h.ready ? s.n : "–"}</b>
              <span className="text-[0.82rem] font-bold text-fg-muted">{s.l}</span>
            </div>
          ))}
        </section>

        {due.length > 0 && (
          <section className="card flex flex-col gap-2.5 border-gold-bright">
            <span className="eyebrow">Review today</span>
            <p className="text-fg-muted">Recite these from memory, then rate how it went. Regular review is what keeps hifz strong.</p>
            <div className="flex flex-wrap gap-2">
              {due.map((x) => <Link key={x.id} href={`/hifz/${x.id}?mode=review`} className="btn btn-gold !px-3.5 !py-2 text-[0.9rem]">{x.name}</Link>)}
            </div>
          </section>
        )}

        <div className="seg flex-wrap self-start" role="group" aria-label="Show">
          {([["all", "All"], ["learning", "In progress"], ["memorized", "Memorised"], ["due", "Due"]] as [Filter, string][]).map(([f, l]) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{l}</button>
          ))}
        </div>

        {HIFZ_GROUPS.map((g) => {
          const items = HIFZ.filter((x) => x.group === g && show(x));
          if (!items.length) return null;
          return (
            <section key={g} className="flex flex-col gap-2.5">
              <h2 className="text-[1.25rem]">{g}</h2>
              <ol className="grid gap-2.5 md:grid-cols-2">
                {items.map((x) => {
                  const st = h.get(x.id);
                  const pct = st.status === "memorized" ? 100 : Math.round((st.known.length / x.ayahs) * 100);
                  const chip = h.isDue(x.id) ? <span className="chip chip-wajib">Review due</span>
                    : st.status === "memorized" ? <span className="chip chip-fard">Memorised ✓</span>
                    : st.known.length ? <span className="chip">{st.known.length}/{x.ayahs} ayahs</span> : null;
                  return (
                    <li key={x.id}>
                      <Link href={`/hifz/${x.id}`} className="flex items-center gap-3.5 rounded-card border border-border bg-bg-surface p-3.5 transition hover:border-emerald">
                        <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-emerald-soft text-[0.85rem] font-extrabold tabular-nums text-emerald">{x.surah}</span>
                        <span className="flex min-w-0 flex-1 flex-col gap-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <b className="font-display text-[1.05rem] font-semibold">{x.name}</b>{chip}
                          </span>
                          <span className="text-[0.85rem] text-fg-muted">{x.meaning} · {x.ayahs} ayah{x.ayahs > 1 ? "s" : ""}</span>
                          <span className="progress !h-1.5"><i style={{ width: `${pct}%` }} /></span>
                        </span>
                        <span lang="ar" className="font-arabic text-[1.4rem] leading-none text-gold">{x.arabic}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </Page>
    </>
  );
}
