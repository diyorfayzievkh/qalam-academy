"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Page, PageHeader } from "@/components/app-shell";
import { PostureFigure } from "@/components/figures";
import { useProgress } from "@/components/progress";
import { RecitationBlock } from "@/components/recitation";
import { buildSteps, POSTURE_NOTES, PRAYERS, WUDU_BREAKERS, WUDU_STEPS } from "@/content/prayers";
import { RECITATIONS } from "@/content/recitations";

export default function SalahPage() {
  const { prefs, setPrefs } = useProgress();
  const [mode, setMode] = useState<"wudu" | "prayer">("prayer");
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("mode") === "wudu") setMode("wudu");
  }, []);

  return (
    <>
      <PageHeader eyebrow="Hanafi madhhab" title="How to pray"
        sub="Every prayer, step by step: what to do, what to say, and the differences for men and women." />
      <Page>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="seg" role="group" aria-label="Guide">
            <button type="button" aria-pressed={mode === "wudu"} onClick={() => setMode("wudu")}>Wuḍūʾ first</button>
            <button type="button" aria-pressed={mode === "prayer"} onClick={() => setMode("prayer")}>The prayers</button>
          </div>
          <div className="seg" role="group" aria-label="Show notes for">
            <button type="button" aria-pressed={prefs.gender === "m"} onClick={() => setPrefs({ gender: "m" })}>Men</button>
            <button type="button" aria-pressed={prefs.gender === "w"} onClick={() => setPrefs({ gender: "w" })}>Women</button>
          </div>
        </div>
        {mode === "wudu" ? <WuduGuide /> : <PrayerGuide />}
      </Page>
    </>
  );
}

function PrayerGuide() {
  const { prefs, studied, markStudied } = useProgress();
  const [pid, setPid] = useState("fajr");
  const [ui, setUi] = useState(1);
  useEffect(() => {
    const want = new URLSearchParams(window.location.search).get("p");
    const target = PRAYERS.find((x) => x.id === want);
    if (target) { setPid(target.id); setUi(target.units.findIndex((v) => v.kind === "fard")); }
  }, []);
  const [step, setStep] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const p = PRAYERS.find((x) => x.id === pid)!;
  const u = p.units[Math.min(ui, p.units.length - 1)];
  const steps = buildSteps(p, u);
  const st = steps[Math.min(step, steps.length - 1)];
  const studiedKey = `${p.id}-${ui}`;

  useEffect(() => {
    const list = listRef.current;
    const cur = list?.querySelector<HTMLElement>("[aria-current]");
    if (list && cur) list.scrollTop = cur.offsetTop - list.clientHeight / 2;
  }, [step, pid, ui]);

  const tagChip = st.tag === "fard" ? "chip chip-fard" : st.tag === "wajib" ? "chip chip-wajib" : "chip";
  const tagLabel = st.tag === "fard" ? "Farḍ" : st.tag === "wajib" ? "Wājib" : "Sunnah";

  return (
    <>
      <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr))]">
        {PRAYERS.map((x) => (
          <button key={x.id} type="button" aria-pressed={x.id === pid}
            onClick={() => { setPid(x.id); setUi(x.units.findIndex((v) => v.kind === "fard")); setStep(0); }}
            className={`flex flex-col gap-0.5 rounded-xl border-[1.5px] p-3 text-left ${x.id === pid ? "border-emerald bg-emerald-soft" : "border-border bg-bg-surface"}`}>
            <b className="font-display text-[1.1rem] font-semibold">{x.name}</b>
            <span className="text-[0.8rem] font-bold text-fg-muted">{x.units.map((v) => `${v.n} ${v.label[0]}`).join(" · ")}</span>
          </button>
        ))}
      </div>

      <section className="card flex flex-col gap-3.5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[1.3rem]">{p.name}</h2>
          <span className="text-[0.9rem] font-bold text-fg-muted">{p.time}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {p.units.map((v, k) => (
            <button key={k} type="button" aria-pressed={k === ui} onClick={() => { setUi(k); setStep(0); }}
              className={`min-w-[120px] rounded-xl border-[1.5px] px-3.5 py-2.5 text-left ${k === ui ? "border-gold bg-gold-soft" : "border-border bg-bg-surface"}`}>
              <b className="block text-[1.05rem] tabular-nums">{v.n} {v.label}</b>
              <small className="font-bold text-fg-muted">{v.status}</small>
            </button>
          ))}
        </div>
        {p.id === "jumuah" && (
          <p className="text-[0.92rem] text-fg-muted">Jumuʿah is obligatory for adult men in congregation and replaces Dhuhr. It is preceded by the khutbah. Women and those who miss it pray the 4 fard of Dhuhr.</p>
        )}
      </section>

      <section className="card grid gap-4 md:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-3">
          <div className="grid aspect-square max-h-[220px] place-items-center rounded-card bg-bg-inset p-3.5 md:max-h-none">
            <PostureFigure pos={st.pos} />
          </div>
          <div ref={listRef} className="relative flex max-h-[340px] flex-col gap-0.5 overflow-auto rounded-xl border border-border p-1.5" aria-label="All steps">
            {steps.map((s, k) => (
              <button key={k} type="button" onClick={() => setStep(k)} aria-current={k === step ? "true" : undefined}
                className={`flex gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[0.9rem] ${k === step ? "bg-emerald-soft font-extrabold text-emerald" : ""}`}>
                <small className="min-w-[44px] font-bold tabular-nums text-fg-muted">{s.rak ? `R${s.rak}` : "Start"}</small>{s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex flex-wrap items-center gap-1.5" aria-label="Rakʿah progress">
            {Array.from({ length: u.n }, (_, k) => (
              <i key={k} className={`h-1.5 w-7 rounded-full ${k + 1 < st.rak ? "bg-emerald" : k + 1 === st.rak ? "bg-gold-bright" : "bg-bg-inset"}`} />
            ))}
            <span className="ml-1.5 text-[0.85rem] font-bold text-fg-muted">{st.rak ? `Rakʿah ${st.rak} of ${u.n}` : "Before the prayer"}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className={tagChip}>{tagLabel}</span>
            <span className="text-[0.85rem] font-bold tabular-nums text-fg-muted">Step {step + 1} of {steps.length}</span>
          </div>
          <h3 className="text-[1.35rem]">{st.title}</h3>
          <p className="max-w-[62ch]">{st.text}</p>
          {st.note && (
            <div className="rounded-xl bg-gold-soft px-3.5 py-2.5 text-[0.95rem]">
              <b className="text-gold">{prefs.gender === "m" ? "For men" : "For women"}:</b> {POSTURE_NOTES[st.note][prefs.gender]}
            </div>
          )}
          {st.rec && <RecitationBlock r={RECITATIONS[st.rec]} />}
          <div className="flex flex-wrap justify-between gap-2.5">
            <button type="button" className="btn btn-ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>Previous</button>
            {step < steps.length - 1 ? (
              <button type="button" className="btn" onClick={() => setStep(step + 1)}>Next step</button>
            ) : (
              <button type="button" className="btn btn-gold" disabled={!!studied[studiedKey]}
                onClick={() => markStudied(studiedKey, "prayer studied")}>
                {studied[studiedKey] ? "Studied ✓" : "Mark as studied · +20"}
              </button>
            )}
          </div>
        </div>
      </section>
      <p className="max-w-[70ch] text-[0.85rem] text-fg-muted">
        Content follows the Hanafi madhhab as taught in standard texts (al-Hidāyah, Nūr al-Īḍāḥ). Have a qualified scholar review all text and Arabic before public release.
      </p>
    </>
  );
}

function WuduGuide() {
  const { studied, markStudied } = useProgress();
  return (
    <>
      <section className="card flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[1.3rem]">Wuḍūʾ step by step</h2>
          <span className="flex gap-2"><span className="chip chip-fard">Farḍ</span><span className="chip">Sunnah</span></span>
        </div>
        <p className="max-w-[65ch] text-fg-muted">
          In the Hanafi school, four acts are farḍ. Leaving any of them, even a dry spot the size of a fingernail, means the wuḍūʾ is not valid. Do the steps without long pauses, so no limb dries before the next is washed.
        </p>
        <ol className="flex flex-col gap-2.5">
          {WUDU_STEPS.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[36px_1fr] items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-soft text-[0.9rem] font-extrabold text-emerald">{i + 1}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2"><b>{s.title}</b><span className={s.tag === "fard" ? "chip chip-fard" : "chip"}>{s.tag === "fard" ? "Farḍ" : "Sunnah"}</span></div>
                <p className="max-w-[62ch] text-fg-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <RecitationBlock r={RECITATIONS.wuduDua} />
      </section>
      <section className="card flex flex-col gap-2.5">
        <h2 className="text-[1.2rem]">What breaks wuḍūʾ (Hanafi)</h2>
        <ul className="flex max-w-[65ch] list-disc flex-col gap-1.5 pl-5">
          {WUDU_BREAKERS.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-gold" disabled={!!studied.wudu} onClick={() => markStudied("wudu", "wuḍūʾ studied")}>
            {studied.wudu ? "Studied ✓" : "Mark as studied · +20"}
          </button>
          <Link className="btn btn-ghost" href="/quiz/wudu">Take the Wuḍūʾ quiz</Link>
        </div>
      </section>
    </>
  );
}
