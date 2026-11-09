"use client";

import Link from "next/link";
import { Avatar } from "./avatars";
import { useProfile } from "./profile";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BADGES, badgeLevel } from "@/content/badges";
import { MORE_PATHS, NAV, TABS } from "@/lib/nav";
import { Icon } from "./icons";
import { useProgress } from "./progress";
import { SettingsMenu } from "./settings-menu";
import { CelebrationLayer, Sparks } from "./celebrate";
import { useAccount } from "./account";
import { useT } from "./lang";

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  if (href === "/learn") return path.startsWith("/learn") || path.startsWith("/quiz");
  if (href === "/more") return MORE_PATHS.some((p) => path.startsWith(p));
  return path.startsWith(href);
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { points, toast, toastKey } = useProgress();
  const { user, available } = useAccount();
  const { t } = useT();
  const lvl = badgeLevel(points);

  return (
    <div className="min-h-full lg:grid lg:grid-cols-[232px_1fr]">
      {/* Sidebar: tablets in landscape and desktop */}
      <aside className="girih sticky top-0 hidden h-screen flex-col gap-1 px-3.5 py-6 text-band-fg lg:flex" aria-label="Main navigation">
        <div className="px-3 font-display text-[1.4rem] font-bold text-gold-bright">{t("Qalam Academy")}</div>
        <div lang="ar" className="px-3 pb-5 font-arabic text-[1.1rem] opacity-75">أكاديمية القلم</div>
        <nav className="flex flex-col gap-1">
          {NAV.map((n) => {
            const on = isActive(path, n.href);
            return (
              <Link key={n.href} href={n.href} aria-current={on ? "page" : undefined}
                className={`flex items-center gap-3 rounded-btn px-3 py-2.5 font-bold ${on ? "bg-gold-bright/20 text-gold-bright" : "opacity-80 hover:bg-white/5 hover:opacity-100"}`}>
                <Icon name={n.icon} />{t(n.label)}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-gold-bright/30 px-3 pt-3 text-[0.85rem]">
          <span className="opacity-70">{t("Your points")}</span>
          <b className="block font-display text-2xl tabular-nums text-gold-bright">{points.toLocaleString()}</b>
          <span>{lvl ? t("Badge: {name}", { name: t(BADGES[lvl - 1].name) }) : t("First badge at 1,000")}</span>
          {available && (
            <Link href="/account" className="mt-2.5 flex items-center gap-2 font-bold text-gold-bright hover:underline">
              <Icon name="user" size={18} />{user ? user.name : t("Sign in")}
            </Link>
          )}
        </div>
      </aside>

      <div className="min-w-0 pb-[calc(84px+env(safe-area-inset-bottom,0px))] lg:pb-8">{children}</div>

      {/* Bottom tab bar: phones and portrait tablets */}
      <nav aria-label="Main navigation"
        className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 rounded-t-[22px] border-t border-border bg-bg-surface shadow-[0_-8px_24px_-16px_rgb(0_0_0/0.35)] px-[max(6px,env(safe-area-inset-left,0px))] pb-[calc(6px+env(safe-area-inset-bottom,0px))] pt-1.5 lg:hidden">
        {TABS.map((n) => {
          const on = isActive(path, n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={on ? "page" : undefined}
              className={`flex flex-col items-center gap-0.5 rounded-btn py-1.5 text-[0.68rem] font-bold ${on ? "bg-emerald-soft text-emerald" : "text-fg-muted"}`}>
              <Icon name={n.icon} />{t(n.label)}
            </Link>
          );
        })}
      </nav>

      {toast && (() => {
        const m = toast.match(/^\+(\d+) points(?: · (.*))?$/);
        const badge = toast.match(/^New badge earned: (.*)!$/);
        return (
          <div key={toastKey} role="status"
            className="points-pop fixed bottom-[calc(96px+env(safe-area-inset-bottom,0px))] left-1/2 z-30 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B5832A] via-[#E2B552] to-[#B5832A] px-5 py-2.5 font-extrabold text-[#1F1405] shadow-[0_10px_30px_-8px_rgba(181,131,42,.7)] lg:bottom-8">
            <Sparks count={8} />
            {m ? (<><b className="font-display text-[1.25rem]">+{m[1]}</b><span>{t("points")}</span>{m[2] && <span className="opacity-75">· {t(m[2])}</span>}</>)
              : badge ? t("New badge earned: {name}!", { name: t(badge[1]) }) : t(toast)}
          </div>
        );
      })()}
      <CelebrationLayer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  const { t } = useT();
  return (
    <header className="girih relative z-30 overflow-visible rounded-b-[28px] text-band-fg lg:rounded-bl-[28px] lg:rounded-br-none">
      <div className="gutter mx-auto flex max-w-[980px] flex-col gap-1.5 pb-[26px] pt-[calc(22px+env(safe-area-inset-top,0px))]">
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-[1.05rem] font-bold text-gold-bright max-sm:hidden lg:invisible">{t("Qalam Academy")}</span>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/search" aria-label={t("Search")} className="inline-flex items-center gap-2 rounded-full border border-gold-bright/45 bg-white/10 px-3 py-1.5 text-[0.85rem] text-band-fg/80 hover:bg-white/20 sm:w-[220px]"><Icon name="search" size={17} /><span className="max-sm:sr-only">{t("Search…")}</span></Link>
            <SettingsMenu />
            <ProfileButton />
          </div>
        </div>
        <span className="eyebrow !text-gold-bright">{t(eyebrow)}</span>
        <h1 className="text-[clamp(1.6rem,4.4vw,2.3rem)]">{t(title)}</h1>
        {sub && <p className="max-w-[60ch] opacity-85">{t(sub)}</p>}
      </div>
    </header>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="page-enter gutter mx-auto flex max-w-[980px] flex-col gap-5 pb-2 pt-5">{children}</div>;
}

function ProfileButton() {
  const { t } = useT();
  const { name, avatar } = useProfile();
  return (
    <Link href="/account#profile" aria-label={name ? `${t("Your profile")}: ${name}` : t("Set up your profile")}
      className="grid place-items-center rounded-[14px] border border-gold-bright/45 bg-white/10 p-[3px] hover:bg-white/20">
      <Avatar id={avatar} name={name} size={30} />
    </Link>
  );
}
