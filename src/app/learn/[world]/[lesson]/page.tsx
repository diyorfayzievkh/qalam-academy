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

export default function LessonPage() {
  const { world: wid, lesson: lid } = useParams<{ world: string; lesson: string }>();
  const w = findWorld(wid);
  const lesson = w?.lessons.find((l) => l.id === lid);
  const adab = w?.adab?.find((l) => l.id === lid);
  if (!w || (!lesson && !adab)) notFound();

  const all = [...(w.adab ?? []).map((l) => l.id), ...w.lessons.map((l) => l.id)];
  const idx = all.indexOf(lid);
  const nextId = all[idx + 1];
  const title = lesson?.title ?? adab!.title;

  return (
    <>
      <PageHeader eyebrow={lesson?.group ? `${w.title} · ${lesson.group}` : w.title} title={title} sub={lesson?.summary ?? adab!.summary} />
      <Page>
        <Link href={`/learn/${w.id}`} className="font-bold text-fg-muted">← {w.title}</Link>
        {lesson ? <BlockLesson lesson={lesson} /> : <AdabView l={adab!} rewards={REWARD_BLOCKS[`${w.id}/${lid}`]} stories={STORY_BLOCKS[`${w.id}/${lid}`]} />}
        <FinishBar id={`lesson:${w.id}/${lid}`} next={nextId ? `/learn/${w.id}/${nextId}` : null} back={`/learn/${w.id}`} />
      </Page>
    </>
  );
}

function BlockLesson({ lesson }: { lesson: Lesson }) {
  return (
    <>
    <LessonMeta blocks={lesson.blocks} />
    <section className="card flex flex-col gap-4">
      {lesson.blocks.map((b, i) => <BlockView key={i} b={b} />)}
      <p className="border-t border-border pt-3 text-[0.85rem] text-fg-muted">Sources: {lesson.sources.join(" · ")}</p>
    </section>
    </>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "p":
      return <p className="max-w-[65ch]">{b.text}</p>;
    case "reward":
      return <RewardCard b={b} />;
    case "story":
      return <StoryCard b={b} />;
    case "points":
      return (
        <div className="flex flex-col gap-2">
          {b.title && <h3 className="text-[1.1rem]">{b.title}</h3>}
          <ul className="flex max-w-[65ch] list-disc flex-col gap-1.5 pl-5">{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
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

function StoryCard({ b }: { b: Extract<Block, { type: "story" }> }) {
  const { answerCorrect } = useProgress();
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [pts, setPts] = useState(0);
  const c = b.check;
  return (
    <article className="flex flex-col gap-2.5 rounded-xl border border-emerald/40 bg-emerald-soft/60 px-4 py-4">
      <span className="eyebrow !text-emerald">Story · {b.kind}</span>
      <h3 className="font-display text-[1.25rem] leading-snug">{b.title}</h3>
      <p className="max-w-[65ch] italic text-fg-muted">{b.scene}</p>
      {(open ? b.story : b.story.slice(0, 1)).map((t) => <p key={t} className="max-w-[65ch]">{t}</p>)}
      {b.story.length > 1 && (
        <button type="button" className="self-start font-bold text-emerald underline underline-offset-4" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Show less" : "Read the whole story"}
        </button>
      )}
      {open && (
        <>
          <div className="rounded-xl bg-bg-surface px-3.5 py-2.5"><b className="text-gold">The lesson:</b> {b.lesson}</div>
          {c && (
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-bg-surface px-3.5 py-3">
              <span className="eyebrow">Quick check</span>
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
                <p className="text-[0.92rem]"><b>{picked === c.answer ? (pts ? `Correct · +${pts}` : "Correct.") : "Not quite."}</b> {c.why}</p>
              )}
            </div>
          )}
          <p className="text-[0.82rem] font-bold text-gold">{b.src}</p>
        </>
      )}
    </article>
  );
}

function LessonMeta({ blocks }: { blocks: Block[] }) {
  const words = JSON.stringify(blocks).split(/\s+/).length;
  const mins = Math.max(2, Math.round(words / 200));
  const sections = blocks.filter((b): b is Extract<Block, { type: "points" }> => b.type === "points" && !!b.title && b.title !== "Key takeaways").map((b) => b.title!).slice(0, 4);
  const stories = blocks.filter((b) => b.type === "story").length;
  const rewards = blocks.filter((b) => b.type === "reward").length;
  return (
    <section className="flex flex-col gap-2 rounded-xl border border-border bg-bg-surface px-4 py-3">
      <div className="flex flex-wrap gap-2 text-[0.82rem] font-bold">
        <span className="rounded-full bg-emerald-soft px-2.5 py-1 text-emerald">{mins}-min read</span>
        {stories > 0 && <span className="rounded-full bg-emerald-soft px-2.5 py-1 text-emerald">{stories} {stories === 1 ? "story" : "stories"}</span>}
        {rewards > 0 && <span className="rounded-full bg-gold-bright/15 px-2.5 py-1 text-gold">{rewards} key {rewards === 1 ? "reward" : "rewards"}</span>}
      </div>
      {sections.length > 0 && (
        <div className="text-[0.92rem]"><b>In this lesson:</b> {sections.join(" · ")}</div>
      )}
    </section>
  );
}

function RewardCard({ b }: { b: Extract<Block, { type: "reward" }> }) {
  return (
    <aside className="flex flex-col gap-1.5 rounded-xl border border-gold-bright/50 bg-gold-bright/10 px-4 py-3.5">
      <span className="eyebrow !text-gold">Key reward · {b.title}</span>
      <b className="font-display text-[1.25rem] leading-snug text-emerald">{b.measure}</b>
      <p className="max-w-[65ch]">{b.picture}</p>
      <p className="text-[0.82rem] font-bold text-gold">{b.src}</p>
    </aside>
  );
}

function AdabView({ l, rewards, stories }: { l: AdabLesson; rewards?: Block[]; stories?: Block[] }) {
  return (
    <>
      <Part n={1} title="Why it matters">
        {l.why.map((t) => <p key={t} className="max-w-[65ch]">{t}</p>)}
        {stories?.map((b, i) => <BlockView key={i} b={b} />)}
      </Part>
      <Part n={2} title="How to do it right">
        <ol className="flex max-w-[65ch] list-decimal flex-col gap-1.5 pl-5">{l.how.map((t) => <li key={t}>{t}</li>)}</ol>
        {l.recitations?.map((r) => (
          <div key={r.label} className="flex flex-col gap-1">
            <h3 className="text-[1.05rem]">{r.label}</h3>
            <RecitationBlock r={r.r} />
            <p className="text-[0.82rem] font-bold text-gold">{r.src}</p>
          </div>
        ))}
      </Part>
      <Part n={3} title="Benefits">
        <Triple rows={[{ label: "Spiritual", text: l.benefits.spiritual }, { label: "Health", text: l.benefits.health }, { label: "Social", text: l.benefits.social }]} />
        {l.benefits.health && <p className="text-[0.82rem] text-fg-muted">Health points are general health knowledge, not hadith.</p>}
        {rewards?.map((b, i) => <BlockView key={i} b={b} />)}
      </Part>
      <Part n={4} title="What we lose by neglecting it">
        <Triple rows={[{ label: "Spiritual", text: l.lose.spiritual }, { label: "Health", text: l.lose.health }, { label: "Social", text: l.lose.social }]} />
      </Part>
      <Part n={5} title="Practice">
        <div className="rounded-xl bg-emerald-soft px-4 py-3"><b className="text-emerald">Challenge:</b> {l.practice.challenge}</div>
        <div className="rounded-xl bg-bg-inset px-4 py-3"><b>Reflect privately:</b> {l.practice.reflection}</div>
        <p className="text-[0.85rem] text-fg-muted">Challenges are between you and Allah, so they earn no points.</p>
      </Part>
      {l.quiz && l.quiz.length > 0 && (
        <section className="card flex flex-wrap items-center justify-between gap-3 border-l-[3px] border-l-gold-bright">
          <div className="flex flex-col gap-0.5">
            <span className="eyebrow">Lesson quiz</span>
            <b className="font-display text-[1.1rem]">{l.quiz.length} questions on this lesson</b>
            <span className="text-[0.9rem] text-fg-muted">10 points for each first correct answer, 30 for a perfect round.</span>
          </div>
          <Link className="btn" href={`/quiz/adab-${l.id}`}>Take the quiz</Link>
        </section>
      )}
    </>
  );
}

function FinishBar({ id, next, back }: { id: string; next: string | null; back: string }) {
  const { studied, markStudied } = useProgress();
  const done = !!studied[id];
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <button type="button" className="btn btn-gold" disabled={done} onClick={() => markStudied(id, "lesson read", POINTS.lessonRead)}>
        {done ? "Read ✓" : `Mark as read · +${POINTS.lessonRead}`}
      </button>
      <Link className="btn btn-ghost" href={next ?? back}>{next ? "Next lesson" : "Back to the world"}</Link>
    </div>
  );
}
