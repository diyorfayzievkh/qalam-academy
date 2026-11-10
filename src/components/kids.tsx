"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useAccount } from "./account";

// Kids Mode: bigger, simpler, friendlier. It switches on automatically when a
// child signs in, even on a device where it was off. A child's own on/off choice
// is remembered for that child; parents and guests keep the device's setting.

const KEY = "qalam-kids";
type Ctx = { kids: boolean; setKids: (v: boolean) => void };
const KidsContext = createContext<Ctx>({ kids: false, setKids: () => {} });

const read = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k: string, v: boolean) => { try { localStorage.setItem(k, v ? "1" : "0"); } catch {} };

export function KidsProvider({ children }: { children: ReactNode }) {
  const { user } = useAccount();
  const [kids, setState] = useState(false);
  const childKey = user?.kind === "CHILD" ? `${KEY}:${user.id}` : null;

  useEffect(() => {
    const saved = read(childKey ?? KEY);
    if (saved === "1" || saved === "0") setState(saved === "1");
    else setState(Boolean(childKey)); // a child's first sign-in on this device: on
  }, [childKey]);
  useEffect(() => { document.documentElement.classList.toggle("kids", kids); }, [kids]);

  const setKids = useCallback((v: boolean) => { setState(v); write(childKey ?? KEY, v); }, [childKey]);
  return <KidsContext.Provider value={{ kids, setKids }}>{children}</KidsContext.Provider>;
}

export const useKids = () => useContext(KidsContext);

export type NuriMood = "happy" | "cheer" | "think" | "sleepy";

/** Nuri, a little owl who carries a lantern: the Kids Mode guide. */
export function Nuri({ mood = "happy", size = 96 }: { mood?: NuriMood; size?: number }) {
  const eyesClosed = mood === "sleepy";
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden className={mood === "cheer" ? "nuri-bounce" : "nuri-float"}>
      <ellipse cx="60" cy="112" rx="30" ry="5" fill="#000" opacity=".12" />
      {/* body */}
      <path d="M26 64c0-24 15-42 34-42s34 18 34 42c0 26-15 44-34 44S26 90 26 64z" fill="#13715A" />
      <path d="M38 76c0-14 10-22 22-22s22 8 22 22c0 16-10 26-22 26S38 92 38 76z" fill="#F4E7C6" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <path key={`${r}${c}`} d={`M${48 + c * 8 + (r % 2) * 4} ${70 + r * 9}q4 4 8 0`} stroke="#D9C38F" strokeWidth="1.6" fill="none" />))}
      {/* ear tufts */}
      <path d="M32 34l6-16 12 12z" fill="#0E5A47" /><path d="M88 34l-6-16-12 12z" fill="#0E5A47" />
      {/* eyes */}
      <circle cx="46" cy="48" r="14" fill="#FFF8E6" /><circle cx="74" cy="48" r="14" fill="#FFF8E6" />
      <circle cx="46" cy="48" r="14" fill="none" stroke="#E9B949" strokeWidth="3" /><circle cx="74" cy="48" r="14" fill="none" stroke="#E9B949" strokeWidth="3" />
      {eyesClosed ? (
        <><path d="M38 49q8 6 16 0" stroke="#1F2A25" strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M66 49q8 6 16 0" stroke="#1F2A25" strokeWidth="3" fill="none" strokeLinecap="round" /></>
      ) : (
        <><circle cx={mood === "think" ? 49 : 47} cy={mood === "think" ? 45 : 49} r="6" fill="#1F2A25" /><circle cx={mood === "think" ? 77 : 75} cy={mood === "think" ? 45 : 49} r="6" fill="#1F2A25" />
          <circle cx={mood === "think" ? 51 : 49} cy={mood === "think" ? 43 : 47} r="2" fill="#fff" /><circle cx={mood === "think" ? 79 : 77} cy={mood === "think" ? 43 : 47} r="2" fill="#fff" /></>
      )}
      <path d="M56 58l4 7 4-7z" fill="#E9A23B" />
      {/* wings */}
      <path d="M26 66c-6 10-4 24 6 30 2-12 2-22-6-30z" fill="#0E5A47" />
      <path d="M94 66c6 10 4 24-6 30-2-12-2-22 6-30z" fill="#0E5A47" className={mood === "cheer" ? "nuri-wave" : undefined} />
      {/* lantern */}
      <g transform="translate(92 78)">
        <path d="M0 0v6" stroke="#B8862C" strokeWidth="2" />
        <path d="M-6 6h12l2 4H-8z" fill="#E9B949" />
        <rect x="-7" y="10" width="14" height="16" rx="3" fill="#E9B949" />
        <rect x="-4" y="13" width="8" height="10" rx="2" fill="#FFF3C4" className="glow-pulse" />
        <circle cx="0" cy="18" r="14" fill="#FFD873" opacity=".18" />
      </g>
      {/* feet */}
      <path d="M50 106l-3 5M54 106v6M58 106l3 5M64 106l-3 5M68 106v6M72 106l3 5" stroke="#E9A23B" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** Nuri with a speech bubble. */
export function NuriSays({ children, mood = "happy", size = 88 }: { children: ReactNode; mood?: NuriMood; size?: number }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex-none"><Nuri mood={mood} size={size} /></div>
      <div className="relative mb-6 rounded-[18px] rounded-bl-[4px] border-2 border-gold-bright/60 bg-bg-surface px-4 py-3 font-bold leading-snug shadow-sm">
        {children}
      </div>
    </div>
  );
}
