"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Page, PageHeader } from "@/components/app-shell";
import { useT } from "@/components/lang";
import { Comics } from "@/components/israf/comics";
import { Flashcards } from "@/components/israf/flashcards";
import { MindMap } from "@/components/israf/mind-map";
import { SketchNote } from "@/components/israf/sketch-note";
import { pickBi, TOOLS, type ToolId } from "@/content/israf-tools";

/** Study tools for the Israf world: mind map, flashcards, sketch note, comics. */
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
        <nav className="seg flex max-w-full self-start overflow-x-auto whitespace-nowrap" aria-label={lang === "uz" ? "O‘quv vositalari" : "Study tools"}>
          {TOOLS.map((x) => <Link key={x.id} href={`/learn/israf/tools/${x.id}`} aria-current={x.id === id ? "page" : undefined}
            className={`rounded-btn px-3 py-1.5 text-[0.88rem] font-bold ${x.id === id ? "bg-bg-surface shadow-sm" : "text-fg-muted"}`}>{x.icon} {pickBi(x.title, lang)}</Link>)}
        </nav>
        {id === "mindmap" && <MindMap lang={lang} />}
        {id === "flashcards" && <Flashcards lang={lang} />}
        {id === "sketchnote" && <SketchNote lang={lang} />}
        {id === "comics" && <Comics lang={lang} />}
      </Page>
    </>
  );
}
