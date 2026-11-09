import type { LessonTrMap } from "./lessons";

// Siyrat olami darslari va testlari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  timeline: {
    title: "Payg‘ambar ﷺ hayoti bir qarashda",
    summary: "Fil yilidan vidolashuv hajigacha bo‘lgan oltmish uch yil bitta vaqt chizig‘ida.",
    blocks: [
      { text: "Muhammad ibn Abdulloh ﷺ 63 yil yashadi: payg‘ambarlikdan oldin 40 yil, Makkada payg‘ambar sifatida 13 yil va Madinada 10 yil. Uning hayoti Qur’onning jonli tafsiridir. “Sizlar uchun Rasulullohda go‘zal o‘rnak bor” (33:21). Bu olam uning hayotini boblar bo‘yicha kuzatib boradi, har birida hikoya va bugun biz uchun saboqlar bor." },
      { items: [
        { when: "Taxm. 570-yil", what: "Fil yilida Makkada tug‘ildi. Otasi Abdulloh u tug‘ilishidan oldin vafot etgan edi." },
        { when: "Taxm. 576-yil", what: "Onasi Omina vafot etadi; unga bobosi Abdulmuttalib, keyin amakisi Abu Tolib g‘amxo‘rlik qiladi." },
        { when: "Taxm. 595-yil", what: "25 yoshida Xadichaga (r.a.) uylanadi." },
        { when: "Taxm. 605-yil", what: "Qora tosh borasidagi nizoni hal qiladi; u allaqachon al-Amin (ishonchli) nomi bilan tanilgan." },
        { when: "610-yil", what: "Ramazonda Hiro g‘orida ilk vahiy: “Iqro’” (Buxoriy 3)." },
        { when: "613-yil", what: "Ochiq da’vat boshlanadi; musulmonlar ta’qib qilinadi." },
        { when: "615-yil", what: "Musulmonlarning Habashistonga birinchi hijrati." },
        { when: "616–619-yillar", what: "Abu Tolib darasida Bani Hoshimga qarshi qamal." },
        { when: "619-yil", what: "G‘am yili: Xadicha va Abu Tolib vafot etadi. Toifga safar." },
        { when: "Taxm. 621-yil", what: "Isro va Me’roj; besh vaqt namoz farz qilinadi (Buxoriy 349)." },
        { when: "621–622-yillar", what: "Yasrib ahli bilan Aqaba bay’atlari." },
        { when: "622-yil (hijriy 1)", what: "Madinaga hijrat; islomiy taqvim boshlanadi." },
        { when: "624-yil (hijriy 2)", what: "Ramazon ro‘zasi farz qilinadi; 17 Ramazonda Badr jangi." },
        { when: "625-yil (hijriy 3)", what: "Uhud jangi." },
        { when: "627-yil (hijriy 5)", what: "Xandaq jangi." },
        { when: "628-yil (hijriy 6)", what: "Hudaybiya sulhi; podshohlarga maktublar." },
        { when: "630-yil (hijriy 8)", what: "Makkaning fathi, umumiy afv bilan." },
        { when: "632-yil (hijriy 10–11)", what: "Vidolashuv haji va xutbasi; 63 yoshida Madinada vafot etadi." },
      ] },
      { think: [
        "Uning hayotidagi qaysi davr hozirgi holatimga eng yaqin?",
        "Uning 40 yoshgacha bo‘lgan hayoti haqida nimalarni bilaman?",
      ], home: [
        "Vaqt chizig‘ini uyda devorga osib, har bir bobni birga o‘qiganingizda belgilab boring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Payg‘ambarlikdan oldin 40 yil, Makkada 13 yil, Madinada 10 yil.",
        "Uning xulqi vahiydan ancha oldin ma’lum va ishonchli edi.",
        "Uning hayoti amalda yashalgan Qur’on: har narsada bizning o‘rnagimiz.",
      ] },
    ],
    quiz: [
      { q: "Vahiy boshlanganda Payg‘ambar ﷺ necha yoshda edi?", options: ["25", "40", "53", "63"], why: "Milodiy 610-yilda, Hiro g‘orida." },
      { q: "U Makkada payg‘ambar sifatida necha yil yashadi?", options: ["3", "10", "13", "23"], why: "Keyin Madinada o‘n yil." },
      { q: "Islomiy taqvim qaysi yildan boshlanadi?", options: ["Fil yilidan", "Hijratdan", "Badrdan", "Fathdan"], why: "Milodiy 622-yil, hijriy 1-yil." },
      { q: "G‘am yili nima edi?", options: ["Uhud yili", "Xadicha va Abu Tolib vafot etgan yil", "Qamal yili", "Vidolashuv yili"], why: "Milodiy 619-yil." },
      { q: "U necha yoshida vafot etdi?", options: ["60", "63", "70", "57"], why: "Buxoriy 3536." },
      { q: "Besh vaqt namoz qachon farz qilindi?", options: ["Badrda", "Me’rojda", "Vidolashuv hajida", "Tug‘ilganda"], why: "Buxoriy 349." },
    ],
  },

  "early-life": {
    title: "Tug‘ilishi, bolaligi va yoshligi",
    summary: "Sahrodagi yetim bola qanday qilib al-Amin, ya’ni ishonchli bo‘ldi.",
    blocks: [
      { text: "Muhammad ﷺ Makkada Fil yilida tug‘ildi. O‘sha yili Abrahaning fil bilan kelgan qo‘shini Ka’bani buzmoqchi bo‘ldi va qush galalari tomonidan halok qilindi (Fil surasi, 105). Otasi Abdulloh u tug‘ilishidan oldin vafot etgan edi. Keyinchalik Alloh unga eslatdi: “U seni yetim topib, boshpana bermadimi?” (93:6)." },
      { title: "Ulg‘ayishi", items: [
        "Go‘dakligida uni sahroda Halima as-Sa’diya emizdi, u yerda u baquvvat bo‘lib o‘sdi va sof arab tilini o‘rgandi. U ular bilan birga bo‘lganda Halimaning xonadoni g‘ayrioddiy baraka ko‘rdi.",
        "Sahroda farishtalar uning ko‘ksini ochib, qalbini yuvdilar va undan shaytonning ulushini olib tashladilar (Muslim 162).",
        "Olti yoshida onasi Omina, sakkiz yoshida bobosi Abdulmuttalib vafot etdi; keyin uni amakisi Abu Tolib katta muhabbat bilan tarbiyaladi.",
        "Bolaligida u bir necha tanga evaziga Makka ahlining qo‘ylarini boqdi. U aytgan: har bir payg‘ambar qo‘y boqqan (Buxoriy 2262) va bu orqali sabr va g‘amxo‘rlikni o‘rgangan.",
        "Yigitligida u shahardagi har qanday mazlumni himoya qilish uchun Makka boshliqlarining ahdi bo‘lgan Hilful-fuzulga qo‘shildi. Rivoyat qilinishicha, yillar o‘tib u Islomda ham bunday chaqiriqqa javob berishini aytgan.",
      ] },
      { title: "Qora tosh va rido", scene: "Makka, taxm. 605-yil. Sel Ka’bani shikastlagan edi va Quraysh qabilalari uni birga qayta qurishdi.", story: [
        "Qora toshni joyiga qo‘yish vaqti kelganda, har bir urug‘ bu sharafni o‘zi olishni xohladi. Jahllar chiqdi; ba’zilar u uchun jang qilishga qasam ichib, qo‘llarini qonga botirishdi.",
        "Ular kelishib olishdi: Haram darvozasidan birinchi kirgan kishi ular o‘rtasida hakam bo‘ladi. Kirib kelgan kishi o‘shanda 35 yoshlardagi Muhammad ﷺ edi. Ular: “Bu al-Amin! Biz uni qabul qilamiz!” deb qichqirishdi.",
        "U ridosini yerga yoyib, toshni o‘rtasiga qo‘ydi va har bir urug‘ning boshlig‘idan bir chetidan ushlashni so‘radi. Ular birgalikda uni ko‘tarishdi, u esa toshni o‘z qo‘llari bilan joyiga qo‘ydi.",
      ], lesson: "Uning hikmati kelayotgan urushni umumiy sharafga aylantirdi. Payg‘ambarlikdan ancha oldin uning xulqi butun Makkaning ishonchini qozongan edi.", check: {
        q: "U Qora tosh borasidagi nizoni qanday hal qildi?",
        options: ["Bitta urug‘ni tanladi", "Uni ridoga qo‘yib, barcha urug‘larga birga ko‘tartirdi", "Qur’a tashladi", "Yordam berishdan bosh tortdi"],
        why: "Sharafdan hamma bahramand bo‘ldi va qon to‘kilmadi.",
      } },
      { title: "Xadichaga uylanishi", items: [
        "Hurmatli, boy tadbirkor ayol Xadicha binti Xuvaylid uni Shomga o‘z mollari bilan savdo qilishga yolladi va uning halolligi va xulqidan hayratga tushdi.",
        "U bir dugonasi orqali unga turmush taklif qildi. U 25 yoshda edi; ular 25 yil birga yashashdi va Xadicha hayotligida u boshqa ayolga uylanmadi.",
        "U unga birinchi bo‘lib iymon keltirgan kishi edi va u uni hech qachon unutmadi: “Odamlar meni inkor qilganda, u menga iymon keltirdi” (Musnadi Ahmad).",
      ] },
      { think: [
        "Mening dinimga e’tiqod qilmaydigan odamlar orasida halolligim bilan tanilganmanmi?",
        "Uning qo‘y boqishdan o‘rgangan narsasidan men kundalik ishimda nimani o‘rgana olaman?",
      ], home: [
        "Bolalarga u ham yetim bo‘lganini ayting: Alloh ota-onasini yo‘qotganlarga g‘amxo‘rlik qiladi.",
        "So‘rang: odamlar seni al-Amin deyishi uchun nima kerak?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Fil yilida yetim bo‘lib tug‘ildi, bobosi va amakisi tarbiyasida o‘sdi.",
        "Vahiydan ancha oldin al-Amin nomi bilan tanildi.",
        "25 yoshida birinchi mo‘mina Xadichaga uylandi.",
      ] },
    ],
    quiz: [
      { q: "Qaysi voqea uning tug‘ilgan yilini belgilaydi?", options: ["Sel", "Abrahaning fil bilan kelgan qo‘shini", "Badr", "Qamal"], why: "Fil surasi, 105." },
      { q: "Uni sahroda kim emizgan?", options: ["Omina", "Halima as-Sa’diya", "Xadicha", "Fotima"], why: "Bani Sa’d orasida." },
      { q: "Bobosi vafot etgach, uni kim tarbiyaladi?", options: ["Abu Lahab", "Abu Tolib", "Hamza", "Abbos"], why: "Amakisi Abu Tolib." },
      { q: "Buxoriy 2262 ga ko‘ra har bir payg‘ambar nima qilgan?", options: ["Savdo", "Qo‘y boqqan", "Dehqonchilik", "Yozuv"], why: "Buxoriy 2262." },
      { q: "U Qora tosh nizosini qanday hal qildi?", options: ["Kuch bilan", "Barcha urug‘lar ko‘targan rido bilan", "Ovoz berish bilan", "Toshni yolg‘iz qo‘ydi"], why: "Sharafdan hamma bahramand bo‘ldi." },
      { q: "Xadichaga uylanganda u necha yoshda edi?", options: ["20", "25", "40", "30"], why: "U unga birinchi bo‘lib iymon keltirdi." },
    ],
  },

  revelation: {
    title: "Ilk vahiy",
    summary: "Hiro g‘ori, “Iqro’” va Xadichaning tasallisi.",
    blocks: [
      { text: "Qirq yoshga yaqinlashgach, Payg‘ambar ﷺ yolg‘izlikni yaxshi ko‘rib qoldi. U oziq-ovqat olib, Makka ustidagi Nur tog‘idagi Hiro g‘orida kechalarni ibodat bilan o‘tkazardi. O‘sha yerda milodiy 610-yil Ramazonida hamma narsa o‘zgardi." },
      { title: "“O‘qi!”", scene: "Hiro g‘ori, Jabalun-Nurning baland qismidagi Ka’ba tomonga qaragan kichik g‘or.", story: [
        "Jabroil farishta uning oldiga kelib: “O‘qi!” dedi. U: “Men o‘qiydigan emasman”, dedi. Farishta uni toqati qolmaguncha qattiq quchoqlab, keyin qo‘yib yubordi: “O‘qi!” Yana: “Men o‘qiydigan emasman.” Ikkinchi marta, keyin uchinchi marta.",
        "Keyin farishta dedi: “Yaratgan Robbing nomi bilan o‘qi. U insonni laxta qondan yaratdi. O‘qi, Robbing eng karamlidir, U qalam bilan o‘rgatdi, insonga bilmagan narsasini o‘rgatdi” (96:1–5).",
        "U titrab uyiga qaytdi: “Meni o‘ranglar, meni o‘ranglar!” Xadicha qo‘rquvi ketguncha uni o‘rab qo‘ydi. U unga: “O‘zimdan qo‘rqaman”, dedi.",
        "Xadicha dedi: “Aslo! Allohga qasamki, Alloh seni hech qachon sharmanda qilmaydi. Sen qarindoshlik rishtalarini saqlaysan, zaiflarning yukini ko‘tarasan, muhtojlarga berasan, mehmonni hurmat qilasan va haqiqiy musibatda odamlarga yordam berasan.”",
        "U uni amakivachchasi, nasroniy olim Varaqa ibn Navfalning oldiga olib bordi. Varaqa dedi: “Bu Alloh Musoga yuborgan o‘sha farishta. Qavming seni haydab chiqarganda tirik bo‘lsam edi.”",
      ], lesson: "Vahiyning birinchi so‘zi “O‘qi” bo‘ldi: Islom ilm bilan boshlandi. Xadichaning birinchi tasallisi esa uning go‘zal xulqlari ro‘yxati edi: yaxshi amallar Allohning g‘amxo‘rligi alomatidir.", check: {
        q: "Nozil bo‘lgan birinchi so‘z qaysi?",
        options: ["Namoz o‘qi", "O‘qi (Iqro’)", "Ro‘za tut", "Iymon keltir"],
        why: "Alaq surasi 96:1.",
      } },
      { en: "Yaratgan Robbing nomi bilan o‘qi." },
      { title: "Ilk mo‘minlar", items: [
        "Uning ayoli Xadicha: birinchi iymon keltirgan inson.",
        "Erkaklardan uning eng yaqin do‘sti Abu Bakr.",
        "Bolalardan uning uyida yashagan yosh amakivachchasi Ali.",
        "Uning ozod qilingan xizmatkori va asrab olgan o‘g‘li Zayd ibn Horisa.",
        "Uch yil davomida da’vat yashirin bo‘ldi, Arqamning uyida odamdan odamga tarqaldi.",
      ] },
      { think: [
        "Eri qo‘rqqanda Xadicha nima qildi? Men yaxshi ko‘rgan odamlarimga qanday tasalli beraman?",
        "Islom “O‘qi” bilan boshlandi. Iymonimni o‘stirish uchun nima o‘qiyapman?",
      ], home: [
        "Xadichaning so‘zlarini aytib bering va so‘rang: kimdir sening qaysi yaxshi amallaringni sanab bera oladi?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Vahiy 610-yil Ramazonida Hiro g‘orida boshlandi.",
        "Birinchi so‘z “O‘qi” edi: Islom ilmdan boshlanadi.",
        "Xadicha, Abu Bakr, Ali va Zayd ilk mo‘minlar edi.",
      ] },
    ],
    quiz: [
      { q: "Ilk vahiy qayerda keldi?", options: ["Masjidul Haromda", "Hiro g‘orida", "Savr g‘orida", "Madinada"], why: "Nur tog‘ida." },
      { q: "Qaysi oyatlar birinchi nozil bo‘ldi?", options: ["Fotiha", "Alaq 96:1–5", "Ixlos", "Oyatal Kursiy"], why: "“Robbing nomi bilan o‘qi.”" },
      { q: "Unga birinchi bo‘lib kim tasalli berdi?", options: ["Abu Bakr", "Xadicha", "Abu Tolib", "Ali"], why: "“Alloh seni hech qachon sharmanda qilmaydi.”" },
      { q: "Varaqa ibn Navfal kim edi?", options: ["Savdogar", "Xadichaning amakivachchasi, nasroniy olim", "Farishta", "Quraysh boshlig‘i"], why: "U Musoning farishtasini tanidi." },
      { q: "Erkaklardan birinchi kim iymon keltirdi?", options: ["Umar", "Abu Bakr", "Usmon", "Hamza"], why: "Uning eng yaqin do‘sti." },
      { q: "Vahiy qaysi oyda boshlandi?", options: ["Shavvol", "Ramazon", "Zulhijja", "Rajab"], why: "Qur’on 2:185." },
    ],
  },

  makkah: {
    title: "Makkadagi da’vat va ta’qiblar",
    summary: "O‘n uch yillik sabr: Bilol, Sumayya, Habashiston, qamal va Toif.",
    blocks: [
      { text: "Uch yillik yashirin da’vatdan keyin Alloh buyurdi: “Eng yaqin qarindoshlaringni ogohlantir” (26:214). Payg‘ambar ﷺ Safo tog‘iga chiqib, Quraysh urug‘larini chaqirdi. U ularni oldindagi azobdan ogohlantirganda, amakisi Abu Lahab uni la’natladi va Masad surasi nozil bo‘ldi. Shundan keyin musulmonlar masxara, qamal, qiynoq va surgunga duch kelishdi." },
      { title: "Ular iymon bahosini to‘lashdi", items: [
        "Habashistonlik qul Bilolni qaynoq qum ustiga yotqizib, ko‘ksiga tosh qo‘yishdi. U Abu Bakr uni sotib olib, ozod qilgunicha: “Ahad, ahad” (Yagona, Yagona) deb takrorlayverdi.",
        "Ammorning onasi Sumayya Abu Jahl qo‘lida o‘ldirilib, Islomdagi birinchi shahid bo‘ldi. Payg‘ambar ﷺ qiynalayotgan oila yonidan o‘tib: “Sabr qilinglar, ey Yosir oilasi, sizlarga va’da qilingan joy jannatdir”, dedi.",
        "Rivoyat qilinishicha, Habbob ibn Arattni cho‘g‘ ustiga yotqizishdi, hatto orqasidagi yog‘ cho‘g‘ni o‘chirib qo‘ydi.",
        "Bir sahoba Payg‘ambar ﷺ dan Qurayshni duoibad qilishni so‘raganda, u o‘zidan oldingi iymonidan qaytmay arra bilan ikkiga bo‘lingan mo‘minlar haqida aytib berdi va dedi: “Alloh bu ishni albatta nihoyasiga yetkazadi… lekin sizlar shoshilyapsizlar” (Buxoriy 3852).",
      ] },
      { title: "Habashiston va qamal", items: [
        "615-yilda ilk musulmonlar Habashistonga, adolatli nasroniy podshoh Najoshiyning oldiga hijrat qilishdi. Keyin Ja’far ibn Abu Tolib bilan ikkinchi, kattaroq guruh bordi. Quraysh ularni qaytarishni talab qilganda, Ja’far Maryam surasini o‘qidi; Najoshiy yig‘lab: bu va Muso olib kelgan narsa bitta chiroqdan, dedi. U ularni himoya qildi.",
        "616-yildan 619-yilgacha Quraysh Bani Hoshimni qamal qildi: na savdo, na nikoh. Payg‘ambar ﷺ, uning oilasi va musulmonlar taxminan uch yil davomida bir darada qamalib, barg yeb yashashdi, bolalar ochlikdan yig‘lardi.",
      ] },
      { title: "Toif kuni", scene: "619-yil, G‘am yili. Xadicha ham, Abu Tolib ham vafot etgan edi. Payg‘ambar ﷺ Toif shahri ahli Islomni qabul qiladi degan umidda u yerga piyoda bordi.", story: [
        "Uning boshliqlari uni qo‘pollik bilan rad etib, bolalari va qullarini uning ustiga gij-gijlashdi. Ular yo‘l bo‘yida saf tortib, uni toshbo‘ron qilishdi; siyrat kitoblari uning kavushlari qonga to‘lganini rivoyat qiladi.",
        "U bir bog‘da panoh topdi. Rivoyat qilinishicha, u ta’sirli duo bilan Allohga yuzlandi, Unga zaifligidan shikoyat qilib: “Agar Sen mendan g‘azablanmagan bo‘lsang, men parvo qilmayman”, dedi.",
        "Jabroil tog‘lar farishtasi bilan keldi, u dedi: “Agar xohlasang, ikki tog‘ni bir-biriga qo‘shib, ularni ezib tashlayman.”",
        "U dedi: “Yo‘q. Men Alloh ularning zurriyotidan yolg‘iz Allohga ibodat qiladigan odamlarni chiqarishini umid qilaman.” Yillar o‘tib, Toif ahli musulmon bo‘lishdi.",
      ], lesson: "Eng og‘ir damda, unga ozor berganlarni halok qilish imkoni bo‘la turib, u ularning farzandlari uchun umid va rahmatni tanladi.", check: {
        q: "Payg‘ambar ﷺ tog‘lar farishtasiga nima deb javob berdi?",
        options: ["“Ularni ezib tashla”", "“Yo‘q, ularning zurriyoti Allohga ibodat qilishini umid qilaman”", "“Ertagacha kut”", "Hech narsa"],
        why: "U qasos o‘rniga rahmat va umidni tanladi.",
      } },
      { situation: "Sinfdoshlaring maktabda namoz o‘qiganing uchun har kuni seni masxara qilishadi. Makkalik sahobalar senga nimani o‘rgatgan bo‘lardi?", options: [
        { text: "Muammo bo‘lmasligi uchun maktabda namoz o‘qishni to‘xtataman.", feedback: "Sahobalar bundan ham og‘irroq sinovlarda iymonlariga mahkam turishgan." },
        { text: "Sabr va odob bilan namozni davom ettiraman, tinch joy topaman va kattalardan yordam so‘rayman.", feedback: "Sabr, hikmat va yordam so‘rash: Bilol va ilk musulmonlarning yo‘li." },
        { text: "Ular bilan urishaman.", feedback: "Makkada musulmonlar ozorga zo‘ravonlik bilan emas, sabr bilan javob berishgan." },
      ] },
      { think: [
        "Bosim ostida qolganimda “Ahad, ahad” men uchun nimani anglatadi?",
        "Hayotimda kimga Yosir oilasi kabi sabr va umid kerak?",
      ], home: [
        "Bolalarga Bilolning hikoyasini va u keyinchalik birinchi azonni qanday aytganini aytib bering.",
        "Maryam surasining boshini birga o‘qing va u Najoshiyga qanday ta’sir qilgani haqida gaplashing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Makkadagi o‘n uch yil ta’qiblar ostidagi sabr yillari edi.",
        "Bilol, Sumayya, Habbob va boshqalar tavhidda mustahkam turishdi.",
        "Toifda u qasos o‘rniga rahmatni va kelajakka umidni tanladi.",
      ] },
    ],
    quiz: [
      { q: "Bilol qiynoq ostida nimani takrorladi?", options: ["“Yordam bering!”", "“Ahad, ahad”", "Hech narsa", "“Meni kechiringlar”"], why: "Yagona, Yagona: tavhid." },
      { q: "Islomdagi birinchi shahid kim?", options: ["Hamza", "Sumayya", "Bilol", "Ja’far"], why: "Ammorning onasi." },
      { q: "615-yilda musulmonlar birinchi bo‘lib qayerga hijrat qilishdi?", options: ["Madinaga", "Habashistonga", "Shomga", "Yamanga"], why: "Adolatli Najoshiyning oldiga." },
      { q: "Ja’far Najoshiy oldida nima o‘qidi?", options: ["Fotihani", "Maryam surasini", "Yosin surasini", "Oyatal Kursiyni"], why: "Najoshiy yig‘ladi." },
      { q: "Qamal qancha davom etdi?", options: ["Bir oy", "Taxminan uch yil", "O‘n yil", "Bir hafta"], why: "616-yildan 619-yilgacha." },
      { q: "U Toifda tog‘lar farishtasiga nima dedi?", options: ["Ularni halok qil", "Yo‘q, ularning zurriyoti Allohga ibodat qilishini umid qilaman", "Kut", "Jang qilishga yordam ber"], why: "Buxoriy 3231." },
    ],
  },

  "isra-hijrah": {
    title: "Isro, Aqaba va hijrat",
    summary: "Tungi safar, Madina bay’atlari va tarixni o‘zgartirgan hijrat.",
    blocks: [
      { text: "G‘am yilidan keyin Alloh O‘z Rasulini Tungi safar bilan sharafladi: Masjidul Haromdan Masjidul Aqsoga, u yerda u barcha payg‘ambarlarga imom bo‘lib namoz o‘qidi, keyin osmonlar orqali Sidratul muntahoga ko‘tarildi va u yerda besh vaqt namoz berildi (17:1, Buxoriy 349). Ertasi tongda Quraysh masxara qilganda, Abu Bakr: “Agar u aytgan bo‘lsa, demak rost”, dedi va as-Siddiq deb nomlandi." },
      { title: "Aqaba bay’atlari", items: [
        "Haj mavsumida Yasribdan kelgan bir necha kishi Payg‘ambar ﷺ bilan uchrashib, Islomni qabul qilishdi.",
        "Keyingi yili o‘n ikki kishi Aqabada Allohga hech narsani shirk keltirmaslik, o‘g‘rilik qilmaslik, zino qilmaslik, farzandlarini o‘ldirmaslik va bo‘hton qilmaslikka bay’at qilishdi. Mus’ab ibn Umayr birinchi ustoz sifatida ular bilan qaytdi va Islom Yasribda tarqaldi.",
        "622-yilda yetmish uch erkak va ikki ayol uni o‘z oilalarini himoya qilgandek himoya qilishga bay’at berishdi. Madinaga yo‘l ochildi.",
      ] },
      { title: "Hijrat kechasi", scene: "Makka, 622-yil. Quraysh boshliqlari hech bir urug‘ ayblanmasligi uchun har bir urug‘dan bittadan yigit chiqarib, Payg‘ambar ﷺ ni birgalikda o‘ldirishga kelishishdi.", story: [
        "Ular kechasi uning uyini o‘rab olishdi. U Aliga o‘z to‘shagida yotishni buyurdi, keyin ularning orasidan chiqib ketdi; rivoyat qilinishicha, u Yosin surasidan o‘qib, ularning boshlariga tuproq sepdi va Alloh ularni ko‘r qildi, ular uni ko‘rishmadi.",
        "U Abu Bakrning oldiga bordi; rivoyat qilinishicha, Abu Bakr uning hamrohi qilib tanlanganidan quvonchdan yig‘ladi. Quraysh izquvarlar bilan qidirib, uning o‘ligi yoki tirigi uchun yuzta tuya mukofot va’da qilgan paytda, ular uch kecha Savr g‘orida yashirinishdi.",
        "Abu Bakrning qizi Asmo ularga ovqat olib kelib, uni ikkiga yirtgan belbog‘i bilan bog‘ladi; u “ikki belbog‘li” bo‘lib qoldi. Bir cho‘pon ularga sut olib kelib, izlarini suruvi bilan yashirdi.",
        "Yo‘lda Suroqa ibn Molik mukofot uchun ularni quvdi. Uning otining oyoqlari qumga botib ketdi. Rivoyat qilinishicha, Payg‘ambar ﷺ unga Kisroning bilaguzuklarini va’da qilgan va yillar o‘tib, Umar davrida Suroqa ularni taqqan.",
        "Madina uni kutib olishga chiqdi; rivoyat qilinishicha, qizlar “Tala’al badru alayna” deb kuylashgan. Hamma uni mehmon qilmoqchi edi, u esa tuyasiga tanlashga ruxsat berdi; tuya cho‘kkan joyda masjid qurildi.",
      ], lesson: "Rejalashtirish, sir saqlash va harakat, Allohga to‘liq tavakkul bilan birga. Hijrat ikkalasini ham o‘rgatadi.", check: {
        q: "Hijrat kechasi Payg‘ambar ﷺ ning to‘shagida kim yotdi?",
        options: ["Abu Bakr", "Ali", "Zayd", "Bilol"],
        why: "Ali omonatlarni qaytarish uchun qoldi.",
      } },
      { en: "G‘amgin bo‘lma, albatta Alloh biz bilan." },
      { think: [
        "Hijrat muhojirlarga nimaga tushdi va ular nimani qo‘lga kiritishdi?",
        "Men qilishim kerak bo‘lgan “hijrat” bormi: biror odatdan, joydan yoki davradan uzoqlashish?",
      ], home: [
        "So‘rang: agar Alloh uni himoya qilayotgan bo‘lsa, Payg‘ambar ﷺ nega bunchalik puxta reja tuzgan?",
        "Rivoyatlarga ko‘ra kutib olishda kuylangan “Tala’al badru alayna”ni birga o‘rganing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Isro va Me’rojda besh vaqt namoz berildi; Abu Bakr as-Siddiq bo‘ldi.",
        "Aqaba bay’atlari Madinani Islomga ochdi.",
        "Hijrat puxta rejani Allohga to‘liq tavakkul bilan birlashtirdi.",
      ] },
    ],
    quiz: [
      { q: "Nega Abu Bakr as-Siddiq deb ataldi?", options: ["U boy edi", "U Tungi safarga darhol ishondi", "U keksa edi", "U jasur jang qildi"], why: "“Agar u aytgan bo‘lsa, demak rost.”" },
      { q: "Payg‘ambar ﷺ payg‘ambarlarga qayerda imom bo‘ldi?", options: ["Makkada", "Masjidul Aqsoda", "Madinada", "Toifda"], why: "Tungi safarda." },
      { q: "Yasribga yuborilgan birinchi ustoz kim?", options: ["Ali", "Mus’ab ibn Umayr", "Bilol", "Umar"], why: "Birinchi Aqaba bay’atidan keyin." },
      { q: "Ular uch kecha qayerda yashirinishdi?", options: ["Hiroda", "Savrda", "Uhudda", "Toifda"], why: "Savr g‘orida." },
      { q: "Kim “ikki belbog‘li” deb atalgan?", options: ["Xadicha", "Asmo binti Abu Bakr", "Oisha", "Fotima"], why: "U ularning ovqatini belbog‘i bilan bog‘ladi." },
      { q: "Payg‘ambar ﷺ Suroqaga nima va’da qildi?", options: ["Oltin tangalar", "Kisroning bilaguzuklari", "Ot", "Uy"], why: "Rivoyatlarga ko‘ra Umar davrida ro‘yobga chiqqan." },
    ],
  },

  madinah: {
    title: "Madinaning qurilishi",
    summary: "Masjid, birodarlik, ahdnoma va yangi jamiyat.",
    blocks: [
      { text: "Madinada Payg‘ambar ﷺ o‘n yil ichida namunaviy jamiyatga aylangan narsani qurdi. Uning dastlabki uch ishi bu jamiyatning poydevorini ko‘rsatadi: ibodat uchun masjid, qalblar o‘rtasida birodarlik va shaharning barcha xalqlari o‘rtasida adolat ahdi." },
      { title: "Uch poydevor", items: [
        "Masjid: loy g‘isht va xurmo tanalaridan qurildi, Payg‘ambar ﷺ g‘ishtlarni o‘zi tashidi (Buxoriy 428). U masjid, maktab, sud va jamoat markazi edi.",
        "Birodarlik (muoxot): Makkadan kelgan har bir muhojir Madinalik ansoriy birodari bilan juftlashtirildi, ansoriy u bilan uyini va molini baham ko‘rdi.",
        "Madina ahdnomasi: musulmonlar, yahudiy qabilalari va Madinaning boshqa aholisini shahar mudofaasi uchun yagona jamiyatga birlashtirgan, har biriga o‘z dini va hammaga adolatni kafolatlagan yozma nizom.",
      ] },
      { title: "Sa’dning taklifi va Abdurahmonning javobi", scene: "Madina, birodarlashtirish. Makkada bor molini qoldirib kelgan Abdurahmon ibn Avf ansorlardan Sa’d ibn Rabi’ga birodar qilindi.", story: [
        "Sa’d unga dedi: “Men ansorlarning eng boyiman. Molimning yarmini ol. Ikki xotinim bor; qaysi biri senga yoqsa, ayt, uni taloq qilaman, sen unga uylanasan.”",
        "Abdurahmon dedi: “Alloh oilang va molingni senga barakali qilsin. Menga bozorga yo‘lni ko‘rsat, bas.”",
        "U savdo qila boshladi, ko‘p o‘tmay uylanishga yetarli pul topdi va sahobalarning eng boy va eng saxiylaridan biriga aylandi.",
      ], lesson: "Eng oliy saxovat eng oliy izzat bilan uchrashdi: Sa’d hamma narsani taklif qildi; Abdurahmon esa faqat mehnat qilish imkoniyatini so‘radi.", check: {
        q: "Abdurahmon Sa’ddan nima so‘radi?",
        options: ["Molining yarmini", "Bozorga yo‘lni", "Uyni", "Xotinni"],
        why: "U mehnat qilib topishni afzal ko‘rdi.",
      } },
      { title: "Yangi jamiyatdagi hayot", items: [
        "Azon joriy qilindi va Bilol birinchi muazzin bo‘ldi.",
        "Qibla Quddusdan Ka’baga o‘zgartirildi (2:144).",
        "Hijriy 2-yilda zakot va Ramazon ro‘zasi farz qilindi.",
        "Masjidda yashagan kambag‘al sahobalar, ahli suffa, u bilan ilm o‘rganishar va jamiyat ularni to‘ydirardi.",
      ] },
      { think: [
        "Jamoamda, ishda yoki masjidda ansoriy muhojirga qilgandek muomala qila oladigan yangi odam bormi?",
        "Qo‘limdan kelsa, yordam olishni afzal ko‘ramanmi yoki mehnat qilishnimi?",
      ], home: [
        "Bu yil masjidingizdan qo‘llab-quvvatlash uchun bitta “birodar” oila tanlang.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Madina masjid, birodarlik va adolat ustiga qurildi.",
        "Ansorlar hamma narsani baham ko‘rishdi; muhojirlar izzatlarini saqlashdi.",
        "Azon, qibla, zakot va ro‘za shu ilk yillarda keldi.",
      ] },
    ],
    quiz: [
      { q: "Payg‘ambar ﷺ Madinada birinchi bo‘lib nima qurdi?", options: ["Saroy", "Masjid", "Bozor", "Devor"], why: "U g‘ishtlarni o‘zi tashidi." },
      { q: "Muoxot nima edi?", options: ["Jang", "Muhojirlar va ansorlar o‘rtasidagi birodarlik", "Soliq", "Quraysh bilan shartnoma"], why: "Har bir muhojir ansoriy bilan juftlashtirildi." },
      { q: "Abdurahmon ibn Avf nima so‘radi?", options: ["Oltin", "Bozorga yo‘l", "Uy", "Ot"], why: "Buxoriy 3780." },
      { q: "Birinchi muazzin kim edi?", options: ["Umar", "Bilol", "Abu Bakr", "Anas"], why: "Bilol ibn Raboh." },
      { q: "Qibla Quddusdan qayerga o‘zgardi?", options: ["Madinaga", "Ka’baga", "Toifga", "Damashqqa"], why: "Qur’on 2:144." },
      { q: "Ahli suffa kimlar edi?", options: ["Askarlar", "Masjidda yashab, ilm o‘rgangan kambag‘al sahobalar", "Savdogarlar", "Podshohlar"], why: "Masalan, Abu Hurayra." },
    ],
  },

  battles: {
    title: "Badr, Uhud va Xandaq",
    summary: "Uchta hal qiluvchi jang va har biri o‘rgatgan saboqlar.",
    blocks: [
      { text: "Madinada musulmonlarga ularni uylaridan haydab chiqarganlarga qarshi o‘zlarini himoya qilishga izn berildi (22:39). Uchta jang yosh jamiyatni shakllantirdi va har birida Qur’onning o‘zi ta’kidlagan saboqlar bor." },
      { title: "Badr, 17 Ramazon, hijriy 2-yil", items: [
        "Yomon qurollangan 313 ga yaqin musulmon taxminan 1000 makkalikka qarshi turdi.",
        "Badr kuni Payg‘ambar ﷺ ridosi yelkasidan tushib ketguncha duo qildi (Muslim 1763), undan oldingi kechani esa namoz bilan o‘tkazgan edi (Musnad Ahmad 1023). Alloh yordamga farishtalar yubordi (8:9).",
        "Hal qiluvchi g‘alaba: “Sizlar zaif bo‘lganingizda, Alloh sizlarga Badrda g‘alaba berdi” (3:123).",
        "Saboq: g‘alaba sondan emas, tayyorgarlik va duodan keyin Allohdan keladi.",
      ] },
      { title: "Uhud, hijriy 3-yil", items: [
        "Taxminan 700 musulmon 3000 kishiga qarshi. Payg‘ambar ﷺ ellikta kamonchini tepalikka qo‘yib buyurdi: nima ko‘rsangiz ham joyingizni tark etmang.",
        "Musulmonlar g‘alaba qila boshlaganda, kamonchilarning ko‘pi o‘lja uchun joyini tark etdi. O‘shanda hali musulmon bo‘lmagan Xolid ibn Valid ortdan hujum qildi.",
        "Yetmish sahoba shahid bo‘ldi, ular orasida Payg‘ambar ﷺ ning amakisi Hamza ham bor edi. Payg‘ambar ﷺ ning o‘zi ham yaralandi.",
        "Saboq: itoatsizlik va dunyo muhabbati g‘alabani mag‘lubiyatga aylantiradi (3:152).",
      ] },
      { title: "Xandaq, hijriy 5-yil", items: [
        "Taxminan 10 000 kishilik ittifoq Madinaga yurish qildi. Salmon al-Forsiyning maslahati bilan musulmonlar ochiq shimoliy tomonga xandaq qazishdi.",
        "Payg‘ambar ﷺ och holda, qorniga tosh bog‘lab, ular bilan birga qazidi (Buxoriy 4101). Ulkan qoya yo‘lni to‘sganda, u unga urdi va har bir zarbada Fors, Rum va Yaman xazinalarini va’da qildi.",
        "Taxminan bir oydan keyin Alloh muzdek shamol va ko‘rinmas lashkarlar yubordi; ittifoq parchalanib, chekindi (33:9).",
        "Saboq: birlik, kimdan bo‘lmasin yangi g‘oyalar va qamal ostidagi sabr.",
      ] },
      { title: "Badr tongi", scene: "Badr, ikki qo‘shin bir-biriga ro‘para bo‘lgan payt. Musulmon qo‘shini kichik, charchagan va uch barobar kam edi.", story: [
        "Payg‘ambar ﷺ chodirida qiblaga qarab turdi, qo‘llarini ko‘tarib, Robbiga iltijo qildi: “Allohim, menga bergan va’dangni ado et. Allohim, agar bu kichik jamoa halok bo‘lsa, yer yuzida Senga ibodat qilinmaydi.”",
        "U ridosi yelkasidan tushib ketguncha qo‘llarini ko‘tarib turaverdi. Abu Bakr ridoni olib, qayta yelkasiga qo‘ydi va uni orqasidan quchoqlab dedi: “Ey Allohning Rasuli, yetar. Robbing senga bergan va’dasini albatta ado etadi.”",
        "Alloh nozil qildi: “Robbingizdan yordam so‘raganingizda, U sizlarga javob berdi: Men sizlarga ketma-ket keladigan ming farishta bilan madad beraman” (8:9).",
      ], lesson: "Eng yaxshi tayyorgarlik duodir. Payg‘ambar ﷺ jangni rejalashtirdi, keyin qalbini Allohga ochdi.", check: {
        q: "Payg‘ambar ﷺ duo qilayotganda Abu Bakr nima qildi?",
        options: ["Chodirdan chiqib ketdi", "Ridosini qayta yelkasiga qo‘yib, unga tasalli berdi", "Otini tayyorladi", "Qo‘shinni chaqirdi"],
        why: "Muslim 1763.",
      } },
      { think: [
        "Qayerda Uhuddagi kamonchilar kabi tez foyda uchun o‘z joyimni tashlab ketish vasvasasiga tushaman?",
        "Katta “jang”larimdan oldin duo qilamanmi: imtihonlar, suhbatlar, qarorlar?",
      ], home: [
        "So‘rang: qo‘shin g‘alaba qilayotganda kamonchilar nega yutqazdi?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Badr: g‘alaba sondan emas, duo va iymon orqali Allohdan.",
        "Uhud: itoatsizlik va dunyo muhabbati mag‘lubiyat keltiradi.",
        "Xandaq: birlik, yaxshi g‘oyalar va sabr yengillik olib keladi.",
      ] },
    ],
    quiz: [
      { q: "Badrda taxminan qancha musulmon jang qilgan?", options: ["100", "313", "1000", "3000"], why: "Taxminan 1000 kishiga qarshi." },
      { q: "Nega musulmonlar Uhudda zarar ko‘rdi?", options: ["Yomon ob-havo", "Kamonchilar joyini tark etdi", "Ular charchagan edi", "Otlar juda kam edi"], why: "Qur’on 3:152." },
      { q: "Xandaqni kim taklif qildi?", options: ["Umar", "Salmon al-Forsiy", "Xolid", "Ali"], why: "Fors usuli." },
      { q: "Payg‘ambar ﷺ ning qaysi amakisi Uhudda shahid bo‘ldi?", options: ["Abu Tolib", "Hamza", "Abbos", "Abu Lahab"], why: "Shahidlar sayyidi." },
      { q: "Xandaq qamali qanday tugadi?", options: ["Sulh bilan", "Alloh muzdek shamol yubordi va ittifoq chekindi", "Jang bilan", "Quraysh g‘alaba qildi"], why: "Qur’on 33:9." },
      { q: "Badr arafasida Payg‘ambar ﷺ nima qildi?", options: ["Uxladi", "Astoydil duo qildi", "Qo‘shinni sanadi", "Maktub yozdi"], why: "Muslim 1763." },
    ],
  },

  "hudaybiyyah-fath": {
    title: "Hudaybiya va Makkaning fathi",
    summary: "Mag‘lubiyatdek ko‘ringan sulh, ochiq g‘alaba va kechirilgan shahar.",
    blocks: [
      { text: "Hijriy 6-yilda Payg‘ambar ﷺ taxminan 1400 sahoba bilan umra qilish uchun, ehrom kiyib, jang qilish niyatisiz yo‘lga chiqdi. Quraysh ularni Hudaybiyada to‘sib qo‘ydi. Keyin bo‘lgan voqealar sahobalarning tavakkulini har qanday jangdan ham ko‘proq sinadi." },
      { title: "Hudaybiya sulhi", items: [
        "O‘n yillik tinchlik. Musulmonlar bu yil umrasiz qaytib, keyingi yil kelishadi.",
        "Vasiysining ruxsatisiz musulmonlarga borgan har bir makkalik qaytariladi; musulmonlardan Makkaga borgan kishi esa qaytarilmaydi.",
        "Quraysh hatto “Bismillahir rohmanir rohim” yoki “Muhammad, Allohning Rasuli” deb yozishga ham rozi bo‘lmadi va Payg‘ambar ﷺ ikkalasini ham o‘zgartirishga rozi bo‘ldi (Buxoriy 2731).",
        "Ko‘plab sahobalar, hatto Umar ham, qattiq xafa bo‘ldi. Keyin Alloh nozil qildi: “Albatta, Biz senga ochiq g‘alaba berdik” (48:1).",
      ] },
      { title: "Nega bu g‘alaba edi", items: [
        "Tinchlik Islomning erkin tarqalishiga imkon berdi: keyingi ikki yilda oldingi barcha yillardagidan ko‘proq odam Islomga kirdi.",
        "Payg‘ambar ﷺ podshohlarni da’vat qilib maktublar yubordi: Rum qaysari Herakl, Fors Kisrosi, Najoshiy, Misr Muqavqisi va boshqalar.",
        "Quraysh musulmonlarning ittifoqchisiga hujum qilib, sulhni buzganda, Makkaga yo‘l ochildi.",
      ] },
      { title: "Makkaning fathi", scene: "Ramazon, hijriy 8-yil. O‘n ming musulmon Makka tashqarisida qo‘nim topib, tepaliklarda minglab gulxan yoqishdi.", story: [
        "Payg‘ambar ﷺ e’lon qildi: kim Abu Sufyonning uyiga kirsa, omonda; kim eshigini yopsa, omonda; kim Masjidul Haromga kirsa, omonda. Makka deyarli qon to‘kilmasdan fath qilindi.",
        "Rivoyat qilinishicha, u tuyasida shunchalik kamtarlik bilan boshini egib kirdiki, soqoli egarga tegay derdi.",
        "U Ka’baga borib, uning atrofidagi 360 butni hassa bilan qulatdi va o‘qidi: “Haq keldi va botil yo‘q bo‘ldi” (17:81) (Buxoriy 4287).",
        "Keyin u yigirma yil davomida uni ta’qib qilgan Quraysh ahli oldida turib, ular u nima qiladi deb o‘ylashlarini so‘radi. U ularni kechirdi; siyrat kitoblari uning so‘zlarini shunday rivoyat qiladi: “Bugun sizlarga hech qanday malomat yo‘q. Boringlar, sizlar ozodsiz.”",
        "Bir paytlar Makka qumlarida qiynalgan sobiq qul Bilol Ka’ba ustiga chiqib, azon aytdi.",
      ], lesson: "To‘liq kuch to‘liq kamtarlik va afv bilan ishlatildi. Faqat shahar emas, qalblar ham shunday fath qilindi.", check: {
        q: "Payg‘ambar ﷺ Makkaga qanday kirdi?",
        options: ["Mag‘rur holda, parad boshida", "Kamtarlik bilan boshini egib", "Kechasi yashirincha", "Yolg‘iz piyoda"],
        why: "Kamtarlik bilan g‘alaba.",
      } },
      { situation: "Ishda jamoang mag‘lubiyat deb hisoblaydigan murosaga rozi bo‘lding, lekin bu kattaroq eshiklarni ochadi deb ishonasan. Hudaybiya nimani o‘rgatadi?", options: [
        { text: "Noqulay ko‘ringan shartlarni hech qachon qabul qilma.", feedback: "Hudaybiya mag‘lubiyatdek ko‘rindi, Alloh esa uni ochiq g‘alaba deb atadi." },
        { text: "Dono, tamoyilli murosa uzoq muddatli g‘alaba bo‘lishi mumkin; fikringni tushuntir va sabrli bo‘l.", feedback: "Payg‘ambar ﷺ tamoyillarini saqlab, tinchlik uchun tashqi ko‘rinishdan voz kechdi." },
        { text: "Rozi bo‘lib, keyin kelishuvni buzaman.", feedback: "Musulmonlar og‘ir bo‘lsa ham sulhga rioya qilishdi; uni Quraysh buzdi." },
      ] },
      { think: [
        "Hayotimda “Hudaybiya” bo‘lganmi: yo‘qotishdek tuyulgan, lekin foydaga aylangan narsa?",
        "G‘alaba qilganimda boshimni egib kiramanmi?",
      ], home: [
        "Nasr surasini (110) birga o‘qing va muvaffaqiyatga qanday munosabatda bo‘lish haqida gaplashing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Hudaybiya mag‘lubiyatdek ko‘rindi, lekin ochiq g‘alaba edi (48:1).",
        "Tinchlik Islomning tarqalishiga imkon berdi va Makkaga yo‘l ochdi.",
        "Fath kamtarona, deyarli qonsiz va afvga to‘la bo‘ldi.",
      ] },
    ],
    quiz: [
      { q: "Musulmonlar Hudaybiyaga nega borishdi?", options: ["Jang qilish uchun", "Umra qilish uchun", "Savdo uchun", "Najoshiy bilan uchrashish uchun"], why: "Ehromda, jang niyatisiz." },
      { q: "Alloh Hudaybiya sulhini qanday vasfladi?", options: ["Mag‘lubiyat", "Ochiq g‘alaba", "Xato", "Faqat sinov"], why: "Qur’on 48:1." },
      { q: "Hudaybiyadan keyin Payg‘ambar ﷺ kimlarga maktub yubordi?", options: ["Faqat arablarga", "Herakl va Kisro kabi podshohlarga", "Hech kimga", "Faqat yahudiylarga"], why: "Ularni Islomga da’vat qilib." },
      { q: "Makka fathi nega sodir bo‘ldi?", options: ["Quraysh sulhni buzdi", "Musulmonlar uni buzdi", "Qurg‘oqchilik", "Tush"], why: "Quraysh musulmonlarning ittifoqchisiga hujum qildi." },
      { q: "Ka’ba atrofida nechta but bor edi?", options: ["7", "60", "360", "1000"], why: "Buxoriy 4287." },
      { q: "Ka’ba ustida kim azon aytdi?", options: ["Abu Bakr", "Bilol", "Umar", "Ali"], why: "Bir paytlar Makkada qiynalgan sobiq qul." },
    ],
  },

  farewell: {
    title: "Vidolashuv haji va uning vafoti",
    summary: "Uning so‘nggi xutbasi, so‘nggi kunlari va ummat qanday birlashib qoldi.",
    blocks: [
      { text: "Hijriy 10-yilda Payg‘ambar ﷺ 100 000 dan ortiq sahoba bilan yagona hajini ado etdi. Arafot tekisligida u o‘z xabarini jamlagan xutba so‘zladi va ko‘p o‘tmay oyat nozil bo‘ldi: “Bugun sizlar uchun diningizni mukammal qildim” (5:3)." },
      { title: "Vidolashuv xutbasidan", items: [
        "“Qonlaringiz, mollaringiz va obro‘laringiz bir-biringizga haromdir, xuddi shu kuningiz, shu oyingiz va shu yurtingiz harom bo‘lganidek” (Buxoriy 1739).",
        "Ribo va johiliyat qon qasoslari bekor qilindi.",
        "“Ayollar haqida Allohdan qo‘rqinglar; sizlarning ular ustida haqqingiz bor, ularning ham sizlar ustida haqqi bor” (Muslim 1218).",
        "“Sizlarga shunday narsani qoldirdimki, unga mahkam yopishsangiz, hech qachon adashmaysiz: Allohning Kitobi” (Muslim 1218).",
        "Arabning arab bo‘lmagandan, oqning qoradan taqvodan boshqa hech qanday ustunligi yo‘q (Musnadi Ahmad 23489).",
        "“Hozir bo‘lganlar g‘oyiblarga yetkazsin.” Keyin u so‘radi: “Yetkazdimmi?” Ular: ha, deyishdi. U barmog‘ini osmonga ko‘tarib dedi: “Allohim, guvoh bo‘l.”",
      ] },
      { title: "Uning so‘nggi kunlari", scene: "Madina, Rabi’ul avval, hijriy 11-yil. Payg‘ambar ﷺ ning isitmasi va bosh og‘rig‘i kuchayib bordi.", story: [
        "U Oishaning xonasida parvarish qilinishini so‘radi. Namozga imomlik qila olmaydigan darajada betob bo‘lib, dedi: “Abu Bakrga ayting, odamlarga imom bo‘lsin.”",
        "So‘nggi tongida, dushanba kuni, u xonasining pardasini ko‘tarib, Abu Bakr ortida namoz o‘qiyotgan sahobalarining saflariga qarab, jilmaydi. Ular u tuzalib qoldi deb o‘ylab, quvonchdan namozlarini buzib yuborishlariga oz qoldi.",
        "O‘sha kuni keyinroq, boshi Oishaning ko‘ksida turgan holda, u yuqoriga qarab: “Rafiqi a’lo bilan, Rafiqi a’lo bilan”, dedi va vafot etdi (Buxoriy 4463). U 63 yoshda edi.",
        "Madina larzaga keldi. Umar bunga ishonishni istamadi. Keyin Abu Bakr kelib, Payg‘ambar ﷺ ni o‘pdi va odamlarga murojaat qildi: “Kim Muhammadga ibodat qilgan bo‘lsa, Muhammad vafot etdi. Kim Allohga ibodat qilsa, Alloh tirikdir, hech qachon o‘lmaydi”, deb 3:144 ni o‘qidi. Go‘yo odamlar bu oyatni ilgari hech eshitmagandek bo‘ldi.",
      ], lesson: "Unga muhabbatimiz unga ergashish bilan ko‘rinadi, iymonimiz esa hech qachon o‘lmaydigan Allohga tayanadi.", check: {
        q: "Payg‘ambar ﷺ vafot etganda Abu Bakr nima dedi?",
        options: ["“U qaytadi”", "“Kim Allohga ibodat qilsa, Alloh tirikdir, hech qachon o‘lmaydi”", "“Madinadan ketaylik”", "Hech narsa"],
        why: "U 3:144 ni o‘qidi.",
      } },
      { en: "Muhammad faqat bir payg‘ambardir; undan oldin ham payg‘ambarlar o‘tgan. Agar u vafot etsa yoki o‘ldirilsa, ortingizga qaytasizmi?" },
      { think: [
        "Vidolashuv xutbasining qaysi satri bugungi dunyomizga eng ko‘p gapiradi?",
        "Kundalik hayotimda Payg‘ambar ﷺ ga muhabbatimni qanday ko‘rsataman?",
      ], home: [
        "Vidolashuv xutbasi bandlarini birga o‘qing va shu hafta amal qilish uchun bittasini tanlang.",
        "Har juma birgalikda unga salovot ayting.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Vidolashuv haji va xutbasi uning xabarini jamladi.",
        "Din mukammal qilindi (5:3) va u uni to‘liq yetkazdi.",
        "U 63 yoshida vafot etdi; Alloh tirikdir va hech qachon o‘lmaydi.",
      ] },
    ],
    quiz: [
      { q: "Payg‘ambar ﷺ hijratdan keyin necha marta haj qildi?", options: ["Bir marta", "Ikki marta", "O‘n marta", "Hech qachon"], why: "Vidolashuv haji, hijriy 10-yil." },
      { q: "U Vidolashuv xutbasini qayerda so‘zladi?", options: ["Madinada", "Arafotda", "Toifda", "Quddusda"], why: "Arafa kuni." },
      { q: "O‘shanda qaysi oyat nozil bo‘ldi?", options: ["2:255", "“Bugun diningizni mukammal qildim” (5:3)", "112:1", "96:1"], why: "Qur’on 5:3." },
      { q: "Xutbaga ko‘ra bir kishini boshqasidan nima afzal qiladi?", options: ["Irq", "Taqvo", "Boylik", "Til"], why: "Musnadi Ahmad 23489." },
      { q: "Uning so‘nggi kasalligida namozga kim imom bo‘ldi?", options: ["Umar", "Abu Bakr", "Ali", "Bilol"], why: "Buxoriy 664." },
      { q: "Uning so‘nggi so‘zlari qanday edi?", options: ["“Namoz o‘qinglar”", "“Rafiqi a’lo bilan”", "“Alvido”", "“Aliga ergashinglar”"], why: "Buxoriy 4463." },
    ],
  },

  character: {
    title: "Uning xulqi va kundalik hayoti",
    summary: "U uyda, bolalar bilan, kambag‘allar bilan va ibodatda qanday yashagan.",
    blocks: [
      { text: "Alloh aytadi: “Albatta, sen buyuk xulq ustidasan” (68:4). Oishadan uning xulqi haqida so‘rashganda, u dedi: “Uning xulqi Qur’on edi” (Muslim 746). Uning buyukligi faqat jang maydonlari va minbarlarda emas, balki oilasi, xizmatkorlari, bolalar va eng kambag‘al odamlarga qanday muomala qilganida ham edi." },
      { title: "Uyda", items: [
        "U oilasiga xizmat qilardi, namoz vaqti kirganda esa namozga chiqardi (Buxoriy 676). U kiyimlarini o‘zi yamar va kavushlarini o‘zi tuzatardi (Musnad Ahmad 24903).",
        "U Oisha bilan yugurish musobaqasi o‘tkazdi va Oisha yutdi; yillar o‘tib ular yana yugurishdi va u yutib, kulib: “Bu o‘shaning evaziga”, dedi (Abu Dovud 2578).",
        "U hech qachon ayolni, xizmatkorni yoki biror kishini qo‘li bilan urmagan (Muslim 2328).",
        "Anas unga o‘n yil xizmat qildi va undan hech qachon “uf” yoki “nega bunday qilding?” degan gapni eshitmadi (Buxoriy 6038).",
      ] },
      { title: "Bolalar va zaiflar bilan", items: [
        "U bolalar bilan o‘ynardi, ularga salom berardi va nevaralarini, hatto namozda ham, yelkasida ko‘tarardi.",
        "U qushchasi o‘lib qolgan kichkina bola Abu Umayrdan so‘radi: “Ey Abu Umayr, qushchaga nima bo‘ldi?” (Buxoriy 6203).",
        "Go‘dakning yig‘isini eshitganda, onasiga rahm qilib, namozini qisqartirardi (Buxoriy 709).",
        "Bir cho‘ri uni qo‘lidan ushlab, kerakli joyiga olib bora olardi (Buxoriy 6072).",
      ] },
      { title: "Ibodatda", items: [
        "U tungi namozda oyoqlari shishib ketguncha turardi. Oisha, axir sen kechirilgansan-ku, deb so‘raganda, u dedi: “Shukr qiluvchi banda bo‘lmaymanmi?” (Buxoriy 4837).",
        "U kuniga yetmish martadan ko‘proq Allohdan mag‘firat so‘rardi (Buxoriy 6307).",
        "U odamlarning eng saxiysi edi, ayniqsa Ramazonda (Buxoriy 6).",
      ] },
      { title: "“Shukr qiluvchi banda bo‘lmaymanmi?”", scene: "Madinada, kechasi Payg‘ambar ﷺ ning xonasi.", story: [
        "Oisha uning tun bo‘yi namozda turganini, shunchalik uzoq turganini ko‘rardiki, oyoqlari shishib, yorilib ketardi.",
        "U so‘radi: “Ey Allohning Rasuli, Alloh o‘tgan va keyingi gunohlaringni kechirgan bo‘lsa, nega bunday qilasan?”",
        "U javob berdi: “Shukr qiluvchi banda bo‘lishni yaxshi ko‘rmaymanmi?”",
      ], lesson: "U azobdan qo‘rqib emas, muhabbat va shukr bilan ibodat qilgan. Ibodat Alloh bergan hamma narsa uchun bizning shukrimizdir.", check: {
        q: "Payg‘ambar ﷺ nega kechasi shunchalik uzoq namoz o‘qirdi?",
        options: ["Kechirilish uchun", "Shukr qiluvchi banda bo‘lish uchun", "Ko‘rinish uchun", "Uxlay olmagani uchun"],
        why: "Shukr sifatidagi ibodat.",
      } },
      { situation: "Ishdan charchab uyga kelding va oshxona tartibsiz. Payg‘ambar ﷺ nima qilgan bo‘lardi?", options: [
        { text: "Shikoyat qilib, o‘tirib olaman.", feedback: "U hech qachon uy ishlari uchun oilasini qattiq tanqid qilmagan." },
        { text: "Xursandchilik bilan yig‘ishtirishga yordam beraman, keyin namoz o‘qiyman.", feedback: "U namoz vaqtigacha oilasining xizmatida bo‘lardi (Buxoriy 676)." },
        { text: "Boshqa birov qilishini kutaman.", feedback: "Oilaga xizmat qilish uning Sunnati edi." },
      ] },
      { think: [
        "Uning uy hayotining qaysi qismidan eng uzoqdaman?",
        "Allohga ibodat orqali shukr qilamanmi yoki ibodatda faqat so‘raymanmi?",
      ], home: [
        "Har bir bola bu darsdan bir hafta amal qilish uchun bitta sunnatni tanlasin va kechki ovqatda bo‘lishsin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Uning xulqi amaldagi Qur’on edi.",
        "U oilasiga xizmat qilgan, bolalar bilan o‘ynagan va hech kimni urmagan.",
        "Uning ibodati shukr edi: “Shukr qiluvchi banda bo‘lmaymanmi?”",
      ] },
      { label: "Ruhiy tarbiya", text: "Uning xulqi haqida 3-juzda ko‘proq o‘qing." },
    ],
    quiz: [
      { q: "“Uning xulqi … edi”", options: ["Qattiq", "Qur’on", "Noma’lum", "Sokin"], why: "Muslim 746." },
      { q: "U uyda nima qilardi?", options: ["Faqat dam olardi", "Oilasiga yordam berib, o‘z narsalarini o‘zi yamardi", "Buyruq berardi", "Faqat o‘qirdi"], why: "Buxoriy 676; Musnad Ahmad 24903." },
      { q: "Anas unga necha yil “uf” eshitmasdan xizmat qildi?", options: ["Ikki", "O‘n", "Yigirma", "Besh"], why: "Buxoriy 6038." },
      { q: "U nega ba’zan namozini qisqartirardi?", options: ["Charchagani uchun", "Go‘dakning yig‘isini eshitgani uchun", "Yomg‘ir yog‘gani uchun", "Safarda bo‘lgani uchun"], why: "Onasiga rahm qilib." },
      { q: "U kichkina Abu Umayrdan nima so‘radi?", options: ["Maktab haqida", "Qushchasiga nima bo‘lganini", "Namoz haqida", "Yoshini"], why: "Buxoriy 6203." },
      { q: "U nega oyoqlari shishguncha namoz o‘qirdi?", options: ["Faqat qo‘rquvdan", "Shukr qiluvchi banda bo‘lish uchun", "Odat bo‘yicha", "O‘rgatish uchun"], why: "Buxoriy 4837." },
    ],
  },
};

export default T;
