"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { BADGES, badgeLevel } from "@/content/badges";
import type { GenderKey } from "@/content/prayers";

// Phase 1: guest progress stored in this browser. Phase 2 swaps the persistence
// for server actions backed by the Prisma models (QuestionAnswer, PointEvent…)
// without changing this hook's interface.

export type Prefs = { cityKey: string; methodKey: string; gender: GenderKey; custom: { lat: number; lng: number; tz: string } | null };
type State = {
  points: number;
  answered: Record<string, true>;
  perfect: Record<string, true>;
  studied: Record<string, true>;
  prefs: Prefs;
};

const KEY = "iman-academy-progress-v1";
const INITIAL: State = {
  points: 0, answered: {}, perfect: {}, studied: {},
  prefs: { cityKey: "tashkent", methodKey: "MWL", gender: "m", custom: null },
};

export const POINTS = { firstCorrect: 10, repeatCorrect: 2, perfectRound: 30, guideStudied: 20 } as const;

type Ctx = State & {
  ready: boolean;
  answerCorrect: (questionId: string) => number;
  markPerfect: (topicId: string) => number;
  markStudied: (guideId: string, label: string) => void;
  setPrefs: (p: Partial<Prefs>) => void;
  reset: () => void;
  toast: string | null;
};

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(INITIAL);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<State>;
        setState({ ...INITIAL, ...saved, prefs: { ...INITIAL.prefs, ...(saved.prefs ?? {}) } });
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
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  // A ref mirrors state so several awards in one tick build on each other.
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);

  const award = useCallback((amount: number, note: string, patch: (s: State) => Partial<State>) => {
    const s = stateRef.current;
    const next = { ...s, ...patch(s), points: s.points + amount };
    stateRef.current = next;
    setState(next);
    const before = badgeLevel(s.points);
    const after = badgeLevel(next.points);
    show(after > before ? `New badge earned: ${BADGES[after - 1].name}!` : `+${amount} points${note ? " · " + note : ""}`);
  }, [show]);

  const answerCorrect = useCallback((id: string) => {
    const pts = state.answered[id] ? POINTS.repeatCorrect : POINTS.firstCorrect;
    award(pts, "", (s) => ({ answered: { ...s.answered, [id]: true } }));
    return pts;
  }, [state.answered, award]);

  const markPerfect = useCallback((topicId: string) => {
    if (state.perfect[topicId]) return 0;
    award(POINTS.perfectRound, "perfect round", (s) => ({ perfect: { ...s.perfect, [topicId]: true } }));
    return POINTS.perfectRound;
  }, [state.perfect, award]);

  const markStudied = useCallback((id: string, label: string) => {
    if (state.studied[id]) return;
    award(POINTS.guideStudied, label, (s) => ({ studied: { ...s.studied, [id]: true } }));
  }, [state.studied, award]);

  const setPrefs = useCallback((p: Partial<Prefs>) => setState((s) => ({ ...s, prefs: { ...s.prefs, ...p } })), []);
  const reset = useCallback(() => { setState((s) => ({ ...INITIAL, prefs: s.prefs })); show("Progress reset"); }, [show]);

  return (
    <ProgressContext.Provider value={{ ...state, ready, answerCorrect, markPerfect, markStudied, setPrefs, reset, toast }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}
