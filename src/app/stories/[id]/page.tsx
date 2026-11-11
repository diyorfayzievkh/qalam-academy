"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { POINTS, useProgress } from "@/components/progress";
import { RecitationBlock } from "@/components/recitation";
import { BEDTIME, BEDTIME_CATS, bedtimeMinutes, findBedtime, type Bedtime } from "@/content/bedtime";
import { StoryCover } from "@/components/story-art";
import { useT } from "@/components/lang";
import { StoryThemeToggle, useStoryTheme } from "@/components/story-theme";
import { useStoryTranslations } from "@/content/i18n/stories";

const SLEEP_DUA = { ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", tr: "Bismika-llāhumma amūtu wa aḥyā.", en: "In Your name, O Allah, I die and I live." };

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const base = findBedtime(id);
  const { studied, markStudied } = useProgress();
  const { t, lang } = useT();
  const trMap = useStoryTranslations(lang);
  const tr = base ? trMap?.[base.id] : undefined;
  const s = base ? (tr ? { ...base, ...tr } : base) : undefined;
  const [dim, setDim] = useState(false);
  const [mode, setMode] = useStoryTheme();
  const [prog, setProg] = useState(0);
  const art = useRef<HTMLElement>(null);
  useEffect(() => {
    const on = () => {
      const el = art.current; if (!el) return;
      const r = el.getBoundingClientRect();
      setProg(Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height)));
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [id]);
  if (!s) notFound();
  const cat = BEDTIME_CATS.find((c) => c.id === s.cat)!;
  const list = BEDTIME.filter((x) => x.cat === s.cat);
  const i = list.findIndex((x) => x.id === s.id);
  const next = list[i + 1] ?? BEDTIME[(BEDTIME.indexOf(s) + 1) % BEDTIME.length];
  const done = !!studied[`story:${s.id}`];

  return (
    <div className={`${mode} ${dim ? "lights-down" : ""}`}>
      <div className="fixed inset-x-0 top-0 z-40 h-[3px] bg-transparent" aria-hidden>
        <i className="block h-full bg-gradient-to-r from-[#B5832A] to-[#FFE39A] transition-[width] duration-150" style={{ width: `${prog * 100}%` }} />
      </div>
      <div data-dim><PageHeader eyebrow={`${t("Bedtime Stories")} · ${t(cat.title)}`} title={s.title} sub={s.teaser} /></div>
      <Page>
        <div data-dim className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/stories" className="font-bold text-fg-muted">← {t("All stories")}</Link>
          <div className="flex flex-wrap items-center gap-2">
          <StoryThemeToggle mode={mode} setMode={setMode} />
          <button type="button" onClick={() => setDim((d) => !d)} aria-pressed={dim}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[0.88rem] font-bold text-fg-muted hover:border-gold-bright">
            <span aria-hidden>{dim ? "◐" : "◑"}</span>{dim ? t("Show everything") : t("Focus on text")}
          </button>
          </div>
        </div>
        <StoryCover s={s} day={mode === "paper"} className="h-[180px] rounded-card sm:h-[220px]" />
        {lang !== "en" && trMap && !tr && <p data-dim className="rounded-xl bg-gold-soft px-4 py-2.5 text-[0.9rem] font-bold text-gold">{t("This story is not translated yet, so it is shown in English.")}</p>}
        <div data-dim><ReadAloud s={s} lang={tr ? lang : "en"} /></div>
        <article ref={art} className="flex flex-col gap-5 rounded-card border border-border bg-bg-surface/70 px-5 py-6 sm:px-9 sm:py-8">
          <span className="eyebrow">{t("{n}-minute story", { n: bedtimeMinutes(s) })}</span>
          {s.paras.map((p, k) => (
            <p key={p} className={`font-story max-w-[62ch] text-[1.16rem] leading-[1.95] ${k === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.9] first-letter:text-gold-bright" : ""}`}>{p}</p>
          ))}
        </article>
        <section className="flex flex-col gap-3 rounded-card border-2 border-gold-bright/60 bg-bg-surface/60 px-5 py-4">
          <span className="eyebrow !text-gold">{t("The lesson")}</span>
          <p className="font-story max-w-[62ch] text-[1.15rem] leading-snug">{s.moral}</p>
          <div className="rounded-xl bg-emerald-soft px-4 py-3"><b className="text-gold-bright">{t("Talk before sleep")}:</b> {s.talk}</div>
        </section>
        <section className="card flex flex-col gap-2">
          <span className="eyebrow">{t("Bedtime duʿāʾ")}</span>
          <RecitationBlock r={SLEEP_DUA} />
          <p className="text-[0.82rem] font-bold text-gold">Bukhari 6324 · {t("then recite Āyat al-Kursī and the three Quls")}</p>
        </section>
        <p data-dim className="text-[0.85rem] text-fg-muted">{t("Source")}: {s.src}</p>
        <div data-dim className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" className="btn btn-gold" disabled={done} onClick={() => markStudied(`story:${s.id}`, "bedtime story", POINTS.lessonRead)}>
            {done ? `${t("Read")} ✓` : `${t("Finished")} · +${POINTS.lessonRead}`}
          </button>
          <Link className="btn btn-ghost" href={`/stories/${next.id}`}>{t("Next")}: {trMap?.[next.id]?.title ?? next.title}</Link>
        </div>
      </Page>
    </div>
  );
}

// Voices we prefer for a warm, storytelling read: natural/neural voices first,
// then known female voices. Device voices differ, so we score what is there.
const NATURAL = /natural|neural|premium|enhanced|online/i;
const FEMALE = /female|aria|jenny|sonia|libby|ava|emma|michelle|samantha|karen|moira|serena|tessa|victoria|zoe|fiona|kate|susan|hazel|allison|nicky|joanna|kendra|salli|svetlana|milena|irina|dariya|katya|alena|madina|zira|google uk english female|google us english/i;
const MALE = /\bmale\b|guy|ryan|daniel|alex\b|fred|tom\b|aaron|arthur|david|mark|george|james|oliver|thomas|dmitry|pavel|maxim|yuri|sardor/i;
const VOICE_KEY = "qalam-voice";

// English stories always use a UK English female voice. Each platform names it
// differently: Chrome "Google UK English Female", iPhone/iPad "Kate", "Serena",
// "Stephanie" or "Martha", Edge "Sonia"/"Libby"/"Maisie", Android en-gb-x-gba/gbc/gbg.
const UK_FEMALE = /google uk english female|\b(kate|serena|stephanie|martha|sonia|libby|maisie|hazel|susan|emily|fiona)\b|en-gb-x-gb[acg]/i;
const UK_MALE = /\bmale\b|daniel|arthur|oliver|ryan|george|thomas|en-gb-x-gb[bd]|en-gb-x-rjs/i;
const isUK = (v: SpeechSynthesisVoice) => /^en[-_]gb/i.test(v.lang);

function rankVoices(all: SpeechSynthesisVoice[], code: string) {
  if (code === "en") {
    // A woman's voice matters most: UK female, then any English female, and a
    // male voice only if the device has nothing else.
    const male = (v: SpeechSynthesisVoice) => UK_MALE.test(v.name.replace(/female/i, "")) || MALE.test(v.name.replace(/female/i, ""));
    const female = (v: SpeechSynthesisVoice) => UK_FEMALE.test(v.name) || FEMALE.test(v.name);
    const score = (v: SpeechSynthesisVoice) =>
      (female(v) ? 100 : 0) - (male(v) ? 100 : 0) + (isUK(v) ? 20 : 0) + (UK_FEMALE.test(v.name) ? 10 : 0)
      + (NATURAL.test(v.name) ? 2 : 0) + (/^en[-_](us|au|ie|ie|za|nz)/i.test(v.lang) ? 1 : 0);
    return all.filter((v) => /^en/i.test(v.lang)).sort((x, y) => score(y) - score(x));
  }
  const score = (v: SpeechSynthesisVoice) => (NATURAL.test(v.name) ? 4 : 0) + (FEMALE.test(v.name) && !/\bmale\b/i.test(v.name.replace(/female/i, "")) ? 3 : 0) - (MALE.test(v.name) ? 3 : 0) + (v.localService ? 0 : 1);
  return all.filter((v) => v.lang.toLowerCase().replace("_", "-").startsWith(code)).sort((x, y) => score(y) - score(x));
}

function ReadAloud({ s, lang }: { s: Bedtime; lang: "en" | "uz" | "ru" }) {
  const { t } = useT();
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [ok, setOk] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [pick, setPick] = useState("");
  const run = useRef(0); // bumps on every stop, so stale callbacks do nothing
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const code = { en: "en", uz: "uz", ru: "ru" }[lang];

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setOk(true);
    const synth = window.speechSynthesis;
    const load = () => setVoices(rankVoices(synth.getVoices(), code));
    load(); synth.addEventListener?.("voiceschanged", load);
    // iPhone and iPad sometimes fill the voice list late without an event.
    let tries = 0;
    const poll = setInterval(() => { if (synth.getVoices().length || ++tries > 20) { load(); clearInterval(poll); } }, 250);
    try { setPick(localStorage.getItem(`${VOICE_KEY}:${code}`) || ""); } catch { /* ignore */ }
    return () => { clearInterval(poll); synth.removeEventListener?.("voiceschanged", load); };
  }, [code]);
  useEffect(() => () => stop(), []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { stop(); }, [s.id, lang]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!ok) return null;

  const voice = (code === "en" ? undefined : voices.find((v) => v.voiceURI === pick)) ?? voices[0];

  function stop() {
    run.current++; clearTimeout(timer.current);
    try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
    setState("idle");
  }

  function play() {
    const synth = window.speechSynthesis;
    if (state === "paused") { synth.resume(); setState("playing"); return; }
    stop();
    const id = ++run.current;
    // iPad and iPhone may fill the voice list only after the page loads: choose again now.
    const fresh = rankVoices(synth.getVoices(), code);
    const useVoice = (code === "en" ? fresh[0] : fresh.find((v) => v.voiceURI === pick) ?? fresh[0]) ?? voice;
    // Read sentence by sentence with small pauses, like a storyteller:
    // a longer breath between paragraphs, and a moment before the lesson.
    const split = (p: string) => p.match(/[^.!?…]+[.!?…]+["”»’)]*|[^.!?…]+$/g)?.map((x) => x.trim()).filter(Boolean) ?? [p];
    const items: { text: string; pause: number }[] = [{ text: s.title, pause: 900 }];
    s.paras.forEach((p) => { const ss = split(p); ss.forEach((x, k) => items.push({ text: x, pause: k === ss.length - 1 ? 750 : 260 })); });
    items.push({ text: `${t("The lesson")}. ${s.moral}`, pause: 0 });
    items[items.length - 2].pause = 1100;
    let i = 0;
    const next = () => {
      if (id !== run.current) return;
      if (i >= items.length) { setState("idle"); return; }
      const it = items[i++];
      const u = new SpeechSynthesisUtterance(it.text);
      u.lang = { en: "en-GB", uz: "uz-UZ", ru: "ru-RU" }[lang];
      if (useVoice) { u.voice = useVoice; u.lang = useVoice.lang; }
      u.rate = 0.86; u.pitch = 1.04;
      u.onend = () => { if (id === run.current) timer.current = setTimeout(next, it.pause); };
      u.onerror = u.onend;
      synth.speak(u);
    };
    next();
    setState("playing");
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" className="btn" onClick={() => (state === "playing" ? (window.speechSynthesis.pause(), setState("paused")) : play())}>
          {state === "playing" ? t("Pause") : state === "paused" ? t("Resume") : t("Read aloud")}
        </button>
        {state !== "idle" && <button type="button" className="btn btn-ghost" onClick={stop}>{t("Stop")}</button>}
        {code !== "en" && voices.length > 1 && (
          <label className="flex items-center gap-2 text-[0.88rem] font-bold">
            {t("Voice")}
            <select className="max-w-[220px] rounded-btn border-2 border-border bg-bg-surface px-2.5 py-1.5 text-[0.88rem] font-normal" value={voice?.voiceURI ?? ""}
              onChange={(e) => { stop(); setPick(e.target.value); try { localStorage.setItem(`${VOICE_KEY}:${code}`, e.target.value); } catch { /* ignore */ } }}>
              {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name.replace(/^(Microsoft|Google)\s+/, "").replace(/\s*\(.*\)$/, "")}</option>)}
            </select>
          </label>
        )}
      </div>
      <span className="text-[0.85rem] text-fg-muted">{voices.length ? (code === "en" ? t("Read by a UK English female voice.") : t("Uses your device’s voices. We pick a warm, natural female voice when your device has one.")) : t("Your device has no voice for this language yet.")}</span>
    </div>
  );
}
