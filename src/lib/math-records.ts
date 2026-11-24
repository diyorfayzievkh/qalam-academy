"use client";

// Records of every math test taken. Signed-in learners keep them in their
// account (so parents can see them); guests keep them on this device.

export type Attempt = {
  id: string; grade: string; scope: string; kind: "item" | "subtopic" | "topic" | "grade"; title: string;
  score: number; total: number; seconds: number; wrong: { q: string; given: string; answer: string }[]; createdAt: string;
};
const KEY = "qalam-math-attempts";

function readLocal(): Attempt[] { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } }
function writeLocal(a: Attempt[]) { try { localStorage.setItem(KEY, JSON.stringify(a.slice(0, 1000))); } catch { /* full or blocked */ } }

export async function saveAttempt(a: Omit<Attempt, "id" | "createdAt">, signedIn: boolean): Promise<Attempt> {
  const local: Attempt = { ...a, id: `local-${Date.now()}`, createdAt: new Date().toISOString() };
  if (signedIn) {
    const r = await fetch("/api/math/attempts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(a) }).catch(() => null);
    if (r?.ok) { const j = await r.json(); return { ...a, id: j.id, createdAt: j.createdAt }; }
  }
  writeLocal([local, ...readLocal()]);
  return local;
}

export async function loadAttempts(q: { grade?: string; scope?: string; user?: string }, signedIn: boolean): Promise<Attempt[]> {
  const local = readLocal().filter((a) => (!q.grade || a.grade === q.grade) && (!q.scope || a.scope === q.scope));
  if (!signedIn) return local;
  const p = new URLSearchParams(Object.entries(q).filter(([, v]) => v) as [string, string][]);
  const r = await fetch(`/api/math/attempts?${p}`).catch(() => null);
  if (!r?.ok) return q.user ? [] : local;
  const server = ((await r.json()).attempts ?? []) as Attempt[];
  // Anything saved on this device while offline still shows for the learner themself.
  return q.user ? server : [...server, ...local].sort((x, y) => y.createdAt.localeCompare(x.createdAt));
}

export const pct = (a: { score: number; total: number }) => Math.round((a.score / a.total) * 100);
export const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
export const when = (iso: string) => new Date(iso).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
