"use client";

import { useId, type ReactNode } from "react";
import { starPath } from "./figures";

// Original illustrated covers for each Ilm Quest world: one geometric,
// pattern-inspired style, no people or faces. Each world has its own palette
// so the Knowledge Base reads as a map of places rather than a list.

export type WorldLook = { from: string; to: string; accent: string; ink: string };

export const WORLD_LOOKS: Record<string, WorldLook> = {
  iman: { from: "#0D1B3E", to: "#24386E", accent: "#E9C46A", ink: "#F5EEDC" },
  islam: { from: "#0B4644", to: "#1F7A6D", accent: "#F2C46D", ink: "#F3F7EF" },
  salah: { from: "#3E2A5C", to: "#E89A5C", accent: "#FFD58A", ink: "#FFF6E6" },
  akhlaq: { from: "#6E2C3A", to: "#C46A63", accent: "#F7D59A", ink: "#FFF2EC" },
  ruhiy: { from: "#211C4A", to: "#46388A", accent: "#F0C674", ink: "#F2EEFF" },
  "ruhiy-2": { from: "#1C2450", to: "#3A4F94", accent: "#F0C674", ink: "#EEF2FF" },
  "ruhiy-3": { from: "#2A1C4A", to: "#5A3A86", accent: "#F0C674", ink: "#F5EEFF" },
  social: { from: "#5A3415", to: "#C2843A", accent: "#FFE1A3", ink: "#FFF5E6" },
  duas: { from: "#2E2350", to: "#875A8A", accent: "#F6D28B", ink: "#FBF0FF" },
  quran: { from: "#08352A", to: "#17664F", accent: "#E9C46A", ink: "#EEF8F1" },
  clean: { from: "#0F4C6E", to: "#3FA7C9", accent: "#FFFFFF", ink: "#F0FAFF" },
  family: { from: "#1E3A2F", to: "#C2703D", accent: "#FFD98A", ink: "#FFF4E4" },
  public: { from: "#173B57", to: "#B9774A", accent: "#FFD27A", ink: "#FFF3E2" },
  seerah: { from: "#7A3E1D", to: "#E6B373", accent: "#FFF0C9", ink: "#FFF8EC" },
};
const FALLBACK: WorldLook = { from: "#0D4A3B", to: "#1D7A60", accent: "#E9C46A", ink: "#F5EFDC" };
export const lookFor = (id: string) => WORLD_LOOKS[id] ?? FALLBACK;

// Fixed star field (no randomness, so server and client render the same).
const STARS: [number, number, number][] = [
  [18, 16, 1.1], [46, 34, 0.8], [70, 12, 1.3], [96, 28, 0.7], [128, 10, 1], [152, 40, 0.8], [186, 18, 1.2],
  [214, 34, 0.7], [236, 12, 1], [262, 26, 0.9], [290, 14, 1.2], [306, 38, 0.7], [34, 52, 0.6], [118, 50, 0.6],
  [200, 54, 0.6], [276, 52, 0.7],
];
function Stars({ color, opacity = 0.85, count = STARS.length }: { color: string; opacity?: number; count?: number }) {
  return <g fill={color} opacity={opacity}>{STARS.slice(0, count).map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} className={i % 3 === 0 ? "twinkle" : undefined} style={{ animationDelay: `${(i % 5) * 0.7}s` }} />)}</g>;
}

/** Faint girih lattice along the bottom edge. */
function Lattice({ color }: { color: string }) {
  return (
    <g stroke={color} strokeOpacity={0.16} fill="none" strokeWidth={1}>
      {Array.from({ length: 9 }, (_, i) => {
        const x = i * 40;
        return <g key={i}><path d={`M${x + 20} 112 l20 14 -20 14 -20 -14z`} /><path d={`M${x + 8} 118h24v20h-24z`} /></g>;
      })}
    </g>
  );
}

function Scene({ id, L, g }: { id: string; L: WorldLook; g: string }) {
  const a = L.accent;
  switch (id) {
    case "iman":
      return (<>
        <Stars color={L.ink} />
        <circle cx="236" cy="62" r="40" fill={`url(#${g}-glow)`} />
        <path d="M252 30a34 34 0 1 0 0 64 27 27 0 1 1 0-64z" fill={a} />
        <path d={starPath(196, 50, 9, 4, 5)} fill={a} />
        <path d={starPath(84, 78, 26, 20, 8)} fill="none" stroke={a} strokeOpacity={0.55} strokeWidth={1.5} />
        <path d={starPath(84, 78, 15, 11, 8)} fill={a} fillOpacity={0.2} stroke={a} strokeOpacity={0.6} />
        <Lattice color={L.ink} />
      </>);
    case "islam":
      return (<>
        <circle cx="160" cy="70" r="46" fill={`url(#${g}-glow)`} />
        <circle cx="160" cy="58" r="22" fill={a} opacity={0.9} />
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 72 + i * 44;
          return (<g key={i}>
            <rect x={x - 7} y={70} width={14} height={50} fill={L.ink} opacity={0.92} />
            <rect x={x - 10} y={66} width={20} height={6} rx={1.5} fill={a} />
            <rect x={x - 10} y={118} width={20} height={5} fill={a} />
          </g>);
        })}
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M${82 + i * 44} 70 q12 -26 24 0`} fill="none" stroke={a} strokeWidth={3} />)}
        <rect x="40" y="123" width="240" height="5" rx="2" fill={L.ink} opacity={0.8} />
      </>);
    case "salah":
      return (<>
        <circle cx="160" cy="132" r="70" fill={`url(#${g}-glow)`} />
        <circle cx="160" cy="128" r="26" fill={a} />
        <path d="M108 140V78q0-30 52-56 52 26 52 56v62z" fill="#1E3F35" />
        <path d="M120 140V82q0-22 40-44 40 22 40 44v58z" fill="#0F2C24" />
        <path d="M160 38v26" stroke={a} strokeWidth={1.5} />
        <path d="M150 64h20l-3 14h-14z" fill={a} />
        <circle cx="160" cy="74" r="14" fill={a} opacity={0.25} className="glow-pulse" />
        <path d="M128 140l6-16h52l6 16" fill={a} opacity={0.5} />
        <Stars color={L.ink} opacity={0.6} count={7} />
      </>);
    case "akhlaq":
      return (<>
        <circle cx="160" cy="70" r="56" fill={`url(#${g}-glow)`} />
        <path d={starPath(160, 70, 44, 34, 8)} fill="none" stroke={a} strokeWidth={1.5} strokeOpacity={0.7} />
        <path d={starPath(160, 70, 30, 23, 8)} fill={a} fillOpacity={0.18} stroke={a} strokeOpacity={0.8} />
        <path d="M160 86c-14-9-20-16-20-24a10 10 0 0 1 20-3 10 10 0 0 1 20 3c0 8-6 15-20 24z" fill={a} />
        {[[60, 40], [262, 32], [90, 104], [214, 26]].map(([x, y], i) => (
          <g key={i} fill={L.ink} opacity={0.75}>
            {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx={x} cy={y - 6} rx={3} ry={6} transform={`rotate(${r} ${x} ${y})`} />)}
            <circle cx={x} cy={y} r={2.6} fill={a} />
          </g>
        ))}
      </>);
    case "ruhiy": case "ruhiy-2": case "ruhiy-3": {
      const n = id === "ruhiy" ? 1 : id === "ruhiy-2" ? 2 : 3;
      return (<>
        <Stars color={L.ink} opacity={0.55} />
        <path d="M118 140V70q0-34 42-50 42 16 42 50v70z" fill="#000" opacity={0.22} />
        <circle cx="160" cy="80" r="44" fill={`url(#${g}-glow)`} className="glow-pulse" />
        <path d="M160 52c7 9 7 16 0 22-7-6-7-13 0-22z" fill={a} />
        <path d="M134 92c4-10 14-14 26-14s22 4 26 14z" fill={a} />
        <path d="M186 90q14-4 20-12" stroke={a} strokeWidth={3} strokeLinecap="round" fill="none" />
        <rect x="140" y="92" width="40" height="5" rx="2" fill={a} opacity={0.8} />
        {Array.from({ length: n }, (_, i) => <path key={i} d={starPath(132 + i * 28 - (n - 1) * 14 + 28, 122, 6, 2.6, 8)} fill={a} />)}
      </>);
    }
    case "social":
      return (<>
        <circle cx="250" cy="40" r="18" fill={a} opacity={0.9} />
        <circle cx="250" cy="40" r="40" fill={`url(#${g}-glow)`} />
        <path d="M0 140V112h30V96h22v16h18V84l14-12 14 12v28h20V100q16-22 32 0v12h18V90h24v22h16V80h8V64h4v16h8v32h22V98h26v14h24v28z" fill="#2E1A0A" opacity={0.85} />
        {[[40, 104], [100, 92], [176, 104], [214, 100], [262, 92], [280, 120], [62, 120], [134, 120]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width={5} height={7} rx={1} fill={a} className={i % 2 ? "twinkle" : undefined} style={{ animationDelay: `${i * 0.6}s` }} />
        ))}
        <path d="M0 132q80-10 160 0t160 0" stroke={a} strokeOpacity={0.5} strokeWidth={2} fill="none" strokeDasharray="4 6" />
      </>);
    case "duas":
      return (<>
        <Stars color={L.ink} opacity={0.5} count={10} />
        <circle cx="160" cy="72" r="50" fill={`url(#${g}-glow)`} />
        {Array.from({ length: 33 }, (_, i) => {
          const t = (i / 32) * Math.PI * 1.55 + Math.PI * 0.72;
          return <circle key={i} cx={160 + 46 * Math.cos(t)} cy={66 + 40 * Math.sin(t)} r={i % 11 === 0 ? 5 : 3.6} fill={i % 11 === 0 ? L.ink : a} />;
        })}
        <path d="M160 108v12" stroke={a} strokeWidth={2} />
        <path d="M154 120h12l-2 12h-8z" fill={a} />
        {[[120, 40], [200, 34], [140, 24], [186, 52]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2} fill={a} className="float-up" style={{ animationDelay: `${i * 0.9}s` }} />)}
      </>);
    case "quran":
      return (<>
        <circle cx="160" cy="58" r="54" fill={`url(#${g}-glow)`} />
        <g stroke={a} strokeOpacity={0.35} strokeWidth={2}>
          {[-60, -36, -12, 12, 36, 60].map((d) => <line key={d} x1="160" y1="62" x2={160 + d * 1.6} y2="6" />)}
        </g>
        <path d="M118 128l84-46M202 128l-84-46" stroke="#3B2A16" strokeWidth={7} strokeLinecap="round" />
        <path d="M160 88c-14-8-30-10-46-8v-28c16-2 32 0 46 8z" fill={L.ink} />
        <path d="M160 88c14-8 30-10 46-8v-28c-16-2-32 0-46 8z" fill={L.ink} opacity={0.92} />
        <path d="M160 60v28" stroke={a} strokeWidth={1.5} />
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M122 ${62 + i * 5}q18-3 32 2M166 ${64 + i * 5}q14-5 32-2`} stroke={L.from} strokeOpacity={0.45} strokeWidth={1.2} fill="none" />)}
        <Lattice color={L.ink} />
      </>);
    case "clean":
      return (<>
        <circle cx="160" cy="66" r="56" fill={`url(#${g}-glow)`} />
        {/* A water jug (ibrīq) pouring into a basin, with bubbles */}
        <path d="M128 52c0-10 10-16 20-16h10c10 0 18 6 18 16v40c0 10-8 16-18 16h-12c-10 0-18-6-18-16z" fill={L.ink} />
        <path d="M176 60q22-4 26 12" stroke={L.ink} strokeWidth={6} fill="none" strokeLinecap="round" />
        <path d="M128 60q-14 2-14 16t14 14" stroke={L.ink} strokeWidth={5} fill="none" />
        <path d="M200 72q4 18 2 34" stroke={a} strokeWidth={3} strokeLinecap="round" strokeDasharray="2 6" />
        <path d="M176 112h52q-4 16-26 16t-26-16z" fill={L.ink} opacity={0.9} />
        {[[96, 40, 7], [80, 70, 5], [236, 38, 6], [252, 64, 4], [110, 100, 4], [222, 92, 5]].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="none" stroke={L.ink} strokeOpacity={0.7} strokeWidth={1.5} className="float-up" style={{ animationDelay: `${i * 0.6}s` }} />
        ))}
        <Lattice color={L.ink} />
      </>);
    case "family":
      return (<>
        <circle cx="214" cy="60" r="58" fill={`url(#${g}-glow)`} />
        <Stars color={L.ink} opacity={0.5} count={8} />
        {/* Three homes side by side, lit windows, a shared path and a crescent */}
        <path d="M96 24a14 14 0 1 0 10 24a11 11 0 1 1 -10 -24z" fill={a} />
        {[[150, 88, 40], [204, 72, 48], [266, 90, 36]].map(([x, y, w], i) => (
          <g key={i}>
            <path d={`M${x - 4} ${y}l${w / 2 + 4} -${w * 0.45}l${w / 2 + 4} ${w * 0.45}z`} fill={L.ink} opacity={0.95} />
            <rect x={x} y={y} width={w} height={124 - y} fill={L.ink} opacity={0.88} />
            <rect x={x + w / 2 - 6} y={110} width={12} height={14} rx={6} fill={L.from} />
            <rect x={x + 8} y={y + 10} width={10} height={10} rx={2} fill={a} />
            <rect x={x + w - 18} y={y + 10} width={10} height={10} rx={2} fill={a} className="twinkle" style={{ animationDelay: `${i * 0.8}s` }} />
          </g>
        ))}
        <path d="M0 124h320v16H0z" fill={L.from} opacity={0.55} />
        <path d="M130 132q90-10 180 0" stroke={a} strokeOpacity={0.6} strokeWidth={2} strokeDasharray="4 6" fill="none" />
      </>);
    case "public":
      return (<>
        <circle cx="220" cy="58" r="56" fill={`url(#${g}-glow)`} />
        {/* A street: masjid dome and minaret, a market awning, a lamp and a tree */}
        <g transform="translate(68 22) scale(0.82)">
        <g fill={L.ink}>
          <path d="M176 124V88h64v36z" opacity={0.92} />
          <path d="M184 88a24 24 0 0 1 48 0z" />
          <path d="M208 58v6" stroke={a} strokeWidth={2} />
          <rect x="248" y="54" width="10" height="70" opacity={0.92} />
          <path d="M246 54l7-12 7 12z" />
          <rect x="200" y="104" width="16" height="20" rx="8" fill={L.from} />
        </g>
        <path d="M253 36a5 5 0 1 0 3 8a4 4 0 1 1 -3 -8z" fill={a} />
        <g>
          <rect x="118" y="96" width="44" height="28" fill={L.ink} opacity={0.85} />
          {[0, 1, 2, 3].map((i) => <path key={i} d={`M${118 + i * 11} 88h11v8q-5.5 6 -11 0z`} fill={i % 2 ? a : "#C4533D"} />)}
          {[124, 136, 148].map((x) => <circle key={x} cx={x} cy={110} r={3.5} fill={x === 136 ? "#1E8257" : a} />)}
        </g>
        <path d="M282 124V74" stroke={L.ink} strokeWidth={2.5} />
        <circle cx="282" cy="70" r="5" fill={a} className="glow-pulse" />
        <path d="M298 124v-22" stroke="#3A2A1A" strokeWidth={4} />
        <circle cx="298" cy="94" r="14" fill="#2F6B47" />
        </g>
        <path d="M0 124h320v16H0z" fill={L.from} opacity={0.6} />
        <path d="M110 132h200" stroke={L.ink} strokeOpacity={0.5} strokeWidth={2} strokeDasharray="8 8" />
      </>);
    case "seerah":
      return (<>
        <circle cx="236" cy="46" r="20" fill={a} />
        <circle cx="236" cy="46" r="44" fill={`url(#${g}-glow)`} />
        <path d="M0 106q70-24 150-6t170-8v48H0z" fill="#C0783E" />
        <g fill="#2F5E3E">
          <path d="M70 96h40v-8a20 20 0 0 1 40 0v8h0v14H70z" />
          <rect x="156" y="62" width="7" height="48" />
          <path d="M159.5 54l5 8h-10z" />
        </g>
        <path d="M0 122q90-18 180-2t140-6v26H0z" fill="#8E4A22" />
        {[[34, 118], [278, 112]].map(([x, y], i) => (
          <g key={i} stroke="#3A2312" strokeWidth={3} strokeLinecap="round" fill="none">
            <path d={`M${x} ${y}q2-22 -2-40`} />
            <path d={`M${x - 2} ${y - 40}q-14-2-20 8M${x - 2} ${y - 40}q14-4 20 6M${x - 2} ${y - 40}q-6-10-16-10M${x - 2} ${y - 40}q8-10 18-8`} />
          </g>
        ))}
        <g fill="#3A2312" opacity={0.85}>
          {[196, 220, 244].map((x) => <path key={x} d={`M${x} 124h14l2-6-3-4 2-5h-3l-2 4-3-3-4 4-2-1-1 4z`} />)}
        </g>
      </>);
    default:
      return (<><Stars color={L.ink} /><path d={starPath(160, 70, 30, 23, 8)} fill={L.accent} /></>);
  }
}

/** A world's illustrated cover. Decorative: the title lives in the page text. */
export function WorldCover({ id, className = "", children }: { id: string; className?: string; children?: ReactNode }) {
  const L = lookFor(id);
  const g = useId().replace(/:/g, "");
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(160deg, ${L.from}, ${L.to})` }}>
      <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id={`${g}-glow`}>
            <stop offset="0" stopColor={L.accent} stopOpacity={0.55} />
            <stop offset="1" stopColor={L.accent} stopOpacity={0} />
          </radialGradient>
        </defs>
        <Scene id={id} L={L} g={g} />
      </svg>
      {children && <div className="relative">{children}</div>}
    </div>
  );
}
