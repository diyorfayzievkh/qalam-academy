import type { Block } from "./library";
import { STORIES_1 } from "./stories1";
import { STORIES_2 } from "./stories2";

// All story cards keyed by "world/lesson".
export const STORY_BLOCKS: Record<string, Block[]> = { ...STORIES_1, ...STORIES_2 };
export const STORY_COUNT = Object.values(STORY_BLOCKS).reduce((n, s) => n + s.length, 0);
