import type { Block, Lesson } from "./library";
import type { Question } from "./topics";
import { L, P } from "./ruhiy";
import { RECITATIONS } from "./recitations";

// Iman world: what faith is, and its six pillars, as full explainers with
// verses, comparisons, stories, scenarios, reflection and a quiz per lesson.
// Following the creed of Ahl al-Sunnah wal-Jamāʿah (Māturīdī/Ashʿarī).
// A scholar should review before release.

const Qt = (en: string, src: string, ar?: string, tr?: string, note?: string): Block => ({ type: "quote", en, src, ar, tr, note });
const Cmp = (title: string, left: string, right: string, rows: [string, string][]): Block => ({ type: "compare", title, left, right, rows });
const St = (title: string, items: string[]): Block => ({ type: "steps", title, items });
const Sc = (id: string, situation: string, options: { text: string; best?: boolean; feedback: string }[]): Block => ({ type: "scenario", id, situation, options });
const Rf = (think: string[], home?: string[]): Block => ({ type: "reflect", think, home });
const Rw = (title: string, measure: string, picture: string, src: string): Block => ({ type: "reward", title, measure, picture, src });
const q = (q: string, options: string[], answer: number, why: string, src: string): Question => ({ q, options, answer, why, src });

export const IMAN_LESSONS: Lesson[] = [
  { id: "what-is-iman", title: "What is īmān?", summary: "Belief in the heart, declared by the tongue, and shown in deeds: the six pillars at a glance.", sources: ["Muslim 8", "Quran 2:285", "Quran 49:14", "Bukhari 9", "Quran 8:2"],
    blocks: [
      P("Īmān comes from a root meaning safety and trust (amn): to believe in something so firmly that the heart feels safe in it. In the religion, īmān is firm belief in the heart in everything the Prophet ﷺ brought from Allah, declared with the tongue. Deeds are its fruit: they show it, strengthen it, and its sweetness grows with them."),
      Qt("Īmān is to believe in Allah, His angels, His books, His messengers and the Last Day, and to believe in the decree, its good and its bad.", "Muslim 8 (the ḥadīth of Jibrīl)"),
      L("The six pillars", [
        "Belief in Allah: His existence, oneness, names and attributes.",
        "Belief in the angels: noble servants of light who obey Him.",
        "Belief in the books: the revelations sent to the prophets, ending with the Quran.",
        "Belief in the messengers: from Ādam to Muhammad ﷺ, the last of them.",
        "Belief in the Last Day: death, the grave, resurrection, judgment, Paradise and Hell.",
        "Belief in the decree (qadar): Allah knows, writes, wills and creates all things.",
      ]),
      Cmp("Islam, īmān and iḥsān: the three levels in the ḥadīth of Jibrīl", "Level", "What it is", [
        ["Islam", "Outward submission: the five pillars of the body. Shahādah, prayer, zakāt, fasting, Ḥajj."],
        ["Īmān", "Inward belief: the six pillars of the heart."],
        ["Iḥsān", "Excellence: to worship Allah as though you see Him, and if you do not see Him, knowing He sees you."],
      ]),
      L("Does īmān go up and down?", [
        "The Quran says the believers’ faith increases when Allah’s verses are recited to them (8:2).",
        "Scholars of the Ḥanafī-Māturīdī school say the core of belief, its certainty, is one thing, and what increases is its strength, light and fruit. Other scholars say īmān itself increases with obedience and decreases with sin. Both agree that the believer’s faith becomes stronger or weaker in practice.",
        "Faith has more than seventy branches; the highest is “lā ilāha illa-llāh” and the lowest is removing harm from the road, and modesty is a branch of faith (Bukhari 9, Muslim 35).",
      ]),
      L("How to strengthen your īmān", [
        "Learn about Allah through His names and the Quran.",
        "Guard the five prayers; they are the daily renewal of faith.",
        "Remember Allah often and reflect on His creation.",
        "Keep good company and avoid what weakens the heart.",
        "Renew it with duʿāʾ: ask Allah to make faith beloved to you (49:7).",
      ]),
      Sc("iman-dip", "A friend says: “I used to feel close to Allah, but lately my faith feels weak. Maybe I’m not a real Muslim.” What do you say?", [
        { text: "“You’re right, you should worry you’re not a Muslim.”", feedback: "That leads to despair. Weak moments do not take a believer out of Islam." },
        { text: "“Faith rises and falls for everyone. Let’s pray together and add one small good habit.”", best: true, feedback: "The companions felt this too. Faith is renewed by remembrance, prayer and good company." },
        { text: "“Just ignore it, it doesn’t matter.”", feedback: "Weakness should be noticed and treated, gently, before it grows." },
      ]),
      Rf(["Which of the six pillars do I think about least?", "When did I last feel my faith was strong, and what was I doing then?"], ["Ask each family member: what is one thing that makes your īmān feel stronger?", "Learn the six pillars by heart together, with a finger for each one."]),
      L("Key takeaways", [
        "Īmān is belief in the heart, declared by the tongue, shown by deeds.",
        "Its six pillars come from the ḥadīth of Jibrīl.",
        "It grows with remembrance, prayer and knowledge; protect it daily.",
      ]),
    ],
    quiz: [
      q("Which ḥadīth lists the six pillars of īmān?", ["The ḥadīth of the card", "The ḥadīth of Jibrīl", "The ḥadīth of the cave", "The ḥadīth of intention"], 1, "Jibrīl asked about Islam, īmān, iḥsān and the Hour.", "Muslim 8"),
      q("How many pillars of īmān are there?", ["Five", "Six", "Seven", "Ten"], 1, "Allah, angels, books, messengers, Last Day, decree.", "Muslim 8"),
      q("What is iḥsān?", ["Giving charity", "Worshipping Allah as though you see Him", "Fasting Mondays", "Building mosques"], 1, "And if you do not see Him, He sees you.", "Muslim 8"),
      q("What is the lowest branch of faith?", ["Saying salām", "Removing harm from the road", "Smiling", "Eating with the right hand"], 1, "The highest is lā ilāha illa-llāh.", "Muslim 35"),
      q("Which is a pillar of īmān, not of Islam?", ["Prayer", "Belief in the angels", "Zakāt", "Ḥajj"], 1, "Īmān’s pillars are matters of belief.", "Muslim 8"),
      q("What happens to the believers’ faith when Allah’s verses are recited?", ["It decreases", "It increases", "Nothing", "It is tested"], 1, "Quran 8:2.", "Quran 8:2"),
      q("The word īmān comes from a root meaning…", ["Strength", "Safety and trust", "Light", "Knowledge"], 1, "From amn: safety, security.", "Arabic lexicon"),
      q("Is modesty a branch of faith?", ["No", "Yes", "Only for women", "Only in prayer"], 1, "Bukhari 9.", "Bukhari 9"),
    ] },

  { id: "tawhid", title: "Belief in Allah (tawḥīd)", summary: "Allah exists, He is One, and nothing is like Him: lordship, worship, names and attributes.", sources: ["Quran 112", "Quran 2:255", "Quran 42:11", "Quran 21:22", "Bukhari 2736", "Bukhari 5013", "Muslim 810"],
    blocks: [
      P("Belief in Allah is the root of every other belief. It means believing that Allah exists; that He alone creates, owns and controls everything; that He alone deserves worship; and that His names and attributes are perfect and unlike anything in creation."),
      { type: "rec", label: "Sūrat al-Ikhlāṣ: tawḥīd in four verses", r: RECITATIONS.ikhlas, src: "Equal to a third of the Quran (Bukhari 5013)" },
      L("The signs that point to Him", [
        "Nothing comes from nothing. A building points to a builder, a footprint to a walker, and this vast, ordered universe to its Creator (52:35).",
        "The order of creation points to one Lord: “Had there been gods in them besides Allah, both heavens and earth would have been ruined” (21:22).",
        "The fiṭrah: every child is born on a natural disposition that recognises its Creator (Bukhari 1358). In hardship, even people who deny Him turn to Him.",
      ]),
      Cmp("The three sides of tawḥīd", "Side", "Meaning and example", [
        ["Lordship (rubūbiyyah)", "Allah alone creates, sustains, gives life and death. Rain, provision and healing come only from Him."],
        ["Worship (ulūhiyyah)", "Allah alone is worshipped: prayer, duʿāʾ, sacrifice, vows and reliance are for Him alone."],
        ["Names and attributes", "We affirm what Allah affirmed for Himself, without likening Him to creation and without denying it: “There is nothing like Him” (42:11)."],
      ]),
      Qt("Allah: there is no god but He, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him…", "Quran 2:255 (Āyat al-Kursī)", undefined, undefined, "The greatest verse in the Quran (Muslim 810)"),
      L("Shirk: what breaks tawḥīd", [
        "Major shirk: worshipping anything besides Allah, or calling on it as one calls on Allah. It is the one sin Allah does not forgive if one dies on it (4:48).",
        "Minor shirk: such as showing off in worship (riyāʾ), or swearing by other than Allah.",
        "Hidden forms today: trusting amulets, fortune-tellers, horoscopes or “lucky” objects to bring good or repel harm.",
      ]),
      { type: "story", id: "ibrahim-stars", kind: "From the Quran", title: "Ibrāhīm and the star, the moon and the sun",
        scene: "Ibrāhīm (as) grew up among a people who worshipped idols and heavenly bodies.",
        story: [
          "When night covered him, he saw a star and said, as if to his people: “This is my lord?” When it set, he said: “I do not love things that set.”",
          "He saw the moon rising: “This is my lord?” When it set, he said: “If my Lord does not guide me, I will be among the lost.”",
          "He saw the sun rising: “This is my lord; this is greater.” When it set, he said: “My people, I am free of what you associate with Allah. I have turned my face to the One who created the heavens and the earth” (6:76–79).",
        ],
        lesson: "Ibrāhīm used reason to show his people that anything that changes, disappears or is created cannot be God. Only the Creator, who never sets, deserves worship.",
        src: "Quran 6:76–79",
        check: { q: "Why did Ibrāhīm reject the star, moon and sun as lords?", options: ["They were too small", "They set and disappear; a true Lord never does", "His father told him to", "They were far away"], answer: 1, why: "What changes and disappears is created, not the Creator." } },
      Rw("The 99 names", "Learn them and enter Paradise", "Allah has ninety-nine names; whoever learns them (aḥṣāhā) will enter Paradise (Bukhari 2736). The scholars explain this as memorising them, understanding them, and living by what they call for.", "Bukhari 2736"),
      Sc("tawhid-amulet", "A relative gives your baby a blue bead “to protect from the evil eye.” What do you do?", [
        { text: "Hang it on the cot, just in case.", feedback: "Trusting an object to protect is a form of shirk the Prophet ﷺ warned against (Musnad Aḥmad 17422)." },
        { text: "Thank them kindly, decline, and recite al-Falaq, an-Nās and the Prophetic duʿāʾs over the baby instead.", best: true, feedback: "Protection is from Allah alone; the Sunnah gives us the words to seek it, and kindness keeps the relationship." },
        { text: "Argue loudly that they are a mushrik.", feedback: "The truth is best shared gently, without insulting family." },
      ]),
      Rf(["Is there anything I rely on more than Allah: money, a person, my job?", "Which of Allah’s names do I need most right now?"], ["Pick one of Allah’s names each week; explain it and use it in a family duʿāʾ.", "Look at the night sky together and talk about the One who never sets."]),
      L("Key takeaways", [
        "Allah alone creates, alone is worshipped, and nothing is like Him.",
        "Shirk, major or hidden, is the opposite of tawḥīd.",
        "Know Allah through His names, and trust Him alone.",
      ]),
    ],
    quiz: [
      q("Which sūrah equals a third of the Quran and summarises tawḥīd?", ["Al-Fātiḥah", "Al-Ikhlāṣ", "Yāsīn", "Al-Kawthar"], 1, "Bukhari 5013.", "Bukhari 5013"),
      q("Which is the greatest verse in the Quran?", ["2:286", "Āyat al-Kursī (2:255)", "112:1", "1:1"], 1, "Muslim 810.", "Muslim 810"),
      q("“There is nothing like Him” teaches us that Allah…", ["Is like a king", "Is unlike anything in creation", "Is unknown", "Has a body like ours"], 1, "Quran 42:11.", "Quran 42:11"),
      q("Tawḥīd of worship (ulūhiyyah) means…", ["Allah created everything", "Allah alone deserves worship", "Allah has names", "Allah is powerful"], 1, "All worship is for Him alone.", "Quran 1:5"),
      q("Which sin does Allah not forgive if one dies on it?", ["Lying", "Major shirk", "Missing a fast", "Anger"], 1, "Quran 4:48.", "Quran 4:48"),
      q("Why did Ibrāhīm reject the sun as a lord?", ["It was too hot", "It set", "It was small", "His people liked it"], 1, "“I do not love things that set.”", "Quran 6:76–79"),
      q("How many names of Allah lead to Paradise for whoever learns them?", ["33", "99", "100", "1,000"], 1, "Bukhari 2736.", "Bukhari 2736"),
      q("Trusting a bead or amulet to protect you is…", ["Recommended", "A form of shirk", "A sunnah", "Harmless culture"], 1, "Protection is from Allah alone.", "Musnad Aḥmad 17422"),
    ] },

  { id: "angels", title: "Belief in the angels", summary: "Who the angels are, what they do, and how they are with us every moment.", sources: ["Muslim 2996", "Quran 66:6", "Quran 2:97", "Quran 82:10–12", "Quran 50:17–18", "Bukhari 3207", "Bukhari 6408", "Muslim 2689"],
    blocks: [
      P("The angels (malāʾikah) are a world of beings Allah created from light (Muslim 2996). They are His honoured servants: they never disobey Him and do what they are commanded (66:6). They do not eat, drink, marry or tire, and they glorify Him night and day without pause (21:20). We do not see them, but we believe in them because Allah told us of them."),
      Cmp("Angels, jinn and humans", "Angels", "Jinn and humans", [
        ["Created from light", "Jinn from smokeless fire; humans from clay"],
        ["Never disobey; no free will to sin", "Tested with free will; can obey or disobey"],
        ["Do not eat, drink, sleep or marry", "Eat, drink, sleep and have families"],
        ["Countless in number", "Will be judged on the Last Day"],
      ]),
      L("Angels named in the Quran and Sunnah, and their work", [
        "Jibrīl: brings revelation to the prophets (2:97). He has six hundred wings (Bukhari 3232).",
        "Mīkāʾīl: entrusted with rain and plants.",
        "Isrāfīl: will blow the Trumpet on the Last Day.",
        "The Angel of Death, with helpers: takes souls at their appointed time (32:11).",
        "Two noble scribes on each person, recording every deed and word (82:10–12, 50:17–18).",
        "Munkar and Nakīr: question each person in the grave.",
        "Mālik: the keeper of Hell (43:77). Riḍwān is mentioned by scholars as the keeper of Paradise.",
        "Guardian angels who protect each person by Allah’s command (13:11).",
      ]),
      Qt("Not a word does he utter except that there is a watcher with him, ready to record.", "Quran 50:18"),
      L("Angels in your day", [
        "They travel the roads seeking gatherings of dhikr, and surround them with their wings up to the sky (Bukhari 6408).",
        "Angels pray for whoever waits in the masjid for prayer (Bukhari 647).",
        "When you make duʿāʾ for a brother in his absence, an angel says: “And for you the same” (Muslim 2732).",
        "Angels do not enter a house with a dog or images (Bukhari 3225), and are bothered by what bothers people, such as bad smells (Muslim 564).",
        "Every day, angels of the night and the day change shift at Fajr and ʿAṣr, and Allah asks them how they left His servants: “We left them praying, and came to them praying” (Bukhari 555).",
      ]),
      { type: "story", id: "jibril-wings", kind: "From the life of the Prophet ﷺ", title: "Jibrīl filling the horizon",
        scene: "Early revelation, near Makkah. The Prophet ﷺ was walking when he heard a voice from the sky.",
        story: [
          "He looked up and saw the angel who had come to him in the cave of Ḥirāʾ, sitting on a throne between heaven and earth.",
          "He was so overwhelmed that he hurried home saying: “Cover me, cover me!” And Allah revealed: “O you wrapped in your cloak, arise and warn” (74:1–2).",
          "He saw Jibrīl in his true form twice, and described him as filling the whole horizon, with six hundred wings (Bukhari 3232–3235).",
        ],
        lesson: "The angels are real and immense. The same Jibrīl who filled the horizon brought every verse of the Quran we recite.",
        src: "Bukhari 4, Bukhari 3232",
        check: { q: "How many wings did the Prophet ﷺ describe Jibrīl as having?", options: ["Two", "Six", "Six hundred", "Seventy"], answer: 2, why: "He saw him in his true form filling the horizon." } },
      Rw("Angels saying “Āmīn”", "Your past sins forgiven", "When the imam says “wa la-ḍ-ḍāllīn” and you say “Āmīn”, and your Āmīn coincides with the Āmīn of the angels, your past sins are forgiven (Bukhari 780). Every congregational prayer is a chance to say Āmīn together with the angels.", "Bukhari 780"),
      Sc("angels-alone", "You are alone in your room with your phone, and something inappropriate appears in your feed. No one would ever know. What do you do?", [
        { text: "Keep scrolling; no one is watching.", feedback: "The two noble scribes are recording, and Allah sees. “No one is watching” is never true." },
        { text: "Look away, block it, and say astaghfirullāh.", best: true, feedback: "Remembering the angels who record, and Allah who sees, is the best guard when alone." },
        { text: "Watch now and repent later.", feedback: "Planning to repent while choosing the sin is a trap; tomorrow is not promised." },
      ]),
      Rf(["If I could see the two angels recording my words today, what would I change?", "How often do I make duʿāʾ for others in their absence?"], ["Tell children about the two noble scribes: one writes the good, one the bad.", "Make a family habit of saying salām when entering an empty room; the angels hear."]),
      L("Key takeaways", [
        "Angels are created from light and never disobey Allah.",
        "Each has a role: revelation, rain, death, recording, protection.",
        "They are with us always: recording, protecting and praying for the good.",
      ]),
    ],
    quiz: [
      q("Angels were created from…", ["Fire", "Clay", "Light", "Water"], 2, "Muslim 2996.", "Muslim 2996"),
      q("Which angel brought revelation to the prophets?", ["Mīkāʾīl", "Jibrīl", "Isrāfīl", "Mālik"], 1, "Quran 2:97.", "Quran 2:97"),
      q("Who will blow the Trumpet?", ["Jibrīl", "Isrāfīl", "Mīkāʾīl", "Munkar"], 1, "Isrāfīl is entrusted with the Trumpet.", "Tirmidhi 2431"),
      q("Who questions people in the grave?", ["Mālik and Riḍwān", "Munkar and Nakīr", "Jibrīl and Mīkāʾīl", "Hārūt and Mārūt"], 1, "The two questioners in the grave.", "Tirmidhi 1071"),
      q("What do angels say when you pray for a brother in his absence?", ["Nothing", "“And for you the same”", "“Āmīn” only", "“Not accepted”"], 1, "Muslim 2732.", "Muslim 2732"),
      q("Do angels disobey Allah?", ["Sometimes", "Never", "Only Iblīs", "When tired"], 1, "Quran 66:6.", "Quran 66:6"),
      q("When do the angels of night and day change shift?", ["Maghrib and ʿIshāʾ", "Fajr and ʿAṣr", "Ẓuhr only", "Midnight"], 1, "Bukhari 555.", "Bukhari 555"),
      q("Saying Āmīn together with the angels after al-Fātiḥah brings…", ["Nothing", "Forgiveness of past sins", "Wealth", "A long life"], 1, "Bukhari 780.", "Bukhari 780"),
    ] },

  { id: "books", title: "Belief in the revealed books", summary: "Allah guided every age with revelation; the Quran is the last, complete and protected.", sources: ["Quran 4:136", "Quran 5:44–48", "Quran 4:163", "Quran 87:19", "Quran 15:9", "Quran 2:79", "Bukhari 5027", "Muslim 804"],
    blocks: [
      P("Allah did not leave humanity without guidance. He sent books to His messengers, containing His words, laws and light. A Muslim believes in all of them as they were revealed (4:136), and follows the last of them, the Quran, which confirms what came before and guards over it (5:48)."),
      L("The books named in the Quran", [
        "The Ṣuḥuf (scrolls) of Ibrāhīm and Mūsā (87:19).",
        "The Tawrāh (Torah), revealed to Mūsā (5:44).",
        "The Zabūr (Psalms), given to Dāwūd (4:163).",
        "The Injīl (Gospel), given to ʿĪsā (5:46).",
        "The Quran, revealed to Muhammad ﷺ over 23 years.",
      ]),
      Cmp("Earlier books and the Quran", "Earlier books", "The Quran", [
        ["Sent to a particular people for a particular time", "Sent to all humanity until the Last Day (34:28)"],
        ["Their protection was entrusted to their people (5:44)", "Allah Himself protects it: “We sent down the Reminder, and We will guard it” (15:9)"],
        ["Some of their text was altered or lost over time (2:79)", "Preserved letter by letter, memorised by millions"],
        ["We believe in what Allah revealed in them", "We believe in it and follow it"],
      ]),
      Qt("Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian.", "Quran 15:9", "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", "Innā naḥnu nazzalna-dh-dhikra wa innā lahū la-ḥāfiẓūn."),
      L("How the Quran was preserved", [
        "Revealed gradually over 23 years, memorised by the companions as it came, and written down by scribes such as Zayd ibn Thābit.",
        "Jibrīl reviewed the whole Quran with the Prophet ﷺ every Ramadan, and twice in his final year (Bukhari 4998).",
        "Abū Bakr (ra) had it gathered into one volume after many memorisers were martyred; ʿUthmān (ra) had standard copies sent to the main cities.",
        "Today millions of people, many of them children, have memorised it completely, and every copy in the world matches.",
      ]),
      L("Our duties to the Quran", [
        "Believe it is Allah’s speech, not created by any human.",
        "Recite it correctly, and regularly.",
        "Understand it, and reflect on it (47:24).",
        "Act on it, and teach it.",
        "Respect the muṣḥaf: touch it in wuḍūʾ, keep it clean and high.",
      ]),
      Rw("The Quran intercedes", "An intercessor on the Day of Judgment", "“Recite the Quran, for it will come on the Day of Resurrection as an intercessor for its companions” (Muslim 804). Al-Baqarah and Āl ʿImrān will come like two clouds shading their reciter. And “the best of you are those who learn the Quran and teach it” (Bukhari 5027).", "Muslim 804, Bukhari 5027"),
      Sc("books-respect", "Your younger brother leaves the muṣḥaf on the floor next to his shoes. What do you do?", [
        { text: "Leave it, it’s only paper.", feedback: "The muṣḥaf carries Allah’s words and deserves honour." },
        { text: "Pick it up, place it somewhere high and clean, and gently explain why.", best: true, feedback: "Respect, shown kindly, teaches more than a lecture." },
        { text: "Shout at him in front of everyone.", feedback: "Correct gently and privately; harshness pushes children away." },
      ]),
      Rf(["How many pages of the Quran do I read in an average week?", "Is there a verse I know by heart but do not understand?"], ["Read one short sūrah together each week with its meaning.", "Let each child keep a small notebook of verses they have memorised."]),
      L("Key takeaways", [
        "Allah sent the Ṣuḥuf, Tawrāh, Zabūr, Injīl and Quran.",
        "The Quran is the last book, for all people, protected by Allah.",
        "Recite it, understand it, act on it and honour it.",
      ]),
    ],
    quiz: [
      q("Which book was given to Dāwūd (as)?", ["Tawrāh", "Zabūr", "Injīl", "Ṣuḥuf"], 1, "Quran 4:163.", "Quran 4:163"),
      q("Which book was revealed to ʿĪsā (as)?", ["Zabūr", "Tawrāh", "Injīl", "Quran"], 2, "Quran 5:46.", "Quran 5:46"),
      q("Who promised to protect the Quran?", ["The scholars", "Allah Himself", "The caliphs", "The printers"], 1, "Quran 15:9.", "Quran 15:9"),
      q("Over how many years was the Quran revealed?", ["1", "10", "23", "40"], 2, "From age 40 to 63.", "Sīrah"),
      q("How often did Jibrīl review the Quran with the Prophet ﷺ?", ["Never", "Every Ramadan", "Every Friday", "Once"], 1, "Twice in his final year.", "Bukhari 4998"),
      q("Who are the best of people, according to Bukhari 5027?", ["The richest", "Those who learn the Quran and teach it", "The strongest", "The oldest"], 1, "Bukhari 5027.", "Bukhari 5027"),
      q("What will the Quran be on the Day of Judgment?", ["A witness against everyone", "An intercessor for its companions", "Forgotten", "Nothing"], 1, "Muslim 804.", "Muslim 804"),
      q("Which caliph had the Quran first gathered into one volume?", ["ʿUmar", "Abū Bakr", "ʿAlī", "Muʿāwiyah"], 1, "After many memorisers were martyred.", "Bukhari 4986"),
    ] },

  { id: "prophets", title: "Belief in the prophets and messengers", summary: "Why Allah sent them, what they share, and why Muhammad ﷺ is the last.", sources: ["Quran 16:36", "Quran 2:285", "Quran 33:40", "Quran 4:164", "Quran 6:83–86", "Quran 33:7", "Bukhari 3535", "Muslim 523"],
    blocks: [
      P("Allah chose the best of humanity to carry His message to people. “We sent to every nation a messenger, saying: worship Allah and avoid false gods” (16:36). A Muslim believes in all of them without making distinctions in faith between them (2:285), loves them, and follows the last of them, Muhammad ﷺ."),
      Cmp("Nabī and rasūl", "Nabī (prophet)", "Rasūl (messenger)", [
        ["Receives revelation from Allah", "Receives revelation and is sent with a message to a people"],
        ["Often follows and renews an earlier law", "Often brings a new law or book"],
        ["Every messenger is a prophet", "Not every prophet is a messenger"],
      ]),
      L("What all prophets share", [
        "The same core message: tawḥīd, worship Allah alone.",
        "Truthfulness, trustworthiness, conveying the message fully, and intelligence. They are protected (maʿṣūm) from major sins and from failing in the message.",
        "They were human: they ate, slept, married, fell ill and died. Their miracles were by Allah’s permission.",
        "They were tested the most: the people most severely tested are the prophets, then those like them (Tirmidhi 2398).",
      ]),
      L("The 25 prophets named in the Quran", [
        "Ādam, Idrīs, Nūḥ, Hūd, Ṣāliḥ, Ibrāhīm, Lūṭ, Ismāʿīl, Isḥāq, Yaʿqūb, Yūsuf, Ayyūb, Shuʿayb.",
        "Mūsā, Hārūn, Dhū al-Kifl, Dāwūd, Sulaymān, Ilyās, al-Yasaʿ, Yūnus, Zakariyyā, Yaḥyā, ʿĪsā and Muhammad ﷺ.",
        "The five of strongest resolve (ulū al-ʿazm): Nūḥ, Ibrāhīm, Mūsā, ʿĪsā and Muhammad ﷺ (33:7, 46:35).",
        "Many more were sent whose names we were not told (4:164).",
      ]),
      Qt("Muhammad is not the father of any of your men, but he is the Messenger of Allah and the seal of the prophets.", "Quran 33:40"),
      { type: "story", id: "the-building", kind: "From the life of the Prophet ﷺ", title: "The last brick",
        scene: "The Prophet ﷺ gave his companions a picture to explain his place among the prophets.",
        story: [
          "“My example and the example of the prophets before me is that of a man who built a house. He built it well and made it beautiful, except for the place of one brick in a corner.",
          "People walked around it, admiring it, and saying: if only this brick were put in its place!",
          "I am that brick, and I am the seal of the prophets.”",
        ],
        lesson: "Every prophet built part of the same house of guidance. Muhammad ﷺ completed it; nothing is missing, and no prophet comes after him.",
        src: "Bukhari 3535, Muslim 2286",
        check: { q: "In the example, what is the Prophet ﷺ?", options: ["The foundation", "The last brick that completes the house", "The roof", "The door"], answer: 1, why: "He is the seal of the prophets." } },
      L("What makes Muhammad ﷺ special", [
        "He was sent to all humanity, while earlier prophets were sent to their own people (Muslim 523).",
        "He was given the Quran, the lasting miracle.",
        "He will be the first to intercede on the Day of Judgment, and the first through the gates of Paradise.",
        "He is a mercy to all the worlds (21:107).",
      ]),
      Sc("prophets-mock", "Someone in your class makes fun of Prophet ʿĪsā (as). What do you do?", [
        { text: "Laugh along; he isn’t our prophet.", feedback: "ʿĪsā (as) is one of the five greatest prophets in Islam; believing in him is part of our faith." },
        { text: "Calmly say that Muslims love and honour ʿĪsā as a mighty messenger of Allah, and you don’t accept mocking any prophet.", best: true, feedback: "Defending all prophets with calm respect shows the truth of Islam." },
        { text: "Mock their beliefs back.", feedback: "Answering mockery with mockery is not the way of the prophets." },
      ]),
      Rf(["Which prophet’s story do I know least? Which one helps me in my current situation?", "Do I love the Prophet ﷺ enough to follow his Sunnah in daily things?"], ["Learn the 25 names together as a family chant.", "Tell one prophet’s story at bedtime each week."]),
      L("Key takeaways", [
        "Allah sent messengers to every nation with one message: tawḥīd.",
        "We believe in all of them, including those not named.",
        "Muhammad ﷺ is the last messenger, sent to all humanity.",
      ]),
    ],
    quiz: [
      q("How many prophets are named in the Quran?", ["10", "25", "99", "124,000"], 1, "Twenty-five by name.", "Quran"),
      q("What was the core message of every prophet?", ["Build cities", "Worship Allah alone", "Fight", "Trade honestly only"], 1, "Quran 16:36.", "Quran 16:36"),
      q("Who are the five of strongest resolve?", ["Ādam, Idrīs, Hūd, Ṣāliḥ, Lūṭ", "Nūḥ, Ibrāhīm, Mūsā, ʿĪsā, Muhammad ﷺ", "Dāwūd, Sulaymān, Yūnus, Yūsuf, Ayyūb", "Yaḥyā, Zakariyyā, Ilyās, al-Yasaʿ, Shuʿayb"], 1, "Quran 33:7, 46:35.", "Quran 33:7"),
      q("What is the difference between a nabī and a rasūl?", ["None", "A rasūl is sent with a message to a people; every rasūl is a nabī", "A nabī is greater", "A rasūl never receives revelation"], 1, "Not every prophet is a messenger.", "Scholarly definition"),
      q("In the Prophet’s ﷺ example of the house, he is…", ["The door", "The last brick", "The roof", "The builder"], 1, "Bukhari 3535.", "Bukhari 3535"),
      q("To whom was Muhammad ﷺ sent?", ["Only the Arabs", "All humanity", "Only Makkah", "Only Muslims"], 1, "Muslim 523.", "Muslim 523"),
      q("Who are the most severely tested people?", ["Kings", "The prophets", "The rich", "Children"], 1, "Tirmidhi 2398.", "Tirmidhi 2398"),
      q("Were there prophets not named in the Quran?", ["No", "Yes, many", "Only one", "We cannot know"], 1, "Quran 4:164.", "Quran 4:164"),
    ] },

  { id: "last-day", title: "Belief in the Last Day", summary: "Death, the grave, the Resurrection, the Scale, the Bridge, Paradise and Hell.", sources: ["Quran 99:7–8", "Quran 21:47", "Quran 70:4", "Bukhari 6520", "Muslim 2864", "Tirmidhi 2002", "Bukhari 7439", "Muslim 2834"],
    blocks: [
      P("This life is not the end. Every person will die, be questioned in the grave, be raised again, and stand before Allah to be judged. Belief in the Last Day gives life its meaning: nothing good is wasted and no injustice goes unanswered. “Whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it” (99:7–8)."),
      St("The journey after death, in order", [
        "Death: the soul is taken by the Angel of Death at its appointed time.",
        "The grave (barzakh): two angels ask: Who is your Lord? What is your religion? Who is this man sent to you? For the believer the grave becomes a garden; for others, a pit (Tirmidhi 2460).",
        "The Trumpet: Isrāfīl blows, everything dies; then a second blow and all are raised.",
        "The Gathering: people stand barefoot and uncovered, on a Day lasting fifty thousand years (70:4), the sun brought close, each in sweat by his deeds (Muslim 2864).",
        "The Intercession: people go from prophet to prophet until they come to Muhammad ﷺ, who prostrates and intercedes for the judgment to begin.",
        "The Books: each receives his record, in the right hand or the left (69:19–26).",
        "The Scale (Mīzān): deeds are weighed; “We will set up the scales of justice” (21:47).",
        "The Bridge (Ṣirāṭ): set over Hell; people cross at speeds according to their deeds, some like lightning, some crawling (Bukhari 7439).",
        "The Pool (Ḥawḍ) of the Prophet ﷺ: whiter than milk, sweeter than honey; whoever drinks from it will never thirst again (Bukhari 6579).",
        "Paradise or Hell: the final, eternal home.",
      ]),
      Cmp("Paradise and Hell", "Paradise (Jannah)", "Hell (Jahannam)", [
        ["What no eye has seen, no ear has heard, and no heart has imagined (Bukhari 3244)", "Its fire is seventy times hotter than the fire of this world (Bukhari 3265)"],
        ["Its smallest place is ten times this world (Muslim 186)", "Its people wish to be returned to do good"],
        ["The greatest joy: seeing Allah (Muslim 181)", "The greatest loss: being veiled from Him"],
        ["Eternal; no illness, ageing, sadness or death", "Eternal for those who die on disbelief; believers who sinned may be taken out by intercession"],
      ]),
      Rw("The Scale", "An atom’s weight of good is counted", "Nothing will be lost: an atom’s weight of good will be seen (99:7). Two light phrases, “SubḥānAllāhi wa biḥamdih, SubḥānAllāhi-l-ʿaẓīm”, are heavy on the scale (Bukhari 6406), and nothing is heavier than good character (Tirmidhi 2002).", "Quran 99:7, Bukhari 6406"),
      { type: "story", id: "last-man", kind: "From the life of the Prophet ﷺ", title: "The last man to enter Paradise",
        scene: "The Prophet ﷺ described the very last person to leave the Fire and enter Paradise.",
        story: [
          "He crawls out of the Fire, sometimes walking, sometimes falling. Allah shows him a tree and he asks to be brought near it, promising to ask for nothing more. Then another tree, and another, and each time he promises and asks again.",
          "At last he is brought to the gate of Paradise, and hears its people, and says: “My Lord, let me in.”",
          "Allah says: “Would it please you if I gave you the like of the world and ten times as much?” The man says: “Are You mocking me, while You are the Lord of the worlds?” And the Prophet ﷺ laughed.",
          "This is the lowest rank in Paradise.",
        ],
        lesson: "If the least in Paradise has ten times this world, imagine the highest. And Allah’s mercy reaches even the one who barely makes it out.",
        src: "Muslim 186, Bukhari 7511",
        check: { q: "What does the last man to enter Paradise receive?", options: ["A small garden", "The like of this world and ten times more", "Nothing", "A palace only"], answer: 1, why: "That is the lowest rank in Paradise." } },
      Sc("lastday-cheat", "In an exam, you could copy a friend’s answers without the teacher seeing. What do you remember?", [
        { text: "Nobody will ever know.", feedback: "Every deed is recorded, and the record will be read on the Last Day." },
        { text: "Every deed will be on the Scale; I’d rather a lower mark than a sin on my record.", best: true, feedback: "Belief in the Last Day turns into honesty when no one is watching." },
        { text: "I’ll cheat and give charity later to balance it.", feedback: "Planning sin with a ‘fix’ is not repentance, and cheating also wrongs others." },
      ]),
      Rf(["If my record were read out today, which page would I want to tear out?", "What one deed would I want on my scale above all others?"], ["Ask: what do you think Paradise will be like? Then share the ḥadīth of the last man to enter it.", "Make a family list of “heavy on the scale” deeds and tick them through the week."]),
      L("Key takeaways", [
        "Death, the grave, resurrection, judgment, then Paradise or Hell.",
        "Every atom of good and evil is recorded and weighed.",
        "Belief in the Last Day turns into honesty, patience and hope today.",
      ]),
    ],
    quiz: [
      q("What three questions are asked in the grave?", ["Name, age, job", "Your Lord, your religion, the man sent to you", "Wealth, family, home", "Prayer, fasting, Ḥajj"], 1, "Tirmidhi 1071.", "Tirmidhi 1071"),
      q("How long is the Day of Judgment, according to 70:4?", ["One day", "1,000 years", "50,000 years", "100 years"], 2, "A Day measured as fifty thousand years.", "Quran 70:4"),
      q("Who intercedes for the judgment to begin?", ["Ādam", "Mūsā", "Muhammad ﷺ", "ʿĪsā"], 2, "The great intercession.", "Bukhari 4712"),
      q("What is the Ṣirāṭ?", ["A book", "A bridge over Hell", "A pool", "A gate"], 1, "People cross by their deeds.", "Bukhari 7439"),
      q("Whoever drinks from the Prophet’s ﷺ Pool…", ["Is forgiven", "Will never thirst again", "Becomes rich", "Is a scholar"], 1, "Bukhari 6579.", "Bukhari 6579"),
      q("What is the greatest joy of Paradise?", ["Gold palaces", "Seeing Allah", "Rivers", "Food"], 1, "Muslim 181.", "Muslim 181"),
      q("How much does the lowest person in Paradise receive?", ["Half this world", "This world and ten times more", "A tent", "Nothing"], 1, "Muslim 186.", "Muslim 186"),
      q("“Whoever does an atom’s weight of good…”", ["“…it is forgotten”", "“…will see it”", "“…only if it is big”", "“…pays for it”"], 1, "Quran 99:7.", "Quran 99:7"),
    ] },

  { id: "qadar", title: "Belief in the divine decree (qadar)", summary: "Allah knows, writes, wills and creates all things, and we are responsible for our choices.", sources: ["Muslim 8", "Quran 54:49", "Quran 57:22", "Muslim 2653", "Tirmidhi 2516", "Muslim 2999", "Muslim 2664", "Bukhari 4949"],
    blocks: [
      P("Belief in qadar means believing that everything that happens, good or bad, happens by Allah’s knowledge, writing, will and creation. “Indeed, We created everything by measure” (54:49). It gives a believer peace: nothing that reached you could have missed you, and nothing that missed you could have reached you (Tirmidhi 2516)."),
      St("The four levels of qadar", [
        "Knowledge: Allah knows everything, past, present and future, in full detail.",
        "Writing: Allah wrote the measures of everything fifty thousand years before creating the heavens and the earth (Muslim 2653).",
        "Will: nothing happens in His dominion except what He wills.",
        "Creation: Allah is the Creator of all things, including the actions of His servants.",
      ]),
      Cmp("Two truths held together", "Allah decrees", "We are responsible", [
        ["Nothing happens outside His will", "We choose, and we are judged on our choices (18:29)"],
        ["Results are in His hands", "Effort is our duty: “tie your camel, and rely on Allah”"],
        ["We accept what has passed with patience", "We do not use qadar as an excuse for sin before it is done"],
        ["Provision is written", "We are commanded to seek it"],
      ]),
      Qt("Work, for everyone will find easy that for which they were created.", "Bukhari 4949", undefined, undefined, "Said when companions asked: should we then rely on what is written and stop working?"),
      L("How qadar shapes daily life", [
        "In ease: thank Allah, knowing it came from Him, not only from your cleverness.",
        "In hardship: be patient, knowing it was written and carries reward. The believer’s affair is all good (Muslim 2999).",
        "Before deciding: take the means, pray istikhārah, then trust Him.",
        "After a mistake: do not say “if only I had…”, for “if only” opens the door to Shayṭān. Say: “Allah decreed, and what He willed He did” (Muslim 2664).",
        "Duʿāʾ is part of qadar: it is among the means Allah decreed for things to happen.",
      ]),
      { type: "story", id: "adam-musa", kind: "From the life of the Prophet ﷺ", title: "When Mūsā argued with Ādam",
        scene: "The Prophet ﷺ told of a conversation between Ādam and Mūsā (as).",
        story: [
          "Mūsā said: “You are Ādam, whose mistake brought us out of Paradise!”",
          "Ādam said: “You are Mūsā, whom Allah chose for His message and His speech. Do you blame me for something Allah wrote for me before He created me?”",
          "The Prophet ﷺ said: “So Ādam won the argument.”",
        ],
        lesson: "Ādam had already repented and been forgiven; he pointed to qadar about a calamity that had passed, not to excuse a sin. We may find comfort in qadar for what has happened, but never use it as an excuse to sin.",
        src: "Bukhari 3409, Muslim 2652",
        check: { q: "What was Ādam pointing to when he answered Mūsā?", options: ["An excuse to keep sinning", "A calamity already written and repented from", "His age", "Mūsā’s mistakes"], answer: 1, why: "Qadar comforts over past calamities; it is never an excuse for sin." } },
      Sc("qadar-exam", "You studied hard but failed an important exam. A friend says: “It was your qadar, so why bother next time?” What do you say?", [
        { text: "“True, effort is pointless.”", feedback: "The companions were told: work, for each will find easy what he was created for." },
        { text: "“It was written, so I accept it with patience; and studying again is also part of what I’m commanded.”", best: true, feedback: "Accept the past, and take the means for the future. That is the balance of qadar." },
        { text: "“It’s unfair; Allah wronged me.”", feedback: "Allah wrongs no one; hardship carries hidden good and reward." },
      ]),
      Rf(["Is there something in my past I keep saying “if only” about?", "Do I make duʿāʾ as part of my plans, or only after they fail?"], ["Teach children: “What reached me was never going to miss me.”", "When something goes wrong at home, practise saying together: “Qaddara-llāhu wa mā shāʾa faʿal.”"]),
      L("Key takeaways", [
        "Qadar has four levels: knowledge, writing, will and creation.",
        "Allah decrees, and we are responsible for our choices.",
        "Accept the past with patience; work and pray for the future.",
      ]),
    ],
    quiz: [
      q("When were the measures of creation written?", ["At birth", "50,000 years before the heavens and earth", "On the Last Day", "Never"], 1, "Muslim 2653.", "Muslim 2653"),
      q("What are the four levels of qadar?", ["Prayer, fasting, zakāt, Ḥajj", "Knowledge, writing, will, creation", "Past, present, future, eternity", "Hope, fear, love, trust"], 1, "The scholars’ summary.", "Scholarly summary"),
      q("What did the Prophet ﷺ say when asked “should we stop working and rely on what is written”?", ["“Yes”", "“Work, for each will find easy what he was created for”", "“Only pray”", "“Nobody knows”"], 1, "Bukhari 4949.", "Bukhari 4949"),
      q("What should we say instead of “if only” after a misfortune?", ["Nothing", "“Allah decreed, and what He willed He did”", "“It’s unfair”", "“Next time”"], 1, "“If only” opens the door to Shayṭān.", "Muslim 2664"),
      q("Can qadar be used as an excuse to sin?", ["Yes", "No", "Only small sins", "Only when tired"], 1, "We are responsible for our choices.", "Quran 18:29"),
      q("“What reached you…”", ["“…was a mistake”", "“…could never have missed you”", "“…was luck”", "“…can be undone”"], 1, "Tirmidhi 2516.", "Tirmidhi 2516"),
      q("Who won the argument between Ādam and Mūsā?", ["Mūsā", "Ādam", "Neither", "Both"], 1, "Bukhari 3409.", "Bukhari 3409"),
      q("Is duʿāʾ useless because everything is decreed?", ["Yes", "No, duʿāʾ is itself among the decreed means", "Only in Ramadan", "Only for prophets"], 1, "Allah decrees outcomes through their means, including duʿāʾ.", "Tirmidhi 2139"),
    ] },
];
