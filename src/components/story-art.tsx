"use client";

import { useId } from "react";
import type { Bedtime, BedtimeCat } from "@/content/bedtime";
import { starPath } from "./figures";

// Night-time covers for Bedtime Stories: a sky per collection and a small
// motif per story. Original geometric art; no people or faces.

const SKIES: Record<BedtimeCat, [string, string]> = {
  prophet: ["#0B1730", "#1F3A5C"],
  companions: ["#14112E", "#3A2E63"],
  prophets: ["#071E2A", "#16485A"],
  life: ["#0E1E1A", "#24503F"],
  imams: ["#1A1426", "#4A3346"],
  cities: ["#1B1430", "#5A3A4A"],
};

type Motif = "moon" | "ark" | "flame" | "stars11" | "sea" | "ant" | "tree" | "whale" | "ladder" | "dome" | "book" | "lantern" | "palm" | "scale" | "camel";

const BY_ID: Record<string, Motif> = {
  adam: "tree", "nuh-ark": "ark", "ibrahim-fire": "flame", yusuf: "stars11", "musa-sea": "sea", yunus: "whale", "sulayman-ant": "ant",
  miraj: "ladder", "crying-camel": "camel", halimah: "palm", "khadijah-salam": "moon", fatimah: "lantern", "hasan-husayn": "moon", "aisha-race": "palm",
  "last-words": "lantern", "halal-haram": "scale", luqman: "tree", "day-like-prophet": "moon", "jibril-hadith": "stars11",
  "makkah-city": "dome", "madinah-city": "dome", "aqsa-city": "dome", "misr-city": "palm", "saba-city": "tree", "ad-thamud": "camel",
};
const BY_CAT: Record<BedtimeCat, Motif> = { prophet: "moon", companions: "lantern", prophets: "moon", life: "tree", imams: "book", cities: "dome" };

const STAR_FIELD: [number, number, number][] = [[20, 18, 1], [52, 40, .7], [84, 14, 1.2], [120, 34, .8], [150, 12, .9], [196, 22, 1.1], [228, 44, .7], [262, 16, 1], [296, 36, .8], [40, 70, .6], [276, 70, .6], [110, 62, .6]];

function MotifArt({ m, gold, ink }: { m: Motif; gold: string; ink: string }) {
  switch (m) {
    case "ark": return (<>
      <path d="M96 96h128l-16 22H112z" fill={gold} /><rect x="130" y="72" width="60" height="24" rx="3" fill={ink} opacity=".9" />
      <path d="M150 72l10-12 10 12z" fill={gold} />
      <path d="M40 124q20-8 40 0t40 0 40 0 40 0 40 0 40 0" stroke={ink} strokeOpacity=".5" strokeWidth="3" fill="none" />
    </>);
    case "flame": return (<>
      <path d="M160 116c-26 0-36-18-28-38 4 10 10 12 12 6 4-14 0-26 16-40 0 18 12 22 18 34 6 12 8 38-18 38z" fill={gold} />
      <path d="M160 116c-10 0-14-8-10-16 2 4 5 4 6 1 2-6 0-10 6-16 0 8 6 10 8 16 2 6 0 15-10 15z" fill="#FFF3C4" />
    </>);
    case "stars11": return (<>
      <circle cx="200" cy="56" r="16" fill={gold} /><path d="M128 44a14 14 0 1 0 0 26 11 11 0 1 1 0-26z" fill="#FFF3C4" />
      {Array.from({ length: 11 }, (_, i) => { const a = Math.PI * (0.15 + i * 0.07); return <path key={i} d={starPath(160 + 70 * Math.cos(a), 100 + 34 * Math.sin(a) - 30, 5, 2, 5)} fill="#FFF3C4" />; })}
    </>);
    case "sea": return (<>
      <path d="M40 140V70q40-10 92 20v50z" fill="#2A7A90" opacity=".85" /><path d="M280 140V70q-40-10-92 20v50z" fill="#2A7A90" opacity=".85" />
      <path d="M132 140q28-30 56 0" fill={gold} opacity=".9" />
    </>);
    case "ant": return (<>
      <path d="M120 70l10-16 10 10 10-14 10 14 10-10 10 16z" fill={gold} />
      <g fill={ink}><ellipse cx="150" cy="108" rx="7" ry="5" /><ellipse cx="162" cy="106" rx="5" ry="4" /><circle cx="172" cy="103" r="4" /></g>
      <path d="M146 112l-6 8M152 112l0 9M160 110l4 9M174 100l6-6" stroke={ink} strokeWidth="1.5" />
    </>);
    case "tree": return (<>
      <path d="M160 128V84" stroke="#6B4A2A" strokeWidth="6" strokeLinecap="round" />
      <circle cx="160" cy="70" r="28" fill="#2F7A55" /><circle cx="140" cy="80" r="18" fill="#3C8D63" /><circle cx="182" cy="80" r="18" fill="#3C8D63" />
      {[[146, 64], [170, 60], [160, 84], [182, 78]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.5" fill={gold} />)}
    </>);
    case "whale": return (<>
      <path d="M96 100q30-34 96-20 30 8 34 26-30 18-92 10-24-4-38-16z" fill="#2A6E8A" />
      <path d="M226 104l18-14v24z" fill="#2A6E8A" /><circle cx="128" cy="98" r="3" fill={ink} />
      <path d="M150 72q0-14 6-20M150 72q4-12 14-14" stroke={ink} strokeOpacity=".7" strokeWidth="2" fill="none" />
    </>);
    case "ladder": return (<>
      {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={starPath(160 + (i % 2 ? 14 : -14), 128 - i * 20, 6 - i * 0.5, 2.4, 8)} fill={i === 5 ? "#FFF3C4" : gold} opacity={1 - i * 0.08} />)}
      <circle cx="160" cy="22" r="18" fill={gold} opacity=".25" />
    </>);
    case "dome": return (<>
      <path d="M104 132V100h20v-8a36 36 0 0 1 72 0v8h20v32z" fill="#0E2A22" />
      <rect x="226" y="64" width="9" height="68" fill="#0E2A22" /><path d="M230.5 54l6 10h-12z" fill="#0E2A22" />
      <path d="M156 52v-10M152 46h8" stroke={gold} strokeWidth="2" />
      {[136, 156, 176].map((x) => <path key={x} d={`M${x} 132v-14a6 6 0 0 1 12 0v14z`} fill={gold} opacity=".8" />)}
    </>);
    case "book": return (<>
      <path d="M160 108c-14-8-34-10-50-6V70c16-4 36-2 50 6z" fill={ink} /><path d="M160 108c14-8 34-10 50-6V70c-16-4-36-2-50 6z" fill={ink} opacity=".9" />
      <path d="M160 76v32" stroke={gold} strokeWidth="1.5" />
      <path d="M160 40c5 6 5 11 0 15-5-4-5-9 0-15z" fill={gold} /><circle cx="160" cy="50" r="16" fill={gold} opacity=".2" className="glow-pulse" />
    </>);
    case "lantern": return (<>
      <path d="M160 26v12" stroke={gold} strokeWidth="2" /><path d="M148 38h24l-4 8h-16z" fill={gold} />
      <path d="M146 46h28l4 40-18 12-18-12z" fill={gold} opacity=".95" />
      <path d="M152 52h16l2 30-10 7-10-7z" fill="#FFF3C4" /><circle cx="160" cy="68" r="34" fill={gold} opacity=".18" className="glow-pulse" />
    </>);
    case "palm": return (<>
      <path d="M0 132q80-16 160-4t160-4v16H0z" fill="#1B140C" />
      <g stroke="#1B140C" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M170 130q4-34-4-62" /><path d="M166 68q-22-6-34 8M166 68q20-8 34 6M166 68q-10-16-26-16M166 68q12-16 28-12" />
      </g>
      <path d="M96 46a14 14 0 1 0 0 26 11 11 0 1 1 0-26z" fill={gold} />
    </>);
    case "scale": return (<>
      <path d="M160 40v74M136 118h48M110 56h100" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <path d="M110 56l-16 30h32zM210 56l-16 30h32z" fill={gold} opacity=".35" stroke={gold} strokeWidth="2" />
      <circle cx="160" cy="40" r="5" fill={gold} />
    </>);
    case "camel": return (<>
      <path d="M0 128q90-14 170-2t150-6v20H0z" fill="#1B140C" />
      <path d="M118 126v-24l6-12q8-14 18-4 8-10 16 2l8 12h10l6-14h6l-2 18-8 4v18h-5v-16h-26v16h-5v-16l-8 4v16z" fill="#1B140C" />
      <circle cx="232" cy="44" r="14" fill={gold} />
    </>);
    default: return (<><path d="M180 34a24 24 0 1 0 0 46 19 19 0 1 1 0-46z" fill={gold} /><path d={starPath(140, 46, 7, 3, 5)} fill="#FFF3C4" /></>);
  }
}

export function StoryCover({ s, className = "" }: { s: Pick<Bedtime, "id" | "cat">; className?: string }) {
  const [a, b] = SKIES[s.cat];
  const m = BY_ID[s.id] ?? BY_CAT[s.cat];
  const g = useId().replace(/:/g, "");
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(180deg, ${a}, ${b})` }} aria-hidden>
      <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
        <defs><radialGradient id={g}><stop offset="0" stopColor="#FFD873" stopOpacity=".35" /><stop offset="1" stopColor="#FFD873" stopOpacity="0" /></radialGradient></defs>
        <g fill="#F5EEDC">{STAR_FIELD.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} className={i % 3 ? undefined : "twinkle"} style={{ animationDelay: `${i * 0.4}s` }} />)}</g>
        <circle cx="160" cy="80" r="70" fill={`url(#${g})`} />
        <MotifArt m={m} gold="#E9C46A" ink="#F5EEDC" />
      </svg>
    </div>
  );
}
