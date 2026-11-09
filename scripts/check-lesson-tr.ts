// Checks that lesson translation overlays line up with the English lessons:
// same lessons, same number of blocks, same list lengths. Run: npx tsx scripts/check-lesson-tr.ts
import { readdirSync } from "node:fs";
import { WORLDS } from "../src/content/library";

const SKIP = new Set(["type", "id", "href", "ar", "tr", "kind", "answer", "best", "audio", "surah", "ayah", "src"]);
let problems = 0;
const bad = (m: string) => { problems++; console.log("  ✗ " + m); };

function cmp(en: any, tr: any, path: string) {
  if (tr === null || tr === undefined) return;
  if (typeof en === "string") { if (typeof tr !== "string") bad(`${path}: expected text`); return; }
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return bad(`${path}: expected list`);
    if (en.length !== tr.length) bad(`${path}: ${tr.length} items, English has ${en.length}`);
    en.forEach((v, i) => cmp(v, tr[i], `${path}[${i}]`));
    return;
  }
  if (en && typeof en === "object") {
    if (typeof tr !== "object") return bad(`${path}: expected object`);
    for (const k of Object.keys(tr)) if (!(k in en)) bad(`${path}.${k}: not in English`);
    for (const [k, v] of Object.entries(en)) if (!SKIP.has(k)) cmp(v, tr[k], `${path}.${k}`);
  }
}

async function main() {
  const dir = new URL("../src/content/i18n/", import.meta.url);
  const files = readdirSync(dir).filter((f) => /^lessons-(uz|ru)-.+\.ts$/.test(f) && f !== "lessons-uz-quiz.ts");
  for (const f of files) {
    const [, lang, world] = f.match(/^lessons-(uz|ru)-(.+)\.ts$/)!;
    const w = WORLDS.find((x) => x.id === world);
    console.log(`${lang}/${world}`);
    if (!w) { bad(`unknown world ${world}`); continue; }
    const map = (await import(new URL(f, dir).href)).default as Record<string, any>;
    for (const id of Object.keys(map)) if (!w.lessons.some((l) => l.id === id)) bad(`unknown lesson ${id}`);
    for (const l of w.lessons) {
      const tr = map[l.id];
      if (!tr) { console.log(`  · ${l.id}: not translated yet`); continue; }
      if (tr.blocks && tr.blocks.length !== l.blocks.length) bad(`${l.id}: ${tr.blocks.length} blocks, English has ${l.blocks.length}`);
      l.blocks.forEach((b, i) => cmp(b, tr.blocks?.[i], `${l.id}.blocks[${i}]`));
      if (tr.quiz) cmp(l.quiz ?? [], tr.quiz, `${l.id}.quiz`);
    }
  }
  const { QUIZ_UZ } = await import(new URL("quiz-uz", dir).href.replace("quiz-uz", "lessons-uz-quiz.ts"));
  for (const [world, lessons] of Object.entries(QUIZ_UZ as Record<string, Record<string, unknown[]>>)) {
    const w = WORLDS.find((x) => x.id === world);
    console.log(`uz quizzes/${world}`);
    for (const [id, qs] of Object.entries(lessons)) {
      const l = w?.lessons.find((x) => x.id === id);
      if (!l) { bad(`unknown lesson ${world}/${id}`); continue; }
      cmp(l.quiz ?? [], qs, `${id}.quiz`);
    }
  }
  console.log(problems ? `${problems} problem(s)` : "All translations line up.");
  process.exit(problems ? 1 : 0);
}
main();
