"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { TOPICS, type Topic } from "@/content/topics";

export default function TopicPage() {
  const { topic: id } = useParams<{ topic: string }>();
  const topic = TOPICS.find((t) => t.id === id);
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(0);
  if (!topic) notFound();

  return (
    <>
      <PageHeader eyebrow="Quiz" title={topic.title} sub={topic.sub} />
      <Page>
        {!started ? (
          <section className="card flex flex-col gap-3">
            <span className="eyebrow">Before you start</span>
            <ul className="flex max-w-[65ch] list-disc flex-col gap-2 pl-5">
              {topic.learn.map((l) => <li key={l}>{l}</li>)}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn" onClick={() => setStarted(true)}>Start quiz</button>
              <Link className="btn btn-ghost" href={topic.back ?? "/learn"}>{topic.back ? "Back to the lesson" : "Back to the library"}</Link>
            </div>
          </section>
        ) : (
          <Quiz key={round} topic={topic} onAgain={() => setRound((r) => r + 1)} />
        )}
      </Page>
    </>
  );
}

function Quiz({ topic, onAgain }: { topic: Topic; onAgain: () => void }) {
  const { answerCorrect, markPerfect } = useProgress();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [earned, setEarned] = useState(0);
  const total = topic.questions.length;

  if (i >= total) {
    return (
      <section className="card flex flex-col items-start gap-3">
        <span className="eyebrow">Round complete</span>
        <h2 className="text-[1.8rem]">{correct} / {total} correct</h2>
        <p className="text-fg-muted">
          You earned {earned} points this round.
          {correct === total ? " Mā shāʾ Allāh, a perfect score!" : " Review the explanations and try again; repeat correct answers earn 2 points each."}
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn" onClick={onAgain}>Try again</button>
          <Link className="btn btn-ghost" href={topic.back ?? "/learn"}>{topic.back ? "Back to the lesson" : "Library"}</Link>
          <Link className="btn btn-ghost" href="/badges">My badges</Link>
        </div>
      </section>
    );
  }

  const q = topic.questions[i];
  const answeredNow = picked !== null;
  const ok = picked === q.answer;

  function pick(k: number) {
    if (answeredNow) return;
    setPicked(k);
    if (k === q.answer) {
      const pts = answerCorrect(`${topic.id}-${i}`);
      const c = correct + 1;
      setCorrect(c);
      let e = earned + pts;
      if (i === total - 1 && c === total) e += markPerfect(topic.id);
      setEarned(e);
    }
  }

  return (
    <section className="card flex flex-col gap-3.5">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="eyebrow">{topic.title} · Question {i + 1} of {total}</span>
        <span className="font-bold tabular-nums text-fg-muted">{correct} correct</span>
      </div>
      <div className="progress"><i style={{ width: `${(i / total) * 100}%` }} /></div>
      <p className="font-display text-[1.3rem] font-semibold">{q.q}</p>
      <div className="grid gap-2.5">
        {q.options.map((o, k) => {
          const state = !answeredNow ? "" : k === q.answer ? "right" : k === picked ? "wrong" : "";
          return (
            <button key={o} type="button" disabled={answeredNow} onClick={() => pick(k)}
              className={`rounded-xl border-[1.5px] px-3.5 py-3 text-left font-semibold disabled:cursor-default ${
                state === "right" ? "border-success bg-success-soft text-success"
                : state === "wrong" ? "border-danger bg-danger-soft text-danger"
                : "border-border bg-bg-surface enabled:hover:border-emerald"}`}>
              {o}
            </button>
          );
        })}
      </div>
      {answeredNow && (
        <>
          <div className="rounded-xl bg-bg-inset px-3.5 py-3">
            <b>{ok ? "Correct." : "Not quite."}</b> {q.why}
            <div className="mt-1 text-[0.82rem] text-fg-muted">Source: {q.src}</div>
          </div>
          <div>
            <button type="button" className="btn" autoFocus onClick={() => { setI(i + 1); setPicked(null); }}>
              {i + 1 < total ? "Next question" : "See results"}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
