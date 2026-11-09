import type { LessonTrMap } from "./lessons";

// Jamoat joylari odobi, 1-qism: masjid, bozor, maktab, ko‘cha (o‘zbekcha).

export const PUBLIC_UZ_1: LessonTrMap = {
  "masjid-manners": {
    title: "Masjidda",
    summary: "Allohning uyi: qanday kirish, o‘tirish, namoz o‘qish va o‘zini tutish, nimadan saqlanish va nega bu muhim.",
    blocks: [
      { text: "Masjid — Allohning uyi. Payg‘ambar ﷺ aytgan: “Allohga eng sevimli joylar masjidlardir” (Muslim 671). Masjidga kirganimizda biz eng Karim Zotning mehmonimiz, shuning uchun pokiza, xotirjam va odob bilan kelamiz va masjidni topgan holimizdan ham yaxshiroq qoldirib ketamiz." },
      { en: "Albatta, masjidlar Allohnikidir, bas, Alloh bilan birga hech kimga duo qilmanglar." },
      { title: "Masjidda", left: "Qiling", right: "Qilmang", rows: [
        ["Pokiza, toza kiyimda va xushbo‘y bo‘lib keling (7:31)", "Xom sarimsoq yoki piyoz yeb, yoki hidli paypoq bilan kelish (Buxoriy 855)"],
        ["O‘ng oyoq bilan kirib, kirish duosini o‘qing", "Namoz boshlangan bo‘lsa ham yugurib kirish (Buxoriy 636)"],
        ["O‘tirishdan oldin ikki rakat namoz o‘qing (Buxoriy 444)", "Namoz o‘qiyotgan kishining oldidan o‘tish (Buxoriy 510)"],
        ["Oldingi saflarni to‘ldiring va bo‘shliqlarni yoping", "Joy band qilish, itarish yoki odamlarning yelkasidan oshib o‘tish"],
        ["Kirishdan oldin telefoningizni ovozsiz rejimga qo‘ying", "Baland gaplashish, o‘yin o‘ynash yoki namoz paytida telefon titkilash"],
        ["Oyoq kiyimni javonga tartib bilan qo‘ying", "Oyoq kiyim, shisha yoki salfetkalarni sochib tashlash"],
        ["Biror narsangiz yo‘qolsa, sekin so‘rang", "Yo‘qolgan narsani masjid bo‘ylab baqirib qidirish (Muslim 568)"],
        ["Chap oyoq bilan chiqib, chiqish duosini o‘qing", "Tupurish, axlat tashlash yoki biror narsani buzish (Buxoriy 415)"],
      ] },
      { title: "Nega bu muhim", items: [
        "Har bir qadam savobli: masjidga yurishda har bir qadam bilan bir daraja ko‘tarilasiz va bir gunohingiz o‘chiriladi (Muslim 666).",
        "Yugurmasdan, xotirjam: “Iqomatni eshitsangiz, namozga xotirjamlik va viqor bilan yuringlar, shoshilmanglar” (Buxoriy 636).",
        "Namoz o‘qiyotgan kishi Alloh bilan gaplashmoqda. Oldidan o‘tgan kishi gunohini bilganida, o‘tishdan ko‘ra qirq kutib turishni afzal ko‘rardi (Buxoriy 510).",
        "Yomon hid farishtalarga ham, odamlarga ham ozor beradi (Buxoriy 855). Toza kiyim va xushbo‘ylik Allohning uyini ulug‘lashning bir qismi.",
        "Qalbi masjidlarga bog‘langan kishi Qiyomat kunida Alloh O‘z soyasida soyalantiradigan yetti kishidandir (Buxoriy 660).",
      ] },
      { title: "Masjiddagi bolalar", items: [
        "Bolalar xush kelibsiz: Payg‘ambar ﷺ bir marta nevarasi Umomani ko‘tarib namoz o‘qigan (Buxoriy 516).",
        "U go‘dakning yig‘isini eshitsa, onasiga rahm qilib, namozni qisqa qilardi (Buxoriy 707).",
        "Ota-onalar: yoningizda jim tura oladigan bolalarni olib keling, borishdan oldin ularga odobni o‘rgating va ular bilan birga o‘tiring.",
        "Katta bolalar o‘rnak bo‘ladi: saflar orasida yugurish, o‘yin va namoz paytida telefon yo‘q.",
      ] },
      { title: "Masjiddagi a’robiy", scene: "Madina. Masjid odobini hali bilmaydigan cho‘llik bir kishi Payg‘ambar ﷺ masjidiga kirdi.", story: [
        "U bir burchakka borib, yerga kichik hojat qila boshladi. Sahobalar o‘rinlaridan sakrab turib, unga to‘xtashini aytib baqirishdi.",
        "Payg‘ambar ﷺ: “Uni qo‘yinglar. Uni to‘xtatmanglar”, dedi. U ishini tugatgach, Payg‘ambar ﷺ bir chelak suv keltirib, o‘sha joyga quyishni buyurdi.",
        "Keyin u kishini chaqirib, yumshoqlik bilan tushuntirdi: “Bu masjidlar siydik yoki iflos narsalar uchun emas. Ular Allohni zikr qilish, namoz va Qur’on o‘qish uchundir.” Sahobalariga esa: “Sizlar osonlashtiruvchi qilib yuborilgansizlar, qiyinlashtiruvchi qilib emas”, dedi.",
      ], lesson: "Masjid katta hurmatga loyiq, biz bu hurmatni, ayniqsa bolalar va yangi kelganlarga, yumshoqlik bilan o‘rgatamiz.", check: {
        q: "Payg‘ambar ﷺ a’robiyning xatosini qanday tuzatdi?",
        options: ["Unga baqirdi", "Joyni yuvdirgach, yumshoqlik bilan", "Uni haydab chiqardi", "E’tibor bermadi"],
        why: "“Sizlar osonlashtiruvchi qilib yuborilgansizlar.”",
      } },
      { situation: "Kech qolib keldingiz, namoz allaqachon boshlangan. Saflar to‘la, oldinda kichik bo‘sh joy bor. Nima qilasiz?", options: [
        { text: "Rukuni o‘tkazib yubormaslik uchun yugurib, odamlar orasidan siqilib o‘taman.", feedback: "Payg‘ambar ﷺ xotirjam yurishni aytgan; yetganingizni o‘qing, o‘tkazib yuborganingizni to‘ldiring." },
        { text: "Xotirjam yurib, hech kimning oldidan o‘tmasdan eng yaqin safga qo‘shilaman va imom salom bergach, qolganini to‘ldiraman.", feedback: "Xotirjam, viqorli va hech kim bezovta bo‘lmadi." },
        { text: "Tashqarida kutib, keyin yolg‘iz o‘qiyman.", feedback: "Kech qolgan bo‘lsangiz ham jamoatga qo‘shilish ancha afzal." },
      ] },
      { think: [
        "Masjidga borishdan oldin telefonim, kiyimim va hidimni tekshiramanmi?",
        "Hech o‘ylamasdan namoz o‘qiyotgan kishining oldidan o‘tganmanmi?",
      ], home: [
        "Masjidga kirish va chiqish duolarini oila bo‘lib mashq qiling.",
        "Jumadan oldin bolalar “masjid sumkasi”ni tayyorlasin: toza paypoq, kichik atir (o‘g‘il bolalar uchun) va oyoq kiyim uchun xalta.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Masjidlar Allohga eng sevimli joylar: pokiza, xotirjam va odob bilan keling.",
        "O‘ng oyoq bilan kiring, ikki rakat o‘qing, namoz o‘qiyotgan kishining oldidan hech qachon o‘tmang.",
        "Masjid odobini Payg‘ambar ﷺ a’robiyga o‘rgatgandek yumshoqlik bilan o‘rgating.",
      ] },
    ],
    quiz: [
      { q: "Allohga eng sevimli joylar qaysilar?", options: ["Bozorlar", "Masjidlar", "Saroylar", "Bog‘lar"], why: "“Allohga eng sevimli joylar masjidlardir.”" },
      { q: "Masjidda o‘tirishdan oldin nima qilish kerak?", options: ["Telefonni tekshirish", "Ikki rakat namoz o‘qish", "Biror narsa yeyish", "Do‘st topish"], why: "Tahiyyatul masjid." },
      { q: "Iqomatni eshitganda namozga qanday yurish kerak?", options: ["Imkon qadar tez yugurib", "Xotirjamlik va viqor bilan", "Ataylab juda sekin", "Joy band qilish uchun baqirib"], why: "Shoshilmang; yetganingizni o‘qing, qolganini to‘ldiring." },
      { q: "Xom sarimsoq yoki piyoz yegan kishi…", options: ["…hidi ketguncha masjiddan uzoq tursin", "…birinchi safda o‘qisin", "…ko‘proq yesin", "…hech narsa qilmasin"], why: "Yomon hid farishtalar va odamlarga ozor beradi." },
      { q: "Masjidga qaysi oyoq bilan kiriladi?", options: ["Chap", "O‘ng", "Farqi yo‘q", "Ikki oyoqlab sakrab"], why: "Kirishda o‘ng, chiqishda chap." },
      { q: "Namoz o‘qiyotgan kishining oldidan o‘tishning nimasi yomon?", options: ["Hech narsasi", "Bu jiddiy gunoh; kutib turgan yaxshiroq", "Faqat Ramazonda yomon", "Tahoratni buzadi"], why: "U o‘tishdan ko‘ra qirq kutishni afzal ko‘rardi." },
      { q: "Payg‘ambar ﷺ masjidda hojat qilgan a’robiyni qanday tuzatdi?", options: ["G‘azab bilan", "Tugatishiga qo‘yib, joyni yuvdirdi va yumshoqlik bilan o‘rgatdi", "Uni jazoladi", "Masjidni yopdi"], why: "“Sizlar osonlashtiruvchi qilib yuborilgansizlar.”" },
      { q: "Namoz paytida go‘dak yig‘isini eshitganda Payg‘ambar ﷺ nima qilardi?", options: ["Namozni to‘xtatardi", "Namozni qisqa qilardi", "Uzaytirardi", "Onasini chiqarib yuborardi"], why: "Onasiga rahm qilib." },
      { q: "Masjidga qo‘yilgan har bir qadam nima qiladi?", options: ["Hech narsa", "Bir daraja ko‘taradi va bir gunohni o‘chiradi", "Faqat charchatadi", "Faqat jumada hisoblanadi"], why: "Har bir qadam savobli." },
      { q: "Qalbi masjidlarga bog‘langan kishi kim?", options: ["Qiyomat kunida Alloh soyalantiradigan yetti kishidan biri", "Faqat imom", "Faqat keksalar", "Alohida hech kim emas"], why: "Allohning soyasidagi yetti kishi qatorida." },
    ],
  },

  "bazaar-manners": {
    title: "Bozorda va do‘konlarda",
    summary: "Musulmoncha xarid: halollik, navbatda sabr, adolatli savdolashish va odamlar Allohni unutadigan joyda Uni eslash.",
    blocks: [
      { text: "Bozor — odamlar oldi-sotdi qiladigan, savdolashadigan va shoshiladigan joy. Payg‘ambar ﷺ bozorlarni Allohga eng yoqmaydigan joylar deb atagan (Muslim 671), chunki u yerda odamlar pulga osongina chalg‘ib, Uni unutishadi, yolg‘on, aldov va janjal ham u yerda ko‘p bo‘ladi. Musulmon bozorga yaxshi odobni olib kiradi va uni biroz yaxshiroq qiladi." },
      { en: "Sotib olayotganda, sotayotganda va haqqini talab qilayotganda bag‘rikeng bo‘lgan kishiga Alloh rahm qilsin." },
      { title: "Bozorda va do‘konlarda", left: "Qiling", right: "Qilmang", rows: [
        ["Sotuvchi bilan salom va tabassum bilan salomlashing", "Sotuvchiga baqirish, u bilan janjallashish yoki uni haqorat qilish"],
        ["Navbatingizni sabr bilan kuting", "Navbatsiz kirib olish"],
        ["Adolatli va odob bilan savdolashing, keyin rozi bo‘ling yoki yaxshilik bilan keting", "Boshqa xaridor kelishayotgan narsaga savdolashish (Buxoriy 2140)"],
        ["Tatib ko‘rish yoki ochishdan oldin so‘rang", "Rastadan so‘ramasdan uzum yoki yong‘oq yeyish; bu olib qo‘yishdir"],
        ["Mollarni ehtiyotkorlik bilan ushlang va joyiga tartib bilan qo‘ying", "Mollarni ezish, tushirib yuborish yoki aralashtirib tashlash"],
        ["Biror narsani sindirib qo‘ysangiz, sotuvchiga ayting va to‘lashni taklif qiling", "Zararni yashirish yoki indamay ketib qolish"],
        ["Qaytimni tekshiring va ortiqcha pulni qaytaring", "Xato bilan berilgan pulni olib qolish"],
        ["Bolalar: ota-onangizga yaqin turing, olomonda qo‘l ushlab yuring", "Adashib ketish, rastalar orasida yugurish yoki ko‘rgan hamma narsani so‘rab yalinish"],
      ] },
      { title: "Nega bu muhim", items: [
        "Bag‘rikeng savdo Allohning rahmatiga sabab bo‘ladi (Buxoriy 2076): arzimagan narsa uchun janjal yo‘q.",
        "Payg‘ambar ﷺ Tavrotda “qo‘pol emas, qattiqqo‘l emas va bozorlarda baqirmaydigan” deb vasf qilingan (Buxoriy 2125).",
        "Aldash xaridorga ham, sotuvchiga ham harom: “Kim aldasa, u bizdan emas” (Muslim 102). O‘lchovdan urib qoluvchilarga voy bo‘lsin (83:1–3).",
        "Yo‘l va bozorning haqlari bor: ko‘zni tiyish, ozorni ketkazish, salomga alik olish, yaxshilikka buyurib, yomonlikdan qaytarish (Buxoriy 2465).",
        "Unutiladigan joyda Allohni eslash juda savobli. Bozorga kirish duosi rivoyat qilingan (Termiziy 3428, ba’zi olimlar hasan degan).",
      ] },
      { title: "“Menga faqat bozorni ko‘rsat”", scene: "Madina, hijratdan keyin. Abdurrahmon ibn Avf Makkadan hech narsasiz kelgan edi; u butun molini ortda qoldirgan edi.", story: [
        "Payg‘ambar ﷺ uni ansorlardan Sa’d ibn Rabi’ bilan birodar qildi. Sa’d boy edi va dedi: “Molimning yarmini senga beraman va oila qurishingga yordam beraman.”",
        "Abdurrahmon dedi: “Alloh oilangga ham, molingga ham baraka bersin. Menga faqat bozorni ko‘rsat.”",
        "U Bani Qaynuqo’ bozoriga borib, ozgina sariyog‘ va pishloq bilan halol savdo qila boshladi. Har kuni astoydil mehnat qildi va tez orada uylanib, oila boqishga yetadigan narsaga ega bo‘ldi.",
        "U sahobalarning eng boylaridan biriga, va eng saxiylaridan biriga aylandi, Alloh yo‘lida ulkan miqdorlarni sadaqa qilishi bilan mashhur bo‘ldi.",
      ], lesson: "Iymonimiz va odobimizni o‘zimiz bilan olib borsak, bozor halol mehnat, izzat va saxovat joyi bo‘lishi mumkin.", check: {
        q: "Abdurrahmon ibn Avf birodarining molining yarmi o‘rniga nima so‘radi?",
        options: ["Uy", "Bozorni ko‘rsatishni", "Tuya", "Masjidda ish"],
        why: "U sovg‘a o‘rniga halol mehnatni tanladi.",
      } },
      { situation: "Bozorda sotuvchi sizga ortiqcha qaytim berib yubordi. Ukangiz shivirlaydi: “Olib qol, u sezmaydi!” Nima qilasiz?", options: [
        { text: "Olib qolaman; bu uning xatosi.", feedback: "Sizniki bo‘lmagan pul hech kim sezmagani uchun halol bo‘lib qolmaydi." },
        { text: "Ortiqcha pulni tabassum bilan qaytaraman va ukamga sababini tushuntiraman.", feedback: "Bozorda halollik va ukangizga ham saboq." },
        { text: "Ikkalamizga shirinlik olib beraman.", feedback: "Bu boshqa birovning pulini sarflash bo‘ladi." },
      ] },
      { think: [
        "Savdolashganda yoki uzun navbatda jahlim chiqadimi?",
        "Do‘konda biror narsani so‘ramasdan tatib ko‘rgan yoki olganmanmi?",
      ], home: [
        "Keyingi oilaviy xaridda har bir bolaga mashq qilish uchun bitta “bozor odobi” bering: salom berish, navbat kutish yoki qaytimni tekshirish.",
        "Uyga qaytishda gaplashing: kim birovning mehribon yoki sabrli bo‘lganini ko‘rdi?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Oldi-sotdida bag‘rikeng bo‘ling: Alloh bunday kishiga rahm qiladi.",
        "Navbat kuting, adolatli savdolashing, tatishdan oldin so‘rang va sizniki bo‘lmaganni qaytaring.",
        "Ko‘pchilik Allohni unutadigan bozorda Uni eslang.",
      ] },
    ],
    quiz: [
      { q: "Payg‘ambar ﷺ qaysi joylarni Allohga eng yoqmaydigan joylar dedi?", options: ["Masjidlarni", "Bozorlarni", "Uylarni", "Maktablarni"], why: "Bozorlar odamlarni Allohdan chalg‘itadi, u yerda yolg‘on va janjal ko‘p." },
      { q: "Oldi-sotdida ___ bo‘lgan kishiga Alloh rahm qiladi.", options: ["ayyor", "bag‘rikeng", "baland ovozli", "tezkor"], why: "Muomalada bag‘rikeng va saxiy." },
      { q: "Payg‘ambar ﷺ bozorlarda qanday vasf qilingan?", options: ["Baland ovozli", "Qo‘pol emas va baqirmaydigan", "Doim shoshadigan", "Qattiq savdolashadigan"], why: "Tavrotdagi vasfidan." },
      { q: "Rastadan so‘ramasdan uzum yeyish…", options: ["Mayli, bir-ikki dona-ku", "Ruxsatsiz narsa olish", "Sunnat", "Bolalarga mumkin"], why: "Avval so‘rang, aks holda bu olib qo‘yish bo‘ladi." },
      { q: "Sotuvchi ortiqcha qaytim bersa, nima qilish kerak?", options: ["Olib qolish", "Qaytarib berish", "Sadaqaga berish", "Unga biror narsa sotib olish"], why: "U sizniki emas." },
      { q: "Abdurrahmon ibn Avf nimani ko‘rsatishni so‘radi?", options: ["Masjidni", "Bozorni", "Quduqni", "Saroyni"], why: "U halol mehnatni tanladi." },
      { q: "Boshqa xaridor kelishayotgan narsaga savdolashish mumkinmi?", options: ["Ha", "Yo‘q", "Faqat ko‘proq to‘lasang", "Faqat juma kuni"], why: "Bu odamlar orasida adovat chiqaradi." },
      { q: "Qaysi sura o‘lchovdan urib qoluvchilarni ogohlantiradi?", options: ["Al-Mutoffifiyn (83)", "Al-Fotiha (1)", "Al-Ixlos (112)", "Al-Kavsar (108)"], why: "“Kam o‘lchovchilarga voy bo‘lsin.”" },
      { q: "Gavjum bozorda bola…", options: ["Oldinga yugurishi", "Ota-onasiga yaqin turishi", "Rastalar orasiga yashirinishi", "Topilish uchun baqirishi kerak"], why: "Xavfsizlik va odob." },
      { q: "Do‘konda bilmasdan biror narsani sindirib qo‘ysangiz…", options: ["Tezda ketib qolasiz", "Sotuvchiga aytib, to‘lashni taklif qilasiz", "Yashirasiz", "Aka-ukangizga ag‘darasiz"], why: "Halollik va mas’uliyat." },
    ],
  },

  "school-manners": {
    title: "Maktabda va ustoz bilan",
    summary: "Ilm olish ibodatdir: ustozlarni hurmat qilish, yaxshi sinfdosh bo‘lish, imtihonda halollik va hammaga mehribonlik.",
    blocks: [
      { text: "Maktabga borish shunchaki burch emas; to‘g‘ri niyat bilan u ibodatga aylanadi. Payg‘ambar ﷺ aytgan: “Kim ilm talab qilib bir yo‘lga yursa, Alloh unga jannatga yo‘lni oson qiladi” (Muslim 2699). Matematika, fanlar, tillar va Qur’on — agar ularni odamlarga foyda berish va Allohni rozi qilish uchun o‘rgansak, hammasi o‘sha yo‘lning bir qismi bo‘lishi mumkin." },
      { en: "Va ayt: Robbim, ilmimni ziyoda qil." },
      { title: "Maktabda", left: "Qiling", right: "Qilmang", rows: [
        ["Niyat qiling: Allohni rozi qilish va odamlarga yordam berish uchun o‘qiyman", "Faqat maqtanish yoki boshqalardan o‘zib ketish uchun o‘qish"],
        ["Ustozingiz bilan hurmat bilan salomlashing va u gapirganda tinglang", "Ustozning gapini bo‘lish, ko‘z aylantirish yoki uni mazax qilish"],
        ["Qo‘l ko‘tarib, odob bilan so‘rang", "Javoblarni baqirib aytish yoki sinfdoshlarning gapini bo‘lish"],
        ["Ishingizni o‘zingiz bajaring va testlarda halol bo‘ling", "Ko‘chirish, aldash yoki boshqalarga ko‘chirtirish (Muslim 102)"],
        ["Boshqalarga joy bering va yangi o‘quvchini davraga qo‘shing (58:11)", "Kimnidir chetga surish, talaffuzi yoki kiyimi ustidan kulish (49:11)"],
        ["Kitoblar, partalar va sinfxonani asrang", "Partalarga yozish, narsalarni sindirish yoki iflos qilib ketish"],
        ["Tazyiq ko‘rayotganni himoya qiling va ustozga ayting", "Unga qo‘shilish, videoga olish yoki shunchaki tomosha qilish"],
        ["Uy vazifasini vaqtida va narsalaringizni tayyor qiling", "Bahona qilish va boshqalarni ayblash"],
      ] },
      { title: "Nega bu muhim", items: [
        "Farishtalar ilm talabasining qilayotgan ishidan rozi bo‘lib, unga qanotlarini to‘shaydi (Abu Dovud 3641).",
        "Ustozlarni hurmat qilish dinimizdandir: “Kattalarimizni hurmat qilmagan, kichiklarimizga rahm qilmagan va olimimizning haqqini tanimagan kishi bizdan emas” (Musnad Ahmad 22755).",
        "Ko‘chirish yolg‘ondir: “Kim aldasa, u bizdan emas” (Muslim 102). Ko‘chirib olingan baho sizniki emas, o‘tkazib yuborilgan bilim esa keyin yetishmay qoladi.",
        "“Musulmon musulmonning birodaridir: unga zulm qilmaydi, uni tashlab qo‘ymaydi va uni kamsitmaydi” (Muslim 2564). Tazyiq bu uchalasini ham buzadi.",
        "Alloh iymon keltirganlar va ilm berilganlarni darajalarga ko‘taradi (58:11).",
      ] },
      { title: "Shogird Muso", scene: "Ikki dengiz qo‘shilgan joy. Allohga so‘zlashgan ulug‘ payg‘ambar Muso (a.s.) Allohning solih bandasi Xizrdan ilm o‘rganish uchun uzoq safarga chiqdi.", story: [
        "Musoga allaqachon Tavrot berilgan edi. Shunda ham Alloh unga o‘zida bo‘lmagan ilm egasi borligini aytganida, u holdan toyguncha uni izlab yo‘l bosdi.",
        "Xizrni topganida u “Menga o‘rgat!” demadi. Odob bilan so‘radi: “Senga o‘rgatilgan to‘g‘ri yo‘ldan menga ham o‘rgatishing uchun senga ergashsam maylimi?” (18:66).",
        "Xizr dedi: “Sen men bilan birga sabr qila olmaysan.” Muso javob berdi: “Inshaalloh, meni sabrli topasan va senga hech bir ishda osiylik qilmayman” (18:69).",
      ], lesson: "Hatto ulug‘ payg‘ambar ham ilm uchun safar qildi, ustozidan odob bilan so‘radi va sabr qilishga va’da berdi. Eng yaxshi shogirdlar kamtar va sabrli bo‘ladi.", check: {
        q: "Muso Xizrdan unga ta’lim berishni qanday so‘radi?",
        options: ["Talab qildi", "Odob bilan: “Senga ergashsam maylimi, menga o‘rgatsang?”", "Unga pul to‘ladi", "So‘ramadi"],
        why: "Kamtarlik — shogirdning birinchi saboqi.",
      } },
      { title: "Eshik oldidagi Ibn Abbos", scene: "Madina, Payg‘ambar ﷺ vafotidan keyin. Yosh Abdulloh ibn Abbos katta sahobalardan iloji boricha ko‘p hadis o‘rganishni istardi.", story: [
        "Biror sahoba bir hadisni bilishini eshitsa, uning uyiga borardi. Agar tushlik dam olish vaqti bo‘lsa, eshikni taqillatmasdi.",
        "U chakmonini ostonaga to‘shab, kutish uchun yotardi, shamol esa yuziga chang uchirardi.",
        "Sahoba chiqib uni ko‘rganida: “Ey Rasulullohning amakivachchasi! Nega odam yubormading, men o‘zim kelardim-ku?” dedi. Ibn Abbos: “Yo‘q, sizning oldingizga men kelishim kerak”, dedi. Va hadis haqida so‘radi (rivoyat qilinadi).",
      ], lesson: "Ibn Abbos ummatning eng buyuk olimlaridan biriga aylandi. Ustozlariga bo‘lgan hurmati bunga sabablardan biri edi.", check: {
        q: "Ibn Abbos nega eshikni taqillatmadi?",
        options: ["Uyalgani uchun", "Olimning dam olishini buzmaslik uchun", "Eshik qulflangan edi", "Unutib qo‘ydi"],
        why: "Ustozlarga hurmat.",
      } },
      { situation: "Test paytida eng yaqin do‘stingiz qog‘ozini sizga surib, shivirlaydi: “Meniki ko‘chir, tez!” Nima qilasiz?", options: [
        { text: "Faqat bitta javobni ko‘chiraman.", feedback: "Hatto bitta javob ham ko‘chirish, va u sizning bilimingiz emas." },
        { text: "Bosh chayqab, ko‘zimni o‘z qog‘ozimdan uzmayman, keyin do‘stimga sababini yumshoqlik bilan aytaman.", feedback: "Halol, do‘stingizga ham yordam berdingiz." },
        { text: "Butun sinf oldida do‘stimni baland ovozda fosh qilaman.", feedback: "Uni uyaltirmasdan halol bo‘ling; kerak bo‘lsa yolg‘izda gapiring yoki ustozga sekin ayting." },
      ] },
      { think: [
        "Maktabga borayotganda niyatim nima?",
        "Ko‘pincha chetda qoladigan sinfdoshim bormi?",
      ], home: [
        "Maktabdan oldin birga “Robbi zidniy ilmo” (Robbim, ilmimni ziyoda qil) deb ayting.",
        "Kechki ovqatda so‘rang: bugun kimgadir yordam beradigan nima o‘rganding?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Niyat to‘g‘ri bo‘lsa, ilm talab qilish jannatga yo‘ldir.",
        "Ustozlarni Muso va Ibn Abbosdek hurmat qiling; kamtar va sabrli bo‘ling.",
        "Testlarda halol bo‘ling, hammani davraga qo‘shing va tazyiqqa qarshi turing.",
      ] },
    ],
    quiz: [
      { q: "Kim ilm talab qilib yo‘lga yursa, Alloh unga … yo‘lni oson qiladi", options: ["Boylikka", "Jannatga", "Shuhratga", "Shaharga"], why: "Ilm jannat yo‘li." },
      { q: "Qaysi duo ilm ziyoda bo‘lishini so‘raydi?", options: ["“Robbi zidniy ilmo”", "“Bismillah”", "“Omin”", "“Subhanalloh”"], why: "Robbim, ilmimni ziyoda qil." },
      { q: "Ilm talabasiga kim qanotini to‘shaydi?", options: ["Qushlar", "Farishtalar", "Ustozlar", "Podshohlar"], why: "Qilayotgan ishidan rozi bo‘lib." },
      { q: "Muso Xizrdan unga ta’lim berishni qanday so‘radi?", options: ["Qo‘pollik bilan", "Odob bilan, unga ergashishga izn so‘rab", "Xat orqali", "So‘ramadi"], why: "Kamtar shogird." },
      { q: "Muso Xizrga nima va’da qildi?", options: ["Pul", "Inshaalloh sabr va itoat", "Uy", "Hech narsa"], why: "“Inshaalloh, meni sabrli topasan.”" },
      { q: "Ibn Abbos nega eshikni taqillatmasdan tashqarida kutdi?", options: ["Adashib qolgan edi", "Olimning dam olishini hurmat qilib", "Qo‘rqdi", "Yomg‘ir yog‘ayotgan edi"], why: "Ustozlarga hurmat." },
      { q: "Testda do‘stingizning javoblarini ko‘chirish…", options: ["Jamoaviy ish", "Aldash", "Bitta savol bo‘lsa mayli", "Sunnat"], why: "“Kim aldasa, u bizdan emas.”" },
      { q: "Qaysi oyat o‘tirganda boshqalarga joy berishni buyuradi?", options: ["58:11", "2:255", "1:1", "112:1"], why: "Joy bering, Alloh ham sizga kenglik beradi." },
      { q: "Musulmon birodarini ___ qilmaydi.", options: ["yordam", "kamsitish", "salomlashish", "o‘rgatish"], why: "Unga zulm qilmaydi, tashlab qo‘ymaydi va kamsitmaydi." },
      { q: "Sinfdoshingiz tazyiq ko‘rayotganini ko‘rsangiz…", options: ["Videoga olasiz", "Qo‘shilasiz", "Uni himoya qilib, ustozga aytasiz", "Ketib, unutasiz"], why: "Mazlumga yordam bering." },
    ],
  },

  "street-manners": {
    title: "Ko‘chalar, bog‘lar va transport",
    summary: "Yo‘lning haqlari: salomlashish, ko‘zni tiyish, ozorni ketkazish, joylarni toza tutish va o‘rindiqni bo‘shatib berish.",
    blocks: [
      { text: "Ko‘chalar, bog‘lar, avtobuslar va o‘yin maydonchalari hammaniki. Islomda xuddi odamlar kabi yo‘lning ham haqlari bor. Jamoat joylarida qanday yurishimiz, gapirishimiz, mashina qo‘yishimiz va axlat tashlashimiz odamlarga Islom qanday ekanini ko‘rsatadi." },
      { en: "Rahmonning bandalari yer yuzida yumshoqlik bilan yuradigan, johillar ularga gap qotsa, “salom” deydigan kishilardir." },
      { title: "Yo‘lning haqlari", items: [
        "Payg‘ambar ﷺ ko‘chada o‘tirganlarga yo‘lning haqqini berishni aytdi. Ular u nima ekanini so‘rashdi, u: “Ko‘zni tiyish, ozor bermaslik, salomga alik olish, yaxshilikka buyurish va yomonlikdan qaytarish”, dedi (Buxoriy 2465).",
        "Yo‘ldan ozor beradigan narsani olib tashlash iymonning bir shoxobchasidir (Muslim 35).",
        "Birodaringizga tabassum qilishingiz sadaqadir (Termiziy 1956).",
        "Kibrsiz yuring va ovozingizni pasaytiring (31:18–19).",
      ] },
      { title: "Tashqarida", left: "Qiling", right: "Qilmang", rows: [
        ["Odamlar bilan salom va tabassum bilan salomlashing", "Odamlarga tikilib qarash yoki ularni masxara qilish"],
        ["Yo‘lakdan shisha, tosh yoki axlatni olib tashlang", "Axlat tashlash, tupurish yoki saqich tashlab ketish (Muslim 269)"],
        ["O‘rindiqni keksalar, homilador ayollar va nogironlarga bo‘shating", "Bir nechta o‘rindiqni egallash yoki ularga oyoq qo‘yish"],
        ["Ovozingiz va musiqani past qiling", "Jamoat joyida baqirish, baland ovozda video qo‘yish yoki musiqani qattiq yoqish"],
        ["Arg‘imchoq va tepaliklarda navbat bilan uching", "Kichik bolalarni itarish yoki o‘yin maydonchasini egallab olish"],
        ["Daraxtlar, gullar va hayvonlarni asrang", "Shoxlarni sindirish, jamoat gullarini uzish yoki hayvonlarga ozor berish"],
        ["Ehtiyot bo‘lib o‘ting va yo‘l qoidalariga rioya qiling", "Yo‘lga yugurib chiqish, piyodalar yo‘lagini to‘sish yoki birovning yo‘liga mashina qo‘yish"],
        ["Qarash to‘g‘ri bo‘lmagan narsadan ko‘zingizni tiying (24:30–31)", "Begonalarni ruxsatsiz suratga olish"],
      ] },
      { title: "Tikanli shox va bir kishi", scene: "Payg‘ambar ﷺ sahobalariga yo‘lda ketayotgan bir kishi haqida aytib berdi.", story: [
        "U yo‘lga ko‘ndalang tushib yotgan tikanli shoxni ko‘rdi — odamlarning oyog‘ini tirnaydigan va kiyimiga ilinadigan shox.",
        "U o‘ziga dedi: “Hech kimga ozor bermasligi uchun buni yo‘ldan olib tashlayman.” Va uni olib tashladi.",
        "Payg‘ambar ﷺ dedi: “Alloh uning bu ishini qadrladi va uni mag‘firat qildi.” Boshqa rivoyatda: “Men uni odamlarga ozor beradigan daraxtni yo‘ldan kesib tashlagani sababli jannatda rohatlanib yurganini ko‘rdim.”",
      ], lesson: "Hech qachon uchratmaydigan begonalar uchun qilingan kichik bir ish sizni jannatga olib boradigan amal bo‘lishi mumkin.", check: {
        q: "Tikanli shoxni olib tashlagan kishiga Alloh nima qildi?",
        options: ["Hech narsa", "Ishini qadrlab, uni mag‘firat qildi", "Uni boy qildi", "Uni mashhur qildi"],
        why: "Kichik amal, katta mukofot.",
      } },
      { title: "Yo‘ldan ozorni ketkazish", measure: "Iymonning bir shoxobchasi", picture: "Yo‘lakdan tosh, shisha yoki shoxni olib tashlash iymonning bir qismidir (Muslim 35). Bir kishi tikanli shoxni odamlarning yo‘lidan olib tashlagani uchun mag‘firat qilinib, jannatga kirdi (Buxoriy 652)." },
      { situation: "Siz to‘la avtobusda o‘tiribsiz. Og‘ir sumkalar ko‘targan keksa bir ayol chiqdi, bo‘sh joy yo‘q. Nima qilasiz?", options: [
        { text: "Telefonimga qarab, uni ko‘rmaganga olaman.", feedback: "Kattalarni hurmat qilish dinimizdandir (Termiziy 1919)." },
        { text: "O‘rnimdan turib, tabassum bilan joyimni beraman va sumkalariga yordamlashaman.", feedback: "Kattaga hurmat va jamoat joyida mehribonlik: aynan musulmoncha yo‘l." },
        { text: "Avval boshqa birov turishini kutaman.", feedback: "Yaxshilikda birinchi bo‘ling." },
      ] },
      { think: [
        "O‘zimniki bo‘lmagan axlatni oxirgi marta qachon terganman?",
        "Tanishlarim ko‘rmayotganda avtobus va bog‘larda o‘zimni qanday tutaman?",
      ], home: [
        "Keyingi sayr yoki bog‘ga borganingizda xalta olib, birga axlat tering.",
        "Bu hafta yoningizdan o‘tgan odamlarga salom va tabassum ulashishni mashq qiling.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Yo‘lning haqlari bor: ko‘zni tiying, ozor bermang, salomga alik oling, yaxshilikka chorlang.",
        "Yo‘ldan ozorni ketkazish iymonning shoxobchasi va jannatga olib borishi mumkin.",
        "Joyingizni bo‘shatib bering, ovozingizni pasaytiring, maydonchani baham ko‘ring va hech qachon axlat tashlamang.",
      ] },
    ],
    quiz: [
      { q: "Quyidagilardan qaysi biri yo‘lning haqlaridan?", options: ["Yo‘l o‘rtasida o‘tirish", "Ko‘zni tiyish", "Baland musiqa qo‘yish", "Mashinada poyga qilish"], why: "Shuningdek, ozor bermaslik va salomga alik olish." },
      { q: "Yo‘ldan ozor beradigan narsani olib tashlash…", options: ["Vaqtni behuda o‘tkazish", "Iymonning bir shoxobchasi", "Faqat farroshning ishi", "Makruh"], why: "Iymonning bir qismi." },
      { q: "Yo‘ldan tikanli shoxni olib tashlagan kishiga nima bo‘ldi?", options: ["Jarohatlandi", "Alloh uning ishini qadrlab, uni mag‘firat qildi", "Hech narsa", "Jarima to‘ladi"], why: "U jannatga kirdi." },
      { q: "Birodaringizga tabassum qilish…", options: ["Sadaqa", "Ko‘z-ko‘z qilish", "Odobsizlik", "Bolalik"], why: "Har bir yaxshilik sadaqa." },
      { q: "Rahmonning bandalari qanday yuradi?", options: ["Kibr bilan", "Yumshoq va kamtar", "Yugurib", "Shovqin bilan"], why: "Ular yer yuzida yumshoqlik bilan yuradi." },
      { q: "To‘la avtobusda kimga joy berish kerak?", options: ["Hech kimga", "Keksalar, homilador ayollar va nogironlarga", "Faqat do‘stlarga", "Pul bergan kishiga"], why: "Kattalar va zaiflarga hurmat." },
      { q: "Luqmon o‘g‘liga nimasini pasaytirishni aytdi?", options: ["Boshini", "Ovozini", "Sumkasini", "Qo‘llarini"], why: "Eng yoqimsiz ovoz eshakning hangrashidir." },
      { q: "O‘yin maydonchasida nima qilish kerak?", options: ["Kichik bolalarni itarish", "Navbat bilan o‘ynash va baham ko‘rish", "Arg‘imchoqni kun bo‘yi egallash", "Jihozlarni sindirish"], why: "Jamoat joylari hammaniki." },
      { q: "Daraxt ekkan musulmon qachon savob oladi?", options: ["Uni sotganda", "Undan odamlar, qushlar yoki hayvonlar yeganda", "Hech qachon", "Faqat xurmo bo‘lsa"], why: "Bu sadaqa hisoblanadi." },
      { q: "Begonalarni ruxsatsiz suratga olish nimaga zid?", options: ["Ko‘zni tiyish va shaxsiy hayotni hurmat qilishga", "Hech narsaga", "Faqat maktab qoidalariga", "Modaga"], why: "Ko‘zni tiying (24:30–31)." },
    ],
  },
};
