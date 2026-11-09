import type { Lesson } from "./library";
import { L, P } from "./ruhiy";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah, part 1: foundations, speech, greeting, the home and
// husband and wife. From "Ijtimoiy odoblar" by Shaykh Muhammad Sodik
// Muhammad Yusuf (Hilol-Nashr, 2024), used with the rights holder's permission.

const F = "Foundations of adab";
const S = "Speech and greeting";
const H = "Home and family";

export const SOCIAL_LESSONS_1: Lesson[] = [
  { id: "social-what-is-adab", group: F, title: "What adab is, and why it matters", summary: "Adab means goodness: doing every social dealing in the best way.", sources: [src("3–7"), "Quran 5:3", "Tirmidhi 1952"],
    blocks: [
      P("The book opens by praising Allah, who made His last Book the chief book of adab, His last religion the religion of adab, and His last Prophet ﷺ the prophet of adab. When Allah said “Today I have perfected your religion for you” (5:3), the Shaykh explains, He showed that Islam covers every part of life: belief and worship, but also manners, dealings, upbringing and social life. Social adab is one of those parts, and this book gathers it in one place."),
      L("What the word means", [
        "The Arabic adab comes from maʾdubah, an invitation to a feast. Adab is a spiritual feast to which people are always invited, so adab means goodness.",
        "Saying someone is “well-mannered” (odobli) means their goodness is plentiful.",
        "“Adab of dress” means dressing well; “adab of conversation” means conversing at the highest level. “Social adab” means conducting every social dealing in the best way.",
        "Classical definitions: using speech and actions that deserve praise; holding on to noble character; honouring those older than you and showing mercy to those younger.",
        "Al-Fārābī said every person should master a trade, receive a good upbringing, and gain good character and virtues. Another scholar said: virtue is found through adab, not through lineage.",
        "Today people often say “culture” or “etiquette” instead, as in “table culture”, but the Islamic word carries a deeper meaning.",
      ]),
      L("Why adab matters so much", [
        "Adab is central to drawing near to Allah. Bad manners spoil everything: deeds, the heart, the tongue and every effort.",
        "A person without adab cannot reach anything worthwhile, find a good place in society, or even keep good relations with others.",
        "The masters of the spiritual path said: whoever reaches anything reaches it through adab, and whoever falls, falls through lack of it.",
        "Good adab is a sign that the soul has matured, is disciplined and is on the side of good. Bad manners show that the soul is not yet purified or reined in.",
      ]),
      L("Its two sides and its wide circle", [
        "Adab has a theoretical side and a practical side: first you learn it, then you live it.",
        "Its circle is enormously wide. It starts with how you treat lifeless things, then plants, then animals, then people, then the angels, and it is crowned by adab with the Prophet ﷺ and with Allah.",
        "The book’s simple example: a tea bowl (piyola). Treat it with care and it serves you for years. Treat it carelessly and it chips, gets dirty, cracks and finally breaks. The same is true of everything in life.",
      ]),
      L("Key takeaways", [
        "Adab is goodness in every dealing.",
        "It is the road by which people rise, and its absence is how they fall.",
        "It reaches from a teacup to your Lord.",
      ]),
    ] },

  { id: "social-sources", group: F, title: "Where adab comes from", summary: "The Quran, the Sunnah and the scholars, and the dignity Allah gave humankind.", sources: [src("7–14"), "Quran 17:23", "Quran 24:27", "Quran 31:18–19", "Quran 2:30", "Quran 17:70", "Tirmidhi 1952", "Ibn Majah 3671"],
    blocks: [
      P("The Shaykh argues that Islam was the first teaching in history to take up adab in full, giving every part of human life its own manners. Someone might ask: if everything has its adab, how can anyone learn it all? Followers of other systems might say that, but Muslims cannot, because the Quran and the pure Sunnah set it out in detail, and the books of tafsīr, ḥadīth and fiqh are full of it."),
      L("Examples from the Quran", [
        "Parents: “Your Lord has decreed that you worship none but Him, and be good to parents… do not say ‘uff’ to them or scold them, but speak to them nobly” (17:23). Kindness to parents comes in the same sentence as worship, which shows how great their right is. “Uff” has two meanings: do not insult them, and do not even sigh in front of them so that they worry about you.",
        "Privacy: “Do not enter houses other than your own until you have asked permission and greeted their people” (24:27). Before Islam, Arabs walked straight into homes calling “good morning!” Islam made every home inviolable: no one, whoever they are, may enter without permission.",
        "Humility: “Do not turn your cheek away from people, nor walk proudly on the earth” (31:18).",
        "Moderation: “Be moderate in your walk and lower your voice; the harshest of voices is the braying of the donkey” (31:19). Walk with purpose, without show, and do not raise your voice for no reason.",
      ]),
      L("Examples from the Sunnah", [
        "A father raising his child with good adab is better for him than giving a ṣāʿ in charity (Tirmidhi).",
        "“Honour your children and make their adab beautiful” (Ibn Majah 3671).",
        "“A parent gives a child no gift better than good adab” (Tirmidhi 1952). A parent wants everything for their child, yet nothing they give is worth more than manners.",
        "A child is a trust with its parents. Its heart is a pure jewel that takes any shape it is given, so what it is taught early shapes its whole life.",
      ]),
      L("The vision behind Islamic adab", [
        "Allah made humans His khalīfah on earth (2:30), an enormous trust. Adab is how a person lives up to that station.",
        "“We have honoured the children of Ādam” (17:70): in their form, their minds, revelation and prophets, transport on land and sea, good provision, and a rank above much of creation.",
        "Adab is the behaviour that fits this honour. A person whom Allah has honoured should not behave in a way that lowers him.",
      ]),
      L("The scholarly tradition", [
        "Every major ḥadīth collection has a “Book of Adab”, and Imam al-Bukhārī wrote a whole work, al-Adab al-Mufrad.",
        "Jurists wrote books of “legal adab”, the Sufi masters wrote on the highest refinements of adab, and Muslim men of letters such as Imam al-Māwardī wrote famous works on manners of religion and the world.",
      ]),
      L("Key takeaways", [
        "Islam gave every part of life its adab, and its sources describe it in detail.",
        "Adab fits the dignity Allah gave to humans.",
        "The best gift a parent can give is good manners.",
      ]),
    ] },

  { id: "social-features", group: F, title: "The features of Islamic adab", summary: "Divine in origin, covering all of life, tied to faith and rewarded as worship.", sources: [src("14–23"), "Muslim 91", "Tirmidhi 2799", "Abu Dawud 4089", "Abu Dawud 4798"],
    blocks: [
      P("Because Islamic adab comes from a divine source, the book draws out several special features that set it apart from mere etiquette or local custom."),
      L("Five features", [
        "A trait versus a station. Taking on a good manner is good, but a trait can be temporary. Islam wants good manners to become your station (maqām): a permanent part of who you are, not a passing state.",
        "It covers all of life. No area of a person’s life is empty of Islamic adab.",
        "It is an adornment. Adab is raised to the level of a person’s beauty, which is why parents and those in charge are given the duty of teaching it.",
        "It is tied to faith. In Islam, manners are bound to īmān and belief, not only to social convention.",
        "It is worship. Reward is promised for following the Sharīʿah’s adab, and acts of worship themselves have their own adab.",
      ]),
      L("Sayings on good character the book gathers", [
        "Be upright in all your affairs and let your character with people be beautiful. Whoever does not respect the young and honour the old is not of us.",
        "Feed people and speak kindly.",
        "The best of you are those best in character, and best to their wives.",
        "Allah dislikes one who frowns at his friends; He loves gentleness in everything.",
        "Good people reach, through good character, the rank of those who pray all night and fast all day (Abu Dawud 4798).",
        "Two traits loved by Allah and His Messenger: gentleness and deliberation.",
        "Anas (ra): a person reaches high ranks in Paradise through good character, even if he is not a great worshipper.",
        "Wahb ibn Munabbih: bad character is like a broken clay pot. It cannot be mended or turned back into clay.",
      ]),
      L("Adab in our homeland", [
        "Central Asia has a deep tradition of adab: exegetes like al-Zamakhsharī, al-Māturīdī, al-Nasafī and Abū al-Layth al-Samarqandī; ḥadīth masters like al-Bukhārī, al-Tirmidhī and al-Dārimī; jurists like al-Marghīnānī, al-Kāsānī and al-Sarakhsī; and spiritual masters like Bahāʾ al-Dīn Naqshband, Khwāja Aḥrār and ʿAbd al-Khāliq Ghijduvānī.",
        "Poets such as Alisher Navoiy and Jāmī made adab a central theme of their works.",
        "Even in the decades when people were cut off from religion, families kept teaching their children manners.",
        "New kinds of social life (phones, the internet, transport) have brought new questions of adab, which this book also answers.",
      ]),
      L("The motto of social adab: beauty", [
        "“Allah is beautiful and loves beauty” (Muslim 91). A Muslim should be beautiful in self, speech, outward look and inner character.",
        "“Allah is pure and loves purity, clean and loves cleanliness, generous and loves generosity” (Tirmidhi 2799). These qualities should show in our social dealings.",
        "Before meeting people, the Prophet ﷺ told his companions to tidy their clothes and saddles so that they would be “like a beauty mark among people” (Abu Dawud 4089).",
        "“Allah loves that when one of you does a job, he does it well” (al-Bayhaqī).",
      ]),
      L("Key takeaways", [
        "Aim to make good manners permanent, not occasional.",
        "Adab is faith in action and is rewarded as worship.",
        "Be the beauty mark in every gathering: beautiful in look, word and deed.",
      ]),
    ] },

  { id: "social-tongue", group: S, title: "The afflictions of speech", summary: "Eleven ways the tongue goes wrong, and why every word has weight.", sources: [src("23–33"), "Quran 16:105", "Quran 49:12", "Quran 68:10–12", "Bukhari 33", "Bukhari 6056", "Bukhari 6058"],
    blocks: [
      P("Allah taught humans to speak. Other creatures mostly imitate sounds, but a human builds words from sounds, sentences from words and meaning from sentences. Speech is a complex and delicate gift. In Islam every word has weight: a person becomes a believer with a word and can leave faith with a word, and a marriage is made with a word. The scholars called the harms of bad speech “the afflictions of the tongue”."),
      L("1. Lying", [
        "The worst affliction of the tongue: lying and false testimony. Lying is the mother of every vileness and the beginning of disaster.",
        "It includes inventing what never happened, adding or removing details so that the meaning changes, and twisting the meaning of what did happen.",
        "The Quran has about 167 verses about lying. “Only those who do not believe in Allah’s signs invent lies” (16:105).",
        "“The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when trusted he betrays” (Bukhari 33).",
        "Betrayal is lying’s worst form, and false testimony destroys society and wrongs people.",
      ]),
      L("2. Backbiting (ghībah)", [
        "Mentioning a person’s real faults in their absence. All scholars agree it is ḥarām and a major sin. If the fault is not real, it is slander.",
        "“Would any of you like to eat the flesh of his dead brother?” (49:12).",
        "Whoever listens to backbiting shares the sin, unless he objects with his tongue.",
        "Imam Ibn Wahb once vowed to fast a day for every backbiting. It became easy for him, so he vowed to give a dirham in charity each time instead, and that is how he stopped.",
      ]),
      L("3. Tale-carrying (namīmah)", [
        "Carrying people’s words to one another in order to cause trouble. Muslims agree it is ḥarām.",
        "“Do not obey every… slanderer going about with tales” (68:10–11).",
        "“The tale-carrier will not enter Paradise” (Bukhari 6056).",
        "“The worst of people is the two-faced, who comes to some with one face and to others with another” (Bukhari 6058).",
        "Its essence is revealing secrets. As a slaughtered animal is cut apart, tale-carrying cuts a society apart.",
      ]),
      L("4–11. Other afflictions", [
        "Talking about falsehood: gossip about sinful gatherings, and quarrels and arguments whose real aim is to prove someone else wrong and look superior.",
        "Obscene words that sound nature rejects. Allah has forbidden all of them.",
        "Cursing and harsh, cutting words, even when what you say is true.",
        "Mockery and ridicule: looking down on someone and treating them as worthless.",
        "Flattery: excessive praise to someone’s face, out of hope for position or gain. When a man praised ʿUthmān (ra) to his face, the companion threw dust in the flatterer’s face, following the Prophet’s ﷺ instruction.",
        "Careless talk about Allah, belief and religion, which can lead to words of disbelief or sin without the speaker realising.",
        "Unqualified people meddling in scholarly discussions and asking inappropriate questions, especially about the subtle points of belief.",
        "Idle talk. Someone who knows the value of time does not waste it. Leaving the remembrance of Allah for useless talk is like leaving a jewel and picking up dung.",
      ]),
      L("Key takeaways", [
        "Every word is weighed, so weigh it before you say it.",
        "Lying, backbiting and tale-carrying break both faith and society.",
        "Listening to backbiting without objecting makes you a partner in it.",
      ]),
      { type: "link", href: "/learn/ruhiy/tongue", label: "Spiritual Tarbiyah", text: "Read the lesson on the afflictions of the tongue in Volume 1." },
    ] },

  { id: "social-speaking", group: S, title: "The manners of speaking", summary: "How to speak, listen and take part in a conversation the Prophetic way.", sources: [src("33–39"), "Muslim 5", "Bukhari 6142", "Bukhari 6290", "Abu Dawud 4840"],
    blocks: [
      P("Everything begins with the word. It is the shadow and fragment of truth, the foundation of every science, and what joins people together. So the book gathers the manners that make speech beautiful."),
      L("Before you speak", [
        "Choose beautiful, correct words, so that the listener enjoys both how you say it and the truth of what you say.",
        "Speak properly and follow the rules of language. A good appearance matters, but good speech matters more.",
        "Think about the result of every word. Speaking without thinking can harm you and others, and regret afterwards does not undo it.",
        "Do not repeat what you have not checked. “It is enough lying for a person to repeat everything he hears” (Muslim 5).",
        "When addressing people on important matters, begin with “Bismillāh”, praise of Allah and salawāt on the Prophet ﷺ. A matter not begun with Allah’s name is cut off from blessing (Abu Dawud 4840).",
      ]),
      L("While you speak", [
        "Remember that the Prophet ﷺ is the model in speech too. He never rushed his words. He spoke so clearly that someone could count them, and his silences were long.",
        "Do not speak before those older, more learned or more senior than you. When a younger companion started speaking in a gathering, the Prophet ﷺ said “Let the elder speak, the elder” (Bukhari 6142).",
        "Match your voice to the situation: louder for a crowd, low for someone beside you.",
        "Speak at the listener’s level, in words they can understand.",
        "Do not make unnecessary movements with your eyes, eyebrows, hands or head.",
      ]),
      L("While others speak", [
        "Listen to the end without interrupting. Cutting someone off is disrespectful and scatters their thoughts.",
        "Do not start talking until the other person has finished; two people cannot speak at once.",
        "Turn towards the speaker and listen attentively.",
        "Confirm someone who says something true. It is cooperation in goodness.",
      ]),
      L("In company", [
        "Two people should not whisper together in front of a third. It hurts him, and Shayṭān fills his mind with suspicion (Bukhari 6290). The same applies to speaking in a language some of the group do not understand.",
        "Keep secrets. A matter is a secret if its owner says so, or shows it by glancing around before speaking.",
      ]),
      L("Key takeaways", [
        "Think, check, then speak.",
        "Listen fully and let elders speak first.",
        "Never leave someone out of a conversation they are sitting in.",
      ]),
    ] },

  { id: "social-greeting", group: S, title: "Greeting with salām", summary: "The full Islamic etiquette of greeting, shaking hands and embracing.", sources: [src("39–42"), "Quran 4:86", "Quran 24:61", "Muslim 54", "Muslim 2162", "Bukhari 6231", "Abu Dawud 5197"],
    blocks: [
      P("Every parent, the book observes, teaches their child to greet first of all. There is no nation in the world that ignores this side of manners. A greeting opens a conversation with a stranger and removes awkwardness; it can even soften someone opposed to you. Ibn ʿAbbās (ra) said: everything has an end, and the end of salām is blessing."),
      L("Why salām matters", [
        "“Shall I tell you something that, if you do it, you will love one another? Spread salām among you” (Muslim 54).",
        "Greeting is the first of the six rights a Muslim has over another (Muslim 2162).",
        "“The closest of people to Allah is the one who greets first” (Abu Dawud 5197).",
        "Giving salām is a sunnah; returning it is an obligation (4:86).",
        "Salām first, then talk.",
        "Enter your home with salām; it brings blessing on you and your family (24:61).",
      ]),
      L("How to greet", [
        "Say “As-salāmu ʿalaykum”, and for a fuller greeting “… wa raḥmatullāhi wa barakātuh”.",
        "Say it fully and correctly, not as distorted shortcuts such as “salom”, “somalaykum” (which means “death be upon you”), “privet” or “good day”.",
        "Say it aloud so it can be heard. Nodding or putting a hand on the chest without words is not enough.",
        "Do not bow low or bend to the ground. A slight inclination is acceptable.",
        "Greet strangers and children too.",
        "Greet when you part as you greeted when you met. Greet even when entering an empty house.",
        "If someone sends you salām through another person, reply straight away: “ʿAlayka wa ʿalayhi-s-salām.”",
      ]),
      L("Who greets whom", [
        "The rider greets the walker, the walker greets the one sitting, the few greet the many, and the young greet the old (Bukhari 6231).",
        "Entering a gathering, greet everyone rather than one person. One person replying is enough for the whole group.",
        "Passing a group, one person greeting is enough for all of you.",
      ]),
      L("When not to greet", [
        "It is disliked to greet someone who cannot properly reply: a person reciting Quran, praying, giving the adhān or iqāmah, bathing, or using the toilet.",
        "The book records the classical rulings on not initiating salām with a non-maḥram woman where it may lead to temptation, or with someone openly persisting in shameful sin.",
      ]),
      L("Handshakes and embraces", [
        "Shake hands palm to palm, with both hands. Use one hand only when there is a reason.",
        "After a long absence, men may embrace: right chest, then left.",
        "Kissing on the mouth when greeting, a custom among some people, is completely against our adab. After a long absence, a kiss on the forehead or head is fine.",
        "One may kiss the hand of scholars, people of virtue and great teachers. Hug little children and kiss them on the forehead or head.",
        "There is no handshake with a non-maḥram woman.",
        "In a crowded gathering there is no need to disturb everyone to shake hands. Give salām and place your hand on your chest.",
      ]),
      L("Key takeaways", [
        "Greet first, fully, and aloud.",
        "Salām spreads love; replying is obligatory.",
        "Know who greets whom, and when to wait.",
      ]),
      { type: "link", href: "/learn/akhlaq/salam", label: "Practise it", text: "Try the Akhlaq challenge on greeting with salām." },
    ] },

  { id: "social-home", group: H, title: "The home: a place of rest", summary: "Why the home matters, its privacy, and how a Muslim builds it.", sources: [src("42–48"), "Quran 16:80", "Quran 24:27", "Bukhari 6902", "Musnad Ahmad"],
    blocks: [
      P("The word maskan, “dwelling”, means a place where one finds tranquillity (sukūn). “Allah has made your homes a place of rest for you” (16:80). The Prophet ﷺ named a spacious home among the things that bring a Muslim happiness, together with a righteous neighbour and a good mount (Ahmad). A person gets tired, ill, worried and cold; the home is where he recovers, rests and lives his family and religious life."),
      L("The home is inviolable", [
        "Islam guarantees every person’s home against intrusion. “Do not enter houses other than your own until you have asked permission and greeted their people” (24:27).",
        "This protects people’s secrets, their private life and their families.",
        "Whoever looks into a people’s house without their permission, the Prophet ﷺ said, they would not be blamed if they put out his eye (Bukhari 6902). The scholars use this hadith to show how seriously Islam takes privacy.",
        "The scholars apply the same ruling to listening in on a home as to looking into it.",
      ]),
      L("Moderation in building", [
        "Islam, the religion of moderation in everything, asks for moderation in housing too.",
        "Do not overspend on luxury, and do not build useless things in competition with others.",
        "Build so the family finds rest: Muslim homes were traditionally built screened from outside eyes, with private quarters, as true places of calm.",
        "Plan the home around the religion’s teaching on dignity, respect and protection from outside eyes.",
        "Build it so that every family member lives comfortably and can perform their worship easily, with a clean place for prayer.",
        "Keep the home, yard and surroundings beautiful, tidy and clean. A Muslim household should be a model of order and blessing.",
        "Modern house plans can follow these same good customs.",
      ]),
      L("Key takeaways", [
        "Home is a blessing and a place of rest.",
        "Its privacy is protected by Allah’s law.",
        "Build and keep it in moderation, cleanliness and dignity.",
      ]),
    ] },

  { id: "social-visiting", group: H, title: "Entering others’ homes", summary: "Asking permission, entering, sitting and leaving: the etiquette of a guest.", sources: [src("48–54"), "Quran 24:27–28", "Bukhari 6245", "Abu Dawud 5176", "Abu Dawud 5174", "Muslim 673", "Muslim 2159"],
    blocks: [
      P("Visiting is part of social life, and the book sets out in order the manners of going to someone else’s home, from choosing the time to leaving."),
      L("Before entering", [
        "Visit at a suitable time. Avoid times when people rest or sleep, or that are otherwise awkward for the host.",
        "Never enter without permission (24:27).",
        "Ask permission three times. If there is no answer, leave (Bukhari 6245). In practice: knock or ring three times, a minute or two apart. “If you are told to go back, go back; that is purer for you” (24:28).",
        "Stand to the side, not facing the door, so you do not look into the yard or house. When a man stood right in front of the door, the Prophet ﷺ told him permission exists precisely because of the eyes (Abu Dawud 5174).",
        "When the host answers, give salām and say clearly why you came.",
        "Say your name clearly. When someone answered the Prophet’s ﷺ “Who is it?” with “Me”, he disliked it. And when Kaladah ibn Ḥanbal came in without salām, he told him to go back out and say “As-salāmu ʿalaykum, may I come in?” (Abu Dawud 5176).",
        "If no one is home, or you are not allowed in, leave without resentment.",
      ]),
      L("Inside the home", [
        "Sit where the host shows you. He knows his home best.",
        "Do not lead the host in prayer in his own home unless he asks you to (Muslim 673).",
        "Do not sit in the host’s own place, such as his bed or chair.",
        "Enter after the host, saying “Bismillāh”, giving salām, with the right foot.",
        "Do not look around the room. Your eyes may fall on members of the household, and it makes the host uncomfortable.",
        "If your eyes fall on something you should not see, look away at once. The first, accidental glance is forgiven; a second look is deliberate and sinful (Muslim 2159).",
        "Do nothing in the house without permission.",
        "Do not interfere in the household’s affairs.",
        "Leave with the host’s permission.",
        "Do not stare into anyone’s house or yard from outside either.",
      ]),
      L("Key takeaways", [
        "Ask three times, stand to the side, say your name.",
        "Be a light guest: sit where you are shown, guard your eyes, and touch nothing.",
        "Leave graciously, with permission.",
      ]),
    ] },

  { id: "social-household", group: H, title: "Manners within the household", summary: "Leaving and entering, asking permission at home, and gratitude for the home.", sources: [src("54–58"), "Quran 24:58–59", "Muslim 2018", "Abu Dawud 5096", "Quran 14:7"],
    blocks: [
      P("The people who share a home also owe each other adab. The book lists the manners of family members towards one another, and towards the blessing of the home itself."),
      L("Coming and going", [
        "Entering your home from outside, recite the duʿāʾ for entering and give salām. When a man mentions Allah on entering and eating, Shayṭān says to his companions: no place to stay and no dinner for you tonight (Muslim 2018).",
        "A duʿāʾ for entering: “Allāhumma innī asʾaluka khayra-l-mawliji wa khayra-l-makhraj. Bismillāhi walajnā wa bismillāhi kharajnā wa ʿala-llāhi rabbinā tawakkalnā” (Abu Dawud 5096).",
        "Before going out, tell your family, wish them well and ask for their prayers. If your parents are alive, ask for their duʿāʾ especially.",
      ]),
      L("Permission inside the home", [
        "Family members should ask permission before entering each other’s rooms.",
        "The Quran names three private times when even servants and children who have not reached puberty must ask before entering: before Fajr, at midday when clothes are set aside, and after ʿIshāʾ (24:58). Once children reach puberty, they ask permission at all times (24:59).",
      ]),
      L("Gratitude for the home", [
        "Never forget for a moment that a home is a great blessing from Allah. Many people have none.",
        "Thank Allah for it constantly. “If you are grateful, I will give you more” (14:7).",
        "It is obligatory not to commit sins in the home, so that the blessing is not met with ingratitude.",
      ]),
      L("Key takeaways", [
        "Enter with Allah’s name and salām; leave with a duʿāʾ and your parents’ blessing.",
        "Respect privacy even within the family.",
        "Thank Allah for your home by keeping it free of sin.",
      ]),
    ] },

  { id: "social-husband", group: H, title: "Husband and wife (1): the husband’s duties", summary: "The wife’s rights over her husband, and the many courtesies of a good husband.", sources: [src("58–64"), "Quran 4:19", "Quran 4:34", "Muslim 1467", "Tirmidhi 1162", "Muslim 2328"],
    blocks: [
      P("When a husband and wife, joined by marriage in Allah’s name and according to the Sunnah, respect each other and keep real adab, their life becomes happy and their home a palace of peace. “This world is enjoyment, and the best enjoyment of this world is a righteous wife” (Muslim 1467)."),
      L("The Prophet’s ﷺ advice to Fāṭimah", [
        "The book recalls the advice the Prophet ﷺ is reported to have given his daughter Fāṭimah (ra) when she married: keep yourself clean, remember your Lord, purify your body with water, and treat your husband with love and loyalty.",
        "The advice describes a marriage built on cleanliness, worship, affection, intimacy and keeping each other’s faults private.",
      ]),
      L("The wife’s rights over her husband", [
        "Her financial rights, such as mahr and maintenance, are to be fulfilled gladly. The mahr is hers alone and is paid in full, whatever the amount.",
        "Good-natured company and kind treatment, never harming her. “The best of you are the best to their wives” (Tirmidhi 1162).",
        "Bearing her difficult moments: being gentle when she is angry and forgiving her mistakes.",
        "Joking and playing with her in a way that keeps his dignity. It brings joy to her heart.",
        "Healthy protectiveness of her honour, without suspicion or prying.",
        "A separate home for her, where none of his relatives live with them.",
        "Sufficient food, clothing and needs, without waste. He is rewarded for what he spends on her.",
        "Teaching her religion and encouraging her in worship.",
        "Guarding her chastity, and considering her wishes in intimacy.",
        "Never insulting, blaming, cursing or belittling her, her body, her character, her family or her relatives.",
        "If he loves her, he honours her; if he does not, he must not wrong her. Either he lives with her patiently, or they part kindly (4:19). Only noble men value women; only base men humiliate them.",
        "If serious problems arise, correction is gradual: first sincere advice, then reminder, as the Quran sets out (4:34). The book stresses that a good husband never strikes his wife; the Prophet ﷺ never struck a woman (Muslim 2328).",
      ]),
      L("The courtesies of a good husband", [
        "Come home with salām and ask how everyone is.",
        "Show affection when she is in good spirits, and comfort her with kind words when she is sad.",
        "Lift her spirits with sweet words, encouragement and promises. In her husband’s home she relies on his kind words.",
        "Help closely with raising the children, especially teaching faith, a trade and physical strength, which falls more on fathers.",
        "Do not scold her over small worldly shortcomings. Over a religious fault, do not stay upset for more than a day.",
        "Be patient with her bad moods and stay silent when she is angry.",
        "Pray for her and praise Allah when she is good to him.",
        "Consult her on household and living matters, and do not load her with burdens beyond that.",
        "Overlook small faults that are not sins, and keep all her secrets.",
        "Teach her what Allah commands and the manners of the religion.",
        "Do not travel without telling her, or leave her alone for long periods.",
        "Value everything she does: serving the family, running the home and raising the children.",
      ]),
      L("Key takeaways", [
        "A husband’s rights come with heavy duties of kindness and provision.",
        "The best man is the best to his wife.",
        "Gentleness, praise, help and patience build a peaceful home.",
      ]),
    ] },

  { id: "social-wife", group: H, title: "Husband and wife (2): the wife’s duties", summary: "The husband’s rights over his wife, and the courtesies of a good wife.", sources: [src("58–64"), "Quran 30:21", "Quran 4:34", "Bukhari 5195", "Tirmidhi 1161"],
    blocks: [
      P("Marriage is built on “tranquillity, affection and mercy” (30:21), and rights run in both directions. After the husband’s duties, the book sets out what a wife owes her husband, and the courtesies that make a home warm."),
      L("The husband’s rights over his wife", [
        "She puts his right before the rights of her relatives, because his right is the duty she will be asked about.",
        "She responds to him when he desires her, except during her period or post-natal bleeding, without making excuses.",
        "She does not fast voluntary fasts without his permission when he is present (Bukhari 5195).",
        "She does not give his property to her relatives without his permission.",
        "She does not leave home, or work outside it, without his permission. If he allows it, she may work.",
        "She is content with the provision Allah has given and does not keep complaining. In hard times she is patient.",
        "She covers what must be covered, and shows her beauty only to her husband and maḥrams.",
        "She keeps a respectful distance from her husband’s friends; if one knocks while her husband is out, she does not let him in.",
        "She does not boast of her beauty, wealth or family, or look down on her husband if he is plain or poor.",
        "She is merciful to the children and does not curse them, or speak shamelessly to her husband.",
        "These rights are limited by Allah’s law: there is no obedience to anyone in disobedience to Allah.",
      ]),
      L("The courtesies of a good wife", [
        "When he comes home, she rises to meet him with an open face and a smile and a warm welcome.",
        "She takes his coat and what he is carrying, and offers him a drink.",
        "She follows his reasonable requests that involve no sin.",
        "She does not use refusal in intimacy as a weapon of revenge.",
        "She looks after his clothes and belongings, cooks, sets the table and welcomes his guests.",
        "She does not compare him with others in wealth or position, or ask for more than he can afford.",
        "She does not raise her voice above his or wear him down with harsh words.",
        "She prays for him, present or absent, asking Allah for taqwā, fairness, harmony and happiness for them both.",
        "She guards his home and property.",
        "In his hard times, she does not rub it in, but comforts and encourages him, seeing it as a test.",
        "A woman who dies while her husband is pleased with her enters Paradise (Tirmidhi 1161).",
      ]),
      L("Key takeaways", [
        "A wife’s rights and duties together make a home a place of rest.",
        "Obedience is in what is good, never in sin.",
        "Warmth, contentment and loyalty are a wife’s great gifts to her home.",
      ]),
    ] },
];
