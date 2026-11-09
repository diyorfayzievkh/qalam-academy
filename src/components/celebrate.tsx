"use client";

import { useEffect } from "react";
import { BADGES } from "@/content/badges";
import { BadgeIcon, starPath } from "./figures";
import { useT } from "./lang";
import { useProgress } from "./progress";

const SPARKS = Array.from({ length: 18 }, (_, i) => {
  const a = (i / 18) * Math.PI * 2;
  const d = 90 + (i % 3) * 40;
  return { dx: Math.cos(a) * d, dy: Math.sin(a) * d, delay: (i % 6) * 0.06, size: 6 + (i % 4) * 3 };
});

/** Gold sparks bursting from the centre. */
export function Sparks({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden>
      {SPARKS.slice(0, count).map((s, i) => (
        <svg key={i} width={s.size * 2} height={s.size * 2} viewBox="0 0 20 20" className="spark absolute -translate-x-1/2 -translate-y-1/2"
          style={{ ["--dx" as string]: `${s.dx}px`, ["--dy" as string]: `${s.dy}px`, animationDelay: `${s.delay}s` }}>
          <path d={starPath(10, 10, 9, 3.5, 4)} fill={i % 3 ? "#FFD873" : "#FFF3C4"} />
        </svg>
      ))}
    </div>
  );
}

/** Full-screen moment for a new badge or a first perfect quiz. Tap anywhere to continue. */
export function CelebrationLayer() {
  const { celebration, dismissCelebration } = useProgress();
  const { t } = useT();

  useEffect(() => {
    if (!celebration) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" || e.key === "Enter") dismissCelebration(); };
    document.addEventListener("keydown", onKey);
    const timer = setTimeout(dismissCelebration, celebration.kind === "badge" ? 7000 : 3600);
    return () => { document.removeEventListener("keydown", onKey); clearTimeout(timer); };
  }, [celebration, dismissCelebration]);

  if (!celebration) return null;
  const badge = celebration.kind === "badge" ? BADGES[celebration.index] : null;

  return (
    <div role="dialog" aria-modal="true" aria-label={badge ? t("New badge earned") : t("Perfect round!")} onClick={dismissCelebration}
      className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-[#04140F]/75 p-6 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-3 text-center text-[#FFF6DE]">
        <svg viewBox="0 0 400 400" className="rays pointer-events-none absolute left-1/2 top-[38%] -z-10 w-[420px] max-w-[110vw] -translate-x-1/2 -translate-y-1/2 opacity-70" aria-hidden>
          <defs><radialGradient id="cel-r"><stop offset="0" stopColor="#FFE39A" stopOpacity=".9" /><stop offset="1" stopColor="#FFE39A" stopOpacity="0" /></radialGradient></defs>
          {Array.from({ length: 16 }, (_, i) => <path key={i} d="M200 200 L188 0 L212 0 Z" fill="url(#cel-r)" transform={`rotate(${i * 22.5} 200 200)`} />)}
          <circle cx="200" cy="200" r="90" fill="url(#cel-r)" />
        </svg>
        <Sparks />
        <div className="rise-in">
          {badge ? <BadgeIcon index={celebration.kind === "badge" ? celebration.index : 0} size={150} />
            : <svg width="130" height="130" viewBox="0 0 80 80" aria-hidden><path d={starPath(40, 40, 38, 16, 8)} fill="#FFD873" /><path d={starPath(40, 40, 20, 9, 8)} fill="#FFF3C4" /></svg>}
        </div>
        <span className="rise-in text-[0.8rem] font-extrabold uppercase tracking-[0.18em] text-[#FFD873]" style={{ animationDelay: ".1s" }}>
          {badge ? t("New badge earned") : t("Perfect round!")}
        </span>
        <h2 className="rise-in font-display text-[clamp(2rem,8vw,3rem)] leading-none" style={{ animationDelay: ".18s" }}>
          {badge ? t(badge.name) : `+${celebration.kind === "perfect" ? celebration.points : 0}`}
        </h2>
        <p className="rise-in max-w-[30ch] text-[1rem] opacity-90" style={{ animationDelay: ".26s" }}>
          {badge ? t(badge.meaning) : t("Every answer right. Mā shāʾ Allāh!")}
        </p>
        <span className="rise-in mt-2 text-[0.85rem] opacity-70" style={{ animationDelay: ".4s" }}>{t("Tap to continue")}</span>
      </div>
    </div>
  );
}
