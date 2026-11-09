import type { Lesson } from "./library";

// Spiritual Education: lessons based on "Ruhiy tarbiya, 1-juz" by Shaykh
// Muhammad Sodik Muhammad Yusuf (Hilol-Nashr). Every lesson is a short summary
// in our own words with page references, not a reproduction of the book.
// Readers are pointed to the full book. Publisher permission is needed before
// adding the book's own text or audio.

export const RUHIY_BOOK = {
  title: "Ruhiy tarbiya, 1-juz",
  author: "Shaykh Muhammad Sodik Muhammad Yusuf",
  publisher: "Hilol-Nashr",
  url: "https://mutolaa.com/uz/reader/ruhiy-tarbiya-1-juz",
};

const credit = (pages: string) => `${RUHIY_BOOK.title}, pp. ${pages}`;
const read = (pages: string) => ({ type: "link" as const, href: RUHIY_BOOK.url, label: "Read in the book", text: `This lesson summarises ${credit(pages)}. Read the full chapter, with all its evidence and stories, in the Shaykh’s own words.` });

export const RUHIY_LESSONS: Lesson[] = [
  { id: "nafs", title: "The nafs and its purification (tazkiyah)", summary: "Three states of the soul, and why purifying it is the work of the prophets.", sources: [credit("1–21"), "Quran 89:27–30", "Quran 75:2", "Quran 12:53", "Quran 2:129", "Quran 91:7–10"],
    blocks: [
      { type: "p", text: "The Shaykh opens by explaining that the Quran describes the nafs (the self) in three states, and that a person moves between them. Sins, hypocrisy, arrogance, lying and envy stain it, so it needs constant purifying and nurturing." },
      { type: "points", title: "The three states of the nafs", items: [
        "An-nafs al-muṭmaʾinnah, the soul at peace: it has won its struggle with desires and is called to return to its Lord, well-pleased and pleasing (89:27–30).",
        "An-nafs al-lawwāmah, the self-reproaching soul: the believer’s conscience, which blames him after a sin and urges him to do more after a good deed (75:2).",
        "An-nafs al-ammārah bis-sūʾ, the soul that commands evil, unless Allah has mercy (12:53).",
      ] },
      { type: "p", text: "Tazkiyah means both purifying and growing. It was one of the missions of the Prophet ﷺ, named in the duʿāʾ of Ibrāhīm (2:129) beside reciting the verses and teaching the Book and wisdom. “Whoever purifies it has succeeded, and whoever corrupts it has failed” (91:9–10)." },
      { type: "points", title: "The three aims of purification, as the book sets them out", items: [
        "Putting right one’s relationship with Allah: repentance, gratitude, istighfār, trust, love and humility.",
        "Putting right one’s relationship with oneself: knowing oneself and taking off the cloak of arrogance.",
        "Putting right one’s relationship with others: tolerance, good conduct, humility and forgiveness.",
      ] },
      read("1–21"),
    ] },
  { id: "heart", title: "Healing the heart (ṭibb al-qulūb)", summary: "The heart is the king of the body; its health decides everything else.", sources: [credit("14–29"), "Bukhari 52, Muslim 1599", "Quran 10:57"],
    blocks: [
      { type: "p", text: "Medicine has two branches: medicine of the body and medicine of the heart. The book explains that the scholars of spiritual training treated the heart the way doctors treat the body, studying when it is healthy, when it is sick, and how it heals." },
      { type: "p", text: "The foundation is the hadith that there is a morsel of flesh in the body: if it is sound the whole body is sound, and if it is corrupt the whole body is corrupt, and it is the heart (Bukhari 52, Muslim 1599). The Quran calls itself a healing for what is in the chests (10:57)." },
      { type: "points", title: "Key points", items: [
        "“Qalb” comes from a word meaning to turn over, because the heart is always changing.",
        "There is the physical heart, and the inner heart that understands and makes us human. Spiritual training is about the inner heart.",
        "Like the body, the inner heart can be healthy, sick, or dead, so it needs care.",
        "The Prophet ﷺ is the imam of the physicians of the heart.",
      ] },
      read("14–29"),
    ] },
  { id: "khushu", title: "Khushūʿ and presence of heart in prayer", summary: "Prayer has a body and a soul; the soul is khushūʿ.", sources: [credit("70–88"), "Quran 23:1–2", "Abu Dawud 425"],
    blocks: [
      { type: "p", text: "The book teaches that prayer has obligatory, necessary and sunnah parts, and also a soul: intention, sincerity, khushūʿ and presence of heart. Khushūʿ is described as awe joined with stillness. Only prayer with khushūʿ purifies the heart." },
      { type: "p", text: "Allah says the believers who succeed are those humble in their prayer (23:1–2). The Prophet ﷺ promised forgiveness to whoever prays the five prayers on time with good wuḍūʾ and complete rukūʿ and khushūʿ (Abu Dawud 425)." },
      { type: "points", title: "How to bring the heart into prayer", items: [
        "Understand what you are saying. If you don’t know Arabic, learn the meanings of what you recite.",
        "Cut off outer distractions: stand close to the qibla, look at the place of sajdah, avoid busy or decorated places.",
        "Cut off inner distractions by settling worries before you start.",
        "Presence of heart follows concern (himmah): what you value, your heart attends to. Weak presence is a sign to strengthen faith in the Hereafter.",
      ] },
      { type: "p", text: "The book recalls the salaf: one companion stood so still that birds landed on him in sajdah, and ʿUrwah ibn al-Zubayr asked that his leg be amputated while he prayed." },
      read("70–88"),
    ] },
  { id: "dhikr", title: "Dhikr: remembering Allah", summary: "After reciting the Quran, the best worship of the tongue.", sources: [credit("136–152"), "Quran 2:152", "Quran 33:41–42", "Quran 20:124", "Bukhari 7405"],
    blocks: [
      { type: "p", text: "Dhikr is one of the strongest means of purifying the soul. The book explains that it is with both the tongue and the heart: remembering Allah’s names and attributes, reciting His Book, praising, thanking and calling on Him." },
      { type: "points", title: "What the Quran says", items: [
        "“Remember Me, and I will remember you” (2:152). Allah needs nothing; the benefit is entirely ours.",
        "“Remember Allah often, and glorify Him morning and evening” (33:41–42).",
        "Whoever turns away from His remembrance will have a narrow, straitened life (20:124): never satisfied, however much they have.",
        "In a ḥadīth qudsī, Allah says: whoever remembers Me in himself, I remember him in Myself; whoever remembers Me in a gathering, I remember him in a better gathering (Bukhari 7405).",
      ] },
      { type: "p", text: "Remembrance is a constant awareness that Allah is watching, which keeps a person from forgetting His commands." },
      { type: "link", href: "/mizan", label: "Open Mizan", text: "Learn the dhikr that are heaviest on the scale, with a private counter." },
      read("136–152"),
    ] },
  { id: "tafakkur", title: "Tafakkur: reflection", summary: "Dhikr and reflection together bring the mind to completion.", sources: [credit("180–197"), "Quran 3:190–191", "Quran 10:24"],
    blocks: [
      { type: "p", text: "Tafakkur means deep thinking. The book notes that the Quran urges reflection again and again, and that the people of understanding join remembrance with reflection: they remember Allah standing, sitting and lying down, and reflect on the creation of the heavens and the earth (3:190–191)." },
      { type: "points", title: "Key points", items: [
        "Dhikr without reflection, or reflection without dhikr, is incomplete.",
        "Reflecting on creation shows it was not made in vain, which leads to the certainty that our deeds will be accounted for.",
        "The Quran compares this world to rain-fed crops that flourish and then suddenly dry up (10:24): a lesson for those who reflect.",
      ] },
      read("180–197"),
    ] },
  { id: "death", title: "Remembering death", summary: "Forgetting death opens the door to every sin.", sources: [credit("197–209"), "Quran 62:8", "Quran 67:2"],
    blocks: [
      { type: "p", text: "The book counts remembering death among the most important means of purification. People drift into wrongdoing because they forget that they will die, be questioned in the grave, be raised, and enter Paradise or Hell." },
      { type: "points", title: "Key points", items: [
        "The death you flee from will meet you, and you will be told what you used to do (62:8).",
        "Allah created death and life to test which of us is best in deeds (67:2). Death is mentioned first, the book notes, to urge us toward good deeds.",
        "Whoever remembers death prepares for it, so that he is not put to shame after it.",
      ] },
      read("197–209"),
    ] },
  { id: "murabata", title: "Murābaṭah: six stations of self-discipline", summary: "Keeping the soul to obedience every day, step by step.", sources: [credit("209–222"), "Quran 4:1"],
    blocks: [
      { type: "p", text: "The book describes murābaṭah as reining in the soul in obedience to Allah, steadily and in order. It compares the intellect to a merchant on the road to the Hereafter, with the soul as its business partner: the profit sought is a purified soul." },
      { type: "points", title: "The six stations", items: [
        "Mushāraṭah (setting terms): after Fajr, tell your soul that your lifetime is your only capital, and you are investing part of it today.",
        "Murāqabah (watchfulness): watch the soul closely all day, knowing Allah is watching over you (4:1).",
        "Muḥāsabah (accounting): review the day honestly before sleep.",
        "Muʿāqabah (consequence): give the soul a fitting penalty when it falls short.",
        "Mujāhadah (striving): push it to make up with extra good deeds.",
        "Muʿātabah (reproach): reproach the soul so it does not grow comfortable with its faults.",
      ] },
      { type: "p", text: "Try this: tomorrow after Fajr, set one clear intention for the day, and before sleep spend two minutes reviewing it." },
      read("209–222"),
    ] },
  { id: "tongue", title: "The afflictions of the tongue", summary: "Silence gathers the mind and protects the heart.", sources: [credit("258–303"), "Bukhari 6474", "Tirmidhi 2616"],
    blocks: [
      { type: "p", text: "The tongue has many afflictions, and the book says the easiest way to be safe from them is silence: it gathers one’s resolve and clears one’s thinking." },
      { type: "points", title: "Key points", items: [
        "The Prophet ﷺ guaranteed Paradise to whoever guards what is between his jaws and what is between his legs (Bukhari 6474).",
        "Muʿādh (ra) asked for a deed that leads to Paradise. After the pillars and doors of good, the Prophet ﷺ held his own tongue and said “Restrain this”, warning that people are thrown into the Fire because of what their tongues harvest (Tirmidhi 2616).",
        "Abu al-Dardāʾ (ra) advised speaking little and listening much: we were given one mouth and two ears.",
        "Later chapters of the book cover lying, backbiting, the backbiting of the heart, tale-carrying, and their cures.",
      ] },
      { type: "link", href: "/learn/akhlaq/speech", label: "Guarding the tongue", text: "Practise this with the Akhlaq lesson and its 7-day challenge." },
      read("258–303"),
    ] },
  { id: "riya", title: "Riyāʾ: showing off", summary: "The hidden shirk that empties deeds of their reward.", sources: [credit("380–399"), "Quran 2:264", "Quran 4:38", "Bukhari 2810, Muslim 1904"],
    blocks: [
      { type: "p", text: "The book defines riyāʾ, citing Ibn Ḥajar, as displaying worship so that people see it and praise the doer. The open shirk of idols is the gravest disease, and a believer who is free of it can still fall into hidden shirk: riyāʾ." },
      { type: "p", text: "Charity given to be seen is like soil on a smooth rock that heavy rain washes away, leaving nothing (2:264)." },
      { type: "points", title: "Its roots, as the book traces them", items: [
        "Love of the pleasure of praise.",
        "Running from the pain of criticism.",
        "Wanting what is in people’s hands.",
      ] },
      { type: "p", text: "When asked about a man who fights for pride, for bravery, or to be seen, the Prophet ﷺ said: whoever fights so that Allah’s word is highest is in the path of Allah (Bukhari, Muslim). The cure is to pull out the roots, and to push away riyāʾ whenever it appears." },
      read("380–399"),
    ] },
  { id: "hasad", title: "Ḥasad: envy", summary: "Envy eats the envier and never touches the envied.", sources: [credit("399–421"), "Quran 4:54", "Quran 113:5"],
    blocks: [
      { type: "p", text: "The book explains that ḥasad comes from a word meaning to peel or strip, because envy strips the heart. It is wishing that a blessing leave someone else and come to you." },
      { type: "points", title: "Envy versus admiration", items: [
        "Ḥasad: resenting another’s blessing and wanting it gone. It is a major sin.",
        "Ghibṭah (havas): being happy for someone and asking Allah for the same for yourself. It is not a sin.",
      ] },
      { type: "points", title: "The cure through knowledge", items: [
        "Envy harms your own religion and your own peace of mind.",
        "It cannot remove a blessing Allah has given; the blessing lasts as long as Allah decreed.",
        "It does not harm the envied person’s Hereafter. They gain from being wronged.",
        "We seek refuge from the envier when he envies (113:5).",
      ] },
      read("399–421"),
    ] },
  { id: "kibr", title: "Kibr: arrogance", summary: "Rejecting the truth and looking down on people.", sources: [credit("421–436"), "Muslim 91"],
    blocks: [
      { type: "p", text: "The Prophet ﷺ defined arrogance as rejecting the truth and looking down on people (Muslim 91). The book adds Imam al-Ghazālī’s description: considering oneself great and above others, which he called the key to misery." },
      { type: "points", title: "Seven things people grow arrogant about", items: ["Knowledge", "Good deeds and worship", "Lineage", "Beauty", "Strength", "Wealth", "Many followers and supporters"] },
      { type: "points", title: "The cure", items: [
        "Through knowledge: know yourself, your weakness and need, and know your Lord, to whom alone greatness belongs.",
        "Through action: practise humility with Allah, and treat people with the manners of the Prophet ﷺ and the righteous.",
        "Removing arrogance is a personal obligation (farḍ ʿayn), and it takes steady, patient work.",
      ] },
      read("421–436"),
    ] },
  { id: "qanaah", title: "Greed and contentment (qanāʿah)", summary: "Hope in Allah is good; craving what people own is poverty.", sources: [credit("456–472"), "Quran 26:82", "Quran 32:16"],
    blocks: [
      { type: "p", text: "The book explains ṭamaʿ as the soul attaching itself to something with desire. A Muslim does not crave wealth or covet what others own; he is content with what he needs." },
      { type: "points", title: "Two kinds of ṭamaʿ", items: [
        "Praiseworthy: hoping for Allah’s mercy, like Ibrāhīm hoping to be forgiven on the Day of Judgment (26:82), and those who call on their Lord in fear and hope (32:16).",
        "Blameworthy: craving the passing things of this world.",
      ] },
      { type: "p", text: "ʿUmar (ra) said that greed is poverty and not being greedy is wealth." },
      read("456–472"),
    ] },
  { id: "ghadab", title: "Misplaced anger and its cure", summary: "Seek refuge, change your position, and calm the fire.", sources: [credit("488–500"), "Bukhari 6115", "Abu Dawud 4782", "Abu Dawud 4784"],
    blocks: [
      { type: "p", text: "The book gives practical remedies for anger from the Sunnah." },
      { type: "points", title: "What to do when angry", items: [
        "Say “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm”. The Prophet ﷺ said these words would remove a man’s anger (Bukhari 6115).",
        "If you are standing, sit down; if it does not pass, lie down (Abu Dawud 4782).",
        "Make wuḍūʾ: the book cites the narration that anger is from Shayṭān, Shayṭān is made of fire, and fire is put out with water (Abu Dawud 4784; scholars differ on its chain).",
      ] },
      { type: "link", href: "/learn/akhlaq/anger", label: "Controlling anger", text: "Practise with the Akhlaq lesson and its challenge." },
      read("488–500"),
    ] },
  { id: "dunya", title: "The love of this world", summary: "What of this world goes with you, and what stays behind.", sources: [credit("500–513")],
    blocks: [
      { type: "p", text: "The book says it is no use condemning “the world” until we know what it is. This world is everything before death; the Hereafter is what comes after it. Not every share of this world is blameworthy." },
      { type: "points", title: "Three kinds of worldly things", items: [
        "What goes with you to the Hereafter: knowledge of Allah and His religion, and deeds done sincerely for Him. These are not the blameworthy world.",
        "What is pure worldly pleasure with no benefit for the Hereafter. Excess here is what is blamed.",
        "What is needed to live and worship. Taking it with the right intention is part of the path to the Hereafter.",
      ] },
      { type: "p", text: "Some scholars found such joy in knowledge, and some worshippers in prayer, that it became the sweetest thing in their lives." },
      read("500–513"),
    ] },
];

export const RUHIY_QUIZ = {
  id: "ruhiy", title: "Spiritual Education 1", sub: "Ruhiy tarbiya, volume 1", icon: "learn" as const,
  learn: ["Questions are based on the lessons summarised from Ruhiy tarbiya, 1-juz by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "What does “tazkiyah” mean?", options: ["Only cleaning the body", "Purifying and also growing the soul", "Memorising the Quran", "Giving charity"], answer: 1, why: "The word means both to purify and to grow: freeing the soul from its diseases and adorning it with good qualities.", src: credit("1–14") },
    { q: "Which nafs blames its owner after a sin and urges more good after a good deed?", options: ["An-nafs al-muṭmaʾinnah", "An-nafs al-lawwāmah", "An-nafs al-ammārah", "None of these"], answer: 1, why: "The self-reproaching soul, the believer’s conscience (Quran 75:2).", src: credit("1–14") },
    { q: "According to the hadith, if one organ is sound the whole body is sound. Which is it?", options: ["The tongue", "The brain", "The heart", "The eyes"], answer: 2, why: "Bukhari 52, Muslim 1599.", src: credit("14–29") },
    { q: "How does the book describe khushūʿ?", options: ["Praying quickly", "Awe joined with stillness", "Reciting loudly", "Praying only at night"], answer: 1, why: "Khushūʿ is fear and awe combined with stillness, and it is the soul of the prayer.", src: credit("70–88") },
    { q: "What does Allah promise in “Remember Me…” (2:152)?", options: ["Wealth", "That He will remember you", "A long life", "Fame"], answer: 1, why: "“Remember Me, and I will remember you.”", src: "Quran 2:152" },
    { q: "Which station of murābaṭah is setting terms with your soul after Fajr?", options: ["Muḥāsabah", "Murāqabah", "Mushāraṭah", "Muʿātabah"], answer: 2, why: "Mushāraṭah: telling the soul that your lifetime is your only capital, invested a day at a time.", src: credit("209–222") },
    { q: "What is the difference between ḥasad and ghibṭah (havas)?", options: ["There is none", "Ḥasad wants the blessing removed; ghibṭah wishes for the same without resentment", "Ghibṭah is worse than ḥasad", "Ḥasad is only about money"], answer: 1, why: "Envy wants the blessing gone from the other person; admiration is happy for them and asks Allah for the same.", src: credit("399–421") },
    { q: "How did the Prophet ﷺ define kibr (arrogance)?", options: ["Wearing nice clothes", "Rejecting the truth and looking down on people", "Being wealthy", "Speaking confidently"], answer: 1, why: "Muslim 91.", src: credit("421–436") },
    { q: "Which of these is NOT one of the roots of riyāʾ named in the book?", options: ["Love of praise", "Fear of criticism", "Wanting what is in people’s hands", "Love of knowledge"], answer: 3, why: "The three roots are love of praise, fleeing criticism, and coveting what people own.", src: credit("380–399") },
    { q: "What is the first remedy the Prophet ﷺ taught for anger?", options: ["Shouting it out", "Saying “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm”", "Leaving the house", "Fasting"], answer: 1, why: "Bukhari 6115. Then sit or lie down (Abu Dawud 4782).", src: credit("488–500") },
  ],
};
