"use client";

import { useCallback, useEffect, useState } from "react";

// Memorisation progress, stored on this device and synced to the account
// when signed in. Reviews use simple spaced repetition: each strong
// review roughly doubles the gap (1 → 3 → 7 → 16 → 35 days…).

export type HifzState = {
  status: "learning" | "memorized";
  known: number[]; // ayah numbers the user has marked as known
  memorizedAt?: string;
  interval: number; // days until next review
  nextReview?: string; // YYYY-MM-DD
  reviews: number;
};
type Store = Record<string, HifzState>;

export const HIFZ_KEY = "qalam-hifz-v1";
const KEY = HIFZ_KEY;
const DAY = 864e5;
export const today = () => new Date().toISOString().slice(0, 10);
const addDays = (n: number) => new Date(Date.now() + n * DAY).toISOString().slice(0, 10);

export function useHifz() {
  const [store, setStore] = useState<Store>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => { try { setStore(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {} };
    load();
    setReady(true);
    window.addEventListener("qalam:hifz-synced", load);
    return () => window.removeEventListener("qalam:hifz-synced", load);
  }, []);

  const save = useCallback((fn: (s: Store) => Store) => {
    setStore((prev) => {
      const next = fn(prev);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      setTimeout(() => window.dispatchEvent(new Event("qalam:local-change")), 0);
      return next;
    });
  }, []);

  const get = (id: string): HifzState => store[id] ?? { status: "learning", known: [], interval: 0, reviews: 0 };

  const toggleKnown = (id: string, n: number) => save((s) => {
    const cur = s[id] ?? { status: "learning" as const, known: [], interval: 0, reviews: 0 };
    const known = cur.known.includes(n) ? cur.known.filter((x) => x !== n) : [...cur.known, n];
    return { ...s, [id]: { ...cur, known } };
  });

  const markMemorized = (id: string, all: number[]) => save((s) => ({
    ...s, [id]: { status: "memorized", known: all, memorizedAt: today(), interval: 1, nextReview: addDays(1), reviews: 0 },
  }));

  /** strong: gap grows; shaky: review again tomorrow; forgot: back to learning. */
  const review = (id: string, rating: "strong" | "shaky" | "forgot") => save((s) => {
    const cur = s[id];
    if (!cur) return s;
    if (rating === "forgot") return { ...s, [id]: { ...cur, status: "learning", known: [], interval: 0, nextReview: undefined, reviews: cur.reviews + 1 } };
    const interval = rating === "strong" ? Math.max(3, Math.round(cur.interval * 2.2)) : 1;
    return { ...s, [id]: { ...cur, interval, nextReview: addDays(interval), reviews: cur.reviews + 1 } };
  });

  const isDue = (id: string) => {
    const st = store[id];
    return !!st && st.status === "memorized" && !!st.nextReview && st.nextReview <= today();
  };

  return { ready, store, get, toggleKnown, markMemorized, review, isDue };
}
