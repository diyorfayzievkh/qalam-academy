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

function ReadAloud({ s, lang }: { s: Bedtime; lang: "en" | "uz" | "ru" }) {
  const { t } = useT();
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
    const parts = [s.title, ...s.paras, `${t("The lesson")}. ${s.moral}`];
    const code = { en: "en", uz: "uz", ru: "ru" }[lang];
    const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(code));
    queue.current = parts.map((text, k) => {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.9; u.pitch = 1; u.lang = { en: "en-US", uz: "uz-UZ", ru: "ru-RU" }[lang];
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
        {state === "playing" ? t("Pause") : state === "paused" ? t("Resume") : t("Read aloud")}
      </button>
      {state !== "idle" && <button type="button" className="btn btn-ghost" onClick={() => { window.speechSynthesis.cancel(); setState("idle"); }}>{t("Stop")}</button>}
      <span className="text-[0.85rem] text-fg-muted">{t("Uses your device’s voice. Arabic names may sound unusual.")}</span>
    </div>
  );
}
