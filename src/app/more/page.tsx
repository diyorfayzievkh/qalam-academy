import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { NAV } from "@/lib/nav";
import { Icon } from "@/components/icons";
import { T } from "@/components/lang";

export default function MorePage() {
  return (
    <>
      <PageHeader eyebrow="Qalam Academy" title="Everything" sub="All sections of the app in one place." />
      <Page>
        <div className="grid gap-3 sm:grid-cols-2">
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <Link key={n.href} href={n.href} className="flex items-center gap-3.5 rounded-card border border-border bg-bg-surface p-4 transition hover:border-emerald">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-emerald-soft text-emerald"><Icon name={n.icon} /></span>
              <span className="flex min-w-0 flex-col">
                <b className="font-display text-[1.05rem] font-semibold"><T>{n.label}</T></b>
                <span className="text-[0.9rem] text-fg-muted"><T>{n.desc}</T></span>
              </span>
            </Link>
          ))}
        </div>
      </Page>
    </>
  );
}
