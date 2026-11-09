import { WORLDS } from "@/content/library";
import { BEDTIME, BEDTIME_CATS } from "@/content/bedtime";
import { MIZAN } from "@/content/mizan";
import { HomeClient, type DailyPicks } from "./home-client";

// Today's three are picked on the server so the full library never ships
// to the browser just for the home page. They change once a day.
export const revalidate = 3600;

export default function Home() {
  const day = Math.floor(Date.now() / 864e5);
  const lessons = WORLDS.flatMap((w) => [
    ...w.lessons.map((l) => ({ href: `/learn/${w.id}/${l.id}`, title: l.title, sub: w.title, world: w.id })),
    ...(w.adab ?? []).map((l) => ({ href: `/learn/${w.id}/${l.id}`, title: l.title, sub: w.title, world: w.id })),
  ]);
  const lesson = lessons[(day * 7) % lessons.length];
  const story = BEDTIME[day % BEDTIME.length];
  const deed = MIZAN[(day * 3) % MIZAN.length];
  const picks: DailyPicks = {
    lesson,
    story: { href: `/stories/${story.id}`, id: story.id, cat: story.cat, title: story.title, sub: BEDTIME_CATS.find((c) => c.id === story.cat)?.title ?? "", teaser: story.teaser },
    deed: { href: `/mizan#m-${deed.id}`, title: deed.title, reward: deed.reward, weight: deed.weight },
  };
  return <HomeClient picks={picks} />;
}
