import type { Recitation } from "@/content/recitations";

export function RecitationBlock({ r }: { r: Recitation }) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-border pt-3">
      <p lang="ar" className="arabic">{r.ar}</p>
      <p className="font-semibold italic text-emerald">{r.tr}</p>
      <p className="text-fg-muted">{r.en}</p>
    </div>
  );
}
