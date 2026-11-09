"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Avatar } from "@/components/avatars";
import { useT } from "@/components/lang";

// Shared pieces for quiz games: answer tiles, timer, leaderboard, polling.

export const TILE = [
  { bg: "#C4533D", shape: "triangle", label: "Red triangle" },
  { bg: "#2E6DB4", shape: "diamond", label: "Blue diamond" },
  { bg: "#C99317", shape: "circle", label: "Gold circle" },
  { bg: "#1E8257", shape: "square", label: "Green square" },
] as const;

export function Shape({ k, size = 22 }: { k: number; size?: number }) {
  const s = TILE[k]?.shape;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
      {s === "triangle" && <path d="M12 3.5 21.5 20h-19z" strokeLinejoin="round" stroke="#fff" strokeWidth={1.5} />}
      {s === "diamond" && <path d="M12 2.5 21.5 12 12 21.5 2.5 12z" strokeLinejoin="round" stroke="#fff" strokeWidth={1.5} />}
      {s === "circle" && <circle cx="12" cy="12" r="9.5" />}
      {s === "square" && <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />}
    </svg>
  );
}

/** A coloured answer tile. `state` dims or marks it after the reveal. */
export function AnswerTile({ k, text, onClick, disabled, state, big }: {
  k: number; text?: string; onClick?: () => void; disabled?: boolean; state?: "right" | "wrong" | "dim" | "picked"; big?: boolean;
}) {
  const { t } = useT();
  return (
    <button type="button" data-tile={k} onClick={onClick} disabled={disabled} aria-label={text ?? t(TILE[k].label)}
      style={{ background: TILE[k].bg }}
      className={`relative flex items-center gap-3 rounded-2xl px-4 text-left font-bold text-white shadow-[0_4px_0_rgba(0,0,0,0.18)] transition
        ${big ? "min-h-[120px] justify-center text-[1.1rem] sm:min-h-[140px]" : "min-h-[64px] py-3 text-[1.02rem]"}
        ${state === "dim" ? "opacity-35" : ""} ${state === "picked" ? "ring-4 ring-gold-bright ring-offset-2 ring-offset-bg" : ""}
        enabled:active:translate-y-[2px] enabled:hover:brightness-110 disabled:cursor-default`}>
      <Shape k={k} size={big ? 44 : 24} />
      {text && <span className="min-w-0 flex-1 break-words">{text}</span>}
      {state === "right" && <span className="absolute right-3 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[0.8rem] font-extrabold text-[#1E8257]">✓</span>}
    </button>
  );
}

/** Shrinking timer bar plus seconds left. */
export function Timer({ openAt, closeAt, offset }: { openAt: number; closeAt: number; offset: number }) {
  const now = useNow(200) + offset;
  const total = closeAt - openAt;
  const left = Math.max(0, closeAt - Math.max(now, openAt));
  return (
    <div className="flex items-center gap-3" role="timer" aria-live="off">
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-bg-inset">
        <div className="h-full rounded-full bg-gold transition-[width] duration-200 ease-linear" style={{ width: `${(left / total) * 100}%` }} />
      </div>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-band font-display text-[1.15rem] font-bold tabular-nums text-band-fg">{Math.ceil(left / 1000)}</span>
    </div>
  );
}

export function useNow(every = 250) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), every); return () => clearInterval(id); }, [every]);
  return now;
}

export type Row = { id: string; nickname: string; avatar: string | null; score: number; finished?: boolean };

export function Leaderboard({ rows, meName, title, showFinished }: { rows: Row[]; meName?: string; title?: string; showFinished?: boolean }) {
  const { t } = useT();
  if (!rows.length) return <p className="text-fg-muted">{t("No scores yet.")}</p>;
  return (
    <div className="flex flex-col gap-2">
      {title && <span className="eyebrow">{title}</span>}
      <ol className="flex flex-col gap-1.5">
        {rows.map((r, i) => (
          <li key={r.id} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${r.nickname === meName ? "border-gold bg-gold-soft/50" : "border-border bg-bg-surface"}`}>
            <span className={`w-7 text-center font-display text-[1.05rem] font-bold ${i < 3 ? "text-gold" : "text-fg-muted"}`}>{i + 1}</span>
            <Avatar id={r.avatar} name={r.nickname} size={32} />
            <span className="min-w-0 flex-1 truncate font-bold">{r.nickname}</span>
            {showFinished && !r.finished && <span className="chip text-[0.75rem]">{t("Playing")}</span>}
            <span className="font-display text-[1.05rem] font-bold tabular-nums">{r.score.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Podium({ rows }: { rows: Row[] }) {
  const top = [rows[1], rows[0], rows[2]];
  const h = [92, 128, 70];
  return (
    <div className="flex w-full max-w-[480px] items-end justify-center gap-2 pt-4">
      {top.map((r, i) => r ? (
        <div key={r.id} className="flex w-[30%] max-w-[150px] flex-col items-center gap-1.5 rise-in" style={{ animationDelay: `${[0.4, 0.8, 0][i]}s` }}>
          <Avatar id={r.avatar} name={r.nickname} size={i === 1 ? 56 : 44} />
          <span className="max-w-full truncate text-center font-bold">{r.nickname}</span>
          <span className="text-[0.85rem] tabular-nums text-fg-muted">{r.score.toLocaleString()}</span>
          <div className="flex w-full items-start justify-center rounded-t-2xl bg-band pt-2 font-display text-[1.6rem] font-bold text-gold-bright" style={{ height: h[i] }}>{[2, 1, 3][i]}</div>
        </div>
      ) : <div key={i} className="w-[30%] max-w-[150px]" />)}
    </div>
  );
}

const TOKEN = (pin: string) => `qalam-game-${pin}`;
export const getToken = (pin: string) => { try { return localStorage.getItem(TOKEN(pin)); } catch { return null; } };
export const setToken = (pin: string, v: string) => { try { localStorage.setItem(TOKEN(pin), v); } catch {} };
export const clearToken = (pin: string) => { try { localStorage.removeItem(TOKEN(pin)); } catch {} };

export async function gameCall<T = Record<string, unknown>>(url: string, method = "GET", data?: unknown, token?: string | null) {
  try {
    const headers: Record<string, string> = {};
    if (data) headers["content-type"] = "application/json";
    if (token) headers["x-player-token"] = token;
    const r = await fetch(url, { method, headers, body: data ? JSON.stringify(data) : undefined, cache: "no-store" });
    const j = await r.json().catch(() => ({}));
    return { ok: r.ok, status: r.status, data: j as T & { error?: string } };
  } catch {
    return { ok: false, status: 0, data: { error: "No connection. Please try again." } as T & { error?: string } };
  }
}

/** Poll the game state about once a second; `offset` corrects for clock difference. */
export function useGameState<S extends { now: number }>(pin: string, token: string | null, enabled: boolean) {
  const [state, setState] = useState<S | null>(null);
  const [error, setError] = useState<{ status: number; msg: string } | null>(null);
  const [offset, setOffset] = useState(0);
  const busy = useRef(false);
  const load = useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    const sent = Date.now();
    const r = await gameCall<S>(`/api/games/${pin}/state`, "GET", undefined, token);
    busy.current = false;
    if (r.ok) {
      const rtt = Date.now() - sent;
      setOffset(r.data.now + rtt / 2 - Date.now());
      setState(r.data); setError(null);
    } else if (r.status) setError({ status: r.status, msg: r.data.error ?? "Something went wrong." });
  }, [pin, token]);
  useEffect(() => {
    if (!enabled) return;
    load();
    const id = setInterval(() => { if (document.visibilityState === "visible") load(); }, 1000);
    return () => clearInterval(id);
  }, [enabled, load]);
  return { state, error, offset, reload: load };
}
