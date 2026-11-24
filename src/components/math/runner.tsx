"use client";

import { useEffect, useMemo, useState } from "react";
import { useProgress } from "@/components/progress";
import type { Problem } from "@/content/math/types";
import { ProblemCard } from "./problem";
import { starKey, starsFromScore, Stars } from "./progress";

/** Builds a set of different problems from one or more generators. */
export function makeSet(gens: (() => Problem)[], n: number): Problem[] {
  const out: Problem[] = []; const seen = new Set<string>();
  let guard = 0;
  while (out.length < n && guard++ < n * 40) {
    const p = gens[out.length % gens.length]();
    const key = p.prompt + JSON.stringify(p.visual ?? "");
    if (seen.has(key) && guard < n * 30) continue;
    seen.add(key); out.push(p);
  }
  return out;
}

type Result = { p: Problem; right: boolean; given: string };

/** A quiz or test: problems one at a time, then a score with stars and points. */
export function Runner({ scope, title, make, onExit }: { scope: string; title: string; make: () => Problem[]; onExit: () => void }) {
  const { answerCorrect, markPerfect, markStudied, studied } = useProgress();
  // Problems are random, so make them only in the browser (no server/client mismatch).
  const [set, setSet] = useState<Problem[]>([]);
  useEffect(() => { setSet(make()); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [answered, setAnswered] = useState(false);
  const done = set.length > 0 && i >= set.length;
  const score = results.filter((r) => r.right).length;
  const stars = useMemo(() => (done ? starsFromScore(score, set.length) : 0), [done, score, set.length]);

  function finish(res: Result[]) {
    const sc = res.filter((r) => r.right).length; const st = starsFromScore(sc, set.length);
    for (let k = 1; k <= st; k++) if (!studied[starKey(scope, k)]) markStudied(starKey(scope, k), `${k} star${k > 1 ? "s" : ""}`, 10);
    if (sc === set.length) markPerfect(`math:${scope}`);
  }

  if (done) return (
    <div className="flex flex-col gap-4">
      <div className="card flex flex-col items-center gap-2 text-center">
        <span className="text-[3rem] leading-none">{stars === 3 ? "🏆" : stars === 2 ? "🎉" : stars === 1 ? "👍" : "💪"}</span>
        <h2 className="text-[1.5rem]">{score} / {set.length}</h2>
        <Stars n={stars} size="2rem" />
        <p className="text-fg-muted">{stars === 3 ? "Perfect! You have mastered this." : stars === 2 ? "Great work! One more go for 3 stars?" : stars === 1 ? "Good start. Practise a little more and try again." : "Keep going! Read the examples, practise, then try again."}</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <button type="button" className="btn" onClick={() => { setSet(make()); setI(0); setResults([]); setAnswered(false); }}>Try again</button>
          <button type="button" className="btn btn-ghost" onClick={onExit}>Back</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.1rem]">Review</h3>
        {results.map((r, k) => (
          <div key={k} className={`rounded-btn border-l-4 bg-bg-surface px-3 py-2 ${r.right ? "border-emerald" : "border-danger"}`}>
            <div className="font-bold">{k + 1}. {r.p.prompt}</div>
            <div className="text-[0.92rem]">{r.right ? "✓" : "✗"} Your answer: <b>{r.given || "—"}</b>{!r.right && <> · Correct: <b>{r.p.answer}{r.p.unit === "¢" ? "¢" : r.p.unit ? ` ${r.p.unit}` : ""}</b></>}</div>
            {!r.right && <div className="text-[0.88rem] text-fg-muted">{r.p.explain}</div>}
          </div>
        ))}
      </div>
    </div>
  );

  if (!set.length) return <div className="card text-fg-muted">Getting your questions ready…</div>;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-[0.92rem] font-bold">
        <span>{title}</span><span className="text-fg-muted">Question {i + 1} of {set.length} · ✓ {score}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border"><i className="block h-full rounded-full bg-emerald transition-[width]" style={{ width: `${(i / set.length) * 100}%` }} /></div>
      <ProblemCard p={set[i]} showHint={false} onDone={(right, given) => {
        setAnswered(true);
        if (right) answerCorrect(`math:${scope}:q${i + 1}`);
        setResults((rs) => [...rs, { p: set[i], right, given }]);
      }} />
      <div className="flex justify-end gap-2">
        <button type="button" className="btn btn-ghost" onClick={onExit}>Quit</button>
        <button type="button" className="btn" disabled={!answered} onClick={() => {
          setAnswered(false);
          if (i + 1 >= set.length) finish(results);
          setI(i + 1);
        }}>{i + 1 >= set.length ? "See my score" : "Next →"}</button>
      </div>
    </div>
  );
}
