// Mathematics: grades → topics → subtopics. Each subtopic teaches one skill
// with an explanation, worked examples and a picture, and has a generator that
// makes endless practice and quiz problems of exactly that kind.

export type Coin = "penny" | "nickel" | "dime" | "quarter" | "half" | "dollar";

export type Visual =
  | { type: "coins"; coins: Coin[] }
  | { type: "column"; op: "+" | "-" | "×"; a: number; b: number; carry?: string }
  | { type: "numberline"; from: number; to: number; step: number; marks?: number[]; jumps?: [number, number][]; labelEvery?: number }
  | { type: "blocks"; n: number }
  | { type: "half"; n: number; split?: boolean }
  | { type: "partwhole"; whole: number | null; parts: (number | null)[]; labels?: string[] }
  | { type: "placevalue"; n: number; places: string[]; highlight?: number }
  | { type: "array"; rows: number; cols: number }
  | { type: "fraction"; num: number; den: number; shape?: "bar" | "circle" }
  | { type: "fractions"; items: { num: number; den: number }[] }
  | { type: "clock"; h: number; m: number }
  | { type: "grid"; w: number; h: number; showSides?: boolean; shade?: number }
  | { type: "prism"; l: number; w: number; h: number }
  | { type: "coord"; points: { x: number; y: number; label: string }[]; size: number }
  | { type: "groups"; groups: number; each: number }
  | { type: "angle"; deg: number };

/** What kind of answer the child types. */
export type AnswerKind =
  | "number"      // 47, 3.25, -2
  | "half"        // 7½ (also 7 1/2 or 7.5)
  | "fraction"    // 3/4 or 1 2/3
  | "remainder"   // 12 R 3
  | "time"        // 4:35
  | "choice";     // tap one of the options

export type Problem = {
  prompt: string;
  visual?: Visual;
  kind: AnswerKind;
  /** The correct answer as text (for choices, exactly one of the options). */
  answer: string;
  choices?: string[];
  unit?: string;
  /** "simplest" requires a fraction in lowest terms. */
  strict?: "simplest";
  hint: string;
  /** Shown after answering: how to get there. */
  explain: string;
};

export type Example = { q: string; work: string[]; answer: string };

export type Sub = {
  id: string;
  title: string;
  /** Item code from the teacher's learning plan, when there is one. */
  code?: string;
  bigIdea: string;
  steps: string[];
  examples: Example[];
  visual?: Visual;
  tip?: string;
  gen: (r: Rng) => Problem;
};

export type Topic = { id: string; title: string; color: string; icon: string; subs: Sub[] };
export type Grade = { id: string; n: number; title: string; sub: string; color: string; topics: Topic[] };

export type Rng = {
  int: (a: number, b: number) => number;
  pick: <T>(arr: readonly T[]) => T;
  shuffle: <T>(arr: readonly T[]) => T[];
  chance: (p: number) => boolean;
};

export const rng: Rng = {
  int: (a, b) => a + Math.floor(Math.random() * (b - a + 1)),
  pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
  shuffle: (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  chance: (p) => Math.random() < p,
};
