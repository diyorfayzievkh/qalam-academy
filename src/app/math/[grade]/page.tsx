"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { gradeStars, starsFor, Stars } from "@/components/math/progress";
import { findGrade, subtopicsOf, TEST_LEN } from "@/content/math";

/** A grade: topics → subtopics → items with stars, tests, records and the learning plan. */
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
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-bold">⭐ {have} / {max}</span>
            <Link href={`/math/${g.id}/records`} className="btn btn-ghost">📋 Records</Link>
            <Link href={`/math/${g.id}/test`} className="btn">🏆 Grade test · {TEST_LEN.grade} Q{starsFor(studied, `${g.id}/grade`) ? <> · <Stars n={starsFor(studied, `${g.id}/grade`)} size="0.8rem" /></> : null}</Link>
          </div>
        </div>

        {view === "map" ? g.topics.map((t) => (
          <section key={t.id} className="flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Link href={`/math/${g.id}/topic/${t.id}`} className="flex items-center gap-2 text-[1.2rem] font-bold hover:underline">
                <span className="grid h-9 w-9 place-items-center rounded-full text-[1.1rem]" style={{ background: `${t.color}22` }}>{t.icon}</span>{t.title}
              </Link>
              <Link href={`/math/${g.id}/topic/${t.id}`} className="btn btn-ghost px-3 py-1.5 text-[0.88rem]">Topic overview & test · {TEST_LEN.topic} Q{starsFor(studied, `${g.id}/topic-${t.id}`) ? <> · <Stars n={starsFor(studied, `${g.id}/topic-${t.id}`)} size="0.8rem" /></> : null}</Link>
            </div>
            <div className="grid gap-2.5 md:grid-cols-2">
              {subtopicsOf(t).map((st) => (
                <div key={st.id} className="flex flex-col gap-2 rounded-card border border-border bg-bg-surface p-3" style={{ borderLeft: `5px solid ${t.color}` }}>
                  <Link href={`/math/${g.id}/topic/${t.id}/${st.id}`} className="flex items-center justify-between gap-2 hover:underline">
                    <b className="text-[0.95rem] uppercase tracking-[0.04em]" style={{ color: t.color }}>{st.name}</b>
                    <span className="flex items-center gap-1.5 text-[0.78rem] font-bold text-fg-muted"><Stars n={starsFor(studied, `${g.id}/st-${st.id}`)} size="0.75rem" /> test</span>
                  </Link>
                  {st.subs.map((s) => (
                    <Link key={s.id} href={`/math/${g.id}/${s.id}`} className="lift flex items-center gap-3 rounded-btn border border-border p-2.5 hover:border-emerald">
                      <div className="flex min-w-0 flex-1 flex-col">
                        {s.code && <span className="font-mono text-[0.72rem] font-bold text-fg-muted">{s.code}</span>}
                        <span className="font-bold leading-snug">{s.title}</span>
                      </div>
                      <Stars n={starsFor(studied, `${g.id}/${s.id}`)} size="0.85rem" />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )) : (
          <div className="card overflow-x-auto p-0">
            <table className="w-full min-w-[680px] border-collapse text-left text-[0.92rem]">
              <thead><tr className="bg-emerald-soft">{["", "Topic", "Subtopic", "Item", "Item", "Subtopic test"].map((h, i) => <th key={i} className="border-b-2 border-border px-3 py-2 font-bold">{h}</th>)}</tr></thead>
              <tbody>
                {g.topics.flatMap((t) => subtopicsOf(t).flatMap((st) => st.subs.map((s) => { const n = starsFor(studied, `${g.id}/${s.id}`); return (
                  <tr key={s.id} className="border-b border-border">
                    <td className="px-3 py-2 text-[1.1rem]">{n === 3 ? "☑" : "☐"}</td>
                    <td className="px-3 py-2"><Link href={`/math/${g.id}/topic/${t.id}`} className="hover:underline">{t.title}</Link></td>
                    <td className="px-3 py-2"><Link href={`/math/${g.id}/topic/${t.id}/${st.id}`} className="hover:underline">{st.name}</Link></td>
                    <td className="px-3 py-2"><Link href={`/math/${g.id}/${s.id}`} className="font-bold text-emerald underline-offset-4 hover:underline">{s.code ? `${s.code} ` : ""}{s.title}</Link></td>
                    <td className="whitespace-nowrap px-3 py-2"><Stars n={n} size="0.85rem" /></td>
                    <td className="whitespace-nowrap px-3 py-2"><Stars n={starsFor(studied, `${g.id}/st-${st.id}`)} size="0.85rem" /></td>
                  </tr>
                ); })))}
              </tbody>
            </table>
          </div>
        )}
      </Page>
    </>
  );
}
