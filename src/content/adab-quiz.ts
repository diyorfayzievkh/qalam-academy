import type { Question } from "./topics";

// Lesson quizzes for the original Akhlaq & Adab lessons (adab.ts), keyed by
// lesson id. Newer lessons carry their quiz inline.
export const ADAB_QUIZZES: Record<string, Question[]> = {
  "bed-sleep": [
    { q: "What should you do to your bed before lying down?", options: ["Nothing", "Dust it off", "Spray perfume", "Turn it around"], answer: 1, why: "You do not know what came onto it after you left it.", src: "Bukhari 6320" },
    { q: "On which side is it sunnah to sleep?", options: ["Left", "Right", "Stomach", "Back only"], answer: 1, why: "Lie on your right side.", src: "Bukhari 247" },
    { q: "Which verse gives a guardian from Allah until morning when recited at night?", options: ["Al-Fātiḥah", "Āyat al-Kursī", "Sūrat al-Kawthar", "The last verse of al-Baqarah only"], answer: 1, why: "A guardian stays with you and Shayṭān does not come near.", src: "Bukhari 2311" },
    { q: "Which three surahs are recited into the hands and wiped over the body?", options: ["Al-Fātiḥah, al-Baqarah, Āl ʿImrān", "Al-Ikhlāṣ, al-Falaq, an-Nās", "Yāsīn, ar-Raḥmān, al-Mulk", "Al-Kahf, Maryam, Ṭāhā"], answer: 1, why: "Three times, as the Prophet ﷺ did.", src: "Bukhari 5017" },
    { q: "What is sleep described as?", options: ["A waste of time", "A minor death", "A punishment", "Nothing special"], answer: 1, why: "Allah takes souls in sleep and returns them (39:42).", src: "Quran 39:42" },
    { q: "Which way of lying did the Prophet ﷺ say Allah dislikes?", options: ["On the right side", "On the stomach", "On the back", "Sitting up"], answer: 1, why: "Avoid sleeping face down.", src: "Abu Dawud 5040" },
  ],
  hygiene: [
    { q: "Purification is…", options: ["Optional", "Half of faith", "Only for prayer", "Only for Fridays"], answer: 1, why: "Purity is half of īmān.", src: "Muslim 223" },
    { q: "Which is NOT one of the five fiṭrah practices?", options: ["Trimming nails", "Trimming the moustache", "Dyeing hair", "Removing underarm hair"], answer: 2, why: "The five: circumcision, pubic hair, moustache, nails and underarm hair.", src: "Bukhari 5889" },
    { q: "Carelessness about what was warned to cause punishment in the grave?", options: ["Food", "Urine", "Clothes", "Hair"], answer: 1, why: "Not guarding against urine.", src: "Bukhari 216" },
    { q: "Why avoid the masjid after eating raw garlic or onion?", options: ["It is ḥarām food", "Angels are bothered by what bothers people", "It breaks wuḍūʾ", "No reason"], answer: 1, why: "Keep away until the smell is gone.", src: "Muslim 564" },
    { q: "When is ghusl strongly emphasised every week?", options: ["Monday", "Friday", "Sunday", "Never"], answer: 1, why: "Ghusl on Friday.", src: "Bukhari 879" },
    { q: "Allah is beautiful and loves…", options: ["Wealth", "Beauty", "Silence", "Strength"], answer: 1, why: "Allah is beautiful and loves beauty.", src: "Muslim 91" },
  ],
  eating: [
    { q: "What three things did the Prophet ﷺ teach the boy at the meal?", options: ["Eat fast, eat much, eat alone", "Bismillāh, right hand, from in front of you", "Stand, talk, leave", "Salt, water, bread"], answer: 1, why: "The first lesson of table manners.", src: "Bukhari 5376" },
    { q: "If you forget Bismillāh at the start, say…", options: ["Nothing", "Bismillāhi awwalahū wa ākhirah", "Alḥamdulillāh", "Astaghfirullāh"], answer: 1, why: "In the name of Allah at its beginning and end.", src: "Abu Dawud 3767" },
    { q: "How should the stomach be divided?", options: ["All food", "A third food, a third drink, a third breath", "Half and half", "No rule"], answer: 1, why: "Moderation in eating.", src: "Tirmidhi 2380" },
    { q: "What did the Prophet ﷺ do with food he disliked?", options: ["Criticised it", "Left it without criticising", "Threw it away", "Complained to the cook"], answer: 1, why: "He never criticised food.", src: "Bukhari 3563" },
    { q: "Why lick the fingers and clean the plate?", options: ["It is a custom", "You do not know where the blessing is", "To save washing", "No reason"], answer: 1, why: "The blessing may be in the last bite.", src: "Muslim 2033" },
    { q: "When Allah’s name is not mentioned at a meal…", options: ["Nothing happens", "Shayṭān shares the food", "The food tastes better", "It is fine"], answer: 1, why: "Bismillāh protects the meal.", src: "Muslim 2017" },
  ],
  salam: [
    { q: "What did the Prophet ﷺ say makes believers love one another?", options: ["Gifts only", "Spreading salām", "Silence", "Wealth"], answer: 1, why: "Spread salām among you.", src: "Muslim 54" },
    { q: "Giving salām is sunnah. Returning it is…", options: ["Optional", "Obligatory", "Disliked", "Only for elders"], answer: 1, why: "Allah commands returning a greeting with better or equal (4:86).", src: "Quran 4:86" },
    { q: "Who greets first: the walker or the one sitting?", options: ["The one sitting", "The walker", "Whoever is older", "Nobody"], answer: 1, why: "Rider to walker, walker to sitting, few to many, young to old.", src: "Bukhari 6231" },
    { q: "Who is closest to Allah?", options: ["Who returns salām late", "Who greets first", "Who never greets", "Who greets only friends"], answer: 1, why: "The one who begins with salām.", src: "Abu Dawud 5197" },
    { q: "What is the fuller form of the greeting?", options: ["Salām", "As-salāmu ʿalaykum wa raḥmatullāhi wa barakātuh", "Hello", "Good day"], answer: 1, why: "The complete greeting carries the most reward.", src: "Abu Dawud 5195" },
    { q: "Should we greet people we do not know?", options: ["No", "Yes, greet those you know and those you don’t", "Only Arabs", "Only in the masjid"], answer: 1, why: "Among the best acts of Islam.", src: "Bukhari 12" },
  ],
  parents: [
    { q: "In 17:23, kindness to parents comes right after…", options: ["Fasting", "Worshipping Allah alone", "Hajj", "Zakāt"], answer: 1, why: "Worship none but Him, and be good to parents.", src: "Quran 17:23" },
    { q: "What word must we not even say to parents?", options: ["Salām", "Uff", "Thank you", "Please"], answer: 1, why: "Not even a sigh of irritation.", src: "Quran 17:23" },
    { q: "Who most deserves good companionship?", options: ["Your friend", "Your mother, then your mother, then your mother, then your father", "Your teacher", "Your neighbour"], answer: 1, why: "The mother three times, then the father.", src: "Bukhari 5971" },
    { q: "Which duʿāʾ do we make for our parents?", options: ["Rabbi-rḥamhumā kamā rabbayānī ṣaghīrā", "Rabbanā ātinā", "Subḥānallāh", "Bismillāh"], answer: 0, why: "My Lord, have mercy on them as they raised me when small.", src: "Quran 17:24" },
    { q: "If parents order something sinful…", options: ["Obey anyway", "Do not obey in that, but still treat them kindly", "Cut them off", "Shout at them"], answer: 1, why: "No obedience in sin, but kind company remains (31:15).", src: "Quran 31:15" },
    { q: "Disobeying parents is…", options: ["A small matter", "Among the major sins", "Allowed when adult", "Fine if they are wrong"], answer: 1, why: "Listed among the greatest sins.", src: "Bukhari 5976" },
  ],
  speech: [
    { q: "“Whoever believes in Allah and the Last Day, let him…”", options: ["…speak a lot", "…say good or keep silent", "…argue well", "…stay home"], answer: 1, why: "Good speech or silence.", src: "Bukhari 6018" },
    { q: "Backbiting is…", options: ["Mentioning someone’s real fault in his absence", "Praising someone", "Giving advice privately", "Telling the truth to his face"], answer: 0, why: "If the fault is untrue, it is slander.", src: "Muslim 2589" },
    { q: "The Quran likens backbiting to…", options: ["Stealing", "Eating your dead brother’s flesh", "Lying", "Drinking"], answer: 1, why: "A powerful image of how ugly it is.", src: "Quran 49:12" },
    { q: "Who will not enter Paradise?", options: ["The silent", "The tale-carrier", "The shy", "The poor"], answer: 1, why: "Spreading words to cause trouble is a major sin.", src: "Bukhari 6056" },
    { q: "For whom did the Prophet ﷺ guarantee Paradise?", options: ["Whoever guards his tongue and private parts", "Whoever is rich", "Whoever travels", "Whoever is famous"], answer: 0, why: "What is between the jaws and between the legs.", src: "Bukhari 6474" },
    { q: "A word said carelessly can…", options: ["Never matter", "Drop a person into the Fire", "Only hurt feelings", "Be erased by forgetting"], answer: 1, why: "A single careless word can be that heavy.", src: "Bukhari 6477" },
  ],
  anger: [
    { q: "What advice did the Prophet ﷺ repeat to the man who asked for counsel?", options: ["Pray more", "Do not become angry", "Give charity", "Travel"], answer: 1, why: "He repeated it several times.", src: "Bukhari 6116" },
    { q: "Who is the strong one?", options: ["Who wins fights", "Who controls himself when angry", "Who is rich", "Who shouts loudest"], answer: 1, why: "Strength is self-control.", src: "Bukhari 6114" },
    { q: "What should one say when angry?", options: ["Nothing", "Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm", "Bismillāh", "Alḥamdulillāh"], answer: 1, why: "Seeking refuge removes anger.", src: "Bukhari 6115" },
    { q: "If angry while standing, you should…", options: ["Run", "Sit down, and if it continues, lie down", "Shout", "Leave the house"], answer: 1, why: "Changing position calms anger.", src: "Abu Dawud 4782" },
    { q: "Allah praises those who…", options: ["Take revenge", "Restrain anger and pardon people", "Never feel anything", "Avoid people"], answer: 1, why: "Allah loves those who do good.", src: "Quran 3:134" },
    { q: "What reward is promised for restraining anger when able to act on it?", options: ["Nothing", "Allah lets him choose his reward before all creation", "Wealth", "Fame"], answer: 1, why: "He will be called before all creation on the Day of Judgment.", src: "Abu Dawud 4777" },
  ],
};
