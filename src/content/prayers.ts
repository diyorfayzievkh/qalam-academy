import type { RecitationKey } from "./recitations";

// The five daily prayers, Witr and Jumu'ah, structured by the Hanafi madhhab
// (al-Hidayah, Nur al-Idah). buildSteps() turns any unit into a full
// step-by-step walkthrough.

export type UnitKind = "fard" | "sunnah" | "witr";
export type Unit = {
  label: "Fard" | "Sunnah" | "Witr";
  n: number;
  kind: UnitKind;
  status: string;
  /** Imam recites aloud in the first two rak'ahs. */
  loud?: boolean;
  /** Sunnah ghayr mu'akkadah (optional 4-rak'ah sunnah). */
  ghayr?: boolean;
  jumuah?: boolean;
};
export type Prayer = { id: string; name: string; time: string; units: Unit[] };

export const PRAYERS: Prayer[] = [
  { id: "fajr", name: "Fajr", time: "Dawn until sunrise", units: [
    { label: "Sunnah", n: 2, kind: "sunnah", status: "Sunnah muʾakkadah (strongly emphasised)" },
    { label: "Fard", n: 2, kind: "fard", loud: true, status: "Fard (obligatory)" },
  ] },
  { id: "dhuhr", name: "Dhuhr", time: "After midday", units: [
    { label: "Sunnah", n: 4, kind: "sunnah", status: "Sunnah muʾakkadah" },
    { label: "Fard", n: 4, kind: "fard", loud: false, status: "Fard (obligatory)" },
    { label: "Sunnah", n: 2, kind: "sunnah", status: "Sunnah muʾakkadah" },
  ] },
  { id: "asr", name: "Asr", time: "Shadow twice an object’s length (plus its midday shadow)", units: [
    { label: "Sunnah", n: 4, kind: "sunnah", ghayr: true, status: "Sunnah ghayr muʾakkadah (optional)" },
    { label: "Fard", n: 4, kind: "fard", loud: false, status: "Fard (obligatory)" },
  ] },
  { id: "maghrib", name: "Maghrib", time: "Right after sunset", units: [
    { label: "Fard", n: 3, kind: "fard", loud: true, status: "Fard (obligatory)" },
    { label: "Sunnah", n: 2, kind: "sunnah", status: "Sunnah muʾakkadah" },
  ] },
  { id: "isha", name: "Isha", time: "After twilight ends", units: [
    { label: "Sunnah", n: 4, kind: "sunnah", ghayr: true, status: "Sunnah ghayr muʾakkadah (optional)" },
    { label: "Fard", n: 4, kind: "fard", loud: true, status: "Fard (obligatory)" },
    { label: "Sunnah", n: 2, kind: "sunnah", status: "Sunnah muʾakkadah" },
    { label: "Witr", n: 3, kind: "witr", status: "Wājib (necessary)" },
  ] },
  { id: "jumuah", name: "Jumuʿah", time: "Friday, replaces Dhuhr", units: [
    { label: "Sunnah", n: 4, kind: "sunnah", status: "Sunnah muʾakkadah, before the khutbah" },
    { label: "Fard", n: 2, kind: "fard", loud: true, jumuah: true, status: "Fard, in congregation after the khutbah" },
    { label: "Sunnah", n: 4, kind: "sunnah", status: "Sunnah muʾakkadah" },
    { label: "Sunnah", n: 2, kind: "sunnah", status: "Sunnah (recommended)" },
  ] },
];

export type GenderKey = "m" | "w";
export type PostureNoteKey = "takbir" | "fold" | "ruku" | "sujud" | "sit";

/** Hanafi differences between men and women for each posture. */
export const POSTURE_NOTES: Record<PostureNoteKey, Record<GenderKey, string>> = {
  takbir: {
    m: "Raise both hands so the thumbs come near the earlobes, palms facing the qibla, fingers relaxed.",
    w: "Raise both hands to shoulder height, palms facing the qibla.",
  },
  fold: {
    m: "Place the hands below the navel, right over left. Encircle the left wrist with the right thumb and little finger.",
    w: "Place the hands on the chest, right palm resting on the back of the left hand.",
  },
  ruku: {
    m: "Bend so the back and head are level. Grip the knees with fingers spread, elbows away from the sides, legs straight.",
    w: "Bend less deeply, fingers kept together on the knees, arms close to the body.",
  },
  sujud: {
    m: "Knees, then hands, then nose, then forehead to the ground. Keep forearms off the ground, elbows away from the sides, stomach away from the thighs, toes bent towards the qibla.",
    w: "Make the body compact: forearms on the ground, arms close to the sides, stomach close to the thighs.",
  },
  sit: {
    m: "Sit on the left foot laid flat, right foot upright with toes bent towards the qibla. Hands rest on the thighs.",
    w: "Sit on the left hip with both feet brought out to the right side. Hands rest on the thighs, fingers together.",
  },
};

export type Posture = "stand" | "takbir" | "fold" | "ruku" | "sujud" | "sit" | "salamR" | "salamL";
export type Step = {
  /** 0 = before the prayer starts. */
  rak: number;
  pos: Posture;
  title: string;
  text: string;
  tag: "fard" | "wajib" | "sunnah";
  note?: PostureNoteKey;
  rec?: RecitationKey;
};

function recitationVoice(u: Unit, r: number): string {
  if (u.kind === "fard" && u.loud && r <= 2) {
    return u.jumuah
      ? "The imam recites aloud. Followers listen silently; in the Hanafi school the follower does not recite the Fātiḥah behind the imam."
      : "Recited aloud by the imam. A man praying alone may recite aloud or quietly; women recite quietly. A follower behind the imam stays silent and listens.";
  }
  if (u.kind === "witr") return "Recite quietly when praying alone. In Ramadan, the imam recites Witr aloud in congregation.";
  return "Recited quietly, moving the lips. A follower behind the imam stays silent.";
}

export function buildSteps(p: Prayer, u: Unit): Step[] {
  const n = u.n;
  const steps: Step[] = [];
  steps.push({
    rak: 0, pos: "stand", tag: "fard", title: "Intention (niyyah)",
    text: `Stand facing the qibla, feet about four fingers apart. In your heart, intend: “I am praying ${n} rakʿahs ${u.label} of ${p.name} for Allah.” Saying the intention aloud is permitted, but the intention of the heart is what counts.`,
  });

  for (let r = 1; r <= n; r++) {
    if (r === 1) {
      steps.push({ rak: r, pos: "takbir", tag: "fard", note: "takbir", rec: "takbir", title: "Opening takbīr (takbīrat al-iḥrām)",
        text: "Say “Allāhu akbar” as you raise your hands. This begins the prayer; from now on you do not speak, eat or turn away." });
      steps.push({ rak: r, pos: "fold", tag: "sunnah", note: "fold", title: "Fold the hands",
        text: "Lower the hands and fold them. Look at the place where your forehead will touch in sujūd." });
      steps.push({ rak: r, pos: "fold", tag: "sunnah", rec: "thana", title: "Opening praise (thanāʾ)", text: "Recite quietly. Only in the first rakʿah." });
      steps.push({ rak: r, pos: "fold", tag: "sunnah", rec: "taawwudh", title: "Taʿawwudh and Basmalah", text: "Seek refuge and say the Basmalah quietly before the Fātiḥah." });
    } else {
      steps.push({ rak: r, pos: "stand", tag: "sunnah", note: "fold", rec: "takbir", title: `Stand for rakʿah ${r}`,
        text: "Say “Allāhu akbar” and rise straight up from the second sajdah, pushing from the knees. In the Hanafi school there is no sitting pause before standing." });
      steps.push({ rak: r, pos: "fold", tag: "sunnah", rec: "basmala", title: "Basmalah", text: "Say the Basmalah quietly before the Fātiḥah." });
    }

    steps.push({ rak: r, pos: "fold", tag: u.kind === "fard" && r > 2 ? "sunnah" : "wajib", rec: "fatiha", title: "Sūrat al-Fātiḥah", text: `${recitationVoice(u, r)} After it, say “Āmīn” quietly.${u.kind === "fard" && r > 2 ? " In the third and fourth rakʿahs of a farḍ prayer, reciting the Fātiḥah is sunnah." : ""}` });

    const withSurah = u.kind !== "fard" || r <= 2;
    if (withSurah) {
      const odd = r % 2 === 1;
      steps.push({ rak: r, pos: "fold", tag: "wajib", rec: odd ? "ikhlas" : "kawthar", title: "Recite a sūrah",
        text: `Recite any sūrah, or at least three short verses (or one long verse). Example for this rakʿah: ${odd ? "Sūrat al-Ikhlāṣ" : "Sūrat al-Kawthar"}.${u.kind === "fard" ? " " + recitationVoice(u, r) : ""}` });
    } else {
      steps.push({ rak: r, pos: "fold", tag: "sunnah", title: "No additional sūrah", text: "In the 3rd and 4th rakʿahs of a fard prayer, recite only the Fātiḥah, then go to rukūʿ." });
    }

    if (u.kind === "witr" && r === 3) {
      steps.push({ rak: r, pos: "takbir", tag: "wajib", note: "takbir", rec: "takbir", title: "Takbīr for Qunūt",
        text: "Before rukūʿ, say “Allāhu akbar” and raise your hands to the ears as in the opening takbīr, then fold them again." });
      steps.push({ rak: r, pos: "fold", tag: "wajib", rec: "qunut", title: "Duʿāʾ al-Qunūt",
        text: "Recite the Qunūt quietly. If you have not learned it yet, you may say “Rabbanā ātinā…” or “Allāhumma-ghfir lī” three times until you memorise it." });
    }

    steps.push({ rak: r, pos: "ruku", tag: "fard", note: "ruku", rec: "ruku", title: "Rukūʿ (bowing)", text: "Say “Allāhu akbar” while bowing. Recite the tasbīḥ at least three times, calmly." });
    steps.push({ rak: r, pos: "stand", tag: "wajib", rec: "sami", title: "Rise from rukūʿ (qawmah)",
      text: "Rise saying “Samiʿa-llāhu li man ḥamidah”, then, standing fully upright with arms at the sides, say “Rabbanā laka-l-ḥamd”. Pause until the body is still. The imam says only “Samiʿa-llāhu li man ḥamidah”; the follower says only “Rabbanā laka-l-ḥamd”; praying alone, say both." });
    steps.push({ rak: r, pos: "sujud", tag: "fard", note: "sujud", rec: "sujud", title: "First sajdah", text: "Say “Allāhu akbar” and go down to prostration. Recite the tasbīḥ at least three times." });
    steps.push({ rak: r, pos: "sit", tag: "wajib", note: "sit", title: "Sit between the two sajdahs (jalsah)", text: "Say “Allāhu akbar” and sit up. Pause until the body is still." });
    steps.push({ rak: r, pos: "sujud", tag: "fard", note: "sujud", rec: "sujud", title: "Second sajdah", text: "Say “Allāhu akbar” and prostrate again, reciting the tasbīḥ at least three times." });

    if (r === 2 && n > 2) {
      steps.push({ rak: r, pos: "sit", tag: "wajib", note: "sit", rec: "tashahhud", title: "First sitting (qaʿdah ūlā)",
        text: `Sit and recite the Tashahhud only, up to “ʿabduhū wa rasūluh”. Raise the right index finger at “lā ilāha” and lower it at “illa-llāh”. ${u.ghayr
          ? "For this optional 4-rakʿah sunnah, you may also recite the Ṣalawāt here, and begin the 3rd rakʿah with the Thanāʾ."
          : "Then stand up without delay; adding more here by mistake calls for sajdat al-sahw."}` });
    }

    if (r === n) {
      steps.push({ rak: r, pos: "sit", tag: "fard", note: "sit", rec: "tashahhud", title: "Final sitting: Tashahhud",
        text: "Sit and recite the Tashahhud. Raise the right index finger at “lā ilāha” and lower it at “illa-llāh”. Sitting for this long is fard." });
      steps.push({ rak: r, pos: "sit", tag: "sunnah", rec: "salawat", title: "Ṣalawāt Ibrāhīmiyyah", text: "Send blessings on the Prophet ﷺ." });
      steps.push({ rak: r, pos: "sit", tag: "sunnah", rec: "dua", title: "Duʿāʾ", text: "Make a duʿāʾ from the Quran or Sunnah. A common one:" });
      steps.push({ rak: r, pos: "salamR", tag: "wajib", rec: "salam", title: "Salām to the right", text: "Turn the head to the right and say the salām, intending the angels and the people on your right." });
      steps.push({ rak: r, pos: "salamL", tag: "wajib", rec: "salam", title: "Salām to the left", text: "Turn the head to the left and say the salām again. The prayer is complete." });
    }
  }
  return steps;
}

export const WUDU_STEPS: { title: string; text: string; tag: "fard" | "sunnah" }[] = [
  { title: "Intention and Bismillāh", text: "Intend in your heart to make wuḍūʾ for prayer and say “Bismillāh”.", tag: "sunnah" },
  { title: "Wash the hands", text: "Wash both hands up to and including the wrists, three times, right first.", tag: "sunnah" },
  { title: "Rinse the mouth", text: "Rinse the mouth three times with fresh water each time. Use a miswāk or brush if you can.", tag: "sunnah" },
  { title: "Rinse the nose", text: "Sniff water into the nose with the right hand and blow it out with the left, three times.", tag: "sunnah" },
  { title: "Wash the face", text: "From the hairline to below the chin, and from earlobe to earlobe, three times. Men run wet fingers through the beard.", tag: "fard" },
  { title: "Wash the arms", text: "Wash the right arm, then the left, from the fingertips up to and including the elbows, three times each.", tag: "fard" },
  { title: "Wipe the head (masḥ)", text: "With wet hands, wipe over the head once. Wiping at least a quarter of the head is farḍ; wiping all of it is sunnah.", tag: "fard" },
  { title: "Wipe the ears", text: "With the same water, wipe the inside of the ears with the index fingers and the back with the thumbs.", tag: "sunnah" },
  { title: "Wipe the neck", text: "Wipe the back of the neck with the backs of the fingers. This is recommended (mustaḥabb) in the Hanafi school.", tag: "sunnah" },
  { title: "Wash the feet", text: "Wash the right foot, then the left, up to and including the ankles, three times. Pass the little finger between the toes.", tag: "fard" },
  { title: "Duʿāʾ after wuḍūʾ", text: "Recite the testimony. The eight gates of Paradise are opened for the one who says it (Muslim 234).", tag: "sunnah" },
];

export const WUDU_BREAKERS = [
  "Anything that comes out of the front or back passage, including wind.",
  "Blood, pus or fluid that flows beyond the place of a wound.",
  "Vomiting a mouthful.",
  "Sleeping while lying down or leaning against something.",
  "Fainting, losing consciousness, or intoxication.",
  "Laughing aloud during a prayer that has rukūʿ and sujūd (for adults).",
];

/** Rak'ah summary used on the prayer-times table. */
export const RAKAH_SUMMARY: Record<string, string> = {
  fajr: "2 S · 2 F",
  sunrise: "No prayer at sunrise",
  dhuhr: "4 S · 4 F · 2 S",
  asr: "4 S · 4 F",
  maghrib: "3 F · 2 S",
  isha: "4 S · 4 F · 2 S · 3 Witr",
};
