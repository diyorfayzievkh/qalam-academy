"use client";

import Link from "next/link";
import { MIND_BRANCHES, MIND_CENTER, pickBi } from "@/content/israf-tools";

// Eight branches around one idea. On wide screens they sit in a 3×3 grid
// around the centre with connecting lines; on phones they stack under it.
const CELLS = [0, 1, 2, 3, 5, 6, 7, 8];
const centreOf = (cell: number) => [50 + (cell % 3) * 100, 50 + Math.floor(cell / 3) * 100];

export function MindMap({ lang }: { lang: string }) {
  const p = (x: { en: string; uz: string }) => pickBi(x, lang);
  return (
    <div className="relative">
      <svg aria-hidden viewBox="0 0 300 300" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full md:block">
        {CELLS.map((c, i) => { const [x, y] = centreOf(c); return <line key={c} x1={150} y1={150} x2={x} y2={y} stroke={MIND_BRANCHES[i].color} strokeWidth={0.8} strokeDasharray="2 1.5" opacity={0.7} vectorEffect="non-scaling-stroke" />; })}
      </svg>
      <div className="relative flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5">
        {Array.from({ length: 9 }, (_, cell) => {
          if (cell === 4) return (
            <div key="c" className="order-first flex items-center justify-center md:order-none">
              <div className="grid aspect-square w-[180px] place-items-center rounded-full border-4 border-gold-bright bg-emerald p-4 text-center text-white shadow-[0_14px_30px_-16px_rgb(0_0_0/0.6)] md:w-[200px]">
                <div className="flex flex-col items-center gap-1">
                  <span lang="ar" className="font-arabic text-[1.6rem] leading-none text-gold-bright">الإسراف</span>
                  <span className="text-[1.6rem] font-extrabold leading-tight">{p(MIND_CENTER.title)}</span>
                  <span className="text-[0.85rem] opacity-90">{p(MIND_CENTER.sub)}</span>
                </div>
              </div>
            </div>
          );
          const i = CELLS.indexOf(cell);
          const br = MIND_BRANCHES[i];
          return (
            <Link key={cell} href={`/learn/israf/${br.lesson}`}
              className="lift flex flex-col gap-2 rounded-card border-2 bg-bg-surface p-3.5 shadow-sm"
              style={{ borderColor: br.color }}>
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full text-[0.8rem] font-extrabold text-white" style={{ background: br.color }}>{i + 1}</span>
                <b className="text-[1.05rem]" style={{ color: br.color }}>{p(br.title)}</b>
              </span>
              <ul className="flex flex-col gap-1 text-[0.9rem] leading-snug">
                {br.items.map((it, k) => <li key={k} className="flex gap-1.5"><span style={{ color: br.color }}>•</span><span>{p(it)}</span></li>)}
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
