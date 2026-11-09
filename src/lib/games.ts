// Quiz games (Kahoot-style). LIVE games are paced by the host: everyone sees
// the same question, answers on a timer, and faster correct answers score
// more. CHALLENGE games are played by each player at their own pace until a
// deadline, ranked on one leaderboard. All timing is measured on the server.

import { createHash, randomBytes, randomInt } from "node:crypto";
import { z } from "zod";
import { db } from "./db";

export const LEAD_MS = 3000;      // "Get ready" before answers open
export const GRACE_MS = 1500;     // network allowance after the timer ends
export const MAX_PLAYERS = 80;

export const QuestionSchema = z.object({
  q: z.string().trim().min(1).max(400),
  options: z.array(z.string().trim().min(1).max(200)).min(2).max(4),
  answer: z.number().int().min(0).max(3),
  why: z.string().trim().max(500).optional(),
  src: z.string().trim().max(120).optional(),
}).refine((x) => x.answer < x.options.length, "answer out of range");
export type GameQuestion = z.infer<typeof QuestionSchema>;

export type Game = {
  id: string; pin: string; host_id: string; family_id: string | null; title: string; mode: "LIVE" | "CHALLENGE";
  lang: string; questions: GameQuestion[]; seconds: number; state: "LOBBY" | "QUESTION" | "REVEAL" | "FINISHED";
  current: number; started_at: Date | null; ends_at: Date | null; created_at: Date;
};
export type Player = {
  id: string; game_id: string; user_id: string | null; nickname: string; avatar: string | null; score: number;
  streak: number; current: number; q_started_at: Date | null; finished_at: Date | null; kicked: boolean; joined_at: Date;
};

export const sha = (t: string) => createHash("sha256").update(t).digest("hex");
export const newToken = () => randomBytes(24).toString("base64url");
export const newPin = () => String(randomInt(100000, 1000000));

/** Kahoot-style points: 500–1000 for a correct answer, more for speed, plus a small streak bonus. */
export function pointsFor(correct: boolean, ms: number, seconds: number, streakBefore: number) {
  if (!correct) return 0;
  const frac = Math.min(1, Math.max(0, ms / (seconds * 1000)));
  return Math.round(1000 * (1 - frac / 2)) + Math.min(streakBefore, 5) * 50;
}

export async function gameByPin(pin: string): Promise<Game | null> {
  const [g] = await db()<Game[]>`select * from games where pin = ${pin} order by created_at desc limit 1`;
  return g ?? null;
}

export async function playerByToken(gameId: string, token: string | null): Promise<Player | null> {
  if (!token) return null;
  const [p] = await db()<Player[]>`select * from game_players where token_hash = ${sha(token)} and game_id = ${gameId}`;
  return p ?? null;
}

/** Move a game forward on its own: time-up or everyone answered → reveal; challenge deadline → finished. */
export async function sync(g: Game): Promise<Game> {
  const now = Date.now();
  if (g.mode === "CHALLENGE") {
    if (g.state !== "FINISHED" && g.ends_at && g.ends_at.getTime() <= now) {
      await db()`update games set state = 'FINISHED' where id = ${g.id} and state <> 'FINISHED'`;
      return { ...g, state: "FINISHED" };
    }
    return g;
  }
  if (g.state !== "QUESTION" || !g.started_at) return g;
  const timeUp = now >= g.started_at.getTime() + g.seconds * 1000 + GRACE_MS;
  let everyone = false;
  if (!timeUp) {
    const [r] = await db()<{ players: number; answered: number }[]>`
      select (select count(*)::int from game_players where game_id = ${g.id} and not kicked) as players,
             (select count(*)::int from game_answers a join game_players p on p.id = a.player_id
               where a.game_id = ${g.id} and a.q = ${g.current} and not p.kicked) as answered`;
    everyone = r.players > 0 && r.answered >= r.players;
  }
  if (!timeUp && !everyone) return g;
  await db()`update games set state = 'REVEAL' where id = ${g.id} and state = 'QUESTION' and current = ${g.current}`;
  // Anyone who did not answer loses their streak.
  await db()`update game_players p set streak = 0 where p.game_id = ${g.id}
    and not exists (select 1 from game_answers a where a.player_id = p.id and a.q = ${g.current})`;
  return { ...g, state: "REVEAL" };
}

export async function leaderboard(gameId: string, limit = 10) {
  return db()<{ id: string; nickname: string; avatar: string | null; score: number; finished: boolean }[]>`
    select id, nickname, avatar, score, finished_at is not null as finished from game_players
    where game_id = ${gameId} and not kicked order by score desc, joined_at asc limit ${limit}`;
}

export async function rankOf(gameId: string, score: number) {
  const [r] = await db()<{ n: number }[]>`select count(*)::int as n from game_players where game_id = ${gameId} and not kicked and score > ${score}`;
  return r.n + 1;
}

/** The question as players see it while it is open (no answer). */
export const openQuestion = (q: GameQuestion) => ({ q: q.q, options: q.options });

/** Answer counts per option for the current question. */
export async function distribution(g: Game, q: number) {
  const rows = await db()<{ choice: number; n: number }[]>`select choice, count(*)::int as n from game_answers where game_id = ${g.id} and q = ${q} group by choice`;
  const counts = g.questions[q]?.options.map(() => 0) ?? [];
  for (const r of rows) if (r.choice >= 0 && r.choice < counts.length) counts[r.choice] = r.n;
  return counts;
}

export function clientToken(req: Request) {
  return req.headers.get("x-player-token");
}
