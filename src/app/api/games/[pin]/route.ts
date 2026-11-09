import { fail, handle, ok } from "@/lib/api";
import { recordFailure, throttled } from "@/lib/auth";
import { db } from "@/lib/db";
import { gameByPin, sync } from "@/lib/games";

export const dynamic = "force-dynamic";

const ip = (req: Request) => (req.headers.get("x-forwarded-for") ?? "local").split(",")[0].trim();

/** Public details for the join screen. */
export async function GET(req: Request, { params }: { params: { pin: string } }) {
  return handle(async () => {
    const key = `pin:${ip(req)}`;
    if (await throttled(key, 30)) return fail(429, "Too many tries. Please wait a few minutes.");
    const g0 = /^\d{6}$/.test(params.pin) ? await gameByPin(params.pin) : null;
    if (!g0) { await recordFailure(key); return fail(404, "No game found with that PIN."); }
    const g = await sync(g0);
    const [h] = await db()<{ name: string; players: number }[]>`
      select u.name, (select count(*)::int from game_players where game_id = ${g.id} and not kicked) as players
      from users u where u.id = ${g.host_id}`;
    return ok({ title: g.title, mode: g.mode, state: g.state, host: h?.name ?? "", players: h?.players ?? 0,
      total: g.questions.length, seconds: g.seconds, endsAt: g.ends_at, lang: g.lang });
  });
}
