"use client";

import { useEffect, useState } from "react";
import { useT } from "./lang";

export type StoryTheme = "paper" | "night";
const KEY = "qalam-story-theme";

/** Reading theme for Bedtime Stories: follows the app theme until the reader picks one. */
export function useStoryTheme() {
  const [mode, setMode] = useState<StoryTheme>("paper");
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch {}
    if (saved === "paper" || saved === "night") setMode(saved);
    else setMode(document.documentElement.classList.contains("dark") ? "night" : "paper");
  }, []);
  const set = (m: StoryTheme) => { setMode(m); try { localStorage.setItem(KEY, m); } catch {} };
  return [mode, set] as const;
}

export function StoryThemeToggle({ mode, setMode }: { mode: StoryTheme; setMode: (m: StoryTheme) => void }) {
  const { t } = useT();
  return (
    <div className="seg" role="group" aria-label={t("Reading theme")}>
      <button type="button" aria-pressed={mode === "paper"} onClick={() => setMode("paper")}>☀ {t("Paper")}</button>
      <button type="button" aria-pressed={mode === "night"} onClick={() => setMode("night")}>☾ {t("Night")}</button>
    </div>
  );
}
