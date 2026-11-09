import { RUHIY_QUIZ } from "./ruhiy";
import { RUHIY2_QUIZ } from "./ruhiy2";
import { RUHIY3_QUIZ } from "./ruhiy3";
import { ADAB_LESSONS } from "./adab-all";
import { SOCIAL_QUIZ } from "./social-quiz";
import { RUHIY_EXTRA } from "./ruhiy-quiz-extra";
import { SALAH_EXTRA_QUIZ } from "./salah-extra";
// Quiz topics. Each topic: a short lesson, then up to 30 questions with a source.
// Hidden topics are lesson quizzes, reached from inside their lesson.

export type Question = { q: string; options: string[]; answer: number; why: string; src: string };
export type Topic = { id: string; title: string; sub: string; icon: "home" | "learn" | "salah" | "times" | "qibla" | "badges"; learn: string[]; questions: Question[]; hidden?: boolean; back?: string };

export const TOPICS: Topic[] = [
  {
    "id": "pillars",
    "title": "Five Pillars of Islam",
    "sub": "The foundation every Muslim stands on",
    "icon": "salah",
    "learn": [
      "Islam is built on five pillars: the Shahādah, the five daily prayers, Zakāt, fasting Ramadan, and Hajj for those able (Bukhari 8, Muslim 16).",
      "The Shahādah is testifying that there is no god but Allah and that Muhammad ﷺ is His messenger.",
      "Zakāt is 2.5% of savings above the niṣāb, held for one lunar year.",
      "Hajj is required once in a lifetime for every adult Muslim who is physically and financially able."
    ],
    "questions": [
      {
        "q": "What is the first pillar of Islam?",
        "options": [
          "Salah",
          "Shahādah",
          "Zakāt",
          "Hajj"
        ],
        "answer": 1,
        "why": "The Shahādah, the testimony of faith, comes first.",
        "src": "Bukhari 8, Muslim 16"
      },
      {
        "q": "How many obligatory (fard) prayers are there each day?",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "answer": 2,
        "why": "Fajr, Dhuhr, Asr, Maghrib and Isha.",
        "src": "Bukhari 349"
      },
      {
        "q": "In which month is fasting obligatory?",
        "options": [
          "Shaʿbān",
          "Ramadan",
          "Muḥarram",
          "Dhul-Ḥijjah"
        ],
        "answer": 1,
        "why": "Fasting the whole of Ramadan is the fourth pillar.",
        "src": "Quran 2:185"
      },
      {
        "q": "What portion of eligible savings is paid as Zakāt?",
        "options": [
          "1%",
          "2.5%",
          "5%",
          "10%"
        ],
        "answer": 1,
        "why": "Zakāt on money is one fortieth, or 2.5%, after a lunar year above the niṣāb.",
        "src": "Abu Dawud 1572"
      },
      {
        "q": "How often is Hajj required for someone who is able?",
        "options": [
          "Every year",
          "Every five years",
          "Once in a lifetime",
          "It is never required"
        ],
        "answer": 2,
        "why": "The Prophet ﷺ said Hajj is once; anything more is voluntary.",
        "src": "Abu Dawud 1721"
      },
      {
        "q": "What does the Shahādah declare?",
        "options": [
          "Allah is merciful",
          "There is no god but Allah, and Muhammad is His messenger",
          "Islam is the last religion",
          "The Quran is a book of guidance"
        ],
        "answer": 1,
        "why": "It has two parts: the oneness of Allah and the messengership of Muhammad ﷺ.",
        "src": "Muslim 8"
      },
      {
        "q": "Hajj takes place in which month?",
        "options": [
          "Ramadan",
          "Rajab",
          "Dhul-Ḥijjah",
          "Shawwāl"
        ],
        "answer": 2,
        "why": "The rites of Hajj are performed from the 8th to the 13th of Dhul-Ḥijjah.",
        "src": "Quran 2:197"
      },
      {
        "q": "A fast lasts from…",
        "options": [
          "Sunrise to sunset",
          "True dawn (Fajr) to sunset",
          "Midnight to midday",
          "Fajr to Isha"
        ],
        "answer": 1,
        "why": "Eating and drinking stop at true dawn and resume at sunset.",
        "src": "Quran 2:187"
      },
      {
        "q": "Who may postpone a Ramadan fast and make it up later?",
        "options": [
          "Someone who is busy at work",
          "A traveller or someone who is ill",
          "Anyone who feels tired",
          "No one"
        ],
        "answer": 1,
        "why": "The ill and travellers may break the fast and make up the days later.",
        "src": "Quran 2:184"
      },
      {
        "q": "Which pillar purifies wealth and helps the poor?",
        "options": [
          "Salah",
          "Sawm",
          "Zakāt",
          "Hajj"
        ],
        "answer": 2,
        "why": "Zakāt literally means purification and growth.",
        "src": "Quran 9:103"
      }
    ]
  },
  {
    "id": "iman",
    "title": "Six Pillars of Faith",
    "sub": "What a believer believes in",
    "icon": "learn",
    "learn": [
      "In the Hadith of Jibrīl, the Prophet ﷺ described īmān as belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree, its good and its bad (Muslim 8).",
      "Tawḥīd, the oneness of Allah, is the heart of every pillar.",
      "Allah revealed the Tawrāh to Mūsā, the Zabūr to Dāwūd, the Injīl to ʿĪsā, and the Quran to Muhammad ﷺ."
    ],
    "questions": [
      {
        "q": "How many pillars of faith (īmān) are there?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 2,
        "why": "Allah, angels, books, messengers, the Last Day, and qadar.",
        "src": "Muslim 8"
      },
      {
        "q": "Which is NOT one of the pillars of faith?",
        "options": [
          "Belief in angels",
          "Belief in the Last Day",
          "Belief in divine decree",
          "Belief in the Kaʿbah"
        ],
        "answer": 3,
        "why": "The Kaʿbah is the qibla, not a pillar of belief.",
        "src": "Muslim 8"
      },
      {
        "q": "Which angel brought revelation to the prophets?",
        "options": [
          "Mīkāʾīl",
          "Jibrīl",
          "Isrāfīl",
          "Mālik"
        ],
        "answer": 1,
        "why": "Jibrīl (Gabriel) is the angel of revelation.",
        "src": "Quran 2:97"
      },
      {
        "q": "To which prophet was the Tawrāh revealed?",
        "options": [
          "Mūsā",
          "ʿĪsā",
          "Dāwūd",
          "Ibrāhīm"
        ],
        "answer": 0,
        "why": "The Tawrāh (Torah) was given to Mūsā.",
        "src": "Quran 5:44"
      },
      {
        "q": "The Zabūr (Psalms) was given to…",
        "options": [
          "Sulaymān",
          "Dāwūd",
          "Nūḥ",
          "Yūsuf"
        ],
        "answer": 1,
        "why": "Allah gave Dāwūd the Zabūr.",
        "src": "Quran 4:163"
      },
      {
        "q": "The Injīl was revealed to…",
        "options": [
          "Yaḥyā",
          "Mūsā",
          "ʿĪsā",
          "Ismāʿīl"
        ],
        "answer": 2,
        "why": "The Injīl (Gospel) was given to ʿĪsā.",
        "src": "Quran 5:46"
      },
      {
        "q": "Who is the final prophet and messenger?",
        "options": [
          "Ibrāhīm",
          "ʿĪsā",
          "Muhammad ﷺ",
          "Mūsā"
        ],
        "answer": 2,
        "why": "He is the Seal of the Prophets.",
        "src": "Quran 33:40"
      },
      {
        "q": "What does belief in qadar mean?",
        "options": [
          "Everything happens by chance",
          "Allah knows and decrees all things, good and bad",
          "People have no choices",
          "Only good comes from Allah"
        ],
        "answer": 1,
        "why": "Allah’s knowledge and decree cover everything, and people are still responsible for their choices.",
        "src": "Muslim 8"
      },
      {
        "q": "What does Tawḥīd mean?",
        "options": [
          "Prayer",
          "The oneness of Allah",
          "Charity",
          "Pilgrimage"
        ],
        "answer": 1,
        "why": "Tawḥīd is affirming Allah alone as Lord, God and possessor of perfect names and attributes.",
        "src": "Quran 112"
      },
      {
        "q": "Which sūrah is a summary of Tawḥīd and equals a third of the Quran?",
        "options": [
          "Al-Fātiḥah",
          "Al-Ikhlāṣ",
          "Al-Kawthar",
          "Al-Mulk"
        ],
        "answer": 1,
        "why": "Sūrat al-Ikhlāṣ equals one third of the Quran.",
        "src": "Bukhari 5013"
      }
    ]
  },
  {
    "id": "wudu",
    "title": "Wuḍūʾ (Hanafi)",
    "sub": "Purity before prayer",
    "icon": "qibla",
    "learn": [
      "In the Hanafi school, wuḍūʾ has four farḍ acts: washing the face, washing both arms including the elbows, wiping a quarter of the head, and washing both feet including the ankles (Quran 5:6).",
      "Everything else (intention, Bismillah, rinsing mouth and nose, three washes, order) is sunnah.",
      "Anything that comes out of the front or back passage, flowing blood or pus, a mouthful of vomit, deep sleep while lying or leaning, and fainting all break wuḍūʾ."
    ],
    "questions": [
      {
        "q": "How many farḍ acts does wuḍūʾ have in the Hanafi school?",
        "options": [
          "3",
          "4",
          "6",
          "7"
        ],
        "answer": 1,
        "why": "Face, arms with elbows, a quarter of the head, feet with ankles.",
        "src": "Quran 5:6"
      },
      {
        "q": "What is the minimum amount of the head that must be wiped?",
        "options": [
          "A few hairs",
          "One quarter",
          "Half",
          "The whole head"
        ],
        "answer": 1,
        "why": "The Hanafi school takes a quarter of the head as the farḍ amount, based on the Prophet ﷺ wiping his forelock.",
        "src": "Muslim 274"
      },
      {
        "q": "The arms are washed up to and including…",
        "options": [
          "The wrists",
          "The elbows",
          "The shoulders",
          "Mid-forearm"
        ],
        "answer": 1,
        "why": "The elbows are included.",
        "src": "Quran 5:6"
      },
      {
        "q": "The feet are washed up to and including…",
        "options": [
          "The toes",
          "The ankles",
          "The knees",
          "Mid-shin"
        ],
        "answer": 1,
        "why": "The ankles are included, and water must reach between the toes.",
        "src": "Quran 5:6"
      },
      {
        "q": "Which of these breaks wuḍūʾ?",
        "options": [
          "Sleeping while lying down",
          "Looking in a mirror",
          "Cutting your nails",
          "Drinking water"
        ],
        "answer": 0,
        "why": "Deep sleep while lying down or leaning relaxes the body, so wuḍūʾ is renewed.",
        "src": "Abu Dawud 203"
      },
      {
        "q": "In the Hanafi school, does touching a person of the opposite sex (without anything coming out) break wuḍūʾ?",
        "options": [
          "Yes, always",
          "No",
          "Only after Asr",
          "Only during Ramadan"
        ],
        "answer": 1,
        "why": "In the Hanafi school, touching alone does not break wuḍūʾ.",
        "src": "Hanafi fiqh"
      },
      {
        "q": "How many times is it sunnah to wash each limb?",
        "options": [
          "Once",
          "Twice",
          "Three times",
          "Five times"
        ],
        "answer": 2,
        "why": "The Prophet ﷺ washed each limb three times.",
        "src": "Bukhari 159"
      },
      {
        "q": "In the Hanafi school, does blood that flows from a cut break wuḍūʾ?",
        "options": [
          "Yes",
          "No",
          "Only if it reaches the floor",
          "Only if it is a large cut"
        ],
        "answer": 0,
        "why": "Blood or pus that flows beyond the wound breaks wuḍūʾ in the Hanafi school.",
        "src": "Hanafi fiqh"
      },
      {
        "q": "The duʿāʾ after wuḍūʾ begins with…",
        "options": [
          "Bismillāh",
          "Ashhadu an lā ilāha illa-llāh",
          "Subḥāna-llāh",
          "Allāhu akbar"
        ],
        "answer": 1,
        "why": "Whoever says it, the eight gates of Paradise are opened for them.",
        "src": "Muslim 234"
      },
      {
        "q": "In the Hanafi school, laughing aloud during a prayer with rukūʿ and sujūd…",
        "options": [
          "Has no effect",
          "Breaks the prayer and the wuḍūʾ",
          "Only breaks the prayer",
          "Is disliked but allowed"
        ],
        "answer": 1,
        "why": "For an adult, audible laughter in such a prayer breaks both.",
        "src": "Hanafi fiqh"
      }
    ]
  },
  {
    "id": "salah",
    "title": "Ṣalāh (Hanafi)",
    "sub": "How to pray correctly",
    "icon": "times",
    "learn": [
      "In the 3rd and 4th rakʿahs of a fard prayer you recite only the Fātiḥah; in sunnah, nafl and witr prayers you add a sūrah in every rakʿah.",
      "Witr is wājib: 3 rakʿahs with one salām, a sitting after the 2nd, and Qunūt before rukūʿ in the 3rd.",
      "Missing a wājib by mistake is repaired with sajdat al-sahw: one salām to the right, two sajdahs, then Tashahhud, Ṣalawāt, duʿāʾ and the final salāms."
    ],
    "questions": [
      {
        "q": "How many fard rakʿahs does Maghrib have?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "why": "Maghrib is the only fard prayer with three rakʿahs.",
        "src": "Bukhari 1091"
      },
      {
        "q": "In the Hanafi school, Witr is…",
        "options": [
          "1 rakʿah, sunnah",
          "3 rakʿahs with one salām, wājib",
          "2 rakʿahs, fard",
          "Optional, any number"
        ],
        "answer": 1,
        "why": "Abu Hanifa held Witr to be wājib, prayed as three rakʿahs with one salām.",
        "src": "Hanafi fiqh"
      },
      {
        "q": "When is the Qunūt recited in Witr (Hanafi)?",
        "options": [
          "After rukūʿ in every rakʿah",
          "Before rukūʿ in the 3rd rakʿah",
          "After the salām",
          "In the first sitting"
        ],
        "answer": 1,
        "why": "After the Fātiḥah and a sūrah, say the takbīr, raise the hands, and recite Qunūt before rukūʿ.",
        "src": "Hanafi fiqh"
      },
      {
        "q": "What is said in rukūʿ?",
        "options": [
          "Subḥāna rabbiya-l-aʿlā",
          "Subḥāna rabbiya-l-ʿaẓīm",
          "Rabbanā laka-l-ḥamd",
          "Allāhu akbar"
        ],
        "answer": 1,
        "why": "“Glory be to my Lord, the Magnificent” at least three times.",
        "src": "Abu Dawud 869"
      },
      {
        "q": "What is said in sujūd?",
        "options": [
          "Subḥāna rabbiya-l-aʿlā",
          "Subḥāna rabbiya-l-ʿaẓīm",
          "Samiʿa-llāhu li man ḥamidah",
          "Bismillāh"
        ],
        "answer": 0,
        "why": "“Glory be to my Lord, the Most High” at least three times.",
        "src": "Abu Dawud 869"
      },
      {
        "q": "In the 3rd and 4th rakʿahs of a fard prayer, you recite…",
        "options": [
          "The Fātiḥah and a long sūrah",
          "Only the Fātiḥah",
          "Nothing",
          "Only Āyat al-Kursī"
        ],
        "answer": 1,
        "why": "Only the Fātiḥah; a sūrah is added in the first two.",
        "src": "Bukhari 776"
      },
      {
        "q": "According to the Hanafi school, when does Asr time begin?",
        "options": [
          "When a shadow equals the object’s length",
          "When a shadow is twice the object’s length (plus the midday shadow)",
          "Exactly at 3 pm",
          "At sunset"
        ],
        "answer": 1,
        "why": "Abu Hanifa’s position, used for Asr in this app’s prayer times.",
        "src": "Hanafi fiqh"
      },
      {
        "q": "Where does a man place his hands while standing (Hanafi)?",
        "options": [
          "On the chest",
          "Below the navel",
          "At his sides",
          "On his head"
        ],
        "answer": 1,
        "why": "Men fold below the navel; women place their hands on the chest.",
        "src": "Abu Dawud 756"
      },
      {
        "q": "How many sunnah rakʿahs are prayed before Fajr?",
        "options": [
          "None",
          "2",
          "4",
          "6"
        ],
        "answer": 1,
        "why": "The two sunnah of Fajr are the most emphasised of all sunnah prayers.",
        "src": "Muslim 725"
      },
      {
        "q": "If you forget a wājib act in prayer, you should…",
        "options": [
          "Restart the whole day",
          "Make sajdat al-sahw",
          "Pray it after Isha",
          "Ignore it"
        ],
        "answer": 1,
        "why": "The two prostrations of forgetfulness repair a missed wājib.",
        "src": "Bukhari 1224"
      }
    ]
  },
  {
    "id": "akhlaq",
    "title": "Akhlāq & Adab",
    "sub": "Character and good manners",
    "icon": "badges",
    "learn": [
      "Nothing is heavier on the believer’s scale on the Day of Judgment than good character (Tirmidhi 2002).",
      "Purification is half of faith (Muslim 223).",
      "Small manners matter: eating with the right hand, saying Bismillāh, greeting with salām, and dusting off your bed before sleep are all sunnah."
    ],
    "questions": [
      {
        "q": "What is heaviest on the scale on the Day of Judgment?",
        "options": [
          "Long prayers",
          "Good character",
          "Wealth",
          "Knowledge of history"
        ],
        "answer": 1,
        "why": "Nothing will be heavier on the believer’s scale than good character.",
        "src": "Tirmidhi 2002"
      },
      {
        "q": "Purification (ṭahārah) is described as…",
        "options": [
          "Optional",
          "Half of faith",
          "A cultural habit",
          "Only for prayer"
        ],
        "answer": 1,
        "why": "The Prophet ﷺ said purification is half of faith.",
        "src": "Muslim 223"
      },
      {
        "q": "Smiling at your brother or sister is…",
        "options": [
          "Disliked",
          "Sadaqah (charity)",
          "Only for children",
          "Showing off"
        ],
        "answer": 1,
        "why": "Your smile in the face of your brother is sadaqah.",
        "src": "Tirmidhi 1956"
      },
      {
        "q": "Which is sunnah when eating?",
        "options": [
          "Eat with the left hand",
          "Say Bismillāh and eat with the right hand",
          "Eat while walking",
          "Blow on hot food"
        ],
        "answer": 1,
        "why": "The Prophet ﷺ taught: say Bismillāh, eat with your right hand, and eat from what is near you.",
        "src": "Bukhari 5376"
      },
      {
        "q": "Before lying down, the Prophet ﷺ taught us to…",
        "options": [
          "Dust off the bed",
          "Leave the lights on",
          "Eat a full meal",
          "Check messages"
        ],
        "answer": 0,
        "why": "Dust off your bed, for you do not know what came onto it after you.",
        "src": "Bukhari 6320"
      },
      {
        "q": "Fitrah care (nails, underarm and pubic hair, moustache) should not be left longer than…",
        "options": [
          "7 days",
          "40 days",
          "100 days",
          "One year"
        ],
        "answer": 1,
        "why": "A time limit of forty nights was set.",
        "src": "Muslim 258"
      },
      {
        "q": "How do you reply to “As-salāmu ʿalaykum”?",
        "options": [
          "Hello",
          "Wa ʿalaykumu-s-salām",
          "Bismillāh",
          "Shukran"
        ],
        "answer": 1,
        "why": "Reply with the same greeting or a better one.",
        "src": "Quran 4:86"
      },
      {
        "q": "Who is truly strong, according to the Prophet ﷺ?",
        "options": [
          "The best wrestler",
          "The one who controls himself when angry",
          "The richest person",
          "The loudest speaker"
        ],
        "answer": 1,
        "why": "The strong one is the one who controls himself in anger.",
        "src": "Bukhari 6114"
      },
      {
        "q": "Who has the most right to your good companionship?",
        "options": [
          "Your friend",
          "Your mother",
          "Your teacher",
          "Your neighbour"
        ],
        "answer": 1,
        "why": "He said “your mother” three times, then “your father”.",
        "src": "Bukhari 5971"
      },
      {
        "q": "What do you say after sneezing?",
        "options": [
          "Alḥamdulillāh",
          "Subḥāna-llāh",
          "Astaghfirullāh",
          "Nothing"
        ],
        "answer": 0,
        "why": "Say Alḥamdulillāh; the listener replies “Yarḥamuka-llāh”.",
        "src": "Bukhari 6224"
      }
    ]
  },
  RUHIY_QUIZ,
  RUHIY2_QUIZ,
  RUHIY3_QUIZ,
  SOCIAL_QUIZ,
  SALAH_EXTRA_QUIZ,
  ...ADAB_LESSONS.map((l): Topic => ({
    id: `adab-${l.id}`, title: l.title, sub: "Lesson quiz · Akhlaq & Adab", icon: "badges", hidden: true, back: `/learn/akhlaq/${l.id}`,
    learn: [`Questions on the lesson “${l.title}”. Read the lesson first, then test yourself.`],
    questions: l.quiz ?? [],
  })),
];

// The Akhlaq & Adab final quiz: 30 questions across every lesson in the world,
// one from each lesson first, then a second from lessons in order.
{
  const ak = TOPICS.find((t) => t.id === "akhlaq");
  if (ak) {
    const qs = [ak.questions[0], ...ADAB_LESSONS.map((l) => l.quiz?.[0]), ...ADAB_LESSONS.map((l) => l.quiz?.[1])].filter((q): q is Question => !!q);
    ak.questions = qs.slice(0, 30);
    ak.sub = `Final quiz: ${ak.questions.length} questions across all Akhlaq & Adab lessons`;
  }
}

// Spiritual Tarbiyah quizzes: 20 questions each.
for (const [id, extra] of Object.entries(RUHIY_EXTRA)) {
  const t = TOPICS.find((x) => x.id === id);
  if (t && t.questions.length < 20) t.questions = [...t.questions, ...extra];
}
