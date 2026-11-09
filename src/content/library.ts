import type { Recitation } from "./recitations";
import { RECITATIONS } from "./recitations";
import { ADAB_LESSONS, type AdabLesson } from "./adab";

// The Knowledge Base: worlds → lessons. Akhlaq & Adab lessons use the
// five-part template in adab.ts; all others are built from blocks.
// Every claim carries a source. A scholar must review before release.

export type Block =
  | { type: "p"; text: string }
  | { type: "points"; title?: string; items: string[] }
  | { type: "rec"; label: string; r: Recitation; src?: string; note?: string }
  | { type: "timeline"; items: { when: string; what: string }[] }
  | { type: "link"; href: string; label: string; text: string };

export type Lesson = { id: string; title: string; summary: string; sources: string[]; blocks: Block[] };
export type World = {
  id: string;
  title: string;
  arabic: string;
  sub: string;
  quizIds: string[];
  lessons: Lesson[];
  adab?: AdabLesson[];
};

const r = (ar: string, tr: string, en: string): Recitation => ({ ar, tr, en });

export const WORLDS: World[] = [
  {
    id: "iman", title: "Iman (Faith)", arabic: "الإيمان", sub: "The six pillars of faith a believer holds in the heart", quizIds: ["iman"],
    lessons: [
      { id: "tawhid", title: "Tawḥīd: Allah is One", summary: "The foundation of everything a Muslim believes.", sources: ["Quran 112", "Quran 2:255", "Muslim 8"],
        blocks: [
          { type: "p", text: "Tawḥīd means believing that Allah alone is the Lord who creates and sustains everything, that He alone deserves worship, and that His names and attributes are perfect and unlike anything in creation." },
          { type: "points", title: "Three sides of Tawḥīd", items: ["Allah alone creates, owns and controls all things.", "Allah alone is worshipped: prayer, duʿāʾ, fasting and sacrifice are for Him only.", "Allah has beautiful names and perfect attributes, and nothing is like Him (Quran 42:11)."] },
          { type: "rec", label: "Sūrat al-Ikhlāṣ, a summary of Tawḥīd", r: RECITATIONS.ikhlas, src: "Equal to one third of the Quran (Bukhari 5013)" },
        ] },
      { id: "angels", title: "Belief in the angels", summary: "Created from light, they obey Allah and never disobey.", sources: ["Quran 66:6", "Muslim 2996", "Quran 2:97"],
        blocks: [
          { type: "p", text: "Angels were created from light (Muslim 2996). They do what Allah commands and never disobey (Quran 66:6). We cannot see them, but they are with us." },
          { type: "points", title: "Angels named in the Quran and Sunnah", items: ["Jibrīl brought revelation to the prophets (Quran 2:97).", "Mīkāʾīl is entrusted with rain and provision.", "Isrāfīl will blow the Trumpet on the Last Day.", "The Angel of Death takes souls at their appointed time (Quran 32:11).", "Two noble scribes record every person’s deeds (Quran 82:10–12)."] },
        ] },
      { id: "books", title: "Belief in the revealed books", summary: "Allah sent guidance to the prophets in books.", sources: ["Quran 5:44", "Quran 4:163", "Quran 5:46", "Quran 15:9"],
        blocks: [
          { type: "points", items: ["The Tawrāh was revealed to Mūsā (Quran 5:44).", "The Zabūr was given to Dāwūd (Quran 4:163).", "The Injīl was given to ʿĪsā (Quran 5:46).", "The Ṣuḥuf (scrolls) were given to Ibrāhīm and Mūsā (Quran 87:19).", "The Quran was revealed to Muhammad ﷺ, and Allah has promised to protect it (Quran 15:9)."] },
          { type: "p", text: "We believe all of these were true revelations from Allah. The Quran is the final book and the one we follow." },
        ] },
      { id: "prophets", title: "Belief in the prophets", summary: "From Ādam to Muhammad ﷺ, the final messenger.", sources: ["Quran 33:40", "Quran 16:36", "Quran 2:285"],
        blocks: [
          { type: "p", text: "Allah sent a messenger to every nation (Quran 16:36). We believe in all of them without making distinctions in faith between them (Quran 2:285). Twenty-five are named in the Quran." },
          { type: "points", title: "Key facts", items: ["Ādam was the first prophet.", "Nūḥ, Ibrāhīm, Mūsā, ʿĪsā and Muhammad ﷺ are the five of strongest resolve (ulū al-ʿazm).", "Muhammad ﷺ is the Seal of the Prophets; no prophet comes after him (Quran 33:40)."] },
        ] },
      { id: "last-day", title: "Belief in the Last Day", summary: "Every soul will be raised and its deeds weighed.", sources: ["Quran 99:7–8", "Quran 21:47", "Tirmidhi 2002"],
        blocks: [
          { type: "p", text: "This life will end, and everyone will be raised and judged. Deeds will be weighed on the scale (al-Mīzān), and nothing will be wronged even by the weight of an atom (Quran 99:7–8, 21:47)." },
          { type: "link", href: "/mizan", label: "Open Mizan", text: "See which deeds the hadiths describe as heaviest on the scale." },
        ] },
      { id: "qadar", title: "Belief in divine decree (Qadar)", summary: "Allah knows and decrees all things, and we are responsible for our choices.", sources: ["Muslim 8", "Quran 54:49", "Muslim 2999"],
        blocks: [
          { type: "p", text: "Allah knew everything before it happened, wrote it, wills it and creates it (Quran 54:49). At the same time, people choose their actions and are accountable for them." },
          { type: "p", text: "This belief brings peace: the believer is grateful in good times and patient in hard times, and both are good for them (Muslim 2999)." },
        ] },
    ],
  },
  {
    id: "islam", title: "Islam (5 Pillars)", arabic: "الإسلام", sub: "The five pillars every Muslim stands on", quizIds: ["pillars"],
    lessons: [
      { id: "shahadah", title: "The Shahādah", summary: "The testimony that brings a person into Islam.", sources: ["Bukhari 8", "Muslim 16"],
        blocks: [
          { type: "rec", label: "The testimony of faith", r: r("أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", "Ashhadu an lā ilāha illa-llāh, wa ashhadu anna Muḥammadan rasūlu-llāh.", "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.") },
          { type: "points", title: "What it means", items: ["Nothing deserves worship except Allah.", "Muhammad ﷺ is His messenger: we believe what he told us, obey what he commanded and follow his way."] },
        ] },
      { id: "salah-pillar", title: "Ṣalāh", summary: "Five daily prayers, the first deed to be judged.", sources: ["Bukhari 349", "Tirmidhi 413"],
        blocks: [
          { type: "p", text: "The five daily prayers were made obligatory on the night of the Isrāʾ and Miʿrāj (Bukhari 349). Prayer is the first deed a person will be asked about (Tirmidhi 413)." },
          { type: "link", href: "/salah", label: "Open the prayer guide", text: "Learn every prayer step by step, according to the Hanafi madhhab." },
        ] },
      { id: "zakat", title: "Zakāt", summary: "Purifying wealth by giving to those in need.", sources: ["Quran 9:60", "Quran 9:103", "Abu Dawud 1572"],
        blocks: [
          { type: "points", items: ["Due on savings, gold, silver, trade goods and some livestock and crops, once wealth above the niṣāb has been held for a lunar year.", "The rate on money and trade goods is 2.5% (Abu Dawud 1572).", "It goes to the eight categories named in Quran 9:60, including the poor and the needy.", "Zakāt al-Fiṭr is a separate small amount per person, paid before the Eid prayer (Bukhari 1503)."] },
        ] },
      { id: "sawm", title: "Fasting Ramadan", summary: "From true dawn to sunset, for the sake of Allah.", sources: ["Quran 2:183–187", "Bukhari 1901"],
        blocks: [
          { type: "p", text: "Fasting means leaving food, drink and marital relations from true dawn until sunset, with the intention of fasting for Allah (Quran 2:187). Whoever fasts Ramadan with faith and seeking reward is forgiven their past sins (Bukhari 1901)." },
          { type: "link", href: "/ramadan", label: "Open Ramadan Quest", text: "Daily tracker, duas, surahs and the history of Ramadan." },
        ] },
      { id: "hajj", title: "Hajj", summary: "Once in a lifetime, for those who are able.", sources: ["Quran 3:97", "Abu Dawud 1721"],
        blocks: [
          { type: "p", text: "Hajj is the pilgrimage to Makkah in Dhul-Ḥijjah. It is required once in a lifetime for every adult Muslim who is physically and financially able (Quran 3:97, Abu Dawud 1721)." },
          { type: "points", title: "Main rites", items: ["Entering iḥrām", "Ṭawāf around the Kaʿbah and saʿy between Ṣafā and Marwah", "Standing at ʿArafah on the 9th of Dhul-Ḥijjah, the heart of Hajj", "Night at Muzdalifah, stoning the pillars at Minā, sacrifice, and ṭawāf al-ifāḍah"] },
        ] },
    ],
  },
  {
    id: "salah", title: "Salah Academy", arabic: "الصلاة", sub: "Purity, prayer times, and praying correctly (Hanafi)", quizIds: ["wudu", "salah"],
    lessons: [
      { id: "guide", title: "Step-by-step prayer guide", summary: "Wuḍūʾ and every prayer, with men and women notes.", sources: ["al-Hidāyah", "Nūr al-Īḍāḥ"],
        blocks: [{ type: "link", href: "/salah", label: "Open the prayer guide", text: "Fajr, Dhuhr, Asr, Maghrib, Isha, Witr and Jumuʿah, step by step." }] },
      { id: "conditions", title: "Conditions of prayer", summary: "What must be in place before you begin.", sources: ["Nūr al-Īḍāḥ"],
        blocks: [
          { type: "points", title: "Before the prayer (Hanafi)", items: ["Purity of the body from ritual impurity (wuḍūʾ, or ghusl when required).", "Clean body, clothes and place of prayer.", "Covering the ʿawrah: for men from the navel to below the knees; for women the whole body except the face, hands and feet.", "Facing the qibla.", "The prayer’s time has started.", "Intention."] },
        ] },
      { id: "times-rules", title: "Prayer times in the Hanafi school", summary: "When each prayer begins and ends.", sources: ["Nūr al-Īḍāḥ", "Abu Dawud 393"],
        blocks: [
          { type: "points", items: ["Fajr: from true dawn until sunrise.", "Dhuhr: from just after midday until an object’s shadow is twice its length (plus its midday shadow).", "Asr: from that point until sunset. Delaying until the sun turns pale is disliked.", "Maghrib: from sunset until the red-then-white twilight disappears (Abu Hanifa: the white twilight).", "Isha and Witr: from the end of twilight until true dawn. Witr is prayed after Isha."] },
          { type: "p", text: "Praying is forbidden at sunrise, when the sun is at its zenith, and at sunset (except that day’s Asr)." },
          { type: "link", href: "/times", label: "Today’s prayer times", text: "Calculated with Hanafi Asr for your city." },
        ] },
      { id: "breakers", title: "What breaks the prayer", summary: "Actions that invalidate a prayer and require repeating it.", sources: ["Nūr al-Īḍāḥ"],
        blocks: [
          { type: "points", items: ["Speaking, even a little, intentionally or by mistake.", "Eating or drinking.", "Turning the chest away from the qibla.", "Much movement (ʿamal kathīr) that makes an onlooker think you are not praying.", "Laughing aloud (this also breaks wuḍūʾ for adults).", "Anything that breaks wuḍūʾ.", "Missing a farḍ act, such as rukūʿ or a sajdah."] },
        ] },
      { id: "sahw", title: "Sajdat al-sahw", summary: "Repairing a mistake in prayer.", sources: ["Bukhari 1224", "Nūr al-Īḍāḥ"],
        blocks: [
          { type: "p", text: "If you miss a wājib act by mistake (for example the first sitting, or reciting a sūrah in the first two rakʿahs), or delay a farḍ or wājib, you repair the prayer with two prostrations of forgetfulness." },
          { type: "points", title: "How (Hanafi)", items: ["In the final sitting, recite the Tashahhud.", "Give one salām to the right.", "Make two sajdahs, saying the sujūd tasbīḥ.", "Sit and recite the Tashahhud, Ṣalawāt and a duʿāʾ.", "Give the salām to both sides."] },
          { type: "p", text: "Missing a farḍ act cannot be repaired by sajdat al-sahw; the prayer must be repeated." },
        ] },
    ],
  },
  {
    id: "akhlaq", title: "Akhlaq & Adab", arabic: "الأخلاق والآداب", sub: "Character and manners, the heaviest on the scale", quizIds: ["akhlaq"],
    lessons: [], adab: ADAB_LESSONS,
  },
  {
    id: "duas", title: "Daily Duas", arabic: "الأدعية", sub: "Short duas for every part of the day", quizIds: [],
    lessons: [
      { id: "home-food", title: "Eating, dressing and the home", summary: "Duas for meals, clothes and leaving the house.", sources: ["Abu Dawud 3767", "Abu Dawud 4023", "Abu Dawud 5095"],
        blocks: [
          { type: "rec", label: "Before eating", r: r("بِسْمِ اللَّهِ", "Bismillāh.", "In the name of Allah."), src: "Bukhari 5376", note: "If you forget at the start: Bismillāhi awwalahū wa ākhirah (Abu Dawud 3767)." },
          { type: "rec", label: "After eating", r: r("الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", "Al-ḥamdu lillāhi-lladhī aṭʿamanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.", "Praise be to Allah who fed me this and provided it for me without any power or strength from me."), src: "Abu Dawud 4023" },
          { type: "rec", label: "Wearing new clothes", r: r("الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", "Al-ḥamdu lillāhi-lladhī kasānī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.", "Praise be to Allah who clothed me with this and provided it for me without any power or strength from me."), src: "Abu Dawud 4023" },
          { type: "rec", label: "Leaving home", r: r("بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", "Bismillāhi tawakkaltu ʿala-llāh, wa lā ḥawla wa lā quwwata illā billāh.", "In the name of Allah, I rely on Allah, and there is no power or strength except with Allah."), src: "Abu Dawud 5095" },
        ] },
      { id: "sleep-toilet", title: "Sleeping, waking and the toilet", summary: "Duas that frame the day and night.", sources: ["Bukhari 6324", "Bukhari 142", "Abu Dawud 30"],
        blocks: [
          { type: "rec", label: "Before sleeping", r: r("بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", "Bismika-llāhumma amūtu wa aḥyā.", "In Your name, O Allah, I die and I live."), src: "Bukhari 6324" },
          { type: "rec", label: "On waking", r: r("الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", "Al-ḥamdu lillāhi-lladhī aḥyānā baʿda mā amātanā wa ilayhi-n-nushūr.", "Praise be to Allah who gave us life after causing us to die, and to Him is the return."), src: "Bukhari 6324" },
          { type: "rec", label: "Entering the toilet", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", "Allāhumma innī aʿūdhu bika mina-l-khubuthi wa-l-khabāʾith.", "O Allah, I seek refuge in You from evil and from evil beings."), src: "Bukhari 142", note: "Enter with the left foot, saying Bismillāh first." },
          { type: "rec", label: "Leaving the toilet", r: r("غُفْرَانَكَ", "Ghufrānak.", "I ask Your forgiveness."), src: "Abu Dawud 30", note: "Leave with the right foot." },
        ] },
      { id: "masjid-travel", title: "Masjid, travel and protection", summary: "Duas when going out into the world.", sources: ["Muslim 713", "Muslim 1342", "Abu Dawud 5088"],
        blocks: [
          { type: "rec", label: "Entering the masjid", r: r("اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", "Allāhumma-ftaḥ lī abwāba raḥmatik.", "O Allah, open for me the doors of Your mercy."), src: "Muslim 713", note: "Enter with the right foot." },
          { type: "rec", label: "Leaving the masjid", r: r("اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", "Allāhumma innī asʾaluka min faḍlik.", "O Allah, I ask You for Your bounty."), src: "Muslim 713" },
          { type: "rec", label: "Setting off on a journey", r: r("سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ", "Subḥāna-lladhī sakhkhara lanā hādhā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā lamunqalibūn.", "Glory be to the One who made this subservient to us, for we could never have done it ourselves, and to our Lord we will surely return."), src: "Quran 43:13–14, Muslim 1342" },
          { type: "rec", label: "Morning and evening protection (×3)", r: r("بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", "Bismillāhi-lladhī lā yaḍurru maʿa-smihī shayʾun fi-l-arḍi wa lā fi-s-samāʾ, wa huwa-s-samīʿu-l-ʿalīm.", "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing."), src: "Abu Dawud 5088, Tirmidhi 3388" },
        ] },
      { id: "refuge", title: "Seeking refuge (istiʿādhah)", summary: "The Prophet’s ﷺ duas for protection, including refuge from eight things.", sources: ["Bukhari 6369", "Muslim 588", "Muslim 2722", "Muslim 2739", "Bukhari 6365", "Tirmidhi 3591", "Abu Dawud 1554", "Abu Dawud 5090", "Muslim 2716", "Muslim 2708", "Bukhari 3371"],
        blocks: [
          { type: "p", text: "The Prophet ﷺ often sought refuge in Allah from harm to the heart, the body, faith and livelihood. These duas are short enough to learn one a week." },
          { type: "rec", label: "Refuge from eight things", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ", "Allāhumma innī aʿūdhu bika mina-l-hammi wa-l-ḥazan, wa-l-ʿajzi wa-l-kasal, wa-l-bukhli wa-l-jubn, wa ḍalaʿi-d-dayni wa ghalabati-r-rijāl.", "O Allah, I seek refuge in You from worry and grief, from inability and laziness, from miserliness and cowardice, from the burden of debt and from being overpowered by people."), src: "Bukhari 6369", note: "Anas (ra), who served the Prophet ﷺ, heard him say it often. The eight come in four pairs: worry about the future and grief over the past; inability and laziness; miserliness and cowardice; crushing debt and being overpowered by people." },
          { type: "rec", label: "Four things, before the salām", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", "Allāhumma innī aʿūdhu bika min ʿadhābi jahannam, wa min ʿadhābi-l-qabr, wa min fitnati-l-maḥyā wa-l-mamāt, wa min sharri fitnati-l-masīḥi-d-dajjāl.", "O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah."), src: "Muslim 588", note: "The Prophet ﷺ told us to say it after the final Tashahhud, before the salām." },
          { type: "rec", label: "Refuge from knowledge that does not benefit", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا", "Allāhumma innī aʿūdhu bika min ʿilmin lā yanfaʿ, wa min qalbin lā yakhshaʿ, wa min nafsin lā tashbaʿ, wa min daʿwatin lā yustajābu lahā.", "O Allah, I seek refuge in You from knowledge that does not benefit, a heart that is not humble, a soul that is never satisfied, and a prayer that is not answered."), src: "Muslim 2722" },
          { type: "rec", label: "Refuge from losing Allah’s blessings", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ", "Allāhumma innī aʿūdhu bika min zawāli niʿmatik, wa taḥawwuli ʿāfiyatik, wa fujāʾati niqmatik, wa jamīʿi sakhaṭik.", "O Allah, I seek refuge in You from the loss of Your blessings, the change of the well-being You gave, Your sudden punishment, and all that displeases You."), src: "Muslim 2739" },
          { type: "rec", label: "Refuge from bad character", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ وَالْأَعْمَالِ وَالْأَهْوَاءِ", "Allāhumma innī aʿūdhu bika min munkarāti-l-akhlāqi wa-l-aʿmāli wa-l-ahwāʾ.", "O Allah, I seek refuge in You from bad character, bad deeds and bad desires."), src: "Tirmidhi 3591" },
          { type: "rec", label: "Refuge from the worst of old age and the world’s trials", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَىٰ أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ", "Allāhumma innī aʿūdhu bika mina-l-bukhl, wa aʿūdhu bika mina-l-jubn, wa aʿūdhu bika an uradda ilā ardhali-l-ʿumur, wa aʿūdhu bika min fitnati-d-dunyā, wa aʿūdhu bika min ʿadhābi-l-qabr.", "O Allah, I seek refuge in You from miserliness and cowardice, from being returned to the most feeble old age, from the trials of this world, and from the punishment of the grave."), src: "Bukhari 6365", note: "Saʿd ibn Abī Waqqāṣ (ra) taught it to his children as a teacher teaches writing." },
          { type: "rec", label: "Refuge from serious illness", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ", "Allāhumma innī aʿūdhu bika mina-l-baraṣ, wa-l-junūn, wa-l-judhām, wa min sayyiʾi-l-asqām.", "O Allah, I seek refuge in You from leprosy, madness, skin disease, and all evil illnesses."), src: "Abu Dawud 1554" },
          { type: "rec", label: "Refuge from disbelief and poverty (morning and evening ×3)", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ", "Allāhumma innī aʿūdhu bika mina-l-kufri wa-l-faqr, wa aʿūdhu bika min ʿadhābi-l-qabr, lā ilāha illā ant.", "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no god but You."), src: "Abu Dawud 5090" },
          { type: "rec", label: "Refuge from the evil of my own deeds", r: r("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ، وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ", "Allāhumma innī aʿūdhu bika min sharri mā ʿamiltu wa min sharri mā lam aʿmal.", "O Allah, I seek refuge in You from the evil of what I have done and the evil of what I have not done."), src: "Muslim 2716" },
          { type: "rec", label: "When stopping at a new place (and evenings ×3)", r: r("أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", "Aʿūdhu bi kalimāti-llāhi-t-tāmmāti min sharri mā khalaq.", "I seek refuge in the perfect words of Allah from the evil of what He has created."), src: "Muslim 2708", note: "Nothing will harm you until you leave that place." },
          { type: "rec", label: "Protecting your children", r: r("أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ", "Uʿīdhukumā bi kalimāti-llāhi-t-tāmmah, min kulli shayṭānin wa hāmmah, wa min kulli ʿaynin lāmmah.", "I place you both under the protection of Allah’s perfect words, from every devil and harmful creature, and from every evil eye."), src: "Bukhari 3371", note: "The Prophet ﷺ said this over his grandsons al-Ḥasan and al-Ḥusayn. For one child say uʿīdhuka (boy) or uʿīdhuki (girl); for more than two, uʿīdhukum." },
        ] },
      { id: "forgiveness", title: "Seeking forgiveness", summary: "The master of seeking forgiveness, and sneezing etiquette.", sources: ["Bukhari 6306", "Bukhari 6224"],
        blocks: [
          { type: "rec", label: "Sayyid al-Istighfār", r: r("اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", "Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa ana ʿabduk, wa ana ʿalā ʿahdika wa waʿdika ma-staṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt, abūʾu laka bi niʿmatika ʿalayy, wa abūʾu laka bi dhanbī fa-ghfir lī, fa innahū lā yaghfiru-dh-dhunūba illā ant.", "O Allah, You are my Lord; there is no god but You. You created me and I am Your servant. I keep Your covenant and promise as much as I can. I seek refuge in You from the evil I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for none forgives sins but You."), src: "Bukhari 6306", note: "Whoever says it with certainty in the morning and dies that day is among the people of Paradise." },
          { type: "points", title: "When someone sneezes (Bukhari 6224)", items: ["The one who sneezes says: Al-ḥamdu lillāh.", "The listener replies: Yarḥamuka-llāh (May Allah have mercy on you).", "The sneezer answers: Yahdīkumu-llāhu wa yuṣliḥu bālakum (May Allah guide you and set your affairs right)."] },
        ] },
    ],
  },
  {
    id: "quran", title: "Quran Basics", arabic: "القرآن", sub: "Short surahs for prayer, with meaning", quizIds: [],
    lessons: [
      { id: "fatiha", title: "Al-Fātiḥah (1)", summary: "The greatest sūrah, recited in every rakʿah.", sources: ["Bukhari 4474", "Bukhari 756"],
        blocks: [
          { type: "p", text: "There is no prayer for the one who does not recite the Fātiḥah (Bukhari 756). In the Hanafi school, reciting it is wājib in every rakʿah." },
          { type: "rec", label: "Sūrat al-Fātiḥah", r: { ...RECITATIONS.fatiha, ar: RECITATIONS.basmala.ar + " ۝ " + RECITATIONS.fatiha.ar }, src: "The greatest sūrah in the Quran (Bukhari 4474)" },
        ] },
      { id: "kursi", title: "Āyat al-Kursī (2:255)", summary: "The greatest verse in the Quran.", sources: ["Muslim 810", "Bukhari 2311"],
        blocks: [
          { type: "rec", label: "Āyat al-Kursī", r: r("اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", "Allāhu lā ilāha illā huwa-l-ḥayyu-l-qayyūm. Lā taʾkhudhuhū sinatun wa lā nawm. Lahū mā fi-s-samāwāti wa mā fi-l-arḍ. Man dha-lladhī yashfaʿu ʿindahū illā bi idhnih. Yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi shayʾin min ʿilmihī illā bimā shāʾ. Wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā yaʾūduhū ḥifẓuhumā, wa huwa-l-ʿaliyyu-l-ʿaẓīm.", "Allah, there is no god but Him, the Ever-Living, the Sustainer of all. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and the earth. Who can intercede with Him except by His permission? He knows what is before them and behind them, and they grasp nothing of His knowledge except what He wills. His Kursī extends over the heavens and the earth, and guarding them does not tire Him. He is the Most High, the Magnificent."), src: "The greatest verse (Muslim 810). Before sleep, a guardian stays with you (Bukhari 2311)." },
        ] },
      { id: "short-surahs", title: "Short surahs for prayer", summary: "Al-ʿAṣr, Al-Kawthar, Al-Ikhlāṣ, Al-Falaq and An-Nās.", sources: ["Muslim 814", "Bukhari 5013"],
        blocks: [
          { type: "rec", label: "Sūrat al-ʿAṣr (103)", r: r("وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", "Wa-l-ʿaṣr. Inna-l-insāna lafī khusr. Illa-lladhīna āmanū wa ʿamilu-ṣ-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-ṣ-ṣabr.", "By time, surely humanity is in loss, except those who believe, do good deeds, and urge one another to truth and to patience.") },
          { type: "rec", label: "Sūrat al-Kawthar (108)", r: RECITATIONS.kawthar },
          { type: "rec", label: "Sūrat al-Ikhlāṣ (112)", r: RECITATIONS.ikhlas, src: "Equal to one third of the Quran (Bukhari 5013)" },
          { type: "rec", label: "Sūrat al-Falaq (113)", r: r("قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", "Qul aʿūdhu bi rabbi-l-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharri-n-naffāthāti fi-l-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad.", "Say: I seek refuge in the Lord of daybreak, from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies."), src: "Nothing compares to them for seeking refuge (Muslim 814)" },
          { type: "rec", label: "Sūrat an-Nās (114)", r: r("قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", "Qul aʿūdhu bi rabbi-n-nās. Maliki-n-nās. Ilāhi-n-nās. Min sharri-l-waswāsi-l-khannās. Alladhī yuwaswisu fī ṣudūri-n-nās. Mina-l-jinnati wa-n-nās.", "Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers in the hearts of mankind, from among jinn and mankind.") },
        ] },
    ],
  },
  {
    id: "seerah", title: "Seerah", arabic: "السيرة", sub: "The life of the Prophet ﷺ", quizIds: [],
    lessons: [
      { id: "timeline", title: "The life of the Prophet ﷺ", summary: "Key moments from his birth to his passing.", sources: ["Ibn Hishām, al-Sīrah", "Bukhari 3", "Bukhari 3902"],
        blocks: [
          { type: "p", text: "Muhammad ﷺ was born in Makkah, orphaned young, and known as al-Amīn, the trustworthy, long before prophethood." },
          { type: "timeline", items: [
            { when: "c. 570 CE", what: "Born in Makkah in the Year of the Elephant. His father ʿAbdullāh died before his birth." },
            { when: "c. 595", what: "Marries Khadījah (ra), his first wife and the first person to believe in him." },
            { when: "610", what: "First revelation in the cave of Ḥirāʾ in Ramadan: “Iqraʾ” (Bukhari 3)." },
            { when: "613", what: "The public call to Islam begins in Makkah." },
            { when: "c. 621", what: "The Isrāʾ and Miʿrāj; the five daily prayers are made obligatory (Bukhari 349)." },
            { when: "622 (1 AH)", what: "The Hijrah to Madinah; the Islamic calendar begins." },
            { when: "624 (2 AH)", what: "Fasting Ramadan is prescribed; Battle of Badr on 17 Ramadan." },
            { when: "628 (6 AH)", what: "Treaty of Ḥudaybiyyah." },
            { when: "630 (8 AH)", what: "Conquest of Makkah in Ramadan, with a general amnesty." },
            { when: "632 (10–11 AH)", what: "The Farewell Hajj and sermon; he passes away in Madinah, aged 63." },
          ] },
        ] },
    ],
  },
];

export function findWorld(id: string) {
  return WORLDS.find((w) => w.id === id);
}

export function lessonCount(w: World) {
  return w.lessons.length + (w.adab?.length ?? 0);
}
