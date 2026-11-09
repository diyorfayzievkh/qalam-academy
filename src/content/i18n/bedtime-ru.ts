import type { StoryTrMap } from "./types";
import { RU_PROPHET } from "./bedtime-ru-1";
import { RU_COMPANIONS } from "./bedtime-ru-2";
import { RU_PROPHETS } from "./bedtime-ru-3";
import { RU_LIFE_1 } from "./bedtime-ru-4";
import { RU_LIFE_2 } from "./bedtime-ru-5";
import { RU_IMAMS } from "./bedtime-ru-6";
import { RU_CITIES } from "./bedtime-ru-7";

export const BEDTIME_RU: StoryTrMap = { ...RU_PROPHET, ...RU_COMPANIONS, ...RU_PROPHETS, ...RU_LIFE_1, ...RU_LIFE_2, ...RU_IMAMS, ...RU_CITIES };
