import type { LessonTrMap } from "./lessons";

// Axloq va odob olami, 1-qism (o‘zbekcha).

export const AKHLAQ_UZ_1: LessonTrMap = {
  "bed-sleep": {
    title: "To‘shak va uyqu odobi",
    summary: "Kunni poklik va zikr bilan yakunlash.",
    why: [
      "Payg‘ambar ﷺ to‘shakka yotishning to‘liq tartibini o‘rgatgan. Uyqu kichik o‘lim deb vasflanadi: har kecha jon Alloh tomonidan olinadi va qaytariladi (Qur’on 39:42).",
      "U ﷺ aytgan: biringiz to‘shagiga yotmoqchi bo‘lsa, uni qoqsin, chunki u ketganidan keyin unga nima kelganini bilmaydi (Buxoriy 6320, Muslim 2714).",
    ],
    how: [
      "Ko‘rpa-to‘shakni toza tut: choyshab va yostiq jildlarini muntazam yuv va to‘shakni shamollat.",
      "Yotishdan oldin to‘shakni qoq (Buxoriy 6320).",
      "Uxlashdan oldin tahorat ol (Buxoriy 247).",
      "O‘ng yoningga yot (Buxoriy 247).",
      "Oyatal Kursiyni o‘qi; tonggacha sen bilan Allohdan bir qo‘riqchi bo‘ladi (Buxoriy 2311).",
      "Ixlos, Falaq va Nosni kaftlaringga o‘qib, badaningga surt, uch marta (Buxoriy 5017).",
      "Qorin bilan yotib uxlamaslikka harakat qil; Payg‘ambar ﷺ Alloh bunday yotishni yoqtirmasligini aytgan (Abu Dovud 5040).",
      "Uyg‘onganda uyg‘onish duosini o‘qi va qo‘lingni idishga solishdan oldin yuv (Buxoriy 162, Muslim 278).",
    ],
    recitations: [{ label: "Uxlashdan oldin", r: { en: "Allohim, Sening isming bilan o‘laman va tirilaman." } }],
    benefits: {
      spiritual: "Tun zikr va Allohning himoyasi bilan boshlanadi, yaxshi niyat bilan qilingan uyqu esa ibodatga aylanadi.",
      health: "Toza ko‘rpa-to‘shak chang kanalari, allergenlar va bakteriyalarni kamaytiradi, sokin tartib esa uyqu sifatini yaxshilaydi.",
      social: "Tartibli to‘shak va xona kunning boshi va oxiriga xotirjamlik va tartib olib keladi.",
    },
    lose: {
      spiritual: "Uyqu sunnatlarining himoyasi va savobidan, Allohga qaytishimizni har kecha eslatib turishdan mahrum bo‘lamiz.",
      health: "Kir ko‘rpa-to‘shak allergiya, husnbuzar, teri qichishishi va yomon uyquga sabab bo‘lishi mumkin.",
      social: "Kichik kundalik odatlarga e’tiborsizlik ko‘pincha intizomning kattaroq sohalariga ham tarqaladi.",
    },
    practice: {
      challenge: "7 kecha davomida: to‘shakni qoq, tahorat ol va uxlashdan oldin Oyatal Kursiyni o‘qi.",
      reflection: "Sunnat tartibiga amal qilgandan keyin qanday his bilan uyg‘ondim?",
    },
    quiz: [
      { q: "Yotishdan oldin to‘shakni nima qilish kerak?", options: ["Hech narsa", "Uni qoqish", "Atir sepish", "Ag‘darish"], why: "Sen ketganingdan keyin unga nima kelganini bilmaysan." },
      { q: "Qaysi yonboshda uxlash sunnat?", options: ["Chap", "O‘ng", "Qorin bilan", "Faqat chalqancha"], why: "O‘ng yoningga yot." },
      { q: "Kechasi o‘qilsa, tonggacha Allohdan qo‘riqchi beradigan oyat qaysi?", options: ["Fotiha", "Oyatal Kursiy", "Kavsar surasi", "Faqat Baqaraning oxirgi oyati"], why: "Sen bilan qo‘riqchi bo‘ladi va shayton yaqinlashmaydi." },
      { q: "Qaysi uch sura kaftlarga o‘qilib, badanga surtiladi?", options: ["Fotiha, Baqara, Oli Imron", "Ixlos, Falaq, Nos", "Yosin, Rahmon, Mulk", "Kahf, Maryam, Toha"], why: "Payg‘ambar ﷺ qilganidek, uch marta." },
      { q: "Uyqu nima deb vasflanadi?", options: ["Vaqtni behuda sarflash", "Kichik o‘lim", "Jazo", "Alohida narsa emas"], why: "Alloh uyquda jonlarni olib, qaytaradi (39:42)." },
      { q: "Payg‘ambar ﷺ Alloh qaysi yotish holatini yoqtirmasligini aytgan?", options: ["O‘ng yonboshda", "Qorin bilan", "Chalqancha", "O‘tirgan holda"], why: "Yuztuban uxlashdan saqlan." },
    ],
    stories: [{ title: "Xizmatkordan yaxshiroq", scene: "Ali va Fotimaning (r.a.) uyi. Uning qo‘llari qo‘l tegirmonda don tortishdan qavarib ketgan edi.", story: [
      "Fotima otasi ﷺ ning oldiga kelgan asirlardan bir xizmatkor so‘rash uchun bordi, lekin uni topa olmay, Oishaga aytib ketdi.",
      "O‘sha kechasi u ular allaqachon yotgan paytda kirib keldi. Ular turmoqchi bo‘lishdi, u: joyingizda qolinglar, deb ular orasiga o‘tirdi.",
      "U dedi: “So‘ragan narsangizdan yaxshirog‘ini o‘rgatmaymi? To‘shakka yotganingizda o‘ttiz uch marta Subhanalloh, o‘ttiz uch marta Alhamdulillah va o‘ttiz to‘rt marta Allohu akbar deng. Bu sizlar uchun xizmatkordan yaxshiroq.”",
      "Ali shundan keyin buni bir marta ham tark etmaganini aytgan.",
    ], lesson: "Hayot og‘irlashganda, uyqudan oldingi zikr odamlarning yordami bera olmaydigan kuch beradi.", check: {
      q: "Payg‘ambar ﷺ Fotimaga xizmatkor o‘rniga nima berdi?", options: ["Pul", "Uyqudan oldingi zikr: 33, 33, 34", "Yangi tegirmon", "Uy"], why: "U ularga uxlashdan oldin tasbeh, tahmid va takbirni o‘rgatdi.",
    } }],
    rewards: [{ title: "Kechasi Oyatal Kursiy", measure: "Tonggacha Allohdan qo‘riqchi", picture: "Kim to‘shakka yotganda Oyatal Kursiyni o‘qisa, u bilan Allohdan bir qo‘riqchi bo‘ladi va tonggacha shayton unga yaqinlashmaydi (Buxoriy 2311)." }],
  },

  hygiene: {
    title: "Shaxsiy gigiyena (tahorat va fitrat)",
    summary: "Poklik iymonning yarmi.",
    why: [
      "Payg‘ambar ﷺ poklik iymonning yarmi, degan (Muslim 223). Alloh tavba qiluvchilarni va pok bo‘luvchilarni sevadi (Qur’on 2:222).",
      "Alloh go‘zal va go‘zallikni sevadi (Muslim 91). Poklik namozning sharti hamdir: usiz namoz to‘g‘ri bo‘lmaydi.",
    ],
    how: [
      "Fitratning besh sunnati: tirnoq olish, mo‘ylovni qisqartirish, qo‘ltiq tukini olish, qov tukini olish va o‘g‘il bolalar uchun xatna (Buxoriy 5889, Muslim 257). Ularni 40 kundan ortiq qoldirma (Muslim 258).",
      "Misvok ishlat yoki tish yuv, ayniqsa namozdan oldin (Buxoriy 887).",
      "Hojatxonadan keyin suv bilan yaxshilab tozalan, tanada yoki kiyimda siydik qolmasin.",
      "Tahoratni diqqat bilan ol, juma kuni (Buxoriy 879) va kerak bo‘lganda g‘usl qil.",
      "Toza, ozoda kiyim kiy va yoqimli hid sep, ayniqsa masjidda.",
      "Masjidga xom sarimsoq yoki piyoz hidi bilan kelma; farishtalar odamlarni bezovta qiladigan narsadan bezovta bo‘ladi (Muslim 564).",
    ],
    benefits: {
      spiritual: "To‘g‘ri namozlar, Allohning muhabbatiga yaqinlik va U bizni yaratgan fitrat bo‘yicha yashash.",
      health: "Qo‘l yuvish va og‘iz gigiyenasi infeksiya, milk kasalligi va og‘iz hidining oldini olishning eng samarali usullaridandir.",
      social: "Odamlar pokiza, yoqimli inson yonida o‘zini qulay his qiladi va bu musulmonlar haqida yaxshi taassurot qoldiradi.",
    },
    lose: {
      spiritual: "Poklik bo‘lmasa, namoz botil bo‘lishi mumkin. Payg‘ambar ﷺ siydikdan ehtiyot bo‘lmaslik qabr azobiga sabab bo‘lishidan ogohlantirgan (Buxoriy 216). Islom poklikka jiddiy qaraydi; maqsad xavotir emas, e’tibor.",
      health: "Gigiyenaning yomonligi infeksiya, teri muammolari, tish chirishi va kasallikning oilaga tarqalish xavfini oshiradi.",
      social: "Yomon hid yoki iflosgarchilik odamlarni uyda, ishda va masjidda uzoqlashtirishi mumkin.",
    },
    practice: {
      challenge: "7 kun davomida: har namozdan oldin tish yuv yoki misvok ishlat, tirnoqlaring va fitrat sunnatlarini tekshir.",
      reflection: "Bu hafta qaysi gigiyena odatimni yaxshilamoqchiman?",
    },
    quiz: [
      { q: "Poklik…", options: ["Ixtiyoriy", "Iymonning yarmi", "Faqat namoz uchun", "Faqat juma uchun"], why: "Poklik iymonning yarmidir." },
      { q: "Qaysi biri fitratning besh sunnatidan EMAS?", options: ["Tirnoq olish", "Mo‘ylovni qisqartirish", "Sochni bo‘yash", "Qo‘ltiq tukini olish"], why: "Beshtasi: xatna, qov tuki, mo‘ylov, tirnoq va qo‘ltiq tuki." },
      { q: "Nimadan ehtiyot bo‘lmaslik qabr azobiga sabab bo‘lishidan ogohlantirilgan?", options: ["Ovqat", "Siydik", "Kiyim", "Soch"], why: "Siydikdan saqlanmaslik." },
      { q: "Nega xom sarimsoq yoki piyoz yegandan keyin masjidga bormaslik kerak?", options: ["Bu harom ovqat", "Farishtalar odamlarni bezovta qiladigan narsadan bezovta bo‘ladi", "Tahoratni buzadi", "Sababi yo‘q"], why: "Hid ketguncha uzoqroq tur." },
      { q: "Har hafta qaysi kuni g‘usl ta’kidlangan?", options: ["Dushanba", "Juma", "Yakshanba", "Hech qachon"], why: "Juma kuni g‘usl." },
      { q: "Alloh go‘zal va … sevadi", options: ["boylikni", "go‘zallikni", "sukunatni", "kuchni"], why: "Alloh go‘zal va go‘zallikni sevadi." },
    ],
    stories: [],
    rewards: [{ title: "Tahorat gunohlarni yuvadi", measure: "Gunohlar oxirgi suv tomchisi bilan ketadi", picture: "Mo‘min yuzini yuvganda, ko‘zlari qaragan har bir gunoh suv bilan yoki oxirgi suv tomchisi bilan ketadi; qo‘llari va oyoqlari ham shunday, oxiri u gunohlardan pok bo‘lib chiqadi (Muslim 244). Kuniga besh tahorat qalbni besh marta yuvishdir." }],
  },

  eating: {
    title: "Ovqatlanish va ichish odobi",
    summary: "Har bir taomni shukrga aylantirish.",
    why: [
      "Payg‘ambar ﷺ bir bolaga dedi: Bismillah de, o‘ng qo‘ling bilan ye va o‘z oldingdan ye (Buxoriy 5376).",
      "Alloh aytadi: yenglar, ichinglar, lekin isrof qilmanglar; U isrof qiluvchilarni sevmaydi (Qur’on 7:31).",
    ],
    how: [
      "Qo‘llaringni yuv va Bismillah de. Unutib qo‘ysang, Bismillahi avvalahu va oxirahu de (Abu Dovud 3767).",
      "O‘ng qo‘l bilan, o‘tirgan holda, o‘zingga yaqin taomdan ye va ich.",
      "Oshqozonning uchdan birini ovqatga, uchdan birini ichimlikka to‘ldir, uchdan birini nafas uchun qoldir (Termiziy 2380).",
      "Idishga nafas olma va puflama (Buxoriy 153).",
      "Hech qachon taomni ayblama: yoqsa ye, yoqmasa qoldir (Buxoriy 3563).",
      "Likopchangdagini oxirigacha ye va barmoqlaringni yala; baraka qayerdaligini bilmaysan (Muslim 2033).",
      "Ovqatdan keyin Allohga hamd ayt.",
    ],
    recitations: [{ label: "Ovqatdan keyin", r: { en: "Meni bu bilan to‘ydirgan va mening kuch-quvvatimsiz rizq qilib bergan Allohga hamd bo‘lsin." } }],
    benefits: {
      spiritual: "Taomdagi baraka va har kungi shukr odati.",
      health: "Sekin va me’yorida ovqatlanish hazmga va vaznni nazorat qilishga yordam beradi.",
      social: "Bo‘lishish va dasturxon odobi oilaviy taomlarni iliq va hurmatli qiladi.",
    },
    lose: {
      spiritual: "Allohning nomi zikr qilinmasa, shayton taomga sherik bo‘ladi (Muslim 2017) va baraka yo‘qoladi.",
      health: "Ortiqcha va shoshib ovqatlanish hazm va sog‘liqqa zarar beradi.",
      social: "Taomni ayblash yoki isrof qilish uni tayyorlaganlarni xafa qiladi.",
    },
    practice: {
      challenge: "7 kun davomida: har taomda Bismillah va ovqatdan keyingi duoni ayt, likopchangda hech narsa qoldirma.",
      reflection: "Bugun dasturxonimdagi qaysi ne’matni payqadim?",
    },
    quiz: [
      { q: "Payg‘ambar ﷺ dasturxonda bolaga qaysi uch narsani o‘rgatdi?", options: ["Tez ye, ko‘p ye, yolg‘iz ye", "Bismillah, o‘ng qo‘l, o‘z oldingdan", "Tur, gapir, ket", "Tuz, suv, non"], why: "Dasturxon odobining birinchi saboqi." },
      { q: "Boshida Bismillahni unutsang, nima deysan?", options: ["Hech narsa", "Bismillahi avvalahu va oxirahu", "Alhamdulillah", "Astag‘firulloh"], why: "Boshida ham, oxirida ham Allohning nomi bilan." },
      { q: "Oshqozon qanday taqsimlanishi kerak?", options: ["Hammasi ovqat", "Uchdan bir ovqat, uchdan bir ichimlik, uchdan bir nafas", "Yarmi va yarmi", "Qoida yo‘q"], why: "Ovqatlanishda me’yor." },
      { q: "Payg‘ambar ﷺ yoqtirmagan taomni nima qilardi?", options: ["Ayblardi", "Ayblamay qoldirardi", "Tashlab yuborardi", "Oshpazga shikoyat qilardi"], why: "U hech qachon taomni ayblamagan." },
      { q: "Nega barmoqlarni yalab, likopchani tozalash kerak?", options: ["Bu odat", "Baraka qayerdaligini bilmaysan", "Yuvishni tejash uchun", "Sababi yo‘q"], why: "Baraka oxirgi luqmada bo‘lishi mumkin." },
      { q: "Taomda Allohning nomi zikr qilinmasa…", options: ["Hech narsa bo‘lmaydi", "Shayton taomga sherik bo‘ladi", "Taom mazaliroq bo‘ladi", "Hech qisi yo‘q"], why: "Bismillah taomni himoya qiladi." },
    ],
    stories: [{ title: "Qo‘li tovoqda kezgan bola", scene: "Kichkina bola Umar ibn Abu Salama Payg‘ambar ﷺ ning uyida o‘gay o‘g‘il sifatida o‘sdi.", story: [
      "Dasturxonda uning qo‘li tovoqning hamma tomoniga borardi.",
      "Payg‘ambar ﷺ uni koyimadi. U muloyimlik bilan dedi: “Yigitcha, Allohning ismini ayt, o‘ng qo‘ling bilan ye va o‘z oldingdan ye.”",
      "Umar katta bo‘lgach: “Shundan keyin ovqatlanishim doim shunday bo‘lib qoldi”, dedi.",
    ], lesson: "Mehribonlik bilan aytilgan uchta qisqa ko‘rsatma bolaning odobini bir umrga shakllantirdi. Bolalar odobni shunday o‘rganadi.", check: {
      q: "Payg‘ambar ﷺ bolaga qaysi uch narsani o‘rgatdi?", options: ["Tez ye, ko‘p ye, erta ket", "Bismillah, o‘ng qo‘l, o‘z oldingdan", "Tur, gapir, bo‘lish", "Yuv, o‘tir, uxla"], why: "Dasturxon odobining asosi.",
    } }],
    rewards: [{ title: "Ovqatdan keyingi duo", measure: "O‘tgan gunohlar kechiriladi", picture: "Kim ovqatlanib, “Alhamdu lillahillaziy at’amaniy haza va rozaqoniyhi min g‘oyri havlin minniy va la quvvah” desa, o‘tgan gunohlari kechiriladi (Abu Dovud 4023). Yangi kiyim kiyganda ham shunday deyiladi. Kuniga uch mahal ovqat uchta imkoniyatdir." }],
  },

  salam: {
    title: "Salom berish",
    summary: "Jannat ahlining salomi.",
    why: [
      "Payg‘ambar ﷺ aytgan: iymon keltirmaguningizcha jannatga kirmaysiz, bir-biringizni sevmaguningizcha iymon keltirmaysiz. Sizlarga bir-biringizni sevadigan qiladigan narsani aytaymi? O‘rtangizda salomni yoying (Muslim 54).",
      "Sizga salom berilsa, undan yaxshiroq yoki hech bo‘lmasa o‘shanday javob qaytaring (Qur’on 4:86).",
    ],
    how: [
      "“Assalomu alaykum va rahmatullohi va barokatuh” de; har bir qismi savob qo‘shadi, o‘ttiz yaxshilikkacha (Abu Dovud 5195).",
      "Kichik kattaga, yurgan o‘tirganga, oz guruh ko‘p guruhga salom beradi (Buxoriy 6231, 6234).",
      "“Va alaykumus salom va rahmatullohi va barokatuh” deb javob ber. Javob qaytarish vojib.",
      "Taniganlarga ham, tanimaganlarga ham salom ber (Buxoriy 12).",
      "Uyga kirganda oilangga salom ber.",
      "Bir jinsdagi odamlar bilan qo‘l berib ko‘rish; ajralganingizda gunohlar to‘kiladi (Abu Dovud 5212).",
    ],
    benefits: {
      spiritual: "Har bir salomda savob va mo‘minlar orasidagi muhabbat orqali jannatga yo‘l.",
      social: "Salom sovuqlikni yo‘qotadi, qalblarni yumshatadi va oila hamda mahallada ishonch quradi.",
    },
    lose: {
      spiritual: "Kuniga ko‘p marta oson savoblardan mahrum bo‘lamiz.",
      social: "Yonma-yon yashab, namoz o‘qiydigan odamlar orasida sovuqlik va uzoqlik o‘sadi.",
    },
    practice: {
      challenge: "Bugun: uchragan har bir kishiga, uyda ham, birinchi bo‘lib salom ber.",
      reflection: "Birinchi bo‘lib salom berganimda odamlar qanday javob qaytardi?",
    },
    quiz: [
      { q: "Payg‘ambar ﷺ mo‘minlarni bir-birini sevadigan qiladigan narsa nima, degan?", options: ["Faqat sovg‘alar", "Salomni yoyish", "Sukunat", "Boylik"], why: "O‘rtangizda salomni yoying." },
      { q: "Salom berish sunnat. Unga javob qaytarish…", options: ["Ixtiyoriy", "Vojib", "Makruh", "Faqat kattalar uchun"], why: "Alloh salomga yaxshiroq yoki teng javob qaytarishni buyuradi (4:86)." },
      { q: "Kim birinchi salom beradi: yurganmi yoki o‘tirgan?", options: ["O‘tirgan", "Yurgan", "Kim katta bo‘lsa", "Hech kim"], why: "Otliq piyodaga, piyoda o‘tirganga, oz ko‘pga, kichik kattaga." },
      { q: "Allohga kim eng yaqin?", options: ["Salomga kech javob qaytargan", "Birinchi salom bergan", "Hech qachon salom bermagan", "Faqat do‘stlariga salom bergan"], why: "Salomni birinchi boshlagan." },
      { q: "Salomning to‘liqroq shakli qanday?", options: ["Salom", "Assalomu alaykum va rahmatullohi va barokatuh", "Salom-alik", "Xayrli kun"], why: "To‘liq salom eng ko‘p savob keltiradi." },
      { q: "Tanimagan odamlarga salom berish kerakmi?", options: ["Yo‘q", "Ha, taniganga ham, tanimaganga ham salom ber", "Faqat arablarga", "Faqat masjidda"], why: "Islomning eng yaxshi amallaridan." },
    ],
    stories: [{ title: "Birinchi salom", scene: "Payg‘ambar ﷺ Alloh Odamni (a.s.) yaratgan lahza haqida aytib berdi.", story: [
      "Alloh Odamga dedi: borib, ana u yerda o‘tirgan farishtalar jamoasiga salom ber va ular qanday javob qaytarishlarini tingla, chunki bu sening va farzandlaringning salomi bo‘ladi.",
      "Odam: “Assalomu alaykum”, dedi. Farishtalar: “Assalomu alayka va rahmatulloh”, deb javob berishdi. Ular “va rahmatulloh”ni qo‘shishdi.",
    ], lesson: "Salom insoniyatning eng qadimgi salomi, uni Alloh birinchi insonga o‘rgatgan. Salom berganingda, Odam boshlagan ishni davom ettirasan, farishtalardek esa ziyoda qilib javob qaytarasan.", check: {
      q: "Birinchi bo‘lib kim “Assalomu alaykum” deb salom bergan?", options: ["Madinada Payg‘ambar ﷺ", "Odam (a.s.), farishtalarga", "Ibrohim (a.s.)", "Sahobalar"], why: "Alloh uni Odamga farzandlarining salomi sifatida o‘rgatgan.",
    } }],
    rewards: [{ title: "Har bir salom hisobga olinadi", measure: "10 · 20 · 30 yaxshilik", picture: "Bir kishi “Assalomu alaykum” dedi, Payg‘ambar ﷺ: o‘n, dedi. Boshqasi “va rahmatulloh”ni qo‘shdi: yigirma. Yana biri “va barokatuh”ni qo‘shdi: o‘ttiz (Abu Dovud 5195). Kuniga o‘n marta to‘liq salom berish bir necha soniyalik so‘z uchun 300 yaxshilikdir." }],
  },

  parents: {
    title: "Ota-onaga yaxshilik (birrul volidayn)",
    summary: "Allohga ibodatdan keyingi ikkinchi o‘rinda.",
    why: [
      "Alloh bitta oyatda faqat Unga ibodat qilishni va ota-onaga yaxshilikni buyuradi. Ularga hatto “uf” dema va ularga kamtarlik qanotini pastlat (Qur’on 17:23–24).",
      "Yaxshi muomalaga eng haqli kim, deb so‘ralganda Payg‘ambar ﷺ: onang, uch marta, keyin otang, degan (Buxoriy 5971).",
      "Allohning roziligi ota-onaning roziligidadir (Termiziy 1899).",
    ],
    how: [
      "Muloyim gapir va ularga hech qachon ovozingni ko‘tarma.",
      "Chaqirganlarida javob ber va so‘ramasdan yordam ber.",
      "Ayniqsa keksayganlarida tez-tez qo‘ng‘iroq qil yoki ziyorat qil.",
      "Ulardan maslahat so‘ra va ularga rahmat ayt.",
      "Ular tirik bo‘lsin yoki vafot etgan bo‘lsin, har namozda ular uchun duo qil.",
    ],
    recitations: [{ label: "Ota-ona uchun duo", r: { en: "Robbim, ular meni kichikligimda tarbiyalaganlaridek, Sen ham ularga rahm qil." } }],
    benefits: {
      spiritual: "Allohning roziligi va Unga eng sevimli amallardan biri (Buxoriy 527).",
      social: "Hurmat va iliqlikka to‘la uy va qarab turib mehribonlikni o‘rganadigan bolalar.",
    },
    lose: {
      spiritual: "Ota-onaga oq bo‘lish katta gunohlardandir (Buxoriy 5976).",
      social: "Keyin tuzatish qiyin bo‘lgan ranjishlar va uzoqlik.",
    },
    practice: {
      challenge: "Bu hafta: har bir ota-onang uchun so‘ramasdan bitta ish qil va har namozdan keyin ular uchun duo qil.",
      reflection: "Ota-onam men uchun qilgan qaysi fidoyilik uchun ularga hech rahmat aytmaganman?",
    },
    quiz: [
      { q: "17:23 da ota-onaga yaxshilik nimadan keyin keladi?", options: ["Ro‘zadan", "Yolg‘iz Allohga ibodatdan", "Hajdan", "Zakotdan"], why: "Faqat Unga ibodat qilinglar va ota-onaga yaxshilik qilinglar." },
      { q: "Ota-onaga qaysi so‘zni hatto aytmaslik kerak?", options: ["Salom", "Uf", "Rahmat", "Iltimos"], why: "Hatto norozilik xo‘rsinig‘ini ham." },
      { q: "Yaxshi muomalaga eng haqli kim?", options: ["Do‘sting", "Onang, keyin onang, keyin onang, keyin otang", "Ustozing", "Qo‘shning"], why: "Ona uch marta, keyin ota." },
      { q: "Ota-onamiz uchun qaysi duoni qilamiz?", options: ["Robbirhamhuma kama robbayaniy sog‘iyro", "Robbana atina", "Subhanalloh", "Bismillah"], why: "Robbim, ular meni kichikligimda tarbiyalaganlaridek, ularga rahm qil." },
      { q: "Agar ota-ona gunoh ishni buyursa…", options: ["Baribir itoat qil", "Bunda itoat qilma, lekin baribir ularga mehribon bo‘l", "Aloqani uz", "Ularga baqir"], why: "Gunohda itoat yo‘q, lekin yaxshi muomala qoladi (31:15)." },
      { q: "Ota-onaga oq bo‘lish…", options: ["Kichik masala", "Katta gunohlardan", "Katta bo‘lganda joiz", "Ular nohaq bo‘lsa, mayli"], why: "Eng katta gunohlar qatorida sanalgan." },
    ],
    stories: [{ title: "Umar izlagan kishi, Uvays al-Qaraniy", scene: "Payg‘ambar ﷺ Umarga o‘zi hech qachon ko‘rmaydigan bir kishi haqida aytib berdi.", story: [
      "“Senga Yamandan keladigan yordamchi qo‘shin bilan Murod qabilasining, keyin Qaran urug‘ining Uvays degan kishisi keladi. Uning pes kasalligi bo‘lgan va dirhamdek bir joydan tashqari tuzalgan. Uning onasi bor, u onasiga juda mehribon. Agar u Allohga qasam ichsa, Alloh uni ro‘yobga chiqaradi. Agar undan sen uchun mag‘firat so‘rashini so‘ray olsang, shunday qil.”",
      "Uvays Payg‘ambar ﷺ ni hech qachon ko‘rmagan. U onasiga qarash uchun Yamanda qolgan edi.",
      "Yillar o‘tib, xalifa bo‘lgan Umar Yamandan kelgan har bir guruhdan so‘radi: orangizda Uvays ibn Omir bormi? Nihoyat uni topdi, har bir belgini tekshirdi va undan so‘radi: men uchun mag‘firat so‘ra. Uvays shunday qildi.",
    ], lesson: "Uvays onasini tashlab ketmagani uchun sahobalik sharafidan mahrum bo‘ldi, Payg‘ambar ﷺ esa odamlarning eng ulug‘iga uning duosini so‘rashni buyurdi.", check: {
      q: "Payg‘ambar ﷺ so‘zlarida Uvaysni nima bunchalik yuksaltirdi?", options: ["Boyligi", "Onasiga sadoqati", "She’riyati", "Janglari"], why: "Onasiga mehribonligi uning duosini ijobat qildi.",
    } }],
    rewards: [{ title: "Ota-onang jannat eshigi", measure: "Jannatning o‘rta eshigi", picture: "“Ota jannatning o‘rta eshigidir; uni saqla yoki yo‘qot” (Termiziy 1900). Jannat onangning oyog‘i ostida (Nasoiy 3104). Ota-onaga yaxshilik vaqtida o‘qilgan namozdan keyin Allohga eng sevimli amallardandir (Buxoriy 527)." }],
  },

  promises: {
    title: "Va’da va omonatga vafo (amonat)",
    summary: "Mo‘minning so‘zi ahd, har bir omonat esa so‘raladi.",
    why: [
      "Alloh najot topgan mo‘minlarni “omonatlari va ahdlariga rioya qiluvchilar” deb vasflaydi (Qur’on 23:8). “Ahdga vafo qilinglar; ahd so‘raladi” (17:34).",
      "Munofiqning belgisi uchta: gapirsa yolg‘on gapiradi, va’da bersa buzadi, omonat berilsa xiyonat qiladi (Buxoriy 33). “Alloh sizlarga omonatlarni egalariga topshirishni buyuradi” (4:58).",
    ],
    how: [
      "Faqat qo‘lingdan keladigan narsani va’da qil va va’da berayotganda “inshaalloh” de (18:23–24).",
      "Uchrashuvlarga rioya qil va vaqtida kel.",
      "Olgan narsalarni vaqtida va yaxshi holatda qaytar.",
      "Sirni saqla: kimdir senga biror gapni aytib, kim eshitayotganini bilish uchun atrofga qarasa, bu omonatdir (Abu Dovud 4868).",
      "Ishingni to‘liq bajar. Ishing, ish vaqting va ish beruvchining mulki omonatdir.",
      "Qarzni vaqtida to‘la; to‘lashga qodir bo‘la turib kechiktirish zulmdir (Buxoriy 2287).",
      "Agar va’dangni chindan ham bajara olmasang, odamga oldindan ayt va uzr so‘ra.",
    ],
    benefits: {
      spiritual: "Sen payg‘ambarlar va najot topgan mo‘minlarning sifatini o‘zingda olib yurasan (23:8).",
      social: "Odamlar so‘zingga ishonadi, jamiyatlar esa shu ishonch ustida turadi.",
    },
    lose: {
      spiritual: "Va’dani buzish va omonatga xiyonat qilish munofiqlik belgilaridir (Buxoriy 33).",
      social: "Buzilgan va’da do‘stlik, ish va hurmatni yo‘qotadi.",
    },
    practice: {
      challenge: "Hozir zimmangdagi barcha va’da va qarzlarni ro‘yxatga ol. Bu hafta har kuni bittasini bajar yoki uz.",
      reflection: "Qaysi va’damni kechiktirib yuribman va meni nima to‘xtatyapti?",
    },
    quiz: [
      { q: "Munofiqning uchta belgisi qaysilar?", options: ["Ro‘za, namoz, sadaqa", "Yolg‘on, va’dani buzish, omonatga xiyonat", "Safar, ovqat, uyqu", "Kulish, hazil, o‘yin"], why: "Gapirsa yolg‘on gapiradi, va’da bersa buzadi, omonat berilsa xiyonat qiladi." },
      { q: "Kelajak uchun va’da berayotganda nima deyish kerak?", options: ["Hech narsa", "Inshaalloh", "Balki", "Hech qachon"], why: "Alloh kelajak rejalar uchun “agar Alloh xohlasa” deyishni o‘rgatgan." },
      { q: "To‘lashga qodir bo‘la turib qarzni kechiktirish…", options: ["Aqllilik", "Zulm", "Tavsiya etiladi", "Saxovat"], why: "Boyning kechiktirishi zulmdir." },
      { q: "Kimdir senga aytgan sir…", options: ["Bemalol aytish mumkin", "Omonat", "G‘iybat uchun material", "Faqat oila uchun"], why: "Kimdir biror gapni aytib, atrofga qarasa, bu omonatdir." },
      { q: "Qaysi oyat omonatlarni egalariga qaytarishni buyuradi?", options: ["4:58", "2:2", "36:1", "114:1"], why: "“Alloh sizlarga omonatlarni egalariga topshirishni buyuradi.”" },
      { q: "Ish vaqti omonatning bir qismimi?", options: ["Yo‘q", "Ha, ishing va vaqting omonat", "Faqat rahbarlar uchun", "Faqat juma kunlari"], why: "Ishingni to‘liq bajarish omonatga vafo qilishdir." },
    ],
    stories: [{ title: "Hijrat kechasi qoldirilgan omonatlar", scene: "Makka, Payg‘ambar ﷺ Madinaga yo‘l olgan kecha. Quraysh uni o‘ldirmoqchi bo‘lib, uyini o‘rab olgan edi.", story: [
      "Hatto uning da’vatini rad etgan Quraysh odamlari ham qimmatbaho narsalarini unda saqlashardi, chunki ular uni al-Amin, ya’ni ishonchli deb bilishardi.",
      "O‘sha kechasi u Alidan (r.a.) yashil ridosi ostida o‘z to‘shagida yotishni va Makkada uch kun qolishni so‘radi.",
      "Alining vazifasi: har bir omonatni egasiga, aynan Payg‘ambar ﷺ ni o‘ldirmoqchi bo‘lgan odamlarning o‘ziga qaytarish edi. Shu ish bitgandan keyingina Ali uning ortidan Madinaga yo‘l oldi.",
    ], lesson: "Omonat hatto dushmanga ham qaytarilishi kerak. Sening amonating boshqalarning senga qanday muomala qilishiga bog‘liq emas.", check: {
      q: "Ali omonatlarni kimga qaytardi?", options: ["Faqat musulmonlarga", "Egalariga, jumladan Payg‘ambar ﷺ ga qarshi chiqqanlarga ham", "Kambag‘allarga", "Hech kimga"], why: "Omonatlar do‘stmi, dushmanmi, egalariga qaytariladi.",
    } }],
    rewards: [],
  },

  generosity: {
    title: "Saxovat va sadaqa",
    summary: "Sadaqa molni hech qachon kamaytirmaydi, hatto tabassum ham sadaqa.",
    why: [
      "Sadaqa molni kamaytirmaydi (Muslim 2588). Alloh yettita boshoq chiqargan, har bir boshog‘ida yuzta don bo‘lgan bitta donni misol qilib keltiradi (Qur’on 2:261).",
      "Payg‘ambar ﷺ odamlarning eng saxiysi edi, ayniqsa Ramazonda (Buxoriy 6). Har bir yaxshilik sadaqadir (Buxoriy 6021), birodaringga tabassum qilish ham sadaqadir (Termiziy 1956).",
    ],
    how: [
      "Oz bo‘lsa ham muntazam ber. Allohga eng sevimli amallar oz bo‘lsa ham eng doimiy bo‘lganlaridir (Buxoriy 6464).",
      "Oilang va qarindoshlaringdan boshla; oilangga sarflash sadaqadir (Buxoriy 55).",
      "Imkon bo‘lsa, yashirincha ber (Buxoriy 660).",
      "Faqat keraksiz narsadan emas, sevgan narsangdan ber (Qur’on 3:92).",
      "Bergan narsangni hech qachon odamlarning yuziga solma va u bilan ozor berma (Qur’on 2:264).",
      "Faqat pul bilan emas, vaqt, ilm, yordam va tabassum bilan ham saxiy bo‘l.",
      "Hatto yarim xurmo bilan bo‘lsa ham o‘zingni do‘zaxdan saqla (Buxoriy 1417).",
    ],
    benefits: {
      spiritual: "Sadaqa gunohlarni suv olovni o‘chirgandek o‘chiradi (Termiziy 614) va molga baraka olib keladi.",
      social: "Berish muhabbat quradi, boy va kambag‘al orasidagi farqni qisqartiradi va jamiyatni mustahkamlaydi.",
    },
    lose: {
      spiritual: "Baxillik o‘tgan ummatlarni halok qilgan (Muslim 2578), yig‘ib qo‘yilgan mol esa Qiyomat kunida yuk bo‘ladi.",
      social: "Baxillarni odamlar yoqtirmaydi va ularning molidan baraka ketadi.",
    },
    practice: {
      challenge: "7 kun davomida har kuni biror narsa ber: pul, ovqat, yordam yoki tabassum. Kamida bittasini yashirincha qil.",
      reflection: "Menga nimani berish eng qiyin: pulnimi, vaqtnimi yoki kechirimnimi?",
    },
    quiz: [
      { q: "Sadaqa molni kamaytiradimi?", options: ["Ha", "Yo‘q, sadaqa molni kamaytirmaydi", "Faqat katta miqdorlar", "Faqat juma kunlari"], why: "Sadaqa molni hech qachon kamaytirmaydi." },
      { q: "Birodaringga tabassum qilish…", options: ["Hech narsa", "Sadaqa", "Riyo", "Makruh"], why: "Birodaringning yuziga tabassuming sadaqadir." },
      { q: "Payg‘ambar ﷺ qachon eng saxiy bo‘lardi?", options: ["Qishda", "Ramazonda", "Safarda", "To‘ylarda"], why: "U Ramazonda eng saxiy edi." },
      { q: "Allohga qaysi amallar eng sevimli?", options: ["Eng kattalari", "Oz bo‘lsa ham eng doimiylari", "Eng ochiqlari", "Eng qimmatlari"], why: "Alloh doimiylikni sevadi." },
      { q: "Sadaqa savobini nima buzadi?", options: ["Yashirincha berish", "Uni yuzga solish va ozor berish", "Oz berish", "Oilaga berish"], why: "Sadaqangizni minnat va ozor bilan bekor qilmang." },
      { q: "O‘z oilangga sarflash sadaqami?", options: ["Yo‘q", "Ha, savob umidida qilinsa", "Faqat ota uchun", "Faqat Ramazonda"], why: "Kishining savob umidida oilasiga sarflashi sadaqadir." },
    ],
    stories: [{ title: "O‘chirilgan chiroq", scene: "Madina, ilk yillar. Payg‘ambar ﷺ ning oldiga och bir kishi keldi.", story: [
      "Payg‘ambar ﷺ ayollariga odam yubordi, har biri javob berdi: bizda suvdan boshqa hech narsa yo‘q. Shunda u so‘radi: “Bu kishini bu kecha kim mehmon qiladi?” Ansorlardan bir kishi: “Men”, dedi.",
      "Uyda ayoli dedi: bizda bolalarimizning ovqatidan boshqa hech narsa yo‘q. U dedi: ularni biror narsa bilan chalg‘it, kechki ovqat so‘rasalar, uxlatib qo‘y.",
      "Mehmon kirganda, ayol go‘yo tasodifan chiroqni o‘chirib qo‘ydi, er-xotin esa mehmon ularning ovqatini olayotganini sezmay to‘yib yeyishi uchun qorong‘ida go‘yo yeyayotgandek qo‘llari va og‘izlarini qimirlatib o‘tirishdi. Ular och holda yotishdi.",
      "Ertalab Payg‘ambar ﷺ dedi: “Kecha mehmoningizga qilgan ishingizdan Alloh rozi bo‘ldi.” Alloh nozil qildi: “Garchi o‘zlari muhtoj bo‘lsalar ham, boshqalarni o‘zlaridan ustun qo‘yadilar” (59:9).",
    ], lesson: "Eng oliy saxovat isordir: o‘zing muhtoj bo‘lgan narsani berish va boshqaning izzati saqlanishi uchun buni yashirish.", check: {
      q: "Er-xotin nega chiroqni o‘chirishdi?", options: ["Yog‘ni tejash uchun", "Mehmon ularda ovqat yo‘qligini bilmay yeyishi uchun", "Charchagan edilar", "Bu odat edi"], why: "Ular mehmonning qulayligi va izzatini himoya qilishdi.",
    } }],
    rewards: [
      { title: "O‘sadigan sadaqa", measure: "1 → 700, Alloh xohlaganiga yana ko‘paytiradi", picture: "Alloh O‘z yo‘lida sarflashni yettita boshoq chiqargan, har bir boshog‘ida yuzta don bo‘lgan bitta donga o‘xshatadi (2:261). Bitta tanga ber, seni yetti yuztasi kutayotgan bo‘lishi mumkin. Har bir yaxshilik o‘ndan yetti yuz baravargacha yoziladi, yomonlik esa faqat bitta yoziladi (Buxoriy 6491)." },
      { title: "Sadaqa gunohlarni o‘chiradi", measure: "Olovga quyilgan suvdek", picture: "Sadaqa gunohni suv olovni o‘chirgandek o‘chiradi (Termiziy 614), hatto yarim xurmo bilan bo‘lsa ham o‘zingizni do‘zaxdan saqlang (Buxoriy 1417). Kichik bir tanga katta olovni o‘chirishi mumkin." },
    ],
  },

  "young-old": {
    title: "Kichiklarga rahm, kattalarga hurmat",
    summary: "Kichiklarimizga rahm qilmagan va kattalarimizni hurmat qilmagan bizdan emas.",
    why: [
      "“Kichiklarimizga rahm qilmagan va kattalarimizni hurmat qilmagan bizdan emas” (Termiziy 1919).",
      "Keksa musulmonni hurmat qilish Allohni ulug‘lashning bir qismidir (Abu Dovud 4843). Payg‘ambar ﷺ nevaralarini o‘pib: kim rahm qilmasa, unga rahm qilinmaydi, degan (Buxoriy 5997).",
    ],
    how: [
      "Kattalarga birinchi salom ber, ularni kutib olish uchun o‘rningdan tur va ularga eng yaxshi joyni ber.",
      "Kattalar birinchi gapirsin va ularning so‘zini bo‘lmay tingla (Buxoriy 6142).",
      "Ularning ehtiyojlariga yordam ber, bobo-buvilar va keksa qo‘shnilarni ziyorat qil.",
      "Bolalar bilan: ularni quchoqla, o‘p, ular bilan o‘yna va ularga salom ber (Buxoriy 6247).",
      "Bolalarning xatolariga sabrli bo‘l va ularni muloyimlik bilan tuzat.",
      "Hech qachon bolaga baqirma yoki uni xo‘rlama, ayniqsa boshqalar oldida.",
      "Bolalarga faqat narsalar emas, vaqt, e’tibor va yaxshi o‘rnak ber.",
    ],
    benefits: {
      spiritual: "Boshqalarga rahm qilish senga Allohning rahmatini olib keladi (Termiziy 1924).",
      social: "Bolalar o‘ziga ishongan va mehribon bo‘lib o‘sadi; kattalar qadrlanganini his qiladi va avlodlar bog‘langan bo‘lib qoladi.",
    },
    lose: {
      spiritual: "“Bizdan emas” bunga e’tiborsizlik qilganlar uchun jiddiy ogohlantirishdir.",
      social: "Qo‘pollik bolalarni uzoqlashtiradi, e’tiborsiz qolgan kattalar esa o‘zini yolg‘iz va unutilgandek his qiladi.",
    },
    practice: {
      challenge: "Bu hafta: keksa qarindoshingga qo‘ng‘iroq qil yoki uni ziyorat qil va har kuni bola bilan 15 daqiqa chalg‘imasdan o‘yna yoki gaplash.",
      reflection: "Bola bo‘lganimda va keksayganimda menga qanday muomala qilinishini xohlardim?",
    },
    quiz: [
      { q: "Termiziy 1919 ga ko‘ra kim “bizdan emas”?", options: ["Kambag‘al kishi", "Kichiklarga rahm qilmagan yoki kattalarni hurmat qilmagan", "Safar qilgan", "Uyatchan"], why: "Kichiklarga rahm va kattalarga hurmat ummatning belgisidir." },
      { q: "Payg‘ambar ﷺ bolalarini hech o‘pmagan kishiga nima dedi?", options: ["Barakalla", "Kim rahm qilmasa, unga rahm qilinmaydi", "Bu kuch", "Hech narsa"], why: "U Hasanni o‘pib, rahmni o‘rgatdi." },
      { q: "Majlisda kim birinchi gapirishi kerak?", options: ["Eng kichigi", "Eng kattasi", "Eng baland ovozlisi", "Eng boyi"], why: "“Katta gapirsin, katta.”" },
      { q: "Payg‘ambar ﷺ bolalarga salom berarmidi?", options: ["Yo‘q", "Ha, u bolalarga salom berardi", "Faqat o‘z bolalariga", "Faqat hayitda"], why: "Anas uning bolalarga salom berganini rivoyat qilgan." },
      { q: "Keksa musulmonni hurmat qilish nimaning bir qismi?", options: ["Riyoning", "Allohni ulug‘lashning", "Faqat madaniyatning", "Hech narsaning"], why: "Bu Allohni ulug‘lashning bir qismi." },
      { q: "Bolaning xatosini qanday tuzatish kerak?", options: ["Hammaning oldida va qattiq", "Muloyimlik va sabr bilan", "Hech qachon", "Baqirib"], why: "Muloyimlik har narsani ziynatlaydi (Muslim 2594)." },
    ],
    stories: [{ title: "O‘pish va o‘nta bola", scene: "Payg‘ambar ﷺ nevarasi Hasanni ko‘tarib, uni o‘pdi.", story: [
      "Uning yonida qabila boshlig‘i Aqra’ ibn Hobis o‘tirgan edi. U dedi: “Mening o‘nta bolam bor, ulardan birortasini ham hech o‘pmaganman.”",
      "Payg‘ambar ﷺ unga qarab dedi: “Kim rahm qilmasa, unga rahm qilinmaydi.”",
    ], lesson: "Bolalarga mehr ko‘rsatish zaiflik yoki izzatsizlik emas. Bu Alloh rahmat bilan mukofotlaydigan rahmdir.", check: {
      q: "Payg‘ambar ﷺ bolalarini hech o‘pmagan kishiga nima dedi?", options: ["“Bu sizning kuchingiz”", "“Kim rahm qilmasa, unga rahm qilinmaydi”", "“Bolalar sizdan qo‘rqishi kerak”", "Hech narsa"], why: "Bolalarga rahm Allohning rahmatini olib keladi.",
    } }],
    rewards: [{ title: "Jannatda Payg‘ambar ﷺ ning yonida", measure: "Ikki barmoqdek yaqin", picture: "“Men va yetimga qaragan kishi jannatda mana bunday bo‘lamiz”, deb u ko‘rsatkich va o‘rta barmog‘ini ozgina ochib ko‘rsatdi (Buxoriy 5304). Kim ikki qizni ular voyaga yetguncha tarbiyalasa, Qiyomat kunida u bilan mana shu ikki barmoqdek bo‘lib keladi (Muslim 2631)." }],
  },

  "family-ties": {
    title: "Silai rahm (qarindoshlik aloqalari)",
    summary: "Qarindoshlik rishtalari hayot va rizqqa baraka olib keladi.",
    why: [
      "Kim rizqining kengayishini va umrining barakali bo‘lishini xohlasa, silai rahm qilsin (Buxoriy 5986). Qarindoshlik aloqalarini uzgan kishi jannatga kirmaydi (Buxoriy 5984).",
      "Haqiqiy silai rahm qiluvchi ziyoratga javoban ziyorat qiluvchi emas, balki boshqalar aloqani uzganda uni qayta tiklovchidir (Buxoriy 5991).",
    ],
    how: [
      "Qarindoshlarni, ayniqsa ota-onaning aka-uka va opa-singillarini hamda bobo-buvilarni muntazam ziyorat qil.",
      "Ziyorat qila olmasang, qo‘ng‘iroq qil yoki xabar yoz.",
      "Sovg‘a ber va muhtoj qarindoshlarga yordam ber. Qarindoshga sadaqa ikki barobar hisoblanadi: sadaqa va silai rahm (Termiziy 658).",
      "Ularning quvonchlarida ham, qayg‘ularida ham ishtirok et.",
      "Janjaldan keyin birinchi bo‘lib yarash.",
      "Qarindoshlar uchun ismlarini aytib duo qil.",
      "O‘zingni zarardan himoya qilgan holda, qiyin qarindoshlar bilan ham aloqani saqla.",
    ],
    benefits: {
      spiritual: "Umr va rizqqa baraka, Alloh esa aloqani saqlagan bilan aloqasini saqlaydi (Buxoriy 5987).",
      social: "Kuchli oilaviy aloqalar og‘ir damlarda hammani qo‘llab-quvvatlaydi.",
    },
    lose: {
      spiritual: "Qarindoshlik aloqasini uzish jannatga to‘siq bo‘ladigan katta gunohdir (Buxoriy 5984).",
      social: "Oilalar begonalashib ketadi, bolalar esa qarindoshlarini tanimay o‘sadi.",
    },
    practice: {
      challenge: "Bu hafta: uzoq vaqtdan beri gaplashmagan uchta qarindoshing bilan bog‘lan.",
      reflection: "Qaysi qarindoshimdan qochib yuribman va nega?",
    },
    quiz: [
      { q: "Silai rahm nima olib keladi?", options: ["Hech narsa", "Kengaygan rizq va barakali umr", "Faqat muammolar", "Shuhrat"], why: "Kim rizqining kengayishini xohlasa, silai rahm qilsin." },
      { q: "Haqiqiy silai rahm qiluvchi kim?", options: ["Faqat ziyoratga javob qaytaruvchi", "Boshqalar uzganda aloqani tiklovchi", "Chaqirilishini kutuvchi", "Hech qachon ziyorat qilmaydigan"], why: "Silai rahm birinchi bo‘lib qo‘l cho‘zishdir." },
      { q: "Qarindoshlik aloqasini uzgan kishi…", options: ["Erkin", "Jannatga kirmaydi", "Hurmatli", "Dono"], why: "Jiddiy ogohlantirish." },
      { q: "Qarindoshga sadaqa qanday hisoblanadi?", options: ["Hech narsa", "Sadaqa va silai rahm, ikki barobar", "Yarim", "Riyo"], why: "U ham sadaqa, ham silai rahm." },
      { q: "Oilaviy janjaldan keyin eng yaxshi kishi…", options: ["Kutib turgan", "Birinchi yarashgan", "Yutgan", "Hech kim"], why: "Ikkisining yaxshisi birinchi salom berganidir (Buxoriy 6077)." },
      { q: "Qarindoshingni ziyorat qila olmasang…", options: ["Hech narsa qilmaysan", "Qo‘ng‘iroq qilasan, yozasan yoki sovg‘a yuborasan", "Uni unutasan", "Faqat hayitni kutasan"], why: "Aloqa har qanday yaxshi yo‘l bilan saqlanadi." },
    ],
    stories: [{ title: "“Go‘yo ularga issiq kul yediryapsan”", scene: "Bir kishi oilasidan ranjib, Payg‘ambar ﷺ ning oldiga keldi.", story: [
      "“Ey Allohning Rasuli, qarindoshlarim bor. Men ular bilan aloqa qilaman, ular esa uzishadi. Men ularga yaxshilik qilaman, ular menga yomonlik qilishadi. Men ularga sabr qilaman, ular menga qo‘pollik qilishadi.”",
      "Payg‘ambar ﷺ dedi: “Agar sen aytganingdek bo‘lsang, go‘yo ularga issiq kul yediryapsan va shunday davom etsang, ularga qarshi Allohdan doim senga bir yordamchi bo‘ladi.”",
    ], lesson: "Javob qaytarilmasa ham aloqani saqla. Og‘irlik uzganlar zimmasiga tushadi, Alloh esa saqlovchi bilan birga turadi.", check: {
      q: "Payg‘ambar ﷺ qiyin qarindoshlari bilan aloqani saqlagan kishiga nima va’da qildi?", options: ["Ular darhol o‘zgaradi", "Davom etsa, Allohdan bir yordamchi", "Endi to‘xtashi mumkin", "Hech narsa"], why: "Alloh silai rahm qiluvchini qo‘llab-quvvatlaydi.",
    } }],
    rewards: [{ title: "Silai rahm", measure: "Ko‘proq rizq va barakali umr", picture: "Kim rizqining kengayishini va umrining barakali bo‘lishini xohlasa, silai rahm qilsin (Buxoriy 5986). Bu oxiratdagi savobidan oldin bu dunyodagi ko‘proq daromad va to‘kisroq hayot bilan nomma-nom bog‘langan kam sonli amallardan biridir." }],
  },

  "good-opinion": {
    title: "Husni zon, aybni yopish, gumondan saqlanish",
    summary: "Odamlar haqida yaxshi o‘yla, josuslik qilma va ularning aybini yop.",
    why: [
      "“Ko‘p gumondan saqlaninglar; ba’zi gumon gunohdir. Josuslik qilmanglar va g‘iybat qilmanglar” (Qur’on 49:12). “Gumondan saqlaninglar, chunki gumon eng yolg‘on so‘zdir” (Buxoriy 6066).",
      "Kim musulmonning aybini yopsa, Alloh uning aybini bu dunyoda ham, oxiratda ham yopadi (Muslim 2699).",
    ],
    how: [
      "Odamlar uchun yaxshi uzr izla: balki ular band, charchagan yoki bilmagan bo‘lishgandir.",
      "Odamlarning telefonini tekshirma, xabarlarini o‘qima va shaxsiy hayotiga aralashma.",
      "Kimningdir xatosini ko‘rsang, yolg‘izda nasihat qil; uni oshkor qilma.",
      "Odamlarni sharmanda qiladigan skrinshotlar, yozuvlar yoki gaplarni tarqatma.",
      "Niyatlar haqida hukm chiqarma; qalblarni faqat Alloh biladi.",
      "Fikr bildirishdan oldin ikkala tomonni ham tingla.",
      "Allohga ham husni zon qil: Men bandamning Men haqimdagi gumoni oldidaman (Buxoriy 7405).",
    ],
    benefits: {
      spiritual: "Alloh boshqalarning aybini yopganlarning aybini yopadi.",
      social: "Ishonch o‘sadi, mish-mishlar so‘nadi va munosabatlar xavfsiz qoladi.",
    },
    lose: {
      spiritual: "Gumon va josuslik gunoh va ular ko‘pincha g‘iybatga olib boradi (49:12).",
      social: "Gumon oilalar, ish joylari va do‘stliklarni zaharlaydi.",
    },
    practice: {
      challenge: "7 kun davomida: kimdir haqida yomon o‘ylaganingda, u uchun uchta yaxshi uzr top.",
      reflection: "Alloh mening aybimni yopishini xohlaganim kabi kimning aybini yopishim kerak?",
    },
    quiz: [
      { q: "49:12 nimani man qiladi?", options: ["Savdoni", "Ko‘p gumon, josuslik va g‘iybatni", "Safarni", "Ovqatlanishni"], why: "Ba’zi gumon gunoh; josuslik va g‘iybat qilmang." },
      { q: "Gumon…", options: ["Donolik", "Eng yolg‘on so‘z", "Doim to‘g‘ri", "Tavsiya etiladi"], why: "Gumondan saqlaninglar, u eng yolg‘on so‘z." },
      { q: "Kim musulmonning aybini yopsa…", options: ["U yolg‘onchi", "Alloh uning aybini ikki dunyoda yopadi", "U sherik", "Hech narsa olmaydi"], why: "Aybni yopish uchun katta mukofot." },
      { q: "Do‘stingning xatosini ko‘rsang…", options: ["Internetga joylaysan", "Yolg‘izda nasihat qilasan", "Hammaga aytasan", "Ustidan kulasan"], why: "Yolg‘izda nasihat, ommada yopish." },
      { q: "Odamlarning haqiqiy niyatlarini kim biladi?", options: ["Do‘stlari", "Faqat Alloh", "Qo‘shnilari", "Hamma"], why: "Biz zohirga qarab hukm qilamiz; qalblar Allohniki." },
      { q: "“Men bandamning Men haqimdagi gumoni oldidaman” bizga nimani o‘rgatadi?", options: ["Allohga yomon gumon qilishni", "Allohga husni zon qilishni", "O‘ylamaslikni", "Odamlardan qo‘rqishni"], why: "Allohga husni zon iymonning bir qismi." },
    ],
    stories: [{ title: "“Uning qalbini yorib ko‘rdingmi?”", scene: "Jang. Hali yosh yigit bo‘lgan Usoma ibn Zayd bir dushman jangchini quvlayotgan edi.", story: [
      "Usoma qurolini ko‘targanda, u kishi: “La ilaha illalloh”, dedi. Usoma baribir uni urib o‘ldirdi.",
      "Payg‘ambar ﷺ buni eshitib so‘radi: “U la ilaha illalloh dedi-yu, sen uni o‘ldirdingmi?” Usoma dedi: “U buni faqat quroldan qo‘rqib aytdi.”",
      "Payg‘ambar ﷺ dedi: “Uning chin aytganini bilish uchun qalbini yorib ko‘rdingmi?” U buni shunchalik takrorladiki, Usoma o‘sha kuni endi musulmon bo‘lganimda edi, deb orzu qildi.",
    ], lesson: "Biz odamlarni ko‘rsatgan narsalariga qarab hukm qilamiz; ularning qalblari Allohniki. Hech qachon kimningdir niyati haqida eng yomonini o‘ylama.", check: {
      q: "Payg‘ambar ﷺ Usomaga nimani uqtirdi?", options: ["Janglarda qoida yo‘q", "Biz qalblarni ko‘ra olmaymiz; ko‘rsatilganiga qarab hukm qilamiz", "So‘zlar muhim emas", "U haq edi"], why: "Qalblardagini faqat Alloh biladi.",
    } }],
    rewards: [],
  },
};
