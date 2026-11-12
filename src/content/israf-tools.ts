// Study tools for the Not Wasting (Israf) world: a sketch note. Drawn from the book "Isrof" by Shaykh
// Muhammad Sodiq Muhammad Yusuf (Hilol-Nashr, 2024), in English and Uzbek.

export type Bi = { en: string; uz: string };
const b = (en: string, uz: string): Bi => ({ en, uz });
export const pickBi = (x: Bi, lang: string) => (lang === "uz" ? x.uz : x.en);

export const TOOLS = [
  { id: "sketchnote", icon: "✏️", title: b("Sketch note", "Eskiz-konspekt"), sub: b("Hand-drawn notes with the key lessons of the book and doodles.", "Kitobning asosiy saboqlari va rasmchalar bilan qo‘lda chizilgan konspekt.") },
] as const;
export type ToolId = (typeof TOOLS)[number]["id"];

// ---------------------------------------------------------------- sketch note
export type Doodle = "drop" | "plate" | "hands" | "scale" | "clock" | "ring" | "shirt" | "bulb" | "heart" | "book";
export type Note = { doodle: Doodle; title: Bi; lines: Bi[]; color: string };
export const SKETCH: Note[] = [
  { doodle: "book", color: "#1D7A60", title: b("Eat & drink, but don’t waste", "Yeng-iching, isrof qilmang"), lines: [b("7:31 · Allah does not love the wasteful", "7:31 · Alloh isrofchilarni sevmaydi"), b("Waste = ingratitude", "Isrof = noshukrlik")] },
  { doodle: "hands", color: "#8A5A2B", title: b("Not tied, not empty", "Na bog‘liq, na bo‘sh"), lines: [b("17:29 · the middle way", "17:29 · o‘rta yo‘l"), b("Give · Spend · Save", "Berish · Sarflash · Jamg‘arish")] },
  { doodle: "drop", color: "#1F7FA3", title: b("Every drop counts", "Har tomchi hisobli"), lines: [b("Wuḍūʾ: 1 mudd", "Tahorat: 1 mudd"), b("Even at a flowing river!", "Oqar daryoda ham!")] },
  { doodle: "plate", color: "#B07A1E", title: b("⅓ · ⅓ · ⅓", "⅓ · ⅓ · ⅓"), lines: [b("food · drink · air", "taom · ichimlik · havo"), b("Lick the plate: the barakah may be there", "Laganni sidiring: baraka o‘sha yerda")] },
  { doodle: "clock", color: "#5B4A9A", title: b("Time is life", "Vaqt — umr"), lines: [b("Asked: how did you spend it?", "So‘raladi: nimada o‘tkazding?"), b("Health + free time = blessings", "Sog‘liq + bo‘sh vaqt = ne’mat")] },
  { doodle: "ring", color: "#A23B3B", title: b("Simple walīmah", "Sodda valiyma"), lines: [b("Groom hosts · invite the poor", "Kuyov qiladi · kambag‘alni chaqiring"), b("No loans for show", "Ko‘z-ko‘z uchun qarz yo‘q")] },
  { doodle: "shirt", color: "#2F6B9A", title: b("Clothes of taqwā", "Taqvo libosi"), lines: [b("Middle · no pride", "O‘rtacha · kibrsiz"), b("Pass on what you don’t wear", "Kiymaganingizni boshqaga bering")] },
  { doodle: "bulb", color: "#C2843A", title: b("Switch off!", "O‘chiring!"), lines: [b("Lights · gas · taps", "Chiroq · gaz · jo‘mrak"), b("Meters wound back = theft", "Orqaga aylantirilgan hisoblagich = o‘g‘rilik")] },
];
export const SKETCH_CAUSES: Bi[] = [
  b("Not knowing", "Bilmaslik"), b("Upbringing", "Tarbiya"), b("Life changes", "Dunyo o‘zgaradi"), b("Sudden ease", "To‘satdan kenglik"),
  b("Friends", "Do‘stlar"), b("Fame", "Shuhrat"), b("Copying", "Taqlid"),
];
