"use client";

import { notFound, useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { makeSet, Runner } from "@/components/math/runner";
import { findGrade } from "@/content/math";
import { rng } from "@/content/math/types";

/** A topic test (two of each skill) or the whole-grade test (20 mixed). */
function Test() {
  const { grade: id } = useParams<{ grade: string }>();
  const topicId = useSearchParams().get("topic");
  const router = useRouter();
  const g = findGrade(id); if (!g) notFound();
  const topic = topicId ? g.topics.find((t) => t.id === topicId) : null;
  if (topicId && !topic) notFound();
  const subs = topic ? topic.subs : g.topics.flatMap((t) => t.subs);
  const n = topic ? Math.min(20, Math.max(10, subs.length * 3)) : 20;
  const scope = `${g.id}/test-${topic ? topic.id : "all"}`;
  const make = () => makeSet(subs.map((s) => () => s.gen(rng)), n).sort(() => Math.random() - 0.5);
  return (
    <>
      <PageHeader eyebrow={`${g.title} Math`} title={topic ? `${topic.title} test` : `${g.title} test`} sub={topic ? `Questions from every skill in ${topic.title}.` : "Questions from every topic of the grade."} />
      <Page><Runner scope={scope} title={`${n} questions`} make={make} onExit={() => router.push(`/math/${g.id}`)} /></Page>
    </>
  );
}

export default function TestPage() { return <Suspense><Test /></Suspense>; }
