// Notification texts in the three app languages. Pure data and functions with
// no imports, so the Supabase scheduler (supabase/functions/push-tick) can use
// an identical copy. Keep the two in step: scripts/push/sync.sh copies it.

export type PushLang = "en" | "uz" | "ru";
export type PushMsg = { title: string; body: string; url: string; tag: string };
export type PrayerName = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

const PRAYERS: Record<PushLang, Record<PrayerName, string>> = {
  en: { fajr: "Fajr", dhuhr: "Dhuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha" },
  uz: { fajr: "Bomdod", dhuhr: "Peshin", asr: "Asr", maghrib: "Shom", isha: "Xufton" },
  ru: { fajr: "Фаджр", dhuhr: "Зухр", asr: "Аср", maghrib: "Магриб", isha: "Иша" },
};

const pick = (lang: string): PushLang => (lang === "uz" || lang === "ru" ? lang : "en");

export const MSG = {
  prayer(lang: string, p: PrayerName, time: string, place?: string): PushMsg {
    const l = pick(lang); const n = PRAYERS[l][p];
    const where = place ? ` · ${place}` : "";
    const t = {
      en: { title: `It’s time for ${n}`, body: `${n} has begun (${time}${where}). Make wuḍūʾ and pray on time.` },
      uz: { title: `${n} vaqti kirdi`, body: `${n} vaqti kirdi (${time}${where}). Tahorat qilib, namozni vaqtida o‘qing.` },
      ru: { title: `Время намаза ${n}`, body: `Наступило время ${n} (${time}${where}). Совершите омовение и помолитесь вовремя.` },
    }[l];
    return { ...t, url: "/times", tag: `prayer-${p}` };
  },
  story(lang: string): PushMsg {
    const t = {
      en: { title: "Bedtime story time 🌙", body: "Tonight’s story is waiting. Get cosy and read it together." },
      uz: { title: "Uxlash oldi hikoyasi vaqti 🌙", body: "Bugungi hikoya sizni kutmoqda. Qulay joylashib, birga o‘qing." },
      ru: { title: "Время сказки на ночь 🌙", body: "Сегодняшняя история ждёт. Устройтесь поудобнее и почитайте вместе." },
    }[pick(lang)];
    return { ...t, url: "/stories", tag: "story" };
  },
  study(lang: string, hifzDue: number): PushMsg {
    const l = pick(lang);
    if (hifzDue > 0) {
      const t = {
        en: { title: "10 minutes with the Quran 📖", body: `${hifzDue} sūrah${hifzDue > 1 ? "s are" : " is"} due for review. A short review keeps them strong.` },
        uz: { title: "Qur’on bilan 10 daqiqa 📖", body: `${hifzDue} ta sura takrorlash vaqti keldi. Qisqa takror ularni mustahkam saqlaydi.` },
        ru: { title: "10 минут с Кораном 📖", body: `Пора повторить суры: ${hifzDue}. Короткое повторение сохранит их в памяти.` },
      }[l];
      return { ...t, url: "/hifz", tag: "study" };
    }
    const t = {
      en: { title: "Your 10 minutes of learning ✨", body: "Read one lesson in Ilm Quest and take its quiz. Small and steady is best." },
      uz: { title: "Bugungi 10 daqiqalik ilm ✨", body: "Ilm sarida bitta dars o‘qing va testini yeching. Oz bo‘lsa ham doimiy bo‘lsin." },
      ru: { title: "Ваши 10 минут учёбы ✨", body: "Прочитайте один урок в «Пути знаний» и пройдите тест. Понемногу, но постоянно." },
    }[l];
    return { ...t, url: "/learn", tag: "study" };
  },
  streak(lang: string, days: number): PushMsg {
    const t = {
      en: { title: `Keep your ${days}-day streak 🔥`, body: "You haven’t learned anything today yet. One short lesson keeps the streak alive." },
      uz: { title: `${days} kunlik seriyangizni saqlang 🔥`, body: "Bugun hali hech narsa o‘rganmadingiz. Bitta qisqa dars seriyani saqlab qoladi." },
      ru: { title: `Сохраните серию: ${days} дн. 🔥`, body: "Сегодня вы ещё ничего не изучили. Один короткий урок сохранит серию." },
    }[pick(lang)];
    return { ...t, url: "/learn", tag: "streak" };
  },
  arena(lang: string, host: string, pin: string, live: boolean, title: string): PushMsg {
    const l = pick(lang);
    const t = live ? {
      en: { title: `${host} started a live game 🎮`, body: `“${title}”. Join with PIN ${pin}.` },
      uz: { title: `${host} jonli o‘yin boshladi 🎮`, body: `“${title}”. ${pin} PIN kodi bilan qo‘shiling.` },
      ru: { title: `${host} начал(а) игру 🎮`, body: `«${title}». Присоединяйтесь по PIN ${pin}.` },
    }[l] : {
      en: { title: `${host} sent you a quiz challenge 🏆`, body: `“${title}”. Play any time with PIN ${pin}.` },
      uz: { title: `${host} sizga test musobaqasini yubordi 🏆`, body: `“${title}”. ${pin} PIN kodi bilan istalgan vaqtda o‘ynang.` },
      ru: { title: `${host} прислал(а) вам вызов 🏆`, body: `«${title}». Играйте в любое время по PIN ${pin}.` },
    }[l];
    return { ...t, url: `/play/${pin}`, tag: `arena-${pin}` };
  },
  test(lang: string): PushMsg {
    const t = {
      en: { title: "Notifications are on ✅", body: "Qalam Academy will remind you about prayer, stories and learning." },
      uz: { title: "Bildirishnomalar yoqildi ✅", body: "Qalam Academy namoz, hikoya va o‘qish haqida eslatib turadi." },
      ru: { title: "Уведомления включены ✅", body: "Qalam Academy будет напоминать о намазе, историях и учёбе." },
    }[pick(lang)];
    return { ...t, url: "/", tag: "test" };
  },
};
