import type { Lesson } from "./library";
import { L, P } from "./ruhiy";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah, part 5: knowledge, companionship, work, illness, death,
// the funeral and condolence. From "Ijtimoiy odoblar" by Shaykh Muhammad
// Sodik Muhammad Yusuf, used with the rights holder's permission.

const K = "Knowledge and work";
const SO = "Living in society";
const ID = "Illness and death";

export const SOCIAL_LESSONS_5: Lesson[] = [
  { id: "social-knowledge", group: K, title: "The place of knowledge", summary: "Why Islam honours knowledge, and why seeking it is an obligation for every Muslim.", sources: [src("263–266"), "Quran 58:11", "Quran 39:9", "Quran 20:114", "Ibn Majah 224", "Muslim 2699"],
    blocks: [
      P("ʿIlm literally means perceiving a thing as it really is. No religion, system or philosophy has honoured knowledge as Islam has. The Quran puts knowledge and scholars at the highest rank: “Allah raises those of you who believe, and those given knowledge, by degrees” (58:11). “Are those who know equal to those who do not know?” (39:9). Allah told His Prophet ﷺ to ask for one thing to increase: “My Lord, increase me in knowledge” (20:114)."),
      L("Two wings: faith and knowledge", [
        "In verse 58:11, the high ranks are reached through faith and knowledge together.",
        "Where atheism ruled, one of these wings was cut off. People were given knowledge without faith, or kept a faith without knowledge.",
        "In truth there should be no knowledge without faith and no faith without knowledge. A bird cannot fly on one wing.",
      ]),
      L("Seeking knowledge is an obligation", [
        "“Seeking knowledge is an obligation on every Muslim” (Ibn Majah 224; ḥasan through its many chains). As the saying goes, seek it from the cradle to the grave.",
        "Obligations are of two kinds: farḍ ʿayn, which every Muslim must do personally, and farḍ kifāyah, which is fulfilled for all if some do it.",
        "Both apply to knowledge. Every Muslim must personally learn what he needs for his religion and daily life: belief, prayer, purity, fasting, and the rulings of his work.",
        "The community as a whole must produce experts in every field it needs, such as scholars, doctors and engineers. If no one does, everyone is sinful.",
        "“Whoever takes a path seeking knowledge, Allah makes easy for him a path to Paradise” (Muslim 2699).",
      ]),
      L("Key takeaways", [
        "Faith and knowledge are two wings; you need both.",
        "Learning what you need for your religion and life is your personal duty.",
        "Every path of learning can be a path to Paradise.",
      ]),
    ] },

  { id: "social-student", group: K, title: "The manners of a student", summary: "A student’s adab towards knowledge, towards the teacher, and in daily study.", sources: [src("266–272"), "Quran 18:66", "Muslim 2699", "Tirmidhi 2647", "Muslim 102"],
    blocks: [
      P("Knowledge is not gained by intelligence alone; it is gained through adab. Mūsā (as), a great prophet, asked al-Khiḍr with humility: “May I follow you so that you teach me some of the guidance you have been taught?” (18:66). The book gives a student’s adab in three circles."),
      L("1. Towards knowledge itself", [
        "Make the intention sincere: for Allah, not for show or argument.",
        "Purify the soul of base traits. Knowledge is light, and it does not settle in a dirty heart.",
        "Seek out gatherings of knowledge and benefit from them.",
        "Be devoted: put your time and effort into learning, and cut out what distracts you.",
        "Seek knowledge that benefits your religion, your world, your Hereafter, your country and your people, not useless or outdated material.",
        "Keep a good appearance, humility, calm and the dignity of knowledge.",
        "Leave pointless argument.",
        "Learn from real specialists: well-mannered, mature scholars.",
        "Be patient in learning, memorising and revising.",
        "Ask about everything you find hard to understand.",
        "Arrive early at lessons.",
        "Whoever travels a path seeking knowledge, Allah makes easy for him a path to Paradise (Muslim 2699).",
      ]),
      L("2. Towards the teacher", [
        "Be humble before your teacher.",
        "Honour and respect the scholar, know his worth, and look at him with esteem.",
        "Stand to welcome the teacher when he comes.",
        "Be well-mannered in his lesson: sit quietly, listen, and ask questions politely.",
        "Do not walk out of the lesson.",
        "Ask permission to become his student, learn from him and follow his guidance.",
        "Fulfil the teacher’s rights completely.",
      ]),
      L("3. In daily study", [
        "Come a little before the lesson begins, and greet classmates and teachers with a smile.",
        "Follow the rules, and keep your appearance and behaviour good.",
        "Bring all the books, notebooks and pens you need.",
        "Pay attention in class: do not fiddle with pens, chat or look around.",
        "Use breaks for washing your hands and other needs; eat in the proper place with the manners of eating.",
        "Take others’ things only with permission.",
        "Do not mock classmates, give nicknames, or make hurtful jokes.",
        "Make friends with students of good character who study well.",
        "Prepare lessons on time, and prepare for exams from the start of the year.",
        "Never cheat in exams, copy, or use hidden help. “Whoever cheats is not one of us” (Muslim 102).",
        "Do homework on time without putting it off, and revise for tomorrow.",
        "Keep your books and materials neat.",
        "Aim to excel in every subject and do not waste time.",
        "Always ask Allah for beneficial knowledge.",
      ]),
      L("Key takeaways", [
        "Knowledge comes through sincerity, humility and patience.",
        "Honour your teacher; he opens the door for you.",
        "Study steadily, honestly and with duʿāʾ.",
      ]),
    ] },

  { id: "social-teacher", group: K, title: "The manners of a teacher", summary: "Teaching is a trust: knowledge, action, humility and care for every student.", sources: [src("272–277"), "Quran 35:28", "Quran 16:125", "Bukhari 6125", "Bukhari 5027"],
    blocks: [
      P("A teacher carries the inheritance of the prophets. “The best of you are those who learn the Quran and teach it” (Bukhari 5027). The book sets out the adab of whoever teaches, whether a scholar, a schoolteacher or a parent at home."),
      L("The teacher and his knowledge", [
        "Stay devoted to knowledge, love it, and give yourself to it fully, always seeking to increase it.",
        "Act on your knowledge. Knowledge without action is a proof against you.",
        "As your knowledge grows, let your fear of Allah grow; as your understanding grows, let your humility before Him grow. “Only those of His servants with knowledge truly fear Allah” (35:28).",
        "Master your subject thoroughly.",
        "Do not give rulings on matters you have not fully studied. Saying “I don’t know” is half of knowledge.",
        "Do not belittle fields of knowledge other than your own speciality.",
      ]),
      L("The teacher’s character", [
        "Rise above worldly ambitions.",
        "Be equally humble with everyone.",
        "Be sincere in teaching.",
        "Hold to forbearance, dignity, deliberation and broad-mindedness.",
        "Bear patiently the harshness of the ignorant, the envy of the envious, the slander of liars and the hostility of enemies.",
        "Make your inner and outer self beautiful, because students copy what they see.",
        "Never remind students of the favour of what you taught them.",
      ]),
      L("The teacher and his students", [
        "Give students the knowledge they need.",
        "Listen carefully to evidence and accept it when it is right.",
        "Teach according to each student’s ability to understand. “Make things easy, not hard” (Bukhari 6125).",
        "Know that your students are a trust placed in your hands.",
        "Be a model for students in character, manners, knowledge, dealings and every part of life.",
      ]),
      L("Key takeaways", [
        "Teach what you know, and act on it.",
        "Humility and fear of Allah grow with real knowledge.",
        "Every student is a trust: teach them gently, at their level.",
      ]),
    ] },

  { id: "social-companions", group: SO, title: "Companionship and friendship", summary: "Choosing friends, five people not to befriend, and the rights of friendship for Allah’s sake.", sources: [src("277–288"), "Abu Dawud 4833", "Quran 53:29", "Abu Dawud 5124", "Muslim 2566", "Muslim 2699", "Bukhari 2101"],
    blocks: [
      P("A friend shapes your religion and your character. “A person is upon the religion of his close friend, so let each of you look at whom he befriends” (Abu Dawud 4833). So the book teaches how to choose a friend, whom to avoid, and how to keep a friendship for Allah’s sake."),
      L("Before you befriend someone", [
        "Get to know a person well and check their qualities before taking them as a friend.",
        "Look for three things: a mature mind, sound religion and good character. In a word, the ideal friend is God-fearing.",
        "Do not befriend the ignorant, the openly sinful, the foolish, those devoted to this world, or the mean. “Turn away from whoever turns away from Our remembrance and wants only the life of this world” (53:29).",
      ]),
      L("Five people not to befriend", [
        "The liar: he deceives you. He is like a mirage, making the far seem near and the near seem far.",
        "The fool: you have no need of him. He means to help you and harms you instead.",
        "The miser: he cuts you off from what you need most.",
        "The coward: he runs from you in hardship and sells you out when he wishes.",
        "The open sinner: he will sell you for a single mouthful of food.",
        "This counsel is reported from the early scholars, such as Imam Jaʿfar al-Ṣādiq.",
      ]),
      L("Friendship for Allah’s sake", [
        "Befriend for Allah, not for a worldly aim or quick gain. Being sincere for Allah means loving a friend for his knowledge, character, righteousness, closeness to Allah and love of the Prophet ﷺ.",
        "Tell your friend that you love him for Allah’s sake (Abu Dawud 5124). It strengthens the bond and deepens sincerity.",
        "See him as yourself in wanting good and benefit for him.",
        "Visit each other for Allah’s sake and keep in touch.",
        "Hurry to help him: relieve his worry, meet his need and ease his difficulty. Allah helps a servant as long as he helps his brother (Muslim 2699).",
        "Those who loved each other for Allah’s sake will be shaded on a Day when there is no shade but His (Muslim 2566).",
      ]),
      L("Key takeaways", [
        "Choose friends for mind, religion and character.",
        "Avoid the liar, the fool, the miser, the coward and the open sinner.",
        "Love for Allah, say so, and be quick to help.",
      ]),
      { type: "link", href: "/learn/ruhiy-3/friendship", label: "Spiritual Tarbiyah", text: "Read the eight rights of a friend in Volume 3." },
    ] },

  { id: "social-earning", group: K, title: "Earning a living", summary: "What kasb is, and its five levels from obligatory to forbidden.", sources: [src("288–290"), "Quran 62:10", "Quran 67:15", "Bukhari 2072", "Muslim 996"],
    blocks: [
      P("A person lives all his life in a web of social ties, and through his work he meets other people’s needs while they meet his. In Islamic belief, Allah creates and distributes provision. The servant’s part is to make the effort (kasb). “Walk in its paths and eat of His provision” (67:15). “When the prayer is finished, spread through the land and seek Allah’s bounty” (62:10)."),
      L("The rulings of earning", [
        "Obligatory (farḍ): earning enough to support yourself, your children and those you must provide for, and to pay your debts.",
                "Recommended (mustaḥabb): earning more than you need in order to help the poor and support relatives.",
        "Permitted (mubāḥ): earning more, for comfort, savings for your family, and generosity.",
        "Disliked (makrūh): in the Hanafi school, amassing wealth only to boast and pile it up, even if it is lawful.",
        "Forbidden (ḥarām): earning by unlawful means.",
      ]),
      L("Why it matters", [
        "“No one has eaten better food than what he earned with his own hands. The Prophet of Allah, Dāwūd, used to eat from the work of his own hands” (Bukhari 2072).",
        "“It is enough sin for a man to neglect those he is responsible for providing for” (Muslim 996).",
        "Work is not beneath anyone. The prophets were shepherds, carpenters and traders.",
      ]),
      L("Key takeaways", [
        "Allah provides; your job is the effort.",
        "Earning for your family is an obligation and an act of worship.",
        "Earn more to give more, not to boast.",
      ]),
    ] },

  { id: "social-work", group: K, title: "The manners of work", summary: "Competence, trust, quality, punctuality and loyalty: a Muslim at work.", sources: [src("290–298"), "Quran 28:26", "Quran 4:58", "Muslim 102", "al-Bayhaqī, Shuʿab al-Īmān"],
    blocks: [
      P("A Muslim’s workplace is a place of worship, and his job is a trust. The daughter of Shuʿayb described the ideal worker in two words: “the strong, the trustworthy” (28:26). Competence and integrity are the heart of the book’s adab of work."),
      L("Taking on work", [
        "Take on work you know well and can do properly. Do not approach work you cannot do; it is wrong even to claim you have done or will do what you cannot.",
        "Once in a suitable job, begin it each day with a good intention and stay committed to it.",
        "Make sure the work itself is ḥalāl. The Sharīʿah forbids anything that harms people, society, the country or the environment.",
        "Learn the religious rulings of your line of work. Islam’s guidance on every trade brings benefit in both worlds.",
      ]),
      L("Doing the work", [
        "Never forget that the work your employer gives you is a trust (4:58). Pledge and strive not to betray it.",
        "Do the work well and thoroughly. “Allah loves that when one of you does a job, he does it well” (al-Bayhaqī).",
        "Never cheat at work: showing undone work as done, presenting poor work as good, or using cheap materials while charging for expensive ones. “Whoever cheats is not one of us” (Muslim 102).",
        "Finish work at the agreed and promised time. This includes promises to colleagues and customers.",
        "Take your work seriously and work with energy.",
        "Love the work that is a means of your provision, and be loyal to it.",
      ]),
      L("Relations at work", [
        "Always keep good relations with your partners and colleagues.",
        "Never use your position or job for personal gain.",
        "Always honour the masters and teachers of your trade.",
      ]),
      L("Key takeaways", [
        "Be strong (competent) and trustworthy.",
        "Excellence, honesty and punctuality are worship.",
        "Never use your post for private gain.",
      ]),
    ] },

  { id: "social-illness", group: ID, title: "Illness: the patient and the doctor", summary: "Illness as expiation, the adab of the sick person, and the duties of a physician.", sources: [src("298–303"), "Bukhari 5641", "Bukhari 5678", "Abu Dawud 3874", "Quran 26:80", "Muslim 2877"],
    blocks: [
      P("Illness is the opposite of health. Some scholars describe it as the body leaving its balance. Whoever thinks righteous people are kept far from illness and trials is mistaken: the righteous are tested too, and for them it raises rank and wipes away sin. “No fatigue, illness, worry, grief, harm or distress befalls a Muslim, not even a thorn that pricks him, but Allah expiates some of his sins by it” (Bukhari 5641). A Muslim believes firmly that every illness is from Allah’s decree."),
      L("The adab of the patient", [
        "Be patient, hope for reward, and see the illness as from Allah.",
        "Do not be impatient, hate the illness or curse it.",
        "It is permissible to tell others about your illness and its kind; it is not complaining.",
        "Seek a cure. “Allah has not sent down a disease without sending down its cure” (Bukhari 5678).",
        "Arrange proper treatment.",
        "Do not seek treatment with what the Sharīʿah forbids (reported, Abu Dawud 3874). Ibn Masʿūd said: Allah did not put your cure in what He forbade you (Bukhari, Book of Drinks).",
        "Never seek treatment by means that damage belief, such as fortune-tellers, so-called jinn-healers, sorcerers and frauds who know nothing of medicine.",
        "Ruqyah with the Quran and authentic duʿāʾs is good at any time, alongside medical treatment, but never a reason to abandon it.",
        "Think well of Allah (Muslim 2877). “When I am ill, it is He who cures me” (26:80).",
      ]),
      L("The adab of the doctor", [
        "Give the patient the advice he needs.",
        "Be kind to him.",
        "Raise his spirits and give him hope.",
        "If you see signs that death is near, gently remind him to make his will.",
        "Look at the patient’s ʿawrah only when necessary.",
        "Believe that your work cannot turn back Allah’s decree.",
        "Believe that the One who gave the disease also gives the cure.",
        "Never reveal the patient’s secrets.",
        "Be true to the oath of your profession.",
      ]),
      L("Key takeaways", [
        "Illness wipes away sins for the patient believer.",
        "Seek lawful treatment and never go to fortune-tellers.",
        "A doctor heals with skill, kindness and discretion, knowing the cure is from Allah.",
      ]),
    ] },

  { id: "social-visiting-sick", group: ID, title: "Visiting the sick", summary: "Hurry to visit, bring something, pray for the patient, and do not stay too long.", sources: [src("303–308"), "Muslim 2568", "Muslim 2569", "Tirmidhi 969", "Bukhari 5675", "Ibn Majah 1441"],
    blocks: [
      P("Visiting the sick is one of the rights of a Muslim. “Whoever visits a sick person remains in the harvest of Paradise until he returns” (Muslim 2568). In a ḥadīth qudsī, Allah will say on the Day of Judgment: I was ill and you did not visit Me… had you visited him, you would have found Me with him (Muslim 2569). When a Muslim visits a sick person in the morning, seventy thousand angels pray for him until evening (Tirmidhi 969)."),
      L("Going to visit", [
        "Hurry to visit as soon as you hear someone is ill.",
        "Do not stop at one visit. Go again after a while.",
        "Do not go empty-handed.",
        "If the patient is in need, giving him charity is very good.",
        "If you know the patient wants a particular food, try to bring it.",
        "Do not force the patient to eat what he does not want.",
      ]),
      L("At the bedside", [
        "Pray for his recovery: “Lā baʾsa, ṭahūrun in shāʾ Allāh” (no harm; it is purification, if Allah wills) (Bukhari 3616). And: “Adhhibi-l-baʾsa rabba-n-nās, washfi anta-sh-shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā” (Bukhari 5675).",
        "Do not keep reminding him of his illness or ask too many questions about it.",
        "Lift his spirits, encourage him, and say cheerful things.",
        "Show your affection and say you are ready to help.",
        "Do not look at his ʿawrah, his exposed parts, his medicines or his belongings.",
        "Do not sit too long and tire him, unless he wants you to stay.",
        "After praying for him, ask him to pray for you. It is reported that a sick person’s duʿāʾ is like the angels’ (Ibn Majah 1441, weak chain).",
        "Encourage him to be patient with Allah’s decree, and not to wish for death in despair of a cure.",
        "Urge his family and carers to treat him well and bear with him.",
      ]),
      L("Key takeaways", [
        "Visiting the sick puts you in the gardens of Paradise.",
        "Bring a gift, a duʿāʾ and a smile; keep it short.",
        "Ask the patient to pray for you.",
      ]),
    ] },

  { id: "social-death", group: ID, title: "Death: before and after the soul departs", summary: "Caring for the dying, and what is done for the deceased straight after death.", sources: [src("308–314"), "Quran 3:185", "Quran 67:2", "Muslim 916", "Abu Dawud 3116", "Muslim 920", "Bukhari 1315", "Bukhari 1241"],
    blocks: [
      P("Death is the great certainty every living being will meet. “Every soul shall taste death” (3:185). King and beggar, prophet and follower, all die. Death and life were created “to test which of you is best in deeds” (67:2). Islam teaches that after death a person is buried, the body returns to the earth, and the soul faces the grave, resurrection and judgment. From these beliefs come the Muslim’s manners around death."),
      L("Caring for the dying (muḥtaḍar)", [
        "Following the Sunnah, lay the dying person on the right side facing the qiblah. If that is not possible, lay him on his back with his face and feet towards the qiblah.",
        "Gently remind him of “Lā ilāha illā-llāh” (talqīn): “Prompt your dying ones to say lā ilāha illā-llāh” (Muslim 916).",
        "Do not force him to say it; he may be in great pain. Say it near him so that he repeats it.",
        "Whoever’s last words are lā ilāha illā-llāh will enter Paradise (Abu Dawud 3116).",
      ]),
      L("After the soul departs", [
        "Close the eyes, saying “Bismillāhi wa ʿalā millati rasūli-llāh.” When the soul is taken, the sight follows it (Muslim 920).",
        "Tie the jaw gently with a soft cloth around the head.",
        "Those in a state of major impurity or menstruation should leave the room.",
        "Burn something fragrant near the deceased, an odd number of times.",
        "Straighten the body and gently flex the joints so they do not stiffen crooked.",
        "Cover the body with a light sheet, as the Prophet ﷺ was covered.",
        "Place something heavy on the stomach to prevent swelling. Do not place a muṣḥaf on it, a custom in some places that is not permitted.",
        "Lay the body on a raised surface, with the hands at the sides. Do not fold the hands on the chest, which is the practice of other religions.",
        "The family may see the deceased, and kissing the deceased is permitted; Abū Bakr (ra) kissed the Prophet ﷺ after his death (Bukhari 1241).",
        "It is permitted to announce the death. The Prophet ﷺ announced the death of the Negus to his companions (Bukhari 1245).",
        "Hasten the burial: “Hurry with the funeral” (Bukhari 1315). Delaying it without excuse is wrong.",
        "Hurry to pay the deceased’s debts and carry out his will.",
      ]),
      L("Key takeaways", [
        "Turn the dying towards the qiblah and gently prompt the shahādah.",
        "Close the eyes, straighten the body, and cover it with dignity.",
        "Hasten the burial, the debts and the will.",
      ]),
    ] },

  { id: "social-funeral", group: ID, title: "The funeral, burial and condolence", summary: "Washing, shrouding, the funeral prayer, burial, and comforting the bereaved.", sources: [src("314–330"), "Bukhari 1315", "Bukhari 1325", "Bukhari 1294", "Abu Dawud 3132", "Bukhari 1284", "Muslim 976"],
    blocks: [
      P("Four duties are owed to every deceased Muslim, and they are farḍ kifāyah on the community: washing, shrouding, praying the funeral prayer, and carrying and burying the body. The book explains each according to the Hanafi school, then the manners of following the funeral and comforting the family."),
      L("Washing (ghusl)", [
        "The one washing must be a Muslim, sane, and have the intention. The Hanafis say the intention is needed to fulfil the communal obligation.",
        "The deceased must be a Muslim, and all or most of the body must be present.",
        "A stillborn or premature baby has its own detailed rulings, depending on whether it showed signs of life.",
      ]),
      L("Shrouding (kafan)", [
        "The shroud of necessity: whatever can be found.",
        "The sufficient shroud: two pieces for a man, three for a woman.",
        "The sunnah shroud: three pieces for a man and five for a woman, white and clean.",
      ]),
      L("The funeral prayer", [
        "Who leads: the ruler or his deputy, then the judge, then the local imam, then the closest relatives.",
        "Conditions: the deceased is a Muslim; all or most of the body is present; the body is placed in front of those praying. In the Hanafi school, the funeral prayer is not prayed in absentia.",
        "The deceased must have been born alive; there is no funeral prayer for a stillborn.",
        "The body must be pure: washed, or given tayammum if washing is impossible.",
        "In the Hanafi school, the funeral prayer is also prayed for a martyr.",
        "Whoever attends the funeral until the prayer gets one qīrāṭ of reward, and until the burial two, each like a great mountain (Bukhari 1325).",
      ]),
      L("Following the funeral", [
        "Hurry with the funeral (Bukhari 1315).",
        "Follow the funeral procession.",
        "Walk with humility, thinking about your own death.",
        "Do not chatter, laugh or talk of worldly matters while following it.",
      ]),
      L("Condolence (taʿziyah)", [
        "Visit the bereaved family to comfort them, ideally within three days. A woman mourns no more than three days except for her husband, whose mourning period is four months and ten days (Bukhari 1280).",
        "Say words of comfort, such as: “Indeed to Allah belongs what He took and to Him belongs what He gave, and everything with Him has an appointed term, so be patient and hope for reward” (Bukhari 1284).",
        "Prepare food for the bereaved family. When Jaʿfar (ra) died, the Prophet ﷺ said: make food for the family of Jaʿfar, for something has come to them that keeps them busy (Abu Dawud 3132).",
        "Avoid wailing, tearing clothes and striking the face. These are not of the Muslims’ way (Bukhari 1294). Weeping with tears is natural mercy and is not forbidden.",
        "Visit graves to remember the Hereafter and pray for the dead (Muslim 976).",
      ]),
      L("Key takeaways", [
        "Washing, shrouding, prayer and burial are the community’s duty.",
        "Follow funerals with humility, and earn two qīrāṭs.",
        "Comfort the bereaved with words, presence and food.",
      ]),
    ] },
];
