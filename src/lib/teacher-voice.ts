// Voice for the maths teacher: always a UK English female voice when the device
// has one (Chrome "Google UK English Female", iPhone/iPad "Kate"/"Serena"/"Martha",
// Edge "Sonia"/"Libby", Android en-gb-x-gba/gbc/gbg), then any English female.
const UK_FEMALE = /google uk english female|\b(kate|serena|stephanie|martha|sonia|libby|maisie|hazel|susan|emily|fiona)\b|en-gb-x-gb[acg]/i;
const FEMALE = /female|aria|jenny|ava|emma|michelle|samantha|karen|moira|tessa|victoria|zoe|allison|nicky|joanna|kendra|salli|zira/i;
const MALE = /\bmale\b|guy|ryan|daniel|alex\b|fred|tom\b|aaron|arthur|david|mark|george|james|oliver|thomas|en-gb-x-gb[bd]|en-gb-x-rjs/i;
const NATURAL = /natural|neural|premium|enhanced|online/i;

export function teacherVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const all = window.speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  const score = (v: SpeechSynthesisVoice) => {
    const n = v.name.replace(/female/i, "");
    return (UK_FEMALE.test(v.name) || FEMALE.test(v.name) ? 100 : 0) - (MALE.test(n) ? 100 : 0)
      + (/^en[-_]gb/i.test(v.lang) ? 20 : 0) + (UK_FEMALE.test(v.name) ? 10 : 0) + (NATURAL.test(v.name) ? 2 : 0);
  };
  return all.sort((a, b) => score(b) - score(a))[0] ?? null;
}

/** Turn maths symbols into words so the voice reads them naturally. */
export function speakable(s: string): string {
  return s
    .replace(/(\d)\s*½/g, "$1 and a half").replace(/½/g, "one half")
    .replace(/¼/g, "one quarter").replace(/¾/g, "three quarters")
    .replace(/\b1\/2\b/g, "one half").replace(/\b1\/4\b/g, "one quarter").replace(/\b3\/4\b/g, "three quarters")
    .replace(/(\d+)\/(\d+)/g, "$1 over $2")
    .replace(/\s*\+\s*/g, " plus ").replace(/\s*×\s*/g, " times ").replace(/\s*÷\s*/g, " divided by ")
    .replace(/\s+−\s+|\s+-\s+/g, " minus ").replace(/\s*=\s*/g, " equals ")
    .replace(/\s*≈\s*/g, " is about ").replace(/\s<\s/g, " is less than ").replace(/\s>\s/g, " is greater than ")
    .replace(/°/g, " degrees").replace(/→/g, ",").replace(/¢/g, " cents")
    .replace(/\bcm\b/g, "centimetres").replace(/\bkm\b/g, "kilometres").replace(/\bkg\b/g, "kilograms")
    .replace(/\bml\b/g, "millilitres").replace(/\bmm\b/g, "millimetres")
    .replace(/#s\b/g, "numbers").replace(/[“”"]/g, "").replace(/\s+/g, " ").trim();
}

/** Split a script into sentences; decimals like 3.5 stay together. */
export const sentences = (s: string) => s.split(/(?<=[.!?])\s+(?=[A-Z0-9“"(])/).map((x) => x.trim()).filter(Boolean);
