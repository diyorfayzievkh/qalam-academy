"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { starsFor, Stars } from "@/components/math/progress";
import { Runner } from "@/components/math/runner";
import { findGrade, subtopicsOf, TEST_LEN } from "@/content/math";
import { TOPIC_INTRO } from "@/content/math/subtopics";
import { rng } from "@/content/math/types";

/** A topic: overview, its subtopics and items, and the topic test. */
export default function TopicPage() {
  const { grade, topic } = useParams<{ grade: string; topic: string }>();
  const { studied } = useProgress();
  const [testing, setTesting] = useState(false);
  const g = findGrade(grade); const t = g?.topics.find((x) => x.id === topic);
  if (!g || !t) notFound();
  const sts = subtopicsOf(t);
  const scope = `${g.id}/topic-${t.id}`;

  return (
    <>
      <PageHeader eyebrow={`${g.title} Math · Topic`} title={`${t.icon} ${t.title}`} sub={`${sts.length} subtopic${sts.length > 1 ? "s" : ""} · ${t.subs.length} item${t.subs.length > 1 ? "s" : ""}`} />
      <Page>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href={`/math/${g.id}`} className="font-bold text-fg-muted">← {g.title} Math</Link>
          <Stars n={starsFor(studied, scope)} size="1.1rem" />
        </div>
        {testing ? (
          <Runner kind="topic" grade={g.id} scope={scope} title={`${t.title} (${g.title})`} n={TEST_LEN.topic} gens={t.subs.map((s) => () => s.gen(rng))} onExit={() => setTesting(false)} />
        ) : <>
          <section className="card flex flex-col gap-2" style={{ borderTop: `5px solid ${t.color}` }}>
            <h2 className="text-[1.2rem]">🗺️ What this topic is about</h2>
            <p className="text-[1.05rem] leading-relaxed">{TOPIC_INTRO[`${g.id}/${t.id}`]}</p>
          </section>
          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">Subtopics</h2>
            {sts.map((st, k) => (
              <Link key={st.id} href={`/math/${g.id}/topic/${t.id}/${st.id}`} className="lift flex flex-col gap-2 rounded-card border border-border bg-bg-surface p-4 hover:border-emerald" style={{ borderLeft: `5px solid ${t.color}` }}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <b className="text-[1.1rem]">{k + 1}. {st.name}</b>
                  <Stars n={starsFor(studied, `${g.id}/st-${st.id}`)} size="0.9rem" />
                </div>
                <p className="text-[0.95rem] text-fg-muted">{st.subs[0].bigIdea.split(". ")[0]}.</p>
                <ul className="flex flex-col gap-1 text-[0.9rem]">
                  {st.subs.map((s) => <li key={s.id} className="flex items-center justify-between gap-2"><span>{s.code && <span className="mr-1.5 font-mono text-[0.75rem] text-fg-muted">{s.code}</span>}{s.title}</span><Stars n={starsFor(studied, `${g.id}/${s.id}`)} size="0.75rem" /></li>)}
                </ul>
              </Link>
            ))}
          </section>
          <section className="card flex flex-col items-center gap-2 text-center" style={{ background: `linear-gradient(135deg, ${t.color}18, transparent)` }}>
            <span className="text-[2rem]">🏅</span>
            <b className="text-[1.15rem]">{t.title} topic test</b>
            <span className="text-[0.92rem] text-fg-muted">{TEST_LEN.topic} questions mixed from every item in this topic. Retake any time for a new set.</span>
            <button type="button" className="btn" onClick={() => { setTesting(true); window.scrollTo({ top: 0 }); }}>Topic test & record</button>
          </section>
        </>}
      </Page>
    </>
  );
}
