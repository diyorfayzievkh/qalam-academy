import type { LessonTrMap } from "./lessons";

// Kundalik duolar (o‘zbekcha). Arabcha matn va transliteratsiya o‘zgarmaydi; ma’nolar tarjima qilingan.

const T: LessonTrMap = {
  "home-food": {
    title: "Ovqatlanish, kiyinish va uy",
    summary: "Ovqat, kiyim va uydan chiqish duolari.",
    blocks: [
      { label: "Ovqatdan oldin", r: { en: "Allohning nomi bilan." }, note: "Boshida unutib qo‘ysangiz: Bismillahi avvalahu va oxirahu (Abu Dovud 3767)." },
      { label: "Ovqatdan keyin", r: { en: "Meni bu bilan to‘ydirgan va mening kuch-quvvatimsiz menga rizq qilib bergan Allohga hamd bo‘lsin." } },
      { label: "Yangi kiyim kiyganda", r: { en: "Menga buni kiydirgan va mening kuch-quvvatimsiz menga rizq qilib bergan Allohga hamd bo‘lsin." } },
      { label: "Uydan chiqayotganda", r: { en: "Allohning nomi bilan, Allohga tavakkul qildim, Allohdan boshqa hech qanday kuch va quvvat yo‘q." } },
    ],
  },
  "sleep-toilet": {
    title: "Uyqu, uyg‘onish va hojatxona",
    summary: "Kun va tunni o‘rab turadigan duolar.",
    blocks: [
      { label: "Uxlashdan oldin", r: { en: "Allohim, Sening isming bilan o‘laman va tirilaman." } },
      { label: "Uyg‘onganda", r: { en: "Bizni o‘ldirganidan keyin tiriltirgan Allohga hamd bo‘lsin, qaytish Unga." } },
      { label: "Hojatxonaga kirganda", r: { en: "Allohim, yomonlikdan va yomon mavjudotlardan Sendan panoh so‘rayman." }, note: "Avval “Bismillah” deb, chap oyoq bilan kiring." },
      { label: "Hojatxonadan chiqqanda", r: { en: "Mag‘firatingni so‘rayman." }, note: "O‘ng oyoq bilan chiqing." },
    ],
  },
  "masjid-travel": {
    title: "Masjid, safar va himoya",
    summary: "Dunyoga chiqqanda o‘qiladigan duolar.",
    blocks: [
      { label: "Masjidga kirganda", r: { en: "Allohim, menga rahmatingning eshiklarini och." }, note: "O‘ng oyoq bilan kiring." },
      { label: "Masjiddan chiqqanda", r: { en: "Allohim, Sendan fazlingni so‘rayman." } },
      { label: "Safarga chiqayotganda", r: { en: "Buni bizga bo‘ysundirgan Zot pokdir, biz buni o‘zimiz uddalay olmas edik, albatta biz Robbimizga qaytuvchimiz." } },
      { label: "Ertalabki va kechki himoya (×3)", r: { en: "Ismi bilan yerdagi va osmondagi hech narsa zarar yetkaza olmaydigan Allohning nomi bilan, U Eshituvchi, Biluvchidir." } },
    ],
  },
  refuge: {
    title: "Panoh so‘rash (istiaza)",
    summary: "Payg‘ambar ﷺ ning himoya duolari, jumladan sakkiz narsadan panoh so‘rash.",
    blocks: [
      { text: "Payg‘ambar ﷺ qalbga, tanaga, iymonga va rizqqa yetadigan zarardan ko‘pincha Allohdan panoh so‘rardi. Bu duolar haftada bittadan o‘rganadigan darajada qisqa." },
      { label: "Sakkiz narsadan panoh", r: { en: "Allohim, tashvish va g‘amdan, ojizlik va dangasalikdan, baxillik va qo‘rqoqlikdan, qarz og‘irligidan va odamlarning g‘olib kelishidan Sendan panoh so‘rayman." }, note: "Payg‘ambar ﷺ ga xizmat qilgan Anas (r.a.) uning buni ko‘p aytganini eshitgan. Sakkiztasi to‘rt juft bo‘lib keladi: kelajak tashvishi va o‘tmish g‘ami; ojizlik va dangasalik; baxillik va qo‘rqoqlik; og‘ir qarz va odamlarning g‘olib kelishi." },
      { label: "Salomdan oldin to‘rt narsadan", r: { en: "Allohim, do‘zax azobidan, qabr azobidan, hayot va o‘lim fitnasidan va Dajjol fitnasining yomonligidan Sendan panoh so‘rayman." }, note: "Payg‘ambar ﷺ buni oxirgi tashahhuddan keyin, salomdan oldin aytishni buyurgan." },
      { label: "Foydasiz ilmdan panoh", r: { en: "Allohim, foyda bermaydigan ilmdan, xushu’ qilmaydigan qalbdan, to‘ymaydigan nafsdan va ijobat bo‘lmaydigan duodan Sendan panoh so‘rayman." } },
      { label: "Allohning ne’matlaridan ayrilishdan panoh", r: { en: "Allohim, ne’matingning zavolidan, bergan ofiyatingning o‘zgarishidan, to‘satdan keladigan azobingdan va barcha g‘azabingdan Sendan panoh so‘rayman." } },
      { label: "Yomon xulqdan panoh", r: { en: "Allohim, yomon xulqlardan, yomon amallardan va yomon havolardan Sendan panoh so‘rayman." } },
      { label: "Qarilikning eng yomonidan va dunyo fitnalaridan panoh", r: { en: "Allohim, baxillik va qo‘rqoqlikdan, umrning eng xor qismiga qaytarilishdan, dunyo fitnalaridan va qabr azobidan Sendan panoh so‘rayman." }, note: "Sa’d ibn Abu Vaqqos (r.a.) buni bolalariga muallim yozuvni o‘rgatgandek o‘rgatgan." },
      { label: "Og‘ir kasalliklardan panoh", r: { en: "Allohim, moxovdan, jinnilikdan, pesdan va barcha yomon kasalliklardan Sendan panoh so‘rayman." } },
      { label: "Kufr va kambag‘allikdan panoh (ertalab va kechqurun ×3)", r: { en: "Allohim, kufr va kambag‘allikdan Sendan panoh so‘rayman, qabr azobidan ham Sendan panoh so‘rayman. Sendan o‘zga iloh yo‘q." } },
      { label: "O‘z amallarimning yomonligidan panoh", r: { en: "Allohim, qilgan narsamning yomonligidan va qilmagan narsamning yomonligidan Sendan panoh so‘rayman." } },
      { label: "Yangi joyga tushganda (va kechqurun ×3)", r: { en: "Allohning mukammal kalimalari bilan U yaratgan narsalarning yomonligidan panoh so‘rayman." }, note: "U joydan ketguningizcha sizga hech narsa zarar yetkazmaydi." },
      { label: "Farzandlaringizni himoya qilish", r: { en: "Ikkalangizni Allohning mukammal kalimalari panohiga topshiraman: har bir shayton va zararli jondordan va har bir yomon ko‘zdan." }, note: "Payg‘ambar ﷺ buni nevaralari Hasan va Husayn uchun aytardi. Bitta bola uchun u’izuka (o‘g‘il) yoki u’izuki (qiz), ikkitadan ko‘p bo‘lsa u’izukum deyiladi." },
    ],
  },
  forgiveness: {
    title: "Mag‘firat so‘rash",
    summary: "Sayyidul istig‘for va aksirish odobi.",
    blocks: [
      { label: "Sayyidul istig‘for", r: { en: "Allohim, Sen mening Robbimsan, Sendan o‘zga iloh yo‘q. Meni Sen yaratding, men Sening bandangman. Qo‘limdan kelgancha Senga bergan ahdim va va’damdaman. Qilgan yomonligimdan Sendan panoh so‘rayman. Menga bergan ne’matingni e’tirof etaman va gunohimni e’tirof etaman, meni mag‘firat qil, chunki gunohlarni Sendan boshqa hech kim mag‘firat qilmaydi." }, note: "Kim buni ertalab ishonch bilan aytib, o‘sha kuni vafot etsa, jannat ahlidan bo‘ladi." },
      { title: "Kimdir aksirganda (Buxoriy 6224)", items: [
        "Aksirgan kishi aytadi: Alhamdulillah.",
        "Eshitgan kishi javob beradi: Yarhamukalloh (Alloh senga rahm qilsin).",
        "Aksirgan kishi javob beradi: Yahdikumullohu va yuslihu balakum (Alloh sizni hidoyat qilsin va ishingizni o‘nglasin).",
      ] },
    ],
  },
};

export default T;
