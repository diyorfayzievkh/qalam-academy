// Site-wide search. Runs on the server only, so the full content never ships
// to the browser just for searching. Matching ignores case, diacritics and
// ʿ/ʾ marks, so “abu hanifa” finds “Abū Ḥanīfah”.

import { WORLDS } from "@/content/library";
import { TOPICS } from "@/content/topics";
import { BEDTIME, BEDTIME_CATS } from "@/content/bedtime";
import { MIZAN } from "@/content/mizan";
import { HIFZ } from "@/content/hifz";
import { PRAYERS } from "@/content/prayers";
import { RAMADAN_DUAS } from "@/content/ramadan";
import { NAV } from "@/lib/nav";

export type SearchKind = "Section" | "World" | "Lesson" | "Akhlaq & Adab" | "Quiz" | "Bedtime story" | "Prayer guide" | "Mizan" | "Hifz" | "Ramadan";
export type SearchHit = { kind: SearchKind; title: string; sub: string; href: string; snippet?: string };

type Entry = SearchHit & { nTitle: string; nSub: string; body: string; nBody: string; map: number[] };

const MARKS = /[̀-ͯ]/g;
const STRIP = /[ʿʾ‘’'`ʻʼ]/g;

/** Normalise text and keep a map from each normalised char to its original index. */
function normWithMap(s: string): { n: string; map: number[] } {
  let n = "";
  const map: number[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (STRIP.test(ch)) { STRIP.lastIndex = 0; continue; }
    const base = ch.normalize("NFD").replace(MARKS, "").toLowerCase();
    for (const b of base) { n += b; map.push(i); }
  }
  return { n, map };
}
export const norm = (s: string) => s.normalize("NFD").replace(MARKS, "").replace(STRIP, "").toLowerCase();

/** Every string inside a value, joined; used for lesson blocks of any shape. */
const SKIP_KEYS = new Set(["type", "href", "id", "icon", "kind", "tone", "ar", "arabic", "group", "category", "correct", "answer"]);
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === "string") { if (!v.startsWith("/")) out.push(v); }
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) { if (!SKIP_KEYS.has(k)) strings(x, out); }
  return out;
}

function entry(h: SearchHit, body: string): Entry {
  const { n, map } = normWithMap(body);
  return { ...h, nTitle: norm(h.title), nSub: norm(h.sub), body, nBody: n, map };
}

let INDEX: Entry[] | null = null;
function build(): Entry[] {
  const e: Entry[] = [];
  for (const n of NAV) e.push(entry({ kind: "Section", title: n.label, sub: n.desc, href: n.href }, ""));

  for (const w of WORLDS) {
    e.push(entry({ kind: "World", title: w.title, sub: w.sub, href: `/learn/${w.id}` }, ""));
    for (const l of w.lessons) {
      e.push(entry({ kind: "Lesson", title: l.title, sub: `${w.title}${l.group ? ` · ${l.group}` : ""}`, href: `/learn/${w.id}/${l.id}` },
        [l.summary, ...strings(l.blocks)].join(" ")));
    }
    for (const a of w.adab ?? []) {
      e.push(entry({ kind: "Akhlaq & Adab", title: a.title, sub: a.category, href: `/learn/${w.id}/${a.id}` }, strings(a).join(" ")));
    }
  }

  for (const t of TOPICS) {
    if (t.hidden) continue;
    e.push(entry({ kind: "Quiz", title: t.title, sub: `${t.questions.length} questions · ${t.sub}`, href: `/quiz/${t.id}` },
      t.questions.map((q) => q.q).join(" ")));
  }

  for (const s of BEDTIME) {
    const cat = BEDTIME_CATS.find((c) => c.id === s.cat)?.title ?? "";
    e.push(entry({ kind: "Bedtime story", title: s.title, sub: `${cat} · ${s.teaser}`, href: `/stories/${s.id}` }, [s.moral, ...s.paras].join(" ")));
  }

  e.push(entry({ kind: "Prayer guide", title: "Wuḍūʾ (ablution)", sub: "Step by step, and what breaks it", href: "/salah?mode=wudu" }, "wudu ablution"));
  for (const p of PRAYERS) {
    e.push(entry({ kind: "Prayer guide", title: `How to pray ${p.name}`, sub: `${p.time} · ${p.units.map((u) => `${u.n} ${u.label}`).join(", ")}`, href: `/salah?p=${p.id}` }, ""));
  }

  for (const m of MIZAN) {
    e.push(entry({ kind: "Mizan", title: m.title, sub: `${m.category} · ${m.weight}`, href: `/mizan#m-${m.id}` }, [m.tr ?? "", m.meaning ?? "", m.reward].join(" ")));
  }

  for (const h of HIFZ) {
    e.push(entry({ kind: "Hifz", title: h.name, sub: `${h.ayahs} āyāt · ${h.group}`, href: `/hifz/${h.id}` }, strings(h).join(" ")));
  }

  for (const d of RAMADAN_DUAS) {
    e.push(entry({ kind: "Ramadan", title: d.occasion, sub: `Ramadan duʿāʾ · ${d.label}`, href: "/ramadan" }, [d.r.tr, d.r.en, d.source].join(" ")));
  }
  return e;
}

function snippet(x: Entry, at: number, len: number) {
  const start = x.map[at] ?? 0;
  const end = x.map[Math.min(at + len, x.map.length - 1)] ?? start;
  const a = Math.max(0, start - 70);
  const b = Math.min(x.body.length, end + 110);
  const s = x.body.slice(a, b).replace(/\s+/g, " ").trim();
  return `${a > 0 ? "…" : ""}${s}${b < x.body.length ? "…" : ""}`;
}

export function search(q: string, limit = 60): SearchHit[] {
  const query = norm(q).trim();
  if (query.length < 2) return [];
  const words = query.split(/\s+/).filter(Boolean);
  INDEX ??= build();

  const scored: { s: number; h: SearchHit }[] = [];
  for (const x of INDEX) {
    let s = 0;
    let ok = true;
    for (const w of words) {
      const inT = x.nTitle.includes(w), inS = x.nSub.includes(w), inB = x.nBody.includes(w);
      if (!inT && !inS && !inB) { ok = false; break; }
      s += (inT ? 10 : 0) + (inS ? 4 : 0) + (inB ? 1 : 0);
    }
    if (!ok) continue;
    if (x.nTitle.includes(query)) s += 15;
    if (x.nTitle.startsWith(query)) s += 10;
    if (words.length > 1 && (x.nSub.includes(query) || x.nBody.includes(query))) s += 8;
    if (x.kind === "Section" || x.kind === "World") s += 2;

    let snip: string | undefined;
    if (!words.every((w) => x.nTitle.includes(w) || x.nSub.includes(w))) {
      const w = words.find((w) => x.nBody.includes(w))!;
      const i = x.nBody.indexOf(query) >= 0 ? x.nBody.indexOf(query) : x.nBody.indexOf(w);
      snip = snippet(x, i, query.length);
    }
    scored.push({ s, h: { kind: x.kind, title: x.title, sub: x.sub, href: x.href, snippet: snip } });
  }
  return scored.sort((a, b) => b.s - a.s).slice(0, limit).map((x) => x.h);
}
