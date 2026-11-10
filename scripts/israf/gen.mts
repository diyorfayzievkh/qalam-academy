// Writes the English lessons (src/content/israf.ts) and the Uzbek overlay
// (src/content/i18n/lessons-uz-israf.ts) from the bilingual source.
// Run: npx -y tsx scripts/israf/gen.mts
import { writeFileSync } from "node:fs";
import { PART1 } from "./src-1.mts";
import { PART2 } from "./src-2.mts";
import { PART3 } from "./src-3.mts";
import { PART4 } from "./src-4.mts";

const ORDER = ["what-is-israf", "israf-quran-sunnah", "why-we-waste", "harms-of-israf", "spending-middle-way", "wasting-time",
  "childhood-without-waste", "water", "food", "clothing", "ceremonies", "weddings", "gatherings", "everyday-waste"];
const all = [...PART1, ...PART2, ...PART3, ...PART4] as any[];
const lessons = ORDER.map((id) => { const l = all.find((x) => x.id === id); if (!l) throw new Error("missing " + id); return l; });
lessons.find((l) => l.id === "everyday-waste").group = "Living without waste || Isrofsiz hayot";

const NO_TR = new Set(["id", "type", "kind", "src", "sources", "answer", "best"]);
const problems: string[] = [];
const dict = new Map<string, string>();

function en(v: any, path: string, key = ""): any {
  if (typeof v === "string") {
    if (NO_TR.has(key)) { if (v.includes(" || ")) problems.push(`${path}: unexpected || in ${key}`); return v; }
    const parts = v.split(" || ");
    if (parts.length !== 2) problems.push(`${path}: needs exactly one " || " → ${v.slice(0, 60)}`);
    return parts[0].trim().replace(/\bIsrof\b/g, "Israf").replace(/\bisrof\b/g, "israf");
  }
  if (Array.isArray(v)) return v.map((x, i) => en(x, `${path}[${i}]`, NO_TR.has(key) ? key : ""));
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, en(x, `${path}.${k}`, k)]));
  return v;
}
function uz(v: any, key = ""): any {
  if (typeof v === "string") return NO_TR.has(key) ? undefined : v.split(" || ")[1]?.trim();
  if (Array.isArray(v)) { if (NO_TR.has(key)) return undefined; const a = v.map((x) => uz(x)); return a.every((x) => x === undefined) ? undefined : a; }
  if (v && typeof v === "object") {
    const o: any = {};
    for (const [k, x] of Object.entries(v)) { if (NO_TR.has(k)) continue; const t = uz(x, k); if (t !== undefined) o[k] = t; }
    return Object.keys(o).length ? o : undefined;
  }
  return undefined;
}

const EN = lessons.map((l) => en(l, l.id));
const UZ: Record<string, any> = {};
for (const l of lessons) {
  const [ge, gu] = l.group.split(" || "); dict.set(ge, gu);
  const { group, sources, id, ...rest } = l;
  UZ[l.id] = uz(rest);
  if (l.quiz.length !== 10) problems.push(`${l.id}: ${l.quiz.length} quiz questions`);
  for (const q of l.quiz) if (q.answer >= q.options.length) problems.push(`${l.id}: answer out of range in "${q.q.slice(0, 40)}"`);
}
if (problems.length) { console.log(problems.join("\n")); process.exit(1); }

const head = (s: string) => s.split("\n").map((x) => `// ${x}`).join("\n");
writeFileSync("src/content/israf.ts", `import type { Lesson } from "./library";

${head(`Not Wasting (Israf) world: explainer lessons on the book "Isrof" (Israf) by Shaykh Muhammad Sodiq
Muhammad Yusuf (Hilol-Nashr, 2024), following the book's sections. Generated from
scripts/israf/src-*.mts by scripts/israf/gen.mts; edit the source, not this file.
A scholar should review before public release.`)}

export const ISRAF_BOOK = { title: "Isrof", author: "Shaykh Muhammad Sodiq Muhammad Yusuf", publisher: "Hilol-Nashr, 2024" };

export const ISRAF_LESSONS: Lesson[] = ${JSON.stringify(EN, null, 2)};
`);
writeFileSync("src/content/i18n/lessons-uz-israf.ts", `import type { LessonTrMap } from "./lessons";

// Isrof (Israf) olami (o‘zbekcha). scripts/israf/gen.mts yordamida yaratilgan.

const T: LessonTrMap = ${JSON.stringify(UZ, null, 2)};
export default T;
`);
console.log(`${EN.length} lessons, ${EN.reduce((n, l) => n + l.quiz.length, 0)} questions`);
console.log("DICT groups:", JSON.stringify([...dict]));
