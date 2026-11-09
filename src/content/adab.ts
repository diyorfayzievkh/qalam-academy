import type { Recitation } from "./recitations";
import type { Question } from "./topics";

// Akhlaq & Adab lessons. Every lesson follows the same five parts:
// why it matters, how to do it right, benefits, what we lose by neglecting it,
// and practice. Faith claims cite Quran/hadith; health points are labelled as
// general health knowledge so they are never confused with a hadith.

export type AdabLesson = {
  id: string;
  title: string;
  category: "Personal adab" | "Social adab" | "Inner character";
  summary: string;
  why: string[];
  how: string[];
  recitations?: { label: string; r: Recitation; src: string }[];
  benefits: { spiritual: string; health?: string; social: string };
  lose: { spiritual: string; health?: string; social: string };
  practice: { challenge: string; reflection: string };
  quiz?: Question[];
};

export const ADAB_LESSONS_1: AdabLesson[] = [
  {
    id: "bed-sleep", title: "The adab of the bed and sleep", category: "Personal adab",
    summary: "Ending the day with cleanliness and remembrance.",
    why: [
      "The Prophet ﷺ taught a full routine for going to bed. Sleep is described as a minor death: each night the soul is taken and returned by Allah (Quran 39:42).",
      "He ﷺ said: when one of you goes to bed, let him dust off his bed, for he does not know what came onto it after he left it (Bukhari 6320, Muslim 2714).",
    ],
    how: [
      "Keep bedding clean: wash sheets and pillowcases regularly and air out the bed.",
      "Dust off the bed before lying down (Bukhari 6320).",
      "Make wuḍūʾ before sleeping (Bukhari 247).",
      "Lie on your right side (Bukhari 247).",
      "Recite Āyat al-Kursī; a guardian from Allah stays with you until morning (Bukhari 2311).",
      "Recite Al-Ikhlāṣ, Al-Falaq and An-Nās into cupped hands and wipe over the body, three times (Bukhari 5017).",
      "Avoid sleeping on your stomach; the Prophet ﷺ said Allah dislikes this way of lying (Abu Dawud 5040).",
      "On waking, say the waking duʿāʾ and wash your hands before putting them into a vessel (Bukhari 162, Muslim 278).",
    ],
    recitations: [
      { label: "Before sleeping", r: { ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", tr: "Bismika-llāhumma amūtu wa aḥyā.", en: "In Your name, O Allah, I die and I live." }, src: "Bukhari 6324" },
    ],
    benefits: {
      spiritual: "The night begins with dhikr and Allah’s protection, and sleep with a good intention becomes worship.",
      health: "Clean bedding reduces dust mites, allergens and bacteria, and a calm routine improves sleep quality.",
      social: "A tidy bed and room bring calm and order to the start and end of the day.",
    },
    lose: {
      spiritual: "We miss the protection and reward of the bedtime sunnahs, and the nightly reminder that we return to Allah.",
      health: "Dirty bedding can contribute to allergies, acne, skin irritation and poor sleep.",
      social: "Neglecting small daily habits often spreads to bigger areas of discipline.",
    },
    practice: { challenge: "For 7 nights: dust off the bed, make wuḍūʾ, and recite Āyat al-Kursī before sleeping.", reflection: "How did I feel waking up after following the sunnah routine?" },
  },
  {
    id: "hygiene", title: "Personal hygiene (ṭahārah and fiṭrah)", category: "Personal adab",
    summary: "Cleanliness is half of faith.",
    why: [
      "The Prophet ﷺ said purification is half of faith (Muslim 223). Allah loves those who repent and those who purify themselves (Quran 2:222).",
      "Allah is beautiful and loves beauty (Muslim 91). Purity is also a condition of prayer: without it, the prayer is not valid.",
    ],
    how: [
      "The five practices of the fiṭrah: trimming nails, trimming the moustache, removing underarm hair, removing pubic hair, and circumcision for males (Bukhari 5889, Muslim 257). Do not leave them longer than 40 days (Muslim 258).",
      "Use a miswāk or brush your teeth, especially before prayer (Bukhari 887).",
      "Clean yourself properly after using the toilet, with water, so no urine stays on the body or clothes.",
      "Make wuḍūʾ carefully, and ghusl on Fridays (Bukhari 879) and whenever it is required.",
      "Wear clean, neat clothes and a pleasant smell, especially at the masjid.",
      "Avoid coming to the masjid smelling of raw garlic or onion; angels are bothered by what bothers people (Muslim 564).",
    ],
    benefits: {
      spiritual: "Valid prayers, nearness to Allah’s love, and living by the fiṭrah He created us upon.",
      health: "Handwashing and oral hygiene are among the most effective ways to prevent infection, gum disease and bad breath.",
      social: "People feel comfortable around a clean, pleasant person, and it reflects well on Muslims.",
    },
    lose: {
      spiritual: "Prayer may be invalid if purity is missing. The Prophet ﷺ warned that carelessness about urine is a cause of punishment in the grave (Bukhari 216). Islam takes cleanliness seriously; the aim is care, not anxiety.",
      health: "Poor hygiene raises the risk of infections, skin problems, tooth decay and illness spreading to family.",
      social: "Bad odour or uncleanliness can push people away at home, at work and at the masjid.",
    },
    practice: { challenge: "For 7 days: brush or use miswāk before each prayer, and check your nails and fiṭrah care.", reflection: "Which hygiene habit do I want to improve this week?" },
  },
  {
    id: "eating", title: "The adab of eating and drinking", category: "Personal adab",
    summary: "Turning every meal into gratitude.",
    why: [
      "The Prophet ﷺ told a boy: say Bismillāh, eat with your right hand, and eat from what is in front of you (Bukhari 5376).",
      "Allah says: eat and drink, but do not waste; He does not love the wasteful (Quran 7:31).",
    ],
    how: [
      "Wash your hands and say Bismillāh. If you forget, say Bismillāhi awwalahū wa ākhirah (Abu Dawud 3767).",
      "Eat and drink with the right hand, sitting down, from the food nearest to you.",
      "Fill a third of the stomach with food, a third with drink, and leave a third for breathing (Tirmidhi 2380).",
      "Do not breathe or blow into the cup (Bukhari 153).",
      "Never criticise food: if you like it, eat it; if not, leave it (Bukhari 3563).",
      "Finish what is on your plate and lick your fingers; you do not know where the blessing is (Muslim 2033).",
      "Praise Allah after eating.",
    ],
    recitations: [
      { label: "After eating", r: { ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", tr: "Al-ḥamdu lillāhi-lladhī aṭʿamanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.", en: "Praise be to Allah who fed me this and provided it without any power or strength from me." }, src: "Abu Dawud 4023" },
    ],
    benefits: {
      spiritual: "Barakah in the food, and a daily habit of gratitude.",
      health: "Eating slowly and in moderation helps digestion and weight control.",
      social: "Sharing and good table manners make family meals warm and respectful.",
    },
    lose: {
      spiritual: "When Allah’s name is not mentioned, Shayṭān shares the food (Muslim 2017), and the blessing is lost.",
      health: "Overeating and eating in a rush harm digestion and health.",
      social: "Complaining about food or wasting it hurts the people who prepared it.",
    },
    practice: { challenge: "For 7 days: say Bismillāh and the after-meal duʿāʾ at every meal, and leave nothing on your plate.", reflection: "Which blessing on my table did I notice today?" },
  },
  {
    id: "salam", title: "Greeting with salām", category: "Social adab",
    summary: "The greeting of the people of Paradise.",
    why: [
      "The Prophet ﷺ said: you will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you something that makes you love one another? Spread salām among you (Muslim 54).",
      "When you are greeted, reply with a better greeting or at least the same (Quran 4:86).",
    ],
    how: [
      "Say “As-salāmu ʿalaykum wa raḥmatu-llāhi wa barakātuh”; each part adds reward, up to thirty good deeds (Abu Dawud 5195).",
      "The younger greets the older, the one walking greets the one sitting, and the smaller group greets the larger (Bukhari 6231, 6234).",
      "Reply with “Wa ʿalaykumu-s-salām wa raḥmatu-llāhi wa barakātuh”. Replying is obligatory.",
      "Greet people you know and people you don’t (Bukhari 12).",
      "Greet your family when entering your home.",
      "Shake hands with people of the same gender; sins fall away as you part (Abu Dawud 5212).",
    ],
    benefits: {
      spiritual: "Reward with every greeting, and a path to Paradise through love between believers.",
      social: "Salām breaks the ice, softens hearts, and builds trust in families and neighbourhoods.",
    },
    lose: {
      spiritual: "We miss easy rewards many times a day.",
      social: "Coldness and distance grow between people who live and pray side by side.",
    },
    practice: { challenge: "Today: be the first to give salām to everyone you meet, including at home.", reflection: "How did people respond when I greeted them first?" },
  },
  {
    id: "parents", title: "Kindness to parents (birr al-wālidayn)", category: "Social adab",
    summary: "Second only to worshipping Allah.",
    why: [
      "Allah commands worshipping Him alone and kindness to parents in the same verse. Do not even say “uff” to them, and lower to them the wing of humility (Quran 17:23–24).",
      "Asked who most deserves good companionship, the Prophet ﷺ said: your mother, three times, then your father (Bukhari 5971).",
      "Allah’s pleasure is in the parent’s pleasure (Tirmidhi 1899).",
    ],
    how: [
      "Speak gently and never raise your voice at them.",
      "Answer when they call, and help without being asked.",
      "Call or visit often, especially when they are older.",
      "Ask their advice and thank them.",
      "Make duʿāʾ for them in every prayer, whether they are living or have passed away.",
    ],
    recitations: [
      { label: "Duʿāʾ for parents", r: { ar: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", tr: "Rabbi-rḥamhumā kamā rabbayānī ṣaghīrā.", en: "My Lord, have mercy on them as they raised me when I was small." }, src: "Quran 17:24" },
    ],
    benefits: {
      spiritual: "Allah’s pleasure, and one of the deeds most beloved to Him (Bukhari 527).",
      social: "A home with respect and warmth, and children who learn kindness by watching.",
    },
    lose: {
      spiritual: "Disobedience to parents is among the major sins (Bukhari 5976).",
      social: "Hurt feelings and distance that can be hard to repair later.",
    },
    practice: { challenge: "This week: do one thing for each parent without being asked, and make duʿāʾ for them after every prayer.", reflection: "What sacrifice did my parents make for me that I never thanked them for?" },
  },
  {
    id: "speech", title: "Guarding the tongue", category: "Inner character",
    summary: "Speak good or stay silent.",
    why: [
      "Whoever believes in Allah and the Last Day, let him say good or keep silent (Bukhari 6018).",
      "Backbiting is like eating the flesh of your dead brother (Quran 49:12).",
      "Truthfulness leads to righteousness and righteousness to Paradise; lying leads to wickedness (Bukhari 6094).",
    ],
    how: [
      "Think before speaking: is it true, is it kind, is it needed?",
      "Do not mention someone in their absence with what they would dislike, even if it is true.",
      "Do not pass on news you have not checked (Quran 49:6).",
      "Never lie, even when joking (Abu Dawud 4800).",
      "Leave arguments, even when you are right (Abu Dawud 4800).",
      "Use your tongue for dhikr, good advice and kind words.",
    ],
    benefits: {
      spiritual: "The Prophet ﷺ guaranteed Paradise to whoever guards their tongue and chastity (Bukhari 6474).",
      social: "People trust you, open up to you, and feel safe around you.",
    },
    lose: {
      spiritual: "Words said carelessly can erase good deeds and carry heavy sins.",
      social: "Gossip and lies break friendships and families apart.",
    },
    practice: { challenge: "For one day: no complaining, no gossip, and no exaggeration. Replace each with “Alḥamdulillāh” or silence.", reflection: "When was it hardest to stay silent today, and why?" },
  },
  {
    id: "anger", title: "Controlling anger", category: "Inner character",
    summary: "True strength is self-control.",
    why: [
      "The strong one is not the one who wins a wrestling match, but the one who controls himself when angry (Bukhari 6114).",
      "A man asked for advice; the Prophet ﷺ said “Do not become angry” and repeated it several times (Bukhari 6116).",
    ],
    how: [
      "Seek refuge in Allah: “Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm” (Bukhari 3282).",
      "If standing, sit down; if sitting, lie down (Abu Dawud 4782).",
      "Stay silent until the anger passes.",
      "Remember the reward of forgiving: Allah loves those who restrain anger and pardon people (Quran 3:134).",
    ],
    benefits: {
      spiritual: "Allah’s love for those who restrain anger and pardon (Quran 3:134).",
      health: "Calming down quickly lowers stress and protects the heart and sleep.",
      social: "Fewer regrets, and relationships that survive hard moments.",
    },
    lose: {
      spiritual: "Anger opens the door to harsh words, injustice and sin.",
      health: "Frequent anger raises stress and blood pressure.",
      social: "Words said in anger can wound family and friends for years.",
    },
    practice: { challenge: "This week: the moment you feel angry, say the taʿawwudh, sit down and stay quiet for one minute.", reflection: "What usually triggers my anger, and what helped today?" },
  },
];
