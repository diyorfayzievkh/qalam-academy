// Runs every math generator many times and checks that its own answer is
// accepted, choices are sane and no text is broken. Run: npx tsx scripts/check-math.mts
import { GRADES } from "../src/content/math/index";
import { check } from "../src/content/math/util";
import { rng } from "../src/content/math/types";

let bad = 0; const N = 3000;
for (const g of GRADES) for (const t of g.topics) for (const s of t.subs) {
  const seen = new Set<string>(); let fails = 0;
  for (let i = 0; i < N; i++) {
    let p; try { p = s.gen(rng); } catch (e) { console.log(`✗ ${g.id}/${s.id} threw: ${(e as Error).message}`); bad++; fails++; break; }
    const text = JSON.stringify(p);
    const problems: string[] = [];
    if (/NaN|undefined|Infinity|null\b/.test(text.replace(/"whole":null|null,|,null|\[null|null\]/g, ""))) problems.push("broken text");
    if (check(p, p.answer) !== "right") problems.push(`own answer rejected: ${p.answer}`);
    if (p.kind === "choice") {
      if (!p.choices?.includes(p.answer)) problems.push("answer not in choices");
      if (new Set(p.choices).size !== p.choices!.length) problems.push("duplicate choices");
      if ((p.choices?.length ?? 0) < 2) problems.push("fewer than 2 choices");
    }
    if (p.kind === "number" && Number(p.answer) < 0) problems.push("negative answer");
    if (problems.length) { if (fails++ < 3) console.log(`✗ ${g.id}/${s.id}: ${problems.join("; ")} :: ${p.prompt}`); bad++; }
    seen.add(p.prompt);
  }
  console.log(`${fails ? "✗" : "✓"} ${g.id}/${s.id.padEnd(24)} ${seen.size} different problems`);
}
console.log(bad ? `\n${bad} problems` : "\nAll generators OK");
process.exit(bad ? 1 : 0);
