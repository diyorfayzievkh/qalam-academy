"use client";

import Link from "next/link";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { BEDTIME, BEDTIME_CATS, bedtimeMinutes, type BedtimeCat } from "@/content/bedtime";
import { StoryCover } from "@/components/story-art";
import { useT } from "@/components/lang";
import { StoryThemeToggle, useStoryTheme } from "@/components/story-theme";
import { useStoryTranslations } from "@/content/i18n/stories";

export default function StoriesPage() {
  const { studied } = useProgress();
  const { t, lang } = useT();
  const [mode, setMode] = useStoryTheme();
  const tr = useStoryTranslations(lang);
  const [cat, setCat] = useState<BedtimeCat | "all">("all");
  const read = BEDTIME.filter((s) => studied[`story:${s.id}`]).length;
  const cats = BEDTIME_CATS.filter((c) => cat === "all" || c.id === cat);

  return (
    <div className={mode}>
      <PageHeader eyebrow="Before sleep" title="Bedtime Stories"
        sub="True stories from the life of the Prophet ﷺ and his family, the Companions, the prophets of old, the great imams and the cities of the Quran. A few minutes each, to read together or listen to." />
      <Page>
        <div className="flex justify-end"><StoryThemeToggle mode={mode} setMode={setMode} /></div>
        <section className="card flex flex-wrap items-center justify-between gap-3">
          <span className="font-bold">{t("{read} of {total} stories read", { read, total: BEDTIME.length })}</span>
          <div className="progress min-w-[160px] flex-1"><i style={{ width: `${(read / BEDTIME.length) * 100}%` }} /></div>
        </section>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Story collections">
          {[{ id: "all" as const, title: "All stories" }, ...BEDTIME_CATS].map((c) => (
            <button key={c.id} type="button" role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}
              className={`rounded-full border px-3.5 py-1.5 text-[0.9rem] font-bold ${cat === c.id ? "border-emerald bg-emerald text-bg-surface" : "border-border bg-bg-surface text-fg-muted hover:border-emerald"}`}>
              {t(c.title)}
            </button>
          ))}
        </div>

        {cats.map((c) => (
          <section key={c.id} className="reveal flex flex-col gap-3">
            <div>
              <h2 className="text-[1.3rem]">{t(c.title)}</h2>
              <p className="text-[0.92rem] text-fg-muted">{t(c.sub)}</p>
            </div>
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
              {BEDTIME.filter((s) => s.cat === c.id).map((s) => {
                const done = studied[`story:${s.id}`];
                return (
                  <Link key={s.id} href={`/stories/${s.id}`}
                    className="lift flex flex-col overflow-hidden rounded-card border border-border bg-bg-surface hover:border-gold-bright">
                    <StoryCover s={s} day={mode === "paper"} className="h-[104px]" />
                    <div className="flex flex-1 flex-col gap-1.5 p-[16px]">
                      <span className="flex items-center justify-between gap-2 text-[0.8rem] font-bold text-fg-muted">
                        <span>{t("{n}-min story", { n: bedtimeMinutes(s) })}</span>
                        {done && <span className="text-gold-bright">{t("Read")} ✓</span>}
                      </span>
                      <h3 className="font-story text-[1.12rem] font-semibold leading-snug">{tr?.[s.id]?.title ?? s.title}</h3>
                      <span className="text-[0.92rem] text-fg-muted">{tr?.[s.id]?.teaser ?? s.teaser}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </Page>
    </div>
  );
}
