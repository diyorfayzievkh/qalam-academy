"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { gradeStars, starsFor, Stars } from "@/components/math/progress";
import { findGrade } from "@/content/math";

/** A grade: topics and skills with stars, tests, and a printable learning plan. */
export default function GradePage() {
  const { grade: id } = useParams<{ grade: string }>();
  const { studied } = useProgress();
  const [view, setView] = useState<"map" | "plan">("map");
  const g = findGrade(id); if (!g) notFound();
  const { have, max } = gradeStars(studied, g);

  return (
    <>
      <PageHeader eyebrow="Mathematics" title={`${g.title} Math`} sub={g.sub} />
      <Page>
        <Link href="/math" className="font-bold text-fg-muted">← All grades</Link>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="seg" role="group" aria-label="View">
            <button type="button" aria-pressed={view === "map"} onClick={() => setView("map")}>Skills</button>
            <button type="button" aria-pressed={view === "plan"} onClick={() => setView("plan")}>Learning plan</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">⭐ {have} / {max}</span>
            <Link href={`/math/${g.id}/test`} className="btn">🏆 {g.title} test</Link>
          </div>
        </div>

        {view === "map" ? g.topics.map((t) => (
          <section key={t.id} className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-[1.2rem]"><span className="grid h-9 w-9 place-items-center rounded-full text-[1.1rem]" style={{ background: `${t.color}22` }}>{t.icon}</span>{t.title}</h2>
              <Link href={`/math/${g.id}/test?topic=${t.id}`} className="btn btn-ghost px-3 py-1.5 text-[0.88rem]">Topic test{starsFor(studied, `${g.id}/test-${t.id}`) ? <> · <Stars n={starsFor(studied, `${g.id}/test-${t.id}`)} size="0.8rem" /></> : null}</Link>
            </div>
            <ol className="grid gap-2.5 sm:grid-cols-2">
              {t.subs.map((s) => { const n = starsFor(studied, `${g.id}/${s.id}`); return (
                <li key={s.id}>
                  <Link href={`/math/${g.id}/${s.id}`} className="lift flex h-full items-center gap-3 rounded-card border border-border bg-bg-surface p-3.5 hover:border-emerald" style={{ borderLeft: `5px solid ${t.color}` }}>
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      {s.code && <span className="font-mono text-[0.72rem] font-bold text-fg-muted">{s.code}</span>}
                      <b className="leading-snug">{s.title}</b>
                    </div>
                    <Stars n={n} size="0.9rem" />
                  </Link>
                </li>
              ); })}
            </ol>
          </section>
        )) : (
          <div className="card overflow-x-auto p-0">
            <table className="w-full min-w-[620px] border-collapse text-left text-[0.92rem]">
              <thead><tr className="bg-emerald-soft">{["", "Topic", "Subtopic", "Item", "Mastery"].map((h) => <th key={h} className="border-b-2 border-border px-3 py-2 font-bold">{h}</th>)}</tr></thead>
              <tbody>
                {g.topics.flatMap((t) => t.subs.map((s) => { const n = starsFor(studied, `${g.id}/${s.id}`); return (
                  <tr key={s.id} className="border-b border-border">
                    <td className="px-3 py-2 text-[1.1rem]">{n === 3 ? "☑" : "☐"}</td>
                    <td className="px-3 py-2">{t.title}</td>
                    <td className="px-3 py-2">{s.title.split(":")[0]}</td>
                    <td className="px-3 py-2"><Link href={`/math/${g.id}/${s.id}`} className="font-bold text-emerald underline-offset-4 hover:underline">{s.code ? `${s.code} ` : ""}{s.title}</Link></td>
                    <td className="whitespace-nowrap px-3 py-2"><Stars n={n} size="0.85rem" /></td>
                  </tr>
                ); }))}
              </tbody>
            </table>
          </div>
        )}
      </Page>
    </>
  );
}
