import type { ReactNode } from "react";

// Profile avatars: original illustrated motifs from nature and Islamic
// heritage. No faces or figures, so they suit every family.

type Def = { id: string; label: string; from: string; to: string; art: ReactNode };

const W = "#FFFFFF";
const G = "#F6D28B";

export const AVATARS: Def[] = [
  { id: "crescent", label: "Crescent", from: "#0D1B3E", to: "#2B4A8A", art: (<>
    <path d="M58 22a26 26 0 1 0 16 46 22 22 0 1 1 -16 -46z" fill={G} />
    <path d="M72 30l2.4 5 5.4.6-4 3.7 1.1 5.3-4.9-2.7-4.9 2.7 1.1-5.3-4-3.7 5.4-.6z" fill={W} />
  </>) },
  { id: "lantern", label: "Lantern", from: "#5A2A12", to: "#C97A2E", art: (<>
    <path d="M50 14v8" stroke={G} strokeWidth={3} strokeLinecap="round" />
    <path d="M40 26h20l-3 6H43z" fill={G} />
    <path d="M40 32h20c4 10 4 22 0 32H40c-4-10-4-22 0-32z" fill="#FFE7B0" />
    <path d="M50 36c6 6 6 18 0 24c-6-6-6-18 0-24z" fill="#F29D38" />
    <path d="M42 64h16l-2 6H44z" fill={G} />
  </>) },
  { id: "palm", label: "Palm tree", from: "#0B4644", to: "#2E9A82", art: (<>
    <circle cx="70" cy="30" r="9" fill={G} />
    <path d="M48 82c2-14 2-28-2-40" stroke="#6B4423" strokeWidth={5} strokeLinecap="round" fill="none" />
    <path d="M46 42c-10-8-22-6-28 2c10-2 18 0 28-2zM46 42c4-12 16-16 26-12c-10 2-18 6-26 12zM46 42c-14-2-22 6-24 16c6-8 14-12 24-16zM46 42c12-2 22 4 26 14c-8-6-16-10-26-14z" fill="#9BE3A7" />
    <path d="M24 84h52" stroke="#E8C98A" strokeWidth={6} strokeLinecap="round" />
  </>) },
  { id: "tulip", label: "Tulip", from: "#6E2C3A", to: "#D56B7A", art: (<>
    <path d="M50 46v34" stroke="#7FD18C" strokeWidth={4} strokeLinecap="round" />
    <path d="M50 66c-10-2-16-10-16-18c8 2 14 8 16 18zM50 72c10-2 16-10 16-18c-8 2-14 8-16 18z" fill="#7FD18C" />
    <path d="M36 26c4 4 8 4 8 4l6-10 6 10s4 0 8-4c2 14-4 24-14 24S34 40 36 26z" fill="#FFD1DA" />
  </>) },
  { id: "mountain", label: "Mountains", from: "#1C2450", to: "#4F6FC0", art: (<>
    <circle cx="66" cy="30" r="10" fill={G} />
    <path d="M10 82l26-40 14 20 10-12 30 32z" fill="#D9E4FF" />
    <path d="M36 42l6 9-6-2-5 4z" fill={W} />
  </>) },
  { id: "book", label: "Book", from: "#08352A", to: "#1F7A5C", art: (<>
    <path d="M50 34c-10-6-22-8-32-6v40c10-2 22 0 32 6z" fill="#F5EFDC" />
    <path d="M50 34c10-6 22-8 32-6v40c-10-2-22 0-32 6z" fill="#EAE2C8" />
    <path d="M50 34v40" stroke={G} strokeWidth={2} />
    <path d="M24 40c8-1 15 0 22 3M24 48c8-1 15 0 22 3M24 56c8-1 15 0 22 3M54 43c7-3 14-4 22-3M54 51c7-3 14-4 22-3M54 59c7-3 14-4 22-3" stroke="#9AA58F" strokeWidth={1.6} />
  </>) },
  { id: "star", label: "Star", from: "#3E2A5C", to: "#8A5CC0", art: (<>
    <path d="M50 16l9 20 22 2-16 15 5 22-20-12-20 12 5-22-16-15 22-2z" fill={G} />
    <circle cx="22" cy="24" r="2" fill={W} /><circle cx="80" cy="74" r="2.4" fill={W} /><circle cx="78" cy="22" r="1.6" fill={W} />
  </>) },
  { id: "dome", label: "Dome", from: "#0F4C6E", to: "#3FA7C9", art: (<>
    <path d="M30 62c0-16 9-26 20-30c11 4 20 14 20 30z" fill="#F0FAFF" />
    <path d="M50 22v10" stroke={G} strokeWidth={2.5} />
    <path d="M47 20a4 4 0 1 0 6 0a3 3 0 1 1-6 0" fill={G} />
    <rect x="24" y="62" width="52" height="18" rx="2" fill="#D6EEF7" />
    <path d="M44 80v-10a6 6 0 0 1 12 0v10z" fill="#3FA7C9" />
    <rect x="14" y="40" width="6" height="40" rx="1" fill="#D6EEF7" /><rect x="80" y="40" width="6" height="40" rx="1" fill="#D6EEF7" />
  </>) },
  { id: "rose", label: "Rose", from: "#7A1F3D", to: "#E05A7A", art: (<>
    <path d="M50 54v28" stroke="#7FD18C" strokeWidth={4} strokeLinecap="round" />
    <path d="M50 70c-8 0-14-4-16-10c8 0 14 4 16 10z" fill="#7FD18C" />
    <circle cx="50" cy="40" r="18" fill="#FF8FA8" />
    <path d="M50 28c8 0 12 6 10 12c-2-6-8-8-12-6c4 2 6 6 4 10c-2-4-6-6-10-4c0-6 2-12 8-12z" fill="#C93A5E" />
  </>) },
  { id: "camel", label: "Desert", from: "#7A3E1D", to: "#E6B373", art: (<>
    <circle cx="70" cy="28" r="10" fill="#FFF0C9" />
    <path d="M6 70q22-14 44-4t44-6v26H6z" fill="#C0783E" />
    <path d="M6 80q30-10 60-2t28-4v12H6z" fill="#8E4A22" />
    <path d="M26 66l2-14 4 14" stroke="#2F5E3E" strokeWidth={3} fill="none" /><path d="M22 54q6-6 12 0" stroke="#2F5E3E" strokeWidth={3} fill="none" />
  </>) },
  { id: "sail", label: "Sailboat", from: "#12406A", to: "#4A8FD1", art: (<>
    <path d="M50 18v46" stroke="#F5EFDC" strokeWidth={2.5} />
    <path d="M52 20c12 10 18 24 18 40H52z" fill={W} />
    <path d="M48 28c-8 8-12 20-12 32h12z" fill="#FFE1A3" />
    <path d="M28 66h44l-6 10H34z" fill={G} />
    <path d="M10 82q10-6 20 0t20 0t20 0t20 0" stroke="#BFE0FF" strokeWidth={3} fill="none" />
  </>) },
  { id: "tree", label: "Tree", from: "#24502A", to: "#5FA65A", art: (<>
    <path d="M50 86V56" stroke="#6B4423" strokeWidth={6} strokeLinecap="round" />
    <circle cx="50" cy="40" r="22" fill="#A8E6A0" />
    <circle cx="34" cy="48" r="12" fill="#8BD68A" /><circle cx="66" cy="48" r="12" fill="#8BD68A" />
    <circle cx="44" cy="36" r="3" fill="#FF8A80" /><circle cx="60" cy="44" r="3" fill="#FF8A80" /><circle cx="40" cy="52" r="3" fill="#FF8A80" />
  </>) },
];

export { AVATAR_IDS } from "./avatar-ids";
const BY_ID = Object.fromEntries(AVATARS.map((a) => [a.id, a]));

/** A rounded avatar tile. Falls back to the first letter of the name when no avatar is chosen. */
export function Avatar({ id, name, size = 40, className = "" }: { id?: string | null; name?: string; size?: number; className?: string }) {
  const a = id ? BY_ID[id] : undefined;
  const r = Math.round(size * 0.28);
  if (!a) {
    return (
      <span aria-hidden="true" className={`inline-grid flex-none place-items-center bg-gold-soft font-display font-bold text-gold ${className}`}
        style={{ width: size, height: size, borderRadius: r, fontSize: size * 0.45 }}>
        {(name?.trim()[0] ?? "☾").toUpperCase()}
      </span>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" width={size} height={size} className={`flex-none ${className}`} style={{ borderRadius: r }}>
      <defs>
        <linearGradient id={`av-${a.id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a.from} /><stop offset="1" stopColor={a.to} /></linearGradient>
      </defs>
      <rect width="100" height="100" rx="28" fill={`url(#av-${a.id})`} />
      {a.art}
    </svg>
  );
}
