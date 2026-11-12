"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { useT } from "@/components/lang";
import { SketchNote } from "@/components/israf/sketch-note";
import { pickBi, TOOLS, type ToolId } from "@/content/israf-tools";

/** Study tools for the Israf world (currently the sketch note). */
export default function ToolPage() {
  const { world, tool } = useParams<{ world: string; tool: string }>();
  const { lang } = useT();
  const meta = TOOLS.find((x) => x.id === tool);
  if (world !== "israf" || !meta) notFound();
  const id = meta.id as ToolId;
  return (
    <>
      <PageHeader eyebrow={lang === "uz" ? "O‘quv vositalari · Isrof" : "Study tools · Israf"} title={`${meta.icon} ${pickBi(meta.title, lang)}`} sub={pickBi(meta.sub, lang)} />
      <Page>
        <Link href="/learn/israf" className="font-bold text-fg-muted">← {lang === "uz" ? "Isrof qilmaslik" : "Not Wasting (Israf)"}</Link>
        {id === "sketchnote" && <SketchNote lang={lang} />}
      </Page>
    </>
  );
}
