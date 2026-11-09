// Arabic text, transliteration and meaning for everything recited in prayer.
// Hanafi forms (e.g. Tashahhud of Ibn Mas'ud, Hanafi Qunut). Have a qualified
// scholar verify every Arabic string against a printed mushaf before release.

export type Recitation = { ar: string; tr: string; en: string };

export const RECITATIONS = {
  "takbir": {
    "ar": "اللَّهُ أَكْبَرُ",
    "tr": "Allāhu akbar",
    "en": "Allah is the Greatest."
  },
  "thana": {
    "ar": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ",
    "tr": "Subḥānaka-llāhumma wa biḥamdika, wa tabāraka-smuka, wa taʿālā jadduka, wa lā ilāha ghayruk.",
    "en": "Glory be to You, O Allah, and praise. Blessed is Your name, exalted is Your majesty, and there is no god but You."
  },
  "taawwudh": {
    "ar": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "tr": "Aʿūdhu billāhi mina-sh-shayṭāni-r-rajīm. Bismillāhi-r-raḥmāni-r-raḥīm.",
    "en": "I seek refuge in Allah from Satan the accursed. In the name of Allah, the Most Gracious, the Most Merciful."
  },
  "basmala": {
    "ar": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "tr": "Bismillāhi-r-raḥmāni-r-raḥīm.",
    "en": "In the name of Allah, the Most Gracious, the Most Merciful."
  },
  "fatiha": {
    "ar": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    "tr": "Al-ḥamdu lillāhi rabbi-l-ʿālamīn. Ar-raḥmāni-r-raḥīm. Māliki yawmi-d-dīn. Iyyāka naʿbudu wa iyyāka nastaʿīn. Ihdina-ṣ-ṣirāṭa-l-mustaqīm. Ṣirāṭa-lladhīna anʿamta ʿalayhim, ghayri-l-maghḍūbi ʿalayhim wa la-ḍ-ḍāllīn. (Āmīn)",
    "en": "All praise is for Allah, Lord of all worlds, the Most Gracious, the Most Merciful, Master of the Day of Judgment. You alone we worship and You alone we ask for help. Guide us to the straight path, the path of those You have blessed, not of those who earned anger, nor of those who went astray."
  },
  "ikhlas": {
    "ar": "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    "tr": "Qul huwa-llāhu aḥad. Allāhu-ṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakun lahū kufuwan aḥad.",
    "en": "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, and there is none comparable to Him. (Surah 112)"
  },
  "kawthar": {
    "ar": "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    "tr": "Innā aʿṭaynāka-l-kawthar. Fa ṣalli li rabbika wa-nḥar. Inna shāniʾaka huwa-l-abtar.",
    "en": "We have given you al-Kawthar. So pray to your Lord and sacrifice. Indeed, your enemy is the one cut off. (Surah 108)"
  },
  "ruku": {
    "ar": "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    "tr": "Subḥāna rabbiya-l-ʿaẓīm (×3)",
    "en": "Glory be to my Lord, the Magnificent."
  },
  "sami": {
    "ar": "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا لَكَ الْحَمْدُ",
    "tr": "Samiʿa-llāhu li man ḥamidah. Rabbanā laka-l-ḥamd.",
    "en": "Allah hears the one who praises Him. Our Lord, to You belongs all praise."
  },
  "sujud": {
    "ar": "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    "tr": "Subḥāna rabbiya-l-aʿlā (×3)",
    "en": "Glory be to my Lord, the Most High."
  },
  "tashahhud": {
    "ar": "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    "tr": "At-taḥiyyātu lillāhi wa-ṣ-ṣalawātu wa-ṭ-ṭayyibāt. As-salāmu ʿalayka ayyuha-n-nabiyyu wa raḥmatu-llāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādi-llāhi-ṣ-ṣāliḥīn. Ashhadu an lā ilāha illa-llāh, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh.",
    "en": "All greetings, prayers and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger. (Tashahhud of Ibn Masʿūd, used by the Hanafi school)"
  },
  "salawat": {
    "ar": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "tr": "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd. Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd.",
    "en": "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim; You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; You are Praiseworthy, Glorious."
  },
  "dua": {
    "ar": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "tr": "Rabbanā ātinā fi-d-dunyā ḥasanatan wa fi-l-ākhirati ḥasanatan wa qinā ʿadhāba-n-nār.",
    "en": "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. (Quran 2:201)"
  },
  "salam": {
    "ar": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    "tr": "As-salāmu ʿalaykum wa raḥmatu-llāh.",
    "en": "Peace be upon you and the mercy of Allah."
  },
  "qunut": {
    "ar": "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ، وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ۝ اللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخْشَىٰ عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ",
    "tr": "Allāhumma innā nastaʿīnuka wa nastaghfiruk, wa nuʾminu bika wa natawakkalu ʿalayk, wa nuthnī ʿalayka-l-khayr, wa nashkuruka wa lā nakfuruk, wa nakhlaʿu wa natruku man yafjuruk. Allāhumma iyyāka naʿbud, wa laka nuṣallī wa nasjud, wa ilayka nasʿā wa naḥfid, narjū raḥmatak, wa nakhshā ʿadhābak, inna ʿadhābaka bi-l-kuffāri mulḥiq.",
    "en": "O Allah, we seek Your help and Your forgiveness, we believe in You and rely on You, we praise You with all good, we thank You and are not ungrateful, and we abandon whoever disobeys You. O Allah, You alone we worship, to You we pray and prostrate, to You we hasten and serve. We hope for Your mercy and fear Your punishment; surely Your punishment reaches the disbelievers. (Duʿāʾ al-Qunūt, Hanafi)"
  },
  "wuduDua": {
    "ar": "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    "tr": "Ashhadu an lā ilāha illa-llāhu waḥdahū lā sharīka lah, wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh.",
    "en": "I bear witness that there is no god but Allah alone, without partner, and that Muhammad is His servant and messenger. (Muslim 234)"
  }
} satisfies Record<string, Recitation>;

export type RecitationKey = keyof typeof RECITATIONS;
