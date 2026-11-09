// Translated descriptions for the "Key reward" cards of the first translated
// worlds, keyed "world/lesson" → block index → text. Applied on top of the
// lesson overlays when they load.

type Pics = Record<string, Record<number, string>>;

export const PICTURES: Record<"uz" | "ru", Pics> = {
  uz: {
    "iman/tawhid": { 7: "Allohning to‘qson to‘qqizta ismi bor; kim ularni “ihso” qilsa (yod olsa), jannatga kiradi (Buxoriy 2736). Olimlar buni ularni yod olish, tushunish va ular talab qilgan narsaga amal qilish deb tushuntirishgan." },
    "iman/angels": { 6: "Imom “valaz zoollin” deganda sen “Omin” desang va sening ominingiz farishtalarning omini bilan to‘g‘ri kelsa, o‘tgan gunohlaring kechiriladi (Buxoriy 780). Har bir jamoat namozi farishtalar bilan birga “Omin” deyish imkoniyatidir." },
    "iman/books": { 6: "“Qur’on o‘qinglar, chunki u Qiyomat kunida o‘z sohiblariga shafoatchi bo‘lib keladi” (Muslim 804). Baqara va Oli Imron o‘quvchisiga soya solgan ikki bulutdek keladi. “Sizlarning eng yaxshingiz Qur’onni o‘rgangan va uni o‘rgatganingizdir” (Buxoriy 5027)." },
    "iman/last-day": { 3: "Hech narsa yo‘qolmaydi: zarra miqdoricha yaxshilik ham ko‘rinadi (99:7). Ikki yengil kalima, “Subhanallohi va bihamdihi, Subhanallohil ’azim”, Mezonda og‘irdir (Buxoriy 6406), go‘zal xulqdan og‘irroq narsa esa yo‘q (Termiziy 2002)." },
    "islam/shahadah": { 5: "“Kimning so‘nggi so‘zi la ilaha illalloh bo‘lsa, jannatga kiradi” (Abu Dovud 3116). Uni hayotda ko‘p ayt, shunda oxirida u oson keladi." },
    "islam/salah-pillar": { 3: "“Agar biringizning eshigi oldida daryo bo‘lsa-yu, u kuniga besh marta unda yuvinsa, unda biror kir qoladimi?” Ular: yo‘q, deyishdi. “Besh vaqt namozning misoli shu: Alloh ular bilan gunohlarni o‘chiradi” (Buxoriy 528). Katta gunohlardan saqlanilsa, bir namoz bilan keyingisi orasidagi gunohlar kechiriladi (Muslim 233)." },
    "islam/zakat": { 4: "Sadaqa molni kamaytirmaydi (Muslim 2588), Alloh yo‘lida sarflash esa bitta doni yetti yuzta bo‘lib o‘sganiga o‘xshaydi (2:261). 10 000 lik jamg‘armaning 2,5 foizli zakoti 250 bo‘ladi va u bir oilani haftalab to‘ydirishi mumkin, Alloh esa uning o‘rnini to‘ldirishni va’da qiladi." },
    "islam/sawm": { 2: "Jannatda Rayyon degan eshik bor; undan faqat ro‘za tutganlar kiradi, ular kirgach, u yopiladi (Buxoriy 1896). Ramazon ro‘zasini iymon bilan, savob umidida tutish o‘tgan barcha gunohlarni kechiradi (Buxoriy 1901), ro‘zadorning og‘iz hidi Alloh huzurida mushkdan ham xushbo‘yroqdir (Buxoriy 1894)." },
    "islam/hajj": { 1: "“Kim haj qilsa-yu, fahsh va fisq qilmasa, onasi tuqqan kundagidek bo‘lib qaytadi” (Buxoriy 1521). “Qabul bo‘lgan hajning mukofoti faqat jannatdir” (Buxoriy 1773). Alloh Arafa kunidagidan ko‘p odamni do‘zaxdan ozod qiladigan kun yo‘q (Muslim 1348)." },
    "salah/places": {
      6: "Kishi tahoratni yaxshilab olib, faqat namoz uchun masjidga yursa, har bir qadami uni bir daraja ko‘taradi va bir gunohini o‘chiradi (Buxoriy 647). 10 daqiqalik yo‘l taxminan 1000 qadam: bitta namozga borayotib ming gunoh to‘kiladi va ming daraja olinadi.",
      7: "Jamoat bilan namoz yolg‘iz o‘qilgan namozdan yigirma yetti daraja afzal (Buxoriy 645). Kuniga besh vaqt jamoat bilan o‘qilgan namoz yolg‘iz o‘qilgan 135 namoz, ya’ni 27 kunlik namoz savobiga teng, har kuni.",
      8: "Kim xuftonni jamoat bilan o‘qisa, go‘yo tunning yarmini namozda o‘tkazgandek bo‘ladi; kim bomdodni ham jamoat bilan o‘qisa, go‘yo butun tunni namozda o‘tkazgandek bo‘ladi (Muslim 656). Ikki qisqa namoz va sen uxlab yotganingda amal daftaringda to‘liq bir tunlik ibodat yoziladi.",
      10: "Kim uyida poklanib, keyin Qubo masjidiga kelib, unda namoz o‘qisa, unga bir umra savobi bor (Ibn Moja 1412).",
    },
    "salah/janazah": {
      1: "Payg‘ambar ﷺ davrida qirot kichik tanga edi. U bu so‘zni savob uchun ishlatib, uni tushuntirgan: ikkisining kichigi Uhud tog‘idek (Muslim 945). Uhud taxminan 7 km uzun, Madina tekisligidan yuzlab metr baland ko‘tarilgan tog‘, ketma-ket qo‘yilgan 70 ga yaqin futbol maydonicha uzun. Namozga qolsang, shunday bir tog‘ savob olasan; dafngacha qolsang, ikkitasini.",
      2: "Agar Allohga hech narsani shirk keltirmaydigan qirq kishi bir musulmonga janoza namozini o‘qisa, Alloh ularning u haqdagi shafoatini qabul qiladi (Muslim 948). Yuz kishi o‘qisa ham shunday (Muslim 947). Janoza namoziga qo‘shilish notanish bir kishining jannatga kirishiga sabab bo‘lishi mumkin, bir kun boshqalar ham sen uchun shunday qiladi.",
    },
    "salah/taziyah": { 1: "“Qaysi mo‘min birodariga musibatda ta’ziya bildirsa, Alloh unga Qiyomat kunida karomat liboslarini kiydiradi” (Ibn Moja 1601). Qayg‘udagi oilaga qisqa ziyorat va bir necha so‘z, buning evaziga butun maxluqot oldida karomat libosi." },
    "quran/kursi": { 3: "Uxlash uchun yotganingda uni o‘qi, shunda tonggacha sen bilan Allohdan bir qo‘riqchi bo‘ladi va hech bir shayton senga yaqinlashmaydi (Abu Hurayra va o‘g‘ri haqidagi hikoya)." },
    "quran/quran-reward": {
      1: "“Alif Lom Mim” bitta harf emas: alif bir harf, lom bir harf, mim bir harf. Demak, faqat shu uchtasi o‘ttizta yaxshilik. Mushafning bir sahifasida taxminan 400–600 harf bor: bir necha daqiqada minglab yaxshilik.",
      2: "Qur’onni mohir o‘qiydigan kishi aziz, solih farishtalar bilan birga. Uni qiynalib, duduqlanib o‘qiydigan kishiga ikki savob bor: biri o‘qigani uchun, biri qiynalgani uchun. Boshlovchilar, davom etinglar!",
      3: "Qiyomat kunida Qur’on sohibiga aytiladi: “O‘qi va ko‘taril, dunyoda qanday tartil bilan o‘qigan bo‘lsang, shunday o‘qi, chunki sening manziling o‘qigan oxirgi oyatingdadir.”",
    },
  },
  ru: {
    "iman/tawhid": { 7: "У Аллаха девяносто девять имён; кто выучит их (ахсаха), войдёт в Рай (Бухари 2736). Учёные объясняют это как заучивание, понимание и жизнь в соответствии с тем, к чему они призывают." },
    "iman/angels": { 6: "Когда имам говорит «ва ляд-даллин», а ты говоришь «Амин», и твой «Амин» совпадает с «Амином» ангелов, твои прошлые грехи прощаются (Бухари 780). Каждая коллективная молитва — возможность сказать «Амин» вместе с ангелами." },
    "iman/books": { 6: "«Читайте Коран, ибо в Судный день он придёт заступником за своих спутников» (Муслим 804). «Аль-Бакара» и «Аль Имран» придут, словно два облака, осеняющие своего чтеца. А «лучшие из вас — те, кто изучает Коран и обучает ему» (Бухари 5027)." },
    "iman/last-day": { 3: "Ничто не пропадёт: добро весом в пылинку будет видно (99:7). Две лёгкие фразы — «СубханаЛлахи ва бихамдихи, СубханаЛлахиль-Азым» — тяжелы на Весах (Бухари 6406), и нет ничего тяжелее благого нрава (Тирмизи 2002)." },
    "islam/shahadah": { 5: "«Чьими последними словами будут „ля иляха илля-Ллах“, тот войдёт в Рай» (Абу Дауд 3116). Говори их часто при жизни, чтобы они легко пришли в конце." },
    "islam/salah-pillar": { 3: "«Если бы у дверей кого-то из вас была река и он купался в ней пять раз в день, осталась бы на нём грязь?» Они сказали: нет. «Таков пример пяти молитв: Аллах стирает ими грехи» (Бухари 528). А между одной молитвой и следующей грехи искупаются, если избегать больших грехов (Муслим 233)." },
    "islam/zakat": { 4: "Милостыня не уменьшает имущества (Муслим 2588), а траты на пути Аллаха растут, как одно зерно, давшее семьсот (2:261). Закят 2,5% с накоплений в 10 000 — это 250, и этого хватит, чтобы кормить семью неделями, а Аллах обещает возместить." },
    "islam/sawm": { 2: "В Раю есть врата ар-Райян; через них войдут только постившиеся, и когда они войдут, врата закроются (Бухари 1896). Пост в Рамадан с верой и надеждой на награду прощает все прошлые грехи (Бухари 1901), а запах изо рта постящегося у Аллаха приятнее мускуса (Бухари 1894)." },
    "islam/hajj": { 1: "«Кто совершит хадж, не совершая непристойностей и грехов, вернётся таким, каким родила его мать» (Бухари 1521). «Наградой за принятый хадж может быть только Рай» (Бухари 1773). И нет дня, в который Аллах освобождает от Огня больше людей, чем в день Арафа (Муслим 1348)." },
    "salah/places": {
      6: "Когда человек хорошо совершает омовение и идёт в мечеть только ради молитвы, каждый его шаг поднимает его на ступень и стирает один грех (Бухари 647). 10 минут пешком — это примерно 1000 шагов: тысяча грехов сброшена и тысяча ступеней обретена по пути к одной молитве.",
      7: "Коллективная молитва на двадцать семь степеней лучше молитвы в одиночку (Бухари 645). Пять коллективных молитв в день несут награду 135 молитв в одиночку — за 27 дней, и так каждый день.",
      8: "Кто совершил иша в джамаате, тот словно простоял в молитве полночи; а кто совершил в джамаате и фаджр, тот словно простоял всю ночь (Муслим 656). Две короткие молитвы — и в записи целая ночь поклонения, пока ты спал.",
      10: "Кто очистится дома, затем придёт в мечеть Куба и помолится в ней, тому награда умры (Ибн Маджа 1412).",
    },
    "salah/janazah": {
      1: "Во времена Пророка ﷺ кират был мелкой монетой. Он использовал это слово для награды и объяснил: меньший из двух подобен горе Ухуд (Муслим 945). Ухуд — гора около 7 км в длину, поднимающаяся на сотни метров над равниной Медины, длиной примерно с 70 футбольных полей подряд. Останься на молитву — и унесёшь одну такую гору награды; останься до погребения — две.",
      2: "Если над мусульманином совершат погребальную молитву сорок человек, не придающих Аллаху сотоварищей, Аллах примет их заступничество за него (Муслим 948). Если сто — так же (Муслим 947). Участие в джаназе может помочь незнакомцу войти в Рай, а однажды другие сделают это и для тебя.",
    },
    "salah/taziyah": { 1: "«Нет верующего, который утешит брата в беде, без того чтобы Аллах не облачил его в одежды почёта в Судный день» (Ибн Маджа 1601). Короткий визит и несколько слов скорбящей семье — и одежды почёта перед всеми творениями." },
    "quran/kursi": { 3: "Читай его, ложась спать, и с тобой до утра будет хранитель от Аллаха, и ни один шайтан не приблизится к тебе (история Абу Хурайры и вора)." },
    "quran/quran-reward": {
      1: "«Алиф Лям Мим» — это не одна буква: алиф — буква, лям — буква и мим — буква. Значит, только эти три — тридцать добрых дел. На одной странице мусхафа около 400–600 букв: тысячи добрых дел за несколько минут.",
      2: "Искусный в Коране — вместе с благородными праведными ангелами. А тот, кто читает его с трудом, запинаясь, получает две награды: за чтение и за старание. Начинающие, не останавливайтесь!",
      3: "В Судный день спутнику Корана скажут: «Читай и поднимайся, читай размеренно, как читал в мире, ибо твоё место — у последнего аята, который ты прочтёшь».",
    },
  },
};
