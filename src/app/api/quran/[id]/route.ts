import { NextResponse } from "next/server";
import { findHifz } from "@/content/hifz";

// Proxies the alquran.cloud API (Tanzil Uthmani text, Mishary Alafasy audio,
// translations) and returns one normalised shape. Responses are cached for a
// week on Vercel's CDN, so the upstream API is rarely called.

const API = "https://api.alquran.cloud/v1";
const MAIN = ["quran-uthmani", "ar.alafasy", "en.transliteration", "en.sahih"];
const TRANSLATIONS = { uz: "uz.sodik", ru: "ru.kuliev" } as const;
const WEEK = 60 * 60 * 24 * 7;

type UpstreamAyah = { number: number; numberInSurah: number; text: string; audio?: string };
type UpstreamEdition = { edition: { identifier: string }; ayahs: UpstreamAyah[] };

export type QuranAyah = { n: number; ar: string; tr: string; en: string; uz?: string; ru?: string; audio?: string };
export type QuranPayload = { id: string; surah: number; showBismillah: boolean; ayahs: QuranAyah[]; source: string };

async function editions(surah: number, ids: string[], offset: number, limit?: number): Promise<UpstreamEdition[]> {
  const q = new URLSearchParams();
  if (offset) q.set("offset", String(offset));
  if (limit) q.set("limit", String(limit));
  const res = await fetch(`${API}/surah/${surah}/editions/${ids.join(",")}?${q}`, { next: { revalidate: WEEK } });
  if (!res.ok) throw new Error(`Upstream ${res.status}`);
  const body = (await res.json()) as { code: number; data: UpstreamEdition[] };
  if (body.code !== 200 || !Array.isArray(body.data)) throw new Error("Unexpected upstream response");
  return body.data;
}

// The Uthmani text and transliteration prefix ayah 1 with the Basmalah for every
// surah except 1 and 9. We show the Basmalah once above the surah instead.
const stripMarks = (t: string) => t.replace(/[ؐ-ًؚ-ٰٟۖ-ۭ]/g, "").replace(/ٱ/g, "ا");
function stripBasmalah(ar: string) {
  const words = ar.split(/\s+/);
  return stripMarks(words.slice(0, 4).join(" ")) === "بسم الله الرحمن الرحيم" ? words.slice(4).join(" ") : ar;
}
const stripBasmalahLatin = (t: string) => (/^bismi\s+allahi/i.test(t) ? t.split(/\s+/).slice(4).join(" ") : t);

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const item = findHifz(params.id);
  if (!item) return NextResponse.json({ error: "Unknown surah" }, { status: 404 });

  const offset = item.from ? item.from - 1 : 0;
  const limit = item.count;
  try {
    const main = await editions(item.surah, MAIN, offset, limit);
    const by = (id: string) => main.find((e) => e.edition.identifier === id)?.ayahs ?? [];
    const ar = by("quran-uthmani");
    if (!ar.length) throw new Error("No Arabic text");
    const audio = by("ar.alafasy");
    const tr = by("en.transliteration");
    const en = by("en.sahih");

    // Translations are optional: the page still works without them.
    let uz: UpstreamAyah[] = [];
    let ru: UpstreamAyah[] = [];
    try {
      const t = await editions(item.surah, Object.values(TRANSLATIONS), offset, limit);
      uz = t.find((e) => e.edition.identifier === TRANSLATIONS.uz)?.ayahs ?? [];
      ru = t.find((e) => e.edition.identifier === TRANSLATIONS.ru)?.ayahs ?? [];
    } catch {}

    const firstAyahHasBasmalah = offset === 0 && item.surah !== 1 && item.surah !== 9;
    const ayahs: QuranAyah[] = ar.map((a, i) => ({
      n: a.numberInSurah,
      ar: firstAyahHasBasmalah && i === 0 ? stripBasmalah(a.text) : a.text,
      tr: firstAyahHasBasmalah && i === 0 ? stripBasmalahLatin(tr[i]?.text ?? "") : tr[i]?.text ?? "",
      en: en[i]?.text ?? "",
      uz: uz[i]?.text,
      ru: ru[i]?.text,
      audio: audio[i]?.audio,
    }));

    const payload: QuranPayload = {
      id: item.id, surah: item.surah, showBismillah: firstAyahHasBasmalah, ayahs,
      source: "Text: Tanzil Uthmani · Audio: Mishary Alafasy · Translations: Saheeh International, Muhammad Sodik Muhammad Yusuf, Elmir Kuliev · via alquran.cloud",
    };
    return NextResponse.json(payload, { headers: { "Cache-Control": `public, s-maxage=${WEEK}, stale-while-revalidate=${WEEK}` } });
  } catch (e) {
    return NextResponse.json({ error: "The Quran text could not be loaded right now. Please try again in a moment." }, { status: 502 });
  }
}
