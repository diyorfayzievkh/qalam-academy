import { fail, handle, ok, requireUser } from "@/lib/api";
import { db } from "@/lib/db";
import { cleanDoc, EMPTY_DOC, mergeDocs } from "@/lib/sync-merge";

export const dynamic = "force-dynamic";

export async function GET() {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const [r] = await db()<{ data: unknown }[]>`select data from progress where user_id = ${me.id}`;
    return ok({ doc: r ? cleanDoc(r.data) : EMPTY_DOC });
  });
}

/** Merge the browser's copy into the stored copy and return the result. */
export async function PUT(req: Request) {
  return handle(async () => {
    const me = await requireUser(); if (me instanceof Response) return me;
    const text = await req.text();
    if (text.length > 1_500_000) return fail(413, "Progress is too large to sync.");
    let incoming; try { incoming = cleanDoc(JSON.parse(text)); } catch { return fail(400, "Invalid progress."); }
    const doc = await db().begin(async (sql) => {
      const [r] = await sql<{ data: unknown }[]>`select data from progress where user_id = ${me.id} for update`;
      const merged = mergeDocs(r ? cleanDoc(r.data) : EMPTY_DOC, incoming);
      await sql`insert into progress (user_id, points, data, updated_at) values (${me.id}, ${merged.points}, ${sql.json(merged)}, now())
        on conflict (user_id) do update set points = excluded.points, data = excluded.data, updated_at = now()`;
      return merged;
    });
    return ok({ doc });
  });
}
