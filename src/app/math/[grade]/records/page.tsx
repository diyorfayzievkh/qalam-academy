"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { useAccount } from "@/components/account";
import { AttemptTable } from "@/components/math/runner";
import { findGrade } from "@/content/math";
import { loadAttempts, pct, type Attempt } from "@/lib/math-records";

type Member = { id: string; name: string; kind: string; me?: boolean };
const KINDS = [["all", "All tests"], ["item", "Items"], ["subtopic", "Subtopics"], ["topic", "Topics"], ["grade", "Grade"]] as const;

/** Every test taken in this grade, with filters; parents can pick a child. */
export default function RecordsPage() {
  const { grade: id } = useParams<{ grade: string }>();
  const { user, ready, call } = useAccount();
  const [members, setMembers] = useState<Member[]>([]);
  const [who, setWho] = useState<string>("");
  const [kind, setKind] = useState<string>("all");
  const [rows, setRows] = useState<Attempt[] | null>(null);
  const g = findGrade(id);

  useEffect(() => {
    if (!user || user.role !== "PARENT") return;
    call<{ members?: Member[] }>("/api/family").then((r) => { if (r.ok) setMembers(r.data.members ?? []); });
  }, [user, call]);
  useEffect(() => { if (!ready) return; setRows(null); loadAttempts({ grade: id, user: who || undefined }, Boolean(user)).then(setRows); }, [ready, user, id, who]);
  const shown = useMemo(() => (rows ?? []).filter((a) => kind === "all" || a.kind === kind), [rows, kind]);
  if (!g) notFound();

  const avg = shown.length ? Math.round(shown.reduce((s, a) => s + pct(a), 0) / shown.length) : 0;
  return (
    <>
      <PageHeader eyebrow={`${g.title} Math`} title="Test records" sub="Every test and retake, with score, time and stars." />
      <Page>
        <Link href={`/math/${g.id}`} className="font-bold text-fg-muted">← {g.title} Math</Link>
        <div className="flex flex-wrap items-center gap-2.5">
          {members.length > 1 && (
            <label className="flex items-center gap-2 font-bold">Learner
              <select className="rounded-btn border-2 border-border bg-bg-surface px-2.5 py-1.5 font-normal" value={who} onChange={(e) => setWho(e.target.value)}>
                {members.map((m) => <option key={m.id} value={m.me ? "" : m.id}>{m.name}{m.me ? " (me)" : ""}</option>)}
              </select>
            </label>
          )}
          <div className="seg" role="group" aria-label="Test type">
            {KINDS.map(([k, l]) => <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)}>{l}</button>)}
          </div>
        </div>
        {!user && <p className="text-[0.9rem] text-fg-muted">These records are saved on this device. Sign in to keep them in your family account, where parents can see them.</p>}
        <div className="grid grid-cols-3 gap-2.5">
          {[["Tests taken", shown.length], ["Average", `${avg}%`], ["Perfect scores", shown.filter((a) => a.score === a.total).length]].map(([l, v]) => (
            <div key={String(l)} className="card flex flex-col items-center gap-0.5 py-3 text-center"><b className="text-[1.4rem]">{v}</b><span className="text-[0.8rem] text-fg-muted">{l}</span></div>
          ))}
        </div>
        <div className="card">{rows ? <AttemptTable attempts={shown} /> : <p className="text-fg-muted">Loading…</p>}</div>
      </Page>
    </>
  );
}
