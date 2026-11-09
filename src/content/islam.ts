import type { Block, Lesson } from "./library";
import type { Question } from "./topics";
import { L, P } from "./ruhiy";

// Islam world: the five pillars as full explainers (Hanafi rulings where
// relevant), each with its own quiz. A scholar should review before release.

const Qt = (en: string, src: string, ar?: string, tr?: string, note?: string): Block => ({ type: "quote", en, src, ar, tr, note });
const Cmp = (title: string, left: string, right: string, rows: [string, string][]): Block => ({ type: "compare", title, left, right, rows });
const St = (title: string, items: string[]): Block => ({ type: "steps", title, items });
const Sc = (id: string, situation: string, options: { text: string; best?: boolean; feedback: string }[]): Block => ({ type: "scenario", id, situation, options });
const Rf = (think: string[], home?: string[]): Block => ({ type: "reflect", think, home });
const Rw = (title: string, measure: string, picture: string, src: string): Block => ({ type: "reward", title, measure, picture, src });
const q = (q: string, options: string[], answer: number, why: string, src: string): Question => ({ q, options, answer, why, src });

export const ISLAM_LESSONS: Lesson[] = [
  { id: "five-pillars", title: "Islam and its five pillars", summary: "What “Islam” means, and the five pillars the whole building stands on.", sources: ["Bukhari 8", "Muslim 16", "Muslim 8", "Quran 3:19", "Quran 5:3"],
    blocks: [
      P("Islām means submission: surrendering yourself to Allah willingly, with love and trust. It shares its root with salām, peace, because peace comes from that submission. Allah says: “The religion with Allah is Islam” (3:19), and He completed it and was pleased with it as our religion (5:3)."),
      Qt("Islam is built upon five: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving zakāt, Ḥajj to the House, and fasting Ramadan.", "Bukhari 8, Muslim 16"),
      P("The Prophet ﷺ described Islam as a building. The five pillars are its columns: remove one, and the building weakens; remove the first, and nothing stands. The rest of Islam, its character, dealings and family life, is built on top of them."),
      Cmp("The five pillars at a glance", "Pillar", "Who and how often", [
        ["Shahādah", "Every Muslim; said with conviction, lived every day"],
        ["Ṣalāh", "Every adult, sane Muslim; five times a day"],
        ["Zakāt", "Those whose wealth reaches the niṣāb for a lunar year; 2.5% yearly"],
        ["Ṣawm (fasting)", "Every adult, sane, healthy, resident Muslim; the month of Ramadan"],
        ["Ḥajj", "Those physically and financially able; once in a lifetime"],
      ]),
      L("Why these five?", [
        "They cover every part of a person: the heart and tongue (shahādah), the body (prayer), wealth (zakāt), desires (fasting), and a journey of body, wealth and heart together (Ḥajj).",
        "They span every time scale: daily prayer, yearly fasting and zakāt, and Ḥajj once in a lifetime.",
        "They join the individual to the ummah: congregations, giving to the poor, fasting together, and millions gathering at ʿArafah.",
      ]),
      Sc("pillars-busy", "A colleague says: “I’m a good person; I don’t really need to pray or fast.” How do you respond?", [
        { text: "“You’re right, being nice is enough.”", feedback: "Good character is vital, but the Prophet ﷺ called these five the very foundation of Islam." },
        { text: "“Good character is part of Islam, and the pillars are what it’s built on. Would you like to start with one prayer a day together?”", best: true, feedback: "Affirm the good, explain gently, and offer a practical first step." },
        { text: "“Then you’re not a Muslim.”", feedback: "Harsh labels close hearts; invite with wisdom." },
      ]),
      Rf(["Which pillar is strongest in my life, and which is weakest?", "Do I live the pillars as a building, or as separate chores?"], ["Draw a house with five columns; let each child write a pillar on each.", "Ask: if one pillar fell, what would happen to the house?"]),
      L("Key takeaways", [
        "Islam means submission to Allah, which brings peace.",
        "It is built on five pillars, in the ḥadīth of Ibn ʿUmar.",
        "They train the heart, body, wealth and desires together.",
      ]),
    ],
    quiz: [
      q("What does “Islām” mean?", ["Strength", "Submission to Allah", "Knowledge", "Wealth"], 1, "Willing surrender to Allah, bringing peace.", "Arabic lexicon"),
      q("How many pillars is Islam built on?", ["Three", "Five", "Six", "Seven"], 1, "Bukhari 8.", "Bukhari 8"),
      q("Which is the first pillar?", ["Prayer", "Shahādah", "Zakāt", "Ḥajj"], 1, "The testimony of faith.", "Bukhari 8"),
      q("Ḥajj is required…", ["Every year", "Once in a lifetime for those able", "Every Ramadan", "Never"], 1, "Quran 3:97.", "Quran 3:97"),
      q("Which pillar trains the body daily?", ["Ḥajj", "Ṣalāh", "Zakāt", "Fasting"], 1, "Five times a day.", "Bukhari 8"),
      q("The Prophet ﷺ described Islam as…", ["A tree", "A building on five pillars", "A river", "A journey"], 1, "“Islam is built upon five.”", "Bukhari 8"),
    ] },

  { id: "shahadah", title: "The Shahādah", summary: "Its meaning, its conditions, and how it shapes a whole life.", sources: ["Bukhari 8", "Muslim 16", "Tirmidhi 2639", "Bukhari 128", "Abu Dawud 3116", "Quran 47:19", "Quran 3:31"],
    blocks: [
      P("The shahādah is the testimony: “Ashhadu an lā ilāha illa-llāh, wa ashhadu anna Muḥammadan rasūlu-llāh”: I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah. Said sincerely, it brings a person into Islam. Lived fully, it carries them to Paradise."),
      Qt("I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.", "Bukhari 8", "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", "Ashhadu an lā ilāha illa-llāh, wa ashhadu anna Muḥammadan rasūlu-llāh."),
      Cmp("Its two halves", "Lā ilāha illa-llāh", "Muḥammadun rasūlu-llāh", [
        ["Negation and affirmation: no god deserves worship, except Allah", "Muhammad ﷺ is the messenger who shows how to worship Allah"],
        ["Tells us whom we worship", "Tells us how we worship"],
        ["Frees the heart from bowing to anything else", "Means obeying him, believing him, loving him and following his Sunnah (3:31)"],
      ]),
      L("The conditions scholars draw from the Quran and Sunnah", [
        "Knowledge: knowing what it means (47:19).",
        "Certainty: no doubt.",
        "Acceptance: accepting all it requires, without pride.",
        "Submission: acting on it.",
        "Truthfulness: meaning it in the heart, unlike the hypocrites.",
        "Sincerity: saying it for Allah alone.",
        "Love: loving it, its people and what it calls to.",
      ]),
      { type: "story", id: "card", kind: "From the life of the Prophet ﷺ", title: "The card that outweighed ninety-nine scrolls",
        scene: "The Prophet ﷺ described a man from his ummah on the Day of Judgment, before all creation.",
        story: [
          "Ninety-nine scrolls of his sins are spread out before him, each one stretching as far as the eye can see. Allah asks: “Do you deny any of this? Have My recording angels wronged you?” He says: “No, my Lord.”",
          "“Do you have any excuse, or any good deed?” Stunned, he says: “No, my Lord.”",
          "Allah says: “Yes, you have a good deed with Us, and you will not be wronged today.” A small card is brought out, on which is written: “Ashhadu an lā ilāha illa-llāh wa anna Muḥammadan ʿabduhū wa rasūluh.”",
          "He says: “My Lord, what is this card against these scrolls?” The scrolls are placed on one side of the scale and the card on the other. The scrolls fly up, and the card is heavier, for nothing is heavier than the name of Allah.",
        ],
        lesson: "Sincere tawḥīd is the heaviest thing a person can bring. Never belittle the shahādah, and never despair while you hold to it.",
        src: "Tirmidhi 2639, Ibn Majah 4300",
        check: { q: "What outweighed the ninety-nine scrolls of sins?", options: ["A mountain of charity", "A card with the shahādah", "His prayers", "His family"], answer: 1, why: "Nothing is heavier than the name of Allah, said sincerely." } },
      Rw("Last words", "Lā ilāha illa-llāh → Paradise", "“Whoever’s last words are lā ilāha illa-llāh will enter Paradise” (Abu Dawud 3116). Say it often in life, so that it comes easily at the end.", "Abu Dawud 3116"),
      Sc("shahadah-new", "A coworker tells you quietly that she wants to become Muslim, but thinks she must first learn Arabic and the whole Quran. What do you say?", [
        { text: "“Yes, learn everything first, then come back.”", feedback: "Delaying could mean missing it; no one knows their time." },
        { text: "“You can say the shahādah sincerely today; learning comes step by step afterwards, and we’ll help you.”", best: true, feedback: "Islam begins with the testimony; the rest is learned gradually." },
        { text: "“You need to go to Makkah first.”", feedback: "There is no such requirement; anywhere, before Allah, is enough." },
      ]),
      Rf(["Do I say the shahādah in my prayers with my heart present?", "What in my life shows I really mean “no god but Allah”?"], ["Explain the two halves to children: whom we worship, and how we worship.", "Make it the first and last words of the day: on waking and before sleep."]),
      L("Key takeaways", [
        "The shahādah has two halves: whom we worship, and how.",
        "It has conditions: knowledge, certainty, acceptance, sincerity and more.",
        "It is the heaviest thing on the scale when said sincerely.",
      ]),
    ],
    quiz: [
      q("What does “lā ilāha illa-llāh” mean?", ["Allah is great", "No god deserves worship except Allah", "Praise be to Allah", "Allah is One only"], 1, "Negation and affirmation.", "Quran 47:19"),
      q("The second half of the shahādah teaches us…", ["Whom to worship", "How to worship, by following the Prophet ﷺ", "When to pray", "Where to live"], 1, "Following his Sunnah.", "Quran 3:31"),
      q("What outweighed ninety-nine scrolls of sins?", ["Charity", "A card with the shahādah", "A fast", "A book"], 1, "Tirmidhi 2639.", "Tirmidhi 2639"),
      q("Whoever’s last words are lā ilāha illa-llāh…", ["Is forgiven partly", "Will enter Paradise", "Must repeat it", "Nothing"], 1, "Abu Dawud 3116.", "Abu Dawud 3116"),
      q("Which is a condition of the shahādah?", ["Wealth", "Certainty", "Speaking Arabic", "Living in Makkah"], 1, "With no doubt.", "Scholarly summary"),
      q("Does a new Muslim need to learn the whole Quran before saying it?", ["Yes", "No, learning comes after", "Only Arabic first", "Only in a mosque"], 1, "Islam begins with the testimony.", "Bukhari 8"),
    ] },

  { id: "salah-pillar", title: "Ṣalāh: the prayer", summary: "Why the five prayers matter so much, and what they do for a believer.", sources: ["Quran 29:45", "Quran 20:14", "Bukhari 528", "Muslim 82", "Tirmidhi 413", "Bukhari 527", "Bukhari 349", "Muslim 233"],
    blocks: [
      P("Ṣalāh is the second pillar and the first deed a person will be asked about on the Day of Judgment: if it is sound, he has succeeded and prospered (Tirmidhi 413). It was the only pillar given directly to the Prophet ﷺ above the seven heavens, on the night of the Miʿrāj."),
      Qt("Establish the prayer for My remembrance.", "Quran 20:14", "وَأَقِمِ الصَّلَاةَ لِذِكْرِي", "Wa aqimi-ṣ-ṣalāta li-dhikrī."),
      L("From fifty to five", [
        "On the Miʿrāj, Allah prescribed fifty prayers a day. On the way down, Mūsā (as) advised the Prophet ﷺ to go back and ask for less, again and again, until they were five.",
        "Allah said: they are five, and they are fifty: five in practice, fifty in reward (Bukhari 349).",
      ]),
      Rw("A river at your door", "Bathing five times a day", "“If there were a river at the door of one of you and he bathed in it five times a day, would any dirt remain on him?” They said no. “That is the example of the five prayers: Allah wipes away sins by them” (Bukhari 528). And between one prayer and the next, the sins in between are expiated, as long as major sins are avoided (Muslim 233).", "Bukhari 528, Muslim 233"),
      L("What prayer does", [
        "It keeps a person away from indecency and wrongdoing (29:45).",
        "It is the dividing line: “Between a man and disbelief is abandoning the prayer” (Muslim 82).",
        "It is the most beloved deed to Allah when prayed on time (Bukhari 527).",
        "It is rest for the soul: the Prophet ﷺ would say “Give us rest by it, Bilāl” (Abu Dawud 4985).",
        "It structures the whole day around Allah: dawn, noon, afternoon, sunset and night.",
      ]),
      Cmp("Prayer prayed versus prayer established", "Just praying", "Establishing (iqāmah)", [
        ["Rushed at the last minute", "Prayed at its time, with preparation"],
        ["Mind elsewhere throughout", "Heart present, meanings understood"],
        ["Missed when busy or travelling", "Guarded in every condition, using the traveller’s concessions"],
        ["No effect on behaviour", "Keeps you away from wrongdoing (29:45)"],
      ]),
      St("How to build a strong prayer habit", [
        "Learn the times where you live, and turn on the adhān in this app.",
        "Make wuḍūʾ early and pray as soon as the time enters.",
        "Pray the sunnah prayers around the farḍ, especially the two before Fajr.",
        "Learn the meanings of what you recite, a little each week.",
        "Pray with others: in the masjid, at home with family, at work with colleagues.",
      ]),
      Sc("salah-meeting", "Your work meeting is running into the last minutes of ʿAṣr. What do you do?", [
        { text: "Skip it and make it up later.", feedback: "Deliberately delaying a prayer beyond its time without excuse is a serious sin." },
        { text: "Excuse yourself politely for ten minutes, pray, and return.", best: true, feedback: "Most workplaces respect this when asked calmly; prayer on time is the most beloved deed." },
        { text: "Pray quickly in your head while sitting in the meeting.", feedback: "Without a valid excuse, the prayer must be prayed with its standing, bowing and prostration." },
      ]),
      Rf(["Which prayer do I most often delay, and why?", "What would change if I treated each prayer as a meeting with Allah?"], ["Make a family prayer chart and celebrate each full day of five.", "Pray at least one prayer a day together at home."]),
      L("Key takeaways", [
        "Prayer is the first deed asked about on the Day of Judgment.",
        "Five in practice, fifty in reward.",
        "Establishing it means on time, with presence, in every condition.",
      ]),
      { type: "link", href: "/salah", label: "Prayer guide", text: "Learn every prayer step by step in the Hanafi prayer guide." },
    ],
    quiz: [
      q("What is the first deed asked about on the Day of Judgment?", ["Charity", "Prayer", "Fasting", "Ḥajj"], 1, "Tirmidhi 413.", "Tirmidhi 413"),
      q("Where was the prayer prescribed?", ["In Madinah", "On the Miʿrāj, above the seven heavens", "At ʿArafah", "In the cave of Ḥirāʾ"], 1, "Bukhari 349.", "Bukhari 349"),
      q("How many prayers were first prescribed?", ["Five", "Ten", "Fifty", "Seventeen"], 2, "Reduced to five, with the reward of fifty.", "Bukhari 349"),
      q("The Prophet ﷺ compared the five prayers to…", ["A tree", "Bathing in a river five times a day", "A shield", "A lamp"], 1, "Bukhari 528.", "Bukhari 528"),
      q("What does prayer keep a person away from (29:45)?", ["Wealth", "Indecency and wrongdoing", "Work", "Family"], 1, "Quran 29:45.", "Quran 29:45"),
      q("Which deed is most beloved to Allah, according to Bukhari 527?", ["Ḥajj", "Prayer on time", "Fasting", "Charity"], 1, "Then kindness to parents.", "Bukhari 527"),
      q("“Between a man and disbelief is…”", ["Zakāt", "Abandoning the prayer", "Fasting", "Lying"], 1, "Muslim 82.", "Muslim 82"),
      q("Who advised the Prophet ﷺ to ask for fewer prayers?", ["Ibrāhīm", "Mūsā", "ʿĪsā", "Jibrīl"], 1, "Bukhari 349.", "Bukhari 349"),
    ] },

  { id: "zakat", title: "Zakāt: purifying wealth", summary: "Who pays, how much, who receives it, and why it purifies.", sources: ["Quran 9:60", "Quran 9:103", "Quran 9:34–35", "Bukhari 1402", "Muslim 2588", "Abu Dawud 1572", "al-Hidāyah"],
    blocks: [
      P("Zakāt means both purification and growth. It is a fixed share of wealth, given every lunar year to those Allah named, by every Muslim whose wealth reaches the niṣāb. “Take from their wealth a charity to purify them and cause them to grow” (9:103). It purifies the giver from greed, purifies the wealth, and lifts the poor."),
      Cmp("Zakāt and ṣadaqah", "Zakāt", "Ṣadaqah", [
        ["Obligatory pillar of Islam", "Voluntary, any time"],
        ["Fixed rate: usually 2.5%", "Any amount, even a smile"],
        ["Only the eight categories in 9:60", "Anyone in need, and any good cause"],
        ["On wealth above the niṣāb held a lunar year", "From any wealth"],
      ]),
      St("How zakāt works (Hanafi, in brief)", [
        "Check the niṣāb: 87.48 g of gold or 612.36 g of silver. For cash and mixed savings, Hanafi scholars use the value of 612.36 g of silver.",
        "If your zakatable wealth (cash, savings, gold and silver, trade goods) stays at or above the niṣāb for one lunar year, zakāt is due.",
        "Deduct debts due now.",
        "Pay 2.5% of the total: one fortieth.",
        "Give it to one or more of the eight categories, with the intention of zakāt.",
        "Ask a scholar for livestock, crops, business stock and complex cases.",
      ]),
      L("The eight who may receive zakāt (9:60)", [
        "The poor (fuqarāʾ) and the needy (masākīn).",
        "Those employed to collect it.",
        "Those whose hearts are to be reconciled. (In the Hanafi school this share is no longer given; the Companions agreed to stop it in the time of ʿUmar.)",
        "Freeing captives and slaves.",
        "Those in debt.",
        "In the path of Allah.",
        "The stranded traveller.",
        "In the Hanafi school, zakāt is not given to one’s parents and grandparents, children and grandchildren, or spouse, nor to Banū Hāshim, a wealthy person who owns the niṣāb, or a non-Muslim. Siblings, uncles and aunts in need may receive it, and it is better given to them.",
      ]),
      Rw("What zakāt and charity do", "1 → 700, and wealth never decreases", "Charity does not decrease wealth (Muslim 2588), and spending in Allah’s path grows like one grain into seven hundred (2:261). Zakāt of 2.5% on savings of 10,000 is 250, and it can feed a family for weeks, while Allah promises to replace it.", "Muslim 2588, Quran 2:261"),
      L("Withholding it", [
        "Hoarded gold and silver on which zakāt was not paid will be heated in Hell and used to brand their owners’ foreheads, sides and backs (9:34–35).",
        "Whoever is given wealth and does not pay its zakāt, it will come to him as a bald serpent on the Day of Judgment, saying “I am your wealth, I am your treasure” (Bukhari 1403).",
      ]),
      Sc("zakat-cousin", "Your cousin is drowning in debt. You owe zakāt this month. Can you give it to him?", [
        { text: "No, zakāt can never go to relatives.", feedback: "Parents and grandparents, children and grandchildren, and the spouse are excluded in the Hanafi school. A cousin in debt who does not own the niṣāb qualifies." },
        { text: "Yes; a cousin in debt is among the eligible, and giving to a relative also keeps family ties.", best: true, feedback: "Charity to a needy relative counts twice: charity and kinship (Tirmidhi 658)." },
        { text: "Give it to anyone; categories don’t matter.", feedback: "Zakāt must go to the eight categories Allah named." },
      ]),
      Rf(["Have I calculated my zakāt this year, carefully and honestly?", "Do I see zakāt as a tax, or as purification?"], ["Choose a zakāt date each year as a family, and calculate together.", "Let children choose where part of the family’s ṣadaqah goes."]),
      L("Key takeaways", [
        "Zakāt is 2.5% of wealth above the niṣāb, held a lunar year.",
        "It goes only to the eight categories in 9:60.",
        "It purifies the giver and the wealth, and never decreases it.",
      ]),
    ],
    quiz: [
      q("What does “zakāt” mean?", ["Tax", "Purification and growth", "Gift", "Loan"], 1, "Quran 9:103.", "Quran 9:103"),
      q("What is the usual rate of zakāt on savings?", ["1%", "2.5%", "10%", "20%"], 1, "One fortieth.", "Abu Dawud 1572"),
      q("How long must wealth be held above the niṣāb?", ["A week", "One lunar year", "Ten years", "No time"], 1, "A full ḥawl.", "Abu Dawud 1573"),
      q("How many categories receive zakāt?", ["Four", "Eight", "Ten", "Any"], 1, "Quran 9:60.", "Quran 9:60"),
      q("In the Hanafi school, can zakāt be given to one’s own parents?", ["Yes", "No", "Only fathers", "Only in Ramadan"], 1, "Their support is already your duty.", "al-Hidāyah"),
      q("Does charity decrease wealth?", ["Yes", "No", "Only zakāt", "Only large gifts"], 1, "Muslim 2588.", "Muslim 2588"),
      q("What is the difference between zakāt and ṣadaqah?", ["None", "Zakāt is obligatory and fixed; ṣadaqah is voluntary", "Ṣadaqah is obligatory", "Zakāt is for mosques only"], 1, "Both are rewarded.", "Quran 9:60"),
      q("What happens to unpaid zakāt wealth on the Day of Judgment, per Bukhari 1403?", ["It is forgotten", "It comes as a serpent", "It doubles", "It is given away"], 1, "“I am your wealth, I am your treasure.”", "Bukhari 1403"),
    ] },

  { id: "sawm", title: "Fasting Ramadan", summary: "What fasting is, who must fast, what breaks it, and why Allah calls it His own.", sources: ["Quran 2:183–187", "Bukhari 1894", "Bukhari 1901", "Bukhari 1903", "Bukhari 1896", "Tirmidhi 807", "Nūr al-Īḍāḥ"],
    blocks: [
      P("Ṣawm is abstaining from food, drink and marital relations from true dawn (Fajr) until sunset, with the intention, for the sake of Allah. Fasting the month of Ramadan is the fourth pillar. “Fasting has been prescribed for you as it was prescribed for those before you, so that you may attain taqwā” (2:183)."),
      Qt("Every deed of the son of Ādam is for him, except fasting: it is for Me, and I will reward it.", "Bukhari 1904 (ḥadīth qudsī)"),
      Rw("A gate of your own", "Ar-Rayyān: a gate only for those who fast", "In Paradise there is a gate called ar-Rayyān; only those who fasted will enter by it, and when they have entered it is closed (Bukhari 1896). Fasting Ramadan with faith and hoping for reward forgives all past sins (Bukhari 1901), and the smell of a fasting person’s mouth is sweeter to Allah than musk (Bukhari 1894).", "Bukhari 1896, Bukhari 1901"),
      L("Who must fast", [
        "Every Muslim who is adult, sane, healthy and resident.",
        "Travellers and the sick may break the fast and make it up later (2:184).",
        "Women in menstruation or post-natal bleeding must not fast, and make up the days later.",
        "The elderly and the chronically ill who cannot fast pay fidyah: feeding a poor person for each day.",
        "Pregnant and nursing women who fear for themselves or the child may break and make up later (Hanafi).",
      ]),
      Cmp("Breaks the fast or not? (Hanafi, in brief)", "Breaks it", "Does not break it", [
        ["Eating, drinking or smoking on purpose (qaḍāʾ and kaffārah)", "Eating or drinking by genuine forgetfulness: “Allah fed you and gave you drink” (Bukhari 1933)"],
        ["Medicine taken by mouth or nose", "Brushing teeth or miswāk, without swallowing"],
        ["Intimate relations (qaḍāʾ and kaffārah: 60 consecutive days’ fasting, or feeding 60 poor only if unable to fast)", "Taking a shower or swimming without swallowing"],
        ["Deliberate vomiting of a mouthful", "Involuntary vomiting"],
        ["Swallowing something not eaten as food, like a pebble (qaḍāʾ only)", "Eye drops, according to the Hanafi school"],
      ]),
      L("The real fast", [
        "Whoever does not leave false speech and acting on it, Allah has no need of him leaving his food and drink (Bukhari 1903).",
        "Fasting is a shield: if someone insults you, say “I am fasting” (Bukhari 1894).",
        "Fast the eyes, ears and tongue as well as the stomach.",
      ]),
      St("How to fast well", [
        "Make the intention each night (or, in Hanafi fiqh, for Ramadan, before al-ḍaḥwah al-kubrā: the midpoint between true dawn and sunset, not 12 o’clock).",
        "Eat suḥūr: there is blessing in it (Bukhari 1923), and delay it towards Fajr.",
        "Break the fast promptly at sunset with dates or water, and make duʿāʾ. It is reported that the fasting person’s duʿāʾ is not turned back (Tirmidhi 3598, graded ḥasan by al-Tirmidhī).",
        "Pray tarāwīḥ, read the Quran, and seek Laylat al-Qadr in the last ten nights.",
        "Feed others: feeding a fasting person earns his reward (Tirmidhi 807).",
      ]),
      Sc("sawm-forgot", "In Ramadan, your little sister absent-mindedly drinks water at midday, then remembers. She bursts into tears. What do you tell her?", [
        { text: "“Your fast is broken; you’ll have to make it up.”", feedback: "Not so: eating or drinking by genuine forgetfulness does not break the fast." },
        { text: "“Your fast is fine. The Prophet ﷺ said Allah fed you and gave you drink. Just stop now and carry on.”", best: true, feedback: "Bukhari 1933: a forgetful sip is a gift from Allah, not a sin." },
        { text: "“It doesn’t matter; drink some more.”", feedback: "Once you remember, you must stop and continue fasting." },
      ]),
      Rf(["Last Ramadan, did my tongue fast as well as my stomach?", "Who could I feed at ifṭār this year?"], ["Let children try half-day fasts, and celebrate their effort.", "Plan a family ifṭār for a neighbour or someone alone."]),
      L("Key takeaways", [
        "Fasting is from true dawn to sunset, with intention, for Allah.",
        "Its goal is taqwā, and its reward is from Allah Himself.",
        "Fast the tongue and eyes too, and feed others.",
      ]),
      { type: "link", href: "/ramadan", label: "Ramadan Quest", text: "Track your Ramadan days, duas and goals." },
    ],
    quiz: [
      q("What is the goal of fasting, according to 2:183?", ["Weight loss", "Taqwā", "Saving money", "Tradition"], 1, "“So that you may attain taqwā.”", "Quran 2:183"),
      q("Fasting lasts from…", ["Sunrise to sunset", "True dawn to sunset", "Midnight to noon", "Fajr to ʿAṣr"], 1, "Quran 2:187.", "Quran 2:187"),
      q("What is ar-Rayyān?", ["A river", "A gate of Paradise for those who fast", "A mountain", "A night"], 1, "Bukhari 1896.", "Bukhari 1896"),
      q("Does forgetful eating break the fast?", ["Yes", "No, Allah fed you", "Only in Ramadan", "Only for children"], 1, "Bukhari 1933.", "Bukhari 1933"),
      q("What should a fasting person say if insulted?", ["Insult back", "“I am fasting”", "Nothing at all", "Leave the city"], 1, "Bukhari 1894.", "Bukhari 1894"),
      q("Who must not fast and makes up the days later?", ["Workers", "Women in menstruation", "Students", "Athletes"], 1, "They make up the missed days.", "Bukhari 1951"),
      q("Fasting Ramadan with faith and hoping for reward…", ["Earns money", "Forgives past sins", "Is optional", "Is only for adults"], 1, "Bukhari 1901.", "Bukhari 1901"),
      q("What is in suḥūr?", ["Nothing", "Blessing", "Harm", "Sin"], 1, "Bukhari 1923.", "Bukhari 1923"),
    ] },

  { id: "hajj", title: "Ḥajj: the journey of a lifetime", summary: "Who must go, the rites day by day, and the reward of a Ḥajj mabrūr.", sources: ["Quran 3:97", "Quran 22:27", "Quran 2:196–203", "Bukhari 1521", "Bukhari 1773", "Muslim 1348", "Bukhari 1513", "Muslim 1218"],
    blocks: [
      P("Ḥajj is the pilgrimage to the House of Allah in Makkah, in the month of Dhū al-Ḥijjah. It is obligatory once in a lifetime on every adult Muslim who is physically and financially able (3:97). It retraces the steps of Ibrāhīm, Hājar and Ismāʿīl, and of the Prophet ﷺ in his Farewell Ḥajj, when he said: “Take your rites from me” (Muslim 1297)."),
      Rw("Ḥajj mabrūr", "Return like the day you were born", "“Whoever performs Ḥajj and does not commit obscenity or wrongdoing returns like the day his mother bore him” (Bukhari 1521). “An accepted Ḥajj has no reward except Paradise” (Bukhari 1773). And there is no day on which Allah frees more people from the Fire than the Day of ʿArafah (Muslim 1348).", "Bukhari 1521, Bukhari 1773, Muslim 1348"),
      St("The days of Ḥajj, in brief", [
        "Iḥrām: at the mīqāt, enter the sacred state with intention and the talbiyah: “Labbayka-llāhumma labbayk…”. Men wear two white unstitched cloths.",
        "8 Dhū al-Ḥijjah: go to Minā and pray there.",
        "9th, the Day of ʿArafah: stand at ʿArafah from noon to sunset in duʿāʾ. This is the heart of Ḥajj: “Ḥajj is ʿArafah.” Then go to Muzdalifah for the night.",
        "10th, Eid: stone the large Jamrah, offer the sacrifice, shave or trim the hair, then go to Makkah for ṭawāf al-ifāḍah and saʿy.",
        "11th to 12th (or 13th): stay in Minā and stone the three Jamarāt each day.",
        "Before leaving Makkah: the farewell ṭawāf.",
      ]),
      Cmp("Ḥajj and ʿUmrah", "Ḥajj", "ʿUmrah", [
        ["A pillar: obligatory once for those able", "Sunnah muʾakkadah in the Hanafi school"],
        ["Only in its set days of Dhū al-Ḥijjah", "Any time of year"],
        ["Includes ʿArafah, Muzdalifah, Minā and stoning", "Iḥrām, ṭawāf, saʿy and shaving or trimming"],
        ["Several days", "A few hours"],
      ]),
      { type: "story", id: "hajar", kind: "From the earlier nations", title: "Hājar between the two hills",
        scene: "A barren valley with no water and no people: Makkah before it was a city. Ibrāhīm (as) left his wife Hājar and baby Ismāʿīl there, by Allah’s command.",
        story: [
          "As he walked away, Hājar followed him: “Ibrāhīm, will you leave us in this valley with no one and nothing?” He did not answer. She asked: “Did Allah command you to do this?” He said yes. She said: “Then He will not abandon us.”",
          "When the water ran out and the baby cried with thirst, she climbed the hill of Ṣafā to look for anyone, then ran to Marwah, back and forth, seven times.",
          "Then she heard a sound: the angel struck the ground and water gushed out, Zamzam. She cupped it and walled it in.",
          "The Prophet ﷺ said: “That is why people walk between them,” the saʿy of every pilgrim.",
        ],
        lesson: "Every pilgrim retraces the steps of a mother who trusted Allah completely and still ran with all her effort. That is tawakkul: trust and effort together.",
        src: "Bukhari 3364",
        check: { q: "What did Hājar say when she learned Allah had commanded it?", options: ["“We will die here”", "“Then He will not abandon us”", "“Take us back”", "Nothing"], answer: 1, why: "Complete trust, followed by full effort." } },
      Sc("hajj-delay", "You have the savings and good health, but you want to wait until you are older and “ready”. What does Islam say?", [
        { text: "Wait; Ḥajj is for old age.", feedback: "Health and wealth may not last; the Prophet ﷺ urged hastening to Ḥajj (Abu Dawud 1732)." },
        { text: "Go as soon as you are able; you do not know what will come, and preparation can begin now.", best: true, feedback: "Ḥajj becomes due when you are able; delaying without excuse risks missing it." },
        { text: "Send money to someone else to go instead.", feedback: "Only someone permanently unable may have another perform Ḥajj on their behalf." },
      ]),
      Rf(["If I could stand at ʿArafah tomorrow, what would I ask Allah for?", "What “Ḥajj savings” plan could I start this year?"], ["Watch the Ḥajj rites together on the Day of ʿArafah, and fast it if not on Ḥajj: it expiates two years (Muslim 1162).", "Tell children the story of Hājar and Zamzam."]),
      L("Key takeaways", [
        "Ḥajj is due once on every Muslim who is able.",
        "ʿArafah is its heart; an accepted Ḥajj’s reward is Paradise.",
        "Its rites retrace the trust and effort of Ibrāhīm’s family.",
      ]),
    ],
    quiz: [
      q("Who must perform Ḥajj?", ["Everyone every year", "Every adult Muslim who is physically and financially able, once", "Only scholars", "Only men"], 1, "Quran 3:97.", "Quran 3:97"),
      q("What is the heart of Ḥajj?", ["Stoning", "Standing at ʿArafah", "Shopping", "Ṭawāf only"], 1, "“Ḥajj is ʿArafah.”", "Tirmidhi 889"),
      q("What is the reward of an accepted Ḥajj?", ["Wealth", "Paradise", "Fame", "Nothing"], 1, "Bukhari 1773.", "Bukhari 1773"),
      q("Whoever performs Ḥajj without obscenity returns…", ["Rich", "Like the day his mother bore him", "Tired", "Unchanged"], 1, "Bukhari 1521.", "Bukhari 1521"),
      q("Why do pilgrims walk between Ṣafā and Marwah?", ["Exercise", "Following Hājar searching for water", "To reach the hotel", "Custom"], 1, "Bukhari 3364.", "Bukhari 3364"),
      q("What is the main difference between Ḥajj and ʿUmrah?", ["None", "Ḥajj is in set days and includes ʿArafah; ʿUmrah any time", "ʿUmrah is a pillar", "Ḥajj needs no iḥrām"], 1, "ʿUmrah is sunnah in the Hanafi school.", "al-Hidāyah"),
      q("Fasting the Day of ʿArafah (for non-pilgrims) expiates…", ["Nothing", "Two years", "Ten years", "One day"], 1, "The previous and the coming year.", "Muslim 1162"),
      q("Which water sprang up for Hājar and Ismāʿīl?", ["The Nile", "Zamzam", "Kawthar", "Rūmah"], 1, "Bukhari 3364.", "Bukhari 3364"),
    ] },
];
