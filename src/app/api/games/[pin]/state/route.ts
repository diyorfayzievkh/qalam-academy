import { fail, handle, ok } from "@/lib/api";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { clientToken, distribution, gameByPin, leaderboard, openQuestion, playerByToken, rankOf, sync } from "@/lib/games";

export const dynamic = "force-dynamic";

/**
 * What a player (x-player-token) or the host (session) should see right now.
 * Times are absolute server times; the client corrects for clock difference with `now`.
 */
export async function GET(req: Request, { params }: { params: { pin: string } }) {
  return handle(async () => {
    const g0 = await gameByPin(params.pin); if (!g0) return fail(404, "No game found with that PIN.");
    const g = await sync(g0);
    const me = await currentUser();
    const isHost = me?.id === g.host_id;
    const player = await playerByToken(g.id, clientToken(req));
    if (!isHost && !player) return fail(403, "Please join the game first.");
    if (player?.kicked && !isHost) return ok({ kicked: true });

    const total = g.questions.length;
    const base = {
      now: Date.now(), title: g.title, mode: g.mode, state: g.state, current: g.current, total, seconds: g.seconds,
      endsAt: g.ends_at, isHost, lang: g.lang,
    };
    const [{ players }] = await db()<{ players: number }[]>`select count(*)::int as players from game_players where game_id = ${g.id} and not kicked`;

    // ---------- Challenge ----------
    if (g.mode === "CHALLENGE") {
      const board = await leaderboard(g.id, isHost || g.state === "FINISHED" ? 50 : 10);
      let mine = null;
      if (player) {
        let p = player;
        // Start the clock on the next question the first time it is shown.
        if (new URL(req.url).searchParams.get("start") === "1" && g.state !== "FINISHED" && p.current < total && !p.q_started_at) {
          const [u] = await db()<{ q_started_at: Date }[]>`update game_players set q_started_at = now() where id = ${p.id} and q_started_at is null returning q_started_at`;
          if (u) p = { ...p, q_started_at: u.q_started_at };
        }
        const done = p.current >= total;
        mine = {
          nickname: p.nickname, score: p.score, streak: p.streak, rank: await rankOf(g.id, p.score), index: p.current, done,
          question: !done && g.state !== "FINISHED" && p.q_started_at ? { ...openQuestion(g.questions[p.current]), openAt: p.q_started_at.getTime() } : null,
        };
      }
      return ok({ ...base, players, leaderboard: board, me: mine });
    }

    // ---------- Live ----------
    const q = g.current >= 0 ? g.questions[g.current] : null;
    const openAt = g.started_at?.getTime() ?? 0;
    const view: Record<string, unknown> = { ...base, players };
    if (g.state === "LOBBY" || isHost) {
      view.lobby = await db()`select id, nickname, avatar from game_players where game_id = ${g.id} and not kicked order by joined_at`;
    }
    if (q && (g.state === "QUESTION" || g.state === "REVEAL")) {
      view.question = { ...openQuestion(q), openAt, closeAt: openAt + g.seconds * 1000 };
      const [{ answered }] = await db()<{ answered: number }[]>`select count(*)::int as answered from game_answers where game_id = ${g.id} and q = ${g.current}`;
      view.answered = answered;
    }
    if (q && g.state === "REVEAL") {
      view.reveal = { answer: q.answer, why: q.why ?? "", src: q.src ?? "", counts: await distribution(g, g.current) };
    }
    if (g.state === "REVEAL" || g.state === "FINISHED") view.leaderboard = await leaderboard(g.id, g.state === "FINISHED" ? 50 : 5);
    if (player) {
      const [a] = g.current >= 0 ? await db()<{ choice: number; correct: boolean; points: number }[]>`
        select choice, correct, points from game_answers where player_id = ${player.id} and q = ${g.current}` : [];
      view.me = {
        nickname: player.nickname, score: player.score, streak: player.streak, rank: await rankOf(g.id, player.score),
        answered: a ? a.choice : null,
        // Only say whether it was right once the question is revealed.
        result: g.state === "REVEAL" || g.state === "FINISHED" ? (a ? { correct: a.correct, points: a.points } : { correct: false, points: 0, missed: true }) : null,
      };
    }
    return ok(view);
  });
}
