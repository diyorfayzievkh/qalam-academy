import { BEDTIME_1, type Bedtime, type BedtimeCat } from "./bedtime1";
import { BEDTIME_2 } from "./bedtime2";
import { BEDTIME_3 } from "./bedtime3";

export type { Bedtime, BedtimeCat };

export const BEDTIME_CATS: { id: BedtimeCat; title: string; sub: string }[] = [
  { id: "prophet", title: "The Prophet ﷺ and his family", sub: "Stories of his childhood, his wives, his daughter and grandchildren" },
  { id: "companions", title: "The Companions", sub: "Abū Bakr, ʿUmar, Bilāl, Salmān and the first believers" },
  { id: "prophets", title: "Prophets of old", sub: "Nūḥ, Ibrāhīm, Yūsuf, Mūsā, Yūnus and Sulaymān" },
  { id: "imams", title: "The great imams", sub: "Al-Bukhārī, al-Tirmidhī and the imams of the four madhhabs" },
  { id: "cities", title: "Cities of the Quran", sub: "Makkah, Madinah, Jerusalem, Egypt, Sabaʾ, Iram and al-Ḥijr" },
];

export const BEDTIME: Bedtime[] = [...BEDTIME_1, ...BEDTIME_2, ...BEDTIME_3];
export const findBedtime = (id: string) => BEDTIME.find((s) => s.id === id);
export const bedtimeMinutes = (s: Bedtime) => Math.max(2, Math.round(s.paras.join(" ").split(/\s+/).length / 120));
