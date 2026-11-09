import type { LessonTrMap } from "./lessons";

// Jamoat joylari odobi, 2-qism: ovqat, pul va vaqtni isrof qilmaslik (o‘zbekcha).

export const PUBLIC_UZ_2: LessonTrMap = {
  "waste-food": {
    title: "Ovqatni isrof qilmang",
    summary: "Ovqat Allohning ne’mati: kerakligicha oling, likopchangizni tugating, ortganini baham ko‘ring va ne’matni hech qachon axlatga tashlamang.",
    blocks: [
      { text: "Likopchangizdagi har bir luqma Allohdan kelgan: yomg‘ir, tuproq, dehqonning mehnati, oshpazning harakati. Millionlab odamlar och holda uxlaydi, har kuni esa juda ko‘p ovqat tashlab yuboriladi. Islom bizga ovqatdan lazzatlanishni, buning uchun Allohga shukr qilishni va uni hech qachon isrof qilmaslikni o‘rgatadi." },
      { en: "Yenglar, ichinglar, lekin isrof qilmanglar. Albatta, U isrof qiluvchilarni sevmaydi." },
      { title: "Dasturxonda", left: "Qiling", right: "Qilmang", rows: [
        ["Oz oling; hali och bo‘lsangiz, yana oling", "Likopchani to‘ldirib, yarmini qoldirish"],
        ["Likopchangizni tugating va tozalab qo‘ying (Muslim 2033)", "Ovqatni u yoqdan bu yoqqa surib, keyin tashlab yuborish"],
        ["Tushib ketgan luqmani olib, tozalab yeng (Muslim 2033)", "Tushgan ovqatni shaytonga qoldirish"],
        ["Ortgan ovqatni saqlab, ertasi kuni yeng", "Zerikkaningiz uchun yaxshi ovqatni tashlab yuborish"],
        ["Ortiqcha ovqatni qo‘shnilar yoki muhtojlar bilan baham ko‘ring (Buxoriy 2486)", "Ovqatni muzlatgichda buzilishiga qo‘yish"],
        ["Biror taom yoqmasa, indamay qoldiring (Buxoriy 3563)", "Ovqatni yomonlash yoki yuzni burishtirish"],
        ["Suvni, hatto tahoratda ham, tejab ishlating (Buxoriy 201)", "Jo‘mrakni ochiq qoldirish"],
        ["Faqat yeydiganingizcha buyurtma bering va sotib oling", "Ko‘z-ko‘z qilish uchun to‘ylarda juda ko‘p buyurtma qilish"],
      ] },
      { title: "Nega bu muhim", items: [
        "Alloh isrof qiluvchilarni sevmaydi (7:31).",
        "Baraka oxirgi luqmada bo‘lishi mumkin: “Taomingizning qaysi qismida baraka borligini bilmaysiz” (Muslim 2033).",
        "Kam yeyish sog‘lomroq: “Uchdan biri taom uchun, uchdan biri ichimlik uchun, uchdan biri nafas uchun” (Termiziy 2380).",
        "“Ikki kishining taomi uch kishiga, uch kishining taomi to‘rt kishiga yetadi” (Buxoriy 5392). Baham ko‘rish barakani ko‘paytiradi.",
        "Biz bahramand bo‘lgan ne’matlar haqida so‘ralamiz (102:8).",
        "Payg‘ambar ﷺ hech qachon taomni yomonlamagan: yoqsa yegan, yoqmasa qoldirgan (Buxoriy 3563).",
      ] },
      { title: "Olovsiz ikki oy", scene: "Madina. Oisha (r.a.) jiyani Urva bilan ilk kunlar haqida gaplashayotgan edi.", story: [
        "U dedi: “Jiyanim, biz yangi oyni ko‘rardik, keyin yana bir yangi oyni, keyin yana birini — ikki oyda uchta yangi oy — Rasulullohning ﷺ uylarida esa olov yoqilmasdi.”",
        "Urva so‘radi: “Xolajon, unda nima bilan kun ko‘rardingiz?” U dedi: “Ikki qora narsa bilan: xurmo va suv.”",
        "“Ba’zan sog‘in tuyalari bo‘lgan ansoriy qo‘shnilarimiz Payg‘ambarga ﷺ sutlaridan yuborishardi, u esa uni bizga ichirardi.”",
      ], lesson: "Maxluqotlarning eng yaxshisi xurmo va suv bilan yashab, shukr qilgan. Muzlatgichlarimiz to‘la ekan, hech bo‘lmasa ovqatni tashlab yubormasligimiz kerak.", check: {
        q: "Payg‘ambarning ﷺ oilasi ko‘pincha haftalab nima bilan kun ko‘rgan?",
        options: ["Non va go‘sht", "Xurmo va suv", "Guruch", "Hech narsa"],
        why: "Ikki qora narsa.",
      } },
      { situation: "To‘ydagi shved stolida amakivachchangiz katta likopchani to‘ldirib oldi, bir-ikki tishlab, qolganini tashlamoqchi. Unga nima deyish mumkin?", options: [
        { text: "Hech narsa; bu to‘y-ku.", feedback: "Alloh to‘ylarda ham isrofni sevmaydi." },
        { text: "Yumshoqlik bilan taklif qilaman: “Keling, oz-ozdan olaylik, och bo‘lsak yana olamiz. Payg‘ambar ﷺ baraka oxirgi luqmada bo‘lishi mumkin degan.”", feedback: "Amal qilish oson bo‘lgan yumshoq nasihat." },
        { text: "Hammaning oldida uni masxara qilaman.", feedback: "Nasihat yumshoq va yolg‘izda bo‘lishi kerak." },
      ] },
      { think: [
        "Bu hafta oilam qancha ovqatni tashlab yubordi?",
        "Har bir ovqatdan keyin “Alhamdulillah” deymanmi?",
      ], home: [
        "Bir haftalik “toza likopcha” musobaqasini o‘tkazing: oz oling, olganingizni tugating.",
        "Har hafta bir kechani “qolgan ovqatlar kechasi” qiling va ortiqcha ovqatni qo‘shni bilan baham ko‘ring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Yenglar, ichinglar, lekin isrof qilmanglar: Alloh isrof qiluvchilarni sevmaydi.",
        "Oz oling, likopchangizni tugating va tushganini olib yeng.",
        "Baham ko‘ring, ortganini saqlang va har bir taom uchun Allohga shukr qiling.",
      ] },
    ],
    quiz: [
      { q: "“Yenglar, ichinglar, lekin…”", options: ["“…baham ko‘rmanglar”", "“…isrof qilmanglar”", "“…pishirmanglar”", "“…kulmanglar”"], why: "U isrof qiluvchilarni sevmaydi." },
      { q: "Tushib ketgan ovqat bo‘lagini nima qilish kerak?", options: ["Qoldirish", "Tozalab yeyish", "Tepib yuborish", "Shaytonga berish"], why: "Uni shaytonga qoldirmang." },
      { q: "Nega likopchani tugatish kerak?", options: ["Shirinlik olish uchun", "Baraka oxirgi luqmada bo‘lishi mumkin", "Bo‘y o‘sishi uchun", "Sababi yo‘q"], why: "Baraka qayerdaligini bilmaysiz." },
      { q: "Ikki kishining taomi … yetadi", options: ["Bir kishiga", "Uch kishiga", "O‘n kishiga", "Hech kimga"], why: "Baham ko‘rish barakani ko‘paytiradi." },
      { q: "Payg‘ambar ﷺ yoqmagan taomni nima qilardi?", options: ["Shikoyat qilardi", "Indamay qoldirardi", "Tashlab yuborardi", "Jahl bilan qaytarardi"], why: "U hech qachon taomni yomonlamagan." },
      { q: "Oshqozonni qanday taqsimlash kerak?", options: ["Hammasini taomga", "Uchdan biri taom, uchdan biri ichimlik, uchdan biri nafas", "Yarmi taom, yarmi ichimlik", "Doim bo‘sh"], why: "Mo‘tadillik sog‘lomroq." },
      { q: "Payg‘ambarning ﷺ oilasi ko‘pincha nima bilan kun ko‘rardi?", options: ["Go‘sht va guruch", "Xurmo va suv", "Faqat non", "Shirinliklar"], why: "Ba’zan ikki oylab." },
      { q: "Suvni, hatto tahoratda ham, isrof qilish…", options: ["Targ‘ib qilingan", "Saqlanish kerak bo‘lgan narsa", "Vojib", "Faqat uyda yomon"], why: "Payg‘ambar ﷺ juda oz suv bilan tahorat qilgan." },
      { q: "Takosur surasiga ko‘ra o‘sha kuni nima haqida so‘ralamiz?", options: ["Bahramand bo‘lgan ne’matlar haqida", "Bo‘yimiz haqida", "Sevimli rangimiz haqida", "Hech narsa"], why: "“So‘ngra ne’matlar haqida so‘ralasizlar.”" },
      { q: "Ovqatni isrof qilmaslikning yaxshi yo‘li…", options: ["Oz olib, kerak bo‘lsa yana olish", "Likopchani ikki marta to‘ldirish", "Surat uchun ortiqcha buyurtma qilish", "Uch baravar ko‘p pishirish"], why: "Faqat keragini oling." },
    ],
  },

  "waste-money": {
    title: "Pulni isrof qilmang",
    summary: "Pul Allohning omonati: o‘rtacha sarflang, ko‘z-ko‘z qilish va keraksiz qarzdan saqlaning, jamg‘aring va sadaqa qiling.",
    blocks: [
      { text: "Pul aslida bizniki emas; u Allohning omonati bo‘lib, biz u haqda so‘ralamiz: uni qayerdan topdik va nimaga sarfladik (Termiziy 2417). Islom bizdan baxil bo‘lishni yoki qashshoq yashashni talab qilmaydi. U bizdan o‘rta yo‘lni tutishni so‘raydi: halol narsalardan bahramand bo‘ling, oilangizga qarang, jamg‘aring, sadaqa qiling va pulni hech qachon zarar beradigan yoki faqat ko‘z-ko‘z qilish uchun bo‘lgan narsalarga sovurmang." },
      { en: "Ular sarflaganlarida isrof ham, baxillik ham qilmaydilar, balki ikkisining o‘rtasini tutadilar." },
      { title: "Oqilona sarflash", left: "Qiling", right: "Qilmang", rows: [
        ["Sotib olishdan oldin so‘rang: bu menga kerakmi yoki shunchaki xohlayapmanmi?", "Chegirmada bo‘lgani yoki hammada borligi uchun sotib olish"],
        ["Narsalaringizni uzoq xizmat qilishi uchun asrang", "Narsalarni beparvolik bilan sindirish yoki yo‘qotib, yangisini kutish"],
        ["Qo‘lingizga kelgan har bir puldan ozgina jamg‘aring", "Pulni qo‘lga tegishi bilan hammasini sarflab yuborish"],
        ["Bir qismini sadaqa qiling, hatto kichik tanga bo‘lsa ham", "Faqat o‘zingizga sarflab, kambag‘alni unutish"],
        ["Oilangizga yaxshi niyat bilan sarflang: bu sadaqadir (Buxoriy 55)", "Ko‘z-ko‘z qilish uchun sarflash yoki katta to‘y uchun qarzga botish"],
        ["Ta’mirlang, qayta ishlating va boshqalarga bering", "Hali ishlayotgan narsalarni tashlab yuborish"],
        ["Pulingiz qayerga ketayotganini kuzatib boring", "Pulni qimor, “sirli qutilar” yoki harom narsalarga sovurish"],
      ] },
      { title: "Nega bu muhim", items: [
        "“Isrofgarchilik bilan sovurmang. Albatta, isrofgarlar shaytonlarning birodarlaridir” (17:26–27).",
        "“Qo‘lingni bo‘yningga bog‘lab ham olma, uni butunlay yoyib ham yuborma” (17:29): na baxil, na beparvo.",
        "Alloh “molni zoe qilish”ni yomon ko‘radi (Buxoriy 1477).",
        "“Boylik mol-mulkning ko‘pligi emas. Haqiqiy boylik — nafsning boyligidir” (Buxoriy 6446).",
        "Qarz jiddiy narsa: hatto shahidning ham qarzidan boshqa hamma gunohi kechiriladi (Muslim 1886).",
        "Allohning savobini umid qilib oilaga sarflash sadaqadir (Buxoriy 55).",
      ] },
      { title: "“Har nima xohlasang, sotib olaverasanmi?”", scene: "Madina, Umar ibn Xattob mo‘minlarning amiri bo‘lgan vaqt.", story: [
        "Umar Jobir ibn Abdullohning uyiga go‘sht ko‘tarib ketayotganini ko‘rdi. U so‘radi: “Bu nima, Jobir?”",
        "Jobir dedi: “Go‘sht yegim keldi, shuning uchun biroz sotib oldim.”",
        "Umar dedi: “Har nima xohlasang, sotib olaverasanmi? ‘Dunyo hayotingizda yaxshi narsalaringizni sarflab bo‘ldingiz’ deyiladiganlardan bo‘lib qolishdan qo‘rqmaysanmi?” (rivoyat qilinadi).",
      ], lesson: "Halol narsalarni sotib olish mumkin, lekin xohlagan hamma narsani, xohlagan zahoti sotib olaverish bizni nafsimizning quliga aylantiradi. Musulmon kutishni, tanlashni va ba’zan o‘ziga “yo‘q” deyishni o‘rganadi.", check: {
        q: "Umar Jobirni nimadan ogohlantirdi?",
        options: ["Go‘sht yeyish harom ekanidan", "Xohlagan hamma narsani darhol sotib olaverishdan", "Kechasi xarid qilishdan", "Ovqat pishirishdan"],
        why: "Nafsingizni boshqaring, u sizni boshqarmasin.",
      } },
      { situation: "Hayitda sizga 200 000 so‘m berishdi. Bir o‘yin noyob buyum chiqishi mumkin bo‘lgan “sirli qutilar”ni taklif qilyapti. Oqilona reja qaysi?", options: [
        { text: "Hammasini qutilarga sarflayman; balki noyob narsa chiqar.", feedback: "Sovrin ehtimoli uchun pul to‘lash qimorga yaqin, pul esa g‘oyib bo‘ladi." },
        { text: "Bo‘lib chiqaman: bir qismini jamg‘araman, bir qismini sadaqa qilaman, bir qismini rostdan xohlagan narsamga sarflayman.", feedback: "O‘rta yo‘l: bahramand bo‘ling, jamg‘aring va bering." },
        { text: "Hammasini yashirib, hech qachon sarflamayman.", feedback: "Islom baxil bo‘lishni ham talab qilmaydi." },
      ] },
      { think: [
        "Yaqinda rostdan kerak bo‘lmagan nimani sotib oldim?",
        "Cho‘ntak pulimdan biror narsa sadaqa qilamanmi?",
      ], home: [
        "Bolalarga uchta banka yoki konvert bering: Jamg‘arma, Sarf, Sadaqa.",
        "Har qanday katta xariddan oldin uch kun kuting va so‘rang: hali ham xohlayapmizmi?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Pul omonat: uni qayerdan topganimiz va nimaga sarflaganimiz so‘raladi.",
        "O‘rta yo‘lni tuting: na isrofgar, na baxil.",
        "Avval kerakli, keyin xohlagan narsa; ozgina jamg‘aring, ozgina bering va keraksiz qarzdan saqlaning.",
      ] },
    ],
    quiz: [
      { q: "Isrofgarlar kimning birodarlari deb atalgan?", options: ["Farishtalarning", "Shaytonlarning", "Podshohlarning", "Kambag‘allarning"], why: "Isrofdan qattiq ogohlantirish." },
      { q: "Rahmonning bandalari qanday sarflaydi?", options: ["Isrof qilib", "Baxillik bilan", "O‘rtacha", "Umuman sarflamaydi"], why: "Na isrof, na baxillik." },
      { q: "Haqiqiy boylik nima?", options: ["Ko‘p mol-mulk", "Nafsning boyligi", "Oltin", "Katta uy"], why: "Qanoat — boylik." },
      { q: "Allohning savobini umid qilib oilaga sarflash…", options: ["Isrof", "Sadaqa", "Harom", "Hech narsa emas"], why: "U sadaqa hisoblanadi." },
      { q: "Hatto shahidga ham kechirilmaydigan bitta narsa nima?", options: ["Qarz", "Dangasalik", "Unutish", "Kech qolish"], why: "Qarz jiddiy narsa." },
      { q: "“Qo‘lingni bo‘yningga bog‘lab ham olma, uni butunlay yoyib ham yuborma” ma’nosi…", options: ["Mashq qil", "Na baxil, na beparvo bo‘l", "Hech qachon sarflama", "Hammasini sarfla"], why: "Sarflashda muvozanat." },
      { q: "Umar Jobirni nimadan ogohlantirdi?", options: ["Xohlagan narsasini darhol sotib olaverishdan", "Xurmo yeyishdan", "Yurishdan", "Go‘sht sotishdan"], why: "Nafsingizni boshqaring." },
      { q: "Pulimiz haqida so‘raladi: …", options: ["Qancha bo‘lgani", "Qayerdan topgani va nimaga sarflagani", "Qanday rangda bo‘lgani", "Hech narsa"], why: "Mol haqida ikki savol." },
      { q: "Cho‘ntak pulidan foydalanishning oqilona yo‘li…", options: ["Hammasini birdan sarflash", "Bir qismini jamg‘arish, bir qismini berish, bir qismini sarflash", "Yo‘qotish", "Qimorga tikish"], why: "O‘rta yo‘l." },
      { q: "Alloh … yomon ko‘radi", options: ["Jamg‘arishni", "Molni zoe qilishni", "Sadaqani", "Mehnatni"], why: "Alloh yomon ko‘radigan uch narsa qatorida." },
    ],
  },

  "waste-time": {
    title: "Vaqtni behuda o‘tkazmang",
    summary: "Vaqt — umringiz: uni bu dunyo va oxiratda foyda beradigan narsalarga sarflang, ekranlar va behuda gaplar uni o‘g‘irlab ketmasin.",
    blocks: [
      { text: "Alloh Asr surasida vaqt bilan qasam ichadi: “Asrga qasamki, albatta inson ziyondadir, magar iymon keltirgan, yaxshi amallar qilgan, bir-birlariga haqni va sabrni tavsiya qilganlar bundan mustasno.” Vaqtingiz — umringiz. O‘tgan har bir soat umringizning hech qachon qaytmaydigan bo‘lagi. Musulmon har daqiqa band bo‘lishi shart emas, lekin har daqiqa yaxshi sarflanishi kerak: ibodatga, ilmga, mehnatga, oilaga, yaxshi niyat bilan dam olishga va ruhni yangilaydigan o‘yinga." },
      { en: "Ikki ne’mat borki, ko‘p odamlar ularda aldanadi: sog‘liq va bo‘sh vaqt." },
      { title: "Vaqtdan foydalanish", left: "Uni to‘ldiring", right: "Uni bunga ketkazmang", rows: [
        ["Vaqtida o‘qilgan namoz va har kuni ozgina Qur’on", "O‘yin yoki video uchun namozni kechiktirish"],
        ["Avval uy vazifasi, keyin o‘yin", "Soatlab lenta titkilash, keyin vazifani shoshib bajarish"],
        ["Sport, kitob o‘qish, uyda yordam, biror hunar o‘rganish", "Cheksiz qisqa videolar va g‘iybat chatlari"],
        ["Erta uxlash va bomdodga turish", "Ekran oldida kech o‘tirish"],
        ["Qarindoshlarni ziyorat qilish, kimgadir yordam berish", "Sizga taalluqli bo‘lmagan narsalar haqida behuda gap (Termiziy 2317)"],
        ["Kuningizni kechasi rejalashtirish", "Har safar “keyinroq qilaman” deyish"],
        ["Ertalabki ish: erta tong barakali (Abu Dovud 2606)", "Ertalabni uxlab o‘tkazish"],
      ] },
      { title: "Nega bu muhim", items: [
        "Umrimiz va uni nimaga sarflaganimiz haqida so‘ralamiz (Termiziy 2417); boshqa bir rivoyatda yoshligimiz va uni nimada o‘tkazganimiz ham qo‘shilgan (Termiziy 2416).",
        "“Kishi Islomining go‘zalligidan — o‘ziga taalluqli bo‘lmagan narsani tark etishidir” (Termiziy 2317).",
        "Najot topgan mo‘minlar behuda gaplardan yuz o‘giradilar (23:1–3).",
        "“Besh narsadan oldin besh narsani g‘animat bil: qarilikdan oldin yoshligingni, kasallikdan oldin sog‘ligingni, kambag‘allikdan oldin boyligingni, bandlikdan oldin bo‘sh vaqtingni va o‘limdan oldin hayotingni” (al-Mustadrak 7846).",
        "“Dunyoda xuddi g‘arib yoki yo‘lovchidek bo‘l” (Buxoriy 6416): yo‘lovchi safarini behuda o‘tkazmaydi.",
      ] },
      { title: "Ibn Mas’ud afsuslangan kun", scene: "Kufa. Makkada kambag‘al cho‘pon bola bo‘lgan sahoba Abdulloh ibn Mas’ud shogirdlariga dars berayotgan edi.", story: [
        "U umrini Payg‘ambar ﷺ bilan o‘tkazib, Qur’onni uning og‘zidan o‘rgangan edi. U har bir lahzadan foydalanishi bilan tanilgan edi.",
        "Bir kuni u shogirdlariga dedi: “Men quyoshi botgan, umrim qisqargan, amalim esa ziyoda bo‘lmagan kundan ko‘ra ko‘proq hech narsaga afsuslanmayman” (rivoyat qilinadi).",
        "Shogirdlari tushunishdi: kun tinch yoki dam olish bilan o‘tgani uchun behuda bo‘lmaydi. U ichida hech qanday yaxshilik bo‘lmasdan o‘tib ketsa, behuda bo‘ladi.",
      ], lesson: "Har oqshom o‘zingizdan so‘rang: bugun biror yaxshilik qo‘shdimmi? Hatto vaqtida o‘qilgan bitta namoz, bitta mehribon ish yoki o‘rganilgan bitta sahifa ham kunni qadrli qiladi.", check: {
        q: "Ibn Mas’ud eng ko‘p nimaga afsuslanardi?",
        options: ["Pul yo‘qotishga", "Yaxshi amallari ziyoda bo‘lmay o‘tgan kunga", "Bir mahal ovqatni o‘tkazib yuborishga", "Kambag‘al bo‘lganiga"],
        why: "Vaqt — umr.",
      } },
      { situation: "Soat kechki 9. Ertaga topshiriladigan uy vazifangiz bor, do‘stingiz havola yuboradi: “Buni ko‘r, juda kulgili!” Nima qilasiz?", options: [
        { text: "Faqat bitta videoni ko‘raman… keyin balki yana bir nechtasini.", feedback: "Qisqa videolar sizni ushlab turish uchun yaratilgan. “Bittasi” osongina bir soatga aylanadi." },
        { text: "“Keyinroq, inshaalloh!” deb javob yozaman, vazifani tugataman, keyin vaqtim qolsa, qaror qilaman.", feedback: "Avval muhimi, vaqtingiz esa o‘z nazoratingizda." },
        { text: "Vazifani qilmayman; ertalab ko‘chirib olaman.", feedback: "Bu vaqtni ham ketkazadi, ustiga yolg‘on ham qo‘shiladi." },
      ] },
      { think: [
        "Kecha ekranlar oldida necha soat o‘tkazdim?",
        "Doim “keyinroq” deydigan bitta ishim nima?",
      ], home: [
        "Oilaviy ekran vaqti rejasini tuzing: ovqat paytida va belgilangan vaqtdan keyin telefonlar savatda.",
        "Har oqshom hamma kuni davomida qilgan bitta yaxshi ishini aytib bersin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Asrga qasamki, inson ziyondadir, magar iymon keltirib, yaxshi amal qilgan va bir-biriga tavsiya qilganlar bundan mustasno.",
        "Sog‘liq va bo‘sh vaqt — ko‘p odamlar isrof qiladigan ne’matlar.",
        "Taalluqli bo‘lmagan narsani tark eting, avval muhimini qiling va har bir kunni qadrli qiling.",
      ] },
    ],
    quiz: [
      { q: "Alloh qaysi surada vaqt bilan qasam ichadi?", options: ["Al-Fotiha", "Al-Asr", "An-Nos", "Al-Kavsar"], why: "“Asrga qasamki, albatta inson ziyondadir…”" },
      { q: "Ko‘p odamlar qaysi ikki ne’matni isrof qiladi?", options: ["Pul va oltin", "Sog‘liq va bo‘sh vaqt", "Ovqat va suv", "Mashina va uy"], why: "Ko‘pchilik ularda aldanadi." },
      { q: "Kishi Islomining go‘zalligidan…", options: ["Hammaning yangiliklarini bilish", "O‘ziga taalluqli bo‘lmaganni tark etish", "Ko‘p gapirish", "Kech uxlash"], why: "Behuda ishlardan saqlaning." },
      { q: "Payg‘ambar ﷺ ummati uchun kunning qaysi vaqti barakali bo‘lishini so‘rab duo qilgan?", options: ["Yarim tun", "Erta tong", "Asr payti", "Tushlik payti"], why: "“Allohim, ummatimning erta tonglariga baraka ber.”" },
      { q: "“Besh narsadan oldin besh narsani g‘animat bil”: yoshlikni … oldin", options: ["Qarilikdan", "Maktabdan", "Tushlikdan", "Yozdan"], why: "Kasallikdan oldin sog‘liqni, bandlikdan oldin bo‘sh vaqtni ham." },
      { q: "Yoshligimiz haqida so‘raladi: …", options: ["Uni nimada o‘tkazganimiz", "Bo‘yimiz qancha bo‘lgani", "Do‘stlarimiz kim bo‘lgani", "Hech narsa"], why: "O‘sha kundagi savollardan biri, Ibn Mas’ud rivoyatida." },
      { q: "Najot topgan mo‘minlar nimadan yuz o‘giradi?", options: ["Namozdan", "Behuda gaplardan", "Sadaqadan", "Oiladan"], why: "Al-Mu’minun 23:3." },
      { q: "Ibn Mas’ud eng ko‘p nimaga afsuslanardi?", options: ["Yaxshi amallari ziyoda bo‘lmay tugagan kunga", "Bo‘yi pastligiga", "Ishiga", "Hech narsaga"], why: "Har kuni biror yaxshilik qo‘shilishi kerak." },
      { q: "“Dunyoda xuddi … bo‘l”", options: ["“…podshohdek”", "“…g‘arib yoki yo‘lovchidek”", "“…uxlab yotgandek”", "“…bolakaydek”"], why: "Yo‘lovchi safarini behuda o‘tkazmaydi." },
      { q: "Vaqtni behuda o‘tkazmaslikning yaxshi yo‘li…", options: ["Avval uy vazifasi, keyin o‘yin", "Telefonni dasturxonda tutish", "Bomdodni uxlab o‘tkazish", "Doim “keyinroq” deyish"], why: "Avval muhimi." },
    ],
  },
};
