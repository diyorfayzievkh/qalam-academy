import webpush from "web-push";
import { db } from "./db";
import type { PushMsg } from "./push-messages";

// Server-side web push (Vercel). Scheduled reminders are sent by the Supabase
// function push-tick; this module sends the instant ones (Quiz Arena, tests).

export const pushConfigured = () => Boolean(process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
let ready = false;
function init() {
  if (ready || !pushConfigured()) return;
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || "https://qalam-academy-sigma.vercel.app", process.env.VAPID_PUBLIC_KEY!, process.env.VAPID_PRIVATE_KEY!);
  ready = true;
}

export type SubRow = { id: string; endpoint: string; p256dh: string; auth: string; lang: string };

/** Send one message; forget subscriptions the push service says are gone. */
export async function sendTo(sub: SubRow, msg: PushMsg) {
  init(); if (!ready) return false;
  try {
    await webpush.sendNotification({ endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } }, JSON.stringify(msg), { TTL: 3600, urgency: "high" });
    return true;
  } catch (e) {
    const code = (e as { statusCode?: number }).statusCode;
    if (code === 404 || code === 410) await db()`delete from push_subs where id = ${sub.id}`;
    else await db()`update push_subs set fails = fails + 1 where id = ${sub.id}`;
    return false;
  }
}
