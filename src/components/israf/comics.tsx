"use client";

import type { ReactNode } from "react";
import { COMICS, pickBi, type Panel, type Prop, type Who } from "@/content/israf-tools";

// Short comic strips. Like the rest of the app's art, the people are drawn
// without faces: simple shapes, clothes and colours tell who is who.
const INK = "#2B2A28";
const SKIN = "#E8B98F";

const LOOK: Record<Who, { body: string; adult: boolean; scarf?: string; cap?: string; beard?: boolean; cane?: boolean }> = {
  boy: { body: "#3E7CC0", adult: false, cap: "#5A3A22" },
  girl: { body: "#C2547A", adult: false, scarf: "#7E57C2" },
  mum: { body: "#2E7D6B", adult: true, scarf: "#1F5A4D" },
  dad: { body: "#4A5A7A", adult: true, cap: "#FFFFFF" },
  grandma: { body: "#8E6E9E", adult: true, scarf: "#EDE6F2", cane: true },
  grandpa: { body: "#7A6A55", adult: true, cap: "#FFFFFF", beard: true, cane: true },
};

function Person({ who, x }: { who: Who; x: number }) {
  const L = LOOK[who];
  const k = L.adult ? 1 : 0.74;
  const cx = (x / 100) * 400, base = 268;
  const h = 150 * k, r = 22 * k;
  const top = base - h;
  return (
    <g>
      <path d={`M${cx - 30 * k} ${base}l${8 * k} ${-(h - 2 * r - 6)}q${22 * k} ${-14 * k} ${44 * k} 0l${8 * k} ${h - 2 * r - 6}z`} fill={L.body} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <circle cx={cx} cy={top + r} r={r} fill={SKIN} stroke={INK} strokeWidth={2} />
      {L.scarf && <path d={`M${cx - r - 4} ${top + r + 6}a${r + 4} ${r + 6} 0 0 1 ${2 * r + 8} 0l4 ${16 * k}h${-(2 * r + 16)}z`} fill={L.scarf} stroke={INK} strokeWidth={2} strokeLinejoin="round" />}
      {L.scarf && <circle cx={cx} cy={top + r + 3} r={r * 0.7} fill={SKIN} />}
      {L.cap && <path d={`M${cx - r} ${top + r * 0.7}a${r} ${r * 0.85} 0 0 1 ${2 * r} 0z`} fill={L.cap} stroke={INK} strokeWidth={2} />}
      {L.beard && <path d={`M${cx - r * 0.75} ${top + r * 1.3}q${r * 0.75} ${r * 1.4} ${r * 1.5} 0z`} fill="#E9E5DC" stroke={INK} strokeWidth={1.5} />}
      {L.cane && <path d={`M${cx + 34 * k} ${base}V${top + h * 0.45}q0 -10 -8 -10`} stroke="#6B4B2A" strokeWidth={4} fill="none" strokeLinecap="round" />}
    </g>
  );
}

function PropArt({ p, firstX }: { p: Prop; firstX: number }) {
  const fx = (firstX / 100) * 400;
  const s = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  const art: Record<Prop, ReactNode> = {
    tap: <g><rect x="250" y="190" width="120" height="78" rx="6" fill="#CFD8DC" {...s} /><path d="M336 192V146H300V160" fill="none" stroke="#78909C" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /><path d="M300 168v24" stroke="#4FC3F7" strokeWidth={7} strokeLinecap="round" className="animate-pulse" /><ellipse cx="300" cy="196" rx="38" ry="8" fill="#90A4AE" {...s} /></g>,
    "sink-off": <g><rect x="250" y="190" width="120" height="78" rx="6" fill="#CFD8DC" {...s} /><path d="M336 192V146H300V160" fill="none" stroke="#78909C" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /><ellipse cx="300" cy="196" rx="38" ry="8" fill="#90A4AE" {...s} /><text x="350" y="140" fontSize="26" fill="#2E7D4F">✓</text></g>,
    river: <g><path d="M0 250q50-14 100 0t100 0 100 0 100 0V300H0z" fill="#64B5F6" opacity={0.75} /><path d="M20 262q30-8 60 0M150 268q30-8 60 0M280 262q30-8 60 0" stroke="#fff" strokeWidth={2} fill="none" /></g>,
    table: <g><rect x="60" y="214" width="280" height="16" rx="4" fill="#A97C50" {...s} /><path d="M80 230v38M320 230v38" {...s} strokeWidth={5} /><ellipse cx="200" cy="210" rx="40" ry="7" fill="#fff" {...s} /></g>,
    bread: <g><ellipse cx="150" cy="276" rx="18" ry="8" fill="#D9A55B" {...s} /><path d="M140 274l4 4M150 273l4 4M160 274l3 3" stroke="#A8743A" strokeWidth={1.5} /></g>,
    phone: <g><rect x={fx + 16} y="176" width="22" height="36" rx="4" fill="#263238" {...s} /><rect x={fx + 19} y="180" width="16" height="26" rx="2" fill="#80DEEA" /><path d={`M${fx + 44} 176l10 -8M${fx + 46} 190l12 0`} stroke="#80DEEA" strokeWidth={2} /></g>,
    clock: <g><circle cx="356" cy="118" r="24" fill="#FFF8E1" {...s} /><path d="M356 102v16l10 7" fill="none" {...s} strokeWidth={3} /></g>,
    book: <g><path d="M240 250l40-8 40 8v18l-40-8-40 8z" fill="#81C784" {...s} /><path d="M280 242v18" {...s} /></g>,
    moon: <path d="M60 30a24 24 0 1 0 22 34a19 19 0 1 1 -22 -34z" fill="#FFE082" {...s} />,
    sun: <g><circle cx="60" cy="52" r="20" fill="#FFD54F" {...s} />{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <path key={a} d={`M${60 + 26 * Math.cos((a * Math.PI) / 180)} ${52 + 26 * Math.sin((a * Math.PI) / 180)}l${6 * Math.cos((a * Math.PI) / 180)} ${6 * Math.sin((a * Math.PI) / 180)}`} {...s} />)}</g>,
    bin: <g><path d="M340 222h40l-5 46h-30z" fill="#B0BEC5" {...s} /><path d="M336 222h48" {...s} /><text x="348" y="252" fontSize="16">∅</text></g>,
    jars: <g>{[0, 1, 2].map((i) => <g key={i}><rect x={250 + i * 38} y="226" width="30" height="40" rx="6" fill={["#FFE0B2", "#C8E6C9", "#BBDEFB"][i]} {...s} /><rect x={252 + i * 38} y="220" width="26" height="8" rx="2" fill="#8D6E63" {...s} /></g>)}</g>,
  };
  return <>{art[p]}</>;
}

function PanelView({ panel, lang, n }: { panel: Panel; lang: string; n: number }) {
  const people = panel.scene.people;
  const dark = panel.scene.bg === "#2B2E55";
  return (
    <figure className="relative overflow-hidden rounded-[14px] border-[3px] border-[#2B2A28] bg-white" style={{ aspectRatio: "4 / 3" }}>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
        <rect width="400" height="300" fill={panel.scene.bg} />
        <rect y="268" width="400" height="32" fill={dark ? "#1E2040" : "#00000014"} />
        {panel.scene.props.filter((p) => p === "river" || p === "moon" || p === "sun" || p === "clock").map((p) => <PropArt key={p} p={p} firstX={people[0]?.x ?? 50} />)}
        {people.map((pp, i) => <Person key={i} who={pp.who} x={pp.x} />)}
        {panel.scene.props.filter((p) => !(p === "river" || p === "moon" || p === "sun" || p === "clock")).map((p) => <PropArt key={p} p={p} firstX={people[0]?.x ?? 50} />)}
      </svg>
      <span className="absolute right-1.5 top-1 text-[0.7rem] font-extrabold opacity-50" style={{ color: dark ? "#fff" : INK }}>{n}</span>
      {panel.bubbles.map((bb, i) => {
        const x = people[bb.who]?.x ?? 50;
        const left = Math.max(2, Math.min(40, x - 30));
        return (
          <div key={i} className="absolute top-[4%] w-[58%] rounded-[14px] border-2 border-[#2B2A28] bg-white px-2 py-1 text-[0.78rem] font-bold leading-snug text-[#2B2A28] shadow-sm sm:text-[0.85rem]"
            style={{ left: `${left}%` }}>
            {pickBi(bb.text, lang)}
            <span aria-hidden className="absolute -bottom-[9px] h-4 w-4 rotate-45 border-b-2 border-r-2 border-[#2B2A28] bg-white"
              style={{ left: `${Math.max(10, Math.min(85, ((x - left) / 58) * 100))}%` }} />
          </div>
        );
      })}
      {panel.caption && (
        <figcaption className="absolute bottom-[3%] left-[3%] max-w-[70%] rounded-[6px] border-2 border-[#2B2A28] bg-[#FFF3B0] px-2 py-0.5 text-[0.74rem] font-bold leading-snug text-[#2B2A28] sm:text-[0.8rem]">
          {pickBi(panel.caption, lang)}
        </figcaption>
      )}
    </figure>
  );
}

export function Comics({ lang }: { lang: string }) {
  return (
    <div className="flex flex-col gap-8">
      {COMICS.map((c, si) => (
        <section key={c.id} className="flex flex-col gap-3">
          <h2 className="text-[1.25rem]"><span className="mr-2 text-gold">#{si + 1}</span>{pickBi(c.title, lang)}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.panels.map((p, i) => <PanelView key={i} panel={p} lang={lang} n={i + 1} />)}
          </div>
          <p className="rounded-btn bg-emerald-soft px-3.5 py-2.5 text-[0.95rem] font-bold">💡 {pickBi(c.moral, lang)} <span className="font-normal text-fg-muted">· {c.src}</span></p>
        </section>
      ))}
    </div>
  );
}
