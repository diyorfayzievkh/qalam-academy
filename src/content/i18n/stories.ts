"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import type { StoryTrMap } from "./types";

// Story translations load on demand, so the English-only reader downloads nothing extra.
const loaders: Record<Exclude<Lang, "en">, () => Promise<StoryTrMap>> = {
  uz: () => import("./bedtime-uz").then((m) => m.BEDTIME_UZ),
  ru: () => import("./bedtime-ru").then((m) => m.BEDTIME_RU),
};
const cache: Partial<Record<Lang, StoryTrMap>> = {};

export function useStoryTranslations(lang: Lang): StoryTrMap | null {
  const [map, setMap] = useState<StoryTrMap | null>(lang === "en" ? null : cache[lang] ?? null);
  useEffect(() => {
    if (lang === "en") { setMap(null); return; }
    if (cache[lang]) { setMap(cache[lang]!); return; }
    let live = true;
    loaders[lang]().then((m) => { cache[lang] = m; if (live) setMap(m); }).catch(() => {});
    return () => { live = false; };
  }, [lang]);
  return map;
}
