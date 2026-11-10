import { currentUser } from "@/lib/auth";
import { SAMPLES, VOICES, type SampleLang } from "@/lib/voices";

export const dynamic = "force-dynamic";

// Short storyteller samples for choosing a voice. Only signed-in users, only the
// fixed sample passages and only voices on the list, so the key cannot be used
// for anything else. Results are cached per server instance and in the browser.
const cache = new Map<string, ArrayBuffer>();

export async function GET(req: Request) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) return Response.json({ error: "not_configured" }, { status: 503 });
  if (!(await currentUser().catch(() => null))) return Response.json({ error: "Please sign in." }, { status: 401 });

  const url = new URL(req.url);
  const voice = VOICES.find((v) => v.id === url.searchParams.get("voice"));
  const lang = url.searchParams.get("lang") as SampleLang;
  if (!voice || !(lang in SAMPLES)) return Response.json({ error: "Unknown voice or language." }, { status: 400 });

  const ck = `${voice.id}:${lang}`;
  let audio = cache.get(ck);
  if (!audio) {
    // Uzbek needs the newest model; the others sound best on Multilingual v2.
    const v3 = lang === "uz";
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice.id}?output_format=mp3_44100_128`, {
      method: "POST",
      headers: { "xi-api-key": key, "content-type": "application/json", accept: "audio/mpeg" },
      body: JSON.stringify({
        text: SAMPLES[lang],
        model_id: v3 ? "eleven_v3" : "eleven_multilingual_v2",
        ...(v3 ? { language_code: "uz" } : {}),
        voice_settings: v3 ? { stability: 0.5 } : { stability: 0.45, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true, speed: 0.92 },
      }),
    });
    if (!r.ok) {
      let detail = `ElevenLabs error ${r.status}`;
      try { const j = await r.json(); detail = j?.detail?.message ?? j?.detail?.status ?? detail; } catch { /* ignore */ }
      return Response.json({ error: detail }, { status: 502 });
    }
    audio = await r.arrayBuffer();
    cache.set(ck, audio);
  }
  return new Response(audio, { headers: { "content-type": "audio/mpeg", "cache-control": "private, max-age=604800" } });
}
