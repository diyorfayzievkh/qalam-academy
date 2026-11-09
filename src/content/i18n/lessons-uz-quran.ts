import type { LessonTrMap } from "./lessons";

// Qur’on asoslari darslari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  "what-is-quran": {
    title: "Qur’on nima?",
    summary: "Allohning kalomi, uning suralari, oyatlari va qismlari hamda uni boshqa har qanday kitobdan nima ajratib turishi.",
    blocks: [
      { text: "Qur’on Allohning kalomi bo‘lib, Payg‘ambar Muhammad ﷺ ga Jabroil farishta orqali arab tilida nozil qilingan, mushafda yozilgan, bizga tavotur bilan yetib kelgan va tilovati ibodat hisoblanadi. U nozil qilingan oxirgi kitob bo‘lib, o‘zidan oldingi kitoblardagi haqiqatni tasdiqlaydi va muhofaza qiladi." },
      { text: "“Qur’on” so‘zi “o‘qish”, “o‘qiladigan narsa” degan ma’noni bildiradi. U yozilishidan oldin o‘qilgan va bugungi kungacha millionlab odamlar uni to‘liq qalbida olib yuradi." },
      { en: "Albatta, Zikrni Biz nozil qildik va albatta, uni Biz saqlovchimiz." },
      { title: "Raqamlarda Qur’on", items: [
        "114 sura, Fotihadan Nosgacha.",
        "6236 oyat, keng tarqalgan Hafs mushafida qo‘llaniladigan Kufa hisobiga ko‘ra.",
        "30 juz, shuning uchun uni kuniga bir juzdan bir oyda o‘qib chiqish mumkin, hamda 60 hizb (yarim juz).",
        "Eng uzun sura: Baqara (286 oyat). Eng qisqasi: Kavsar (3 oyat).",
        "Taxminan 23 yil davomida nozil qilingan: taxminan 13 yil Makkada va 10 yil Madinada.",
        "Tavba (9) surasidan boshqa har bir sura “Bismillah” bilan boshlanadi.",
      ] },
      { title: "Makkiy va madaniy suralar", left: "Makkiy (hijratdan oldin)", right: "Madaniy (hijratdan keyin)", rows: [
        ["Asosan qisqaroq, kuchli ohangli", "Asosan uzunroq, batafsil oyatlar"],
        ["E’tiqod: Allohning yagonaligi, oxirat, payg‘ambarlar", "Ibodat, oila, savdo va jamiyat ahkomlari"],
        ["Misol: Alaq, Ixlos, Yosin", "Misol: Baqara, Niso, Hujurot"],
      ] },
      { title: "Uni nima noyob qiladi", items: [
        "U tirik mo‘jiza: Alloh eng fasohatli arablarni uning birorta surasiga o‘xshashini keltirishga da’vat qildi, ular esa qila olmadi (2:23, 17:88).",
        "U harfma-harf saqlangan: Toshkentdan Marokashgacha bir xil matn o‘qiladi.",
        "U har bir davr uchun hidoyat: “Bu shubhasiz Kitob, taqvodorlar uchun hidoyatdir” (2:2).",
        "U javonda saqlash uchun emas, o‘qish, tushunish va amal qilish uchun nozil qilingan.",
      ] },
      { situation: "Do‘stingning uyida baland javonda changga botgan chiroyli Qur’onni ko‘rib qolding. Do‘sting: “Uni baraka uchun saqlaymiz”, deydi. Muloyimlik bilan nima taklif qilasan?", options: [
        { text: "“Ajoyib, u aynan shuning uchun.”", feedback: "Uni hurmat qilish yaxshi, lekin Qur’on o‘qilishi va amal qilinishi uchun nozil qilingan." },
        { text: "“Har oqshom birga bir sahifadan o‘qisak-chi?”", feedback: "Baraka eng avvalo uni o‘qish, tushunish va unga amal qilishdan keladi." },
        { text: "“O‘qimasang, uni tashlab yuborishing kerak.”", feedback: "Aslo. Mushafga doimo hurmat bilan munosabatda bo‘lish kerak." },
      ] },
      { think: [
        "O‘tgan oyda Qur’onning qancha qismini o‘qidim?",
        "Qaysi surani eng yaxshi bilaman va u nima haqida?",
      ], home: [
        "Birgalikda mushafni olib toping: birinchi sura, eng uzun, eng qisqa va Bismillahsiz sura.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qur’on Allohning kalomi, Jabroil orqali arab tilida nozil qilingan.",
        "114 sura, 6236 oyat, 30 juz, 23 yil davomida.",
        "Allohning O‘zi uni saqlashni va’da qilgan.",
      ] },
    ],
  },

  revelation: {
    title: "Qur’on qanday nozil bo‘lgan",
    summary: "Qadr kechasi, g‘ordagi ilk so‘zlar, vahiy qanday kelgani va nega u oz-ozdan kelgani.",
    blocks: [
      { text: "Qur’on ikki bosqichda nozil bo‘lgan. Avval Alloh uni Qadr kechasida Lavhul mahfuzdan dunyo osmoniga tushirdi. Keyin Jabroil uni Payg‘ambar ﷺ ga yigirma uch yil davomida, voqealar sodir bo‘lishi va savollar berilishiga qarab, qismma-qism olib keldi." },
      { en: "Albatta, Biz uni Qadr kechasida nozil qildik." },
      { title: "Hiro g‘oridagi “O‘qi!”", scene: "Ramazon oyida Makka ustidagi tog‘da sokin bir g‘or.", story: [
        "O‘sha paytda qirq yoshda bo‘lgan Payg‘ambar ﷺ kechalab yolg‘iz ibodat qilish uchun Hiro g‘origa borardi.",
        "Bir kecha farishta kelib: “O‘qi!” dedi. U: “Men o‘qiydigan emasman”, dedi. Farishta uni qattiq quchoqlab, keyin qo‘yib yubordi: “O‘qi!” Uch marta.",
        "Keyin: “Yaratgan Robbing nomi bilan o‘qi. U insonni laxta qondan yaratdi. O‘qi, Robbing eng karamlidir, U qalam bilan o‘rgatdi, insonga bilmagan narsasini o‘rgatdi.”",
        "U titrab uyiga, Xadichaning oldiga qaytdi: “Meni o‘rang!” Xadicha unga tasalli berdi va birinchi bo‘lib iymon keltirdi.",
      ], lesson: "Qur’onning birinchi so‘zi “O‘qi” bo‘ldi, yaratilishdan keyin u zikr qilgan birinchi ne’mat esa qalamdir. Dinimiz ilm o‘rganish bilan boshlanadi." },
      { title: "Vahiy qanday kelgan", items: [
        "Ba’zan qo‘ng‘iroq jarangidek; bu unga eng og‘ir bo‘lgan, hatto juda sovuq kunda ham peshonasidan ter tomchilardi (Buxoriy 2).",
        "Ba’zan farishta inson qiyofasida kelib, u bilan gaplashardi va u tushunardi (Buxoriy 2).",
        "Har Ramazonda Jabroil u bilan butun Qur’onni takrorlardi; oxirgi yilida ikki marta (Buxoriy 4998).",
      ] },
      { title: "Nega oz-ozdan?", items: [
        "Har bir qiyinchilikda Payg‘ambar ﷺ ning qalbini mustahkamlash uchun (25:32).",
        "Sahobalar keyingisidan oldin har bir qismni yod olishlari, tushunishlari va unga amal qilishlari uchun.",
        "Haqiqiy savollarga ular kelgan sari javob berish uchun: “Sendan … haqida so‘raydilar” qayta-qayta keladi.",
        "Odatlarni asta-sekin o‘zgartirish uchun, xuddi sharobning bosqichma-bosqich harom qilinishi kabi.",
      ] },
      { title: "Birinchi va oxirgi", left: "Birinchi nozil bo‘lgan", right: "Oxirgi nozil bo‘lganlardan", rows: [
        ["Alaq 96:1–5: “Robbing nomi bilan o‘qi…”", "Baqara 2:281: “Allohga qaytariladigan kundan qo‘rqinglar…” (Ibn Abbosdan rivoyat)"],
        ["Hiro g‘orida, Ramazonda", "Umrining oxirida, vidolashuv hajidan keyin"],
      ] },
      { think: [
        "Birinchi buyruq “O‘qi” edi. Hozir men nima o‘qiyapman?",
        "Qalbim kuchga muhtoj bo‘lganda qaysi oyatni eshitishni xohlardim?",
      ], home: [
        "Birgalikda Alaq 1–5 ni yod oling, bu nozil bo‘lgan eng birinchi so‘zlar.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qadr kechasida dunyo osmoniga, keyin 23 yil davomida Payg‘ambar ﷺ ga nozil qilingan.",
        "Birinchi so‘zlar “Robbing nomi bilan o‘qi” edi.",
        "U qalblarni mustahkamlash va jamiyatni qadamma-qadam qurish uchun asta-sekin kelgan.",
      ] },
    ],
  },

  preserved: {
    title: "Qur’on qanday saqlangan",
    summary: "Qalblar va xurmo barglaridan bitta kitobgacha: Abu Bakr, Zayd ibn Sobit, Usmon va Toshkentdagi mushaf.",
    blocks: [
      { text: "Payg‘ambar ﷺ hayotligida Qur’onni ko‘plab sahobalar yod olgan va kotiblar uni qo‘llarida bor narsalarga yozishgan: xurmo shoxlari, yassi toshlar, teri va kurak suyaklari. U to‘liq edi, lekin hali bitta jildga jamlanmagan edi, chunki vahiy hali kelib turgan edi." },
      { title: "“Tog‘ni ko‘chirish osonroq edi”", scene: "Madina, Yamoma jangidan ko‘p o‘tmay.", story: [
        "Qur’onni yoddan biladigan sahobalarning ko‘plari Yamomada shahid bo‘ldi. Umar xavotirlanib, xalifa Abu Bakrning oldiga bordi: “Qur’onning ko‘p qismi yo‘qolib ketishidan qo‘rqaman. Keling, uni bitta kitobga jamlaylik.”",
        "Abu Bakr ikkilandi: “Rasululloh ﷺ qilmagan ishni qanday qilaman?” Lekin Umar to Alloh Abu Bakrning qalbini bunga ochmaguncha tushuntirishda davom etdi.",
        "Ular vahiy kotiblaridan biri, yosh Zayd ibn Sobitni chaqirishdi. Zayd keyin aytgan: “Allohga qasamki, agar mendan tog‘ni ko‘chirishni so‘rashganida, bu ishdan osonroq bo‘lardi!”",
        "U har bir yozilgan parchani izlab, uni sahobalar yod olgan narsa bilan solishtirib chiqdi, dalilsiz hech narsani qabul qilmadi. Sahifalar Abu Bakrda, keyin Umarda, keyin Hafsada saqlandi.",
      ], lesson: "Sahobalar har bir harfga omonat sifatida qarashgan. Ularning g‘amxo‘rligi tufayli biz bugun ham o‘sha Qur’onni qo‘limizda tutamiz." },
      { title: "Usmon nusxalarni birlashtiradi", items: [
        "Islom tarqalgan sari turli yurtlardagi odamlar qanday o‘qish haqida bahslasha boshladi. Sahoba Huzayfa xavotirlanib Usmonning oldiga keldi (Buxoriy 4987).",
        "Usmon Zayd va boshqa sahobalarga Hafsadagi sahifalardan Quraysh lahjasida nusxalar ko‘chirtirib, ularni yirik shaharlarga yubordi.",
        "Shuning uchun mushaf Usmoniy mushaf deb ataladi va uning imlosiga bugun ham amal qilinadi.",
      ] },
      { text: "Toshkentdagi Hazrati Imom majmuasida katta pergament sahifalarga yozilgan, saqlanib qolgan eng qadimgi Qur’on nusxalaridan biri saqlanadi. Rivoyatlar uni Usmon mushafi bilan bog‘laydi; tadqiqotchilar uni ilk islom asrlariga mansub deb hisoblaydi. Har holda, bu qo‘limizdagi matn o‘n to‘rt asr oldin o‘qilgan o‘sha matn ekanining eslatmasidir." },
      { title: "Ikki yo‘l bilan birga saqlangan", items: [
        "Qalblarda: har bir avlodda son-sanoqsiz odamlar uni yod olgan va o‘qigan, ustozlar silsilasi Payg‘ambar ﷺ gacha yetadi.",
        "Yozuvda: katta ehtiyotkorlik bilan ko‘chirilgan Usmoniy matn.",
        "Hafs an Osim va Varsh an Nofi’ kabi e’tirof etilgan qiroatlarning barchasini Payg‘ambar ﷺ o‘rgatgan va ular ma’no haqiqatini o‘zgartirmaydi.",
      ] },
      { think: [
        "Zayd tog‘ni ko‘chirish osonroq bo‘lardi, degan. Nega u bunga bunchalik jiddiy qaragan?",
      ], home: [
        "Toshkentga borsangiz, Hazrati Imom majmuasidagi qadimiy mushafni birga ko‘ring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Payg‘ambar ﷺ hayotligida yozilgan va yod olingan; Abu Bakr davrida bir jildga jamlangan.",
        "Usmon shaharlarga andoza nusxalarni yubordi.",
        "Alloh va’da qilganidek, ham qalblarda, ham yozuvda saqlangan.",
      ] },
    ],
  },

  fatiha: {
    title: "Fotiha: Alloh bilan suhbat",
    summary: "Har bir rakatda o‘qiladigan eng ulug‘ sura va Alloh har bir oyatga qanday javob berishi.",
    blocks: [
      { text: "Fotihani o‘qimagan kishining namozi yo‘q (Buxoriy 756). Hanafiy mazhabida uni har bir rakatda o‘qish vojib, unutib qo‘yish esa sahv sajdasini talab qiladi. Payg‘ambar ﷺ uni Qur’ondagi eng ulug‘ sura, takror o‘qiladigan yetti oyat deb atagan (Buxoriy 4474)." },
      { label: "Fotiha surasi", r: { en: "Hamd olamlarning Robbi Allohgadir. U Rahmon va Rahimdir. Jazo kunining Egasidir. Faqat Senga ibodat qilamiz va faqat Sendan yordam so‘raymiz. Bizni to‘g‘ri yo‘lga hidoyat qil, O‘zing ne’mat bergan zotlarning yo‘liga, g‘azabga uchraganlarning va adashganlarning yo‘liga emas." } },
      { text: "Hadisi qudsiyda Alloh aytadi: “Namozni O‘zim bilan bandam o‘rtasida ikkiga bo‘ldim va bandamga so‘ragan narsasi bor.” Keyin U har bir oyatga javob beradi (Muslim 395):" },
      { title: "Alloh senga oyatma-oyat javob beradi", left: "Sen aytasan", right: "Alloh aytadi", rows: [
        ["Alhamdu lillahi robbil ’alamin", "“Bandam Menga hamd aytdi.”"],
        ["Ar-rohmanir rohim", "“Bandam Menga sano aytdi.”"],
        ["Maliki yavmid din", "“Bandam Meni ulug‘ladi.”"],
        ["Iyyaka na’budu va iyyaka nasta’in", "“Bu Men bilan bandam o‘rtasida, bandamga so‘ragan narsasi bor.”"],
        ["Ihdinas sirotal mustaqim…", "“Bu bandam uchun, bandamga so‘ragan narsasi bor.”"],
      ] },
      { title: "Fotiha yetti oyatda nimani o‘rgatadi", items: [
        "Hamd va shukr olamlarning Robbi Allohga xos.",
        "Uning rahmati keng: Rahmon va Rahim.",
        "Jazo kuni bor va uning yagona Egasi Udir.",
        "Biz faqat Unga ibodat qilamiz va faqat Undan yordam so‘raymiz.",
        "So‘raladigan eng muhim narsa to‘g‘ri yo‘lga hidoyatdir.",
        "U ne’mat berganlarning yo‘li, g‘azabga uchraganlar yoki adashganlarning yo‘li emas.",
      ] },
      { title: "Fotiha ma’nosi bilan namoz o‘qish", items: [
        "Payg‘ambar ﷺ kabi har bir oyatdan keyin biroz to‘xta va Alloh senga javob berayotganini esla.",
        "“Iyyaka na’budu” da bu namozda nima qilmoqchi ekaningni o‘yla.",
        "“Ihdina” da chin dildan so‘ra: bugungi qarorlaring uchun, oilang uchun, qalbing uchun.",
        "Undan keyin namozda “Omin”ni ichingda ayt (hanafiy usuli).",
      ] },
      { think: [
        "Alloh Fotihaning har bir oyatiga javob berishini bilarmidim?",
        "Hozir eng ko‘p nimada hidoyatga muhtojman?",
      ], home: [
        "Keyingi namozdan oldin har bir oyatning ma’nosini birga o‘qing, keyin uni sekin o‘qib namoz o‘qing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Eng ulug‘ sura, hanafiy mazhabida har bir rakatda vojib.",
        "Sen o‘qiganingda Alloh har bir oyatga javob beradi (Muslim 395).",
        "Uning qalbi: faqat Senga ibodat qilamiz, faqat Sendan yordam so‘raymiz; bizni hidoyat qil.",
      ] },
    ],
  },

  kursi: {
    title: "Oyatal Kursiy (2:255)",
    summary: "Qur’ondagi eng ulug‘ oyat.",
    blocks: [
      { label: "Oyatal Kursiy", r: { en: "Alloh, Undan o‘zga iloh yo‘q, U Tirik va abadiy Turuvchidir. Uni na mudroq, na uyqu tutadi. Osmonlardagi va yerdagi narsalar Unikidir. Uning izni bo‘lmasa, kim Uning huzurida shafoat qila oladi? U ularning oldilaridagi va ortlaridagi narsalarni biladi, ular esa Uning ilmidan faqat U xohlagan narsanigina qamrab ola oladilar. Uning Kursiysi osmonlar va yerni qamrab olgan va ularni saqlash Uni charchatmaydi. U Oliy va Ulug‘dir." } },
      { title: "“Ilm senga muborak bo‘lsin!”", scene: "Madina, Payg‘ambar ﷺ bir sahobaga ta’lim bermoqda.", story: [
        "Payg‘ambar ﷺ Ubay ibn Ka’bdan so‘radi: “Ey Abul Munzir, sendagi Allohning Kitobidan qaysi oyat eng ulug‘?” Ubay dedi: “Alloh va Uning Rasuli yaxshiroq biladi.”",
        "U yana so‘radi. Ubay dedi: “Allohu la ilaha illa huval hayyul qayyum.”",
        "Payg‘ambar ﷺ uning ko‘ksiga sekin urib dedi: “Ey Abul Munzir, ilm senga muborak bo‘lsin!”",
      ], lesson: "Oyatal Kursiy eng ulug‘ oyat, chunki u butunlay Alloh haqida: U kim va U qanday." },
      { title: "Oyatal Kursiy Alloh haqida aytadigan o‘n narsa", items: [
        "Yolg‘iz U ilohdir; Undan boshqa hech kim ibodatga loyiq emas.",
        "Al-Hayy: abadiy Tirik, hayotining boshi ham, oxiri ham yo‘q.",
        "Al-Qayyum: U hamma narsani tutib turadi va hech narsaga muhtoj emas.",
        "U hech qachon mudramaydi va uxlamaydi.",
        "Osmonlar va yerdagi hamma narsa Unikidir.",
        "Uning iznisiz hech kim Uning huzurida shafoat qilmaydi.",
        "U odamlarning oldidagi va ortidagi narsalarni biladi.",
        "Biz faqat U bilishimizga ruxsat bergan narsanigina bilamiz.",
        "Uning Kursiysi osmonlar va yerdan kengroq.",
        "Ularni saqlash Uni charchatmaydi; U Oliy va Ulug‘dir.",
      ] },
      { title: "Tun bo‘yi qo‘riqchi", measure: "Uyqudan tonggacha" },
      { title: "Uni qachon o‘qish kerak", items: [
        "Har bir farz namozdan keyin.",
        "Uxlashdan oldin.",
        "Ertalabki va kechki zikrlarda.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qur’ondagi eng ulug‘ oyat (Muslim 810).",
        "U Allohning hayoti, g‘amxo‘rligi, ilmi va ulug‘ligini tasvirlaydi.",
        "Uni namozlardan keyin va uxlashdan oldin o‘qi.",
      ] },
    ],
  },

  "short-surahs": {
    title: "Namoz uchun qisqa suralar",
    summary: "Asr, Kavsar, Ixlos, Falaq va Nos.",
    blocks: [
      { label: "Asr surasi (103)", r: { en: "Asrga qasamki, albatta inson ziyondadir, iymon keltirgan, yaxshi amallar qilgan, bir-birlariga haqni va sabrni tavsiya qilganlardan tashqari." } },
      { label: "Kavsar surasi (108)", r: { en: "Biz senga Kavsarni berdik. Bas, Robbing uchun namoz o‘qi va qurbonlik qil. Albatta, seni yomon ko‘ruvchining o‘zi zurriyotsizdir. (108-sura)" } },
      { label: "Ixlos surasi (112)", r: { en: "Ayting: U Alloh yagonadir. Alloh behojat (hamma Unga muhtoj)dir. U tug‘magan va tug‘ilmagan. Va Unga hech kim teng bo‘lmagan. (112-sura)" } },
      { label: "Falaq surasi (113)", r: { en: "Ayting: Tong Robbidan panoh so‘rayman, U yaratgan narsalarning yomonligidan, qorong‘ilik cho‘kkandagi kechaning yomonligidan, tugunlarga dam soluvchilarning yomonligidan va hasad qilgan paytdagi hasadchining yomonligidan." } },
      { label: "Nos surasi (114)", r: { en: "Ayting: Odamlarning Robbidan, odamlarning Podshohidan, odamlarning Ilohidan panoh so‘rayman, yashirinib vasvasa qiluvchining yomonligidan, u odamlarning ko‘ksiga vasvasa soladi, jinlardan ham, odamlardan ham." } },
      { title: "Nega aynan shu beshtasi?", items: [
        "Asr: Imom Shofeiy aytganki, agar odamlar faqat shu sura haqida tafakkur qilsalar, ularga kifoya qilardi (rivoyat).",
        "Kavsar: eng qisqa sura, Payg‘ambar ﷺ ga jannatdagi daryo sovg‘asi.",
        "Ixlos: Qur’onning uchdan biriga teng (Buxoriy 5013), chunki u Allohning yagonaligini tasvirlaydi.",
        "Falaq va Nos: “muavvizatayn”, himoya suralari; panoh so‘rashda ularga teng keladigani yo‘q (Muslim 814).",
      ] },
      { title: "Ixlosni sevgan imom", scene: "Namozga imomlik qilayotgan bir sahoba.", story: [
        "Payg‘ambar ﷺ bir kishini bir otryadga boshliq qilib yubordi. U har safar namozga imom bo‘lganda qiroatini “Qul huvallohu ahad” bilan tugatardi.",
        "Ular qaytgach, buni aytishdi. Payg‘ambar ﷺ dedi: “Undan nega bunday qilishini so‘ranglar.”",
        "U dedi: “Chunki u Rahmonning sifati va men uni o‘qishni yaxshi ko‘raman.”",
        "Payg‘ambar ﷺ dedi: “Unga ayting, Alloh uni sevadi.”",
      ], lesson: "Bir surani Alloh haqida gapirgani uchun sevish Allohning muhabbatini olib keladi." },
      { title: "Ulardan har kuni foydalanish", items: [
        "Namozda: birinchi ikki rakatda Fotihadan keyin ulardan birini o‘qi.",
        "Uxlashdan oldin: kaftlaringga dam solib, Ixlos, Falaq va Nosni o‘qi va badaningni sila, uch marta (Buxoriy 5017).",
        "Ertalab va kechqurun: oxirgi uch surani uch martadan o‘qi (Abu Dovud 5082).",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qisqa suralar ulkan ma’nolarni o‘z ichiga oladi.",
        "Ixlos Qur’onning uchdan biri; Falaq va Nos himoya qiladi.",
        "Ularni namozda, uxlashdan oldin, ertalab va kechqurun o‘qi.",
      ] },
    ],
  },

  "quran-adab": {
    title: "Qur’on odoblari",
    summary: "Tahorat, mushafga tegish, panoh so‘rash, ovozni chiroyli qilish va jim tinglash: hanafiy hukmlari.",
    blocks: [
      { text: "Qur’on Allohning kalomi, shuning uchun uni qanday ushlashimiz, o‘qishimiz va tinglashimiz qalbimizda nima borligini ko‘rsatadi. Quyida hanafiy mazhabi hukmlari bilan asosiy odoblar keltirilgan." },
      { title: "Hanafiy hukmlari bir qarashda", left: "Holat", right: "Hukm", rows: [
        ["Mushafga tahoratsiz tegish", "Joiz emas; tahorat shart (56:79). Uni alohida g‘ilof, masalan, mato yoki qopqoq bilan ushlash mumkin."],
        ["Tahoratsiz yoddan o‘qish", "Joiz, lekin tahorat bilan o‘qish afzal."],
        ["Junub holida yoki hayz paytida o‘qish", "Qur’on sifatida o‘qish joiz emas. Joiz: tinglash va Qur’ondagi duolar hamda zikrlarni duo niyatida aytish."],
        ["O‘rganayotgan yosh bolalar", "Ko‘plab hanafiy olimlari ularga o‘rganish uchun mushafni ushlashga ruxsat beradi; ularga tahoratni imkon qadar erta o‘rgating."],
        ["Telefon yoki ilova ekrani", "Ekrandagi arabcha matn xuddi mushafdek emas; shunday bo‘lsa ham, unga hurmat bilan munosabatda bo‘ling."],
      ] },
      { title: "O‘qishdan oldin", items: [
        "Tahorat ol va toza joyda, imkon bo‘lsa qiblaga qarab o‘tir.",
        "Panoh so‘ra: “A’uzu billahi minash shaytonir rojim” (16:98).",
        "Sura boshida “Bismillahir rohmanir rohim” de.",
        "Sekin va aniq (tartil, 73:4), qalbing hozir holda o‘qi.",
      ] },
      { title: "O‘qiyotganda va tinglayotganda", items: [
        "Ovozingni chiroyli qil: “Qur’onni ovozlaringiz bilan ziynatlang” (Abu Dovud 1468) va “Qur’onni chiroyli ovoz bilan o‘qimagan bizdan emas” (Buxoriy 7527).",
        "Qur’on o‘qilganda rahmat qilinishingiz uchun uni tinglang va jim turing (7:204).",
        "Mushafni yerga qo‘yma va ustiga boshqa kitoblarni qo‘yma.",
        "Tilovat o‘rtasida gaplashma yoki kulma; avval to‘xta.",
        "Sajda oyatida tilovat sajdasini qil (o‘sha darsga qara).",
      ] },
      { situation: "Ukang yonidagi xonada musiqa qo‘yilgan holda divanda yotib, ilovadan Qur’on o‘qiyapti. Mehribonlik bilan nima deyishing mumkin?", options: [
        { text: "“O‘chir, sen hurmatsizlik qilyapsan!”", feedback: "Qo‘pollik kamdan-kam o‘rgatadi. U Qur’on o‘qiyapti, bu yaxshi." },
        { text: "“Mashaalloh! Kel, birga o‘tirib, musiqani o‘chiraylik, shunda yaxshi eshitamiz.”", feedback: "Yaxshi narsani maqta, keyin muloyimlik bilan odobni qo‘sh." },
        { text: "Hech narsa demayman.", feedback: "Hozirgi bir yaxshi so‘z unga umr bo‘yi Qur’onga hurmatni o‘rgatadi." },
      ] },
      { think: [
        "Mushafga boshqa kitoblardan farqli munosabatda bo‘lamanmi?",
        "O‘qiganimda ovozim qanday: shoshqaloqmi yoki sokin va chiroylimi?",
      ], home: [
        "Uyda faqat mushaf uchun toza javon tanlang.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Mushafga tegish uchun tahorat; junub yoki hayz holida tilovat yo‘q (hanafiy).",
        "Panoh so‘ra, sekin o‘qi, ovozingni chiroyli qil.",
        "U o‘qilganda jim tingla.",
      ] },
    ],
  },

  "quran-reward": {
    title: "Tilovat savobi",
    summary: "Har bir harf uchun o‘n savob, qiynalib o‘qiganga ikki barobar va shafoat qiluvchi do‘st.",
    blocks: [
      { text: "Qur’on o‘qish kabi oson va shunchalik ko‘p savobli amallar kam. Hatto bir qator ham hisobga olinadi, hatto qiynalib o‘qish ham hisobga olinadi." },
      { title: "Har bir harf uchun o‘n savob", measure: "1 harf = 10 yaxshilik" },
      { title: "Qiynalib o‘qiganga ikki barobar", measure: "2 savob" },
      { title: "O‘qi va ko‘taril", measure: "Har bir oyat uchun bir daraja" },
      { en: "Qur’on o‘qinglar, chunki u Qiyomat kunida o‘z sohiblariga shafoatchi bo‘lib keladi." },
      { en: "Sizlarning eng yaxshingiz Qur’onni o‘rgangan va uni o‘rgatganingizdir." },
      { title: "Payg‘ambar ﷺ ning to‘rt xil odam haqidagi misoli", left: "Odam", right: "O‘xshaydi…", rows: [
        ["Qur’on o‘qiydigan mo‘min", "Utrujga: hidi ham, ta’mi ham yoqimli"],
        ["Qur’on o‘qimaydigan mo‘min", "Xurmoga: ta’mi yoqimli, lekin hidi yo‘q"],
        ["Qur’on o‘qiydigan munofiq", "Rayhonga: hidi yoqimli, ta’mi achchiq"],
        ["Qur’on o‘qimaydigan munofiq", "Hanzalga (achchiq qovun): hidi yo‘q, ta’mi achchiq"],
      ] },
      { text: "Bu misol Buxoriy 5020 dan. Payg‘ambar ﷺ yana aytganki, Alloh bu Kitob bilan ba’zi qavmlarni ko‘taradi, boshqalarini esa pastlatadi (Muslim 817)." },
      { title: "Amaliy reja", items: [
        "Har kuni bomdoddan keyin yoki uxlashdan oldin 5 daqiqadan boshla.",
        "Qanchaligi muhim emas; doimiylik miqdordan muhimroq.",
        "Hifz bo‘limidan tinglash, keyin qorining ortidan takrorlash uchun foydalan.",
        "Ramazonda Qur’onni xatm qilish uchun kuniga bir juzni maqsad qil.",
      ] },
      { think: [
        "Bir yil davomida kuniga bir sahifa o‘qisam, qancha yaxshilik topa olaman?",
      ], home: [
        "Har bir oila a’zosi shomdan keyin bir sahifa o‘qisin; qiziqish uchun harflarni birga sanang.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Har bir harf o‘nta yaxshilikdir.",
        "Qiynalib o‘rganayotganlar ikki barobar savob oladi.",
        "Qur’on unga hamroh bo‘lganlar uchun shafoat qiladi.",
      ] },
    ],
  },

  tajwid: {
    title: "Tajvid: uni chiroyli o‘qish",
    summary: "Tajvid nega muhim, tomoqdan lablargacha, sokin nun qoidalari, qalqala, madd va vaqf belgilari.",
    blocks: [
      { text: "Tajvid “go‘zal qilish” demakdir: har bir harfga, uning og‘izdan chiqish joyi va qanday yangrashi bo‘yicha haqqini berish. Alloh aytadi: “Qur’onni tartil bilan o‘qi” (73:4), ya’ni sekin va aniq. Tajvidni malakali ustozdan o‘rganish eng ishonchli yo‘l, chunki Qur’on eshitish orqali uzatilgan." },
      { title: "Harflar qayerdan chiqadi (maxrajlar)", items: [
        "Og‘iz va tomoqning bo‘shlig‘i: cho‘ziq unlilar ā, ī, ū.",
        "Tomoq: ء ه (eng chuqur), ع ح (o‘rta), غ خ (yuqori).",
        "Til: ko‘pchilik harflar, orqadagi ق va ك dan oldingi ت د ط gacha.",
        "Lablar: ف ب م و.",
        "Burun: g‘unna, ن va م dagi g‘ung‘illagan tovush.",
      ] },
      { title: "Sokin nun va tanvin: to‘rt qoida", left: "Qoida", right: "Qachon va qanday", rows: [
        ["Izhor (aniq)", "Tomoq harflari ء ه ع ح غ خ dan oldin: nun aniq aytiladi. Misol: مِنْ هَادٍ"],
        ["Idg‘om (qo‘shish)", "ي ر م ل و ن (“yarmalun”) dan oldin: keyingi harfga qo‘shiladi; ي ن م و dan oldin g‘unna bilan, ل ر dan oldin g‘unnasiz."],
        ["Iqlob (almashtirish)", "ب dan oldin: nun g‘unna bilan yumshoq mimga aylanadi. Misol: مِنْ بَعْدِ"],
        ["Ixfo (yashirish)", "Qolgan 15 harfdan oldin: g‘unna bilan yengil, yashirin nun. Misol: مِنْ كُلِّ"],
      ] },
      { title: "Boshlash uchun yana uchta qoida", items: [
        "Qalqala (aks-sado): ق ط ب ج د (“qutbu jad”) harflari sukun bilan kelganda sakraydi, masalan al-falaq, ahad, kasab oxirida.",
        "Tashdidli nun yoki mimdagi g‘unna (نّ مّ): ikki harakat g‘ung‘illanadi, masalan inna, summa.",
        "Maddi tabiiy (tabiiy cho‘zish): cho‘ziq unli ikki harakat cho‘ziladi, masalan qāla, qīla, yaqūlu.",
      ] },
      { title: "Mushafdagi vaqf belgilari", left: "Belgi", right: "Ma’nosi", rows: [
        ["م", "Shu yerda to‘xta; ulash ma’noni o‘zgartirishi mumkin."],
        ["لا", "Shu yerda to‘xtama."],
        ["ج", "To‘xtash ham, davom etish ham mumkin."],
        ["قلى", "To‘xtash afzal."],
        ["صلى", "Davom etish afzal."],
        ["∴ ∴", "Ikki joyning birida to‘xta, ikkalasida emas."],
      ] },
      { title: "Qanday mashq qilish kerak", items: [
        "Ishonchli qoridan bitta oyatni tingla (Hifz bo‘limida Mishary Alafasy ishlatiladi).",
        "Cho‘zishlar va g‘unnalarni takrorlab, uni qaytar.",
        "O‘zingni yozib ol va solishtir.",
        "Masjidingda seni tekshiradigan ustoz top; tajvid quloq orqali o‘rganiladi.",
      ] },
      { think: [
        "Qaysi qoidani nomini bilmay turib allaqachon bajaraman?",
      ], home: [
        "Falaq va Ixlos suralaridan birgalikda qalqalaning uchta misolini toping.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Tajvid har bir harfga haqqini beradi; uni tinglab o‘rgan.",
        "Sokin nunning to‘rt qoidasi bor: izhor, idg‘om, iqlob, ixfo.",
        "Qalqala harflari: ق ط ب ج د. Tabiiy madd: ikki harakat.",
      ] },
    ],
  },

  "sajdah-tilawah": {
    title: "Tilovat sajdasi",
    summary: "Hanafiy mazhabidagi 14 sajda oyati, nega u vojib va uni qanday qilish kerak.",
    blocks: [
      { text: "Qur’onda o‘n to‘rt joyda maxluqotning Allohga sajda qilishi tasvirlanadi yoki sajda buyuriladi. Bu oyatlardan birini o‘qisak yoki eshitsak, sajda qilamiz. Hanafiy mazhabida bu tilovat sajdasi o‘qigan kishiga ham, eshitgan kishiga ham vojibdir." },
      { en: "Odam bolasi sajda oyatini o‘qib, sajda qilsa, shayton yig‘lab chekinadi va aytadi: “Holimga voy! Odam bolasiga sajda qilish buyurildi va u sajda qildi, jannat uniki. Menga sajda qilish buyurildi, men bosh tortdim, do‘zax meniki.”" },
      { title: "14 sajda oyati (hanafiy)", items: [
        "A’rof 7:206 · Ra’d 13:15 · Nahl 16:50 · Isro 17:109",
        "Maryam 19:58 · Haj 22:18 · Furqon 25:60 · Naml 27:26",
        "Sajda 32:15 · Sod 38:24 · Fussilat 41:38 · Najm 53:62",
        "Inshiqoq 84:21 · Alaq 96:19",
        "Mushafda ular kichkina gumbaz (۩) bilan belgilangan. Haj surasidagi ikkinchi joy (22:77) hanafiy mazhabida sajda emas.",
      ] },
      { title: "Namozdan tashqarida qanday qilinadi", items: [
        "Namozdagidek tahoratli, qiblaga qarab, to‘g‘ri yopingan holda bo‘l.",
        "“Allohu akbar” deb, bitta sajdaga tush (qo‘llarni ko‘tarmasdan).",
        "Uch marta “Subhana robbiyal a’la” de.",
        "“Allohu akbar” deb tur. Tashahhud ham, salom ham yo‘q.",
      ] },
      { title: "Bilish foydali", items: [
        "Namoz ichida: darhol sajda qil, keyin turib qiroatni davom ettir.",
        "Bir majlisda bitta oyat takrorlansa, bitta sajda kifoya.",
        "Darhol qila olmasang (tahorat bo‘lmasa), keyinroq qil; u soqit bo‘lmaydi.",
        "Jonli qorining o‘qishini eshitish uni vojib qiladi; yozuvlar haqida olimlar ixtilof qilgan, shuning uchun ko‘pchilik ehtiyot uchun uni qilishni afzal ko‘radi.",
      ] },
      { think: [
        "Bu sajdani qilganimda shayton yig‘lashini bilarmidim?",
      ], home: [
        "Mushafingizdan Alaq 96:19 dagi ۩ belgisini topib, sajdani birga mashq qiling.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "O‘n to‘rt joy; hanafiy mazhabida o‘qigan va tinglaganga vojib.",
        "Tushishda va turishda takbir bilan bitta sajda.",
        "Namoz bilan bir xil shartlar: tahorat, qibla, avratni yopish.",
      ] },
    ],
  },

  asbab: {
    title: "Suralar ortidagi voqealar",
    summary: "Masad, Abasa, Zuho, Kavsar va Fil suralari nega nozil bo‘lgan.",
    blocks: [
      { text: "Ko‘plab oyatlar biror voqea sababli nozil bo‘lgan. Sababi nuzul deb ataladigan bu voqeani bilish surani namozda o‘qiganingda uni jonlantiradi." },
      { title: "Masad: Safo tog‘idan ogohlantirish", scene: "Makka, ilk ochiq da’vat.", story: [
        "Alloh Payg‘ambar ﷺ ga qarindoshlarini ogohlantirishni buyurganda, u Safo tog‘iga chiqib, Quraysh urug‘larini chaqirdi. Ular to‘planishdi.",
        "“Agar sizlarga mana shu tepalik ortida sizlarga hujum qilmoqchi bo‘lgan qo‘shin bor desam, ishonasizlarmi?” “Ha! Seni hech yolg‘on gapirganingni bilmaymiz.” “Unda men sizlarni qattiq azobdan ogohlantiruvchiman.”",
        "Uning o‘z amakisi Abu Lahab baqirdi: “Halok bo‘l! Bizni shuning uchun yig‘dingmi?”",
        "Shunda Alloh nozil qildi: “Abu Lahabning ikki qo‘li halok bo‘lsin va o‘zi ham halok bo‘ldi…” Qur’onda bir kishining nomi zikr qilindi va u bundan keyin yillar yashadi, sura aytganidek, hech qachon iymon keltirmadi.",
      ], lesson: "Payg‘ambar ﷺ ni hamma, hatto dushmanlari ham rostgo‘y deb bilardi. Alloh esa O‘z Rasulini himoya qiladi." },
      { title: "Abasa: o‘rganishga kelgan ko‘zi ojiz", scene: "Payg‘ambar ﷺ Quraysh boshliqlari bilan gaplashmoqda.", story: [
        "Payg‘ambar ﷺ Quraysh boshliqlaridan ba’zilari Islomni qabul qilishini umid qilib, ular bilan astoydil gaplashayotgan edi.",
        "Ko‘zi ojiz sahoba Abdulloh ibn Ummu Maktum kelib: “Menga o‘rgating, ey Allohning Rasuli!” deyaverdi. Payg‘ambar ﷺ qovog‘ini solib, boshliqlarga qayta yuzlandi.",
        "Alloh nozil qildi: “Qovog‘ini soldi va yuz o‘girdi, oldiga ko‘zi ojiz kelgani uchun…” Bu samimiy izlanuvchi qudratlilardan muhimroq ekanini o‘rgatdi.",
        "Shundan keyin Payg‘ambar ﷺ Ibn Ummu Maktumni juda hurmat qildi, hatto safarga chiqqanda uni Madinaga mas’ul qilib qoldirardi. U azon aytuvchilardan ham biri edi.",
      ], lesson: "Samimiy o‘rganishga kelgan kishini, kim bo‘lishidan qat’i nazar, hech qachon kamsitma." },
      { title: "Zuho: “Robbing seni tark etmadi”", scene: "Vahiydagi tanaffus.", story: [
        "Bir necha kun vahiy to‘xtadi. Payg‘ambar ﷺ betob bo‘lib, tungi namozga turmadi.",
        "Qurayshdan bir ayol uni masxara qildi: “Sohibing seni tashlab ketibdi!”",
        "Shunda Alloh nozil qildi: “Zuhoga qasam, sokinlashgan tunga qasam: Robbing seni tark etmadi va yomon ham ko‘rmadi… va Robbing senga beradi, sen rozi bo‘lasan.”",
      ], lesson: "Sokin va qorong‘i davr kelgandek tuyulganda esla: tong nuri doim qaytib keladi." },
      { title: "Yana ikkitasi", items: [
        "Kavsar: Payg‘ambar ﷺ ning o‘g‘illari go‘dakligida vafot etganda, bir dushman uni “zurriyotsiz” deb atadi. Alloh unga jannatdagi daryo Kavsarni berdi va zurriyotsiz uning dushmani ekanini aytdi (Ibn Kasir, rivoyat).",
        "Fil: u tug‘ilgan yili Abraha Ka’bani buzish uchun fillar bilan Makkaga yurish qildi va Alloh pishgan loydan toshlar ko‘targan qush galalarini yubordi (Siyrat).",
      ] },
      { think: [
        "Keyingi safar o‘sha surani namozda o‘qiganimda bu hikoyalardan qaysi biri haqida o‘ylayman?",
      ], home: [
        "Kechki ovqatda har kim bitta hikoyani o‘z so‘zlari bilan qayta aytib bersin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Sura nega nozil bo‘lganini bilish uni jonlantiradi.",
        "Masad: Safo tog‘idagi Abu Lahab. Abasa: ko‘zi ojiz izlanuvchi. Zuho: tanaffusdan keyingi tasalli.",
      ] },
    ],
  },

  memorise: {
    title: "Qur’onni qanday yod olish kerak",
    summary: "Bolalar va kattalar uchun ishlaydigan oddiy usul va o‘rganganingni qanday saqlash.",
    blocks: [
      { en: "Batahqiq, Qur’onni zikr (yod olish) uchun oson qildik, bas, eslatma oluvchi bormi?" },
      { text: "Alloh Qur’onni yod olishni oson qildi. Har bir musulmon yurtida bolalar uni to‘liq yod olgan. Siri alohida iste’dodda emas, balki har kuni oz-ozdan va ko‘p takrorlashda." },
      { title: "Kundalik usul", items: [
        "Kichik qismni tanla: bitta oyat yoki uzun oyatlarning hatto yarmi.",
        "Uni yaxshi qoridan uch-besh marta tingla (Hifz bo‘limidagi takrorlash tugmasidan foydalan).",
        "Uni mushafdan qarab besh marta o‘qi.",
        "Ko‘zingni yumib, qaramasdan besh marta o‘qi. Tekshir, xatolarni tuzat.",
        "Uni oldingi oyatga ulab, ikkalasini birga o‘qi.",
        "Yangi qismingni keyingi namozlaringda o‘qi.",
      ] },
      { title: "Saqlash: takrorlash qoidasi", items: [
        "Payg‘ambar ﷺ aytgan: “Qur’onni takrorlab turinglar, jonim qo‘lida bo‘lgan Zotga qasamki, u tuyalarning arqonidan qochishidan ham tezroq qochib ketadi” (Buxoriy 5033).",
        "Yangidan oldin eski: har kuni yangi narsa qo‘shishdan oldin yod olganlaringni takrorla.",
        "Takrorlashni taqsimla: Hifz bo‘limi har bir surani 1, 3, 7, 16 kun va undan ko‘proq vaqtdan keyin qaytaradi.",
        "Yod olgan suralaringni sunnat va nafl namozlaringda o‘qi; namoz eng yaxshi takrorlashdir.",
      ] },
      { title: "Foydali va zararli odatlar", left: "Yordam beradi", right: "Zarar beradi", rows: [
        ["Har kuni bir vaqtda, masalan bomdoddan keyin", "Haftada bir marta katta miqdorda"],
        ["Bir xil bosma mushaf, shunda sahifa xayolingda “suratga olinadi”", "Ilovalar va ko‘rinishlarni tez-tez almashtirish"],
        ["Avval ma’nosini tushunish", "Faqat tovushlarni yodlash"],
        ["Seni tekshiradigan kishiga o‘qib berish", "O‘zingni hech qachon sinamaslik"],
        ["Gunohlardan saqlanish; ilm nurdir", "Kech yotib, keyin shoshilish"],
      ] },
      { think: [
        "Ertaga boshlashim mumkin bo‘lgan bitta kichik qism qaysi?",
      ], home: [
        "Bu oy uchun oilaviy hifz maqsadini tanlang va har juma birga takrorlang.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Kichik qism, ko‘p takror, har kuni.",
        "Yangidan oldin takrorla; uni namozda o‘qi.",
        "U tez qochib ketadi, shuning uchun unga hamroh bo‘l.",
      ] },
    ],
  },

  tadabbur: {
    title: "Qur’on haqida tafakkur",
    summary: "Payg‘ambar ﷺ va sahobalar kabi ma’no uchun o‘qish va boshlashning oddiy yo‘li.",
    blocks: [
      { en: "Bu Biz senga nozil qilgan muborak Kitobdir, toki uning oyatlari haqida tafakkur qilsinlar va aql egalari ibrat olsinlar." },
      { text: "Tadabbur tafakkur qilish demakdir: Alloh senga nima deyayotgani haqida chuqur o‘ylash. Alloh so‘raydi: “Ular Qur’on haqida tafakkur qilmaydilarmi yoki qalblarida qulflar bormi?” (47:24)." },
      { title: "Payg‘ambar ﷺ bilan tungi namoz", scene: "Madina, yarim tun.", story: [
        "Sahoba Huzayfa bir kecha Payg‘ambar ﷺ ortida namoz o‘qidi. U Baqarani, keyin Nisoni, keyin Oli Imronni sekin o‘qib boshladi.",
        "Har safar tasbeh oyatidan o‘tganda, Allohni poklab yod etardi. Rahmat oyatidan o‘tganda, to‘xtab uni so‘rardi. Azob oyatidan o‘tganda, to‘xtab panoh so‘rardi.",
      ], lesson: "Uning uchun tilovat suhbat edi: u o‘qiganiga javob qaytarardi." },
      { text: "Rivoyat qilinishicha, sahobalar o‘n oyatni o‘rganib, ularni tushunib, amal qilmaguncha keyingisiga o‘tmasdilar (Ibn Mas’uddan rivoyat)." },
      { title: "Boshlashning oddiy yo‘li", items: [
        "Allaqachon biladigan qisqa parchani tanla, masalan Asr surasi yoki Baqaraning oxiri.",
        "Ishonchli tarjimasini oyatma-oyat sekin o‘qi.",
        "Uchta savol ber: Alloh menga bu yerda nima deyapti? Mendan nima so‘rayapti? Bu menda qanday his uyg‘otadi?",
        "Bugun amal qilish uchun bitta ishni tanla.",
        "Keyingi safar uni namozda o‘qiganingda javoblaringni esla.",
      ] },
      { situation: "Asr surasini o‘qiding: iymon keltirgan, yaxshi amal qilgan, bir-birlariga haqni va sabrni tavsiya qilganlardan boshqa inson ziyondadir. Bugun undan olinadigan eng yaxshi “bitta ish” qaysi?", options: [
        { text: "Uni tezroq yod olish.", feedback: "Yod olish yaxshi, lekin tafakkur unga amal qilish haqida." },
        { text: "Do‘stim yoki aka-ukamni mehribonlik bilan haq narsaga undash va ularga sabr qilish.", feedback: "Sura aynan shuni so‘raydi: bir-biriga haqni va sabrni tavsiya qilish." },
        { text: "Hech narsa; bu boshqa odamlar haqida.", feedback: "Har bir oyat avvalo menga gapiradi." },
      ] },
      { think: [
        "Qaysi oyat qalbimga eng ko‘p ta’sir qilgan va nega?",
      ], home: [
        "Kechki ovqatdan keyin bitta qisqa surani ma’nosi bilan o‘qing va har kim bittadan saboq aytsin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qur’on tafakkur qilish uchun nozil qilingan.",
        "O‘qiyotganingda javob qaytar: tasbeh ayt, so‘ra, panoh so‘ra.",
        "Oz o‘rgan, uni tushun, unga amal qil.",
      ] },
    ],
  },
};

export default T;
