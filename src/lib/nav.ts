import type { IconName } from "@/components/icons";

export const NAV: { href: string; label: string; icon: IconName; desc: string }[] = [
  { href: "/", label: "Home", icon: "home", desc: "Next prayer and your progress" },
  { href: "/learn", label: "Ilm Quest", icon: "learn", desc: "Knowledge Base worlds and quizzes" },
  { href: "/salah", label: "Salah", icon: "salah", desc: "Hanafi prayer guide, step by step" },
  { href: "/hifz", label: "Hifz", icon: "hifz", desc: "Memorise sūrahs with audio and spaced review" },
  { href: "/times", label: "Prayer times", icon: "times", desc: "Today’s times with Hanafi Asr" },
  { href: "/qibla", label: "Qibla", icon: "qibla", desc: "Direction of the Kaʿbah" },
  { href: "/stories", label: "Bedtime Stories", icon: "stars", desc: "Stories of the prophets, companions, imams and cities of the Quran" },
  { href: "/ramadan", label: "Ramadan Quest", icon: "moon", desc: "Tracker, 30-day plan, duas and history" },
  { href: "/mizan", label: "Mizan", icon: "scale", desc: "Heaviest on the scale, with myth check" },
  { href: "/badges", label: "Badges", icon: "badges", desc: "Your 10 badges on the Path of Light" },
];

// Phones show four main tabs plus "More".
export const TABS: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/learn", label: "Learn", icon: "learn" },
  { href: "/salah", label: "Salah", icon: "salah" },
  { href: "/times", label: "Times", icon: "times" },
  { href: "/more", label: "More", icon: "more" },
];
export const MORE_PATHS = ["/more", "/stories", "/hifz", "/qibla", "/ramadan", "/mizan", "/badges"];

