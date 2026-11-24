"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { ProblemCard } from "@/components/math/problem";
import { starsFor, Stars } from "@/components/math/progress";
import { Runner } from "@/components/math/runner";
import { MathVisual } from "@/components/math/visual";
import { itemScenes, TeacherLesson } from "@/components/math/teacher";
import { findSub, slug, TEST_LEN } from "@/content/math";
import { rng, type Problem } from "@/content/math/types";

/** One skill: learn (explanation, picture, examples), practise, then quiz. */
export default function SkillPage() {
  const { grade, sub } = useParams<{ grade: string; sub: string }>();
  const found = findSub(grade, sub);
  const { studied, markStudied } = useProgress();
  const [mode, setMode] = useState<"learn" | "quiz">("learn");
  const [practice, setPractice] = useState<Problem | null>(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [shown, setShown] = useState<Record<number, boolean>>({});
  useEffect(() => { if (found) setPractice(found.sub.gen(rng)); setMode("learn"); setStreak(0); setShown({}); }, [grade, sub]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!found) notFound();
  const { grade: g, topic: t, sub: s } = found;
  const scope = `${g.id}/${s.id}`;
  const n = starsFor(studied, scope);
  const idx = t.subs.findIndex((x) => x.id === s.id);
  const next = t.subs[idx + 1] ?? g.topics[g.topics.findIndex((x) => x.id === t.id) + 1]?.subs[0];

  return (
    <>
      <PageHeader eyebrow={`${g.title} · ${t.title} · ${s.subtopic}`} title={s.title} sub={s.code ? `Learning plan item ${s.code}` : undefined} />
      <Page>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href={`/math/${g.id}/topic/${t.id}/${slug(s.subtopic ?? s.title)}`} className="font-bold text-fg-muted">← {s.subtopic}</Link>
          <Stars n={n} size="1.1rem" />
        </div>

        {mode === "quiz" ? (
          <Runner kind="item" grade={g.id} scope={scope} title={`${s.code ? `${s.code} · ` : ""}${s.title}`} n={TEST_LEN.item} gens={[() => s.gen(rng)]} onExit={() => setMode("learn")} />
        ) : <>
          <TeacherLesson key={scope} scenes={itemScenes(s, t, TEST_LEN.item)} color={t.color} scope={scope} gens={[() => s.gen(rng)]} label="This skill" />
          <section className="card flex flex-col gap-3" style={{ borderTop: `5px solid ${t.color}` }}>
            <h2 className="flex items-center gap-2 text-[1.2rem]">📖 The big idea</h2>
            <p className="text-[1.05rem] leading-relaxed">{s.bigIdea}</p>
            {s.visual && <div className="rounded-btn bg-bg p-3"><MathVisual v={s.visual} /></div>}
          </section>

          <section className="card flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">🪜 Step by step</h2>
            <ol className="flex flex-col gap-2">
              {s.steps.map((st, k) => <li key={k} className="flex gap-3"><span className="grid h-7 w-7 flex-none place-items-center rounded-full text-[0.85rem] font-extrabold text-white" style={{ background: t.color }}>{k + 1}</span><span className="pt-0.5 leading-snug">{st}</span></li>)}
            </ol>
            {s.tip && <p className="rounded-btn bg-gold-soft px-3 py-2 text-[0.95rem]">💡 {s.tip}</p>}
          </section>

          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">✍️ Worked examples</h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {s.examples.map((ex, k) => (
                <div key={k} className="card flex flex-col gap-2">
                  <b className="text-[1.05rem]">{ex.q}</b>
                  {shown[k] ? <>
                    <ul className="flex flex-col gap-1 text-[0.95rem]">{ex.work.map((w, j) => <li key={j}>→ {w}</li>)}</ul>
                    <span className="self-start rounded-btn bg-emerald-soft px-3 py-1 font-bold text-emerald">Answer: {ex.answer}</span>
                  </> : <button type="button" className="btn btn-ghost self-start" onClick={() => { setShown((v) => ({ ...v, [k]: true })); markStudied(`math-learn:${scope}`, "lesson read", 10); }}>Show the steps</button>}
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-[1.2rem]">🧮 Practice</h2>
              <span className="text-[0.92rem] font-bold">🔥 Streak {streak} · Best {best}</span>
            </div>
            {practice && <ProblemCard p={practice} label="Hands-on practice" onDone={(right) => {
              setAnswered(true);
              const st = right ? streak + 1 : 0; setStreak(st); setBest((b) => Math.max(b, st));
              if (right && [5, 10, 20].includes(st)) markStudied(`math-streak:${scope}:${st}`, `${st} in a row!`, 5);
            }} />}
            <div className="flex flex-wrap gap-2.5">
              <button type="button" className="btn btn-ghost" onClick={() => { setPractice(s.gen(rng)); setAnswered(false); }}>{answered ? "Next problem →" : "Skip →"}</button>
            </div>
          </section>

          <section className="card flex flex-col items-center gap-2 text-center" style={{ background: `linear-gradient(135deg, ${t.color}18, transparent)` }}>
            <span className="text-[2rem]">⭐</span>
            <b className="text-[1.15rem]">Ready for the item test?</b>
            <span className="text-[0.92rem] text-fg-muted">{TEST_LEN.item} questions, no hints. 60% = ⭐, 80% = ⭐⭐, 100% = ⭐⭐⭐. Retake as often as you like.</span>
            <button type="button" className="btn" onClick={() => { setMode("quiz"); window.scrollTo({ top: 0 }); }}>Item test</button>
            <Link href={`/math/${g.id}/topic/${t.id}/${slug(s.subtopic ?? s.title)}`} className="text-[0.9rem] font-bold text-fg-muted underline-offset-4 hover:underline">Subtopic: {s.subtopic} →</Link>
            {next && <Link href={`/math/${g.id}/${next.id}`} className="text-[0.9rem] font-bold text-emerald underline-offset-4 hover:underline">Next skill: {next.title} →</Link>}
          </section>
        </>}
      </Page>
    </>
  );
}
