import { ADAB_LESSONS_1, type AdabLesson } from "./adab";
import { ADAB_LESSONS_2 } from "./adab2";
import { ADAB_QUIZZES } from "./adab-quiz";

// All Akhlaq & Adab lessons, each with its own quiz, ordered by category.
const CATS: AdabLesson["category"][] = ["Personal adab", "Social adab", "Inner character"];
export const ADAB_LESSONS: AdabLesson[] = CATS.flatMap((c) =>
  [...ADAB_LESSONS_1, ...ADAB_LESSONS_2].filter((l) => l.category === c).map((l) => ({ ...l, quiz: l.quiz ?? ADAB_QUIZZES[l.id] ?? [] })),
);
