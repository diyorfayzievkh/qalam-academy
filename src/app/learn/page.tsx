"use client";

import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { T, useT } from "@/components/lang";
import { TopicCard } from "@/components/topic-card";
import { lookFor, WorldCover } from "@/components/world-art";
import { lessonCount, WORLDS } from "@/content/library";
import { TOPICS } from "@/content/topics";

const SECTIONS = [
  { key: "core", title: "Worlds", sub: "" },
  { key: "spiritual", title: "Spiritual Tarbiyah", sub: "Ruhiy tarbiya by Shaykh Muhammad Sodik Muhammad Yusuf, in three volumes: purifying the soul, rebuilding it, and taking on good character." },
  { key: "social", title: "Social Tarbiyah", sub: "Ijtimoiy odoblar by Shaykh Muhammad Sodik Muhammad Yusuf: the adab of speech, home, food, travel, work, the mosque, illness and more." },
];

export default function KnowledgeBasePage() {
  const { studied } = useProgress();
  const { t } = useT();

  return (
    <>
      <PageHeader eyebrow={t("Knowledge Base")} title={t("Ilm Quest")}
        sub={t("Worlds of knowledge, Spiritual Tarbiyah and Social Tarbiyah. Read a lesson for 10 points, then test yourself in the quizzes.")} />
      <Page>
        {SECTIONS.map((sec) => {
          const list = WORLDS.filter((w) => (w.section ?? "core") === sec.key);
          return (
            <section key={sec.key} className="flex flex-col gap-3" {...(sec.key !== "core" ? { "data-adult": "" } : {})}>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[1.3rem]"><T>{sec.title}</T></h2>
                {sec.sub && <p className="max-w-[65ch] text-[0.92rem] text-fg-muted">{t(sec.sub)}</p>}
              </div>
              <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
            {list.map((w) => {
              const ids = [...w.lessons.map((l) => `lesson:${w.id}/${l.id}`), ...(w.adab ?? []).map((l) => `lesson:${w.id}/${l.id}`)];
              const read = ids.filter((id) => studied[id]).length;
              const total = lessonCount(w);
              return (
                <Link key={w.id} href={`/learn/${w.id}`}
                  className="lift reveal flex flex-col overflow-hidden rounded-card border border-border bg-bg-surface hover:border-emerald">
                  <WorldCover id={w.id} className="h-[118px]">
                    <div className="flex h-[118px] items-end justify-end p-3">
                      <span lang="ar" className="font-arabic text-[1.45rem] leading-none drop-shadow" style={{ color: lookFor(w.id).ink }}>{w.arabic}</span>
                    </div>
                  </WorldCover>
                  <div className="flex flex-1 flex-col gap-2 p-[16px]">
                    <h3 className="text-[1.15rem]">{t(w.title)}</h3>
                    <span className="text-[0.92rem] text-fg-muted">{t(w.sub)}</span>
                    <div className="progress mt-auto"><i style={{ width: `${(read / total) * 100}%` }} /></div>
                    <span className="text-[0.82rem] font-bold text-fg-muted">{t("{read} of {total} lessons read", { read, total })}{w.quizIds.length ? t(w.quizIds.length > 1 ? " · {n} quizzes" : " · {n} quiz", { n: w.quizIds.length }) : ""}</span>
                  </div>
                </Link>
              );
            })}
              </div>
            </section>
          );
        })}

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
            {TOPICS.filter((t) => !t.hidden).map((t) => <TopicCard key={t.id} topic={t} />)}
          </div>
        </section>
      </Page>
    </>
  );
}
