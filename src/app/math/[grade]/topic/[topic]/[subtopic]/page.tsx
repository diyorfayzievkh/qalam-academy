"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { starsFor, Stars } from "@/components/math/progress";
import { Runner } from "@/components/math/runner";
import { MathVisual } from "@/components/math/visual";
import { subtopicScenes, TeacherLesson } from "@/components/math/teacher";
import { findGrade, subtopicsOf, TEST_LEN } from "@/content/math";
import { rng } from "@/content/math/types";

/** A subtopic: how its items fit together, each item's big idea, and the subtopic test. */
export default function SubtopicPage() {
  const { grade, topic, subtopic } = useParams<{ grade: string; topic: string; subtopic: string }>();
  const { studied } = useProgress();
  const [testing, setTesting] = useState(false);
  const g = findGrade(grade); const t = g?.topics.find((x) => x.id === topic);
  const st = t ? subtopicsOf(t).find((x) => x.id === subtopic) : undefined;
  if (!g || !t || !st) notFound();
  const scope = `${g.id}/st-${st.id}`;
  const many = st.subs.length > 1;

  return (
    <>
      <PageHeader eyebrow={`${g.title} · ${t.title} · Subtopic`} title={st.name}
        sub={many ? `${st.subs.length} items, from easier to harder. Learn each one, then take the subtopic test.` : "Learn the item, practise it, then take the subtopic test."} />
      <Page>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href={`/math/${g.id}/topic/${t.id}`} className="font-bold text-fg-muted">← {t.title}</Link>
          <Stars n={starsFor(studied, scope)} size="1.1rem" />
        </div>
        {testing ? (
          <Runner kind="subtopic" grade={g.id} scope={scope} title={`${st.name} (${g.title})`} n={TEST_LEN.subtopic} gens={st.subs.map((s) => () => s.gen(rng))} onExit={() => setTesting(false)} />
        ) : <>
          <TeacherLesson key={scope} scenes={subtopicScenes(st, t, TEST_LEN.subtopic)} color={t.color} scope={scope} gens={st.subs.map((s) => () => s.gen(rng))} label="This subtopic" />
          <section className="card flex flex-col gap-2" style={{ borderTop: `5px solid ${t.color}` }}>
            <h2 className="text-[1.2rem]">🎯 What you will learn</h2>
            <ul className="flex flex-col gap-1.5">
              {st.subs.map((s, k) => <li key={s.id} className="flex gap-2.5"><span className="grid h-6 w-6 flex-none place-items-center rounded-full text-[0.8rem] font-extrabold text-white" style={{ background: t.color }}>{k + 1}</span>
                <span>{s.title}{s.code && <span className="ml-1.5 font-mono text-[0.75rem] text-fg-muted">{s.code}</span>}</span></li>)}
            </ul>
            {many && <p className="rounded-btn bg-gold-soft px-3 py-2 text-[0.95rem]">💡 These items build on each other. Master item 1 first; item 2 uses the same idea with bigger numbers.</p>}
          </section>

          {st.subs.map((s, k) => (
            <section key={s.id} className="card flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-gold">Item {k + 1}{s.code ? ` · ${s.code}` : ""}</span>
                  <h2 className="text-[1.15rem]">{s.title}</h2>
                </div>
                <Stars n={starsFor(studied, `${g.id}/${s.id}`)} size="0.95rem" />
              </div>
              <div className="grid items-center gap-3 md:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col gap-2">
                  <p className="leading-relaxed">{s.bigIdea}</p>
                  <div className="rounded-btn bg-emerald-soft px-3 py-2 text-[0.95rem]">
                    <b>Example:</b> {s.examples[0].q} → <b>{s.examples[0].answer}</b>
                  </div>
                </div>
                {s.visual && <div className="rounded-btn bg-bg p-2"><MathVisual v={s.visual} /></div>}
              </div>
              <Link href={`/math/${g.id}/${s.id}`} className="btn self-start">Full lesson, practice & item test →</Link>
            </section>
          ))}

          <section className="card flex flex-col items-center gap-2 text-center" style={{ background: `linear-gradient(135deg, ${t.color}18, transparent)` }}>
            <span className="text-[2rem]">🎖️</span>
            <b className="text-[1.15rem]">{st.name} subtopic test</b>
            <span className="text-[0.92rem] text-fg-muted">{TEST_LEN.subtopic} questions{many ? ` mixed from all ${st.subs.length} items` : ""}. Retake any time for a new set.</span>
            <button type="button" className="btn" onClick={() => { setTesting(true); window.scrollTo({ top: 0 }); }}>Subtopic test & record</button>
          </section>
        </>}
      </Page>
    </>
  );
}
