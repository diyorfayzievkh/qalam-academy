"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { TopicCard } from "@/components/topic-card";
import { findWorld } from "@/content/library";
import { TOPICS } from "@/content/topics";

export default function WorldPage() {
  const { world: id } = useParams<{ world: string }>();
  const { studied } = useProgress();
  const w = findWorld(id);
  if (!w) notFound();

  type Item = { id: string; title: string; summary: string; tag: string };
  const sections: { title: string | null; items: Item[] }[] = [];
  for (const l of w.adab ?? []) {
    let sec = sections[sections.length - 1];
    if (!sec || sec.title !== l.category) { sec = { title: l.category, items: [] }; sections.push(sec); }
    sec.items.push({ id: l.id, title: l.title, summary: l.summary, tag: "Quiz inside" });
  }
  for (const l of w.lessons) {
    const g = l.group ?? null;
    let sec = sections[sections.length - 1];
    if (!sec || sec.title !== g) { sec = { title: g, items: [] }; sections.push(sec); }
    sec.items.push({ id: l.id, title: l.title, summary: l.summary, tag: "" });
  }
  let n = 0;
  const quizzes = TOPICS.filter((t) => w.quizIds.includes(t.id));

  return (
    <>
      <PageHeader eyebrow="Knowledge Base" title={w.title} sub={w.sub} />
      <Page>
        <Link href="/learn" className="font-bold text-fg-muted">← All worlds</Link>
        {sections.map((sec, si) => (
          <section key={si} className="flex flex-col gap-2.5">
            {sec.title && (
              <h2 className="text-[1.2rem]">
                {sec.title}
              </h2>
            )}
            <ol className="flex flex-col gap-2.5">
              {sec.items.map((l) => {
                const i = n++;
                const done = studied[`lesson:${w.id}/${l.id}`];
                return (
                  <li key={l.id}>
                    <Link href={`/learn/${w.id}/${l.id}`}
                      className="flex items-center gap-3.5 rounded-card border border-border bg-bg-surface p-4 transition hover:border-emerald">
                      <span className={`grid h-9 w-9 flex-none place-items-center rounded-full text-[0.9rem] font-extrabold ${done ? "bg-emerald text-bg-surface" : "bg-emerald-soft text-emerald"}`}>
                        {done ? "✓" : i + 1}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <b className="font-display text-[1.05rem] font-semibold">{l.title}</b>
                        <span className="text-[0.9rem] text-fg-muted">{l.tag ? `${l.tag} · ` : ""}{l.summary}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
        {quizzes.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="text-[1.3rem]">{w.adab?.length ? "Final quiz" : "Test yourself"}</h2>
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
              {quizzes.map((t) => <TopicCard key={t.id} topic={t} />)}
            </div>
          </section>
        )}
      </Page>
    </>
  );
}
