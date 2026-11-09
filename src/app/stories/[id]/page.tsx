"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { POINTS, useProgress } from "@/components/progress";
import { RecitationBlock } from "@/components/recitation";
import { BEDTIME, BEDTIME_CATS, bedtimeMinutes, findBedtime, type Bedtime } from "@/content/bedtime";

const SLEEP_DUA = { ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", tr: "Bismika-llāhumma amūtu wa aḥyā.", en: "In Your name, O Allah, I die and I live." };

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const s = findBedtime(id);
  const { studied, markStudied } = useProgress();
  if (!s) notFound();
  const cat = BEDTIME_CATS.find((c) => c.id === s.cat)!;
  const list = BEDTIME.filter((x) => x.cat === s.cat);
  const i = list.findIndex((x) => x.id === s.id);
  const next = list[i + 1] ?? BEDTIME[(BEDTIME.indexOf(s) + 1) % BEDTIME.length];
  const done = !!studied[`story:${s.id}`];

  return (
    <>
      <PageHeader eyebrow={`Bedtime Stories · ${cat.title}`} title={s.title} sub={s.teaser} />
      <Page>
        <Link href="/stories" className="font-bold text-fg-muted">← All stories</Link>
        <ReadAloud s={s} />
        <article className="card flex flex-col gap-4">
          <span className="eyebrow">{bedtimeMinutes(s)}-minute story</span>
          {s.paras.map((p) => <p key={p} className="max-w-[62ch] text-[1.12rem] leading-[1.9]">{p}</p>)}
        </article>
        <section className="flex flex-col gap-3 rounded-card border-2 border-gold-bright/60 px-5 py-4">
          <span className="eyebrow !text-gold">The lesson</span>
          <p className="max-w-[62ch] font-display text-[1.15rem] leading-snug">{s.moral}</p>
          <div className="rounded-xl bg-emerald-soft px-4 py-3"><b className="text-emerald">Talk before sleep:</b> {s.talk}</div>
        </section>
        <section className="card flex flex-col gap-2">
          <span className="eyebrow">Bedtime duʿāʾ</span>
          <RecitationBlock r={SLEEP_DUA} />
          <p className="text-[0.82rem] font-bold text-gold">Bukhari 6324 · then recite Āyat al-Kursī and the three Quls</p>
        </section>
        <p className="text-[0.85rem] text-fg-muted">Source: {s.src}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" className="btn btn-gold" disabled={done} onClick={() => markStudied(`story:${s.id}`, "bedtime story", POINTS.lessonRead)}>
            {done ? "Read ✓" : `Finished · +${POINTS.lessonRead}`}
          </button>
          <Link className="btn btn-ghost" href={`/stories/${next.id}`}>Next: {next.title}</Link>
        </div>
      </Page>
    </>
  );
}

function ReadAloud({ s }: { s: Bedtime }) {
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [ok, setOk] = useState(false);
  const queue = useRef<SpeechSynthesisUtterance[]>([]);

  useEffect(() => {
    setOk(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => { try { window.speechSynthesis.cancel(); } catch { /* ignore */ } };
  }, []);
  useEffect(() => { try { window.speechSynthesis?.cancel(); } catch { /* ignore */ } setState("idle"); }, [s.id]);
  if (!ok) return null;

  function play() {
    const synth = window.speechSynthesis;
    if (state === "paused") { synth.resume(); setState("playing"); return; }
    synth.cancel();
    const parts = [s.title, ...s.paras, `The lesson. ${s.moral}`];
    const voice = synth.getVoices().find((v) => v.lang.startsWith("en"));
    queue.current = parts.map((t, k) => {
      const u = new SpeechSynthesisUtterance(t);
      u.rate = 0.9; u.pitch = 1;
      if (voice) u.voice = voice;
      if (k === parts.length - 1) u.onend = () => setState("idle");
      synth.speak(u);
      return u;
    });
    setState("playing");
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <button type="button" className="btn" onClick={() => (state === "playing" ? (window.speechSynthesis.pause(), setState("paused")) : play())}>
        {state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Read aloud"}
      </button>
      {state !== "idle" && <button type="button" className="btn btn-ghost" onClick={() => { window.speechSynthesis.cancel(); setState("idle"); }}>Stop</button>}
      <span className="text-[0.85rem] text-fg-muted">Uses your device’s voice. Arabic names may sound unusual.</span>
    </div>
  );
}
