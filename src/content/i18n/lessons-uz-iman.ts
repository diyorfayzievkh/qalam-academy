import type { LessonTrMap } from "./lessons";

// Iymon olami darslari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  "what-is-iman": {
    title: "Iymon nima?",
    summary: "Qalbda e’tiqod, til bilan iqror va amalda namoyon bo‘lish: iymonning olti rukni bir qarashda.",
    blocks: [
      { text: "Iymon “amn”, ya’ni xavfsizlik va ishonch ma’nosidagi o‘zakdan olingan: biror narsaga shunchalik qattiq ishonishki, qalb unda xotirjam bo‘ladi. Dinda iymon Payg‘ambar ﷺ Allohdan olib kelgan barcha narsaga qalb bilan qat’iy ishonish va buni til bilan iqror qilishdir. Amallar uning mevasidir: ular iymonni ko‘rsatadi, kuchaytiradi va uning shirinligi ular bilan ortadi." },
      { en: "Iymon Allohga, Uning farishtalariga, kitoblariga, payg‘ambarlariga va oxirat kuniga iymon keltirish hamda qadarga, uning yaxshisi va yomoniga iymon keltirishdir." },
      { title: "Iymonning olti rukni", items: [
        "Allohga iymon: Uning borligi, yagonaligi, ismlari va sifatlariga.",
        "Farishtalarga iymon: Unga itoat qiladigan nurdan yaratilgan aziz bandalarga.",
        "Kitoblarga iymon: payg‘ambarlarga nozil qilingan va Qur’on bilan yakunlangan vahiylarga.",
        "Payg‘ambarlarga iymon: Odamdan to ularning oxirgisi Muhammad ﷺ gacha.",
        "Oxirat kuniga iymon: o‘lim, qabr, qayta tirilish, hisob, jannat va do‘zax.",
        "Qadarga iymon: Alloh barcha narsani biladi, yozadi, xohlaydi va yaratadi.",
      ] },
      { title: "Islom, iymon va ehson: Jabroil hadisidagi uch daraja", left: "Daraja", right: "U nima", rows: [
        ["Islom", "Zohiriy bo‘ysunish: tananing besh rukni. Shahodat, namoz, zakot, ro‘za, haj."],
        ["Iymon", "Botiniy e’tiqod: qalbning olti rukni."],
        ["Ehson", "Go‘zallik: Allohga xuddi Uni ko‘rib turgandek ibodat qilish, agar sen Uni ko‘rmasang ham, U seni ko‘rib turishini bilish."],
      ] },
      { title: "Iymon ortib-kamayadimi?", items: [
        "Qur’onda aytilishicha, mo‘minlarga Allohning oyatlari o‘qilganda iymonlari ziyoda bo‘ladi (8:2).",
        "Hanafiy-moturidiy olimlari aytadiki, iymonning asosi, ya’ni uning yaqini bir xil, ortadigani esa uning kuchi, nuri va mevasidir. Boshqa olimlar iymonning o‘zi toat bilan ortib, gunoh bilan kamayadi, deydi. Ikkalasi ham amalda mo‘minning iymoni kuchayib yoki zaiflashib turishiga ittifoq qiladi.",
        "Iymon yetmishdan ortiq shoxdir; eng oliysi “La ilaha illalloh”, eng quyisi yo‘ldan ozor beruvchi narsani olib tashlash, hayo ham iymonning bir shoxidir (Buxoriy 9, Muslim 35).",
      ] },
      { title: "Iymoningni qanday kuchaytirasan", items: [
        "Allohni Uning ismlari va Qur’on orqali tani.",
        "Besh vaqt namozni muhofaza qil; ular iymonning kundalik yangilanishidir.",
        "Allohni ko‘p zikr qil va Uning yaratganlari haqida tafakkur qil.",
        "Yaxshi suhbatdoshlar bilan bo‘l va qalbni zaiflashtiradigan narsalardan saqlan.",
        "Uni duo bilan yangila: Allohdan iymonni senga sevimli qilishini so‘ra (49:7).",
      ] },
      { situation: "Do‘sting deydi: “Ilgari o‘zimni Allohga yaqin his qilardim, lekin oxirgi paytlarda iymonim zaif. Balki men haqiqiy musulmon emasdirman.” Nima deysan?", options: [
        { text: "“To‘g‘ri, musulmon emasligingdan xavotir olishing kerak.”", feedback: "Bu umidsizlikka olib boradi. Zaif lahzalar mo‘minni Islomdan chiqarmaydi." },
        { text: "“Iymon hammada ko‘tarilib-tushib turadi. Kel, birga namoz o‘qiylik va bitta kichik yaxshi odat qo‘shaylik.”", feedback: "Sahobalar ham buni his qilishgan. Iymon zikr, namoz va yaxshi suhbat bilan yangilanadi." },
        { text: "“E’tibor berma, bu muhim emas.”", feedback: "Zaiflikni sezish va u o‘sib ketmasidan oldin muloyimlik bilan davolash kerak." },
      ] },
      { think: [
        "Olti rukndan qaysi biri haqida eng kam o‘ylayman?",
        "Iymonim kuchli ekanini oxirgi marta qachon his qildim va o‘shanda nima qilayotgan edim?",
      ], home: [
        "Har bir oila a’zosidan so‘rang: iymoningizni kuchliroq his qilishingizga nima sabab bo‘ladi?",
        "Olti ruknni birgalikda, har biriga bittadan barmoq bukib, yod oling.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Iymon qalbda e’tiqod, til bilan iqror va amalda namoyon bo‘lishdir.",
        "Uning olti rukni Jabroil hadisidan olingan.",
        "U zikr, namoz va ilm bilan o‘sadi; uni har kuni asra.",
      ] },
    ],
  },

  tawhid: {
    title: "Allohga iymon (tavhid)",
    summary: "Alloh bor, U yagona va Unga hech narsa o‘xshamaydi: rububiyat, uluhiyat, ismlar va sifatlar.",
    blocks: [
      { text: "Allohga iymon boshqa barcha e’tiqodlarning ildizidir. Bu Alloh borligiga; yolg‘iz U hamma narsani yaratishi, egalik qilishi va boshqarishiga; yolg‘iz U ibodatga loyiqligiga; Uning ismlari va sifatlari mukammal va maxluqotdagi hech narsaga o‘xshamasligiga ishonishdir." },
      { label: "Ixlos surasi: to‘rt oyatda tavhid", r: { en: "Ayting: U Alloh yagonadir. Alloh behojat (hamma Unga muhtoj)dir. U tug‘magan va tug‘ilmagan. Va Unga hech kim teng bo‘lmagan. (112-sura)" } },
      { title: "Unga ishora qiluvchi belgilar", items: [
        "Hech narsa yo‘qdan bor bo‘lmaydi. Bino quruvchiga, iz yuruvchiga, bu ulkan va tartibli koinot esa uning Yaratuvchisiga dalolat qiladi (52:35).",
        "Yaratilishdagi tartib yagona Robbga ishora qiladi: “Agar ikkisida (osmon va yerda) Allohdan boshqa ilohlar bo‘lganida, ikkisi ham buzilib ketardi” (21:22).",
        "Fitrat: har bir bola o‘z Yaratuvchisini taniydigan tabiiy fitrat ustida tug‘iladi (Buxoriy 1358). Qiyinchilikda hatto Uni inkor qiladiganlar ham Unga yuzlanadi.",
      ] },
      { title: "Tavhidning uch tomoni", left: "Tomoni", right: "Ma’nosi va misol", rows: [
        ["Rububiyat", "Yolg‘iz Alloh yaratadi, rizq beradi, hayot va o‘lim beradi. Yomg‘ir, rizq va shifo faqat Undan keladi."],
        ["Uluhiyat", "Yolg‘iz Allohga ibodat qilinadi: namoz, duo, qurbonlik, nazr va tavakkul faqat Uning uchun."],
        ["Ismlar va sifatlar", "Alloh O‘ziga isbot qilgan narsani Uni maxluqotga o‘xshatmasdan va inkor ham qilmasdan isbot qilamiz: “Unga o‘xshash hech narsa yo‘q” (42:11)."],
      ] },
      { en: "Alloh, Undan o‘zga iloh yo‘q, U Tirik va abadiy Turuvchidir. Uni na mudroq, na uyqu tutadi…", note: "Qur’ondagi eng ulug‘ oyat (Muslim 810)" },
      { title: "Shirk: tavhidni buzadigan narsa", items: [
        "Katta shirk: Allohdan boshqa narsaga ibodat qilish yoki unga Allohga duo qilgandek duo qilish. Bu shu holda o‘lgan kishini Alloh kechirmaydigan yagona gunohdir (4:48).",
        "Kichik shirk: masalan, ibodatda riyo yoki Allohdan boshqa narsa bilan qasam ichish.",
        "Bugungi yashirin ko‘rinishlari: yaxshilik keltirishi yoki zararni qaytarishi uchun tumorlarga, folbinlarga, munajjimlar bashoratiga yoki “omadli” buyumlarga ishonish.",
      ] },
      { title: "Ibrohim va yulduz, oy va quyosh", scene: "Ibrohim (a.s.) butlarga va samoviy jismlarga sig‘inadigan qavm orasida o‘sdi.", story: [
        "Uni tun qoplaganda, u bir yulduzni ko‘rib, go‘yo qavmiga aytgandek dedi: “Shu mening Robbimmi?” U botganda esa dedi: “Men botuvchilarni sevmayman.”",
        "U chiqib kelayotgan oyni ko‘rdi: “Shu mening Robbimmi?” U botganda dedi: “Agar Robbim meni hidoyat qilmasa, albatta adashganlardan bo‘laman.”",
        "U chiqib kelayotgan quyoshni ko‘rdi: “Shu mening Robbim; bu kattaroq.” U botganda dedi: “Ey qavmim, men sizlar Allohga shirk keltirayotgan narsalardan uzoqman. Men yuzimni osmonlar va yerni yaratgan Zotga qaratdim” (6:76–79).",
      ], lesson: "Ibrohim qavmiga aql bilan o‘zgaradigan, yo‘qoladigan yoki yaratilgan narsa iloh bo‘la olmasligini ko‘rsatdi. Faqat hech qachon botmaydigan Yaratuvchi ibodatga loyiqdir.", check: {
        q: "Nega Ibrohim yulduz, oy va quyoshni robb deb qabul qilmadi?",
        options: ["Ular juda kichik edi", "Ular botib, yo‘qoladi; haqiqiy Robb hech qachon bunday bo‘lmaydi", "Otasi shunday deb aytgan edi", "Ular uzoqda edi"],
        why: "O‘zgaradigan va yo‘qoladigan narsa yaratilgandir, Yaratuvchi emas.",
      } },
      { title: "99 ism", measure: "Ularni yod olib, jannatga kiring" },
      { situation: "Bir qarindoshingiz chaqalog‘ingizga “ko‘z tegmasin” deb ko‘k munchoq beradi. Nima qilasiz?", options: [
        { text: "Har ehtimolga qarshi beshikka osib qo‘yaman.", feedback: "Himoya qilishiga biror buyumga ishonish Payg‘ambar ﷺ ogohlantirgan shirk ko‘rinishidir (Musnadi Ahmad 17422)." },
        { text: "Mehribonlik bilan rahmat aytib, olmayman va o‘rniga chaqaloqqa Falaq, Nos suralari va Payg‘ambarimiz ﷺ duolarini o‘qiyman.", feedback: "Himoya yolg‘iz Allohdan; Sunnat bizga uni so‘rash uchun so‘zlarni beradi, mehribonlik esa qarindoshlikni saqlaydi." },
        { text: "Ularni mushrik deb baland ovozda bahslashaman.", feedback: "Haqni oilani haqorat qilmasdan, muloyimlik bilan yetkazish yaxshiroq." },
      ] },
      { think: [
        "Allohdan ko‘ra ko‘proq suyanadigan narsam bormi: pul, biror odam, ishim?",
        "Hozir Allohning qaysi ismiga eng ko‘p muhtojman?",
      ], home: [
        "Har hafta Allohning bitta ismini tanlang; uni tushuntiring va oilaviy duoda ishlating.",
        "Birgalikda tungi osmonga qarab, hech qachon botmaydigan Zot haqida gaplashing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Yolg‘iz Alloh yaratadi, yolg‘iz Unga ibodat qilinadi va Unga hech narsa o‘xshamaydi.",
        "Shirk, katta bo‘lsin yoki yashirin, tavhidning ziddidir.",
        "Allohni Uning ismlari orqali tani va yolg‘iz Unga tavakkul qil.",
      ] },
    ],
  },

  angels: {
    title: "Farishtalarga iymon",
    summary: "Farishtalar kim, ular nima qiladi va qanday qilib har lahzada biz bilan birga.",
    blocks: [
      { text: "Farishtalar (maloika) Alloh nurdan yaratgan mavjudotlar olamidir (Muslim 2996). Ular Uning aziz bandalari: Unga hech qachon osiy bo‘lmaydi va buyurilgan narsani bajaradi (66:6). Ular yemaydi, ichmaydi, uylanmaydi, charchamaydi va kechayu kunduz tinmay Uni poklab yod etadi (21:20). Biz ularni ko‘rmaymiz, lekin Alloh ular haqida xabar bergani uchun ularga iymon keltiramiz." },
      { title: "Farishtalar, jinlar va insonlar", left: "Farishtalar", right: "Jinlar va insonlar", rows: [
        ["Nurdan yaratilgan", "Jinlar tutunsiz olovdan, insonlar loydan"],
        ["Hech qachon osiy bo‘lmaydi; gunoh qilish ixtiyori yo‘q", "Iroda erkinligi bilan sinaladi; itoat ham, isyon ham qila oladi"],
        ["Yemaydi, ichmaydi, uxlamaydi, uylanmaydi", "Yeydi, ichadi, uxlaydi va oila quradi"],
        ["Son-sanoqsiz", "Oxirat kunida hisob beradi"],
      ] },
      { title: "Qur’on va Sunnatda nomi zikr qilingan farishtalar va ularning vazifalari", items: [
        "Jabroil: payg‘ambarlarga vahiy olib keladi (2:97). Uning olti yuzta qanoti bor (Buxoriy 3232).",
        "Mikoil: yomg‘ir va o‘simliklarga mas’ul.",
        "Isrofil: Oxirat kunida Surni chaladi.",
        "O‘lim farishtasi yordamchilari bilan: jonlarni belgilangan vaqtda oladi (32:11).",
        "Har bir insonda ikki aziz kotib bor, ular har bir amal va so‘zni yozadi (82:10–12, 50:17–18).",
        "Munkar va Nakir: qabrda har bir insondan so‘roq qiladi.",
        "Molik: do‘zax qo‘riqchisi (43:77). Olimlar Rizvonni jannat qo‘riqchisi sifatida zikr qilishgan.",
        "Allohning amri bilan har bir insonni himoya qiladigan muhofiz farishtalar (13:11).",
      ] },
      { en: "U biror so‘z aytmaydiki, uning yonida tayyor turgan kuzatuvchi bo‘lmasa." },
      { title: "Kuningdagi farishtalar", items: [
        "Ular yo‘llarni kezib, zikr majlislarini izlaydi va ularni qanotlari bilan osmongacha o‘rab oladi (Buxoriy 6408).",
        "Masjidda namozni kutib o‘tirgan kishi uchun farishtalar duo qiladi (Buxoriy 647).",
        "Birodaring uchun u yo‘qligida duo qilsang, bir farishta: “Senga ham shunday bo‘lsin”, deydi (Muslim 2732).",
        "Farishtalar it yoki suratlar bor uyga kirmaydi (Buxoriy 3225) va odamlarni bezovta qiladigan narsalardan, masalan, yomon hidlardan bezovta bo‘ladi (Muslim 564).",
        "Har kuni tun va kun farishtalari bomdod va asrda almashadi, Alloh ulardan bandalarini qanday holda qoldirganlarini so‘raydi: “Ularni namoz o‘qiyotgan holda qoldirdik va namoz o‘qiyotgan holda keldik” (Buxoriy 555).",
      ] },
      { title: "Ufqni to‘ldirgan Jabroil", scene: "Ilk vahiy davri, Makka yaqinida. Payg‘ambar ﷺ yurib ketayotganida osmondan bir ovoz eshitdi.", story: [
        "U boshini ko‘tarib, Hiro g‘orida uning oldiga kelgan farishtani osmon bilan yer orasida kursida o‘tirganini ko‘rdi.",
        "U shunchalik hayajonlandiki, “Meni o‘rang, meni o‘rang!” deya uyiga shoshildi. Alloh nozil qildi: “Ey o‘ranib olgan zot, tur va ogohlantir” (74:1–2).",
        "U Jabroilni asl qiyofasida ikki marta ko‘rgan va uni butun ufqni to‘ldirgan, olti yuz qanotli deb tasvirlagan (Buxoriy 3232–3235).",
      ], lesson: "Farishtalar haqiqiy va ulug‘dir. Ufqni to‘ldirgan o‘sha Jabroil biz o‘qiydigan Qur’onning har bir oyatini olib kelgan.", check: {
        q: "Payg‘ambar ﷺ Jabroilni nechta qanotli deb tasvirlagan?",
        options: ["Ikkita", "Oltita", "Olti yuzta", "Yetmishta"],
        why: "U uni ufqni to‘ldirgan asl qiyofasida ko‘rgan.",
      } },
      { title: "“Omin” deyayotgan farishtalar", measure: "O‘tgan gunohlaring kechiriladi" },
      { situation: "Xonangda telefon bilan yolg‘izsan va lentangda nomaqbul narsa chiqib qoldi. Hech kim hech qachon bilmaydi. Nima qilasan?", options: [
        { text: "Varaqlashda davom etaman; hech kim ko‘rmayapti.", feedback: "Ikki aziz kotib yozib turibdi va Alloh ko‘radi. “Hech kim ko‘rmayapti” degan gap hech qachon rost emas." },
        { text: "Ko‘zimni olib, uni bloklab, “astag‘firulloh” deyman.", feedback: "Yozib turgan farishtalarni va ko‘rib turgan Allohni eslash yolg‘izlikdagi eng yaxshi himoyadir." },
        { text: "Hozir ko‘rib, keyin tavba qilaman.", feedback: "Gunohni tanlab turib, keyin tavba qilishni rejalashtirish tuzoqdir; ertangi kun va’da qilinmagan." },
      ] },
      { think: [
        "Agar bugun so‘zlarimni yozayotgan ikki farishtani ko‘ra olsam, nimani o‘zgartirgan bo‘lardim?",
        "Boshqalar uchun ular yo‘qligida qanchalik tez-tez duo qilaman?",
      ], home: [
        "Bolalarga ikki aziz kotib haqida aytib bering: biri yaxshilikni, biri yomonlikni yozadi.",
        "Bo‘sh xonaga kirganda salom berishni oilaviy odat qiling; farishtalar eshitadi.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Farishtalar nurdan yaratilgan va Allohga hech qachon osiy bo‘lmaydi.",
        "Har birining vazifasi bor: vahiy, yomg‘ir, o‘lim, yozish, himoya.",
        "Ular doim biz bilan: yozadi, himoya qiladi va yaxshilar uchun duo qiladi.",
      ] },
    ],
  },

  books: {
    title: "Nozil qilingan kitoblarga iymon",
    summary: "Alloh har bir davrni vahiy bilan hidoyat qilgan; Qur’on oxirgi, mukammal va muhofaza qilingan kitobdir.",
    blocks: [
      { text: "Alloh insoniyatni hidoyatsiz qoldirmadi. U payg‘ambarlariga O‘z so‘zlari, qonunlari va nurini o‘z ichiga olgan kitoblar yubordi. Musulmon ularning hammasiga nozil qilingan holida iymon keltiradi (4:136) va ularning oxirgisi, o‘zidan oldingilarni tasdiqlovchi va ularni nazorat qiluvchi Qur’onga ergashadi (5:48)." },
      { title: "Qur’onda nomi zikr qilingan kitoblar", items: [
        "Ibrohim va Musoning suhuflari (sahifalari) (87:19).",
        "Tavrot, Musoga nozil qilingan (5:44).",
        "Zabur, Dovudga berilgan (4:163).",
        "Injil, Isoga berilgan (5:46).",
        "Qur’on, Muhammad ﷺ ga 23 yil davomida nozil qilingan.",
      ] },
      { title: "Oldingi kitoblar va Qur’on", left: "Oldingi kitoblar", right: "Qur’on", rows: [
        ["Muayyan qavmga muayyan vaqt uchun yuborilgan", "Butun insoniyatga Oxirat kunigacha yuborilgan (34:28)"],
        ["Ularni muhofaza qilish o‘z ahliga topshirilgan (5:44)", "Uni Allohning O‘zi muhofaza qiladi: “Zikrni Biz nozil qildik va albatta uni Biz saqlaymiz” (15:9)"],
        ["Matnining bir qismi vaqt o‘tib o‘zgartirilgan yoki yo‘qolgan (2:79)", "Harfma-harf saqlangan, millionlab odamlar yod olgan"],
        ["Ularda Alloh nozil qilgan narsaga iymon keltiramiz", "Unga iymon keltiramiz va unga ergashamiz"],
      ] },
      { en: "Albatta, Zikrni Biz nozil qildik va albatta, uni Biz saqlovchimiz." },
      { title: "Qur’on qanday saqlangan", items: [
        "U 23 yil davomida asta-sekin nozil qilingan, sahobalar uni nozil bo‘lgan zahoti yod olgan, Zayd ibn Sobit kabi kotiblar yozib borgan.",
        "Jabroil har Ramazonda Payg‘ambar ﷺ bilan butun Qur’onni takrorlagan, oxirgi yilida esa ikki marta (Buxoriy 4998).",
        "Ko‘plab qorilar shahid bo‘lgach, Abu Bakr (r.a.) uni bir mushafga jamlatgan; Usmon (r.a.) esa yirik shaharlarga andoza nusxalarni yuborgan.",
        "Bugun millionlab odamlar, ularning ko‘plari bolalar, uni to‘liq yod olgan va dunyodagi har bir nusxa bir-biriga mos keladi.",
      ] },
      { title: "Qur’on oldidagi burchlarimiz", items: [
        "U Allohning kalomi ekaniga, hech bir inson yaratmaganiga iymon keltirish.",
        "Uni to‘g‘ri va muntazam o‘qish.",
        "Uni tushunish va uning ustida tafakkur qilish (47:24).",
        "Unga amal qilish va uni o‘rgatish.",
        "Mushafni hurmat qilish: unga tahorat bilan tegish, toza va baland joyda saqlash.",
      ] },
      { title: "Qur’on shafoat qiladi", measure: "Qiyomat kunida shafoatchi" },
      { situation: "Ukangiz mushafni oyoq kiyimi yonida, yerda qoldirib ketdi. Nima qilasiz?", options: [
        { text: "Qoldiraman, bu shunchaki qog‘oz.", feedback: "Mushafda Allohning so‘zlari bor va u hurmatga loyiq." },
        { text: "Uni olib, baland va toza joyga qo‘yaman va nega ekanini muloyimlik bilan tushuntiraman.", feedback: "Mehribonlik bilan ko‘rsatilgan hurmat nasihatdan ko‘ra ko‘proq o‘rgatadi." },
        { text: "Hammaning oldida unga baqiraman.", feedback: "Muloyimlik bilan va yolg‘izlikda tuzat; qo‘pollik bolalarni uzoqlashtiradi." },
      ] },
      { think: [
        "O‘rtacha bir haftada Qur’ondan necha sahifa o‘qiyman?",
        "Yoddan bilsam ham, ma’nosini tushunmaydigan oyat bormi?",
      ], home: [
        "Har hafta birgalikda bitta qisqa surani ma’nosi bilan o‘qing.",
        "Har bir bola yod olgan oyatlari uchun kichkina daftar tutsin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Alloh suhuflar, Tavrot, Zabur, Injil va Qur’onni nozil qilgan.",
        "Qur’on oxirgi kitob, barcha odamlar uchun, Alloh tomonidan muhofaza qilingan.",
        "Uni o‘qi, tushun, unga amal qil va uni hurmat qil.",
      ] },
    ],
  },

  prophets: {
    title: "Payg‘ambarlar va rasullarga iymon",
    summary: "Alloh ularni nega yubordi, ularning umumiy jihatlari va nega Muhammad ﷺ oxirgi payg‘ambar.",
    blocks: [
      { text: "Alloh O‘z xabarini odamlarga yetkazish uchun insoniyatning eng yaxshilarini tanladi. “Biz har bir ummatga: Allohga ibodat qilinglar va tog‘utdan saqlaninglar, deb payg‘ambar yubordik” (16:36). Musulmon ularning hammasiga iymonda farq qilmasdan iymon keltiradi (2:285), ularni sevadi va ularning oxirgisi Muhammad ﷺ ga ergashadi." },
      { title: "Nabiy va rasul", left: "Nabiy (payg‘ambar)", right: "Rasul (elchi)", rows: [
        ["Allohdan vahiy oladi", "Vahiy oladi va biror qavmga xabar bilan yuboriladi"],
        ["Ko‘pincha oldingi shariatga ergashib, uni yangilaydi", "Ko‘pincha yangi shariat yoki kitob olib keladi"],
        ["Har bir rasul nabiydir", "Har bir nabiy rasul emas"],
      ] },
      { title: "Barcha payg‘ambarlarning umumiy jihatlari", items: [
        "Bir xil asosiy xabar: tavhid, yolg‘iz Allohga ibodat qilish.",
        "Rostgo‘ylik, omonatdorlik, xabarni to‘liq yetkazish va zakovat. Ular katta gunohlardan va xabarni yetkazishda xatodan ma’sumdir.",
        "Ular inson edi: yeyishgan, uxlashgan, uylanishgan, kasal bo‘lishgan va vafot etishgan. Ularning mo‘jizalari Allohning izni bilan bo‘lgan.",
        "Ular eng ko‘p sinalgan: odamlarning eng qattiq sinalganlari payg‘ambarlar, keyin ularga o‘xshaganlardir (Termiziy 2398).",
      ] },
      { title: "Qur’onda nomi zikr qilingan 25 payg‘ambar", items: [
        "Odam, Idris, Nuh, Hud, Solih, Ibrohim, Lut, Ismoil, Ishoq, Ya’qub, Yusuf, Ayyub, Shuayb.",
        "Muso, Horun, Zulkifl, Dovud, Sulaymon, Ilyos, Alyasa’, Yunus, Zakariyo, Yahyo, Iso va Muhammad ﷺ.",
        "Ulul-azm, ya’ni eng qat’iyatli besh payg‘ambar: Nuh, Ibrohim, Muso, Iso va Muhammad ﷺ (33:7, 46:35).",
        "Yana ko‘plab payg‘ambarlar yuborilgan, ularning ismlari bizga aytilmagan (4:164).",
      ] },
      { en: "Muhammad sizlarning erkaklaringizdan birortasining otasi emas, balki u Allohning Rasuli va payg‘ambarlarning xotimidir." },
      { title: "Oxirgi g‘isht", scene: "Payg‘ambar ﷺ payg‘ambarlar orasidagi o‘rnini tushuntirish uchun sahobalariga bir misol keltirdi.", story: [
        "“Mening va mendan oldingi payg‘ambarlarning misoli bir uy qurgan kishiga o‘xshaydi. U uyni yaxshi qurib, chiroyli qildi, faqat bir burchakda bitta g‘ishtning o‘rni qoldi.",
        "Odamlar uning atrofida aylanib, unga qoyil qolishar va: qani endi mana bu g‘isht o‘z joyiga qo‘yilsa, derdilar!",
        "O‘sha g‘isht menman va men payg‘ambarlarning xotimiman.”",
      ], lesson: "Har bir payg‘ambar hidoyatning bitta uyining bir qismini qurdi. Muhammad ﷺ uni yakunladi; hech narsa kam emas va undan keyin payg‘ambar kelmaydi.", check: {
        q: "Misolda Payg‘ambar ﷺ nima?",
        options: ["Poydevor", "Uyni yakunlaydigan oxirgi g‘isht", "Tom", "Eshik"],
        why: "U payg‘ambarlarning xotimidir.",
      } },
      { title: "Muhammad ﷺ ni nima alohida qiladi", items: [
        "U butun insoniyatga yuborilgan, oldingi payg‘ambarlar esa o‘z qavmlariga yuborilgan (Muslim 523).",
        "Unga abadiy mo‘jiza bo‘lgan Qur’on berilgan.",
        "U Qiyomat kunida birinchi bo‘lib shafoat qiladi va jannat eshiklaridan birinchi bo‘lib kiradi.",
        "U olamlarga rahmatdir (21:107).",
      ] },
      { situation: "Sinfdoshlaringdan biri Iso (a.s.) payg‘ambarni masxara qilmoqda. Nima qilasan?", options: [
        { text: "Birga kulaman; u bizning payg‘ambarimiz emas.", feedback: "Iso (a.s.) Islomdagi besh eng ulug‘ payg‘ambardan biri; unga iymon keltirish dinimizning bir qismi." },
        { text: "Xotirjam aytaman: musulmonlar Isoni Allohning ulug‘ rasuli sifatida sevadi va hurmat qiladi, men hech bir payg‘ambarni masxara qilishni qabul qilmayman.", feedback: "Barcha payg‘ambarlarni xotirjam hurmat bilan himoya qilish Islomning haqligini ko‘rsatadi." },
        { text: "Ularning e’tiqodini masxara qilib javob beraman.", feedback: "Masxaraga masxara bilan javob berish payg‘ambarlarning yo‘li emas." },
      ] },
      { think: [
        "Qaysi payg‘ambarning hikoyasini eng kam bilaman? Qaysi biri hozirgi holatimda menga yordam beradi?",
        "Kundalik ishlarda Sunnatiga ergashadigan darajada Payg‘ambar ﷺ ni sevamanmi?",
      ], home: [
        "25 ismni oila bo‘lib, qo‘shiqdek takrorlab yod oling.",
        "Har hafta uxlashdan oldin bitta payg‘ambar hikoyasini aytib bering.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Alloh har bir ummatga bitta xabar bilan rasullar yubordi: tavhid.",
        "Biz ularning hammasiga, nomi zikr qilinmaganlarga ham iymon keltiramiz.",
        "Muhammad ﷺ butun insoniyatga yuborilgan oxirgi rasuldir.",
      ] },
    ],
  },

  "last-day": {
    title: "Oxirat kuniga iymon",
    summary: "O‘lim, qabr, qayta tirilish, Mezon, Sirot, jannat va do‘zax.",
    blocks: [
      { text: "Bu hayot oxiri emas. Har bir inson vafot etadi, qabrda so‘roq qilinadi, qayta tiriltiriladi va hisob uchun Alloh huzurida turadi. Oxirat kuniga iymon hayotga ma’no beradi: hech bir yaxshilik zoe bo‘lmaydi va hech bir zulm javobsiz qolmaydi. “Kim zarra miqdoricha yaxshilik qilsa, uni ko‘radi va kim zarra miqdoricha yomonlik qilsa, uni ko‘radi” (99:7–8)." },
      { title: "O‘limdan keyingi safar, tartib bilan", items: [
        "O‘lim: jonni belgilangan vaqtda o‘lim farishtasi oladi.",
        "Qabr (barzax): ikki farishta so‘raydi: Robbing kim? Dining nima? Senga yuborilgan bu kishi kim? Mo‘min uchun qabr bog‘ga, boshqalar uchun chuqurga aylanadi (Termiziy 2460).",
        "Sur: Isrofil chaladi, hamma narsa o‘ladi; keyin ikkinchi chalinishda hamma tiriladi.",
        "Mahshar: odamlar yalangoyoq va yalang‘och, ellik ming yillik Kunda turadi (70:4), quyosh yaqinlashtiriladi, har kim amaliga qarab terga botadi (Muslim 2864).",
        "Shafoat: odamlar payg‘ambardan payg‘ambarga borib, nihoyat Muhammad ﷺ ga kelishadi, u sajda qilib, hisob boshlanishi uchun shafoat qiladi.",
        "Amal daftarlari: har kim o‘z daftarini o‘ng yoki chap qo‘liga oladi (69:19–26).",
        "Mezon: amallar tortiladi; “Biz adolat tarozilarini o‘rnatamiz” (21:47).",
        "Sirot: do‘zax ustiga qo‘yiladi; odamlar undan amallariga qarab o‘tadi, ba’zilari chaqmoqdek, ba’zilari emaklab (Buxoriy 7439).",
        "Payg‘ambar ﷺ ning Havzi: sutdan oq, asaldan shirin; kim undan ichsa, hech qachon chanqamaydi (Buxoriy 6579).",
        "Jannat yoki do‘zax: oxirgi, abadiy maskan.",
      ] },
      { title: "Jannat va do‘zax", left: "Jannat", right: "Do‘zax (Jahannam)", rows: [
        ["Hech bir ko‘z ko‘rmagan, hech bir quloq eshitmagan va hech bir qalbga kelmagan narsalar (Buxoriy 3244)", "Uning olovi bu dunyo olovidan yetmish barobar issiqroq (Buxoriy 3265)"],
        ["Uning eng kichik joyi bu dunyodan o‘n barobar katta (Muslim 186)", "Uning ahli yaxshilik qilish uchun qaytarilishni orzu qiladi"],
        ["Eng katta quvonch: Allohni ko‘rish (Muslim 181)", "Eng katta yo‘qotish: Undan to‘silib qolish"],
        ["Abadiy; kasallik, qarilik, g‘am va o‘lim yo‘q", "Kufr holida o‘lganlar uchun abadiy; gunohkor mo‘minlar shafoat bilan chiqarilishi mumkin"],
      ] },
      { title: "Mezon", measure: "Zarra miqdoricha yaxshilik ham hisobga olinadi" },
      { title: "Jannatga oxirgi kirgan kishi", scene: "Payg‘ambar ﷺ do‘zaxdan eng oxirida chiqib, jannatga kiradigan kishini tasvirlab bergan.", story: [
        "U do‘zaxdan goh yurib, goh yiqilib emaklab chiqadi. Alloh unga bir daraxtni ko‘rsatadi, u boshqa hech narsa so‘ramaslikka va’da berib, unga yaqinlashtirishni so‘raydi. Keyin yana bir daraxt, yana biri va har safar u va’da berib, yana so‘raydi.",
        "Nihoyat u jannat eshigiga keltiriladi, uning ahlini eshitib: “Robbim, meni kiritgin”, deydi.",
        "Alloh aytadi: “Senga dunyocha va uning o‘n barobari berilsa, rozi bo‘lasanmi?” U kishi aytadi: “Olamlarning Robbi bo‘la turib, meni masxara qilyapsanmi?” Shunda Payg‘ambar ﷺ kulib yubordi.",
        "Bu jannatdagi eng past darajadir.",
      ], lesson: "Agar jannatdagi eng kichik daraja bu dunyoning o‘n barobari bo‘lsa, eng oliysini tasavvur qil. Allohning rahmati esa do‘zaxdan zo‘rg‘a chiqqan kishiga ham yetadi.", check: {
        q: "Jannatga oxirgi kirgan kishi nima oladi?",
        options: ["Kichik bir bog‘", "Bu dunyocha va uning o‘n barobari", "Hech narsa", "Faqat bir qasr"],
        why: "Bu jannatdagi eng past darajadir.",
      } },
      { situation: "Imtihonda o‘qituvchi ko‘rmasdan do‘stingning javoblarini ko‘chirib olishing mumkin. Nimani eslaysan?", options: [
        { text: "Hech kim hech qachon bilmaydi.", feedback: "Har bir amal yozilmoqda va daftar Oxirat kunida o‘qiladi." },
        { text: "Har bir amal Mezonda bo‘ladi; daftarimda gunoh bo‘lgandan ko‘ra past baho olganim yaxshi.", feedback: "Oxirat kuniga iymon hech kim ko‘rmaganda ham rostgo‘ylikka aylanadi." },
        { text: "Ko‘chirib olaman, keyin uni muvozanatlash uchun sadaqa qilaman.", feedback: "Gunohni “tuzatish” rejasi bilan rejalashtirish tavba emas, ko‘chirish esa boshqalarga ham zulmdir." },
      ] },
      { think: [
        "Agar bugun amal daftarim o‘qilsa, qaysi sahifani yirtib tashlashni xohlardim?",
        "Mezonimda hammasidan ustun bo‘lishini xohlaydigan bitta amal qaysi?",
      ], home: [
        "So‘rang: sizningcha jannat qanday bo‘ladi? Keyin unga oxirgi kirgan kishi haqidagi hadisni aytib bering.",
        "“Mezonda og‘ir” amallarning oilaviy ro‘yxatini tuzing va hafta davomida belgilab boring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "O‘lim, qabr, qayta tirilish, hisob, keyin jannat yoki do‘zax.",
        "Har bir zarra yaxshilik va yomonlik yoziladi va tortiladi.",
        "Oxirat kuniga iymon bugun rostgo‘ylik, sabr va umidga aylanadi.",
      ] },
    ],
  },

  qadar: {
    title: "Qadarga iymon",
    summary: "Alloh barcha narsani biladi, yozadi, xohlaydi va yaratadi, biz esa tanlovlarimiz uchun mas’ulmiz.",
    blocks: [
      { text: "Qadarga iymon yaxshi bo‘lsin, yomon bo‘lsin, sodir bo‘ladigan har bir narsa Allohning ilmi, yozishi, xohishi va yaratishi bilan bo‘lishiga ishonishdir. “Albatta, Biz har bir narsani o‘lchov bilan yaratdik” (54:49). Bu mo‘minga xotirjamlik beradi: senga yetgan narsa sendan o‘tib ketishi mumkin emas edi, sendan o‘tib ketgan narsa esa senga yetishi mumkin emas edi (Termiziy 2516)." },
      { title: "Qadarning to‘rt darajasi", items: [
        "Ilm: Alloh o‘tmish, hozir va kelajakdagi hamma narsani to‘liq tafsiloti bilan biladi.",
        "Yozish: Alloh osmonlar va yerni yaratishdan ellik ming yil oldin hamma narsaning o‘lchovlarini yozib qo‘ygan (Muslim 2653).",
        "Xohish: Uning mulkida U xohlagandan boshqa hech narsa sodir bo‘lmaydi.",
        "Yaratish: Alloh barcha narsaning, jumladan bandalarining amallarining ham Yaratuvchisidir.",
      ] },
      { title: "Birga tutiladigan ikki haqiqat", left: "Alloh taqdir qiladi", right: "Biz mas’ulmiz", rows: [
        ["Hech narsa Uning xohishidan tashqarida sodir bo‘lmaydi", "Biz tanlaymiz va tanlovlarimiz uchun hisob beramiz (18:29)"],
        ["Natijalar Uning qo‘lida", "Harakat bizning burchimiz: “Tuyangni bog‘la, keyin Allohga tavakkul qil”"],
        ["O‘tgan narsani sabr bilan qabul qilamiz", "Gunoh qilishdan oldin qadarni bahona qilmaymiz"],
        ["Rizq yozilgan", "Biz uni izlashga buyurilganmiz"],
      ] },
      { en: "Amal qilinglar, chunki har kimga nima uchun yaratilgan bo‘lsa, o‘sha oson qilinadi.", note: "Sahobalar: unda yozilganga suyanib, amalni tark etaylikmi, deb so‘raganlarida aytilgan" },
      { title: "Qadar kundalik hayotni qanday shakllantiradi", items: [
        "Farovonlikda: bu faqat o‘z aqlingdan emas, Undan kelganini bilib, Allohga shukr qil.",
        "Qiyinchilikda: bu yozilgani va savob olib kelishini bilib, sabr qil. Mo‘minning ishi butunlay yaxshilikdir (Muslim 2999).",
        "Qaror qabul qilishdan oldin: sabablarni qil, istixora namozini o‘qi, keyin Unga tavakkul qil.",
        "Xatodan keyin: “qani endi men … qilganimda” dema, chunki “qani endi” shaytonga eshik ochadi. Ayt: “Alloh taqdir qildi va U xohlaganini qildi” (Muslim 2664).",
        "Duo ham qadarning bir qismi: u Alloh narsalar sodir bo‘lishi uchun belgilagan sabablardandir.",
      ] },
      { title: "Muso Odam bilan bahslashganda", scene: "Payg‘ambar ﷺ Odam va Muso (a.s.) o‘rtasidagi bir suhbat haqida aytib bergan.", story: [
        "Muso dedi: “Sen Odamsan, xatoying bizni jannatdan chiqargan!”",
        "Odam dedi: “Sen Musosan, Alloh seni O‘z risolati va kalomi uchun tanlagan. Meni yaratishidan oldin Alloh men uchun yozib qo‘ygan narsa uchun ayblaysanmi?”",
        "Payg‘ambar ﷺ dedi: “Shunday qilib Odam bahsda g‘olib chiqdi.”",
      ], lesson: "Odam allaqachon tavba qilgan va kechirilgan edi; u gunohni oqlash uchun emas, o‘tib ketgan musibat haqida qadarga ishora qildi. Bo‘lib o‘tgan narsa uchun qadardan taskin topishimiz mumkin, lekin uni hech qachon gunohga bahona qilmasligimiz kerak.", check: {
        q: "Odam Musoga javob berganda nimaga ishora qilgan edi?",
        options: ["Gunohda davom etish uchun bahonaga", "Allaqachon yozilgan va tavba qilingan musibatga", "Yoshiga", "Musoning xatolariga"],
        why: "Qadar o‘tgan musibatlarda taskin beradi; u hech qachon gunohga bahona emas.",
      } },
      { situation: "Qattiq o‘qiding, lekin muhim imtihondan yiqilding. Do‘sting deydi: “Bu sening qadaring edi, keyingi safar nega urinasan?” Nima deysan?", options: [
        { text: "“To‘g‘ri, harakat befoyda.”", feedback: "Sahobalarga aytilgan: amal qilinglar, har kimga nima uchun yaratilgan bo‘lsa, o‘sha oson qilinadi." },
        { text: "“Bu yozilgan edi, shuning uchun uni sabr bilan qabul qilaman; qayta o‘qish ham menga buyurilgan narsaning bir qismi.”", feedback: "O‘tganni qabul qil va kelajak uchun sabablarni qil. Qadarning muvozanati shu." },
        { text: "“Bu adolatsizlik; Alloh menga zulm qildi.”", feedback: "Alloh hech kimga zulm qilmaydi; qiyinchilikda yashirin yaxshilik va savob bor." },
      ] },
      { think: [
        "O‘tmishimda “qani endi” deb yuradigan narsa bormi?",
        "Duoni rejalarimning bir qismi qilamanmi yoki faqat ular barbod bo‘lgandan keyin duo qilamanmi?",
      ], home: [
        "Bolalarga o‘rgating: “Menga yetgan narsa mendan hech qachon o‘tib ketmasdi.”",
        "Uyda biror narsa noto‘g‘ri ketsa, birgalikda aytishni mashq qiling: “Qaddarallohu va mo sho‘a fa’al.”",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qadarning to‘rt darajasi bor: ilm, yozish, xohish va yaratish.",
        "Alloh taqdir qiladi, biz esa tanlovlarimiz uchun mas’ulmiz.",
        "O‘tganni sabr bilan qabul qil; kelajak uchun harakat qil va duo qil.",
      ] },
    ],
  },
};

export default T;
