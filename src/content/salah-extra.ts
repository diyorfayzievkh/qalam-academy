import type { Lesson } from "./library";
import type { Question } from "./topics";
import { L, P } from "./ruhiy";
import { REWARDS } from "./rewards";

// Salah Academy additions: where to pray and its rewards, the funeral prayer
// (Hanafi), and condolence. A scholar should review before public release.

const rec = (label: string, ar: string, tr: string, en: string, src: string, note?: string) =>
  ({ type: "rec" as const, label, r: { ar, tr, en }, src, note });

export const SALAH_EXTRA: Lesson[] = [
  { id: "places", title: "Where you pray: the reward of each place", summary: "Alone at home, with family, at the masjid, Qubāʾ, al-Aqsa, Madinah and the Haram.", sources: ["Bukhari 645", "Bukhari 731", "Bukhari 1189", "Bukhari 1190", "Ibn Majah 1406", "Ibn Majah 1412", "Abu Dawud 570", "Abu Dawud 554", "Muslim 656", "al-Bazzār, Musnad", "al-Ḥākim, al-Mustadrak"],
    blocks: [
      P("Every valid prayer is accepted wherever it is prayed: “the whole earth has been made a place of prayer for me” (Bukhari 438). But Allah made some places and some ways of praying carry more reward. Knowing these turns an ordinary day into a chance to multiply your prayers."),
      L("At a glance: one prayer is worth…", [
        "Alone: 1 prayer.",
        "In congregation (at the masjid): 27 prayers, more than 5 days of praying alone (Bukhari 645).",
        "Two rakʿahs in Masjid Qubāʾ in Madinah: the reward of an ʿumrah (Ibn Majah 1412).",
        "In al-Masjid al-Aqṣā: about 250 to 500 prayers, roughly 2 to 3 months of daily prayers (see the note below).",
        "In the Prophet’s ﷺ Masjid in Madinah: 1,000 prayers, about 200 days (6½ months) of prayers (Bukhari 1190).",
        "In al-Masjid al-Ḥarām in Makkah: 100,000 prayers, about 20,000 days, or 55 years, of daily prayers (Ibn Majah 1406).",
      ]),
      L("1. Praying alone at home", [
        "An obligatory prayer prayed alone at home is valid and rewarded, especially when there is an excuse such as illness, rain or fear.",
        "For voluntary prayers, home is best: “Pray in your houses; the best prayer of a man is in his house, except the obligatory prayer” (Bukhari 731).",
        "“Do not make your houses graves” (Bukhari 432). A home where sunnahs and Quran are prayed is filled with light and keeps Shayṭān away.",
        "For men in the Hanafi school, praying the farḍ in congregation is a strongly emphasised sunnah (sunnah muʾakkadah), close to wājib. Leaving it habitually without excuse is blameworthy.",
      ]),
      L("2. In congregation at home, with family or friends", [
        "A congregation is formed by an imam and at least one follower. When you pray together at home, with your wife, children or friends, you earn the virtue of congregation, and you teach your family the prayer.",
        "The Prophet ﷺ prayed with Anas and an orphan behind him and an elderly woman behind them, in a home (Bukhari 380).",
        "The masjid congregation is more complete: it adds the reward of every step, of waiting for the prayer, and of filling Allah’s house. So men should not make home congregation a habit instead of the masjid without a reason.",
        "For women, prayer at home is better for them (Abu Dawud 570), and they are rewarded fully. They may still attend the masjid; “do not prevent the female servants of Allah from the mosques of Allah” (Bukhari 900).",
      ]),
      L("3. At the masjid", [
        "27 times the reward of praying alone (Bukhari 645). In another narration, 25 (Bukhari 646); scholars explain the extra degrees come with fuller manners, such as walking and arriving early.",
        "The larger the congregation, the more beloved to Allah: a man’s prayer with two is purer than with one, and the more, the more beloved (Abu Dawud 554).",
        "While you sit waiting for the prayer you are counted as in prayer, and the angels say: O Allah, forgive him, O Allah, have mercy on him (Bukhari 647).",
        "Whoever goes to the masjid morning or evening, Allah prepares for him a place of hospitality in Paradise each time (Bukhari 662).",
      ]),
      REWARDS.STEPS, REWARDS.JAMAAH, REWARDS.NIGHT,
      L("4. Masjid Qubāʾ", [
        "The first mosque built in Islam, founded on taqwā (9:108). The Prophet ﷺ visited it every Saturday, riding or walking (Bukhari 1193).",
      ]),
      REWARDS.QUBA,
      L("5. Al-Masjid al-Aqṣā in Jerusalem", [
        "The first qiblah, the place of al-Isrāʾ (17:1), and one of the only three mosques worth setting out on a journey to (Bukhari 1189).",
        "The narrations on its reward differ. One from Abū al-Dardāʾ (al-Bazzār, graded ḥasan by al-Bazzār) gives 500 prayers. One from Abū Dharr (al-Ḥākim) says a prayer in the Prophet’s ﷺ masjid is better than four in al-Aqṣā, which points to about 250. A narration of 50,000 (Ibn Mājah) is weak.",
        "Whatever the exact number, it is a blessed land (17:1), and praying there is among the greatest rewards a believer can seek.",
      ]),
      L("6. The Prophet’s ﷺ Masjid in Madinah", [
        "“A prayer in this mosque of mine is better than a thousand prayers elsewhere, except al-Masjid al-Ḥarām” (Bukhari 1190). Pray all five there in one day and you have the reward of 5,000 prayers: almost three years of praying alone.",
        "“Between my house and my pulpit is a garden from the gardens of Paradise” (Bukhari 1195). That is the Rawḍah.",
      ]),
      L("7. Al-Masjid al-Ḥarām in Makkah", [
        "“A prayer in al-Masjid al-Ḥarām is better than a hundred thousand prayers elsewhere” (Ibn Majah 1406, Musnad Aḥmad).",
        "Picture it: one prayer there equals 100,000 prayers, the same as praying five times a day for about 55 years. One day of five prayers there is like 275 years of prayers.",
        "It is the first house of worship built for humankind (3:96), and the qiblah of every prayer you have ever prayed.",
      ]),
      L("Key takeaways", [
        "Every prayer counts, but how and where you pray multiplies it.",
        "Pray sunnahs at home, the farḍ in congregation, and walk to the masjid.",
        "If Allah blesses you with a visit to the Two Holy Mosques or al-Aqṣā, guard every prayer there.",
      ]),
    ] },

  { id: "janazah", title: "The funeral prayer (ṣalāt al-janāzah)", summary: "How to pray it step by step in the Hanafi school, and its great reward.", sources: ["Nūr al-Īḍāḥ", "al-Hidāyah", "Bukhari 1325", "Muslim 945", "Muslim 948", "Tirmidhi 1024", "Abu Dawud 3201", "Abu Dawud 3166"],
    blocks: [
      P("Ṣalāt al-janāzah is the prayer over a deceased Muslim, asking Allah to forgive him and have mercy on him. It is a communal obligation (farḍ kifāyah): if some of the community pray it, the duty is lifted from everyone; if no one does, all who knew are sinful. It is the last thing the living can do together for the dead, and one of the most rewarded."),
      REWARDS.QIRAT,
      REWARDS.INTERCEDE,
      L("What makes it different", [
        "It is prayed standing only: no rukūʿ, no sujūd, no sitting.",
        "It has four takbīrs. In the Hanafi school these are its pillars, together with standing.",
        "Everything is recited silently, by imam and followers alike, except the takbīrs and salām said aloud by the imam.",
        "In the Hanafi school al-Fātiḥah is not recited in it as Quran recitation; the thanāʾ, ṣalawāt and duʿāʾ are recited instead.",
        "It needs wuḍūʾ, facing the qiblah and covering the ʿawrah, like any prayer.",
      ]),
      L("Conditions", [
        "The deceased is a Muslim, has been washed (or given tayammum if washing is impossible), and is placed in front of those praying.",
        "All or most of the body is present. In the Hanafi school, the funeral prayer is not prayed in absentia.",
        "The imam stands in line with the chest of the deceased, whether a man or a woman.",
        "It is recommended to form an odd number of rows, ideally three (Abu Dawud 3166).",
      ]),
      L("Step by step (Hanafi)", [
        "Intention: in the heart, intend to pray the funeral prayer for Allah, as duʿāʾ for this deceased, following the imam.",
        "First takbīr: say “Allāhu akbar” raising the hands to the ears, as in other prayers, then fold the hands below the navel. Recite the thanāʾ.",
        "Second takbīr: say “Allāhu akbar” without raising the hands. Recite the ṣalawāt Ibrāhīmiyyah, as in the final sitting of prayer.",
        "Third takbīr: “Allāhu akbar” without raising the hands. Make duʿāʾ for the deceased, and for all Muslims.",
        "Fourth takbīr: “Allāhu akbar” without raising the hands, then give salām to the right and then to the left. Nothing is recited after the fourth takbīr in the Hanafi school.",
      ]),
      rec("After the 1st takbīr: thanāʾ", "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَجَلَّ ثَنَاؤُكَ وَلَا إِلَٰهَ غَيْرُكَ", "Subḥānaka-llāhumma wa bi-ḥamdika wa tabāraka-smuka wa taʿālā jadduka wa jalla thanāʾuka wa lā ilāha ghayruk.", "Glory be to You, O Allah, and praise. Blessed is Your name, exalted is Your majesty, glorious is Your praise, and there is no god but You.", "Nūr al-Īḍāḥ", "“Wa jalla thanāʾuk” is added in the funeral prayer."),
      rec("After the 2nd takbīr: ṣalawāt Ibrāhīmiyyah", "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ", "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd.", "O Allah, send blessings on Muhammad and the family of Muhammad, as You sent blessings on Ibrāhīm and the family of Ibrāhīm; You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrāhīm and the family of Ibrāhīm; You are Praiseworthy, Glorious.", "Bukhari 3370"),
      rec("After the 3rd takbīr: duʿāʾ for an adult", "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا، اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ", "Allāhumma-ghfir li-ḥayyinā wa mayyitinā, wa shāhidinā wa ghāʾibinā, wa ṣaghīrinā wa kabīrinā, wa dhakarinā wa unthānā. Allāhumma man aḥyaytahū minnā fa-aḥyihī ʿala-l-islām, wa man tawaffaytahū minnā fa-tawaffahū ʿala-l-īmān.", "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our men and our women. O Allah, whomever of us You keep alive, keep him alive in Islam, and whomever of us You take, take him in faith.", "Tirmidhi 1024, Abu Dawud 3201", "If you do not know it yet, any sincere duʿāʾ for the deceased is valid. Learn this one over time."),
      rec("After the 3rd takbīr: for a child (boy)", "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا، وَاجْعَلْهُ لَنَا أَجْرًا وَذُخْرًا، وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا", "Allāhumma-jʿalhu lanā faraṭan, wa-jʿalhu lanā ajran wa dhukhrā, wa-jʿalhu lanā shāfiʿan wa mushaffaʿā.", "O Allah, make him a forerunner for us, make him a reward and a treasure for us, and make him an intercessor for us whose intercession is accepted.", "Nūr al-Īḍāḥ", "For a girl say -hā instead of -hu: ijʿalhā … shāfiʿatan wa mushaffaʿah."),
      L("If you arrive late", [
        "If the imam has already said one or more takbīrs, wait for his next takbīr and join with it.",
        "After the imam’s salām, say the takbīrs you missed, one after another, before the body is lifted, then give salām.",
      ]),
      L("Common mistakes to avoid", [
        "Bowing or prostrating: the funeral prayer has neither.",
        "Raising the hands at every takbīr: in the Hanafi school only the first.",
        "Leaving straight after the prayer when you could follow to the burial and earn the second qīrāṭ.",
        "Talking, laughing or using the phone while following the funeral.",
      ]),
      L("Key takeaways", [
        "Four takbīrs, standing only, silent recitation, two salāms.",
        "Thanāʾ, ṣalawāt, duʿāʾ for the deceased, then salām.",
        "One mountain of reward for the prayer, two for staying until burial.",
      ]),
      { type: "link", href: "/learn/social/social-funeral", label: "Social Tarbiyah", text: "Read about washing, shrouding and following the funeral in Social Tarbiyah." },
    ] },

  { id: "taziyah", title: "Taʿziyah: consoling the bereaved", summary: "What to say, what to do, and what to avoid when someone has died.", sources: ["Ibn Majah 1601", "Bukhari 1284", "Abu Dawud 3132", "Bukhari 1294", "Bukhari 1280", "Muslim 975", "Muslim 918", "Nūr al-Īḍāḥ"],
    blocks: [
      P("Taʿziyah means comforting the family of someone who has died: helping them to be patient, reminding them of Allah’s reward, and praying for the deceased. It is a sunnah, and it is one of the deeds through which a Muslim community carries its grief together."),
      REWARDS.CONDOLE,
      L("When and how", [
        "Offer condolences from the time of death, ideally within three days, to all of the close family: men, women and children (with proper modesty).",
        "After three days it is disliked, except for someone who was travelling or did not know.",
        "Keep visits short and quiet. The family is tired and grieving.",
        "Help practically: prepare food for them. When Jaʿfar (ra) was martyred, the Prophet ﷺ said: make food for the family of Jaʿfar, for something has come to them that keeps them busy (Abu Dawud 3132).",
        "Make duʿāʾ for the deceased, and give charity on his behalf.",
      ]),
      rec("What the Prophet ﷺ said to his bereaved daughter", "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ", "Inna lillāhi mā akhadh, wa lahū mā aʿṭā, wa kullu shayʾin ʿindahū bi-ajalin musammā, fal-taṣbir wal-taḥtasib.", "To Allah belongs what He took and to Him belongs what He gave, and everything with Him has an appointed term; so be patient and hope for reward.", "Bukhari 1284"),
      rec("A common condolence in the Hanafi tradition", "أَعْظَمَ اللَّهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ", "Aʿẓama-llāhu ajrak, wa aḥsana ʿazāʾak, wa ghafara li-mayyitik.", "May Allah make your reward great, make your consolation good, and forgive your deceased.", "Nūr al-Īḍāḥ"),
      rec("For the bereaved to say", "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا", "Innā lillāhi wa innā ilayhi rājiʿūn. Allāhumma-ʾjurnī fī muṣībatī wa akhlif lī khayran minhā.", "To Allah we belong and to Him we return. O Allah, reward me in my calamity and replace it for me with something better.", "Muslim 918"),
      L("What to avoid", [
        "Wailing, screaming, tearing clothes or striking the face: “He is not one of us who strikes his cheeks, tears his clothes and calls out with the cries of ignorance” (Bukhari 1294).",
        "Tears and sadness are not forbidden: the Prophet ﷺ wept at his son Ibrāhīm’s death and said the eye weeps and the heart grieves, but we say only what pleases our Lord (Bukhari 1303).",
        "Burdening the grieving family with hosting crowds and costly meals. Companions considered gathering at the family’s home and their cooking for guests after the burial to be part of wailing (Ibn Majah 1612); others should feed them, not the reverse.",
        "Mourning beyond three days for anyone except a husband, whose widow observes four months and ten days (Bukhari 1280).",
      ]),
      rec("When visiting graves", "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ", "As-salāmu ʿalaykum ahla-d-diyāri mina-l-muʾminīna wa-l-muslimīn, wa innā in shāʾa-llāhu bikum la-lāḥiqūn, asʾalu-llāha lanā wa lakumu-l-ʿāfiyah.", "Peace be upon you, people of these dwellings, believers and Muslims. We will, if Allah wills, join you. I ask Allah for well-being for us and for you.", "Muslim 975"),
      L("Key takeaways", [
        "Console within three days, briefly, with words of patience and duʿāʾ.",
        "Feed the grieving family; do not make them feed you.",
        "Tears are mercy; wailing is forbidden.",
      ]),
    ] },
];

export const SALAH_EXTRA_QUIZ = {
  id: "prayer-places", title: "Places, funeral prayer & taʿziyah", sub: "Rewards of where you pray, the janāzah prayer, and condolence", icon: "salah" as const,
  learn: [
    "Congregation: 27×. Qubāʾ: an ʿumrah. Madinah: 1,000. Makkah: 100,000.",
    "The funeral prayer (Hanafi): four takbīrs, standing only, thanāʾ, ṣalawāt, duʿāʾ, then salām.",
    "One qīrāṭ (like Mount Uḥud) for the prayer, two for staying until burial.",
  ],
  questions: [
    { q: "Prayer in congregation is how many times better than alone?", options: ["2", "10", "27", "100"], answer: 2, why: "Twenty-seven degrees.", src: "Bukhari 645" },
    { q: "Where is it best to pray voluntary (sunnah) prayers?", options: ["Only at the masjid", "At home", "Outdoors", "It doesn’t matter"], answer: 1, why: "The best prayer of a man is in his house, except the obligatory.", src: "Bukhari 731" },
    { q: "Two rakʿahs in Masjid Qubāʾ equal…", options: ["A Hajj", "An ʿumrah", "A day of fasting", "Nothing special"], answer: 1, why: "The reward of an ʿumrah.", src: "Ibn Majah 1412" },
    { q: "A prayer in the Prophet’s ﷺ Masjid is better than…", options: ["10 prayers", "1,000 prayers elsewhere", "100,000 prayers", "500 prayers"], answer: 1, why: "Except al-Masjid al-Ḥarām.", src: "Bukhari 1190" },
    { q: "A prayer in al-Masjid al-Ḥarām equals about how many years of daily prayers?", options: ["1 year", "10 years", "About 55 years", "100 years"], answer: 2, why: "100,000 prayers ÷ 5 a day ≈ 20,000 days ≈ 55 years.", src: "Ibn Majah 1406" },
    { q: "Which are the three mosques worth travelling to?", options: ["Makkah, Madinah, al-Aqṣā", "Makkah, Qubāʾ, Cairo", "Madinah, Damascus, Baghdad", "Any three"], answer: 0, why: "Bukhari 1189.", src: "Bukhari 1189" },
    { q: "Praying ʿIshāʾ and Fajr in congregation is like…", options: ["One extra prayer", "Standing the whole night in prayer", "Fasting a day", "Nothing extra"], answer: 1, why: "ʿIshāʾ is half the night, Fajr the whole.", src: "Muslim 656" },
    { q: "Each step to the masjid…", options: ["Has no reward", "Erases a sin and raises a rank", "Counts only on Friday", "Only for the imam"], answer: 1, why: "With good wuḍūʾ and the intention of prayer.", src: "Bukhari 647" },
    { q: "A qīrāṭ of reward for the funeral is described as…", options: ["A gold coin", "Like Mount Uḥud", "A palace", "A river"], answer: 1, why: "The smaller of the two is like Uḥud, about 7.5 km long and over 1 km high.", src: "Muslim 945" },
    { q: "How many takbīrs are in the funeral prayer?", options: ["2", "3", "4", "5"], answer: 2, why: "Four takbīrs, then salām.", src: "Nūr al-Īḍāḥ" },
    { q: "Does the funeral prayer have rukūʿ and sujūd?", options: ["Yes, both", "Only rukūʿ", "No, it is prayed standing only", "Only sujūd"], answer: 2, why: "Standing and takbīrs only.", src: "Nūr al-Īḍāḥ" },
    { q: "After the second takbīr of the funeral prayer you recite…", options: ["Al-Fātiḥah", "The ṣalawāt Ibrāhīmiyyah", "Āyat al-Kursī", "Nothing"], answer: 1, why: "Thanāʾ, then ṣalawāt, then duʿāʾ.", src: "Nūr al-Īḍāḥ" },
    { q: "In the Hanafi school, at which takbīrs are the hands raised in the funeral prayer?", options: ["All four", "Only the first", "The first and last", "None"], answer: 1, why: "Only the opening takbīr.", src: "al-Hidāyah" },
    { q: "If forty believers pray over a deceased Muslim…", options: ["Nothing changes", "Allah accepts their intercession for him", "He is buried faster", "Only his family benefits"], answer: 1, why: "Muslim 948.", src: "Muslim 948" },
    { q: "What does Allah give one who consoles a bereaved believer?", options: ["Wealth", "Garments of honour on the Day of Judgment", "A long life", "Fame"], answer: 1, why: "Ibn Majah 1601.", src: "Ibn Majah 1601" },
    { q: "Who should prepare food after a death?", options: ["The grieving family for guests", "Neighbours and relatives for the grieving family", "Nobody", "Only the imam"], answer: 1, why: "“Make food for the family of Jaʿfar.”", src: "Abu Dawud 3132" },
    { q: "Is weeping for the deceased forbidden?", options: ["Yes", "No, tears are mercy; wailing and striking oneself are forbidden", "Only for men", "Only after three days"], answer: 1, why: "The Prophet ﷺ wept for his son Ibrāhīm.", src: "Bukhari 1303" },
    { q: "What should the bereaved person say?", options: ["Why me?", "Innā lillāhi wa innā ilayhi rājiʿūn, and ask Allah for better", "Nothing", "Curse the day"], answer: 1, why: "Muslim 918.", src: "Muslim 918" },
  ] as Question[],
};
