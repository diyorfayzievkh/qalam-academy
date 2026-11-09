"use client";

import Link from "next/link";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { BEDTIME, BEDTIME_CATS, bedtimeMinutes, type BedtimeCat } from "@/content/bedtime";

export default function StoriesPage() {
  const { studied } = useProgress();
  const [cat, setCat] = useState<BedtimeCat | "all">("all");
  const read = BEDTIME.filter((s) => studied[`story:${s.id}`]).length;
  const cats = BEDTIME_CATS.filter((c) => cat === "all" || c.id === cat);

  return (
    <>
      <PageHeader eyebrow="Before sleep" title="Bedtime Stories"
        sub="True stories from the life of the Prophet ﷺ and his family, the Companions, the prophets of old, the great imams and the cities of the Quran. A few minutes each, to read together or listen to." />
      <Page>
        <section className="card flex flex-wrap items-center justify-between gap-3">
          <span className="font-bold">{read} of {BEDTIME.length} stories read</span>
          <div className="progress min-w-[160px] flex-1"><i style={{ width: `${(read / BEDTIME.length) * 100}%` }} /></div>
        </section>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Story collections">
          {[{ id: "all" as const, title: "All" }, ...BEDTIME_CATS].map((c) => (
            <button key={c.id} type="button" role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}
              className={`rounded-full border px-3.5 py-1.5 text-[0.9rem] font-bold ${cat === c.id ? "border-emerald bg-emerald text-bg-surface" : "border-border bg-bg-surface text-fg-muted hover:border-emerald"}`}>
              {c.title}
            </button>
          ))}
        </div>

        {cats.map((c) => (
          <section key={c.id} className="flex flex-col gap-3">
            <div>
              <h2 className="text-[1.3rem]">{c.title}</h2>
              <p className="text-[0.92rem] text-fg-muted">{c.sub}</p>
            </div>
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
              {BEDTIME.filter((s) => s.cat === c.id).map((s) => {
                const done = studied[`story:${s.id}`];
                return (
                  <Link key={s.id} href={`/stories/${s.id}`}
                    className="flex flex-col gap-1.5 rounded-card border border-border bg-bg-surface p-[18px] transition hover:-translate-y-0.5 hover:border-emerald">
                    <span className="flex items-center justify-between gap-2 text-[0.8rem] font-bold text-fg-muted">
                      <span>{bedtimeMinutes(s)}-min story</span>
                      {done && <span className="text-emerald">Read ✓</span>}
                    </span>
                    <h3 className="font-display text-[1.12rem] leading-snug">{s.title}</h3>
                    <span className="text-[0.92rem] text-fg-muted">{s.teaser}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </Page>
    </>
  );
}
