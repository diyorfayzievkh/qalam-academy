"use client";

import { useEffect, useRef, useState } from "react";
import { BADGES, POINTS_PER_BADGE } from "@/content/badges";
import { BadgeIcon, starPath } from "./figures";
import { useT } from "./lang";

// The Path of Light: a climb from a night-time oasis to a radiant summit.
// Ten landmarks along the way, one per badge. The road glows as points grow.
// Original illustration in layered gradients; no people or faces.

const W = 400, H = 1700;
// Bottom (Seed) to top (Nur).
const ST = [
  { x: 128, y: 1500 }, { x: 282, y: 1352 }, { x: 116, y: 1204 }, { x: 286, y: 1058 }, { x: 122, y: 912 },
  { x: 280, y: 768 }, { x: 118, y: 624 }, { x: 278, y: 482 }, { x: 132, y: 344 }, { x: 214, y: 186 },
];
const START = { x: 214, y: 1640 };
const PTS = [START, ...ST];

function roadPath() {
  let d = `M${PTS[0].x} ${PTS[0].y}`;
  for (let i = 1; i < PTS.length; i++) {
    const a = PTS[i - 1], b = PTS[i], my = (a.y + b.y) / 2;
    d += ` C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
  }
  return d;
}
const ROAD = roadPath();

function pointAt(frac: number) {
  const seg = frac * BADGES.length;
  const i = Math.min(Math.floor(seg), BADGES.length - 1), f = Math.min(1, seg - i);
  const a = PTS[i], b = PTS[i + 1], my = (a.y + b.y) / 2, u = 1 - f;
  return {
    x: u * u * u * a.x + 3 * u * u * f * a.x + 3 * u * f * f * b.x + f * f * f * b.x,
    y: u * u * u * a.y + 3 * u * u * f * my + 3 * u * f * f * my + f * f * f * b.y,
  };
}

/** Background landscape, drawn once. */
function Landscape() {
  return (
    <>
      <defs>
        <linearGradient id="pl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF4D6" />
          <stop offset=".07" stopColor="#FCDCA0" />
          <stop offset=".17" stopColor="#F1A879" />
          <stop offset=".3" stopColor="#B56F8A" />
          <stop offset=".45" stopColor="#5B4C8A" />
          <stop offset=".62" stopColor="#2A3466" />
          <stop offset=".8" stopColor="#131D42" />
          <stop offset="1" stopColor="#070D24" />
        </linearGradient>
        <radialGradient id="pl-sun" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".18" stopColor="#FFF3C4" />
          <stop offset=".45" stopColor="#FFD873" stopOpacity=".55" />
          <stop offset="1" stopColor="#FFB84D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pl-mtn-far" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#C98A86" /><stop offset="1" stopColor="#7E5A7E" /></linearGradient>
        <linearGradient id="pl-mtn-near" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8A5F78" /><stop offset="1" stopColor="#3D3462" /></linearGradient>
        <linearGradient id="pl-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3F4F78" /><stop offset="1" stopColor="#1E2A50" /></linearGradient>
        <linearGradient id="pl-land" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#253461" /><stop offset="1" stopColor="#141E40" /></linearGradient>
        <linearGradient id="pl-dune" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3A3150" /><stop offset="1" stopColor="#120F24" /></linearGradient>
        <linearGradient id="pl-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9FB4D8" /><stop offset="1" stopColor="#3D4C80" /></linearGradient>
        <linearGradient id="pl-river" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2E3F75" /><stop offset=".5" stopColor="#5D73AE" /><stop offset="1" stopColor="#2E3F75" /></linearGradient>
        <radialGradient id="pl-window"><stop offset="0" stopColor="#FFE7A0" /><stop offset="1" stopColor="#FFB84D" stopOpacity="0" /></radialGradient>
        <filter id="pl-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6" /></filter>
        <filter id="pl-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0" />
        </filter>
      </defs>

      <rect width={W} height={H} fill="url(#pl-sky)" />

      {/* Stars fade out as the sky brightens */}
      <g fill="#FFFFFF">
        {Array.from({ length: 70 }, (_, i) => {
          const x = (i * 97) % W, y = 640 + ((i * 211) % 1040);
          return <circle key={i} cx={x} cy={y} r={i % 7 === 0 ? 1.4 : 0.8} opacity={0.25 + ((y - 640) / 1040) * 0.6} className={i % 5 === 0 ? "twinkle" : undefined} style={{ animationDelay: `${(i % 9) * 0.4}s` }} />;
        })}
      </g>

      {/* Nur: the radiant summit sun */}
      <g>
        {Array.from({ length: 24 }, (_, i) => (
          <path key={i} d="M200 120 L194 -60 L206 -60 Z" fill="#FFF3C4" opacity=".22" transform={`rotate(${i * 15} 200 120)`} />
        ))}
        <circle cx="200" cy="120" r="150" fill="url(#pl-sun)" />
      </g>

      {/* Dawn: far mountains with a lit summit */}
      <path d="M0 330 L60 250 L95 280 L150 190 L200 130 L250 190 L300 250 L340 220 L400 290 V1700 H0Z" fill="url(#pl-mtn-far)" />
      <path d="M200 130 L222 160 L210 158 L200 170 L190 156 L178 162Z" fill="#FFF6E2" opacity=".9" />
      <path d="M0 400 L70 320 L120 360 L180 300 L240 350 L300 300 L360 350 L400 330 V1700 H0Z" fill="url(#pl-mtn-near)" />

      {/* Full Moon: a still lake with the moon's reflection */}
      <circle cx="320" cy="412" r="20" fill="#FFF8E2" opacity=".95" />
      <circle cx="320" cy="412" r="44" fill="#FFF8E2" opacity=".12" />
      <path d="M0 470 Q100 450 200 462 T400 456 V1700 H0Z" fill="#2F3E72" />
      <ellipse cx="250" cy="500" rx="150" ry="26" fill="url(#pl-water)" opacity=".85" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={312 - i * 3} y={490 + i * 7} width={16 + i * 6} height="2" rx="1" fill="#FFF8E2" opacity={0.7 - i * 0.14} />)}

      {/* Crescent: a city with domes and a minaret */}
      <path d="M0 560 Q120 520 260 548 T400 536 V1700 H0Z" fill="url(#pl-hill)" />
      <g fill="#1A2448">
        <path d="M40 590h24v-12a16 16 0 0 1 32 0v12h20v40H40z" />
        <rect x="120" y="548" width="9" height="82" /><path d="M124.5 536l6 12h-12z" />
        <path d="M140 600h18v-8a12 12 0 0 1 24 0v8h16v30h-58z" />
      </g>
      <path d="M128 528a6 6 0 1 0 0 9 4.6 4.6 0 1 1 0-9z" fill="#FFE39A" />
      {[[52, 606], [80, 604], [150, 612], [176, 612]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="9" fill="url(#pl-window)" /><rect x={x - 2} y={y - 3} width="4" height="6" rx="2" fill="#FFE39A" /></g>)}

      {/* Star: open hills under a bright star */}
      <path d="M0 700 Q90 650 200 690 T400 676 V1700 H0Z" fill="#202C55" />
      <path d={starPath(300, 640, 10, 3, 4)} fill="#FFFFFF" />
      <circle cx="300" cy="640" r="18" fill="#FFFFFF" opacity=".15" />

      {/* Lantern: a river with an arched bridge */}
      <path d="M0 820 Q200 800 400 830 V870 Q200 840 0 862Z" fill="url(#pl-river)" opacity=".9" />
      <path d="M90 848 Q130 806 170 848" fill="none" stroke="#141C3C" strokeWidth="9" />
      <rect x="86" y="844" width="88" height="6" fill="#141C3C" />
      {[100, 160].map((x) => <g key={x}><rect x={x - 1} y="818" width="2" height="26" fill="#141C3C" /><circle cx={x} cy="816" r="10" fill="url(#pl-window)" /><rect x={x - 3} y="812" width="6" height="8" rx="2" fill="#FFE39A" /></g>)}

      {/* Lamp: a caravanserai with arches */}
      <path d="M0 880 Q120 860 220 880 T400 870 V1700 H0Z" fill="url(#pl-land)" />
      <g fill="#111A38">
        <rect x="230" y="950" width="130" height="46" />
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M${238 + i * 30} 996v-22a11 11 0 0 1 22 0v22z`} fill="#2A2238" />)}
        <rect x="226" y="944" width="138" height="8" />
      </g>
      {[0, 1, 2, 3].map((i) => <circle key={i} cx={249 + i * 30} cy="980" r="8" fill="url(#pl-window)" opacity=".8" />)}

      {/* Candle: a village with warm windows */}
      <path d="M0 1030 Q140 1000 260 1024 T400 1016 V1700 H0Z" fill="#18234A" />
      <g fill="#0E1532">
        <rect x="24" y="1096" width="46" height="36" /><path d="M20 1098l27-20 27 20z" />
        <rect x="150" y="1104" width="40" height="30" /><path d="M146 1106l24-18 24 18z" />
        <rect x="190" y="1090" width="34" height="44" />
      </g>
      {[[40, 1110], [56, 1110], [164, 1116], [204, 1104]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="10" fill="url(#pl-window)" opacity=".9" /><rect x={x - 3} y={y - 4} width="6" height="8" fill="#FFD983" /></g>)}

      {/* Sprout: terraced fields */}
      <path d="M0 1180 Q120 1160 240 1176 T400 1168 V1700 H0Z" fill="#162042" />
      {[0, 1, 2, 3].map((i) => <path key={i} d={`M${170 - i * 6} ${1236 + i * 18} Q${290} ${1222 + i * 18} ${400} ${1232 + i * 18}`} stroke="#2B5A4A" strokeWidth="5" fill="none" opacity={0.8 - i * 0.1} />)}
      {Array.from({ length: 14 }, (_, i) => <path key={i} d={`M${200 + i * 14} ${1236 + (i % 4) * 18}q2-8 6-10M${200 + i * 14} ${1236 + (i % 4) * 18}q-2-7-6-8`} stroke="#4C9A6E" strokeWidth="1.6" fill="none" />)}

      {/* Seed: a night oasis with palms and a pool */}
      <path d="M0 1330 Q100 1300 220 1320 T400 1312 V1700 H0Z" fill="url(#pl-dune)" />
      <path d="M0 1460 Q140 1420 280 1450 T400 1440 V1700 H0Z" fill="#100D20" opacity=".9" />
      <ellipse cx="250" cy="1530" rx="90" ry="18" fill="#2E3F75" />
      <ellipse cx="250" cy="1528" rx="70" ry="10" fill="#5D73AE" opacity=".5" />
      {[[214, 1520], [300, 1516]].map(([x, y], i) => (
        <g key={i} stroke="#0A0816" strokeLinecap="round" fill="none">
          <path d={`M${x} ${y}q${i ? -4 : 4}-34 ${i ? 2 : -2}-62`} strokeWidth="5" />
          <path d={`M${x + (i ? 2 : -2)} ${y - 62}q-24-6-36 10M${x + (i ? 2 : -2)} ${y - 62}q22-8 36 8M${x + (i ? 2 : -2)} ${y - 62}q-12-18-30-16M${x + (i ? 2 : -2)} ${y - 62}q14-18 30-12`} strokeWidth="4" />
        </g>
      ))}
      <path d="M0 1640 Q120 1600 260 1630 T400 1620 V1700 H0Z" fill="#07060F" />

      {/* Film grain for a painted, less flat look */}
      <rect width={W} height={H} filter="url(#pl-grain)" />
    </>
  );
}

export function PathOfLight({ points }: { points: number }) {
  const { t } = useT();
  const box = useRef<HTMLDivElement>(null);
  const [orb, setOrb] = useState(pointAt(0));
  const frac = Math.min(1, points / (POINTS_PER_BADGE * BADGES.length));
  const lvl = Math.min(BADGES.length, Math.floor(points / POINTS_PER_BADGE));

  useEffect(() => { setOrb(pointAt(frac)); }, [frac]);

  const jump = () => {
    const el = box.current?.querySelector<HTMLElement>("[data-here]");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[0.92rem] text-fg-muted">{t("Climb from the night oasis to the summit of light. Every 1,000 points takes you to the next landmark.")}</p>
        <button type="button" onClick={jump} className="btn btn-ghost !py-1.5 text-[0.88rem]">{t("Where am I?")}</button>
      </div>
      <div ref={box} className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[22px] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8)] ring-1 ring-black/10">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={t("Path of Light")}>
          <Landscape />

          {/* The road: a worn track, then the glowing part you have walked */}
          <path d={ROAD} fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="22" strokeLinecap="round" transform="translate(0 4)" filter="url(#pl-soft)" />
          <path d={ROAD} fill="none" stroke="#C9B38A" strokeOpacity=".55" strokeWidth="16" strokeLinecap="round" />
          <path d={ROAD} fill="none" stroke="#EEDDB8" strokeOpacity=".35" strokeWidth="8" strokeLinecap="round" />
          <path d={ROAD} fill="none" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="1 9" strokeLinecap="round" />
          <path d={ROAD} pathLength={1} fill="none" stroke="#FFD873" strokeWidth="26" strokeLinecap="round" filter="url(#pl-soft)" opacity=".75"
            strokeDasharray="1" strokeDashoffset={1 - frac} style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)" }} />
          <path d={ROAD} pathLength={1} fill="none" stroke="#FFF1C2" strokeWidth="7" strokeLinecap="round"
            strokeDasharray="1" strokeDashoffset={1 - frac} style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)" }} />

          {/* Start */}
          <circle cx={START.x} cy={START.y} r="14" fill="#FFD873" opacity=".3" />
          <path d={starPath(START.x, START.y, 9, 4, 8)} fill="#FFE9A8" />
          <text x={START.x + 18} y={START.y + 5} fill="#F5EEDC" fontSize="15" fontWeight="800">{t("Start")}</text>

          {/* Plinths under each station */}
          {ST.map((s, i) => (
            <g key={i}>
              <ellipse cx={s.x} cy={s.y + 34} rx="34" ry="9" fill="#000" opacity=".4" filter="url(#pl-soft)" />
              <ellipse cx={s.x} cy={s.y + 26} rx="30" ry="8" fill={i < lvl ? "#E9C46A" : "#6B6A80"} opacity=".9" />
              {i < lvl && <circle cx={s.x} cy={s.y} r="48" fill="#FFD873" opacity=".22" filter="url(#pl-soft)" />}
            </g>
          ))}

          {/* You are here */}
          <g>
            <circle cx={orb.x} cy={orb.y} r="40" fill="#FFE39A" opacity=".35" filter="url(#pl-soft)" className="glow-pulse" />
            <circle cx={orb.x} cy={orb.y} r="9" fill="#FFFBEA" />
            <circle cx={orb.x} cy={orb.y} r="4.5" fill="#FFD873" />
          </g>
        </svg>

        {BADGES.map((b, i) => {
          const s = ST[i];
          const earned = i < lvl, next = i === lvl;
          const left = s.x < W / 2;
          return (
            <div key={b.name} {...(next || (lvl >= BADGES.length && i === BADGES.length - 1) ? { "data-here": "" } : {})}
              className="absolute" style={{ top: `${(s.y / H) * 100}%`, left: `${(s.x / W) * 100}%`, transform: "translate(-50%, -50%)" }}>
              <div className={`rounded-full transition-transform ${next ? "station-now scale-110" : ""}`}>
                <BadgeIcon index={i} locked={!earned} size={58} />
              </div>
              <div className={`absolute top-1/2 w-[132px] -translate-y-1/2 rounded-xl border px-2.5 py-1.5 backdrop-blur-md ${left ? "left-[calc(100%+10px)]" : "right-[calc(100%+10px)] text-right"} ${earned || next ? "border-[#FFE39A]/45 bg-[#0B1430]/55" : "border-white/10 bg-[#0B1430]/35"}`}>
                <b className={`block font-display text-[0.98rem] leading-tight ${earned || next ? "text-[#FFF3D0]" : "text-[#F5EEDC]/65"}`}>{t(b.name)}</b>
                <span className={`block text-[0.7rem] leading-snug ${earned || next ? "text-[#F5EEDC]/90" : "text-[#F5EEDC]/50"}`}>{t(b.meaning)}</span>
                <span className="block text-[0.68rem] font-bold tabular-nums text-[#FFD873]">
                  {earned ? `✓ ${t("Earned")}` : next ? t("{n} to go", { n: (b.points - points).toLocaleString() }) : b.points.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
