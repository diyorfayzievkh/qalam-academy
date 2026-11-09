import type { Block, Lesson } from "./library";
import type { Question } from "./topics";
import { L, P } from "./ruhiy";

// Seerah world: the life of the Prophet ﷺ in chapters, from birth to his
// passing, with stories, lessons for today and a quiz per chapter. Dates are
// approximate; sources are the ṣaḥīḥ collections and the classical Sīrah
// (Ibn Isḥāq/Ibn Hishām). A scholar should review before release.

const Qt = (en: string, src: string, ar?: string, tr?: string, note?: string): Block => ({ type: "quote", en, src, ar, tr, note });
const Sc = (id: string, situation: string, options: { text: string; best?: boolean; feedback: string }[]): Block => ({ type: "scenario", id, situation, options });
const Rf = (think: string[], home?: string[]): Block => ({ type: "reflect", think, home });
const T = (items: { when: string; what: string }[]): Block => ({ type: "timeline", items });
const story = (id: string, kind: string, title: string, scene: string, s: string[], lesson: string, src: string, check: { q: string; options: string[]; answer: number; why: string }): Block =>
  ({ type: "story", id, kind, title, scene, story: s, lesson, src, check });
const q = (q: string, options: string[], answer: number, why: string, src: string): Question => ({ q, options, answer, why, src });
const PS = "From the Sīrah";
const PB = "From the life of the Prophet ﷺ";

export const SEERAH_LESSONS: Lesson[] = [
  { id: "timeline", title: "The life of the Prophet ﷺ at a glance", summary: "Sixty-three years in one timeline, from the Year of the Elephant to the Farewell Ḥajj.", sources: ["Ibn Hishām, al-Sīrah", "Bukhari 3", "Bukhari 3902", "Bukhari 349"],
    blocks: [
      P("Muhammad ibn ʿAbdullāh ﷺ lived 63 years: 40 before prophethood, 13 as a prophet in Makkah, and 10 in Madinah. His life is the living explanation of the Quran. “In the Messenger of Allah you have an excellent example” (33:21). This world follows his life in chapters, each with its story and its lessons for us today."),
      T([
        { when: "c. 570 CE", what: "Born in Makkah in the Year of the Elephant. His father ʿAbdullāh died before his birth." },
        { when: "c. 576", what: "His mother Āminah dies; his grandfather ʿAbd al-Muṭṭalib, then his uncle Abū Ṭālib, care for him." },
        { when: "c. 595", what: "Marries Khadījah (ra), aged 25." },
        { when: "c. 605", what: "Resolves the dispute over the Black Stone; already known as al-Amīn." },
        { when: "610", what: "First revelation in the cave of Ḥirāʾ, in Ramadan: “Iqraʾ” (Bukhari 3)." },
        { when: "613", what: "The public call begins; persecution of the Muslims." },
        { when: "615", what: "First hijrah of Muslims to Abyssinia." },
        { when: "616–619", what: "The boycott of Banū Hāshim in the valley of Abū Ṭālib." },
        { when: "619", what: "The Year of Sorrow: Khadījah and Abū Ṭālib die. The journey to Ṭāʾif." },
        { when: "c. 621", what: "Al-Isrāʾ wal-Miʿrāj; the five prayers prescribed (Bukhari 349)." },
        { when: "621–622", what: "The pledges of ʿAqabah with the people of Yathrib." },
        { when: "622 (1 AH)", what: "The Hijrah to Madinah; the Islamic calendar begins." },
        { when: "624 (2 AH)", what: "Fasting of Ramadan prescribed; the Battle of Badr, 17 Ramadan." },
        { when: "625 (3 AH)", what: "The Battle of Uḥud." },
        { when: "627 (5 AH)", what: "The Battle of the Trench (al-Khandaq)." },
        { when: "628 (6 AH)", what: "The Treaty of Ḥudaybiyyah; letters to the kings." },
        { when: "630 (8 AH)", what: "The Conquest of Makkah, with a general amnesty." },
        { when: "632 (10–11 AH)", what: "The Farewell Ḥajj and sermon; he passes away in Madinah, aged 63." },
      ]),
      Rf(["Which period of his life feels closest to my own situation right now?", "What do I know about his life before he was 40?"], ["Put the timeline on the wall at home and mark each chapter as you read it together."]),
      L("Key takeaways", [
        "40 years before prophethood, 13 in Makkah, 10 in Madinah.",
        "His character was known and trusted long before revelation.",
        "His life is the Quran lived out: our example in everything.",
      ]),
    ],
    quiz: [
      q("How old was the Prophet ﷺ when revelation began?", ["25", "40", "53", "63"], 1, "In 610 CE, in the cave of Ḥirāʾ.", "Bukhari 3"),
      q("How many years did he spend as a prophet in Makkah?", ["3", "10", "13", "23"], 2, "Then ten in Madinah.", "Ibn Hishām"),
      q("What year begins the Islamic calendar?", ["Year of the Elephant", "The Hijrah", "Badr", "The Conquest"], 1, "622 CE, 1 AH.", "Bukhari 3934"),
      q("What was the Year of Sorrow?", ["The year of Uḥud", "When Khadījah and Abū Ṭālib died", "The year of the boycott", "The Farewell year"], 1, "619 CE.", "Ibn Hishām"),
      q("How old was he when he passed away?", ["60", "63", "70", "57"], 1, "Bukhari 3536.", "Bukhari 3536"),
      q("When was the five daily prayers prescribed?", ["At Badr", "On the Miʿrāj", "In the Farewell Ḥajj", "At birth"], 1, "Bukhari 349.", "Bukhari 349"),
    ] },

  { id: "early-life", title: "Birth, childhood and youth", summary: "An orphan in the desert who became al-Amīn, the trustworthy.", sources: ["Ibn Hishām, al-Sīrah", "Quran 105", "Quran 93:6–8", "Bukhari 2262", "Muslim 162"],
    blocks: [
      P("Muhammad ﷺ was born in Makkah in the Year of the Elephant, when Abrahah’s army with its elephant came to destroy the Kaʿbah and was destroyed by flocks of birds (Sūrat al-Fīl, 105). His father ʿAbdullāh had died before he was born. Allah later reminded him: “Did He not find you an orphan and give you shelter?” (93:6)."),
      L("Growing up", [
        "As a baby he was nursed in the desert by Ḥalīmah al-Saʿdiyyah, where he grew strong and learned pure Arabic. Ḥalīmah’s household saw unusual blessing while he was with them.",
        "In the desert, angels opened his chest and washed his heart, removing Shayṭān’s share from it (Muslim 162).",
        "At six his mother Āminah died; at eight his grandfather ʿAbd al-Muṭṭalib died; then his uncle Abū Ṭālib raised him with great love.",
        "As a boy he herded sheep for the people of Makkah for a few coins. He said: every prophet herded sheep (Bukhari 2262), learning patience and care.",
        "As a young man he joined Ḥilf al-Fuḍūl, a pact of Makkan chiefs to defend anyone wronged in the city. Years later he said he would still answer such a call in Islam.",
      ]),
      story("black-stone", PS, "The Black Stone and the cloak", "Makkah, c. 605. A flood had damaged the Kaʿbah, and the tribes of Quraysh rebuilt it together.",
        [
          "When it was time to put the Black Stone back into its place, every clan wanted the honour. Tempers rose; some dipped their hands in blood, swearing to fight for it.",
          "They agreed: the next man to enter through the gate of the sanctuary would judge between them. The man who walked in was Muhammad ﷺ, then about 35. They cried: “It is al-Amīn! We accept him!”",
          "He spread his cloak on the ground, placed the Stone in the middle, and asked a chief of each clan to hold an edge. Together they lifted it, and he set the Stone in its place with his own hands.",
        ],
        "His wisdom turned a coming war into shared honour. Long before prophethood, his character had earned the trust of all of Makkah.",
        "Ibn Hishām, al-Sīrah; Musnad Aḥmad",
        { q: "How did he solve the dispute over the Black Stone?", options: ["He chose one clan", "He placed it on a cloak and had every clan lift it together", "He drew lots", "He refused to help"], answer: 1, why: "Everyone shared the honour, and no blood was shed." }),
      L("Marriage to Khadījah", [
        "Khadījah bint Khuwaylid, a respected, wealthy businesswoman, employed him to trade for her in Syria and was struck by his honesty and character.",
        "She proposed marriage through a friend. He was 25; they lived together for 25 years, and he married no one else while she lived.",
        "She was the first person to believe in him, and he never forgot her: “She believed in me when people disbelieved” (Musnad Aḥmad).",
      ]),
      Rf(["Am I known for honesty among people who don’t share my faith?", "What did he learn from herding sheep that I could learn from my daily work?"], ["Tell children he was an orphan too: Allah takes care of those who lose a parent.", "Ask: what would make people call you al-Amīn?"]),
      L("Key takeaways", [
        "Born an orphan in the Year of the Elephant, raised by his grandfather and uncle.",
        "Known as al-Amīn long before revelation.",
        "Married Khadījah, the first believer, at 25.",
      ]),
    ],
    quiz: [
      q("Which event marks the year of his birth?", ["The flood", "Abrahah’s army with the elephant", "Badr", "The boycott"], 1, "Sūrat al-Fīl, 105.", "Quran 105"),
      q("Who nursed him in the desert?", ["Āminah", "Ḥalīmah al-Saʿdiyyah", "Khadījah", "Fāṭimah"], 1, "Among Banū Saʿd.", "Ibn Hishām"),
      q("Who raised him after his grandfather died?", ["Abū Lahab", "Abū Ṭālib", "Ḥamzah", "al-ʿAbbās"], 1, "His uncle Abū Ṭālib.", "Ibn Hishām"),
      q("What did every prophet do, according to Bukhari 2262?", ["Trade", "Herd sheep", "Farm", "Write"], 1, "Bukhari 2262.", "Bukhari 2262"),
      q("How did he settle the Black Stone dispute?", ["By force", "With a cloak lifted by all the clans", "By a vote", "He placed it alone"], 1, "Everyone shared the honour.", "Ibn Hishām"),
      q("How old was he when he married Khadījah?", ["20", "25", "40", "30"], 1, "She was the first to believe in him.", "Ibn Hishām"),
    ] },

  { id: "revelation", title: "The first revelation", summary: "The cave of Ḥirāʾ, “Iqraʾ”, and Khadījah’s comfort.", sources: ["Bukhari 3", "Quran 96:1–5", "Quran 74:1–5"],
    blocks: [
      P("As he approached forty, the Prophet ﷺ came to love solitude. He would take provisions and spend nights in worship in the cave of Ḥirāʾ, on the Mountain of Light above Makkah. There, in Ramadan of 610 CE, everything changed."),
      story("iqra", PB, "“Read!”", "The cave of Ḥirāʾ, a small cave high on Jabal al-Nūr, looking towards the Kaʿbah.",
        [
          "The angel Jibrīl came to him and said: “Read!” He said: “I am not one who reads.” The angel held him tightly until he could bear no more, then released him: “Read!” Again: “I am not one who reads.” A second time, and a third.",
          "Then the angel said: “Read in the name of your Lord who created; created man from a clinging clot. Read, and your Lord is the Most Generous, who taught by the pen, taught man what he did not know” (96:1–5).",
          "He returned home trembling: “Cover me, cover me!” Khadījah wrapped him until his fear left him. He told her: “I fear for myself.”",
          "She said: “Never! By Allah, Allah will never disgrace you. You keep family ties, carry the burdens of the weak, give to the destitute, honour your guests, and help people in true hardship.”",
          "She took him to her cousin Waraqah ibn Nawfal, a Christian scholar, who said: “This is the same angel Allah sent to Mūsā. I wish I could be alive when your people drive you out.”",
        ],
        "The first word of revelation was “Read”: Islam began with knowledge. And Khadījah’s first comfort was a list of his good character: good deeds are a sign of Allah’s care.",
        "Bukhari 3, Muslim 160",
        { q: "What was the first word revealed?", options: ["Pray", "Read (Iqraʾ)", "Fast", "Believe"], answer: 1, why: "Sūrat al-ʿAlaq 96:1." }),
      Qt("Read in the name of your Lord who created.", "Quran 96:1", "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", "Iqraʾ bi-smi rabbika-lladhī khalaq."),
      L("The first believers", [
        "Khadījah, his wife: the first person to believe.",
        "Abū Bakr, his closest friend, among the men.",
        "ʿAlī, his young cousin who lived in his home, among the children.",
        "Zayd ibn Ḥārithah, his freed servant and adopted son.",
        "For three years the call was secret, spread person to person in the house of al-Arqam.",
      ]),
      Rf(["What did Khadījah do when her husband was afraid? How do I comfort the people I love?", "Islam began with “Read”. What am I reading to grow my faith?"], ["Share Khadījah’s words and ask: what good deeds would someone list about you?"]),
      L("Key takeaways", [
        "Revelation began in Ramadan, 610, in the cave of Ḥirāʾ.",
        "The first word was “Read”: Islam starts with knowledge.",
        "Khadījah, Abū Bakr, ʿAlī and Zayd were the first believers.",
      ]),
    ],
    quiz: [
      q("Where did the first revelation come?", ["Masjid al-Ḥarām", "The cave of Ḥirāʾ", "The cave of Thawr", "Madinah"], 1, "On Jabal al-Nūr.", "Bukhari 3"),
      q("Which verses were revealed first?", ["Al-Fātiḥah", "Al-ʿAlaq 96:1–5", "Al-Ikhlāṣ", "Āyat al-Kursī"], 1, "“Read in the name of your Lord.”", "Bukhari 3"),
      q("Who comforted him first?", ["Abū Bakr", "Khadījah", "Abū Ṭālib", "ʿAlī"], 1, "“Allah will never disgrace you.”", "Bukhari 3"),
      q("Who was Waraqah ibn Nawfal?", ["A merchant", "Khadījah’s cousin, a Christian scholar", "An angel", "A chief of Quraysh"], 1, "He recognised the angel of Mūsā.", "Bukhari 3"),
      q("Who was the first man to believe?", ["ʿUmar", "Abū Bakr", "ʿUthmān", "Ḥamzah"], 1, "His closest friend.", "Ibn Hishām"),
      q("In which month did revelation begin?", ["Shawwāl", "Ramadan", "Dhū al-Ḥijjah", "Rajab"], 1, "Quran 2:185.", "Quran 2:185"),
    ] },

  { id: "makkah", title: "The call in Makkah and the persecution", summary: "Thirteen years of patience: Bilāl, Sumayyah, Abyssinia, the boycott and Ṭāʾif.", sources: ["Ibn Hishām, al-Sīrah", "Bukhari 3231", "Bukhari 3852", "Quran 26:214", "Quran 16:106"],
    blocks: [
      P("After three secret years Allah commanded: “Warn your nearest relatives” (26:214). The Prophet ﷺ climbed Mount Ṣafā and called the clans of Quraysh. When he warned them of a punishment ahead, his uncle Abū Lahab cursed him, and Sūrat al-Masad was revealed. From then on the Muslims faced mockery, boycott, torture and exile."),
      L("They paid the price of faith", [
        "Bilāl, an Abyssinian slave, was laid on the burning sand with a rock on his chest. He kept repeating: “Aḥad, aḥad” (One, One), until Abū Bakr bought and freed him.",
        "Sumayyah, the mother of ʿAmmār, became the first martyr of Islam, killed by Abū Jahl. The Prophet ﷺ passed the family being tortured and said: “Patience, family of Yāsir; your promised place is Paradise.”",
        "Khabbāb ibn al-Aratt was laid on hot coals until the fat of his back put them out.",
        "When a companion asked the Prophet ﷺ to pray against Quraysh, he told of believers before who were sawn in half without leaving their faith, and said: “Allah will complete this matter… but you are in a hurry” (Bukhari 3852).",
      ]),
      L("Abyssinia and the boycott", [
        "In 615, a group of Muslims emigrated to Abyssinia, to a just Christian king, the Negus. When Quraysh demanded them back, Jaʿfar ibn Abī Ṭālib recited Sūrat Maryam; the Negus wept and said: this and what Mūsā brought come from the same lamp. He protected them.",
        "From 616 to 619, Quraysh boycotted Banū Hāshim: no trade, no marriage. The Prophet ﷺ, his family and the Muslims were confined to a valley, eating leaves, with children crying from hunger, for about three years.",
      ]),
      story("taif", PB, "The day of Ṭāʾif", "619, the Year of Sorrow. Khadījah and Abū Ṭālib had both died. The Prophet ﷺ walked to the town of Ṭāʾif, hoping its people would accept Islam.",
        [
          "Its leaders rejected him rudely and set their children and slaves on him. They lined the road and stoned him until his sandals filled with blood.",
          "He took shelter in an orchard and turned to Allah with a moving duʿāʾ, complaining to Him of his weakness, and saying: “If You are not angry with me, I do not care.”",
          "Jibrīl came with the angel of the mountains, who said: “If you wish, I will bring the two mountains together and crush them.”",
          "He said: “No. I hope that Allah will bring from their descendants people who worship Allah alone.” Years later, the people of Ṭāʾif became Muslims.",
        ],
        "At his worst moment, with the power to destroy those who hurt him, he chose hope and mercy for their children.",
        "Bukhari 3231, Muslim 1795",
        { q: "What did the Prophet ﷺ answer the angel of the mountains?", options: ["“Crush them”", "“No, I hope their descendants will worship Allah”", "“Wait until tomorrow”", "Nothing"], answer: 1, why: "He chose mercy and hope over revenge." }),
      Sc("makkah-mock", "Your classmates mock you every day for praying at school. What would the Makkan companions teach you?", [
        { text: "Stop praying at school to avoid trouble.", feedback: "The companions held on to their faith through far worse." },
        { text: "Keep praying with patience and good manners, find a quiet place, and ask an adult for support.", best: true, feedback: "Patience, wisdom and seeking help: the way of Bilāl and the early Muslims." },
        { text: "Fight them.", feedback: "In Makkah, the Muslims answered abuse with patience, not violence." },
      ]),
      Rf(["What does “Aḥad, aḥad” mean to me when I am under pressure?", "Who in my life needs patience and hope, like the family of Yāsir?"], ["Tell children Bilāl’s story, and how he later called the first adhān.", "Read Sūrat Maryam’s opening together, and talk about how it moved the Negus."]),
      L("Key takeaways", [
        "Thirteen years in Makkah were years of patience under persecution.",
        "Bilāl, Sumayyah, Khabbāb and others held firm on tawḥīd.",
        "At Ṭāʾif he chose mercy over revenge, and hope for the future.",
      ]),
    ],
    quiz: [
      q("What did Bilāl repeat under torture?", ["“Help!”", "“Aḥad, aḥad”", "Nothing", "“Forgive me”"], 1, "One, One: tawḥīd.", "Ibn Hishām"),
      q("Who was the first martyr in Islam?", ["Ḥamzah", "Sumayyah", "Bilāl", "Jaʿfar"], 1, "The mother of ʿAmmār.", "Ibn Hishām"),
      q("Where did Muslims first emigrate in 615?", ["Madinah", "Abyssinia", "Syria", "Yemen"], 1, "To the just Negus.", "Ibn Hishām"),
      q("What did Jaʿfar recite before the Negus?", ["Al-Fātiḥah", "Sūrat Maryam", "Sūrat Yāsīn", "Āyat al-Kursī"], 1, "The Negus wept.", "Musnad Aḥmad 1740"),
      q("How long did the boycott last?", ["One month", "About three years", "Ten years", "One week"], 1, "616 to 619.", "Ibn Hishām"),
      q("What did he say to the angel of the mountains at Ṭāʾif?", ["Destroy them", "No, I hope their descendants will worship Allah", "Wait", "Help me fight"], 1, "Bukhari 3231.", "Bukhari 3231"),
    ] },

  { id: "isra-hijrah", title: "Al-Isrāʾ, ʿAqabah and the Hijrah", summary: "The Night Journey, the pledges of Madinah, and the migration that changed history.", sources: ["Quran 17:1", "Bukhari 349", "Bukhari 3905", "Bukhari 3653", "Quran 9:40", "Ibn Hishām, al-Sīrah"],
    blocks: [
      P("After the Year of Sorrow, Allah honoured His Messenger with the Night Journey: from al-Masjid al-Ḥarām to al-Masjid al-Aqṣā, where he led all the prophets in prayer, then up through the heavens to Sidrat al-Muntahā, where the five daily prayers were given (17:1, Bukhari 349). The next morning, when Quraysh mocked, Abū Bakr said: “If he said it, then it is true,” and was named al-Ṣiddīq."),
      L("The pledges of ʿAqabah", [
        "At the Ḥajj season, a few men from Yathrib met the Prophet ﷺ and accepted Islam.",
        "The next year, twelve pledged at ʿAqabah not to associate anything with Allah, steal, commit adultery, kill their children or slander. Muṣʿab ibn ʿUmayr went back with them as the first teacher, and Islam spread in Yathrib.",
        "In 622, seventy-three men and two women pledged to protect him as they protected their own families. The way to Madinah was open.",
      ]),
      story("hijrah-night", PS, "The night of the Hijrah", "Makkah, 622. The leaders of Quraysh agreed to kill the Prophet ﷺ together, one young man from each clan, so that no single clan could be blamed.",
        [
          "They surrounded his house at night. He asked ʿAlī to sleep in his bed, then walked out through them reciting from Sūrat Yāsīn, throwing dust over their heads; Allah blinded them and they did not see him.",
          "He went to Abū Bakr, who wept with joy at being chosen as his companion. They hid three nights in the cave of Thawr while Quraysh searched with trackers and offered a hundred camels for him, dead or alive.",
          "Asmāʾ, Abū Bakr’s daughter, brought them food, tying it with her waistband torn in two; she became “the one with two waistbands”. A shepherd brought milk and covered their tracks with his flock.",
          "On the road, Surāqah ibn Mālik chased them for the reward. His horse’s legs sank into the sand three times. The Prophet ﷺ promised him the bracelets of Chosroes; years later, under ʿUmar, Surāqah wore them.",
          "Madinah came out to meet him, the girls singing “Ṭalaʿa-l-badru ʿalaynā”. Everyone wanted to host him, and he let his camel choose; where it knelt, the masjid was built.",
        ],
        "Planning, secrecy and effort, together with complete trust in Allah. The Hijrah teaches both.",
        "Bukhari 3905, Bukhari 3653, Ibn Hishām",
        { q: "Who slept in the Prophet’s ﷺ bed on the night of the Hijrah?", options: ["Abū Bakr", "ʿAlī", "Zayd", "Bilāl"], answer: 1, why: "ʿAlī stayed to return the trusts." }),
      Qt("Do not grieve; indeed Allah is with us.", "Quran 9:40", "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", "Lā taḥzan inna-llāha maʿanā."),
      Rf(["What did the Hijrah cost the Muhājirūn, and what did they gain?", "Is there a “hijrah” I need to make: away from a habit, a place or company?"], ["Ask: why did the Prophet ﷺ plan so carefully if Allah was protecting him?", "Learn “Ṭalaʿa-l-badru ʿalaynā” together."]),
      L("Key takeaways", [
        "Al-Isrāʾ wal-Miʿrāj gave the five prayers; Abū Bakr became al-Ṣiddīq.",
        "The pledges of ʿAqabah opened Madinah to Islam.",
        "The Hijrah joined careful planning with complete trust in Allah.",
      ]),
    ],
    quiz: [
      q("Why was Abū Bakr called al-Ṣiddīq?", ["He was rich", "He believed the Night Journey at once", "He was old", "He fought bravely"], 1, "“If he said it, then it is true.”", "Ibn Hishām"),
      q("Where did the Prophet ﷺ lead the prophets in prayer?", ["Makkah", "Al-Masjid al-Aqṣā", "Madinah", "Ṭāʾif"], 1, "On the Night Journey.", "Muslim 162"),
      q("Who was the first teacher sent to Yathrib?", ["ʿAlī", "Muṣʿab ibn ʿUmayr", "Bilāl", "ʿUmar"], 1, "After the first pledge of ʿAqabah.", "Ibn Hishām"),
      q("Where did they hide for three nights?", ["Ḥirāʾ", "Thawr", "Uḥud", "Ṭāʾif"], 1, "The cave of Thawr.", "Bukhari 3653"),
      q("Who was called “the one with two waistbands”?", ["Khadījah", "Asmāʾ bint Abī Bakr", "ʿĀʾishah", "Fāṭimah"], 1, "She tied their food with her waistband.", "Bukhari 2979"),
      q("What did the Prophet ﷺ promise Surāqah?", ["Gold coins", "The bracelets of Chosroes", "A horse", "A house"], 1, "Fulfilled under ʿUmar.", "Ibn Hishām"),
    ] },

  { id: "madinah", title: "Building Madinah", summary: "The masjid, the brotherhood, the constitution and the new community.", sources: ["Bukhari 3780", "Quran 59:9", "Ibn Hishām, al-Sīrah", "Bukhari 428"],
    blocks: [
      P("In Madinah the Prophet ﷺ built in ten years what became a model community. His first three acts tell us its foundations: a masjid for worship, brotherhood between hearts, and a covenant of justice between all the city’s peoples."),
      L("Three foundations", [
        "The masjid: built of mud brick and palm trunks, with the Prophet ﷺ carrying bricks himself (Bukhari 428). It was mosque, school, court and community centre.",
        "The brotherhood (muʾākhāt): each Muhājir from Makkah was paired with an Anṣārī brother from Madinah, who shared his home and wealth with him.",
        "The covenant of Madinah: a written charter making the Muslims, the Jewish tribes and others of Madinah one community for the city’s defence, each with its own religion, and justice for all.",
      ]),
      story("sad-abdurrahman", "From the Companions", "Saʿd’s offer and ʿAbd al-Raḥmān’s answer", "Madinah, the brotherhood. ʿAbd al-Raḥmān ibn ʿAwf, who left all his wealth in Makkah, was made the brother of Saʿd ibn al-Rabīʿ of the Anṣār.",
        [
          "Saʿd said to him: “I am the richest of the Anṣār. Take half of my wealth. And I have two wives; see which you prefer, and I will divorce her so you can marry her.”",
          "ʿAbd al-Raḥmān said: “May Allah bless your family and your wealth for you. Just show me the way to the market.”",
          "He began trading, and before long he had earned enough to marry, and became one of the wealthiest and most generous of the companions.",
        ],
        "The highest generosity met the highest dignity: Saʿd offered everything; ʿAbd al-Raḥmān asked only for a chance to work.",
        "Bukhari 3780",
        { q: "What did ʿAbd al-Raḥmān ask Saʿd for?", options: ["Half his wealth", "The way to the market", "A house", "A wife"], answer: 1, why: "He preferred to work and earn." }),
      L("Life in the new community", [
        "The adhān was instituted, and Bilāl became its first caller.",
        "The qiblah was changed from Jerusalem to the Kaʿbah (2:144).",
        "Zakāt and the fast of Ramadan were prescribed in 2 AH.",
        "The people of the Ṣuffah, poor companions who lived in the masjid, studied with him and were fed by the community.",
      ]),
      Rf(["Is there someone new in my community, at work or the masjid, whom I could treat like an Anṣārī treated a Muhājir?", "Do I prefer to take help, or to work, when I can?"], ["Pick a “brother” or “sister” family at your masjid to support this year."]),
      L("Key takeaways", [
        "Madinah was built on the masjid, brotherhood and justice.",
        "The Anṣār shared everything; the Muhājirūn kept their dignity.",
        "The adhān, the qiblah, zakāt and fasting came in these early years.",
      ]),
    ],
    quiz: [
      q("What was the first thing the Prophet ﷺ built in Madinah?", ["A palace", "The masjid", "A market", "A wall"], 1, "He carried bricks himself.", "Bukhari 428"),
      q("What was the muʾākhāt?", ["A battle", "The brotherhood between Muhājirūn and Anṣār", "A tax", "A treaty with Quraysh"], 1, "Each Muhājir paired with an Anṣārī.", "Bukhari 3780"),
      q("What did ʿAbd al-Raḥmān ibn ʿAwf ask for?", ["Gold", "The way to the market", "A home", "A horse"], 1, "Bukhari 3780.", "Bukhari 3780"),
      q("Who was the first muʾadhdhin?", ["ʿUmar", "Bilāl", "Abū Bakr", "Anas"], 1, "Bilāl ibn Rabāḥ.", "Abu Dawud 499"),
      q("The qiblah changed from Jerusalem to…", ["Madinah", "The Kaʿbah", "Ṭāʾif", "Damascus"], 1, "Quran 2:144.", "Quran 2:144"),
      q("Who were the people of the Ṣuffah?", ["Soldiers", "Poor companions who lived and studied in the masjid", "Traders", "Kings"], 1, "Such as Abū Hurayrah.", "Bukhari 6452"),
    ] },

  { id: "battles", title: "Badr, Uḥud and the Trench", summary: "Three defining battles and the lessons each one taught.", sources: ["Quran 3:123", "Quran 3:152", "Quran 33:9–11", "Bukhari 3952", "Bukhari 4043", "Bukhari 4101", "Ibn Hishām, al-Sīrah"],
    blocks: [
      P("In Madinah, the Muslims were given permission to defend themselves against those who had driven them from their homes (22:39). Three battles shaped the young community, and each carries lessons the Quran itself draws out."),
      L("Badr, 17 Ramadan, 2 AH", [
        "About 313 poorly equipped Muslims faced around 1,000 Makkans.",
        "The Prophet ﷺ spent the night in duʿāʾ until his cloak fell from his shoulders. Allah sent angels in support (8:9).",
        "A decisive victory: “Allah had already given you victory at Badr when you were weak” (3:123).",
        "Lesson: victory comes from Allah, after preparation and duʿāʾ, not from numbers.",
      ]),
      L("Uḥud, 3 AH", [
        "About 700 Muslims against 3,000. The Prophet ﷺ placed fifty archers on a hill and ordered: do not leave your place, whatever you see.",
        "When the Muslims began to win, most archers left their post for the spoils. Khālid ibn al-Walīd, then not yet Muslim, attacked from behind.",
        "Seventy companions were martyred, including Ḥamzah, the Prophet’s ﷺ uncle. The Prophet ﷺ himself was wounded.",
        "Lesson: disobedience and love of the world turn victory into loss (3:152).",
      ]),
      L("The Trench (al-Khandaq), 5 AH", [
        "A coalition of some 10,000 marched on Madinah. On Salmān al-Fārisī’s advice, the Muslims dug a trench across the open northern side.",
        "The Prophet ﷺ dug with them, hungry, a stone tied to his stomach (Bukhari 4101). When a huge rock blocked them, he struck it, and with each strike promised the treasures of Persia, Rome and Yemen.",
        "After about a month, Allah sent a freezing wind and unseen forces; the coalition broke and left (33:9).",
        "Lesson: unity, new ideas from anyone, and patience under siege.",
      ]),
      story("badr-cloak", PB, "The night before Badr", "Badr, the night before the battle. The Muslim army was small, tired and outnumbered three to one.",
        [
          "The Prophet ﷺ stood in his tent facing the qiblah, raised his hands, and called on his Lord: “O Allah, fulfil what You promised me. O Allah, if this small band perishes, You will not be worshipped on the earth.”",
          "He kept raising his hands until his cloak fell from his shoulders. Abū Bakr picked it up, placed it back, and held him from behind: “Messenger of Allah, enough. Your Lord will fulfil what He promised you.”",
          "Allah revealed: “When you called on your Lord for help, He answered you: I will reinforce you with a thousand angels, one after another” (8:9).",
        ],
        "The best of preparations is duʿāʾ. The Prophet ﷺ planned the battle, then poured his heart out to Allah.",
        "Muslim 1763, Quran 8:9",
        { q: "What did Abū Bakr do as the Prophet ﷺ made duʿāʾ?", options: ["Left the tent", "Put his cloak back on him and reassured him", "Prepared his horse", "Called the army"], answer: 1, why: "Muslim 1763." }),
      Rf(["Where am I tempted, like the archers at Uḥud, to leave my post for quick gain?", "Do I make duʿāʾ before my big “battles”: exams, interviews, decisions?"], ["Ask: why did the archers lose when the army was winning?"]),
      L("Key takeaways", [
        "Badr: victory from Allah through duʿāʾ and faith, not numbers.",
        "Uḥud: disobedience and love of the world bring loss.",
        "The Trench: unity, good ideas and patience bring relief.",
      ]),
    ],
    quiz: [
      q("Roughly how many Muslims fought at Badr?", ["100", "313", "1,000", "3,000"], 1, "Against about 1,000.", "Bukhari 3958"),
      q("Why did the Muslims suffer at Uḥud?", ["Bad weather", "The archers left their post", "They were tired", "Too few horses"], 1, "Quran 3:152.", "Quran 3:152"),
      q("Who suggested the trench?", ["ʿUmar", "Salmān al-Fārisī", "Khālid", "ʿAlī"], 1, "A Persian technique.", "Ibn Hishām"),
      q("Which uncle of the Prophet ﷺ was martyred at Uḥud?", ["Abū Ṭālib", "Ḥamzah", "al-ʿAbbās", "Abū Lahab"], 1, "The Master of Martyrs.", "Bukhari 4072"),
      q("How did the siege of the Trench end?", ["A treaty", "Allah sent a freezing wind and the coalition left", "A battle", "Quraysh won"], 1, "Quran 33:9.", "Quran 33:9"),
      q("What did the Prophet ﷺ do the night before Badr?", ["Slept", "Made intense duʿāʾ", "Counted the army", "Wrote letters"], 1, "Muslim 1763.", "Muslim 1763"),
    ] },

  { id: "hudaybiyyah-fath", title: "Ḥudaybiyyah and the Conquest of Makkah", summary: "A treaty that looked like a loss, a clear victory, and a city forgiven.", sources: ["Quran 48:1", "Bukhari 2731", "Bukhari 4280", "Ibn Hishām, al-Sīrah", "Quran 110"],
    blocks: [
      P("In 6 AH, the Prophet ﷺ set out with about 1,400 companions to perform ʿumrah, wearing iḥrām, with no intention to fight. Quraysh blocked them at Ḥudaybiyyah. What followed tested the companions’ trust more than any battle."),
      L("The Treaty of Ḥudaybiyyah", [
        "Ten years of peace. The Muslims would return without ʿumrah this year and come the next.",
        "Any Makkan who went to the Muslims without his guardian’s permission would be returned; anyone who went from the Muslims to Makkah would not.",
        "Quraysh refused even to write “Bismillāhi-r-raḥmāni-r-raḥīm” or “Muhammad, Messenger of Allah”, and the Prophet ﷺ agreed to change both (Bukhari 2731).",
        "Many companions, even ʿUmar, were deeply upset. Then Allah revealed: “Indeed, We have given you a clear victory” (48:1).",
      ]),
      L("Why it was a victory", [
        "Peace let Islam spread freely: more people entered Islam in the next two years than in all the years before.",
        "The Prophet ﷺ sent letters inviting kings: Heraclius of Rome, Chosroes of Persia, the Negus, the Muqawqis of Egypt and others.",
        "When Quraysh broke the treaty by attacking an ally of the Muslims, the way to Makkah opened.",
      ]),
      story("fath-makkah", PS, "The Conquest of Makkah", "Ramadan, 8 AH. Ten thousand Muslims camped outside Makkah, lighting thousands of fires on the hills.",
        [
          "The Prophet ﷺ declared: whoever enters the house of Abū Sufyān is safe; whoever closes his door is safe; whoever enters the Sacred Mosque is safe. Makkah was taken almost without bloodshed.",
          "He entered with his head bowed so low in humility on his camel that his beard almost touched the saddle.",
          "He went to the Kaʿbah and struck down its 360 idols with a staff, reciting: “Truth has come and falsehood has vanished” (17:81) (Bukhari 4287).",
          "Then he stood before the people of Quraysh, who had persecuted him for twenty years, and asked what they thought he would do. He said: “No blame upon you today. Go, you are free.”",
          "Bilāl, the former slave once tortured on Makkah’s sands, climbed onto the Kaʿbah and called the adhān.",
        ],
        "Complete power, used with complete humility and forgiveness. That is how hearts were conquered, not only a city.",
        "Bukhari 4287, Ibn Hishām",
        { q: "How did the Prophet ﷺ enter Makkah?", options: ["Proudly, at the head of a parade", "With his head bowed in humility", "At night in secret", "On foot alone"], answer: 1, why: "Victory with humility." }),
      Sc("hudaybiyyah-today", "You agree to a compromise at work that your team thinks is a defeat, but you believe it will open bigger doors. What does Ḥudaybiyyah teach?", [
        { text: "Never accept terms that look unfavourable.", feedback: "Ḥudaybiyyah looked like a loss and Allah called it a clear victory." },
        { text: "A wise, principled compromise can be a long-term victory; explain your reasoning and stay patient.", best: true, feedback: "The Prophet ﷺ kept his principles and gave up appearances to gain peace." },
        { text: "Agree and then break the deal later.", feedback: "The Muslims kept the treaty even when it hurt; Quraysh broke it." },
      ]),
      Rf(["Have I ever had a “Ḥudaybiyyah”: something that felt like a loss but became a gain?", "When I win, do I enter with my head bowed?"], ["Read Sūrat al-Naṣr (110) together and talk about how to respond to success."]),
      L("Key takeaways", [
        "Ḥudaybiyyah looked like a loss but was a clear victory (48:1).",
        "Peace let Islam spread and opened the way to Makkah.",
        "The Conquest was humble, nearly bloodless and full of forgiveness.",
      ]),
    ],
    quiz: [
      q("Why did the Muslims travel to Ḥudaybiyyah?", ["To fight", "To perform ʿumrah", "To trade", "To meet the Negus"], 1, "In iḥrām, without intending battle.", "Bukhari 2731"),
      q("How did Allah describe the Treaty of Ḥudaybiyyah?", ["A loss", "A clear victory", "A mistake", "A test only"], 1, "Quran 48:1.", "Quran 48:1"),
      q("To whom did the Prophet ﷺ send letters after Ḥudaybiyyah?", ["Only to Arabs", "Kings such as Heraclius and Chosroes", "Nobody", "Only to Jews"], 1, "Inviting them to Islam.", "Bukhari 7"),
      q("Why did the Conquest of Makkah happen?", ["Quraysh broke the treaty", "The Muslims broke it", "Drought", "A dream"], 0, "Quraysh attacked an ally of the Muslims.", "Ibn Hishām"),
      q("How many idols were around the Kaʿbah?", ["7", "60", "360", "1,000"], 2, "Bukhari 4287.", "Bukhari 4287"),
      q("Who called the adhān on the Kaʿbah?", ["Abū Bakr", "Bilāl", "ʿUmar", "ʿAlī"], 1, "The former slave once tortured in Makkah.", "Ibn Hishām"),
    ] },

  { id: "farewell", title: "The Farewell Ḥajj and his passing", summary: "His last sermon, his last days, and how the ummah held together.", sources: ["Muslim 1218", "Quran 5:3", "Bukhari 4454", "Bukhari 4463", "Bukhari 1739", "Quran 3:144"],
    blocks: [
      P("In 10 AH the Prophet ﷺ performed his only Ḥajj, with over 100,000 companions. On the plain of ʿArafah he gave a sermon that summed up his message, and soon after, the verse was revealed: “Today I have perfected your religion for you” (5:3)."),
      L("From the Farewell Sermon", [
        "“Your blood, your wealth and your honour are sacred to one another, like the sacredness of this day, in this month, in this land” (Bukhari 1739).",
        "Ribā and the blood-feuds of ignorance were abolished.",
        "“Fear Allah regarding women; you have rights over them and they have rights over you” (Muslim 1218).",
        "“I have left among you that which, if you hold to it, you will never go astray: the Book of Allah” (Muslim 1218).",
        "No Arab is superior to a non-Arab, nor white to black, except by taqwā (Musnad Aḥmad 23489).",
        "“Let those present convey it to those absent.” Then he asked: “Have I conveyed the message?” They said yes. He raised his finger to the sky: “O Allah, bear witness.”",
      ]),
      story("last-days", PB, "His last days", "Madinah, Rabīʿ al-Awwal, 11 AH. The Prophet ﷺ had a fever and headache that grew worse.",
        [
          "He asked to be nursed in ʿĀʾishah’s room. Too ill to lead the prayer, he said: “Tell Abū Bakr to lead the people.”",
          "On his last morning, Monday, he lifted the curtain of his room and looked at the rows of his companions praying behind Abū Bakr, and smiled. They nearly broke their prayer for joy, thinking he had recovered.",
          "Later that day, his head resting on ʿĀʾishah’s chest, he looked up and said: “With the highest companion, the highest companion,” and passed away (Bukhari 4463). He was 63.",
          "Madinah was shaken. ʿUmar refused to believe it. Then Abū Bakr came, kissed the Prophet ﷺ, and addressed the people: “Whoever worshipped Muhammad, Muhammad has died. Whoever worships Allah, Allah is Ever-Living and never dies,” and recited 3:144. It was as if people had never heard the verse before.",
        ],
        "Our love for him is shown by following him, and our faith rests on Allah, who never dies.",
        "Bukhari 4454, Bukhari 4463",
        { q: "What did Abū Bakr say when the Prophet ﷺ died?", options: ["“He will return”", "“Whoever worships Allah, Allah is Ever-Living and never dies”", "“Let us leave Madinah”", "Nothing"], answer: 1, why: "He recited 3:144." }),
      Qt("Muhammad is not but a messenger; other messengers have passed on before him. So if he were to die or be killed, would you turn back on your heels?", "Quran 3:144"),
      Rf(["Which line of the Farewell Sermon speaks most to our world today?", "How do I show love for the Prophet ﷺ in my daily life?"], ["Read the Farewell Sermon’s points together and pick one to live this week.", "Send ṣalawāt on him together every Friday."]),
      L("Key takeaways", [
        "The Farewell Ḥajj and sermon summed up his message.",
        "The religion was completed (5:3), and he conveyed it fully.",
        "He passed away at 63; Allah is Ever-Living and never dies.",
      ]),
    ],
    quiz: [
      q("How many times did the Prophet ﷺ perform Ḥajj after the Hijrah?", ["Once", "Twice", "Ten times", "Never"], 0, "The Farewell Ḥajj, 10 AH.", "Muslim 1218"),
      q("Where did he give the Farewell Sermon?", ["Madinah", "ʿArafah", "Ṭāʾif", "Jerusalem"], 1, "On the Day of ʿArafah.", "Muslim 1218"),
      q("Which verse was revealed then?", ["2:255", "“Today I have perfected your religion” (5:3)", "112:1", "96:1"], 1, "Quran 5:3.", "Bukhari 45"),
      q("What makes one person better than another, according to the sermon?", ["Race", "Taqwā", "Wealth", "Language"], 1, "Musnad Aḥmad 23489.", "Musnad Aḥmad 23489"),
      q("Who led the prayer during his final illness?", ["ʿUmar", "Abū Bakr", "ʿAlī", "Bilāl"], 1, "Bukhari 664.", "Bukhari 664"),
      q("What were his last words?", ["“Pray”", "“With the highest companion”", "“Farewell”", "“Follow ʿAlī”"], 1, "Bukhari 4463.", "Bukhari 4463"),
    ] },

  { id: "character", title: "His character and daily life", summary: "How he lived at home, with children, with the poor, and in worship.", sources: ["Quran 68:4", "Muslim 746", "Bukhari 676", "Bukhari 6038", "Bukhari 3559", "Muslim 2328", "Bukhari 4837", "Bukhari 6203"],
    blocks: [
      P("Allah says: “Indeed, you are of a great moral character” (68:4). When ʿĀʾishah was asked about his character, she said: “His character was the Quran” (Muslim 746). His greatness was not only on battlefields and pulpits, but in how he treated his family, servants, children and the poorest people."),
      L("At home", [
        "He served his family: mending his clothes, repairing his sandals and helping with housework, and when the prayer came he went out to pray (Bukhari 676).",
        "He raced ʿĀʾishah and let her win, then she later won again (Abu Dawud 2578).",
        "He never struck a woman, a servant or anyone with his hand (Muslim 2328).",
        "Anas served him ten years and never heard “uff”, or “why did you do that?” (Bukhari 6038).",
      ]),
      L("With children and the weak", [
        "He played with children, greeted them and carried his grandchildren on his shoulders, even in prayer.",
        "He asked about a little boy, Abū ʿUmayr, whose pet bird had died: “Abū ʿUmayr, what happened to the little bird?” (Bukhari 6203).",
        "He shortened his prayer when he heard a baby cry, out of mercy for the mother (Bukhari 709).",
        "A slave girl could take him by the hand and lead him wherever she needed (Bukhari 6072).",
      ]),
      L("In worship", [
        "He stood in night prayer until his feet swelled. When ʿĀʾishah asked why, since he was forgiven, he said: “Shall I not be a grateful servant?” (Bukhari 4837).",
        "He sought Allah’s forgiveness more than seventy times a day (Bukhari 6307).",
        "He was the most generous of people, most of all in Ramadan (Bukhari 6).",
      ]),
      story("grateful-servant", PB, "“Shall I not be a grateful servant?”", "The Prophet’s ﷺ room at night, in Madinah.",
        [
          "ʿĀʾishah watched him stand in prayer through the night, so long that his feet became swollen and cracked.",
          "She asked: “Why do you do this, Messenger of Allah, when Allah has forgiven your past and future sins?”",
          "He replied: “Shall I not love to be a grateful servant?”",
        ],
        "He worshipped not out of fear of punishment, but out of love and gratitude. Worship is our thanks for everything Allah has given.",
        "Bukhari 4837, Muslim 2820",
        { q: "Why did the Prophet ﷺ pray so long at night?", options: ["To be forgiven", "To be a grateful servant", "To be seen", "Because he could not sleep"], answer: 1, why: "Worship as gratitude." }),
      Sc("character-home", "You come home tired from work and the kitchen is a mess. What would the Prophet ﷺ do?", [
        { text: "Complain about it and sit down.", feedback: "He never criticised his family harshly over household matters." },
        { text: "Help tidy up, cheerfully, then pray.", best: true, feedback: "He was in the service of his family until prayer time (Bukhari 676)." },
        { text: "Wait for someone else to do it.", feedback: "Serving the family was his Sunnah." },
      ]),
      Rf(["Which part of his home life am I furthest from?", "Do I thank Allah through worship, or only ask through it?"], ["Let each child choose one Sunnah from this lesson to practise for a week, and share it at dinner."]),
      L("Key takeaways", [
        "His character was the Quran in action.",
        "He served his family, played with children and never struck anyone.",
        "His worship was gratitude: “Shall I not be a grateful servant?”",
      ]),
      { type: "link", href: "/learn/ruhiy-3/prophet-character", label: "Spiritual Tarbiyah", text: "Read more on his character in Volume 3." },
    ],
    quiz: [
      q("“His character was…”", ["Strict", "The Quran", "Unknown", "Quiet"], 1, "Muslim 746.", "Muslim 746"),
      q("What did he do at home?", ["Only rested", "Helped his family and mended his own things", "Gave orders", "Studied only"], 1, "Bukhari 676.", "Bukhari 676"),
      q("How many years did Anas serve him without hearing “uff”?", ["Two", "Ten", "Twenty", "Five"], 1, "Bukhari 6038.", "Bukhari 6038"),
      q("Why did he shorten his prayer sometimes?", ["He was tired", "He heard a baby crying", "It was raining", "He was travelling"], 1, "Out of mercy for the mother.", "Bukhari 709"),
      q("What did he ask little Abū ʿUmayr?", ["About school", "What happened to his little bird", "About prayer", "His age"], 1, "Bukhari 6203.", "Bukhari 6203"),
      q("Why did he pray until his feet swelled?", ["Fear only", "To be a grateful servant", "Habit", "To teach"], 1, "Bukhari 4837.", "Bukhari 4837"),
    ] },
];
