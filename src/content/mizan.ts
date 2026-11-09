// Mizan: deeds that authentic hadiths describe as heaviest on the scale or
// carrying the greatest rewards. Only sahih/hasan narrations; every card shows
// its source and grade. A scholar must verify reference numbers before release.

export type MizanCategory = "Dhikr" | "Akhlaq" | "Duas" | "Surahs";
export type MizanTime = "Morning" | "Evening" | "After prayer" | "Before sleep" | "Any time" | "Friday" | "Ramadan";

export type MizanCard = {
  id: string;
  category: MizanCategory;
  title: string;
  ar?: string;
  tr?: string;
  meaning?: string;
  reward: string;
  weight: "Heavy on the scale" | "Fills the scale" | "Outweighs" | "Great reward";
  source: string;
  grade: "Sahih" | "Hasan";
  times: MizanTime[];
  /** Dhikr that can be counted with the private counter. */
  count?: number;
  link?: string;
};

export const MIZAN: MizanCard[] = [
  // ---- Dhikr ----
  { id: "two-words", category: "Dhikr", title: "Two phrases, heavy on the scale",
    ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ", tr: "Subḥāna-llāhi wa biḥamdih, subḥāna-llāhi-l-ʿaẓīm.", meaning: "Glory be to Allah and praise Him; glory be to Allah, the Magnificent.",
    reward: "Light on the tongue, heavy on the scale, and beloved to the Most Merciful.", weight: "Heavy on the scale", source: "Bukhari 6406, Muslim 2694", grade: "Sahih", times: ["Any time"], count: 100 },
  { id: "alhamdulillah", category: "Dhikr", title: "Al-ḥamdu lillāh",
    ar: "الْحَمْدُ لِلَّهِ", tr: "Al-ḥamdu lillāh.", meaning: "All praise is for Allah.",
    reward: "Al-ḥamdu lillāh fills the scale, and Subḥāna-llāh wa-l-ḥamdu lillāh fill what is between the heavens and the earth.", weight: "Fills the scale", source: "Muslim 223", grade: "Sahih", times: ["Any time"], count: 33 },
  { id: "bitaqah", category: "Dhikr", title: "Lā ilāha illa-llāh",
    ar: "لَا إِلَٰهَ إِلَّا اللَّهُ", tr: "Lā ilāha illa-llāh.", meaning: "There is no god but Allah.",
    reward: "A card bearing it outweighs ninety-nine scrolls of sins on the Day of Judgment (the Hadith of the Card).", weight: "Outweighs", source: "Tirmidhi 2639", grade: "Sahih", times: ["Any time"], count: 100 },
  { id: "tahlil-100", category: "Dhikr", title: "The tahlīl, 100 times",
    ar: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", tr: "Lā ilāha illa-llāhu waḥdahū lā sharīka lah, lahu-l-mulku wa lahu-l-ḥamd, wa huwa ʿalā kulli shayʾin qadīr.", meaning: "There is no god but Allah alone, without partner. His is the dominion and His is the praise, and He has power over all things.",
    reward: "Like freeing ten slaves; 100 good deeds written, 100 sins erased, and protection from Shayṭān for that day.", weight: "Great reward", source: "Bukhari 6403, Muslim 2691", grade: "Sahih", times: ["Morning"], count: 100 },
  { id: "subhanallah-100", category: "Dhikr", title: "Subḥāna-llāhi wa biḥamdih, 100 times",
    ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", tr: "Subḥāna-llāhi wa biḥamdih.", meaning: "Glory be to Allah and praise Him.",
    reward: "Sins are forgiven even if they are like the foam of the sea.", weight: "Great reward", source: "Bukhari 6405", grade: "Sahih", times: ["Any time"], count: 100 },
  { id: "juwayriyah", category: "Dhikr", title: "The dhikr that outweighed a morning",
    ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", tr: "Subḥāna-llāhi wa biḥamdih, ʿadada khalqih, wa riḍā nafsih, wa zinata ʿarshih, wa midāda kalimātih. (×3)", meaning: "Glory be to Allah and praise Him, as many times as His creation, as much as pleases Him, as heavy as His Throne, and as much as the ink of His words.",
    reward: "Said three times, it outweighed hours of dhikr made from Fajr until mid-morning.", weight: "Outweighs", source: "Muslim 2726", grade: "Sahih", times: ["Morning"], count: 3 },
  { id: "four-words", category: "Dhikr", title: "The four most beloved words",
    ar: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَٰهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ", tr: "Subḥāna-llāh, wa-l-ḥamdu lillāh, wa lā ilāha illa-llāh, wa-llāhu akbar.", meaning: "Glory be to Allah, all praise is for Allah, there is no god but Allah, and Allah is the Greatest.",
    reward: "The four words most beloved to Allah.", weight: "Great reward", source: "Muslim 2137", grade: "Sahih", times: ["Any time"], count: 33 },
  { id: "hawqala", category: "Dhikr", title: "A treasure of Paradise",
    ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", tr: "Lā ḥawla wa lā quwwata illā billāh.", meaning: "There is no power and no strength except with Allah.",
    reward: "One of the treasures of Paradise.", weight: "Great reward", source: "Bukhari 6384, Muslim 2704", grade: "Sahih", times: ["Any time"], count: 33 },
  { id: "tasbih-prayer", category: "Dhikr", title: "Tasbīḥ after every prayer",
    tr: "Subḥāna-llāh ×33, Al-ḥamdu lillāh ×33, Allāhu akbar ×33, then Lā ilāha illa-llāhu waḥdahū lā sharīka lah… once to complete 100.",
    reward: "Sins are forgiven even if they are like the foam of the sea.", weight: "Great reward", source: "Muslim 597", grade: "Sahih", times: ["After prayer"], count: 33 },
  { id: "istighfar", category: "Dhikr", title: "Sayyid al-Istighfār",
    tr: "Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa ana ʿabduk…",
    reward: "Whoever says it with certainty in the morning and dies that day is among the people of Paradise.", weight: "Great reward", source: "Bukhari 6306", grade: "Sahih", times: ["Morning", "Evening"], link: "/learn/duas/forgiveness" },
  { id: "salawat", category: "Dhikr", title: "Ṣalawāt on the Prophet ﷺ",
    ar: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", tr: "Allāhumma ṣalli ʿalā Muḥammad.", meaning: "O Allah, send blessings upon Muhammad.",
    reward: "Whoever sends blessings on him once, Allah sends ten blessings on them.", weight: "Great reward", source: "Muslim 408", grade: "Sahih", times: ["Any time", "Friday"], count: 100 },

  // ---- Akhlaq ----
  { id: "good-character", category: "Akhlaq", title: "Good character",
    reward: "Nothing is heavier on the believer’s scale on the Day of Judgment than good character.", weight: "Heavy on the scale", source: "Tirmidhi 2002, Abu Dawud 4799", grade: "Sahih", times: ["Any time"] },
  { id: "character-rank", category: "Akhlaq", title: "Good character reaches night prayer",
    reward: "By good character a believer reaches the rank of one who fasts by day and prays all night.", weight: "Great reward", source: "Abu Dawud 4798", grade: "Sahih", times: ["Any time"] },
  { id: "closest", category: "Akhlaq", title: "Closest to the Prophet ﷺ",
    reward: "Those best in character will sit closest to him on the Day of Judgment.", weight: "Great reward", source: "Tirmidhi 2018", grade: "Hasan", times: ["Any time"] },
  { id: "leave-argument", category: "Akhlaq", title: "Leaving arguments and lies",
    reward: "A house in Paradise for leaving arguments even when right, for leaving lies even in jest, and for good character.", weight: "Great reward", source: "Abu Dawud 4800", grade: "Hasan", times: ["Any time"], link: "/learn/akhlaq/speech" },
  { id: "tongue", category: "Akhlaq", title: "Guarding the tongue and chastity",
    reward: "The Prophet ﷺ guarantees Paradise.", weight: "Great reward", source: "Bukhari 6474", grade: "Sahih", times: ["Any time"], link: "/learn/akhlaq/speech" },
  { id: "orphan", category: "Akhlaq", title: "Caring for an orphan",
    reward: "With the Prophet ﷺ in Paradise like two fingers held together.", weight: "Great reward", source: "Bukhari 5304", grade: "Sahih", times: ["Any time"] },
  { id: "parents-card", category: "Akhlaq", title: "Kindness to parents",
    reward: "Among the deeds most beloved to Allah, right after prayer on time.", weight: "Great reward", source: "Bukhari 527", grade: "Sahih", times: ["Any time"], link: "/learn/akhlaq/parents" },
  { id: "kinship", category: "Akhlaq", title: "Keeping family ties",
    reward: "Provision is expanded and life is blessed.", weight: "Great reward", source: "Bukhari 5986", grade: "Sahih", times: ["Any time"] },
  { id: "anger-card", category: "Akhlaq", title: "Controlling anger",
    reward: "True strength is controlling yourself when angry.", weight: "Great reward", source: "Bukhari 6114", grade: "Sahih", times: ["Any time"], link: "/learn/akhlaq/anger" },
  { id: "road", category: "Akhlaq", title: "Removing harm from the road",
    reward: "A man was forgiven for moving a thorny branch out of people’s way.", weight: "Great reward", source: "Bukhari 2472, Muslim 1914", grade: "Sahih", times: ["Any time"] },
  { id: "animals", category: "Akhlaq", title: "Mercy to animals",
    reward: "A man was forgiven for giving water to a thirsty dog.", weight: "Great reward", source: "Bukhari 2363", grade: "Sahih", times: ["Any time"] },
  { id: "smile", category: "Akhlaq", title: "A smile",
    reward: "Smiling at your brother or sister is sadaqah.", weight: "Great reward", source: "Tirmidhi 1956", grade: "Hasan", times: ["Any time"] },
  { id: "salam-card", category: "Akhlaq", title: "Spreading salām",
    reward: "It builds love between believers, the path to Paradise.", weight: "Great reward", source: "Muslim 54", grade: "Sahih", times: ["Any time"], link: "/learn/akhlaq/salam" },

  // ---- Duas ----
  { id: "yunus", category: "Duas", title: "The duʿāʾ of Yūnus",
    ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tr: "Lā ilāha illā anta subḥānaka innī kuntu mina-ẓ-ẓālimīn.", meaning: "There is no god but You, glory be to You; I was among the wrongdoers.",
    reward: "No Muslim calls on Allah with it except that He answers.", weight: "Great reward", source: "Tirmidhi 3505", grade: "Sahih", times: ["Any time"], count: 33 },
  { id: "rabbana", category: "Duas", title: "The duʿāʾ he made most often",
    ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", tr: "Rabbanā ātinā fi-d-dunyā ḥasanatan wa fi-l-ākhirati ḥasanatan wa qinā ʿadhāba-n-nār.", meaning: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the Fire.",
    reward: "The duʿāʾ the Prophet ﷺ made most often.", weight: "Great reward", source: "Bukhari 6389", grade: "Sahih", times: ["Any time", "After prayer"] },
  { id: "qadr-dua", category: "Duas", title: "Duʿāʾ for Laylat al-Qadr",
    ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", tr: "Allāhumma innaka ʿafuwwun tuḥibbu-l-ʿafwa faʿfu ʿannī.", meaning: "O Allah, You are Pardoning and love to pardon, so pardon me.",
    reward: "Taught by the Prophet ﷺ to ʿĀʾishah (ra) for the Night of Decree.", weight: "Great reward", source: "Tirmidhi 3513", grade: "Sahih", times: ["Ramadan"], count: 100 },
  { id: "protection", category: "Duas", title: "Protection, morning and evening",
    ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", tr: "Bismillāhi-lladhī lā yaḍurru maʿa-smihī shayʾun fi-l-arḍi wa lā fi-s-samāʾ, wa huwa-s-samīʿu-l-ʿalīm. (×3)", meaning: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.",
    reward: "Nothing will harm the one who says it three times.", weight: "Great reward", source: "Abu Dawud 5088, Tirmidhi 3388", grade: "Hasan", times: ["Morning", "Evening"], count: 3 },
  { id: "adhan-dua", category: "Duas", title: "Duʿāʾ after the adhān",
    ar: "اللَّهُمَّ رَبَّ هَٰذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ", tr: "Allāhumma rabba hādhihi-d-daʿwati-t-tāmmah, wa-ṣ-ṣalāti-l-qāʾimah, āti Muḥammadani-l-wasīlata wa-l-faḍīlah, wa-bʿath-hu maqāman maḥmūdani-lladhī waʿadtah.", meaning: "O Allah, Lord of this perfect call and the prayer about to begin, grant Muhammad al-Wasīlah and excellence, and raise him to the praised station You promised him.",
    reward: "The Prophet’s ﷺ intercession on the Day of Judgment.", weight: "Great reward", source: "Bukhari 614", grade: "Sahih", times: ["Any time"] },
  { id: "absent-dua", category: "Duas", title: "Duʿāʾ for someone in their absence",
    reward: "An angel says: “And for you the same.”", weight: "Great reward", source: "Muslim 2733", grade: "Sahih", times: ["Any time"] },

  // ---- Surahs ----
  { id: "fatiha-card", category: "Surahs", title: "Al-Fātiḥah", reward: "The greatest sūrah in the Quran.", weight: "Great reward", source: "Bukhari 4474", grade: "Sahih", times: ["Any time"], link: "/learn/quran/fatiha" },
  { id: "kursi-card", category: "Surahs", title: "Āyat al-Kursī (2:255)", reward: "The greatest verse in the Quran. Recited before sleep, a guardian stays with you until morning.", weight: "Great reward", source: "Muslim 810, Bukhari 2311", grade: "Sahih", times: ["Before sleep", "After prayer"], link: "/learn/quran/kursi" },
  { id: "ikhlas-card", category: "Surahs", title: "Al-Ikhlāṣ (112)", reward: "Equal to one third of the Quran.", weight: "Great reward", source: "Bukhari 5013", grade: "Sahih", times: ["Any time", "Before sleep"], link: "/learn/quran/short-surahs" },
  { id: "mulk", category: "Surahs", title: "Al-Mulk (67)", reward: "It intercedes for its reciter until they are forgiven.", weight: "Great reward", source: "Tirmidhi 2891, Abu Dawud 1400", grade: "Hasan", times: ["Before sleep"] },
  { id: "baqarah-end", category: "Surahs", title: "Last two verses of Al-Baqarah (2:285–286)", reward: "Recited at night, they suffice the reciter.", weight: "Great reward", source: "Bukhari 5009", grade: "Sahih", times: ["Before sleep"] },
  { id: "baqarah", category: "Surahs", title: "Al-Baqarah (2)", reward: "Shayṭān flees the house in which it is recited.", weight: "Great reward", source: "Muslim 780", grade: "Sahih", times: ["Any time"] },
  { id: "zahrawayn", category: "Surahs", title: "Al-Baqarah and Āl ʿImrān", reward: "They come on the Day of Judgment like two clouds, pleading for their companions.", weight: "Great reward", source: "Muslim 804", grade: "Sahih", times: ["Any time"] },
  { id: "kahf", category: "Surahs", title: "First ten verses of Al-Kahf", reward: "Protection from the Dajjāl.", weight: "Great reward", source: "Muslim 809", grade: "Sahih", times: ["Friday"] },
  { id: "muawwidhatayn", category: "Surahs", title: "Al-Falaq and An-Nās", reward: "Nothing compares to them for seeking refuge.", weight: "Great reward", source: "Muslim 814", grade: "Sahih", times: ["Morning", "Evening", "Before sleep"], link: "/learn/quran/short-surahs" },
  { id: "letters", category: "Surahs", title: "Every letter of the Quran", reward: "Each letter earns a good deed, and each good deed is multiplied tenfold.", weight: "Great reward", source: "Tirmidhi 2910", grade: "Sahih", times: ["Any time"] },
];

export const MYTHS: { claim: string; scholars: string; instead: string; insteadLink?: string }[] = [
  {
    claim: "“Yā Sīn is the heart of the Quran”, with set rewards for reciting it.",
    scholars: "The narration is in Tirmidhi (2887), who himself noted its weakness, and many hadith scholars graded it weak. Reciting Yā Sīn is still good, as it is part of the Quran.",
    instead: "Al-Ikhlāṣ equals a third of the Quran (Bukhari 5013), and Al-Mulk intercedes for its reciter (Tirmidhi 2891).",
    insteadLink: "/learn/quran/short-surahs",
  },
  {
    claim: "“Reciting Sūrat al-Wāqiʿah every night protects you from poverty.”",
    scholars: "Hadith scholars have graded this narration weak. Reciting Al-Wāqiʿah is good, but this specific promise is not established.",
    instead: "Seek provision through istighfār, taqwā and keeping family ties (Bukhari 5986).",
  },
  {
    claim: "“Seek knowledge even if you have to go to China.”",
    scholars: "Scholars of hadith graded this very weak or fabricated. The meaning that knowledge is precious is true, but it should not be attributed to the Prophet ﷺ.",
    instead: "Whoever takes a path seeking knowledge, Allah makes easy a path to Paradise (Muslim 2699).",
  },
  {
    claim: "Chain messages: “Forward this to 10 people or something bad will happen”, or “Share this and get 1,000 rewards.”",
    scholars: "These have no basis in the Quran or Sunnah. Attributing rewards or punishments to the Prophet ﷺ without evidence is a serious matter (Bukhari 110).",
    instead: "Share a real ayah or authentic hadith with its source. Guiding someone to good earns the reward of doing it (Muslim 1893).",
  },
];
