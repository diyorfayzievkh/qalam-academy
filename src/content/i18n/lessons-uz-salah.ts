import type { LessonTrMap } from "./lessons";

// Namoz akademiyasi darslari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  guide: {
    title: "Bosqichma-bosqich namoz qo‘llanmasi",
    summary: "Tahorat va har bir namoz, erkaklar va ayollar uchun izohlar bilan.",
    blocks: [
      { label: "Namoz qo‘llanmasini ochish", text: "Bomdod, peshin, asr, shom, xufton, vitr va juma, bosqichma-bosqich." },
    ],
  },

  conditions: {
    title: "Namozning shartlari",
    summary: "Namozni boshlashdan oldin nimalar bajarilgan bo‘lishi kerak.",
    blocks: [
      { title: "Namozdan oldin (hanafiy)", items: [
        "Tananing hadasdan pokligi (tahorat yoki kerak bo‘lganda g‘usl).",
        "Tana, kiyim va namoz o‘qiladigan joyning pokligi.",
        "Avratni yopish: erkaklar uchun kindikdan tizzaning ostigacha; ayollar uchun yuz, qo‘l kaftlari va oyoqlardan boshqa butun tana.",
        "Qiblaga yuzlanish.",
        "Namoz vaqti kirgan bo‘lishi.",
        "Niyat.",
      ] },
    ],
  },

  "times-rules": {
    title: "Hanafiy mazhabida namoz vaqtlari",
    summary: "Har bir namoz qachon boshlanadi va qachon tugaydi.",
    blocks: [
      { items: [
        "Bomdod: haqiqiy tongdan quyosh chiqqunicha.",
        "Peshin: zavoldan keyin narsaning soyasi o‘zidan ikki barobar bo‘lgunicha (zavol paytidagi soyasi qo‘shiladi).",
        "Asr: o‘sha paytdan quyosh botgunicha. Quyosh sarg‘aygunicha kechiktirish makruh.",
        "Shom: quyosh botishidan qizil, keyin oq shafaq yo‘qolgunicha (Abu Hanifa: oq shafaq).",
        "Xufton va vitr: shafaq tugashidan haqiqiy tonggacha. Vitr xuftondan keyin o‘qiladi.",
      ] },
      { text: "Quyosh chiqayotganda, quyosh tikkaga kelganda va quyosh botayotganda namoz o‘qish man qilingan (o‘sha kunning asridan tashqari)." },
      { label: "Bugungi namoz vaqtlari", text: "Shahringiz uchun hanafiy asr bo‘yicha hisoblangan." },
    ],
  },

  breakers: {
    title: "Namozni buzadigan narsalar",
    summary: "Namozni botil qilib, qayta o‘qishni talab qiladigan amallar.",
    blocks: [
      { items: [
        "Gapirish, oz bo‘lsa ham, ataylab yoki xato bilan.",
        "Yeyish yoki ichish.",
        "Ko‘krakni qibladan burish.",
        "Ko‘rgan kishi namoz o‘qimayapti deb o‘ylaydigan darajadagi ko‘p harakat (amali kasir).",
        "Ovoz chiqarib kulish (bu balog‘atga yetganlar uchun tahoratni ham buzadi).",
        "Tahoratni buzadigan har qanday narsa.",
        "Ruku yoki sajda kabi biror farzni tark etish.",
      ] },
    ],
  },

  sahw: {
    title: "Sajdai sahv",
    summary: "Namozdagi xatoni tuzatish.",
    blocks: [
      { text: "Agar biror vojibni xato bilan tark etsang (masalan, birinchi qa’dani yoki birinchi ikki rakatda sura o‘qishni) yoki farz yoxud vojibni kechiktirsang, namozni ikki sahv sajdasi bilan tuzatasan." },
      { title: "Qanday qilinadi (hanafiy)", items: [
        "Oxirgi qa’dada tashahhudni o‘qi.",
        "O‘ng tomonga bitta salom ber.",
        "Sajda tasbehini aytib, ikki sajda qil.",
        "O‘tirib, tashahhud, salovot va duo o‘qi.",
        "Ikki tomonga salom ber.",
      ] },
      { text: "Farzni tark etishni sajdai sahv bilan tuzatib bo‘lmaydi; namozni qayta o‘qish kerak." },
    ],
  },

  places: {
    title: "Qayerda namoz o‘qiysan: har bir joyning savobi",
    summary: "Uyda yolg‘iz, oila bilan, masjidda, Qubo, Aqso, Madina va Haramda.",
    blocks: [
      { text: "Har bir to‘g‘ri o‘qilgan namoz qayerda o‘qilmasin qabul bo‘ladi: “Butun yer men uchun masjid qilindi” (Buxoriy 438). Lekin Alloh ba’zi joylar va namoz o‘qishning ba’zi usullariga ko‘proq savob berdi. Ularni bilish oddiy kunni namozlaringni ko‘paytirish imkoniyatiga aylantiradi." },
      { title: "Bir qarashda: bitta namoz nechaga teng…", items: [
        "Yolg‘iz: 1 namoz.",
        "Jamoat bilan (masjidda): 27 namoz, ya’ni yolg‘iz o‘qilgan 5 kundan ko‘proq namoz (Buxoriy 645).",
        "Madinadagi Qubo masjidida ikki rakat: bir umra savobi (Ibn Moja 1412).",
        "Masjidul Aqsoda: taxminan 250 dan 500 gacha namoz, ya’ni taxminan 2–3 oylik kundalik namoz (quyidagi izohga qarang).",
        "Madinadagi Payg‘ambar ﷺ masjidida: 1000 namoz, taxminan 200 kunlik (6,5 oylik) namoz (Buxoriy 1190).",
        "Makkadagi Masjidul Haromda: 100 000 namoz, taxminan 20 000 kunlik, ya’ni 55 yillik kundalik namoz (Ibn Moja 1406).",
      ] },
      { title: "Har shanba Quboga", scene: "Madina. Shahar tashqarisida Islomda qurilgan birinchi masjid, Qubo masjidi turardi.", story: [
        "Abdulloh ibn Umar rivoyat qiladi: Payg‘ambar ﷺ har shanba goh ulovda, goh piyoda Qubo masjidiga borib, u yerda ikki rakat namoz o‘qirdi.",
        "Ibn Umarning o‘zi ham undan keyin unga ergashib, shunday qilishda davom etgan.",
      ], lesson: "Payg‘ambar ﷺ savobi umraga teng bo‘lgan amalni haftalik odat qilgan. Muborak joylarga kichik, muntazam ziyoratlar uning Sunnatidandir.", check: {
        q: "Payg‘ambar ﷺ Qubo masjidiga qanchalik tez-tez borardi?",
        options: ["Umrida bir marta", "Har shanba", "Faqat Ramazonda", "Har juma"],
        why: "Ulovda yoki piyoda, har shanba.",
      } },
      { title: "1. Uyda yolg‘iz namoz o‘qish", items: [
        "Uyda yolg‘iz o‘qilgan farz namoz to‘g‘ri va savobli, ayniqsa kasallik, yomg‘ir yoki xavf kabi uzr bo‘lganda.",
        "Nafl namozlar uchun uy eng yaxshi joy: “Uylaringizda namoz o‘qinglar; kishining eng afzal namozi uyidagi namozidir, farz namozdan tashqari” (Buxoriy 731).",
        "“Uylaringizni qabrga aylantirmang” (Buxoriy 432). Sunnatlar va Qur’on o‘qiladigan uy nurga to‘ladi va shaytonni uzoqlashtiradi.",
        "Hanafiy mazhabida erkaklar uchun farzni jamoat bilan o‘qish vojibga yaqin sunnati muakkadadir. Uni uzrsiz odatiy tark etish qoralanadi.",
      ] },
      { title: "2. Uyda, oila yoki do‘stlar bilan jamoat bo‘lib", items: [
        "Jamoat imom va kamida bitta iqtido qiluvchidan iborat bo‘ladi. Uyda ayolingiz, farzandlaringiz yoki do‘stlaringiz bilan birga o‘qisangiz, jamoat fazilatini olasiz va oilangizga namozni o‘rgatasiz.",
        "Payg‘ambar ﷺ bir uyda ortida Anas va bir yetim, ularning ortida esa bir keksa ayol bilan namoz o‘qigan (Buxoriy 380).",
        "Masjiddagi jamoat to‘liqroq: unga har bir qadam, namozni kutish va Allohning uyini to‘ldirish savobi qo‘shiladi. Shuning uchun erkaklar sababsiz masjid o‘rniga uydagi jamoatni odat qilmasliklari kerak.",
        "Ayollar uchun uyda namoz o‘qish yaxshiroq (Abu Dovud 570) va ular to‘liq savob oladi. Ular baribir masjidga borishlari mumkin; “Allohning cho‘rilarini Allohning masjidlaridan to‘smang” (Buxoriy 900).",
      ] },
      { title: "3. Masjidda", items: [
        "Yolg‘iz o‘qilgan namozdan 27 barobar ko‘p savob (Buxoriy 645). Boshqa rivoyatda 25 (Buxoriy 646); olimlar qo‘shimcha darajalar piyoda borish va erta kelish kabi to‘liqroq odoblar bilan keladi, deb tushuntiradi.",
        "Jamoat qanchalik katta bo‘lsa, Allohga shunchalik sevimli: kishining ikki kishi bilan o‘qigan namozi bir kishi bilan o‘qiganidan pokroq, qanchalik ko‘p bo‘lsa, shunchalik sevimliroq (Abu Dovud 554).",
        "Namozni kutib o‘tirganingda namozda deb hisoblanasan va farishtalar: Allohim, uni mag‘firat qil, Allohim, unga rahm qil, deydi (Buxoriy 647).",
        "Kim ertalab yoki kechqurun masjidga borsa, Alloh unga har safar jannatda mehmondorchilik joyini tayyorlaydi (Buxoriy 662).",
      ] },
      { title: "Masjidga har bir qadam", measure: "1 qadam = 1 gunoh o‘chadi + 1 daraja ko‘tariladi" },
      { title: "Jamoat bilan namoz", measure: "Yolg‘iz o‘qilgan namoz savobidan 27 barobar" },
      { title: "Xufton va bomdod jamoat bilan", measure: "= butun tunni namozda o‘tkazish" },
      { title: "4. Qubo masjidi", items: [
        "Islomda qurilgan birinchi masjid, taqvo asosiga qurilgan (9:108). Payg‘ambar ﷺ har shanba ulovda yoki piyoda unga borardi (Buxoriy 1193).",
      ] },
      { title: "Qubo masjidida ikki rakat", measure: "= bir umra savobi" },
      { title: "5. Quddusdagi Masjidul Aqso", items: [
        "Birinchi qibla, Isro joyi (17:1) va safar qilishga arziydigan uchta masjiddan biri (Buxoriy 1189).",
        "Uning savobi haqidagi rivoyatlar turlicha. Abu Dardodan kelgan rivoyat (al-Bazzor, al-Bazzor hasan degan) 500 namoz deydi. Abu Zardan kelgan rivoyat (al-Hokim) Payg‘ambar ﷺ masjididagi bir namoz Aqsodagi to‘rt namozdan afzal, deydi, bu taxminan 250 ga ishora qiladi. 50 000 degan rivoyat (Ibn Moja) zaif.",
        "Aniq son qanday bo‘lmasin, u muborak yurt (17:1) va u yerda namoz o‘qish mo‘min izlashi mumkin bo‘lgan eng katta savoblardandir.",
      ] },
      { title: "6. Madinadagi Payg‘ambar ﷺ masjidi", items: [
        "“Mening mana shu masjidimdagi bir namoz boshqa joydagi ming namozdan afzal, Masjidul Haromdan tashqari” (Buxoriy 1190). U yerda bir kunda besh vaqtni o‘qisang, 5000 namoz savobini olasan: yolg‘iz o‘qilgan deyarli uch yillik namoz.",
        "“Uyim bilan minbarim orasi jannat bog‘laridan bir bog‘dir” (Buxoriy 1195). Bu Ravzadir.",
      ] },
      { title: "7. Makkadagi Masjidul Harom", items: [
        "“Masjidul Haromdagi bir namoz boshqa joydagi yuz ming namozdan afzal” (Ibn Moja 1406, Musnadi Ahmad).",
        "Tasavvur qil: u yerdagi bir namoz 100 000 namozga teng, bu taxminan 55 yil davomida kuniga besh mahal namoz o‘qish bilan barobar. U yerdagi besh vaqtlik bir kun 275 yillik namozga o‘xshaydi.",
        "U insonlar uchun qurilgan birinchi ibodat uyi (3:96) va sen o‘qigan har bir namozning qiblasidir.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Har bir namoz hisobga olinadi, lekin qanday va qayerda o‘qishing uni ko‘paytiradi.",
        "Sunnatlarni uyda, farzni jamoat bilan o‘qi va masjidga piyoda bor.",
        "Agar Alloh senga Haramayn yoki Aqsoni ziyorat qilishni nasib etsa, u yerdagi har bir namozni muhofaza qil.",
      ] },
    ],
  },

  janazah: {
    title: "Janoza namozi",
    summary: "Hanafiy mazhabida uni qanday bosqichma-bosqich o‘qish va uning ulug‘ savobi.",
    blocks: [
      { text: "Janoza namozi vafot etgan musulmon ustidan o‘qiladigan, Allohdan uni mag‘firat qilishini va unga rahm qilishini so‘raydigan namozdir. U farzi kifoya: agar jamiyatning bir qismi uni o‘qisa, farz hammadan soqit bo‘ladi; agar hech kim o‘qimasa, bilgan hamma gunohkor bo‘ladi. Bu tiriklar o‘lik uchun birgalikda qila oladigan oxirgi ish va eng savobli ishlardan biridir." },
      { title: "Namoz uchun bir qirot, dafn uchun ikki qirot", measure: "1 qirot = Uhud tog‘idek" },
      { title: "Sen uchun namoz o‘qigan qirq kishi", measure: "Ularning shafoati qabul qilinadi" },
      { title: "Uni nima farqli qiladi", items: [
        "U faqat tik turgan holda o‘qiladi: ruku, sajda va o‘tirish yo‘q.",
        "Unda to‘rt takbir bor. Hanafiy mazhabida ular qiyom bilan birga uning ruknlaridir.",
        "Imom ovoz chiqarib aytadigan takbir va salomdan tashqari, imom ham, iqtido qiluvchilar ham hamma narsani ichida o‘qiydi.",
        "Hanafiy mazhabida unda Fotiha qiroat sifatida o‘qilmaydi; o‘rniga sano, salovot va duo o‘qiladi.",
        "Har qanday namoz kabi tahorat, qiblaga yuzlanish va avratni yopish talab qilinadi.",
      ] },
      { title: "Masjidni tozalagan ayol", scene: "Madinada bir qora tanli ayol Payg‘ambar ﷺ masjidini supurib, tozalab yurardi. Bir kuni Payg‘ambar ﷺ uning yo‘qligini sezib qoldi.", story: [
        "U u haqida so‘radi va unga ayol kechasi vafot etganini aytishdi. Sahobalar uni bu ishi bilan bezovta qilishga arzimaydi deb o‘ylab, uni uyg‘otmasdan dafn qilishgan edi.",
        "U dedi: “Nega menga xabar bermadingiz? Uning qabrini ko‘rsatinglar.” Uni qabr oldiga olib borishdi va u o‘sha yerda uning ustidan janoza namozini o‘qidi.",
        "Keyin dedi: “Bu qabrlar o‘z egalari uchun zulmatga to‘la, Alloh ularni mening namozim bilan ular uchun nurlantiradi.”",
      ], lesson: "Janoza namozi uchun hech kim arzimas emas. Masjidni tozalagan ayolni Payg‘ambar ﷺ ning o‘zi ulug‘ladi.", check: {
        q: "Payg‘ambar ﷺ uning vafotini bilganda nima qildi?",
        options: ["Hech narsa", "Qabriga borib, uning ustidan namoz o‘qidi", "Maktub yubordi", "Faqat sadaqa berdi"],
        why: "U uni qabri ustida janoza namozi bilan ulug‘ladi.",
      } },
      { title: "Shartlari", items: [
        "Marhum musulmon, yuvilgan (yuvish imkonsiz bo‘lsa, tayammum qilingan) va namoz o‘qiyotganlarning oldiga qo‘yilgan bo‘lishi.",
        "Tananing hammasi yoki ko‘p qismi hozir bo‘lishi. Hanafiy mazhabida g‘oyibona janoza namozi o‘qilmaydi.",
        "Imom marhum erkak bo‘lsin, ayol bo‘lsin, uning ko‘kragi to‘g‘risida turadi.",
        "Saflarni toq, afzali uchta qilish mustahab (Abu Dovud 3166).",
      ] },
      { title: "Bosqichma-bosqich (hanafiy)", items: [
        "Niyat: qalbda Alloh uchun, shu marhumga duo sifatida, imomga iqtido qilib janoza namozini o‘qishni niyat qil.",
        "Birinchi takbir: boshqa namozlardagidek qo‘llarni quloqqa ko‘tarib, “Allohu akbar” de, keyin qo‘llarni kindik ostida bog‘la. Sanoni o‘qi.",
        "Ikkinchi takbir: qo‘llarni ko‘tarmasdan “Allohu akbar” de. Namozning oxirgi qa’dasidagidek Salovoti Ibrohimiyani o‘qi.",
        "Uchinchi takbir: qo‘llarni ko‘tarmasdan “Allohu akbar”. Marhum va barcha musulmonlar uchun duo qil.",
        "To‘rtinchi takbir: qo‘llarni ko‘tarmasdan “Allohu akbar”, keyin o‘ngga, so‘ng chapga salom ber. Hanafiy mazhabida to‘rtinchi takbirdan keyin hech narsa o‘qilmaydi.",
      ] },
      { label: "1-takbirdan keyin: sano", r: { en: "Allohim, Seni poklab, hamd aytaman. Isming muborak, ulug‘liging oliy, maqtoving ulug‘ va Sendan o‘zga iloh yo‘q." }, note: "Janoza namozida “va jalla sanouk” qo‘shiladi." },
      { label: "2-takbirdan keyin: Salovoti Ibrohimiya", r: { en: "Allohim, Ibrohimga va Ibrohimning oilasiga salovot yo‘llaganingdek, Muhammadga va Muhammadning oilasiga salovot yo‘lla; albatta Sen maqtovga loyiq, ulug‘sen. Allohim, Ibrohimga va Ibrohimning oilasiga baraka berganingdek, Muhammadga va Muhammadning oilasiga baraka ber; albatta Sen maqtovga loyiq, ulug‘sen." } },
      { label: "3-takbirdan keyin: kattalar uchun duo", r: { en: "Allohim, tirigimizni va o‘ligimizni, hozirimizni va g‘oyibimizni, kichigimizni va kattamizni, erkagimizni va ayolimizni mag‘firat qil. Allohim, bizdan kimni tirik qoldirsang, uni Islom ustida tirik qoldir, bizdan kimni vafot ettirsang, uni iymon bilan vafot ettir." }, note: "Agar uni hali bilmasang, marhum uchun har qanday samimiy duo joiz. Buni vaqt o‘tib o‘rganib ol." },
      { label: "3-takbirdan keyin: bola (o‘g‘il) uchun", r: { en: "Allohim, uni biz uchun oldindan boruvchi qil, uni biz uchun ajr va xazina qil va uni biz uchun shafoati qabul qilinadigan shafoatchi qil." }, note: "Qiz bola uchun -hu o‘rniga -ho deyiladi: ij’alho … shofi’atan va mushaffa’ah." },
      { title: "Agar kech qolsang", items: [
        "Agar imom bir yoki bir necha takbir aytib bo‘lgan bo‘lsa, uning keyingi takbirini kutib, u bilan qo‘shil.",
        "Imom salom bergach, jasad ko‘tarilishidan oldin qolib ketgan takbirlarni ketma-ket aytib, keyin salom ber.",
      ] },
      { title: "Saqlanish kerak bo‘lgan keng tarqalgan xatolar", items: [
        "Ruku yoki sajda qilish: janoza namozida ular yo‘q.",
        "Har bir takbirda qo‘llarni ko‘tarish: hanafiy mazhabida faqat birinchisida.",
        "Dafngacha kuzatib borib, ikkinchi qirotni olish mumkin bo‘la turib, namozdan keyin darhol ketib qolish.",
        "Janozani kuzatib borayotganda gapirish, kulish yoki telefondan foydalanish.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "To‘rt takbir, faqat qiyom, ichida o‘qish, ikki salom.",
        "Sano, salovot, marhum uchun duo, keyin salom.",
        "Namoz uchun bir tog‘ savob, dafngacha qolish uchun ikki tog‘.",
      ] },
      { label: "Ijtimoiy tarbiya", text: "Yuvish, kafanlash va janozani kuzatish haqida Ijtimoiy tarbiyada o‘qing." },
    ],
  },

  taziyah: {
    title: "Ta’ziya: musibat ahliga tasalli berish",
    summary: "Kimdir vafot etganda nima deyish, nima qilish va nimadan saqlanish kerak.",
    blocks: [
      { text: "Ta’ziya vafot etgan kishining oilasiga tasalli berish demakdir: ularga sabr qilishda yordam berish, Allohning savobini eslatish va marhum uchun duo qilish. Bu sunnat va musulmon jamiyati qayg‘usini birgalikda ko‘taradigan amallardan biridir." },
      { title: "Musibat ahliga tasalli berish", measure: "Karomat liboslari kiydiriladi" },
      { title: "Qachon va qanday", items: [
        "Ta’ziyani vafot vaqtidan boshlab, afzali uch kun ichida, barcha yaqin oila a’zolariga bildiring: erkaklar, ayollar va bolalarga (tegishli odob bilan).",
        "Uch kundan keyin makruh, safarda bo‘lgan yoki bilmagan kishidan tashqari.",
        "Ziyoratlarni qisqa va sokin qiling. Oila charchagan va qayg‘uda.",
        "Amalda yordam bering: ularga ovqat tayyorlang. Ja’far (r.a.) shahid bo‘lganda Payg‘ambar ﷺ dedi: Ja’farning oilasiga ovqat tayyorlanglar, chunki ularga ularni band qiladigan narsa keldi (Abu Dovud 3132).",
        "Marhum uchun duo qiling va uning nomidan sadaqa bering.",
      ] },
      { title: "“Ko‘z yosh to‘kadi, qalb mahzun bo‘ladi”", scene: "Madina. Payg‘ambar ﷺ ning go‘dak o‘g‘li Ibrohim uning qo‘llarida jon berayotgan edi.", story: [
        "Payg‘ambar ﷺ ning ko‘zlaridan yosh oqa boshladi. Abdurahmon ibn Avf hayron bo‘lib dedi: “Siz ham, ey Allohning Rasuli?”",
        "U dedi: “Ey Ibn Avf, bu rahmatdir.” Keyin ko‘z yoshlari yanada oqdi.",
        "U dedi: “Ko‘z yosh to‘kadi, qalb mahzun bo‘ladi, lekin biz faqat Robbimiz rozi bo‘ladigan narsani aytamiz. Ey Ibrohim, sening ayrilig‘ingdan g‘amginmiz.”",
      ], lesson: "Qayg‘u va ko‘z yoshlar zaiflik emas, rahmatdir. Man qilingani dod-voy solish va Allohga e’tiroz bildirishdir. Musibat ahliga qayg‘urishlariga imkon berib tasalli bering va ularga Alloh rozi bo‘ladigan narsani aytishda yordam bering.", check: {
        q: "Payg‘ambar ﷺ ko‘z yoshlarini nima deb atadi?",
        options: ["Zaiflik", "Rahmat", "Xato", "G‘azab"],
        why: "Ko‘z yoshlar rahmatdir; dod-voy solish man qilingan.",
      } },
      { label: "Payg‘ambar ﷺ farzand dog‘ini ko‘rgan qiziga aytgan so‘zlari", r: { en: "Alloh olgan narsa Unikidir, bergan narsa ham Unikidir va Uning huzurida har bir narsaning belgilangan muddati bor; bas, sabr qil va savobini umid qil." } },
      { label: "Hanafiy an’anasida keng tarqalgan ta’ziya so‘zi", r: { en: "Alloh savobingizni ulug‘ qilsin, tasallingizni go‘zal qilsin va marhumingizni mag‘firat qilsin." } },
      { label: "Musibat ahli aytadigan so‘z", r: { en: "Albatta biz Allohnikimiz va albatta Unga qaytuvchimiz. Allohim, musibatimda menga ajr ber va uning o‘rniga undan yaxshirog‘ini ber." } },
      { title: "Nimadan saqlanish kerak", items: [
        "Dod-voy solish, baqirish, kiyimni yirtish yoki yuzga urish: “Yuzlariga urgan, yoqasini yirtgan va johiliyat da’vosi bilan chaqirgan bizdan emas” (Buxoriy 1294).",
        "Ko‘z yosh va qayg‘u man qilinmagan: Payg‘ambar ﷺ o‘g‘li Ibrohimning vafotida yig‘lagan va ko‘z yosh to‘kadi, qalb mahzun bo‘ladi, lekin biz faqat Robbimiz rozi bo‘ladigan narsani aytamiz, degan (Buxoriy 1303).",
        "Qayg‘udagi oilani olomonni mehmon qilish va qimmat taomlar bilan qiynash. Sahobalar dafndan keyin oila uyida yig‘ilishni va ularning mehmonlarga ovqat pishirishini dod-voyning bir qismi deb hisoblashgan (Ibn Moja 1612); aksincha, boshqalar ularni to‘ydirishi kerak.",
        "Erdan boshqa har kim uchun uch kundan ortiq motam tutish; beva ayol eri uchun to‘rt oyu o‘n kun iddani o‘taydi (Buxoriy 1280).",
      ] },
      { label: "Qabrlarni ziyorat qilganda", r: { en: "Assalomu alaykum, ey bu maskanlar ahli, mo‘minlar va musulmonlar. Biz ham inshaalloh sizlarga qo‘shilamiz. Alloh biz va sizlar uchun ofiyat so‘rayman." } },
      { title: "Asosiy xulosalar", items: [
        "Uch kun ichida, qisqa, sabr va duo so‘zlari bilan ta’ziya bildir.",
        "Qayg‘udagi oilani to‘ydir; ularga seni to‘ydirishga majbur qilma.",
        "Ko‘z yosh rahmatdir; dod-voy solish man qilingan.",
      ] },
    ],
  },
};

export default T;
