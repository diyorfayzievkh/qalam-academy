import Link from "next/link";
import { Page, PageHeader } from "@/components/app-shell";
import { search, type SearchKind } from "@/lib/search";
import { SearchBox } from "./search-box";
import { T } from "@/components/lang";

export const dynamic = "force-dynamic";

const SUGGEST = ["Wuḍūʾ", "Witr", "Janāzah", "Āyat al-Kursī", "Patience", "Parents", "Miʿrāj", "Bilāl", "Imam al-Bukhārī", "Ḥalāl and ḥarām", "Backbiting", "Zakāt"];

const ORDER: SearchKind[] = ["Section", "World", "Lesson", "Akhlaq & Adab", "Prayer guide", "Bedtime story", "Quiz", "Mizan", "Hifz", "Ramadan"];

export default function SearchPage({ searchParams }: { searchParams: { q?: string; k?: string } }) {
  const q = (searchParams.q ?? "").slice(0, 80);
  const all = search(q);
  const kinds = ORDER.filter((k) => all.some((h) => h.kind === k));
  const k = kinds.includes(searchParams.k as SearchKind) ? (searchParams.k as SearchKind) : null;
  const hits = k ? all.filter((h) => h.kind === k) : all;

  return (
    <>
      <PageHeader eyebrow="Search" title="Find anything" sub="Lessons, Akhlaq & Adab, prayers, bedtime stories, quizzes, Mizan, sūrahs and duʿāʾs." />
      <Page>
        <SearchBox initial={q} />

        {q.trim().length < 2 ? (
          <section className="flex flex-col gap-2.5">
            <span className="eyebrow"><T>Try searching for</T></span>
            <div className="flex flex-wrap gap-2">
              {SUGGEST.map((s) => (
                <Link key={s} href={`/search?q=${encodeURIComponent(s)}`} className="rounded-full border border-border bg-bg-surface px-3.5 py-1.5 text-[0.92rem] font-bold hover:border-emerald">{s}</Link>
              ))}
            </div>
            <p className="text-[0.92rem] text-fg-muted"><T>You don’t need the special letters: “abu hanifa” finds “Abū Ḥanīfah”.</T></p>
          </section>
        ) : all.length === 0 ? (
          <p className="card text-fg-muted"><T vars={{ q }}>{"Nothing found for “{q}”. Try a shorter word or a different spelling."}</T></p>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-2" role="navigation" aria-label="Filter results">
              <Link href={`/search?q=${encodeURIComponent(q)}`} aria-current={!k ? "page" : undefined}
                className={`rounded-full border px-3 py-1 text-[0.88rem] font-bold ${!k ? "border-emerald bg-emerald text-bg-surface" : "border-border bg-bg-surface"}`}>
                <T>All</T> {all.length}
              </Link>
              {kinds.map((x) => (
                <Link key={x} href={`/search?q=${encodeURIComponent(q)}&k=${encodeURIComponent(x)}`} aria-current={k === x ? "page" : undefined}
                  className={`rounded-full border px-3 py-1 text-[0.88rem] font-bold ${k === x ? "border-emerald bg-emerald text-bg-surface" : "border-border bg-bg-surface"}`}>
                  <T>{x}</T> {all.filter((h) => h.kind === x).length}
                </Link>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5">
              {hits.map((h) => (
                <li key={h.href + h.title}>
                  <Link href={h.href} className="flex min-w-0 flex-col gap-1 rounded-card border border-border bg-bg-surface p-4 transition hover:border-emerald">
                    <span className="text-[0.75rem] font-extrabold uppercase tracking-wider text-emerald"><T>{h.kind}</T></span>
                    <b className="font-display text-[1.08rem] font-semibold">{h.title}</b>
                    <span className="line-clamp-2 text-[0.9rem] text-fg-muted">{h.sub}</span>
                    {h.snippet && <span className="mt-1 border-l-2 border-gold pl-2.5 text-[0.9rem]">{h.snippet}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </Page>
    </>
  );
}
