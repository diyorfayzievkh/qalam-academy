import type { Story } from "./stories1";

// Story cards, part 2: Spiritual Tarbiyah, Social Tarbiyah and Salah.
const P = "From the life of the Prophet ﷺ";
const C = "From the Companions";
const N = "From the earlier nations";
const Q = "From the Quran";
const S = "From the Sīrah";

export const STORIES_2: Record<string, Story[]> = {
  // ---------- Spiritual Tarbiyah ----------
  "ruhiy/riya": [{ type: "story", id: "first-judged", kind: P, title: "The first three to be judged",
    scene: "The Prophet ﷺ described the first people to be judged on the Day of Resurrection.",
    story: [
      "A man killed in battle is brought. Allah reminds him of His blessings, and he acknowledges them. “What did you do with them?” “I fought for You until I was killed.” “You lie. You fought so that people would say: how brave! And it was said.” He is dragged on his face into the Fire.",
      "A man who learned knowledge, taught it and recited the Quran is brought. “I learned and taught and recited for You.” “You lie. You learned so it would be said: a scholar! And you recited so it would be said: a reciter! And it was said.” He too is dragged to the Fire.",
      "A man Allah gave every kind of wealth is brought. “I left no good cause without spending in it for You.” “You lie. You spent so it would be said: how generous! And it was said.” And he is dragged to the Fire.",
    ],
    lesson: "The bravest, the most learned and the most generous deeds were empty because they were done for people. They got exactly what they wanted: people’s praise, and nothing more.",
    src: "Muslim 1905",
    check: { q: "Why were these three great deeds rejected?", options: ["They were too small", "They were done to be praised by people", "They were done late", "They were done in secret"], answer: 1, why: "They were done for people, and people’s praise was all they got." } }],

  "ruhiy-2/tawakkul": [{ type: "story", id: "thawr", kind: S, title: "Two in the cave, and Allah the third",
    scene: "The hijrah. The Prophet ﷺ and Abū Bakr hid in the cave of Thawr outside Makkah, with Quraysh searching every path for them.",
    story: [
      "The trackers climbed right up to the mouth of the cave. Abū Bakr could see their feet.",
      "He whispered: “Messenger of Allah, if one of them looked down at his feet, he would see us.”",
      "The Prophet ﷺ said: “Abū Bakr, what do you think of two whose third is Allah?” Allah recorded it: “Do not grieve; Allah is with us” (9:40). The searchers turned away.",
    ],
    lesson: "They had taken every means: a hidden route, a guide, a cave. Then they relied completely on Allah. That is tawakkul.",
    src: "Bukhari 3653, Muslim 2381, Quran 9:40",
    check: { q: "What did the Prophet ﷺ say in the cave?", options: ["“Let us run”", "“What do you think of two whose third is Allah?”", "“We are lost”", "“Call for help”"], answer: 1, why: "Complete trust in Allah after taking the means." } }],

  "ruhiy-2/tawbah": [{ type: "story", id: "ninety-nine", kind: N, title: "The man who killed ninety-nine",
    scene: "A man among the nations before us had killed ninety-nine people, and wanted to repent.",
    story: [
      "He asked who was the most learned person on earth and was sent to a monk. “I have killed ninety-nine people. Can I repent?” The monk said no. So he killed him too, making a hundred.",
      "He asked again and was sent to a scholar. “Can I repent?” The scholar said: “Yes, who can stand between you and repentance? Go to such-and-such a land; its people worship Allah. Worship with them, and do not return to your land, for it is a bad land.”",
      "Halfway there, death came to him. The angels of mercy and the angels of punishment argued over him. Allah told them to measure the distance between the two lands.",
      "He was found closer to the good land by a hand span, and the angels of mercy took him. In one narration, Allah brought the good land nearer.",
    ],
    lesson: "No sin is too big for Allah’s forgiveness. Sincere repentance means changing your surroundings and setting out, even if you only take the first steps.",
    src: "Bukhari 3470, Muslim 2766",
    check: { q: "What did the scholar tell the man to do?", options: ["Give up hope", "Repent and move to a land where people worship Allah", "Pay a fine", "Stay where he was"], answer: 1, why: "Repentance includes leaving the environment of sin." } }],

  "ruhiy-2/ikhlas": [{ type: "story", id: "cave-three", kind: N, title: "Three men and the boulder",
    scene: "Three travellers took shelter in a cave from the rain. A boulder rolled down and sealed the entrance.",
    story: [
      "They said: nothing will save us except calling on Allah by our most sincere deeds.",
      "The first said: “O Allah, my parents were old. One night I brought their milk and found them asleep. I would not wake them, nor give anyone else to drink before them. I stood holding the cup until dawn. If I did that for You, relieve us.” The rock moved a little.",
      "The second said: “O Allah, I had a cousin I loved. When I finally had her in my power, she said: fear Allah, and do not break the seal except by right. I left her, and left the gold I had given her. If I did that for You, relieve us.” The rock moved more.",
      "The third said: “O Allah, I hired workers and paid them all, except one who left without his wage. I invested it until it became camels, cows, sheep and slaves. He came back years later and I said: all of this is yours. He took it all. If I did that for You, relieve us.” The rock rolled away, and they walked out.",
    ],
    lesson: "Deeds done purely for Allah, unseen by anyone, become your rescue on the day you most need it.",
    src: "Bukhari 2272, Muslim 2743",
    check: { q: "What did the three deeds have in common?", options: ["They were done in public", "They were done sincerely for Allah", "They earned money", "They were easy"], answer: 1, why: "Sincerity made them powerful enough to move the rock." } }],

  "ruhiy-2/zuhd": [{ type: "story", id: "mat", kind: C, title: "The marks of the mat",
    scene: "ʿUmar ibn al-Khaṭṭāb entered the Prophet’s ﷺ room in Madinah.",
    story: [
      "The Prophet ﷺ was lying on a mat of woven palm fibre, with nothing between him and it. The mat had left marks on his side. Under his head was a leather pillow stuffed with palm fibre. In the room hung a few hides and a little barley.",
      "ʿUmar wept. The Prophet ﷺ asked why. He said: “Chosroes and Caesar live in such luxury, and you are the Messenger of Allah!”",
      "He replied: “Are you not pleased that they have this world and we have the Hereafter?”",
    ],
    lesson: "Zuhd is not having nothing; it is not letting the world own your heart. The leader of a rising state slept on a mat by choice.",
    src: "Bukhari 4913, Muslim 1479",
    check: { q: "Why did ʿUmar weep?", options: ["He was ill", "He saw the Prophet ﷺ on a simple mat that marked his side", "He lost money", "He was scolded"], answer: 1, why: "The Prophet ﷺ chose the Hereafter over luxury." } }],

  "ruhiy-2/sabr": [{ type: "story", id: "umm-salamah", kind: C, title: "Who could be better than Abū Salamah?",
    scene: "Umm Salamah lost her beloved husband, Abū Salamah, one of the earliest Muslims.",
    story: [
      "She remembered the Prophet ﷺ teaching: whoever is struck by a calamity and says “To Allah we belong and to Him we return. O Allah, reward me in my calamity and replace it for me with something better”, Allah will give him something better.",
      "She said it, though she thought: who among the Muslims could be better than Abū Salamah, the first household to emigrate for Allah?",
      "Then Allah replaced him for her with the Messenger of Allah ﷺ himself, who married her.",
    ],
    lesson: "Patience is saying the right words even when your heart cannot yet imagine anything better. Allah’s replacement is beyond what we picture.",
    src: "Muslim 918",
    check: { q: "What did Umm Salamah say in her grief?", options: ["Nothing", "Innā lillāh… O Allah, reward me and replace it with better", "She complained", "She left Madinah"], answer: 1, why: "She said the duʿāʾ, and Allah replaced her loss with the best." } }],

  "ruhiy/hasad": [{ type: "story", id: "man-of-paradise", kind: C, title: "“A man of Paradise is about to enter”",
    scene: "Three days in a row, while sitting with his companions, the Prophet ﷺ said: a man of the people of Paradise will now come in. Each time, the same ordinary man of the Anṣār walked in.",
    story: [
      "ʿAbdullāh ibn ʿAmr wanted to know his secret. He asked to stay as his guest for three nights.",
      "He watched closely. The man did not stand long in night prayer; he only remembered Allah when he turned in bed, and rose for Fajr. But ʿAbdullāh never heard him say anything but good.",
      "After three nights ʿAbdullāh told him why he had come, and asked: what is it you do? The man said: “It is only what you saw.” As ʿAbdullāh turned to go, he called him back: “Except that I hold no deceit in my heart against any Muslim, and I do not envy anyone for any good Allah has given him.”",
      "ʿAbdullāh said: “That is what has brought you there, and it is what we cannot manage.”",
    ],
    lesson: "A heart clean of envy and grudges can outweigh many extra acts of worship.",
    src: "Musnad Aḥmad 12697 (reported)",
    check: { q: "What was the man’s secret?", options: ["All-night prayer", "A heart free of envy and deceit toward Muslims", "Great wealth", "Long fasts"], answer: 1, why: "A clean heart raised him to Paradise." } }],

  "ruhiy-3/adl": [{ type: "story", id: "makhzumi", kind: P, title: "“Even if it were Fāṭimah”",
    scene: "A woman from the noble Makhzūm clan stole, and the case came to the Prophet ﷺ.",
    story: [
      "Quraysh were worried that a woman of such status would face the punishment. Who would dare speak to him? They chose Usāmah ibn Zayd, whom he loved dearly.",
      "When Usāmah spoke, the Prophet’s ﷺ face changed: “Do you intercede regarding one of Allah’s limits?”",
      "He stood and addressed the people: “Those before you were destroyed because when a noble person stole they let him go, and when a weak person stole they punished him. By Allah, if Fāṭimah the daughter of Muhammad stole, I would carry out the punishment.”",
    ],
    lesson: "Justice that bends for the powerful is not justice. The law of Allah is the same for the noble and the weak, even for one’s own family.",
    src: "Bukhari 3475, Muslim 1688",
    check: { q: "What destroyed the nations before, according to the Prophet ﷺ?", options: ["Poverty", "Letting the noble off and punishing the weak", "Too many laws", "War"], answer: 1, why: "Double standards in justice ruin societies." } }],

  "ruhiy-3/rahim": [{ type: "story", id: "dog-well", kind: N, title: "The man, the dog and the well",
    scene: "A man was travelling on a hot day and became desperately thirsty.",
    story: [
      "He found a well, climbed down, drank, and came back up.",
      "There he saw a dog panting, licking the mud from thirst. He thought: this dog is as thirsty as I was.",
      "He climbed down again, filled his leather sock with water, held it in his mouth, climbed back up and gave the dog to drink.",
      "Allah thanked him for it and forgave him. The companions asked: is there reward for us in animals? He said: “In every living being there is reward.”",
    ],
    lesson: "Mercy to the smallest creature can be the deed that earns Allah’s forgiveness.",
    src: "Bukhari 2363, Muslim 2244",
    check: { q: "What did the man use to carry water to the dog?", options: ["A bucket", "His leather sock, held in his mouth", "His hands", "A cup"], answer: 1, why: "He took real trouble out of mercy, and Allah forgave him." } }],

  "ruhiy-3/karim": [{ type: "story", id: "fath", kind: S, title: "“Go, you are free”",
    scene: "Makkah, the year 8 AH. The Prophet ﷺ entered the city with ten thousand Muslims, almost without a fight. Before him stood the people who had mocked him, boycotted him, killed his companions and driven him out.",
    story: [
      "He asked them: “People of Quraysh, what do you think I will do with you?”",
      "They said: “Good. A noble brother, and the son of a noble brother.”",
      "He said: “I say to you what Yūsuf said to his brothers: ‘No blame upon you today’ (12:92). Go, you are free.”",
    ],
    lesson: "Generosity at its peak: pardoning at the moment of complete power, those who did you the greatest harm.",
    src: "Sīrah of Ibn Hishām; al-Bayhaqī, al-Sunan al-Kubrā",
    check: { q: "Whose words did the Prophet ﷺ use when pardoning Quraysh?", options: ["Mūsā’s", "Yūsuf’s to his brothers", "Nūḥ’s", "ʿĪsā’s"], answer: 1, why: "“No blame upon you today” (12:92)." } }],

  // ---------- Social Tarbiyah ----------
  "social/social-visiting-sick": [{ type: "story", id: "jewish-boy", kind: P, title: "The visit that changed a boy’s life",
    scene: "A Jewish boy used to serve the Prophet ﷺ in Madinah. One day he fell ill.",
    story: [
      "The Prophet ﷺ went to visit him and sat by his head.",
      "He said to him: “Accept Islam.” The boy looked at his father, who was sitting beside him. His father said: “Obey Abū al-Qāsim.”",
      "The boy accepted Islam. The Prophet ﷺ left saying: “Praise be to Allah who saved him from the Fire.”",
    ],
    lesson: "Visiting the sick, even someone of another faith, is mercy in action. A single visit can change a life forever.",
    src: "Bukhari 1356",
    check: { q: "Who did the Prophet ﷺ visit in this story?", options: ["A king", "A sick Jewish boy who served him", "A merchant", "A poet"], answer: 1, why: "He visited the sick whatever their faith." } }],

  "social/social-trade": [{ type: "story", id: "wet-grain", kind: P, title: "The wet grain under the dry",
    scene: "The market of Madinah. The Prophet ﷺ walked past a pile of grain for sale.",
    story: [
      "He put his hand into the pile, and his fingers came out wet.",
      "“What is this, owner of the grain?” The man said: “Rain fell on it, Messenger of Allah.”",
      "He said: “Why did you not put it on top, so that people could see it? Whoever cheats is not one of us.”",
    ],
    lesson: "Hiding a defect is cheating, even if you never say a false word. Honest trade shows the bad with the good.",
    src: "Muslim 102",
    check: { q: "What was wrong with the grain seller?", options: ["His price", "He hid the wet grain underneath", "His scale", "He was rude"], answer: 1, why: "Hiding a defect is cheating." } }],

  "social/social-wealth": [{ type: "story", id: "rumah", kind: C, title: "ʿUthmān and the well of Rūmah",
    scene: "Madinah after the hijrah. Sweet drinking water was scarce, and the well of Rūmah was owned by a man who sold its water.",
    story: [
      "The Prophet ﷺ said: “Who will buy the well of Rūmah and make his bucket in it like the buckets of the Muslims, for something better than it in Paradise?”",
      "ʿUthmān ibn ʿAffān bought it from his own wealth and made its water free for everyone.",
      "Years later, when ʿUthmān was besieged in his house, he reminded the people of this. Today, a well and palm grove associated with his name are still known in Madinah.",
    ],
    lesson: "Wealth spent on what people need most becomes ongoing charity that flows long after its owner is gone.",
    src: "Tirmidhi 3703, Bukhari (taʿlīq) 2778",
    check: { q: "What did ʿUthmān do with the well of Rūmah?", options: ["Sold its water for profit", "Bought it and made its water free for all", "Closed it", "Gave it to his family only"], answer: 1, why: "Ongoing charity, for a reward in Paradise." } }],

  "social/social-hospitality": [{ type: "story", id: "ibrahim-guests", kind: Q, title: "The guests of Ibrāhīm",
    scene: "Strangers arrived at the tent of Ibrāhīm (as). He did not know them; they were angels in human form.",
    story: [
      "They said “Salām”, and he replied “Salām”, saying to himself: these are people I do not know.",
      "He went quietly to his family and quickly brought a fat, roasted calf, the best he had.",
      "He placed it near them and said gently: “Will you not eat?” (51:24–27).",
    ],
    lesson: "The scholars draw the manners of hospitality from these verses: greet well, hurry, serve the best you have, bring it close to the guest, and invite them kindly without making them feel a burden.",
    src: "Quran 51:24–27, 11:69",
    check: { q: "What did Ibrāhīm (as) bring his unknown guests?", options: ["Water only", "A fat roasted calf, quickly", "Bread crusts", "Nothing until asked"], answer: 1, why: "He hurried to serve the best he had." } }],

  "social/social-congregation": [{ type: "story", id: "blind-man", kind: C, title: "“Do you hear the call?”",
    scene: "ʿAbdullāh ibn Umm Maktūm, a blind companion, came to the Prophet ﷺ.",
    story: [
      "He said: “Messenger of Allah, I have no one to lead me to the masjid.” He asked permission to pray at home, and the Prophet ﷺ gave it.",
      "As he turned to leave, the Prophet ﷺ called him back: “Do you hear the call to prayer?” He said yes.",
      "He said: “Then answer it.”",
    ],
    lesson: "Even a blind man without a guide was encouraged to come to the congregation if he could hear the adhān. That shows how great its place is.",
    src: "Muslim 653; Abu Dawud 552 (named Ibn Umm Maktūm)",
    check: { q: "What did the Prophet ﷺ ask the blind man?", options: ["“Can you see the masjid?”", "“Do you hear the call to prayer?”", "“Do you have money?”", "“Are you tired?”"], answer: 1, why: "If you hear the call, answer it." } }],

  "social/social-jumuah": [{ type: "story", id: "necks", kind: P, title: "The man stepping over necks",
    scene: "Friday, during the khuṭbah, the masjid full.",
    story: [
      "A man came in late and began stepping over the necks of the people sitting, to get closer to the front.",
      "The Prophet ﷺ paused his sermon and said: “Sit down. You have caused harm.”",
    ],
    lesson: "Getting closer to the imam is good, but not at the cost of harming others. Come early, or sit where you find space.",
    src: "Abu Dawud 1118",
    check: { q: "What did the Prophet ﷺ tell the late man?", options: ["“Come to the front”", "“Sit down. You have caused harm.”", "“Leave the masjid”", "Nothing"], answer: 1, why: "Harming people outweighs the virtue of being near the front." } }],

  "social/social-student": [{ type: "story", id: "jibril", kind: P, title: "The stranger in white",
    scene: "The companions were sitting with the Prophet ﷺ when a man appeared.",
    story: [
      "His clothes were extremely white and his hair extremely black. There was no sign of travel on him, and none of them knew him.",
      "He sat right in front of the Prophet ﷺ, knee to knee, and placed his hands on his thighs. He asked: tell me about Islam, then īmān, then iḥsān, then the Hour and its signs. After each answer he said: “You have spoken the truth,” and the companions wondered how he could ask and then confirm.",
      "When he left, the Prophet ﷺ said: “That was Jibrīl. He came to teach you your religion.”",
    ],
    lesson: "Jibrīl showed the adab of a student: clean and well-dressed, sitting close and attentive, asking clear questions that benefit everyone present.",
    src: "Muslim 8",
    check: { q: "Who was the stranger in white?", options: ["A traveller", "Jibrīl, teaching the religion", "A king", "A merchant"], answer: 1, why: "He came to teach the companions through questions." } }],

  "social/social-companions": [{ type: "story", id: "angel-road", kind: P, title: "The angel on the road",
    scene: "A man set out to visit a brother of his in another village.",
    story: [
      "Allah placed an angel waiting on his road. The angel asked: where are you going? “To visit a brother of mine in this village.”",
      "“Does he owe you some favour you want to collect?” “No. I simply love him for the sake of Allah.”",
      "The angel said: “I am a messenger from Allah to you: Allah loves you, as you have loved him for His sake.”",
    ],
    lesson: "A visit with no worldly motive, only love for Allah’s sake, earns Allah’s own love.",
    src: "Muslim 2567",
    check: { q: "Why was the man visiting his brother?", options: ["To collect a debt", "Only out of love for Allah’s sake", "For business", "To complain"], answer: 1, why: "And Allah loved him for it." } }],

  "social/social-youth": [{ type: "story", id: "ibn-abbas", kind: C, title: "Advice to a boy riding behind him",
    scene: "Ibn ʿAbbās, still a young boy, was riding behind the Prophet ﷺ.",
    story: [
      "The Prophet ﷺ said: “Young man, I will teach you some words.”",
      "“Guard Allah, and He will guard you. Guard Allah, and you will find Him before you. When you ask, ask Allah. When you seek help, seek it from Allah.”",
      "“Know that if the whole world gathered to benefit you, they could only benefit you with what Allah has written for you; and if they gathered to harm you, they could only harm you with what Allah has written against you. The pens have been lifted and the pages have dried.”",
    ],
    lesson: "The Prophet ﷺ gave a child the deepest lessons of faith in a few short lines. Youth is the time to plant them.",
    src: "Tirmidhi 2516",
    check: { q: "“Guard Allah, and…”", options: ["“…you will be rich”", "“…He will guard you”", "“…people will praise you”", "“…you will never be tested”"], answer: 1, why: "Keep Allah’s limits and He will protect you." } }],

  "social/social-neighbours": [{ type: "story", id: "two-women", kind: P, title: "Two women and their neighbours",
    scene: "The companions asked the Prophet ﷺ about two women.",
    story: [
      "“Messenger of Allah, a certain woman is known for how much she prays, fasts and gives charity, but she harms her neighbours with her tongue.” He said: “She is in the Fire.”",
      "“And a certain woman is known for how little she prays and fasts beyond the obligations, and she gives charity only with pieces of dried cheese, but she does not harm her neighbours.” He said: “She is in Paradise.”",
    ],
    lesson: "Extra worship cannot cover harm done to neighbours. How you treat the people next door is part of your religion.",
    src: "Musnad Aḥmad 9675, al-Adab al-Mufrad 119",
    check: { q: "What sank the first woman’s many good deeds?", options: ["Too little charity", "Harming her neighbours with her tongue", "Praying at home", "Fasting too much"], answer: 1, why: "Harm to neighbours destroys reward." } }],

  "social/social-teacher": [{ type: "story", id: "best-teacher", kind: C, title: "“I never saw a better teacher”",
    scene: "Muʿāwiyah ibn al-Ḥakam was new to Islam, praying in congregation behind the Prophet ﷺ.",
    story: [
      "Someone sneezed, and Muʿāwiyah said aloud, in the middle of the prayer: “Yarḥamuka-llāh!” People stared at him. He said: “What are you looking at?” They began striking their thighs to silence him, and he fell quiet.",
      "After the prayer, he said: “May my father and mother be his ransom, I never saw a better teacher before or after him. By Allah, he did not scold me, hit me or insult me.”",
      "The Prophet ﷺ simply said: “This prayer: nothing of people’s ordinary speech is fitting in it. It is only tasbīḥ, takbīr and recitation of the Quran.”",
    ],
    lesson: "The best teacher corrects without shaming. One calm sentence taught Muʿāwiyah more than a scolding ever could.",
    src: "Muslim 537",
    check: { q: "How did the Prophet ﷺ correct Muʿāwiyah?", options: ["He scolded him in front of everyone", "He explained calmly, without scolding or insult", "He sent him out", "He ignored it"], answer: 1, why: "Gentle teaching wins hearts." } }],

  "social/social-road": [{ type: "story", id: "thorn-branch", kind: N, title: "The branch on the road",
    scene: "A man was walking along a road when he found a thorny branch lying across it.",
    story: [
      "He moved it out of the way so that it would not hurt anyone passing.",
      "The Prophet ﷺ said: Allah thanked him for it and forgave him. In another narration: I saw a man moving about in Paradise because of a tree he cut from the middle of the road that used to harm people.",
    ],
    lesson: "Some of the greatest rewards hide in the smallest acts of public care.",
    src: "Bukhari 652, Muslim 1914",
    check: { q: "What earned the man forgiveness?", options: ["Fasting", "Moving a thorny branch off the road", "Building a road", "Giving a speech"], answer: 1, why: "Removing harm from the road is a branch of faith." } }],

  // ---------- Salah ----------
  "salah/janazah": [{ type: "story", id: "masjid-cleaner", kind: P, title: "The woman who cleaned the masjid",
    scene: "A Black woman in Madinah used to sweep and clean the Prophet’s ﷺ masjid. One day the Prophet ﷺ noticed she was missing.",
    story: [
      "He asked about her and was told she had died during the night. The companions had buried her without waking him, thinking her matter too small to trouble him with.",
      "He said: “Why did you not tell me? Show me her grave.” They took him to it, and he prayed the funeral prayer over her there.",
      "Then he said: “These graves are filled with darkness for their people, and Allah lights them up for them by my prayer over them.”",
    ],
    lesson: "No one is too small for the funeral prayer. The one who cleans the masjid was honoured by the Prophet ﷺ himself.",
    src: "Bukhari 458, Muslim 956",
    check: { q: "What did the Prophet ﷺ do when he learned of her death?", options: ["Nothing", "Went to her grave and prayed over her", "Sent a letter", "Gave charity only"], answer: 1, why: "He honoured her with the funeral prayer at her grave." } }],

  "salah/taziyah": [{ type: "story", id: "ibrahim-death", kind: P, title: "“The eye weeps, the heart grieves”",
    scene: "Madinah. The Prophet’s ﷺ infant son Ibrāhīm was dying in his arms.",
    story: [
      "Tears began to flow from the Prophet’s ﷺ eyes. ʿAbd al-Raḥmān ibn ʿAwf said in surprise: “Even you, Messenger of Allah?”",
      "He said: “Ibn ʿAwf, this is mercy.” Then the tears flowed more.",
      "He said: “The eye weeps and the heart grieves, but we say only what pleases our Lord. And we are saddened by your parting, O Ibrāhīm.”",
    ],
    lesson: "Grief and tears are mercy, not weakness. What is forbidden is wailing and objecting to Allah. Comfort the bereaved by letting them grieve, and help them say what pleases Allah.",
    src: "Bukhari 1303, Muslim 2315",
    check: { q: "What did the Prophet ﷺ call his tears?", options: ["Weakness", "Mercy", "A mistake", "Anger"], answer: 1, why: "Tears are mercy; wailing is forbidden." } }],

  "salah/places": [{ type: "story", id: "quba-saturday", kind: C, title: "Every Saturday to Qubāʾ",
    scene: "Madinah. Just outside the city stood Masjid Qubāʾ, the first masjid built in Islam.",
    story: [
      "ʿAbdullāh ibn ʿUmar reported that the Prophet ﷺ used to go to Masjid Qubāʾ every Saturday, sometimes riding and sometimes walking, and pray two rakʿahs there.",
      "Ibn ʿUmar himself kept doing it after him, following his example.",
    ],
    lesson: "The Prophet ﷺ made a weekly habit of a deed whose reward is like an ʿumrah. Small regular visits to blessed places are part of his Sunnah.",
    src: "Bukhari 1193, Muslim 1399; Ibn Majah 1412 (like an ʿumrah)",
    check: { q: "How often did the Prophet ﷺ visit Masjid Qubāʾ?", options: ["Once in his life", "Every Saturday", "Only in Ramadan", "Every Friday"], answer: 1, why: "Riding or walking, every Saturday." } }],
};
