// Storyteller voices to audition for the bedtime stories (ElevenLabs).
// The first group are native Arabic speakers; the last are English narrators
// for comparison. Samples are generated on the server with the family's own
// ElevenLabs key (ELEVENLABS_API_KEY), so nothing here is secret.

export type Voice = { id: string; name: string; gender: "Female" | "Male"; accent: string; note: string; group: "arab" | "english" };

export const VOICES: Voice[] = [
  { id: "mRdG9GYEjJmIzqbYTidv", name: "Sana", gender: "Female", accent: "Arabic · Modern Standard", note: "Calm, soft and sincere", group: "arab" },
  { id: "XTa3iQyMA6f1qrI4F6kZ", name: "Sara", gender: "Female", accent: "Arabic · Modern Standard", note: "Soft, expressive and warm", group: "arab" },
  { id: "4wf10lgibMnboGJGCLrP", name: "Farah", gender: "Female", accent: "Arabic · Jordanian", note: "Smooth, calm and warm", group: "arab" },
  { id: "qi4PkV9c01kb869Vh7Su", name: "Asmaa", gender: "Female", accent: "Arabic · Modern Standard", note: "Gentle, conversational", group: "arab" },
  { id: "wxweiHvoC2r2jFM7mS8b", name: "Haytham", gender: "Male", accent: "Arabic · Egyptian", note: "Made for storytelling", group: "arab" },
  { id: "QRq5hPRAKf5ZhSlTBH6r", name: "Yahya", gender: "Male", accent: "Arabic · Modern Standard", note: "Deep, warm and expressive", group: "arab" },
  { id: "MI88rOZjXbH22N8KHXUo", name: "Ali", gender: "Male", accent: "Arabic · Saudi", note: "Calm, deep narrator", group: "arab" },
  { id: "rPNcQ53R703tTmtue1AT", name: "Mazen Lawand", gender: "Male", accent: "Arabic · Modern Standard", note: "Deep and professional", group: "arab" },
  { id: "8AAP6bokfGscJYibhuD3", name: "Adam", gender: "Male", accent: "English (British) · also Arabic", note: "Narrator who reads both languages", group: "english" },
  { id: "pFZP5JQG7iQjIQuC4Bku", name: "Lily", gender: "Female", accent: "English (British)", note: "Warm narration", group: "english" },
  { id: "Xb7hH8MSUJpSbSDYk0k2", name: "Alice", gender: "Female", accent: "English (British)", note: "Clear, engaging", group: "english" },
  { id: "JBFqnCBsd6RMkjVDRZzb", name: "George", gender: "Male", accent: "English (British)", note: "Warm storyteller", group: "english" },
];

export type SampleLang = "en" | "ar" | "uz" | "ru";

// The opening of "Abū Hurayrah, his mother and the bowl of milk", written for speaking.
export const SAMPLES: Record<SampleLang, string> = {
  en: "Once, Abu Hurayrah was so hungry that he lay on the ground, pressing his stomach. He sat by the road, hoping someone would invite him to eat. Then the Prophet, peace be upon him, walked past. He looked at Abu Hurayrah's face… and smiled, because he knew exactly what was in his heart. “Abu Hurayrah! Follow me.”",
  ar: "كان أبو هريرةَ جائعًا جدًّا، حتى إنه كان يضعُ يدَه على بطنه من شدّة الجوع. فجلس على الطريق يرجو أن يدعوَه أحدٌ إلى الطعام. فمرَّ به النبيُّ صلّى اللهُ عليه وسلّم، فنظر إلى وجهه… وتبسّم، لأنه عرف ما في قلبه، وقال: «يا أبا هريرة، اتبعني».",
  uz: "Bir marta Abu Hurayra shunchalik och qoldiki, qornini bosib yerda yotdi. Kimdir uni taomga taklif qilar, degan umidda yo‘l bo‘yida o‘tirdi. Shunda Payg‘ambarimiz sollallohu alayhi vasallam o‘tib qoldilar. Abu Hurayraning yuziga qarab… jilmaydilar, chunki uning qalbida nima borligini aniq bilardilar. “Abu Hurayra! Orqamdan yur.”",
  ru: "Однажды Абу Хурайра был так голоден, что лежал на земле, прижимая живот. Он сел у дороги в надежде, что кто-нибудь пригласит его поесть. И тут мимо проходил Пророк, мир ему и благословение Аллаха. Он взглянул на лицо Абу Хурайры… и улыбнулся, потому что точно знал, что у того на сердце. «Абу Хурайра! Иди за мной».",
};
