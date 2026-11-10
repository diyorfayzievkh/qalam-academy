"use client";

import { useEffect, useRef, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { SAMPLES, VOICES, type SampleLang, type Voice } from "@/lib/voices";

const LANGS: { id: SampleLang; label: string }[] = [
  { id: "en", label: "English" }, { id: "ar", label: "العربية" }, { id: "uz", label: "O‘zbekcha" }, { id: "ru", label: "Русский" },
];

/** Audition storyteller voices on a real passage before choosing one for the bedtime stories. */
export default function VoicesPage() {
  const { t } = useT();
  const { user, ready } = useAccount();
  const [lang, setLang] = useState<SampleLang>("en");
  const [playing, setPlaying] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [missingKey, setMissingKey] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const urls = useRef<Record<string, string>>({});

  useEffect(() => () => { audio.current?.pause(); }, []);

  async function play(v: Voice) {
    const ck = `${v.id}:${lang}`;
    audio.current?.pause();
    if (playing === ck) { setPlaying(null); return; }
    let src = urls.current[ck];
    if (!src) {
      setLoading(ck);
      const r = await fetch(`/api/tts/sample?voice=${v.id}&lang=${lang}`).catch(() => null);
      setLoading(null);
      if (!r || !r.ok) {
        const j = await r?.json().catch(() => null);
        if (j?.error === "not_configured") setMissingKey(true);
        else setErrors((e) => ({ ...e, [ck]: j?.error ?? t("Could not load this sample.") }));
        return;
      }
      src = urls.current[ck] = URL.createObjectURL(await r.blob());
    }
    const a = new Audio(src);
    audio.current = a;
    a.onended = () => setPlaying(null);
    setPlaying(ck);
    a.play().catch(() => setPlaying(null));
  }

  const groups: { key: Voice["group"]; title: string }[] = [
    { key: "arab", title: "Native Arabic speakers" },
    { key: "english", title: "English narrators, for comparison" },
  ];

  return (
    <>
      <PageHeader eyebrow={t("Stories")} title={t("Choose a storyteller voice")}
        sub={t("Listen to the same short passage in each voice, then tell us which one should read the bedtime stories.")} />
      <Page>
        <div className="seg self-start" role="group" aria-label={t("Language")}>
          {LANGS.map((l) => <button key={l.id} type="button" aria-pressed={lang === l.id} onClick={() => { audio.current?.pause(); setPlaying(null); setLang(l.id); }}>{l.label}</button>)}
        </div>
        <blockquote className="card text-[0.95rem] leading-relaxed text-fg-muted" dir={lang === "ar" ? "rtl" : "ltr"}>{SAMPLES[lang]}</blockquote>
        {ready && !user && <p className="card text-[0.92rem]">{t("Please sign in to play the samples.")}</p>}
        {missingKey && (
          <p className="card border-amber-400 text-[0.92rem]">
            {t("The voice service is not connected yet. Add an ElevenLabs API key to the project’s settings on Vercel as ELEVENLABS_API_KEY, then reload this page.")}
          </p>
        )}
        {groups.map((g) => (
          <section key={g.key} className="flex flex-col gap-2.5">
            <h2 className="text-[1.15rem]">{t(g.title)}</h2>
            <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
              {VOICES.filter((v) => v.group === g.key).map((v) => {
                const ck = `${v.id}:${lang}`;
                return (
                  <div key={v.id} className="card flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex min-w-0 flex-col">
                        <span className="text-[1.05rem] font-bold">{v.name}</span>
                        <span className="text-[0.82rem] text-fg-muted">{t(v.gender)} · {v.accent}</span>
                      </div>
                      <button type="button" className="btn shrink-0" disabled={loading === ck || (ready && !user)} onClick={() => play(v)}>
                        {loading === ck ? t("Loading…") : playing === ck ? t("Stop") : t("Play")}
                      </button>
                    </div>
                    <span className="text-[0.88rem]">{v.note}</span>
                    {errors[ck] && <span className="text-[0.82rem] text-red-700">{errors[ck]}</span>}
                    <span className="font-mono text-[0.72rem] text-fg-muted">{v.id}</span>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </Page>
    </>
  );
}
