"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { BADGES, badgeLevel } from "@/content/badges";
import type { GenderKey } from "@/content/prayers";

// Progress is kept in this browser; when signed in, <AccountProvider> syncs it
// to the server (see components/account.tsx) without changing this hook.

export type Prefs = { cityKey: string; methodKey: string; gender: GenderKey; custom: { lat: number; lng: number; tz: string } | null };
type State = {
  points: number;
  answered: Record<string, true>;
  perfect: Record<string, true>;
  studied: Record<string, true>;
  /** Days (YYYY-MM-DD, local) on which something was learned; for the streak. */
  days: Record<string, true>;
  prefs: Prefs;
};

const KEY = "iman-academy-progress-v1";
const INITIAL: State = {
  points: 0, answered: {}, perfect: {}, studied: {}, days: {},
  prefs: { cityKey: "tashkent", methodKey: "MWL", gender: "m", custom: null },
};

export const localDay = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** Consecutive learning days ending today (or yesterday, so the streak survives until tonight). */
export function streakOf(days: Record<string, true>) {
  const d = new Date();
  if (!days[localDay(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days[localDay(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

export const POINTS = { firstCorrect: 10, repeatCorrect: 2, perfectRound: 30, guideStudied: 20, lessonRead: 10, questDay: 15 } as const;

type Ctx = State & {
  ready: boolean;
  answerCorrect: (questionId: string) => number;
  markPerfect: (topicId: string) => number;
  markStudied: (id: string, label: string, amount?: number) => void;
  setPrefs: (p: Partial<Prefs>) => void;
  reset: () => void;
  /** Replace learning progress with a synced copy (no toast, prefs kept). */
  applySynced: (d: { points: number; answered: Record<string, true>; perfect: Record<string, true>; studied: Record<string, true>; days: Record<string, true> }) => void;
  /** Wipe learning progress on this device (used on sign-out). */
  clearLocal: () => void;
  toast: string | null;
  /** Increments with each toast so the animation restarts. */
  toastKey: number;
  celebration: Celebration | null;
  dismissCelebration: () => void;
};
export type Celebration = { kind: "badge"; index: number } | { kind: "perfect"; points: number };

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(INITIAL);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [toastKey, setToastKey] = useState(0);
  const [celebration, setCelebration] = useState<Celebration | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<State>;
        setState({ ...INITIAL, ...saved, days: saved.days ?? {}, prefs: { ...INITIAL.prefs, ...(saved.prefs ?? {}) } });
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state, ready]);

  const show = useCallback((msg: string) => {
    setToast(msg);
    setToastKey((k) => k + 1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  // A ref mirrors state so several awards in one tick build on each other.
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);

  const award = useCallback((amount: number, note: string, patch: (s: State) => Partial<State>) => {
    const s = stateRef.current;
    const next = { ...s, ...patch(s), points: s.points + amount, days: { ...s.days, [localDay()]: true as const } };
    stateRef.current = next;
    setState(next);
    const before = badgeLevel(s.points);
    const after = badgeLevel(next.points);
    if (after > before) setCelebration({ kind: "badge", index: after - 1 });
    show(after > before ? `New badge earned: ${BADGES[after - 1].name}!` : `+${amount} points${note ? " · " + note : ""}`);
    return after > before;
  }, [show]);

  const answerCorrect = useCallback((id: string) => {
    const pts = state.answered[id] ? POINTS.repeatCorrect : POINTS.firstCorrect;
    award(pts, "", (s) => ({ answered: { ...s.answered, [id]: true } }));
    return pts;
  }, [state.answered, award]);

  const markPerfect = useCallback((topicId: string) => {
    if (state.perfect[topicId]) return 0;
    const badge = award(POINTS.perfectRound, "perfect round", (s) => ({ perfect: { ...s.perfect, [topicId]: true } }));
    if (!badge) setCelebration({ kind: "perfect", points: POINTS.perfectRound });
    return POINTS.perfectRound;
  }, [state.perfect, award]);

  const markStudied = useCallback((id: string, label: string, amount: number = POINTS.guideStudied) => {
    if (state.studied[id]) return;
    award(amount, label, (s) => ({ studied: { ...s.studied, [id]: true } }));
  }, [state.studied, award]);

  const setPrefs = useCallback((p: Partial<Prefs>) => setState((s) => ({ ...s, prefs: { ...s.prefs, ...p } })), []);
  const reset = useCallback(() => { setState((s) => ({ ...INITIAL, prefs: s.prefs })); show("Progress reset"); }, [show]);

  const applySynced = useCallback((d: Parameters<Ctx["applySynced"]>[0]) => {
    const next = { ...stateRef.current, points: d.points, answered: d.answered, perfect: d.perfect, studied: d.studied, days: d.days };
    stateRef.current = next;
    setState(next);
  }, []);
  const clearLocal = useCallback(() => {
    const next = { ...INITIAL, prefs: stateRef.current.prefs };
    stateRef.current = next;
    setState(next);
  }, []);

  return (
    <ProgressContext.Provider value={{ ...state, ready, answerCorrect, markPerfect, markStudied, setPrefs, reset, applySynced, clearLocal, toast, toastKey, celebration, dismissCelebration: () => setCelebration(null) }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}
