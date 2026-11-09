"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BADGES, badgeLevel } from "@/content/badges";
import { Icon, type IconName } from "./icons";
import { useProgress } from "./progress";
import { ThemeToggle } from "./theme";

const NAV: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/learn", label: "Learn", icon: "learn" },
  { href: "/salah", label: "Salah", icon: "salah" },
  { href: "/times", label: "Times", icon: "times" },
  { href: "/qibla", label: "Qibla", icon: "qibla" },
  { href: "/badges", label: "Badges", icon: "badges" },
];

function isActive(path: string, href: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { points, toast } = useProgress();
  const lvl = badgeLevel(points);

  return (
    <div className="min-h-full lg:grid lg:grid-cols-[232px_1fr]">
      {/* Sidebar: tablets in landscape and desktop */}
      <aside className="girih sticky top-0 hidden h-screen flex-col gap-1 px-3.5 py-6 text-band-fg lg:flex" aria-label="Main navigation">
        <div className="px-3 font-display text-[1.4rem] font-bold text-gold-bright">Iman Academy</div>
        <div lang="ar" className="px-3 pb-5 font-arabic text-[1.1rem] opacity-75">أكاديمية الإيمان</div>
        <nav className="flex flex-col gap-1">
          {NAV.map((n) => {
            const on = isActive(path, n.href);
            return (
              <Link key={n.href} href={n.href} aria-current={on ? "page" : undefined}
                className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 font-bold ${on ? "bg-gold-bright/20 text-gold-bright" : "opacity-80 hover:bg-white/5 hover:opacity-100"}`}>
                <Icon name={n.icon} />{n.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-gold-bright/30 px-3 pt-3 text-[0.85rem]">
          <span className="opacity-70">Your points</span>
          <b className="block font-display text-2xl tabular-nums text-gold-bright">{points.toLocaleString()}</b>
          <span>{lvl ? `Badge: ${BADGES[lvl - 1].name}` : "First badge at 1,000"}</span>
        </div>
      </aside>

      <div className="min-w-0 pb-[calc(84px+env(safe-area-inset-bottom,0px))] lg:pb-8">{children}</div>

      {/* Bottom tab bar: phones and portrait tablets */}
      <nav aria-label="Main navigation"
        className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-6 border-t border-border bg-bg-surface px-[max(6px,env(safe-area-inset-left,0px))] pb-[calc(6px+env(safe-area-inset-bottom,0px))] pt-1.5 lg:hidden">
        {NAV.map((n) => {
          const on = isActive(path, n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={on ? "page" : undefined}
              className={`flex flex-col items-center gap-0.5 rounded-[10px] py-1.5 text-[0.68rem] font-bold ${on ? "bg-emerald-soft text-emerald" : "text-fg-muted"}`}>
              <Icon name={n.icon} />{n.label}
            </Link>
          );
        })}
      </nav>

      {toast && (
        <div role="status" className="fixed bottom-[calc(96px+env(safe-area-inset-bottom,0px))] left-1/2 z-30 -translate-x-1/2 rounded-full bg-gold px-[18px] py-2.5 font-extrabold text-bg-surface shadow-lg lg:bottom-8">
          {toast}
        </div>
      )}
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <header className="girih relative overflow-hidden text-band-fg">
      <div className="gutter mx-auto flex max-w-[980px] flex-col gap-1.5 pb-[26px] pt-[calc(22px+env(safe-area-inset-top,0px))]">
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-[1.05rem] font-bold text-gold-bright lg:invisible">Iman Academy</span>
          <ThemeToggle />
        </div>
        <span className="eyebrow !text-gold-bright">{eyebrow}</span>
        <h1 className="text-[clamp(1.6rem,4.4vw,2.3rem)]">{title}</h1>
        {sub && <p className="max-w-[60ch] opacity-85">{sub}</p>}
      </div>
    </header>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="gutter mx-auto flex max-w-[980px] flex-col gap-5 pb-2 pt-5">{children}</div>;
}
