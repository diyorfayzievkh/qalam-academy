import type { Block, Lesson } from "./library";
import type { Question } from "./topics";
import { L, P } from "./ruhiy";
import { RECITATIONS } from "./recitations";

// Quran Basics: what the Quran is, how it came down and was preserved, its
// manners (Hanafi rulings), reward, tajwīd basics, the prostration of
// recitation, stories behind sūrahs, memorising and reflecting.
// A scholar should review before release.

const Qt = (en: string, src: string, ar?: string, tr?: string, note?: string): Block => ({ type: "quote", en, src, ar, tr, note });
const Cmp = (title: string, left: string, right: string, rows: [string, string][]): Block => ({ type: "compare", title, left, right, rows });
const St = (title: string, items: string[]): Block => ({ type: "steps", title, items });
const Sc = (id: string, situation: string, options: { text: string; best?: boolean; feedback: string }[]): Block => ({ type: "scenario", id, situation, options });
const Rf = (think: string[], home?: string[]): Block => ({ type: "reflect", think, home });
const Rw = (title: string, measure: string, picture: string, src: string): Block => ({ type: "reward", title, measure, picture, src });
const Story = (id: string, kind: string, title: string, scene: string, story: string[], lesson: string, src: string): Block => ({ type: "story", id, kind, title, scene, story, lesson, src });
const q = (q: string, options: string[], answer: number, why: string, src: string): Question => ({ q, options, answer, why, src });

export const QURAN_LESSONS: Lesson[] = [
  // ---------------------------------------------------------------- Knowing the Quran
  { id: "what-is-quran", group: "Knowing the Quran", title: "What is the Quran?", summary: "The speech of Allah, its sūrahs, āyāt and parts, and what makes it unlike any other book.", sources: ["Quran 15:9", "Quran 17:88", "Quran 2:2", "Quran 96:1–5"],
    blocks: [
      P("The Quran is the speech of Allah, revealed to the Prophet Muhammad ﷺ through the angel Jibrīl, in the Arabic language, written in the muṣḥaf, passed down to us by mass transmission, and an act of worship to recite. It is the last revealed book, and it confirms and protects the truth of the books before it."),
      P("The word qurʾān means “recitation”, “that which is read”. It was recited before it was written, and to this day millions carry the whole of it in their hearts."),
      Qt("Indeed, it is We who sent down the Reminder, and indeed We will be its guardian.", "Quran 15:9", "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", "Innā naḥnu nazzalna-dh-dhikra wa innā lahū la-ḥāfiẓūn."),
      L("The Quran in numbers", [
        "114 sūrahs (chapters), from Al-Fātiḥah to An-Nās.",
        "6,236 āyāt (verses), in the Kufan count used in the common Ḥafṣ muṣḥaf.",
        "30 ajzāʾ (parts), so it can be read in a month, one juzʾ a day, and 60 aḥzāb (half-parts).",
        "Longest sūrah: Al-Baqarah (286 āyāt). Shortest: Al-Kawthar (3 āyāt).",
        "Revealed over about 23 years: roughly 13 in Makkah and 10 in Madinah.",
        "Every sūrah begins with “Bismillāh” except At-Tawbah (9).",
      ]),
      Cmp("Makkī and Madanī sūrahs", "Makkī (before the Hijrah)", "Madanī (after the Hijrah)", [
        ["Mostly shorter, with powerful rhythm", "Mostly longer, detailed āyāt"],
        ["Belief: Allah’s oneness, the Hereafter, the prophets", "Laws of worship, family, trade and society"],
        ["Example: Al-ʿAlaq, Al-Ikhlāṣ, Yā Sīn", "Example: Al-Baqarah, An-Nisāʾ, Al-Ḥujurāt"],
      ]),
      L("What makes it unique", [
        "It is a living miracle: Allah challenged the most eloquent Arabs to produce even one sūrah like it, and they could not (2:23, 17:88).",
        "It is preserved letter by letter: the same text is recited from Tashkent to Morocco.",
        "It is guidance for every age: “This is the Book in which there is no doubt, a guidance for the God-conscious” (2:2).",
        "It is meant to be recited, understood and lived, not only kept on a shelf.",
      ]),
      Sc("quran-shelf", "At a friend’s house you notice a beautiful Quran on a high shelf, covered in dust. Your friend says: “We keep it for blessing.” What would you gently suggest?", [
        { text: "“That’s perfect, that’s what it’s for.”", feedback: "Respecting it is good, but the Quran was sent to be read and lived." },
        { text: "“How about we read one page together each evening?”", best: true, feedback: "Blessing comes most of all from reciting, understanding and acting on it." },
        { text: "“You should throw it out if you don’t read it.”", feedback: "Never. The muṣḥaf must always be treated with respect." },
      ]),
      Rf(["How much of the Quran have I read in the last month?", "Which sūrah do I know best, and what is it about?"], ["Hold a muṣḥaf together and find: the first sūrah, the longest, the shortest, and the one without Bismillāh."]),
      L("Key takeaways", [
        "The Quran is the speech of Allah, revealed through Jibrīl, in Arabic.",
        "114 sūrahs, 6,236 āyāt, 30 parts, over 23 years.",
        "Allah Himself promised to preserve it.",
      ]),
    ],
    quiz: [
      q("What does the word “Qurʾān” mean?", ["The light", "Recitation", "The law", "The book of stories"], 1, "Qurʾān comes from qaraʾa, to read or recite.", "Arabic lexicons"),
      q("How many sūrahs are in the Quran?", ["100", "110", "114", "120"], 2, "From Al-Fātiḥah to An-Nās, 114 sūrahs.", "The muṣḥaf"),
      q("Which sūrah does not begin with Bismillāh?", ["Al-Fātiḥah", "At-Tawbah", "Al-Ikhlāṣ", "Yā Sīn"], 1, "At-Tawbah (9) is the only sūrah without the Basmalah at its start.", "The muṣḥaf"),
      q("Which is the longest sūrah?", ["Āl ʿImrān", "Yā Sīn", "Al-Baqarah", "Al-Kahf"], 2, "Al-Baqarah has 286 āyāt.", "The muṣḥaf"),
      q("Who promised to preserve the Quran?", ["The caliphs", "The scholars", "Allah Himself", "The Arabs"], 2, "“Indeed it is We who sent down the Reminder, and We will be its guardian.”", "Quran 15:9"),
      q("Makkī sūrahs mostly focus on…", ["Trade laws", "Inheritance shares", "Belief in Allah and the Hereafter", "Rules of war"], 2, "Before the Hijrah, revelation built belief first.", "ʿUlūm al-Qurʾān"),
      q("About how long was the Quran revealed over?", ["One night", "3 years", "23 years", "40 years"], 2, "Roughly 13 years in Makkah and 10 in Madinah.", "Sīrah"),
    ] },

  { id: "revelation", group: "Knowing the Quran", title: "How the Quran came down", summary: "Laylat al-Qadr, the first words in the cave, how revelation came, and why it came little by little.", sources: ["Quran 97:1", "Bukhari 2", "Bukhari 3", "Quran 25:32", "Bukhari 4998"],
    blocks: [
      P("The Quran came down in two stages. First, Allah sent it down from the Preserved Tablet to the lowest heaven on Laylat al-Qadr. Then Jibrīl brought it to the Prophet ﷺ piece by piece, over twenty-three years, as events happened and questions were asked."),
      Qt("Indeed, We sent it down on the Night of Decree.", "Quran 97:1", "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", "Innā anzalnāhu fī laylati-l-qadr."),
      Story("first-revelation", "From the Sīrah and Bukhari 3", "“Read!” in the cave of Ḥirāʾ", "A quiet cave on a mountain above Makkah, in Ramadan.", [
        "The Prophet ﷺ, then forty years old, used to go to the cave of Ḥirāʾ to worship alone for nights at a time.",
        "One night the angel came and said: “Read!” He said: “I am not a reader.” The angel held him tightly, then let go: “Read!” Three times.",
        "Then: “Read in the name of your Lord who created, created man from a clinging clot. Read, and your Lord is the Most Generous, who taught by the pen, taught man what he did not know.”",
        "He returned home trembling to Khadījah: “Cover me!” She comforted him, and became the first to believe.",
      ], "The first word of the Quran was “Read”, and the first blessing it mentions after creation is the pen. Our religion begins with learning.", "Bukhari 3; Quran 96:1–5"),
      L("How revelation came", [
        "Sometimes like the ringing of a bell; this was the hardest on him, and his forehead would drip with sweat even on a very cold day (Bukhari 2).",
        "Sometimes the angel came in the form of a man and spoke to him, and he understood (Bukhari 2).",
        "Every Ramadan, Jibrīl reviewed the whole Quran with him; in his final year, twice (Bukhari 4998).",
      ]),
      L("Why little by little?", [
        "To strengthen the Prophet’s ﷺ heart through every hardship (25:32).",
        "So the companions could memorise, understand and live each part before the next.",
        "To answer real questions as they came: “They ask you about…” appears again and again.",
        "To change habits gradually, as with the prohibition of wine in stages.",
      ]),
      Cmp("First and last", "The first revealed", "Among the last revealed", [
        ["Al-ʿAlaq 96:1–5: “Read in the name of your Lord…”", "Al-Baqarah 2:281: “Fear a day when you will be returned to Allah…” (Ibn ʿAbbās, reported)"],
        ["In the cave of Ḥirāʾ, Ramadan", "Near the end of his life, after the Farewell Ḥajj"],
      ]),
      Rf(["The first command was “Read”. What am I reading these days?", "Which āyah would I want to hear if my heart needed strength?"], ["Learn Al-ʿAlaq 1–5 together, the first words ever revealed."]),
      L("Key takeaways", [
        "Sent down to the lowest heaven on Laylat al-Qadr, then to the Prophet ﷺ over 23 years.",
        "The first words were “Read in the name of your Lord”.",
        "It came gradually to strengthen hearts and build a community step by step.",
      ]),
    ],
    quiz: [
      q("What were the first words revealed?", ["Al-Fātiḥah", "“Read in the name of your Lord”", "Āyat al-Kursī", "“O you wrapped in garments”"], 1, "Al-ʿAlaq 96:1–5 in the cave of Ḥirāʾ.", "Bukhari 3"),
      q("On which night was the Quran sent down?", ["The night of the Hijrah", "Laylat al-Qadr", "The night of ʿĀshūrāʾ", "The night of Eid"], 1, "“Indeed, We sent it down on the Night of Decree.”", "Quran 97:1"),
      q("Which angel brought the revelation?", ["Mīkāʾīl", "Isrāfīl", "Jibrīl", "Mālik"], 2, "Jibrīl is the trusted spirit who brought it down (26:193).", "Quran 26:193–194"),
      q("How did the Prophet ﷺ describe the hardest form of revelation?", ["Like a dream", "Like the ringing of a bell", "Like a whisper", "Like thunder"], 1, "And he would sweat even on a cold day.", "Bukhari 2"),
      q("Why was the Quran revealed gradually?", ["The angel was busy", "To strengthen hearts and teach step by step", "Paper was scarce", "No reason is known"], 1, "“Thus, that We may strengthen your heart by it” (25:32).", "Quran 25:32"),
      q("How often did Jibrīl review the Quran with the Prophet ﷺ?", ["Every Friday", "Every Ramadan", "Every Ḥajj", "Only once"], 1, "Every Ramadan, and twice in his final year.", "Bukhari 4998"),
      q("Who was the first person to believe in the Prophet ﷺ?", ["Abū Bakr", "ʿAlī", "Khadījah", "Zayd"], 2, "Khadījah comforted him and believed first.", "Bukhari 3; Ibn Hishām"),
    ] },

  { id: "preserved", group: "Knowing the Quran", title: "How the Quran was preserved", summary: "From hearts and palm leaves to one book: Abū Bakr, Zayd ibn Thābit, ʿUthmān, and the muṣḥaf in Tashkent.", sources: ["Bukhari 4986", "Bukhari 4987", "Quran 15:9"],
    blocks: [
      P("While the Prophet ﷺ lived, the Quran was memorised by many companions and written by scribes on whatever they had: palm stalks, flat stones, leather and shoulder bones. It was complete, but not yet bound in one volume, because revelation was still coming."),
      Story("zayd-mountain", "Bukhari 4986", "“Easier to move a mountain”", "Madinah, soon after the Battle of al-Yamāmah.", [
        "Many of the companions who knew the Quran by heart were martyred at al-Yamāmah. ʿUmar was worried and went to the caliph Abū Bakr: “I fear that much of the Quran will be lost. Let us gather it in one book.”",
        "Abū Bakr hesitated: “How can I do something the Messenger of Allah ﷺ did not do?” But ʿUmar kept explaining until Allah opened Abū Bakr’s heart to it.",
        "They called Zayd ibn Thābit, a young scribe of the revelation. Zayd later said: “By Allah, if they had asked me to move a mountain, it would have been easier than this!”",
        "He searched for every written piece and checked it against what the companions had memorised, accepting nothing without proof. The pages were kept with Abū Bakr, then ʿUmar, then Ḥafṣah.",
      ], "The companions treated every letter as a trust. Their care is why we hold the same Quran today.", "Bukhari 4986"),
      L("ʿUthmān unites the copies", [
        "As Islam spread, people in different lands began to argue about how they recited. The companion Ḥudhayfah came to ʿUthmān alarmed (Bukhari 4987).",
        "ʿUthmān had Zayd and other companions make copies from Ḥafṣah’s pages, in the dialect of Quraysh, and sent them to the great cities.",
        "This is why the muṣḥaf is called the ʿUthmānī muṣḥaf, and its spelling is still followed today.",
      ]),
      P("In Tashkent, at the Hast Imam complex, is kept one of the oldest surviving copies of the Quran, written on large parchment pages. Tradition connects it with the muṣḥaf of ʿUthmān; researchers date it to the early Islamic centuries. Either way, it is a reminder that the text in our hands is the same text recited fourteen centuries ago."),
      L("Preserved in two ways together", [
        "In hearts: memorised and recited by countless people in every generation, with chains of teachers back to the Prophet ﷺ.",
        "In writing: the ʿUthmānī text, copied with great care.",
        "The recognised readings (qirāʾāt), such as Ḥafṣ ʿan ʿĀṣim and Warsh ʿan Nāfiʿ, were all taught by the Prophet ﷺ and do not change the meaning’s truth.",
      ]),
      Rf(["Zayd said moving a mountain would have been easier. Why did he take it so seriously?"], ["If you visit Tashkent, see the old muṣḥaf at the Hast Imam complex together."]),
      L("Key takeaways", [
        "Written and memorised in the Prophet’s ﷺ lifetime; gathered into one volume under Abū Bakr.",
        "ʿUthmān sent standard copies to the cities.",
        "Preserved both in hearts and in writing, as Allah promised.",
      ]),
    ],
    quiz: [
      q("Under which caliph was the Quran first gathered into one volume?", ["ʿUthmān", "Abū Bakr", "ʿAlī", "ʿUmar ibn ʿAbd al-ʿAzīz"], 1, "After al-Yamāmah, at ʿUmar’s suggestion.", "Bukhari 4986"),
      q("Which companion led the gathering?", ["Zayd ibn Thābit", "Bilāl", "Abū Hurayrah", "Salmān"], 0, "A young scribe of the revelation.", "Bukhari 4986"),
      q("What did Zayd say would have been easier?", ["Fighting a battle", "Moving a mountain", "Crossing the desert", "Building a masjid"], 1, "He felt the weight of the trust.", "Bukhari 4986"),
      q("Why did ʿUthmān send standard copies to the cities?", ["To sell them", "Because people disagreed about recitation", "To replace memorisation", "Because paper was cheap"], 1, "Ḥudhayfah warned him of disputes.", "Bukhari 4987"),
      q("The Quran is preserved…", ["Only in books", "Only in memory", "Both in hearts and in writing", "Only in one city"], 2, "Mass memorisation and careful writing protect each other.", "Quran 15:9"),
      q("Which reading is the most widespread in the world today?", ["Warsh ʿan Nāfiʿ", "Ḥafṣ ʿan ʿĀṣim", "Qālūn", "Al-Dūrī"], 1, "Ḥafṣ ʿan ʿĀṣim is recited across most of the Muslim world.", "ʿUlūm al-Qurʾān"),
    ] },

  // ---------------------------------------------------------------- Key sūrahs (existing lessons follow this one)
  { id: "fatiha", group: "Key sūrahs", title: "Al-Fātiḥah: a conversation with Allah", summary: "The greatest sūrah, recited in every prayer, and how Allah answers each verse.", sources: ["Bukhari 4474", "Bukhari 756", "Muslim 395"],
    blocks: [
      P("There is no prayer for the one who does not recite Al-Fātiḥah (Bukhari 756). In the Hanafi school, reciting it is wājib in the first two rakʿahs of a farḍ prayer and in every rakʿah of Witr, sunnah and nafl; forgetting it there requires the prostration of forgetfulness. In the last two rakʿahs of a farḍ it is sunnah, and the follower stays silent behind the imam. The Prophet ﷺ called it the greatest sūrah in the Quran, the seven oft-repeated verses (Bukhari 4474)."),
      { type: "rec", label: "Sūrat al-Fātiḥah", r: { ...RECITATIONS.fatiha, ar: RECITATIONS.basmala.ar + " ۝ " + RECITATIONS.fatiha.ar }, src: "The greatest sūrah in the Quran (Bukhari 4474)" },
      P("In a ḥadīth qudsī, Allah says: “I have divided the prayer between Myself and My servant into two halves, and My servant shall have what he asks for.” Then He answers each verse (Muslim 395):"),
      Cmp("Allah answers you, verse by verse", "You say", "Allah says", [
        ["Al-ḥamdu lillāhi rabbi-l-ʿālamīn", "“My servant has praised Me.”"],
        ["Ar-raḥmāni-r-raḥīm", "“My servant has extolled Me.”"],
        ["Māliki yawmi-d-dīn", "“My servant has glorified Me.”"],
        ["Iyyāka naʿbudu wa iyyāka nastaʿīn", "“This is between Me and My servant, and My servant shall have what he asked for.”"],
        ["Ihdina-ṣ-ṣirāṭa-l-mustaqīm…", "“This is for My servant, and My servant shall have what he asked for.”"],
      ]),
      L("What the Fātiḥah teaches in seven verses", [
        "Praise and thanks belong to Allah, the Lord of all worlds.",
        "His mercy is vast: ar-Raḥmān and ar-Raḥīm.",
        "There is a Day of Judgment, and He alone is its Master.",
        "We worship Him alone and ask Him alone for help.",
        "The most important thing to ask for is guidance to the straight path.",
        "The path of those He blessed, not of those who earned anger or went astray.",
      ]),
      St("Praying with the Fātiḥah’s meaning", [
        "Pause slightly after each verse, as the Prophet ﷺ did, and remember Allah is answering you.",
        "At “iyyāka naʿbudu” think of what you are about to do in this prayer.",
        "At “ihdinā” really ask: for today’s decisions, for your family, for your heart.",
        "After it, in prayer, say “Āmīn” quietly (the Hanafi way).",
      ]),
      Rf(["Did I know Allah answers every verse of the Fātiḥah?", "What do I most need guidance in right now?"], ["Before the next prayer, read the meaning of each verse together, then pray it slowly."]),
      L("Key takeaways", [
        "The greatest sūrah; in the Hanafi school, wājib in the first two rakʿahs of a farḍ prayer.",
        "Allah answers each verse as you recite it (Muslim 395).",
        "Its heart is: You alone we worship, You alone we ask for help; guide us.",
      ]),
    ],
    quiz: [
      q("What did the Prophet ﷺ call Al-Fātiḥah?", ["The heart of the Quran", "The greatest sūrah", "The shortest sūrah", "The sūrah of light"], 1, "The seven oft-repeated verses, the greatest sūrah.", "Bukhari 4474"),
      q("In the Hanafi school, reciting Al-Fātiḥah in the first two rakʿahs of a farḍ prayer is…", ["Sunnah", "Mustaḥabb", "Wājib", "Not required"], 2, "Leaving it there by mistake requires sajdat al-sahw.", "Hanafi fiqh"),
      q("When you say “Al-ḥamdu lillāhi rabbi-l-ʿālamīn”, Allah says…", ["“My servant has asked”", "“My servant has praised Me”", "“My servant has forgotten”", "Nothing"], 1, "Ḥadīth qudsī about dividing the prayer.", "Muslim 395"),
      q("Which verse is “between Me and My servant”?", ["Māliki yawmi-d-dīn", "Iyyāka naʿbudu wa iyyāka nastaʿīn", "Ar-raḥmāni-r-raḥīm", "Ṣirāṭa-lladhīna anʿamta ʿalayhim"], 1, "Worship from us, help from Him.", "Muslim 395"),
      q("What is the main request in Al-Fātiḥah?", ["Wealth", "Guidance to the straight path", "Long life", "Victory"], 1, "“Ihdina-ṣ-ṣirāṭa-l-mustaqīm.”", "Quran 1:6"),
    ] },

  // ---------------------------------------------------------------- Reciting the Quran
  { id: "quran-adab", group: "Reciting the Quran", title: "The manners of the Quran", summary: "Wuḍūʾ, touching the muṣḥaf, seeking refuge, beautifying the voice, and listening in silence: the Hanafi rulings.", sources: ["Quran 56:79", "Quran 16:98", "Quran 7:204", "Abu Dawud 1468", "Bukhari 7527"],
    blocks: [
      P("The Quran is the speech of Allah, so how we hold it, recite it and listen to it shows what is in our hearts. These are the main manners, with the rulings of the Hanafi school."),
      Cmp("Hanafi rulings at a glance", "Situation", "Ruling", [
        ["Touching the muṣḥaf without wuḍūʾ", "Not allowed; wuḍūʾ is required (56:79). It may be held with a separate cover, like a cloth or case."],
        ["Reciting from memory without wuḍūʾ", "Allowed, though wuḍūʾ is better."],
        ["Reciting in a state of janābah or during menstruation", "Not allowed to recite as Quran. Allowed: listening, and saying Quranic duʿāʾs and dhikr with the intention of duʿāʾ."],
        ["Young children learning", "Many Hanafi scholars allow them to hold the muṣḥaf for learning; teach them wuḍūʾ as early as you can."],
        ["Phone or app screen", "The Arabic text on a screen is not a muṣḥaf in the same way; still, treat it with respect."],
      ]),
      St("Before you recite", [
        "Make wuḍūʾ, and sit in a clean place, facing the qiblah if you can.",
        "Seek refuge: “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm” (16:98).",
        "Say “Bismillāhi-r-raḥmāni-r-raḥīm” at the start of a sūrah.",
        "Recite slowly and clearly (tartīl, 73:4), with your heart present.",
      ]),
      L("While reciting and listening", [
        "Beautify your voice: “Beautify the Quran with your voices” (Abu Dawud 1468), and “He is not of us who does not recite the Quran in a beautiful voice” (Bukhari 7527).",
        "When the Quran is recited, listen and be silent, so that you may receive mercy (7:204).",
        "Do not place the muṣḥaf on the floor, or put other books on top of it.",
        "Don’t chat or laugh in the middle of recitation; pause first.",
        "At a verse of prostration, make sajdat al-tilāwah (see that lesson).",
      ]),
      Sc("quran-adab-phone", "Your little brother is reading the Quran from an app while lying on the sofa with music playing in the next room. What could you say kindly?", [
        { text: "“Turn it off, you’re being disrespectful!”", feedback: "Harshness rarely teaches. He is reading the Quran, which is good." },
        { text: "“Mā shāʾ Allāh! Shall we sit up together and turn the music off, so we can hear it properly?”", best: true, feedback: "Praise the good, then gently add the manners." },
        { text: "Say nothing.", feedback: "A kind word now teaches him respect for the Quran for life." },
      ]),
      Rf(["Do I treat the muṣḥaf differently from other books?", "How is my voice when I recite: rushed, or calm and beautiful?"], ["Choose a clean shelf at home that is only for the muṣḥaf."]),
      L("Key takeaways", [
        "Wuḍūʾ to touch the muṣḥaf; no recitation during janābah or menstruation (Hanafi).",
        "Seek refuge, recite slowly, beautify the voice.",
        "Listen in silence when it is recited.",
      ]),
    ],
    quiz: [
      q("In the Hanafi school, can a person without wuḍūʾ touch the muṣḥaf?", ["Yes, freely", "No, except with a separate cover", "Only on Fridays", "Only children"], 1, "“None touch it except the purified” (56:79).", "Hanafi fiqh"),
      q("Can someone without wuḍūʾ recite from memory?", ["No", "Yes", "Only Al-Fātiḥah", "Only in Ramadan"], 1, "Reciting from memory is allowed; wuḍūʾ is better.", "Hanafi fiqh"),
      q("What do we say before reciting?", ["Subḥānallāh", "Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm", "Allāhu akbar", "Āmīn"], 1, "“When you recite the Quran, seek refuge in Allah…”", "Quran 16:98"),
      q("What should we do when the Quran is being recited?", ["Keep talking quietly", "Listen and be silent", "Leave the room", "Recite something else"], 1, "“So that you may receive mercy.”", "Quran 7:204"),
      q("“Beautify the Quran with your…”", ["Books", "Voices", "Clothes", "Homes"], 1, "Abu Dawud 1468.", "Abu Dawud 1468"),
      q("During menstruation, in the Hanafi school, a woman may…", ["Recite the Quran normally", "Listen to the Quran and say Quranic duʿāʾs as duʿāʾ", "Not hear the Quran", "Only touch the muṣḥaf"], 1, "Recitation as Quran is not allowed; listening, dhikr and duʿāʾ are.", "Hanafi fiqh"),
    ] },

  { id: "quran-reward", group: "Reciting the Quran", title: "The reward of reciting", summary: "Ten rewards for every letter, double for the one who struggles, and a friend who intercedes.", sources: ["Tirmidhi 2910", "Muslim 798", "Bukhari 5027", "Muslim 804", "Tirmidhi 2914", "Bukhari 5020"],
    blocks: [
      P("Few deeds are as easy and as richly rewarded as reciting the Quran. Even a single line counts, and even struggling counts."),
      Rw("Ten rewards for every letter", "1 letter = 10 good deeds", "“Alif Lām Mīm” is not one letter: alif is a letter, lām is a letter and mīm is a letter. So just those three are thirty good deeds. One page of the muṣḥaf has around 400 to 600 letters: thousands of good deeds in a few minutes.", "Tirmidhi 2910"),
      Rw("Double for the one who struggles", "2 rewards", "The one who is skilled at the Quran is with the noble, righteous angels. The one who recites it with difficulty, stumbling, gets two rewards: one for reciting and one for the struggle. Beginners, keep going!", "Muslim 798"),
      Rw("Read and rise", "One level for every āyah", "On the Day of Judgment it will be said to the companion of the Quran: “Read, and rise, and recite as you used to recite in the world, for your place is at the last āyah you recite.”", "Tirmidhi 2914"),
      Qt("Recite the Quran, for on the Day of Resurrection it will come as an intercessor for its companions.", "Muslim 804"),
      Qt("The best of you are those who learn the Quran and teach it.", "Bukhari 5027"),
      Cmp("The Prophet’s ﷺ picture of four people", "Person", "Like…", [
        ["A believer who recites the Quran", "A citron: lovely smell and lovely taste"],
        ["A believer who does not recite it", "A date: lovely taste, but no smell"],
        ["A hypocrite who recites it", "Basil: lovely smell, bitter taste"],
        ["A hypocrite who does not recite it", "Colocynth: no smell, bitter taste"],
      ]),
      P("That picture is from Bukhari 5020. The Prophet ﷺ also said that Allah raises some nations by this Book and lowers others by it (Muslim 817)."),
      St("A realistic plan", [
        "Start with 5 minutes after Fajr or before sleep, every day.",
        "Never mind how much; consistency matters more than amount.",
        "Use the Hifz section to listen, then recite after the reciter.",
        "In Ramadan, aim for one juzʾ a day to complete the Quran.",
      ]),
      Rf(["How many good deeds could I earn with one page a day for a year?"], ["Each family member recites one page after Maghrib; count letters together for fun."]),
      L("Key takeaways", [
        "Every letter is ten good deeds.",
        "Struggling learners get double reward.",
        "The Quran intercedes for those who kept it company.",
      ]),
    ],
    quiz: [
      q("How many rewards for each letter of the Quran?", ["1", "5", "10", "100"], 2, "“Alif is a letter, lām is a letter, mīm is a letter.”", "Tirmidhi 2910"),
      q("The one who recites with difficulty gets…", ["No reward", "Half a reward", "Two rewards", "Punishment"], 2, "One for reciting and one for the effort.", "Muslim 798"),
      q("Who are the best people, according to the Prophet ﷺ?", ["The richest", "Those who learn the Quran and teach it", "The strongest", "The oldest"], 1, "Bukhari 5027.", "Bukhari 5027"),
      q("The believer who recites the Quran is like…", ["A date", "A citron", "Basil", "Colocynth"], 1, "Lovely smell and lovely taste.", "Bukhari 5020"),
      q("What will the Quran do on the Day of Resurrection for its companions?", ["Testify against them", "Intercede for them", "Be silent", "Disappear"], 1, "Muslim 804.", "Muslim 804"),
      q("“Read and rise”: your level in Paradise is at…", ["The first āyah you learned", "The last āyah you recite", "Al-Fātiḥah", "The middle of the Quran"], 1, "Tirmidhi 2914.", "Tirmidhi 2914"),
    ] },

  { id: "tajwid", group: "Reciting the Quran", title: "Tajwīd: reciting it beautifully", summary: "Why tajwīd matters, the throat to the lips, nūn sākinah rules, qalqalah, madd and the stopping signs.", sources: ["Quran 73:4", "Bukhari 5046"],
    blocks: [
      P("Tajwīd means “making excellent”: giving every letter its right, from where it comes out of the mouth and how it sounds. Allah says: “And recite the Quran with tartīl” (73:4), slowly and clearly. Learning tajwīd from a qualified teacher is the surest way, because the Quran was passed on by listening."),
      L("Where letters come from (makhārij)", [
        "The empty space of the mouth and throat: the long vowels ā, ī, ū.",
        "The throat: ء ه (deepest), ع ح (middle), غ خ (top).",
        "The tongue: most letters, from ق and ك at the back to ت د ط at the front.",
        "The lips: ف ب م و.",
        "The nose: ghunnah, the humming sound in ن and م.",
      ]),
      Cmp("Nūn sākinah and tanwīn: four rules", "Rule", "When, and how", [
        ["Iẓhār (clear)", "Before the throat letters ء ه ع ح غ خ: say the nūn clearly. Example: مِنْ هَادٍ"],
        ["Idghām (merging)", "Before ي ر م ل و ن (“yarmalūn”): merge into the next letter; with ghunnah before ي ن م و, without before ل ر."],
        ["Iqlāb (changing)", "Before ب: the nūn becomes a soft mīm with ghunnah. Example: مِنْ بَعْدِ"],
        ["Ikhfāʾ (hiding)", "Before the remaining 15 letters: a light, hidden nūn with ghunnah. Example: مِنْ كُلِّ"],
      ]),
      L("Three more rules to start with", [
        "Qalqalah (echo): the letters ق ط ب ج د (“quṭbu jad”) bounce when they have a sukūn, as in the end of al-falaq, aḥad, kasab.",
        "Ghunnah on a doubled nūn or mīm (نّ مّ): hum for two counts, as in inna, thumma.",
        "Madd ṭabīʿī (natural lengthening): a long vowel is held for two counts, as in qāla, qīla, yaqūlu.",
      ]),
      Cmp("Stopping signs in the muṣḥaf", "Sign", "Meaning", [
        ["م", "Stop here; joining could change the meaning."],
        ["لا", "Do not stop here."],
        ["ج", "You may stop or continue."],
        ["قلى", "Stopping is better."],
        ["صلى", "Continuing is better."],
        ["∴ ∴", "Stop at one of the two places, not both."],
      ]),
      St("How to practise", [
        "Listen to one āyah from a trusted reciter (the Hifz section uses Mishary Alafasy).",
        "Repeat it, copying the lengths and the humming.",
        "Record yourself and compare.",
        "Find a teacher at your masjid to check you; tajwīd is learned by ear.",
      ]),
      Rf(["Which rule do I already do without knowing its name?"], ["Find three examples of qalqalah in Sūrat al-Falaq and Al-Ikhlāṣ together."]),
      L("Key takeaways", [
        "Tajwīd gives every letter its right; learn it by listening.",
        "Nūn sākinah has four rules: iẓhār, idghām, iqlāb, ikhfāʾ.",
        "Qalqalah letters: ق ط ب ج د. Natural madd: two counts.",
      ]),
    ],
    quiz: [
      q("What does “tajwīd” mean?", ["Translation", "Making excellent", "Memorising", "Explaining"], 1, "Giving each letter its right.", "ʿIlm al-tajwīd"),
      q("Which are the qalqalah letters?", ["ق ط ب ج د", "ء ه ع ح غ خ", "ي ر م ل و ن", "ف ب م و"], 0, "Remember “quṭbu jad”.", "ʿIlm al-tajwīd"),
      q("A nūn sākinah before ب becomes…", ["Silent", "A soft mīm with ghunnah (iqlāb)", "A clear nūn", "A lām"], 1, "Example: min baʿdi.", "ʿIlm al-tajwīd"),
      q("A nūn sākinah before a throat letter is…", ["Merged", "Hidden", "Said clearly (iẓhār)", "Changed to mīm"], 2, "Throat letters: ء ه ع ح غ خ.", "ʿIlm al-tajwīd"),
      q("How long is the natural madd?", ["1 count", "2 counts", "4 counts", "6 counts"], 1, "Madd ṭabīʿī is two counts.", "ʿIlm al-tajwīd"),
      q("The sign لا in the muṣḥaf means…", ["You must stop", "Do not stop", "Stopping is better", "Prostrate here"], 1, "Continue reading.", "Muṣḥaf conventions"),
      q("Which verse commands reciting with tartīl?", ["2:255", "73:4", "1:1", "112:1"], 1, "“And recite the Quran with tartīl.”", "Quran 73:4"),
    ] },

  { id: "sajdah-tilawah", group: "Reciting the Quran", title: "The prostration of recitation", summary: "The 14 verses of sajdah in the Hanafi school, why it is wājib, and how to do it.", sources: ["Muslim 81", "Bukhari 1067", "Hanafi fiqh"],
    blocks: [
      P("In fourteen places the Quran describes creation bowing to Allah, or commands prostration. When we recite or hear one of these verses, we prostrate. In the Hanafi school, this sajdat al-tilāwah is wājib on both the one who recites and the one who hears it."),
      Qt("When the son of Ādam recites a verse of prostration and prostrates, Shayṭān withdraws weeping, saying: “Woe to me! The son of Ādam was commanded to prostrate, and he prostrated, so Paradise is his. I was commanded to prostrate, and I refused, so the Fire is mine.”", "Muslim 81"),
      L("The 14 verses of sajdah (Hanafi)", [
        "Al-Aʿrāf 7:206 · Ar-Raʿd 13:15 · An-Naḥl 16:50 · Al-Isrāʾ 17:109",
        "Maryam 19:58 · Al-Ḥajj 22:18 · Al-Furqān 25:60 · An-Naml 27:26",
        "As-Sajdah 32:15 · Ṣād 38:24 · Fuṣṣilat 41:38 · An-Najm 53:62",
        "Al-Inshiqāq 84:21 · Al-ʿAlaq 96:19",
        "In the muṣḥaf these are marked with a small arch (۩). The second place in Al-Ḥajj (22:77) is not a sajdah in the Hanafi school.",
      ]),
      St("How to do it, outside prayer", [
        "Be in wuḍūʾ, facing the qiblah, properly covered, as for prayer.",
        "Say “Allāhu akbar” and go down into one sujūd (without raising the hands).",
        "Say “Subḥāna rabbiya-l-aʿlā” three times.",
        "Say “Allāhu akbar” and rise. No tashahhud and no salām.",
      ]),
      L("Good to know", [
        "Inside prayer: prostrate straight away, then stand and continue reciting.",
        "If the same verse is repeated in one sitting, one sajdah is enough.",
        "If you can’t do it right away (no wuḍūʾ), do it later; it does not lapse.",
        "Hearing it from a live reciter, or a live broadcast (radio, TV, masjid speaker), makes it wājib. A recording does not, since it is not a live recitation; to do it from a recording, recite the verse yourself and prostrate.",
      ]),
      Rf(["Did I know Shayṭān weeps when I make this prostration?"], ["Find the ۩ sign in your muṣḥaf at Al-ʿAlaq 96:19 and practise the sajdah together."]),
      L("Key takeaways", [
        "Fourteen places; wājib in the Hanafi school for reciter and listener.",
        "One sujūd with takbīr going down and coming up.",
        "Same conditions as prayer: wuḍūʾ, qiblah, covering.",
      ]),
    ],
    quiz: [
      q("In the Hanafi school, sajdat al-tilāwah is…", ["Sunnah", "Wājib", "Makrūh", "Optional only in Ramadan"], 1, "On the reciter and the listener.", "Hanafi fiqh"),
      q("How many verses of sajdah are there in the Hanafi school?", ["4", "11", "14", "15"], 2, "Fourteen places.", "Hanafi fiqh"),
      q("What happens to Shayṭān when a person makes this sajdah?", ["He laughs", "He withdraws weeping", "He prostrates too", "Nothing"], 1, "Muslim 81.", "Muslim 81"),
      q("How many prostrations does sajdat al-tilāwah have?", ["One", "Two", "Three", "Four"], 0, "One sujūd between two takbīrs.", "Hanafi fiqh"),
      q("Does it end with tashahhud and salām?", ["Yes, both", "Only salām", "No, neither", "Only tashahhud"], 2, "Takbīr down, takbīr up.", "Hanafi fiqh"),
      q("Which is the last verse of sajdah in the muṣḥaf?", ["An-Najm 53:62", "Al-ʿAlaq 96:19", "Al-Inshiqāq 84:21", "Ṣād 38:24"], 1, "“Prostrate and draw near.”", "Quran 96:19"),
    ] },

  // ---------------------------------------------------------------- Living with the Quran
  { id: "asbab", group: "Living with the Quran", title: "Stories behind the sūrahs", summary: "Why Al-Masad, ʿAbasa, Aḍ-Ḍuḥā, Al-Kawthar and Al-Fīl were revealed.", sources: ["Bukhari 4971", "Tirmidhi 3331", "Bukhari 4950", "Ibn Kathīr, Tafsīr"],
    blocks: [
      P("Many verses came down because of something that happened. Knowing the story, called sabab al-nuzūl, brings the sūrah to life when you recite it in prayer."),
      Story("masad", "Bukhari 4971", "Al-Masad: a warning from Mount Ṣafā", "Makkah, the first public call.", [
        "When Allah commanded the Prophet ﷺ to warn his family, he climbed Mount Ṣafā and called out to the clans of Quraysh. They gathered.",
        "“If I told you an army was behind this hill, about to attack you, would you believe me?” “Yes! We have never known you to lie.” “Then I am a warner to you of a severe punishment.”",
        "His own uncle, Abū Lahab, shouted: “May you perish! Is this what you gathered us for?”",
        "So Allah revealed: “Perish the hands of Abū Lahab, and perish he…” A man was named in the Quran, and he lived years after it, never believing, exactly as the sūrah said.",
      ], "The Prophet ﷺ was known as truthful by everyone, even his enemies. And Allah defends His Messenger.", "Bukhari 4971"),
      Story("abasa", "Tirmidhi 3331", "ʿAbasa: the blind man who came to learn", "The Prophet ﷺ speaking with leaders of Quraysh.", [
        "The Prophet ﷺ was hoping some of the chiefs of Quraysh would accept Islam, and was speaking with them earnestly.",
        "A blind companion, ʿAbdullāh ibn Umm Maktūm, came and kept saying: “Teach me, Messenger of Allah!” The Prophet ﷺ frowned and turned back to the chiefs.",
        "Allah revealed: “He frowned and turned away, because the blind man came to him…” teaching that the sincere seeker matters more than the powerful.",
        "Afterwards the Prophet ﷺ honoured Ibn Umm Maktūm greatly, and even left him in charge of Madinah when he travelled. He was also one of the callers of the adhān.",
      ], "Never look down on someone who comes sincerely to learn, whoever they are.", "Tirmidhi 3331; Quran 80:1–10"),
      Story("duha", "Bukhari 4950", "Aḍ-Ḍuḥā: “Your Lord has not left you”", "A pause in revelation.", [
        "For some days the revelation stopped. The Prophet ﷺ was unwell and did not stand for the night prayer.",
        "A woman of Quraysh mocked him: “Your companion has abandoned you!”",
        "Then Allah revealed: “By the morning light, and by the night when it grows still: your Lord has not left you, nor is He displeased… and your Lord will give you, and you will be pleased.”",
      ], "When it feels like a quiet, dark time, remember: the morning light always comes back.", "Bukhari 4950"),
      L("Two more", [
        "Al-Kawthar: when the Prophet’s ﷺ sons died in childhood, an enemy called him “cut off”. Allah gave him al-Kawthar, a river in Paradise, and said it is his enemy who is cut off (Ibn Kathīr, reported).",
        "Al-Fīl: in the year of his birth, Abrahah marched on Makkah with elephants to destroy the Kaʿbah, and Allah sent flocks of birds with stones of baked clay (Sīrah).",
      ]),
      Rf(["Which of these stories will I think about the next time I recite that sūrah in prayer?"], ["Each person retells one story in their own words at dinner."]),
      L("Key takeaways", [
        "Knowing why a sūrah came down brings it to life.",
        "Al-Masad: Abū Lahab at Mount Ṣafā. ʿAbasa: the blind seeker. Aḍ-Ḍuḥā: comfort after a pause.",
      ]),
    ],
    quiz: [
      q("Where did the Prophet ﷺ make his first public call to his clan?", ["Mount Uḥud", "Mount Ṣafā", "The cave of Thawr", "Ṭāʾif"], 1, "Bukhari 4971.", "Bukhari 4971"),
      q("Who is named in Sūrat al-Masad?", ["Abū Jahl", "Abū Lahab", "Abū Sufyān", "Umayyah"], 1, "His uncle who rejected him.", "Quran 111"),
      q("Who was the blind man in Sūrat ʿAbasa?", ["Bilāl", "ʿAbdullāh ibn Umm Maktūm", "Zayd ibn Ḥārithah", "Abū Dharr"], 1, "He came sincerely to learn.", "Tirmidhi 3331"),
      q("Aḍ-Ḍuḥā was revealed after…", ["A battle", "A pause in revelation", "A journey", "An eclipse"], 1, "“Your Lord has not left you.”", "Bukhari 4950"),
      q("Sūrat al-Fīl tells of…", ["Mūsā and Firʿawn", "Abrahah’s army and the birds", "The flood of Nūḥ", "The people of Thamūd"], 1, "The Year of the Elephant.", "Quran 105"),
    ] },

  { id: "memorise", group: "Living with the Quran", title: "How to memorise the Quran", summary: "A simple method that works for children and adults, and how to keep what you learn.", sources: ["Bukhari 5033", "Quran 54:17"],
    blocks: [
      Qt("And We have certainly made the Quran easy to remember, so is there anyone who will remember?", "Quran 54:17", "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"),
      P("Allah made the Quran easy to memorise. Children in every Muslim land have memorised it whole. The secret is not a special talent, but a little every day, with plenty of review."),
      St("The daily method", [
        "Choose a small portion: one āyah, or even half an āyah for long ones.",
        "Listen to it from a good reciter three to five times (use the Hifz section’s repeat button).",
        "Read it from the muṣḥaf, looking, five times.",
        "Close your eyes and recite it five times without looking. Check, fix mistakes.",
        "Join it to the previous āyah and recite both together.",
        "Recite your new portion in your next prayers.",
      ]),
      L("Keeping it: the review rule", [
        "The Prophet ﷺ said: “Keep refreshing your knowledge of the Quran, for by the One in whose hand is my soul, it escapes faster than camels escape from their tying ropes” (Bukhari 5033).",
        "Old before new: each day, review what you memorised before you add anything new.",
        "Spread your review: the Hifz section brings each sūrah back after 1, 3, 7, 16 days and more.",
        "Recite memorised sūrahs in your sunnah and nafl prayers; prayer is the best review.",
      ]),
      Cmp("Helpful and unhelpful habits", "Helps", "Hurts", [
        ["Same time every day, e.g. after Fajr", "Big amounts once a week"],
        ["Same printed muṣḥaf, so the page is “photographed” in your mind", "Changing apps and layouts often"],
        ["Understanding the meaning first", "Memorising sounds only"],
        ["Reciting to someone who checks you", "Never testing yourself"],
        ["Avoiding sins; knowledge is a light", "Staying up late, then rushing"],
      ]),
      Rf(["What is one small portion I could start tomorrow?"], ["Pick a family hifz goal for this month, and review together every Friday."]),
      L("Key takeaways", [
        "Small portion, many repetitions, every day.",
        "Review before new; recite it in prayer.",
        "It escapes quickly, so keep it company.",
      ]),
    ],
    quiz: [
      q("What did the Prophet ﷺ compare the Quran escaping from memory to?", ["Birds", "Camels escaping their ropes", "Water", "The wind"], 1, "Bukhari 5033.", "Bukhari 5033"),
      q("Which verse says the Quran is made easy to remember?", ["54:17", "2:255", "112:1", "96:1"], 0, "“Is there anyone who will remember?”", "Quran 54:17"),
      q("What should you do before memorising something new each day?", ["Nothing", "Review what you already know", "Watch a video", "Sleep"], 1, "Old before new.", "Hifz practice"),
      q("What is the best place to review your memorisation?", ["In conversation", "In your prayers", "On social media", "Only in exams"], 1, "Recite memorised sūrahs in sunnah and nafl prayers.", "Hifz practice"),
      q("Which habit helps memorisation?", ["Changing muṣḥaf layouts often", "Memorising a little at the same time every day", "Cramming once a week", "Never testing yourself"], 1, "Consistency wins.", "Hifz practice"),
    ] },

  { id: "tadabbur", group: "Living with the Quran", title: "Reflecting on the Quran", summary: "Reading for meaning, as the Prophet ﷺ and the companions did, and a simple way to start.", sources: ["Quran 38:29", "Quran 47:24", "Muslim 772"],
    blocks: [
      Qt("A blessed Book which We have sent down to you, so that they may reflect upon its verses, and that people of understanding may take heed.", "Quran 38:29"),
      P("Tadabbur means reflecting: thinking deeply about what Allah is saying to you. Allah asks: “Do they not reflect upon the Quran, or are there locks upon their hearts?” (47:24)."),
      Story("hudhayfah-night", "Muslim 772", "A night prayer with the Prophet ﷺ", "Madinah, late at night.", [
        "The companion Ḥudhayfah prayed one night behind the Prophet ﷺ. He began Al-Baqarah, then An-Nisāʾ, then Āl ʿImrān, reciting slowly.",
        "Whenever he passed a verse of glorification, he glorified Allah. When he passed a verse of mercy, he stopped and asked for it. When he passed a verse of punishment, he stopped and sought refuge.",
      ], "Reciting was a conversation for him: he responded to what he read.", "Muslim 772"),
      P("It is reported that the companions would learn ten verses, and not move on until they understood them and acted on them (reported from Ibn Masʿūd)."),
      St("A simple way to start", [
        "Choose a short passage you already know, e.g. Al-ʿAṣr or the end of Al-Baqarah.",
        "Read a trusted translation slowly, verse by verse.",
        "Ask three questions: What does Allah tell me here? What does He ask of me? What does it make me feel?",
        "Pick one action to live by today.",
        "Next time you recite it in prayer, remember your answers.",
      ]),
      Sc("tadabbur-asr", "You read Al-ʿAṣr: humanity is in loss except those who believe, do good, and urge each other to truth and patience. What is the best “one action” to take from it today?", [
        { text: "Memorise it faster.", feedback: "Memorising is good, but reflection is about living it." },
        { text: "Encourage a friend or sibling with something true, kindly, and be patient with them.", best: true, feedback: "That is exactly what the sūrah asks: urging one another to truth and to patience." },
        { text: "Nothing; it’s about other people.", feedback: "Every verse speaks to me first." },
      ]),
      Rf(["Which verse has touched my heart most, and why?"], ["After dinner, read one short sūrah with its meaning and share one lesson each."]),
      L("Key takeaways", [
        "The Quran was sent down to be reflected on.",
        "Respond as you recite: glorify, ask, seek refuge.",
        "Learn a little, understand it, live it.",
      ]),
    ],
    quiz: [
      q("What does “tadabbur” mean?", ["Speed reading", "Reflecting deeply", "Writing", "Translating"], 1, "Thinking about what Allah is saying.", "Quran 38:29"),
      q("“Do they not reflect upon the Quran, or are there ___ upon their hearts?”", ["Clouds", "Locks", "Stones", "Veils"], 1, "Quran 47:24.", "Quran 47:24"),
      q("What did the Prophet ﷺ do when he passed a verse of mercy in night prayer?", ["Continued quickly", "Stopped and asked for it", "Prostrated", "Stopped praying"], 1, "Muslim 772.", "Muslim 772"),
      q("The companions reportedly learned how many verses at a time before moving on?", ["One", "Ten", "One hundred", "A whole sūrah"], 1, "Reported from Ibn Masʿūd.", "al-Ṭabarī, Tafsīr (reported)"),
      q("A good first question when reflecting is…", ["How long is this sūrah?", "What does Allah ask of me here?", "Who recited it best?", "When was it printed?"], 1, "Then pick one action.", "Tadabbur practice"),
    ] },
];

// Extra explanation and quizzes added to the existing Āyat al-Kursī and short-sūrah lessons.
export const QURAN_EXTRA: Record<string, { blocks: Block[]; quiz: Question[] }> = {
  kursi: {
    blocks: [
      Story("ubayy-kursi", "Muslim 810", "“Congratulations on your knowledge!”", "Madinah, the Prophet ﷺ teaching a companion.", [
        "The Prophet ﷺ asked Ubayy ibn Kaʿb: “Abu al-Mundhir, which verse in the Book of Allah that you have is the greatest?” Ubayy said: “Allah and His Messenger know best.”",
        "He asked again. Ubayy said: “Allāhu lā ilāha illā huwa-l-ḥayyu-l-qayyūm.”",
        "The Prophet ﷺ struck him lightly on the chest and said: “May knowledge be pleasing to you, Abu al-Mundhir!”",
      ], "Āyat al-Kursī is the greatest verse because it is entirely about Allah: who He is and what He is like.", "Muslim 810"),
      L("Ten things Āyat al-Kursī tells us about Allah", [
        "He alone is God; none deserves worship but Him.",
        "Al-Ḥayy: the Ever-Living, whose life has no beginning or end.",
        "Al-Qayyūm: He sustains everything, and needs nothing.",
        "He never gets drowsy or sleeps.",
        "Everything in the heavens and the earth belongs to Him.",
        "No one intercedes with Him except by His permission.",
        "He knows what is before people and behind them.",
        "We know only what He allows us to know.",
        "His Kursī is wider than the heavens and the earth.",
        "Guarding them does not tire Him; He is the Most High, the Magnificent.",
      ]),
      Rw("A guardian through the night", "From sleep until morning", "Recite it when you lie down to sleep, and a guardian from Allah stays with you and no devil comes near you until morning (the story of Abū Hurayrah and the thief).", "Bukhari 2311"),
      L("When to recite it", [
        "After every obligatory prayer.",
        "Before sleep.",
        "In the morning and evening remembrance.",
      ]),
      L("Key takeaways", [
        "The greatest verse in the Quran (Muslim 810).",
        "It describes Allah’s life, care, knowledge and greatness.",
        "Recite it after prayers and before sleep.",
      ]),
    ],
    quiz: [
      q("Which companion said Āyat al-Kursī is the greatest verse?", ["Abū Bakr", "Ubayy ibn Kaʿb", "Bilāl", "Muʿādh"], 1, "The Prophet ﷺ congratulated him.", "Muslim 810"),
      q("What does “al-Qayyūm” mean?", ["The Most Merciful", "The One who sustains everything", "The King", "The Forgiving"], 1, "He sustains all and needs nothing.", "Quran 2:255"),
      q("What happens if you recite Āyat al-Kursī before sleep?", ["Nothing", "A guardian from Allah stays with you", "You must wake for Fajr", "You dream of Paradise"], 1, "Bukhari 2311.", "Bukhari 2311"),
      q("Which verse number is Āyat al-Kursī?", ["2:1", "2:255", "2:286", "3:18"], 1, "Al-Baqarah 255.", "Quran 2:255"),
      q("“Neither ___ nor sleep overtakes Him.”", ["Hunger", "Drowsiness", "Anger", "Thirst"], 1, "Lā taʾkhudhuhū sinatun wa lā nawm.", "Quran 2:255"),
    ],
  },
  "short-surahs": {
    blocks: [
      L("Why these five?", [
        "Al-ʿAṣr: Imam al-Shāfiʿī said that if people reflected on this sūrah alone, it would be enough for them (reported).",
        "Al-Kawthar: the shortest sūrah, a gift of a river in Paradise to the Prophet ﷺ.",
        "Al-Ikhlāṣ: equal to a third of the Quran (Bukhari 5013), because it describes Allah’s oneness.",
        "Al-Falaq and An-Nās: “al-muʿawwidhatayn”, the two sūrahs of protection; nothing compares to them for seeking refuge (Nasāʾī 5438).",
      ]),
      Story("ikhlas-love", "Bukhari 7375", "The imam who loved Al-Ikhlāṣ", "A companion leading prayer.", [
        "The Prophet ﷺ sent a man in charge of an expedition. Whenever he led the prayer, he ended his recitation with “Qul huwa-llāhu aḥad”.",
        "When they returned, they mentioned it. The Prophet ﷺ said: “Ask him why he does that.”",
        "He said: “Because it is the description of the Most Merciful, and I love to recite it.”",
        "The Prophet ﷺ said: “Tell him that Allah loves him.”",
      ], "Loving a sūrah because it speaks about Allah brings Allah’s love.", "Bukhari 7375"),
      St("Using them every day", [
        "In prayer: after Al-Fātiḥah, recite one of them in the first two rakʿahs.",
        "Before sleep: blow into your cupped hands, recite Al-Ikhlāṣ, Al-Falaq and An-Nās, and wipe over your body, three times (Bukhari 5017).",
        "Morning and evening: recite the last three sūrahs three times each (Abu Dawud 5082).",
      ]),
      L("Key takeaways", [
        "Short sūrahs carry huge meanings.",
        "Al-Ikhlāṣ is a third of the Quran; Al-Falaq and An-Nās protect.",
        "Use them in prayer, before sleep, morning and evening.",
      ]),
    ],
    quiz: [
      q("Which sūrah equals one third of the Quran?", ["Al-ʿAṣr", "Al-Ikhlāṣ", "Al-Kawthar", "An-Nās"], 1, "Bukhari 5013.", "Bukhari 5013"),
      q("What are Al-Falaq and An-Nās called together?", ["Al-Mathānī", "Al-Muʿawwidhatayn", "Al-Ḥawāmīm", "Al-Musabbiḥāt"], 1, "The two sūrahs of seeking refuge.", "Muslim 814"),
      q("Why did the companion always end with Al-Ikhlāṣ?", ["It is short", "It describes the Most Merciful and he loved it", "He knew nothing else", "To finish quickly"], 1, "“Tell him that Allah loves him.”", "Bukhari 7375"),
      q("Which is the shortest sūrah?", ["Al-ʿAṣr", "Al-Kawthar", "An-Naṣr", "Al-Ikhlāṣ"], 1, "Three short verses.", "Quran 108"),
      q("Before sleep, the Prophet ﷺ would recite the last three sūrahs and…", ["Sleep at once", "Wipe his hands over his body, three times", "Pray two rakʿahs", "Give charity"], 1, "Bukhari 5017.", "Bukhari 5017"),
    ],
  },
};
