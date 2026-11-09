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

  const items = [
    ...w.lessons.map((l) => ({ id: l.id, title: l.title, summary: l.summary, tag: "" })),
    ...(w.adab ?? []).map((l) => ({ id: l.id, title: l.title, summary: l.summary, tag: l.category })),
  ];
  const quizzes = TOPICS.filter((t) => w.quizIds.includes(t.id));

  return (
    <>
      <PageHeader eyebrow="Knowledge Base" title={w.title} sub={w.sub} />
      <Page>
        <Link href="/learn" className="font-bold text-fg-muted">← All worlds</Link>
        <ol className="flex flex-col gap-2.5">
          {items.map((l, i) => {
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
        {quizzes.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="text-[1.3rem]">Test yourself</h2>
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
              {quizzes.map((t) => <TopicCard key={t.id} topic={t} />)}
            </div>
          </section>
        )}
      </Page>
    </>
  );
}
