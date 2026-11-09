"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { NuriSays, useKids } from "@/components/kids";
import { useT } from "@/components/lang";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { TOPICS, type Topic } from "@/content/topics";
import { findWorld, WORLDS } from "@/content/library";
import { translateQuiz, useLessonTranslations } from "@/content/i18n/lessons";
import { mixOptions } from "@/lib/mix";

export default function TopicPage() {
  const { topic: id } = useParams<{ topic: string }>();
  const base = TOPICS.find((t) => t.id === id);
  const { lang, t } = useT();
  // Lesson quizzes link back to their lesson; use that lesson's translation when there is one.
  const m = base?.back?.match(/^\/learn\/([^/]+)\/([^/]+)$/);
  // A world's final quiz reuses questions from its lessons, so it can use their translations too.
  const finalOf = !m && base ? WORLDS.find((x) => x.quizIds.includes(base.id) && x.lessons.some((l) => l.quiz?.length)) : undefined;
  const trMap = useLessonTranslations(lang, m?.[1] ?? finalOf?.id);
  const tr = m ? trMap?.[m[2]] : undefined;
  const w = m ? findWorld(m[1]) : undefined;
  let topic: Topic | undefined = base && tr ? {
    ...base,
    title: tr.title ?? base.title,
    sub: w ? `${t("Lesson quiz")} · ${t(w.title)}` : base.sub,
    questions: translateQuiz(base.questions, tr.quiz),
  } : base;
  if (base && finalOf && trMap) {
    const byQ = new Map<object, Topic["questions"][number]>();
    for (const l of finalOf.lessons) {
      const qs = translateQuiz(l.quiz ?? [], trMap[l.id]?.quiz);
      (l.quiz ?? []).forEach((q, k) => byQ.set(q, qs[k]));
    }
    topic = { ...base, questions: base.questions.map((q) => byQ.get(q) ?? q) };
  }
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(0);
  if (!topic) notFound();

  return (
    <>
      <PageHeader eyebrow={t("Quiz")} title={t(topic.title)} sub={t(topic.sub)} />
      <Page>
        {!started ? (
          <section className="card flex flex-col gap-3">
            <span className="eyebrow">{t("Before you start")}</span>
            <ul className="flex max-w-[65ch] list-disc flex-col gap-2 pl-5">
              {topic.learn.map((l) => <li key={l}>{t(l)}</li>)}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn" onClick={() => setStarted(true)}>{t("Start quiz")}</button>
              <Link className="btn btn-ghost" href={topic.back ?? "/learn"}>{topic.back ? t("Back to the lesson") : t("Back to the library")}</Link>
            </div>
          </section>
        ) : (
          <Quiz key={round} topic={topic} onAgain={() => setRound((r) => r + 1)} />
        )}
      </Page>
    </>
  );
}

function Quiz({ topic: raw, onAgain }: { topic: Topic; onAgain: () => void }) {
  const topic = useMemo(() => ({ ...raw, questions: raw.questions.map(mixOptions) }), [raw]);
  const { answerCorrect, markPerfect } = useProgress();
  const { kids } = useKids();
  const { t } = useT();
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [earned, setEarned] = useState(0);
  const total = topic.questions.length;

  if (i >= total) {
    return (
      <section className="card flex flex-col items-start gap-3">
        {kids && <NuriSays mood={correct === total ? "cheer" : "happy"}>{correct === total ? t("Mā shāʾ Allāh! You got every one right!") : t("Well done for finishing! Shall we try again and beat your score?")}</NuriSays>}
        <span className="eyebrow">{t("Round complete")}</span>
        <h2 className="text-[1.8rem]">{t("{c} / {n} correct", { c: correct, n: total })}</h2>
        <p className="text-fg-muted">
          {t("You earned {n} points this round.", { n: earned })}{" "}
          {correct === total ? t("Mā shāʾ Allāh, a perfect score!") : t("Review the explanations and try again; repeat correct answers earn 2 points each.")}
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn" onClick={onAgain}>{t("Try again")}</button>
          <Link className="btn btn-ghost" href={topic.back ?? "/learn"}>{topic.back ? t("Back to the lesson") : t("Library")}</Link>
          <Link className="btn btn-ghost" href="/badges">{t("My badges")}</Link>
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
        <span className="eyebrow">{t(topic.title)} · {t("Question {i} of {n}", { i: i + 1, n: total })}</span>
        <span className="font-bold tabular-nums text-fg-muted">{t("{n} correct", { n: correct })}</span>
      </div>
      <div className="progress"><i style={{ width: `${(i / total) * 100}%` }} /></div>
      <p className="font-display text-[1.3rem] font-semibold">{q.q}</p>
      <div className="grid gap-2.5">
        {q.options.map((o, k) => {
          const state = !answeredNow ? "" : k === q.answer ? "right" : k === picked ? "wrong" : "";
          return (
            <button key={o} type="button" disabled={answeredNow} onClick={() => pick(k)}
              className={`flex items-center rounded-xl border-[1.5px] px-3.5 py-3 text-left font-semibold disabled:cursor-default ${kids ? "min-h-[60px] text-[1.08rem]" : ""} ${
                state === "right" ? "border-success bg-success-soft text-success"
                : state === "wrong" ? "border-danger bg-danger-soft text-danger"
                : "border-border bg-bg-surface enabled:hover:border-emerald"}`}>
              <span className={`mr-2.5 inline-grid h-7 w-7 place-items-center rounded-full text-[0.85rem] font-extrabold ${state === "right" ? "bg-success text-bg-surface" : state === "wrong" ? "bg-danger text-bg-surface" : "bg-bg-inset text-fg-muted"}`}>{"ABCDEF"[k]}</span>{o}
            </button>
          );
        })}
      </div>
      {answeredNow && (
        <>
          {kids && <NuriSays mood={ok ? "cheer" : "think"} size={72}>{ok ? t("Mā shāʾ Allāh! That’s right!") : t("Good try! Let’s see why.")}</NuriSays>}
          <div className="rounded-xl bg-bg-inset px-3.5 py-3">
            <b>{ok ? t("Correct.") : t("Not quite.")}</b> {q.why}
            <div className="mt-1 text-[0.82rem] text-fg-muted">{t("Source:")} {q.src}</div>
          </div>
          <div>
            <button type="button" className="btn" autoFocus onClick={() => { setI(i + 1); setPicked(null); }}>
              {i + 1 < total ? t("Next question") : t("See results")}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
