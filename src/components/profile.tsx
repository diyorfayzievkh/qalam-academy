"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useAccount } from "./account";

// The learner's display name and avatar. Guests keep them on this device;
// signed-in users keep them on their account, so they follow them everywhere.

const KEY = "qalam-profile";
type Local = { name: string; avatar: string | null };
type Ctx = {
  name: string;
  avatar: string | null;
  /** Children's names are set by their parent, so only the avatar can change. */
  canEditName: boolean;
  save: (p: Partial<Local>) => Promise<{ ok: boolean; error?: string }>;
};
const ProfileContext = createContext<Ctx>({ name: "", avatar: null, canEditName: true, save: async () => ({ ok: true }) });

function readLocal(): Local {
  try { const v = JSON.parse(localStorage.getItem(KEY) || "{}"); return { name: typeof v.name === "string" ? v.name : "", avatar: typeof v.avatar === "string" ? v.avatar : null }; }
  catch { return { name: "", avatar: null }; }
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user, call, refresh } = useAccount();
  const [local, setLocal] = useState<Local>({ name: "", avatar: null });
  useEffect(() => { setLocal(readLocal()); }, []);

  const writeLocal = useCallback((p: Partial<Local>) => {
    setLocal((cur) => {
      const next = { ...cur, ...p };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  // An avatar picked as a guest moves onto the account at first sign-in.
  useEffect(() => {
    if (user && !user.avatar && local.avatar) call("/api/me", "PATCH", { avatar: local.avatar }).then((r) => { if (r.ok) refresh(); });
  }, [user, local.avatar, call, refresh]);

  const save = useCallback(async (p: Partial<Local>) => {
    const name = p.name?.trim();
    if (!user) { writeLocal({ ...p, ...(name !== undefined ? { name } : {}) }); return { ok: true }; }
    const data: Record<string, string> = {};
    if (p.avatar) data.avatar = p.avatar;
    if (name && user.kind === "ADULT") data.name = name;
    if (p.avatar) writeLocal({ avatar: p.avatar });
    const r = await call("/api/me", "PATCH", data);
    if (r.ok) await refresh();
    return { ok: r.ok, error: r.data.error };
  }, [user, call, refresh, writeLocal]);

  const value: Ctx = user
    ? { name: user.name, avatar: user.avatar ?? local.avatar, canEditName: user.kind === "ADULT", save }
    : { name: local.name, avatar: local.avatar, canEditName: true, save };
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export const useProfile = () => useContext(ProfileContext);
