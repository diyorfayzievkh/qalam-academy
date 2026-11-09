import type { StoryTrMap } from "./types";
import { UZ_PROPHET } from "./bedtime-uz-1";
import { UZ_COMPANIONS } from "./bedtime-uz-2";
import { UZ_PROPHETS } from "./bedtime-uz-3";
import { UZ_LIFE_1 } from "./bedtime-uz-4";

export const BEDTIME_UZ: StoryTrMap = { ...UZ_PROPHET, ...UZ_COMPANIONS, ...UZ_PROPHETS, ...UZ_LIFE_1 };
