import type { Problem, Rng } from "./types";

export const fmt = (n: number) => n.toLocaleString("en-US");
export const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
export const lcm = (a: number, b: number) => (a / gcd(a, b)) * b;
export const halfText = (n: number) => (n % 2 === 0 ? String(n / 2) : n === 1 ? "½" : `${(n - 1) / 2}½`);
export const cents = (c: number) => (c >= 100 ? `$${(c / 100).toFixed(2)}` : `${c}¢`);

/** "a/b" in lowest terms, or a mixed number "w a/b" when improper (mixed=true). */
export function fracText(n: number, d: number, mixed = false) {
  const g = gcd(n, d); n /= g; d /= g;
  if (d === 1) return String(n);
  if (mixed && n > d) return `${Math.floor(n / d)} ${n % d}/${d}`;
  return `${n}/${d}`;
}

/** Multiple choice with the right answer and distinct wrong ones, shuffled. */
export function choice(r: Rng, p: Omit<Problem, "kind" | "choices">, wrong: string[]): Problem {
  const opts = [p.answer, ...[...new Set(wrong)].filter((w) => w !== p.answer)].slice(0, 4);
  return { ...p, kind: "choice", choices: r.shuffle(opts) };
}

/** Wrong numeric options near the answer, never negative or equal to it. */
export function near(r: Rng, ans: number, spread: number[], min = 0): string[] {
  const out = new Set<string>();
  for (const s of r.shuffle(spread)) { const v = ans + s; if (v >= min && v !== ans) out.add(String(v)); if (out.size === 3) break; }
  let k = 1; while (out.size < 3) { if (ans + k * 7 !== ans) out.add(String(ans + k * 7)); k++; }
  return [...out];
}

// ------------------------------------------------------------ answer checking
/** Parses 7, 7.5, 7½, 7 1/2, 3/4 into a number; null if it cannot. */
export function parseNumber(raw: string): number | null {
  const s = raw.trim().replace(/,/g, "").replace(/\s+/g, " ").replace(/¢|\$/g, "");
  if (!s) return null;
  let m = s.match(/^(-?\d+)?\s?½$/); if (m) return (m[1] ? Number(m[1]) : 0) + 0.5;
  m = s.match(/^(-?\d+) (\d+)\/(\d+)$/); if (m && +m[3]) return Number(m[1]) + Number(m[2]) / Number(m[3]);
  m = s.match(/^(-?\d+)\/(\d+)$/); if (m && +m[2]) return Number(m[1]) / Number(m[2]);
  if (/^-?\d*\.?\d+$/.test(s)) return Number(s);
  return null;
}
const parseFrac = (s: string): [number, number] | null => {
  const t = s.trim().replace(/\s+/g, " ");
  let m = t.match(/^(\d+) (\d+)\/(\d+)$/); if (m) return [Number(m[1]) * Number(m[3]) + Number(m[2]), Number(m[3])];
  m = t.match(/^(\d+)\/(\d+)$/); if (m) return [Number(m[1]), Number(m[2])];
  m = t.match(/^\d+$/); if (m) return [Number(t), 1];
  return null;
};

export type Verdict = "right" | "wrong" | "not-simplest" | "unreadable";

export function check(p: Problem, input: string): Verdict {
  const raw = input.trim();
  if (!raw) return "unreadable";
  switch (p.kind) {
    case "choice": return raw === p.answer ? "right" : "wrong";
    case "time": {
      const m = raw.replace(/\s/g, "").match(/^(\d{1,2})[:.](\d{2})$/);
      if (!m) return "unreadable";
      return `${Number(m[1])}:${m[2]}` === p.answer ? "right" : "wrong";
    }
    case "remainder": {
      const m = raw.toUpperCase().replace(/\s/g, "").match(/^(\d+)(?:R(\d+))?$/);
      if (!m) return "unreadable";
      const want = p.answer.toUpperCase().replace(/\s/g, "").match(/^(\d+)(?:R(\d+))?$/)!;
      return m[1] === want[1] && Number(m[2] ?? 0) === Number(want[2] ?? 0) ? "right" : "wrong";
    }
    case "fraction": {
      const want = parseFrac(p.answer)!;
      const got = parseFrac(raw);
      if (!got) {
        const n = parseNumber(raw);
        if (n === null) return "unreadable";
        return Math.abs(n - want[0] / want[1]) < 1e-9 ? (p.strict ? "not-simplest" : "right") : "wrong";
      }
      if (!got[1] || got[0] * want[1] !== want[0] * got[1]) return "wrong";
      if (p.strict === "simplest" && gcd(got[0], got[1]) !== 1) return "not-simplest";
      return "right";
    }
    default: {
      let n = parseNumber(raw);
      // Money in cents: accept $1.25 as well as 125.
      if (n !== null && p.unit === "¢" && (/\$/.test(raw) || /\./.test(raw))) n = Math.round(n * 100);
      if (n === null) return "unreadable";
      return Math.abs(n - Number(parseNumber(p.answer))) < 1e-9 ? "right" : "wrong";
    }
  }
}
