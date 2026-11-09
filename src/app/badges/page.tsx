"use client";

import { useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { PathOfLight } from "@/components/path-of-light";
import { POINTS, useProgress } from "@/components/progress";
import { BADGES, badgeLevel } from "@/content/badges";

export default function BadgesPage() {
  const { points, reset } = useProgress();
  const [confirming, setConfirming] = useState(false);
  const lvl = badgeLevel(points);

  return (
    <>
      <PageHeader eyebrow="Path of Light" title="Your badges"
        sub={`Every 1,000 points earns the next badge, up to 10. You have ${points.toLocaleString()} points.`} />
      <Page>
        <section className="card flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.3rem]">{lvl ? `${lvl} of 10 earned` : "No badges yet"}</h2>
            <span className="font-bold tabular-nums text-fg-muted">{lvl >= 10 ? "Complete" : `${(1000 - (points % 1000)).toLocaleString()} points to ${BADGES[lvl].name}`}</span>
          </div>
          <div className="progress"><i style={{ width: `${Math.min(100, points / 100)}%` }} /></div>
        </section>

        <PathOfLight points={points} />

        <section className="card flex flex-col gap-2.5">
          <h2 className="text-[1.2rem]">How points work</h2>
          <ul className="flex max-w-[65ch] list-disc flex-col gap-1.5 pl-5 text-fg-muted">
            <li>{POINTS.firstCorrect} points for each question you answer correctly for the first time, {POINTS.repeatCorrect} points on repeats.</li>
            <li>{POINTS.perfectRound} bonus points for your first perfect round in a topic.</li>
            <li>{POINTS.guideStudied} points for studying each prayer guide and the wuḍūʾ guide.</li>
            <li>Points come from learning. Your own worship is between you and Allah, so it is never scored.</li>
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            {!confirming ? (
              <button type="button" className="btn btn-ghost" onClick={() => setConfirming(true)}>Reset my progress</button>
            ) : (
              <>
                <span className="text-fg-muted">Erase all points and badges?</span>
                <button type="button" className="btn !bg-danger" onClick={() => { reset(); setConfirming(false); }}>Yes, reset</button>
                <button type="button" className="btn btn-ghost" onClick={() => setConfirming(false)}>Cancel</button>
              </>
            )}
          </div>
        </section>
      </Page>
    </>
  );
}
