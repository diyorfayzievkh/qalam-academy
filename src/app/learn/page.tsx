import { Page, PageHeader } from "@/components/app-shell";
import { TopicCard } from "@/components/topic-card";
import { TOPICS } from "@/content/topics";

export default function LearnPage() {
  return (
    <>
      <PageHeader eyebrow="Learn" title="Topics"
        sub="Each topic has a short lesson and 10 questions. Earn 10 points for every first correct answer, plus a 30-point bonus for a perfect round." />
      <Page>
        <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]">
          {TOPICS.map((t) => <TopicCard key={t.id} topic={t} />)}
        </div>
        <p className="text-[0.9rem] text-fg-muted">Coming next: Duas, Quran basics, Seerah, the Mizan collection and Ramadan Quest.</p>
      </Page>
    </>
  );
}
