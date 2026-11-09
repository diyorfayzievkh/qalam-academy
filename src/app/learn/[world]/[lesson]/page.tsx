"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import type { ReactNode } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { POINTS, useProgress } from "@/components/progress";
import { RecitationBlock } from "@/components/recitation";
import type { AdabLesson } from "@/content/adab";
import { findWorld, type Block, type Lesson } from "@/content/library";
import { REWARD_BLOCKS } from "@/content/rewards";
import { STORY_BLOCKS } from "@/content/stories";
import { lessonQuizId } from "@/content/topics";
import { useT } from "@/components/lang";
import { translateAdab, translateLesson, useLessonTranslations } from "@/content/i18n/lessons";

export default function LessonPage() {
  const { world: wid, lesson: lid } = useParams<{ world: string; lesson: string }>();
  const { lang, t } = useT();
  const trMap = useLessonTranslations(lang, wid);
  const w = findWorld(wid);
  const orig = w?.lessons.find((l) => l.id === lid);
  const lesson = orig && translateLesson(orig, trMap?.[orig.id]);
  const adab0 = w?.adab?.find((l) => l.id === lid);
  const ad = adab0 ? translateAdab(adab0, STORY_BLOCKS[`${wid}/${lid}`], REWARD_BLOCKS[`${wid}/${lid}`], trMap?.[adab0.id]) : undefined;
  const adab = ad?.l;
  if (!w || (!lesson && !adab)) notFound();

  const all = [...(w.adab ?? []).map((l) => l.id), ...w.lessons.map((l) => l.id)];
  const idx = all.indexOf(lid);
  const nextId = all[idx + 1];
  const title = lesson?.title ?? adab!.title;

  return (
    <>
      <PageHeader eyebrow={lesson?.group ? `${t(w.title)} · ${t(lesson.group)}` : t(w.title)} title={title} sub={lesson?.summary ?? adab!.summary} />
      <Page>
        <Link href={`/learn/${w.id}`} className="font-bold text-fg-muted">← {t(w.title)}</Link>
        {lesson ? <BlockLesson lesson={lesson} orig={orig!} worldId={w.id} /> : <AdabView l={adab!} rewards={ad?.rewards} stories={ad?.stories} />}
        <FinishBar id={`lesson:${w.id}/${lid}`} next={nextId ? `/learn/${w.id}/${nextId}` : null} back={`/learn/${w.id}`} />
      </Page>
    </>
  );
}

function BlockLesson({ lesson, orig, worldId }: { lesson: Lesson; orig: Lesson; worldId: string }) {
  const { t } = useT();
  return (
    <>
    <LessonMeta blocks={lesson.blocks} orig={orig.blocks} />
    <section className="card flex flex-col gap-4">
      {lesson.blocks.map((b, i) => <BlockView key={i} b={b} k={orig.blocks[i]} />)}
      <p className="border-t border-border pt-3 text-[0.85rem] text-fg-muted">{t("Sources:")} {lesson.sources.join(" · ")}</p>
    </section>
    {lesson.quiz && lesson.quiz.length > 0 && <QuizCard n={lesson.quiz.length} href={`/quiz/${lessonQuizId(worldId, lesson.id)}`} />}
    </>
  );
}

// `k` is the English original, used to recognise special block kinds by their English titles.
function BlockView({ b, k = b }: { b: Block; k?: Block }) {
  const { t } = useT();
  const kt = k.type === "points" ? k.title : undefined;
  switch (b.type) {
    case "p":
      return <p className="max-w-[65ch]">{b.text}</p>;
    case "reward":
      return <RewardCard b={b} />;
    case "story":
      return <StoryCard b={b} />;
    case "points":
      if (kt === "Key takeaways") return <Remember items={b.items} />;
      if (b.title && kt && /^(how to|how |steps|step by step)/i.test(kt)) return <Steps title={b.title} items={b.items} />;
      return (
        <div className="flex flex-col gap-2">
          {b.title && <h3 className="text-[1.1rem]">{b.title}</h3>}
          <ul className="flex max-w-[65ch] list-disc flex-col gap-1.5 pl-5">{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      );
    case "steps":
      return <Steps title={b.title} items={b.items} />;
    case "quote":
      return (
        <figure className="flex flex-col gap-1.5 border-l-[3px] border-l-gold-bright pl-4">
          {b.ar && <p lang="ar" dir="rtl" className="font-arabic text-[1.45rem] leading-[2.1]">{b.ar}</p>}
          {b.tr && <p className="text-[0.95rem] italic text-fg-muted">{b.tr}</p>}
          <blockquote className="max-w-[65ch] font-display text-[1.12rem] leading-snug">“{b.en}”</blockquote>
          <figcaption className="text-[0.82rem] font-bold text-gold">{b.src}{b.note ? ` · ${b.note}` : ""}</figcaption>
        </figure>
      );
    case "compare":
      return (
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.1rem]">{b.title}</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[420px] border-collapse text-left text-[0.95rem]">
              <thead><tr><th className="border-b-2 border-emerald px-2.5 py-2 text-emerald">{b.left}</th><th className="border-b-2 border-gold-bright px-2.5 py-2 text-gold">{b.right}</th></tr></thead>
              <tbody>{b.rows.map(([l, r]) => <tr key={l} className="align-top"><td className="border-b border-border px-2.5 py-2">{l}</td><td className="border-b border-border px-2.5 py-2">{r}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      );
    case "scenario":
      return <Scenario b={b} />;
    case "reflect":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-bg-inset px-4 py-3">
            <span className="eyebrow">{t("Think about it")}</span>
            <ul className="mt-1.5 flex list-disc flex-col gap-1.5 pl-5">{b.think.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          {b.home && (
            <div className="rounded-xl bg-emerald-soft px-4 py-3">
              <span className="eyebrow !text-emerald">{t("Talk about it at home")}</span>
              <ul className="mt-1.5 flex list-disc flex-col gap-1.5 pl-5">{b.home.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          )}
        </div>
      );
    case "rec":
      return (
        <div className="flex flex-col gap-1">
          <h3 className="text-[1.05rem]">{b.label}</h3>
          <RecitationBlock r={b.r} />
          {b.note && <p className="text-[0.92rem] text-fg-muted">{b.note}</p>}
          {b.src && <p className="text-[0.82rem] font-bold text-gold">{b.src}</p>}
        </div>
      );
    case "timeline":
      return (
        <ol className="relative flex flex-col gap-4 border-l-2 border-gold-bright/50 pl-5">
          {b.items.map((t) => (
            <li key={t.when} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-gold-bright" aria-hidden="true" />
              <b className="font-display text-emerald">{t.when}</b>
              <p className="max-w-[60ch]">{t.what}</p>
            </li>
          ))}
        </ol>
      );
    case "link":
      return (
        <div className="flex flex-wrap items-center gap-3 rounded-xl bg-emerald-soft px-4 py-3">
          <p className="min-w-0 flex-1">{b.text}</p>
          <Link className="btn" href={b.href}>{b.label}</Link>
        </div>
      );
  }
}

function Part({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="card flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-gold-soft font-extrabold text-gold">{n}</span>
        <h2 className="text-[1.2rem]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Triple({ rows }: { rows: { label: string; text?: string }[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-3">
      {rows.filter((r) => r.text).map((r) => (
        <div key={r.label} className="rounded-xl bg-bg-inset p-3.5">
          <dt className="eyebrow mb-1">{r.label}</dt>
          <dd className="m-0">{r.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function QuizCard({ n, href }: { n: number; href: string }) {
  const { t } = useT();
  return (
    <section className="card flex flex-wrap items-center justify-between gap-3 border-l-[3px] border-l-gold-bright">
      <div className="flex flex-col gap-0.5">
        <span className="eyebrow">{t("Lesson quiz")}</span>
        <b className="font-display text-[1.1rem]">{t("{n} questions on this lesson", { n })}</b>
        <span className="text-[0.9rem] text-fg-muted">{t("10 points for each first correct answer, 30 for a perfect round.")}</span>
      </div>
      <Link className="btn" href={href}>{t("Take the quiz")}</Link>
    </section>
  );
}

function Steps({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[1.1rem]">{title}</h3>
      <ol className="flex flex-col gap-2">
        {items.map((t, i) => (
          <li key={t} className="flex max-w-[68ch] gap-3">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-emerald text-[0.85rem] font-extrabold text-bg-surface">{i + 1}</span>
            <span className="pt-0.5">{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Remember({ items }: { items: string[] }) {
  const { t } = useT();
  return (
    <div className="rounded-xl border-2 border-gold-bright/60 px-4 py-3">
      <span className="eyebrow !text-gold">{t("Remember")}</span>
      <ul className="mt-1.5 flex flex-col gap-1.5">
        {items.map((t) => <li key={t} className="flex gap-2"><span className="font-extrabold text-gold" aria-hidden="true">✓</span><span>{t}</span></li>)}
      </ul>
    </div>
  );
}

function Scenario({ b }: { b: Extract<Block, { type: "scenario" }> }) {
  const { answerCorrect } = useProgress();
  const { t } = useT();
  const [picked, setPicked] = useState<number | null>(null);
  const [pts, setPts] = useState(0);
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-bg-inset px-4 py-3.5">
      <span className="eyebrow">{t("What would you do?")}</span>
      <p className="max-w-[65ch] font-semibold">{b.situation}</p>
      <div className="grid gap-2">
        {b.options.map((o, k) => {
          const state = picked === null ? "" : o.best ? "right" : k === picked ? "wrong" : "";
          return (
            <button key={o.text} type="button" disabled={picked !== null}
              onClick={() => { setPicked(k); if (o.best) setPts(answerCorrect(`scenario-${b.id}`)); }}
              className={`rounded-lg border-[1.5px] px-3 py-2 text-left text-[0.95rem] font-semibold disabled:cursor-default ${
                state === "right" ? "border-success bg-success-soft text-success"
                : state === "wrong" ? "border-danger bg-danger-soft text-danger"
                : "border-border bg-bg-surface enabled:hover:border-emerald"}`}>
              {o.text}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className="max-w-[65ch] text-[0.95rem]">
          <b>{b.options[picked].best ? (pts ? t("Best choice · +{n}", { n: pts }) : t("Best choice.")) : t("Think again.")}</b> {b.options[picked].feedback}
          {!b.options[picked].best && <> <b>{t("Better:")}</b> {b.options.find((o) => o.best)?.feedback}</>}
        </p>
      )}
    </div>
  );
}

function StoryCard({ b }: { b: Extract<Block, { type: "story" }> }) {
  const { answerCorrect } = useProgress();
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [pts, setPts] = useState(0);
  const c = b.check;
  return (
    <article className="flex flex-col gap-2.5 rounded-xl border border-emerald/40 bg-emerald-soft/60 px-4 py-4">
      <span className="eyebrow !text-emerald">{t("Story")} · {t(b.kind)}</span>
      <h3 className="font-display text-[1.25rem] leading-snug">{b.title}</h3>
      <p className="max-w-[65ch] italic text-fg-muted">{b.scene}</p>
      {(open ? b.story : b.story.slice(0, 1)).map((t) => <p key={t} className="max-w-[65ch]">{t}</p>)}
      {b.story.length > 1 && (
        <button type="button" className="self-start font-bold text-emerald underline underline-offset-4" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? t("Show less") : t("Read the whole story")}
        </button>
      )}
      {open && (
        <>
          <div className="rounded-xl bg-bg-surface px-3.5 py-2.5"><b className="text-gold">{t("The lesson:")}</b> {b.lesson}</div>
          {c && (
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-bg-surface px-3.5 py-3">
              <span className="eyebrow">{t("Quick check")}</span>
              <p className="font-semibold">{c.q}</p>
              <div className="grid gap-2">
                {c.options.map((o, k) => {
                  const state = picked === null ? "" : k === c.answer ? "right" : k === picked ? "wrong" : "";
                  return (
                    <button key={o} type="button" disabled={picked !== null}
                      onClick={() => { setPicked(k); if (k === c.answer) setPts(answerCorrect(`story-${b.id}`)); }}
                      className={`rounded-lg border-[1.5px] px-3 py-2 text-left text-[0.95rem] font-semibold disabled:cursor-default ${
                        state === "right" ? "border-success bg-success-soft text-success"
                        : state === "wrong" ? "border-danger bg-danger-soft text-danger"
                        : "border-border bg-bg-surface enabled:hover:border-emerald"}`}>
                      {o}
                    </button>
                  );
                })}
              </div>
              {picked !== null && (
                <p className="text-[0.92rem]"><b>{picked === c.answer ? (pts ? t("Correct · +{n}", { n: pts }) : t("Correct.")) : t("Not quite.")}</b> {c.why}</p>
              )}
            </div>
          )}
          <p className="text-[0.82rem] font-bold text-gold">{b.src}</p>
        </>
      )}
    </article>
  );
}

function LessonMeta({ blocks, orig }: { blocks: Block[]; orig: Block[] }) {
  const { t } = useT();
  const words = JSON.stringify(orig).split(/\s+/).length;
  const mins = Math.max(2, Math.round(words / 200));
  const sections = blocks.flatMap((b, i) => {
    const o = orig[i];
    return b.type === "points" && b.title && o?.type === "points" && o.title !== "Key takeaways" ? [b.title] : [];
  }).slice(0, 4);
  const stories = blocks.filter((b) => b.type === "story").length;
  const rewards = blocks.filter((b) => b.type === "reward").length;
  return (
    <section className="flex flex-col gap-2 rounded-xl border border-border bg-bg-surface px-4 py-3">
      <div className="flex flex-wrap gap-2 text-[0.82rem] font-bold">
        <span className="rounded-full bg-emerald-soft px-2.5 py-1 text-emerald">{t("{n}-min read", { n: mins })}</span>
        {stories > 0 && <span className="rounded-full bg-emerald-soft px-2.5 py-1 text-emerald">{t(stories === 1 ? "{n} story" : "{n} stories", { n: stories })}</span>}
        {rewards > 0 && <span className="rounded-full bg-gold-bright/15 px-2.5 py-1 text-gold">{t(rewards === 1 ? "{n} key reward" : "{n} key rewards", { n: rewards })}</span>}
      </div>
      {sections.length > 0 && (
        <div className="text-[0.92rem]"><b>{t("In this lesson:")}</b> {sections.join(" · ")}</div>
      )}
    </section>
  );
}

function RewardCard({ b }: { b: Extract<Block, { type: "reward" }> }) {
  const { t } = useT();
  return (
    <aside className="flex flex-col gap-1.5 rounded-xl border border-gold-bright/50 bg-gold-bright/10 px-4 py-3.5">
      <span className="eyebrow !text-gold">{t("Key reward")} · {b.title}</span>
      <b className="font-display text-[1.25rem] leading-snug text-emerald">{b.measure}</b>
      <p className="max-w-[65ch]">{b.picture}</p>
      <p className="text-[0.82rem] font-bold text-gold">{b.src}</p>
    </aside>
  );
}

function AdabView({ l, rewards, stories }: { l: AdabLesson; rewards?: Block[]; stories?: Block[] }) {
  const { t } = useT();
  return (
    <>
      <Part n={1} title={t("Why it matters")}>
        {l.why.map((t) => <p key={t} className="max-w-[65ch]">{t}</p>)}
        {stories?.map((b, i) => <BlockView key={i} b={b} />)}
      </Part>
      <Part n={2} title={t("How to do it right")}>
        <ol className="flex max-w-[65ch] list-decimal flex-col gap-1.5 pl-5">{l.how.map((t) => <li key={t}>{t}</li>)}</ol>
        {l.recitations?.map((r) => (
          <div key={r.label} className="flex flex-col gap-1">
            <h3 className="text-[1.05rem]">{r.label}</h3>
            <RecitationBlock r={r.r} />
            <p className="text-[0.82rem] font-bold text-gold">{r.src}</p>
          </div>
        ))}
      </Part>
      <Part n={3} title={t("Benefits")}>
        <Triple rows={[{ label: t("Spiritual"), text: l.benefits.spiritual }, { label: t("Health"), text: l.benefits.health }, { label: t("Social"), text: l.benefits.social }]} />
        {l.benefits.health && <p className="text-[0.82rem] text-fg-muted">{t("Health points are general health knowledge, not hadith.")}</p>}
        {rewards?.map((b, i) => <BlockView key={i} b={b} />)}
      </Part>
      <Part n={4} title={t("What we lose by neglecting it")}>
        <Triple rows={[{ label: t("Spiritual"), text: l.lose.spiritual }, { label: t("Health"), text: l.lose.health }, { label: t("Social"), text: l.lose.social }]} />
      </Part>
      <Part n={5} title={t("Practice")}>
        <div className="rounded-xl bg-emerald-soft px-4 py-3"><b className="text-emerald">{t("Challenge:")}</b> {l.practice.challenge}</div>
        <div className="rounded-xl bg-bg-inset px-4 py-3"><b>{t("Reflect privately:")}</b> {l.practice.reflection}</div>
        <p className="text-[0.85rem] text-fg-muted">{t("Challenges are between you and Allah, so they earn no points.")}</p>
      </Part>
      {l.quiz && l.quiz.length > 0 && <QuizCard n={l.quiz.length} href={`/quiz/adab-${l.id}`} />}
    </>
  );
}

function FinishBar({ id, next, back }: { id: string; next: string | null; back: string }) {
  const { studied, markStudied } = useProgress();
  const { t } = useT();
  const done = !!studied[id];
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <button type="button" className="btn btn-gold" disabled={done} onClick={() => markStudied(id, "lesson read", POINTS.lessonRead)}>
        {done ? t("Read ✓") : t("Mark as read · +{n}", { n: POINTS.lessonRead })}
      </button>
      <Link className="btn btn-ghost" href={next ?? back}>{next ? t("Next lesson") : t("Back to the world")}</Link>
    </div>
  );
}
