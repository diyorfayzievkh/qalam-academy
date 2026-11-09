"use client";

import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { BadgeIcon } from "@/components/figures";
import { Icon } from "@/components/icons";
import { useProgress } from "@/components/progress";
import { TopicCard } from "@/components/topic-card";
import { BADGES, badgeLevel, POINTS_PER_BADGE } from "@/content/badges";
import { TOPICS } from "@/content/topics";
import { STORY_BLOCKS } from "@/content/stories";

const ALL_STORIES = Object.entries(STORY_BLOCKS).flatMap(([key, list]) => list.flatMap((b) => (b.type === "story" ? [{ key, b }] : [])));
import { countdown, formatTime, PRAYER_ORDER, todayWithNext } from "@/lib/prayer-times";
import { useLocation, useNow } from "@/lib/use-location";

export default function HomePage() {
  const { points, answered } = useProgress();
  const loc = useLocation();
  const now = useNow();
  const lvl = badgeLevel(points);
  const into = points % POINTS_PER_BADGE;
  const shown = TOPICS.filter((t) => !t.hidden);
  const done = shown.filter((t) => t.questions.every((_, i) => answered[`${t.id}-${i}`])).length;
  const day = now ? todayWithNext(loc.lat, loc.lng, loc.tz, loc.method, now) : null;

  return (
    <>
      <PageHeader eyebrow="Bismillāh" title="As-salāmu ʿalaykum"
        sub="Learn your faith a few minutes a day: prayer, belief, and good character, all according to the Hanafi madhhab." />
      <Page>
        <section className="card grid gap-4 md:grid-cols-[1.1fr_1fr]" aria-label="Next prayer">
          <div className="flex flex-col gap-1.5">
            <span className="eyebrow">Next prayer · {loc.name}</span>
            <h2 className="text-[1.6rem]">{day ? day.next.name : "…"}</h2>
            <div className="font-display text-[clamp(2.4rem,9vw,3.4rem)] leading-none tabular-nums text-emerald">
              {day ? formatTime(day.nextAt, loc.tz) : "--:--"}
            </div>
            <span className="font-bold text-gold">{day && now ? countdown(day.nextAt.getTime() - now.getTime()) : ""}</span>
            <div className="mt-1.5 flex flex-wrap gap-3">
              <Link className="btn btn-ghost" href="/times">All times</Link>
              <Link className="btn btn-ghost" href="/qibla"><Icon name="qibla" size={18} />Qibla</Link>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-1 self-center text-center tabular-nums">
            {PRAYER_ORDER.map((p) => {
              const on = day?.next.key === p.key;
              return (
                <div key={p.key} className={`rounded-[10px] px-0.5 py-2 text-[0.78rem] ${on ? "bg-emerald-soft text-emerald" : "text-fg-muted"}`}>
                  {p.name}<b className={`block text-[0.95rem] ${on ? "text-emerald" : "text-fg"}`}>{day ? formatTime(day.times[p.key], loc.tz) : "--:--"}</b>
                </div>
              );
            })}
          </div>
        </section>

        <section className="card flex flex-wrap items-center gap-4">
          <div className="flex-none"><BadgeIcon index={Math.max(0, lvl - 1)} locked={!lvl} size={72} /></div>
          <div className="flex min-w-[200px] flex-1 flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-[1.3rem]">{lvl ? `${BADGES[lvl - 1].name} badge` : "Your journey"}</h2>
              <span className="tabular-nums text-fg-muted"><b className="text-fg">{points.toLocaleString()}</b> points</span>
            </div>
            <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={lvl >= 10 ? 1000 : into}>
              <i style={{ width: `${lvl >= 10 ? 100 : into / 10}%` }} />
            </div>
            <span className="text-[0.9rem] text-fg-muted">
              {lvl >= 10 ? "All ten badges earned. Mā shāʾ Allāh!" : `${(1000 - into).toLocaleString()} points to the ${BADGES[lvl].name} badge · ${done} of ${shown.length} topics complete`}
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.3rem]">Continue learning</h2>
            <Link href="/learn" className="font-bold text-fg-muted">See all</Link>
          </div>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
            {shown.slice(0, 3).map((t) => <TopicCard key={t.id} topic={t} />)}
          </div>
        </section>

        <section className="grid gap-3.5 sm:grid-cols-2">
          {[
            { href: "/learn", eyebrow: "Knowledge Base", title: "Ilm Quest", text: "Iman, Islam, Salah, Akhlaq & Adab, Duas, Quran and Seerah, plus Spiritual Tarbiyah (3 volumes) and Social Tarbiyah." },
            { href: "/hifz", eyebrow: "Hifz", title: "Memorise the Quran", text: "46 sūrahs and passages, ayah by ayah, with audio and spaced review." },
            { href: "/ramadan", eyebrow: "Seasonal", title: "Ramadan Quest", text: "Daily tracker, 30-day plan, duas, surahs and history." },
            { href: "/mizan", eyebrow: "Collection", title: "Mizan", text: "Deeds heaviest on the scale, from authentic hadith." },
            { href: "/stories", eyebrow: "Before sleep", title: "Bedtime Stories", text: "The Prophet ﷺ and his family, the Companions, the prophets, the great imams and the cities of the Quran." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card flex flex-col gap-1 transition hover:border-emerald">
              <span className="eyebrow">{c.eyebrow}</span>
              <h3 className="text-[1.12rem]">{c.title}</h3>
              <span className="text-[0.9rem] text-fg-muted">{c.text}</span>
            </Link>
          ))}
        </section>

        {now && (() => {
          const day = Math.floor(now.getTime() / 86400000);
          const { key, b } = ALL_STORIES[day % ALL_STORIES.length];
          return (
            <Link href={`/learn/${key}`} className="card flex flex-col gap-1.5 border-l-[3px] border-l-emerald transition hover:border-emerald">
              <span className="eyebrow">Story of the day · {b.kind}</span>
              <h3 className="font-display text-[1.2rem]">{b.title}</h3>
              <span className="text-[0.95rem] text-fg-muted">{b.scene}</span>
              <span className="font-bold text-emerald">Read the story →</span>
            </Link>
          );
        })()}

        <section className="card border-l-[3px] border-l-gold-bright">
          <span className="eyebrow">Hadith of the day</span>
          <p className="mt-1.5 text-[1.1rem]">Whoever takes a path seeking knowledge, Allah makes easy for them a path to Paradise.</p>
          <p className="mt-1 text-[0.88rem] text-fg-muted">Muslim 2699</p>
        </section>
      </Page>
    </>
  );
}
