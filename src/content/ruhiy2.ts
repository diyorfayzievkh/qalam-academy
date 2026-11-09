import type { Lesson } from "./library";

// Spiritual Education, volume 2: lessons based on "Ruhiy tarbiya, 2-juz" by
// Shaykh Muhammad Sodik Muhammad Yusuf (Hilol-Nashr). Short summaries in our
// own words with page references (approximate chapter ranges), pointing
// readers to the full book.

export const RUHIY2_BOOK = {
  title: "Ruhiy tarbiya, 2-juz",
  url: "https://mutolaa.com/uz/reader/ruhiy-tarbiya-2-juz",
};

const credit = (pages: string) => `${RUHIY2_BOOK.title}, pp. ${pages}`;
const read = (pages: string) => ({ type: "link" as const, href: RUHIY2_BOOK.url, label: "Read in the book", text: `This lesson summarises ${credit(pages)}. Read the full chapter in the Shaykh’s own words.` });

export const RUHIY2_LESSONS: Lesson[] = [
  { id: "tawhid", title: "Tawḥīd and worship", summary: "Affirming Allah’s oneness, and what makes an act worship.", sources: [credit("1–27")],
    blocks: [
      { type: "p", text: "The book defines tawḥīd as rejecting every form of shirk and believing that Allah has no partner in His essence, attributes, actions, names or rulings. Linguistically it means attributing oneness to Allah: we do not make Him one; we affirm that He is One." },
      { type: "points", title: "How scholars have divided tawḥīd", items: [
        "Tawḥīd of His attributes, of His lordship (He alone creates and sustains), and of His divinity (He alone is worshipped).",
        "The theologians: necessary existence, creation and the right to be worshipped belong to Allah alone.",
        "Imam al-Ashʿarī’s levels: oneness of the essence, of the attributes, and of actions: nothing in existence has real effect except Allah.",
      ] },
      { type: "p", text: "The book then explains worship (ʿibādah) and how it differs from obedience (ṭāʿah): every act of worship is obedience, but obedience becomes worship when it is done with intention, to draw near to Allah." },
      read("1–27"),
    ] },
  { id: "ikhlas", title: "Ikhlāṣ: sincerity", summary: "The marrow of worship: doing it for Allah alone.", sources: [credit("27–39"), "Quran 39:2–3", "Muslim 2985"],
    blocks: [
      { type: "p", text: "Ikhlāṣ means to purify and make pure. The book gathers the scholars’ definitions: intending only Allah in worship; purifying the heart of everything that clouds it; heart, tongue and deed being free of anything mixed in." },
      { type: "points", title: "Key points", items: [
        "“So worship Allah, making the religion sincerely His. Indeed, the pure religion is Allah’s” (39:2–3).",
        "In a ḥadīth qudsī, Allah says He is the most free of need of partners: whoever does a deed associating someone else with Him, He leaves him and his partnership (Muslim 2985).",
        "Sincerity means living and acting as though you see Allah.",
      ] },
      { type: "link", href: "/learn/ruhiy/riya", label: "Riyāʾ: showing off", text: "Sincerity’s opposite is covered in Volume 1." },
      read("27–39"),
    ] },
  { id: "sidq", title: "Ṣidq: truthfulness with Allah", summary: "Truthfulness is the root; sincerity is its branch.", sources: [credit("39–50")],
    blocks: [
      { type: "p", text: "Ṣidq carries the meaning of strength: falsehood is weak because it is false, and truth is strong. Al-Rāghib defined it as speech matching both the conscience and the reality it describes." },
      { type: "p", text: "Asked whether truthfulness and sincerity are the same, al-Junayd answered that truthfulness is the root and sincerity is the branch: truthfulness underlies everything, sincerity begins once deeds begin, and no deed is accepted without both." },
      { type: "points", title: "Three kinds of truthfulness", items: [
        "In speech: words that match one’s deeds.",
        "In action: deeds that match what Allah commanded.",
        "In one’s state: a heart without doubt in belief or flaws mixed into action.",
      ] },
      read("39–50"),
    ] },
  { id: "zuhd", title: "Zuhd: detachment", summary: "Turning from something good to something better.", sources: [credit("50–79")],
    blocks: [
      { type: "p", text: "Zuhd means turning away from the world, wealth, status and position. The book quotes Imam al-Ghazālī: zuhd is when desire turns away from one thing toward something better. Turning away from something you never wanted is not zuhd." },
      { type: "points", title: "Its levels and rulings", items: [
        "Detachment from the ḥarām: an obligation on everyone.",
        "From doubtful things: necessary or recommended, depending on how strong the doubt is.",
        "From excess: excess talk, looking and asking, and even detachment from people and from oneself for Allah’s sake.",
        "Complete detachment: everything other than Allah.",
      ] },
      read("50–79"),
    ] },
  { id: "tawakkul", title: "Tawakkul: trust in Allah", summary: "Relying on Allah while taking the means He made.", sources: [credit("79–94"), "Tirmidhi 2344", "Tirmidhi 2517"],
    blocks: [
      { type: "p", text: "Tawakkul comes from appointing an agent: relying on another where you are unable yourself. The book cites Ibn Rajab: sincerely relying on Allah to bring benefit and repel harm in this world and the next, believing no one else can give, withhold, harm or benefit." },
      { type: "p", text: "Taking the means is part of tawakkul, not against it: eating when hungry, dressing when cold, sowing seed for a harvest. The believer does all of this while relying on Allah, not on the means." },
      { type: "points", title: "From the Sunnah", items: [
        "If you relied on Allah as He deserves, He would provide for you as He provides for the birds: they leave hungry in the morning and return full (Tirmidhi 2344).",
        "“Tie it, and rely on Allah” (Tirmidhi 2517): trust and effort go together.",
      ] },
      read("79–94"),
    ] },
  { id: "mahabbah", title: "The love of Allah", summary: "Ten causes that bring Allah’s love.", sources: [credit("94–124"), "Quran 3:31", "Bukhari 6502"],
    blocks: [
      { type: "p", text: "“Say: if you love Allah, follow me, and Allah will love you” (3:31). In a ḥadīth qudsī, Allah says His servant keeps drawing near with voluntary deeds after the obligations until He loves him (Bukhari 6502)." },
      { type: "points", title: "The ten causes of Allah’s love, as the book lists them", items: [
        "Reciting the Quran with reflection and understanding.",
        "Drawing near with voluntary worship after completing the obligations.",
        "Constant remembrance with tongue, heart, deeds and state.",
        "Putting what He loves before what you love when desire is strong.",
        "Coming to know His names and attributes.",
        "Witnessing His favours, open and hidden.",
        "A heart fully broken before Him.",
        "Being alone with Him in the last third of the night: prayer, recitation, istighfār and repentance.",
        "Sitting with those who truly love Him.",
        "Keeping away from everything that comes between the heart and Allah.",
      ] },
      read("94–124"),
    ] },
  { id: "khawf-raja", title: "Fear and hope (khawf and rajāʾ)", summary: "Two wings that carry the believer to Allah.", sources: [credit("107–147"), "Quran 32:16", "Quran 39:53"],
    blocks: [
      { type: "p", text: "The book quotes Imam al-Ghazālī: hope and fear are the two wings on which those brought near fly to every station, and the mount that crosses the hard passes on the road to the Hereafter." },
      { type: "points", title: "Key points", items: [
        "When an awaited thing is disliked, the heart feels pain: that is fear. When it is loved, the heart feels ease: that is hope.",
        "True hope needs a cause: hoping for Paradise while doing nothing is wishful thinking.",
        "Fear is the rein between the servant and Allah, keeping him from sin.",
        "The believers call on their Lord in fear and hope (32:16), and never despair of His mercy (39:53).",
      ] },
      read("107–147"),
    ] },
  { id: "taqwa", title: "Taqwā and waraʿ", summary: "Walking carefully through a field of thorns.", sources: [credit("136–199")],
    blocks: [
      { type: "p", text: "Taqwā comes from a word meaning to guard and protect oneself. The book warns against a one-sided picture of taqwā as withdrawing from life into a dark room of worship. It is guarding oneself from sin and doing good deeds abundantly." },
      { type: "p", text: "When ʿUmar (ra) was asked about taqwā, he likened it to how the Arabs cross a thorny field barefoot, stepping carefully to avoid the thorns. Sins are those thorns; whoever is careful of them has taqwā, and it becomes a state of the heart that is always aware of Allah." },
      { type: "points", title: "Key points", items: [
        "Al-Rāghib: taqwā is protecting the soul from sin by leaving what is forbidden, and it is perfected by leaving some of what is permitted.",
        "Waraʿ (scrupulousness) is the next step: avoiding doubtful things out of caution for one’s religion.",
      ] },
      read("136–199"),
    ] },
  { id: "shukr", title: "Shukr: gratitude", summary: "Knowledge, state and action together.", sources: [credit("199–212"), "Quran 14:7"],
    blocks: [
      { type: "p", text: "Like the other stations, the book teaches, gratitude is made of knowledge, a state of the heart, and action." },
      { type: "points", title: "The three parts", items: [
        "Knowledge: knowing the blessing, that it is a blessing, and that it comes from Allah alone; the means are only servants He made subject to us.",
        "State: the joy in the heart at the Giver, not only at the gift.",
        "Action: using the blessing in what pleases the Giver.",
      ] },
      { type: "p", text: "“If you are grateful, I will surely give you more” (14:7)." },
      read("199–212"),
    ] },
  { id: "sabr", title: "Ṣabr: patience", summary: "Its stations, rulings and levels.", sources: [credit("212–245"), "Muslim 2999"],
    blocks: [
      { type: "points", title: "Three stations of patience", items: [
        "Leaving desires: the level of the repentant.",
        "Contentment with what is decreed: the level of the detached.",
        "Loving what the Lord chooses: the level of the truthful (ṣiddīqīn).",
      ] },
      { type: "points", title: "Patience has rulings too", items: [
        "Obligatory: patience in keeping away from what is forbidden.",
        "Recommended: patience with what is disliked.",
        "Forbidden: patience in the face of oppression that one should resist, such as someone attacking you or your family.",
      ] },
      { type: "p", text: "The measure of patience is the Sharīʿah. Everything that reaches a person either suits his desires or goes against them, and both need patience. The believer’s affair is all good: grateful in ease, patient in hardship (Muslim 2999)." },
      read("212–245"),
    ] },
  { id: "rida", title: "Riḍā: contentment with Allah", summary: "Higher than patience: the summit of faith.", sources: [credit("245–277"), "Muslim 34"],
    blocks: [
      { type: "p", text: "The book places riḍā above patience. Patience is bearing hardship by effort; contentment is when a heart filled with love of Allah no longer feels the pain, or feels it but is pleased anyway, like a traveller who ignores the hardships of a profitable journey." },
      { type: "points", title: "Key points", items: [
        "Patience is part of faith; contentment is its highest degree.",
        "Whoever is pleased with Allah as Lord, Islam as religion and Muhammad ﷺ as messenger has tasted the sweetness of faith (Muslim 34).",
        "Making duʿāʾ does not contradict contentment: asking Allah is itself obedience.",
      ] },
      read("245–277"),
    ] },
  { id: "tawbah", title: "Tawbah: repentance", summary: "Knowledge, regret, and leaving the sin: past, present and future.", sources: [credit("289–330"), "Quran 66:8", "Muslim 2702"],
    blocks: [
      { type: "points", title: "The reality of repentance, in three parts", items: [
        "Knowledge: knowing how great the harm of sin is, and that it is a wall between the servant and what he loves.",
        "State: the regret that this knowledge produces in the heart.",
        "Action: leaving the sin now, resolving never to return to it, and making up for the past by repentance, expiation and making up missed obligations.",
      ] },
      { type: "p", text: "Whoever does not see sin as what distances him from the Beloved will not repent. Allah calls the believers to sincere repentance (66:8), and the Prophet ﷺ sought forgiveness a hundred times a day (Muslim 2702)." },
      { type: "link", href: "/learn/duas/forgiveness", label: "Sayyid al-Istighfār", text: "Learn the master duʿāʾ of seeking forgiveness." },
      read("289–330"),
    ] },
  { id: "iffah", title: "ʿIffah: chastity and self-restraint", summary: "The balance between excess and deadness of desire.", sources: [credit("330–356"), "Quran 24:33"],
    blocks: [
      { type: "p", text: "ʿIffah means holding back from what is shameful. The book gathers definitions: a settled state of the soul that keeps desire from taking over; restraint from what is not lawful and beautiful; moderation in every pleasure." },
      { type: "points", title: "Key points", items: [
        "It is the middle way between indulgence and an unnatural absence of desire.",
        "Imam al-Māwardī counted chastity among the conditions of honour (murūʾah) and described two kinds: restraint from the unlawful, and restraint from what harms one’s dignity.",
        "Those who cannot yet marry are told to keep chaste until Allah enriches them (24:33).",
      ] },
      read("330–356"),
    ] },
  { id: "haya", title: "Ḥayāʾ: modesty", summary: "A branch of faith, inborn and acquired.", sources: [credit("356–394"), "Bukhari 9", "Bukhari 3562"],
    blocks: [
      { type: "p", text: "Ḥayāʾ is a character that moves a person to do what is beautiful and leave what is ugly, and stops him from falling short in anyone’s rights." },
      { type: "points", title: "Two kinds of modesty", items: [
        "Inborn: shyness that is part of human nature.",
        "Acquired: modesty out of faith, refraining from the forbidden out of awe of Allah. This is the modesty counted as a branch of faith (Bukhari 9).",
        "The Prophet ﷺ had both: he was shyer than a young woman behind her curtain (Bukhari 3562).",
        "The book warns that sins drain away modesty.",
      ] },
      read("356–394"),
    ] },
  { id: "taammul", title: "Taʾammul: contemplation", summary: "Looking slowly and carefully, to take a lesson.", sources: [credit("394–436"), "Quran 3:190", "Quran 88:17–20"],
    blocks: [
      { type: "p", text: "Taʾammul is looking closely and repeatedly at creation in order to be reminded and learn. The book distinguishes three related words:" },
      { type: "points", items: [
        "Tafakkur: the mind reasoning through evidence.",
        "Tadabbur: looking ahead to the outcome of things.",
        "Taʾammul: looking unhurriedly and repeatedly to take a lesson.",
      ] },
      { type: "p", text: "The Quran calls us to look at the heavens and the earth (3:190), and at the camel, the sky, the mountains and the earth (88:17–20)." },
      read("394–436"),
    ] },
  { id: "taanni", title: "Taʾannī: not rushing", summary: "Patience and gentleness in pursuing things.", sources: [credit("436–451"), "Quran 7:150", "Muslim 17"],
    blocks: [
      { type: "p", text: "Taʾannī is not rushing: giving a matter time and handling it gently. The book draws a lesson from Mūsā returning to his people in anger and seizing his brother Hārūn, who explained what had really happened (7:150)." },
      { type: "p", text: "The Prophet ﷺ praised a companion for two qualities Allah loves: forbearance and deliberation (Muslim 17)." },
      read("436–451"),
    ] },
  { id: "tabayyun", title: "Tabayyun: verifying before acting", summary: "Make sure, before you speak or act.", sources: [credit("451–469"), "Quran 49:6", "Quran 4:94"],
    blocks: [
      { type: "p", text: "Tabayyun means making something clear: checking that news is true before acting on it. Acting without clarity, in word or deed, leads to bad consequences. The book notes about fifteen verses on this." },
      { type: "points", items: [
        "If a wrongdoer brings you news, verify it, lest you harm people out of ignorance and then regret it (49:6).",
        "When you go out in Allah’s path, verify, and do not reject someone’s greeting of peace out of worldly motives (4:94).",
        "Today this means checking messages and news before forwarding them.",
      ] },
      { type: "link", href: "/mizan", label: "Myth Check", text: "See popular claims checked against authentic sources in Mizan." },
      read("451–469"),
    ] },
  { id: "salah-righteousness", title: "Ṣalāḥ: righteousness", summary: "Walking the path of guidance, fulfilling the rights of Allah and people.", sources: [credit("469–495")],
    blocks: [
      { type: "p", text: "Ṣalāḥ is the opposite of corruption, and the book suggests “maturity” as its closest meaning. Al-Kafawī defined it as walking the path of guidance and standing upright in what the Sharīʿah and reason require." },
      { type: "points", title: "Key points", items: [
        "The righteous person fulfils both Allah’s rights and people’s rights, in their proper place.",
        "Complete righteousness is the furthest rank of the believers, and something the prophets themselves asked Allah for.",
        "It is beauty of conduct in religion and goodness, not beauty of appearance.",
      ] },
      read("469–495"),
    ] },
];

export const RUHIY2_QUIZ = {
  id: "ruhiy-2", title: "Spiritual Education 2", sub: "Ruhiy tarbiya, volume 2", icon: "learn" as const,
  learn: ["Questions are based on the lessons summarised from Ruhiy tarbiya, 2-juz by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "According to al-Junayd, how are truthfulness (ṣidq) and sincerity (ikhlāṣ) related?", options: ["They are identical", "Truthfulness is the root; sincerity is the branch", "Sincerity is the root; truthfulness is the branch", "They are unrelated"], answer: 1, why: "Truthfulness underlies everything; sincerity begins once deeds begin, and no deed is accepted without both.", src: credit("39–50") },
    { q: "In the ḥadīth qudsī in Muslim 2985, what happens to a deed done for Allah and someone else?", options: ["It gets half the reward", "Allah leaves the person and his partnership", "It is accepted anyway", "It is rewarded double"], answer: 1, why: "Allah is the most free of need of partners.", src: "Muslim 2985" },
    { q: "How does Imam al-Ghazālī define zuhd?", options: ["Owning nothing", "Desire turning from one thing to something better", "Living in the mountains", "Fasting every day"], answer: 1, why: "Turning from something you never wanted is not zuhd.", src: credit("50–79") },
    { q: "Does taking the means (working, sowing seed) contradict tawakkul?", options: ["Yes, true trust means doing nothing", "No, taking the means while relying on Allah is part of tawakkul", "Only for scholars", "Only in Ramadan"], answer: 1, why: "“Tie it, and rely on Allah” (Tirmidhi 2517).", src: credit("79–94") },
    { q: "Which verse says “If you love Allah, follow me, and Allah will love you”?", options: ["2:255", "3:31", "18:10", "112:1"], answer: 1, why: "Āl ʿImrān 3:31.", src: "Quran 3:31" },
    { q: "Imam al-Ghazālī called fear and hope…", options: ["Two enemies", "Two wings", "Two diseases", "Two veils"], answer: 1, why: "The two wings on which those brought near fly to every station.", src: credit("107–147") },
    { q: "How did ʿUmar (ra) describe taqwā?", options: ["Praying all night", "Crossing a thorny field barefoot, stepping carefully", "Leaving all work", "Speaking softly"], answer: 1, why: "Sins are the thorns; taqwā is being careful of them.", src: credit("136–199") },
    { q: "Which is higher, according to the book: patience or contentment (riḍā)?", options: ["Patience", "Contentment", "They are equal", "Neither"], answer: 1, why: "Patience is part of faith; contentment is its highest degree.", src: credit("245–277") },
    { q: "Which of these is NOT one of the three parts of repentance?", options: ["Knowledge of the harm of sin", "Regret", "Leaving the sin and resolving not to return", "Telling everyone about the sin"], answer: 3, why: "Repentance is knowledge, regret and action. Sins are concealed, not announced.", src: credit("289–330") },
    { q: "What does tabayyun teach us to do?", options: ["Forward news quickly", "Verify news before acting on it", "Ignore all news", "Only trust friends"], answer: 1, why: "If a wrongdoer brings you news, verify it (49:6).", src: "Quran 49:6" },
  ],
};
