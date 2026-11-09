import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { db } from "@/lib/db";
import { clientToken, gameByPin, GRACE_MS, playerByToken, pointsFor, sync } from "@/lib/games";

export const dynamic = "force-dynamic";
const S = z.object({ q: z.number().int().min(0), choice: z.number().int().min(-1).max(3) });

/** Submit an answer. choice -1 means the timer ran out. */
export async function POST(req: Request, { params }: { params: { pin: string } }) {
  return handle(async () => {
    const g0 = await gameByPin(params.pin); if (!g0) return fail(404, "No game found with that PIN.");
    const g = await sync(g0);
    const p = await playerByToken(g.id, clientToken(req)); if (!p || p.kicked) return fail(403, "Please join the game first.");
    const b = await body(req, S); if (!b) return fail(400, "Invalid answer.");
    const question = g.questions[b.q]; if (!question) return fail(400, "Invalid question.");
    const now = Date.now();
    let ms: number;
    if (g.mode === "LIVE") {
      if (g.state !== "QUESTION" || g.current !== b.q || !g.started_at) return fail(409, "This question is closed.");
      ms = now - g.started_at.getTime();
      if (ms < 0) return fail(409, "Wait for the answers to appear.");
    } else {
      if (g.state === "FINISHED") return fail(410, "This challenge has ended.");
      if (p.current !== b.q || !p.q_started_at) return fail(409, "This question is closed.");
      ms = now - p.q_started_at.getTime();
    }
    const late = ms > g.seconds * 1000 + GRACE_MS;
    const correct = !late && b.choice === question.answer;
    const points = pointsFor(correct, ms, g.seconds, p.streak);
    const inserted = await db()`insert into game_answers (player_id, game_id, q, choice, correct, points, ms)
      values (${p.id}, ${g.id}, ${b.q}, ${late ? -1 : b.choice}, ${correct}, ${points}, ${Math.min(ms, 2147483647)})
      on conflict do nothing returning q`;
    if (!inserted.length) return fail(409, "You already answered.");
    const last = b.q + 1 >= g.questions.length;
    const [me] = await db()<{ score: number; streak: number }[]>`update game_players set score = score + ${points},
      streak = ${correct ? p.streak + 1 : 0},
      current = ${g.mode === "CHALLENGE" ? b.q + 1 : p.current},
      q_started_at = ${g.mode === "CHALLENGE" ? null : p.q_started_at},
      finished_at = ${g.mode === "CHALLENGE" && last ? new Date() : p.finished_at}
      where id = ${p.id} returning score, streak`;
    if (g.mode === "LIVE") { await sync(g); return ok({ received: true }); }
    // Challenge: show the result right away.
    return ok({ correct, points, score: me.score, streak: me.streak, answer: question.answer, why: question.why ?? "", src: question.src ?? "", late });
  });
}
