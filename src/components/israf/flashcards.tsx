"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CARDS, pickBi } from "@/content/israf-tools";

const tr = (lang: string, en: string, uz: string) => (lang === "uz" ? uz : en);

/** Flip cards: tap to turn over, then mark "Again" or "Got it". */
export function Flashcards({ lang }: { lang: string }) {
  const [order, setOrder] = useState(() => CARDS.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const done = pos >= order.length;
  const card = CARDS[order[Math.min(pos, order.length - 1)]];

  const next = useCallback((gotIt: boolean) => {
    const id = order[pos];
    setKnown((k) => { const n = new Set(k); if (gotIt) n.add(id); else n.delete(id); return n; });
    setFlipped(false);
    setTimeout(() => setPos((p) => p + 1), 150);
  }, [order, pos]);

  const restart = (onlyMissed: boolean) => {
    const ids = onlyMissed ? order.filter((i) => !known.has(i)) : CARDS.map((_, i) => i);
    setOrder(ids.length ? ids : CARDS.map((_, i) => i)); setPos(0); setFlipped(false);
    if (!onlyMissed) setKnown(new Set());
  };
  const shuffle = () => { const a = [...order]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } setOrder(a); setPos(0); setFlipped(false); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); }
      else if (e.key === "ArrowRight" && flipped) next(true);
      else if (e.key === "ArrowLeft" && flipped) next(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [done, flipped, next]);

  const missed = useMemo(() => order.filter((i) => !known.has(i)).length, [order, known]);

  if (done) return (
    <div className="card mx-auto flex w-full max-w-[520px] flex-col items-center gap-3 text-center">
      <span className="text-[2.4rem]">🎉</span>
      <h2 className="text-[1.3rem]">{tr(lang, `You knew ${order.length - missed} of ${order.length}`, `${order.length} tadan ${order.length - missed} tasini bildingiz`)}</h2>
      <div className="flex flex-wrap justify-center gap-2.5">
        {missed > 0 && <button type="button" className="btn" onClick={() => restart(true)}>{tr(lang, `Practise the ${missed} I missed`, `Bilmagan ${missed} tasini takrorlash`)}</button>}
        <button type="button" className="btn btn-ghost" onClick={() => restart(false)}>{tr(lang, "Start again", "Qaytadan boshlash")}</button>
      </div>
    </div>
  );

  return (
    <div className="mx-auto flex w-full max-w-[560px] flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-[0.9rem] font-bold text-fg-muted">
        <span>{tr(lang, `Card ${pos + 1} of ${order.length}`, `${order.length} tadan ${pos + 1}-karta`)} · ✓ {known.size}</span>
        <button type="button" className="underline underline-offset-4" onClick={shuffle}>{tr(lang, "Shuffle", "Aralashtirish")}</button>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border"><i className="block h-full rounded-full bg-emerald transition-[width]" style={{ width: `${(pos / order.length) * 100}%` }} /></div>
      <button type="button" onClick={() => setFlipped((f) => !f)} aria-label={tr(lang, "Flip card", "Kartani aylantirish")}
        className="relative h-[300px] w-full cursor-pointer [perspective:1200px] sm:h-[320px]">
        <span className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]" style={{ transform: flipped ? "rotateY(180deg)" : "none" }}>
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-card border-2 border-emerald bg-bg-surface p-6 text-center [backface-visibility:hidden]">
            <span className="text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-gold">{tr(lang, "Question", "Savol")}</span>
            <span className="text-[1.35rem] font-extrabold leading-snug">{pickBi(card.front, lang)}</span>
            <span className="mt-2 text-[0.85rem] text-fg-muted">{tr(lang, "Tap to flip", "Aylantirish uchun bosing")}</span>
          </span>
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-card border-2 border-gold-bright bg-emerald p-6 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-gold-bright">{tr(lang, "Answer", "Javob")}</span>
            <span className="text-[1.15rem] font-bold leading-snug">{pickBi(card.back, lang)}</span>
            <span className="text-[0.82rem] opacity-80">{card.src}</span>
          </span>
        </span>
      </button>
      <div className="flex justify-center gap-2.5">
        {flipped ? <>
          <button type="button" className="btn btn-ghost" onClick={() => next(false)}>↺ {tr(lang, "Again", "Yana")}</button>
          <button type="button" className="btn" onClick={() => next(true)}>✓ {tr(lang, "Got it", "Bildim")}</button>
        </> : <button type="button" className="btn" onClick={() => setFlipped(true)}>{tr(lang, "Show answer", "Javobni ko‘rish")}</button>}
      </div>
    </div>
  );
}
