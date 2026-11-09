"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DICT, LANGS, type Lang } from "@/lib/i18n";
import { useAccount } from "./account";

// Interface language. Strings are keyed by their English text, so any string
// without a translation simply shows in English. Lesson and story content is
// still English and is being translated section by section.

const KEY = "qalam-lang";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: string, vars?: Record<string, string | number>) => string };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (s) => s });

export function translate(lang: Lang, s: string, vars?: Record<string, string | number>) {
  let out = lang === "en" ? s : DICT[lang][s] ?? s;
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(String(v));
  return out;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const { user, call } = useAccount();
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try { const l = localStorage.getItem(KEY) as Lang | null; if (l && LANGS.some((x) => x.id === l)) setLangState(l); } catch {}
  }, []);
  // A signed-in person's saved language wins on a new device.
  useEffect(() => { if (user?.lang) { setLangState(user.lang); try { localStorage.setItem(KEY, user.lang); } catch {} } }, [user?.lang]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
    if (user) call("/api/me", "PATCH", { lang: l });
  }, [user, call]);

  const t = useCallback((s: string, vars?: Record<string, string | number>) => translate(lang, s, vars), [lang]);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useT = () => useContext(LangContext);

/** Translate a fixed string from a server component. */
export function T({ children, vars }: { children: string; vars?: Record<string, string | number> }) {
  const { t } = useT();
  return <>{t(children, vars)}</>;
}

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  return (
    <div className={`inline-flex rounded-full border border-gold-bright/45 bg-white/10 p-0.5 text-[0.8rem] font-bold text-band-fg ${className}`} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button key={l.id} type="button" aria-pressed={lang === l.id} title={l.name} onClick={() => setLang(l.id)}
          className={`rounded-full px-2 py-1 ${lang === l.id ? "bg-gold-bright text-[#0B3329]" : "opacity-80 hover:opacity-100"}`}>
          {l.short}
        </button>
      ))}
    </div>
  );
}
