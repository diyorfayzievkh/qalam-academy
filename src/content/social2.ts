import type { Lesson } from "./library";
import { L, P } from "./ruhiy";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah, part 2: food, hospitality, celebrations, gatherings,
// festivals, leisure, youth and other faiths. From "Ijtimoiy odoblar" by
// Shaykh Muhammad Sodik Muhammad Yusuf, used with the rights holder's permission.

const FO = "Food and hospitality";
const FE = "Festivals and leisure";
const SO = "Living in society";

export const SOCIAL_LESSONS_2: Lesson[] = [
  { id: "social-halal-food", group: FO, title: "Halal food and the rulings of eating", summary: "What a Muslim may eat, and when eating is obligatory, rewarded or forbidden.", sources: [src("64–68"), "Quran 5:3", "Quran 7:31", "Quran 2:173", "Muslim 1934"],
    blocks: [
      P("Islam cares for the body as well as the soul, and food is part of that care. As in everything, Islam recommends moderation: “Eat and drink, but do not waste” (7:31). The book explains what may and may not be eaten, following the Hanafi school, and how eating itself carries different rulings."),
      L("Plant foods", [
        "Food is either from plants or from animals.",
        "All plant foods are lawful unless they are impure, harmful or intoxicating.",
        "Anything impure, or mixed with impurity, is ḥarām, and the prohibition of intoxicants is known to everyone.",
      ]),
      L("Animal foods (Hanafi school)", [
        "Animals are of three kinds: water animals, land animals, and those that live in both.",
        "Of water animals, the Hanafi school permits fish.",
        "Of land animals, carrion, flowing blood and pork are forbidden, as are animals that were strangled, beaten, killed by a fall or gored, unless slaughtered properly before death (5:3).",
        "Predatory animals and birds with fangs or talons, such as wolves, lions, tigers, eagles, falcons and hawks, are ḥarām (Muslim 1934).",
        "Creeping creatures such as scorpions, snakes, mice, ants, cockroaches and spiders are ḥarām.",
        "In the Hanafi view, the hyena, jackal and fox are also ḥarām.",
        "In the Hanafi school, an animal born of a lawful and an unlawful parent takes the ruling of its mother.",
        "Livestock such as camels, cattle, sheep and goats are lawful, as are non-predatory birds such as pigeons, doves, sparrows, quail, ducks, geese and chickens.",
        "Animals that live both on land and in water, such as crocodiles and frogs, are ḥarām.",
      ]),
      L("When eating takes a ruling", [
        "Obligatory (farḍ): eating enough to stay alive. Whoever refuses and dies of it is sinful.",
        "Necessary (wājib): eating enough to be able to pray the obligatory prayers standing and to fast the obligatory fasts.",
        "Recommended (mandūb): eating enough to have strength to earn a living, study and do voluntary worship.",
        "Permitted (mubāḥ): eating until full, as long as it does no harm.",
        "Eating beyond fullness is ḥarām in the Hanafi school, except in small exceptions such as keeping a shy guest company or gaining strength for the next day’s fast.",
        "Overeating to the point of harming yourself is even more serious.",
        "It is recommended to eat from your own sacrifice and ʿaqīqah, and to eat at a wedding or banquet you are invited to.",
        "Somewhere unfamiliar, the Prophet ﷺ would first ask what the food was before eating it.",
      ]),
      L("Key takeaways", [
        "Eat what is ḥalāl and wholesome, and avoid what is impure, harmful or intoxicating.",
        "Eating to stay strong for worship is itself rewarded.",
        "Moderation is the rule: stop before overeating.",
      ]),
    ] },

  { id: "social-eating", group: FO, title: "The manners of eating and drinking", summary: "Over thirty sunnah manners for the meal, from washing hands to the final duʿāʾ.", sources: [src("68–78"), "Bukhari 5376", "Muslim 2020", "Bukhari 5398", "Muslim 2033", "Bukhari 5409", "Muslim 2028", "Muslim 2026", "Tirmidhi 2380"],
    blocks: [
      P("The book lists in detail the manners that turn an ordinary meal into worship and a moment of blessing. Most come straight from the Sunnah."),
      L("Before eating", [
        "Wash both hands.",
        "Wait for scholars and elders to begin before you start. This is among the highest manners.",
        "Make the intention that this food will give you strength for worship and taqwā.",
        "Say “Bismillāh” at the start (Bukhari 5376).",
        "Sit humbly at the dastarkhān.",
      ]),
      L("While eating", [
        "Eat with the right hand (Muslim 2020).",
        "Eat from what is in front of you (Bukhari 5376).",
        "When eating with the hand, use three fingers.",
        "Do not eat leaning or reclining (Bukhari 5398).",
        "Pick up food that falls, clean it and eat it; do not let food left on the fingers or plate go to waste (Muslim 2033).",
        "Never criticise food. If you like it, eat it; if not, leave it (Bukhari 5409). Praise the food and thank whoever made it.",
        "Eat in an orderly way and do not rush.",
        "Do not overeat: a third for food, a third for drink, a third for breath (Tirmidhi 2380).",
        "Be content and grateful for what is there; do not go hunting for something better.",
        "Eat together rather than alone: blessing is in gathering.",
        "Wait for hot food to cool, and do not blow on it.",
        "Eat from the edge of the dish, not the middle or the top; blessing descends in the middle.",
        "Eat sitting, not standing or walking.",
        "Invite those near you, including those who serve, to eat with you.",
        "Pleasant conversation at the table is recommended.",
      ]),
      L("After eating", [
        "Praise Allah and make the duʿāʾ after eating.",
        "Wash both hands.",
        "Clean your teeth and spit out what remains.",
        "Rise together after a shared duʿāʾ when the meal is over.",
      ]),
      L("The rulings of drinking", [
        "Every drink not proven ḥarām is permitted.",
        "Drinking enough to save life or a limb, or to fulfil an obligation, is obligatory.",
        "Drinking to quench thirst is recommended; drinking beyond need is sometimes disliked and sometimes ḥarām.",
      ]),
      L("The manners of drinking", [
        "Say “Bismillāh” and drink with the right hand.",
        "Drink in three breaths, taking the vessel away from your mouth each time; do not breathe into the vessel (Muslim 2028).",
        "Drink sitting (Muslim 2026).",
        "Sip rather than gulp.",
        "Do not drink so much that you are overfull, do not drink straight from the spout of a large container, and do not drink from a chipped part of a cup.",
        "Praise Allah when you finish.",
        "When serving drinks to a group, start from the right.",
      ]),
      L("Key takeaways", [
        "Bismillāh, right hand, from in front of you.",
        "Never criticise food; thank the cook.",
        "Eat together, in moderation, and end with praise.",
      ]),
    ] },

  { id: "social-hospitality", group: FO, title: "Host and guest", summary: "How a good host welcomes, and how a good guest behaves.", sources: [src("78–83"), "Bukhari 6018", "Bukhari 6135", "Quran 51:24–27"],
    blocks: [
      P("“Whoever believes in Allah and the Last Day, let him honour his guest” (Bukhari 6018). Hospitality is one of the oldest virtues of Muslim society, going back to Ibrāhīm (as), who hurried to bring a fat, roasted calf to his guests (51:24–27; 11:69). The book sets out the adab on both sides."),
      L("The host’s manners", [
        "Talk pleasantly and tell stories suited to the occasion.",
        "Keep a cheerful face, and show happiness when going in and out of the room.",
        "Do not go to trouble that burdens you; hospitality should be sincere, not a strain.",
        "Offer food again and again, but do not overdo the insisting.",
        "Do not let long silences fall, and do not disappear for long.",
        "Do not scold servants or family in front of the guest.",
        "Serve the guest yourself.",
        "Do not seat the guest with people he dislikes.",
        "When the guest asks to leave, let him go.",
        "See him off at the door, and help him to his transport.",
      ]),
      L("The guest’s manners", [
        "Sit where you are shown.",
        "Be content with whatever is offered.",
        "Start eating what is served without delay. Not eating at all is disrespectful to the host.",
        "Rise to leave only with the host’s permission.",
        "Pray for the host.",
        "Do not stay more than three days. Hospitality is three days; beyond that it is charity, and a guest should not stay until he becomes a burden (Bukhari 6135).",
      ]),
      L("Key takeaways", [
        "Honouring a guest is a sign of faith.",
        "A host serves with a smile and without strain.",
        "A guest is content, prays for the host, and does not overstay.",
      ]),
    ] },

  { id: "social-celebrations", group: FO, title: "Weddings and celebrations", summary: "The kinds of feasts in Islamic culture, and the adab of inviting and attending.", sources: [src("83–89"), "Bukhari 5173", "Muslim 1432", "Bukhari 5167"],
    blocks: [
      P("Muslim culture has named a meal for almost every happy occasion. The book lists them, then gives the adab for the one holding the event and for the guests."),
      L("The named feasts", [
        "Walīmah: the wedding feast.",
        "ʿAdhīrah: for a circumcision.",
        "Khursah: for the birth of a child.",
        "Wakīrah: for a new home or building.",
        "Naqīʿah: for a traveller’s return.",
        "ʿAqīqah: on a baby’s seventh day.",
        "Wadīmah: a meal on an occasion of mourning.",
        "Maʾdubah: an ordinary meal with no particular reason.",
        "Ḥidhāq: for completing memorisation of the Quran.",
        "Tuḥfah: in honour of someone.",
        "Meals of thanks for being saved from hardship, or for a great achievement.",
      ]),
      L("For the host", [
        "Invite whomever you wish, by word or by invitation card.",
        "Invite the God-fearing, people whose prayers you hope for, and the poor who will be glad of a full meal, not only the rich. The worst food is a wedding feast to which the rich are invited and the poor left out (Muslim 1432).",
        "Avoid both waste and stinginess; be moderate according to your means. The Prophet ﷺ told ʿAbd al-Raḥmān ibn ʿAwf: hold a walīmah, even with one sheep (Bukhari 5167).",
        "Do not push guests who are fasting to break their fast.",
        "Do not praise your own food.",
        "Welcome guests with an open face and real joy, and show particular kindness to the honoured and the shy.",
        "Do not overdo “take some, take some”.",
      ]),
      L("For the guest", [
        "In the Hanafi school, accepting a wedding invitation is sunnah; other invitations are recommended (Bukhari 5173).",
        "If sin will definitely take place there, do not go.",
        "If you cannot go, thank the host, make duʿāʾ for them, and apologise.",
        "If the invitation was general rather than personal, going is your choice.",
        "Do not go uninvited. If you bring someone who was not invited, ask the host’s permission.",
        "Go with the intention of honouring the host.",
        "Do not arrive before the set time, or stay long after it.",
        "Sit where you are shown, and do not take the place of honour unless invited to.",
        "If you are not fasting an obligatory fast, do not hold back from eating.",
        "Do not rush the food, and keep the general manners of eating.",
        "Do not ask for dishes that were not served, or pass food to people you like.",
        "Do not take food home from the event.",
        "Do not stay behind once others have left.",
        "Pray for the host and their family.",
      ]),
      L("Key takeaways", [
        "Celebrate with thanks, not with show.",
        "Invite the poor and the pious, not only the wealthy.",
        "Accept invitations, come on time, and leave with a duʿāʾ.",
      ]),
    ] },

  { id: "social-gatherings", group: FO, title: "Gatherings and meetings", summary: "How to enter, sit, listen and leave a gathering, and how to end it.", sources: [src("89–96"), "Quran 58:11", "Bukhari 6270", "Bukhari 6290", "Abu Dawud 4858", "Quran 103"],
    blocks: [
      P("People gather for knowledge, work, family and community. The book sets out the adab that makes every gathering beneficial and comfortable for all."),
      L("Arriving", [
        "Come in good clothes and on time.",
        "For private meetings, follow the rules of asking permission.",
        "Give salām on arriving and on leaving.",
        "Sit in the nearest empty place without making people move.",
        "Do not sit between two people without their permission.",
        "Do not sit in the middle of a circle.",
        "Never make anyone stand up so that you can take their seat (Bukhari 6270).",
        "Make room for newcomers: “When you are told to make room in gatherings, make room; Allah will make room for you” (58:11).",
      ]),
      L("During the gathering", [
        "When there are three, two should not whisper together (Bukhari 6290).",
        "Do not belittle, mock or show arrogance to anyone present.",
        "Sit composed and with good manners, following the customs of the gathering.",
        "Begin everything, entering, leaving and passing things, from the right.",
        "Pay special attention to cleanliness and pleasant smell.",
        "Listen attentively to whoever is speaking.",
        "Fulfil the gathering’s right by enjoining good and forbidding evil.",
      ]),
      L("What to avoid", [
        "Do not reveal the secrets of a gathering. Gatherings are a trust.",
        "Do not attend gatherings where ḥarām, sin, idle or shameless things happen.",
      ]),
      L("Ending a gathering", [
        "The companions would recite Sūrat al-ʿAṣr at the end of a gathering and remember its meaning: time, faith, good deeds, and urging one another to truth and patience (103).",
        "Say the kaffārat al-majlis: “Subḥānaka-llāhumma wa bi-ḥamdika, ashhadu an lā ilāha illā anta, astaghfiruka wa atūbu ilayk” (Abu Dawud 4858). It wipes away what was said in the gathering.",
      ]),
      L("Key takeaways", [
        "Sit where there is space, never in someone else’s seat.",
        "Include everyone, and keep the gathering’s secrets.",
        "End with al-ʿAṣr and the duʿāʾ of the gathering.",
      ]),
    ] },

  { id: "social-eid", group: FE, title: "The two Eids and Friday", summary: "Islam’s festivals, and the sunnahs of celebrating them.", sources: [src("96–104"), "Abu Dawud 1134", "Bukhari 953", "Bukhari 986", "Bukhari 1503", "Bukhari 1990", "Bukhari 935"],
    blocks: [
      P("Every people has days to remember great events and great people. Islam gave festivals their own character and established them on its teaching. When the Prophet ﷺ came to Madinah, its people had two days of play from before Islam. He said: Allah has given you two better days instead, the day of al-Aḍḥā and the day of al-Fiṭr (Abu Dawud 1134). They are days of eating, drinking, joy and remembering Allah."),
      L("The two Eids", [
        "ʿĪd al-Aḍḥā on 10 Dhū al-Ḥijjah, linked to the Ḥajj and the sacrifice of Ibrāhīm (as).",
        "ʿĪd al-Fiṭr on 1 Shawwāl, celebrating the completion of Ramadan’s fast.",
        "It is ḥarām to fast on the days of Eid (Bukhari 1990).",
      ]),
      L("Special to ʿĪd al-Fiṭr", [
        "Eat something before going to the prayer; the Prophet ﷺ ate dates first (Bukhari 953).",
        "Pay ṣadaqat al-fiṭr before the prayer (Bukhari 1503).",
      ]),
      L("Special to ʿĪd al-Aḍḥā", [
        "Go to the prayer without eating, and eat afterwards, ideally from your sacrifice.",
        "Say the takbīr aloud on the way.",
        "Slaughter the sacrifice after the Eid prayer.",
      ]),
      L("Sunnahs for both Eids", [
        "Go to the prayer by one route and return by another (Bukhari 986).",
        "Use the miswāk, take a ghusl, wear perfume and put on your best clothes.",
        "Spend the nights of the two Eids in worship.",
        "Go to the Eid prayer early, on foot, with dignity, saying takbīr.",
        "Be generous to your family and make their day abundant.",
        "Show joy to every Muslim you meet and congratulate them. Visit relatives, neighbours and friends.",
        "Remember widows, orphans, captives and the poor.",
        "Strengthen family ties.",
        "Strengthen community bonds, and reconcile people who have fallen out.",
      ]),
      L("Friday: the weekly Eid", [
        "Friday is the weekly festival, when the Muslim community gathers. Many of the same sunnahs apply: ghusl, perfume and best clothes.",
        "It is the master of days (Ibn Majah 1084).",
        "Send abundant ṣalawāt on the Prophet ﷺ on Friday.",
        "Fasting on Eid is forbidden. Fasting Friday alone is mildly disliked; joining it with Thursday or Saturday removes this (Bukhari 1985).",
        "There is an hour on Friday in which duʿāʾ is answered (Bukhari 935).",
      ]),
      L("Key takeaways", [
        "Islam has two yearly festivals and a weekly one.",
        "Celebrate with worship, cleanliness, food, family and generosity.",
        "Eid is the day to reconcile and to remember the poor.",
      ]),
      { type: "link", href: "/ramadan", label: "Ramadan Quest", text: "Prepare for ʿĪd al-Fiṭr with the Ramadan tracker." },
    ] },

  { id: "social-commemorations", group: FE, title: "Commemorative occasions", summary: "The Hijri new year, Laylat al-Qadr, al-Isrāʾ wal-Miʿrāj and the Mawlid.", sources: [src("104–110"), "Quran 97", "Quran 17:1", "Bukhari 1901"],
    blocks: [
      P("Beside the two Eids, which are set by the Sharīʿah, the book discusses occasions it calls “figurative festivals”. They were not celebrated publicly in the earliest generations, nor was there need. Later, Muslims began to mark them in order to remind people of great events and draw them closer to their religion. The book teaches that when marking them, the adab of the real festivals must be kept."),
      L("The Hijri new year", [
        "Remembering the Prophet’s ﷺ hijrah at the start of each Hijri year and congratulating one another became a custom.",
        "It is a moment to reflect on the hijrah’s lessons of sacrifice, trust and brotherhood.",
      ]),
      L("Laylat al-Qadr", [
        "The festival of the divine programme, the night the Quran was sent down: “We sent it down on the Night of Decree” (97:1).",
        "“The Night of Decree is better than a thousand months” (97:3): worship in it is better than a thousand months of worship.",
        "The angels and Jibrīl descend with every matter decreed for the coming year (97:4), and it is peace until dawn (97:5).",
        "“Whoever stands in prayer on Laylat al-Qadr with faith and hoping for reward, his past sins are forgiven” (Bukhari 1901). “Standing” means spending the night in worship: prayer, recitation, dhikr and duʿāʾ.",
      ]),
      L("Al-Isrāʾ wal-Miʿrāj", [
        "Al-Isrāʾ is the night journey from al-Masjid al-Ḥarām to al-Masjid al-Aqṣā (17:1). Al-Miʿrāj is the ascent from Jerusalem through the heavens to Sidrat al-Muntahā.",
        "It was not a dream or a journey of the soul only. The Prophet ﷺ travelled in body and soul, which is why the verse says “His servant”.",
        "In each heaven he met a prophet and many angels, and he received the five daily prayers.",
        "It showed that he was not an ordinary leader but the Messenger of Allah, and it lifted him after the Year of Sorrow.",
        "Scholars have different views about holding special gatherings on these specific nights. Many scholars, including those in Central Asia, believe that coming together to learn about the Prophet’s ﷺ life, send blessings upon him, and feed the poor is a beautiful thing, as long as everything done is lawful. Other scholars prefer not to single out these specific dates for worship, to avoid creating un-Islamic rituals. Ultimately, all scholars agree that loving the Prophet ﷺ and following his Sunnah is a duty we should practice every single day.",
      ]),
      L("The Mawlid", [
        "The Prophet’s ﷺ birthday is marked in many Muslim lands. From the earliest days the ummah loved to learn and teach everything about him, which is how the Sīrah books were written.",
        "As people became busier and knew less of his life, scholars proposed a yearly occasion to teach it. The practice spread from Iraq across the Muslim world.",
        "In Central Asia, the Mawlid of the Madinan scholar and poet Jaʿfar al-Barzanjī has long been recited.",
        "Its main aim is to remind the ummah of the Prophet’s ﷺ life, character and Sunnah, and to renew love for him. As with al-Isrāʾ, scholars differ about holding such gatherings on fixed dates; all agree that loving him and following his Sunnah is a daily duty.",
      ]),
      L("Key takeaways", [
        "The Sharīʿah’s festivals are the two Eids and Friday.",
        "Commemorations are for learning and renewing faith, with the adab of the real festivals.",
        "The best way to mark any of them is with worship, knowledge and following the Sunnah.",
      ]),
    ] },

  { id: "social-leisure", group: FE, title: "Rest, travel and leisure places", summary: "Enjoying parks, resorts and trips without losing your religion.", sources: [src("110–118"), "Quran 29:20", "Quran 24:30", "Muslim 223"],
    blocks: [
      P("Rest is a real need. It removes tiredness, stress and frustration. Islam does not forbid leisure and travel for enjoyment; it gives them adab so that a holiday refreshes the soul as well as the body."),
      L("The adab of leisure", [
        "Choose a fitting place. Check first that it is free of ḥarām and suitable for your family.",
        "Do not forget worship and adab on holiday. Rest does not suspend the obligatory prayers or the manners of the religion. Plan for wuḍūʾ and prayer.",
        "Treat everyone well, especially those who serve you: staff, drivers, cleaners and guides.",
        "Take lessons from the wonders you see. “Travel through the land and see how He began creation” (29:20). Mountains, rivers, trees and seas are signs of Allah.",
        "Guard against the ḥarām and lower your gaze (24:30). What is ḥarām at home is ḥarām on holiday too; holiday places often make it easier to fall.",
        "Keep clean, and leave places clean. Purity is half of faith (Muslim 223).",
        "Treat facilities well. Toilets, benches, paths and other public facilities are there for everyone, so do not damage or dirty them.",
        "Do not be influenced by others’ harmful habits and ideas. Enjoy the place, not the bad customs you may see there.",
      ]),
      L("Key takeaways", [
        "Rest is allowed and good, with adab.",
        "Take your prayers, your modesty and your manners with you.",
        "Turn sightseeing into reflection on Allah’s creation.",
      ]),
    ] },

  { id: "social-youth", group: SO, title: "The adab of youth", summary: "How young Muslims honour parents and elders, guard themselves, and build their future.", sources: [src("118–126"), "Quran 17:23–24", "Quran 18:13", "Tirmidhi 1919", "Abu Dawud 4833", "Tirmidhi 2417"],
    blocks: [
      P("Youth is the season of strength, energy and decisions that shape a whole life. The book addresses young people directly with the adab of this stage."),
      L("Kindness to parents comes first", [
        "The most important adab of youth is goodness to parents. Even non-Muslims today are struck by how many Quran verses describe its nobility.",
        "“Lower to them the wing of humility out of mercy, and say: My Lord, have mercy on them as they raised me when I was small” (17:24).",
      ]),
      L("Honour your elders, learn from them", [
        "Respect everyone older than you, especially the grandfathers and grandmothers of the community.",
        "“Whoever does not show mercy to our young and honour our elders is not of us” (Tirmidhi 1919).",
        "Use their experience. They have lived what you are about to face.",
      ]),
      L("Take on noble character", [
        "Work tirelessly at good character. Good character is the best adornment of a young person.",
        "The People of the Cave were “young men who believed in their Lord, and We increased them in guidance” (18:13).",
      ]),
      L("Beware of Shayṭān and bad company", [
        "Shayṭān works especially hard on young people.",
        "His most dangerous helper is desire: tempting young men and women into ḥarām relationships with each other.",
        "Another is bad friends: classmates, neighbours or even relatives who lead you astray. “A person is on the religion of his close friend” (Abu Dawud 4833).",
        "Another is groups, sects and movements that call to corrupt paths. Learn your religion from trusted scholars.",
      ]),
      L("Look to the future", [
        "Look at the future with hope, and work to become a mature, capable person.",
        "Every young person should have a clear picture of their future and define their goals in life.",
        "You will be asked how you spent your life (Tirmidhi 2417); another report adds “and your youth” (Tirmidhi 2416). Use it in knowledge, work and worship.",
      ]),
      L("Key takeaways", [
        "Parents first, then elders.",
        "Choose friends who bring you closer to Allah.",
        "Youth is an investment: spend it on knowledge, character and purpose.",
      ]),
    ] },

  { id: "social-other-faiths", group: SO, title: "Dealing with people of other faiths", summary: "Belief in all prophets, justice and kindness to all, and the many lawful dealings.", sources: [src("126–131"), "Quran 2:285", "Quran 60:8", "Quran 2:256", "Bukhari 1356", "Abu Dawud 5152", "Bukhari 2068"],
    blocks: [
      P("A Muslim lives alongside people of other religions as neighbours, colleagues and fellow citizens. The book sets out the adab of these relationships, grounded in the Quran and the practice of the Prophet ﷺ."),
      L("The foundation", [
        "A Muslim believes equally in all the prophets Allah sent and in all the books and scrolls revealed to them, without excluding any (2:285).",
        "A Muslim does no harm to people of other faiths. He treats them well and can build good relationships with them. “Allah does not forbid you from being kind and just to those who have not fought you over religion” (60:8).",
        "He respects their places of worship, does not interfere in their beliefs, and never wrongs them. “There is no compulsion in religion” (2:256).",
      ]),
      L("Social dealings", [
        "Exchanging gifts with them is allowed.",
        "Hosting them and being their guest is allowed. The Prophet ﷺ is reported to have hosted Christian guests from Abyssinia in his own mosque and served them himself, saying they had honoured his companions.",
        "Treat a neighbour of another faith beautifully. When ʿAbdullāh ibn ʿAmr slaughtered a sheep, he kept asking his servant: have you given some to our Jewish neighbour? (Abu Dawud 5152).",
        "Visiting their sick is allowed; the Prophet ﷺ visited a sick Jewish boy (Bukhari 1356).",
        "Offering condolences when someone they love dies is allowed, while keeping away from their religious rites and not making the duʿāʾs specific to Muslims.",
      ]),
      L("Work and financial dealings", [
        "A Muslim may work for non-Muslims or employ them, as long as it does not harm Islam or Muslims and the work itself is not ḥarām.",
        "Buying, selling and renting with them are allowed. The Prophet ﷺ died with his armour in pledge to a Jewish man for some barley (Bukhari 2068).",
        "Partnerships are allowed within what the Sharīʿah permits; neither partner may act alone without the other’s knowledge.",
        "Lending and borrowing, appointing them as agents or acting as theirs, and leaving or accepting trusts are allowed, on the same conditions.",
      ]),
      L("Key takeaways", [
        "Faith in all prophets, and justice and kindness to all peaceful people.",
        "Gifts, visits, hospitality and fair trade are part of the Sunnah.",
        "Keep your own religion clear while treating everyone with excellence.",
      ]),
    ] },
];
