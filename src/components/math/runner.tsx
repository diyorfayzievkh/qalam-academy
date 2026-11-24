"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAccount } from "@/components/account";
import { useProgress } from "@/components/progress";
import type { TestKind } from "@/content/math";
import type { Problem } from "@/content/math/types";
import { loadAttempts, mmss, pct, saveAttempt, when, type Attempt } from "@/lib/math-records";
import { ProblemCard } from "./problem";
import { starKey, starsFromScore, Stars } from "./progress";

/** Builds a test: spreads questions evenly over the generators, avoids repeats, then shuffles. */
export function makeSet(gens: (() => Problem)[], n: number): Problem[] {
  const out: Problem[] = []; const seen = new Set<string>();
  let guard = 0;
  while (out.length < n && guard++ < n * 60) {
    const p = gens[out.length % gens.length]();
    const key = p.prompt + JSON.stringify(p.visual ?? "");
    if (seen.has(key) && guard < n * 50) continue;
    seen.add(key); out.push(p);
  }
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}

type Result = { p: Problem; right: boolean; given: string };
const KIND_LABEL: Record<TestKind, string> = { item: "Item test", subtopic: "Subtopic test", topic: "Topic test", grade: "Grade test" };
const unitOf = (p: Problem) => (p.unit === "¢" ? "¢" : p.unit ? ` ${p.unit}` : "");

/** Past attempts at this test, newest first. */
export function AttemptTable({ attempts, compact }: { attempts: Attempt[]; compact?: boolean }) {
  if (!attempts.length) return <p className="text-[0.92rem] text-fg-muted">No attempts yet.</p>;
  const best = Math.max(...attempts.map(pct));
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[360px] border-collapse text-left text-[0.9rem]">
        <thead><tr className="border-b-2 border-border text-fg-muted">
          <th className="py-1.5 pr-2">#</th>{!compact && <th className="py-1.5 pr-2">Test</th>}<th className="py-1.5 pr-2">Date</th><th className="py-1.5 pr-2">Score</th><th className="py-1.5 pr-2">%</th><th className="py-1.5 pr-2">Time</th><th className="py-1.5">Stars</th>
        </tr></thead>
        <tbody>{attempts.map((a, i) => (
          <tr key={a.id} className="border-b border-border">
            <td className="py-1.5 pr-2 font-bold">{attempts.length - i}</td>
            {!compact && <td className="py-1.5 pr-2">{a.title}</td>}
            <td className="whitespace-nowrap py-1.5 pr-2">{when(a.createdAt)}</td>
            <td className="py-1.5 pr-2 font-bold">{a.score}/{a.total}</td>
            <td className={`py-1.5 pr-2 font-bold ${pct(a) === best ? "text-emerald" : ""}`}>{pct(a)}%{pct(a) === best && attempts.length > 1 ? " ★" : ""}</td>
            <td className="py-1.5 pr-2">{mmss(a.seconds)}</td>
            <td className="whitespace-nowrap py-1.5"><Stars n={starsFromScore(a.score, a.total)} size="0.8rem" /></td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

/** A test: start screen with the record, questions one at a time, results, retake with a new set. */
export function Runner({ kind, grade, scope, title, n, gens, onExit }: {
  kind: TestKind; grade: string; scope: string; title: string; n: number; gens: (() => Problem)[]; onExit: () => void;
}) {
  const { answerCorrect, markPerfect, markStudied, studied } = useProgress();
  const { user, ready } = useAccount();
  const [phase, setPhase] = useState<"intro" | "run" | "done">("intro");
  const [set, setSet] = useState<Problem[]>([]);
  const [i, setI] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [answered, setAnswered] = useState(false);
  const [history, setHistory] = useState<Attempt[] | null>(null);
  const [saving, setSaving] = useState(false);
  const [took, setTook] = useState(0);
  const started = useRef(0);

  const refresh = useCallback(() => { loadAttempts({ grade, scope }, Boolean(user)).then(setHistory); }, [grade, scope, user]);
  useEffect(() => { if (ready) refresh(); }, [ready, refresh]);

  function start() {
    setSet(makeSet(gens, n)); setI(0); setResults([]); setAnswered(false); setPhase("run"); started.current = Date.now();
    window.scrollTo({ top: 0 });
  }

  async function finish(res: Result[]) {
    const score = res.filter((r) => r.right).length; const st = starsFromScore(score, res.length);
    for (let k = 1; k <= st; k++) if (!studied[starKey(scope, k)]) markStudied(starKey(scope, k), `${k} star${k > 1 ? "s" : ""}`, 10);
    if (score === res.length) markPerfect(`math:${scope}`);
    const seconds = Math.round((Date.now() - started.current) / 1000); setTook(seconds);
    setPhase("done"); setSaving(true); window.scrollTo({ top: 0 });
    const saved = await saveAttempt({ grade, scope, kind, title, score, total: res.length, seconds,
      wrong: res.filter((r) => !r.right).map((r) => ({ q: r.p.prompt.slice(0, 400), given: r.given.slice(0, 60), answer: `${r.p.answer}${unitOf(r.p)}`.slice(0, 120) })) }, Boolean(user));
    setHistory((h) => [saved, ...(h ?? [])]); setSaving(false);
  }

  const record = (
    <div className="card flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <b>📋 Your record{history?.length ? ` · ${history.length} attempt${history.length > 1 ? "s" : ""}` : ""}</b>
        {!user && <span className="text-[0.8rem] text-fg-muted">Saved on this device. Sign in to keep it in your family account.</span>}
      </div>
      {history ? <AttemptTable attempts={history} compact /> : <p className="text-fg-muted">Loading…</p>}
    </div>
  );

  if (phase === "intro") {
    const best = history?.length ? Math.max(...history.map(pct)) : null;
    return (
      <div className="flex flex-col gap-3">
        <div className="card flex flex-col items-center gap-2 text-center">
          <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">{KIND_LABEL[kind]}</span>
          <h2 className="text-[1.35rem]">{title}</h2>
          <p className="text-fg-muted">{n} questions · no hints · a new mixed set every time</p>
          <p className="text-[0.92rem]">⭐ 60% · ⭐⭐ 80% · ⭐⭐⭐ 100%</p>
          {best !== null && <p className="font-bold">Best so far: {best}% {history!.length > 1 ? `(${history!.length} attempts)` : ""}</p>}
          <div className="flex flex-wrap justify-center gap-2.5">
            <button type="button" className="btn" onClick={start}>{history?.length ? "🔁 Retake with new questions" : "▶ Start the test"}</button>
            <button type="button" className="btn btn-ghost" onClick={onExit}>Back</button>
          </div>
        </div>
        {record}
      </div>
    );
  }

  if (phase === "done") {
    const score = results.filter((r) => r.right).length; const stars = starsFromScore(score, results.length);
    return (
      <div className="flex flex-col gap-4">
        <div className="card flex flex-col items-center gap-2 text-center">
          <span className="text-[3rem] leading-none">{stars === 3 ? "🏆" : stars === 2 ? "🎉" : stars === 1 ? "👍" : "💪"}</span>
          <h2 className="text-[1.5rem]">{score} / {results.length} · {Math.round((score / results.length) * 100)}%</h2>
          <Stars n={stars} size="2rem" />
          <p className="text-fg-muted">{stars === 3 ? "Perfect! You have mastered this." : stars === 2 ? "Great work! Retake for 3 stars?" : stars === 1 ? "Good start. Practise a little more and retake." : "Keep going! Read the lesson, practise, then retake."}</p>
          <p className="text-[0.85rem] text-fg-muted">{saving ? "Saving your result…" : `Saved · time ${mmss(took)}`}</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <button type="button" className="btn" onClick={start}>🔁 Retake with new questions</button>
            <button type="button" className="btn btn-ghost" onClick={onExit}>Back</button>
          </div>
        </div>
        {record}
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.1rem]">Review this attempt</h3>
          {results.map((r, k) => (
            <div key={k} className={`rounded-btn border-l-4 bg-bg-surface px-3 py-2 ${r.right ? "border-emerald" : "border-danger"}`}>
              <div className="font-bold">{k + 1}. {r.p.prompt}</div>
              <div className="text-[0.92rem]">{r.right ? "✓" : "✗"} Your answer: <b>{r.given || "—"}</b>{!r.right && <> · Correct: <b>{r.p.answer}{unitOf(r.p)}</b></>}</div>
              {!r.right && <div className="text-[0.88rem] text-fg-muted">{r.p.explain}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const score = results.filter((r) => r.right).length;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-[0.92rem] font-bold">
        <span>{KIND_LABEL[kind]}</span><span className="text-fg-muted">Question {i + 1} of {set.length} · ✓ {score}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border"><i className="block h-full rounded-full bg-emerald transition-[width]" style={{ width: `${(i / set.length) * 100}%` }} /></div>
      <ProblemCard p={set[i]} showHint={false} onDone={(right, given) => {
        setAnswered(true);
        if (right) answerCorrect(`math:${scope}:q${i + 1}`);
        setResults((rs) => [...rs, { p: set[i], right, given }]);
      }} />
      <div className="flex justify-end gap-2">
        <button type="button" className="btn btn-ghost" onClick={() => setPhase("intro")}>Quit</button>
        <button type="button" className="btn" disabled={!answered} onClick={() => {
          setAnswered(false);
          if (i + 1 >= set.length) finish(results); else setI(i + 1);
        }}>{i + 1 >= set.length ? "See my score" : "Next →"}</button>
      </div>
    </div>
  );
}
