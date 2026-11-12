// Study tools for the Not Wasting (Israf) world: a mind map, flashcards, a
// sketch note and short comics. Drawn from the book "Isrof" by Shaykh
// Muhammad Sodiq Muhammad Yusuf (Hilol-Nashr, 2024), in English and Uzbek.

export type Bi = { en: string; uz: string };
const b = (en: string, uz: string): Bi => ({ en, uz });
export const pickBi = (x: Bi, lang: string) => (lang === "uz" ? x.uz : x.en);

export const TOOLS = [
  { id: "mindmap", icon: "🧠", title: b("Mind map", "Aqliy xarita"), sub: b("The whole book on one page: eight branches around one idea.", "Butun kitob bir sahifada: bir g‘oya atrofida sakkiz tarmoq.") },
  { id: "flashcards", icon: "🃏", title: b("Flashcards", "Fleshkartalar"), sub: b("24 cards to flip: verses, hadith, causes and rulings.", "Aylantiriladigan 24 karta: oyat, hadis, sabablar va hukmlar.") },
  { id: "sketchnote", icon: "✏️", title: b("Sketch note", "Eskiz-konspekt"), sub: b("Hand-drawn notes with the key lessons and doodles.", "Asosiy saboqlar va rasmchalar bilan qo‘lda chizilgan konspekt.") },
  { id: "comics", icon: "💬", title: b("Comics", "Komikslar"), sub: b("Three short comic strips: the tap, the bread and the phone.", "Uchta qisqa komiks: jo‘mrak, non va telefon.") },
] as const;
export type ToolId = (typeof TOOLS)[number]["id"];

// ---------------------------------------------------------------- mind map
export type Branch = { title: Bi; color: string; items: Bi[]; lesson: string };
export const MIND_CENTER = { title: b("Israf", "Isrof"), sub: b("crossing the limit", "chegaradan chiqish") };
export const MIND_BRANCHES: Branch[] = [
  { title: b("Meaning", "Ma’nosi"), color: "#2F6B9A", lesson: "what-is-israf", items: [
    b("Too much of what is needed", "Keraklisini haddan ortiq sarflash"),
    b("Tabdhīr: spending where it shouldn’t go", "Tabzir: keraksiz joyga sarflash"),
    b("Wealth is an adornment, not our worth", "Mol — ziynat, qadrimiz emas"),
  ] },
  { title: b("Quran & Sunnah", "Qur’on va Sunnat"), color: "#1D7A60", lesson: "israf-quran-sunnah", items: [
    b("“Eat and drink, but do not waste” (7:31)", "“Yeb-iching, lekin isrof qilmang” (7:31)"),
    b("Squanderers: brothers of devils (17:27)", "Isrofchilar — shaytonlar birodari (17:27)"),
    b("No waste in wuḍūʾ, even at a river", "Daryoda ham tahoratda isrof yo‘q"),
  ] },
  { title: b("7 causes", "7 sabab"), color: "#8A5A2B", lesson: "why-we-waste", items: [
    b("Not knowing the religion", "Dinni bilmaslik"),
    b("Growing up in waste", "Isrofda o‘sish"),
    b("Forgetting that life changes", "Dunyo o‘zgarishini unutish"),
    b("Wasteful friends · fame · copying", "Isrofchi do‘st · shuhrat · taqlid"),
  ] },
  { title: b("Harms", "Zararlari"), color: "#A23B3B", lesson: "harms-of-israf", items: [
    b("Faith: Allah’s anger, Shayṭān’s brother", "Iymon: Alloh g‘azabi, shayton birodari"),
    b("Self: poverty, regret, envy", "O‘zi: kambag‘allik, nadomat, hasad"),
    b("Society: carelessness, dependence", "Jamiyat: beboshlik, boqimandalik"),
  ] },
  { title: b("Money & time", "Pul va vaqt"), color: "#5B4A9A", lesson: "spending-middle-way", items: [
    b("Neither wasteful nor stingy (25:67)", "Na isrof, na xasislik (25:67)"),
    b("Asked: where it came from, where it went", "So‘raladi: qayerdan keldi, qayerga ketdi"),
    b("Life, health and free time are blessings", "Umr, sog‘liq, bo‘sh vaqt — ne’mat"),
  ] },
  { title: b("Water & food", "Suv va taom"), color: "#1F7FA3", lesson: "water", items: [
    b("Wuḍūʾ with one mudd", "Bir mudd suv bilan tahorat"),
    b("⅓ food · ⅓ drink · ⅓ air", "⅓ taom · ⅓ ichimlik · ⅓ havo"),
    b("Pick up the fallen morsel", "Tushgan luqmani oling"),
  ] },
  { title: b("Celebrations", "Marosimlar"), color: "#B07A1E", lesson: "weddings", items: [
    b("Walīmah is sunnah, and simple", "Valiyma sunnat va sodda"),
    b("Groom hosts; no demands on the bride", "To‘y kuyovdan; kelin tarafiga talab yo‘q"),
    b("No “3rd/40th” days, never on a loan", "“Uch/qirq” yo‘q, qarzga emas"),
  ] },
  { title: b("The cure", "Davosi"), color: "#2E7D4F", lesson: "everyday-waste", items: [
    b("Knowledge first", "Avvalo ilm"),
    b("Gratitude and contentment", "Shukr va qanoat"),
    b("Parents set the example", "Ota-ona o‘rnak bo‘ladi"),
    b("Fight waste together", "Isrofga birga qarshi turish"),
  ] },
];

// ---------------------------------------------------------------- flashcards
export type Card = { front: Bi; back: Bi; src: string };
export const CARDS: Card[] = [
  { front: b("What does isrāf mean?", "Isrof nima?"), back: b("Crossing the limit: using more than is needed, or in the wrong place.", "Chegaradan chiqish: keragidan ortiq yoki noo‘rin sarflash."), src: "Isrof" },
  { front: b("Isrāf vs tabdhīr?", "Isrof va tabzir farqi?"), back: b("Isrāf: too much of what is needed. Tabdhīr: spending on what should not be spent on at all.", "Isrof — keraklisini haddan ortiq sarflash. Tabzir — keraksiz joyga sarflash."), src: "Isrof" },
  { front: b("“Eat and drink, but…”", "“Yeb-iching, lekin…”"), back: b("“…do not waste. Indeed, He does not love the wasteful.”", "“…isrof qilmang. Chunki U isrof qiluvchilarni sevmas.”"), src: "Quran 7:31" },
  { front: b("Who are “the brothers of the devils”?", "“Shaytonlarning birodarlari” kimlar?"), back: b("The squanderers. Shayṭān is ungrateful to his Lord, and so is the waster.", "Isrofchilar. Shayton Robbiga noshukr, isrofchi ham noshukr."), src: "Quran 17:27" },
  { front: b("How do the servants of the Most Merciful spend?", "Rahmonning bandalari qanday sarflaydi?"), back: b("Neither wastefully nor stingily, but in between.", "Na isrof, na xasislik bilan, balki o‘rtacha."), src: "Quran 25:67" },
  { front: b("The tied hand and the open hand", "Bog‘langan qo‘l va ochiq qo‘l"), back: b("Don’t be a miser, don’t empty your hand, or you sit blamed and full of regret.", "Baxil bo‘lma, qo‘lingni butunlay yozib yuborma, aks holda malomat va hasratda qolasan."), src: "Quran 17:29" },
  { front: b("Waste in wuḍūʾ?", "Tahoratda isrof?"), back: b("“Yes, even if you are at a flowing river.”", "“Ha, hatto oqib turgan daryoda bo‘lsang ham.”"), src: "Ahmad; Ibn Majah 425" },
  { front: b("How much water for the Prophet’s ﷺ wuḍūʾ?", "Payg‘ambar ﷺ tahoratiga qancha suv?"), back: b("One mudd (about two handfuls). Ghusl: one ṣāʿ up to five mudd.", "Bir mudd (taxminan ikki hovuch). G‘usl: bir so‘dan besh muddgacha."), src: "Bukhari 201" },
  { front: b("The worst vessel to fill?", "To‘ldiriladigan eng yomon idish?"), back: b("The stomach. If you must: ⅓ food, ⅓ drink, ⅓ breath.", "Qorin. Zarur bo‘lsa: ⅓ taom, ⅓ ichimlik, ⅓ nafas."), src: "Tirmidhi 2380" },
  { front: b("A morsel falls on the floor…", "Luqma yerga tushsa…"), back: b("Clean it and eat it; don’t leave it for Shayṭān. The blessing may be in it.", "Tozalab yeng, shaytonga qoldirmang. Baraka o‘sha yerda bo‘lishi mumkin."), src: "Muslim 2033" },
  { front: b("“Eat, drink, dress and give charity…”", "“Yenglar, ichinglar, kiyinglar, sadaqa qilinglar…”"), back: b("“…without extravagance or arrogance.”", "“…isrof va mutakabbirlik bo‘lmasa, bas.”"), src: "Nasai 2559" },
  { front: b("Four questions on the Last Day", "Qiyomatdagi to‘rt savol"), back: b("Your life, your knowledge, your wealth (from where, to where), your body.", "Umring, ilming, moling (qayerdan, qayerga), jisming."), src: "Tirmidhi 2417" },
  { front: b("Two blessings many are cheated of", "Ko‘pchilik aldanadigan ikki ne’mat"), back: b("Health and free time.", "Sog‘liq va bo‘sh vaqt."), src: "Bukhari 6412" },
  { front: b("The 7 causes of waste", "Isrofning 7 sababi"), back: b("Ignorance · upbringing · forgetting life changes · sudden ease · friends · love of fame · copying others.", "Bilmaslik · tarbiya · dunyo o‘zgarishini unutish · to‘satdan kenglik · do‘stlar · shuhratparastlik · taqlid."), src: "Isrof" },
  { front: b("“A man is upon the religion of his…”", "“Kishi … dinidadir”"), back: b("“…friend, so look at whom you befriend.”", "“…do‘stining. Kimga do‘st bo‘lishingizga qarang.”"), src: "Abu Dawud 4833" },
  { front: b("What did ʿUmar ask about his shroud?", "Umar kafani haqida nima dedi?"), back: b("“Don’t be wasteful with my shroud, and keep my grave simple.”", "“Kafanimda isrof qilmanglar, qabrimni ham iqtisodli qilinglar.”"), src: "Ibn Abī ad-Dunyā" },
  { front: b("The only sunnah wedding ceremony", "Nikohdagi yagona sunnat marosim"), back: b("The walīmah (wedding feast). Its host is the groom.", "Valiyma (nikoh to‘yi). Uni kuyov qiladi."), src: "Bukhari 5155" },
  { front: b("The Prophet’s ﷺ biggest walīmah", "Payg‘ambarimiz ﷺ eng katta valiymasi"), back: b("One sheep, for Zaynab.", "Zaynab uchun bir qo‘y."), src: "Bukhari 5168" },
  { front: b("“The worst food is…”", "“Taomning eng yomoni…”"), back: b("…a walīmah where the rich are invited and the poor are left out.", "…boylar chaqirilib, kambag‘allar tashlab qo‘yilgan valiyma taomi."), src: "Bukhari 5177" },
  { front: b("Meals by the bereaved family in the first 3 days?", "Musibat ahlining birinchi 3 kundagi ziyofati?"), back: b("Makrūh. Neighbours should feed them instead: “Make food for the family of Jaʿfar.”", "Makruh. Aksincha qo‘shnilar taomlantiradi: “Ja’far ahliga taom tayyorlanglar.”"), src: "Abu Dawud 3132" },
  { front: b("“Third”, “fortieth”, “year” gatherings?", "“Uch”, “qirq”, “yil” marosimlari?"), back: b("Not in the Sharīʿah. A voluntary wadīmah only, any day, never on a loan or from orphans’ shares.", "Shariatda yo‘q. Faqat ixtiyoriy vaziyma, istalgan kun, qarzga emas va yetim haqqidan emas."), src: "Isrof" },
  { front: b("The best clothing?", "Eng yaxshi libos?"), back: b("The clothing of taqwā. Dress well, in the middle, without pride.", "Taqvo libosi. O‘rtacha, kibrsiz chiroyli kiyining."), src: "Quran 7:26" },
  { front: b("Winding back a meter is…", "Hisoblagichni orqaga aylantirish…"), back: b("Theft from the whole public, including orphans and the needy.", "Butun jamiyatdan, jumladan yetim va muhtojlardan o‘g‘rilik."), src: "Quran 4:29" },
  { front: b("How do we fight israf?", "Isrofga qanday qarshi turamiz?"), back: b("Together: knowledge first, then example, gratitude and small daily habits.", "Birgalikda: avvalo ilm, so‘ng o‘rnak, shukr va kundalik kichik odatlar."), src: "Isrof, Xotima" },
];

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

// ---------------------------------------------------------------- comics
export type Prop = "tap" | "sink-off" | "bread" | "table" | "phone" | "clock" | "book" | "moon" | "sun" | "river" | "bin" | "jars";
export type Who = "boy" | "girl" | "grandma" | "grandpa" | "mum" | "dad";
export type Panel = { scene: { bg: string; props: Prop[]; people: { who: Who; x: number }[] }; caption?: Bi; bubbles: { who: number; text: Bi; side?: "l" | "r" }[] };
export type Strip = { id: string; title: Bi; moral: Bi; src: string; panels: Panel[] };

export const COMICS: Strip[] = [
  { id: "tap", title: b("The tap that kept running", "Oqib turgan jo‘mrak"), src: "Ahmad; Ibn Majah 425 · Bukhari 201",
    moral: b("If there is no waste even at a river, there is none at our sink.", "Daryoda ham isrof bo‘lmasa, jo‘mrakda albatta bo‘lmasin."),
    panels: [
      { scene: { bg: "#E6F2F7", props: ["tap"], people: [{ who: "boy", x: 40 }] }, caption: b("Morning. Ali brushes his teeth…", "Ertalab. Ali tishini yuvyapti…"), bubbles: [{ who: 0, text: b("La la la… 🎵", "La-la-la… 🎵") }] },
      { scene: { bg: "#E6F2F7", props: ["tap"], people: [{ who: "boy", x: 18 }, { who: "grandma", x: 44 }] }, bubbles: [{ who: 1, text: b("Ali, the water has been running all this time!", "Ali, suv shuncha vaqtdan beri oqib turibdi!"), side: "r" }] },
      { scene: { bg: "#DDEFE6", props: ["river"], people: [{ who: "grandma", x: 50 }] }, caption: b("Grandma tells him a story…", "Buvi hikoya aytib beradi…"), bubbles: [{ who: 0, text: b("The Prophet ﷺ said: no waste in wuḍūʾ, “even at a flowing river”.", "Payg‘ambarimiz ﷺ: tahoratda isrof yo‘q, “hatto oqib turgan daryoda ham”, deganlar.") }] },
      { scene: { bg: "#E6F2F7", props: ["sink-off"], people: [{ who: "boy", x: 40 }] }, bubbles: [{ who: 0, text: b("Tap off while I brush. Every drop is a blessing! 💧", "Tish yuvganda jo‘mrak yopiq. Har tomchi — ne’mat! 💧") }] },
    ] },
  { id: "bread", title: b("The fallen bread", "Yerga tushgan non"), src: "Muslim 2033 · Tirmidhi 2380",
    moral: b("Respect every crumb: you never know where the barakah is.", "Har uvoqni hurmat qiling: baraka qayerdaligini bilmaysiz."),
    panels: [
      { scene: { bg: "#FBF1E3", props: ["table", "bread"], people: [{ who: "girl", x: 35 }, { who: "dad", x: 72 }] }, caption: b("Dinner time.", "Kechki ovqat."), bubbles: [{ who: 0, text: b("Oops, my bread fell. I’ll just leave it.", "Voy, nonim tushib ketdi. Qoldiraveraman.") }] },
      { scene: { bg: "#FBF1E3", props: ["table", "bread"], people: [{ who: "girl", x: 35 }, { who: "dad", x: 72 }] }, bubbles: [{ who: 1, text: b("Wait! The Prophet ﷺ said: clean it and eat it, don’t leave it for Shayṭān.", "To‘xta! Payg‘ambarimiz ﷺ: tozalab yesin, shaytonga qoldirmasin, deganlar."), side: "r" }] },
      { scene: { bg: "#FBF1E3", props: ["table"], people: [{ who: "girl", x: 50 }] }, bubbles: [{ who: 0, text: b("And I’ll take a smaller portion, so nothing goes in the bin.", "Endi ozroq olaman, axlatga hech narsa ketmasin.") }] },
      { scene: { bg: "#F4E9D8", props: ["table", "bin"], people: [{ who: "girl", x: 30 }, { who: "dad", x: 70 }] }, caption: b("A third for food, a third for drink, a third for air.", "Uchdan biri taom, uchdan biri ichimlik, uchdan biri havo."), bubbles: [{ who: 1, text: b("Alḥamdulillāh, a clean plate! ✨", "Alhamdulillah, likopcha toza! ✨"), side: "r" }] },
    ] },
  { id: "time", title: b("The time thief", "Vaqt o‘g‘risi"), src: "Bukhari 6412 · Tirmidhi 2417",
    moral: b("Health and free time are blessings. Spend them, don’t lose them.", "Sog‘liq va bo‘sh vaqt — ne’mat. Ularni sarflang, yo‘qotmang."),
    panels: [
      { scene: { bg: "#ECEAF7", props: ["phone", "sun"], people: [{ who: "boy", x: 40 }] }, caption: b("After school…", "Maktabdan keyin…"), bubbles: [{ who: 0, text: b("Just one more video…", "Yana bitta video…") }] },
      { scene: { bg: "#2B2E55", props: ["phone", "moon", "clock"], people: [{ who: "boy", x: 40 }] }, caption: b("…three hours later.", "…uch soatdan keyin."), bubbles: [{ who: 0, text: b("Where did the day go?! My homework!", "Kun qayoqqa ketdi?! Uyga vazifam!") }] },
      { scene: { bg: "#ECEAF7", props: ["clock"], people: [{ who: "boy", x: 30 }, { who: "grandpa", x: 72 }] }, bubbles: [{ who: 1, text: b("On the Last Day we are asked about our life: how did we spend it?", "Qiyomatda umrimiz haqida so‘raladi: uni nimada o‘tkazdik?"), side: "r" }] },
      { scene: { bg: "#E3F1E8", props: ["book"], people: [{ who: "boy", x: 40 }] }, bubbles: [{ who: 0, text: b("New plan: 10 minutes of learning first, then play! ⏰", "Yangi reja: avval 10 daqiqa ilm, keyin o‘yin! ⏰") }] },
    ] },
];
