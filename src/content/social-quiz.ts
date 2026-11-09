import type { Question } from "./topics";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah course quiz: 30 questions across all parts of
// "Ijtimoiy odoblar".
const QUESTIONS: Question[] = [
  { q: "What does the Arabic word adab originally point to?", options: ["Punishment", "An invitation to a feast: goodness", "Silence", "Wealth"], answer: 1, why: "From maʾdubah, a feast people are invited to; adab means goodness.", src: src("5–6") },
  { q: "According to Tirmidhi 1952, what is the best gift a parent can give a child?", options: ["Money", "Good adab", "A house", "A car"], answer: 1, why: "No gift is better than good manners.", src: "Tirmidhi 1952" },
  { q: "Islam wants good manners to become a person’s…", options: ["Temporary state", "Permanent station (maqām)", "Hobby", "Secret"], answer: 1, why: "A passing trait is good; a permanent station is the goal.", src: src("14–18") },
  { q: "Which is the worst affliction of the tongue, according to the book?", options: ["Joking", "Lying", "Speaking fast", "Silence"], answer: 1, why: "Lying is the mother of every vileness.", src: src("23–33") },
  { q: "Whoever listens to backbiting without objecting…", options: ["Is innocent", "Shares the sin", "Gets reward", "Is wise"], answer: 1, why: "Only objecting with the tongue frees him.", src: src("23–33") },
  { q: "Two people whispering in front of a third is…", options: ["Fine", "Forbidden, because it hurts him", "Recommended", "Only bad at night"], answer: 1, why: "It saddens the third person.", src: "Bukhari 6290" },
  { q: "Which greeting form does the book warn means “death be upon you”?", options: ["As-salāmu ʿalaykum", "Somalaykum", "Wa ʿalaykum as-salām", "Assalomu alaykum"], answer: 1, why: "Distorted greetings change the meaning.", src: src("39–42") },
  { q: "How many times do you ask permission at a door before leaving?", options: ["Once", "Three times", "Ten times", "Until they answer"], answer: 1, why: "If there is no answer after three, return.", src: "Bukhari 6245" },
  { q: "Where should you stand when asking permission at a door?", options: ["Facing it directly", "To the side", "Inside the yard", "At the window"], answer: 1, why: "Permission exists because of the eyes.", src: "Abu Dawud 5174" },
  { q: "The word maskan (home) comes from a root meaning…", options: ["Wealth", "Tranquillity", "Wall", "Family"], answer: 1, why: "The home is a place of rest (16:80).", src: src("42–45") },
  { q: "According to the book, the wife’s mahr belongs to…", options: ["Her father", "Her alone", "The husband", "The family"], answer: 1, why: "The mahr is hers alone and paid in full.", src: src("58–64") },
  { q: "“The best of you are those who are best to…”", options: ["Their friends", "Their wives", "Their teachers", "Strangers"], answer: 1, why: "Good treatment of one’s wife is a measure of character.", src: "Tirmidhi 1162" },
  { q: "Eating beyond fullness to the point of harming yourself is…", options: ["Recommended", "Ḥarām", "Permitted", "Obligatory"], answer: 1, why: "Beyond fullness is disliked; to the point of harm is forbidden.", src: src("67–68") },
  { q: "How should food be eaten from a shared dish?", options: ["From the middle", "From the edge, in front of you", "From the top", "From anywhere"], answer: 1, why: "Blessing descends in the middle of the dish.", src: src("68–78") },
  { q: "How long is a guest’s right to hospitality?", options: ["One day", "Three days", "A week", "A month"], answer: 1, why: "Beyond that it is charity, and a guest should not overstay.", src: "Bukhari 6135" },
  { q: "In the Hanafi school, accepting a wedding (walīmah) invitation is…", options: ["Disliked", "Sunnah", "Ḥarām", "Irrelevant"], answer: 1, why: "Other invitations are recommended.", src: src("83–89") },
  { q: "What is the worst food, according to Muslim 1432?", options: ["Cold food", "A wedding feast that invites the rich and leaves out the poor", "Food eaten alone", "Spicy food"], answer: 1, why: "Invite the poor and the pious too.", src: "Muslim 1432" },
  { q: "What surah did the companions recite at the end of a gathering?", options: ["Al-Fātiḥah", "Al-ʿAṣr", "Al-Kawthar", "An-Nās"], answer: 1, why: "Remembering time, faith, good deeds, truth and patience.", src: src("89–96") },
  { q: "Which two days replaced the pre-Islamic festivals of Madinah?", options: ["Friday and Monday", "ʿĪd al-Fiṭr and ʿĪd al-Aḍḥā", "New Year and Mawlid", "Ashura and Arafah"], answer: 1, why: "Allah gave two better days.", src: "Abu Dawud 1134" },
  { q: "On ʿĪd al-Fiṭr, before the prayer, it is sunnah to…", options: ["Fast", "Eat something, such as dates", "Sleep", "Travel"], answer: 1, why: "On al-Aḍḥā one eats after the prayer.", src: "Bukhari 953" },
  { q: "What does the book say about holidays and resorts?", options: ["Prayer is suspended", "Take your prayers, modesty and manners with you", "Anything goes", "Never travel"], answer: 1, why: "What is ḥarām at home is ḥarām on holiday.", src: src("110–118") },
  { q: "Is visiting a sick non-Muslim neighbour allowed?", options: ["No", "Yes, the Prophet ﷺ did so", "Only on Eid", "Only relatives"], answer: 1, why: "He visited a sick Jewish boy.", src: "Bukhari 1356" },
  { q: "Clothes with pictures of animals are, for men and women…", options: ["Recommended", "Ḥarām", "Permitted", "Only disliked for children"], answer: 1, why: "Pictures of non-living things are fine.", src: src("135–137") },
  { q: "Which of these is one of the rights of the road?", options: ["Racing", "Lowering the gaze", "Playing loud music", "Parking anywhere"], answer: 1, why: "Gaze, no harm, salām, and good counsel.", src: "Bukhari 2465" },
  { q: "The book says Quran verses should NOT be used as…", options: ["Reading material", "Phone ringtones", "Memorisation", "Lessons"], answer: 1, why: "Nor as wallpaper, since phones go everywhere.", src: src("178–184") },
  { q: "After calling three times with no answer, you should…", options: ["Keep calling", "Stop", "Call their family", "Send 20 messages"], answer: 1, why: "Like asking permission three times at a door.", src: src("186–189") },
  { q: "What does a trader’s false oath to sell goods count as?", options: ["Good marketing", "One of the greatest sins", "Allowed", "Recommended"], answer: 1, why: "Honesty brings blessing; lies wipe it out.", src: src("231–243") },
  { q: "Congregational prayer is how many times better than praying alone?", options: ["2", "10", "27", "100"], answer: 2, why: "Twenty-seven degrees.", src: "Bukhari 645" },
  { q: "What should a student never do in exams?", options: ["Revise", "Cheat or copy", "Arrive early", "Make duʿāʾ"], answer: 1, why: "Whoever cheats is not one of us.", src: "Muslim 102" },
  { q: "Where do you lay a dying person, according to the Sunnah?", options: ["On the left side", "On the right side facing the qiblah", "Face down", "Sitting"], answer: 1, why: "And gently prompt lā ilāha illā-llāh.", src: src("310–311") },
];

export const SOCIAL_QUIZ = {
  id: "social", title: "Social Tarbiyah", sub: "Ijtimoiy odoblar: 30 questions across the course", icon: "learn" as const,
  learn: [
    "Questions cover the whole Social Tarbiyah course, based on Ijtimoiy odoblar by Shaykh Muhammad Sodik Muhammad Yusuf.",
    "Read the lessons first: foundations, speech, home and family, food, festivals, society, dress, the road, phones, wealth, the mosque, knowledge and work, illness and death.",
  ],
  questions: QUESTIONS,
};
