import type { Lesson } from "./library";
import { L, P } from "./ruhiy";
import { SOCIAL_SRC as src } from "./social-book";

// Social Tarbiyah, part 3: dress, cleanliness, the road, transport and phones.
// From "Ijtimoiy odoblar" by Shaykh Muhammad Sodik Muhammad Yusuf, used with
// the rights holder's permission.

const D = "Dress and cleanliness";
const R = "On the road";
const T = "Phones and the internet";

export const SOCIAL_LESSONS_3: Lesson[] = [
  { id: "social-dress-rulings", group: D, title: "Clothing: its purpose and rulings", summary: "Why we dress, the five rulings of clothing, and what may and may not be worn.", sources: [src("131–137"), "Quran 7:26", "Quran 7:31", "Quran 7:32", "Abu Dawud 4061", "Bukhari 5783", "Abu Dawud 4029"],
    blocks: [
      P("Clothing is one of Allah’s blessings and one of the things that set humans apart. “O children of Ādam, We have sent down to you clothing to cover your nakedness and as adornment; but the clothing of taqwā is best” (7:26). Clothing covers, protects and beautifies, and Islam gives it rulings like any other action."),
      L("The five rulings of clothing", [
        "Obligatory (farḍ): what covers the ʿawrah and protects from heat and cold.",
        "Recommended (mustaḥabb): beautifying yourself for Friday, Eid and gatherings, without pride. “Take your adornment at every masjid” (7:31).",
        "Permitted (mubāḥ): fine clothes in general, as long as they are not made of anything ḥarām. “Who has forbidden the adornment Allah brought out for His servants?” (7:32).",
        "Disliked (makrūh): clothes worn to show off, or that break people’s normal custom in order to be noticed.",
        "Forbidden (ḥarām): clothes worn out of arrogance, and clothes forbidden in themselves, such as silk for men.",
        "Whoever could dress well for Friday and Eid but deliberately does not has made a mistake.",
      ]),
      L("General rulings on clothes", [
        "Any fabric is lawful unless the Sharīʿah forbids it, as with silk for men.",
        "Tanned hides of animals that died without slaughter may be worn. Wool and hair of lawful animals are pure. Most jurists permit tanned skins of predators.",
        "White is recommended: “Wear white, it is the best of your clothes” (Abu Dawud 4061). Green, the dress of Paradise, is recommended.",
        "Bright, pure red is disliked for men. Black is permitted. Striped, multi-coloured fabric is permitted.",
        "Clothes with pictures of animals or people are ḥarām for men and women, and so are clothes with a cross. Pictures of non-living things are fine.",
        "Clothing so sheer that the skin colour shows through is not permitted.",
        "Clothing of fame, worn to stand out against people’s custom, is disliked (Abu Dawud 4029).",
        "The righteous predecessors wore middling clothes, neither the most expensive nor the lowest.",
        "Wearing deliberately ragged clothes to display asceticism when you can afford better is not allowed.",
        "Hanafi and Shāfiʿī scholars say scholars may wear distinctive dress so that people recognise and consult them.",
      ]),
      L("Key takeaways", [
        "Clothing is a blessing: for covering, protection and beauty.",
        "Dress well for worship and gatherings, without pride.",
        "Avoid what is ḥarām in fabric, image or purpose.",
      ]),
    ] },

  { id: "social-dress-manners", group: D, title: "The manners of dressing", summary: "Daily sunnahs of dressing, and what is particular to men and to women.", sources: [src("137–145"), "Quran 24:31", "Quran 33:59", "Abu Dawud 4020", "Bukhari 5784", "Bukhari 5885", "Muslim 2128", "Tirmidhi 1720"],
    blocks: [
      P("Beyond the rulings, the book lists the manners that make dressing an act of gratitude and obedience every morning."),
      L("General manners", [
        "Remember always that clothing is a blessing from Allah, and thank Him for it.",
        "Say “Bismillāh” and the duʿāʾs of dressing.",
        "When wearing something new, give special thanks and say the duʿāʾ for new clothes (Abu Dawud 4020).",
        "When you see a friend in new clothes, congratulate him on the blessing.",
        "Begin dressing from the right; undress starting from the left.",
        "Intend to obey Allah’s command to cover the ʿawrah.",
        "Choose moderate clothing.",
        "Keep clothes clean and pure.",
        "Do not strut in your clothes or drag them on the ground out of pride. Allah will not look at one who drags his garment out of pride (Bukhari 5784).",
        "Try to keep your clothes in good, beautiful condition.",
        "Shake out every garment, even socks, before putting it on.",
        "When undressing, fold clothes or hang them neatly and put them away.",
      ]),
      L("For men", [
        "It is obligatory for an adult man to wear clothes that cover his ʿawrah, from the navel to the knee.",
        "Silk and gold are ḥarām for men and permitted for women (Tirmidhi 1720).",
        "A silver ring is permitted for men.",
        "Men may not wear women’s clothing or imitate women (Bukhari 5885).",
      ]),
      L("For women", [
        "It is obligatory for an adult Muslim woman to wear clothes that cover her ʿawrah and do not reveal the shape of her body (24:31, 33:59).",
        "Before non-maḥram men, a woman’s ʿawrah is her whole body except the face and hands.",
        "Before other women, her ʿawrah is from the navel to the knee.",
        "A man may look at the women who are his maḥrams except the back, stomach and thighs.",
        "Women may not wear men’s clothing or imitate men (Bukhari 5885).",
        "Clothing that is worn yet still shows the body is condemned (Muslim 2128).",
      ]),
      L("Key takeaways", [
        "Dress with Bismillāh, from the right, and with thanks.",
        "Clean, moderate and modest, never proud.",
        "Men and women each keep their own dress and their own ʿawrah.",
      ]),
    ] },

  { id: "social-purity", group: D, title: "Personal cleanliness and purity", summary: "Toilet manners, istinjāʾ, wuḍūʾ, ghusl and the sunnahs of the fitrah.", sources: [src("145–158"), "Quran 9:108", "Quran 2:222", "Muslim 223", "Tirmidhi 2799", "Bukhari 142", "Abu Dawud 30", "Muslim 262", "Bukhari 5889"],
    blocks: [
      P("In Islam, purity is part of faith: “Purity is half of faith” (Muslim 223). “In it are men who love to purify themselves, and Allah loves those who purify themselves” (9:108). Prayer is not accepted without purity of body, clothes and place, which is why every book of fiqh and ḥadīth opens with a “Book of Purity”. Inner purity of heart and intention comes first, and outer cleanliness follows it."),
      L("Toilet manners", [
        "Do not take in anything with Allah’s name on it, or the names of angels or prophets; cover it first.",
        "Have what you need for istinjāʾ ready, and enter with shoes and head covered.",
        "Enter with the left foot, saying: “Allāhumma innī aʿūdhu bika mina-l-khubuthi wa-l-khabāʾith” (Bukhari 142).",
        "Leave with the right foot, saying “Ghufrānak” (Abu Dawud 30) and “Al-ḥamdu lillāhi-lladhī adhhaba ʿanni-l-adhā wa ʿāfānī.”",
        "Do not talk without need, and do not stay longer than necessary.",
        "Urinate sitting.",
        "Do not relieve yourself facing into the wind, in water, in graveyards, on paths, in places people rest, in cracks and holes, or under fruit trees.",
        "Do not face the qiblah or turn your back to it (Muslim 262).",
        "Do not look at the sky or at what comes out of you.",
      ]),
      L("Istinjāʾ: cleaning oneself", [
        "Cleaning with stone or similar after anything that breaks wuḍūʾ, except sleep and wind, is sunnah.",
        "If the impurity spreads beyond the size of a dirham, washing is obligatory.",
        "Do not use bones, dung, food, coal, glass, cloth or leaves, or anything useful, and do not use the right hand.",
        "Paper made for writing, especially paper with writing on it, may not be used. Paper made for the toilet is fine.",
        "Wash the hand first, then clean with the inside of the fingers, then wash the hands well to remove any trace and smell.",
      ]),
      L("The adab of wuḍūʾ", [
        "Its four obligations (Hanafi): washing the face; washing the arms with the elbows; wiping a quarter of the head; washing the feet with the ankles.",
        "Sit facing the qiblah, on a raised place so that water does not splash back.",
        "Do it yourself without help unless you have an excuse.",
        "Do not chat during wuḍūʾ; remember Allah and make duʿāʾ instead.",
        "Move your ring so water reaches beneath it.",
        "Take water into the mouth and nose with the right hand; clean the nose with the left.",
        "Make wuḍūʾ before the prayer time comes, so you are not rushed.",
        "Do not waste water.",
        "Join the intention in the heart with the words on the tongue, and say “Bismillāh” at the start.",
        "Afterwards, say the shahādah and the duʿāʾ, and pray two rakʿahs.",
      ]),
      L("Ghusl", [
        "Ghusl is obligatory after sexual discharge, intercourse, finding signs of discharge on waking, and at the end of menstruation and post-natal bleeding.",
        "It is sunnah for Friday, the two Eids, iḥrām and the day of ʿArafah.",
      ]),
      L("The sunnahs of the fitrah", [
        "Five are from the fitrah: circumcision, removing pubic hair, trimming the moustache, clipping the nails and plucking the armpits (Bukhari 5889).",
        "Using the miswāk, keeping hair tidy, and wearing pleasant scent are part of a Muslim’s personal cleanliness.",
        "“Allah is pure and loves purity; clean and loves cleanliness” (Tirmidhi 2799).",
      ]),
      L("Key takeaways", [
        "Cleanliness is faith, and prayer depends on it.",
        "The toilet, wuḍūʾ and ghusl all have their adab.",
        "Keep the sunnahs of the fitrah regularly.",
      ]),
      { type: "link", href: "/salah", label: "Prayer guide", text: "See wuḍūʾ step by step in the Hanafi prayer guide." },
    ] },

  { id: "social-road", group: R, title: "The rights of the road", summary: "Walking, greeting, guarding the eyes and keeping the street clean and safe.", sources: [src("158–167"), "Bukhari 2465", "Muslim 35", "Quran 25:63", "Quran 31:19", "Bukhari 2989"],
    blocks: [
      P("The road is where people meet and pass one another all day, and Shayṭān is busy there. When the companions said they had to sit in the streets, the Prophet ﷺ said: then give the road its right. They asked what its right was. He said: lowering the gaze, not causing harm, returning salām, enjoining good and forbidding evil (Bukhari 2465). The book builds the whole adab of the road on this."),
      L("How to walk", [
        "Set out with a good intention and the duʿāʾ for leaving home.",
        "Walk and stop on the right-hand side.",
        "Walk humbly. “The servants of the Most Merciful walk on the earth humbly” (25:63).",
        "Walk with dignity and at a moderate pace, and do not raise your voice (31:19).",
        "Look ahead as you walk; do not keep glancing all around.",
        "Smile at people. A smile is charity.",
        "Remember Allah as you go.",
      ]),
      L("The rights of the road", [
        "Never forget that the road has rights over you.",
        "Lower your gaze from non-maḥrams and from anything unlawful.",
        "Harm no one, here or anywhere.",
        "Greet the people you pass.",
        "Enjoin good and forbid evil.",
        "Guide the lost traveller.",
        "Help passers-by who need it. Helping someone with his mount or lifting his luggage is charity (Bukhari 2989).",
        "Respect people of virtue and the elderly.",
      ]),
      L("Keeping the road clean and safe", [
        "Never throw rubbish, peels, cigarette ends or papers onto the road.",
        "Never relieve yourself on the road.",
        "Do not carry anything that could harm or hurt people.",
        "Removing something harmful from the road is a branch of faith (Muslim 35).",
        "Use the road and its facilities properly, without putting your own benefit before others’.",
        "Obey the traffic rules. They are part of not harming people.",
      ]),
      L("Key takeaways", [
        "The road has rights: eyes lowered, no harm, salām, and good counsel.",
        "Walk with humility and dignity.",
        "A clean, safe street is an act of faith.",
      ]),
    ] },

  { id: "social-driving", group: R, title: "Vehicles and driving", summary: "A car is a blessing and a trust: how a Muslim buys, drives and parks.", sources: [src("167–174"), "Quran 43:12–14", "Quran 16:8", "Muslim 1342"],
    blocks: [
      P("Allah reminds us that He created means of transport for us: “and horses, mules and donkeys for you to ride and as adornment, and He creates what you do not know” (16:8). The scholars saw in the last words a reference to the vehicles of later ages. A car is a blessing, and how you use it is part of your religion."),
      L("Owning a vehicle", [
        "It must be bought with lawful money.",
        "Use it only for what the Sharīʿah permits.",
        "Make a good intention when buying it: to serve your family, earn a living and help people.",
        "See it as Allah’s blessing and thank Him for it.",
        "Look after it carefully, and keep it legally inspected and roadworthy.",
        "Do not give it to unqualified people or to children.",
      ]),
      L("On the road", [
        "Never forget the duʿāʾ for riding: “Subḥāna-lladhī sakhkhara lanā hādhā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā la-munqalibūn” (43:13–14, Muslim 1342).",
        "Remember Allah as you drive.",
        "Follow the traffic laws and keep to the speed limits. Breaking them puts lives at risk.",
        "Do not disturb or obstruct others.",
        "Use the horn as little as possible.",
        "Be courteous to other drivers and to pedestrians.",
        "Secure loads so they cannot harm anyone.",
      ]),
      L("Parking", [
        "Do not stop or park in prohibited places, blocking roads, gates or other people’s driveways.",
        "If you leave the car, lock it properly and secure everything.",
      ]),
      L("Key takeaways", [
        "Your vehicle is a blessing: say the duʿāʾ and thank Allah.",
        "Traffic rules protect lives, and keeping them is part of adab.",
        "Courtesy on the road is courtesy to Allah’s servants.",
      ]),
    ] },

  { id: "social-passenger", group: R, title: "The passenger and public transport", summary: "Buses, trains and planes: queueing, seats, cleanliness and thanks.", sources: [src("174–178"), "Quran 43:13–14", "Tirmidhi 1919"],
    blocks: [
      P("Public transport is a shared space, like someone else’s home or a public hall. The book gives passengers a set of simple manners that make every journey easier for everyone."),
      L("Getting on", [
        "Keep to the queue and boarding order.",
        "Make sure your shoes are clean.",
        "Greet the people inside.",
        "If you have an assigned seat, sit there. If not, take the first empty seat.",
        "Recite the duʿāʾ for riding.",
      ]),
      L("During the journey", [
        "Behave as if you are sitting in someone’s home or a public place.",
        "Keep things clean.",
        "Do no damage to the vehicle.",
        "Give your seat to those who deserve it: the elderly, the sick, pregnant women and people with children (Tirmidhi 1919).",
        "When it is crowded, make room for those getting on.",
        "Do not shout or talk loudly.",
      ]),
      L("Getting off", [
        "Thank the driver when you reach your stop, even though you paid.",
        "Say a parting salām to others, say “Bismillāh”, and step off with the right foot.",
      ]),
      L("Key takeaways", [
        "A bus or train is a shared home: keep it clean and quiet.",
        "Give up your seat to those who need it.",
        "Thank the driver.",
      ]),
    ] },

  { id: "social-phone", group: T, title: "Mobile phone manners", summary: "Buying, using and calling: the adab of the phone in a Muslim’s hand.", sources: [src("178–189"), "Muslim 5", "Bukhari 6245", "Quran 49:12"],
    blocks: [
      P("The mobile phone did not exist when the classical books were written, but the book shows that its adab comes from the same sources: guarding the tongue, privacy, asking permission and not harming people. A phone can be a means of great good or great harm."),
      L("The device itself", [
        "When you buy a phone, intend to use it for good things that benefit this world and the next.",
        "Buy what suits your need, not to show off.",
        "Do not put the name of Allah or verses of the Quran as your screen wallpaper, because the phone goes everywhere, including the bathroom.",
        "Do not use Quran verses, the adhān or dhikr as ringtones.",
        "Storing anything on it that Islam forbids you to hear or watch is ḥarām.",
        "Do not take someone else’s phone, call from it, or look inside it without permission.",
        "Never photograph someone or record their voice without their permission.",
        "Do not rush to give children phones; when you do, let them use them only for what they need, under supervision.",
      ]),
      L("In public", [
        "Switch your phone off or to silent in mosques, gatherings, receptions and lessons.",
        "Do not play with your phone in such places.",
        "Do not speak louder than necessary.",
        "Do not use music or noises as a ringtone that disturb people around you.",
        "Keep calls as short as you can.",
        "If someone you should honour arrives while you are on a call, excuse yourself from the call.",
      ]),
      L("Calling and messaging others", [
        "Check the number before you call or text.",
        "Consider whether the person may be resting, busy or praying before calling.",
        "If there is no answer, wait a while before calling again; do not call repeatedly.",
        "After three calls with no answer, stop, as with asking permission three times at a door (Bukhari 6245).",
        "The caller greets first. On answering, begin with a good word.",
        "If you need a long conversation, ask whether the other person has time.",
        "Do not eat or chew while on the phone.",
        "Do not disguise your voice or send fake messages to mock people.",
        "End the call with kind words and good wishes.",
        "Do not give out someone’s number without permission.",
        "Do not ring and hang up so that the other person pays to call you back.",
        "Return missed calls as soon as you can.",
        "Do not forward every message you receive (Muslim 5). Keep within adab and the Sharīʿah when writing messages.",
      ]),
      L("Key takeaways", [
        "The phone carries the same adab as the tongue and the door.",
        "Silence it in the mosque and in gatherings.",
        "Respect people’s time, privacy and images.",
      ]),
    ] },
];
