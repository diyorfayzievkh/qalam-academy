import type { LessonTrMap } from "./lessons";

// Islom olami darslari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  "five-pillars": {
    title: "Islom va uning besh rukni",
    summary: "“Islom” nima degani va butun bino turgan besh rukn.",
    blocks: [
      { text: "Islom bo‘ysunish demakdir: o‘zini Allohga ixtiyoriy ravishda, muhabbat va ishonch bilan topshirish. U “salom”, ya’ni tinchlik so‘zi bilan bir o‘zakdan, chunki tinchlik shu bo‘ysunishdan keladi. Alloh aytadi: “Allohning huzuridagi din Islomdir” (3:19), U uni mukammal qildi va bizga din sifatida rozi bo‘ldi (5:3)." },
      { en: "Islom beshta narsa ustiga qurilgan: Allohdan o‘zga iloh yo‘q va Muhammad Allohning Rasuli ekaniga guvohlik berish, namozni to‘kis ado etish, zakot berish, Baytullohni haj qilish va Ramazon ro‘zasini tutish." },
      { text: "Payg‘ambar ﷺ Islomni binoga o‘xshatdi. Besh rukn uning ustunlaridir: birini olib tashlasang, bino zaiflashadi; birinchisini olib tashlasang, hech narsa turmaydi. Islomning qolgan qismi, uning axloqi, muomalalari va oilaviy hayoti ularning ustiga quriladi." },
      { title: "Besh rukn bir qarashda", left: "Rukn", right: "Kimga va qanchalik tez-tez", rows: [
        ["Shahodat", "Har bir musulmonga; ishonch bilan aytiladi, har kuni amalda yashaladi"],
        ["Namoz", "Har bir balog‘atga yetgan, aqli raso musulmonga; kuniga besh mahal"],
        ["Zakot", "Moli bir qamariy yil davomida nisobga yetganlarga; yiliga 2,5%"],
        ["Ro‘za", "Har bir balog‘atga yetgan, aqli raso, sog‘lom, muqim musulmonga; Ramazon oyi"],
        ["Haj", "Jismonan va moddiy jihatdan qodir bo‘lganlarga; umrida bir marta"],
      ] },
      { title: "Nega aynan shu beshta?", items: [
        "Ular insonning har bir qismini qamrab oladi: qalb va til (shahodat), tana (namoz), mol (zakot), nafs xohishlari (ro‘za) va tana, mol hamda qalbning birgalikdagi safari (haj).",
        "Ular har bir vaqt o‘lchovini qamraydi: kundalik namoz, yillik ro‘za va zakot, umrda bir marta haj.",
        "Ular shaxsni ummat bilan bog‘laydi: jamoat namozlari, kambag‘allarga berish, birga ro‘za tutish va Arafotda millionlarning yig‘ilishi.",
      ] },
      { situation: "Hamkasbing deydi: “Men yaxshi odamman; namoz o‘qish yoki ro‘za tutishga ehtiyojim yo‘q.” Qanday javob berasan?", options: [
        { text: "“To‘g‘ri, yaxshi odam bo‘lish kifoya.”", feedback: "Go‘zal xulq juda muhim, lekin Payg‘ambar ﷺ shu beshtasini Islomning asosi deb atagan." },
        { text: "“Go‘zal xulq Islomning bir qismi, ruknlar esa u qurilgan poydevor. Kuniga bitta namozdan birga boshlashni xohlaysanmi?”", feedback: "Yaxshi tomonini tasdiqla, muloyimlik bilan tushuntir va amaliy birinchi qadamni taklif qil." },
        { text: "“Unda sen musulmon emassan.”", feedback: "Qattiq tamg‘alar qalblarni yopadi; hikmat bilan da’vat qil." },
      ] },
      { think: [
        "Hayotimda qaysi rukn eng kuchli, qaysi biri eng zaif?",
        "Ruknlarni bitta bino sifatida yashaymanmi yoki alohida-alohida majburiyatlar sifatidami?",
      ], home: [
        "Besh ustunli uy chizing; har bir bola har bir ustunga bittadan ruknni yozsin.",
        "So‘rang: agar bitta ustun qulasa, uyga nima bo‘ladi?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Islom Allohga bo‘ysunish demak va bu tinchlik olib keladi.",
        "U Ibn Umar hadisida zikr qilingan besh rukn ustiga qurilgan.",
        "Ular qalb, tana, mol va nafsni birgalikda tarbiyalaydi.",
      ] },
    ],
  },

  shahadah: {
    title: "Shahodat",
    summary: "Uning ma’nosi, shartlari va u butun hayotni qanday shakllantirishi.",
    blocks: [
      { text: "Shahodat guvohlikdir: “Ashhadu an la ilaha illalloh, va ashhadu anna Muhammadan rasululloh”: Allohdan o‘zga iloh yo‘qligiga guvohlik beraman va Muhammad Allohning Rasuli ekaniga guvohlik beraman. Samimiy aytilsa, u insonni Islomga kiritadi. To‘liq yashalsa, uni jannatga olib boradi." },
      { en: "Allohdan o‘zga iloh yo‘qligiga guvohlik beraman va Muhammad Allohning Rasuli ekaniga guvohlik beraman." },
      { title: "Uning ikki qismi", left: "La ilaha illalloh", right: "Muhammadun rasululloh", rows: [
        ["Inkor va isbot: Allohdan boshqa hech bir iloh ibodatga loyiq emas", "Muhammad ﷺ Allohga qanday ibodat qilishni ko‘rsatgan rasuldir"],
        ["Kimga ibodat qilishimizni aytadi", "Qanday ibodat qilishimizni aytadi"],
        ["Qalbni boshqa narsaga egilishdan ozod qiladi", "Unga itoat qilish, unga ishonish, uni sevish va Sunnatiga ergashish demakdir (3:31)"],
      ] },
      { title: "Olimlar Qur’on va Sunnatdan chiqargan shartlar", items: [
        "Ilm: uning ma’nosini bilish (47:19).",
        "Yaqin: hech qanday shubha bo‘lmasligi.",
        "Qabul: u talab qiladigan hamma narsani kibrsiz qabul qilish.",
        "Inqiyod (bo‘ysunish): unga amal qilish.",
        "Sidq: munofiqlardan farqli o‘laroq, uni qalbdan chin aytish.",
        "Ixlos: uni faqat Alloh uchun aytish.",
        "Muhabbat: uni, uning ahlini va u chaqiradigan narsani sevish.",
      ] },
      { title: "To‘qson to‘qqiz daftardan og‘ir kelgan varaqcha", scene: "Payg‘ambar ﷺ Qiyomat kunida barcha maxluqot oldida turgan ummatidan bir kishini tasvirlab berdi.", story: [
        "Uning oldiga gunohlari yozilgan to‘qson to‘qqizta daftar yoyiladi, har biri ko‘z yetgan joygacha cho‘zilgan. Alloh so‘raydi: “Bulardan birortasini inkor qilasanmi? Yozuvchi farishtalarim senga zulm qildimi?” U aytadi: “Yo‘q, Robbim.”",
        "“Biror uzring yoki biror yaxshi amaling bormi?” Hayratda qolgan u aytadi: “Yo‘q, Robbim.”",
        "Alloh aytadi: “Bor, Bizning huzurimizda bitta yaxshi amaling bor va bugun senga zulm qilinmaydi.” Bir kichkina varaqcha chiqariladi, unda yozilgan: “Ashhadu an la ilaha illalloh va anna Muhammadan abduhu va rasuluh.”",
        "U aytadi: “Robbim, bu daftarlar oldida bu varaqcha nima bo‘libdi?” Daftarlar tarozining bir pallasiga, varaqcha esa ikkinchisiga qo‘yiladi. Daftarlar yuqoriga ko‘tarilib ketadi, varaqcha esa og‘ir keladi, chunki Allohning ismidan og‘irroq narsa yo‘q.",
      ], lesson: "Samimiy tavhid inson keltira oladigan eng og‘ir narsadir. Shahodatni hech qachon kam sanama va unga mahkam tursang, hech qachon umidsizlanma.", check: {
        q: "Gunohlarning to‘qson to‘qqiz daftaridan nima og‘ir keldi?",
        options: ["Bir tog‘ sadaqa", "Shahodat yozilgan varaqcha", "Uning namozlari", "Uning oilasi"],
        why: "Samimiy aytilgan Allohning ismidan og‘irroq narsa yo‘q.",
      } },
      { title: "So‘nggi so‘zlar", measure: "La ilaha illalloh → Jannat" },
      { situation: "Hamkasbing sekingina musulmon bo‘lmoqchi ekanini, lekin avval arab tilini va butun Qur’onni o‘rganishi kerak deb o‘ylashini aytadi. Nima deysan?", options: [
        { text: "“Ha, avval hammasini o‘rgan, keyin qaytib kel.”", feedback: "Kechiktirish uni boy berishga olib kelishi mumkin; hech kim ajali qachonligini bilmaydi." },
        { text: "“Shahodatni bugunoq samimiy ayta olasan; o‘rganish keyin asta-sekin bo‘ladi, biz senga yordam beramiz.”", feedback: "Islom guvohlik bilan boshlanadi; qolgani asta-sekin o‘rganiladi." },
        { text: "“Avval Makkaga borishing kerak.”", feedback: "Bunday shart yo‘q; har qayerda, Alloh huzurida aytish kifoya." },
      ] },
      { think: [
        "Namozlarimda shahodatni qalbim hozir holda aytamanmi?",
        "Hayotimdagi qaysi narsa “Allohdan o‘zga iloh yo‘q” degan gapimni chin dildan aytayotganimni ko‘rsatadi?",
      ], home: [
        "Bolalarga ikki qismni tushuntiring: kimga ibodat qilamiz va qanday ibodat qilamiz.",
        "Uni kunning birinchi va oxirgi so‘zlari qiling: uyg‘onganda va uxlashdan oldin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Shahodatning ikki qismi bor: kimga ibodat qilamiz va qanday.",
        "Uning shartlari bor: ilm, yaqin, qabul, ixlos va boshqalar.",
        "Samimiy aytilsa, u Mezondagi eng og‘ir narsadir.",
      ] },
    ],
  },

  "salah-pillar": {
    title: "Namoz",
    summary: "Besh vaqt namoz nega bunchalik muhim va u mo‘min uchun nima qiladi.",
    blocks: [
      { text: "Namoz ikkinchi rukn va Qiyomat kunida insondan birinchi so‘raladigan amaldir: agar u to‘g‘ri bo‘lsa, u najot topib, muvaffaq bo‘ladi (Termiziy 413). U Me’roj kechasi yetti osmon ustida Payg‘ambar ﷺ ga to‘g‘ridan-to‘g‘ri berilgan yagona rukndir." },
      { en: "Meni zikr qilish uchun namozni to‘kis ado et." },
      { title: "Elliktadan beshtagacha", items: [
        "Me’rojda Alloh kuniga ellik vaqt namozni farz qildi. Qaytishda Muso (a.s.) Payg‘ambar ﷺ ga qaytib borib, kamaytirishni so‘rashni maslahat berdi, bu qayta-qayta takrorlanib, nihoyat beshta qoldi.",
        "Alloh aytdi: ular beshta va ular ellikta: amalda beshta, savobda ellikta (Buxoriy 349).",
      ] },
      { title: "Eshigingdagi daryo", measure: "Kuniga besh marta yuvinish" },
      { title: "Namoz nima qiladi", items: [
        "U insonni fahsh va yomon ishlardan qaytaradi (29:45).",
        "U ajratuvchi chiziqdir: “Kishi bilan kufr o‘rtasida namozni tark qilish bor” (Muslim 82).",
        "Vaqtida o‘qilgan namoz Allohga eng sevimli amaldir (Buxoriy 527).",
        "U ruh uchun orom: Payg‘ambar ﷺ “Ey Bilol, u bilan bizni orom toptir” der edi (Abu Dovud 4985).",
        "U butun kunni Alloh atrofida tartibga soladi: tong, peshin, asr, shom va xufton.",
      ] },
      { title: "Shunchaki o‘qilgan namoz va to‘kis ado etilgan namoz", left: "Shunchaki o‘qish", right: "To‘kis ado etish (iqoma)", rows: [
        ["Oxirgi daqiqada shoshib o‘qiladi", "O‘z vaqtida, tayyorgarlik bilan o‘qiladi"],
        ["Butun namoz davomida xayol boshqa joyda", "Qalb hozir, ma’nolar tushunilgan"],
        ["Band bo‘lganda yoki safarda qoldiriladi", "Har qanday holatda, musofirlik yengilliklaridan foydalanib saqlanadi"],
        ["Xulq-atvorga ta’sir qilmaydi", "Seni yomon ishlardan qaytaradi (29:45)"],
      ] },
      { title: "Mustahkam namoz odatini qanday shakllantirasan", items: [
        "Yashaydigan joyingdagi vaqtlarni o‘rgan va bu ilovada azonni yoq.",
        "Tahoratni erta ol va vaqt kirishi bilan namoz o‘qi.",
        "Farzlar atrofidagi sunnat namozlarini, ayniqsa bomdoddan oldingi ikki rakatni o‘qi.",
        "O‘qiyotgan narsalaringning ma’nolarini har hafta oz-ozdan o‘rgan.",
        "Boshqalar bilan birga o‘qi: masjidda, uyda oila bilan, ishda hamkasblar bilan.",
      ] },
      { situation: "Ishdagi yig‘ilishing asr vaqtining oxirgi daqiqalarigacha cho‘zilib ketdi. Nima qilasan?", options: [
        { text: "Qoldiraman va keyin qazosini o‘qiyman.", feedback: "Uzrsiz namozni ataylab vaqtidan kechiktirish og‘ir gunohdir." },
        { text: "Odob bilan o‘n daqiqaga ruxsat so‘rab, namoz o‘qib, qaytib kelaman.", feedback: "Ko‘pchilik ish joylari xotirjam so‘ralsa, buni hurmat qiladi; vaqtida o‘qilgan namoz eng sevimli amaldir." },
        { text: "Yig‘ilishda o‘tirgan holda ichimda tezda o‘qib olaman.", feedback: "To‘g‘ri uzr bo‘lmasa, namoz qiyomi, rukusi va sajdasi bilan o‘qilishi shart." },
      ] },
      { think: [
        "Qaysi namozni eng ko‘p kechiktiraman va nega?",
        "Agar har bir namozga Alloh bilan uchrashuv deb qarasam, nima o‘zgarardi?",
      ], home: [
        "Oilaviy namoz jadvalini tuzing va besh vaqtning hammasi o‘qilgan har bir kunni nishonlang.",
        "Uyda kuniga kamida bitta namozni birgalikda o‘qing.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Namoz Qiyomat kunida birinchi so‘raladigan amaldir.",
        "Amalda beshta, savobda ellikta.",
        "Uni to‘kis ado etish vaqtida, qalb hozirligi bilan, har qanday holatda o‘qish demakdir.",
      ] },
      { label: "Namoz qo‘llanmasi", text: "Hanafiy namoz qo‘llanmasida har bir namozni bosqichma-bosqich o‘rgan." },
    ],
  },

  zakat: {
    title: "Zakot: molni poklash",
    summary: "Kim to‘laydi, qancha, kimga beriladi va nega u poklaydi.",
    blocks: [
      { text: "Zakot ham poklanish, ham o‘sish ma’nosini bildiradi. Bu moli nisobga yetgan har bir musulmon tomonidan har qamariy yilda Alloh nomini aytgan kishilarga beriladigan moldagi belgilangan ulushdir. “Ularning mollaridan sadaqa olgin, u bilan ularni poklaysan va o‘stirasan” (9:103). U beruvchini baxillikdan, molni poklaydi va kambag‘allarni ko‘taradi." },
      { title: "Zakot va sadaqa", left: "Zakot", right: "Sadaqa", rows: [
        ["Islomning farz rukni", "Ixtiyoriy, istalgan vaqtda"],
        ["Belgilangan miqdor: odatda 2,5%", "Har qanday miqdor, hatto tabassum"],
        ["Faqat 9:60 dagi sakkiz toifaga", "Har qanday muhtojga va har qanday yaxshi ishga"],
        ["Bir qamariy yil turgan nisobdan ortiq molga", "Har qanday moldan"],
      ] },
      { title: "Zakot qanday hisoblanadi (hanafiy mazhabi, qisqacha)", items: [
        "Nisobni tekshir: 87,48 g oltin yoki 612,36 g kumush. Naqd pul va aralash jamg‘armalar uchun hanafiy olimlari 612,36 g kumush qiymatini qo‘llaydi.",
        "Agar zakot olinadigan moling (naqd pul, jamg‘arma, oltin va kumush, savdo mollari) bir qamariy yil davomida nisob miqdorida yoki undan ortiq tursa, zakot vojib bo‘ladi.",
        "Hozir to‘lanishi kerak bo‘lgan qarzlarni ayir.",
        "Jamining 2,5 foizini, ya’ni qirqdan birini to‘la.",
        "Uni zakot niyati bilan sakkiz toifadan biriga yoki bir nechtasiga ber.",
        "Chorva, ekin, savdo mollari va murakkab holatlar bo‘yicha olimdan so‘ra.",
      ] },
      { title: "Zakot oladigan sakkiz toifa (9:60)", items: [
        "Faqirlar va miskinlar.",
        "Uni yig‘ish uchun ishlaydiganlar.",
        "Qalblarini Islomga moyil qilish kerak bo‘lganlar. (Hanafiy mazhabida bu ulush endi berilmaydi; sahobalar Umar davrida uni to‘xtatishga kelishgan.)",
        "Asirlar va qullarni ozod qilish.",
        "Qarzdorlar.",
        "Alloh yo‘lida.",
        "Yo‘lda qolgan musofir.",
        "Hanafiy mazhabida zakot ota-ona va bobo-buvilarga, farzand va nevaralarga, turmush o‘rtog‘iga, shuningdek Bani Hoshimga, nisobga ega boy kishiga yoki g‘ayridinga berilmaydi. Muhtoj aka-uka, opa-singil, amaki, tog‘a, amma va xolalar olishi mumkin, ularga berish esa afzalroq.",
      ] },
      { title: "Zakot va sadaqa nima qiladi", measure: "1 → 700, mol esa hech qachon kamaymaydi" },
      { title: "Uni bermaslik", items: [
        "Zakoti to‘lanmagan yig‘ib qo‘yilgan oltin va kumush do‘zaxda qizdirilib, egalarining peshonalari, yonlari va orqalariga bosiladi (9:34–35).",
        "Kimga mol berilsa-yu, uning zakotini to‘lamasa, Qiyomat kunida mol unga kal ilon bo‘lib keladi va “Men sening moling, men sening xazinang” deydi (Buxoriy 1403).",
      ] },
      { situation: "Amakivachchang qarzga botib ketgan. Bu oy zakot berishing kerak. Uni unga bera olasanmi?", options: [
        { text: "Yo‘q, zakot hech qachon qarindoshlarga berilmaydi.", feedback: "Hanafiy mazhabida ota-ona va bobo-buvilar, farzand va nevaralar hamda turmush o‘rtog‘i istisno qilinadi. Nisobga ega bo‘lmagan qarzdor amakivachcha haqli." },
        { text: "Ha; qarzdor amakivachcha haqli bo‘lganlardan, qarindoshga berish esa silai rahmni ham saqlaydi.", feedback: "Muhtoj qarindoshga sadaqa ikki barobar hisoblanadi: sadaqa va silai rahm (Termiziy 658)." },
        { text: "Istalgan kishiga beraman; toifalar muhim emas.", feedback: "Zakot Alloh nomini aytgan sakkiz toifaga berilishi shart." },
      ] },
      { think: [
        "Bu yil zakotimni ehtiyotkorlik va halollik bilan hisobladimmi?",
        "Zakotga soliq deb qarayapmanmi yoki poklanish debmi?",
      ], home: [
        "Har yili oila bo‘lib zakot sanasini tanlang va birgalikda hisoblang.",
        "Oila sadaqasining bir qismi qayerga berilishini bolalar tanlasin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Zakot bir qamariy yil turgan nisobdan ortiq molning 2,5 foizidir.",
        "U faqat 9:60 dagi sakkiz toifaga beriladi.",
        "U beruvchini va molni poklaydi va molni hech qachon kamaytirmaydi.",
      ] },
    ],
  },

  sawm: {
    title: "Ramazon ro‘zasi",
    summary: "Ro‘za nima, kim ro‘za tutishi kerak, uni nima ochadi va nega Alloh uni O‘ziniki deydi.",
    blocks: [
      { text: "Ro‘za haqiqiy tongdan (bomdod) quyosh botguncha niyat bilan, Alloh uchun yeyish, ichish va er-xotinlik munosabatidan tiyilishdir. Ramazon oyining ro‘zasini tutish to‘rtinchi rukndir. “Sizlardan oldingilarga farz qilinganidek, sizlarga ham ro‘za farz qilindi, shoyad taqvodor bo‘lsangiz” (2:183)." },
      { en: "Odam bolasining har bir amali o‘zi uchundir, ro‘zadan tashqari: u Men uchundir va uning mukofotini Men beraman." },
      { title: "O‘zingga xos eshik", measure: "Rayyon: faqat ro‘zadorlar uchun eshik" },
      { title: "Kim ro‘za tutishi kerak", items: [
        "Balog‘atga yetgan, aqli raso, sog‘lom va muqim har bir musulmon.",
        "Musofirlar va bemorlar ro‘zani ochib, keyin qazosini tutishlari mumkin (2:184).",
        "Hayz yoki nifos holidagi ayollar ro‘za tutmaydi va kunlarning qazosini keyin tutadi.",
        "Ro‘za tuta olmaydigan keksalar va surunkali bemorlar fidya beradi: har bir kun uchun bir miskinni to‘ydiradi.",
        "O‘ziga yoki bolasiga zarar yetishidan qo‘rqqan homilador va emizikli ayollar ro‘zani ochib, keyin qazosini tutishi mumkin (hanafiy).",
      ] },
      { title: "Ro‘zani ochadimi yoki yo‘qmi? (hanafiy mazhabi, qisqacha)", left: "Ochadi", right: "Ochmaydi", rows: [
        ["Ataylab yeyish, ichish yoki chekish (qazo va kafforat)", "Chin unutish bilan yeyish yoki ichish: “Seni Alloh yedirdi va ichirdi” (Buxoriy 1933)"],
        ["Og‘iz yoki burun orqali qabul qilingan dori", "Yutmasdan tish yuvish yoki misvok ishlatish"],
        ["Er-xotinlik munosabati (qazo va kafforat: ketma-ket 60 kun ro‘za, faqat ro‘za tuta olmasa 60 miskinni to‘ydirish)", "Yutmasdan dush qabul qilish yoki suzish"],
        ["Ataylab og‘iz to‘la qusish", "Beixtiyor qusish"],
        ["Ovqat sifatida yeyilmaydigan narsani, masalan, toshchani yutish (faqat qazo)", "Ko‘z tomchilari, hanafiy mazhabiga ko‘ra"],
      ] },
      { title: "Haqiqiy ro‘za", items: [
        "Kim yolg‘on so‘z va unga amal qilishni tark etmasa, Allohga uning taomi va ichimligini tark etishiga ehtiyoj yo‘q (Buxoriy 1903).",
        "Ro‘za qalqondir: kimdir seni haqorat qilsa, “Men ro‘zadorman”, de (Buxoriy 1894).",
        "Oshqozon bilan birga ko‘z, quloq va tilning ham ro‘zasini tut.",
      ] },
      { title: "Ro‘zani qanday yaxshi tutish kerak", items: [
        "Har kecha niyat qil (yoki hanafiy fiqhida Ramazon uchun zahvai kubrodan oldin: tong otishi bilan quyosh botishi o‘rtasidagi vaqt, soat 12 emas).",
        "Saharlik qil: unda baraka bor (Buxoriy 1923) va uni bomdodga yaqinroq kechiktir.",
        "Quyosh botishi bilan xurmo yoki suv bilan darhol iftor qil va duo qil. Ro‘zadorning duosi qaytarilmasligi rivoyat qilingan (Termiziy 3598, Termiziy hasan degan).",
        "Taroveh o‘qi, Qur’on o‘qi va oxirgi o‘n kechada Qadr kechasini izla.",
        "Boshqalarni to‘ydir: ro‘zadorni iftor qildirgan kishi uning savobicha savob oladi (Termiziy 807).",
      ] },
      { situation: "Ramazonda singling peshin paytida beixtiyor suv ichib qo‘ydi, keyin esladi. U yig‘lab yubordi. Unga nima deysan?", options: [
        { text: "“Ro‘zang ochildi; qazosini tutishing kerak.”", feedback: "Unday emas: chin unutish bilan yeyish yoki ichish ro‘zani ochmaydi." },
        { text: "“Ro‘zang joyida. Payg‘ambar ﷺ aytganlar: seni Alloh yedirdi va ichirdi. Hozir to‘xta va davom et.”", feedback: "Buxoriy 1933: unutib ichilgan bir qultum gunoh emas, Allohdan sovg‘adir." },
        { text: "“Farqi yo‘q; yana ich.”", feedback: "Eslashing bilan to‘xtashing va ro‘zani davom ettirishing kerak." },
      ] },
      { think: [
        "O‘tgan Ramazonda oshqozonim bilan birga tilim ham ro‘za tutdimi?",
        "Bu yil iftorga kimni to‘ydira olaman?",
      ], home: [
        "Bolalarga yarim kunlik ro‘zani sinab ko‘rishga imkon bering va harakatlarini nishonlang.",
        "Qo‘shni yoki yolg‘iz yashaydigan kishi uchun oilaviy iftor rejalashtiring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Ro‘za haqiqiy tongdan quyosh botguncha, niyat bilan, Alloh uchun tutiladi.",
        "Uning maqsadi taqvo, mukofoti esa Allohning O‘zidan.",
        "Til va ko‘zning ham ro‘zasini tut va boshqalarni to‘ydir.",
      ] },
      { label: "Ramazon sayohati", text: "Ramazon kunlaring, duolaring va maqsadlaringni kuzatib bor." },
    ],
  },

  hajj: {
    title: "Haj: umr bo‘yi safar",
    summary: "Kim borishi kerak, kunma-kun amallar va haji mabrurning mukofoti.",
    blocks: [
      { text: "Haj Zulhijja oyida Makkadagi Baytullohga ziyoratdir. U jismonan va moddiy jihatdan qodir bo‘lgan har bir balog‘atga yetgan musulmonga umrida bir marta farzdir (3:97). U Ibrohim, Hojar va Ismoilning, shuningdek, Payg‘ambar ﷺ ning vidolashuv hajidagi qadamlarini takrorlaydi, o‘shanda u: “Haj amallaringizni mendan olinglar” degan (Muslim 1297)." },
      { title: "Haji mabrur", measure: "Onadan tug‘ilgan kundagidek bo‘lib qaytish" },
      { title: "Haj kunlari, qisqacha", items: [
        "Ehrom: miqotda niyat va talbiya bilan muqaddas holatga kiriladi: “Labbaykallohumma labbayk…”. Erkaklar ikki oq tikilmagan mato kiyadi.",
        "8 Zulhijja: Minoga borib, u yerda namoz o‘qiladi.",
        "9-kun, Arafa kuni: peshindan quyosh botguncha Arafotda duo bilan turiladi. Bu hajning qalbidir: “Haj Arafotdir.” Keyin tunash uchun Muzdalifaga boriladi.",
        "10-kun, hayit: katta Jamraga tosh otiladi, qurbonlik qilinadi, soch olinadi yoki qisqartiriladi, keyin ifoza tavofi va sa’y uchun Makkaga boriladi.",
        "11–12 (yoki 13) kunlar: Minoda qolinadi va har kuni uchta Jamraga tosh otiladi.",
        "Makkadan ketishdan oldin: vidolashuv tavofi.",
      ] },
      { title: "Haj va umra", left: "Haj", right: "Umra", rows: [
        ["Rukn: qodir bo‘lganlarga bir marta farz", "Hanafiy mazhabida sunnati muakkada"],
        ["Faqat Zulhijjaning belgilangan kunlarida", "Yilning istalgan vaqtida"],
        ["Arafot, Muzdalifa, Mino va tosh otishni o‘z ichiga oladi", "Ehrom, tavof, sa’y va soch olish yoki qisqartirish"],
        ["Bir necha kun", "Bir necha soat"],
      ] },
      { title: "Ikki tepalik orasidagi Hojar", scene: "Suvsiz va odamsiz qaqragan vodiy: shahar bo‘lishidan oldingi Makka. Ibrohim (a.s.) Allohning amri bilan ayoli Hojar va go‘dak Ismoilni u yerda qoldirdi.", story: [
        "U ketayotganida Hojar uning ortidan bordi: “Ibrohim, bizni hech kim va hech narsa yo‘q bu vodiyda qoldirasanmi?” U javob bermadi. Hojar so‘radi: “Buni senga Alloh buyurdimi?” U ha, dedi. Hojar dedi: “Unda U bizni tashlab qo‘ymaydi.”",
        "Suv tugab, go‘dak chanqoqdan yig‘laganda, u biror kishini izlab Safo tepaligiga chiqdi, keyin Marvaga yugurdi, yetti marta u yoqdan bu yoqqa.",
        "Keyin u bir ovoz eshitdi: farishta yerni urdi va suv otilib chiqdi, Zamzam. U kaftlari bilan suvni to‘plab, atrofini o‘rab qo‘ydi.",
        "Payg‘ambar ﷺ aytdi: “Shuning uchun odamlar ularning orasida yurishadi”, ya’ni har bir hojining sa’yi.",
      ], lesson: "Har bir hoji Allohga to‘liq tavakkul qilgan va shunga qaramay bor kuchi bilan yugurgan onaning izidan yuradi. Tavakkul shu: ishonch va harakat birgalikda.", check: {
        q: "Bu Allohning amri ekanini bilgach, Hojar nima dedi?",
        options: ["“Biz bu yerda o‘lamiz”", "“Unda U bizni tashlab qo‘ymaydi”", "“Bizni qaytarib olib ket”", "Hech narsa"],
        why: "To‘liq tavakkul, ortidan to‘liq harakat.",
      } },
      { situation: "Jamg‘armang va sog‘lig‘ing bor, lekin kattaroq bo‘lib, “tayyor” bo‘lguncha kutmoqchisan. Islom nima deydi?", options: [
        { text: "Kutaman; haj keksalik uchun.", feedback: "Sog‘liq va mol doimiy bo‘lmasligi mumkin; Payg‘ambar ﷺ hajga shoshilishga undagan (Abu Dovud 1732)." },
        { text: "Qodir bo‘lishing bilan bor; nima bo‘lishini bilmaysan, tayyorgarlikni esa hozirdan boshlash mumkin.", feedback: "Haj qodir bo‘lganingda farz bo‘ladi; uzrsiz kechiktirish uni boy berish xavfini tug‘diradi." },
        { text: "Boshqa birovga pul yuborib, mening o‘rnimga bormoqchiman.", feedback: "Faqat doimiy qodir bo‘lmagan kishi uchungina boshqa birov uning nomidan haj qilishi mumkin." },
      ] },
      { think: [
        "Agar ertaga Arafotda tura olsam, Allohdan nima so‘ragan bo‘lardim?",
        "Bu yil qanday “haj jamg‘armasi” rejasini boshlashim mumkin?",
      ], home: [
        "Arafa kuni haj amallarini birgalikda tomosha qiling va hajda bo‘lmasangiz, o‘sha kuni ro‘za tuting: u ikki yilning gunohlariga kafforatdir (Muslim 1162).",
        "Bolalarga Hojar va Zamzam hikoyasini aytib bering.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Haj qodir bo‘lgan har bir musulmonga bir marta farz.",
        "Arafot uning qalbidir; qabul bo‘lgan hajning mukofoti jannatdir.",
        "Uning amallari Ibrohim oilasining tavakkuli va harakatini takrorlaydi.",
      ] },
    ],
  },
};

export default T;
