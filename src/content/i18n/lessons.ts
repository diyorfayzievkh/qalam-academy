"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import type { Lesson } from "../library";

// Lesson translations are overlays: each lesson lists its title, summary and
// blocks in the same order as the English, with only the readable text filled
// in. Anything missing (a null block, a missing field) falls back to English,
// so a world can be translated gradually without breaking.

export type LessonTr = { title?: string; summary?: string; blocks?: unknown[]; quiz?: unknown[] };
export type LessonTrMap = Record<string, LessonTr>;

// Fields that are identifiers, links, Arabic or references: never overwritten.
const KEEP = new Set(["type", "id", "href", "ar", "tr", "kind", "answer", "best", "audio", "surah", "ayah", "src"]);

function merge<T>(en: T, tr: unknown): T {
  if (tr === null || tr === undefined) return en;
  if (typeof en === "string") return (typeof tr === "string" && tr.trim() ? tr : en) as T;
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return en;
    return en.map((v, i) => merge(v, tr[i])) as T;
  }
  if (en && typeof en === "object") {
    if (typeof tr !== "object" || Array.isArray(tr)) return en;
    const out: Record<string, unknown> = { ...(en as Record<string, unknown>) };
    for (const [k, v] of Object.entries(en as Record<string, unknown>)) {
      if (KEEP.has(k)) continue;
      out[k] = merge(v, (tr as Record<string, unknown>)[k]);
    }
    return out as T;
  }
  return en;
}

export function translateLesson(l: Lesson, tr: LessonTr | undefined): Lesson {
  if (!tr) return l;
  return {
    ...l,
    title: merge(l.title, tr.title),
    summary: merge(l.summary, tr.summary),
    blocks: tr.blocks ? l.blocks.map((b, i) => merge(b, tr.blocks![i])) : l.blocks,
  };
}

/** Lesson quiz questions in the reader's language; answers and sources stay as they are. */
export function translateQuiz<Q extends { q: string; options: string[]; why: string }>(qs: Q[], tr: unknown[] | undefined): Q[] {
  return tr ? qs.map((q, i) => merge(q, tr[i])) : qs;
}

type Loader = () => Promise<LessonTrMap>;
// Registered per language and world. Worlds not listed here stay in English.
const loaders: Record<string, Loader> = {
  "uz/iman": () => import("./lessons-uz-iman").then((m) => m.default),
  "ru/iman": () => import("./lessons-ru-iman").then((m) => m.default),
  "uz/islam": () => import("./lessons-uz-islam").then((m) => m.default),
  "ru/islam": () => import("./lessons-ru-islam").then((m) => m.default),
  "uz/salah": () => import("./lessons-uz-salah").then((m) => m.default),
  "ru/salah": () => import("./lessons-ru-salah").then((m) => m.default),
  "uz/quran": () => import("./lessons-uz-quran").then((m) => m.default),
  "ru/quran": () => import("./lessons-ru-quran").then((m) => m.default),
  "uz/clean": () => import("./lessons-uz-clean").then((m) => m.default),
};
const cache: Record<string, LessonTrMap> = {};

// Adds translated reward-card descriptions that live in a separate file.
async function withPictures(lang: Lang, world: string, map: LessonTrMap): Promise<LessonTrMap> {
  if (lang === "en") return map;
  const { PICTURES } = await import("./lessons-pictures");
  const out: LessonTrMap = { ...map };
  for (const [k, byIdx] of Object.entries(PICTURES[lang])) {
    const [w, lesson] = k.split("/");
    if (w !== world || !out[lesson]) continue;
    const blocks = [...(out[lesson].blocks ?? [])];
    for (const [i, text] of Object.entries(byIdx)) {
      const n = Number(i);
      blocks[n] = { ...((blocks[n] as object | null) ?? {}), picture: text };
    }
    out[lesson] = { ...out[lesson], blocks };
  }
  return map === out ? map : out;
}

export function hasLessonTranslations(lang: Lang, worldId: string) {
  return lang !== "en" && `${lang}/${worldId}` in loaders;
}

export function useLessonTranslations(lang: Lang, worldId: string | undefined): LessonTrMap | null {
  const key = `${lang}/${worldId}`;
  const [map, setMap] = useState<LessonTrMap | null>(cache[key] ?? null);
  useEffect(() => {
    if (lang === "en" || !worldId || !loaders[key]) { setMap(null); return; }
    if (cache[key]) { setMap(cache[key]); return; }
    let live = true;
    loaders[key]().then((m) => withPictures(lang, worldId, m)).then((m) => { cache[key] = m; if (live) setMap(m); }).catch(() => {});
    return () => { live = false; };
  }, [key, lang, worldId]);
  return map;
}
