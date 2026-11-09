import type { Lesson } from "./library";
import { L, P } from "./ruhiy";

// Spiritual Tarbiyah, volume 2: explainer lessons on "Ruhiy tarbiya, 2-juz"
// by Shaykh Muhammad Sodik Muhammad Yusuf (Hilol-Nashr): the stations of the
// heart that rebuild the soul after purification. Used with the rights
// holder's permission. A scholar should review before public release.

export const RUHIY2_BOOK = { title: "Ruhiy tarbiya, 2-juz" };

const src = (pages: string) => `${RUHIY2_BOOK.title}, pp. ${pages}`;

export const RUHIY2_LESSONS: Lesson[] = [
  { id: "tawhid", title: "Tawḥīd and worship", summary: "Affirming Allah’s oneness, and what turns an action into worship.", sources: [src("1–27"), "Quran 112", "Quran 42:11", "Quran 21:22", "Quran 51:56", "Bukhari 2856"],
    blocks: [
      P("Volume 1 cleared the soul of its diseases. Volume 2 rebuilds it, and the foundation of every building is tawḥīd. The book defines it as rejecting every form of shirk and believing that Allah has no partner in His essence, attributes, actions, names or rulings. Linguistically it means attributing oneness: we do not make Allah one; we affirm that He is One."),
      L("Why it comes first", [
        "Everything else in the religion stands on it. A deed built on shirk is not accepted, however large it is.",
        "Allah created jinn and humans only to worship Him (51:56).",
        "Allah’s right over His servants is that they worship Him and associate nothing with Him; their right over Him is that He does not punish one who associates nothing with Him (Bukhari 2856).",
        "Sūrat al-Ikhlāṣ (112) sums it up: Allah is One, the Self-Sufficient, who neither begets nor is begotten, and nothing is comparable to Him. “There is nothing like Him, and He is the All-Hearing, the All-Seeing” (42:11).",
        "If there were gods besides Allah in the heavens and earth, both would have been ruined (21:22): the order of creation itself testifies to one Lord.",
      ]),
      L("How the scholars divide tawḥīd", [
        "Oneness of lordship (rubūbiyyah): Allah alone creates, owns, sustains and controls everything.",
        "Oneness of divinity (ulūhiyyah): Allah alone deserves worship, so prayer, duʿāʾ, sacrifice, vows and reliance are for Him alone.",
        "Oneness of names and attributes: affirming what Allah affirmed for Himself, without likening Him to creation and without denying any of it.",
        "The theologians express it as: necessary existence, creation and the right to be worshipped belong to Allah alone. Imam al-Ashʿarī spoke of oneness of the essence, of the attributes and of actions: nothing in existence has real effect except Allah.",
      ]),
      L("What worship (ʿibādah) is", [
        "Worship is the utmost humility joined with the utmost love, directed to Allah alone.",
        "Every act of worship is obedience (ṭāʿah), but obedience becomes worship when it is done with intention, to draw near to Allah.",
        "So worship is wider than the rituals. Work, study, kindness to parents and even sleep become worship when done lawfully and with a good intention.",
      ]),
      L("Living tawḥīd day to day", [
        "Ask Allah directly for every need, large or small.",
        "Do not fear any creature as you fear Allah, or hope in anyone as you hope in Him.",
        "Avoid superstitions: amulets, fortune-telling and omens that put trust in something other than Allah.",
        "When a blessing comes through a person, thank the person, and know that the true Giver is Allah.",
      ]),
      L("Key takeaways", [
        "Tawḥīd is the foundation; everything else is built on it.",
        "Worship is not only rituals. Any lawful act done for Allah becomes worship.",
        "Pure tawḥīd frees the heart: it bows to One, and to no one else.",
      ]),
    ] },

  { id: "ikhlas", title: "Ikhlāṣ: sincerity", summary: "The marrow of worship: doing it for Allah alone.", sources: [src("27–39"), "Quran 39:2–3", "Quran 98:5", "Quran 18:110", "Bukhari 1", "Muslim 2985", "Muslim 1905"],
    blocks: [
      P("Ikhlāṣ means to purify and to make pure, as milk is made pure of anything mixed into it. The book gathers the scholars’ definitions: intending only Allah in worship; purifying the heart of everything that clouds it; heart, tongue and deed being free of anything mixed in. Sincerity means living and acting as though you see Allah."),
      L("Why it matters", [
        "“So worship Allah, making the religion sincerely His. Indeed, the pure religion is Allah’s” (39:2–3).",
        "“They were commanded only to worship Allah, making the religion sincerely His” (98:5).",
        "“Whoever hopes to meet his Lord, let him do righteous deeds and associate no one in the worship of his Lord” (18:110).",
        "“Actions are only by intentions, and each person will have only what he intended” (Bukhari 1).",
        "Allah is the One most free of need of partners; whoever does a deed for Him and for someone else, He leaves him with his partner (Muslim 2985).",
      ]),
      L("What spoils sincerity", [
        "Showing off (riyāʾ): doing a deed for people’s eyes.",
        "Wanting fame (sumʿah): doing a deed in secret, then telling people about it.",
        "Self-admiration (ʿujb): being impressed with your own deeds, as if they came from you and not from Allah’s help.",
        "Seeking worldly gain through religious acts.",
      ]),
      L("Signs of sincerity", [
        "Your worship is the same alone as in front of people.",
        "Praise and criticism do not change what you do.",
        "You are happy when good is done, whether by you or by someone else.",
        "You hide good deeds as carefully as others hide their faults.",
      ]),
      L("How to build it", [
        "Pause before every deed and ask: who is this for?",
        "Keep some worship secret: night prayer, charity, duʿāʾ for others.",
        "Remember the hadith of the three who are judged first, whose great deeds were rejected because they were for people (Muslim 1905).",
        "Ask Allah for sincerity often. The scholars said it is the hardest thing for the soul.",
      ]),
      L("Key takeaways", [
        "Sincerity is the soul of every deed; without it the deed is empty.",
        "It is not a one-time decision but a constant renewal.",
        "Small deeds done sincerely outweigh great deeds done for show.",
      ]),
      { type: "link", href: "/learn/ruhiy/riya", label: "Riyāʾ: showing off", text: "Sincerity’s opposite is covered in Volume 1." },
    ] },

  { id: "sidq", title: "Ṣidq: truthfulness with Allah", summary: "Truthfulness is the root; sincerity is its branch.", sources: [src("39–50"), "Quran 9:119", "Quran 33:23", "Bukhari 6094"],
    blocks: [
      P("Ṣidq carries the meaning of strength: falsehood is weak because it is false, and truth is strong. Al-Rāghib defined truthfulness as speech that matches both what is in the heart and the reality it describes. If either is missing, it is not complete truthfulness."),
      L("Truthfulness and sincerity", [
        "Asked whether they are the same, al-Junayd answered that truthfulness is the root and sincerity is the branch.",
        "Truthfulness underlies everything a person is; sincerity begins once deeds begin.",
        "No deed is accepted without both.",
      ]),
      L("Why it matters", [
        "“O you who believe, fear Allah and be with the truthful” (9:119).",
        "“Among the believers are men who were true to what they promised Allah” (33:23).",
        "Truthfulness leads to righteousness, and righteousness leads to Paradise. A person keeps telling the truth until he is written with Allah as truthful (ṣiddīq). Lying leads to wickedness and the Fire (Bukhari 6094).",
        "The ṣiddīqūn are ranked just after the prophets (4:69).",
      ]),
      L("The kinds of truthfulness", [
        "In speech: words that match reality and match one’s deeds.",
        "In intention: wanting Allah alone.",
        "In resolve: truly meaning to do the good you plan.",
        "In fulfilment: carrying the resolve through when the time comes.",
        "In action: the outward deed matching the inner state, with no pretence.",
        "In one’s state: a heart without doubt in belief and without flaws mixed into action.",
      ]),
      L("How to build it", [
        "Never lie, even as a joke. The Prophet ﷺ joked, but only spoke the truth.",
        "Keep promises, or don’t make them.",
        "Let your private self match your public self.",
        "Be truthful with yourself about your faults; this is where all growth starts.",
      ]),
      L("Key takeaways", [
        "Truthfulness is the root of the whole spiritual life.",
        "It covers words, intentions, resolve and deeds.",
        "Keep telling the truth until Allah writes you among the truthful.",
      ]),
    ] },

  { id: "zuhd", title: "Zuhd: detachment", summary: "Turning from something good to something better.", sources: [src("50–79"), "Quran 57:23", "Bukhari 6416", "Ibn Majah 4102"],
    blocks: [
      P("Zuhd means turning away from the world, wealth, status and position. The book quotes Imam al-Ghazālī: zuhd is when desire turns away from one thing toward something better. Turning away from something you never wanted is not zuhd, and zuhd is not poverty: a rich person can be detached, and a poor person can be consumed by the world."),
      L("What it is and is not", [
        "It is not banning what Allah allowed or wasting wealth.",
        "It is not having nothing in your hand, but having nothing of the world in your heart.",
        "Its essence is in the verse: “so that you do not grieve over what passed you by, nor exult over what He gave you” (57:23).",
      ]),
      L("Why it matters", [
        "A man asked for a deed that would make Allah and people love him. The Prophet ﷺ said: be detached from the world and Allah will love you; be detached from what people have and people will love you (Ibn Majah 4102).",
        "“Be in this world as a stranger or a traveller” (Bukhari 6416).",
        "Zuhd frees the heart to give its attention to Allah and the Hereafter.",
      ]),
      L("Its levels and rulings", [
        "Detachment from the ḥarām: an obligation on everyone.",
        "From doubtful things: necessary or recommended, depending on how strong the doubt is.",
        "From excess: excess talk, looking, sleeping, eating, and even from people and from oneself for Allah’s sake.",
        "Complete detachment: from everything other than Allah. This is the station of the elite.",
      ]),
      L("How to practise it", [
        "Use the world as a tool, not a goal: earn, spend and give with the Hereafter in mind.",
        "Simplify: buy what you need, not everything you want.",
        "Train the heart: when something is lost, say “Innā lillāhi wa innā ilayhi rājiʿūn” and move on.",
        "Spend time in places that remind you of the Hereafter: the mosque, the graveyard, gatherings of knowledge.",
      ]),
      L("Key takeaways", [
        "Zuhd is turning from the lesser to the better.",
        "It lives in the heart, not in an empty wallet.",
        "Detachment from the forbidden is the minimum; each level above it is a further gift.",
      ]),
    ] },

  { id: "tawakkul", title: "Tawakkul: trust in Allah", summary: "Relying on Allah while taking the means He made.", sources: [src("79–94"), "Quran 65:3", "Quran 3:159", "Tirmidhi 2344", "Tirmidhi 2517", "Bukhari 5705", "Bukhari 4563"],
    blocks: [
      P("Tawakkul comes from appointing an agent (wakīl): relying on another where you cannot manage yourself. The book cites Ibn Rajab: tawakkul is the heart sincerely relying on Allah to bring benefit and repel harm in this world and the next, believing that no one else can give, withhold, harm or benefit."),
      L("Why it matters", [
        "“Whoever relies on Allah, He is enough for him” (65:3).",
        "“When you have decided, rely on Allah; Allah loves those who rely on Him” (3:159).",
        "If you relied on Allah as He deserves, He would provide for you as He provides for the birds: they go out hungry in the morning and return full in the evening (Tirmidhi 2344). The birds still fly out; they do not wait in the nest.",
        "Among the seventy thousand who enter Paradise without reckoning are those who “rely on their Lord” (Bukhari 5705).",
        "Ibrāhīm (as) said “Ḥasbunallāhu wa niʿma-l-wakīl” when thrown into the fire, and the companions said it when threatened (Bukhari 4563).",
      ]),
      L("Tawakkul and taking the means", [
        "Taking the means is part of tawakkul, not against it: eating when hungry, dressing when cold, sowing seed for a harvest, taking medicine when ill.",
        "“Tie your camel, and rely on Allah” (Tirmidhi 2517).",
        "The difference is where the heart rests: on Allah, not on the means.",
        "Leaving the means while claiming trust is laziness (tawākul), not tawakkul.",
      ]),
      L("Signs of real tawakkul", [
        "You do your best, then feel at peace with the result.",
        "You don’t panic over provision, because you know it is written.",
        "You don’t take a ḥarām shortcut out of fear of missing out.",
        "Loss does not crush you, because you know Allah chose it.",
      ]),
      L("How to build it", [
        "Learn Allah’s names: al-Wakīl, ar-Razzāq, al-Ḥakīm. The more you know Him, the more you trust Him.",
        "Before every task, say “Bismillāh, tawakkaltu ʿalā-llāh.”",
        "Pray istikhārah for important decisions, then go ahead.",
        "Remember past times when Allah got you through.",
      ]),
      L("Key takeaways", [
        "Plan and work with your hands; rely with your heart.",
        "Allah is enough for whoever truly relies on Him.",
        "Trust brings peace, because the outcome is in the best Hands.",
      ]),
    ] },

  { id: "mahabbah", title: "The love of Allah", summary: "What love of Allah is, its signs, and ten causes that bring it.", sources: [src("94–124"), "Quran 3:31", "Quran 2:165", "Quran 5:54", "Bukhari 6502", "Bukhari 16", "Bukhari 6168"],
    blocks: [
      P("Love of Allah is the heart’s inclination toward Him, finding sweetness in His remembrance, and putting what He loves before everything else. The scholars call it the highest of the stations: every station before it prepares for it, and every station after it is its fruit."),
      L("Why it matters", [
        "“Those who believe are stronger in love for Allah” (2:165).",
        "Allah describes a people “He loves and who love Him” (5:54).",
        "Three things bring the sweetness of faith; the first is that Allah and His Messenger are more beloved to you than anything else (Bukhari 16).",
        "A person will be with those he loves (Bukhari 6168).",
      ]),
      L("The test of love", [
        "“Say: if you love Allah, follow me, and Allah will love you” (3:31). Love is proved by following the Prophet ﷺ.",
        "In a ḥadīth qudsī, Allah says His servant keeps drawing near with voluntary deeds after the obligations until He loves him. Then He becomes his hearing, his sight, his hand and his foot, guiding all he does (Bukhari 6502).",
      ]),
      L("Ten causes of Allah’s love", [
        "Reciting the Quran with reflection and understanding.",
        "Drawing near with voluntary worship after completing the obligations.",
        "Constant remembrance with tongue, heart, deeds and state.",
        "Putting what He loves before what you love when desire is strong.",
        "Coming to know His names and attributes.",
        "Witnessing His favours, open and hidden.",
        "A heart fully broken and humble before Him.",
        "Being alone with Him in the last third of the night: prayer, recitation, istighfār and repentance.",
        "Sitting with those who truly love Him, and taking the best of their words.",
        "Keeping away from everything that comes between the heart and Allah.",
      ]),
      L("Signs of love", [
        "Longing to meet Him, and loving to be alone with Him in prayer.",
        "Loving His words, the Quran.",
        "Loving what He loves and whom He loves.",
        "Grief when a moment of obedience is missed.",
      ]),
      L("Key takeaways", [
        "Love of Allah is the goal of the whole journey.",
        "It is proved by following the Prophet ﷺ.",
        "Pick one of the ten causes and make it a habit this week.",
      ]),
    ] },

  { id: "khawf-raja", title: "Fear and hope (khawf and rajāʾ)", summary: "Two wings that carry the believer to Allah.", sources: [src("107–147"), "Quran 32:16", "Quran 39:53", "Quran 15:49–50", "Quran 35:28", "Muslim 2877", "Bukhari 7405", "Tirmidhi 983"],
    blocks: [
      P("The book quotes Imam al-Ghazālī: hope and fear are the two wings on which those brought near fly to every praiseworthy station, and the mount that carries them over the hard passes on the road to the Hereafter. A bird with one wing cannot fly. A believer with only fear despairs; with only hope he grows careless."),
      L("What they are", [
        "When an awaited thing is disliked, the heart feels pain: that is fear.",
        "When an awaited thing is loved, the heart feels ease: that is hope.",
        "Fear is the rein between the servant and Allah that holds him back from sin.",
        "Hope is the fuel that drives him to good deeds and back to Allah after a fall.",
      ]),
      L("The evidence for both", [
        "The believers call on their Lord in fear and hope (32:16).",
        "“Tell My servants that I am the Forgiving, the Merciful, and that My punishment is the painful punishment” (15:49–50). Both appear side by side.",
        "“Do not despair of the mercy of Allah; Allah forgives all sins” (39:53).",
        "“Only those of His servants who have knowledge truly fear Allah” (35:28).",
        "Allah says: I am as My servant thinks of Me (Bukhari 7405).",
        "Let none of you die except while thinking well of Allah (Muslim 2877).",
      ]),
      L("Hope versus wishful thinking", [
        "True hope needs a cause: a farmer hopes for a harvest after he has ploughed and sown.",
        "Hoping for Paradise while doing nothing is wishful thinking (tamannī), and it is self-deception.",
      ]),
      L("Keeping the balance", [
        "In health and strength, let fear be a little stronger, so that you guard against sin.",
        "When dying or in despair over sins, let hope be stronger. The Prophet ﷺ visited a dying young man who said he hoped in Allah and feared his sins; he said these two never meet in a heart at such a time without Allah giving him what he hopes and protecting him from what he fears (Tirmidhi 983).",
        "If you are slipping into sin, remember fear; if you are slipping into despair, remember hope.",
      ]),
      L("Key takeaways", [
        "Fear and hope are two wings: you need both to fly.",
        "Hope without action is self-deception.",
        "Think well of Allah, and act on it.",
      ]),
    ] },

  { id: "taqwa", title: "Taqwā and waraʿ", summary: "Walking carefully through a field of thorns.", sources: [src("136–199"), "Quran 49:13", "Quran 65:2–3", "Quran 2:197", "Muslim 2564", "Tirmidhi 1987", "Tirmidhi 2518", "Bukhari 52"],
    blocks: [
      P("Taqwā comes from a word meaning to guard and protect oneself. The book warns against a one-sided picture of taqwā as withdrawing from life into a dark room of worship. It is guarding oneself from sin and doing good deeds abundantly. Al-Rāghib defined it as protecting the soul from sin by leaving what is forbidden, perfected by leaving some of what is permitted."),
      L("ʿUmar’s image of taqwā", [
        "When ʿUmar (ra) asked about taqwā, he was told it is like crossing a thorny field barefoot, stepping carefully to avoid the thorns.",
        "Sins are the thorns. Whoever is careful of them has taqwā, and it becomes a state of the heart that is always aware of Allah.",
      ]),
      L("Why it matters", [
        "“The most honoured of you with Allah is the one with the most taqwā” (49:13).",
        "“Whoever has taqwā of Allah, He makes a way out for him and provides for him from where he does not expect” (65:2–3).",
        "“Take provision, and the best provision is taqwā” (2:197).",
        "The Prophet ﷺ pointed to his chest three times and said: taqwā is here (Muslim 2564).",
        "“Have taqwā of Allah wherever you are, follow a bad deed with a good one to wipe it out, and treat people with good character” (Tirmidhi 1987).",
      ]),
      L("Waraʿ: the next step", [
        "Waraʿ (scrupulousness) is avoiding doubtful things out of caution for one’s religion.",
        "Whoever guards against doubtful matters has protected his religion and honour (Bukhari 52).",
        "“Leave what makes you doubt for what does not make you doubt” (Tirmidhi 2518).",
        "Waraʿ is in food, earnings, speech and looking, not just in large matters.",
      ]),
      L("How to build taqwā", [
        "Learn what is ḥalāl and ḥarām in your daily life and work.",
        "Remember that Allah sees you, especially when you are alone.",
        "Follow every slip quickly with repentance and a good deed.",
        "Stay away from the edges: whoever grazes near a boundary may fall into it.",
      ]),
      L("Key takeaways", [
        "Taqwā is careful walking, not running away from life.",
        "It lives in the heart and shows in actions.",
        "It brings a way out and provision from where you do not expect.",
      ]),
    ] },

  { id: "shukr", title: "Shukr: gratitude", summary: "Knowledge, a state of the heart, and action together.", sources: [src("199–212"), "Quran 14:7", "Quran 34:13", "Muslim 2999", "Muslim 2734", "Abu Dawud 4811"],
    blocks: [
      P("Like the other stations, the book teaches, gratitude is made of three parts: knowledge, a state of the heart, and action. Gratitude is not just saying “Alḥamdulillāh”. It is a whole way of receiving blessings."),
      L("The three parts of gratitude", [
        "Knowledge: knowing the blessing, knowing that it is a blessing, and knowing that it comes from Allah alone. The means it came through are only servants He made subject to us.",
        "State: joy in the heart at the Giver, not only at the gift.",
        "Action: using the blessing in what pleases the Giver, with the heart, the tongue and the limbs.",
      ]),
      L("Why it matters", [
        "“If you are grateful, I will surely give you more” (14:7).",
        "“Few of My servants are truly grateful” (34:13).",
        "The believer’s affair is all good: when blessed he is grateful, and that is good for him; when tested he is patient, and that is good for him (Muslim 2999).",
        "Allah is pleased with a servant who eats and praises Him, and drinks and praises Him (Muslim 2734).",
        "Whoever does not thank people has not thanked Allah (Abu Dawud 4811).",
      ]),
      L("Gratitude with every part of you", [
        "The heart: recognising that every good is from Allah.",
        "The tongue: praising Him and speaking of His blessings.",
        "The eyes: looking only at what is lawful.",
        "Wealth: spending it in His path.",
        "Time and health: using them in obedience.",
      ]),
      L("How to build it", [
        "Each night, name three specific blessings from the day.",
        "Say “Alḥamdulillāh” for small things: water, a safe journey, waking up.",
        "Look at those with less than you in worldly matters.",
        "Thank the people through whom blessings reach you.",
        "Use each blessing for good. That is the deepest thanks.",
      ]),
      L("Key takeaways", [
        "Gratitude is knowing, feeling and doing.",
        "It brings more blessings.",
        "The real test of gratitude is how you use what you have.",
      ]),
    ] },

  { id: "sabr", title: "Ṣabr: patience", summary: "Its kinds, stations, rulings and rewards.", sources: [src("212–245"), "Quran 2:153", "Quran 2:155–157", "Quran 39:10", "Bukhari 1302", "Muslim 918", "Muslim 2999"],
    blocks: [
      P("Ṣabr means holding back: holding the soul back from panic, the tongue from complaining, and the limbs from wrong actions. The book teaches that the measure of patience is the Sharīʿah. Everything that reaches a person either suits his desires or goes against them, and both need patience."),
      L("Why it matters", [
        "“Allah is with the patient” (2:153).",
        "Allah will test with fear, hunger and loss; glad tidings to the patient, who say “To Allah we belong and to Him we return” (2:155–157).",
        "“The patient will be given their reward without measure” (39:10).",
        "Patience is at the first shock (Bukhari 1302).",
        "Whoever says “Innā lillāhi…” in a calamity and asks Allah to replace it with better, Allah will replace it (Muslim 918). Umm Salamah said this, and Allah gave her the Prophet ﷺ as a husband.",
      ]),
      L("Three kinds of patience", [
        "Patience in obeying Allah: praying on time, fasting, being honest when it costs you.",
        "Patience in staying away from sin, especially when it is easy and hidden.",
        "Patience with the decree: illness, loss, hardship and people’s harm.",
      ]),
      L("Three stations of patience", [
        "Leaving desires: the level of the repentant.",
        "Contentment with what is decreed: the level of the detached.",
        "Loving what the Lord chooses: the level of the truthful (ṣiddīqīn).",
      ]),
      L("Patience has rulings too", [
        "Obligatory: patience in keeping away from what is forbidden.",
        "Recommended: patience with what is disliked.",
        "Forbidden: patience with oppression one should resist, such as someone attacking you or your family.",
      ]),
      L("How to build it", [
        "Remember the reward and that the hardship will pass.",
        "Say “Innā lillāhi wa innā ilayhi rājiʿūn” at the first shock.",
        "Seek help through prayer (2:153).",
        "Remember the patience of the prophets: Ayyūb, Yaʿqūb and Muhammad ﷺ.",
        "Complaining to Allah is not impatience; complaining about Allah to people is.",
      ]),
      L("Key takeaways", [
        "Patience is needed in ease and in hardship.",
        "Its reward is without measure.",
        "The believer’s affair is all good: grateful in ease, patient in hardship (Muslim 2999).",
      ]),
    ] },

  { id: "rida", title: "Riḍā: contentment with Allah", summary: "Higher than patience: the summit of faith.", sources: [src("245–277"), "Muslim 34", "Quran 98:8", "Tirmidhi 2396"],
    blocks: [
      P("The book places riḍā above patience. Patience is bearing hardship by effort. Contentment is when a heart filled with love of Allah no longer feels the pain of the decree, or feels it but is pleased anyway, like a traveller who ignores the hardships of a profitable journey because of what is waiting at the end."),
      L("Why it matters", [
        "Whoever is pleased with Allah as Lord, Islam as religion and Muhammad ﷺ as messenger has tasted the sweetness of faith (Muslim 34).",
        "“Allah is pleased with them and they are pleased with Him” (98:8): the reward of contentment is Allah’s pleasure.",
        "When Allah loves a people He tests them; whoever is content has contentment, and whoever is angry has anger (Tirmidhi 2396).",
      ]),
      L("Patience versus contentment", [
        "Patience: bearing the pain without objecting.",
        "Contentment: being at peace with the decree, because you trust the One who decreed it.",
        "Patience is part of faith; contentment is its highest degree.",
      ]),
      L("What contentment does not mean", [
        "It does not mean not feeling pain. The Prophet ﷺ wept when his son Ibrāhīm died, and said the eye weeps and the heart grieves, but we say only what pleases our Lord.",
        "It does not mean accepting sin or oppression. We are content with Allah’s decree, not with wrongdoing.",
        "Making duʿāʾ does not contradict contentment: asking Allah is itself obedience.",
      ]),
      L("How to build it", [
        "Know Allah’s wisdom and mercy: He chooses better for you than you would for yourself.",
        "Remember that this world is short and the reward is lasting.",
        "Say each morning and evening: “Raḍītu billāhi rabban, wa bil-islāmi dīnan, wa bi-Muḥammadin nabiyyā.”",
      ]),
      L("Key takeaways", [
        "Contentment is the peace of a heart that trusts its Lord.",
        "It is higher than patience, and it brings Allah’s pleasure.",
        "Feeling sad is human; objecting to Allah is what contentment removes.",
      ]),
    ] },

  { id: "tawbah", title: "Tawbah: repentance", summary: "Knowledge, regret, and leaving the sin: past, present and future.", sources: [src("289–330"), "Quran 66:8", "Quran 24:31", "Quran 39:53", "Quran 2:222", "Muslim 2702", "Muslim 2759", "Bukhari 6309", "Ibn Majah 4250"],
    blocks: [
      P("Tawbah means returning: coming back to Allah after moving away from Him. The book explains that its reality has three parts that follow one another: knowledge, then a state of the heart, then action. Whoever does not see sin as what distances him from the Beloved will never repent."),
      L("The three parts of repentance", [
        "Knowledge: knowing how great the harm of sin is, and that it is a wall between the servant and what he loves.",
        "State: the regret that this knowledge produces in the heart. “Regret is repentance” (Ibn Majah 4250).",
        "Action: leaving the sin now, resolving never to return to it, and making up for the past through expiation and making up missed obligations.",
        "If the sin involved another person’s right, a fourth condition is added: return the right or seek their pardon.",
      ]),
      L("Why it matters", [
        "“O you who believe, repent to Allah with sincere repentance” (66:8).",
        "“Turn to Allah all of you, O believers, that you may succeed” (24:31).",
        "“Allah loves those who repent” (2:222).",
        "“Do not despair of Allah’s mercy; Allah forgives all sins” (39:53).",
        "The Prophet ﷺ sought forgiveness a hundred times a day (Muslim 2702).",
        "Allah is happier with His servant’s repentance than a man who lost his camel with his food and water in the desert and then found it (Bukhari 6309).",
        "Allah extends His hand by night for the one who sinned by day to repent, and by day for the one who sinned by night, until the sun rises from the west (Muslim 2759).",
      ]),
      L("Common traps", [
        "Delaying repentance until “later”. Death does not wait.",
        "Despair: thinking the sin is too great. No sin is greater than Allah’s mercy.",
        "Repenting with the tongue while the heart still loves the sin.",
        "Giving up after falling again. Repent again; Allah does not tire until you do.",
      ]),
      L("How to repent", [
        "Stop the sin straight away.",
        "Feel sincere regret and say Sayyid al-Istighfār.",
        "Pray two rakʿahs of repentance.",
        "Follow the sin with good deeds, and change the surroundings that led to it.",
      ]),
      L("Key takeaways", [
        "Repentance is knowledge, regret and change.",
        "The door is open until death or the sun rising from the west.",
        "Allah loves those who keep coming back.",
      ]),
      { type: "link", href: "/learn/duas/forgiveness", label: "Sayyid al-Istighfār", text: "Learn the master duʿāʾ of seeking forgiveness." },
    ] },

  { id: "iffah", title: "ʿIffah: chastity and self-restraint", summary: "The balance between excess and deadness of desire.", sources: [src("330–356"), "Quran 24:30–31", "Quran 24:33", "Quran 2:273", "Bukhari 5066", "Bukhari 1469"],
    blocks: [
      P("ʿIffah means holding back from what is not lawful or not beautiful. The book gathers definitions: a settled state of the soul that keeps desire from taking over; restraint from what is unlawful and unbecoming; moderation in every pleasure. It is the middle way between indulgence and an unnatural deadness of desire."),
      L("Its areas", [
        "Chastity of the body: guarding private parts and avoiding anything that leads to zinā.",
        "Chastity of the eyes: lowering the gaze (24:30–31).",
        "Chastity of the tongue: avoiding foul and suggestive speech.",
        "Chastity in wealth: not asking people for things without need. The poor who do not beg persistently are praised for their restraint (2:273).",
        "Imam al-Māwardī counted chastity among the conditions of honour (murūʾah): restraint from the unlawful, and restraint from what harms one’s dignity.",
      ]),
      L("Why it matters", [
        "Allah commands believing men and women to lower their gaze and guard their chastity: “that is purer for them” (24:30–31).",
        "Those who cannot yet marry are told to keep chaste until Allah enriches them (24:33).",
        "Whoever seeks to be chaste, Allah makes him chaste; whoever seeks to be self-sufficient, Allah makes him self-sufficient (Bukhari 1469).",
        "The Prophet ﷺ advised young people to marry if they can, and to fast if they cannot (Bukhari 5066).",
      ]),
      L("How to build it", [
        "Guard the gaze, online and offline. The eye is the door to the heart.",
        "Avoid being alone with a non-maḥram.",
        "Fill your time with good, and keep good company.",
        "Fast, and seek Allah’s help in duʿāʾ.",
        "Do not ask people for things you can manage without.",
      ]),
      L("Key takeaways", [
        "Chastity is restraint and dignity in body, eyes, tongue and wealth.",
        "It is the balance between excess and denial.",
        "Allah helps whoever seeks to be chaste.",
      ]),
    ] },

  { id: "haya", title: "Ḥayāʾ: modesty", summary: "A branch of faith, both inborn and acquired.", sources: [src("356–394"), "Bukhari 9", "Bukhari 24", "Bukhari 6117", "Bukhari 3483", "Bukhari 3562"],
    blocks: [
      P("Ḥayāʾ is a character that moves a person to do what is beautiful and leave what is ugly, and stops him from falling short in anyone’s right. It shares a root with ḥayāh, life: a heart with modesty is alive, and a heart without it is dead."),
      L("Why it matters", [
        "Modesty is a branch of faith (Bukhari 9).",
        "Leave him, for modesty is part of faith (Bukhari 24), said to a man who was scolding his brother for being too shy.",
        "Modesty brings nothing but good (Bukhari 6117).",
        "Among the words of earlier prophecy that people still have: if you have no shame, do as you wish (Bukhari 3483). Without modesty, nothing stops a person.",
      ]),
      L("Two kinds of modesty", [
        "Inborn: shyness that is part of human nature.",
        "Acquired: modesty that comes from faith, refraining from what is forbidden out of awe of Allah. This is the modesty counted as a branch of faith.",
        "The Prophet ﷺ had both: he was shyer than a young virgin behind her curtain (Bukhari 3562).",
      ]),
      L("Modesty before whom", [
        "Before Allah: the highest kind. Being ashamed for Him to see you where He forbade you.",
        "Before people: not doing ugly things in public, and covering what should be covered.",
        "Before oneself: being ashamed of your own low behaviour even when alone.",
      ]),
      L("What modesty is not", [
        "It is not being too shy to learn your religion, ask a question, or speak the truth.",
        "It is not being too shy to stop wrongdoing.",
        "False shyness that leaves a duty undone is weakness, not ḥayāʾ.",
      ]),
      L("How to build it", [
        "Remember that Allah sees you.",
        "Guard your eyes, dress and speech.",
        "Keep away from sins. The book warns that sins drain away modesty.",
        "Keep the company of modest people.",
      ]),
      L("Key takeaways", [
        "Modesty is part of faith and brings only good.",
        "The highest modesty is before Allah.",
        "It never stops you from truth or learning.",
      ]),
    ] },

  { id: "taammul", title: "Taʾammul: contemplation", summary: "Looking slowly and carefully, to take a lesson.", sources: [src("394–436"), "Quran 3:190", "Quran 88:17–20", "Quran 51:21"],
    blocks: [
      P("Taʾammul is looking closely and repeatedly at something in order to understand it and take a lesson. The book distinguishes three related words:"),
      L("Three kinds of thinking", [
        "Tafakkur: the mind reasoning through evidence to reach a conclusion.",
        "Tadabbur: looking ahead to the outcome and consequences of things.",
        "Taʾammul: looking unhurriedly and repeatedly in order to take a lesson.",
      ]),
      L("The Quran’s invitations to contemplate", [
        "“Do they not look at the camel, how it was created? And the sky, how it was raised? And the mountains, how they were set firm? And the earth, how it was spread out?” (88:17–20).",
        "“In the creation of the heavens and the earth and the alternation of night and day are signs for people of understanding” (3:190).",
        "“And in yourselves. Do you not see?” (51:21).",
      ]),
      L("What contemplation does", [
        "It moves a person from seeing things to seeing their Maker.",
        "It turns ordinary moments into lessons: a falling leaf, a growing child, a sunset.",
        "It slows a person down in a hurried age and makes room for faith to grow.",
      ]),
      L("How to practise", [
        "Take a walk without your phone and look closely at one thing.",
        "Pick one creature or natural process a week and learn about it, asking what it shows about Allah.",
        "When you read a verse about creation, pause and picture it.",
      ]),
      L("Key takeaways", [
        "Taʾammul is slow, repeated looking that leads to a lesson.",
        "The Quran invites us to contemplate again and again.",
        "Every created thing is a sign for those who take time to look.",
      ]),
    ] },

  { id: "taanni", title: "Taʾannī: not rushing", summary: "Patience and care in pursuing things.", sources: [src("436–451"), "Quran 7:150", "Quran 17:11", "Muslim 17"],
    blocks: [
      P("Taʾannī is not rushing: giving a matter its time and handling it with care. It is the opposite of haste (ʿajalah). Haste makes a person act before thinking; deliberation makes him think before acting."),
      L("Why it matters", [
        "The Prophet ﷺ told the leader of the delegation of ʿAbd al-Qays: you have two qualities Allah loves, forbearance and deliberation (Muslim 17).",
        "“Man is ever hasty” (17:11): haste is part of human nature, so it needs training.",
        "The book draws a lesson from Mūsā (as) returning to his people in anger and seizing his brother Hārūn by the head, until Hārūn explained what had really happened (7:150).",
      ]),
      L("Where deliberation is needed", [
        "Judging people: hear both sides first.",
        "Making decisions: think, consult and pray istikhārah.",
        "Speaking in anger: wait until it passes.",
        "Seeking results: worship, knowledge and character grow slowly.",
      ]),
      L("Where hurrying is good", [
        "Not all speed is blameworthy. Hurrying to good deeds is praised: “Race toward forgiveness from your Lord” (3:133).",
        "Repentance, paying debts, burying the dead and feeding a guest should not be delayed.",
        "The rule: be slow in worldly matters and decisions, quick in good deeds.",
      ]),
      L("How to build it", [
        "Count to ten, or take a breath, before responding.",
        "Sleep on big decisions.",
        "Ask “What will this lead to?” before acting.",
      ]),
      L("Key takeaways", [
        "Deliberation is one of two qualities Allah loves.",
        "Think before you act, especially in anger.",
        "Be slow to judge, and quick to do good.",
      ]),
    ] },

  { id: "tabayyun", title: "Tabayyun: verifying before acting", summary: "Make sure before you speak, share or act.", sources: [src("451–469"), "Quran 49:6", "Quran 4:94", "Quran 24:15–16", "Quran 17:36", "Muslim 5"],
    blocks: [
      P("Tabayyun means making something clear: checking that news is true before acting on it. Acting without clarity, in word or deed, leads to bad consequences. The book notes that around fifteen verses of the Quran deal with this."),
      L("Why it matters", [
        "“If a wrongdoer brings you news, verify it, lest you harm a people out of ignorance and then regret what you did” (49:6).",
        "“When you go out in Allah’s path, verify, and do not say to one who offers you peace, ‘You are not a believer’, seeking the goods of this world” (4:94).",
        "“Do not follow what you have no knowledge of; hearing, sight and heart will all be questioned” (17:36).",
        "In the slander against ʿĀʾishah (ra), people passed on what they heard with their tongues. Allah asked: why, when you heard it, did you not say “It is not for us to speak of this”? (24:15–16).",
        "It is enough lying for a person to repeat everything he hears (Muslim 5).",
      ]),
      L("What happens without it", [
        "Innocent people are harmed and reputations destroyed.",
        "Families and communities are divided by rumours.",
        "False religious claims spread and are believed.",
        "The one who spread it shares the sin of everyone who passed it on after him.",
      ]),
      L("How to verify today", [
        "Ask: who said this, and how do they know?",
        "Check the original source before forwarding a message.",
        "For hadith, check the collection and its grading.",
        "If you cannot verify it, do not share it. Silence is safe.",
        "Hear both sides before judging a dispute.",
      ]),
      L("Key takeaways", [
        "Verify before you believe, share or act.",
        "Repeating everything you hear is a kind of lying.",
        "When in doubt, keep silent.",
      ]),
      { type: "link", href: "/mizan", label: "Myth Check", text: "See popular claims checked against authentic sources in Mizan." },
    ] },

  { id: "salah-righteousness", title: "Ṣalāḥ: righteousness", summary: "Walking the path of guidance, fulfilling the rights of Allah and people.", sources: [src("469–495"), "Quran 21:105", "Quran 12:101", "Quran 27:19", "Quran 26:83", "Muslim 1631"],
    blocks: [
      P("Ṣalāḥ is the opposite of corruption, and the book suggests “maturity” as its closest meaning. Al-Kafawī defined it as walking the path of guidance and standing upright in what the Sharīʿah and sound reason require. Righteousness is the sum of all the stations in this volume: a person whose inner and outer life have been rebuilt."),
      L("What makes someone righteous", [
        "Fulfilling Allah’s rights: belief, worship and obedience.",
        "Fulfilling people’s rights: family, neighbours, community and all creation.",
        "Putting each right in its proper place.",
        "It is beauty of conduct in religion and goodness, not beauty of appearance.",
      ]),
      L("Why it matters", [
        "“My righteous servants will inherit the earth” (21:105).",
        "The prophets themselves asked for it: Yūsuf (as) prayed “Join me with the righteous” (12:101), Sulaymān (as) prayed to be admitted among Allah’s righteous servants (27:19), and Ibrāhīm (as) asked the same (26:83).",
        "When a person dies his deeds end except three, one of which is a righteous child who prays for him (Muslim 1631).",
        "Complete righteousness is the furthest rank of the believers.",
      ]),
      L("Righteousness spreads", [
        "A righteous person makes his family, workplace and community better.",
        "Righteous parents shape righteous children, who keep praying for them.",
        "Righteousness is the opposite of corruption, so it repairs whatever it touches.",
      ]),
      L("How to grow in it", [
        "Take the stations of this volume one by one: sincerity, truthfulness, trust, gratitude, patience, repentance.",
        "Keep the company of the righteous.",
        "Ask Allah, as the prophets did, to join you with the righteous.",
      ]),
      L("Key takeaways", [
        "Righteousness is maturity in religion: rights fulfilled, in their places.",
        "Even prophets asked Allah for it.",
        "A righteous life keeps giving after death.",
      ]),
    ] },
];

export const RUHIY2_QUIZ = {
  id: "ruhiy-2", title: "Spiritual Tarbiyah 2", sub: "Ruhiy tarbiya, volume 2", icon: "learn" as const,
  learn: ["Questions are based on the Spiritual Tarbiyah lessons for volume 2 of Ruhiy tarbiya by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "According to al-Junayd, how are truthfulness (ṣidq) and sincerity (ikhlāṣ) related?", options: ["They are identical", "Truthfulness is the root; sincerity is the branch", "Sincerity is the root; truthfulness is the branch", "They are unrelated"], answer: 1, why: "Truthfulness underlies everything; sincerity begins once deeds begin, and no deed is accepted without both.", src: src("39–50") },
    { q: "In the ḥadīth qudsī in Muslim 2985, what happens to a deed done for Allah and someone else?", options: ["It gets half the reward", "Allah leaves the person with his partner", "It is accepted anyway", "It is rewarded double"], answer: 1, why: "Allah is the One most free of need of partners.", src: "Muslim 2985" },
    { q: "How does Imam al-Ghazālī define zuhd?", options: ["Owning nothing", "Desire turning from one thing to something better", "Living in the mountains", "Fasting every day"], answer: 1, why: "Turning from something you never wanted is not zuhd.", src: src("50–79") },
    { q: "Does taking the means (working, sowing seed) contradict tawakkul?", options: ["Yes, true trust means doing nothing", "No, taking the means while relying on Allah is part of tawakkul", "Only for scholars", "Only in Ramadan"], answer: 1, why: "“Tie your camel, and rely on Allah” (Tirmidhi 2517).", src: src("79–94") },
    { q: "Which verse says “If you love Allah, follow me, and Allah will love you”?", options: ["2:255", "3:31", "18:10", "112:1"], answer: 1, why: "Āl ʿImrān 3:31.", src: "Quran 3:31" },
    { q: "Imam al-Ghazālī called fear and hope…", options: ["Two enemies", "Two wings", "Two diseases", "Two veils"], answer: 1, why: "The two wings on which those brought near fly to every station.", src: src("107–147") },
    { q: "How was taqwā described to ʿUmar (ra)?", options: ["Praying all night", "Crossing a thorny field barefoot, stepping carefully", "Leaving all work", "Speaking softly"], answer: 1, why: "Sins are the thorns; taqwā is being careful of them.", src: src("136–199") },
    { q: "Which is higher, according to the book: patience or contentment (riḍā)?", options: ["Patience", "Contentment", "They are equal", "Neither"], answer: 1, why: "Patience is part of faith; contentment is its highest degree.", src: src("245–277") },
    { q: "Which of these is NOT one of the three parts of repentance?", options: ["Knowledge of the harm of sin", "Regret", "Leaving the sin and resolving not to return", "Telling everyone about the sin"], answer: 3, why: "Repentance is knowledge, regret and action. Sins are concealed, not announced.", src: src("289–330") },
    { q: "What does tabayyun teach us to do?", options: ["Forward news quickly", "Verify news before acting on it", "Ignore all news", "Only trust friends"], answer: 1, why: "If a wrongdoer brings you news, verify it (49:6).", src: "Quran 49:6" },
  ],
};
