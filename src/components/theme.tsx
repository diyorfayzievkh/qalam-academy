"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { useT } from "./lang";

export type ThemePref = "light" | "dark" | "system";
const KEY = "iman-theme";

/** Runs before paint (inlined in <head>) so there is no flash of the wrong theme. */
export const themeInitScript = `(function(){try{var p=localStorage.getItem('${KEY}')||'system';var d=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

function apply(pref: ThemePref) {
  const dark = pref === "dark" || (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [pref, setPref] = useState<ThemePref>("system");
  const { t } = useT();

  useEffect(() => {
    try { setPref((localStorage.getItem(KEY) as ThemePref) || "system"); } catch {}
  }, []);

  useEffect(() => {
    apply(pref);
    if (pref !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pref]);

  const next: Record<ThemePref, ThemePref> = { system: "light", light: "dark", dark: "system" };
  const label: Record<ThemePref, string> = { system: "Auto", light: "Light", dark: "Dark" };
  const icon: Record<ThemePref, "auto" | "sun" | "moon"> = { system: "auto", light: "sun", dark: "moon" };

  return (
    <button
      type="button"
      aria-label={`Theme: ${label[pref]}. Switch theme`}
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold-bright/45 bg-white/10 px-3 py-1.5 text-[0.85rem] font-bold text-band-fg ${className}`}
      onClick={() => {
        const p = next[pref];
        setPref(p);
        try { localStorage.setItem(KEY, p); } catch {}
      }}
    >
      <Icon name={icon[pref]} size={15} />
      <span className="max-[380px]:sr-only">{t(label[pref])}</span>
    </button>
  );
}
