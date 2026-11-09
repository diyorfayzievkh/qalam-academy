import type { StoryTrMap } from "./types";
import { UZ_PROPHET } from "./bedtime-uz-1";
import { UZ_COMPANIONS } from "./bedtime-uz-2";
import { UZ_PROPHETS } from "./bedtime-uz-3";
import { UZ_LIFE_1 } from "./bedtime-uz-4";
import { UZ_LIFE_2 } from "./bedtime-uz-5";
import { UZ_IMAMS } from "./bedtime-uz-6";
import { UZ_CITIES } from "./bedtime-uz-7";
import { UZ_FAMILY } from "./bedtime-uz-8";

export const BEDTIME_UZ: StoryTrMap = { ...UZ_PROPHET, ...UZ_COMPANIONS, ...UZ_PROPHETS, ...UZ_LIFE_1, ...UZ_LIFE_2, ...UZ_IMAMS, ...UZ_CITIES, ...UZ_FAMILY };
