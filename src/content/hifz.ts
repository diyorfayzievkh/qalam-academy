// Hifz: surahs and passages to memorise, ordered as a learning path
// (shortest and most-used first). Text, audio and translations load from
// /api/quran/[id], which reads the Tanzil-based alquran.cloud API.

export type HifzGroup = "Start here" | "Juz ʿAmma" | "Weekly and nightly";

export type HifzItem = {
  id: string; // URL slug
  surah: number;
  /** For passages: first ayah (1-based) and count. */
  from?: number;
  count?: number;
  name: string;
  arabic: string;
  meaning: string;
  ayahs: number;
  group: HifzGroup;
  virtue?: string;
};

const s = (surah: number, name: string, arabic: string, meaning: string, ayahs: number, group: HifzGroup, virtue?: string): HifzItem =>
  ({ id: String(surah), surah, name, arabic, meaning, ayahs, group, virtue });

export const HIFZ: HifzItem[] = [
  // ---- Start here: what every Muslim recites in prayer ----
  s(1, "Al-Fātiḥah", "الفاتحة", "The Opening", 7, "Start here", "The greatest sūrah, recited in every rakʿah (Bukhari 4474)."),
  s(112, "Al-Ikhlāṣ", "الإخلاص", "Sincerity", 4, "Start here", "Equal to one third of the Quran (Bukhari 5013)."),
  s(113, "Al-Falaq", "الفلق", "The Daybreak", 5, "Start here", "Nothing compares to it for seeking refuge (Muslim 814)."),
  s(114, "An-Nās", "الناس", "Mankind", 6, "Start here", "Recited with Al-Falaq for protection, morning, evening and before sleep."),
  s(108, "Al-Kawthar", "الكوثر", "Abundance", 3, "Start here", "The shortest sūrah in the Quran."),
  s(103, "Al-ʿAṣr", "العصر", "Time", 3, "Start here"),
  s(110, "An-Naṣr", "النصر", "Divine Help", 3, "Start here"),
  s(109, "Al-Kāfirūn", "الكافرون", "The Disbelievers", 6, "Start here", "Recited by the Prophet ﷺ in the sunnah of Fajr (Muslim 726)."),
  { id: "ayat-al-kursi", surah: 2, from: 255, count: 1, name: "Āyat al-Kursī", arabic: "آية الكرسي", meaning: "The Verse of the Throne (2:255)", ayahs: 1, group: "Start here", virtue: "The greatest verse in the Quran (Muslim 810); a guardian stays with you through the night (Bukhari 2311)." },
  { id: "baqarah-end", surah: 2, from: 285, count: 2, name: "Last two verses of Al-Baqarah", arabic: "خواتيم البقرة", meaning: "Al-Baqarah 2:285–286", ayahs: 2, group: "Start here", virtue: "Recited at night, they suffice you (Bukhari 5009)." },

  // ---- Juz ʿAmma, short to long ----
  s(105, "Al-Fīl", "الفيل", "The Elephant", 5, "Juz ʿAmma"),
  s(106, "Quraysh", "قريش", "Quraysh", 4, "Juz ʿAmma"),
  s(107, "Al-Māʿūn", "الماعون", "Small Kindnesses", 7, "Juz ʿAmma"),
  s(111, "Al-Masad", "المسد", "The Palm Fibre", 5, "Juz ʿAmma"),
  s(97, "Al-Qadr", "القدر", "The Night of Decree", 5, "Juz ʿAmma", "Describes Laylat al-Qadr, better than a thousand months."),
  s(102, "At-Takāthur", "التكاثر", "Competition for More", 8, "Juz ʿAmma"),
  s(101, "Al-Qāriʿah", "القارعة", "The Striking Calamity", 11, "Juz ʿAmma"),
  s(100, "Al-ʿĀdiyāt", "العاديات", "The Chargers", 11, "Juz ʿAmma"),
  s(99, "Az-Zalzalah", "الزلزلة", "The Earthquake", 8, "Juz ʿAmma"),
  s(104, "Al-Humazah", "الهمزة", "The Slanderer", 9, "Juz ʿAmma"),
  s(95, "At-Tīn", "التين", "The Fig", 8, "Juz ʿAmma"),
  s(94, "Ash-Sharḥ", "الشرح", "The Opening Up", 8, "Juz ʿAmma"),
  s(93, "Aḍ-Ḍuḥā", "الضحى", "The Morning Light", 11, "Juz ʿAmma"),
  s(98, "Al-Bayyinah", "البينة", "The Clear Proof", 8, "Juz ʿAmma"),
  s(96, "Al-ʿAlaq", "العلق", "The Clinging Clot", 19, "Juz ʿAmma", "Its first five verses were the first revelation (Bukhari 3)."),
  s(91, "Ash-Shams", "الشمس", "The Sun", 15, "Juz ʿAmma"),
  s(92, "Al-Layl", "الليل", "The Night", 21, "Juz ʿAmma"),
  s(90, "Al-Balad", "البلد", "The City", 20, "Juz ʿAmma"),
  s(86, "Aṭ-Ṭāriq", "الطارق", "The Night-Comer", 17, "Juz ʿAmma"),
  s(87, "Al-Aʿlā", "الأعلى", "The Most High", 19, "Juz ʿAmma", "Recited by the Prophet ﷺ in the Jumuʿah and Eid prayers (Muslim 878)."),
  s(88, "Al-Ghāshiyah", "الغاشية", "The Overwhelming Event", 26, "Juz ʿAmma", "Recited with Al-Aʿlā in Jumuʿah and Eid (Muslim 878)."),
  s(89, "Al-Fajr", "الفجر", "The Dawn", 30, "Juz ʿAmma"),
  s(85, "Al-Burūj", "البروج", "The Constellations", 22, "Juz ʿAmma"),
  s(84, "Al-Inshiqāq", "الانشقاق", "The Splitting Open", 25, "Juz ʿAmma"),
  s(82, "Al-Infiṭār", "الانفطار", "The Cleaving", 19, "Juz ʿAmma"),
  s(81, "At-Takwīr", "التكوير", "The Folding Up", 29, "Juz ʿAmma"),
  s(83, "Al-Muṭaffifīn", "المطففين", "Those Who Give Short Measure", 36, "Juz ʿAmma"),
  s(80, "ʿAbasa", "عبس", "He Frowned", 42, "Juz ʿAmma"),
  s(79, "An-Nāziʿāt", "النازعات", "Those Who Pull Out", 46, "Juz ʿAmma"),
  s(78, "An-Nabaʾ", "النبأ", "The Great News", 40, "Juz ʿAmma"),

  // ---- Weekly and nightly surahs ----
  { id: "kahf-1-10", surah: 18, from: 1, count: 10, name: "Al-Kahf 1–10", arabic: "الكهف", meaning: "The Cave, first ten verses", ayahs: 10, group: "Weekly and nightly", virtue: "Whoever memorises the first ten verses is protected from the Dajjāl (Muslim 809)." },
  s(67, "Al-Mulk", "الملك", "The Sovereignty", 30, "Weekly and nightly", "It intercedes for its reciter until they are forgiven (Tirmidhi 2891)."),
  s(32, "As-Sajdah", "السجدة", "The Prostration", 30, "Weekly and nightly", "The Prophet ﷺ would not sleep until he recited As-Sajdah and Al-Mulk (Tirmidhi 2892)."),
  s(36, "Yā Sīn", "يس", "Yā Sīn", 83, "Weekly and nightly"),
  s(55, "Ar-Raḥmān", "الرحمن", "The Most Merciful", 78, "Weekly and nightly"),
  s(56, "Al-Wāqiʿah", "الواقعة", "The Inevitable Event", 96, "Weekly and nightly"),
];

export const HIFZ_GROUPS: HifzGroup[] = ["Start here", "Juz ʿAmma", "Weekly and nightly"];

export function findHifz(id: string) {
  return HIFZ.find((h) => h.id === id);
}

/** Points for memorising: 5 per ayah, at least 15. Learning, not worship, is scored. */
export const hifzPoints = (h: HifzItem) => Math.max(15, h.ayahs * 5);
