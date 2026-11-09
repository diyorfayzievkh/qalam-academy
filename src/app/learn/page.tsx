"use client";

import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { TopicCard } from "@/components/topic-card";
import { lessonCount, WORLDS } from "@/content/library";
import { TOPICS } from "@/content/topics";

export default function KnowledgeBasePage() {
  const { studied } = useProgress();

  return (
    <>
      <PageHeader eyebrow="Knowledge Base" title="Ilm Quest"
        sub="Seven worlds of knowledge. Read a lesson for 10 points, then test yourself in the quizzes." />
      <Page>
        <section className="flex flex-col gap-3">
          <h2 className="text-[1.3rem]">Worlds</h2>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
            {WORLDS.map((w) => {
              const ids = [...w.lessons.map((l) => `lesson:${w.id}/${l.id}`), ...(w.adab ?? []).map((l) => `lesson:${w.id}/${l.id}`)];
              const read = ids.filter((id) => studied[id]).length;
              const total = lessonCount(w);
              return (
                <Link key={w.id} href={`/learn/${w.id}`}
                  className="flex flex-col gap-2 rounded-card border border-border bg-bg-surface p-[18px] transition hover:-translate-y-0.5 hover:border-emerald">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.15rem]">{w.title}</h3>
                    <span lang="ar" className="font-arabic text-[1.35rem] leading-none text-gold">{w.arabic}</span>
                  </div>
                  <span className="text-[0.92rem] text-fg-muted">{w.sub}</span>
                  <div className="progress mt-auto"><i style={{ width: `${(read / total) * 100}%` }} /></div>
                  <span className="text-[0.82rem] font-bold text-fg-muted">{read} of {total} lessons read{w.quizIds.length ? ` · ${w.quizIds.length} quiz${w.quizIds.length > 1 ? "zes" : ""}` : ""}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="grid gap-3.5 sm:grid-cols-2">
          <Link href="/ramadan" className="card flex flex-col gap-1.5 transition hover:border-emerald">
            <span className="eyebrow">Seasonal</span>
            <h3 className="text-[1.15rem]">Ramadan Quest</h3>
            <span className="text-[0.92rem] text-fg-muted">Daily tracker, 30-day plan, duas, surahs and the history of Ramadan.</span>
          </Link>
          <Link href="/mizan" className="card flex flex-col gap-1.5 transition hover:border-emerald">
            <span className="eyebrow">Collection</span>
            <h3 className="text-[1.15rem]">Mizan: heavy on the scale</h3>
            <span className="text-[0.92rem] text-fg-muted">Dhikr, character, duas and surahs with the greatest rewards, from authentic hadith.</span>
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[1.3rem]">Quizzes</h2>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
            {TOPICS.map((t) => <TopicCard key={t.id} topic={t} />)}
          </div>
        </section>
      </Page>
    </>
  );
}
