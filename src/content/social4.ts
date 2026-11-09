import type { Lesson } from "./library";
import { L, P } from "./ruhiy";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah, part 4: the internet, travel, media, wealth, trade, the
// mosque, Friday and neighbours. From "Ijtimoiy odoblar" by Shaykh Muhammad
// Sodik Muhammad Yusuf, used with the rights holder's permission.

const T = "Phones and the internet";
const R = "On the road";
const W = "Wealth and work";
const M = "The mosque";
const SO = "Living in society";

export const SOCIAL_LESSONS_4: Lesson[] = [
  { id: "social-internet", group: T, title: "Using the internet", summary: "A double-edged tool: intention, time, permitted content and protecting children.", sources: [src("189–195"), "Quran 17:36", "Tirmidhi 2417", "Bukhari 6412"],
    blocks: [
      P("The internet, “the international information network”, brought enormous benefit. Knowledge that once required travel to libraries is now a few taps away. Yet its problems grow just as fast: next to useful information sits harmful and corrupt content. The internet is double-edged, and because it is new, the earlier books did not discuss it. The book sets out its adab from the general principles of the Sharīʿah."),
      L("Before you go online", [
        "Make your intention good: to learn, work, connect with family or spread good.",
        "Remember the value of your life. Every moment will be accounted for, so do not waste it. Health and free time are two blessings most people waste (Bukhari 6412).",
        "Plan what you are going online to do, so you do not drift.",
        "Begin with “Bismillāhi-r-raḥmāni-r-raḥīm” and a duʿāʾ for starting work.",
      ]),
      L("While you are online", [
        "Everything you watch, read and listen to must be what the Sharīʿah permits. Nothing is hidden from Allah. “Hearing, sight and heart will all be questioned” (17:36).",
        "Respect the intellectual rights of site owners and creators. Taking their work without permission is a breach of trust.",
        "Do not use your employer’s or anyone else’s internet without permission.",
      ]),
      L("Children and the internet", [
        "Organise children’s use of the internet and computer wisely and attentively.",
        "Keep devices in shared spaces, set limits, and stay involved in what they watch and who they talk to.",
      ]),
      L("Key takeaways", [
        "Go online with an intention and a plan.",
        "What is ḥarām offline is ḥarām online.",
        "Guard your time, and guide your children.",
      ]),
    ] },

  { id: "social-online", group: T, title: "Talking to people online", summary: "Social media, chats and comments: taqwā, truth and manners behind the screen.", sources: [src("195–205"), "Tirmidhi 1987", "Quran 5:2", "Quran 49:6", "Quran 24:19", "Muslim 5"],
    blocks: [
      P("Online, people speak to strangers they will never see, and many forget their manners. The book teaches that the same adab applies behind a screen as face to face, and adds some cautions special to the internet."),
      L("The foundation", [
        "Choose a decent name and profile for yourself.",
        "Act on what the Sharīʿah allows and avoid what it forbids.",
        "Cooperate in goodness and taqwā, not in sin and aggression (5:2).",
        "Aim for useful purposes and stay away from what is pointless.",
        "Carry the three counsels the Prophet ﷺ gave Abū Dharr: fear Allah wherever you are; follow a bad deed with a good one to wipe it out; treat people with good character (Tirmidhi 1987).",
      ]),
      L("Particular cautions", [
        "Be very careful with non-maḥrams. Online conversations can slide into what is ḥarām.",
        "Do not let an online contact go as far as arranging a marriage purely over the internet. A marriage needs families, witnesses and real knowledge of each other.",
        "Do not lie, fake identities, or spread invented news and doctored images. Verify before you share (49:6). It is enough lying to pass on everything you hear (Muslim 5).",
        "Do not spread indecency. Those who love that indecency should spread among the believers face a painful punishment (24:19).",
      ]),
      L("Manners in conversation", [
        "Behave as if you were face to face with the person.",
        "Address strangers respectfully, as you would in person.",
        "However heated a discussion gets, never insult or hurt anyone.",
        "Avoid pointless arguments, and do not answer rudeness with rudeness.",
        "If you buy or sell online, learn the rulings and details first. The book cites the resolution of the OIC’s International Islamic Fiqh Academy on contracts made through modern means of communication.",
      ]),
      L("Key takeaways", [
        "Allah sees you online too.",
        "Verify before you share, and never fake.",
        "Speak online as you would face to face.",
      ]),
    ] },

  { id: "social-email", group: T, title: "Email manners", summary: "Treat email like a real conversation, and protect people’s privacy.", sources: [src("203–205")],
    blocks: [
      P("Email is a letter, and letters have always had their adab. The Prophet ﷺ himself sent letters to kings, beginning with Allah’s name and stating his purpose clearly."),
      L("The manners of email", [
        "Treat an email exchange as if it were a live conversation.",
        "Never use email for anything the Sharīʿah forbids.",
        "Do not send mass messages to people you do not know. Spam is not good manners.",
        "Do not give out anyone’s email address without their permission.",
        "Correspondence with non-maḥrams beyond what the Sharīʿah allows is ḥarām.",
        "Keep all correspondence at the high standard of Islamic adab: greeting, clarity and courtesy.",
        "Do not rush to settle serious matters such as divorce by email. Such matters need care, presence and consultation.",
      ]),
      L("Key takeaways", [
        "An email is a conversation; write it with manners.",
        "Protect other people’s addresses.",
        "Settle serious matters in person, not in a rush.",
      ]),
    ] },

  { id: "social-travel", group: R, title: "The manners of travel", summary: "Preparing, setting out, the road and coming home: a traveller’s full adab.", sources: [src("205–213"), "Quran 29:20", "Muslim 1342", "Bukhari 2950", "Abu Dawud 2607", "Bukhari 1162", "Muslim 2708", "Muslim 716"],
    blocks: [
      P("The book notes the many benefits scholars listed for travel. It opens the mind, brings relief from worry, and teaches lessons. A traveller sees Allah’s signs, earns provision and gains experience. On the road, life feels calmer and thoughts about life and death grow clearer. Travel brings the company of great and wise people, and much more. Travel also has its adab, before, during and after."),
      L("Before setting out", [
        "Consult people you trust.",
        "Pray istikhārah (Bukhari 1162).",
        "Repent of your sins.",
        "Return anything you took unjustly.",
        "Pay your debts.",
        "Make sure your parents are pleased with you, and your spouse and family too.",
        "Make sure your travel money is ḥalāl.",
        "Take more supplies than you think you need, and do not mix your money and supplies with others’ in a way that causes friction.",
        "Learn what you need for the journey. If it is Ḥajj, learn the rites well.",
        "Take a companion. A lone rider is a devil, two are two devils, and three are a company (Abu Dawud 2607).",
        "If possible, leave on a Thursday; the Prophet ﷺ liked to (Bukhari 2950).",
        "Pray two rakʿahs before leaving.",
      ]),
      L("On the road", [
        "Recite the duʿāʾ for leaving home. On mounting your transport, say “Bismillāh” and then the travel duʿāʾ (Muslim 1342).",
        "Look after your transport, and never leave it neglected.",
        "Do not give yourself over to frivolity and pleasure-seeking.",
        "Be gentle and good-natured with people.",
        "Say “Allāhu akbar” when going up, and “SubḥānAllāh” when going down.",
        "When you see a town, ask Allah for its good and the good of its people, and seek refuge from its evil.",
        "When you stop somewhere, say: “Aʿūdhu bi-kalimāti-llāhi-t-tāmmāti min sharri mā khalaq.” Nothing will harm you until you leave (Muslim 2708).",
        "Say tasbīḥ when unloading.",
        "Make the general duʿāʾs and those for particular moments. A traveller’s duʿāʾ is answered.",
        "Try to stay in wuḍūʾ and pray on time, using the traveller’s concessions of shortening (qaṣr) as the Hanafi school teaches.",
      ]),
      L("Coming home", [
        "As you near home, say: “Āyibūna tāʾibūna ʿābidūna li-rabbinā ḥāmidūn.”",
        "Let your family know when you will arrive, rather than surprising them at night.",
        "When entering your town, ask Allah for its good and the good of its people.",
        "Before going home, pray two rakʿahs in the local mosque, as the Prophet ﷺ did (Muslim 716).",
      ]),
      L("Key takeaways", [
        "Prepare your heart as well as your bags: repent, settle debts, and get your parents’ blessing.",
        "Travel with companions, duʿāʾs and good character.",
        "Return with thanks, and start with the mosque.",
      ]),
    ] },

  { id: "social-media", group: T, title: "The press and the media", summary: "Journalists, bloggers and viewers: responsibility for what is published and watched.", sources: [src("213–218"), "Muslim 49", "Muslim 1893", "Muslim 2674", "Muslim 5", "Quran 24:19"],
    blocks: [
      P("One feature of our age is the power of the press and media. They have become one of the strongest tools of upbringing, shaping minds young and old, and they bring news of the world into every home. Anyone who publishes, whether a journalist, a blogger or someone posting online, carries a responsibility."),
      L("For those who publish", [
        "Everyone working in media is an influencer of society. Whoever sees an evil should change it (Muslim 49), and media people have a special power to do so.",
        "The media are a means of calling to good. Whoever guides to good gets the reward of the one who does it (Muslim 1893).",
        "They must never become a means of evil and corruption. Whoever calls to misguidance carries the sins of all who follow him (Muslim 2674).",
        "Think carefully about the consequences of everything you present. Do not spread whatever comes to hand without checking: “It is enough lying for a person to repeat everything he hears” (Muslim 5).",
        "Keep away from spreading baseless rumours, scandal and indecency. “Those who love that indecency spread among the believers will have a painful punishment” (24:19).",
      ]),
      L("For families", [
        "Protect your family from the negative influence of the media.",
        "Everything has a limit, including media use. Today the media are endless, and so is what they offer.",
        "Choose what comes into your home, set limits, and help your children think critically about what they see.",
      ]),
      L("Key takeaways", [
        "Whoever publishes shares the reward or the burden of what follows.",
        "Check before you publish or share.",
        "Guard your home’s screens as you guard its doors.",
      ]),
    ] },

  { id: "social-wealth", group: W, title: "Wealth and riches", summary: "Wealth belongs to Allah: how to earn it, thank for it and carry its responsibility.", sources: [src("218–231"), "Quran 3:14", "Quran 89:20", "Quran 57:7", "Quran 14:7", "Bukhari 3464", "Tirmidhi 2417"],
    blocks: [
      P("Wealth is what a person has beyond his and his family’s needs: money, homes, land and goods. The Arabic word māl comes from “to incline”, because hearts incline to it. Islam does not pretend this love does not exist. It reins it in and directs it to good, so that wealth serves the Hereafter instead of ruling the heart."),
      L("Love of wealth is natural", [
        "“Made attractive to people is the love of desires: women, children, heaped-up gold and silver, fine horses, livestock and farmland. That is the enjoyment of this worldly life, and with Allah is the best return” (3:14).",
        "“And you love wealth with immense love” (89:20).",
        "Without this love the world would not be built. The problem is not loving wealth but letting it rule you.",
      ]),
      L("The adab of wealth", [
        "Keep the rules of earning: only ḥalāl, never at others’ expense.",
        "Wealth belongs to Allah. Whoever holds it is a trustee: “Spend from what He has made you trustees of” (57:7).",
        "Gratitude for wealth is a condition of keeping Allah’s pleasure. “If you are grateful, I will give you more” (14:7).",
        "Ownership is a heavy responsibility. Every person will be asked where he earned his wealth and how he spent it (Tirmidhi 2417).",
      ]),
      L("A story of three men", [
        "The Prophet ﷺ told of three men among the Children of Israel: a leper, a bald man and a blind man. An angel cured each of them and gave each a herd that grew to fill a valley (Bukhari 3464).",
        "Years later the angel came back to each in his old form, as a poor traveller asking for help in Allah’s name.",
        "The leper and the bald man said their wealth was inherited and refused, and they were returned to what they had been. The blind man said: take what you want, by Allah I will not make it hard for you. Allah was pleased with him.",
        "The lesson: wealth, health and beauty are tests. No one should forget his past, and everyone should be grateful to Allah and help others with what He gave.",
      ]),
      L("Neither good nor bad in itself", [
        "Wealth cannot be called good or bad in itself. It depends on how it is earned and how it is spent.",
        "Spent on family, the poor, knowledge and good causes, it raises its owner. Earned unlawfully or hoarded, it destroys him.",
      ]),
      L("Key takeaways", [
        "Wealth is Allah’s; you are its trustee.",
        "Earn it lawfully, thank Him for it, and spend it well.",
        "Remember the three men: wealth is a test.",
      ]),
    ] },

  { id: "social-trade", group: W, title: "The manners of trade", summary: "Honest selling, fair measure, and the forbidden practices every trader must avoid.", sources: [src("231–243"), "Quran 83:1–3", "Quran 2:275", "Muslim 102", "Muslim 1605", "Bukhari 2079", "Tirmidhi 1209", "Muslim 1412"],
    blocks: [
      P("Trade is one of the most blessed ways to earn. The Prophet ﷺ was himself a trader before prophethood. But the marketplace is also where honesty is tested most, so the book gives its adab in detail."),
      L("The foundation", [
        "The first and most important adab is to learn the Sharīʿah rulings of trade and its types before trading.",
        "Make your intention good and remember Allah in the marketplace.",
        "Honesty is a mark of honour for a trader in this world and the next. The honest, trustworthy merchant will be with the prophets, the truthful and the martyrs (Tirmidhi 1209).",
        "Both parties have the choice until they part. If they are truthful and clear, their sale is blessed; if they hide and lie, its blessing is wiped out (Bukhari 2079).",
      ]),
      L("What is forbidden in trade", [
        "Lying to praise your goods, breaking promises, or lying about prices.",
        "Swearing false oaths to sell goods, which is among the greatest sins.",
        "Deception and hiding defects. The Prophet ﷺ put his hand into a pile of grain, found it wet underneath, and said: whoever cheats is not one of us (Muslim 102).",
        "Giving short weight or measure. “Woe to those who give less: who take full measure from people but give less when they measure for them” (83:1–3).",
        "Monopoly (iḥtikār): cornering a product to push up its price. Only a sinner hoards (Muslim 1605).",
        "Every kind of ribā (interest). “Allah has permitted trade and forbidden ribā” (2:275).",
        "Going out to meet goods before they reach the market, to buy cheap and sell dear.",
        "Selling over someone else’s sale, or bidding over someone else’s bid before they have finished negotiating (Muslim 1412).",
        "Trading in anything the Sharīʿah has forbidden or that has no lawful value.",
      ]),
      L("Key takeaways", [
        "Learn the fiqh of trade before you trade.",
        "Truth and clarity bring blessing; lies and cheating destroy it.",
        "Fair measure, no hoarding, no ribā.",
      ]),
    ] },

  { id: "social-mosque", group: M, title: "The mosque and its manners", summary: "The House of Allah: building it, entering it and behaving inside it.", sources: [src("243–249"), "Quran 72:18", "Quran 3:96", "Quran 9:18", "Bukhari 450", "Muslim 713", "Bukhari 444", "Muslim 568"],
    blocks: [
      P("Masjid means a place of prostration. Out of respect, mosques are called “the houses of Allah”. “The mosques belong to Allah, so do not call on anyone besides Allah” (72:18). The first house of worship on earth was the Kaʿbah in Makkah (3:96), and until the Last Day it remains the noblest of mosques."),
      L("Building and maintaining mosques", [
        "Building a mosque is one of the noblest deeds in the world. Whoever builds a mosque for Allah’s sake, Allah builds for him a house like it in Paradise (Bukhari 450).",
        "“Only those maintain the mosques of Allah who believe in Allah and the Last Day” (9:18). Maintaining means caring for the building and filling it with prayer.",
      ]),
      L("Before and on arrival", [
        "Always remember that the mosque is the house of Allah. Love it, respect it and honour it.",
        "Make praying in congregation in the mosque your habit.",
        "Make wuḍūʾ, groom yourself, and wear clean, good clothes.",
        "Make sure neither your body nor your clothes give off unpleasant smells. Whoever eats raw garlic or onion should keep away from the mosque.",
        "Walk to the mosque calmly and with dignity, without rushing or fooling about.",
        "Take off your shoes, clean them, and put them neatly in their place.",
        "Enter with the right foot, sending salām on the Prophet ﷺ and saying “Allāhumma-ftaḥ lī abwāba raḥmatik” (Muslim 713).",
      ]),
      L("Inside the mosque", [
        "Keep it clean, and remove anything dirty you notice.",
        "Do not spit or blow your nose there.",
        "Pray two rakʿahs on entering (taḥiyyat al-masjid) if no farḍ prayer is under way and it is not a disliked time (Bukhari 444).",
        "Idle talk, wandering about and raising your voice are serious disrespect.",
        "Do not recite aloud in a way that disturbs others.",
        "Do not argue, do worldly business, buy or sell, or announce lost property there (Muslim 568).",
        "Do not interlace or crack your fingers, fidget, or sit hugging your knees during the sermon.",
        "Once the adhān is called, do not leave before praying the farḍ.",
        "When you hear the adhān, repeat its words, then say the duʿāʾ after the adhān.",
      ]),
      L("Key takeaways", [
        "The mosque is Allah’s house: come clean, calm and well-dressed.",
        "Right foot in, two rakʿahs, and quiet.",
        "No business, no arguments and no noise in Allah’s house.",
      ]),
    ] },

  { id: "social-congregation", group: M, title: "Praying in congregation", summary: "Why jamāʿah matters so much, and the manners of the rows.", sources: [src("249–254"), "Bukhari 645", "Bukhari 510", "Bukhari 723", "Bukhari 703", "Bukhari 691", "Muslim 432"],
    blocks: [
      P("Prayer in congregation is twenty-seven times better than praying alone (Bukhari 645). The book stresses its importance for the individual and the community: it gathers Muslims five times a day, teaches equality and order, and strengthens brotherhood."),
      L("Joining the congregation", [
        "Greet those sitting and waiting for the prayer.",
        "Try to get a place in the first row.",
        "Do not wander between the rows or step over people’s shoulders.",
        "Never pass in front of someone who is praying. If people knew the sin in it, waiting forty would be better (Bukhari 510).",
        "If the iqāmah for the farḍ is called while you are praying a sunnah, and you have not yet bowed, end it and join; otherwise complete it, as the Hanafi school teaches.",
        "Try not to miss the opening takbīr with the imam.",
      ]),
      L("Rows and positions", [
        "If one person prays with the imam, he stands on the imam’s right, slightly behind.",
        "If another person arrives, the first steps back to form a row behind the imam, or the newcomer signals him to.",
        "With three, one leads and two stand behind him.",
        "Rows are formed starting directly behind the imam.",
        "Straighten the rows and stand close, leaving no gaps. Straightening the rows is part of the perfection of prayer (Bukhari 723).",
        "Those most fit to stand right behind the imam are people of knowledge, those who know the Quran and elders (Muslim 432).",
      ]),
      L("Following the imam", [
        "Follow the imam in every action. Do nothing before him. Whoever raises his head before the imam risks Allah changing his head into a donkey’s (Bukhari 691).",
        "The imam should pray completely but lightly, considering the weak, the sick and those with needs (Bukhari 703).",
        "After the prayer, do not rush out and crowd the doors.",
      ]),
      L("Key takeaways", [
        "Congregational prayer is twenty-seven times better.",
        "Straight, tight rows; never pass in front of someone praying.",
        "Follow the imam and never precede him.",
      ]),
      { type: "link", href: "/salah", label: "Prayer guide", text: "Review each prayer step by step in the Hanafi prayer guide." },
    ] },

  { id: "social-jumuah", group: M, title: "The manners of Friday", summary: "Preparing from Thursday, ghusl, listening to the khutbah, and the hour of answered duʿāʾ.", sources: [src("254–257"), "Quran 62:9", "Bukhari 879", "Bukhari 934", "Bukhari 935", "Muslim 850", "Muslim 1144"],
    blocks: [
      P("Friday is the weekly Eid of the Muslims. “O you who believe, when the call is made for prayer on Friday, hasten to the remembrance of Allah and leave trade” (62:9). The book gives its adab in order, from preparation to the end of the day."),
      L("Preparing", [
        "Preparation starts on Thursday: clean clothes and perfume are made ready, and the heart is cleared of worldly worries for dhikr and worship.",
        "Take ghusl on Friday with intention. Everyone who goes to Jumuʿah should bathe, because crowds and unpleasant smells harm people (Bukhari 879).",
        "Do the general acts of cleanliness: hair, nails, perfume and your best, cleanest clothes.",
        "Go early, calmly and with dignity, humility and khushūʿ, intending to fulfil Allah’s command and hoping for His forgiveness. The earlier you go, the greater the reward (Muslim 850).",
      ]),
      L("In the mosque", [
        "Enter with manners. Do not push past people’s shoulders or step in front of them; sit in any free space. Try to sit near the speaker.",
        "Sit silently and listen to the sermon, trying to take benefit from it. Do not talk to anyone. If you tell your neighbour “be quiet” during the khutbah, you have spoken idly (Bukhari 934).",
        "Do not move your hands, play with prayer beads or straighten your prayer mat during the khutbah.",
        "Do not fidget, sit hugging your knees, or yawn.",
        "Pray four rakʿahs of sunnah before the farḍ and four after, as the Hanafi school teaches.",
      ]),
      L("The rest of Friday", [
        "Make a habit of reciting Sūrat al-Kahf with intention.",
        "Send abundant ṣalawāt on the Prophet ﷺ.",
        "Attending gatherings of knowledge on Friday is very virtuous.",
        "Fill the day with dhikr, voluntary worship and good deeds.",
        "Do not forget there is an hour on Friday when duʿāʾ is answered (Bukhari 935). Many scholars hold it is in the last hour after ʿAṣr, so make plenty of duʿāʾ then.",
        "It is disliked to set out on a journey on Friday before the Jumuʿah prayer.",
        "It is disliked to fast Friday alone without a day before or after (Muslim 1144).",
      ]),
      L("Key takeaways", [
        "Prepare from Thursday; bathe and come early.",
        "Silence during the khutbah, even from saying “be quiet”.",
        "Al-Kahf, ṣalawāt and duʿāʾ before Maghrib.",
      ]),
    ] },

  { id: "social-neighbours", group: SO, title: "Good neighbourliness", summary: "Over twenty ways to honour a neighbour, and their rights in Islamic law.", sources: [src("257–263"), "Quran 4:36", "Bukhari 6014", "Bukhari 6016", "Bukhari 2463", "Muslim 2625", "Bukhari 6019"],
    blocks: [
      P("Allah commands kindness to the near neighbour and the distant neighbour (4:36), and Jibrīl kept urging the Prophet ﷺ about the neighbour until he thought the neighbour would be made an heir (Bukhari 6014). The book gives the neighbour’s legal rights and then a long list of practical kindnesses."),
      L("The neighbour’s legal rights", [
        "Pre-emption (shufʿah): when property is sold, the neighbour has a priority right to buy it, as the Hanafi school teaches.",
        "A person may rest a beam on his neighbour’s wall, and the wall’s owner should not prevent him (Bukhari 2463).",
      ]),
      L("Kindness to the neighbour begins with", [
        "Greeting him when you see him and asking after him.",
        "Helping him in his needs and protecting him from harm.",
        "Never harming him. “By Allah, he does not believe, whose neighbour is not safe from his harm” (Bukhari 6016).",
        "Honouring him with a cheerful face, kind words and gifts of food (Muslim 2625, Bukhari 6019).",
      ]),
      L("Signs of a good neighbour", [
        "Lending to him when he is in need.",
        "Visiting him when he is ill.",
        "Attending his condolences.",
        "Congratulating him on his joys.",
        "Not building your wall so high on his side that it cuts off his sun or air.",
        "Forgiving his mistakes and shortcomings.",
        "Being kind to his children, advising them and showing them care.",
        "Lowering your gaze from his family.",
        "Not spying on his secrets or revealing them.",
        "Guarding his house and property when he is away.",
        "Not disturbing him with shouting, loud TV or radio, or banging.",
        "Not narrowing his path or throwing rubbish where he walks.",
        "Not encroaching on his boundaries.",
        "Not building so high that you block his sun and air or overlook his yard.",
        "Giving him good advice and teaching him what he does not know.",
      ]),
      L("Key takeaways", [
        "A neighbour’s right is so great Jibrīl kept stressing it.",
        "Faith is not complete if your neighbour fears you.",
        "Small kindnesses, like salām, soup and silence at night, build a good street.",
      ]),
    ] },
];
