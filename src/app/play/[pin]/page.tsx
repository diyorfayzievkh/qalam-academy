"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { Avatar } from "@/components/avatars";
import { Sparks } from "@/components/celebrate";
import { useT } from "@/components/lang";
import { useProfile } from "@/components/profile";
import { AnswerTile, clearToken, gameCall, getToken, Leaderboard, Podium, setToken, Timer, useGameState, useNow, type Row } from "../ui";

type Meta = { title: string; mode: "LIVE" | "CHALLENGE"; state: string; host: string; players: number; total: number; seconds: number; endsAt: string | null };
type OpenQ = { q: string; options: string[]; openAt: number; closeAt?: number };
type State = {
  now: number; kicked?: boolean; title: string; mode: "LIVE" | "CHALLENGE"; state: "LOBBY" | "QUESTION" | "REVEAL" | "FINISHED";
  current: number; total: number; seconds: number; endsAt: string | null; players: number;
  lobby?: { id: string; nickname: string; avatar: string | null }[];
  question?: OpenQ; answered?: number;
  reveal?: { answer: number; why: string; src: string; counts: number[] };
  leaderboard?: Row[];
  me?: {
    nickname: string; score: number; streak: number; rank: number;
    answered?: number | null; result?: { correct: boolean; points: number; missed?: boolean } | null;
    index?: number; done?: boolean; question?: OpenQ | null;
  };
};

export default function PlayerPage() {
  const { pin } = useParams<{ pin: string }>();
  const { t } = useT();
  const [meta, setMeta] = useState<Meta | null>(null);
  const [metaErr, setMetaErr] = useState<string | null>(null);
  const [token, setTok] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTok(getToken(pin)); setChecked(true);
    gameCall<Meta>(`/api/games/${pin}`).then((r) => r.ok ? setMeta(r.data) : setMetaErr(r.data.error ?? t("No game found with that PIN.")));
  }, [pin, t]);

  const { state, error, offset, reload } = useGameState<State>(pin, token, Boolean(token));
  // The saved token no longer works (game deleted or we were never in it): join again.
  useEffect(() => { if (error?.status === 403 && token) { clearToken(pin); setTok(null); } }, [error, token, pin]);

  const title = state?.title ?? meta?.title ?? t("Quiz Arena");
  return (
    <>
      <PageHeader eyebrow={`${t("Quiz Arena")} · PIN ${pin}`} title={title} sub={meta ? `${meta.mode === "LIVE" ? t("Live game") : t("Challenge")} · ${t("Hosted by {name}", { name: meta.host })} · ${t("{n} questions", { n: meta.total })}` : undefined} />
      <Page>
        {metaErr ? (
          <section className="card flex flex-col items-start gap-3">
            <p className="font-bold">{t(metaErr)}</p>
            <Link href="/play" className="btn">{t("Try another PIN")}</Link>
          </section>
        ) : !checked || !meta ? (
          <p className="text-fg-muted">{t("Loading…")}</p>
        ) : !token ? (
          meta.state === "FINISHED" ? <section className="card"><p className="font-bold">{t("This game has finished.")}</p></section>
            : <JoinForm pin={pin} onJoined={(tok) => { setToken(pin, tok); setTok(tok); }} />
        ) : !state ? (
          <p className="text-fg-muted">{t("Connecting…")}</p>
        ) : state.kicked ? (
          <section className="card"><p className="font-bold">{t("The host removed you from this game.")}</p></section>
        ) : state.mode === "LIVE" ? <Live s={state} pin={pin} token={token} offset={offset} /> : <Challenge s={state} pin={pin} token={token} offset={offset} reload={reload} />}
      </Page>
    </>
  );
}

function JoinForm({ pin, onJoined }: { pin: string; onJoined: (token: string) => void }) {
  const { t } = useT();
  const profile = useProfile();
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => { if (profile.name && !name) setName(profile.name.slice(0, 24)); }, [profile.name, name]);
  const submit = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true); setErr(null);
    const r = await gameCall<{ token: string }>(`/api/games/${pin}/join`, "POST", { nickname: name, avatar: profile.avatar ?? null });
    setBusy(false);
    if (r.ok) onJoined(r.data.token); else setErr(r.data.error ?? t("Something went wrong."));
  };
  return (
    <form onSubmit={submit} className="card mx-auto flex w-full max-w-[460px] flex-col gap-3.5">
      <div className="flex items-center gap-3"><Avatar id={profile.avatar} name={name} size={52} /><h2 className="text-[1.3rem]">{t("Choose your nickname")}</h2></div>
      <input value={name} onChange={(e) => setName(e.target.value)} maxLength={24} required autoFocus
        className="w-full rounded-btn border-2 border-border bg-bg-surface px-4 py-3 text-[1.2rem] font-bold outline-none focus:border-emerald" aria-label={t("Nickname")} />
      <p className="text-[0.88rem] text-fg-muted">{t("Other players will see this name on the leaderboard. Please keep it kind.")}</p>
      {err && <p role="alert" className="font-bold text-danger">{t(err)}</p>}
      <button type="submit" className="btn btn-gold" disabled={busy || !name.trim()}>{busy ? t("Joining…") : t("Join the game")}</button>
    </form>
  );
}

function ScoreBar({ me }: { me: NonNullable<State["me"]> }) {
  const { t } = useT();
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-band px-4 py-2.5 text-band-fg">
      <span className="truncate font-bold">{me.nickname}</span>
      <span className="flex items-center gap-3 text-[0.92rem]">
        {me.streak >= 2 && <span className="chip !bg-gold-bright !text-band">🔥 {me.streak}</span>}
        <span>{t("Rank {n}", { n: me.rank })}</span>
        <span className="font-display text-[1.15rem] font-bold tabular-nums text-gold-bright">{me.score.toLocaleString()}</span>
      </span>
    </div>
  );
}

// ---------------------------------------------------------------- live
function Live({ s, pin, token, offset }: { s: State; pin: string; token: string; offset: number }) {
  const { t } = useT();
  const now = useNow(200) + offset;
  const [sent, setSent] = useState<{ q: number; choice: number } | null>(null);
  const me = s.me!;
  const myChoice = me.answered ?? (sent?.q === s.current ? sent.choice : null);
  const answer = async (k: number) => {
    if (myChoice !== null) return;
    setSent({ q: s.current, choice: k });
    await gameCall(`/api/games/${pin}/answer`, "POST", { q: s.current, choice: k }, token);
  };

  if (s.state === "LOBBY") {
    return (
      <section className="card flex flex-col items-center gap-3 py-8 text-center">
        <span className="glow-pulse grid h-16 w-16 place-items-center rounded-full bg-emerald-soft text-[1.8rem]">✓</span>
        <h2 className="text-[1.5rem]">{t("You’re in!")}</h2>
        <p className="text-fg-muted">{t("Waiting for the host to start. {n} players have joined.", { n: s.players })}</p>
        <p className="font-display text-[1.2rem] font-bold">{me.nickname}</p>
      </section>
    );
  }
  if (s.state === "FINISHED") return <Final s={s} />;

  const q = s.question!;
  const lead = q.openAt - now > 0;
  const n = `${t("Question {i} of {n}", { i: s.current + 1, n: s.total })}`;
  return (
    <div className="flex flex-col gap-3.5">
      <ScoreBar me={me} />
      <section className="card flex flex-col gap-3.5">
        <span className="eyebrow">{n}</span>
        <p className="font-display text-[1.35rem] font-semibold">{q.q}</p>
        {s.state === "QUESTION" && (lead ? (
          <p className="pop-in text-center font-display text-[2.4rem] font-bold text-gold">{Math.ceil((q.openAt - now) / 1000)}</p>
        ) : <Timer openAt={q.openAt} closeAt={q.closeAt!} offset={offset} />)}
      </section>
      {s.state === "QUESTION" && !lead && (
        myChoice === null ? (
          <div className="grid gap-2.5 sm:grid-cols-2">
            {q.options.map((o, k) => <AnswerTile key={k} k={k} text={o} onClick={() => answer(k)} />)}
          </div>
        ) : (
          <section className="card flex flex-col items-center gap-2 text-center">
            <AnswerTile k={myChoice} text={q.options[myChoice]} disabled state="picked" />
            <p className="font-bold">{t("Answer locked in!")}</p>
            <p className="text-fg-muted">{t("{a} of {n} players have answered.", { a: s.answered ?? 0, n: s.players })}</p>
          </section>
        )
      )}
      {s.state === "REVEAL" && s.reveal && <Reveal s={s} myChoice={myChoice} />}
    </div>
  );
}

function Reveal({ s, myChoice }: { s: State; myChoice: number | null }) {
  const { t } = useT();
  const r = s.me?.result;
  const q = s.question!;
  return (
    <>
      <section className={`card relative flex flex-col items-center gap-1.5 overflow-hidden text-center ${r?.correct ? "!border-success" : "!border-danger"}`}>
        {r?.correct && <Sparks />}
        <p className={`pop-in font-display text-[1.7rem] font-bold ${r?.correct ? "text-success" : "text-danger"}`}>
          {r?.correct ? t("Correct!") : r?.missed ? t("Time’s up!") : t("Not this time")}
        </p>
        {r?.correct && <p className="points-pop font-display text-[1.4rem] font-bold text-gold">+{r.points}</p>}
        <p className="text-fg-muted">{t("You are in place {n}.", { n: s.me!.rank })}</p>
      </section>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {q.options.map((o, k) => (
          <AnswerTile key={k} k={k} text={`${o} · ${s.reveal!.counts[k] ?? 0}`} disabled
            state={k === s.reveal!.answer ? "right" : k === myChoice ? "picked" : "dim"} />
        ))}
      </div>
      {s.reveal!.why && <p className="card !py-3 text-[0.95rem]"><b>{t("Why:")}</b> {s.reveal!.why}</p>}
      {s.leaderboard && <Leaderboard rows={s.leaderboard} meName={s.me?.nickname} title={t("Top players")} />}
      <p className="text-center text-[0.9rem] text-fg-muted">{t("Waiting for the host to continue…")}</p>
    </>
  );
}

function Final({ s }: { s: State }) {
  const { t } = useT();
  const rows = s.leaderboard ?? [];
  const me = s.me;
  return (
    <div className="flex flex-col gap-4">
      <section className="card relative flex flex-col items-center gap-2 overflow-hidden text-center">
        {me && me.rank <= 3 && <Sparks count={24} />}
        <span className="eyebrow">{t("Game over")}</span>
        <Podium rows={rows} />
        {me && <p className="font-display text-[1.25rem] font-bold">{t("You finished in place {n} with {p} points.", { n: me.rank, p: me.score.toLocaleString() })}</p>}
        <p className="text-fg-muted">{t("Bārak Allāhu fīkum! Thank you for playing.")}</p>
      </section>
      <Leaderboard rows={rows} meName={me?.nickname} title={t("Final leaderboard")} />
      <Link href="/play" className="btn self-start">{t("Back to Quiz Arena")}</Link>
    </div>
  );
}

// ---------------------------------------------------------------- challenge
type Result = { correct: boolean; points: number; score: number; streak: number; answer: number; why: string; late: boolean };

function Challenge({ s, pin, token, offset, reload }: { s: State; pin: string; token: string; offset: number; reload: () => Promise<void> }) {
  const { t } = useT();
  const me = s.me!;
  const [result, setResult] = useState<(Result & { q: OpenQ; choice: number; index: number }) | null>(null);
  const [opening, setOpening] = useState(false);
  const sending = useRef(false);
  const now = useNow(250) + offset;
  const q = result ? null : me.question;
  const closeAt = q ? q.openAt + s.seconds * 1000 : 0;

  const submit = async (choice: number) => {
    if (!q || sending.current) return;
    sending.current = true;
    const index = me.index ?? 0;
    const r = await gameCall<Result>(`/api/games/${pin}/answer`, "POST", { q: index, choice }, token);
    sending.current = false;
    if (r.ok) setResult({ ...r.data, q, choice, index });
    await reload();
  };
  // Show the next question; its timer starts on the server now.
  const next = async () => {
    setOpening(true);
    await gameCall(`/api/games/${pin}/state?start=1`, "GET", undefined, token);
    setResult(null);
    await reload();
    setOpening(false);
  };
  // Time ran out: send an empty answer so the game moves on.
  useEffect(() => { if (q && now > closeAt + 600) submit(-1); }); // eslint-disable-line react-hooks/exhaustive-deps

  if (result) {
    const last = result.index + 1 >= s.total;
    return (
      <div className="flex flex-col gap-3.5">
        <section className={`card relative flex flex-col items-center gap-1.5 overflow-hidden text-center ${result.correct ? "!border-success" : "!border-danger"}`}>
          {result.correct && <Sparks />}
          <p className={`pop-in font-display text-[1.6rem] font-bold ${result.correct ? "text-success" : "text-danger"}`}>{result.correct ? t("Correct!") : result.late ? t("Time’s up!") : t("Not this time")}</p>
          {result.correct && <p className="points-pop font-display text-[1.3rem] font-bold text-gold">+{result.points}</p>}
          <p className="text-fg-muted">{t("Score: {p}", { p: result.score.toLocaleString() })}</p>
        </section>
        <p className="font-semibold">{result.q.q}</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {result.q.options.map((o, k) => <AnswerTile key={k} k={k} text={o} disabled state={k === result.answer ? "right" : k === result.choice ? "picked" : "dim"} />)}
        </div>
        {result.why && <p className="card !py-3 text-[0.95rem]"><b>{t("Why:")}</b> {result.why}</p>}
        <button type="button" className="btn self-start" disabled={opening} onClick={() => last ? setResult(null) : next()}>
          {last ? t("See the leaderboard") : t("Next question")}
        </button>
      </div>
    );
  }

  if (s.state === "FINISHED" || me.done) {
    return (
      <div className="flex flex-col gap-4">
        <section className="card flex flex-col items-center gap-2 text-center">
          <span className="eyebrow">{s.state === "FINISHED" ? t("Challenge over") : t("All done!")}</span>
          {s.state === "FINISHED" && <Podium rows={s.leaderboard ?? []} />}
          <p className="font-display text-[1.6rem] font-bold">{t("{p} points", { p: me.score.toLocaleString() })}</p>
          <p className="text-fg-muted">{t("You are in place {n}.", { n: me.rank })}{s.state !== "FINISHED" && s.endsAt ? ` ${t("The challenge is open until {d}.", { d: new Date(s.endsAt).toLocaleString() })}` : ""}</p>
        </section>
        <Leaderboard rows={s.leaderboard ?? []} meName={me.nickname} title={t("Leaderboard")} showFinished={s.state !== "FINISHED"} />
        <Link href="/play" className="btn self-start">{t("Back to Quiz Arena")}</Link>
      </div>
    );
  }

  if (!q) {
    const first = (me.index ?? 0) === 0;
    return (
      <section className="card flex flex-col items-start gap-3">
        <h2 className="text-[1.3rem]">{first ? t("Ready, {name}?", { name: me.nickname }) : t("Question {i} of {n}", { i: (me.index ?? 0) + 1, n: s.total })}</h2>
        {first && <p className="text-fg-muted">{t("{n} questions, {s} seconds each. Answer fast: quicker correct answers earn more points.", { n: s.total, s: s.seconds })}</p>}
        <button type="button" className="btn btn-gold" disabled={opening} onClick={next}>{first ? t("Start") : t("Next question")}</button>
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-3.5">
      <ScoreBar me={me} />
      <section className="card flex flex-col gap-3.5">
        <span className="eyebrow">{t("Question {i} of {n}", { i: (me.index ?? 0) + 1, n: s.total })}</span>
        <p className="font-display text-[1.35rem] font-semibold">{q.q}</p>
        <Timer openAt={q.openAt} closeAt={closeAt} offset={offset} />
      </section>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {q.options.map((o, k) => <AnswerTile key={k} k={k} text={o} onClick={() => submit(k)} />)}
      </div>
    </div>
  );
}
