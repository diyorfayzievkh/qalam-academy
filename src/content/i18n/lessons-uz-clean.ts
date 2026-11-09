import type { LessonTrMap } from "./lessons";

// Poklik olami darslari va testlari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  "why-clean": {
    title: "Poklik iymonning yarmi",
    summary: "Nega Alloh pok yuruvchilarni sevadi va pokiza musulmonni qanday mukofotlar kutadi.",
    blocks: [
      { text: "Islom pokiza dindir. Musulmon namoz o‘qishidan oldin tanasi, kiyimi va namoz o‘qiydigan joyi pok bo‘lishi kerak. Deyarli har bir ishimizdan oldin avval yuvinamiz. Payg‘ambar ﷺ aytgan: “Poklik iymonning yarmidir” (Muslim 223). Kichik qo‘shimcha emas, butun yarmi!" },
      { en: "Albatta, Alloh tavba qiluvchilarni sevadi va pok bo‘luvchilarni sevadi." },
      { title: "Islom poklik haqida nimani o‘rgatadi", items: [
        "Alloh pokiza odamlarni sevadi. U Qubo ahlini maqtagan: “Unda poklanishni yaxshi ko‘radigan kishilar bor, Alloh esa pok bo‘luvchilarni sevadi” (9:108).",
        "Payg‘ambar ﷺ ga berilgan eng birinchi buyruqlardan biri: “Kiyimlaringni pokla” (74:4).",
        "“Alloh go‘zaldir va go‘zallikni sevadi” (Muslim 91). Pokiza, ozoda musulmon Alloh sevadigan go‘zallikka ega.",
        "Alloh uchun qilsak, poklik ibodatga aylanadi: namoz uchun tahorat, tish yuvish, masjid va yo‘lni tozalash.",
      ] },
      { title: "Poklikning ikki turi", left: "Tashqi poklik", right: "Ichki poklik", rows: [
        ["Yuvilgan tana, tozalangan tishlar, toza kiyim", "Hasad, kibr va adovatdan pok qalb"],
        ["Suv va sovun", "Tavba, zikr va yaxshi niyat"],
        ["Tartibli xona va uy", "Yaxshi so‘z va pok til"],
        ["Islom ikkalasini ham talab qiladi", "Biri ikkinchisiga yordam beradi"],
      ] },
      { title: "Tahorat gunohlarni yuvadi", measure: "Gunohlar oxirgi suv tomchisi bilan ketadi", picture: "Mo‘min tahoratda yuzini yuvganda, ko‘zlari qaragan har bir gunoh suv bilan ketadi, keyin qo‘llari, keyin oyoqlari bilan, oxiri u gunohlardan pok bo‘lib chiqadi." },
      { title: "Qiyomat kunida nurlanib", measure: "Yorug‘ yuzlar, qo‘llar va oyoqlar", picture: "Payg‘ambar ﷺ aytganki, uning ummati Qiyomat kunida tahorat izlaridan yuzlari, qo‘llari va oyoqlari nurlangan holda chaqiriladi. U bizni shundan taniydi." },
      { title: "Masjidni supurgan ayol", scene: "Madina. Bir ayol har kuni jimgina Payg‘ambar ﷺ masjidini supurib, tozalab yurardi.", story: [
        "Unga hech kim unchalik e’tibor bermasdi. U mo‘minlar toza joyda namoz o‘qishlari uchun changni, barglarni va mayda axlatlarni terib olardi.",
        "Bir kuni Payg‘ambar ﷺ uning yo‘qligini sezib, u haqida so‘radi. Sahobalar u vafot etganini va uni kechasi dafn qilishganini aytishdi.",
        "U dedi: “Nega menga xabar bermadingiz? Uning qabrini ko‘rsatinglar.” U qabr oldiga borib, o‘sha yerda uning uchun namoz o‘qidi.",
      ], lesson: "Tozalash kichik ish emas. Allohning uyini toza tutgan kishini Payg‘ambar ﷺ ning o‘zi ulug‘ladi.", check: {
        q: "Masjidni tozalagan ayol vafot etganini eshitganda Payg‘ambar ﷺ nima qildi?",
        options: ["Hech narsa", "Qabriga borib, u uchun namoz o‘qidi", "Maktub yubordi", "Tozalash uchun boshqa odam tanladi"],
        why: "U masjidni toza tutgani uchun uni ulug‘ladi.",
      } },
      { situation: "Do‘sting deydi: “Pokiza bo‘lish faqat chiroyli ko‘rinish uchun. Uning dinga aloqasi yo‘q.” Nima deysan?", options: [
        { text: "“To‘g‘ri, bu faqat tashqi ko‘rinish uchun.”", feedback: "Islomda poklik iymonning yarmi va namozning sharti." },
        { text: "“Payg‘ambar ﷺ poklik iymonning yarmi degan, Alloh pok yuruvchilarni sevadi. Alloh uchun qilsam, bu hatto ibodat bo‘ladi.”", feedback: "Alloh uchun poklan, shunda u savobli ibodatga aylanadi." },
        { text: "“Faqat kattalar pokiza bo‘lishi kerak.”", feedback: "Bolalar bu odatni hozir o‘rgansa, u bir umr ular bilan qoladi." },
      ] },
      { think: [
        "Poklikning qaysi qismi menga eng oson, qaysi biri eng qiyin?",
        "Tish yuvish yoki xonamni yig‘ishtirishni hech ibodat deb o‘ylaganmanmi?",
      ], home: [
        "Har kimdan so‘rang: qaysi pokizalik odatingiz bilan faxrlanasiz?",
        "Tozalashdan oldin aytiladigan bitta oilaviy niyat tanlang: “Men buni Alloh uchun qilyapman.”",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Poklik iymonning yarmi (Muslim 223).",
        "Alloh pok bo‘luvchilarni sevadi va U go‘zallikni sevadi.",
        "Pok tana, kiyim, xona va qalb Allohni rozi qiladi.",
      ] },
    ],
    quiz: [
      { q: "Payg‘ambar ﷺ poklik … dedi", options: ["kichik qo‘shimcha", "iymonning yarmi", "faqat kattalar uchun", "faqat juma uchun"], why: "“Poklik iymonning yarmidir.”" },
      { q: "2:222 oyatiga ko‘ra Alloh kimni sevadi?", options: ["Boylarni", "Tavba qiluvchilar va pok bo‘luvchilarni", "Mashhurlarni", "Kuchlilarni"], why: "U tavba qiluvchilarni va pok bo‘luvchilarni sevadi." },
      { q: "“Alloh go‘zaldir va … sevadi”", options: ["Oltinni", "Go‘zallikni", "Shovqinni", "Uyquni"], why: "Alloh go‘zal va go‘zallikni sevadi." },
      { q: "Qaysi ilk buyruq Payg‘ambar ﷺ ga biror narsani poklashni buyurgan?", options: ["“Kiyimlaringni pokla”", "“Uy qur”", "“Uzoqqa safar qil”", "“Xurmo ye”"], why: "U payg‘ambarligining boshida nozil bo‘lgan." },
      { q: "Mo‘min tahorat olganda suv bilan nima ketadi?", options: ["Hech narsa", "Uning gunohlari", "Uning puli", "Uning xotirasi"], why: "Gunohlar suv bilan ketadi va u gunohlardan pok bo‘ladi." },
      { q: "Payg‘ambar ﷺ Qiyomat kunida ummatini qanday taniydi?", options: ["Kiyimlaridan", "Tahoratdan nurlangan yuz, qo‘l va oyoqlaridan", "Ismlaridan", "Bo‘ylaridan"], why: "Tahoratning yorug‘ izlari." },
      { q: "Alloh qaysi odamlarni poklanishni yaxshi ko‘rgani uchun maqtagan?", options: ["Qubo ahlini", "Od qavmini", "Fir’avn qavmini", "Hech kimni"], why: "“Unda poklanishni yaxshi ko‘radigan kishilar bor.”" },
      { q: "Payg‘ambar ﷺ masjidni tozalagan ayol uchun nima qildi?", options: ["Uni unutdi", "Qabri oldida u uchun namoz o‘qidi", "Faqat sahobalarni koyidi", "Hech narsa"], why: "U uning xizmatini ulug‘ladi." },
      { q: "Yo‘ldan ozor beruvchi narsani olib tashlash…", options: ["Vaqtni behuda sarflash", "Iymonning bir shoxi", "Faqat farroshning ishi", "Makruh"], why: "Iymonning eng quyi shoxi yo‘ldan ozor beruvchi narsani olib tashlashdir." },
      { q: "Tozalash qachon ibodatga aylanadi?", options: ["Hech qachon", "Uni Alloh uchun qilganimizda", "Faqat Ramazonda", "Faqat masjidda"], why: "Yaxshi niyat kundalik odatlarni savobga aylantiradi." },
    ],
  },

  "my-body": {
    title: "Tanamni toza tutish",
    summary: "Qo‘l yuvish, cho‘milish va g‘usl, hojatxona odobi, tirnoq va soch: qanchalik tez-tez va nega.",
    blocks: [
      { text: "Tanamiz Allohning ne’mati va omonatidir. Uni toza tutish Unga shukr qilishning bir qismi. Payg‘ambar ﷺ butun tana uchun aniq odatlarni o‘rgatgan: qo‘llar, yuz, soch, tirnoqlar va butun tanani cho‘miltirish." },
      { title: "Qanchalik tez-tez? Oddiy qo‘llanma", items: [
        "Qo‘llar: uyg‘onganda, hojatxonadan keyin, ovqatdan oldin va keyin hamda uyga kelganda sovun bilan yuv. Payg‘ambar ﷺ uyg‘onganda qo‘lni suv idishiga solishdan oldin yuvishni buyurgan (Buxoriy 162).",
        "Tahorat: har bir namozdan oldin, agar u buzilgan bo‘lsa. U kuniga bir necha marta yuz, og‘iz, burun, qo‘llar, bosh va oyoqlarni yuvadi.",
        "Butun tanani cho‘miltirish yoki dush: Islom har bir musulmondan kamida yetti kunda bir marta boshini va tanasini yuvishni talab qiladi (Buxoriy 897, Muslim 849). Juma kuni g‘usl qilish hanafiy mazhabida ta’kidlangan sunnat (Buxoriy 879).",
        "Salomatlik qo‘llanmasi (hadis emas, umumiy ma’lumot): ko‘pchilik bolalar uchun har kuni yoki kunora cho‘milish yetarli; o‘smirlik yoshidan boshlab, shuningdek sport va terlashdan keyin har kuni dush qabul qilish eng yaxshisi.",
        "Balog‘atga yetgach, ba’zi holatlarda o‘smirlarga g‘usl farz bo‘ladi. Ota-onalar buni o‘z vaqtida alohida tushuntirib berishlari mumkin.",
      ] },
      { title: "Qanday yaxshi cho‘milish kerak (va sunnat bo‘yicha g‘usl)", items: [
        "Niyat qil va yuvinish joyiga kirishdan oldin “Bismillah” de.",
        "Qo‘llaringni yuv, keyin avrat joylaridagi har qanday iflosni yuv.",
        "Tahorat ol.",
        "Boshingga uch marta suv quy, suv soch tagigacha yetishi uchun sochni ishqala.",
        "Tananing o‘ng tomonini, keyin chap tomonini yuv, birorta quruq joy qolmasin. Og‘iz va burunni ham chay (hanafiy g‘uslida farz).",
        "Sovun ishlat, yaxshilab chay, artin va toza kiyim kiy.",
        "Suvni isrof qilma: Payg‘ambar ﷺ taxminan uch litr suv bilan g‘usl, taxminan bir litr bilan tahorat qilgan (Buxoriy 201).",
      ] },
      { title: "Hojatxona odobi (istinjo)", items: [
        "Chap oyoq bilan kir va duo o‘qi: “Allohumma inniy a’uzu bika minal xubusi val xabois” (Buxoriy 142).",
        "O‘tir va tanangga yoki kiyimingga siydik tomchilari sachramasligiga ehtiyot bo‘l. Payg‘ambar ﷺ siydikdan ehtiyot bo‘lmaslik qabr azobiga sabab bo‘lishidan ogohlantirgan (Buxoriy 216).",
        "Chap qo‘l bilan suv yordamida tozalan, keyin qo‘llaringni sovun bilan yuv.",
        "O‘ng oyoq bilan chiq va “G‘ufronak” (mag‘firatingni so‘rayman) de (Abu Dovud 30).",
        "Hojatxonani keyingi kishi uchun toza qoldir: suvni tort, art va obdastani joyiga qo‘y.",
      ] },
      { title: "Tirnoqlar, soch va hid", items: [
        "Besh fitrat sunnatiga tirnoq olish va qo‘ltiq tukini olib tashlash kiradi (Buxoriy 5889). Ularni qirq kundan ortiq qoldirma (Muslim 258); har hafta, masalan, juma kuni qilish yaxshi odat.",
        "Uzun, kir tirnoqlar mikrob va ovqat qoldiqlarini yig‘adi. O‘g‘il bolalar ham, qizlar ham ularni qisqa va toza tutsin.",
        "“Kimning sochi bo‘lsa, unga qarasin” (Abu Dovud 4163): uni yuv, tara, ozoda tut.",
        "Boshqalar o‘zini qulay his qilishi uchun dezodorant yoki yoqimli hid ishlat. Masjidga xom sarimsoq yoki piyoz hidi bilan kelma (Muslim 564).",
      ] },
      { title: "Juma g‘usli", measure: "Keyingi jumagacha gunohlar kechiriladi", picture: "Kim juma kuni yuvinsa, imkoni boricha poklansa, moy yoki xushbo‘y surtsa, namozga borib, xutbani tinglasa, o‘sha juma bilan keyingi juma orasidagi gunohlari kechiriladi." },
      { title: "Uning sochini taraydigan narsasi yo‘qmi?", scene: "Payg‘ambar ﷺ ning oldiga bir mehmon keldi.", story: [
        "Jobir rivoyat qiladi: Payg‘ambar ﷺ sochi to‘zg‘igan, chigallashgan bir kishini ko‘rib dedi: “Bu kishi sochini tinchlantiradigan biror narsa topa olmaydimi?”",
        "Keyin u kir kiyim kiygan bir kishini ko‘rib dedi: “Bu kishi kiyimlarini yuvish uchun suv topa olmaydimi?”",
      ], lesson: "Payg‘ambar ﷺ odamlar o‘zlariga qaramaganini sezardi va mo‘min pokiza va ozoda bo‘lishi kerakligini muloyimlik bilan o‘rgatardi.", check: {
        q: "Payg‘ambar ﷺ kir kiyimli kishi haqida nima dedi?",
        options: ["Hech narsa", "“Kiyimlarini yuvish uchun suv topa olmaydimi?”", "“Kir kiyim yaxshi”", "“U yangi kiyim sotib olishi kerak”"],
        why: "Kiyimni yuvish kifoya; ular qimmat bo‘lishi shart emas.",
      } },
      { situation: "Futboldan terlab uyga kelding. Kechki ovqat tayyor va qorning och. Avval nima qilasan?", options: [
        { text: "Darhol o‘tirib, ovqatlanaman.", feedback: "Qo‘llarda to‘p va maydondan mikroblar bor." },
        { text: "Qo‘llarimni yaxshilab yuvaman, imkon bo‘lsa, ovqatdan oldin tezda dush qabul qilib, kiyimimni almashtiraman.", feedback: "Ovqat uchun toza qo‘llar va oila dasturxoni uchun tetik tana." },
        { text: "Shunchaki atir sepaman.", feedback: "Atir hidni yashiradi, lekin tozalamaydi. Avval yuvin, keyin yoqimli hid." },
      ] },
      { think: [
        "Qo‘llarimni sovun bilan taxminan 20 soniya to‘g‘ri yuvamanmi?",
        "Tirnoqlarimni oxirgi marta qachon oldim?",
      ], home: [
        "Oilaviy “juma tozaligi”ni tashkil qiling: tirnoqlar olingan, g‘usl, toza kiyim, ozgina xushbo‘y, keyin juma namozi.",
        "Hammom ko‘zgusiga kichik ro‘yxat yopishtiring: qo‘llar, tishlar, yuz, soch.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Qo‘llarni tez-tez yuv, tahoratni diqqat bilan ol va butun tanani kamida haftada bir marta yuv; o‘smirlar uchun va sportdan keyin har kuni yaxshiroq.",
        "Hojatxonada: siydikdan saqlan, suv bilan tozalan, uni toza qoldir.",
        "Tirnoqlarni ol va sochni ozoda tut; fitrat sunnatlarini qirq kundan ortiq qoldirma.",
      ] },
    ],
    quiz: [
      { q: "Musulmon kamida qanchalik tez-tez boshini va butun tanasini yuvishi kerak?", options: ["Yilda bir marta", "Har yetti kunda bir marta", "Faqat Ramazonda", "Hech qachon"], why: "Har bir musulmonning zimmasida Allohning haqqi bor: har yetti kunda bir marta yuvinish." },
      { q: "Har hafta qaysi kuni alohida sunnat g‘usl bor?", options: ["Dushanba", "Juma", "Shanba", "Yakshanba"], why: "Juma kuni g‘usl." },
      { q: "Uyg‘onganingda qo‘llaringni nima qilishing kerak?", options: ["Hech narsa", "Suv idishiga solishdan oldin yuvish", "Qarsak chalish", "Cho‘ntakka solish"], why: "Kechasi qo‘ling qayerda bo‘lganini bilmaysan." },
      { q: "Nimadan ehtiyot bo‘lmaslik qabr azobiga sabab bo‘lishidan ogohlantirilgan?", options: ["Soch", "Siydik", "Oyoq kiyim", "Ovqat"], why: "Siydikdan saqlanmaslik." },
      { q: "Hojatxonaga qaysi oyoq bilan kiramiz?", options: ["O‘ng", "Chap", "Farqi yo‘q", "Sakrab"], why: "Hojatxonaga chap oyoq bilan kiriladi, o‘ng oyoq bilan chiqiladi." },
      { q: "Hojatxonadan chiqqanda nima deymiz?", options: ["Bismillah", "G‘ufronak", "Omin", "Hech narsa"], why: "“Mag‘firatingni so‘rayman.”" },
      { q: "Tirnoqlarni olmay eng ko‘pi bilan qancha qoldirish mumkin?", options: ["Qirq kun", "Bir yil", "Olti oy", "Chegara yo‘q"], why: "Qirq kundan ko‘p emas." },
      { q: "“Kimning sochi bo‘lsa, …”", options: ["uni qirsin", "unga qarasin", "uni yashirsin", "e’tibor bermasin"], why: "Uni yuv va tara." },
      { q: "Hanafiy g‘uslida butun tanani yuvishdan tashqari nima farz?", options: ["Og‘iz va burunni chayish", "Atir surtish", "Oq kiyish", "Bir oyoqda turish"], why: "Hanafiy g‘uslida og‘iz va burunni chayish farz." },
      { q: "Payg‘ambar ﷺ g‘usl uchun taxminan qancha suv ishlatgan?", options: ["Butun bir daryo", "Taxminan uch litr (bir so‘)", "Hech narsa", "To‘la vanna"], why: "U suvni ehtiyotkorlik bilan ishlatib, isrof qilmagan." },
    ],
  },

  teeth: {
    title: "Tish yuvish va misvok",
    summary: "Payg‘ambar ﷺ ning misvokni yaxshi ko‘rishi, qachon tish yuvish va og‘izni qanday toza tutish.",
    blocks: [
      { text: "Payg‘ambar ﷺ misvokni, ya’ni tishlarni tozalash uchun ishlatiladigan arok daraxtining yumshoq cho‘pini yaxshi ko‘rardi. U uni shunchalik tez-tez ishlatardiki, sahobalar uni uyga kirganda va uyg‘onganda qiladigan birinchi ishlaridan biri sifatida eslab qolishgan. Bugun biz uning Sunnatiga misvok yoki tish cho‘tkasi bilan ergashishimiz mumkin." },
      { en: "Misvok og‘izni poklaydi va Robbni rozi qiladi." },
      { en: "Agar ummatimga og‘ir bo‘lmaganida, ularga har bir namozdan oldin misvok ishlatishni buyurgan bo‘lardim." },
      { title: "Payg‘ambar ﷺ misvokni qachon ishlatgan", items: [
        "Kechasi uyg‘onganda og‘zini misvok bilan tozalardi (Buxoriy 245).",
        "Uyiga kirganda qiladigan birinchi ishi misvok ishlatish edi (Muslim 253).",
        "Namozdan oldin va tahorat olayotganda.",
        "Hatto hayotining so‘nggi soatlarida ham yangi misvok so‘rab, uni ishlatgan (Buxoriy 4449).",
      ] },
      { title: "Tishlarim uchun kundalik reja", items: [
        "Ertalab: uyg‘ongandan keyin (yoki nonushtadan keyin) tish yuv.",
        "Kechasi: uxlashdan oldin tish yuv. Bu eng muhim vaqt, chunki biz uxlaganda mikroblar ishlaydi.",
        "Salomatlik qo‘llanmasi (hadis emas, umumiy ma’lumot): kuniga ikki marta, taxminan ikki daqiqa davomida, ftorli tish pastasi bilan, har bir tishning har tomonini ohista yuv va tish shifokoriga muntazam bor.",
        "Kun davomida misvok ishlat: namozlardan oldin, tahoratda va ovqatdan keyin.",
        "Tilingni ohista tozala va shirin ichimliklar o‘rniga suv ich.",
      ] },
      { title: "Misvokni qanday ishlatish kerak", items: [
        "Uchini chayib, cho‘tkadek yumshaguncha ohista chaynab ol.",
        "Uni o‘ng qo‘lingda ushla.",
        "Og‘izning o‘ng tomonidan boshlab, tishlar bo‘ylab va milklar bo‘ylab tozala.",
        "Ishlatgandan keyin uni chayib, toza saqla. Eski uchini har bir-ikki kunda kesib tashla.",
      ] },
      { title: "Misvok", measure: "Robbingni rozi qiladi", picture: "Oddiy bir cho‘p, tishlaring bo‘ylab bir necha harakat va Payg‘ambar ﷺ bu Allohni rozi qiladi, degan. Bunchalik oson va sevimli amallar kam." },
      { title: "Oxirgi misvok", scene: "Madina, Payg‘ambar ﷺ ning so‘nggi kasalligi, Oishaning xonasida.", story: [
        "Oishaning akasi Abdurahmon qo‘lida yangi misvok bilan kirdi. Payg‘ambar ﷺ juda holsiz edi, lekin unga qaradi.",
        "Oisha u buni xohlayotganini tushundi. U misvokni olib, uchini tishlari bilan yumshatib, unga berdi.",
        "U tishlarini u bilan har doimgidek yaxshilab tozaladi. Ko‘p o‘tmay u vafot etdi.",
      ], lesson: "Poklik unga shunchalik aziz ediki, hatto so‘nggi lahzalarida ham og‘zini toza tutdi. U shunchalik e’tibor bergan bo‘lsa, biz har kecha tish yuva olamiz.", check: {
        q: "Oisha misvokni Payg‘ambar ﷺ ga berishdan oldin nima qildi?",
        options: ["Sutda yuvdi", "Uchini yumshatdi", "Ikkiga bo‘ldi", "Hech narsa"],
        why: "U oson ishlatishi uchun uni yumshatdi.",
      } },
      { situation: "Kech bo‘ldi, juda uyqung kelyapti va allaqachon to‘shakka yotding. Tish yuvishni unutibsan. Nima qilasan?", options: [
        { text: "Bu safar o‘tkazib yuboraman.", feedback: "Tun tishlarga eng ko‘p zarar yetadigan vaqt. “Bir martagina” ko‘pincha har kechaga aylanadi." },
        { text: "Turib, ikki daqiqa tish yuvaman, keyin qaytib kelib, uyqu duolarini o‘qiyman.", feedback: "Toza tishlar, bajarilgan sunnat va tinch uyqu." },
        { text: "Og‘zim yoqimli bo‘lishi uchun shirinlik yeyman.", feedback: "Kechasi shakar tishlar uchun eng yomon narsa." },
      ] },
      { think: [
        "To‘liq ikki daqiqa tish yuvamanmi yoki bir necha soniyagina?",
        "Namozlardan oldin ishlatish uchun sumkamda misvok olib yura olamanmi?",
      ], home: [
        "Uxlashdan oldin oila bo‘lib birga tish yuving va ikki daqiqalik taymer qo‘ying.",
        "Har bir bolaga o‘z misvokini oling va uni yumshatishni mashq qiling.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Misvok og‘izni poklaydi va Robbni rozi qiladi.",
        "Kamida ertalab va kechasi tish yuv, namozlardan oldin misvok ishlat.",
        "Payg‘ambar ﷺ hatto so‘nggi soatlarida ham og‘zini toza tutgan.",
      ] },
    ],
    quiz: [
      { q: "Misvok og‘izni poklaydi va…", options: ["Boy qiladi", "Robbni rozi qiladi", "Tahoratni buzadi", "Faqat kattalar uchun"], why: "“U og‘izni poklaydi va Robbni rozi qiladi.”" },
      { q: "Bizga og‘ir bo‘lmaganida, Payg‘ambar ﷺ har bir namozdan oldin nimani buyurgan bo‘lardi?", options: ["Ro‘zani", "Misvokni", "Uzoq sayrni", "Yangi kiyimni"], why: "Har bir namozdan oldin misvok." },
      { q: "Payg‘ambar ﷺ uyiga kirganda qiladigan birinchi ishi nima edi?", options: ["Ovqatlanish", "Misvok ishlatish", "Uxlash", "Maktublarni o‘qish"], why: "Buni Oisha rivoyat qilgan." },
      { q: "Kechasi uyg‘onganda Payg‘ambar ﷺ…", options: ["Yana uxlardi", "Og‘zini misvok bilan tozalardi", "Xurmo yerdi", "Bilolni chaqirardi"], why: "U misvokdan boshlardi." },
      { q: "Payg‘ambar ﷺ so‘nggi soatlarida nimani ishlatdi?", options: ["Yangi to‘nni", "Yangi misvokni", "Qilichni", "Kitobni"], why: "Oisha uni unga yumshatib berdi." },
      { q: "Tish yuvish uchun eng muhim vaqt qaysi?", options: ["Uxlashdan oldin", "Faqat juma kuni", "Faqat hayitda", "Hech qachon"], why: "Biz uxlaganda mikroblar ishlaydi (umumiy salomatlik ma’lumoti)." },
      { q: "Har safar qancha vaqt tish yuvish kerak?", options: ["Besh soniya", "Taxminan ikki daqiqa", "Yarim soat", "Farqi yo‘q"], why: "Ikki daqiqa har bir tishga yetadi (umumiy salomatlik ma’lumoti)." },
      { q: "Misvok qaysi qo‘lda ushlanadi?", options: ["O‘ngda", "Chapda", "Ikkalasida", "Hech birida"], why: "Yaxshi ishlar o‘ng qo‘l bilan qilinadi." },
      { q: "Misvokni ishlatishdan oldin nima qilish kerak?", options: ["Bo‘yash", "Uchini ohista chaynab yumshatish", "Qaynatish", "Sindirish"], why: "Yumshoq uchi cho‘tkadek ishlaydi." },
      { q: "Nega masjidga xom sarimsoq yoki piyoz hidi bilan kelmaslik kerak?", options: ["Bu harom ovqat", "Farishtalar va odamlar bundan bezovta bo‘ladi", "Ro‘zani ochadi", "Sababi yo‘q"], why: "Farishtalar odamlarni bezovta qiladigan narsadan bezovta bo‘ladi." },
    ],
  },

  "clean-clothes": {
    title: "Toza va chiroyli kiyim",
    summary: "O‘g‘il va qiz bolalar uchun toza, ozoda va odobli kiyim hamda kiyinish sunnatlari.",
    blocks: [
      { text: "Alloh bizga kiyimni ne’mat qilib berdi: “Ey Odam bolalari, Biz sizlarga avratlaringizni yopadigan kiyim va ziynat nozil qildik, taqvo libosi esa, u yaxshiroqdir” (7:26). Kiyim bizni yopadi, himoya qiladi va chiroyli ko‘rsatadi. Musulmonning kiyimi qimmat bo‘lishi shart emas, lekin u toza, ozoda va odobli bo‘lishi kerak." },
      { en: "Qalbida zarra miqdoricha kibr bo‘lgan kishi jannatga kirmaydi.” Bir kishi dedi: “Kishi kiyimi chiroyli, kavushi chiroyli bo‘lishini yaxshi ko‘radi.” U dedi: “Alloh go‘zaldir va go‘zallikni sevadi. Kibr haqni inkor qilish va odamlarni kamsitishdir." },
      { text: "Demak, chiroyli ko‘rinishni xohlash kibr emas. Boshqalarni kamsitish kibrdir. Alloh bandasida O‘z ne’matining asarini ko‘rishni yaxshi ko‘radi (Termiziy 2819)." },
      { title: "Har kuni, o‘g‘il va qiz bolalar uchun", items: [
        "Ichki kiyim va paypoqni har kuni almashtir va yuv.",
        "Toza kiyim kiy. Agar ko‘ylak terlagan, dog‘ tushgan yoki hid chiqayotgan bo‘lsa, uni shkafga emas, kir yuvishga qo‘y.",
        "Kiyimlarni ozoda saqla: buklab yoki ilib qo‘y, maktab va masjid kiyimlarini dazmolla.",
        "Namoz o‘qiydigan kiyimingda siydik yoki qon kabi najosat bo‘lmasligiga ishonch hosil qil.",
        "Masjid, juma va hayitga eng yaxshi toza kiyimlaringni kiy: “Har bir masjid oldida ziynatlaringizni olinglar” (7:31).",
        "Oq kiyim chiroyli va sevimli: “Oq kiyinglar, u kiyimlaringizning eng yaxshilaridandir” (Abu Dovud 3878).",
      ] },
      { title: "O‘g‘il va qiz bolalar: nimani esda tutish kerak", left: "O‘g‘il bolalar", right: "Qiz bolalar", rows: [
        ["Kindikdan tizzagacha yop va odobli kiyin", "Odobli kiyin; balog‘atdan keyin nomahram erkaklar oldida yuz, qo‘l kaftlari va oyoqlardan boshqa butun tanani yop"],
        ["Oltin va ipak erkaklar uchun emas (Abu Dovud 4057)", "Ayollar uchun oltin va ipak joiz"],
        ["Toza, ozoda kiyim; ayniqsa masjidda yoqimli hid", "Toza, ozoda kiyim; ro‘mol ham toza va tartibli bo‘lsin"],
        ["Ayollarga xos kiyimga taqlid qilma", "Erkaklarga xos kiyimga taqlid qilma"],
        ["Toza oyoq kiyim va paypoq, yomon hid yo‘q", "Toza oyoq kiyim va paypoq, yomon hid yo‘q"],
      ] },
      { title: "Kiyinish sunnati", items: [
        "O‘ngdan boshla: avval o‘ng yengni va o‘ng pochani kiy (Termiziy 1766).",
        "Oyoq kiyimni avval o‘ngini kiy, yechishda esa avval chapini yech (Buxoriy 5856).",
        "Yangi kiyim kiyganda duo o‘qi: “Allohumma lakal hamdu anta kasavtanih…” (Abu Dovud 4020).",
        "Chiqishdan oldin kiyimlaring toza va to‘g‘ri yopinganingni tekshir.",
        "Kiyimlaringga yaxshi qara. Payg‘ambar ﷺ o‘z kiyimlarini o‘zi yamagan (Musnadi Ahmad 24903).",
      ] },
      { title: "“Kiyimlarini yuvish uchun suv topa olmaydimi?”", scene: "Payg‘ambar ﷺ kir kiyim kiygan bir kishini ko‘rdi.", story: [
        "U kishining kiyimlari dog‘li va kir edi, garchi ularni yuvishi mumkin bo‘lsa ham.",
        "Payg‘ambar ﷺ dedi: “Bu kishi kiyimlarini yuvish uchun suv topa olmaydimi?”",
      ], lesson: "Toza kiyimga pul emas, faqat suv va e’tibor kerak. Payg‘ambar ﷺ mo‘minlardan kiyimlariga qarashlarini kutardi.", check: {
        q: "Payg‘ambar ﷺ u kishining kiyimi uchun nima kerakligini aytdi?",
        options: ["Pul", "Ularni yuvish uchun suv", "Tikuvchi", "Yangi oyoq kiyim"],
        why: "Yuvish kifoya; qimmat bo‘lishi shart emas.",
      } },
      { situation: "Sevimli futbolkangga dog‘ tushgan va biroz hid chiqyapti, lekin uni juma kuni masjidga kiymoqchisan. Nima qilasan?", options: [
        { text: "Baribir kiyib, ustidan atir sepaman.", feedback: "Atir tozalamaydi. Masjidga eng yaxshi toza kiyimlarimizni kiyamiz." },
        { text: "Uni kir yuvishga qo‘yib, juma uchun boshqa toza va chiroyli kiyim tanlayman.", feedback: "“Har bir masjid oldida ziynatlaringizni olinglar” (7:31)." },
        { text: "Masjidga bormay uyda qolaman.", feedback: "Bunga hojat yo‘q: shunchaki toza kiyim tanlab, bor." },
      ] },
      { think: [
        "Kiyimlarim doim yangi hidli bo‘ladimi?",
        "Kiyimlarimga qarayman yoki ularni yerda qoldiramanmi?",
      ], home: [
        "Har bir bolaga kir savat bering va kiyimlarini o‘zi buklashni o‘rgating.",
        "Juma kiyimlarini payshanba kechasi birga tayyorlang.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Kiyim toza, ozoda va odobli bo‘lishi kerak; qimmat bo‘lishi shart emas.",
        "Chiroyli kiyim kiyish kibr emas; odamlarni kamsitish kibrdir.",
        "O‘ngdan boshla, yangi kiyim duosini o‘qi va masjidga eng yaxshi kiyimingni kiy.",
      ] },
    ],
    quiz: [
      { q: "Alloh bizga avratimizni yopish uchun va … kiyim berdi", options: ["ziynat uchun", "yuk uchun", "jazo uchun", "sir uchun"], why: "Taqvo libosi esa yaxshiroqdir." },
      { q: "Chiroyli kiyim va oyoq kiyimni yaxshi ko‘rish kibrmi?", options: ["Ha, doim", "Yo‘q; kibr haqni inkor qilish va odamlarni kamsitishdir", "Faqat qizlar uchun", "Faqat o‘g‘il bolalar uchun"], why: "Alloh go‘zal va go‘zallikni sevadi." },
      { q: "Har bir namoz joyiga nima kiyishimiz kerak?", options: ["Eng eski kiyimlarimizni", "Ziynatimizni: toza, chiroyli kiyimlarni", "Pijamani", "Har qanday kir narsani"], why: "“Har bir masjid oldida ziynatlaringizni olinglar.”" },
      { q: "Payg‘ambar ﷺ qaysi rangni eng yaxshi kiyimlardan degan?", options: ["Qizil", "Oq", "Qora", "Yashil"], why: "“Oq kiyinglar.”" },
      { q: "Oyoq kiyimni kiyganda qaysi oyoqdan boshlanadi?", options: ["Chapdan", "O‘ngdan", "Farqi yo‘q", "Ikkalasi birga"], why: "Kiyishda avval o‘ng, yechishda avval chap." },
      { q: "Erkaklar uchun nimalarni kiyish joiz emas?", options: ["Paxta va jun", "Oltin va ipak", "Oq va yashil", "Oyoq kiyim va paypoq"], why: "Ayollar uchun joiz, erkaklar uchun emas." },
      { q: "Ichki kiyim va paypoq qanchalik tez-tez almashtirilishi kerak?", options: ["Har kuni", "Oyda bir marta", "Yilda bir marta", "Hech qachon"], why: "Kundalik pokizalik odati (umumiy gigiyena)." },
      { q: "Payg‘ambar ﷺ kir kiyimli kishi haqida nima dedi?", options: ["“U yaxshi ko‘rinadi”", "“Kiyimlarini yuvish uchun suv topa olmaydimi?”", "“Unga ipak sotib olinglar”", "Hech narsa"], why: "Yuvish kifoya." },
      { q: "Alloh bandasida nimani ko‘rishni yaxshi ko‘radi?", options: ["O‘z ne’matining asarini", "G‘amni", "Kirni", "Hech narsani"], why: "O‘zingga qarash shukrni ko‘rsatadi." },
      { q: "Kim o‘z kiyimlarini o‘zi yamagan?", options: ["Fir’avn", "Payg‘ambar ﷺ", "Hech kim", "Faqat tikuvchilar"], why: "U o‘z ishlarini o‘zi qilar va oilasiga xizmat qilardi." },
    ],
  },

  "my-room": {
    title: "Tartibli xona",
    summary: "To‘shakni yig‘ish, narsalarni joyiga qo‘yish va nega tartibli xona ibodat va xotirjamlikka yordam beradi.",
    blocks: [
      { text: "Xonang sen uxlaydigan, o‘qiydigan, namoz o‘qiydigan va dam oladigan joy. Tartibli xona tinchroq, unda narsalarni topish osonroq va namoz o‘qish uchun yoqimli joy. Uni toza tutish Alloh oilangga bergan uyga qarashdagi sening ulushingdir." },
      { title: "Nega tartibli xona muhim", items: [
        "Sen ko‘pincha xonangda namoz o‘qiysan, namoz joyi esa pok bo‘lishi kerak.",
        "Payg‘ambar ﷺ uyda yordam berardi: Oisha u oilasining xizmatida bo‘lardi, namoz vaqti kirganda esa namozga chiqardi, degan (Buxoriy 676). U kiyimlari va kavushlarini o‘zi yamardi (Musnadi Ahmad 24903).",
        "Alloh go‘zal va go‘zallikni sevadi (Muslim 91). Ozoda xona har kuni yarata oladigan kichik go‘zallikdir.",
        "Tartibsizlik narsalarni qidirishga vaqtimizni sarflatadi va o‘qish hamda namozga e’tibor qaratishni qiyinlashtiradi.",
      ] },
      { title: "Mening 10 daqiqalik xona tartibim", items: [
        "Ertalab: toza havo uchun derazani och va to‘shagingni yig‘. Ko‘rpa va yostiqni qoqib qo‘y.",
        "Kir kiyimlarni kir savatga sol, toza kiyimlarni buklab yoki ilib qo‘y.",
        "Kitoblar, o‘yinchoqlar va zaryadlovchilarni joyiga qo‘y.",
        "Piyola, likopcha va axlatni xonadan olib chiq.",
        "Haftada bir marta: changini art, changyutgich yoki supurgi bilan tozala va ota-onang yordamida choyshablarni almashtir.",
        "Kechasi: uxlashdan oldin Payg‘ambar ﷺ o‘rgatganidek to‘shagingni qoqib qo‘y (Buxoriy 6320) va ertangi kiyimlaringni tayyorlab qo‘y.",
      ] },
      { en: "Biringiz to‘shagiga yotmoqchi bo‘lsa, uni kiyimining ichki tomoni bilan qoqib qo‘ysin, chunki u ketganidan keyin unga nima kelganini bilmaydi." },
      { title: "Tinch xona uchun yaxshi odatlar", items: [
        "“Har bir narsaning o‘z joyi bor va har bir narsa o‘z joyida.”",
        "Namoz uchun toza burchak yoki tayyor joynamoz tut.",
        "To‘shakda ovqatlanma: ushoqlar hasharotlarni jalb qiladi.",
        "Uxlashdan oldin Payg‘ambar ﷺ maslahatiga amal qil: eshikni yop, ichimlik va ovqatlarni yopib qo‘y, isitgich va sham kabi xavfli narsalarni o‘chir (Buxoriy 5623).",
      ] },
      { situation: "Onang xonangni yig‘ishtirishni so‘radi, lekin do‘stlaring seni onlayn o‘yinga chaqiryapti. Nima qilasan?", options: [
        { text: "Avval o‘ynayman, keyin (balki) yig‘ishtiraman.", feedback: "“Keyin” ko‘pincha hech qachon kelmaydi, onang esa hozir so‘radi." },
        { text: "Do‘stlarimga “10 daqiqa” deyman, tartib bo‘yicha tezda yig‘ishtiraman, keyin ularga qo‘shilaman.", feedback: "Ota-onaga itoat va poklik, ustiga o‘ynashga ham ulgurasan." },
        { text: "Hamma narsani karavot tagiga tiqib qo‘yaman.", feedback: "Yashirilgan tartibsizlik baribir tartibsizlik va u qaytib keladi." },
      ] },
      { think: [
        "Agar mehmon hozir xonamni ko‘rsa, xursand bo‘larmidim?",
        "Xonamda namoz o‘qiydigan toza joy bormi?",
      ], home: [
        "Har oqshom taymer bilan oilaviy “10 daqiqalik yig‘ishtirish” qiling.",
        "Har bir bola joynamozi va Qur’oni uchun joy tanlasin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Tartibli xona tinchroq, namoz joyi esa pok bo‘lishi kerak.",
        "To‘shakni yig‘, narsalarni joyiga qo‘y va uxlashdan oldin to‘shakni qoq.",
        "Payg‘ambar ﷺ uyda yordam bergan va o‘z narsalariga o‘zi qaragan.",
      ] },
    ],
    quiz: [
      { q: "Payg‘ambar ﷺ to‘shakka yotishdan oldin uni nima qilishni o‘rgatgan?", options: ["Ustida sakrashni", "Uni qoqishni", "Hech narsa", "Ag‘darishni"], why: "Unga nima kelganini bilmaysan." },
      { q: "Oisha Payg‘ambar ﷺ uyda nima qilardi, degan?", options: ["Hech narsa", "Oilasiga xizmat qilib, yordam berardi", "Faqat uxlardi", "Faqat o‘qirdi"], why: "U oilasining xizmatida bo‘lardi." },
      { q: "Kim o‘z kiyimlari va kavushlarini o‘zi yamagan?", options: ["Payg‘ambar ﷺ", "Abu Lahab", "Hech kim", "Faqat xizmatkorlar"], why: "U o‘z ishlarini o‘zi qilardi." },
      { q: "Nega tartibli xona namoz uchun muhim?", options: ["Muhim emas", "Namoz joyi pok bo‘lishi kerak", "Namoz faqat masjidda", "Xonada namoz o‘qish mumkin emas"], why: "Joyning pokligi namozning sharti." },
      { q: "Kir kiyimlar qayerga solinishi kerak?", options: ["Karavot tagiga", "Kir savatga", "Qaytadan shkafga", "Yerga"], why: "Toza va kir kiyimlarni alohida saqla." },
      { q: "Payg‘ambar ﷺ xavfsizlik uchun kechasi nima qilishni maslahat bergan?", options: ["Eshiklarni ochiq qoldirish", "Eshiklarni yopish va ovqat hamda ichimliklarni yopib qo‘yish", "Ko‘p sham yoqish", "Hech narsa"], why: "Eshiklarni yop, idishlarni yop." },
      { q: "Nega to‘shakda ovqatlanmaslik kerak?", options: ["Bu harom", "Ushoqlar hasharotlarni jalb qiladi va iflos qiladi", "Ovqat u yerda yomon ta’mli", "Sababi yo‘q"], why: "To‘shakni uyqu uchun toza tut." },
      { q: "Har tongdagi yaxshi birinchi qadam…", options: ["To‘shakni yig‘ish va derazani ochish", "Yana uxlash", "Hamma narsani qoldirish", "Narsalarni yerga tashlash"], why: "Tartibli boshlanish tinch kun yaratadi." },
      { q: "Tartibsizlikni karavot tagiga tiqish…", options: ["Haqiqiy yig‘ishtirish", "Tozalash emas, tartibsizlikni yashirish", "Sunnat", "Eng yaxshi yo‘l"], why: "Narsalar o‘z joyiga qo‘yilishi kerak." },
      { q: "Alloh go‘zal va … sevadi", options: ["tartibsizlikni", "go‘zallikni", "shovqinni", "dangasalikni"], why: "Ozoda xona kichik go‘zallikdir." },
    ],
  },

  "our-home": {
    title: "Toza uy, birgalikda",
    summary: "Uy ishlarini bo‘lishish, toza oshxona va hammom, suvni isrof qilmaslik va toza ko‘cha.",
    blocks: [
      { text: "Toza uy bir kishining emas, butun oilaning mehnatidir. Alloh Ibrohim va Ismoilga Ka’bani qurishni buyurganda aytdi: “Uyimni tavof qiluvchilar, e’tikof qiluvchilar, ruku va sajda qiluvchilar uchun pokla” (2:125). Uylarimizda ham namoz o‘qiymiz, shuning uchun ularni ham toza tutamiz." },
      { title: "Har kimning o‘z ulushi bor", items: [
        "Ota-onalar, o‘g‘il va qiz bolalar, hamma yordam beradi. Payg‘ambar ﷺ uy ishlarida yordam bergan (Buxoriy 676), shuning uchun hech kim tozalash uchun “juda muhim” emas.",
        "Kichik bolalar: o‘yinchoqlarini yig‘ishtiradi, likopchasini oshxonaga olib boradi, to‘kkan narsasini artadi.",
        "Kattaroq bolalar: idish yuvadi, supuradi, axlatni chiqaradi, kir yuvishda yordam beradi.",
        "Tozalash ota-onangni hurmat qilish va oilangga xizmat qilish yo‘li, buning uchun esa savob bor.",
      ] },
      { title: "Oshxona va dasturxon", items: [
        "Ovqat pishirish va yeyishdan oldin qo‘llaringni yuv.",
        "Ovqatdan keyin dasturxonni yig‘ishtirib, art. Ovqatni isrof qilma: yeydiganingcha ol.",
        "Idishlarni hid chiqmasligi va hasharot to‘planmasligi uchun tez yuv.",
        "Ovqat va ichimliklarni yopib qo‘y (Buxoriy 5623) va muzlatgichni toza tut.",
      ] },
      { title: "Hammom va hojatxona", items: [
        "Uni o‘zing topgandek toza yoki undan ham toza qoldir: suvni tort, o‘rindiq va polni art, obdastani joyiga qo‘y.",
        "Hech kim sirpanib ketmasligi va najosat tarqalmasligi uchun polni quruq tut.",
        "Uni haftada bir marta ota-onang bilan tozala: unitaz, rakovina, ko‘zgu va pol.",
        "Suvni isrof qilma. Alloh aytadi: “Yenglar, ichinglar, lekin isrof qilmanglar; U isrof qiluvchilarni sevmaydi” (7:31). Tish yuvayotganda jo‘mrakni yop.",
      ] },
      { title: "Uydan tashqarida", items: [
        "Ko‘chaga axlat tashlama; uni axlat qutisi topguningcha olib yur.",
        "Yo‘ldan ozor beruvchi narsani olib tashlash iymonning bir shoxidir (Muslim 35). Axlatni terib olish yaxshi amal.",
        "Turg‘un suvga yoki odamlar yuradigan va o‘tiradigan joyga bavl qilma (Buxoriy 239).",
        "Umumiy joylarni toza tut: zinapoya, lift, bog‘, masjidning tahoratxonasi.",
        "Yaxshi qo‘shni bo‘l: axlatingni ularning eshigi oldida qoldirma (Buxoriy 6018).",
      ] },
      { title: "Yo‘ldan ozor beruvchi narsani olib tashlash", measure: "Iymonning bir shoxi", picture: "Bir kishi yo‘lda tikanli shoxni ko‘rib, uni odamlarning yo‘lidan olib tashladi va Alloh unga shukr qilib, uni mag‘firat qildi. Yo‘lni tozalash shunchalik qimmatli." },
      { situation: "Kechki ovqatdan keyin hamma dasturxondan turib ketdi. Onang yolg‘iz o‘zi yig‘ishtirishni boshladi. Nima qilasan?", options: [
        { text: "Borib televizor ko‘raman; bu uning ishi.", feedback: "Payg‘ambar ﷺ uyda yordam bergan. Uy ishlari hammaning ishi." },
        { text: "Likopchamni va yana bir narsani olib, dasturxonni artaman va “Yana nima qilay?” deb so‘rayman.", feedback: "Oilangga xizmat qilish ota-onangga mehribonlik va savobli amal." },
        { text: "U ikki marta so‘rasagina yordam beraman.", feedback: "So‘rashlarini kutma. Sezgin va yordam ber." },
      ] },
      { think: [
        "Uydagi vazifam nima? Uni eslatmasdan bajaramanmi?",
        "Bugun boshqa birov tozalashi uchun biror joyda tartibsizlik qoldirdimmi?",
      ], home: [
        "Hammaga, hatto eng kichigiga ham vazifa berilgan oilaviy uy ishlari jadvalini tuzing.",
        "Shanba kuni orqa fonda Qur’on tilovati yangragan holda birgalikda “oilaviy tozalash” qiling.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Uyni toza tutish hammaning ishi: o‘g‘il va qiz bolalar, kichigu katta.",
        "Oshxona va hammomni toza qoldir, suv va ovqatni hech qachon isrof qilma.",
        "Ko‘cha va umumiy joylarni ham toza tut: ozor beruvchi narsani olib tashlash iymonning bir shoxi.",
      ] },
    ],
    quiz: [
      { q: "Alloh Ibrohim va Ismoilga O‘z Uyini nima qilishni buyurdi?", options: ["Bo‘yashni", "Poklashni", "Yopishni", "Sotishni"], why: "“Uyimni tavof qiluvchilar uchun pokla…”" },
      { q: "Kim uy ishlarida yordam bergan?", options: ["Hech bir erkak", "Payg‘ambar ﷺ", "Faqat xizmatkorlar", "Faqat bolalar"], why: "U oilasining xizmatida bo‘lardi." },
      { q: "Yo‘ldan ozor beruvchi narsani olib tashlash…", options: ["Iymonning bir shoxi", "Makruh", "Faqat ishchilar uchun", "Befoyda"], why: "Iymonning eng quyi shoxi." },
      { q: "Yo‘ldan tikanli shoxni olib tashlagan kishi uchun Alloh nima qildi?", options: ["Hech narsa", "Unga shukr qilib, uni mag‘firat qildi", "Uni boy qildi", "Uni podshoh qildi"], why: "Kichik amal, katta mukofot." },
      { q: "“Yenglar, ichinglar, lekin …”", options: ["bo‘lishinglar", "isrof qilmanglar", "jilmayinglar", "namoz o‘qinglar"], why: "U isrof qiluvchilarni sevmaydi." },
      { q: "Tish yuvayotganda jo‘mrak…", options: ["Doim ochiq bo‘lishi kerak", "Yopiq bo‘lishi kerak", "Buzuq bo‘lishi kerak", "Issiq bo‘lishi kerak"], why: "Suvni isrof qilma." },
      { q: "Hammomni qanday qoldirish kerak?", options: ["Ho‘l va iflos", "Topgandek toza yoki undan ham toza", "Chirog‘i yoniq", "Farqi yo‘q"], why: "Keyingi kishini o‘yla." },
      { q: "Yaqinda axlat qutisi bo‘lmasa, axlat qayerga?", options: ["Ko‘chaga", "Axlat qutisi topguncha olib yurish", "Qo‘shnining bog‘iga", "Daryoga"], why: "Umumiy joylarga hech qachon zarar yetkazma." },
      { q: "Uyni toza tutish kimning ishi?", options: ["Faqat onaning", "Butun oilaning", "Faqat to‘ng‘ich farzandning", "Hech kimning"], why: "Har kimning o‘z ulushi bor." },
      { q: "Kim mo‘mindan bir qiyinchilikni ketkazsa…", options: ["Hech narsa olmaydi", "Alloh undan Qiyomat kunida bir qiyinchilikni ketkazadi", "Savobini yo‘qotadi", "To‘lashi kerak"], why: "Boshqalarga, jumladan, uy ishlarida yordam berish savobli." },
    ],
  },
};

export default T;
