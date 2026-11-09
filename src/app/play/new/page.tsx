"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { loadBank, pickQuestions, shuffleOptions, type BankQuestion, type BankWorld } from "@/lib/quiz-bank";
import { Shape, TILE } from "../ui";

type Q = { q: string; options: string[]; answer: number; why?: string; src?: string; key?: string; custom?: boolean };

const input = "w-full rounded-btn border border-border bg-bg-surface px-3 py-2.5 text-[1rem] outline-none focus:border-emerald";

export default function NewGame() {
  const { t, lang } = useT();
  const router = useRouter();
  const { user, ready, call } = useAccount();
  const [bank, setBank] = useState<BankWorld[] | null>(null);
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState<"LIVE" | "CHALLENGE">("LIVE");
  const [source, setSource] = useState<"random" | "topics">("random");
  const [picked, setPicked] = useState<Set<string>>(new Set()); // "world/lesson"
  const [open, setOpen] = useState<string | null>(null);
  const [count, setCount] = useState(10);
  const [seconds, setSeconds] = useState(20);
  const [hours, setHours] = useState(72);
  const [shuffleAns, setShuffleAns] = useState(true);
  const [questions, setQuestions] = useState<Q[]>([]);
  const [adding, setAdding] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => { setBank(null); loadBank(lang).then(setBank); }, [lang]);
  const [touched, setTouched] = useState(false);
  useEffect(() => { if (!touched) setTitle(t("Family quiz night")); }, [t, touched]);

  const allLessons = useMemo(() => (bank ?? []).flatMap((w) => w.lessons.map((l) => ({ w, l, key: `${w.id}/${l.id}` }))), [bank]);
  const pool = (): BankQuestion[][] => {
    const chosen = source === "random" ? allLessons : allLessons.filter((x) => picked.has(x.key));
    return chosen.map((x) => x.l.questions);
  };
  const available = pool().reduce((n, p) => n + p.length, 0);

  const generate = () => {
    const custom = questions.filter((q) => q.custom);
    const fresh = pickQuestions(pool(), Math.max(0, count - custom.length)).map((q) => ({ q: q.q, options: q.options, answer: q.answer, why: q.why, src: q.src, key: q.key }));
    setQuestions([...fresh, ...custom]);
  };
  const swap = (i: number) => {
    const used = new Set(questions.map((q) => q.key));
    const next = pickQuestions(pool().map((p) => p.filter((q) => !used.has(q.key))), 1)[0];
    if (next) setQuestions((qs) => qs.map((q, k) => k === i ? { q: next.q, options: next.options, answer: next.answer, why: next.why, src: next.src, key: next.key } : q));
  };

  const toggleWorld = (w: BankWorld) => {
    const keys = w.lessons.map((l) => `${w.id}/${l.id}`);
    const all = keys.every((k) => picked.has(k));
    const s = new Set(picked); keys.forEach((k) => all ? s.delete(k) : s.add(k)); setPicked(s);
  };
  const toggleLesson = (k: string) => { const s = new Set(picked); s.has(k) ? s.delete(k) : s.add(k); setPicked(s); };

  const create = async () => {
    setBusy(true); setErr(null);
    const qs = questions.map((q) => shuffleAns ? shuffleOptions(q) : q).map(({ q, options, answer, why, src }) => ({ q, options, answer, why: why || undefined, src: src || undefined }));
    const r = await call<{ pin: string }>("/api/games", "POST", { title: title.trim() || t("Family quiz night"), mode, lang, seconds, hours: mode === "CHALLENGE" ? hours : undefined, questions: qs });
    setBusy(false);
    if (r.ok) router.push(`/play/${r.data.pin}/host`); else setErr(r.data.error ?? t("Something went wrong."));
  };

  if (ready && user?.kind !== "ADULT") {
    return (<><PageHeader eyebrow={t("Quiz Arena")} title={t("Create a quiz")} />
      <Page><section className="card flex flex-col items-start gap-3">
        <p>{user ? t("Ask a parent to host a game. You can join any game with its PIN.") : t("Sign in as a parent to host a game. Players don’t need an account.")}</p>
        <Link href={user ? "/play" : "/account"} className="btn">{user ? t("Join a game") : t("Sign in")}</Link>
      </section></Page></>);
  }

  return (
    <>
      <PageHeader eyebrow={t("Quiz Arena")} title={t("Create a quiz")} sub={t("Pick a mode, choose where the questions come from, then check the list before you start.")} />
      <Page>
        <section className="card flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 font-bold">{t("Quiz name")}
            <input className={input} value={title} maxLength={80} onChange={(e) => { setTitle(e.target.value); setTouched(true); }} />
          </label>
          <div className="flex flex-col gap-2">
            <span className="font-bold">{t("How do you want to play?")}</span>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {([["LIVE", "Live game", "Everyone plays at the same time. You show the questions on a big screen and move on together."],
                ["CHALLENGE", "Challenge", "Share a link. Everyone plays when they can, before the deadline, on one leaderboard."]] as const).map(([m, h, d]) => (
                <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m}
                  className={`flex flex-col gap-1 rounded-xl border-2 p-3.5 text-left ${mode === m ? "border-emerald bg-emerald-soft/40" : "border-border bg-bg-surface"}`}>
                  <span className="font-display text-[1.1rem] font-bold">{t(h)}</span>
                  <span className="text-[0.9rem] text-fg-muted">{t(d)}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Choice label={t("Questions")} value={count} set={setCount} opts={[5, 10, 15, 20, 30].map((n) => [n, String(n)])} />
            <Choice label={t("Time per question")} value={seconds} set={setSeconds} opts={[10, 20, 30, 60].map((n) => [n, t("{n} sec", { n })])} />
            {mode === "CHALLENGE" && <Choice label={t("Open for")} value={hours} set={setHours} opts={[[24, t("1 day")], [72, t("3 days")], [168, t("1 week")]]} />}
          </div>
          <label className="flex items-center gap-2.5 font-semibold">
            <input type="checkbox" checked={shuffleAns} onChange={(e) => setShuffleAns(e.target.checked)} className="h-5 w-5 accent-[rgb(var(--emerald))]" />
            {t("Shuffle the order of answers")}
          </label>
        </section>

        <section className="card flex flex-col gap-3.5">
          <span className="eyebrow">{t("Questions")}</span>
          <div className="seg self-start" role="group" aria-label={t("Where the questions come from")}>
            <button type="button" aria-pressed={source === "random"} onClick={() => setSource("random")}>{t("Surprise me")}</button>
            <button type="button" aria-pressed={source === "topics"} onClick={() => setSource("topics")}>{t("Choose topics")}</button>
          </div>
          {!bank ? <p className="text-fg-muted">{t("Loading the question bank…")}</p> : source === "random" ? (
            <p className="text-fg-muted">{t("Questions are picked at random from every world in Ilm Quest ({n} questions).", { n: available })}</p>
          ) : (
            <div className="flex flex-col gap-2">
              {bank.map((w) => {
                const keys = w.lessons.map((l) => `${w.id}/${l.id}`);
                const n = keys.filter((k) => picked.has(k)).length;
                return (
                  <div key={w.id} className={`rounded-xl border ${n ? "border-emerald" : "border-border"} bg-bg-surface`}>
                    <div className="flex items-center gap-3 px-3 py-2.5">
                      <input type="checkbox" checked={n === keys.length} ref={(el) => { if (el) el.indeterminate = n > 0 && n < keys.length; }}
                        onChange={() => toggleWorld(w)} aria-label={t(w.title)} className="h-5 w-5 shrink-0 accent-[rgb(var(--emerald))]" />
                      <button type="button" className="min-w-0 flex-1 text-left" onClick={() => setOpen(open === w.id ? null : w.id)} aria-expanded={open === w.id}>
                        <span className="block truncate font-bold">{t(w.title)}</span>
                        <span className="text-[0.85rem] text-fg-muted">{n ? t("{n} of {m} lessons", { n, m: keys.length }) : t("{n} questions", { n: w.count })}</span>
                      </button>
                      <button type="button" onClick={() => setOpen(open === w.id ? null : w.id)} className="text-[0.88rem] font-bold text-emerald">{open === w.id ? t("Close") : t("Lessons")}</button>
                    </div>
                    {open === w.id && (
                      <div className="flex flex-wrap gap-2 border-t border-border px-3 py-3">
                        {w.lessons.map((l) => {
                          const k = `${w.id}/${l.id}`;
                          return <button key={k} type="button" aria-pressed={picked.has(k)} onClick={() => toggleLesson(k)}
                            className={`rounded-full border px-3 py-1.5 text-[0.88rem] font-semibold ${picked.has(k) ? "border-emerald bg-emerald text-white" : "border-border bg-bg-surface"}`}>{t(l.title)}</button>;
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              {lang !== "en" && <p className="text-[0.85rem] text-fg-muted">{t("Only worlds already translated into your language are listed.")}</p>}
            </div>
          )}
          <div className="flex flex-wrap gap-2.5">
            <button type="button" className="btn" disabled={!bank || available === 0} onClick={generate}>{questions.length ? t("Pick new questions") : t("Pick questions")}</button>
            <button type="button" className="btn btn-ghost" onClick={() => setAdding(true)}>{t("Write your own question")}</button>
          </div>
          {source === "topics" && bank && available === 0 && <p className="text-[0.9rem] font-bold text-fg-muted">{t("Tick at least one world or lesson.")}</p>}
          {adding && <CustomQuestion onCancel={() => setAdding(false)} onAdd={(q) => { setQuestions((qs) => [...qs, { ...q, custom: true }]); setAdding(false); }} />}
        </section>

        {questions.length > 0 && (
          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">{t("{n} questions", { n: questions.length })}</h2>
            <ol className="flex flex-col gap-2">
              {questions.map((q, i) => (
                <li key={(q.key ?? q.q) + i} className="card flex flex-col gap-2 !p-3.5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-bg-inset text-[0.85rem] font-extrabold">{i + 1}</span>
                    <p className="min-w-0 flex-1 font-semibold">{q.q}</p>
                  </div>
                  <ul className="grid gap-1.5 pl-10 sm:grid-cols-2">
                    {q.options.map((o, k) => (
                      <li key={k} className={`flex items-center gap-2 text-[0.9rem] ${k === q.answer ? "font-bold text-success" : "text-fg-muted"}`}>
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md" style={{ background: TILE[k].bg }}><Shape k={k} size={12} /></span>
                        <span className="min-w-0 break-words">{o}{k === q.answer ? " ✓" : ""}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pl-10 text-[0.88rem] font-bold">
                    {!q.custom && <button type="button" className="text-emerald" onClick={() => swap(i)}>{t("Swap")}</button>}
                    <button type="button" className="text-danger" onClick={() => setQuestions((qs) => qs.filter((_, k) => k !== i))}>{t("Remove")}</button>
                    {q.custom && <span className="chip text-[0.75rem]">{t("Your question")}</span>}
                  </div>
                </li>
              ))}
            </ol>
            {err && <p role="alert" className="rounded-btn bg-danger/10 px-3 py-2 font-bold text-danger">{err}</p>}
            <button type="button" className="btn btn-gold self-start" disabled={busy} onClick={create}>{busy ? t("Creating…") : mode === "LIVE" ? t("Create and open the lobby") : t("Create the challenge")}</button>
          </section>
        )}
      </Page>
    </>
  );
}

function Choice<V extends number>({ label, value, set, opts }: { label: string; value: V; set: (v: V) => void; opts: [V, string][] }) {
  return (
    <label className="flex flex-col gap-1.5 font-bold">{label}
      <select className={input} value={value} onChange={(e) => set(Number(e.target.value) as V)}>
        {opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </label>
  );
}

function CustomQuestion({ onAdd, onCancel }: { onAdd: (q: Q) => void; onCancel: () => void }) {
  const { t } = useT();
  const [q, setQ] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState(0);
  const [why, setWhy] = useState("");
  const filled = options.map((o) => o.trim()).filter(Boolean);
  const valid = q.trim() && filled.length >= 2 && options[answer]?.trim();
  const add = () => {
    // Drop empty answers, keeping track of which one is correct.
    const kept = options.map((o, i) => [o.trim(), i] as const).filter(([o]) => o);
    onAdd({ q: q.trim(), options: kept.map(([o]) => o), answer: kept.findIndex(([, i]) => i === answer), why: why.trim() || undefined });
  };
  return (
    <div className="flex flex-col gap-3 rounded-xl border-2 border-dashed border-border p-3.5">
      <label className="flex flex-col gap-1.5 font-bold">{t("Question")}
        <textarea className={input} rows={2} maxLength={400} value={q} onChange={(e) => setQ(e.target.value)} />
      </label>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1.5 font-bold">{t("Answers (2 to 4). Tap the circle next to the correct one.")}</legend>
        {options.map((o, k) => (
          <div key={k} className="flex items-center gap-2">
            <input type="radio" name="right" checked={answer === k} onChange={() => setAnswer(k)} aria-label={t("Correct answer")} className="h-5 w-5 shrink-0 accent-[rgb(var(--emerald))]" />
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: TILE[k].bg }}><Shape k={k} size={16} /></span>
            <input className={input} maxLength={200} value={o} placeholder={t("Answer {n}", { n: k + 1 })} onChange={(e) => setOptions((os) => os.map((x, i) => i === k ? e.target.value : x))} />
          </div>
        ))}
      </fieldset>
      <label className="flex flex-col gap-1.5 font-bold">{t("Explanation (optional)")}
        <input className={input} maxLength={500} value={why} onChange={(e) => setWhy(e.target.value)} />
      </label>
      <div className="flex gap-2.5">
        <button type="button" className="btn" disabled={!valid} onClick={add}>{t("Add question")}</button>
        <button type="button" className="btn btn-ghost" onClick={onCancel}>{t("Cancel")}</button>
      </div>
    </div>
  );
}
