"use client";

import Link from "next/link";
import type { Topic } from "@/content/topics";
import { Icon } from "./icons";
import { useProgress } from "./progress";
import { useT } from "./lang";

export function TopicCard({ topic }: { topic: Topic }) {
  const { answered, perfect } = useProgress();
  const { t } = useT();
  const done = topic.questions.filter((_, i) => answered[`${topic.id}-${i}`]).length;
  return (
    <Link href={`/quiz/${topic.id}`}
      className="flex flex-col gap-2.5 rounded-card border border-border bg-bg-surface p-[18px] transition hover:-translate-y-0.5 hover:border-emerald">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-soft text-emerald"><Icon name={topic.icon} /></span>
      <h3 className="text-[1.12rem]">{t(topic.title)}</h3>
      <span className="text-[0.92rem] text-fg-muted">{t(topic.sub)}</span>
      <div className="progress"><i style={{ width: `${(done / topic.questions.length) * 100}%` }} /></div>
      <span className="flex justify-between text-[0.82rem] font-bold text-fg-muted">
        <span>{t("{d}/{n} answered", { d: done, n: topic.questions.length })}</span>
        <span>{perfect[topic.id] ? t("Perfect ✓") : t("{n} questions", { n: topic.questions.length })}</span>
      </span>
    </Link>
  );
}
