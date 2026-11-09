import type { StoryTrMap } from "./types";
import { RU_PROPHET } from "./bedtime-ru-1";
import { RU_COMPANIONS } from "./bedtime-ru-2";
import { RU_PROPHETS } from "./bedtime-ru-3";

export const BEDTIME_RU: StoryTrMap = { ...RU_PROPHET, ...RU_COMPANIONS, ...RU_PROPHETS };
