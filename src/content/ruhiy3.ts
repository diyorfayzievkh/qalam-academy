import type { Lesson } from "./library";
import { L, P } from "./ruhiy";

// Spiritual Tarbiyah, volume 3 ("Xulqlanish": taking on good character):
// explainer lessons on "Ruhiy tarbiya, 3-juz" by Shaykh Muhammad Sodik
// Muhammad Yusuf (Hilol-Nashr). Used with the rights holder's permission.
// A scholar should review before public release.

export const RUHIY3_BOOK = { title: "Ruhiy tarbiya, 3-juz" };

const src = (pages: string) => `${RUHIY3_BOOK.title}, pp. ${pages}`;
const NAME_NOTE = P("A word of care: Allah’s attributes are perfect and limitless, and a servant’s share is small and limited. Taking on a name’s character means reflecting it in a human way, never claiming it as Allah has it.");

export const RUHIY3_LESSONS: Lesson[] = [
  { id: "takhalluq", title: "Taking on good character (takhalluq)", summary: "Reflecting Allah’s beautiful names, and following the Prophet ﷺ.", sources: [src("1–14"), "Quran 7:180", "Bukhari 2736, Muslim 2677"],
    blocks: [
      P("The three volumes of Ruhiy tarbiya follow a path: purification (poklanish) removes the soul’s diseases, rebuilding (tiklanish) gives it the stations of the heart, and this third volume, xulqlanish, adorns it with good character. In spiritual training this means taking on the character of Allah’s beautiful names in a human measure, and following the Messenger ﷺ in doing so."),
      L("A delicate subject", [
        "The Shaykh calls this the most delicate chapter of the whole subject and asks the reader to be careful.",
        "Servants can be described with some of the same words as Allah, such as seeing, hearing, knowledge, generosity and forbearance. But the difference between them is the difference between the Creator and the created.",
        "Allah’s seeing has no limit; ours is narrow, bounded and needs light and eyes.",
        "The scholars studied the names to declare Allah free of anything unfitting: affirming what He affirmed for Himself, without likening Him to creation and without denying any of it.",
      ]),
      L("Why learn the names", [
        "“To Allah belong the most beautiful names, so call on Him by them” (7:180).",
        "Allah has ninety-nine names; whoever learns them (aḥṣāhā) will enter Paradise (Bukhari 2736, Muslim 2677). The scholars explain that this means memorising them, understanding them, and living by what they call for.",
        "Knowing that Allah is the Merciful makes you hope; knowing He is the All-Seeing makes you careful; knowing He is the Generous makes you generous.",
      ]),
      L("How the following lessons work", [
        "Each lesson takes one name: ar-Raḥīm, as-Salām, al-ʿAzīz, al-ʿAdl, al-Ḥalīm, al-Karīm, al-Ḥakīm, al-Barr and al-ʿAfuww.",
        "It explains the meaning of the name, the scholars’ definitions of the quality, and the servant’s share in it.",
        "Then the volume turns to the character of the Prophet ﷺ and to the rights we owe family, neighbours, society and all creation.",
      ]),
      L("Key takeaways", [
        "Good character is the fruit of a purified and rebuilt soul.",
        "We reflect Allah’s names in a small, human way, never claiming them.",
        "The Prophet ﷺ is the living example of how to do this.",
      ]),
    ] },

  { id: "rahim", title: "Ar-Raḥīm: mercy", summary: "Wanting good for others, even when it costs you.", sources: [src("14–29"), "Quran 21:107", "Quran 48:29", "Tirmidhi 1924", "Bukhari 6013", "Muslim 2752", "Bukhari 5997"],
    blocks: [
      P("Raḥmah carries the meanings of gentleness, tenderness and compassion; the Quran calls itself a mercy, and calls rain a mercy too. The book gathers definitions: al-Jurjānī says mercy is wanting to bring good to someone; Ibn al-Qayyim says it is a quality that makes you bring benefit to others even when it is hard for you."),
      L("Allah’s mercy", [
        "Allah divided mercy into a hundred parts and sent one of them down to earth. By that one part creatures are merciful to one another, even a mare lifting her hoof away from her foal (Muslim 2752).",
        "The other ninety-nine parts He kept for the Day of Judgment.",
      ]),
      L("The servant’s share", [
        "The Prophet ﷺ was sent only as a mercy to the worlds (21:107).",
        "The believers are “merciful among themselves” (48:29).",
        "“Be merciful to those on earth, and the One above the heavens will be merciful to you” (Tirmidhi 1924).",
        "“Whoever is not merciful to people, Allah is not merciful to him” (Bukhari 6013).",
        "When a man said he had ten children and had never kissed any of them, the Prophet ﷺ said: whoever does not show mercy is not shown mercy (Bukhari 5997).",
      ]),
      L("Mercy in action", [
        "To children: affection, play, patience and kisses.",
        "To the elderly: respect, service and patience.",
        "To the poor, orphans and the sick: help, visits and kind words.",
        "To animals: food, water, rest and no cruelty.",
        "To wrongdoers: wanting their guidance, while still opposing the wrong.",
      ]),
      L("Key takeaways", [
        "Mercy begins in a soft heart and shows in action.",
        "The merciful are shown mercy by the Most Merciful.",
        "Real mercy brings benefit even when it costs you.",
      ]),
      NAME_NOTE,
    ] },

  { id: "salam", title: "As-Salām: peace", summary: "Entering Islam completely, and spreading peace.", sources: [src("29–41"), "Quran 59:23", "Quran 2:208", "Quran 25:63", "Bukhari 10", "Muslim 54"],
    blocks: [
      P("Salām means safety, peace and well-being. As-Salām is one of Allah’s names (59:23): He is free of every defect, and He is the source of all peace. The book explains that the word silm means both peace and Islam, submission to Allah. Islam is a religion of peace in its very name."),
      L("Entering Islam completely", [
        "“O you who believe, enter into Islam (as-silm) completely” (2:208).",
        "This means submitting with tongue, heart and limbs together, not only in words or only in rituals.",
        "The verse also carries the meaning of entering peace completely. Living Islam fully brings peace to the person and to society.",
      ]),
      L("The servant’s share", [
        "“The Muslim is the one from whose tongue and hand the Muslims are safe” (Bukhari 10).",
        "“You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you something that, if you do it, you will love one another? Spread salām among you” (Muslim 54).",
        "The servants of the Most Merciful, when the ignorant address them harshly, reply with words of peace (25:63).",
      ]),
      L("Living it", [
        "Greet everyone you meet with salām, known or unknown.",
        "Let no one fear your tongue or your hands.",
        "Be a peacemaker between people who have fallen out.",
        "Keep your heart at peace with Allah’s decree.",
      ]),
      L("Key takeaways", [
        "Islam and peace share one root.",
        "A Muslim is someone others are safe from.",
        "Spreading salām spreads love.",
      ]),
      NAME_NOTE,
      { type: "link", href: "/learn/akhlaq/salam", label: "Greeting with salām", text: "Practise with the Akhlaq lesson on salām." },
    ] },

  { id: "aziz", title: "Al-ʿAzīz: dignity and honour", summary: "True honour belongs to Allah, and He gives it to whom He wills.", sources: [src("41–67"), "Quran 3:26", "Quran 63:8", "Quran 35:10", "Quran 5:54", "Muslim 2588"],
    blocks: [
      P("ʿIzzah means strength, power and being unconquerable. Al-Rāghib defined it as the state that keeps a person from being overcome. The Quran mentions Allah’s might in nearly a hundred verses. Al-ʿAzīz is the Mighty, whom nothing can overpower."),
      L("Where honour comes from", [
        "“Whoever wants honour, all honour belongs to Allah” (35:10).",
        "Allah honours whom He wills and humbles whom He wills (3:26).",
        "“Honour belongs to Allah, His Messenger and the believers, but the hypocrites do not know” (63:8).",
        "People seek honour in wealth, status, tribe and power, but real, lasting honour comes only through obedience to Allah.",
      ]),
      L("The servant’s share", [
        "Dignity: not humiliating yourself before people for worldly things.",
        "Humility before Allah and the believers, with strength against falsehood: “humble toward the believers, mighty against the disbelievers” (5:54).",
        "Humility does not lower honour: no one humbles himself for Allah except that Allah raises him (Muslim 2588).",
        "Self-respect: not begging, not flattering, not selling your religion.",
      ]),
      L("Honour versus arrogance", [
        "Honour is strength in the truth; arrogance is rejecting the truth and looking down on people.",
        "The honourable person is firm in principle and gentle with people.",
        "The arrogant person is harsh with people and weak before his own desires.",
      ]),
      L("Key takeaways", [
        "All honour belongs to Allah, and He gives it through obedience.",
        "Be dignified before people and humble before Allah.",
        "Humility raises you; it never lowers you.",
      ]),
      NAME_NOTE,
    ] },

  { id: "adl", title: "Al-ʿAdl: justice", summary: "Giving every right its due, as Allah’s Book commands.", sources: [src("67–102"), "Quran 16:90", "Quran 4:135", "Quran 5:8", "Quran 4:58", "Muslim 1827", "Bukhari 2587"],
    blocks: [
      P("The book defines justice as giving the rights that are due and giving each person their right equally. Al-Jurjānī called it the middle point between falling short and going too far. Allah is al-ʿAdl, the Just: He wrongs no one even an atom’s weight."),
      L("Why it matters", [
        "“Allah commands justice, excellence and giving to relatives” (16:90).",
        "“Stand firm for justice as witnesses for Allah, even against yourselves, your parents or your relatives” (4:135).",
        "“Do not let hatred of a people lead you to be unjust. Be just: that is nearer to taqwā” (5:8).",
        "“Allah commands you to return trusts to their owners, and when you judge between people to judge with justice” (4:58).",
        "The just will be on pulpits of light near Allah: those who are just in their judgments, with their families, and in what they are in charge of (Muslim 1827).",
      ]),
      L("Two kinds of justice", [
        "Absolute justice, recognised by sound reason and never abrogated: doing good to those who do good, and not harming those who do no harm.",
        "Justice known through the Sharīʿah, such as its laws of retribution and punishment.",
      ]),
      L("Justice in everyday life", [
        "With yourself: not wronging your soul with sins.",
        "With your children: treating them equally. “Fear Allah and be just between your children” (Bukhari 2587).",
        "With your spouse, employees and anyone under your care.",
        "In speech: speaking fairly about people, even those you dislike.",
        "In trade: honest weights, measures and contracts.",
      ]),
      L("Living examples", [
        "The chapter tells stories of the justice of ʿUmar (ra), including the courts he held during the Hajj season where anyone could complain against his governors.",
        "It also tells of ʿAlī (ra) and other companions standing before judges like ordinary people.",
      ]),
      L("Key takeaways", [
        "Justice is giving every right its due.",
        "It applies even against yourself and those you love, and even toward those you dislike.",
        "The just are closest to Allah on the Day of Judgment.",
      ]),
      NAME_NOTE,
    ] },

  { id: "halim", title: "Al-Ḥalīm: forbearance", summary: "Holding back when anger stirs, even when you could retaliate.", sources: [src("95–118"), "Quran 3:134", "Muslim 17", "Bukhari 3149"],
    blocks: [
      P("Ḥilm means acting calmly and wisely, and not repaying harm with harm. Al-Rāghib defined it as holding the self back when anger rises. Al-Jāḥiẓ said it is not taking revenge when anger stirs, even though you are able to. Allah is al-Ḥalīm: He sees His servants’ sins and does not rush to punish them, giving them time to repent."),
      L("What forbearance is", [
        "Ibn Ḥibbān said forbearance can be inborn, acquired, or both.",
        "It begins with seeing clearly, then resolve, then patience, then contentment.",
        "It is not weakness. It is strength under control: the forbearing person could retaliate and chooses not to.",
      ]),
      L("Two kinds of forbearance", [
        "With the trials Allah decrees: not panicking or objecting.",
        "With what comes from people and other creatures: insults, ignorance and harm.",
      ]),
      L("The Prophet’s ﷺ example", [
        "He told a companion: you have two qualities Allah loves, forbearance and deliberation (Muslim 17).",
        "A bedouin once pulled his cloak so hard it left a mark on his neck and demanded money. The Prophet ﷺ turned to him, smiled, and ordered that he be given something (Bukhari 3149).",
        "Allah praises “those who restrain anger and pardon people” (3:134).",
      ]),
      L("How to build it", [
        "Remember Allah’s forbearance with your own sins.",
        "Delay your response: anger fades with time.",
        "See the ignorant person’s harm as a sign of their weakness, not your loss.",
        "Train in small things: traffic, queues and family disagreements.",
      ]),
      L("Key takeaways", [
        "Forbearance is strength in restraint.",
        "It is one of two qualities Allah loves.",
        "Treat people with the forbearance you hope Allah shows you.",
      ]),
      NAME_NOTE,
      { type: "link", href: "/learn/ruhiy/ghadab", label: "Misplaced anger", text: "Volume 1 covers anger and its cure." },
    ] },

  { id: "karim", title: "Al-Karīm: generosity", summary: "Giving freely, before being asked, with nothing wanted back.", sources: [src("118–139"), "Quran 59:9", "Bukhari 6", "Muslim 2312"],
    blocks: [
      P("Karam points to nobility in something or in one of its traits; in character it includes overlooking the faults of a wrongdoer. The book gathers definitions: spending freely on great and beneficial things; doing good before being asked; giving benefit with no ulterior motive. Allah is al-Karīm: He gives without being asked, gives more than is deserved, and forgives."),
      L("Three faces of generosity (al-Kafawī)", [
        "With wealth: called jūd, open-handedness.",
        "By not harming someone when you are able to: called ʿafw, pardon.",
        "By giving of yourself in hardship: called courage.",
      ]),
      L("What true generosity is", [
        "Someone who gives only to gain something or avoid blame is not truly generous.",
        "Giving before being asked is higher than giving after being asked.",
        "Giving what you love is higher than giving what you don’t need (3:92).",
        "The highest level is īthār: preferring others over yourself even when you are in need, as the Anṣār did for the Muhājirūn (59:9).",
      ]),
      L("The Prophet’s ﷺ generosity", [
        "He was the most generous of people, and most generous of all in Ramadan, more generous than the blowing wind (Bukhari 6).",
        "A man asked him for a flock of sheep filling a valley and he gave it. The man went back to his people saying: Muhammad gives like one who does not fear poverty (Muslim 2312).",
        "On the day Makkah was conquered, he pardoned the people who had persecuted him for years.",
      ]),
      L("How to build it", [
        "Give something regularly, even if small.",
        "Give to family first, then neighbours and the needy.",
        "Be generous with time, knowledge, smiles and praise, not only money.",
        "Give quietly, and never remind people of what you gave.",
      ]),
      L("Key takeaways", [
        "Generosity is giving freely, before being asked, for Allah.",
        "It covers wealth, pardon and courage.",
        "Generosity never makes a person poorer.",
      ]),
      NAME_NOTE,
    ] },

  { id: "hakim", title: "Al-Ḥakīm: wisdom", summary: "Knowing the best things with the best knowledge, and acting on it.", sources: [src("133–158"), "Quran 2:269", "Quran 16:125", "Bukhari 73"],
    blocks: [
      P("Ḥikmah comes from a root meaning to restrain for the sake of putting right; the bridle that stops a horse shares the same root. Wisdom holds a person back from ignorance and foolishness. Allah is al-Ḥakīm, the All-Wise: everything He creates and commands is in its right place, for a purpose."),
      L("Definitions the book gathers", [
        "Imam al-Ghazālī: knowing the best of things through the best of knowledge.",
        "The exegetes: knowing the truth because it is true, and knowing good in order to act on it.",
        "The people of the spiritual path: knowing the afflictions of the soul and of Shayṭān, and the disciplines that heal them.",
        "It is the middle way between cunning and foolishness.",
      ]),
      L("Why it matters", [
        "“He gives wisdom to whom He wills, and whoever is given wisdom has been given much good” (2:269).",
        "“Call to the way of your Lord with wisdom and good counsel” (16:125).",
        "One of the two people worth envying is a person Allah gave wisdom, who judges by it and teaches it (Bukhari 73).",
      ]),
      L("Signs of a wise person", [
        "Puts things in their right place: speaks when speech helps, stays silent when silence helps.",
        "Looks at consequences before acting.",
        "Learns from experience, his own and others’.",
        "Is gentle in correcting others and chooses the right time and words.",
      ]),
      L("How to grow in wisdom", [
        "Study the Quran and Sunnah: they are the source of wisdom.",
        "Sit with wise, experienced people and listen.",
        "Think before you speak or act, and reflect afterwards.",
        "Ask Allah for it.",
      ]),
      L("Key takeaways", [
        "Wisdom is knowledge put in its right place and acted on.",
        "Whoever is given wisdom has been given much good.",
        "Wisdom shows most in how you speak and correct others.",
      ]),
      NAME_NOTE,
    ] },

  { id: "barr", title: "Al-Barr: goodness", summary: "Goodness in giving, in words and in deeds.", sources: [src("158–184"), "Quran 2:177", "Quran 3:92", "Muslim 2553"],
    blocks: [
      P("Birr is every kind of goodness, of this world and the Hereafter. Allah is al-Barr, the Source of all goodness, kind to His servants. The book divides the goodness people show one another into kinds."),
      L("What goodness is", [
        "“Righteousness is not turning your faces east or west. Righteousness is believing in Allah… giving wealth, despite loving it, to relatives, orphans, the needy… establishing prayer, giving zakāt, keeping promises, and being patient in hardship” (2:177).",
        "“You will not attain goodness until you spend from what you love” (3:92).",
        "“Righteousness is good character, and sin is what wavers in your heart and you dislike people to know of” (Muslim 2553).",
      ]),
      L("The kinds of goodness", [
        "Ṣilah (giving): spending wealth on others without expecting a return. It comes from a generous, open soul.",
        "Goodness in words: beautiful speech and good news. If overdone it turns into flattery, so it needs balance.",
        "Goodness in deeds: practical kindness and help.",
        "Birr al-wālidayn, goodness to parents, is the best-known form, and the Quran links it to worshipping Allah.",
      ]),
      L("How to live it", [
        "Do one act of goodness each day that no one asked for.",
        "Speak kindly, and give good news.",
        "Spend from what you love, not only from what you don’t need.",
        "Check your heart: if an act makes you uneasy, leave it.",
      ]),
      L("Key takeaways", [
        "Goodness is faith, worship and character together.",
        "It is reached by giving what you love.",
        "Good character is the heart of goodness.",
      ]),
      NAME_NOTE,
    ] },

  { id: "afuww", title: "Al-ʿAfuww: pardoning", summary: "Letting go of a deserved penalty when you have the power.", sources: [src("184–202"), "Quran 3:134", "Quran 24:22", "Quran 42:40", "Muslim 2588", "Tirmidhi 3513"],
    blocks: [
      P("ʿAfw means to leave, erase and wipe away. Al-Kafawī: it is not harming when you are able to; whoever has the right to punish and lets it go has pardoned. Allah is al-ʿAfuww: He wipes sins away as if they never were."),
      L("Pardon (ʿafw) and forgiveness (maghfirah)", [
        "Maghfirah covers the sin, removes the punishment and also grants reward. Only Allah can do this.",
        "ʿAfw removes blame and penalty but does not itself mean reward. People can pardon one another.",
        "Some scholars note that ʿafw erases the sin completely, while maghfirah covers it.",
      ]),
      L("Why it matters", [
        "“Let them pardon and overlook. Do you not love that Allah should forgive you?” (24:22). This was revealed about Abū Bakr (ra) when he stopped supporting a relative who had joined in slandering ʿĀʾishah (ra); he resumed his support.",
        "“Whoever pardons and makes peace, his reward is with Allah” (42:40).",
        "No one pardons except that Allah increases him in honour (Muslim 2588).",
        "Allah praises “those who restrain anger and pardon people” (3:134).",
      ]),
      L("The Laylat al-Qadr duʿāʾ", [
        "ʿĀʾishah (ra) asked what to say if she found Laylat al-Qadr. He ﷺ taught her: “Allāhumma innaka ʿafuwwun tuḥibbu-l-ʿafwa faʿfu ʿannī” (Tirmidhi 3513).",
        "O Allah, You are the Pardoner and You love to pardon, so pardon me.",
        "If Allah loves to pardon, His servants should love to pardon too.",
      ]),
      L("Pardoning wisely", [
        "Pardon is best when you have power to take your right.",
        "It does not mean allowing ongoing harm, or giving up legal rights in serious matters if pardon would encourage more wrong.",
        "It starts in the heart: letting go of the grudge.",
      ]),
      L("Key takeaways", [
        "Pardon others as you want Allah to pardon you.",
        "Pardoning increases honour; it never lowers it.",
        "Learn the Laylat al-Qadr duʿāʾ and live its meaning.",
      ]),
      NAME_NOTE,
      { type: "link", href: "/mizan", label: "Laylat al-Qadr duʿāʾ", text: "Find it with its reward in Mizan." },
    ] },

  { id: "prophet-character", title: "The character of the Prophet ﷺ", summary: "The most complete example of good character.", sources: [src("202–266"), "Quran 68:4", "Quran 33:21", "Quran 9:128", "Muslim 746", "Bukhari 3559", "Bukhari 6038", "Bukhari 3560", "Muslim 2328", "Bukhari 5409", "Bukhari 709", "Bukhari 6304, Muslim 199"],
    blocks: [
      P("The book teaches that the servant most perfectly adorned with good character is the Messenger of Allah ﷺ, so a Muslim should put all his effort into taking on his manners. Following him is the easiest road to perfection, but it is not possible without remembering Allah often."),
      L("What the Quran says of him", [
        "“You are of a great moral character” (68:4).",
        "“In the Messenger of Allah you have an excellent example, for whoever hopes in Allah and the Last Day and remembers Allah often” (33:21).",
        "“There has come to you a Messenger from among yourselves. Your hardship grieves him; he cares about you; to the believers he is kind and merciful” (9:128).",
        "When ʿĀʾishah (ra) was asked about his character, she said: his character was the Quran (Muslim 746).",
      ]),
      L("His character in daily life", [
        "He was never obscene or vulgar, and he said: the best of you are those with the best character (Bukhari 3559).",
        "Anas (ra) served him for ten years and he never once said “uff”, nor “why did you do that?” (Bukhari 6038).",
        "When given a choice between two things he chose the easier, as long as it was not sinful, and he never took revenge for himself, only when Allah’s limits were violated (Bukhari 3560).",
        "He never struck a servant or a woman with his hand (Muslim 2328).",
        "He never criticised food: if he liked it he ate it, and if not he left it (Bukhari 5409).",
        "He mended his own clothes, helped at home, and served his family.",
      ]),
      L("His mercy to his ummah", [
        "Every prophet had one duʿāʾ certain to be answered. He saved his for intercession for his ummah on the Day of Judgment (Bukhari 6304, Muslim 199).",
        "He wept for his ummah, and would shorten prayers when he heard a baby crying, out of mercy for the mother.",
        "He forgave the people of Makkah and Ṭāʾif who had harmed him.",
      ]),
      L("What the chapter covers", [
        "His appearance, fragrance, speech, laughter and sleep.",
        "His compassion, generosity, courage and humility.",
        "His manners in eating, drinking, dressing and with guests.",
      ]),
      L("How to follow him", [
        "Learn his Seerah and his daily sunnahs.",
        "Pick one of his habits each week and practise it.",
        "Send ṣalawāt on him often.",
        "Love him more than anyone, as faith requires.",
      ]),
      L("Key takeaways", [
        "His character was the Quran in action.",
        "He is the best example for everyone who hopes in Allah.",
        "Good character is the heaviest thing on the scale, and he lived it perfectly.",
      ]),
      { type: "link", href: "/learn/seerah/timeline", label: "The life of the Prophet ﷺ", text: "See his life in the Seerah world." },
    ] },

  { id: "fruits", title: "The fruits of purification, and Allah’s right", summary: "Where purification, rebuilding and character lead.", sources: [src("258–272")],
    blocks: [
      P("The book draws the three volumes together. A soul that has passed through purification (poklanish), rebuilding (tiklanish) and taking on character (xulqlanish) reaches its goal. Its faults are gone, it has gained what it needs, and it follows the Prophet ﷺ in everything."),
      L("The three stages, summed up", [
        "Purification (Volume 1): removing the diseases of the heart and tongue, such as showing off, envy, arrogance, greed, anger and love of the world.",
        "Rebuilding (Volume 2): building the stations of the heart, such as sincerity, truthfulness, trust, love, fear and hope, patience, gratitude and repentance.",
        "Taking on character (Volume 3): reflecting Allah’s beautiful names in a human way, following the Prophet ﷺ.",
      ]),
      L("The fruits", [
        "Fine manners in every relationship, with the Creator and with creation.",
        "Freedom from the stains of the tongue, the heart, character and body.",
        "Excellence in obligations, sunnahs and good manners alike.",
        "A peaceful heart, content with Allah and pleasing to Him.",
      ]),
      L("Allah’s right comes first", [
        "The greatest right of all is Allah’s: to worship Him alone, doing what He commands and leaving what He forbids.",
        "All other rights, those of parents, family, neighbours and society, flow from His right, because He is the One who commanded them.",
        "The rest of the volume sets out these rights one by one.",
      ]),
      L("Key takeaways", [
        "Purify, rebuild, then adorn. That is the path of spiritual training.",
        "Its fruit is good manners with Allah and with everyone.",
        "Every right begins with Allah’s right.",
      ]),
    ] },

  { id: "muslim-rights", title: "The rights of a Muslim", summary: "The rights every Muslim has over another.", sources: [src("272–318"), "Muslim 2162", "Bukhari 13", "Bukhari 2442", "Muslim 2564"],
    blocks: [
      P("Islam builds a society on rights and duties. The book introduces the rights Muslims owe one another with the hadith of six rights (Muslim 2162). Each is simple, and together they keep hearts connected."),
      L("The six rights", [
        "When you meet him, greet him with salām.",
        "When he invites you, accept.",
        "When he asks for advice, advise him sincerely.",
        "When he sneezes and praises Allah, say “Yarḥamuka-llāh”.",
        "When he is ill, visit him.",
        "When he dies, follow his funeral.",
      ]),
      L("Rights beyond the six", [
        "Love for him what you love for yourself (Bukhari 13).",
        "Do not wrong him or abandon him; whoever relieves a Muslim’s hardship, Allah relieves his hardship on the Day of Judgment (Bukhari 2442).",
        "Cover his faults, and Allah will cover yours.",
        "His blood, wealth and honour are sacred to you (Muslim 2564).",
        "Do not envy, cheat, hate or turn your back on him.",
      ]),
      L("Why these rights matter", [
        "They turn individuals into a brotherhood.",
        "They make the ummah like one body: when one part hurts, the whole body feels it.",
        "Simple acts, like a greeting or a visit, carry great reward.",
      ]),
      L("How to live them", [
        "Greet first, and greet everyone.",
        "Keep a list of sick people you know and visit or call them.",
        "Attend funerals when you can.",
        "Give honest, kind advice when asked.",
      ]),
      L("Key takeaways", [
        "Six simple rights hold the community together.",
        "Love for your brother what you love for yourself.",
        "A Muslim’s blood, wealth and honour are sacred.",
      ]),
    ] },

  { id: "family", title: "Parents and children", summary: "Rights in both directions.", sources: [src("318–340"), "Quran 17:23–24", "Quran 31:14–15", "Quran 46:15", "Bukhari 5971", "Bukhari 5976", "Bukhari 893", "Bukhari 2587"],
    blocks: [
      P("The book says no system of upbringing comes close to Islam in honouring parents. It also teaches that rights in a family flow both ways: children owe their parents, and parents owe their children."),
      L("The rights of parents", [
        "“Your Lord has decreed that you worship none but Him, and be good to parents. If one or both reach old age with you, do not say to them ‘uff’ or scold them, but speak to them nobly. Lower to them the wing of humility out of mercy” (17:23–24).",
        "Kind treatment, sweet words, tenderness and constant respect.",
        "Obedience in everything that does not go against Allah. Even if they push you to shirk, do not obey in that, but still keep company with them kindly in this world (31:15).",
        "The mother’s share is greater: asked who most deserves good companionship, the Prophet ﷺ said “your mother” three times, then “your father” (Bukhari 5971). The Quran mentions her carrying and nursing (31:14, 46:15).",
        "Disobeying parents is among the major sins (Bukhari 5976).",
      ]),
      L("The rights of children", [
        "A clear, pure lineage, through lawful marriage.",
        "A good mother and father: Islam cares for a child before birth, when a spouse is chosen for religion, character and manners.",
        "A good name, care, provision and love.",
        "Education in faith and manners: “Each of you is a shepherd and responsible for his flock” (Bukhari 893).",
        "Fairness between siblings: “Fear Allah and be just between your children” (Bukhari 2587).",
        "Teaching prayer from age seven, gently and consistently.",
      ]),
      L("How to honour parents", [
        "Visit or call them often, and serve them yourself.",
        "Never raise your voice or show irritation.",
        "Pray for them: “Rabbi-rḥamhumā kamā rabbayānī ṣaghīrā” (17:24).",
        "After they die: pray for them, give charity for them, keep their promises, and honour their friends.",
      ]),
      L("Key takeaways", [
        "Kindness to parents comes right after worshipping Allah.",
        "Parents are shepherds, responsible for raising their children well.",
        "Family rights run both ways.",
      ]),
      { type: "link", href: "/learn/akhlaq/parents", label: "Kindness to parents", text: "Practise with the Akhlaq lesson and its duʿāʾ for parents." },
    ] },

  { id: "kin-neighbours", title: "Relatives and neighbours", summary: "Keeping family ties, and the neighbour’s great right.", sources: [src("340–352"), "Quran 4:36", "Bukhari 6014", "Bukhari 6016", "Bukhari 6019", "Muslim 2625", "Bukhari 5986", "Bukhari 5984", "Bukhari 5991"],
    blocks: [
      P("Allah commands kindness to parents, relatives, orphans, the needy, the near neighbour, the distant neighbour, the companion at your side and the traveller (4:36). The book notes the scholars’ reading: the near neighbour is one who is also a relative; the distant neighbour is one who is not. Both have rights."),
      L("Keeping family ties (ṣilat al-raḥim)", [
        "Whoever wants his provision expanded and his life blessed, let him keep family ties (Bukhari 5986).",
        "The one who cuts family ties will not enter Paradise (Bukhari 5984).",
        "The one who truly keeps ties is not the one who repays visits, but the one who reconnects when others cut him off (Bukhari 5991).",
        "Ways to keep ties: visits, calls, gifts, help in need, and duʿāʾ.",
      ]),
      L("The neighbour’s right", [
        "Jibrīl kept urging the Prophet ﷺ about the neighbour until he thought the neighbour would be made an heir (Bukhari 6014).",
        "By Allah, he does not believe, whose neighbour is not safe from his harm (Bukhari 6016).",
        "Whoever believes in Allah and the Last Day, let him honour his neighbour (Bukhari 6019).",
        "When you cook a stew, add water and share some with your neighbours (Muslim 2625).",
      ]),
      L("What the neighbour is owed", [
        "Not harming them with noise, smells, parking or rubbish.",
        "Greeting them, visiting them when ill, and congratulating or consoling them.",
        "Sharing food and gifts, especially with the nearest door.",
        "Guarding their home and honour when they are away.",
        "Bearing their mistakes patiently.",
      ]),
      L("Why it matters", [
        "Kindness to neighbours strengthens human ties and makes society strong.",
        "A street of good neighbours is a safe, warm community.",
      ]),
      L("Key takeaways", [
        "Keeping family ties brings blessing in life and provision.",
        "The neighbour’s right is so great Jibrīl kept stressing it.",
        "Start with the nearest door: a greeting, a plate of food.",
      ]),
    ] },

  { id: "spouses", title: "Husband and wife", summary: "The most sacred human relationship, with rights on both sides.", sources: [src("352–396"), "Quran 30:21", "Quran 4:19", "Quran 2:228", "Tirmidhi 3895", "Muslim 1468", "Muslim 1218", "Bukhari 676"],
    blocks: [
      P("The book calls marriage the most sacred human relationship, and stresses that it must be built on knowledge: who the husband is and what he owes, who the wife is and what she owes, and how they treat each other. The Quran, the Sunnah and the scholars answer all of these."),
      L("The purpose of marriage", [
        "“Among His signs is that He created for you spouses from yourselves, so that you find tranquillity in them, and He placed between you affection and mercy” (30:21).",
        "Tranquillity, affection and mercy are the three pillars of the home.",
        "“Women have rights similar to those over them, in kindness” (2:228).",
      ]),
      L("The wife’s rights", [
        "Her mahr, given willingly.",
        "Maintenance: food, clothing and housing, according to the husband’s means.",
        "Kind treatment: “Live with them in kindness” (4:19).",
        "Respect, protection, time, and being taught her religion.",
        "In his Farewell Sermon the Prophet ﷺ said: fear Allah regarding women (Muslim 1218).",
      ]),
      L("The husband’s rights", [
        "Respect and cooperation in running the home.",
        "Guarding his home, wealth and honour.",
        "Her support in good, and her consultation and companionship.",
      ]),
      L("The Prophet’s ﷺ example at home", [
        "“The best of you is the best to his family, and I am the best of you to my family” (Tirmidhi 3895).",
        "He helped with housework, and when the prayer came he went out to pray (Bukhari 676).",
        "“A believing man should not hate a believing woman: if he dislikes one of her traits, he will be pleased with another” (Muslim 1468).",
      ]),
      L("Building a strong marriage", [
        "Know the rights you owe before the rights you are owed.",
        "Speak gently, thank each other, and overlook small faults.",
        "Resolve disagreements with consultation, not anger.",
        "Pray together and learn together.",
      ]),
      L("Key takeaways", [
        "Marriage is built on tranquillity, affection and mercy.",
        "Both spouses have rights, fulfilled with kindness.",
        "The best person is the best to his family.",
      ]),
    ] },

  { id: "friendship", title: "Brotherhood and friendship", summary: "The eight rights of a true friend.", sources: [src("396–422"), "Abu Dawud 4833", "Bukhari 2101", "Muslim 2566", "Quran 43:67"],
    blocks: [
      P("Every relationship has rights, and the scholars of spiritual training counted eight rights of brotherhood and friendship for Allah’s sake. A friend shapes who you become, so choosing friends and treating them well is part of the religion."),
      L("Why friendship matters", [
        "“A person is upon the religion of his close friend, so let each of you look at whom he befriends” (Abu Dawud 4833).",
        "A good companion is like a perfume seller: you gain something good from him either way. A bad companion is like a blacksmith’s bellows (Bukhari 2101).",
        "On the Day of Judgment, Allah will say: where are those who loved each other for My sake? Today I shade them in My shade (Muslim 2566).",
        "“Close friends will be enemies to one another on that Day, except the righteous” (43:67).",
      ]),
      L("1. The right in wealth, in three levels", [
        "Treating the friend like your household: giving him from what you have spare, before he has to ask.",
        "Treating him like yourself: making him a partner in your wealth.",
        "The highest: putting his need before your own.",
      ]),
      L("The other seven rights", [
        "Helping him with your own hands and time when he needs it.",
        "Guarding your tongue about him: not mentioning his faults or secrets.",
        "Speaking well of him, praising his good, and passing on kind words said about him.",
        "Forgiving his slips and mistakes.",
        "Praying for him in his life and after his death, as for yourself.",
        "Staying loyal and keeping the friendship, including with his family after he dies.",
        "Not burdening him: making things easy, not demanding too much.",
      ]),
      L("Choosing friends", [
        "Look for religion, good character and sound mind.",
        "Avoid those who make sin easy or speak badly of others.",
        "Be the friend you want to have.",
      ]),
      L("Key takeaways", [
        "You become like your friends, so choose well.",
        "Friendship for Allah has eight rights, from wealth to duʿāʾ.",
        "Those who love for Allah’s sake will be shaded on the Day of Judgment.",
      ]),
    ] },

  { id: "society", title: "Other faiths, and honest work", summary: "Dealing justly with all people, and working with excellence.", sources: [src("422–434"), "Quran 42:13", "Quran 60:8", "Quran 2:256", "Quran 29:46", "Bukhari 3166", "Muslim 102", "Bukhari 2072"],
    blocks: [
      P("A Muslim’s relations with people of other faiths are also built on his religion. The book recalls that all revealed religions have one origin: Allah ordained for us what He enjoined on Nūḥ, Ibrāhīm, Mūsā and ʿĪsā, to establish the religion and not split over it (42:13). Islam also asks the believer to be an honest, excellent worker who benefits society."),
      L("Dealing with people of other faiths", [
        "“Allah does not forbid you from being kind and just to those who have not fought you over religion or driven you from your homes” (60:8).",
        "“There is no compulsion in religion” (2:256).",
        "“Argue with the People of the Book only in the best way” (29:46).",
        "Whoever kills a person under a covenant of protection will not smell the fragrance of Paradise (Bukhari 3166).",
        "A Muslim keeps his word, is honest in trade, and treats neighbours and colleagues well whatever their faith.",
      ]),
      L("Work as worship", [
        "A believer tries to be the best worker, farmer, engineer, doctor or teacher he can be.",
        "Allah loves that when one of you does a job, he does it well (cited by the book from al-Bayhaqī).",
        "No one has eaten better food than what he earned with his own hands; Dāwūd (as) ate from the work of his hands (Bukhari 2072).",
      ]),
      L("Honesty at work", [
        "“Whoever cheats is not one of us” (Muslim 102).",
        "No bribery, false claims, wasted hours or misuse of the employer’s property.",
        "Keep contracts and deadlines, and give full measure.",
      ]),
      L("Key takeaways", [
        "Kindness and justice toward all peaceful people are part of Islam.",
        "Excellent, honest work is worship.",
        "A Muslim’s conduct is the best invitation to Islam.",
      ]),
    ] },

  { id: "creation", title: "Animals, plants and the natural world", summary: "Creation is a trust, made to serve us.", sources: [src("434–468"), "Quran 6:38", "Quran 31:20", "Quran 7:31", "Quran 30:41", "Bukhari 2365", "Bukhari 2363", "Bukhari 2320", "Muslim 1955", "al-Adab al-Mufrad 479"],
    blocks: [
      P("Islam calls people to cause no harm to animals and to be merciful to them. The book points out that the Quran calls every kind of creature a community (ummah) like ours (6:38). The whole natural world is a trust from Allah: made to serve us, but not ours to waste or spoil."),
      L("Mercy to animals", [
        "A woman entered the Fire because of a cat she locked up, neither feeding it nor letting it eat from the earth (Bukhari 2365).",
        "A man who gave water to a thirsty dog was forgiven. The companions asked whether there is reward in animals; he ﷺ said: there is reward in every living being (Bukhari 2363).",
        "Allah has prescribed excellence in everything: when you slaughter, slaughter well; sharpen the blade and spare the animal suffering (Muslim 1955).",
        "Do not overload animals, hit them on the face, or use them for target practice.",
      ]),
      L("Plants and trees", [
        "Whatever a person, bird or animal eats from a tree you planted is charity for you (Bukhari 2320).",
        "Planting is rewarded even if the world is ending: if the Hour comes and you have a sapling in your hand, plant it.",
        "Trees are not to be cut needlessly, even in war.",
      ]),
      L("The earth and its resources", [
        "Allah made what is in the heavens and the earth subject to us (31:20), as a blessing to be used with gratitude.",
        "“Eat and drink, but do not waste” (7:31).",
        "“Corruption has appeared on land and sea because of what people’s hands have earned” (30:41).",
        "Even the non-living world has rights: not to be polluted, wasted or destroyed.",
      ]),
      L("How to live it", [
        "Feed birds and strays, and give animals water.",
        "Plant a tree or keep plants.",
        "Waste less: food, water and electricity.",
        "Teach children to be gentle with animals.",
      ]),
      L("Key takeaways", [
        "Animals are communities like ours, owed mercy.",
        "Planting is charity that keeps on giving.",
        "The earth is a trust; using it with gratitude and without waste is worship.",
      ]),
    ] },
];

export const RUHIY3_QUIZ = {
  id: "ruhiy-3", title: "Spiritual Tarbiyah 3", sub: "Ruhiy tarbiya, volume 3", icon: "learn" as const,
  learn: ["Questions are based on the Spiritual Tarbiyah lessons for volume 3 of Ruhiy tarbiya by Shaykh Muhammad Sodik Muhammad Yusuf."],
  questions: [
    { q: "In spiritual training, what does “takhalluq” (xulqlanish) mean?", options: ["Memorising the names of Allah", "Taking on the character of Allah’s names in a human way, following the Prophet ﷺ", "Claiming Allah’s attributes", "Learning Arabic grammar"], answer: 1, why: "Reflecting the names in a human way, never claiming them as Allah has them.", src: src("1–14") },
    { q: "How did Ibn al-Qayyim describe mercy?", options: ["A feeling with no action", "Bringing benefit to others even when it is hard for you", "Only giving money", "Being soft on wrongdoing"], answer: 1, why: "True mercy shows in action, even at a cost.", src: src("14–29") },
    { q: "What does “Enter into Islam completely” (2:208) ask of us?", options: ["Only saying the Shahādah", "Submitting with tongue, heart and limbs together", "Moving to Makkah", "Learning fiqh first"], answer: 1, why: "Submission should be complete, not only in words.", src: "Quran 2:208" },
    { q: "Al-Jāḥiẓ defined ḥilm (forbearance) as…", options: ["Never feeling anger", "Not taking revenge when anger stirs, though you can", "Avoiding people", "Staying silent always"], answer: 1, why: "Forbearance is restraint with the power to retaliate.", src: src("95–118") },
    { q: "According to al-Kafawī, generosity by not harming someone when you are able to is called…", options: ["Jūd", "ʿAfw (pardon)", "Shajāʿah", "Zuhd"], answer: 1, why: "With wealth it is jūd; with not harming it is ʿafw; with oneself it is courage.", src: src("118–139") },
    { q: "What is the difference between ʿafw and maghfirah?", options: ["There is none", "Maghfirah also grants reward and only Allah gives it; people can pardon", "ʿAfw is only for prophets", "Maghfirah is weaker"], answer: 1, why: "Maghfirah removes punishment and grants reward; ʿafw removes blame and penalty.", src: src("184–202") },
    { q: "What did the Prophet ﷺ save his one certain duʿāʾ for?", options: ["Victory in battle", "Intercession for his ummah on the Day of Judgment", "Rain", "Wealth for the poor"], answer: 1, why: "Bukhari 6304, Muslim 199.", src: src("202–266") },
    { q: "Which is one of the six rights of a Muslim over another?", options: ["Lending him money whenever asked", "Visiting him when he is ill", "Agreeing with all his opinions", "Giving him gifts every week"], answer: 1, why: "Greet, accept invitations, advise, reply to sneezing, visit the sick, follow the funeral (Muslim 2162).", src: src("272–318") },
    { q: "Jibrīl urged the Prophet ﷺ so much about the neighbour that he thought…", options: ["Neighbours must live together", "The neighbour would be made an heir", "Neighbours must pray together", "Neighbours pay zakāt for each other"], answer: 1, why: "Bukhari 6014.", src: src("340–352") },
    { q: "What does the Quran call every kind of animal (6:38)?", options: ["A servant", "A community (ummah) like ours", "A test", "A sign of the Hour"], answer: 1, why: "Animals are communities like us, so they are treated with mercy.", src: "Quran 6:38" },
  ],
};
