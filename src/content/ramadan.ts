import type { Recitation } from "./recitations";

// Ramadan Quest content. Duas are labelled Hadith-based, Customary or
// Madhab-specific so users know exactly what each one rests on.

export type RamadanDua = { occasion: string; r: Recitation; source: string; label: "Hadith-based" | "Customary" | "Madhab-specific"; note?: string };

export const RAMADAN_DUAS: RamadanDua[] = [
  { occasion: "Sighting the new moon", label: "Hadith-based", source: "Tirmidhi 3451",
    r: { ar: "اللَّهُمَّ أَهْلِلْهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ", tr: "Allāhumma ahlilhu ʿalaynā bi-l-yumni wa-l-īmān, wa-s-salāmati wa-l-islām, rabbī wa rabbuka-llāh.", en: "O Allah, bring it upon us with blessing and faith, safety and Islam. My Lord and your Lord is Allah." } },
  { occasion: "Intention for the fast (suhoor)", label: "Customary", source: "Customary wording; the intention itself is in the heart",
    r: { ar: "نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرِ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصًا لِلَّهِ تَعَالَىٰ", tr: "Navaytu an asūma sawma shahri Ramaḍāna mina-l-fajri ila-l-maghrib, khāliṣan lillāhi taʿālā.", en: "I intend to fast the month of Ramadan from dawn until sunset, sincerely for Allah the Exalted." },
    note: "Widely taught in Uzbekistan (“Navaytu an asuma…”). Saying it is not required; the heart’s intention is enough." },
  { occasion: "Breaking the fast", label: "Hadith-based", source: "Abu Dawud 2357 (hasan)",
    r: { ar: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ", tr: "Dhahaba-ẓ-ẓamaʾu wa-btallati-l-ʿurūqu wa thabata-l-ajru in shāʾa-llāh.", en: "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills." } },
  { occasion: "Breaking the fast (popular in Uzbekistan)", label: "Customary", source: "The core “laka ṣumtu wa ʿalā rizqika afṭartu” is in Abu Dawud 2358 (mursal, weak); “wa bika āmantu wa ʿalayka tawakkaltu” is a customary addition. Widely recited.",
    r: { ar: "اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَىٰ رِزْقِكَ أَفْطَرْتُ", tr: "Allāhumma laka ṣumtu wa bika āmantu wa ʿalayka tawakkaltu wa ʿalā rizqika afṭart.", en: "O Allah, for You I fasted, in You I believe, on You I rely, and with Your provision I break my fast." } },
  { occasion: "Iftar at someone’s home", label: "Hadith-based", source: "Abu Dawud 3854",
    r: { ar: "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ", tr: "Afṭara ʿindakumu-ṣ-ṣāʾimūn, wa akala ṭaʿāmakumu-l-abrār, wa ṣallat ʿalaykumu-l-malāʾikah.", en: "May fasting people break their fast with you, the righteous eat your food, and the angels pray for you." } },
  { occasion: "When provoked while fasting", label: "Hadith-based", source: "Bukhari 1904",
    r: { ar: "إِنِّي صَائِمٌ", tr: "Innī ṣāʾim.", en: "I am fasting." } },
  { occasion: "Laylat al-Qadr", label: "Hadith-based", source: "Tirmidhi 3513",
    r: { ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", tr: "Allāhumma innaka ʿafuwwun tuḥibbu-l-ʿafwa faʿfu ʿannī.", en: "O Allah, You are Pardoning and love to pardon, so pardon me." } },
  { occasion: "Between sets of taraweeh", label: "Customary", source: "Customary in Hanafi regions",
    r: { ar: "سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ، سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ، سُبْحَانَ الْمَلِكِ الْحَيِّ الَّذِي لَا يَنَامُ وَلَا يَمُوتُ، سُبُّوحٌ قُدُّوسٌ رَبُّنَا وَرَبُّ الْمَلَائِكَةِ وَالرُّوحِ", tr: "Subḥāna dhi-l-mulki wa-l-malakūt, subḥāna dhi-l-ʿizzati wa-l-ʿaẓamati wa-l-haybati wa-l-qudrati wa-l-kibriyāʾi wa-l-jabarūt, subḥāna-l-maliki-l-ḥayyi-lladhī lā yanāmu wa lā yamūt, subbūḥun quddūs, rabbunā wa rabbu-l-malāʾikati wa-r-rūḥ.", en: "Glory be to the Owner of the dominion and the kingdom; glory be to the Possessor of might, greatness, awe, power, grandeur and majesty; glory be to the Living King who neither sleeps nor dies. Most Glorious, Most Holy, our Lord and the Lord of the angels and the Spirit." } },
  { occasion: "Qunūt in Witr", label: "Madhab-specific", source: "Hanafi practice",
    r: { ar: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ…", tr: "Allāhumma innā nastaʿīnuka wa nastaghfiruk…", en: "The full Hanafi Qunūt with meaning is in the Witr steps of the prayer guide." },
    note: "Open Salah → Isha → Witr to learn it step by step." },
];

export const RAMADAN_SURAHS: { name: string; when: string; why: string; link?: string }[] = [
  { name: "Al-Baqarah 2:183–187", when: "Day 1", why: "The verses that prescribe fasting, including 2:185 (Ramadan is the month the Quran was revealed) and 2:186 (“I am near; I answer the call”)." },
  { name: "Al-ʿAlaq 96:1–5", when: "Night 1", why: "The first revelation, in the cave of Ḥirāʾ, in Ramadan (Bukhari 3; Quran 2:185)." },
  { name: "Al-Qadr (97)", when: "Last ten nights", why: "Describes Laylat al-Qadr, better than a thousand months." },
  { name: "Ad-Dukhān 44:3–4", when: "Last ten nights", why: "The Quran was revealed on a blessed night." },
  { name: "Al-Mulk (67)", when: "Every night", why: "It intercedes for its reciter (Tirmidhi 2891)." },
  { name: "Al-Ikhlāṣ, Al-Falaq, An-Nās", when: "Witr, mornings, evenings, before sleep", why: "Protection and the heart of Tawḥīd.", link: "/learn/quran/short-surahs" },
  { name: "Al-Kahf (18)", when: "Fridays", why: "A Friday sunnah; its first ten verses protect from the Dajjāl (Muslim 809)." },
  { name: "The whole Quran (khatm)", when: "Throughout the month", why: "Jibrīl reviewed the Quran with the Prophet ﷺ every Ramadan (Bukhari 4998). Use the khatm planner in the tracker." },
];

export const RAMADAN_HISTORY: { when: string; event: string }[] = [
  { when: "Before Islam", event: "Fasting was prescribed for earlier nations: “as it was prescribed for those before you” (Quran 2:183). The Prophet ﷺ also fasted ʿĀshūrāʾ." },
  { when: "610 CE, Ramadan", event: "The first revelation in the cave of Ḥirāʾ: “Iqraʾ” (Bukhari 3; Quran 2:185)." },
  { when: "2 AH (624 CE)", event: "Fasting Ramadan made obligatory in Madinah; Zakāt al-Fiṭr prescribed (Bukhari 1503)." },
  { when: "17 Ramadan, 2 AH", event: "Battle of Badr: about 313 Muslims prevail against a far larger army." },
  { when: "8 AH (630 CE), Ramadan", event: "Conquest of Makkah, largely without fighting, with a general amnesty." },
  { when: "The Prophet’s lifetime", event: "He led taraweeh in congregation for a few nights, then stopped so it would not become obligatory (Bukhari 2012)." },
  { when: "Caliphate of ʿUmar (ra)", event: "ʿUmar gathered people for taraweeh behind Ubayy ibn Kaʿb (Bukhari 2010)." },
  { when: "Every year", event: "Iʿtikāf in the last ten days, a practice of the Prophet ﷺ (Bukhari 2026)." },
  { when: "Uzbek heritage", event: "Saharlik and iftorlik gatherings, the “Ramazon aytish” door-to-door songs, and Ramazon hayiti." },
];

export type QuestDay = { day: number; title: string; text: string; source: string; link?: string };

export const QUEST_THEMES = [
  // The app’s own themes for the month (the popular mercy / forgiveness / freedom-from-the-Fire split comes from a weak narration).
  { from: 1, to: 10, name: "Building good habits" },
  { from: 11, to: 20, name: "Growing closer to Allah" },
  { from: 21, to: 30, name: "The last ten nights" },
];

export const QUEST_DAYS: QuestDay[] = [
  { day: 1, title: "Welcome, Ramadan", text: "Fasting was prescribed so that we may attain taqwā, mindfulness of Allah.", source: "Quran 2:183", link: "/learn/islam/sawm" },
  { day: 2, title: "Intention and suhoor", text: "Eat suhoor, for there is blessing in it. The intention is made in the heart each night.", source: "Bukhari 1923" },
  { day: 3, title: "What breaks the fast (Hanafi)", text: "Deliberately eating, drinking or smoking, marital relations, and deliberately vomiting a mouthful. Kaffārah is due when someone fasting Ramadan, having made the intention at night, deliberately eats, drinks (including medicine or smoking, per contemporary Hanafi fatwas) or has intercourse without a valid excuse. It is 60 consecutive days of fasting; only someone unable to fast feeds 60 poor people. The qaḍāʾ day is also due.", source: "Nūr al-Īḍāḥ" },
  { day: 4, title: "What does not break it", text: "Eating or drinking by mistake does not break the fast: Allah fed and gave you drink.", source: "Bukhari 1933" },
  { day: 5, title: "Who is excused", text: "The ill, travellers, and women during menstruation or postnatal bleeding make up missed days later. The very elderly who cannot fast pay fidyah.", source: "Quran 2:184" },
  { day: 6, title: "The sunnah of iftar", text: "Break the fast promptly at sunset with fresh dates, or dried dates, or water.", source: "Abu Dawud 2356, Bukhari 1957" },
  { day: 7, title: "Fasting the tongue", text: "Whoever does not give up false speech and acting on it, Allah has no need of them giving up food and drink.", source: "Bukhari 1903", link: "/learn/akhlaq/speech" },
  { day: 8, title: "Taraweeh", text: "Whoever stands in prayer in Ramadan with faith and seeking reward is forgiven past sins. In the Hanafi school, taraweeh is 20 rakʿahs, sunnah muʾakkadah.", source: "Bukhari 37" },
  { day: 9, title: "The month of the Quran", text: "Jibrīl met the Prophet ﷺ every night of Ramadan to review the Quran with him.", source: "Bukhari 6, 4998", link: "/learn/quran/fatiha" },
  { day: 10, title: "The duʿāʾ of the fasting person", text: "It is reported that the duʿāʾ of the fasting person is not turned back. Use the moments before iftar.", source: "Tirmidhi 3598 (graded ḥasan by al-Tirmidhī)" },
  { day: 11, title: "Tawbah and istighfār", text: "Whoever fasts Ramadan with faith and seeking reward is forgiven their past sins.", source: "Bukhari 1901", link: "/learn/duas/forgiveness" },
  { day: 12, title: "Generosity", text: "The Prophet ﷺ was the most generous of people, and most generous of all in Ramadan.", source: "Bukhari 6" },
  { day: 13, title: "Feeding a fasting person", text: "Whoever gives iftar to a fasting person gets the same reward, without reducing theirs.", source: "Tirmidhi 807" },
  { day: 14, title: "Fasting is a shield", text: "Fasting protects from sin and from the Fire. If someone provokes you, say “I am fasting.”", source: "Bukhari 1894, 1904" },
  { day: 15, title: "Character in Ramadan", text: "Nothing is heavier on the scale than good character. Make Ramadan the month your manners improve.", source: "Tirmidhi 2002", link: "/mizan" },
  { day: 16, title: "The first revelation", text: "“Read in the name of your Lord who created.” The Quran began in Ramadan.", source: "Quran 96:1–5, Bukhari 3" },
  { day: 17, title: "The Battle of Badr", text: "On 17 Ramadan, 2 AH, Allah gave a small, faithful army victory. Faith and reliance on Allah matter more than numbers.", source: "Quran 3:123" },
  { day: 18, title: "Kindness at home", text: "The best of you is the best to his family.", source: "Tirmidhi 3895", link: "/learn/akhlaq/parents" },
  { day: 19, title: "Controlling anger while hungry", text: "Hunger tests patience. The strong one controls himself when angry.", source: "Bukhari 6114", link: "/learn/akhlaq/anger" },
  { day: 20, title: "Preparing for the last ten", text: "In the last ten nights, the Prophet ﷺ tightened his waist-wrap, stayed up at night and woke his family.", source: "Bukhari 2024" },
  { day: 21, title: "Laylat al-Qadr", text: "Better than a thousand months. Seek it in the odd nights of the last ten.", source: "Quran 97, Bukhari 2017" },
  { day: 22, title: "The duʿāʾ of the Night of Decree", text: "Allāhumma innaka ʿafuwwun tuḥibbu-l-ʿafwa faʿfu ʿannī.", source: "Tirmidhi 3513" },
  { day: 23, title: "Iʿtikāf", text: "The Prophet ﷺ spent the last ten days in iʿtikāf in the masjid every year.", source: "Bukhari 2026" },
  { day: 24, title: "The Conquest of Makkah", text: "In Ramadan 8 AH the Prophet ﷺ entered Makkah and forgave those who had fought him.", source: "Muslim 1780" },
  { day: 25, title: "Zakāt al-Fiṭr", text: "Due on every Muslim who has the means, for themselves and their dependants, paid before the Eid prayer. In Uzbekistan the amount is announced each year.", source: "Bukhari 1503" },
  { day: 26, title: "Sadaqah in the last nights", text: "Charity does not decrease wealth. Give something every night of the last ten.", source: "Muslim 2588" },
  { day: 27, title: "Seeking every odd night", text: "Many hope for the 27th, but the Prophet ﷺ told us to seek it in all the odd nights of the last ten.", source: "Bukhari 2017" },
  { day: 28, title: "Eid sunnahs", text: "Ghusl, best clothes, eating an odd number of dates before the Eid al-Fiṭr prayer, and saying the takbīr on the way.", source: "Bukhari 953 (dates), Bukhari 948 (clothes), Muwaṭṭaʾ (Ibn ʿUmar’s ghusl)" },
  { day: 29, title: "Six days of Shawwāl", text: "Fasting Ramadan then six days of Shawwāl is like fasting the whole year.", source: "Muslim 1164" },
  { day: 30, title: "Keeping the light", text: "The most beloved deeds to Allah are the most consistent, even if small. Keep one Ramadan habit all year.", source: "Bukhari 6464" },
];

/** Five daily prayers for the private checklist. */
export const TRACK_PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;
export const MISSED_REASONS = ["Illness", "Travel", "Menstruation or postnatal bleeding", "Other"] as const;
export const QURAN_PAGES = 604;
