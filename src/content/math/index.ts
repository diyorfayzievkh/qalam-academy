import { GRADE2 } from "./grade2";
import { GRADE3 } from "./grade3";
import { GRADE4 } from "./grade4";
import { GRADE5 } from "./grade5";
import { SUBTOPICS } from "./subtopics";
import type { Grade, Sub, Topic } from "./types";

export const GRADES: Grade[] = [GRADE2, GRADE3, GRADE4, GRADE5];
for (const g of GRADES) {
  const map = SUBTOPICS[g.id] ?? {};
  for (const t of g.topics) for (const s of t.subs) s.subtopic = Object.keys(map).find((k) => map[k].includes(s.id)) ?? s.title;
}

export const findGrade = (id: string) => GRADES.find((g) => g.id === id);
export function findSub(gradeId: string, subId: string): { grade: Grade; topic: Topic; sub: Sub } | null {
  const grade = findGrade(gradeId); if (!grade) return null;
  for (const topic of grade.topics) { const sub = topic.subs.find((s) => s.id === subId); if (sub) return { grade, topic, sub }; }
  return null;
}

export const slug = (s: string) => s.toLowerCase().replace(/#s/g, "numbers").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export type Subtopic = { id: string; name: string; subs: Sub[] };
/** Subtopics of a topic, in the order their items appear. */
export function subtopicsOf(t: Topic): Subtopic[] {
  const out: Subtopic[] = [];
  for (const s of t.subs) {
    const name = s.subtopic ?? s.title; let st = out.find((x) => x.name === name);
    if (!st) { st = { id: slug(name), name, subs: [] }; out.push(st); }
    st.subs.push(s);
  }
  return out;
}

/** Questions per test, as set by the teacher. */
export const TEST_LEN = { item: 25, subtopic: 25, topic: 30, grade: 50 } as const;
export type TestKind = keyof typeof TEST_LEN;
