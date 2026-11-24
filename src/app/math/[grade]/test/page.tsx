"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { Runner } from "@/components/math/runner";
import { findGrade, TEST_LEN } from "@/content/math";
import { rng } from "@/content/math/types";

/** The whole-grade test: questions from every item of the grade. */
export default function GradeTestPage() {
  const { grade: id } = useParams<{ grade: string }>();
  const router = useRouter();
  const g = findGrade(id); if (!g) notFound();
  const subs = g.topics.flatMap((t) => t.subs);
  return (
    <>
      <PageHeader eyebrow={`${g.title} Math`} title={`${g.title} test`} sub={`${TEST_LEN.grade} questions from every item of the grade.`} />
      <Page><Runner kind="grade" grade={g.id} scope={`${g.id}/grade`} title={`${g.title} test`} n={TEST_LEN.grade} gens={subs.map((s) => () => s.gen(rng))} onExit={() => router.push(`/math/${g.id}`)} /></Page>
    </>
  );
}
