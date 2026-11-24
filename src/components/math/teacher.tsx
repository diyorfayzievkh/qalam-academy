"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAccount } from "@/components/account";
import { useProgress } from "@/components/progress";
import { ProblemCard } from "@/components/math/problem";
import { MathVisual } from "@/components/math/visual";
import { HOOK } from "@/content/math/hooks";
import { TOPIC_INTRO } from "@/content/math/subtopics";
import type { Subtopic } from "@/content/math";
import type { Example, Problem, Sub, Topic, Visual } from "@/content/math/types";
import { sentences, speakable, teacherVoice } from "@/lib/teacher-voice";

// ------------------------------------------------------------------ scenes
type Scene =
  | { kind: "hello"; say: string; title: string; icon: string; badge?: string }
  | { kind: "story"; say: string }
  | { kind: "idea"; say: string; visual?: Visual; heading: string }
  | { kind: "steps"; say: string; steps: string[]; at: number; visual?: Visual }
  | { kind: "example"; say: string; ex: Example; shown: number; done: boolean }
  | { kind: "tip"; say: string }
  | { kind: "map"; say: string; items: string[]; at: number }
  | { kind: "turn"; say: string }
  | { kind: "bye"; say: string; next: string };

const NAME = "Mrs. Sizemore";
const PHOTO = "/math/mrs-sizemore.jpg";
/** Replaced with ", Ali" (the child's first name) or "" when spoken. */
const KID = "{kid}";

function exampleScenes(ex: Example, intro: string): Scene[] {
  const out: Scene[] = [{ kind: "example", say: `${intro} ${ex.q}.`, ex, shown: 0, done: false }];
  ex.work.forEach((w, j) => out.push({ kind: "example", say: w, ex, shown: j + 1, done: false }));
  out.push({ kind: "example", say: `So the answer is ${ex.answer}. ${["Well done!", "Easy, right?", "We got it!"][ex.q.length % 3]}`, ex, shown: ex.work.length, done: true });
  return out;
}

export function itemScenes(s: Sub, t: Topic, testLen: number): Scene[] {
  const out: Scene[] = [
    { kind: "hello", title: s.title, icon: t.icon, badge: s.code,
      say: `Assalamu alaikum${KID}! I'm ${NAME}, your maths teacher. I'm so happy to see you. Today's lesson is: ${s.title}. Let's begin!` },
  ];
  if (HOOK[s.id]) out.push({ kind: "story", say: HOOK[s.id] });
  out.push({ kind: "idea", heading: "The big idea", say: s.bigIdea, visual: s.visual });
  s.steps.forEach((st, k) => out.push({ kind: "steps", steps: s.steps, at: k, visual: s.visual,
    say: `${k === 0 ? "Here is how we do it. " : ""}Step ${k + 1}. ${st}` }));
  s.examples.slice(0, 2).forEach((ex, k) => out.push(...exampleScenes(ex, k === 0 ? "Let's try one together." : "Here's another one.")));
  if (s.tip) out.push({ kind: "tip", say: `Here's a clever trick. ${s.tip}` });
  out.push({ kind: "turn", say: `Now it's your turn${KID}! Have a go at this one.` });
  out.push({ kind: "bye", next: `Practise below, then take the ${testLen}-question test`,
    say: `Wonderful work today! Now practise a few more, and when you feel ready, take the ${testLen}-question test. You can do it, in sha Allah!` });
  return out;
}

export function subtopicScenes(st: Subtopic, t: Topic, testLen: number): Scene[] {
  const titles = st.subs.map((s) => s.title);
  const n = st.subs.length;
  const out: Scene[] = [
    { kind: "hello", title: st.name, icon: t.icon,
      say: `Assalamu alaikum${KID}! I'm ${NAME}, your maths teacher. In this lesson we explore ${st.name}. ${n === 1 ? "There is one skill to learn." : `There are ${n} skills, from easier to harder.`}` },
  ];
  st.subs.forEach((s, k) => {
    if (n > 1) out.push({ kind: "map", items: titles, at: k, say: `Skill ${k + 1}: ${s.title}.` });
    if (HOOK[s.id]) out.push({ kind: "story", say: HOOK[s.id] });
    out.push({ kind: "idea", heading: n > 1 ? `Skill ${k + 1}: the big idea` : "The big idea", say: s.bigIdea, visual: s.visual });
    out.push(...exampleScenes(s.examples[0], "Let's see it in action."));
  });
  if (n > 1) out.push({ kind: "map", items: titles, at: -1, say: "See how the skills build on each other? The second skill uses the same idea as the first, just with bigger numbers." });
  out.push({ kind: "turn", say: `Your turn${KID}! Let's check what you've learned.` });
  out.push({ kind: "bye", next: `Open each item to practise, then take the ${testLen}-question subtopic test`,
    say: `Masha'Allah, great job! Open each item to practise, then try the ${testLen}-question subtopic test.` });
  return out;
}

export function topicScenes(subs: Subtopic[], t: Topic, gradeId: string, testLen: number): Scene[] {
  const names = subs.map((x) => x.name);
  const out: Scene[] = [
    { kind: "hello", title: t.title, icon: t.icon,
      say: `Assalamu alaikum${KID}! I'm ${NAME}, your maths teacher. Welcome to the topic: ${t.title}. Let me show you the whole map before we start.` },
  ];
  if (TOPIC_INTRO[`${gradeId}/${t.id}`]) out.push({ kind: "idea", heading: "What this topic is about", say: TOPIC_INTRO[`${gradeId}/${t.id}`] });
  out.push({ kind: "map", items: names, at: -1, say: `This topic has ${subs.length} part${subs.length > 1 ? "s" : ""}. Let's visit each one.` });
  subs.forEach((st, k) => {
    const first = st.subs[0];
    out.push({ kind: "map", items: names, at: k, say: `Part ${k + 1}: ${st.name}.${HOOK[first.id] ? ` ${HOOK[first.id]}` : ""}` });
    out.push({ kind: "idea", heading: st.name, visual: first.visual, say: first.bigIdea });
  });
  out.push({ kind: "turn", say: `Ready for a quick challenge${KID}? Here is one from this topic.` });
  out.push({ kind: "bye", next: `Learn each subtopic, then take the ${testLen}-question topic test`,
    say: `Excellent! Now open each subtopic to learn it step by step. When you're ready, take the ${testLen}-question topic test. Bismillah!` });
  return out;
}

// ------------------------------------------------------------------ teacher
function Teacher({ talking, happy }: { talking: boolean; happy: boolean }) {
  return (
    <span className="relative block h-full w-full">
      {talking && <span className="nur-ring absolute inset-0 rounded-full" style={{ boxShadow: "0 0 0 3px var(--t-ring)" }} aria-hidden />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PHOTO} alt={NAME} className="relative h-full w-full rounded-full border-[3px] object-cover shadow-sm" style={{ borderColor: "var(--t-ring)" }} />
      {talking && <span className="absolute -bottom-0.5 -right-0.5 flex h-6 items-end gap-[2px] rounded-full bg-bg-surface px-1.5 py-1 shadow-sm" aria-hidden>
        {[0, 1, 2].map((k) => <i key={k} className="nur-wave block w-[3px] rounded-full" style={{ background: "var(--t-ring)", animationDelay: `${k * 0.12}s` }} />)}
      </span>}
      {happy && !talking && <span className="nur-pop absolute -right-1 -top-1 text-[1.3rem]" aria-hidden>⭐</span>}
    </span>
  );
}

function Burst() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {Array.from({ length: 14 }, (_, i) => (
      <span key={i} className="nur-star absolute text-[1.2rem]" style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 5) * 0.08}s` }}>{["⭐", "✨", "🌟"][i % 3]}</span>
    ))}
  </div>;
}

// ------------------------------------------------------------------ board
function Board({ sc, color, turn }: { sc: Scene; color: string; turn: React.ReactNode }) {
  switch (sc.kind) {
    case "hello": return (
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <span className="text-[3.2rem] leading-none">{sc.icon}</span>
        {sc.badge && <span className="font-mono text-[0.8rem] text-fg-muted">{sc.badge}</span>}
        <h3 className="text-balance text-[1.4rem] font-extrabold">{sc.title}</h3>
      </div>);
    case "story": return (
      <div className="flex flex-col gap-2 py-2">
        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">📖 Story time</span>
        <p className="text-[1.12rem] leading-relaxed">{sc.say}</p>
      </div>);
    case "idea": return (
      <div className="flex flex-col gap-3">
        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">💡 {sc.heading}</span>
        {sc.visual ? <div className="rounded-btn bg-bg-surface p-3 shadow-sm"><MathVisual v={sc.visual} /></div>
          : <p className="text-[1.08rem] leading-relaxed">{sc.say}</p>}
      </div>);
    case "steps": return (
      <div className="grid items-center gap-3 md:grid-cols-[1.1fr_1fr]">
        <ol className="flex flex-col gap-2">
          {sc.steps.map((st, k) => (
            <li key={k} className={`flex gap-2.5 rounded-btn px-2 py-1.5 transition-all ${k === sc.at ? "scale-[1.02] bg-bg-surface shadow-sm" : k < sc.at ? "opacity-70" : "opacity-35"}`}>
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full text-[0.85rem] font-extrabold text-white" style={{ background: k <= sc.at ? color : "var(--fg-muted, #888)" }}>{k < sc.at ? "✓" : k + 1}</span>
              <span className="pt-0.5 leading-snug">{st}</span>
            </li>))}
        </ol>
        {sc.visual && <div className="rounded-btn bg-bg-surface p-2 shadow-sm"><MathVisual v={sc.visual} /></div>}
      </div>);
    case "example": return (
      <div className="relative flex flex-col gap-2.5">
        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">✍️ Let&apos;s solve it</span>
        <b className="text-[1.3rem]">{sc.ex.q}</b>
        <ul className="flex flex-col gap-1.5">
          {sc.ex.work.slice(0, sc.shown).map((w, j) => <li key={j} className="nur-pop text-[1.05rem]">→ {w}</li>)}
        </ul>
        {sc.done && <span className="nur-pop self-start rounded-btn bg-emerald-soft px-4 py-1.5 text-[1.2rem] font-extrabold text-emerald">Answer: {sc.ex.answer} ✓</span>}
        {sc.done && <Burst />}
      </div>);
    case "tip": return (
      <div className="flex flex-col gap-2 py-2">
        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">🪄 Clever trick</span>
        <p className="rounded-btn bg-gold-soft px-3 py-2.5 text-[1.1rem] leading-relaxed">{sc.say.replace(/^Here's a clever trick\. /, "")}</p>
      </div>);
    case "map": return (
      <div className="flex flex-col gap-2">
        <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">🗺️ The map</span>
        <ol className="flex flex-col gap-1.5">
          {sc.items.map((it, k) => (
            <li key={k} className={`flex items-center gap-2.5 rounded-btn px-2 py-1.5 transition-all ${k === sc.at ? "scale-[1.02] bg-bg-surface font-bold shadow-sm" : sc.at >= 0 ? "opacity-50" : ""}`}>
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full text-[0.85rem] font-extrabold text-white" style={{ background: color }}>{k + 1}</span>{it}
            </li>))}
        </ol>
      </div>);
    case "turn": return <div className="flex flex-col gap-2"><span className="text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-gold">🙋 Your turn</span>{turn}</div>;
    case "bye": return (
      <div className="relative flex flex-col items-center gap-2 py-4 text-center">
        <span className="text-[3rem] leading-none">🎉</span>
        <h3 className="text-[1.3rem] font-extrabold">Lesson complete!</h3>
        <p className="text-fg-muted">{sc.next}.</p>
        <Burst />
      </div>);
  }
}

// ------------------------------------------------------------------ player
const WAIT_AFTER = 700; // pause between scenes, ms

export function TeacherLesson({ scenes, color, scope, gens, label }: {
  scenes: Scene[]; color: string; scope: string; gens: (() => Problem)[]; label: string;
}) {
  const { answerCorrect, markStudied } = useProgress();
  const { user } = useAccount();
  const first = user?.name?.trim().split(/\s+/)[0] ?? "";
  const kid = useCallback((t: string) => t.split(KID).join(first ? `, ${first}` : ""), [first]);
  const [open, setOpen] = useState(false);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [talking, setTalking] = useState(false);
  const [line, setLine] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);
  const [slow, setSlow] = useState(false);
  const [turnP, setTurnP] = useState<Problem | null>(null);
  const [turnDone, setTurnDone] = useState<null | boolean>(null);
  const [feedback, setFeedback] = useState("");
  const run = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const hasSpeech = typeof window !== "undefined" && "speechSynthesis" in window;
  const sc = scenes[i];
  const minutes = useMemo(() => Math.max(1, Math.round(scenes.reduce((a, s) => a + s.say.length, 0) / 14 / 60 + scenes.length * 0.012)), [scenes]);

  const hush = useCallback(() => {
    run.current++; clearTimeout(timer.current); setTalking(false);
    try { window.speechSynthesis.cancel(); } catch { /* none */ }
  }, []);
  useEffect(() => () => hush(), [hush]);
  useEffect(() => { // voices load late on some devices
    if (!hasSpeech) return; const s = window.speechSynthesis; s.getVoices();
    const f = () => s.getVoices(); s.addEventListener?.("voiceschanged", f);
    return () => s.removeEventListener?.("voiceschanged", f);
  }, [hasSpeech]);

  /** Read `text` sentence by sentence; call `done` when finished (unless interrupted). */
  const say = useCallback((text: string, done: () => void) => {
    const me = ++run.current; clearTimeout(timer.current);
    const parts = sentences(text);
    let k = 0;
    const step = () => {
      if (me !== run.current) return;
      if (k >= parts.length) { setTalking(false); done(); return; }
      setLine(k);
      const est = Math.max(1800, (parts[k].length * 75) / (slow ? 0.8 : 1));
      if (!voiceOn || !hasSpeech) { setTalking(false); timer.current = setTimeout(() => { k++; step(); }, est); return; }
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(speakable(parts[k]));
      const v = teacherVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
      u.rate = slow ? 0.8 : 0.95; u.pitch = 1.08;
      let ended = false;
      const fin = () => { if (ended || me !== run.current) return; ended = true; clearTimeout(timer.current); k++; step(); };
      u.onend = fin; u.onerror = fin;
      setTalking(true); synth.speak(u);
      timer.current = setTimeout(fin, est * 2.2 + 2500); // some browsers forget onend
    };
    step();
  }, [voiceOn, hasSpeech, slow]);

  const go = useCallback((n: number, autoplay: boolean) => {
    hush();
    const j = Math.max(0, Math.min(scenes.length - 1, n));
    setI(j); setLine(0);
    const s = scenes[j];
    if (s.kind === "turn") { setTurnP(gens[Math.floor(Math.random() * gens.length)]()); setTurnDone(null); setFeedback(""); }
    if (s.kind === "bye") markStudied(`math-teach:${scope}`, "teacher lesson", 10);
    if (!autoplay) { setPlaying(false); return; }
    setPlaying(true);
    say(kid(s.say), () => {
      if (s.kind === "turn" || s.kind === "bye") { setPlaying(false); return; }
      timer.current = setTimeout(() => go(j + 1, true), WAIT_AFTER);
    });
  }, [hush, scenes, gens, markStudied, scope, say, kid]);

  function start() { setOpen(true); go(0, true); }
  function toggle() { if (playing) { hush(); setPlaying(false); } else go(i, true); }

  function onTurn(right: boolean) {
    setTurnDone(right);
    if (right) answerCorrect(`math-teach:${scope}:turn`);
    const msg = right ? ["Masha'Allah, that's right!", "Brilliant! You got it!", "Yes! Well done!"][Math.floor(Math.random() * 3)]
      : `Good try! ${turnP?.explain ?? ""} Let's keep learning.`;
    setFeedback(msg); setPlaying(true);
    say(msg, () => { timer.current = setTimeout(() => go(i + 1, true), right ? 900 : 1500); });
  }

  const caption = sc.kind === "turn" && feedback ? feedback : kid(sc.say);
  const capParts = sentences(caption);
  const happy = sc.kind === "bye" || (sc.kind === "example" && sc.done) || turnDone === true;

  if (!open) return (
    <button type="button" onClick={start} className="lift flex w-full items-center gap-3 rounded-card border border-border bg-bg-surface p-3 text-left hover:border-emerald" style={{ borderLeft: `5px solid ${color}` }}>
      <style>{CSS}</style>
      <span className="h-16 w-16 flex-none" style={{ ["--t-ring" as string]: color }}><Teacher talking={false} happy={false} /></span>
      <span className="flex min-w-0 flex-1 flex-col">
        <b className="text-[1.08rem]">🎬 {NAME} is ready to teach you{first ? `, ${first}` : ""}</b>
        <span className="text-[0.92rem] text-fg-muted">{label} · about {minutes} min · with pictures, examples and a question for you</span>
      </span>
      <span className="btn flex-none">▶ Play</span>
    </button>
  );

  return (
    <section className="flex flex-col gap-3 rounded-card border border-border bg-bg-surface p-3 sm:p-4" style={{ borderTop: `5px solid ${color}` }} aria-label={`${NAME} lesson`}>
      <style>{CSS}</style>
      <div className="flex items-start gap-3">
        <span className={`h-20 w-20 flex-none sm:h-24 sm:w-24 ${talking ? "nur-bob" : ""}`} style={{ ["--t-ring" as string]: color }}>
          <Teacher talking={talking} happy={happy} />
        </span>
        <div className="relative min-w-0 flex-1 rounded-card bg-bg px-3.5 py-2.5 text-[1.02rem] leading-relaxed shadow-sm" aria-live="polite">
          <span className="absolute -left-2 top-6 h-4 w-4 rotate-45 bg-bg" aria-hidden />
          <b className="mb-0.5 block text-[0.78rem] uppercase tracking-[0.1em]" style={{ color }}>{NAME}</b>
          {capParts.map((p, k) => <span key={k} className={k === line ? "font-semibold text-fg" : k < line ? "text-fg-muted" : "text-fg-muted opacity-70"}>{p} </span>)}
        </div>
      </div>

      <div className="nur-paper relative min-h-[180px] overflow-hidden rounded-card border border-border p-3 sm:p-4" key={i}>
        <div className="nur-fade relative">
          <Board sc={sc} color={color} turn={turnP && (
            <ProblemCard key={`${i}-${turnP.prompt}`} p={turnP} showHint onDone={(right) => onTurn(right)} />
          )} />
        </div>
      </div>

      <div className="flex gap-1" aria-hidden>
        {scenes.map((_, k) => <i key={k} className="h-1.5 flex-1 rounded-full transition-colors" style={{ background: k <= i ? color : "var(--border, #ddd)" }} />)}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-ghost" onClick={() => go(i - 1, true)} disabled={i === 0} aria-label="Back">⏮</button>
          <button type="button" className="btn" onClick={toggle}>{playing ? "⏸ Pause" : sc.kind === "bye" ? "🔁 Replay" : "▶ Play"}</button>
          <button type="button" className="btn btn-ghost" onClick={() => (sc.kind === "bye" ? go(0, true) : go(i + 1, true))} aria-label="Next">⏭</button>
        </div>
        <div className="flex flex-wrap gap-2 text-[0.9rem]">
          {hasSpeech && <button type="button" className="btn btn-ghost" onClick={() => { hush(); setPlaying(false); setVoiceOn((v) => !v); }}>{voiceOn ? "🔊 Voice on" : "🔇 Voice off"}</button>}
          <button type="button" className="btn btn-ghost" onClick={() => { hush(); setPlaying(false); setSlow((v) => !v); }}>{slow ? "🐢 Slow" : "🐇 Normal"}</button>
          <button type="button" className="btn btn-ghost" onClick={() => { hush(); setPlaying(false); setOpen(false); setI(0); }}>Close</button>
        </div>
      </div>
      {sc.kind === "turn" && turnDone === null && <p className="text-center text-[0.88rem] text-fg-muted">Answer the question to continue, or tap ⏭ to skip.</p>}
    </section>
  );
}

const CSS = `
@keyframes nur-ring { 0% { transform: scale(1); opacity: .9 } 100% { transform: scale(1.18); opacity: 0 } }
.nur-ring { animation: nur-ring 1.1s ease-out infinite; }
@keyframes nur-wave { 0%,100% { height: 4px } 50% { height: 13px } }
.nur-wave { height: 4px; animation: nur-wave .6s ease-in-out infinite; }
@keyframes nur-talk { 0%,100% { transform: scaleY(.35) } 50% { transform: scaleY(1) } }
.nur-talk { transform-origin: 60px 78px; transform-box: view-box; animation: nur-talk .22s ease-in-out infinite; }
@keyframes nur-blink { 0%,94%,100% { transform: scaleY(1) } 97% { transform: scaleY(.1) } }
.nur-blink { transform-origin: 60px 62px; transform-box: view-box; animation: nur-blink 4s infinite; }
@keyframes nur-bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-2px) } }
.nur-bob { animation: nur-bob .9s ease-in-out infinite; }
@keyframes nur-fade { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
.nur-fade { animation: nur-fade .35s ease-out; }
@keyframes nur-pop { 0% { opacity: 0; transform: scale(.9) } 70% { transform: scale(1.04) } 100% { opacity: 1; transform: none } }
.nur-pop { animation: nur-pop .4s ease-out both; }
@keyframes nur-star { from { transform: translateY(-20px) rotate(0); opacity: 1 } to { transform: translateY(240px) rotate(200deg); opacity: 0 } }
.nur-star { top: 0; animation: nur-star 1.6s ease-in forwards; }
.nur-paper { background-color: var(--nur-paper, transparent);
  background-image: linear-gradient(color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, currentColor 7%, transparent) 1px, transparent 1px);
  background-size: 22px 22px; }
@media (prefers-reduced-motion: reduce) { .nur-ring,.nur-wave,.nur-talk,.nur-blink,.nur-bob,.nur-fade,.nur-pop,.nur-star { animation: none } }
`;
