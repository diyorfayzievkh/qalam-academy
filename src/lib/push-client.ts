"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { useLocation } from "@/lib/use-location";

// Web push on this device: permission, subscription and reminder choices.
// Choices are kept on the device and on the server (push_subs), and the
// server copy is refreshed when the language, city or signed-in user changes.

export type PushPrefs = { story: boolean; study: boolean; studyAt: string; prayers: boolean; streak: boolean; arena: boolean };
export const DEFAULT_PREFS: PushPrefs = { story: true, study: true, studyAt: "17:00", prayers: true, streak: true, arena: true };
const PREFS_KEY = "qalam-push-prefs";

export type PushStatus = "loading" | "unsupported" | "ios-install" | "denied" | "off" | "on";

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const standalone = () => window.matchMedia("(display-mode: standalone)").matches || (navigator as unknown as { standalone?: boolean }).standalone === true;
const supported = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;

export function readPrefs(): PushPrefs {
  try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") }; } catch { return DEFAULT_PREFS; }
}

function b64ToBytes(b64: string) {
  const pad = "=".repeat((4 - (b64.length % 4)) % 4);
  const raw = atob((b64 + pad).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

async function registration() {
  return (await navigator.serviceWorker.getRegistration("/")) ?? navigator.serviceWorker.register("/sw.js", { scope: "/" });
}

function useContextBody() {
  const { lang } = useT();
  const loc = useLocation();
  return useCallback((sub: PushSubscription, prefs: PushPrefs) => ({
    sub: sub.toJSON(), prefs, lang,
    tz: loc.tz, lat: loc.lat, lng: loc.lng, place: loc.name,
    method: { fajr: loc.method.fajr, isha: loc.method.isha },
  }), [lang, loc.tz, loc.lat, loc.lng, loc.name, loc.method.fajr, loc.method.isha]);
}

async function save(body: unknown) {
  const r = await fetch("/api/push/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error((await r.json().catch(() => null))?.error ?? "Could not save.");
}

export function usePush() {
  const [status, setStatus] = useState<PushStatus>("loading");
  const [prefs, setPrefsState] = useState<PushPrefs>(DEFAULT_PREFS);
  const [sub, setSub] = useState<PushSubscription | null>(null);
  const make = useContextBody();

  useEffect(() => {
    setPrefsState(readPrefs());
    if (!supported()) { setStatus(isIOS() && !standalone() ? "ios-install" : "unsupported"); return; }
    if (Notification.permission === "denied") { setStatus("denied"); return; }
    (async () => {
      const reg = await navigator.serviceWorker.getRegistration("/");
      const s = await reg?.pushManager.getSubscription();
      setSub(s ?? null);
      setStatus(s && Notification.permission === "granted" ? "on" : "off");
    })().catch(() => setStatus("off"));
  }, []);

  const enable = useCallback(async (p: PushPrefs) => {
    const perm = await Notification.requestPermission();
    if (perm !== "granted") { setStatus(perm === "denied" ? "denied" : "off"); return false; }
    const k = await fetch("/api/push/key").then((r) => r.json()).catch(() => null);
    if (!k?.key) throw new Error("Notifications are not set up on the server yet.");
    const reg = await registration();
    await navigator.serviceWorker.ready;
    const s = (await reg.pushManager.getSubscription()) ?? (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(k.key) }));
    await save(make(s, p));
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); } catch {}
    setSub(s); setPrefsState(p); setStatus("on");
    return true;
  }, [make]);

  const update = useCallback(async (p: PushPrefs) => {
    setPrefsState(p);
    try { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); } catch {}
    if (sub) await save(make(sub, p));
  }, [sub, make]);

  const disable = useCallback(async () => {
    if (sub) {
      await fetch("/api/push/subscribe", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => {});
      await sub.unsubscribe().catch(() => {});
    }
    setSub(null); setStatus("off");
  }, [sub]);

  const test = useCallback(async () => {
    if (!sub) return false;
    const r = await fetch("/api/push/test", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ endpoint: sub.endpoint }) });
    return r.ok;
  }, [sub]);

  return { status, prefs, enable, update, disable, test };
}

/** Keeps the server copy in step when the language, city or account changes. */
export function PushSync() {
  const { user, ready } = useAccount();
  const make = useContextBody();
  const last = useRef("");
  useEffect(() => {
    if (!ready || !supported() || Notification.permission !== "granted") return;
    let stop = false;
    (async () => {
      const reg = await navigator.serviceWorker.getRegistration("/");
      const s = await reg?.pushManager.getSubscription();
      if (!s || stop) return;
      const body = make(s, readPrefs());
      const sig = JSON.stringify({ ...body, sub: s.endpoint, u: user?.id ?? null });
      if (sig === last.current) return;
      last.current = sig;
      await save(body).catch(() => { last.current = ""; });
    })();
    return () => { stop = true; };
  }, [ready, user?.id, make]);
  return null;
}
