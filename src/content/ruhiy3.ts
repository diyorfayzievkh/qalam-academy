import type { Lesson } from "./library";

// Spiritual Education, volume 3 ("Xulqlanish": taking on good character):
// lessons based on "Ruhiy tarbiya, 3-juz" by Shaykh Muhammad Sodik Muhammad
// Yusuf (Hilol-Nashr). Short summaries in our own words with approximate page
// ranges, pointing readers to the full book.

export const RUHIY3_BOOK = {
  title: "Ruhiy tarbiya, 3-juz",
  url: "https://mutolaa.com/uz/reader/ruhiy-tarbiya-3-juz",
};

const credit = (pages: string) => `${RUHIY3_BOOK.title}, pp. ${pages}`;
const read = (pages: string) => ({ type: "link" as const, href: RUHIY3_BOOK.url, label: "Read in the book", text: `This lesson summarises ${credit(pages)}. Read the full chapter, with its stories and evidence, in the Shaykh’s own words.` });
const NAME_NOTE = "Allah’s attributes are perfect and limitless; a servant’s share is small and limited. Taking on a name’s character means reflecting it in a human way, never claiming it as Allah has it.";

export const RUHIY3_LESSONS: Lesson[] = [
  { id: "takhalluq", title: "Taking on good character (takhalluq)", summary: "Reflecting Allah’s beautiful names, and following the Prophet ﷺ.", sources: [credit("1–14"), "Bukhari 2736, Muslim 2677"],
    blocks: [
      { type: "p", text: "The third volume is called Xulqlanish, “taking on character”. In spiritual training, the book explains, this means taking on the character of Allah’s beautiful names, and following the Messenger ﷺ in doing so." },
      { type: "p", text: "The Shaykh calls this the most delicate chapter of the whole subject and asks the reader to be careful. Servants can be described with some of the same words as Allah, such as seeing, hearing, knowledge, generosity and forbearance, but the difference between the two is like the difference between Allah and His servant. Allah’s seeing is without limit; ours is narrow and bounded." },
      { type: "points", title: "Key points", items: [
        "Allah has ninety-nine names; whoever learns them by heart will enter Paradise (Bukhari 2736, Muslim 2677).",
        "Scholars studied the names to declare Allah free of anything unfitting: affirming what He affirmed for Himself, without likening Him to creation and without denying it.",
        "The lessons that follow take nine names and ask: what is the servant’s share in this name?",
      ] },
      read("1–14"),
    ] },
  { id: "rahim", title: "Ar-Raḥīm: mercy", summary: "Wanting good for others, even when it costs you.", sources: [credit("14–29"), "Quran 21:107", "Tirmidhi 1924"],
    blocks: [
      { type: "p", text: "Raḥmah carries meanings of gentleness, tenderness and compassion; the Quran calls itself a mercy, and rain too. The book gathers definitions: al-Jurjānī, wanting to bring good to someone; Ibn al-Qayyim, a quality that makes you bring benefit to others even when it is hard for you." },
      { type: "points", title: "The servant’s share", items: [
        "The Prophet ﷺ was sent only as a mercy to the worlds (21:107).",
        "The merciful are shown mercy by the Most Merciful: be merciful to those on earth, and the One above the heavens will be merciful to you (Tirmidhi 1924).",
        "Mercy starts in a soft heart and shows in action: helping, forgiving and protecting.",
      ] },
      { type: "p", text: NAME_NOTE },
      read("14–29"),
    ] },
  { id: "salam", title: "As-Salām: peace", summary: "Entering Islam completely, and spreading peace.", sources: [credit("29–41"), "Quran 2:208"],
    blocks: [
      { type: "p", text: "Salām means safety, peace and well-being. The book explains that silm means both peace and Islam: submission to Allah." },
      { type: "points", title: "The servant’s share", items: [
        "“Enter into Islam completely” (2:208): submit with tongue, heart and limbs together, not only with words.",
        "The verse also carries the meaning of entering peace completely. Living Islam fully brings peace to the person and to society.",
        "Spreading the greeting of salām is a daily way to live this name.",
      ] },
      { type: "link", href: "/learn/akhlaq/salam", label: "Greeting with salām", text: "Practise with the Akhlaq lesson on salām." },
      read("29–41"),
    ] },
  { id: "aziz", title: "Al-ʿAzīz: dignity and honour", summary: "True honour belongs to Allah, and He gives it to whom He wills.", sources: [credit("41–67"), "Quran 3:26", "Quran 63:8"],
    blocks: [
      { type: "p", text: "ʿIzzah means strength, power and being unconquerable. Al-Rāghib defined it as the state that keeps a person from being overcome. The Quran mentions Allah’s might in nearly a hundred verses." },
      { type: "points", title: "The servant’s share", items: [
        "Honour belongs to Allah: He honours whom He wills and humbles whom He wills (3:26).",
        "Honour belongs to Allah, His Messenger and the believers (63:8). A believer seeks dignity through obedience, not through status.",
        "Dignity means not humiliating yourself before people for worldly things, while staying humble before Allah.",
      ] },
      { type: "p", text: NAME_NOTE },
      read("41–67"),
    ] },
  { id: "adl", title: "Al-ʿAdl: justice", summary: "Giving every right its due, as Allah’s Book commands.", sources: [credit("67–102")],
    blocks: [
      { type: "p", text: "The book defines justice as giving the rights that are due and giving each person their right equally; al-Jurjānī called it the middle between falling short and going too far." },
      { type: "points", title: "Two kinds of justice", items: [
        "Absolute justice, recognised by sound reason and never abrogated: doing good to those who do good, and not harming those who do no harm.",
        "Justice known through the Sharīʿah, such as its laws of retribution and punishment.",
      ] },
      { type: "p", text: "The chapter tells stories of the justice of ʿUmar (ra), including his courts during the Hajj season, and of ʿAlī (ra) and other companions, as living examples." },
      read("67–102"),
    ] },
  { id: "halim", title: "Al-Ḥalīm: forbearance", summary: "Holding back when anger stirs, even when you could retaliate.", sources: [credit("95–118")],
    blocks: [
      { type: "p", text: "Ḥilm means acting calmly and wisely, and not repaying harm with harm. Al-Rāghib: holding the self back when anger rises. Al-Jāḥiẓ: not taking revenge when anger stirs, even though you can." },
      { type: "points", title: "Key points", items: [
        "Ibn Ḥibbān: forbearance can be inborn, acquired, or both. It begins with seeing clearly, then resolve, then patience, then contentment.",
        "Two kinds: forbearance with the trials Allah decrees, and forbearance with what comes from people and other creatures.",
      ] },
      { type: "link", href: "/learn/ruhiy/ghadab", label: "Misplaced anger", text: "Volume 1 covers anger and its cure." },
      read("95–118"),
    ] },
  { id: "karim", title: "Al-Karīm: generosity", summary: "Giving freely, before being asked, with nothing wanted back.", sources: [credit("118–139")],
    blocks: [
      { type: "p", text: "Karam points to nobility in a thing or in one of its traits; in character it includes overlooking the faults of a wrongdoer. The book gathers definitions: spending freely on great and beneficial things; doing good before being asked; giving benefit with no ulterior motive." },
      { type: "points", title: "Three faces of generosity (al-Kafawī)", items: [
        "With wealth: it is called jūd, open-handedness.",
        "By not harming someone when you are able to: it is called ʿafw, pardon.",
        "By giving of yourself in hardship: it is called courage.",
      ] },
      { type: "p", text: "Someone who gives only to gain something or avoid blame is not truly generous. The chapter includes the generosity of the Prophet ﷺ on the day Makkah was conquered." },
      read("118–139"),
    ] },
  { id: "hakim", title: "Al-Ḥakīm: wisdom", summary: "Knowing the best things with the best knowledge, and acting on it.", sources: [credit("133–158")],
    blocks: [
      { type: "p", text: "Ḥikmah comes from a root meaning to restrain for the sake of putting right; the bridle that stops a horse shares the root. Wisdom holds a person back from ignorance." },
      { type: "points", title: "Definitions the book gathers", items: [
        "Imam al-Ghazālī: knowing the best of things through the best of knowledge.",
        "The exegetes: knowing the truth because it is true, and knowing good in order to act on it.",
        "The people of the spiritual path: knowing the afflictions of the soul and of Shayṭān, and the disciplines that heal them.",
        "It is the middle way between cunning and foolishness.",
      ] },
      read("133–158"),
    ] },
  { id: "barr", title: "Al-Barr: goodness", summary: "Goodness in giving, in words and in deeds.", sources: [credit("158–184")],
    blocks: [
      { type: "p", text: "Birr is every kind of goodness, of this world and the Hereafter. The book divides the goodness people show into two kinds." },
      { type: "points", items: [
        "Ṣilah (giving): spending wealth on others without expecting a return. It comes from a generous, open soul.",
        "Maʿrūf in words: beautiful speech and good news. If overdone it turns into flattery, so it needs balance.",
        "Maʿrūf in deeds: practical kindness and help.",
      ] },
      read("158–184"),
    ] },
  { id: "afuww", title: "Al-ʿAfuww: pardoning", summary: "Letting go of a deserved penalty when you have the power.", sources: [credit("184–202")],
    blocks: [
      { type: "p", text: "ʿAfw means to leave, erase and wipe away. Al-Kafawī: not harming when you are able to; whoever has the right to punish and leaves it has pardoned." },
      { type: "points", title: "Pardon (ʿafw) and forgiveness (maghfirah)", items: [
        "Maghfirah removes the punishment and also grants reward. Only Allah can do this, and only for believers.",
        "ʿAfw removes blame and penalty but does not by itself mean reward. People can pardon one another.",
        "ʿAfw can come before or after a penalty; maghfirah covers the sin so that no penalty comes at all.",
      ] },
      { type: "link", href: "/mizan", label: "Laylat al-Qadr duʿāʾ", text: "“Allāhumma innaka ʿafuwwun tuḥibbu-l-ʿafwa faʿfu ʿannī” is in Mizan." },
      read("184–202"),
    ] },
  { id: "prophet-character", title: "The character of the Prophet ﷺ", summary: "The most complete example of good character.", sources: [credit("202–266"), "Quran 33:21", "Quran 9:128", "Bukhari 6304, Muslim 199"],
    blocks: [
      { type: "p", text: "The book teaches that the servant most perfectly adorned with good character is the Messenger of Allah ﷺ, so a Muslim should put all his effort into taking on his manners. Following him is the easiest road to perfection, but it is not possible without remembering Allah often." },
      { type: "points", title: "Key points", items: [
        "In the Messenger of Allah you have an excellent example, for those who hope in Allah and the Last Day and remember Allah often (33:21).",
        "He grieves at your hardship, cares for you, and is kind and merciful to the believers (9:128).",
        "Every prophet had one duʿāʾ certain to be answered; he saved his for intercession for his ummah on the Day of Judgment (Bukhari 6304, Muslim 199).",
        "The chapter describes his appearance, fragrance, speech, laughter and sleep, and his compassion, generosity and courage, and his manners in food and clothing.",
      ] },
      { type: "link", href: "/learn/seerah/timeline", label: "The life of the Prophet ﷺ", text: "See his life in the Seerah world." },
      read("202–266"),
    ] },
  { id: "fruits", title: "The fruits of purification, and Allah’s right", summary: "Where purification, rebuilding and character lead.", sources: [credit("258–272")],
    blocks: [
      { type: "p", text: "The book draws the three volumes together: a soul that has passed through purification (poklanish), rebuilding (tiklanish) and taking on character (xulqlanish) reaches its goal. Its faults are gone, it has gained what it needs, and it follows the Prophet ﷺ in everything." },
      { type: "points", title: "Its fruits", items: [
        "Fine manners in every relationship, with the Creator and with creation.",
        "Freedom from the stains of the tongue, the heart, character and body.",
        "Excellence in obligations, sunnahs and good manners alike.",
        "The greatest right of all is Allah’s: to worship Him, doing what He commands and leaving what He forbids.",
      ] },
      read("258–272"),
    ] },
  { id: "muslim-rights", title: "The rights of a Muslim", summary: "Six rights every Muslim has over another.", sources: [credit("272–318"), "Muslim 2162"],
    blocks: [
      { type: "p", text: "The book introduces the rights Muslims owe one another with the hadith of six rights (Muslim 2162):" },
      { type: "points", items: [
        "When you meet him, greet him with salām.",
        "When he invites you, accept.",
        "When he asks for advice, advise him sincerely.",
        "When he sneezes and praises Allah, say “Yarḥamuka-llāh”.",
        "When he is ill, visit him.",
        "When he dies, attend his funeral.",
      ] },
      { type: "p", text: "Tirmidhi’s narration adds: love for him what you love for yourself." },
      read("272–318"),
    ] },
  { id: "family", title: "Parents and children", summary: "Rights in both directions.", sources: [credit("318–340"), "Quran 17:23–24"],
    blocks: [
      { type: "p", text: "The book says no system of upbringing comes close to Islam in honouring parents. Children owe them kind treatment, sweet words, tenderness, constant respect, and obedience in everything that does not go against Allah’s law." },
      { type: "points", title: "Children’s rights, as the book begins listing them", items: [
        "A clear, pure lineage, through lawful marriage.",
        "A good mother and father: Islam cares for the child before birth, when a spouse is being chosen for religion, character and manners.",
        "The chapter goes on to the child’s further rights through upbringing.",
      ] },
      { type: "link", href: "/learn/akhlaq/parents", label: "Kindness to parents", text: "Practise with the Akhlaq lesson and its duʿāʾ for parents." },
      read("318–340"),
    ] },
  { id: "kin-neighbours", title: "Relatives and neighbours", summary: "Jibrīl kept urging kindness to the neighbour.", sources: [credit("340–352"), "Quran 4:36", "Bukhari 6014"],
    blocks: [
      { type: "p", text: "Allah commands kindness to parents, relatives, orphans, the needy, the near neighbour, the distant neighbour, the companion at your side and the traveller (4:36). The book notes the scholars’ reading: the near neighbour is one who is also related; the distant neighbour is not." },
      { type: "points", items: [
        "Jibrīl kept urging the Prophet ﷺ about the neighbour until he thought the neighbour would be made an heir (Bukhari 6014).",
        "Kindness to neighbours strengthens human ties and makes society strong.",
        "Keeping family ties expands provision and blesses life (Bukhari 5986).",
      ] },
      read("340–352"),
    ] },
  { id: "spouses", title: "Husband and wife", summary: "The most sacred human relationship, with rights on both sides.", sources: [credit("352–396"), "Tirmidhi 3895"],
    blocks: [
      { type: "p", text: "The book calls marriage the most sacred human relationship, and stresses that it must also be built on knowledge: who the husband is and what he owes, who the wife is and what she owes, and how they treat each other. The Quran, the Sunnah and the scholars answer all of these." },
      { type: "points", title: "Key points", items: [
        "The book sets out the husband’s rights and the wife’s rights in turn, each with its evidence.",
        "The best of you is the best to his family (Tirmidhi 3895).",
        "Read the chapter for the full list of each spouse’s rights and their evidence.",
      ] },
      read("352–396"),
    ] },
  { id: "friendship", title: "Brotherhood and friendship", summary: "Eight rights of a true friend.", sources: [credit("396–422")],
    blocks: [
      { type: "p", text: "Every relationship has rights, and the scholars of spiritual training counted eight rights of friendship. The first is the right in wealth, which has three levels." },
      { type: "points", title: "Three levels of sharing wealth with a friend", items: [
        "Treating the friend like your own household: giving him from what you have spare, before he has to ask.",
        "Treating him like yourself: making him a partner in your wealth.",
        "The highest: putting his need before your own.",
      ] },
      { type: "p", text: "In the classic list these scholars follow (as in al-Ghazālī’s Iḥyāʾ), the other rights include helping with your own hands, guarding your tongue about him, speaking well of him, forgiving his slips, praying for him, staying loyal, and not burdening him. Read the chapter for the Shaykh’s full explanation." },
      read("396–422"),
    ] },
  { id: "society", title: "Other faiths, and honest work", summary: "Dealing justly with all people, and working with excellence.", sources: [credit("422–434"), "Quran 42:13", "Quran 60:8", "Muslim 102"],
    blocks: [
      { type: "p", text: "A Muslim’s relations with people of other faiths are also built on his religion. The book recalls that all revealed religions have one origin: Allah ordained for us what He enjoined on Nūḥ, Ibrāhīm, Mūsā and ʿĪsā: establish the religion and do not split over it (42:13)." },
      { type: "points", title: "Key points", items: [
        "Allah does not forbid kindness and justice toward those who do not fight you over religion (60:8).",
        "At work, a believer tries to be the best worker, farmer, engineer, doctor or teacher he can be. Allah loves that when one of you does a job, he does it well (cited by the book from al-Bayhaqī).",
        "No cheating: whoever cheats is not one of us (Muslim 102).",
      ] },
      read("422–434"),
    ] },
  { id: "creation", title: "Animals, plants and the natural world", summary: "Creation is a trust, made to serve us.", sources: [credit("434–468"), "Quran 6:38", "Quran 31:20", "Bukhari 2320"],
    blocks: [
      { type: "p", text: "Islam calls people to cause no harm to animals and to be merciful to them. The book points out that the Quran calls every kind of creature a community (ummah) like ours (6:38)." },
      { type: "points", title: "Key points", items: [
        "Animals are to be cared for, protected and studied as signs of Allah’s power.",
        "Planting is rewarded: whatever a person, bird or animal eats from a tree you planted is charity for you (Bukhari 2320).",
        "Even the non-living world has rights. Allah made what is in the heavens and the earth subject to us (31:20), as a blessing to be used with gratitude and not wasted or spoiled.",
      ] },
      read("434–468"),
    ] },
];

export const RUHIY3_QUIZ = {
  id: "ruhiy-3", title: "Spiritual Education 3", sub: "Ruhiy tarbiya, volume 3", icon: "learn" as const,
  learn: ["Questions are based on the lessons summarised from Ruhiy tarbiya, 3-juz by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "In spiritual training, what does “takhalluq” (xulqlanish) mean?", options: ["Memorising the names of Allah", "Taking on the character of Allah’s names, following the Prophet ﷺ", "Claiming Allah’s attributes", "Learning Arabic grammar"], answer: 1, why: "Reflecting the names in a human way, never claiming them as Allah has them.", src: credit("1–14") },
    { q: "How did Ibn al-Qayyim describe mercy?", options: ["A feeling with no action", "Bringing benefit to others even when it is hard for you", "Only giving money", "Being soft on wrongdoing"], answer: 1, why: "True mercy shows in action, even at a cost.", src: credit("14–29") },
    { q: "What does “Enter into Islam completely” (2:208) ask of us?", options: ["Only saying the Shahādah", "Submitting with tongue, heart and limbs together", "Moving to Makkah", "Learning fiqh first"], answer: 1, why: "Submission should be complete, not only in words.", src: "Quran 2:208" },
    { q: "Al-Jāḥiẓ defined ḥilm (forbearance) as…", options: ["Never feeling anger", "Not taking revenge when anger stirs, though you can", "Avoiding people", "Staying silent always"], answer: 1, why: "Forbearance is restraint with the power to retaliate.", src: credit("95–118") },
    { q: "According to al-Kafawī, generosity by not harming someone when you are able is called…", options: ["Jūd", "ʿAfw (pardon)", "Shajāʿah", "Zuhd"], answer: 1, why: "With wealth it is jūd; with not harming it is ʿafw; with oneself it is courage.", src: credit("118–139") },
    { q: "What is the difference between ʿafw and maghfirah?", options: ["There is none", "Maghfirah also grants reward and only Allah gives it; people can pardon", "ʿAfw is only for prophets", "Maghfirah is weaker"], answer: 1, why: "Maghfirah removes punishment and grants reward; ʿafw removes blame and penalty.", src: credit("184–202") },
    { q: "What did the Prophet ﷺ save his one certain duʿāʾ for?", options: ["Victory in battle", "Intercession for his ummah on the Day of Judgment", "Rain", "Wealth for the poor"], answer: 1, why: "Bukhari 6304, Muslim 199.", src: credit("242–258") },
    { q: "Which is one of the six rights of a Muslim over another?", options: ["Lending him money whenever asked", "Visiting him when he is ill", "Agreeing with all his opinions", "Giving him gifts every week"], answer: 1, why: "Greet, accept invitations, advise, reply to sneezing, visit the sick, attend the funeral (Muslim 2162).", src: credit("272–318") },
    { q: "Jibrīl urged the Prophet ﷺ so much about the neighbour that he thought…", options: ["Neighbours must live together", "The neighbour would be made an heir", "Neighbours must pray together", "Neighbours pay zakāt for each other"], answer: 1, why: "Bukhari 6014.", src: credit("340–352") },
    { q: "What does the Quran call every kind of animal (6:38)?", options: ["A servant", "A community (ummah) like ours", "A test", "A sign of the Hour"], answer: 1, why: "Animals are communities like us, so they are treated with mercy.", src: "Quran 6:38" },
  ],
};
