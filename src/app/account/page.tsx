"use client";

import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { ProfileEditor } from "@/components/profile-editor";
import { useAccount } from "@/components/account";
import { useT } from "@/components/lang";
import { BADGES, badgeLevel } from "@/content/badges";
import { LANGS } from "@/lib/i18n";
import { readDeviceFamily, saveDeviceFamily, type DeviceFamily } from "@/lib/family-device";

type Member = { id: string; name: string; kind: string; role: string; me: boolean; points?: number; studied?: number; answered?: number; perfect?: number; memorized?: number; lastActive?: string | null };
type FamilyData = { family: { name: string; code: string | null } | null; role?: string; members?: Member[] };

const input = "w-full rounded-btn border border-border bg-bg-surface px-3 py-2.5 text-[1rem] outline-none focus:border-emerald";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="flex flex-col gap-1.5 text-[0.92rem] font-bold">{label}{children}</label>;
}
function Err({ msg }: { msg: string | null }) {
  return msg ? <p role="alert" className="rounded-btn bg-danger/10 px-3 py-2 text-[0.92rem] font-bold text-danger">{msg}</p> : null;
}

/** Small form helper: submit → call API → on success run `done`. */
function useForm(fn: () => Promise<{ ok: boolean; data: { error?: string } }>, done: () => void | Promise<void>) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const submit = async (e?: FormEvent) => {
    e?.preventDefault();
    setBusy(true); setErr(null);
    const r = await fn();
    setBusy(false);
    if (r.ok) await done(); else setErr(r.data.error ?? "Something went wrong.");
  };
  return { busy, err, submit };
}

// ------------------------------------------------------------------ signed out
function SignedOut() {
  const { t } = useT();
  const { call, refresh } = useAccount();
  const [tab, setTab] = useState<"login" | "signup" | "child">("login");
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [pw, setPw] = useState("");
  const [code, setCode] = useState(""); const [pin, setPin] = useState("");
  const [forgot, setForgot] = useState(false);
  // A family saved on this device: children just tap their name and type their PIN.
  const [saved, setSaved] = useState<DeviceFamily | null>(null);
  const [otherCode, setOtherCode] = useState(false);
  useEffect(() => { const d = readDeviceFamily(); if (d) { setSaved(d); setCode(d.code); setTab("child"); } }, []);
  const useSaved = tab === "child" && saved && !otherCode;

  const f = useForm(() => tab === "login" ? call("/api/auth/login", "POST", { email, password: pw })
    : tab === "signup" ? call("/api/auth/signup", "POST", { name, email, password: pw })
    : call("/api/auth/child", "POST", { code: useSaved ? saved!.code : code, name, pin }), async () => {
      if (tab === "child") {
        const c = (useSaved ? saved!.code : code).trim().toUpperCase();
        const prev = readDeviceFamily();
        saveDeviceFamily({ code: c, children: [...(prev?.code === c ? prev.children : []), name.trim()] });
      }
      await refresh();
    });

  if (forgot) return <ForgotForm email={email} back={() => setForgot(false)} />;

  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col gap-4">
      <div className="seg self-start" role="group" aria-label={t("Account")}>
        <button type="button" aria-pressed={tab === "login"} onClick={() => setTab("login")}>{t("Sign in")}</button>
        <button type="button" aria-pressed={tab === "signup"} onClick={() => setTab("signup")}>{t("Create account")}</button>
        <button type="button" aria-pressed={tab === "child"} onClick={() => setTab("child")}>{t("Child sign-in")}</button>
      </div>
      <form onSubmit={f.submit} className="card flex flex-col gap-3.5">
        <h2 className="text-[1.25rem]">{tab === "login" ? t("Parent sign in") : tab === "signup" ? t("Create a parent account") : t("Sign in as a child")}</h2>
        <p className="text-[0.92rem] text-fg-muted">
          {tab === "child" ? (useSaved ? t("Tap your name and type your PIN.") : t("Ask your parent for the family code and your PIN.")) : t("Your progress syncs across your devices. What you have done on this device so far is kept.")}
        </p>
        {tab === "child" ? (
          <>
            {useSaved ? (
              <div className="flex flex-col gap-2 rounded-btn bg-emerald-soft px-3.5 py-3">
                <span className="text-[0.92rem] font-bold">{saved!.name ? t("Family: {name}", { name: saved!.name }) : t("Your family is saved on this device.")}</span>
                <button type="button" className="self-start text-[0.85rem] font-bold text-emerald underline underline-offset-4" onClick={() => { setOtherCode(true); setCode(""); }}>{t("Use a different family code")}</button>
              </div>
            ) : (
              <Field label={t("Family code")}><input className={`${input} font-mono uppercase tracking-[0.2em]`} value={code} onChange={(e) => setCode(e.target.value)} autoCapitalize="characters" autoComplete="off" required maxLength={12} /></Field>
            )}
            {useSaved && saved!.children.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="text-[0.92rem] font-bold">{t("Who are you?")}</span>
                <div className="flex flex-wrap gap-2">
                  {saved!.children.map((c) => (
                    <button key={c} type="button" aria-pressed={name === c} onClick={() => setName(c)}
                      className={`rounded-full border-2 px-4 py-2 font-bold ${name === c ? "border-emerald bg-emerald text-white" : "border-border bg-bg-surface"}`}>{c}</button>
                  ))}
                </div>
              </div>
            )}
            <Field label={t("Your name")}><input className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" required maxLength={40} /></Field>
            <Field label={t("PIN (4 digits)")}><input className={`${input} tracking-[0.4em]`} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" type="password" autoComplete="off" required /></Field>
          </>
        ) : (
          <>
            {tab === "signup" && <Field label={t("Your name")}><input className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required maxLength={60} /></Field>}
            <Field label={t("Email")}><input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required /></Field>
            <Field label={t("Password")}><input className={input} type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete={tab === "signup" ? "new-password" : "current-password"} minLength={tab === "signup" ? 8 : undefined} required /></Field>
            {tab === "signup" && <span className="text-[0.85rem] text-fg-muted">{t("At least 8 characters.")}</span>}
            {tab === "login" && <button type="button" className="self-start text-[0.88rem] font-bold text-emerald underline underline-offset-4" onClick={() => setForgot(true)}>{t("Forgot password?")}</button>}
          </>
        )}
        <Err msg={f.err} />
        <button className="btn self-start" disabled={f.busy}>{f.busy ? t("Please wait…") : tab === "signup" ? t("Create account") : t("Sign in")}</button>
      </form>
      <p className="text-[0.88rem] text-fg-muted">{t("You can keep using the app without an account; progress then stays on this device only.")}</p>
    </div>
  );
}

/** Ask for a one-time password reset link by email. */
function ForgotForm({ email: initial, back }: { email: string; back: () => void }) {
  const { t } = useT();
  const { call } = useAccount();
  const [email, setEmail] = useState(initial);
  const [sent, setSent] = useState(false);
  const f = useForm(() => call("/api/auth/forgot", "POST", { email }), () => setSent(true));
  return (
    <div className="mx-auto flex w-full max-w-[480px] flex-col gap-4">
      <form onSubmit={f.submit} className="card flex flex-col gap-3.5">
        <h2 className="text-[1.25rem]">{t("Reset your password")}</h2>
        {sent ? (
          <p className="text-[0.95rem]">{t("If an account uses {email}, we have sent it a link to choose a new password. The link works for 1 hour. Check your spam folder too.", { email })}</p>
        ) : (
          <>
            <p className="text-[0.92rem] text-fg-muted">{t("Enter the email you signed up with and we will send you a link to choose a new password.")}</p>
            <Field label={t("Email")}><input className={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required /></Field>
            <Err msg={f.err && t(f.err)} />
            <button className="btn self-start" disabled={f.busy}>{f.busy ? t("Please wait…") : t("Send reset link")}</button>
          </>
        )}
        <button type="button" className="self-start text-[0.88rem] font-bold text-emerald underline underline-offset-4" onClick={back}>{t("Back to sign in")}</button>
      </form>
    </div>
  );
}

// ------------------------------------------------------------------ family
function Stat({ n, label }: { n: number | string; label: string }) {
  return <div className="flex flex-col rounded-btn bg-bg-inset px-2.5 py-2"><b className="font-display text-[1.15rem] tabular-nums">{n}</b><span className="text-[0.78rem] text-fg-muted">{label}</span></div>;
}

function MemberCard({ m, parent, reload }: { m: Member; parent: boolean; reload: () => void }) {
  const { t } = useT();
  const { call } = useAccount();
  const [mode, setMode] = useState<null | "pin" | "remove">(null);
  const [pin, setPin] = useState("");
  const lvl = badgeLevel(m.points ?? 0);
  const changePin = useForm(() => call("/api/family/children", "PATCH", { id: m.id, pin }), () => { setMode(null); setPin(""); });
  const remove = useForm(() => call(`/api/family/children?id=${m.id}`, "DELETE"), reload);
  const ago = m.lastActive ? new Date(m.lastActive).toLocaleDateString() : t("not yet");

  return (
    <article className="card flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-[1.15rem]">{m.name}{m.me ? ` · ${t("you")}` : ""}</h3>
        <span className="text-[0.8rem] font-extrabold uppercase tracking-wider text-emerald">{m.role === "PARENT" ? t("Parent") : t("Child")}</span>
      </div>
      {m.points !== undefined && (
        <>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            <Stat n={(m.points ?? 0).toLocaleString()} label={t("points")} />
            <Stat n={lvl ? t(BADGES[lvl - 1].name) : "–"} label={t("badge")} />
            <Stat n={m.studied ?? 0} label={t("lessons & guides")} />
            <Stat n={m.perfect ?? 0} label={t("perfect quizzes")} />
            <Stat n={m.memorized ?? 0} label={t("sūrahs memorised")} />
          </div>
          <span className="text-[0.85rem] text-fg-muted">{t("Last synced")}: {ago}</span>
        </>
      )}
      {parent && m.kind === "CHILD" && (
        <div className="flex flex-col gap-2.5">
          {mode === null && (
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn btn-ghost" onClick={() => setMode("pin")}>{t("Change PIN")}</button>
              <button type="button" className="btn btn-ghost" onClick={() => setMode("remove")}>{t("Remove")}</button>
            </div>
          )}
          {mode === "pin" && (
            <form onSubmit={changePin.submit} className="flex flex-wrap items-end gap-2">
              <Field label={t("New PIN (4 digits)")}><input className={`${input} w-32 tracking-[0.4em]`} value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" required /></Field>
              <button className="btn" disabled={changePin.busy || pin.length !== 4}>{t("Save")}</button>
              <button type="button" className="btn btn-ghost" onClick={() => setMode(null)}>{t("Cancel")}</button>
              <div className="w-full"><Err msg={changePin.err} /></div>
            </form>
          )}
          {mode === "remove" && (
            <div className="flex flex-col gap-2 rounded-btn border border-gold p-3">
              <p className="text-[0.92rem]">{t("Remove {name} and all of their progress? This cannot be undone.", { name: m.name })}</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn" disabled={remove.busy} onClick={() => remove.submit()}>{t("Yes, remove")}</button>
                <button type="button" className="btn btn-ghost" onClick={() => setMode(null)}>{t("Cancel")}</button>
              </div>
              <Err msg={remove.err} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function Family() {
  const { t } = useT();
  const { user, call, refresh } = useAccount();
  const [data, setData] = useState<FamilyData | null>(null);
  const [famName, setFamName] = useState(""); const [joinCode, setJoinCode] = useState("");
  const [kidName, setKidName] = useState(""); const [kidPin, setKidPin] = useState("");
  const [copied, setCopied] = useState(false);

  const load = useCallback(async () => {
    const r = await call<FamilyData>("/api/family");
    if (!r.ok) return;
    setData(r.data);
    // Remember the family on this device so children can sign in with their name and PIN.
    const fam = r.data.family;
    if (fam) saveDeviceFamily({ code: fam.code ?? undefined, name: fam.name, children: (r.data.members ?? []).filter((m) => m.kind === "CHILD").map((m) => m.name) });
  }, [call]);
  useEffect(() => { load(); }, [load, user?.familyId]);

  const create = useForm(() => call("/api/family", "POST", { name: famName }), refresh);
  const join = useForm(() => call("/api/family/join", "POST", { code: joinCode }), refresh);
  const addKid = useForm(() => call("/api/family/children", "POST", { name: kidName, pin: kidPin }), async () => { setKidName(""); setKidPin(""); await load(); });

  if (!user) return null;
  if (!user.familyId) {
    if (user.kind !== "ADULT") return null;
    return (
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.3rem]">{t("Family circle")}</h2>
        <p className="text-fg-muted">{t("Create a private family circle to add your children and see their learning progress. Nothing is public, and there are no leaderboards.")}</p>
        <div className="grid gap-3.5 md:grid-cols-2">
          <form onSubmit={create.submit} className="card flex flex-col gap-3">
            <h3 className="text-[1.1rem]">{t("Create a family")}</h3>
            <Field label={t("Family name")}><input className={input} value={famName} onChange={(e) => setFamName(e.target.value)} placeholder={t("e.g. The Karimov family")} required maxLength={60} /></Field>
            <Err msg={create.err} />
            <button className="btn self-start" disabled={create.busy}>{t("Create")}</button>
          </form>
          <form onSubmit={join.submit} className="card flex flex-col gap-3">
            <h3 className="text-[1.1rem]">{t("Join your spouse’s family")}</h3>
            <Field label={t("Family code")}><input className={`${input} font-mono uppercase tracking-[0.2em]`} value={joinCode} onChange={(e) => setJoinCode(e.target.value)} required maxLength={12} /></Field>
            <Err msg={join.err} />
            <button className="btn self-start" disabled={join.busy}>{t("Join")}</button>
          </form>
        </div>
      </section>
    );
  }

  const parent = data?.role === "PARENT";
  return (
    <section className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1">
        <span className="eyebrow">{t("Family circle")}</span>
        <h2 className="text-[1.4rem]">{data?.family?.name ?? "…"}</h2>
      </div>
      {parent && data?.family?.code && (
        <div className="card flex flex-col gap-2 border-l-[3px] border-l-gold-bright">
          <span className="text-[0.9rem] text-fg-muted">{t("Family code")}</span>
          <div className="flex flex-wrap items-center gap-3">
            <b className="select-all font-mono text-[1.6rem] tracking-[0.25em]">{data.family.code}</b>
            <button type="button" className="btn btn-ghost" onClick={async () => { try { await navigator.clipboard.writeText(data.family!.code!); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {} }}>{copied ? t("Copied") : t("Copy")}</button>
          </div>
          <p className="text-[0.88rem] text-fg-muted">{t("Children sign in with this code, their name and their PIN. Your spouse can join the family with it too. Keep it within the family.")}</p>
        </div>
      )}
      <div className="grid gap-3.5 lg:grid-cols-2">
        {(data?.members ?? []).map((m) => <MemberCard key={m.id} m={m} parent={parent} reload={load} />)}
      </div>
      {parent && (
        <form onSubmit={addKid.submit} className="card flex flex-col gap-3">
          <h3 className="text-[1.1rem]">{t("Add a child")}</h3>
          <div className="flex flex-wrap items-end gap-3">
            <div className="min-w-[180px] flex-1"><Field label={t("Child’s name")}><input className={input} value={kidName} onChange={(e) => setKidName(e.target.value)} required maxLength={40} /></Field></div>
            <Field label={t("PIN (4 digits)")}><input className={`${input} w-32 tracking-[0.4em]`} value={kidPin} onChange={(e) => setKidPin(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" required /></Field>
            <button className="btn" disabled={addKid.busy || kidPin.length !== 4}>{t("Add")}</button>
          </div>
          <Err msg={addKid.err} />
          <p className="text-[0.85rem] text-fg-muted">{t("Your child signs in on their own device with “Child sign-in”. You see their points, badges, lessons, quizzes and memorised sūrahs here. Prayers and worship are never tracked or scored.")}</p>
        </form>
      )}
    </section>
  );
}

// ------------------------------------------------------------------ signed in
function SignedIn() {
  const { t, lang, setLang } = useT();
  const { user, sync, signOut, call } = useAccount();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const del = useForm(() => call("/api/me", "DELETE"), signOut);
  if (!user) return null;
  const syncText = { off: "", syncing: t("Syncing…"), synced: t("Progress synced"), error: t("Couldn’t sync. Will retry.") }[sync];

  return (
    <div className="flex flex-col gap-6">
      <section className="card flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="text-[0.88rem] text-fg-muted">{t("Signed in as")}</span>
          <b className="font-display text-[1.25rem]">{user.name}</b>
          {user.email && <span className="text-[0.9rem] text-fg-muted">{user.email}</span>}
          {syncText && <span className="text-[0.85rem] font-bold text-emerald">{syncText}</span>}
        </div>
        <button type="button" className="btn btn-ghost" onClick={signOut}>{t("Sign out")}</button>
      </section>

      <section className="card flex flex-col gap-2.5">
        <h2 className="text-[1.15rem]">{t("Language")}</h2>
        <div className="seg self-start" role="group" aria-label={t("Language")}>
          {LANGS.map((l) => <button key={l.id} type="button" aria-pressed={lang === l.id} onClick={() => setLang(l.id)}>{l.name}</button>)}
        </div>
        <p className="text-[0.88rem] text-fg-muted">{t("Menus and buttons are translated now; lessons and stories are being translated section by section.")}</p>
      </section>

      <Family />

      {user.kind === "CHILD" && <p className="text-[0.9rem] text-fg-muted">{t("To change your PIN, ask your parent.")}</p>}

      {user.kind === "ADULT" && (
        <section className="flex flex-col gap-2">
          {!confirmDelete ? (
            <button type="button" className="self-start text-[0.9rem] font-bold text-fg-muted underline" onClick={() => setConfirmDelete(true)}>{t("Delete my account")}</button>
          ) : (
            <div className="card flex flex-col gap-2 border-gold">
              <p>{t("Delete your account and all its progress? If you are the only parent, your family and your children’s profiles are deleted too. This cannot be undone.")}</p>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn" disabled={del.busy} onClick={() => del.submit()}>{t("Yes, delete everything")}</button>
                <button type="button" className="btn btn-ghost" onClick={() => setConfirmDelete(false)}>{t("Cancel")}</button>
              </div>
              <Err msg={del.err} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default function AccountPage() {
  const { t } = useT();
  const { ready, available, user } = useAccount();
  return (
    <>
      <PageHeader eyebrow="Account" title={user ? "Family & account" : "Sign in"}
        sub="Sync progress across devices, and follow your children’s learning in a private family circle." />
      <Page>
        <ProfileEditor />
        {!ready ? <p className="text-fg-muted">{t("Loading…")}</p>
          : !available ? <p className="card text-fg-muted">{t("Accounts are not available yet. Your progress is saved on this device.")}</p>
          : user ? <SignedIn /> : <SignedOut />}
      </Page>
    </>
  );
}
