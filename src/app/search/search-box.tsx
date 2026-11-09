"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { useT } from "@/components/lang";

/** Updates the results as you type (debounced) and on Enter. */
export function SearchBox({ initial }: { initial: string }) {
  const router = useRouter();
  const { t } = useT();
  const [q, setQ] = useState(initial);
  const first = useRef(true);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { input.current?.focus(); }, []);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const t = setTimeout(() => {
      router.replace(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/search", { scroll: false });
    }, 250);
    return () => clearTimeout(t);
  }, [q, router]);

  return (
    <form role="search" onSubmit={(e) => { e.preventDefault(); router.replace(`/search?q=${encodeURIComponent(q.trim())}`); }}
      className="flex items-center gap-2.5 rounded-card border-2 border-emerald bg-bg-surface px-4 py-2.5">
      <Icon name="search" size={20} className="flex-none text-emerald" />
      <input ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} enterKeyHint="search"
        placeholder={t("Search lessons, stories, prayers, duʿāʾs…")} aria-label={t("Search")}
        className="min-w-0 flex-1 bg-transparent text-[1.05rem] outline-none placeholder:text-fg-muted" />
      {q && <button type="button" onClick={() => setQ("")} className="text-[0.88rem] font-bold text-fg-muted">{t("Clear")}</button>}
    </form>
  );
}
