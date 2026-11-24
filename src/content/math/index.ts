import { GRADE2 } from "./grade2";
import { GRADE3 } from "./grade3";
import { GRADE4 } from "./grade4";
import { GRADE5 } from "./grade5";
import type { Grade, Sub, Topic } from "./types";

export const GRADES: Grade[] = [GRADE2, GRADE3, GRADE4, GRADE5];
export const findGrade = (id: string) => GRADES.find((g) => g.id === id);
export function findSub(gradeId: string, subId: string): { grade: Grade; topic: Topic; sub: Sub } | null {
  const grade = findGrade(gradeId); if (!grade) return null;
  for (const topic of grade.topics) { const sub = topic.subs.find((s) => s.id === subId); if (sub) return { grade, topic, sub }; }
  return null;
}
export const QUIZ_LEN = 10;
