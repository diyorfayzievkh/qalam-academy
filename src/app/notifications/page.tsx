"use client";

import { useState, type ReactNode } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { useLocation } from "@/lib/use-location";
import { DEFAULT_PREFS, usePush, type PushPrefs } from "@/lib/push-client";

function Toggle({ on, onChange, title, sub, children }: { on: boolean; onChange: (v: boolean) => void; title: string; sub: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-b border-border py-3.5 last:border-b-0">
      <label className="flex cursor-pointer items-start justify-between gap-4">
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="font-bold">{title}</span>
          <span className="text-[0.88rem] text-fg-muted">{sub}</span>
        </span>
        <input type="checkbox" role="switch" className="mt-1 h-6 w-11 shrink-0 cursor-pointer accent-emerald" checked={on} onChange={(e) => onChange(e.target.checked)} />
      </label>
      {children}
    </div>
  );
}

/** Turn reminders on for this device and choose which ones. */
export default function NotificationsPage() {
  const { t } = useT();
  const { user } = useAccount();
  const loc = useLocation();
  const { status, prefs, enable, update, disable, test } = usePush();
  const [draft, setDraft] = useState<PushPrefs | null>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");
  const p = draft ?? prefs;
  const on = status === "on";

  async function change(next: PushPrefs) {
    setDraft(next); setNote("");
    if (on) await update(next).catch((e) => setNote(String(e.message ?? e)));
  }
  async function turnOn() {
    setBusy(true); setNote("");
    try { if (await enable(p)) setNote(t("Notifications are on for this device.")); }
    catch (e) { setNote(t(String((e as Error).message ?? e))); }
    setBusy(false);
  }

  return (
    <>
      <PageHeader eyebrow={t("Reminders")} title={t("Notifications")}
        sub={t("Gentle reminders on this phone or computer, even when the app is closed. Each device is set up on its own.")} />
      <Page>
        {status === "ios-install" && (
          <div className="card flex flex-col gap-2">
            <h2 className="text-[1.1rem]">{t("On iPhone and iPad, add Qalam to your Home Screen first")}</h2>
            <ol className="ml-5 list-decimal text-[0.95rem] leading-relaxed">
              <li>{t("Open this page in Safari.")}</li>
              <li>{t("Tap the Share button, then “Add to Home Screen”.")}</li>
              <li>{t("Open Qalam from the new icon on your Home Screen and come back to this page.")}</li>
            </ol>
            <p className="text-[0.85rem] text-fg-muted">{t("Needs iOS 16.4 or later.")}</p>
          </div>
        )}
        {status === "unsupported" && <p className="card">{t("This browser cannot show notifications. Try Chrome, Edge, Firefox or Safari.")}</p>}
        {status === "denied" && <p className="card">{t("Notifications are blocked for this site. Allow them in your browser or phone settings, then reload this page.")}</p>}

        <div className="card flex flex-col">
          <Toggle on={p.prayers} onChange={(v) => change({ ...p, prayers: v })} title={t("Prayer times")}
            sub={t("When each prayer begins in {city}, with Hanafi Asr. Change the city on the Prayer times page.", { city: t(loc.name) })} />
          <Toggle on={p.story} onChange={(v) => change({ ...p, story: v })} title={t("Bedtime story")} sub={t("Every evening at 8 pm.")} />
          <Toggle on={p.study} onChange={(v) => change({ ...p, study: v })} title={t("10 minutes of study")}
            sub={t("A daily reminder to read one lesson, or to review your hifz when a sūrah is due.")}>
            {p.study && (
              <label className="flex items-center gap-2 text-[0.92rem]">
                {t("Time")}
                <input type="time" value={p.studyAt} step={900} onChange={(e) => e.target.value && change({ ...p, studyAt: e.target.value })}
                  className="rounded-btn border-2 border-border bg-bg-surface px-2 py-1" />
              </label>
            )}
          </Toggle>
          <Toggle on={p.streak} onChange={(v) => change({ ...p, streak: v })} title={t("Streak reminder")}
            sub={user ? t("At 7:30 pm, only if you haven’t learned anything yet today.") : t("Sign in so we can see your streak.")} />
          <Toggle on={p.arena} onChange={(v) => change({ ...p, arena: v })} title={t("Quiz Arena invites")}
            sub={user?.familyId ? t("When someone in your family starts a game or sends a challenge.") : t("For family members who are signed in.")} />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {!on && status !== "unsupported" && status !== "ios-install" && (
            <button type="button" className="btn" disabled={busy || status === "loading" || status === "denied"} onClick={turnOn}>{t("Turn on notifications")}</button>
          )}
          {on && <>
            <button type="button" className="btn" onClick={async () => setNote(t((await test()) ? "Test sent. It should appear in a few seconds." : "The test could not be delivered."))}>{t("Send a test")}</button>
            <button type="button" className="btn btn-ghost" onClick={async () => { await disable(); setDraft(null); setNote(t("Notifications are off for this device.")); }}>{t("Turn off on this device")}</button>
          </>}
          {!on && draft && <button type="button" className="btn btn-ghost" onClick={() => setDraft(DEFAULT_PREFS)}>{t("Reset")}</button>}
        </div>
        {note && <p className="text-[0.92rem] font-bold text-emerald">{note}</p>}
      </Page>
    </>
  );
}
