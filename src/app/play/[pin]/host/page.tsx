"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { Avatar } from "@/components/avatars";
import { useT } from "@/components/lang";
import { AnswerTile, gameCall, Leaderboard, Podium, Shape, TILE, Timer, useGameState, useNow, type Row } from "../../ui";

type State = {
  now: number; isHost: boolean; title: string; mode: "LIVE" | "CHALLENGE"; state: "LOBBY" | "QUESTION" | "REVEAL" | "FINISHED";
  current: number; total: number; seconds: number; endsAt: string | null; players: number;
  lobby?: { id: string; nickname: string; avatar: string | null }[];
  question?: { q: string; options: string[]; openAt: number; closeAt: number }; answered?: number;
  reveal?: { answer: number; why: string; src: string; counts: number[] };
  leaderboard?: Row[];
};

export default function HostPage() {
  const { pin } = useParams<{ pin: string }>();
  const { t } = useT();
  const { user, ready } = useAccount();
  const { state: s, error, offset, reload } = useGameState<State>(pin, null, ready && Boolean(user));
  const [busy, setBusy] = useState(false);
  const act = async (action: string, playerId?: string) => {
    setBusy(true);
    await gameCall(`/api/games/${pin}/host`, "POST", { action, playerId });
    await reload();
    setBusy(false);
  };

  if (ready && !user) return <Shell pin={pin}><section className="card"><p>{t("Sign in to host this game.")}</p><Link href="/account" className="btn mt-3">{t("Sign in")}</Link></section></Shell>;
  if (error) return <Shell pin={pin}><section className="card"><p className="font-bold">{t(error.msg)}</p><Link href="/play" className="btn mt-3">{t("Back to Quiz Arena")}</Link></section></Shell>;
  if (!s) return <Shell pin={pin}><p className="text-fg-muted">{t("Loading…")}</p></Shell>;
  if (!s.isHost) return <Shell pin={pin}><section className="card"><p>{t("Only the host can open this screen.")}</p><Link href={`/play/${pin}`} className="btn mt-3">{t("Join as a player")}</Link></section></Shell>;

  return (
    <Shell pin={pin} title={s.title}>
      {s.mode === "CHALLENGE" ? <ChallengeHost s={s} pin={pin} busy={busy} act={act} />
        : s.state === "LOBBY" ? <Lobby s={s} pin={pin} busy={busy} act={act} />
        : s.state === "FINISHED" ? <Finished s={s} />
        : <LiveQuestion s={s} offset={offset} busy={busy} act={act} />}
    </Shell>
  );
}

function Shell({ pin, title, children }: { pin: string; title?: string; children: React.ReactNode }) {
  const { t } = useT();
  return (<><PageHeader eyebrow={`${t("Quiz Arena")} · ${t("Host")} · PIN ${pin}`} title={title ?? t("Quiz Arena")} /><Page>{children}</Page></>);
}

function useJoinLink(pin: string) {
  const [link, setLink] = useState("");
  const [qr, setQr] = useState("");
  useEffect(() => {
    const l = `${window.location.origin}/play/${pin}`;
    setLink(l);
    QRCode.toString(l, { type: "svg", margin: 1, color: { dark: "#0D2B22", light: "#FFFFFF" } }).then(setQr).catch(() => {});
  }, [pin]);
  return { link, qr };
}

function Share({ pin, big }: { pin: string; big?: boolean }) {
  const { t } = useT();
  const { link, qr } = useJoinLink(pin);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };
  const msg = encodeURIComponent(`${t("Join my quiz on Qalam Academy! Game PIN: {pin}", { pin })} ${link}`);
  return (
    <section className="card flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
      {qr && <div className="w-[150px] shrink-0 overflow-hidden rounded-xl bg-white p-1.5" dangerouslySetInnerHTML={{ __html: qr }} aria-label={t("QR code to join")} role="img" />}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <span className="eyebrow">{t("Join at {site} with the PIN", { site: link ? new URL(link).host + "/play" : "" })}</span>
        <p className={`font-display font-bold tracking-[0.18em] tabular-nums ${big ? "text-[3.4rem] leading-none" : "text-[2.4rem] leading-none"}`}>{pin.slice(0, 3)} {pin.slice(3)}</p>
        <p className="break-all text-[0.88rem] text-fg-muted">{link}</p>
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          <button type="button" className="btn btn-ghost !py-2" onClick={copy}>{copied ? t("Copied!") : t("Copy link")}</button>
          <a className="btn btn-ghost !py-2" href={`https://wa.me/?text=${msg}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn btn-ghost !py-2" href={`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${msg}`} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </section>
  );
}

type Act = (action: string, playerId?: string) => Promise<void>;

function Lobby({ s, pin, busy, act }: { s: State; pin: string; busy: boolean; act: Act }) {
  const { t } = useT();
  const players = s.lobby ?? [];
  return (
    <div className="flex flex-col gap-4">
      <Share pin={pin} big />
      <section className="card flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[1.25rem]">{(players.length === 1 ? t("1 player") : t("{n} players", { n: players.length }))}</h2>
          <div className="flex gap-2">
            <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => act("end")}>{t("Cancel game")}</button>
            <button type="button" className="btn btn-gold" disabled={busy || players.length === 0} onClick={() => act("start")}>{t("Start the game")}</button>
          </div>
        </div>
        {players.length === 0 ? <p className="text-fg-muted">{t("Waiting for players to join…")}</p> : (
          <ul className="flex flex-wrap gap-2">
            {players.map((p) => (
              <li key={p.id} className="pop-in flex items-center gap-2 rounded-full border border-border bg-bg-surface py-1 pl-1 pr-2">
                <Avatar id={p.avatar} name={p.nickname} size={30} />
                <span className="font-bold">{p.nickname}</span>
                <button type="button" onClick={() => act("kick", p.id)} aria-label={t("Remove {name}", { name: p.nickname })} className="grid h-6 w-6 place-items-center rounded-full text-fg-muted hover:bg-danger-soft hover:text-danger">×</button>
              </li>
            ))}
          </ul>
        )}
        <p className="text-[0.88rem] text-fg-muted">{t("Tip: show this screen on a TV or laptop. Players answer on their own phones.")}</p>
      </section>
    </div>
  );
}

function LiveQuestion({ s, offset, busy, act }: { s: State; offset: number; busy: boolean; act: Act }) {
  const { t } = useT();
  const now = useNow(200) + offset;
  const q = s.question!;
  const lead = s.state === "QUESTION" && q.openAt > now;
  const last = s.current + 1 >= s.total;
  const max = Math.max(1, ...(s.reveal?.counts ?? [1]));
  return (
    <div className="flex flex-col gap-4">
      <section className="card flex flex-col gap-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="eyebrow">{t("Question {i} of {n}", { i: s.current + 1, n: s.total })}</span>
          <span className="chip">{t("{a} of {n} answered", { a: s.answered ?? 0, n: s.players })}</span>
        </div>
        <p className="font-display text-[1.6rem] font-semibold leading-snug sm:text-[2rem]">{q.q}</p>
        {s.state === "QUESTION" && (lead
          ? <p className="pop-in text-center font-display text-[3rem] font-bold text-gold">{Math.ceil((q.openAt - now) / 1000)}</p>
          : <Timer openAt={q.openAt} closeAt={q.closeAt} offset={offset} />)}
      </section>

      {s.state === "REVEAL" && s.reveal ? (
        <section className="card flex items-end justify-center gap-3 !pb-3" aria-label={t("How everyone answered")}>
          {q.options.map((_, k) => (
            <div key={k} className="flex w-16 flex-col items-center gap-1.5">
              <span className="font-display text-[1.2rem] font-bold">{s.reveal!.counts[k] ?? 0}</span>
              <div className="w-full rounded-t-lg transition-[height] duration-700" style={{ background: TILE[k].bg, height: 12 + 110 * ((s.reveal!.counts[k] ?? 0) / max), opacity: k === s.reveal!.answer ? 1 : 0.4 }} />
              <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: TILE[k].bg }}>{k === s.reveal!.answer ? <span className="font-extrabold text-white">✓</span> : <Shape k={k} size={16} />}</span>
            </div>
          ))}
        </section>
      ) : null}

      <div className="grid gap-2.5 sm:grid-cols-2">
        {q.options.map((o, k) => <AnswerTile key={k} k={k} text={o} disabled state={s.state === "REVEAL" ? (k === s.reveal?.answer ? "right" : "dim") : undefined} />)}
      </div>

      {s.state === "REVEAL" && s.reveal?.why && <p className="card !py-3"><b>{t("Why:")}</b> {s.reveal.why}{s.reveal.src ? <span className="text-fg-muted"> ({s.reveal.src})</span> : null}</p>}
      {s.state === "REVEAL" && s.leaderboard && <Leaderboard rows={s.leaderboard} title={t("Top players")} />}

      <div className="flex flex-wrap gap-2.5">
        {s.state === "QUESTION"
          ? <button type="button" className="btn" disabled={busy || lead} onClick={() => act("reveal")}>{t("Show the answer now")}</button>
          : <button type="button" className="btn btn-gold" disabled={busy} onClick={() => act("next")}>{last ? t("See the winners") : t("Next question")}</button>}
        <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => act("end")}>{t("End game")}</button>
      </div>
    </div>
  );
}

function Finished({ s }: { s: State }) {
  const { t } = useT();
  const rows = s.leaderboard ?? [];
  return (
    <div className="flex flex-col gap-4">
      <section className="card flex flex-col items-center gap-2 text-center">
        <span className="eyebrow">{t("Game over")}</span>
        <h2 className="text-[1.6rem]">{rows[0] ? t("{name} wins!", { name: rows[0].nickname }) : t("No one played this time.")}</h2>
        <Podium rows={rows} />
      </section>
      <Leaderboard rows={rows} title={t("Final leaderboard")} />
      <div className="flex flex-wrap gap-2.5">
        <Link href="/play/new" className="btn btn-gold">{t("Create another quiz")}</Link>
        <Link href="/play" className="btn btn-ghost">{t("Back to Quiz Arena")}</Link>
      </div>
    </div>
  );
}

function ChallengeHost({ s, pin, busy, act }: { s: State; pin: string; busy: boolean; act: Act }) {
  const { t } = useT();
  const done = s.state === "FINISHED";
  return (
    <div className="flex flex-col gap-4">
      {!done && <Share pin={pin} />}
      <section className="card flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[1.25rem]">{done ? t("Challenge over") : t("Challenge is open")}</h2>
            <p className="text-[0.9rem] text-fg-muted">
              {(s.players === 1 ? t("1 player") : t("{n} players", { n: s.players }))} · {t("{n} questions", { n: s.total })}
              {!done && s.endsAt ? ` · ${t("Open until {d}", { d: new Date(s.endsAt).toLocaleString() })}` : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={`/play/${pin}`} className="btn btn-ghost">{t("Play it yourself")}</Link>
            {!done && <button type="button" className="btn btn-ghost" disabled={busy} onClick={() => act("end")}>{t("End now")}</button>}
          </div>
        </div>
        {done && <Podium rows={s.leaderboard ?? []} />}
        <Leaderboard rows={s.leaderboard ?? []} title={t("Leaderboard")} showFinished={!done} />
      </section>
    </div>
  );
}
