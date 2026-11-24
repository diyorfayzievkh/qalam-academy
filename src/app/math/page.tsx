"use client";

import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { gradeStars } from "@/components/math/progress";
import { GRADES } from "@/content/math";

/** Mathematics: choose a grade. */
export default function MathHome() {
  const { studied } = useProgress();
  return (
    <>
      <PageHeader eyebrow="Mathematics" title="Math Quest" sub="Clear lessons with pictures, endless hands-on practice, and quizzes with stars for grades 2 to 5." />
      <Page>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {GRADES.map((g) => {
            const { have, max } = gradeStars(studied, g); const subs = g.topics.reduce((n, t) => n + t.subs.length, 0);
            return (
              <Link key={g.id} href={`/math/${g.id}`} className="lift flex flex-col overflow-hidden rounded-card border-2 border-border bg-bg-surface hover:border-emerald">
                <div className="flex items-center gap-4 p-4 text-white" style={{ background: `linear-gradient(135deg, ${g.color}, ${g.color}cc)` }}>
                  <span className="grid h-16 w-16 flex-none place-items-center rounded-full bg-white/20 text-[2.2rem] font-extrabold">{g.n}</span>
                  <div className="flex flex-col"><b className="text-[1.35rem]">{g.title}</b><span className="text-[0.9rem] opacity-90">{g.topics.length} topics · {subs} skills</span></div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <p className="text-[0.92rem] text-fg-muted">{g.sub}</p>
                  <div className="flex items-center gap-2 text-[0.88rem] font-bold">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-border"><i className="block h-full rounded-full" style={{ width: `${(have / max) * 100}%`, background: g.color }} /></div>
                    ⭐ {have} / {max}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="card flex flex-col gap-1.5 text-[0.95rem]">
          <b>How it works</b>
          <span>📖 <b>Learn</b>: a short explanation with a picture and worked examples.</span>
          <span>✏️ <b>Practice</b>: as many problems as you like, with hints. Build a streak!</span>
          <span>⭐ <b>Quiz</b>: 10 questions. 6 right earns 1 star, 8 earns 2, all 10 earns 3 and a trophy.</span>
          <span>🏆 <b>Tests</b>: a test for each topic and a big test for the whole grade.</span>
        </div>
      </Page>
    </>
  );
}
