import type { Lesson } from "./library";
import { SOCIAL_LESSONS_1 } from "./social1";
import { SOCIAL_LESSONS_2 } from "./social2";
import { SOCIAL_LESSONS_3 } from "./social3";
import { SOCIAL_LESSONS_4 } from "./social4";
import { SOCIAL_LESSONS_5 } from "./social5";

// Social Tarbiyah: the full course of "Ijtimoiy odoblar" by Shaykh Muhammad
// Sodik Muhammad Yusuf, grouped into parts that follow the book's order.
const GROUP_ORDER = [
  "Foundations of adab", "Speech and greeting", "Home and family", "Food and hospitality",
  "Festivals and leisure", "Living in society", "Dress and cleanliness", "On the road",
  "Phones and the internet", "Wealth and work", "The mosque", "Knowledge and work", "Illness and death",
];
const all = [...SOCIAL_LESSONS_1, ...SOCIAL_LESSONS_2, ...SOCIAL_LESSONS_3, ...SOCIAL_LESSONS_4, ...SOCIAL_LESSONS_5];
export const SOCIAL_LESSONS: Lesson[] = GROUP_ORDER.flatMap((g) => all.filter((l) => l.group === g));
export const SOCIAL_GROUPS = GROUP_ORDER;
