"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { Shape } from "./ui";

type Mine = { pin: string; title: string; mode: "LIVE" | "CHALLENGE"; state: string; createdAt: string; endsAt: string | null; total: number; players: number };
type Invite = { pin: string; title: string; mode: "LIVE" | "CHALLENGE"; state: string; endsAt: string | null; host: string; total: number };

export default function PlayHub() {
  const { t } = useT();
  const router = useRouter();
  const { user, ready, available, call } = useAccount();
  const [pin, setPin] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [mine, setMine] = useState<Mine[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  useEffect(() => {
    if (!user) return;
    call<{ mine: Mine[]; invites: Invite[] }>("/api/games").then((r) => { if (r.ok) { setMine(r.data.mine); setInvites(r.data.invites); } });
  }, [user, call]);

  const join = (e: FormEvent) => {
    e.preventDefault();
    const p = pin.replace(/\D/g, "");
    if (p.length !== 6) { setErr(t("A game PIN has 6 digits.")); return; }
    router.push(`/play/${p}`);
  };

  return (
    <>
      <PageHeader eyebrow={t("Quiz Arena")} title={t("Play together")} sub={t("Host a live quiz for your family or class, or send a challenge to friends. Everyone joins with a PIN, no account needed.")} />
      <Page>
        <div className="grid gap-4 md:grid-cols-2">
          <form onSubmit={join} className="card flex flex-col gap-3">
            <span className="eyebrow">{t("Join a game")}</span>
            <h2 className="text-[1.3rem]">{t("Enter the game PIN")}</h2>
            <input value={pin} onChange={(e) => { setPin(e.target.value.replace(/\D/g, "").slice(0, 6)); setErr(null); }}
              inputMode="numeric" autoComplete="off" placeholder="123456" aria-label={t("Game PIN")}
              className="w-full rounded-btn border-2 border-border bg-bg-surface px-4 py-3 text-center font-display text-[2rem] font-bold tracking-[0.3em] outline-none focus:border-emerald" />
            {err && <p role="alert" className="text-[0.92rem] font-bold text-danger">{err}</p>}
            <button type="submit" className="btn">{t("Join")}</button>
          </form>

          <section className="card flex flex-col gap-3">
            <span className="eyebrow">{t("Host a game")}</span>
            <h2 className="text-[1.3rem]">{t("Create a quiz")}</h2>
            <div className="flex gap-2" aria-hidden="true">{[0, 1, 2, 3].map((k) => <span key={k} className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: ["#C4533D", "#2E6DB4", "#C99317", "#1E8257"][k] }}><Shape k={k} /></span>)}</div>
            <p className="text-fg-muted">{t("Let the app pick questions at random, choose the worlds and lessons yourself, or write your own.")}</p>
            {!ready ? null : user?.kind === "ADULT" ? (
              <Link href="/play/new" className="btn btn-gold self-start">{t("Create a quiz")}</Link>
            ) : user ? (
              <p className="text-[0.92rem] font-bold text-fg-muted">{t("Ask a parent to host a game. You can join any game with its PIN.")}</p>
            ) : available ? (
              <Link href="/account" className="btn btn-ghost self-start">{t("Sign in to host")}</Link>
            ) : (
              <p className="text-[0.92rem] text-fg-muted">{t("Hosting needs accounts, which are not set up on this server yet.")}</p>
            )}
          </section>
        </div>

        {invites.length > 0 && (
          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">{t("Games in your family")}</h2>
            {invites.map((g) => (
              <Link key={g.pin} href={`/play/${g.pin}`} className="card lift flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-bold">{g.title}</p>
                  <p className="text-[0.88rem] text-fg-muted">{t("Hosted by {name}", { name: g.host })} · {g.mode === "LIVE" ? t("Live") : t("Challenge")} · {t("{n} questions", { n: g.total })}</p>
                </div>
                <span className="btn shrink-0">{t("Join")}</span>
              </Link>
            ))}
          </section>
        )}

        {mine.length > 0 && (
          <section className="flex flex-col gap-2.5">
            <h2 className="text-[1.2rem]">{t("Your games")}</h2>
            {mine.map((g) => (
              <Link key={g.pin} href={`/play/${g.pin}/host`} className="card lift flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-bold">{g.title}</p>
                  <p className="text-[0.88rem] text-fg-muted">
                    PIN {g.pin} · {g.mode === "LIVE" ? t("Live") : t("Challenge")} · {(g.players === 1 ? t("1 player") : t("{n} players", { n: g.players }))}
                  </p>
                </div>
                <span className={`chip shrink-0 ${g.state === "FINISHED" ? "" : "chip-fard"}`}>{g.state === "FINISHED" ? t("Finished") : g.state === "LOBBY" ? t("Waiting") : t("Open")}</span>
              </Link>
            ))}
          </section>
        )}
      </Page>
    </>
  );
}
