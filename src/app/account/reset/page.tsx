"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";

const input = "w-full rounded-btn border border-border bg-bg-surface px-3 py-2.5 text-[1rem] outline-none focus:border-emerald";

function ResetForm() {
  const { t } = useT();
  const { call, refresh } = useAccount();
  const router = useRouter();
  const token = useSearchParams().get("token") ?? "";
  const [pw, setPw] = useState(""); const [pw2, setPw2] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault(); setErr(null);
    if (pw !== pw2) { setErr(t("The two passwords do not match.")); return; }
    setBusy(true);
    const r = await call<{ error?: string }>("/api/auth/reset", "POST", { token, password: pw });
    setBusy(false);
    if (!r.ok) { setErr(t(r.data.error ?? "Something went wrong.")); return; }
    await refresh();
    router.replace("/account");
  }

  if (!token) return <p className="card">{t("This link is incomplete. Please open the link from the email again, or ask for a new one on the sign-in page.")}</p>;
  return (
    <form onSubmit={submit} className="card mx-auto flex w-full max-w-[480px] flex-col gap-3.5">
      <h2 className="text-[1.25rem]">{t("Choose a new password")}</h2>
      <label className="flex flex-col gap-1.5 text-[0.92rem] font-bold">{t("New password")}
        <input className={input} type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" minLength={8} required />
      </label>
      <label className="flex flex-col gap-1.5 text-[0.92rem] font-bold">{t("Repeat the new password")}
        <input className={input} type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} autoComplete="new-password" minLength={8} required />
      </label>
      <span className="text-[0.85rem] text-fg-muted">{t("At least 8 characters.")}</span>
      {err && <p role="alert" className="rounded-btn bg-danger/10 px-3 py-2 text-[0.92rem] font-bold text-danger">{err}</p>}
      <button className="btn self-start" disabled={busy}>{busy ? t("Please wait…") : t("Save and sign in")}</button>
    </form>
  );
}

/** Opened from the reset email: set a new password and sign in. */
export default function ResetPage() {
  const { t } = useT();
  return (
    <>
      <PageHeader eyebrow={t("Account")} title={t("Reset your password")} />
      <Page><Suspense><ResetForm /></Suspense></Page>
    </>
  );
}
