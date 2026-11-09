"use client";

import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { BadgeIcon, starPath } from "@/components/figures";
import { Icon } from "@/components/icons";
import { localDay, streakOf, useProgress } from "@/components/progress";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { TopicCard } from "@/components/topic-card";
import { WorldCover } from "@/components/world-art";
import { StoryCover } from "@/components/story-art";
import { NuriSays, useKids } from "@/components/kids";
import { BADGES, badgeLevel, POINTS_PER_BADGE } from "@/content/badges";
import type { BedtimeCat } from "@/content/bedtime";
import { TOPICS } from "@/content/topics";
import { formatTime, PRAYER_ORDER, todayWithNext, type PrayerKey } from "@/lib/prayer-times";
import { useLocation, useNow } from "@/lib/use-location";

export type DailyPicks = {
  lesson: { href: string; title: string; sub: string; world: string };
  story: { href: string; id: string; cat: BedtimeCat; title: string; sub: string; teaser: string };
  deed: { href: string; title: string; reward: string; weight: string };
};

// The sky behind the next-prayer card follows the time of day.
type Period = "night" | "dawn" | "morning" | "noon" | "afternoon" | "dusk";
const SKY: Record<Period, { bg: string; ink: string; sun: string; moon: boolean }> = {
  night: { bg: "linear-gradient(170deg,#06102A 0%,#13254D 60%,#24345F 100%)", ink: "#F3EEDF", sun: "#F4E3A6", moon: true },
  dawn: { bg: "linear-gradient(175deg,#1E2A5A 0%,#7B5A8E 45%,#F0A27A 85%,#F8CF8F 100%)", ink: "#FFF6E8", sun: "#FFD58A", moon: false },
  morning: { bg: "linear-gradient(175deg,#4EA3D8 0%,#8CC8E6 55%,#F5E2B5 100%)", ink: "#0E2A3E", sun: "#FFE08A", moon: false },
  noon: { bg: "linear-gradient(175deg,#2E86C8 0%,#71B7E3 60%,#CDE8F2 100%)", ink: "#0B2638", sun: "#FFF0B0", moon: false },
  afternoon: { bg: "linear-gradient(175deg,#3E86B8 0%,#E8B56A 75%,#F3CF8B 100%)", ink: "#1E1A10", sun: "#FFD27A", moon: false },
  dusk: { bg: "linear-gradient(175deg,#1C2350 0%,#6D3E6E 45%,#E07A55 85%,#F2A65E 100%)", ink: "#FFF2E4", sun: "#FFB86B", moon: false },
};

function periodOf(now: Date, t: Record<PrayerKey, Date>): Period {
  if (now < t.fajr || now >= t.isha) return "night";
  if (now < t.sunrise) return "dawn";
  if (now < t.dhuhr) return "morning";
  if (now < t.asr) return "noon";
  if (now < t.maghrib) return "afternoon";
  return "dusk";
}

function SkyHero() {
  const { t } = useT();
  const loc = useLocation();
  const now = useNow();
  const day = now ? todayWithNext(loc.lat, loc.lng, loc.tz, loc.method, now) : null;
  const period = day && now ? periodOf(now, day.times) : "night";
  const sky = SKY[period];

  // Ring: how far we are between the previous prayer and the next one.
  let frac = 0;
  if (day && now) {
    const order: PrayerKey[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
    const past = order.map((k) => day.times[k]).filter((d) => d <= now);
    const prev = past.length ? past[past.length - 1] : new Date(day.times.isha.getTime() - 864e5);
    frac = Math.min(1, Math.max(0, (now.getTime() - prev.getTime()) / (day.nextAt.getTime() - prev.getTime())));
  }
  // Sun/moon travel across an arc from sunrise to maghrib (or through the night).
  let arc = 0.5;
  if (day && now) {
    const { sunrise, maghrib } = day.times;
    if (sky.moon || period === "dawn") {
      const start = new Date(maghrib.getTime() - (now < day.times.fajr ? 864e5 : 0));
      const end = new Date(sunrise.getTime() + (now >= maghrib ? 864e5 : 0));
      arc = Math.min(1, Math.max(0, (now.getTime() - start.getTime()) / (end.getTime() - start.getTime())));
    } else arc = Math.min(1, Math.max(0, (now.getTime() - sunrise.getTime()) / (maghrib.getTime() - sunrise.getTime())));
  }
  const bx = 52 + arc * 40, by = 52 - Math.sin(arc * Math.PI) * 34;
  const mins = day && now ? Math.max(0, Math.round((day.nextAt.getTime() - now.getTime()) / 60000)) : 0;
  const R = 46, C = 2 * Math.PI * R;

  return (
    <section aria-label={t("Next prayer")} className="relative overflow-hidden rounded-card shadow-[0_24px_50px_-30px_rgb(0_0_0/0.7)]" style={{ background: sky.bg, color: sky.ink }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {sky.moon && [[12, 14], [26, 30], [44, 10], [62, 24], [80, 12], [90, 32], [34, 48], [70, 46], [52, 60], [86, 58]].map(([x, y], i) => (
          <i key={i} className={`absolute block h-[2px] w-[2px] rounded-full bg-white ${i % 2 ? "twinkle" : ""}`} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
        <div className="absolute h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2" style={{ left: `${bx}%`, top: `${by}%` }}>
          <div className="glow-pulse absolute -inset-8 rounded-full" style={{ background: `radial-gradient(circle, ${sky.sun}55, transparent 70%)` }} />
          <svg viewBox="0 0 60 60" className="relative h-full w-full">
            {sky.moon ? <path d="M38 12a19 19 0 1 0 0 36 15 15 0 1 1 0-36z" fill={sky.sun} /> : <circle cx="30" cy="30" r="17" fill={sky.sun} />}
          </svg>
        </div>
      </div>

      <div className="relative grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
        <div className="flex flex-col gap-1">
          <span className="text-[0.74rem] font-extrabold uppercase tracking-[0.12em] opacity-80">{t("Next prayer")} · {loc.name}</span>
          <h2 className="font-display text-[1.7rem] leading-tight">{day ? t(day.next.name) : "…"}</h2>
          <div className="font-display text-[clamp(2.6rem,10vw,3.6rem)] leading-none tabular-nums">{day ? formatTime(day.nextAt, loc.tz) : "--:--"}</div>
          <span className="mt-1 font-bold opacity-90">
            {day && now ? (Math.floor(mins / 60) ? t("in {h} h {m} min", { h: Math.floor(mins / 60), m: mins % 60 }) : t("in {m} min", { m: mins })) : ""}
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            <Link className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-extrabold backdrop-blur hover:bg-white/30" href="/times">{t("All times")}</Link>
            <Link className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-extrabold backdrop-blur hover:bg-white/30" href="/qibla"><Icon name="qibla" size={18} />{t("Qibla")}</Link>
          </div>
        </div>
        <div className="hidden place-items-center sm:grid">
          <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden>
            <circle cx="60" cy="60" r={R} fill="none" stroke="currentColor" strokeOpacity={0.2} strokeWidth="7" />
            <circle cx="60" cy="60" r={R} fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * (1 - frac)} transform="rotate(-90 60 60)" style={{ transition: "stroke-dashoffset 1s ease" }} />
            <text x="60" y="58" textAnchor="middle" fontSize="20" fontWeight="800" fill="currentColor">{Math.floor(mins / 60)}:{String(mins % 60).padStart(2, "0")}</text>
            <text x="60" y="76" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" opacity={0.8}>{t("left")}</text>
          </svg>
        </div>
        <div className="grid grid-cols-6 gap-1 rounded-[12px] bg-black/15 p-1.5 text-center tabular-nums backdrop-blur-sm sm:col-span-2">
          {PRAYER_ORDER.map((p) => {
            const on = day?.next.key === p.key;
            return (
              <div key={p.key} className={`rounded-[9px] px-0.5 py-1.5 text-[0.74rem] ${on ? "bg-white/30 font-extrabold" : "opacity-85"}`}>
                {t(p.name)}<b className="block text-[0.95rem]">{day ? formatTime(day.times[p.key], loc.tz) : "--:--"}</b>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Flame({ on }: { on: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden className={on ? "glow-pulse" : "opacity-40 grayscale"}>
      <path d="M12 22c-4.4 0-7-2.8-7-6.4 0-3.4 2.4-5.1 3.4-8.2.5 1.9 1.3 2.6 2 2.3.4-3 1.6-5.6 4.1-7.7-.3 3.6 1.2 5.2 2.6 7.2 1.2 1.7 1.9 3.3 1.9 5.3 0 4-2.6 7.5-7 7.5z" fill="#F0A93B" />
      <path d="M12 22c-2.2 0-3.6-1.4-3.6-3.3 0-2 1.6-3 2.3-4.8.6 1.5 1.8 1.7 2.2 3 .4-1 .3-2 .1-2.7 1.6 1.3 2.6 2.7 2.6 4.4 0 2-1.5 3.4-3.6 3.4z" fill="#FFE08A" />
    </svg>
  );
}

function KidsHome({ picks }: { picks: DailyPicks }) {
  const { points, days } = useProgress();
  const { user } = useAccount();
  const { t } = useT();
  const lvl = badgeLevel(points);
  const streak = streakOf(days);
  const hour = new Date().getHours();
  const hello = hour < 12 ? t("Good morning") : hour < 17 ? t("Good afternoon") : t("Good evening");
  const tiles = [
    { href: "/learn", title: "Learn", sub: "Faith, prayer and good manners", art: "iman" },
    { href: "/salah", title: "How to pray", sub: "Step by step", art: "salah" },
    { href: "/stories", title: "Stories", sub: "Prophets and heroes", art: "seerah" },
    { href: "/hifz", title: "Quran", sub: "Learn a sūrah", art: "quran" },
    { href: "/badges", title: "My badges", sub: "The Path of Light", art: "duas" },
    { href: "/learn/akhlaq", title: "Good manners", sub: "Be like the Prophet ﷺ", art: "akhlaq" },
  ];
  return (
    <>
      <PageHeader eyebrow="Bismillāh" title="As-salāmu ʿalaykum" />
      <Page>
        <NuriSays mood="cheer" size={104}>
          <span className="block text-[1.15rem]">{hello}{user ? `, ${user.name}` : ""}!</span>
          <span className="font-semibold text-fg-muted">{t("I’m Nuri. What shall we learn today?")}</span>
        </NuriSays>

        <section className="grid grid-cols-3 items-stretch gap-3 [&>*]:justify-center">
          <div className="card flex flex-col items-center gap-1 text-center">
            <b className="shimmer-gold font-display text-[1.8rem] leading-none tabular-nums">{points.toLocaleString()}</b>
            <span className="text-[0.85rem] font-bold">{t("points")}</span>
          </div>
          <Link href="/badges" className="card flex flex-col items-center gap-1 text-center">
            <BadgeIcon index={Math.max(0, lvl - 1)} locked={!lvl} size={44} />
            <span className="text-[0.8rem] font-bold leading-tight">{lvl ? t(BADGES[lvl - 1].name) : t("First badge soon!")}</span>
          </Link>
          <div className="card flex flex-col items-center gap-1 text-center">
            <Flame on={streak > 0} />
            <span className="text-[0.85rem] font-bold">{t("{n} days", { n: streak })}</span>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3.5 md:grid-cols-3">
          {tiles.map((x) => (
            <Link key={x.href + x.title} href={x.href} className="lift flex flex-col overflow-hidden rounded-card border-2 border-border bg-bg-surface hover:border-gold-bright">
              <WorldCover id={x.art} className="h-[96px]" />
              <div className="flex flex-col p-3.5">
                <b className="font-display text-[1.2rem] leading-tight">{t(x.title)}</b>
                <span className="text-[0.85rem] text-fg-muted">{t(x.sub)}</span>
              </div>
            </Link>
          ))}
        </section>

        <Link href={picks.story.href} className="lift flex flex-col overflow-hidden rounded-card border-2 border-border bg-bg-surface hover:border-gold-bright sm:flex-row">
          <StoryCover s={picks.story} day className="h-[130px] sm:h-auto sm:w-[240px] sm:flex-none" />
          <div className="flex flex-col gap-1 p-4">
            <span className="eyebrow">{t("Tonight’s story")}</span>
            <b className="font-story text-[1.25rem] font-semibold leading-snug">{picks.story.title}</b>
            <span className="text-[0.95rem] text-fg-muted">{picks.story.teaser}</span>
          </div>
        </Link>

        <SkyHero />
      </Page>
    </>
  );
}

export function HomeClient({ picks }: { picks: DailyPicks }) {
  const { kids } = useKids();
  return kids ? <KidsHome picks={picks} /> : <GrownUpHome picks={picks} />;
}

function GrownUpHome({ picks }: { picks: DailyPicks }) {
  const { points, answered, days } = useProgress();
  const { t } = useT();
  const { available, user, ready } = useAccount();
  const lvl = badgeLevel(points);
  const into = points % POINTS_PER_BADGE;
  const shown = TOPICS.filter((x) => !x.hidden);
  const done = shown.filter((x) => x.questions.every((_, i) => answered[`${x.id}-${i}`])).length;
  const streak = streakOf(days);
  const learnedToday = !!days[localDay()];

  return (
    <>
      <PageHeader eyebrow="Bismillāh" title="As-salāmu ʿalaykum"
        sub="Learn your faith a few minutes a day: prayer, belief, and good character, all according to the Hanafi madhhab." />
      <Page>
        <SkyHero />

        <section className="grid gap-3.5 md:grid-cols-[1.6fr_1fr]">
          <div className="card flex flex-wrap items-center gap-4">
            <div className="flex-none"><BadgeIcon index={Math.max(0, lvl - 1)} locked={!lvl} size={72} /></div>
            <div className="flex min-w-[200px] flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-[1.3rem]">{lvl ? t("{name} badge", { name: t(BADGES[lvl - 1].name) }) : t("Your journey")}</h2>
                <span className="tabular-nums text-fg-muted"><b className="shimmer-gold text-[1.1rem]">{points.toLocaleString()}</b> {t("points")}</span>
              </div>
              <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={lvl >= 10 ? 1000 : into}>
                <i style={{ width: `${lvl >= 10 ? 100 : into / 10}%`, transition: "width .8s cubic-bezier(.2,.7,.2,1)" }} />
              </div>
              <span className="text-[0.9rem] text-fg-muted">
                {lvl >= 10 ? t("All ten badges earned. Mā shāʾ Allāh!") : t("{n} points to the {name} badge · {done} of {total} topics complete", { n: (1000 - into).toLocaleString(), name: t(BADGES[lvl].name), done, total: shown.length })}
              </span>
              <Link href="/badges" className="self-start text-[0.88rem] font-bold text-emerald">{t("See your Path of Light")} →</Link>
            </div>
          </div>
          <div className="card flex items-center gap-3.5">
            <Flame on={streak > 0} />
            <div className="flex flex-col">
              <b className="font-display text-[1.6rem] leading-none tabular-nums">{streak}</b>
              <span className="text-[0.9rem] font-bold">{t(streak === 1 ? "day of learning in a row" : "days of learning in a row")}</span>
              <span className="text-[0.82rem] text-fg-muted">{learnedToday ? t("You learned something today. Mā shāʾ Allāh!") : t("Read one lesson or story today to keep it going.")}</span>
            </div>
          </div>
        </section>

        {ready && available && !user && (
          <Link href="/account" className="card lift flex flex-wrap items-center gap-3.5 border-l-[3px] border-l-emerald hover:border-emerald">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-emerald-soft text-emerald"><Icon name="user" /></span>
            <span className="flex min-w-[200px] flex-1 flex-col">
              <b className="font-display text-[1.1rem]">{t("Sync your progress")}</b>
              <span className="text-[0.9rem] text-fg-muted">{t("Create a free family account to keep progress on every device and follow your children’s learning.")}</span>
            </span>
            <span className="font-bold text-emerald">{t("Sign in")} →</span>
          </Link>
        )}

        <section className="reveal flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="eyebrow">{t("Today’s three")}</span>
            <h2 className="text-[1.3rem]">{t("A lesson, a story and a deed")}</h2>
          </div>
          <div className="grid gap-3.5 md:grid-cols-3">
            <Link href={picks.lesson.href} className="lift flex flex-col overflow-hidden rounded-card border border-border bg-bg-surface hover:border-emerald">
              <WorldCover id={picks.lesson.world} className="h-[92px]" />
              <div className="flex flex-col gap-1 p-4">
                <span className="eyebrow">{t("Lesson")} · {picks.lesson.sub}</span>
                <b className="font-display text-[1.08rem] leading-snug">{picks.lesson.title}</b>
                <span className="text-[0.85rem] font-bold text-emerald">{t("Read the lesson")} · +10</span>
              </div>
            </Link>
            <Link href={picks.story.href} className="lift flex flex-col overflow-hidden rounded-card border border-border bg-bg-surface hover:border-emerald">
              <StoryCover s={picks.story} className="h-[92px]" />
              <div className="flex flex-col gap-1 p-4">
                <span className="eyebrow">{t("Tonight’s story")}</span>
                <b className="font-story text-[1.08rem] font-semibold leading-snug">{picks.story.title}</b>
                <span className="line-clamp-2 text-[0.85rem] text-fg-muted">{picks.story.teaser}</span>
              </div>
            </Link>
            <Link href={picks.deed.href} className="lift flex flex-col overflow-hidden rounded-card border border-border bg-bg-surface hover:border-emerald">
              <div className="relative grid h-[92px] place-items-center overflow-hidden" style={{ background: "linear-gradient(160deg,#5A3A0E,#C79A3E)" }} aria-hidden>
                <svg viewBox="0 0 120 60" className="h-full w-full">
                  <path d={starPath(60, 30, 40, 31, 8)} fill="none" stroke="#FFE7AE" strokeOpacity=".35" />
                  <path d="M60 12v34M48 48h24M34 20h52" stroke="#FFE7AE" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M34 20l-8 14h16zM86 20l-8 14h16z" fill="#FFE7AE" fillOpacity=".45" stroke="#FFE7AE" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <span className="eyebrow">{t("Deed of the day")} · {t(picks.deed.weight)}</span>
                <b className="font-display text-[1.08rem] leading-snug">{picks.deed.title}</b>
                <span className="line-clamp-2 text-[0.85rem] text-fg-muted">{picks.deed.reward}</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="reveal flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.3rem]">{t("Continue learning")}</h2>
            <Link href="/learn" className="font-bold text-fg-muted">{t("See all")}</Link>
          </div>
          <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
            {shown.slice(0, 3).map((x) => <TopicCard key={x.id} topic={x} />)}
          </div>
        </section>

        <section className="reveal grid gap-3.5 sm:grid-cols-2">
          {[
            { href: "/learn", eyebrow: "Knowledge Base", title: "Ilm Quest", text: "Iman, Islam, Salah, Akhlaq & Adab, Duas, Quran and Seerah, plus Spiritual Tarbiyah (3 volumes) and Social Tarbiyah.", art: "quran" },
            { href: "/stories", eyebrow: "Before sleep", title: "Bedtime Stories", text: "The Prophet ﷺ and his family, the Companions, the prophets, the great imams and the cities of the Quran.", art: "iman" },
            { href: "/hifz", eyebrow: "Hifz", title: "Memorise the Quran", text: "63 sūrahs and passages, ayah by ayah, with audio and spaced review.", art: "duas" },
            { href: "/mizan", eyebrow: "Collection", title: "Mizan", text: "Deeds heaviest on the scale, from authentic hadith.", art: "akhlaq" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="lift flex overflow-hidden rounded-card border border-border bg-bg-surface hover:border-emerald">
              <WorldCover id={c.art} className="w-[92px] flex-none" />
              <div className="flex min-w-0 flex-col gap-1 p-4">
                <span className="eyebrow">{t(c.eyebrow)}</span>
                <h3 className="text-[1.12rem]">{t(c.title)}</h3>
                <span className="text-[0.88rem] text-fg-muted">{t(c.text)}</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="card reveal relative overflow-hidden border-l-[3px] border-l-gold-bright">
          <span className="eyebrow">{t("Hadith of the day")}</span>
          <p className="font-story mt-1.5 text-[1.15rem]">{t("Whoever takes a path seeking knowledge, Allah makes easy for them a path to Paradise.")}</p>
          <p className="mt-1 text-[0.88rem] text-fg-muted">Muslim 2699</p>
        </section>
      </Page>
    </>
  );
}
