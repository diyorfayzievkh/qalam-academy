import type { Posture } from "@/content/prayers";

// Simple, gender-neutral posture figures for the prayer guide.
const POSES: Record<Posture, JSX.Element> = {
  stand: <><circle className="fill-emerald stroke-none" cx="30" cy="10" r="4.6" /><path d="M30 15v22M30 37l-3 19M30 37l3 19M30 19l-5 15M30 19l5 15" /></>,
  takbir: <><circle className="fill-emerald stroke-none" cx="30" cy="10" r="4.6" /><path d="M30 15v22M30 37l-3 19M30 37l3 19M30 20l-7-1-1-9M30 20l7-1 1-9" /></>,
  fold: <><circle className="fill-emerald stroke-none" cx="30" cy="10" r="4.6" /><path d="M30 15v22M30 37l-3 19M30 37l3 19M30 19l-7 9 9 3M30 19l7 9-9 3" /></>,
  ruku: <><circle className="fill-emerald stroke-none" cx="13" cy="25" r="4.6" /><path d="M18 26h20M38 26v30M24 26l2 14 10 1" /></>,
  sujud: <><circle className="fill-emerald stroke-none" cx="11" cy="51" r="4.4" /><path d="M15 49l20-13M35 36l4 19M39 55h15M20 46l-4 10" /></>,
  sit: <><circle className="fill-emerald stroke-none" cx="24" cy="18" r="4.6" /><path d="M25 23l3 22M28 45l18 4M46 49l-16 6M26 30l12 13" /></>,
  salamR: <><circle className="fill-emerald stroke-none" cx="26" cy="18" r="4.6" /><path d="M25 23l3 22M28 45l18 4M46 49l-16 6M26 30l12 13M32 9q6 2 6 8M36 15l2 2 2-3" /></>,
  salamL: <><circle className="fill-emerald stroke-none" cx="22" cy="18" r="4.6" /><path d="M25 23l3 22M28 45l18 4M46 49l-16 6M26 30l12 13M16 9q-6 2-6 8M12 15l-2 2-2-3" /></>,
};

const LABEL: Record<Posture, string> = {
  stand: "Standing", takbir: "Hands raised for takbir", fold: "Standing with hands folded", ruku: "Bowing (ruku)",
  sujud: "Prostration (sujud)", sit: "Sitting", salamR: "Salam to the right", salamL: "Salam to the left",
};

export function PostureFigure({ pos }: { pos: Posture }) {
  return (
    <svg viewBox="0 0 60 60" role="img" aria-label={LABEL[pos]} className="h-full max-h-[190px] w-full">
      <line x1="4" y1="57" x2="56" y2="57" className="stroke-border" strokeWidth={1.5} />
      <g fill="none" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="stroke-emerald">{POSES[pos]}</g>
    </svg>
  );
}

export function starPath(cx: number, cy: number, R: number, r: number, pts: number) {
  let d = "";
  for (let i = 0; i < pts * 2; i++) {
    const a = (Math.PI * i) / pts - Math.PI / 2;
    const rr = i % 2 ? r : R;
    d += `${i ? "L" : "M"}${(cx + rr * Math.cos(a)).toFixed(2)} ${(cy + rr * Math.sin(a)).toFixed(2)}`;
  }
  return d + "Z";
}

const GOLD = "rgb(var(--gold-bright))";
const EM = "rgb(var(--emerald))";

function symbol(i: number) {
  switch (i) {
    case 0: return <><ellipse cx="40" cy="44" rx="7" ry="10" fill={GOLD} /><path d="M40 34v-6" stroke={EM} strokeWidth={2.5} strokeLinecap="round" /></>;
    case 1: return <><path d="M40 54V36" stroke={EM} strokeWidth={3} strokeLinecap="round" /><path d="M40 42c-8 0-12-5-12-11 7 0 12 4 12 11zM40 38c7 0 11-5 11-10-7 0-11 4-11 10z" fill={EM} /></>;
    case 2: return <><rect x="34" y="38" width="12" height="18" rx="2" fill={GOLD} /><path d="M40 24c4 5 4 9 0 12-4-3-4-7 0-12z" fill={EM} /></>;
    case 3: return <><path d="M26 48c0-6 6-8 14-8s14 2 14 8H26z" fill={GOLD} /><path d="M54 46l6-4" stroke={GOLD} strokeWidth={3} strokeLinecap="round" /><path d="M40 28c4 4 4 8 0 11-4-3-4-7 0-11z" fill={EM} /></>;
    case 4: return <><path d="M40 22v4M32 28h16l-2 4H34z" stroke={GOLD} strokeWidth={2} fill={GOLD} /><path d="M33 32h14v18c0 3-3 6-7 6s-7-3-7-6z" fill={EM} /><circle cx="40" cy="42" r="3.5" fill={GOLD} /></>;
    case 5: return <path d={starPath(40, 40, 15, 7, 5)} fill={GOLD} />;
    case 6: return <path d="M46 26a15 15 0 1 0 0 28 12 12 0 1 1 0-28z" fill={GOLD} />;
    case 7: return <><circle cx="40" cy="40" r="14" fill={GOLD} /><circle cx="35" cy="36" r="3" fill="rgb(var(--gold))" opacity={0.55} /><circle cx="45" cy="45" r="2" fill="rgb(var(--gold))" opacity={0.55} /></>;
    case 8: return <><path d="M24 48a16 16 0 0 1 32 0z" fill={GOLD} /><path d="M20 52h40M40 24v4M28 30l3 3M52 30l-3 3" stroke={EM} strokeWidth={2.5} strokeLinecap="round" /></>;
    default: return (
      <><circle cx="40" cy="40" r="9" fill={GOLD} />
        <g stroke={GOLD} strokeWidth={2.5} strokeLinecap="round">
          {Array.from({ length: 8 }, (_, k) => {
            const a = (k * Math.PI) / 4;
            return <line key={k} x1={40 + 13 * Math.cos(a)} y1={40 + 13 * Math.sin(a)} x2={40 + 18 * Math.cos(a)} y2={40 + 18 * Math.sin(a)} />;
          })}
        </g></>
    );
  }
}

/** Badge medallion: 8-point star frame with the badge's symbol. */
export function BadgeIcon({ index, locked = false, size = 84 }: { index: number; locked?: boolean; size?: number }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden="true" className={locked ? "opacity-30 grayscale" : ""}>
      <path d={starPath(40, 40, 38, 31, 8)} fill="rgb(var(--emerald-soft))" stroke={GOLD} strokeWidth={1.5} />
      <circle cx="40" cy="40" r="25" fill="rgb(var(--surface))" stroke={EM} strokeWidth={1.2} />
      {symbol(index)}
    </svg>
  );
}
