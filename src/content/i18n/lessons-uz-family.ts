import type { LessonTrMap } from "./lessons";

// Oila va jamiyat olami darslari va testlari (o‘zbekcha). Bloklar inglizcha tartibda.

const T: LessonTrMap = {
  siblings: {
    title: "Aka-uka va opa-singillar: bir jamoa",
    summary: "Aka-uka va opa-singillar bir jamoa: mehr, adolat, kechirimlilik va rishtani uzmasdan qanday bahslashish.",
    blocks: [
      { text: "Aka-uka va opa-singillaringiz Alloh sizga bergan ilk do‘stlardir. Siz bir uyda yashaysiz, ota-onangiz, xotiralaringiz umumiy, bir kun kelib ota-onangiz qariganda ularga birga g‘amxo‘rlik qilasiz. Islomda ular Alloh bog‘lashni buyurgan qarindoshlik rishtasining (sila-i rahm) bir qismidir. Uyda mustahkam jamoa bo‘lishi oila uchun eng katta ne’matlardan biridir." },
      { en: "Menga ahlimdan bir yordamchi qilib ber: akam Horunni. U bilan meni quvvatlantir va uni ishimga sherik qil.", note: "Alloh Musoni (a.s.) Fir’avnga yuborganda u qilgan duo" },
      { title: "Islom aka-uka va opa-singillar haqida nimani o‘rgatadi", items: [
        "Aka-uka — kuch. Alloh Musoga javob berdi: “Biz sening bilagingni akang bilan quvvatlantiramiz” (28:35). Tarixdagi eng og‘ir vazifani ikki aka-ukadan iborat jamoa bajardi.",
        "O‘zingga yaxshi ko‘rgan narsani ularga ham yaxshi ko‘r: “Sizlardan biringiz o‘zi uchun yaxshi ko‘rgan narsani birodari uchun ham yaxshi ko‘rmaguncha, haqiqiy mo‘min bo‘lmaydi” (Buxoriy 13).",
        "Kichik kattani hurmat qiladi, katta kichikka mehribon bo‘ladi: “Kichiklarimizga rahm qilmagan va kattalarimizni hurmat qilmagan kishi bizdan emas” (Termiziy 1919).",
        "Arazlab yurish yo‘q: musulmonga birodari bilan uch kundan ortiq gaplashmay yurish halol emas, ikkalasining yaxshirog‘i birinchi bo‘lib salom bergani (Buxoriy 6077).",
        "Ota-onalarga adolatli bo‘lish buyurilgan: “Allohdan qo‘rqinglar va farzandlaringiz orasida adolat qilinglar” (Buxoriy 2587). Uydagi adolat aka-ukalar orasidagi hasadning oldini oladi.",
      ] },
      { title: "“Bugun sizlarga malomat yo‘q”", scene: "Misr. Akalari uni quduqqa tashlaganidan ko‘p yillar o‘tib, Yusuf (a.s.) o‘sha yurtning vaziri bo‘lgan edi. Akalari uning oldida turishar, lekin uni tanimas edilar.", story: [
        "Ular bolaligidan unga hasad qilishardi. Uni qorong‘i quduqqa tashlab, otalariga uni bo‘ri yeb ketdi, deyishgan edi. Yusuf qul qilib sotilgan, tuhmat qilinib, zindonga tashlangan edi.",
        "Endi ular ocharchilikda kambag‘al holda, oziq-ovqat so‘rab uning oldiga kelishdi. U ularni jazolashi mumkin edi. Buning o‘rniga u: “Yusufga va uning ukasiga nima qilganingizni bilasizmi?” dedi. Ular unga qarab: “Yusuf sen emasmisan?” deyishdi.",
        "U dedi: “Men Yusufman, bu esa ukam. Alloh bizga in’om qildi.” Ular: “Allohga qasamki, Alloh seni bizdan ustun qildi, biz xato qilgan ekanmiz”, deyishdi.",
        "U dedi: “Bugun sizlarga hech qanday malomat yo‘q. Alloh sizlarni mag‘firat qilsin, U rahm qiluvchilarning eng rahmlirog‘idir” (12:89–92). Keyin butun oilasini Misrga, o‘z yoniga chaqirdi.",
      ], lesson: "Hasad aka-ukalarni bir-biridan ajratishi mumkin, kechirim esa ularni yana birlashtiradi. Yusuf o‘tmishni eslatmadi, u quchog‘ini ochdi.", check: {
        q: "Yusuf unga zulm qilgan akalariga nima dedi?",
        options: ["“Jazongizni olasiz”", "“Bugun sizlarga malomat yo‘q”", "“Misrdan keting”", "Hech narsa demadi"],
        why: "U ularni butunlay kechirdi (12:92).",
      } },
      { title: "Jamoani buzish va jamoani qurish", left: "Buzadi", right: "Quradi", rows: [
        ["Masxara qilish, laqab qo‘yish, mazax qilish", "Bir-birini ruhlantirish va maqtash"],
        ["Solishtirish: “Nega unga ko‘proq?”", "Bir-birining ne’matiga quvonish"],
        ["Bir-birining ustidan chaqimchilik qilish", "Kichik xatolarni yopish va yolg‘izda nasihat qilish"],
        ["Janjaldan keyin kunlab gaplashmaslik", "Uch kun ichida birinchi bo‘lib salom berish"],
        ["“Bu mening ishim emas”", "Uy yumushlarini bo‘lishish va so‘ramasdan yordam berish"],
      ] },
      { title: "Rishtani uzmasdan qanday bahslashish kerak", items: [
        "To‘xtang. “A’uzu billahi minash-shaytonir rojiym” deng; tik turgan bo‘lsangiz, o‘tiring (Abu Dovud 4782).",
        "Ovozingizni pasaytiring. Yumshoqlik har narsani chiroyli qiladi (Muslim 2594).",
        "Haqorat emas, his-tuyg‘ungizni ayting: “Sen doim…” o‘rniga “Men … bo‘lganda xafa bo‘ldim”.",
        "Javob berishdan oldin ikkinchi tomonni oxirigacha tinglang.",
        "Birgalikda adolatli yechim toping yoki ota-onangizdan orangizda hakamlik qilishni so‘rang.",
        "Iloji bo‘lsa, o‘sha kuniyoq yarashing va hech qachon uch kundan oshirmang.",
      ] },
      { situation: "Ukang sevimli o‘yinchog‘ingni (yoki quvvatlagichingni) bilmasdan sindirib qo‘ydi va yig‘lay boshladi. Nima qilasan?", options: [
        { text: "Unga baqirib, uning bir narsasini sindiraman.", feedback: "O‘ch olish bir yo‘qotishni ikkiga, jamoadoshni esa dushmanga aylantiradi." },
        { text: "Chuqur nafas olib, unga hech qisi yo‘q deyman va ehtiyot bo‘lishini so‘rayman; balki birga tuzatarmiz.", feedback: "Kichikka mehr ko‘rsatildi, jamoa esa mustahkam qoldi." },
        { text: "Bir hafta u bilan gaplashmayman.", feedback: "Birodar bilan uch kundan ortiq gaplashmay yurish halol emas." },
      ] },
      { think: [
        "Akam yoki singlim mendan nimada yaxshiroq va buni ularga hech aytganmanmi?",
        "Hali yarashmagan biror janjalim bormi?",
      ], home: [
        "Bu hafta har bir farzandga “jamoadagi vazifa” bering: biri dasturxon yozadi, biri yig‘ishtiradi, biri eng kichikka yordam beradi.",
        "Kechki ovqatda har bir farzand boshqasi haqida bitta yaxshi gap aytsin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Aka-uka va opa-singillar bir jamoa: Muso Allohdan akasini yordamchi qilib so‘ragan.",
        "O‘zingga yaxshi ko‘rganni ularga ham yaxshi ko‘r va ular bilan uch kundan ortiq gaplashmay yurma.",
        "Yusufdek kechir: “Bugun sizlarga malomat yo‘q.”",
      ] },
    ],
    quiz: [
      { q: "Muso (a.s.) Allohdan kimni yordamchi qilib berishni so‘radi?", options: ["Otasini", "Akasi Horunni", "Bir podshohni", "Bir farishtani"], why: "“Akam Horunni. U bilan meni quvvatlantir.”" },
      { q: "Alloh Musoga akasi haqida nima va’da qildi?", options: ["“U senga yo‘lboshchi bo‘ladi”", "“Biz sening bilagingni akang bilan quvvatlantiramiz”", "“U uyda qoladi”", "Hech narsa"], why: "Bitta vazifada ikki aka-uka." },
      { q: "Yusuf akalarini kechirganda ularga nima dedi?", options: ["“Jazongizni tortasiz”", "“Bugun sizlarga malomat yo‘q”", "“Ketinglar”", "“Otamga aytaman”"], why: "To‘liq kechirim." },
      { q: "Yusufning akalarini uni quduqqa tashlashga nima undadi?", options: ["Ochlik", "Hasad", "O‘zlarining tushi", "Otalarining buyrug‘i"], why: "Hasad oilani buzadi; undan saqlaning." },
      { q: "Musulmon birodari bilan ko‘pi bilan qancha vaqt gaplashmay yurishi mumkin?", options: ["Hech qachon uch kundan ortiq emas", "Bir oy", "Bir yil", "Xohlagancha"], why: "Yaxshirog‘i esa birinchi bo‘lib salom beradi." },
      { q: "“Sizlardan biringiz birodari uchun … yaxshi ko‘rmaguncha haqiqiy mo‘min bo‘lmaydi”", options: ["“…yomon ko‘rgan narsasini”", "“…o‘zi uchun yaxshi ko‘rgan narsasini”", "“…hech narsani”", "“…faqat sovg‘alarni”"], why: "Haqiqiy iymon boshqalarga yaxshilik tilashda ko‘rinadi." },
      { q: "Payg‘ambar ﷺ ota-onalarga farzandlari borasida nimani buyurdi?", options: ["To‘ng‘ichni ustun qo‘yishni", "Ular orasida adolat qilishni", "O‘g‘illarni ustun qo‘yishni", "Qizlarni ustun qo‘yishni"], why: "“Allohdan qo‘rqinglar va farzandlaringiz orasida adolat qilinglar.”" },
      { q: "Kim “bizdan emas”?", options: ["Kam gapiradigan kishi", "Kichiklarga rahm qilmagan va kattalarni hurmat qilmagan kishi", "Kambag‘al kishi", "Safar qiladigan kishi"], why: "Mehr va hurmat ikki tomonlama bo‘ladi." },
      { q: "Aka-ukang bilan bahslashganda tik turgan va g‘azablangan bo‘lsang, nima qilishing kerak?", options: ["Battarroq baqirish", "O‘tirish", "Qochib ketish", "Biror narsa otish"], why: "Holatni o‘zgartirish g‘azabni bosadi." },
      { q: "Arazdan keyin ikkalasining qaysi biri yaxshiroq?", options: ["Yutgani", "Birinchi bo‘lib salom bergani", "Har doim kattasi", "Kutib turgani"], why: "Birinchi bo‘lib yarashgin." },
    ],
  },

  "parents-devotion": {
    title: "Ota-onaga cheksiz sadoqat",
    summary: "Nega ota-ona Allohdan keyingi o‘rinda turadi, ularga har yoshda qanday xizmat qilish kerak va vafotlaridan keyin ularni qanday ulug‘lash mumkin.",
    blocks: [
      { text: "Alloh ikki buyruqni bir jumlada birlashtirdi: “Robbing faqat O‘zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishingizni amr etdi” (17:23). Allohning haqqidan keyin hech bir insonning sizning ustingizda ota-onangizchalik katta haqqi yo‘q. Ular sizni ko‘tarib yurishdi, boqishdi, tozalashdi, siz uchun uyqusiz tunlar o‘tkazishdi va siz ularning ismini aytishni ham bilmasingizdan oldin sizni sevishdi." },
      { en: "Agar huzuringda ulardan biri yoki ikkalasi keksalikka yetsa, ularga “uf” ham dema, ularni jerkima va ularga yaxshi, hurmatli so‘z ayt. Ularga rahmat bilan tavoze’ qanotingni pasaytir va ayt: Robbim, ular meni kichikligimda tarbiya qilganlaridek, Sen ham ularga rahm qil." },
      { title: "Ularning haqqi qanchalik ulug‘?", items: [
        "Avval ona: yaxshi muomalaga eng haqli kim deb so‘ralganda, Payg‘ambar ﷺ uch marta “onang”, keyin “otang” dedi (Buxoriy 5971). Ona sizni zaiflik ustiga zaiflik bilan ko‘tarib yurgan (31:14).",
        "Allohning roziligi ota-onaning roziligida, Allohning g‘azabi ota-onaning g‘azabidadir (Termiziy 1899).",
        "Ota-ona jannatning o‘rta eshigidir (Termiziy 1900). Payg‘ambar ﷺ ota-onasini keksalik chog‘ida topib, shunda ham jannatga kira olmagan kishi haqida uch marta: “Burni yerga ishqalansin”, dedi (Muslim 2551).",
        "Ularga xizmat qilish jihod bo‘lishi mumkin: bir kishi g‘azotga qo‘shilishga izn so‘radi. Payg‘ambar ﷺ: “Ota-onang tirikmi?” deb so‘radi. U ha dedi. “Unda ular yo‘lida jihod qil” (Buxoriy 3004).",
        "Ota-onaga oq bo‘lish (uquq) eng katta gunohlardandir (Buxoriy 5976).",
      ] },
      { title: "Har yoshda sadoqat", items: [
        "Bolalikda: yaxshi ishda ularga itoat qiling, chaqirishganda javob bering, rahmat ayting, hech qachon ko‘zingizni aylantirmang va “uf” deb xo‘rsinmang.",
        "O‘smirlikda: ularga rost gapiring, maslahat so‘rang, so‘ramasalar ham yordam bering va rozi bo‘lmasangiz ham ularning qoidalarini hurmat qiling.",
        "Kattalikda: tez-tez ziyorat qiling va qo‘ng‘iroq qiling, muhtoj bo‘lsalar ta’minlang, qarorlarga ularni ham qo‘shing va ular qariganda sabrli bo‘ling. Ular sizga sabr qilgan edilar.",
        "Keksa yoki kasal bo‘lganlarida: iloji boricha o‘zingiz xizmat qiling; bu aynan uyingiz ichidagi jannat eshigidir.",
        "Har narsada: gunohni buyurmasalar, ularga itoat qiling. Hatto shunda ham ularga yaxshi muomala qilishda davom eting (31:15).",
      ] },
      { title: "Sut bilan kutib turgan kishi", scene: "Payg‘ambar ﷺ o‘tgan ummatlardan bo‘lgan uch kishi haqida aytib bergan. Ular bo‘rondan g‘orga panoh topishdi. Bir tosh dumalab tushib, g‘orning og‘zini berkitib qo‘ydi.", story: [
        "Ular dedilar: bizni faqat eng yaxshi amallarimiz bilan Allohga duo qilish qutqaradi. Birinchisi dedi: “Allohim, mening ikki keksa ota-onam bor edi. Har oqshom qo‘ylarimni sog‘ib, sutni xotinim va bolalarimdan oldin ularga berardim.”",
        "“Bir kecha kechikdim. Kelganimda ular uxlab qolishgan edi. Men piyolani ushlab yonlarida turdim, ularni uyg‘otishni ham, bolalarimga ulardan oldin berishni ham istamadim, garchi bolalar ochlikdan oyog‘im ostida yig‘lashayotgan bo‘lsa ham. Ular uyg‘onib ichgunlaricha tong otguncha shunday turdim.”",
        "“Allohim, agar buni Sening roziliging uchun qilgan bo‘lsam, bizni bu toshdan xalos qil.” Tosh biroz siljidi. Qolgan ikkisi ham o‘z yaxshi amallari bilan Allohga duo qilishdi, tosh dumalab ketdi va ular chiqib ketishdi.",
      ], lesson: "Ota-onaga sabr bilan xizmat qilingan bir tun berk g‘orni ochgan amalga aylandi. Ota-onaga xizmat har qanday yopiq eshikning kalitidir.", check: {
        q: "Kishi ota-onasini uxlab yotgan holda topganda nima qildi?",
        options: ["Ularni uyg‘otdi", "Ular tongda uyg‘onguncha sut bilan kutib turdi", "Sutni bolalariga berdi", "O‘zi ichib qo‘ydi"],
        why: "U o‘zi uchun katta qiyinchilik bo‘lsa ham ularni ulug‘ladi.",
      } },
      { title: "“Ey otajon”", scene: "Ibrohim (a.s.) yosh yigit edi. Uning otasi butlar yasab sotardi.", story: [
        "Ibrohim otasi haqiqatni bilishini istardi. U baqirmadi va otasini haqorat qilmadi. U qayta-qayta: “Yo abati”, ey otajon, dedi: “Nega eshitmaydigan, ko‘rmaydigan va senga hech qanday foyda bermaydigan narsaga ibodat qilasan?”",
        "Otasi g‘azablandi: “Agar to‘xtamasang, seni toshbo‘ron qilaman. Ko‘p vaqtga mendan uzoqlash!”",
        "Ibrohim javob berdi: “Senga salom bo‘lsin. Robbimdan sening uchun mag‘firat so‘rayman, U menga doim lutf qilgan” (19:42–47).",
      ], lesson: "Ota-ona xato qilsa ham, qattiqqo‘l bo‘lsa ham, mo‘min ular bilan hurmat, yumshoqlik va duo bilan gaplashadi.", check: {
        q: "Ibrohim otasi bilan qanday gaplashdi?",
        options: ["Qo‘pol", "Hurmat bilan: “Ey otajon”", "U bilan umuman gaplashmadi", "Haqorat bilan"],
        why: "Haqiqatga chaqirganda ham yumshoqlik.",
      } },
      { title: "Ular vafot etganidan keyin ularni ulug‘lash", items: [
        "Ular uchun duo qiling: “Robbim, ular meni kichikligimda tarbiya qilganlaridek, Sen ham ularga rahm qil” (17:24).",
        "Ular nomidan sadaqa qiling va ularning yaxshi ishlarini davom ettiring.",
        "Ularning qarindoshlari va do‘stlari bilan aloqani uzmang: “Eng yaxshi yaxshilik kishining otasi yaxshi ko‘rgan odamlar bilan aloqani saqlashidir” (Muslim 2552).",
        "Ularning va’dalarini bajaring va qarzlarini to‘lang.",
        "Musulmon bo‘lmagan ota-onaga ham yaxshi muomala qilinadi: Asmoga “Onang bilan aloqani uzma” deyilgan (Buxoriy 2620).",
      ] },
      { title: "Ota-onangiz", measure: "Jannatning o‘rta eshigi", picture: "Ota-ona jannatning o‘rta eshigidir, uni xohlasang saqla, xohlasang yo‘qot (Termiziy 1900). Ularga olib borgan har bir stakan suv, har bir yaxshi so‘z va har bir duo o‘sha eshik sari bir qadam, u esa aynan uyingizning ichida." },
      { situation: "O‘yining eng qiziq joyiga kelganda onang kechki ovqatga yordam berishni so‘radi. Nima qilasan?", options: [
        { text: "Ovoz chiqarib xo‘rsinib: “Hozir!” deyman.", feedback: "Hatto “uf” ham man qilingan (17:23). Xo‘rsinish biz o‘ylagandan ko‘ra ko‘proq ranjitadi." },
        { text: "O‘yinni to‘xtatib, “Xo‘p, oyijon” deyman va tabassum bilan yordam beraman.", feedback: "Ularning chaqirig‘iga xursandchilik bilan javob berish — sadoqat, o‘yin esa joyida turadi." },
        { text: "Eshitmaganga olaman.", feedback: "Ota-onaning chaqirig‘ini e’tiborsiz qoldirish oqlikning bir turidir." },
      ] },
      { think: [
        "Ota-onamga oxirgi marta qachon aniq biror narsa uchun rahmat aytganman?",
        "Bu hafta so‘zim bilan yoki yuzim bilan “uf” dedimmi?",
      ], home: [
        "Har bir farzand ota-onasiga yoki bobo-buvisiga qisqa minnatdorlik xati yozsin.",
        "Bu hafta birgalikda bobo yoki buviga qo‘ng‘iroq qiling, bolalar ulardan bolaliklari haqida so‘rashsin.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Allohdan keyin eng katta haq ota-onaniki: “Ota-onaga yaxshilik qiling” (17:23).",
        "Hatto “uf” ham yo‘q: har yoshda ularga yumshoq so‘z va kamtarlik bilan xizmat qiling.",
        "Ularning roziligi jannat eshigi, ular uchun duomiz esa hech qachon tugamaydi.",
      ] },
    ],
    quiz: [
      { q: "17:23 oyatida yolg‘iz Allohga ibodat qilishdan keyin qaysi buyruq keladi?", options: ["Ro‘za tutish", "Ota-onaga yaxshilik qilish", "Haj", "Savdo"], why: "“Faqat Unga ibodat qilinglar va ota-onaga yaxshilik qilinglar.”" },
      { q: "Payg‘ambar ﷺ yaxshi muomalaga eng haqli deb kimni uch marta tilga oldi?", options: ["Otangni", "Onangni", "Ustozingni", "Do‘stingni"], why: "Onang, onang, onang, keyin otang." },
      { q: "Ota-onamizga qaysi so‘zni aytmasligimiz kerak?", options: ["Rahmat", "Uf", "Salom", "Iltimos"], why: "Hatto norozilik bilan xo‘rsinish ham yo‘q." },
      { q: "Allohning roziligi … da", options: ["Boylikda", "Ota-onaning roziligida", "Shuhratda", "Uyquda"], why: "Uning g‘azabi esa ularning g‘azabida." },
      { q: "G‘ordagi kishi uxlab yotgan ota-onasi uchun nima qildi?", options: ["Ularni uyg‘otdi", "Tong otguncha sutlari bilan kutib turdi", "Sutni berib yubordi", "Ketib qoldi"], why: "Uning yaxshi amali toshni siljitdi." },
      { q: "Bir kishi g‘azotga qo‘shilmoqchi bo‘ldi. Payg‘ambar ﷺ unga nima dedi?", options: ["Darhol bor", "Ota-onang yo‘lida jihod qil", "Masjidda qol", "Bozorga bor"], why: "Ota-onaga xizmat qilish katta jihod." },
      { q: "Ibrohim but yasovchi otasiga qanday murojaat qildi?", options: ["Haqorat bilan", "“Ey otajon”", "Uni e’tiborsiz qoldirdi", "Baqirdi"], why: "Kelishmovchilikda ham hurmat." },
      { q: "Ota-ona gunoh ishni buyursa-chi?", options: ["Baribir itoat qilish", "Gunohda itoat qilmaslik, lekin ularga yaxshi muomala qilishda davom etish", "Aloqani uzish", "Ularni haqorat qilish"], why: "Bu dunyoda ularga yaxshilik bilan hamroh bo‘l." },
      { q: "Ota-ona vafot etgandan keyin ularni ulug‘lashning bir yo‘li qaysi?", options: ["Ularni unutish", "Ularning do‘stlari va qarindoshlari bilan aloqani saqlash", "Narsalarini sotish", "Hech narsa"], why: "Eng yaxshi yaxshilik." },
      { q: "Asmoning onasi musulmon emas edi. Asmoga nima deyildi?", options: ["Undan uzoq yur", "Onang bilan aloqani uzma", "Faqat salomlash", "Hech narsa"], why: "Ota-onaga yaxshilik har bir ota-ona uchun." },
    ],
  },

  neighbours: {
    title: "Qo‘shnining muqaddas haqqi",
    summary: "Nega Jabroil qo‘shni haqida qayta-qayta tavsiya qilgan, yaxshi qo‘shni nima qiladi va iymon nimani man qiladi.",
    blocks: [
      { text: "Qo‘shnilaringiz sizni deyarli hammadan ko‘proq ko‘radi: kelib-ketishingizni, shovqiningizni, mehribonligingiz yoki beparvoligingizni. Islom ularga shunchalik katta haq berganki, Payg‘ambar ﷺ aytgan: “Jabroil menga qo‘shni haqida shunchalik ko‘p tavsiya qildiki, hatto uni merosxo‘r qilsa kerak, deb o‘yladim” (Buxoriy 6014)." },
      { en: "Allohga ibodat qilinglar va Unga hech narsani sherik qilmanglar. Ota-onaga, qarindoshlarga, yetimlarga, miskinlarga, yaqin qo‘shniga, uzoq qo‘shniga va yoningizdagi hamrohga yaxshilik qilinglar." },
      { title: "Iymon qo‘shnilar haqida nima deydi", items: [
        "Ularni ulug‘lash iymon belgisi: “Kim Allohga va oxirat kuniga iymon keltirsa, qo‘shnisini ikrom qilsin” (Buxoriy 6019).",
        "Ularga ozor berish iymon da’vosini yo‘qqa chiqaradi: uch marta “Allohga qasamki, iymon keltirmagan”, “qo‘shnisi uning yomonligidan omonda bo‘lmagan kishi” (Buxoriy 6016).",
        "Ovqatni baham ko‘rish: “Abu Zarr, sho‘rva pishirsang, suvini ko‘paytir va qo‘shnilaringdan xabar ol” (Muslim 2625).",
        "Kichik sovg‘alar ham muhim: hech bir qo‘shni ayol qo‘shnisiga qilgan sovg‘asini, hatto qo‘yning tuyog‘i bo‘lsa ham, arzimas sanamasin (Buxoriy 2566).",
        "Eng yaqin eshik birinchi: Oisha ikki qo‘shnining qaysi biriga berishni so‘raganda, u “eshigi senga yaqinrog‘iga” dedi (Buxoriy 2259).",
        "Har qanday dindagi qo‘shnining haqqi bor. Abdulloh ibn Amr qo‘y so‘ydirib, birinchi bo‘lib: “Yahudiy qo‘shnimizga berdingizmi?” deb so‘ragan (Termiziy 1943).",
        "“Yonidagi qo‘shnisi och bo‘la turib, o‘zi to‘yib yegan kishi mo‘min emas” (al-Adab al-Mufrad 112).",
      ] },
      { title: "Yaxshi qo‘shni…", items: [
        "Salom va tabassum bilan salomlashadi va qo‘shnilarining ismini biladi.",
        "Ayniqsa kechasi shovqin qilmaydi, mashinasini qo‘yish yoki qurilish qilishda ularga to‘sqinlik qilmaydi va zarar yetkazmaydi.",
        "Umumiy zina, hovli va ko‘chani toza tutadi, ularning eshigi oldiga hech qachon axlat tashlamaydi.",
        "Ovqatini baham ko‘radi, ayniqsa Ramazon va hayitda, ovqat hidi ularga yetib borsa, biror narsa chiqaradi.",
        "Kasal bo‘lganlarida ko‘rgani boradi, quvonchlarida tabriklaydi, qiyinchilikda yordam beradi.",
        "Ularning shaxsiy hayotini qo‘riqlaydi: mo‘ralamaydi, sirlarini tarqatmaydi, deraza yoki kameralar orqali kuzatmaydi.",
        "Ularning xatolariga sabr qiladi va kichik iltimoslarni rad etmaydi (Buxoriy 2463).",
      ] },
      { title: "Seni yo‘qotib qo‘ydikmi?", scene: "Kufa. Imom Abu Hanifaning yosh qo‘shnisi har kecha baland ovozda qo‘shiq aytardi, imom esa tungi namozida uni eshitardi, lekin hech qachon shikoyat qilmasdi.", story: [
        "Bir kecha qo‘shiq tindi. Abu Hanifa surishtirib, yigitni tungi soqchilar qamab qo‘yganini bildi.",
        "Ertasi tongda buyuk imom o‘zi otga minib hokimning oldiga bordi va qo‘shnisini ozod qilishni so‘radi, hokim uni qo‘yib yubordi.",
        "Uyga qaytishda Abu Hanifa yumshoqlik bilan: “Yigit, seni yo‘qotib qo‘ydikmi?” dedi. Yigit: “Yo‘q, siz meni himoya qildingiz. Yaxshi qo‘shni bo‘lganingiz uchun Alloh sizni mukofotlasin”, dedi. Va u yo‘lini o‘zgartirdi (rivoyat qilinadi).",
      ], lesson: "Bezovta qiladigan qo‘shniga ko‘rsatilgan mehribonlik uning qalbini har qanday shikoyatdan ko‘ra ko‘proq o‘zgartirishi mumkin.", check: {
        q: "Shovqinli qo‘shnisi qamalganda Abu Hanifa nima qildi?",
        options: ["Xursand bo‘ldi", "Uni ozod qildirish uchun hokimning oldiga bordi", "Boshqa uyga ko‘chdi", "Hech narsa qilmadi"],
        why: "Qo‘shnisi uni bezovta qilgan bo‘lsa ham, u qo‘shnisini ulug‘ladi.",
      } },
      { title: "Qo‘shnini ulug‘lash", measure: "Haqiqiy iymon belgisi", picture: "Jabroil Payg‘ambar ﷺ ga qo‘shni haqida shunchalik ko‘p tavsiya qildiki, u qo‘shni merosxo‘r bo‘lsa kerak, deb o‘yladi (Buxoriy 6014). Devor osha uzatilgan bir kosa sho‘rva, zinadagi salom, tinch oqshom: iymonning o‘zi o‘lchanadigan kichik narsalar." },
      { situation: "Qo‘shni uyga yangi oila ko‘chib keldi. Ular boshqa mamlakatdan, tilingizni yaxshi bilishmaydi. Musulmon oila nima qiladi?", options: [
        { text: "Ular o‘zlari kelib tanishishlarini kutadi.", feedback: "Yangi kelgan odam ko‘pincha uyatchan bo‘ladi. Qo‘shnining haqqi bizdan boshlanadi." },
        { text: "Tabassum bilan bir tovoq ovqat olib boradi, o‘zini tanishtiradi va do‘kon hamda maktablarni topishda yordam taklif qiladi.", feedback: "Ovqat, salom va yordam: aynan Payg‘ambar ﷺ Abu Zarrga o‘rgatgan narsa." },
        { text: "Ularga e’tibor bermaydi, baribir musulmon emas.", feedback: "Islomda har qanday dindagi qo‘shnining haqqi bor (Termiziy 1943)." },
      ] },
      { think: [
        "Uyimizning ikki tomonidagi oilalarning ismlarini bilamanmi?",
        "Oilamiz qo‘shnilarimizni bezovta qilishi mumkin bo‘lgan biror ish qiladimi?",
      ], home: [
        "Bu hafta ozgina ko‘proq ovqat pishirib, bir qo‘shniga bir tovoq yuboring.",
        "Keksa yoki yolg‘iz qo‘shnilar ro‘yxatini tuzing va ulardan xabar olishni rejalashtiring.",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Jabroil qo‘shni haqida qayta-qayta tavsiya qilgan: ularning haqqi muqaddas.",
        "Iymon qo‘shningiz sizning yomonligingizdan omonda bo‘lishi bilan o‘lchanadi.",
        "Har qanday dindagi qo‘shnilar bilan ovqat baham ko‘ring, salomlashing, yordam bering va sabrli bo‘ling.",
      ] },
    ],
    quiz: [
      { q: "Jabroil Payg‘ambar ﷺ ga nima haqida qayta-qayta tavsiya qilgan?", options: ["Savdo", "Qo‘shni", "Safar", "Ovqat"], why: "Hatto qo‘shni merosxo‘r bo‘lsa kerak deb o‘ylagunicha." },
      { q: "Buxoriy 6016 ga ko‘ra kim haqiqiy iymon keltirmagan?", options: ["Kambag‘al kishi", "Qo‘shnisi uning yomonligidan omonda bo‘lmagan kishi", "Safar qiladigan kishi", "Kam gapiradigan kishi"], why: "Ta’kid uchun uch marta aytilgan." },
      { q: "Payg‘ambar ﷺ Abu Zarrga sho‘rva pishirganda nima qilishni aytdi?", options: ["Hammasini yeyishni", "Suvini ko‘paytirib, qo‘shnilar bilan baham ko‘rishni", "Sotishni", "Yashirishni"], why: "Qo‘shni uydagilar bilan baham ko‘ring." },
      { q: "Avval qaysi qo‘shniga berish kerak?", options: ["Eng boyiga", "Eshigi eng yaqiniga", "Eng keksasiga", "Eng yangisiga"], why: "Eng yaqin eshik birinchi." },
      { q: "Musulmon bo‘lmagan qo‘shnilarning haqqi bormi?", options: ["Yo‘q", "Ha", "Faqat Ramazonda", "Faqat so‘rasalar"], why: "Abdulloh ibn Amr yahudiy qo‘shnisiga go‘sht yuborgan." },
      { q: "Qaysi oyatda “yaqin qo‘shni va uzoq qo‘shni” zikr qilingan?", options: ["2:255", "4:36", "112:1", "1:5"], why: "Yaxshilik qilishimiz kerak bo‘lganlar qatorida." },
      { q: "“Kim Allohga va oxirat kuniga iymon keltirsa…”", options: ["“…uyda o‘tirsin”", "“…qo‘shnisini ikrom qilsin”", "“…devor qursin”", "“…ko‘chib ketsin”"], why: "Qo‘shnini ulug‘lash iymondandir." },
      { q: "Qo‘shniga qilingan kichik sovg‘ani arzimas sanash kerakmi?", options: ["Ha, katta bo‘lsin yoki hech narsa", "Yo‘q, hatto qo‘yning tuyog‘i ham yaxshi sovg‘a", "Faqat oltin hisob", "Sovg‘a mumkin emas"], why: "Kichik sovg‘alar mehr uyg‘otadi." },
      { q: "Abu Hanifa shovqinli qo‘shnisi uchun nima qildi?", options: ["Politsiyaga shikoyat qildi", "Hokimdan uni ozod qilishni so‘radi", "Sudga berdi", "Hech narsa"], why: "Uning mehribonligi yigitni o‘zgartirdi." },
      { q: "“… o‘zi to‘yib yegan kishi mo‘min emas”", options: ["“…yomg‘ir yog‘ayotganda”", "“…yonidagi qo‘shnisi och bo‘la turib”", "“…safarda bo‘lganda”", "“…yosh bo‘lganda”"], why: "Iymon qo‘shnidagi ochni payqaydi." },
    ],
  },

  "halal-earning": {
    title: "Halol kasb: pok pul",
    summary: "Nega musulmon faqat haloldan topadi, pulni nima harom qiladi va harom daromad duoga, oilaga va oxiratga qanday zarar yetkazadi.",
    blocks: [
      { text: "Islomda mehnat ibodatdir. O‘zingiz va oilangiz uchun rizq topish ulug‘langan; ishlay olib turib tilanchilik qilish yomon ko‘rilgan. Lekin qancha topishingiz qanchalik muhim bo‘lsa, qanday topishingiz ham shunchalik muhim. Musulmonning puli halol bo‘lishi kerak: ruxsat etilgan ish orqali, halollik bilan, hech kimni aldamasdan va zarar yetkazmasdan topilgan. Qiyomat kunida har bir tanga haqida so‘raladi." },
      { en: "Qiyomat kunida inson to umri haqida — uni nimaga sarflagani, ilmi haqida — u bilan nima amal qilgani, moli haqida — uni qayerdan topgani va nimaga sarflagani, tanasi haqida — uni nimada ishlatgani so‘ralmaguncha, qadami joyidan jilmaydi." },
      { title: "Halol mehnat ulug‘langan", items: [
        "“Hech kim o‘z qo‘li mehnati bilan topganidan yaxshiroq taom yemagan. Dovud payg‘ambar o‘z qo‘li mehnatidan yerdi” (Buxoriy 2072). Dovud podshoh edi, shunda ham mehnat qilardi.",
        "Payg‘ambarlar mehnat qilishgan: Nuh kema yasagan, Muso qo‘y boqqan, Payg‘ambar ﷺ qo‘y boqqan va savdo qilgan.",
        "Rizq allaqachon yozilgan. Shuning uchun “Allohdan qo‘rqinglar va rizq talabida mo‘tadil bo‘linglar”; uni gunoh orqali izlamang (Ibn Moja 2144).",
        "Shubhali narsani tark eting: shubhalidan saqlangan kishi dinini va obro‘sini himoya qiladi (Buxoriy 52).",
      ] },
      { title: "Halol va harom daromad", left: "Halol daromad", right: "Harom daromad", rows: [
        ["Kamchiligi aytilgan halol savdo", "Aldash, nuqsonni yashirish, yolg‘on reklama, soxta sharhlar (Muslim 102)"],
        ["Bajarilgan ish uchun to‘liq maosh", "Ish vaqtini o‘g‘irlash, hisobotda yolg‘on, o‘ziniki bo‘lmagan narsani olish"],
        ["Haqiqiy oldi-sotdidan foyda", "Olingan yoki berilgan ribo (foiz) (2:275–279)"],
        ["Hunar, kasb, o‘qituvchilik, dehqonchilik, xizmat ko‘rsatish", "Qimor, tikish ilovalari va lotereyalar (5:90)"],
        ["Ruxsat etilgan mollarni sotish", "Spirtli ichimlik, giyohvand modda, cho‘chqa go‘shti yoki har qanday harom narsani sotish"],
        ["Adolatli haq va ixtiyoriy berilgan hadyalar", "Berilgan yoki olingan pora (Abu Dovud 3580)"],
        ["O‘z mehnatingiz va sarmoyangiz", "Firibgarlik, tovlamachilik, o‘g‘irlik yoki boshqalarning molini nohaq olish (2:188)"],
      ] },
      { title: "Nega hech qachon haromdan pul topmaslik kerak", items: [
        "Duoyingiz to‘siladi. Payg‘ambar ﷺ sochlari to‘zg‘igan, chang bosgan bir musofir haqida aytib bergan, u qo‘llarini ko‘tarib: “Yo Robbim, yo Robbim!” deydi. Lekin uning yegani harom, ichgani harom, kiygani harom va harom bilan oziqlangan, “unday holda qanday ijobat qilinsin?” (Muslim 1015).",
        "Alloh pokdir va faqat pok narsani qabul qiladi (Muslim 1015). Harom puldan berilgan sadaqa qabul qilinmaydi.",
        "Oilangizni harom bilan boqadi: tana yegan narsasidan o‘sadi. Harom daromaddan o‘sgan et do‘zaxga loyiqroqdir (Termiziy 614).",
        "Barakani ketkazadi. Harom pul ko‘p ko‘rinishi mumkin, lekin u tashvish, janjal va zarar keltiradi; halol pul esa oz bo‘lsa ham baraka keltiradi.",
        "Ishonchni yo‘qotadi. Aldovchi bir marta foyda ko‘rishi mumkin, keyin xaridorlarini, do‘stlarini va obro‘sini abadiy yo‘qotadi.",
        "U haqda so‘raladi: qayerdan topgani va nimaga sarflagani haqida (Termiziy 2417). Ribo esa Alloh urush e’lon qilgan gunohlardandir (2:279).",
        "Zamonamiz uchun ogohlantirish: “Odamlarga shunday zamon keladiki, kishi olayotgan narsasi halolmi yoki harommi, parvo qilmaydi” (Buxoriy 2059). Parvo qiladiganlardan bo‘ling.",
      ] },
      { title: "Abu Bakr qoldirmagan bir luqma", scene: "Madina. Abu Bakrning (r.a.) bir xizmatkori bor edi, u topganining bir qismini unga olib kelardi, Abu Bakr esa undan yerdi.", story: [
        "Bir kuni xizmatkor unga ovqat olib keldi, Abu Bakr bir luqma yedi. Xizmatkor so‘radi: “Bu qayerdan kelganini bilasizmi?”",
        "“Qayerdan?” U dedi: “Islomdan oldin men bir kishiga folbinlik qilgandek bo‘lgandim, aslida bu haqda hech narsa bilmasdim. Shunchaki uni aldagandim. U bugun meni uchratib, menga shuni berdi.”",
        "Abu Bakr barmoqlarini og‘ziga solib, oshqozonidagi hamma narsani qusib tashladi.",
      ], lesson: "Abu Bakr tanasida haromdan hatto bir luqma qolishiga ham yo‘l qo‘ymadi. Agar u bir luqmaga shunchalik ehtiyotkor bo‘lgan bo‘lsa, biz maoshimiz va tijoratimizga qanchalik ehtiyotkor bo‘lishimiz kerak?", check: {
        q: "Abu Bakr nega ovqatni qusib tashladi?",
        options: ["Ovqat buzilgan edi", "U folbinlik va aldovdan topilgan pulga olingan edi", "U to‘q edi", "U kasal edi"],
        why: "U tanasida haromdan biror narsa qoldirishni rad etdi.",
      } },
      { title: "Don uyumiga tiqilgan qo‘l", scene: "Madina bozori. Payg‘ambar ﷺ sotuvga qo‘yilgan bir uyum don yonidan o‘tib qoldi.", story: [
        "U qo‘lini uyum ichiga tiqdi, barmoqlari ho‘l bo‘lib chiqdi. Pastda don nam edi, ustida esa quruq va benuqson ko‘rinardi.",
        "U sotuvchidan so‘radi: “Bu nima?” U kishi: “Unga yomg‘ir yog‘di, ey Allohning Rasuli”, dedi.",
        "U dedi: “Nega uni odamlar ko‘radigan qilib ustiga qo‘ymading? Kim aldasa, u bizdan emas” (Muslim 102).",
      ], lesson: "Savdodagi halollik nuqsonni yashirish emas, ko‘rsatishdir. Bugun bunga suratlar, sharhlar va mayda harflar bilan yozilgan shartlar ham kiradi.", check: {
        q: "Payg‘ambar ﷺ ho‘l donni yashirgan sotuvchi haqida nima dedi?",
        options: ["“Yaxshi fikr”", "“Kim aldasa, u bizdan emas”", "“Narxini tushir”", "Hech narsa demadi"],
        why: "Nuqsonni yashirish aldashdir.",
      } },
      { title: "Halol kasb", measure: "Siz yeya oladigan eng yaxshi taom", picture: "Hech kim o‘z qo‘li mehnati bilan topganidan yaxshiroq taom yemagan (Buxoriy 2072). Halol maosh, halol savdo, yaxshi bajarilgan ish: pul miqdori bir xil bo‘lishi mumkin, lekin uning barakasi oilangizga, duoyingizga va oxiratingizga yetib boradi." },
      { situation: "Do‘sting senga tikish ilovasini ko‘rsatdi: “Ozgina pul qo‘ysang, bir kunda ikki baravar qilasan. Hamma shunday qilyapti.” Nima qilasan?", options: [
        { text: "Ozgina pul bilan bir marta sinab ko‘raman.", feedback: "Qimor ozi ham, ko‘pi ham harom (5:90), u esa sizni o‘ziga bog‘lab olish uchun yaratilgan." },
        { text: "Qat’iy yo‘q deyman, bu qimor va harom ekanini tushuntiraman, halol yo‘l bilan topishni, masalan, biror mahoratni sotish yoki kichik halol ishni taklif qilaman.", feedback: "Pok pul, pok duo, balki do‘stingni ham qutqararsan." },
        { text: "Ishlataman, yutuqni esa sadaqaga beraman.", feedback: "Alloh pokdir va faqat pok narsani qabul qiladi; sadaqa harom daromadni poklay olmaydi." },
      ] },
      { think: [
        "Daromadimning, garchi kichik bo‘lsa ham, halolligiga ishonchim komil bo‘lmagan qismi bormi?",
        "Ish beruvchimga yoki xaridorlarimga ulardan o‘zim kutgan to‘liq halollikni beryapmanmi?",
      ], home: [
        "Bolalarga haqiqiy yumushlar orqali ozgina halol cho‘ntak puli topishni va uning bir qismini sadaqa qilishni o‘rgating.",
        "Birgalikda gaplashing: qaysi kasblarni qilishdan faxrlanardik, qaysilarini esa yaxshi pul berishsa ham rad etardik?",
      ] },
      { title: "Asosiy xulosalar", items: [
        "Halol bo‘lsa, kasb ibodatdir; eng yaxshi taom o‘z qo‘ling bilan topganingdir.",
        "Harom pul duoni to‘sadi, barakani ketkazadi va Qiyomat kunida so‘raladi.",
        "Aldash, ribo, qimor, pora va firibgarlikdan saqlaning, shubhali narsani tark eting.",
      ] },
    ],
    quiz: [
      { q: "Musofirning duosi nega ijobat bo‘lmadi?", options: ["Juda past ovozda duo qildi", "Uning yegani, ichgani va kiygani haromdan edi", "Juda uzoqda edi", "Bismillah deyishni unutdi"], why: "“Unday holda qanday ijobat qilinsin?”" },
      { q: "Alloh pokdir va faqat … qabul qiladi", options: ["Katta miqdorni", "Pok narsani", "Oltinni", "Oshkora sadaqani"], why: "Harom pul bilan savob sotib olib bo‘lmaydi." },
      { q: "Inson yeya oladigan eng yaxshi taom qaysi?", options: ["Qimmat taom", "O‘z qo‘li bilan topgani", "Sovg‘a qilingan taom", "Podshohdan kelgan taom"], why: "Dovud o‘z mehnatidan yerdi." },
      { q: "Qaysi payg‘ambar podshoh bo‘la turib o‘z qo‘l mehnatidan yerdi?", options: ["Sulaymon", "Dovud", "Yusuf", "Iso"], why: "U sovut yasardi." },
      { q: "Qiyomat kunida molimiz haqida so‘raladi: …", options: ["Qancha bo‘lgani", "Qayerdan topgani va nimaga sarflagani", "Kim boyroq bo‘lgani", "Hech narsa"], why: "Har bir tanga haqida ikki savol." },
      { q: "Abu Bakr ovqati aldovdan kelganini bilganda nima qildi?", options: ["Oxirigacha yedi", "Uni qusib tashladi", "Birovga berib yubordi", "Sotdi"], why: "Haromdan bir luqma ham yo‘q." },
      { q: "“Kim aldasa, u…”", options: ["“…aqlli”", "“…bizdan emas”", "“…kechirilgan”", "“…boy”"], why: "Ho‘l donni yashirish haqida aytilgan." },
      { q: "Quyidagilardan qaysi biri harom daromad?", options: ["O‘qituvchilik", "Qimor va tikish", "Dehqonchilik", "Halol savdo"], why: "Qimor shaytonning ishi." },
      { q: "Harom pulni sadaqaga berib poklash mumkinmi?", options: ["Ha", "Yo‘q, Alloh faqat pok narsani qabul qiladi", "Faqat yarmini", "Faqat Ramazonda"], why: "Manbaning o‘zi halol bo‘lishi kerak." },
      { q: "Shubhali narsa bilan nima qilish kerak?", options: ["Tezda olish", "Dinni va obro‘ni himoya qilish uchun tark etish", "Hech kimdan so‘ramaslik", "Yashirish"], why: "Shubhalidan saqlanish dinni himoya qiladi." },
    ],
  },
};

export default T;
