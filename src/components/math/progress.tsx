"use client";

import type { Grade } from "@/content/math/types";

// Math mastery is kept with the rest of the learning progress (so it syncs to
// the family account): each star is a "studied" record.
export const starKey = (scope: string, k: number) => `math-star:${scope}:${k}`;
export const starsFor = (studied: Record<string, true>, scope: string) => [1, 2, 3].filter((k) => studied[starKey(scope, k)]).length;
export const starsFromScore = (score: number, total: number) => { const p = score / total; return p === 1 ? 3 : p >= 0.8 ? 2 : p >= 0.6 ? 1 : 0; };
export const gradeStars = (studied: Record<string, true>, g: Grade) => {
  let have = 0, max = 0;
  for (const t of g.topics) for (const s of t.subs) { have += starsFor(studied, `${g.id}/${s.id}`); max += 3; }
  return { have, max };
};
export function Stars({ n, size = "1rem" }: { n: number; size?: string }) {
  return <span aria-label={`${n} of 3 stars`} style={{ fontSize: size, letterSpacing: "0.05em" }}>{[1, 2, 3].map((k) => <span key={k} style={{ opacity: k <= n ? 1 : 0.22 }}>⭐</span>)}</span>;
}
