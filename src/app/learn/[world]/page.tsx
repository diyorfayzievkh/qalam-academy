"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { TopicCard } from "@/components/topic-card";
import { lookFor, WorldCover } from "@/components/world-art";
import { T, useT } from "@/components/lang";
import { translateLesson, useLessonTranslations } from "@/content/i18n/lessons";
import { findWorld } from "@/content/library";
import { TOPICS } from "@/content/topics";
import { pickBi, TOOLS } from "@/content/israf-tools";

export default function WorldPage() {
  const { world: id } = useParams<{ world: string }>();
  const { studied } = useProgress();
  const { lang, t } = useT();
  const trMap = useLessonTranslations(lang, id);
  const w = findWorld(id);
  if (!w) notFound();

  type Item = { id: string; title: string; summary: string; tag: string };
  const sections: { title: string | null; items: Item[] }[] = [];
  for (const l0 of w.adab ?? []) {
    const l = { ...l0, ...(trMap?.[l0.id]?.title ? { title: trMap[l0.id].title as string } : {}), ...(trMap?.[l0.id]?.summary ? { summary: trMap[l0.id].summary as string } : {}) };
    let sec = sections[sections.length - 1];
    if (!sec || sec.title !== l.category) { sec = { title: l.category, items: [] }; sections.push(sec); }
    sec.items.push({ id: l.id, title: l.title, summary: l.summary, tag: t("Quiz inside") });
  }
  for (const l0 of w.lessons) {
    const l = translateLesson(l0, trMap?.[l0.id]);
    const g = l.group ?? null;
    let sec = sections[sections.length - 1];
    if (!sec || sec.title !== g) { sec = { title: g, items: [] }; sections.push(sec); }
    sec.items.push({ id: l.id, title: l.title, summary: l.summary, tag: "" });
  }
  let n = 0;
  const quizzes = TOPICS.filter((t) => w.quizIds.includes(t.id));

  return (
    <>
      <PageHeader eyebrow={t("Knowledge Base")} title={t(w.title)} sub={t(w.sub)} />
      <Page>
        <Link href="/learn" className="font-bold text-fg-muted">← <T>All worlds</T></Link>
        {(() => {
          const ids = [...w.lessons.map((l) => l.id), ...(w.adab ?? []).map((l) => l.id)];
          const read = ids.filter((x) => studied[`lesson:${w.id}/${x}`]).length;
          const L = lookFor(w.id);
          return (
            <WorldCover id={w.id} className="rounded-card shadow-[0_18px_40px_-24px_rgb(0_0_0/0.6)]">
              <div className="flex min-h-[170px] flex-col justify-end gap-2 p-5" style={{ color: L.ink }}>
                <span lang="ar" className="font-arabic text-[1.8rem] leading-none drop-shadow">{w.arabic}</span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="h-2 min-w-[140px] max-w-[260px] flex-1 overflow-hidden rounded-full bg-white/25">
                    <i className="block h-full rounded-full transition-[width] duration-700" style={{ width: `${(read / ids.length) * 100}%`, background: L.accent }} />
                  </div>
                  <b className="text-[0.9rem] drop-shadow">{read} / {ids.length}</b>
                </div>
              </div>
            </WorldCover>
          );
        })()}
        {w.id === "israf" && (
          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">{lang === "uz" ? "O‘quv vositalari" : "Study tools"}</h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {TOOLS.map((x) => (
                <Link key={x.id} href={`/learn/israf/tools/${x.id}`} className="lift flex flex-col gap-1 rounded-card border border-border bg-bg-surface p-3.5 hover:border-emerald">
                  <span className="text-[1.6rem] leading-none">{x.icon}</span>
                  <b className="text-[1rem]">{pickBi(x.title, lang)}</b>
                  <span className="text-[0.82rem] leading-snug text-fg-muted">{pickBi(x.sub, lang)}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
        {sections.map((sec, si) => (
          <section key={si} className="reveal flex flex-col gap-2.5">
            {sec.title && (
              <h2 className="text-[1.2rem]">
                {t(sec.title)}
              </h2>
            )}
            <ol className="flex flex-col gap-2.5">
              {sec.items.map((l) => {
                const i = n++;
                const done = studied[`lesson:${w.id}/${l.id}`];
                return (
                  <li key={l.id}>
                    <Link href={`/learn/${w.id}/${l.id}`}
                      className="lift flex items-center gap-3.5 rounded-card border border-border bg-bg-surface p-4 hover:border-emerald">
                      <span className={`grid h-9 w-9 flex-none place-items-center rounded-full text-[0.9rem] font-extrabold ${done ? "text-white" : "bg-emerald-soft text-emerald"}`}
                        style={done ? { background: `linear-gradient(160deg, ${lookFor(w.id).from}, ${lookFor(w.id).to})` } : undefined}>
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
            <h2 className="text-[1.3rem]">{t(w.adab?.length ? "Final quiz" : "Test yourself")}</h2>
            <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
              {quizzes.map((t) => <TopicCard key={t.id} topic={t} />)}
            </div>
          </section>
        )}
      </Page>
    </>
  );
}
