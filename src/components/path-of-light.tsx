"use client";

import { useEffect, useState } from "react";
import { BADGES, POINTS_PER_BADGE } from "@/content/badges";
import { BadgeIcon, starPath } from "./figures";
import { useT } from "./lang";

// The Path of Light: a winding road through ten stations, from Seed to Nur.
// The road lights up as points grow; a glowing orb marks where you are.

const W = 360, STEP = 112, TOP = 70;
const ST = BADGES.map((_, i) => ({ x: i % 2 ? 268 : 92, y: TOP + (i + 1) * STEP }));
const START = { x: 180, y: TOP };
const H = ST[ST.length - 1].y + 80;

function roadPath() {
  const pts = [START, ...ST];
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i];
    const my = (a.y + b.y) / 2;
    d += ` C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
  }
  return d;
}
const ROAD = roadPath();

export function PathOfLight({ points }: { points: number }) {
  const { t } = useT();
  const [orb, setOrb] = useState<{ x: number; y: number } | null>(null);
  const frac = Math.min(1, points / (POINTS_PER_BADGE * BADGES.length));
  const lvl = Math.min(BADGES.length, Math.floor(points / POINTS_PER_BADGE));

  useEffect(() => {
    // Each station is one equal step of the road's segments, so map by segment.
    const seg = frac * BADGES.length; // 0..10
    const i = Math.floor(seg), f = seg - i;
    const a = i === 0 ? START : ST[i - 1], b = ST[Math.min(i, ST.length - 1)];
    if (i >= BADGES.length) { setOrb(ST[ST.length - 1]); return; }
    const my = (a.y + b.y) / 2;
    const u = 1 - f;
    // Point on the cubic segment (a, (a.x,my), (b.x,my), b).
    const x = u * u * u * a.x + 3 * u * u * f * a.x + 3 * u * f * f * b.x + f * f * f * b.x;
    const y = u * u * u * a.y + 3 * u * u * f * my + 3 * u * f * f * my + f * f * f * b.y;
    setOrb({ x, y });
  }, [frac]);

  return (
    <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-card"
      style={{ background: "linear-gradient(180deg, #0B1E33 0%, #12304A 30%, #1C4A55 60%, #3C6A52 85%, #C9A25A 100%)" }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={t("Path of Light")}>
        <defs>
          <linearGradient id="pol-lit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFE9A8" />
            <stop offset="1" stopColor="#E3B04B" />
          </linearGradient>
          <radialGradient id="pol-orb"><stop offset="0" stopColor="#FFF6D2" /><stop offset=".4" stopColor="#FFD873" stopOpacity=".9" /><stop offset="1" stopColor="#FFD873" stopOpacity="0" /></radialGradient>
          <filter id="pol-blur"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>

        {/* stars in the upper sky */}
        <g fill="#F5EEDC">
          {[[30, 30, 1.2], [70, 110, .8], [320, 40, 1.1], [300, 150, .9], [40, 260, .8], [330, 300, 1], [20, 420, .7], [340, 470, .8], [60, 560, .6], [310, 610, .7]].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} className={i % 2 ? "twinkle" : undefined} style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </g>
        {/* distant domes at the bottom (the destination) */}
        <path d={`M0 ${H} V${H - 40} h40 v-14 a22 22 0 0 1 44 0 v14 h30 v-30 h6 v-14 h4 v14 h6 v30 h40 v-20 a30 30 0 0 1 60 0 v20 h34 v-12 a18 18 0 0 1 36 0 v12 h60 V${H}z`} fill="#0E2A22" opacity=".55" />

        {/* the road: unlit, then lit up to your progress */}
        <path d={ROAD} fill="none" stroke="#F5EEDC" strokeOpacity=".16" strokeWidth="14" strokeLinecap="round" />
        <path d={ROAD} fill="none" stroke="#F5EEDC" strokeOpacity=".35" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
        <path d={ROAD} pathLength={1} fill="none" stroke="url(#pol-lit)" strokeWidth="6" strokeLinecap="round"
          strokeDasharray="1" strokeDashoffset={1 - frac} style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.2,.7,.2,1)" }} />
        <path d={ROAD} pathLength={1} fill="none" stroke="#FFD873" strokeOpacity=".5" strokeWidth="14" filter="url(#pol-blur)"
          strokeDasharray="1" strokeDashoffset={1 - frac} />

        {/* start */}
        <path d={starPath(START.x, START.y, 12, 5, 8)} fill="#FFE9A8" />
        <text x={START.x} y={START.y - 22} textAnchor="middle" fill="#F5EEDC" fontSize="12" fontWeight="700">{t("Start")}</text>

        {orb && (
          <g>
            <circle cx={orb.x} cy={orb.y} r="26" fill="url(#pol-orb)" className="glow-pulse" />
            <circle cx={orb.x} cy={orb.y} r="6" fill="#FFF6D2" />
          </g>
        )}
      </svg>

      {/* stations */}
      {BADGES.map((b, i) => {
        const s = ST[i];
        const earned = i < lvl, next = i === lvl;
        const left = s.x < W / 2;
        return (
          <div key={b.name} className="absolute" style={{ top: `${(s.y / H) * 100}%`, left: `${(s.x / W) * 100}%`, transform: "translate(-50%, -50%)" }}>
            <div className={`rounded-full ${next ? "station-now" : ""} ${earned ? "drop-shadow-[0_0_10px_rgba(255,216,115,.7)]" : ""}`}>
              <BadgeIcon index={i} locked={!earned} size={next ? 64 : 56} />
            </div>
            <div className={`absolute top-1/2 flex w-[120px] -translate-y-1/2 flex-col ${left ? "left-[calc(100%+8px)] text-left" : "right-[calc(100%+8px)] text-right"}`}>
              <b className={`font-display text-[1rem] leading-tight ${earned || next ? "text-[#FFF3D0]" : "text-[#F5EEDC]/60"}`}>{t(b.name)}</b>
              <span className={`text-[0.72rem] leading-snug ${earned || next ? "text-[#F5EEDC]/85" : "text-[#F5EEDC]/45"}`}>{t(b.meaning)}</span>
              <span className="text-[0.7rem] font-bold tabular-nums text-[#FFD873]/85">
                {earned ? t("Earned") : next ? t("{n} to go", { n: (b.points - points).toLocaleString() }) : `${b.points.toLocaleString()}`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
