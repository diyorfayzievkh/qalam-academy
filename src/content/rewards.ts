import type { Block } from "./library";

// "Key reward" cards: each reward the lessons mention, made concrete so a
// reader can picture it and remember it. Keys are "world/lesson". Cards are
// inserted before a lesson's "Key takeaways" (or at the end).
type R = Extract<Block, { type: "reward" }>;
const r = (title: string, measure: string, picture: string, src: string): R => ({ type: "reward", title, measure, picture, src });

// Reused pictures
const QIRAT = r("One qīrāṭ for the prayer, two for the burial", "1 qīrāṭ = a mountain like Uḥud",
  "In the Prophet’s ﷺ time a qīrāṭ was a small coin. Here he used the word for a reward and explained it: the smaller of the two is like Mount Uḥud (Muslim 945). Uḥud is a mountain about 7 km long, rising hundreds of metres above the plain of Madinah, as long as some 70 football pitches laid end to end. Stay for the prayer and you carry one such mountain of reward; stay until the burial and you carry two.",
  "Bukhari 1325, Muslim 945");
const SICK = r("Walking in the gardens of Paradise", "70,000 angels praying for you",
  "Whoever visits a sick Muslim is in the khurfah of Paradise until he returns (Muslim 2568). A khurfah is a garden at harvest time, its fruit already picked and ready: every step to the patient is like walking through it. Visit in the morning and 70,000 angels pray for you until evening; visit in the evening and they pray until morning (Tirmidhi 969).",
  "Muslim 2568, Tirmidhi 969");
const STEPS = r("Every step to the masjid", "1 step = 1 sin erased + 1 rank raised",
  "When a person makes wuḍūʾ well and walks to the masjid only for prayer, every step he takes raises him one rank and erases one sin (Bukhari 647). A 10-minute walk is roughly 1,000 steps: a thousand sins dropped and a thousand ranks gained, on the way to one prayer.",
  "Bukhari 647");
const JAMAAH = r("Praying in congregation", "27 × the reward of praying alone",
  "Prayer in congregation is twenty-seven degrees better than praying alone (Bukhari 645). Five prayers a day in congregation carry the reward of 135 prayers prayed alone: 27 days’ worth, every single day.",
  "Bukhari 645");
const NIGHT = r("ʿIshāʾ and Fajr in congregation", "= standing the whole night in prayer",
  "Whoever prays ʿIshāʾ in congregation is as if he prayed half the night; whoever prays Fajr in congregation too is as if he prayed the whole night (Muslim 656). Two short prayers, and the record shows a full night of worship while you slept.",
  "Muslim 656");
const SHADE = r("Shade on the Day without shade", "Shade under Allah’s Throne",
  "The Day of Judgment lasts fifty thousand years (Quran 70:4), and the sun is brought within a mile of people, who stand in sweat by their deeds (Muslim 2864). On that Day seven kinds of people are shaded under Allah’s Throne, among them two who loved each other for Allah’s sake and the one who gave charity in secret (Bukhari 660).",
  "Bukhari 660, Muslim 2864");
const LAYLAT = r("Laylat al-Qadr", "1 night > 1,000 months = 83 years and 4 months",
  "One night of worship is better than a thousand months (97:3). That is more than 83 years, longer than most people’s whole lives. It is most likely in the odd nights of the last ten, especially the 27th; Imam Abū Ḥanīfah taught that it is not fixed to one night, so seek it throughout Ramadan, and whoever stands it with faith and hope has all past sins forgiven (Bukhari 1901).",
  "Quran 97:3, Bukhari 1901");
const GRAIN = r("Charity that grows", "1 → 700, and Allah multiplies more for whom He wills",
  "Allah compares spending in His path to one grain that grows seven ears, each with a hundred grains (2:261). Give one coin and you may find seven hundred waiting for you. Every good deed is written from ten up to seven hundred times, while a bad deed is written only once (Bukhari 6491).",
  "Quran 2:261, Bukhari 6491");
const QURAN = r("Every letter of the Quran", "1 letter = 10 good deeds",
  "Whoever recites a letter of the Quran gets a good deed, and each good deed is multiplied ten times. “Alif Lām Mīm” is not one letter: alif is a letter, lām a letter and mīm a letter (Tirmidhi 2910), so 30 good deeds. Al-Fātiḥah alone has about 140 letters: more than 1,400 good deeds in every rakʿah.",
  "Tirmidhi 2910");
const FRIDAY = r("Arriving early on Friday", "Camel → cow → ram → hen → egg",
  "Whoever goes in the first hour is as if he offered a camel in sacrifice; the second hour, a cow; the third, a horned ram; the fourth, a hen; the fifth, an egg. When the imam comes out, the angels fold their scrolls to listen (Bukhari 881). And whoever bathes, goes early on foot, sits near the imam and listens without idle talk gets, for every step, the reward of a year of fasting and night prayer (Abu Dawud 345).",
  "Bukhari 881, Abu Dawud 345");
const WUDU = r("Wuḍūʾ washes sins away", "Sins leave with the last drop of water",
  "When a believer washes his face, every sin his eyes looked at leaves with the water, or with the last drop of water; the same for his hands and his feet, until he comes out pure of sins (Muslim 244). Five wuḍūʾs a day are five washes of the soul.",
  "Muslim 244");
const SALAM = r("Every greeting is counted", "10 · 20 · 30 good deeds",
  "A man said “As-salāmu ʿalaykum” and the Prophet ﷺ said: ten. Another added “wa raḥmatullāh”: twenty. Another added “wa barakātuh”: thirty (Abu Dawud 5195). Saying the full greeting ten times a day is 300 good deeds for a few seconds of speech.",
  "Abu Dawud 5195");
const KNOW = r("The path of knowledge", "A path to Paradise, and angels lowering their wings",
  "Whoever takes a path seeking knowledge, Allah makes a path to Paradise easy for him. The angels lower their wings for the seeker of knowledge out of pleasure, and everything in the heavens and the earth, even the fish in the water, asks forgiveness for the scholar (Abu Dawud 3641).",
  "Abu Dawud 3641, Muslim 2699");
const MOSQUE = r("Building a masjid", "A house in Paradise, even for a bird’s nest",
  "Whoever builds a masjid for Allah, Allah builds a house for him in Paradise (Bukhari 450), even if his share is as small as a sandgrouse’s nest (Ibn Majah 738). Chipping in for a few bricks of a masjid can buy a home that never crumbles.",
  "Bukhari 450, Ibn Majah 738");
const FORGIVE_ANGER = r("Swallowing your anger", "Called by Allah before all creation",
  "Whoever holds back his anger when he is able to act on it, Allah will call him before all of creation on the Day of Resurrection (Abu Dawud 4777). A few seconds of silence in anger, rewarded in front of every human who ever lived.",
  "Abu Dawud 4777");
const ARGUE = r("Three houses in Paradise", "Outskirts · middle · highest part",
  "The Prophet ﷺ guaranteed a house on the outskirts of Paradise for whoever leaves arguing even when he is right, a house in the middle of Paradise for whoever leaves lying even when joking, and a house in the highest part of Paradise for whoever has good character (Abu Dawud 4800).",
  "Abu Dawud 4800");
const CHARACTER = r("The heaviest thing on the scale", "Good character outweighs everything",
  "Nothing is heavier on the believer’s scale on the Day of Judgment than good character (Tirmidhi 2002). Through it a person reaches the rank of one who fasts every day and prays every night (Abu Dawud 4798).",
  "Tirmidhi 2002, Abu Dawud 4798");
const ORPHAN = r("Next to the Prophet ﷺ in Paradise", "As close as two fingers",
  "“I and the one who cares for an orphan will be in Paradise like this,” and he held up his index and middle fingers with a small gap (Bukhari 5304). Whoever raises two daughters until they grow up will come on the Day of Judgment with him like these two fingers (Muslim 2631).",
  "Bukhari 5304, Muslim 2631");
const MEAL = r("The duʿāʾ after eating", "Past sins forgiven",
  "Whoever eats and says “Al-ḥamdu lillāhi-lladhī aṭʿamanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah” has his past sins forgiven (Abu Dawud 4023). A similar duʿāʾ, “Al-ḥamdu lillāhi-lladhī kasānī hādhā…”, is said when putting on new clothes (Abu Dawud 4023). Three meals a day are three chances.",
  "Abu Dawud 4023");
const REPENT = r("Sins turned into good deeds", "Bad deeds rewritten as good",
  "For those who repent, believe and do good, “Allah will replace their evil deeds with good deeds” (25:70). Sincere repentance does not only erase the record; it can turn the lines of sin into lines of reward.",
  "Quran 25:70");
const PATIENCE = r("Reward without measure", "No counting, no ceiling",
  "“The patient will be given their reward without measure” (39:10). Every other deed has a number: ten, seven hundred. Patience has none. When a believer loses a child and praises Allah, Allah says: build for My servant a house in Paradise and call it the House of Praise (Tirmidhi 1021).",
  "Quran 39:10, Tirmidhi 1021");
const PARENTS = r("Your parents are a door of Paradise", "The middle gate of Paradise",
  "“A parent is the middle door of Paradise; so keep it or lose it” (Tirmidhi 1900). Paradise lies at your mother’s feet (Nasāʾī 3104). Kindness to parents is among the deeds most beloved to Allah, right after prayer on time (Bukhari 527).",
  "Tirmidhi 1900, Nasāʾī 3104, Bukhari 527");
const TIES = r("Family ties", "More provision and a blessed life",
  "Whoever wants his provision expanded and his life blessed, let him keep family ties (Bukhari 5986). It is one of the few deeds tied by name to more income and a fuller life in this world, before the reward of the next.",
  "Bukhari 5986");
const SALAWAT = r("Ṣalawāt on the Prophet ﷺ", "1 → 10 blessings, 10 sins erased, 10 ranks",
  "Whoever sends one ṣalāh on the Prophet ﷺ, Allah sends ten upon him, erases ten sins and raises him ten ranks (Nasāʾī 1297). A hundred ṣalawāt on a Friday is a thousand blessings from Allah Himself.",
  "Nasāʾī 1297, Muslim 408");
const ROAD = r("Removing harm from the road", "Forgiveness for one branch",
  "A man found a thorny branch on the road and moved it aside; Allah thanked him and forgave him (Bukhari 652). Removing harm from the road is a branch of faith (Muslim 35). Picking up a piece of glass on the pavement can be the deed that saves you.",
  "Bukhari 652, Muslim 35");
const PLANT = r("A tree that keeps giving", "Charity for as long as it feeds",
  "Whatever a person, animal or bird eats from a tree you planted is charity for you (Bukhari 2320). One fruit tree can feed for decades, and the charity keeps being written long after you are gone.",
  "Bukhari 2320");
const INTERCEDE = r("Forty people praying for you", "Their intercession is accepted",
  "If forty men who associate nothing with Allah pray the funeral prayer over a Muslim, Allah accepts their intercession for him (Muslim 948). If a hundred pray over him, the same (Muslim 947). Joining a funeral prayer can be what tips a stranger into Paradise, and others will one day do it for you.",
  "Muslim 948, Muslim 947");
const CONDOLE = r("Comforting the bereaved", "Clothed in garments of honour",
  "“No believer consoles his brother in a calamity except that Allah clothes him with garments of honour on the Day of Judgment” (Ibn Majah 1601). A short visit and a few words to a grieving family, repaid with clothing of honour before all creation.",
  "Ibn Majah 1601");
const MERCHANT = r("The honest trader", "A blessed sale",
  "The buyer and the seller: if they are truthful and make things clear, their sale is blessed; if they hide and lie, its blessing is wiped out (Bukhari 2079). It is also reported that the truthful, trustworthy merchant will be with the prophets, the truthful and the martyrs (Tirmidhi 1209, weak chain).",
  "Bukhari 2079");
const TEACH = r("Knowledge that keeps paying", "Reward that continues after death",
  "When a person dies, his deeds end except three: ongoing charity, knowledge that benefits, and a righteous child who prays for him (Muslim 1631). Teach one child al-Fātiḥah, and every time they recite it in prayer, for the rest of their life, you share the reward.",
  "Muslim 1631, Bukhari 5027");
const FEED = r("Feeding a fasting person", "Their whole fast’s reward, again",
  "Whoever gives a fasting person food to break his fast gets the same reward as him, without his reward being reduced at all (Tirmidhi 807). Feed ten people at ifṭār and you are written ten extra days of fasting.",
  "Tirmidhi 807");
const IKHLAS = r("Sūrat al-Ikhlāṣ", "= one third of the Quran",
  "Sūrat al-Ikhlāṣ equals a third of the Quran (Bukhari 5013). Recited three times, its reward equals reciting the whole Quran: about 30 seconds.",
  "Bukhari 5013");
const KURSI = r("Āyat al-Kursī at night", "A guardian from Allah until morning",
  "Whoever recites Āyat al-Kursī when going to bed has a guardian from Allah with him, and Shayṭān does not come near him until morning (Bukhari 2311).",
  "Bukhari 2311");
const SUBHAN = r("A sea of sins wiped away", "100 × → sins like the foam of the sea",
  "Whoever says “Subḥāna-llāhi wa biḥamdih” a hundred times a day has his sins forgiven even if they are like the foam of the sea (Bukhari 6405). It takes about two minutes. And “lā ilāha illa-llāh waḥdahū lā sharīka lah…” a hundred times equals freeing ten slaves, with 100 good deeds written and 100 sins erased (Bukhari 6403).",
  "Bukhari 6405, Bukhari 6403");
const NEIGHBOUR = r("The best neighbour", "Best with Allah",
  "The best of companions with Allah is the best to his companion, and the best of neighbours with Allah is the best to his neighbour (Tirmidhi 1944).",
  "Tirmidhi 1944");
const CHARITY_FIRE = r("Charity puts out sins", "Like water on fire",
  "Charity extinguishes sin as water extinguishes fire (Tirmidhi 614), and protect yourselves from the Fire even with half a date (Bukhari 1417). A small coin can put out a big fire.",
  "Tirmidhi 614, Bukhari 1417");
const QUBA = r("A prayer in Masjid Qubāʾ", "= the reward of an ʿumrah",
  "Whoever purifies himself at home, then comes to Masjid Qubāʾ and prays in it has the reward of an ʿumrah (Ibn Majah 1412).",
  "Ibn Majah 1412");

export const REWARD_BLOCKS: Record<string, Block[]> = {
  // Akhlaq & Adab
  "akhlaq/bed-sleep": [KURSI],
  "akhlaq/hygiene": [WUDU],
  "akhlaq/eating": [MEAL],
  "akhlaq/salam": [SALAM],
  "akhlaq/parents": [PARENTS],
  "akhlaq/speech": [ARGUE],
  "akhlaq/anger": [FORGIVE_ANGER],
  "akhlaq/truthfulness": [ARGUE],
  "akhlaq/humility": [CHARACTER],
  "akhlaq/generosity": [GRAIN, CHARITY_FIRE],
  "akhlaq/patience": [PATIENCE],
  "akhlaq/forgiveness": [FORGIVE_ANGER],
  "akhlaq/young-old": [ORPHAN],
  "akhlaq/family-ties": [TIES],
  "akhlaq/gentleness": [CHARACTER],
  // Spiritual Tarbiyah
  "ruhiy/khushu": [WUDU],
  "ruhiy/dhikr": [SUBHAN],
  "ruhiy/tongue": [ARGUE],
  "ruhiy/riya": [SHADE],
  "ruhiy/ghadab": [FORGIVE_ANGER],
  "ruhiy-2/mahabbah": [SHADE],
  "ruhiy-2/sabr": [PATIENCE],
  "ruhiy-2/tawbah": [REPENT],
  "ruhiy-2/taqwa": [CHARACTER],
  "ruhiy-3/afuww": [LAYLAT],
  "ruhiy-3/karim": [GRAIN],
  "ruhiy-3/prophet-character": [SALAWAT],
  "ruhiy-3/muslim-rights": [SICK, QIRAT],
  "ruhiy-3/family": [PARENTS, ORPHAN],
  "ruhiy-3/kin-neighbours": [TIES, NEIGHBOUR],
  "ruhiy-3/friendship": [SHADE],
  "ruhiy-3/creation": [PLANT],
  // Social Tarbiyah
  "social/social-what-is-adab": [CHARACTER],
  "social/social-tongue": [ARGUE],
  "social/social-greeting": [SALAM],
  "social/social-eating": [MEAL],
  "social/social-hospitality": [FEED],
  "social/social-gatherings": [SUBHAN],
  "social/social-commemorations": [LAYLAT, SALAWAT],
  "social/social-youth": [SHADE],
  "social/social-purity": [WUDU],
  "social/social-road": [ROAD],
  "social/social-wealth": [GRAIN, CHARITY_FIRE],
  "social/social-trade": [MERCHANT],
  "social/social-mosque": [MOSQUE, STEPS],
  "social/social-congregation": [JAMAAH, NIGHT],
  "social/social-jumuah": [FRIDAY, SALAWAT],
  "social/social-neighbours": [NEIGHBOUR],
  "social/social-knowledge": [KNOW],
  "social/social-student": [KNOW, QURAN],
  "social/social-teacher": [TEACH],
  "social/social-companions": [SHADE],
  "social/social-illness": [PATIENCE],
  "social/social-visiting-sick": [SICK],
  "social/social-death": [INTERCEDE],
  "social/social-funeral": [QIRAT, INTERCEDE, CONDOLE],
};

export const REWARDS_ALL = { IKHLAS, SUBHAN, SALAWAT, CHARACTER };
export const REWARDS = { QIRAT, SICK, STEPS, JAMAAH, NIGHT, INTERCEDE, CONDOLE, QUBA, QURAN, FRIDAY, MOSQUE };
