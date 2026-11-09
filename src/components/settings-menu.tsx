"use client";

import { useEffect, useRef, useState } from "react";
import { LANGS } from "@/lib/i18n";
import { Icon } from "./icons";
import { useT } from "./lang";
import { useThemePref, type ThemePref } from "./theme";
import { Nuri, useKids } from "./kids";

const THEMES: { id: ThemePref; label: string; icon: "auto" | "sun" | "moon" }[] = [
  { id: "system", label: "Auto", icon: "auto" },
  { id: "light", label: "Light", icon: "sun" },
  { id: "dark", label: "Dark", icon: "moon" },
];

/** One header button for language and theme. */
export function SettingsMenu() {
  const { t, lang, setLang } = useT();
  const [pref, setPref] = useThemePref();
  const [open, setOpen] = useState(false);
  const { kids, setKids } = useKids();
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const theme = THEMES.find((x) => x.id === pref)!;
  const row = "flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2 text-left font-bold hover:bg-bg-inset";

  return (
    <div ref={box} className="relative">
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}
        aria-label={t("Language and theme")}
        className="inline-flex items-center gap-1.5 rounded-full border border-gold-bright/45 bg-white/10 px-3 py-1.5 text-[0.85rem] font-bold text-band-fg hover:bg-white/20">
        <Icon name="globe" size={16} />
        <span>{LANGS.find((l) => l.id === lang)!.short}</span>
        <span className="opacity-50" aria-hidden>·</span>
        <Icon name={theme.icon} size={15} />
        {kids && <span aria-hidden className="-my-1"><Nuri size={22} /></span>}
      </button>
      {open && (
        <div role="menu" className="pop-in absolute right-0 top-[calc(100%+8px)] z-40 flex w-[220px] flex-col gap-1 rounded-card border border-border bg-bg-surface p-2 text-fg shadow-xl">
          <span className="px-3 pb-0.5 pt-1 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-fg-muted">{t("Language")}</span>
          {LANGS.map((l) => (
            <button key={l.id} role="menuitemradio" aria-checked={lang === l.id} type="button" className={row} onClick={() => setLang(l.id)}>
              <span className="w-7 text-[0.8rem] text-fg-muted">{l.short}</span>{l.name}
              {lang === l.id && <Icon name="check" size={16} className="ml-auto text-emerald" />}
            </button>
          ))}
          <div className="my-1 border-t border-border" />
          <span className="px-3 pb-0.5 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-fg-muted">{t("Theme")}</span>
          {THEMES.map((x) => (
            <button key={x.id} role="menuitemradio" aria-checked={pref === x.id} type="button" className={row} onClick={() => setPref(x.id)}>
              <Icon name={x.icon} size={16} className="w-7 text-fg-muted" />{t(x.label)}
              {pref === x.id && <Icon name="check" size={16} className="ml-auto text-emerald" />}
            </button>
          ))}
          <div className="my-1 border-t border-border" />
          <button role="menuitemcheckbox" aria-checked={kids} type="button" className={row} onClick={() => setKids(!kids)}>
            <span className="grid w-7 place-items-center" aria-hidden><Nuri size={24} /></span>{t("Kids Mode")}
            <span className={`ml-auto inline-flex h-5 w-9 items-center rounded-full p-0.5 transition ${kids ? "bg-emerald" : "bg-bg-inset"}`}>
              <i className={`block h-4 w-4 rounded-full bg-white shadow transition ${kids ? "translate-x-4" : ""}`} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
