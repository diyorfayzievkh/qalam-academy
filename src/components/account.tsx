"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { HIFZ_KEY } from "@/lib/use-hifz";
import type { SyncDoc } from "@/lib/sync-merge";
import { useProgress } from "./progress";

export type AccountUser = {
  id: string; name: string; email: string | null; kind: "ADULT" | "CHILD"; avatar: string | null;
  role: "PARENT" | "CHILD" | null; familyId: string | null; lang: "en" | "uz" | "ru";
};
type Family = { name: string; code: string | null } | null;
type SyncState = "off" | "syncing" | "synced" | "error";

type Ctx = {
  ready: boolean;
  /** False when the server has no database configured (guest mode only). */
  available: boolean;
  user: AccountUser | null;
  family: Family;
  sync: SyncState;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
  call: <T = unknown>(url: string, method?: string, data?: unknown) => Promise<{ ok: boolean; data: T & { error?: string } }>;
};

const AccountContext = createContext<Ctx | null>(null);

async function call<T>(url: string, method = "GET", data?: unknown) {
  try {
    const r = await fetch(url, { method, headers: data ? { "content-type": "application/json" } : undefined, body: data ? JSON.stringify(data) : undefined, cache: "no-store" });
    const j = await r.json().catch(() => ({}));
    return { ok: r.ok, data: j as T & { error?: string } };
  } catch {
    return { ok: false, data: { error: "No connection. Please try again." } as T & { error?: string } };
  }
}

function readHifz(): SyncDoc["hifz"] {
  try { return JSON.parse(localStorage.getItem(HIFZ_KEY) || "{}"); } catch { return {}; }
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const progress = useProgress();
  const [ready, setReady] = useState(false);
  const [available, setAvailable] = useState(false);
  const [user, setUser] = useState<AccountUser | null>(null);
  const [family, setFamily] = useState<Family>(null);
  const [sync, setSync] = useState<SyncState>("off");

  const refresh = useCallback(async () => {
    const r = await call<{ user: AccountUser | null; family?: Family; available?: boolean }>("/api/me");
    setAvailable(Boolean(r.data.available));
    setUser(r.ok ? r.data.user : null);
    setFamily(r.ok ? r.data.family ?? null : null);
    setReady(true);
  }, []);
  useEffect(() => { refresh(); }, [refresh]);

  // ---- Sync: push the local copy, take back the merged copy. ----
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const pushing = useRef(false);
  const again = useRef(false);

  const push = useCallback(async () => {
    if (pushing.current) { again.current = true; return; }
    pushing.current = true;
    setSync("syncing");
    const p = progressRef.current;
    const doc: SyncDoc = { points: p.points, answered: p.answered, perfect: p.perfect, studied: p.studied, days: p.days, hifz: readHifz() };
    const r = await call<{ doc: SyncDoc }>("/api/progress", "PUT", doc);
    if (r.ok && r.data.doc) {
      const d = r.data.doc;
      const cur = progressRef.current;
      const changed = d.points !== cur.points || Object.keys(d.answered).length !== Object.keys(cur.answered).length
        || Object.keys(d.studied).length !== Object.keys(cur.studied).length || Object.keys(d.days).length !== Object.keys(cur.days).length || Object.keys(d.perfect).length !== Object.keys(cur.perfect).length;
      if (changed) cur.applySynced(d);
      if (JSON.stringify(d.hifz) !== JSON.stringify(readHifz())) {
        try { localStorage.setItem(HIFZ_KEY, JSON.stringify(d.hifz)); } catch {}
        window.dispatchEvent(new Event("qalam:hifz-synced"));
      }
      setSync("synced");
    } else setSync("error");
    pushing.current = false;
    if (again.current) { again.current = false; push(); }
  }, []);

  // First sync after sign-in (also merges anything done as a guest).
  const syncedFor = useRef<string | null>(null);
  useEffect(() => {
    if (!user || !progress.ready || syncedFor.current === user.id) return;
    syncedFor.current = user.id;
    push();
  }, [user, progress.ready, push]);

  // Then sync a moment after each change, and when the tab regains focus.
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const schedule = useCallback(() => {
    if (!syncedFor.current) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(push, 2000);
  }, [push]);
  useEffect(() => { if (user) schedule(); }, [progress.points, progress.studied, progress.answered, user, schedule]);
  useEffect(() => {
    const onChange = () => schedule();
    const onFocus = () => { if (document.visibilityState === "visible" && syncedFor.current) push(); };
    window.addEventListener("qalam:local-change", onChange);
    document.addEventListener("visibilitychange", onFocus);
    return () => { window.removeEventListener("qalam:local-change", onChange); document.removeEventListener("visibilitychange", onFocus); };
  }, [schedule, push]);

  const signOut = useCallback(async () => {
    clearTimeout(timer.current);
    if (syncedFor.current) await push();
    await call("/api/auth/logout", "POST");
    syncedFor.current = null;
    // Leave nothing of this person's progress on a shared device.
    progressRef.current.clearLocal();
    try { localStorage.removeItem(HIFZ_KEY); } catch {}
    window.dispatchEvent(new Event("qalam:hifz-synced"));
    setUser(null); setFamily(null); setSync("off");
  }, [push]);

  return (
    <AccountContext.Provider value={{ ready, available, user, family, sync, refresh, signOut, call }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used inside <AccountProvider>");
  return ctx;
}
