"use client";

import "@fontsource/caveat/500.css";
import "@fontsource/caveat/700.css";
import type { ReactNode } from "react";
import { pickBi, SKETCH, SKETCH_CAUSES, type Doodle } from "@/content/israf-tools";

// A hand-drawn summary page: paper, marker colours and little doodles.
const INK = "#2B2A28";
const hand = { fontFamily: "Caveat, 'Comic Sans MS', cursive" };

function D({ kind, color }: { kind: Doodle; color: string }) {
  const s = { stroke: INK, strokeWidth: 2.2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const fill = { fill: color, opacity: 0.35 };
  const art: Record<Doodle, ReactNode> = {
    drop: <><path d="M32 8c9 13 15 21 15 29a15 15 0 0 1-30 0c0-8 6-16 15-29z" {...fill} /><path d="M32 8c9 13 15 21 15 29a15 15 0 0 1-30 0c0-8 6-16 15-29z" {...s} /><path d="M25 38a7 7 0 0 0 6 7" {...s} /></>,
    plate: <><circle cx="32" cy="34" r="22" {...fill} /><circle cx="32" cy="34" r="22" {...s} /><circle cx="32" cy="34" r="14" {...s} /><path d="M32 20v28M20 41l24-14" {...s} /></>,
    hands: <><path d="M10 40c4-10 10-14 16-12l4 10" {...s} /><path d="M10 40h18" {...s} /><path d="M38 30c6-4 12-4 16 2" {...s} /><path d="M38 30l-2 14h20" {...s} /><path d="M42 50l2 6M50 50l1 6" {...s} /><path d="M6 24c4-6 10-6 14-2" stroke={color} strokeWidth={3} fill="none" strokeLinecap="round" /></>,
    scale: <><path d="M32 10v40M14 18h36M14 18l-8 18h16zM50 18l-8 18h16zM22 54h20" {...s} /></>,
    clock: <><circle cx="32" cy="34" r="22" {...fill} /><circle cx="32" cy="34" r="22" {...s} /><path d="M32 20v14l10 6" {...s} /><path d="M18 8l-6 6M46 8l6 6" {...s} /></>,
    ring: <><circle cx="32" cy="38" r="16" {...s} /><path d="M24 22l8-12 8 12z" {...fill} /><path d="M24 22l8-12 8 12z" {...s} /></>,
    shirt: <><path d="M20 12l-12 10 6 8 6-4v28h24V26l6 4 6-8-12-10c-2 5-6 7-12 7s-10-2-12-7z" {...fill} /><path d="M20 12l-12 10 6 8 6-4v28h24V26l6 4 6-8-12-10c-2 5-6 7-12 7s-10-2-12-7z" {...s} /></>,
    bulb: <><path d="M22 34a12 12 0 1 1 20 0c-3 4-4 6-4 10H26c0-4-1-6-4-10z" {...fill} /><path d="M22 34a12 12 0 1 1 20 0c-3 4-4 6-4 10H26c0-4-1-6-4-10zM26 50h12M28 56h8" {...s} /><path d="M8 26h5M51 26h5M14 10l4 4M50 10l-4 4" {...s} /></>,
    heart: <><path d="M32 54S10 40 10 24a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 16-22 30-22 30z" {...fill} /><path d="M32 54S10 40 10 24a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 16-22 30-22 30z" {...s} /></>,
    book: <><path d="M8 16c8-4 16-4 24 2v34c-8-6-16-6-24-2zM56 16c-8-4-16-4-24 2v34c8-6 16-6 24-2z" {...fill} /><path d="M8 16c8-4 16-4 24 2v34c-8-6-16-6-24-2zM56 16c-8-4-16-4-24 2v34c8-6 16-6 24-2z" {...s} /></>,
  };
  return <svg viewBox="0 0 64 64" className="h-14 w-14 flex-none" aria-hidden>{art[kind]}</svg>;
}

export function SketchNote({ lang }: { lang: string }) {
  const p = (x: { en: string; uz: string }) => pickBi(x, lang);
  const tilt = (i: number) => `rotate(${[-1.2, 0.8, -0.6, 1.1, -0.9, 0.7, -1, 0.9][i % 8]}deg)`;
  return (
    <div className="overflow-hidden rounded-card border-2 border-[#d9cfb8] shadow-[0_18px_40px_-26px_rgb(0_0_0/0.5)]"
      style={{ background: "#FFFBF0", backgroundImage: "radial-gradient(#e6dcc4 1px, transparent 1px)", backgroundSize: "18px 18px", color: INK }}>
      <div className="flex flex-col gap-5 p-4 sm:p-7" style={hand}>
        <header className="flex flex-col items-center gap-1 text-center">
          <span className="text-[1.2rem] text-[#8A5A2B]">{lang === "uz" ? "Shayx Muhammad Sodiq Muhammad Yusuf · “Isrof”" : "Shaykh Muhammad Sodiq Muhammad Yusuf · “Isrof”"}</span>
          <h2 className="relative inline-block px-4 text-[3rem] font-bold leading-none" style={hand}>
            <span className="relative z-10">{lang === "uz" ? "ISROF" : "ISRAF"}</span>
            <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-full bg-[#F3D27A]" />
          </h2>
          <span className="text-[1.5rem]">= {lang === "uz" ? "chegaradan chiqish ↗" : "crossing the limit ↗"}</span>
        </header>

        <section className="flex flex-col items-center gap-2">
          <span className="text-[1.45rem] font-bold text-[#A23B3B]">{lang === "uz" ? "Nega isrof qilamiz? 7 sabab" : "Why do we waste? 7 causes"}</span>
          <div className="flex flex-wrap justify-center gap-2">
            {SKETCH_CAUSES.map((c, i) => (
              <span key={i} className="rounded-[16px_10px_14px_12px] border-2 border-[#2B2A28] bg-white px-3 py-0.5 text-[1.25rem]" style={{ transform: tilt(i) }}>{i + 1}. {p(c)}</span>
            ))}
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          {SKETCH.map((n, i) => (
            <section key={i} className="flex gap-3 rounded-[18px_12px_20px_10px] border-2 border-dashed bg-white/70 p-3" style={{ borderColor: n.color, transform: tilt(i + 3) }}>
              <D kind={n.doodle} color={n.color} />
              <div className="flex min-w-0 flex-col">
                <span className="text-[1.6rem] font-bold leading-tight" style={{ color: n.color }}>{p(n.title)}</span>
                {n.lines.map((l, k) => <span key={k} className="text-[1.25rem] leading-snug">→ {p(l)}</span>)}
              </div>
            </section>
          ))}
        </div>

        <footer className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center gap-2"><D kind="scale" color="#1D7A60" /><D kind="heart" color="#A23B3B" /></div>
          <span className="text-[1.7rem] font-bold text-[#1D7A60]">{lang === "uz" ? "O‘rta yo‘l + shukr = baraka" : "The middle way + gratitude = barakah"}</span>
          <span className="text-[1.2rem]">{lang === "uz" ? "Isrofga birga qarshi turaylik: ilm, o‘rnak, kichik odatlar." : "Let’s fight waste together: knowledge, example, small habits."}</span>
        </footer>
      </div>
    </div>
  );
}
