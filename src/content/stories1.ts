import type { Block } from "./library";

// Story cards, part 1: Akhlaq & Adab. Retold in our own words from ṣaḥīḥ and
// ḥasan narrations (or the Sīrah, labelled as such). Each ends with a lesson
// and a quick-check question. A scholar should review before release.
export type Story = Extract<Block, { type: "story" }>;
const P = "From the life of the Prophet ﷺ";
const C = "From the Companions";
const N = "From the earlier nations";

export const STORIES_1: Record<string, Story[]> = {
  "akhlaq/truthfulness": [{ type: "story", id: "kab", kind: C, title: "Kaʿb ibn Mālik and the fifty days",
    scene: "Madinah, the year of the expedition to Tabūk. It was the hottest time of year, the fruit was ripe, and the journey was long.",
    story: [
      "Kaʿb ibn Mālik meant to go every day, and every day he put it off, until the army had left without him. He had no excuse: he had never been stronger or richer.",
      "When the Prophet ﷺ returned, more than eighty men who had stayed behind came with excuses and swore oaths. He accepted their outward words and left their hearts to Allah.",
      "Then Kaʿb came. He said: “By Allah, if I were sitting with anyone else I could talk my way out. But if I lie to you today, Allah will soon turn you against me. I had no excuse.” The Prophet ﷺ said: “This one has told the truth. Go until Allah decides about you.”",
      "For fifty days no Muslim spoke to him. A letter came from the king of Ghassān inviting him to come and be honoured; Kaʿb threw it in the oven. The earth, he said, felt narrow despite its vastness.",
      "On the fiftieth morning a voice called from Mount Salʿ: “Kaʿb ibn Mālik, glad tidings!” Allah had accepted his repentance in the Quran (9:118). Kaʿb said: “Allah saved me only through truthfulness, so part of my repentance is that I will only ever speak the truth.”",
    ],
    lesson: "The truth may cost you for a while; a lie costs you with Allah. Right after this story Allah revealed: “Fear Allah and be with the truthful” (9:119).",
    src: "Bukhari 4418, Muslim 2769",
    check: { q: "Why did Kaʿb’s repentance get accepted when others simply made excuses?", options: ["He paid a fine", "He told the truth even though it hurt him", "He left Madinah", "He fought harder later"], answer: 1, why: "“Allah saved me only through truthfulness.”" } }],

  "akhlaq/anger": [{ type: "story", id: "cloak", kind: P, title: "The pull on the cloak",
    scene: "Anas ibn Mālik was walking beside the Prophet ﷺ, who wore a cloak from Najrān with a thick, rough border.",
    story: [
      "A bedouin caught up with them, grabbed the cloak and pulled it so violently that Anas saw the border had left a mark on the side of the Prophet’s ﷺ neck.",
      "Then the man said: “Muhammad, order that I be given some of Allah’s wealth that you have!”",
      "The Prophet ﷺ turned to him, laughed, and ordered that he be given something.",
    ],
    lesson: "He had every right to be angry, and the power to punish. He chose a smile and a gift. That is ḥilm: strength held back.",
    src: "Bukhari 3149, Muslim 1057",
    check: { q: "How did the Prophet ﷺ respond to the man who hurt his neck?", options: ["He had him punished", "He turned, laughed and gave him something", "He walked away", "He scolded him"], answer: 1, why: "He met harshness with gentleness and generosity." } }],

  "akhlaq/gentleness": [{ type: "story", id: "masjid-bedouin", kind: P, title: "The man in the masjid",
    scene: "The Prophet’s ﷺ masjid in Madinah. A bedouin, new to Islam, walked in.",
    story: [
      "He went to a corner of the masjid and began to urinate. The companions jumped up and shouted at him.",
      "The Prophet ﷺ said: “Leave him. Do not interrupt him.” When the man had finished, he asked for a bucket of water to be poured over the place.",
      "Then he called the man and explained kindly that masjids are not for this; they are for the remembrance of Allah, prayer and the Quran.",
      "To his companions he said: “You were sent to make things easy, not to make them difficult.”",
    ],
    lesson: "A harsh correction would have shamed the man and perhaps driven him from Islam. A gentle one taught him for life.",
    src: "Bukhari 220, Muslim 285",
    check: { q: "What did the Prophet ﷺ tell the companions?", options: ["Throw him out", "Leave him, and you were sent to make things easy", "Fine him", "Ignore it forever"], answer: 1, why: "Gentleness teaches; harshness drives people away." } }],

  "akhlaq/generosity": [{ type: "story", id: "lamp", kind: C, title: "The lamp that went out",
    scene: "Madinah, the early years. A hungry man came to the Prophet ﷺ.",
    story: [
      "The Prophet ﷺ sent to his wives, and each replied: we have nothing but water. So he asked: “Who will host this man tonight?” A man of the Anṣār said: “I will.”",
      "At home his wife said: we have nothing except our children’s food. He said: give them something to distract them, and when they want dinner, put them to sleep.",
      "When the guest came in, she put out the lamp as if by accident, and the couple moved their hands and mouths in the dark as though eating, so that the guest would eat his fill without feeling he was taking their food. They went to bed hungry.",
      "In the morning the Prophet ﷺ said: “Allah was pleased with what you two did with your guest last night.” And Allah revealed: “They prefer others over themselves, even though they are in need” (59:9).",
    ],
    lesson: "The highest generosity is īthār: giving what you yourself need, and hiding it so the other person keeps his dignity.",
    src: "Bukhari 3798, Muslim 2054",
    check: { q: "Why did the couple put out the lamp?", options: ["To save oil", "So the guest would eat without knowing they had no food", "They were tired", "It was a custom"], answer: 1, why: "They protected the guest’s comfort and dignity." } }],

  "akhlaq/patience": [{ type: "story", id: "umm-sulaym", kind: C, title: "Umm Sulaym and the borrowed trust",
    scene: "The home of Abū Ṭalḥah and Umm Sulaym in Madinah. Their little son was ill, and Abū Ṭalḥah had gone out.",
    story: [
      "While he was away, the boy died. Umm Sulaym washed and wrapped him, laid him in a corner of the house, and told the family: do not tell Abū Ṭalḥah; I will tell him myself.",
      "When he came home and asked about the boy, she said: “He is calmer than he has been.” She served him dinner and made herself beautiful for him, and they spent the night together.",
      "Then she asked: “Abū Ṭalḥah, if people lent something to a family and then asked for it back, would they have the right to refuse?” He said no. She said: “Then hope for reward for your son.”",
      "He went to the Prophet ﷺ, who prayed that Allah bless their night. Allah gave them another son, ʿAbdullāh, and from him came nine children who all learned the Quran.",
    ],
    lesson: "Our children are a trust from Allah. Umm Sulaym met the hardest loss with patience, wisdom and care for her husband.",
    src: "Bukhari 5470, Bukhari 1301, Muslim 2144",
    check: { q: "What did Umm Sulaym compare her son to?", options: ["A gift to keep forever", "Something lent that the owner asked back", "A test of wealth", "A dream"], answer: 1, why: "He was a trust from Allah, and Allah took back what was His." } }],

  "akhlaq/forgiveness": [{ type: "story", id: "mistah", kind: C, title: "Abū Bakr and Misṭaḥ",
    scene: "Madinah, after the slander against ʿĀʾishah (ra), Abū Bakr’s daughter, had been cleared by revelation.",
    story: [
      "Misṭaḥ was a poor relative of Abū Bakr, who had long supported him with money. Yet Misṭaḥ had been among those who spread the slander against ʿĀʾishah.",
      "Hurt, Abū Bakr swore he would never again spend anything on Misṭaḥ.",
      "Then Allah revealed: “Let not those of virtue and wealth swear not to give to their relatives and the poor… Let them pardon and overlook. Do you not love that Allah should forgive you?” (24:22).",
      "Abū Bakr said: “Yes, by Allah, I love that Allah should forgive me,” and he restored the support to Misṭaḥ, saying he would never stop it.",
    ],
    lesson: "The pain was real and the wrong was serious. Abū Bakr forgave because he wanted Allah’s forgiveness more than he wanted to be right.",
    src: "Bukhari 4750",
    check: { q: "What question in 24:22 moved Abū Bakr to forgive?", options: ["“Do you not fear poverty?”", "“Do you not love that Allah should forgive you?”", "“Is he not your relative?”", "“Will you not be praised?”"], answer: 1, why: "He forgave hoping for Allah’s forgiveness." } }],

  "akhlaq/parents": [{ type: "story", id: "uways", kind: C, title: "Uways al-Qaranī, the man ʿUmar sought",
    scene: "The Prophet ﷺ told ʿUmar about a man he would never meet himself.",
    story: [
      "“A man called Uways will come to you with the reinforcements from Yemen, of the tribe of Murād and then of Qaran. He had leprosy and was cured of it except for a spot the size of a dirham. He has a mother to whom he is devoted. If he swore by Allah, Allah would fulfil it. If you can ask him to seek forgiveness for you, do so.”",
      "Uways had never met the Prophet ﷺ. He had a mother he was devoted to, and scholars mention that he stayed in Yemen to care for her.",
      "Years later, ʿUmar, now the khalīfah, asked every group from Yemen: is Uways ibn ʿĀmir among you? At last he found him, checked every sign, and asked him: seek forgiveness for me. And Uways did.",
    ],
    lesson: "Uways was devoted to his mother, and scholars mention it kept him from travelling to meet the Prophet ﷺ; and the Prophet ﷺ told the greatest of men to seek his duʿāʾ.",
    src: "Muslim 2542",
    check: { q: "What raised Uways so high in the Prophet’s ﷺ words?", options: ["His wealth", "His devotion to his mother", "His poetry", "His battles"], answer: 1, why: "Kindness to his mother made his duʿāʾ answered." } }],

  "akhlaq/speech": [{ type: "story", id: "muadh", kind: C, title: "Muʿādh and the harvest of the tongue",
    scene: "On a journey, Muʿādh ibn Jabal rode close to the Prophet ﷺ and asked a big question.",
    story: [
      "“Tell me of a deed that will take me into Paradise and keep me far from the Fire.” The Prophet ﷺ told him: worship Allah alone, pray, give zakāt, fast Ramadan, and perform Ḥajj.",
      "Then he told him of the doors of good: fasting is a shield, charity puts out sin as water puts out fire, and prayer in the depth of the night.",
      "Then he said: “Shall I tell you what holds all of this together?” He took hold of his own tongue and said: “Restrain this.”",
      "Muʿādh asked, surprised: “Will we really be held to account for what we say?” He replied: “Are people thrown on their faces into the Fire for anything more than the harvest of their tongues?”",
    ],
    lesson: "Prayer, fasting and charity can all be spoiled by an unguarded tongue. Guarding it protects everything else.",
    src: "Tirmidhi 2616",
    check: { q: "What did the Prophet ﷺ hold when he said “Restrain this”?", options: ["His hand", "His tongue", "His sword", "His cloak"], answer: 1, why: "The tongue controls the fate of all our deeds." } }],

  "akhlaq/young-old": [{ type: "story", id: "kiss", kind: P, title: "The kiss and the ten children",
    scene: "The Prophet ﷺ was holding his grandson al-Ḥasan, and kissed him.",
    story: [
      "Al-Aqraʿ ibn Ḥābis, a chief of his tribe, was sitting with him. He said: “I have ten children, and I have never kissed a single one of them.”",
      "The Prophet ﷺ looked at him and said: “Whoever does not show mercy will not be shown mercy.”",
    ],
    lesson: "Affection to children is not weakness or a lack of dignity. It is the mercy Allah rewards with mercy.",
    src: "Bukhari 5997, Muslim 2318",
    check: { q: "What did the Prophet ﷺ say to the man who never kissed his children?", options: ["“That is strong of you”", "“Whoever does not show mercy will not be shown mercy”", "“Children must fear you”", "Nothing"], answer: 1, why: "Mercy to children brings Allah’s mercy." } }],

  "akhlaq/family-ties": [{ type: "story", id: "hot-ashes", kind: P, title: "“As if you feed them hot ashes”",
    scene: "A man came to the Prophet ﷺ, frustrated with his family.",
    story: [
      "“Messenger of Allah, I have relatives. I keep ties with them and they cut me off. I treat them well and they treat me badly. I am patient with them and they are rude to me.”",
      "The Prophet ﷺ said: “If you are as you say, it is as if you are feeding them hot ashes, and you will always have a helper from Allah against them as long as you continue.”",
    ],
    lesson: "Keep the ties even when they are not returned. The burden falls on those who cut, and Allah stands with the one who keeps.",
    src: "Muslim 2558",
    check: { q: "What did the Prophet ﷺ promise the man who kept ties with difficult relatives?", options: ["They would change at once", "A helper from Allah, as long as he continued", "He could stop now", "Nothing"], answer: 1, why: "Allah supports the one who keeps ties." } }],

  "akhlaq/good-opinion": [{ type: "story", id: "usama", kind: C, title: "“Did you split open his heart?”",
    scene: "A battle. Usāmah ibn Zayd, still a young man, was chasing an enemy fighter.",
    story: [
      "As Usāmah raised his weapon, the man said: “Lā ilāha illa-llāh.” Usāmah struck and killed him anyway.",
      "When the Prophet ﷺ heard, he asked: “He said lā ilāha illa-llāh and you killed him?” Usāmah said: “He only said it out of fear of the weapon.”",
      "The Prophet ﷺ said: “Did you split open his heart to know whether he meant it?” He kept repeating it, until Usāmah wished he had only become Muslim that very day.",
    ],
    lesson: "We judge by what people show; their hearts belong to Allah. Never assume the worst about someone’s intention.",
    src: "Muslim 96, Bukhari 4269",
    check: { q: "What was the Prophet’s ﷺ point to Usāmah?", options: ["Battles have no rules", "We cannot see hearts; we judge by what is shown", "Words don’t matter", "He was right"], answer: 1, why: "Only Allah knows what is in hearts." } }],

  "akhlaq/haya": [{ type: "story", id: "uthman-haya", kind: C, title: "The man the angels are shy of",
    scene: "The Prophet ﷺ was resting at home, his shin uncovered.",
    story: [
      "Abū Bakr asked to come in, and the Prophet ﷺ let him in as he was. Then ʿUmar asked, and he let him in as he was, and they talked.",
      "Then ʿUthmān asked to come in. The Prophet ﷺ sat up and arranged his clothes.",
      "Afterwards ʿĀʾishah asked him why. He said: “Shall I not be shy before a man of whom the angels are shy?”",
    ],
    lesson: "ʿUthmān’s modesty was so deep that it shaped how even the Prophet ﷺ and the angels treated him. Modesty earns respect.",
    src: "Muslim 2401",
    check: { q: "Who are shy before ʿUthmān, according to this hadith?", options: ["The kings", "The angels", "The poets", "His enemies"], answer: 1, why: "His ḥayāʾ was so great that the angels were shy of him." } }],

  "akhlaq/humility": [{ type: "story", id: "dried-meat", kind: P, title: "“I am not a king”",
    scene: "A man came to speak with the Prophet ﷺ for the first time.",
    story: [
      "Standing before him, the man began to tremble with fear and awe.",
      "The Prophet ﷺ said: “Take it easy. I am not a king. I am only the son of a woman of Quraysh who used to eat dried meat.”",
    ],
    lesson: "The greatest of creation put a nervous stranger at ease by reminding him of his own humble roots.",
    src: "Ibn Majah 3312",
    check: { q: "How did the Prophet ﷺ calm the trembling man?", options: ["He gave him gold", "He said he was not a king, but the son of a woman who ate dried meat", "He left", "He ordered him to sit"], answer: 1, why: "Humility puts people at ease." } }],

  "akhlaq/gratitude": [{ type: "story", id: "three-men", kind: N, title: "The leper, the bald man and the blind man",
    scene: "Among the Children of Israel, Allah decided to test three men.",
    story: [
      "An angel came to a leper and asked what he wanted most: “Good colour and good skin.” He touched him, and he was cured and given a she-camel. The bald man asked for beautiful hair and was given a cow. The blind man asked for his sight and was given a sheep.",
      "Their animals multiplied until each had a valley full: of camels, of cows, of sheep.",
      "Years later, the angel came back to each in his old form: a poor traveller, cut off, asking in the name of Allah who had given them health and wealth. The first two said: I inherited all this from my forefathers. And they were returned to what they had been.",
      "The once-blind man said: “I was blind and Allah gave me back my sight. Take whatever you want, and leave whatever you want.” The angel said: keep your wealth. Allah is pleased with you and displeased with your two companions.",
    ],
    lesson: "Gratitude is remembering where you came from and who gave you what you have, and showing it by helping others.",
    src: "Bukhari 3464, Muslim 2964",
    check: { q: "Why was Allah pleased with the third man?", options: ["He was the richest", "He remembered Allah’s gift and gave generously", "He kept all his wealth", "He was the strongest"], answer: 1, why: "He was grateful, and his gratitude showed in giving." } }],

  "akhlaq/eating": [{ type: "story", id: "boy-dish", kind: C, title: "The boy whose hand wandered",
    scene: "ʿUmar ibn Abī Salamah, a young boy, grew up in the Prophet’s ﷺ home as his stepson.",
    story: [
      "At a meal, his hand kept wandering all around the dish.",
      "The Prophet ﷺ did not scold him. He said gently: “Young man, say Allah’s name, eat with your right hand, and eat from what is in front of you.”",
      "ʿUmar said, when he was grown: “That remained my way of eating ever after.”",
    ],
    lesson: "Three short instructions, said kindly, shaped a boy’s manners for life. That is how children learn adab.",
    src: "Bukhari 5376, Muslim 2022",
    check: { q: "What three things did the Prophet ﷺ teach the boy?", options: ["Eat fast, eat much, leave early", "Bismillāh, the right hand, from in front of you", "Stand, talk, share", "Wash, sit, sleep"], answer: 1, why: "The foundation of table manners." } }],

  "akhlaq/bed-sleep": [{ type: "story", id: "fatimah-servant", kind: P, title: "Better than a servant",
    scene: "The home of ʿAlī and Fāṭimah (ra). Her hands were blistered from grinding grain at the hand mill.",
    story: [
      "Fāṭimah went to her father ﷺ to ask for a servant from the captives that had come, but did not find him, and told ʿĀʾishah.",
      "That night he came to them when they had already gone to bed. They started to get up, and he said: stay where you are, and sat between them.",
      "He said: “Shall I not teach you something better than what you asked for? When you go to bed, say SubḥānAllāh thirty-three times, Al-ḥamdu lillāh thirty-three times, and Allāhu akbar thirty-four times. That is better for you than a servant.”",
      "ʿAlī said he never once left it after that.",
    ],
    lesson: "When life is heavy, dhikr before sleep gives a strength that help from people cannot.",
    src: "Bukhari 3705, Muslim 2727",
    check: { q: "What did the Prophet ﷺ give Fāṭimah instead of a servant?", options: ["Money", "Dhikr before sleep: 33, 33, 34", "A new mill", "A house"], answer: 1, why: "He taught them tasbīḥ, taḥmīd and takbīr before sleeping." } }],

  "akhlaq/salam": [{ type: "story", id: "adam-salam", kind: P, title: "The first greeting",
    scene: "The Prophet ﷺ told of the moment Allah created Ādam (as).",
    story: [
      "Allah said to Ādam: go and greet that group of angels sitting there, and listen to how they reply, for that will be your greeting and the greeting of your children.",
      "Ādam said: “As-salāmu ʿalaykum.” The angels replied: “As-salāmu ʿalayka wa raḥmatu-llāh.” They added “wa raḥmatu-llāh”.",
    ],
    lesson: "Salām is the oldest greeting of humanity, taught by Allah to the first human. When you greet, you continue what Ādam began, and you reply with more, as the angels did.",
    src: "Bukhari 3326, Muslim 2841",
    check: { q: "Who first greeted with “As-salāmu ʿalaykum”?", options: ["The Prophet ﷺ in Madinah", "Ādam (as), to the angels", "Ibrāhīm (as)", "The Companions"], answer: 1, why: "Allah taught it to Ādam as the greeting of his children." } }],

  "akhlaq/promises": [{ type: "story", id: "ali-trusts", kind: "From the Sīrah", title: "The trusts left behind on the night of the hijrah",
    scene: "Makkah, the night the Prophet ﷺ left for Madinah. Quraysh had surrounded his house, planning to kill him.",
    story: [
      "Even the people of Quraysh who rejected his message kept their valuables with him, because they knew him as al-Amīn, the trustworthy.",
      "That night, he asked ʿAlī (ra) to sleep in his bed under his green cloak, and to stay behind in Makkah for three days.",
      "ʿAlī’s task: return every trust to its owner, to the very people who were trying to kill the Prophet ﷺ. Only when that was done did ʿAlī follow him to Madinah.",
    ],
    lesson: "A trust must be returned even to an enemy. Your amānah does not depend on how others treat you.",
    src: "Sīrah of Ibn Hishām; al-Bayhaqī, al-Sunan al-Kubrā",
    check: { q: "To whom did ʿAlī return the trusts?", options: ["Only to Muslims", "To their owners, including those who opposed the Prophet ﷺ", "To the poor", "To nobody"], answer: 1, why: "Trusts are returned to their owners, friend or foe." } }],
};
