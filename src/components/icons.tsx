export type IconName = "home" | "learn" | "salah" | "times" | "qibla" | "badges" | "sun" | "moon" | "auto" | "pin" | "scale" | "more" | "hifz";

const PATHS: Record<IconName, JSX.Element> = {
  home: <path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z" />,
  learn: <><path d="M12 6c-2-1.5-5-2-8-1.5v14c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-14c-3-.5-6 0-8 1.5z" /><path d="M12 6v14" /></>,
  salah: <><path d="M5 21V10a7 7 0 0 1 14 0v11z" /><path d="M9 21v-7a3 3 0 0 1 6 0v7" /><path d="M3 21h18" /></>,
  times: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
  qibla: <><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  badges: <><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
  auto: <><circle cx="12" cy="12" r="8" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" /></>,
  scale: <><path d="M12 4v16M8 20h8M5 7h14" /><path d="M5 7l-3 6a3 1.5 0 0 0 6 0zM19 7l-3 6a3 1.5 0 0 0 6 0z" /></>,
  hifz: <><path d="M4 19 12 8l8 11M4 19h16M7 9.5c2-1.5 3.5-2 5-1.5 1.5-.5 3 0 5 1.5" /><path d="M12 8V5" /></>,
  more: <><circle cx="5" cy="12" r="1.6" fill="currentColor" /><circle cx="12" cy="12" r="1.6" fill="currentColor" /><circle cx="19" cy="12" r="1.6" fill="currentColor" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
};

export function Icon({ name, size = 22, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {PATHS[name]}
    </svg>
  );
}
