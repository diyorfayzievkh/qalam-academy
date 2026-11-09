// The question bank for quiz games: every lesson quiz in Ilm Quest, grouped by
// world and lesson, in the player's language. In Uzbek or Russian only the
// questions that have been translated are offered, so a game never mixes languages.

import type { Question } from "@/content/topics";
import type { Lang } from "./i18n";

export type BankQuestion = Question & { key: string; world: string; lesson: string };
export type BankLesson = { id: string; title: string; questions: BankQuestion[] };
export type BankWorld = { id: string; title: string; lessons: BankLesson[]; count: number };

export async function loadBank(lang: Lang): Promise<BankWorld[]> {
  // Loaded on demand: the full library is large.
  const [{ WORLDS }, { TOPICS }, { loadLessonTranslations, translateQuiz }] = await Promise.all([
    import("@/content/library"), import("@/content/topics"), import("@/content/i18n/lessons")]);
  const out: BankWorld[] = [];
  for (const w of WORLDS) {
    const tr = await loadLessonTranslations(lang, w.id).catch(() => null);
    const lessons: BankLesson[] = [];
    const seen = new Set<object>();
    const add = (id: string, title: string, qs: Question[], trQuiz: unknown[] | undefined, trTitle?: string) => {
      if (!qs.length) return;
      qs.forEach((q) => seen.add(q));
      if (lang !== "en" && !trQuiz?.length) return;
      const tq = translateQuiz(qs, trQuiz);
      lessons.push({ id, title: trTitle ?? title, questions: tq.map((q, k) => ({ ...q, key: `${w.id}/${id}/${k}`, world: w.id, lesson: id })) });
    };
    for (const l of w.lessons) add(l.id, l.title, l.quiz ?? [], tr?.[l.id]?.quiz, tr?.[l.id]?.title as string | undefined);
    for (const a of w.adab ?? []) {
      const quiz = TOPICS.find((t) => t.id === `adab-${a.id}`)?.questions ?? [];
      add(a.id, a.title, quiz, tr?.[a.id]?.quiz, tr?.[a.id]?.title as string | undefined);
    }
    // Course-wide quizzes for worlds whose lessons have no quiz of their own (English only).
    if (lang === "en") for (const qid of w.quizIds) {
      const t = TOPICS.find((x) => x.id === qid);
      const rest = (t?.questions ?? []).filter((q) => !seen.has(q));
      if (t && rest.length) add(`final-${qid}`, t.title, rest, undefined);
    }
    const count = lessons.reduce((n, l) => n + l.questions.length, 0);
    if (count) out.push({ id: w.id, title: w.title, lessons, count });
  }
  return out;
}

export function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

/** Shuffle a question's options, keeping track of the right one. */
export function shuffleOptions<Q extends { options: string[]; answer: number }>(q: Q): Q {
  const order = shuffle(q.options.map((_, i) => i));
  return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
}

/** Pick n questions spread evenly across the chosen lessons. */
export function pickQuestions(pool: BankQuestion[][], n: number): BankQuestion[] {
  const lists = shuffle(pool.filter((p) => p.length).map((p) => shuffle(p)));
  const out: BankQuestion[] = [];
  while (out.length < n && lists.some((l) => l.length)) for (const l of lists) { const q = l.pop(); if (q) out.push(q); if (out.length >= n) break; }
  return shuffle(out);
}
