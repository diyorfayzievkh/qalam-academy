"use client";

import type { Coin, Visual } from "@/content/math/types";

// Pictures for math: each one is a simple SVG or grid that works in light and
// dark mode. Problems use them as models; lessons use them to explain.

const INK = "currentColor";
const A = "#2E86C1", B = "#E67E22", G = "#27AE60", P = "#8E44AD";

const COIN: Record<Coin, { v: string; name: string; r: number; fill: string; edge: string }> = {
  penny: { v: "1¢", name: "penny", r: 19, fill: "#C9774A", edge: "#8E4B28" },
  nickel: { v: "5¢", name: "nickel", r: 22, fill: "#C9CFD3", edge: "#8A949A" },
  dime: { v: "10¢", name: "dime", r: 17, fill: "#D9DEE1", edge: "#8A949A" },
  quarter: { v: "25¢", name: "quarter", r: 25, fill: "#CED4D8", edge: "#7E878D" },
  half: { v: "50¢", name: "half-dollar", r: 30, fill: "#C4CBD0", edge: "#78828A" },
  dollar: { v: "$1", name: "dollar coin", r: 27, fill: "#E3C46B", edge: "#A88A2E" },
};

function Coins({ coins }: { coins: Coin[] }) {
  return (
    <div className="flex flex-wrap items-end justify-center gap-3 py-2">
      {coins.map((c, i) => { const k = COIN[c]; const d = k.r * 2 + 6; return (
        <div key={i} className="flex flex-col items-center gap-1">
          <svg width={d} height={d} viewBox={`0 0 ${d} ${d}`} aria-label={k.name}>
            <circle cx={d / 2} cy={d / 2} r={k.r} fill={k.fill} stroke={k.edge} strokeWidth={3} />
            <circle cx={d / 2} cy={d / 2} r={k.r - 5} fill="none" stroke={k.edge} strokeWidth={1} strokeDasharray="2 2" opacity={0.7} />
            <text x={d / 2} y={d / 2 + 5} textAnchor="middle" fontSize={k.r > 22 ? 14 : 12} fontWeight={800} fill="#2B2A28">{k.v}</text>
          </svg>
          <span className="text-[0.72rem] text-fg-muted">{k.name}</span>
        </div>
      ); })}
    </div>
  );
}

function Column({ op, a, b, carry }: { op: string; a: number; b: number; carry?: string }) {
  const w = Math.max(String(a).length, String(b).length + 1) + 1;
  const row = (s: string) => s.padStart(w, " ").split("");
  const cell = "grid w-[1.6ch] place-items-center";
  return (
    <div className="flex justify-center py-2 font-mono text-[1.9rem] font-bold leading-[1.15]">
      <div className="flex flex-col items-end">
        {carry && <div className="flex text-[1rem] text-[#C0392B]">{row(carry.padEnd(carry.length + 1, " ")).map((c, i) => <span key={i} className={cell}>{c.trim()}</span>)}</div>}
        <div className="flex">{row(String(a)).map((c, i) => <span key={i} className={cell}>{c.trim()}</span>)}</div>
        <div className="flex">{row(`${op}${String(b).padStart(w - 1, " ")}`.slice(-w)).map((c, i) => <span key={i} className={`${cell} ${i === 0 ? "text-emerald" : ""}`}>{c.trim()}</span>)}</div>
        <div className="mt-1 h-[3px] w-full rounded bg-current" />
        <div className="flex">{row("?").map((c, i) => <span key={i} className={`${cell} text-gold`}>{c.trim()}</span>)}</div>
      </div>
    </div>
  );
}

function NumberLine({ from, to, step, marks = [], jumps = [], labelEvery = 1 }: Extract<Visual, { type: "numberline" }>) {
  const W = 620, pad = 30, y = 70; const n = Math.round((to - from) / step);
  const x = (v: number) => pad + ((v - from) / (to - from)) * (W - 2 * pad);
  return (
    <svg viewBox={`0 0 ${W} 110`} className="mx-auto w-full max-w-[640px]" aria-hidden>
      <line x1={pad - 10} y1={y} x2={W - pad + 10} y2={y} stroke={INK} strokeWidth={2.5} markerEnd="url(#arr)" />
      <defs><marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0l10 5-10 5z" fill={INK} /></marker></defs>
      {Array.from({ length: n + 1 }, (_, i) => { const v = from + i * step; const big = i % labelEvery === 0; return (
        <g key={i}><line x1={x(v)} y1={y - (big ? 9 : 5)} x2={x(v)} y2={y + (big ? 9 : 5)} stroke={INK} strokeWidth={big ? 2 : 1.2} />
          {big && <text x={x(v)} y={y + 28} textAnchor="middle" fontSize={14} fill={INK}>{v}</text>}</g>
      ); })}
      {jumps.map(([a, b], i) => <path key={i} d={`M${x(a)} ${y - 6}Q${(x(a) + x(b)) / 2} ${y - 50} ${x(b)} ${y - 6}`} fill="none" stroke={B} strokeWidth={2.5} markerEnd="url(#arr)" />)}
      {marks.map((m, i) => <g key={i}><circle cx={x(m)} cy={y} r={7} fill={A} /><text x={x(m)} y={y - 14} textAnchor="middle" fontSize={14} fontWeight={800} fill={A}>{m}</text></g>)}
    </svg>
  );
}

function Blocks({ n }: { n: number }) {
  const h = Math.floor(n / 100), t = Math.floor((n % 100) / 10), o = n % 10;
  return (
    <div className="flex flex-wrap items-end justify-center gap-4 py-2">
      {h > 0 && <div className="flex gap-1.5">{Array.from({ length: h }, (_, i) => <svg key={i} width="62" height="62" viewBox="0 0 62 62">{Array.from({ length: 100 }, (_, k) => <rect key={k} x={1 + (k % 10) * 6} y={1 + Math.floor(k / 10) * 6} width={6} height={6} fill={P} opacity={0.85} stroke="#fff" strokeWidth={0.6} />)}</svg>)}</div>}
      <div className="flex gap-1.5">{Array.from({ length: t }, (_, i) => <svg key={i} width="10" height="62" viewBox="0 0 10 62">{Array.from({ length: 10 }, (_, k) => <rect key={k} x={1} y={1 + k * 6} width={8} height={6} fill={A} stroke="#fff" strokeWidth={0.8} />)}</svg>)}</div>
      <div className="grid grid-cols-5 gap-1">{Array.from({ length: o }, (_, i) => <span key={i} className="block h-[9px] w-[9px]" style={{ background: B }} />)}</div>
      <span className="w-full text-center text-[0.85rem] text-fg-muted">{h ? `${h} hundred${h > 1 ? "s" : ""}, ` : ""}{t} ten{t !== 1 ? "s" : ""}, {o} one{o !== 1 ? "s" : ""}</span>
    </div>
  );
}

const Dot = ({ c = A }: { c?: string }) => <span className="block h-4 w-4 rounded-full" style={{ background: c }} />;
const HalfDot = () => <span className="block h-4 w-2 rounded-l-full" style={{ background: B }} />;

function Half({ n, split }: { n: number; split?: boolean }) {
  if (!split) return <div className="mx-auto flex max-w-[300px] flex-wrap justify-center gap-1.5 rounded-btn border-2 border-dashed border-border p-3">{Array.from({ length: n }, (_, i) => <Dot key={i} />)}</div>;
  const each = Math.floor(n / 2), odd = n % 2 === 1;
  const box = <div className="flex min-w-[100px] max-w-[160px] flex-wrap justify-center gap-1.5 rounded-btn border-2 border-dashed border-emerald p-3">{Array.from({ length: each }, (_, i) => <Dot key={i} />)}{odd && <HalfDot />}</div>;
  return <div className="flex items-center justify-center gap-3">{box}<span className="text-[1.3rem] font-bold text-fg-muted">|</span>{box}</div>;
}

function PartWhole({ whole, parts, labels }: Extract<Visual, { type: "partwhole" }>) {
  const known = parts.map((p) => p ?? 0); const total = whole ?? known.reduce((a, b) => a + b, 0);
  const missing = parts.findIndex((p) => p === null); const rest = whole !== null && missing >= 0 ? total - known.reduce((a, b) => a + b, 0) : 0;
  const widths = parts.map((p) => (p ?? rest) / total);
  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-1 py-2 text-center font-bold">
      <div className="rounded-[8px] border-2 border-current bg-emerald-soft py-2">{whole ?? "?"} <span className="text-[0.8rem] font-normal text-fg-muted">whole</span></div>
      <div className="flex gap-1">
        {parts.map((p, i) => <div key={i} className="rounded-[8px] border-2 border-current py-2" style={{ width: `${Math.max(18, widths[i] * 100)}%`, background: i ? "#F8E5D0" : "#D6EAF8", color: "#2B2A28" }}>
          {p ?? "?"}{labels?.[i] && <div className="text-[0.75rem] font-normal">{labels[i]}</div>}</div>)}
      </div>
    </div>
  );
}

function PlaceValue({ n, places, highlight }: Extract<Visual, { type: "placevalue" }>) {
  const d = String(n).padStart(places.length, " ").split("");
  return (
    <div className="mx-auto overflow-x-auto py-2">
      <table className="mx-auto border-collapse text-center">
        <thead><tr>{places.map((p, i) => <th key={p} className={`border-2 border-border px-2 py-1 text-[0.75rem] font-bold capitalize ${i === highlight ? "bg-gold-soft" : "bg-emerald-soft"}`}>{p}</th>)}</tr></thead>
        <tbody><tr>{d.map((x, i) => <td key={i} className={`border-2 border-border px-3 py-1.5 font-mono text-[1.6rem] font-bold ${i === highlight ? "bg-gold-soft text-gold" : ""}`}>{x.trim()}</td>)}</tr></tbody>
      </table>
    </div>
  );
}

function ArrayDots({ rows, cols }: { rows: number; cols: number }) {
  return <div className="mx-auto grid w-fit gap-2 py-2" style={{ gridTemplateColumns: `repeat(${cols}, 1rem)` }}>{Array.from({ length: rows * cols }, (_, i) => <Dot key={i} c={Math.floor(i / cols) % 2 ? B : A} />)}</div>;
}

function FractionShape({ num, den, shape = "bar", w = 280 }: { num: number; den: number; shape?: "bar" | "circle"; w?: number }) {
  if (shape === "circle") {
    const R = 70, c = 76;
    return <svg width={152} height={152} viewBox="0 0 152 152" className="mx-auto" aria-hidden>
      {Array.from({ length: den }, (_, i) => { const a0 = (i / den) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / den) * 2 * Math.PI - Math.PI / 2;
        const large = 1 / den > 0.5 ? 1 : 0;
        return <path key={i} d={den === 1 ? `M${c} ${c - R}a${R} ${R} 0 1 1 -0.01 0z` : `M${c} ${c}L${c + R * Math.cos(a0)} ${c + R * Math.sin(a0)}A${R} ${R} 0 ${large} 1 ${c + R * Math.cos(a1)} ${c + R * Math.sin(a1)}z`} fill={i < num ? B : "transparent"} stroke={INK} strokeWidth={2} />; })}
    </svg>;
  }
  return <svg width="100%" viewBox={`0 0 ${w + 4} 44`} className="mx-auto max-w-[420px]" aria-hidden>
    {Array.from({ length: den }, (_, i) => <rect key={i} x={2 + (i * w) / den} y={2} width={w / den} height={40} fill={i < num ? B : "transparent"} stroke={INK} strokeWidth={2} />)}
  </svg>;
}

function Clock({ h, m }: { h: number; m: number }) {
  const c = 90, R = 82; const ma = (m / 60) * 2 * Math.PI - Math.PI / 2, ha = (((h % 12) + m / 60) / 12) * 2 * Math.PI - Math.PI / 2;
  return <svg width={180} height={180} viewBox="0 0 180 180" className="mx-auto" aria-hidden>
    <circle cx={c} cy={c} r={R} fill="#FFFDF6" stroke={INK} strokeWidth={4} />
    {Array.from({ length: 60 }, (_, i) => { const a = (i / 60) * 2 * Math.PI; const big = i % 5 === 0; return <line key={i} x1={c + (R - (big ? 12 : 6)) * Math.sin(a)} y1={c - (R - (big ? 12 : 6)) * Math.cos(a)} x2={c + (R - 2) * Math.sin(a)} y2={c - (R - 2) * Math.cos(a)} stroke="#2B2A28" strokeWidth={big ? 2.5 : 1} />; })}
    {Array.from({ length: 12 }, (_, i) => { const a = ((i + 1) / 12) * 2 * Math.PI; return <text key={i} x={c + (R - 24) * Math.sin(a)} y={c - (R - 24) * Math.cos(a) + 6} textAnchor="middle" fontSize={16} fontWeight={700} fill="#2B2A28">{i + 1}</text>; })}
    <line x1={c} y1={c} x2={c + 44 * Math.cos(ha)} y2={c + 44 * Math.sin(ha)} stroke="#2B2A28" strokeWidth={7} strokeLinecap="round" />
    <line x1={c} y1={c} x2={c + 68 * Math.cos(ma)} y2={c + 68 * Math.sin(ma)} stroke={A} strokeWidth={4} strokeLinecap="round" />
    <circle cx={c} cy={c} r={5} fill="#2B2A28" />
  </svg>;
}

function Grid({ w, h, showSides, shade = 0 }: { w: number; h: number; showSides?: boolean; shade?: number }) {
  const s = Math.min(34, 300 / Math.max(w, h)); const W = w * s + 40, H = h * s + 40;
  return <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto w-full" style={{ maxWidth: W }} aria-hidden>
    {Array.from({ length: w * h }, (_, i) => <rect key={i} x={20 + (i % w) * s} y={10 + Math.floor(i / w) * s} width={s} height={s} fill={i < shade ? B : "#D6EAF8"} stroke={i < shade ? "#fff" : A} strokeWidth={1} />)}
    <rect x={20} y={10} width={w * s} height={h * s} fill="none" stroke={INK} strokeWidth={3} />
    {showSides && <><text x={20 + (w * s) / 2} y={h * s + 30} textAnchor="middle" fontSize={14} fontWeight={700} fill={INK}>{w}</text><text x={10} y={10 + (h * s) / 2 + 5} textAnchor="middle" fontSize={14} fontWeight={700} fill={INK}>{h}</text></>}
  </svg>;
}

function Prism({ l, w, h }: { l: number; w: number; h: number }) {
  const u = Math.min(26, 220 / (l + w * 0.6 + h)); const dx = u * 0.6, dy = u * 0.45;
  const X = 30, Y = 20 + w * dy; const fx = (a: number, b: number, c: number) => X + a * u + b * dx, fy = (a: number, b: number, c: number) => Y + (h - c) * u - b * dy;
  const pt = (a: number, b: number, c: number) => `${fx(a, b, c)},${fy(a, b, c)}`;
  const W = X + l * u + w * dx + 30, H = Y + h * u + 30;
  return <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto w-full" style={{ maxWidth: W }} aria-hidden>
    <polygon points={`${pt(0, 0, 0)} ${pt(l, 0, 0)} ${pt(l, 0, h)} ${pt(0, 0, h)}`} fill="#D6EAF8" stroke={INK} strokeWidth={2} />
    <polygon points={`${pt(0, 0, h)} ${pt(l, 0, h)} ${pt(l, w, h)} ${pt(0, w, h)}`} fill="#AED6F1" stroke={INK} strokeWidth={2} />
    <polygon points={`${pt(l, 0, 0)} ${pt(l, w, 0)} ${pt(l, w, h)} ${pt(l, 0, h)}`} fill="#85C1E9" stroke={INK} strokeWidth={2} />
    {Array.from({ length: l - 1 }, (_, i) => <line key={`a${i}`} x1={fx(i + 1, 0, 0)} y1={fy(i + 1, 0, 0)} x2={fx(i + 1, 0, h)} y2={fy(i + 1, 0, h)} stroke={A} strokeWidth={0.8} />)}
    {Array.from({ length: h - 1 }, (_, i) => <line key={`b${i}`} x1={fx(0, 0, i + 1)} y1={fy(0, 0, i + 1)} x2={fx(l, 0, i + 1)} y2={fy(l, 0, i + 1)} stroke={A} strokeWidth={0.8} />)}
    <text x={(fx(0, 0, 0) + fx(l, 0, 0)) / 2} y={fy(0, 0, 0) + 20} textAnchor="middle" fontSize={14} fontWeight={700} fill={INK}>{l}</text>
    <text x={fx(l, w / 2, 0) + 14} y={fy(l, w / 2, 0) + 6} fontSize={14} fontWeight={700} fill={INK}>{w}</text>
    <text x={fx(0, 0, h / 2) - 14} y={fy(0, 0, h / 2) + 5} textAnchor="middle" fontSize={14} fontWeight={700} fill={INK}>{h}</text>
  </svg>;
}

function Coord({ points, size }: { points: { x: number; y: number; label: string }[]; size: number }) {
  const s = 28, o = 30, W = o + size * s + 20;
  return <svg viewBox={`0 0 ${W} ${W}`} className="mx-auto w-full max-w-[320px]" aria-hidden>
    {Array.from({ length: size + 1 }, (_, i) => <g key={i}>
      <line x1={o + i * s} y1={10} x2={o + i * s} y2={10 + size * s} stroke={INK} strokeOpacity={0.25} />
      <line x1={o} y1={10 + i * s} x2={o + size * s} y2={10 + i * s} stroke={INK} strokeOpacity={0.25} />
      <text x={o + i * s} y={size * s + 28} textAnchor="middle" fontSize={11} fill={INK}>{i}</text>
      <text x={o - 12} y={10 + (size - i) * s + 4} textAnchor="middle" fontSize={11} fill={INK}>{i}</text>
    </g>)}
    <line x1={o} y1={10 + size * s} x2={o + size * s} y2={10 + size * s} stroke={INK} strokeWidth={2.5} />
    <line x1={o} y1={10} x2={o} y2={10 + size * s} stroke={INK} strokeWidth={2.5} />
    {points.map((p) => <g key={p.label}><circle cx={o + p.x * s} cy={10 + (size - p.y) * s} r={6} fill={B} /><text x={o + p.x * s + 9} y={10 + (size - p.y) * s - 7} fontSize={14} fontWeight={800} fill={B}>{p.label}</text></g>)}
  </svg>;
}

function Groups({ groups, each }: { groups: number; each: number }) {
  return <div className="flex flex-wrap justify-center gap-2.5 py-2">{Array.from({ length: groups }, (_, g) => (
    <div key={g} className="flex max-w-[92px] flex-wrap justify-center gap-1 rounded-full border-2 border-emerald p-2.5">{Array.from({ length: each }, (_, i) => <span key={i} className="block h-2.5 w-2.5 rounded-full" style={{ background: B }} />)}</div>
  ))}</div>;
}

function Angle({ deg }: { deg: number }) {
  const c = { x: 110, y: 120 }, L = 95; const a = (-deg * Math.PI) / 180;
  const r = 30; const large = deg > 180 ? 1 : 0;
  return <svg viewBox="0 0 240 150" className="mx-auto w-full max-w-[260px]" aria-hidden>
    <line x1={c.x} y1={c.y} x2={c.x + L} y2={c.y} stroke={INK} strokeWidth={3} strokeLinecap="round" />
    <line x1={c.x} y1={c.y} x2={c.x + L * Math.cos(a)} y2={c.y + L * Math.sin(a)} stroke={INK} strokeWidth={3} strokeLinecap="round" />
    {deg === 90 ? <path d={`M${c.x + 16} ${c.y}V${c.y - 16}H${c.x}`} fill="none" stroke={B} strokeWidth={2.5} />
      : <path d={`M${c.x + r} ${c.y}A${r} ${r} 0 ${large} 0 ${c.x + r * Math.cos(a)} ${c.y + r * Math.sin(a)}`} fill="none" stroke={B} strokeWidth={2.5} />}
  </svg>;
}

export function MathVisual({ v }: { v?: Visual }) {
  if (!v) return null;
  switch (v.type) {
    case "coins": return <Coins coins={v.coins} />;
    case "column": return <Column op={v.op} a={v.a} b={v.b} carry={v.carry} />;
    case "numberline": return <NumberLine {...v} />;
    case "blocks": return <Blocks n={v.n} />;
    case "half": return <Half n={v.n} split={v.split} />;
    case "partwhole": return <PartWhole {...v} />;
    case "placevalue": return <PlaceValue {...v} />;
    case "array": return <ArrayDots rows={v.rows} cols={v.cols} />;
    case "fraction": return <FractionShape num={v.num} den={v.den} shape={v.shape} />;
    case "fractions": return <div className="flex flex-col gap-2 py-1">{v.items.map((f, i) => <div key={i} className="flex items-center gap-3"><span className="w-12 text-right font-mono font-bold">{f.num}/{f.den}</span><div className="min-w-0 flex-1"><FractionShape num={f.num} den={f.den} /></div></div>)}</div>;
    case "clock": return <Clock h={v.h} m={v.m} />;
    case "grid": return <Grid w={v.w} h={v.h} showSides={v.showSides} shade={v.shade} />;
    case "prism": return <Prism l={v.l} w={v.w} h={v.h} />;
    case "coord": return <Coord points={v.points} size={v.size} />;
    case "groups": return <Groups groups={v.groups} each={v.each} />;
    case "angle": return <Angle deg={v.deg} />;
  }
}

export { G };
