// Merging progress from two devices (or a guest session and an account).
// Learning records are unioned; points take the larger total; for each
// memorised sūrah the more advanced record wins.

export type HifzRec = { status: "learning" | "memorized"; known: number[]; memorizedAt?: string; interval: number; nextReview?: string; reviews: number };
export type SyncDoc = {
  points: number;
  answered: Record<string, true>;
  perfect: Record<string, true>;
  studied: Record<string, true>;
  days: Record<string, true>;
  hifz: Record<string, HifzRec>;
};

export const EMPTY_DOC: SyncDoc = { points: 0, answered: {}, perfect: {}, studied: {}, days: {}, hifz: {} };

const flags = (v: unknown): Record<string, true> => {
  const out: Record<string, true> = {};
  if (v && typeof v === "object") for (const k of Object.keys(v).slice(0, 20000)) if (k.length <= 200) out[k] = true;
  return out;
};

/** Accept only the shape we expect, with sane limits (input comes from browsers). */
export function cleanDoc(v: unknown): SyncDoc {
  const o = (v && typeof v === "object" ? v : {}) as Record<string, unknown>;
  const pts = Number(o.points);
  const hifz: Record<string, HifzRec> = {};
  if (o.hifz && typeof o.hifz === "object") {
    for (const [k, r] of Object.entries(o.hifz as Record<string, Partial<HifzRec>>).slice(0, 500)) {
      if (!r || typeof r !== "object" || k.length > 60) continue;
      hifz[k] = {
        status: r.status === "memorized" ? "memorized" : "learning",
        known: Array.isArray(r.known) ? r.known.filter((n) => Number.isInteger(n) && n > 0 && n < 300).slice(0, 300) : [],
        memorizedAt: typeof r.memorizedAt === "string" ? r.memorizedAt.slice(0, 10) : undefined,
        interval: Number.isFinite(r.interval) ? Math.max(0, Math.min(3650, Number(r.interval))) : 0,
        nextReview: typeof r.nextReview === "string" ? r.nextReview.slice(0, 10) : undefined,
        reviews: Number.isFinite(r.reviews) ? Math.max(0, Math.min(100000, Number(r.reviews))) : 0,
      };
    }
  }
  return {
    points: Number.isFinite(pts) ? Math.max(0, Math.min(10_000_000, Math.round(pts))) : 0,
    answered: flags(o.answered), perfect: flags(o.perfect), studied: flags(o.studied), hifz,
    days: Object.fromEntries(Object.keys(flags(o.days)).filter((k) => /^\d{4}-\d{2}-\d{2}$/.test(k)).map((k) => [k, true as const])),
  };
}

const rank = (r: HifzRec) => (r.status === "memorized" ? 1e6 : 0) + r.reviews * 1000 + r.known.length;

export function mergeDocs(a: SyncDoc, b: SyncDoc): SyncDoc {
  const hifz: Record<string, HifzRec> = { ...a.hifz };
  for (const [k, r] of Object.entries(b.hifz)) if (!hifz[k] || rank(r) > rank(hifz[k])) hifz[k] = r;
  return {
    points: Math.max(a.points, b.points),
    answered: { ...a.answered, ...b.answered },
    perfect: { ...a.perfect, ...b.perfect },
    studied: { ...a.studied, ...b.studied },
    days: { ...a.days, ...b.days },
    hifz,
  };
}
