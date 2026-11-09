"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { QuranAyah, QuranPayload } from "@/app/api/quran/[id]/route";
import { Page, PageHeader } from "@/components/app-shell";
import { useProgress } from "@/components/progress";
import { findHifz, hifzPoints } from "@/content/hifz";
import { useHifz } from "@/lib/use-hifz";

type Mode = "learn" | "test" | "review";
type Lang = "en" | "uz" | "ru";
const LANG_LABEL: Record<Lang, string> = { en: "English", uz: "Oʻzbekcha", ru: "Русский" };

export default function HifzStudyPage() {
  const { id } = useParams<{ id: string }>();
  const item = findHifz(id);
  const h = useHifz();
  const { markStudied } = useProgress();

  const [data, setData] = useState<QuranPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [mode, setMode] = useState<Mode>("learn");
  const [lang, setLang] = useState<Lang>("en");
  const [showTr, setShowTr] = useState(true);
  const [repeat, setRepeat] = useState(3);
  // How many times to play the whole sūrah; 0 means keep looping until stopped.
  const [rounds, setRounds] = useState(1);
  const [round, setRound] = useState(1);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [rated, setRated] = useState<string | null>(null);

  // Audio: play one ayah N times, optionally continue through the surah.
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queue = useRef<{ i: number; left: number; all: boolean; per: number; round: number; rounds: number } | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("mode");
    if (m === "review" || m === "test") setMode(m);
  }, []);

  useEffect(() => {
    if (!item) return;
    setError(null);
    fetch(`/api/quran/${item.id}`)
      .then(async (r) => { const j = await r.json(); if (!r.ok) throw new Error(j.error); return j as QuranPayload; })
      .then(setData)
      .catch((e: Error) => setError(e.message || "The Quran text could not be loaded."));
  }, [item, attempt]);

  const stop = useCallback(() => { audioRef.current?.pause(); queue.current = null; setPlaying(null); }, []);
  useEffect(() => stop, [stop]);

  const playIndex = useCallback((i: number) => {
    const a = data?.ayahs[i]?.audio;
    if (!a) { stop(); return; }
    if (!audioRef.current) audioRef.current = new Audio();
    const el = audioRef.current;
    el.src = a;
    el.onended = () => {
      const q = queue.current;
      if (!q) return;
      if (q.left > 1) { q.left -= 1; el.currentTime = 0; void el.play(); return; }
      if (q.all && data && q.i + 1 < data.ayahs.length) { queue.current = { ...q, i: q.i + 1, left: q.per }; playIndex(q.i + 1); return; }
      // End of the sūrah: start again if more rounds are wanted (0 = loop until stopped).
      if (q.all && data && (q.rounds === 0 || q.round < q.rounds)) {
        queue.current = { ...q, i: 0, left: q.per, round: q.round + 1 };
        setRound(q.round + 1);
        setTimeout(() => { if (queue.current) playIndex(0); }, 1200);
        return;
      }
      stop();
    };
    setPlaying(i);
    void el.play().catch(() => stop());
  }, [data, stop]);

  const play = (i: number, all = false) => {
    if (playing === i && !all) { stop(); return; }
    queue.current = { i, left: repeat, all, per: repeat, round: 1, rounds: all ? rounds : 1 };
    setRound(1);
    playIndex(i);
  };

  if (!item) notFound();
  const st = h.get(item.id);
  const memorized = st.status === "memorized";
  const allNums = data?.ayahs.map((a) => a.n) ?? [];
  const knownCount = data ? data.ayahs.filter((a) => st.known.includes(a.n)).length : st.known.length;
  const allKnown = !!data && knownCount === data.ayahs.length;
  const pts = hifzPoints(item);
  const hidden = mode !== "learn";
  const trans = (a: QuranAyah) => a[lang] || a.en;

  return (
    <>
      <PageHeader eyebrow={`Hifz · Sūrah ${item.surah}`} title={`${item.name} · ${item.arabic}`} sub={`${item.meaning} · ${item.ayahs} ayah${item.ayahs > 1 ? "s" : ""}${item.virtue ? `. ${item.virtue}` : ""}`} />
      <Page>
        <Link href="/hifz" className="font-bold text-fg-muted">← All sūrahs</Link>

        <section className="card flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="seg" role="group" aria-label="Mode">
              <button type="button" aria-pressed={mode === "learn"} onClick={() => setMode("learn")}>Learn</button>
              <button type="button" aria-pressed={mode === "test"} onClick={() => { setMode("test"); setRevealed({}); }}>Test myself</button>
              {memorized && <button type="button" aria-pressed={mode === "review"} onClick={() => { setMode("review"); setRevealed({}); setRated(null); }}>Review</button>}
            </div>
            <div className="seg" role="group" aria-label="Translation language">
              {(Object.keys(LANG_LABEL) as Lang[]).map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{LANG_LABEL[l]}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <label className="field" htmlFor="repeat">Repeat each ayah
              <select id="repeat" className="input" value={repeat} onChange={(e) => setRepeat(Number(e.target.value))}>
                {[1, 3, 5, 10, 20].map((n) => <option key={n} value={n}>{n}×</option>)}
              </select>
            </label>
            <label className="field" htmlFor="rounds">Repeat whole sūrah
              <select id="rounds" className="input" value={rounds} onChange={(e) => setRounds(Number(e.target.value))}>
                {[1, 2, 3, 5, 7, 10].map((n) => <option key={n} value={n}>{n}×</option>)}
                <option value={0}>Loop until I stop</option>
              </select>
            </label>
            <label className="flex items-center gap-2 pb-2 font-bold text-fg-muted">
              <input type="checkbox" checked={showTr} onChange={(e) => setShowTr(e.target.checked)} /> Transliteration
            </label>
            <button type="button" className="btn" disabled={!data} onClick={() => (playing !== null ? stop() : play(0, true))}>
              {playing !== null ? "Stop audio" : "Play whole sūrah"}
            </button>
          </div>
          {playing !== null && queue.current?.all && (
            <p role="status" className="flex flex-wrap items-center gap-2 text-[0.9rem] font-bold text-emerald">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald" />
              {queue.current.rounds === 0 ? `Round ${round} · looping` : `Round ${round} of ${queue.current.rounds}`} · ayah {(data?.ayahs[playing]?.n ?? playing + 1)} · each ayah ×{queue.current.per}
            </p>
          )}
          <p className="text-[0.88rem] text-fg-muted">
            {mode === "learn" && "Listen to each ayah several times and repeat after the reciter. Tick an ayah when you can say it without looking."}
            {mode === "test" && "Only the first word of each ayah is shown. Recite the rest from memory, then tap to check."}
            {mode === "review" && "Recite the whole sūrah from memory. Tap an ayah only if you get stuck, then rate how it went."}
          </p>
        </section>

        {!data && !error && <p className="card text-fg-muted" role="status">Loading the sūrah…</p>}
        {error && (
          <div className="card flex flex-wrap items-center gap-3">
            <p className="flex-1 text-danger">{error}</p>
            <button type="button" className="btn btn-ghost" onClick={() => setAttempt((n) => n + 1)}>Try again</button>
          </div>
        )}

        {data && (
          <section className="flex flex-col gap-3">
            {data.showBismillah && <p lang="ar" className="arabic !text-center !text-[1.6rem] text-emerald">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>}
            {data.ayahs.map((a, i) => {
              const known = st.known.includes(a.n);
              const isOpen = !hidden || revealed[a.n];
              const words = a.ar.split(/\s+/);
              return (
                <article key={a.n} className={`flex flex-col gap-2.5 rounded-card border bg-bg-surface p-4 ${playing === i ? "border-gold-bright" : "border-border"}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-emerald-soft text-[0.82rem] font-extrabold tabular-nums text-emerald">{a.n}</span>
                    <button type="button" className="btn btn-ghost !px-3 !py-1.5 text-[0.85rem]" disabled={!a.audio} onClick={() => play(i)} aria-label={`Play ayah ${a.n}`}>
                      {playing === i ? "■ Stop" : `▶ Play ×${repeat}`}
                    </button>
                    {mode !== "review" && (
                      <label className={`ml-auto flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-[0.85rem] font-bold ${known ? "border-emerald bg-emerald-soft text-emerald" : "border-border text-fg-muted"}`}>
                        <input type="checkbox" checked={known} onChange={() => h.toggleKnown(item.id, a.n)} /> I know this ayah
                      </label>
                    )}
                  </div>
                  {isOpen ? (
                    <>
                      <p lang="ar" className="arabic">{a.ar}</p>
                      {showTr && a.tr && <p className="font-semibold italic text-emerald">{a.tr}</p>}
                      <p className="text-fg-muted">{trans(a)}</p>
                    </>
                  ) : (
                    <button type="button" onClick={() => setRevealed((r) => ({ ...r, [a.n]: true }))}
                      className="flex flex-col items-end gap-1 rounded-xl border border-dashed border-border bg-bg-inset px-3 py-3 text-right">
                      <span lang="ar" className="arabic !text-[1.5rem]">{mode === "test" ? `${words[0]} …` : "…"}</span>
                      <span className="text-[0.82rem] font-bold text-fg-muted">Tap to check</span>
                    </button>
                  )}
                </article>
              );
            })}
            <p className="text-[0.78rem] text-fg-muted">{data.source}</p>
          </section>
        )}

        {data && mode !== "review" && !memorized && (
          <section className="card flex flex-col gap-2.5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-[1.2rem]">{knownCount} of {data.ayahs.length} ayahs known</h2>
              <span className="font-bold text-fg-muted">+{pts} points when memorised</span>
            </div>
            <div className="progress"><i style={{ width: `${(knownCount / data.ayahs.length) * 100}%` }} /></div>
            <button type="button" className="btn btn-gold self-start" disabled={!allKnown}
              onClick={() => { h.markMemorized(item.id, allNums); markStudied(`hifz:${item.id}`, `${item.name} memorised`, pts); setMode("review"); }}>
              Mark as memorised
            </button>
            {!allKnown && <p className="text-[0.85rem] text-fg-muted">Tick every ayah first. Try “Test myself” to check.</p>}
          </section>
        )}

        {data && memorized && (
          <section className="card flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-fard">Memorised ✓</span>
              <span className="text-[0.9rem] text-fg-muted">since {st.memorizedAt} · reviewed {st.reviews} time{st.reviews === 1 ? "" : "s"} · next review {st.nextReview}{h.isDue(item.id) ? " (due now)" : ""}</span>
            </div>
            {mode === "review" && !rated && (
              <>
                <h2 className="text-[1.2rem]">How did your recitation go?</h2>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="btn" onClick={() => { h.review(item.id, "strong"); setRated("Strong. Your next review is spaced further out."); }}>Strong, no mistakes</button>
                  <button type="button" className="btn btn-ghost" onClick={() => { h.review(item.id, "shaky"); setRated("Shaky. It will come back for review tomorrow."); }}>Shaky, a few slips</button>
                  <button type="button" className="btn btn-ghost" onClick={() => { h.review(item.id, "forgot"); setRated("Moved back to learning. Relearn it ayah by ayah; your points stay."); setMode("learn"); }}>I forgot parts</button>
                </div>
              </>
            )}
            {rated && <p className="font-bold text-emerald" role="status">{rated}</p>}
          </section>
        )}
      </Page>
    </>
  );
}
