"use client";

import { useEffect, useState } from "react";
import { AVATARS, Avatar } from "./avatars";
import { useT } from "./lang";
import { useProfile } from "./profile";

/** Pick a display name and an avatar. Used on the account page and on first visit. */
export function ProfileEditor({ onDone }: { onDone?: () => void }) {
  const { t } = useT();
  const { name, avatar, canEditName, save } = useProfile();
  const [n, setN] = useState(name);
  const [a, setA] = useState<string | null>(avatar);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [err, setErr] = useState("");
  useEffect(() => { setN(name); setA(avatar); }, [name, avatar]);
  const dirty = n.trim() !== name || a !== avatar;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (canEditName && !n.trim()) { setState("error"); setErr(t("Please enter a name.")); return; }
    setState("saving");
    const r = await save({ ...(canEditName ? { name: n.trim().slice(0, 40) } : {}), ...(a ? { avatar: a } : {}) });
    if (r.ok) { setState("saved"); onDone?.(); } else { setState("error"); setErr(r.error ? t(r.error) : t("Something went wrong.")); }
  }

  return (
    <form id="profile" onSubmit={submit} className="card flex scroll-mt-24 flex-col gap-4">
      <div className="flex items-center gap-3.5">
        <Avatar id={a} name={n} size={64} />
        <div className="flex min-w-0 flex-col">
          <span className="eyebrow">{t("Your profile")}</span>
          <b className="font-display text-[1.25rem]">{t("As-salāmu ʿalaykum")}{n.trim() ? `, ${n.trim()}` : ""}</b>
        </div>
      </div>
      {canEditName ? (
        <label className="flex flex-col gap-1.5 font-bold">
          {t("Your name")}
          <input className="input w-full max-w-[360px]" value={n} maxLength={40} autoComplete="nickname"
            onChange={(e) => { setN(e.target.value); setState("idle"); }} placeholder={t("e.g. Yusuf or Maryam")} />
        </label>
      ) : (
        <p className="text-[0.92rem] text-fg-muted">{t("Your parent sets your name. You can choose your avatar.")}</p>
      )}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-bold">{t("Choose your avatar")}</legend>
        <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6">
          {AVATARS.map((x) => (
            <button key={x.id} type="button" onClick={() => { setA(x.id); setState("idle"); }} aria-pressed={a === x.id} aria-label={t(x.label)}
              className={`grid place-items-center rounded-[16px] border-2 p-1.5 transition ${a === x.id ? "border-gold-bright bg-gold-soft" : "border-transparent hover:border-border"}`}>
              <Avatar id={x.id} size={56} />
            </button>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn" disabled={!dirty || state === "saving"}>{state === "saving" ? t("Saving…") : t("Save profile")}</button>
        {state === "saved" && <span className="font-bold text-success" role="status">{t("Saved ✓")}</span>}
        {state === "error" && <span className="font-bold text-danger" role="alert">{err}</span>}
      </div>
    </form>
  );
}
