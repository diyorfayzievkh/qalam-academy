import { z } from "zod";
import { body, fail, handle, ok } from "@/lib/api";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { AVATAR_IDS } from "@/components/avatar-ids";
import { clientToken, gameByPin, MAX_PLAYERS, newToken, playerByToken, sha, sync } from "@/lib/games";

export const dynamic = "force-dynamic";
const S = z.object({
  nickname: z.string().trim().min(1).max(24).transform((s) => s.replace(/\s+/g, " ")),
  avatar: z.enum(AVATAR_IDS).nullish(),
});

/** Join with a nickname. Returns a player token the device keeps for this game. */
export async function POST(req: Request, { params }: { params: { pin: string } }) {
  return handle(async () => {
    const g0 = await gameByPin(params.pin); if (!g0) return fail(404, "No game found with that PIN.");
    const g = await sync(g0);
    if (g.state === "FINISHED") return fail(410, "This game has finished.");
    // Already in this game on this device?
    const existing = await playerByToken(g.id, clientToken(req));
    if (existing && !existing.kicked) return ok({ token: clientToken(req), nickname: existing.nickname });
    const b = await body(req, S); if (!b) return fail(400, "Please enter a nickname.");
    const me = await currentUser();
    const token = newToken();
    // A signed-in person rejoining from another device takes back their place.
    if (me) {
      const [p] = await db()<{ id: string; kicked: boolean; nickname: string }[]>`select id, kicked, nickname from game_players where game_id = ${g.id} and user_id = ${me.id}`;
      if (p?.kicked) return fail(403, "The host removed you from this game.");
      if (p) { await db()`update game_players set token_hash = ${sha(token)} where id = ${p.id}`; return ok({ token, nickname: p.nickname }); }
    }
    const [{ n }] = await db()<{ n: number }[]>`select count(*)::int as n from game_players where game_id = ${g.id}`;
    if (n >= MAX_PLAYERS) return fail(409, "This game is full.");
    try {
      await db()`insert into game_players (game_id, token_hash, user_id, nickname, avatar)
        values (${g.id}, ${sha(token)}, ${me?.id ?? null}, ${b.nickname}, ${b.avatar ?? me?.avatar ?? null})`;
    } catch (e) {
      if ((e as { code?: string }).code === "23505") return fail(409, "That nickname is taken in this game. Try another.");
      throw e;
    }
    return ok({ token, nickname: b.nickname });
  });
}
