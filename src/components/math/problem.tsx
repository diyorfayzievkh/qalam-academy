"use client";

import { useEffect, useRef, useState } from "react";
import type { Problem } from "@/content/math/types";
import { check, type Verdict } from "@/content/math/util";
import { MathVisual } from "./visual";

const HELP: Record<string, string[]> = {
  half: ["½"], fraction: ["/", "space"], remainder: ["R"], time: [":"],
};
const PLACEHOLDER: Record<string, string> = {
  number: "Your answer", half: "e.g. 7½", fraction: "e.g. 3/4 or 1 1/2", remainder: "e.g. 12 R 3", time: "e.g. 4:35",
};

/** One problem: picture, answer box (or choices), hint and feedback. */
export function ProblemCard({ p, onDone, label, showHint = true }: { p: Problem; onDone: (right: boolean, answer: string) => void; label?: string; showHint?: boolean }) {
  const [value, setValue] = useState("");
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [hint, setHint] = useState(false);
  const [tries, setTries] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => { setValue(""); setVerdict(null); setHint(false); setTries(0); input.current?.focus({ preventScroll: true }); }, [p]);

  const finished = verdict === "right" || verdict === "wrong";
  function submit(v = value) {
    if (finished) return;
    const r = check(p, v);
    if (r === "unreadable" || (r === "not-simplest" && tries === 0)) { setVerdict(r); setTries((t) => t + 1); return; }
    const final: Verdict = r === "not-simplest" ? "wrong" : r;
    setVerdict(final);
    onDone(final === "right", v);
  }

  return (
    <div className="card flex flex-col gap-3">
      {label && <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-gold">{label}</span>}
      <p className="text-[1.25rem] font-bold leading-snug">{p.prompt}</p>
      <MathVisual v={p.visual} />
      {p.kind === "choice" ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {p.choices!.map((c) => {
            const picked = value === c; const show = finished && (c === p.answer || picked);
            return (
              <button key={c} type="button" disabled={finished} onClick={() => { setValue(c); submit(c); }}
                className={`rounded-btn border-2 px-4 py-3 text-left text-[1.1rem] font-bold transition-colors ${show ? (c === p.answer ? "border-emerald bg-emerald-soft" : "border-danger bg-danger-soft") : "border-border bg-bg-surface hover:border-emerald"}`}>
                {c}
              </button>
            );
          })}
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <input ref={input} value={value} onChange={(e) => { setValue(e.target.value); if (verdict === "unreadable" || verdict === "not-simplest") setVerdict(null); }}
              disabled={finished} inputMode={p.kind === "number" ? "decimal" : "text"} autoComplete="off" autoCapitalize="characters" spellCheck={false}
              placeholder={PLACEHOLDER[p.kind]} aria-label="Answer"
              className="h-14 w-full max-w-[260px] rounded-btn border-2 border-border bg-bg-surface px-4 text-[1.5rem] font-bold outline-none focus:border-emerald" />
            {p.unit && <span className="text-[1.05rem] font-bold text-fg-muted">{p.unit}</span>}
          </div>
          {!finished && (
            <div className="flex flex-wrap gap-2">
              {(HELP[p.kind] ?? []).map((k) => <button key={k} type="button" className="btn btn-ghost min-w-[3rem] px-3 py-2 text-[1.1rem]"
                onClick={() => { setValue((v) => v + (k === "space" ? " " : k === "R" ? " R " : k)); input.current?.focus(); }}>{k === "space" ? "␣ space" : k}</button>)}
              <button className="btn">Check</button>
              {showHint && <button type="button" className="btn btn-ghost" onClick={() => setHint(true)}>💡 Hint</button>}
            </div>
          )}
        </form>
      )}
      {hint && !finished && <p className="rounded-btn bg-gold-soft px-3 py-2 text-[0.95rem]">💡 {p.hint}</p>}
      {verdict === "unreadable" && <p className="text-[0.92rem] font-bold text-danger">I couldn’t read that. {PLACEHOLDER[p.kind] ? `Try writing it like: ${PLACEHOLDER[p.kind].replace("e.g. ", "")}` : ""}</p>}
      {verdict === "not-simplest" && <p className="text-[0.92rem] font-bold text-gold">Right amount! Now write it in simplest form.</p>}
      {verdict === "right" && <p className="rounded-btn bg-emerald-soft px-3 py-2 font-bold text-emerald">✓ Correct! <span className="font-normal text-fg">{p.explain}</span></p>}
      {verdict === "wrong" && <p className="rounded-btn bg-danger-soft px-3 py-2"><b className="text-danger">Not quite.</b> The answer is <b>{p.answer}{p.unit && !["¢"].includes(p.unit) ? ` ${p.unit}` : p.unit ?? ""}</b>. {p.explain}</p>}
    </div>
  );
}
