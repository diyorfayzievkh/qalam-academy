"use client";

import { useEffect, useState } from "react";

export type ThemePref = "light" | "dark" | "system";
const KEY = "iman-theme";

/** Runs before paint (inlined in <head>) so there is no flash of the wrong theme. */
export const themeInitScript = `(function(){try{var p=localStorage.getItem('${KEY}')||'system';var d=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

function apply(pref: ThemePref) {
  const dark = pref === "dark" || (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

/** The saved theme preference, applied to <html> and kept in sync with the OS when "system". */
export function useThemePref() {
  const [pref, setPrefState] = useState<ThemePref>("system");
  useEffect(() => {
    try { setPrefState((localStorage.getItem(KEY) as ThemePref) || "system"); } catch {}
  }, []);
  useEffect(() => {
    apply(pref);
    if (pref !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);
  const setPref = (p: ThemePref) => { setPrefState(p); try { localStorage.setItem(KEY, p); } catch {} };
  return [pref, setPref] as const;
}
