// Postgres (Supabase) for accounts, families and synced progress.
// Tables live in the private `qalam` schema, owned by the `qalam_app` role,
// which is not reachable through Supabase's public Data API.
// DATABASE_URL uses the transaction pooler (port 6543), so prepared
// statements are off.

import postgres from "postgres";

const g = globalThis as unknown as { __qalamSql?: postgres.Sql };

export function db(): postgres.Sql {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
  g.__qalamSql ??= postgres(process.env.DATABASE_URL, {
    prepare: false,
    max: 3,
    idle_timeout: 20,
    connect_timeout: 10,
    ssl: /@(localhost|127\.0\.0\.1)[:/]/.test(process.env.DATABASE_URL) ? false : "require",
    connection: { search_path: "qalam" },
  });
  return g.__qalamSql;
}

export const dbConfigured = () => Boolean(process.env.DATABASE_URL);
