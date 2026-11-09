import { BEDTIME_1, type Bedtime, type BedtimeCat } from "./bedtime1";
import { BEDTIME_1B } from "./bedtime1b";
import { BEDTIME_2 } from "./bedtime2";
import { BEDTIME_2B } from "./bedtime2b";
import { BEDTIME_3 } from "./bedtime3";
import { BEDTIME_4 } from "./bedtime4";
import { BEDTIME_5 } from "./bedtime5";
import { BEDTIME_6 } from "./bedtime6";

export type { Bedtime, BedtimeCat };

export const BEDTIME_CATS: { id: BedtimeCat; title: string; sub: string }[] = [
  { id: "prophet", title: "The Prophet ﷺ and his family", sub: "His childhood, Khadījah, Fāṭimah, his grandchildren, the Night Journey, and his last words" },
  { id: "companions", title: "The Companions", sub: "Abū Bakr, ʿUmar, Bilāl, Abū Hurayrah, Salmān and Muṣʿab" },
  { id: "prophets", title: "Prophets of old", sub: "Ādam, Nūḥ, Ibrāhīm, Yūsuf, Mūsā, Yūnus and Sulaymān" },
  { id: "life", title: "Living as a Muslim", sub: "Ḥalāl and ḥarām, Luqmān’s advice, a day like the Prophet ﷺ, and growing up strong and confident with Ali and Zaynab, and family, neighbours and ḥalāl money" },
  { id: "imams", title: "The great imams", sub: "Al-Bukhārī, al-Tirmidhī and the imams of the four madhhabs" },
  { id: "cities", title: "Cities of the Quran", sub: "Makkah, Madinah, Jerusalem, Egypt, Sabaʾ, Iram and al-Ḥijr" },
];

export const BEDTIME: Bedtime[] = [...BEDTIME_1, ...BEDTIME_1B, ...BEDTIME_2, ...BEDTIME_2B, ...BEDTIME_3, ...BEDTIME_4, ...BEDTIME_5, ...BEDTIME_6];
export const findBedtime = (id: string) => BEDTIME.find((s) => s.id === id);
export const bedtimeMinutes = (s: Bedtime) => Math.max(2, Math.round(s.paras.join(" ").split(/\s+/).length / 120));
