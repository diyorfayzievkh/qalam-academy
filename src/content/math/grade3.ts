import type { Grade } from "./types";
import { choice, fmt } from "./util";

const NAMES = ["Ali", "Maryam", "Yusuf", "Aisha", "Omar", "Zaynab", "Bilal", "Fatima", "Hamza", "Khadija"];
const pad = (m: number) => String(m).padStart(2, "0");
const clock = (mins: number) => { const t = ((mins % 720) + 720) % 720; const h = Math.floor(t / 60); return `${h === 0 ? 12 : h}:${pad(t % 60)}`; };

export const GRADE3: Grade = {
  id: "g3", n: 3, title: "Grade 3", color: "#1E8449",
  sub: "Rounding, place value to 10,000, regrouping, multiplication and division facts, first fractions, time, area and perimeter.",
  topics: [
    { id: "number", title: "Number", color: "#2E86C1", icon: "🔢", subs: [
      { id: "rounding", title: "Rounding to the nearest 10 and 100",
        bigIdea: "Rounding finds a nearby friendly number. Look at the digit just to the right of the place you are rounding to. If it is 5 or more, round up. If it is 4 or less, round down.",
        steps: ["Underline the place you are rounding to.", "Look at the digit to its right.", "5, 6, 7, 8, 9: round up (add 1 to the underlined digit). 0–4: keep it.", "Change every digit after it to 0."],
        examples: [
          { q: "Round 347 to the nearest ten.", work: ["Tens digit 4. Next digit 7 → round up.", "4 tens becomes 5 tens."], answer: "350" },
          { q: "Round 347 to the nearest hundred.", work: ["Hundreds digit 3. Next digit 4 → round down."], answer: "300" },
        ],
        visual: { type: "numberline", from: 340, to: 350, step: 1, labelEvery: 5, marks: [347] },
        tip: "On a number line, which ten (or hundred) is the number closer to?",
        gen: (r) => {
          const n = r.int(101, 9899); const to = r.pick([10, 100]);
          const fixed = n % to >= to / 2 ? Math.ceil(n / to) * to : Math.floor(n / to) * to;
          return { prompt: `Round ${fmt(n)} to the nearest ${to === 10 ? "ten" : "hundred"}.`, kind: "number", answer: String(fixed),
            visual: { type: "numberline", from: Math.floor(n / to) * to, to: Math.floor(n / to) * to + to, step: to / 10, labelEvery: 5, marks: [n] },
            hint: `Look at the ${to === 10 ? "ones" : "tens"} digit: ${to === 10 ? n % 10 : Math.floor(n / 10) % 10}. 5 or more rounds up.`,
            explain: `${fmt(n)} is between ${fmt(Math.floor(n / to) * to)} and ${fmt(Math.floor(n / to) * to + to)}. It rounds to ${fmt(fixed)}.` };
        } },
      { id: "place-value-10000", title: "Place value to 10,000",
        bigIdea: "Numbers up to 10,000 have thousands, hundreds, tens and ones. Expanded form shows the value of each digit: 4,725 = 4,000 + 700 + 20 + 5.",
        steps: ["Read the digits from left: thousands, hundreds, tens, ones.", "Value = digit × place.", "Expanded form adds the values together. Skip any zeros."],
        examples: [
          { q: "Write 6,308 in expanded form.", work: ["6 thousands, 3 hundreds, 0 tens, 8 ones."], answer: "6,000 + 300 + 8" },
          { q: "What number is 5,000 + 40 + 2?", work: ["5 thousands, 0 hundreds, 4 tens, 2 ones."], answer: "5,042" },
        ],
        visual: { type: "placevalue", n: 4725, places: ["thousands", "hundreds", "tens", "ones"] },
        gen: (r) => {
          const n = r.int(1000, 9999); const d = String(n).split("").map(Number);
          const parts = d.map((x, i) => x * 10 ** (3 - i)).filter(Boolean);
          if (r.chance(0.5)) return { prompt: `What number is ${parts.map(fmt).join(" + ")}?`, kind: "number", answer: String(n),
            hint: "Put each digit in its place. Use 0 for an empty place.", explain: `${parts.map(fmt).join(" + ")} = ${fmt(n)}.` };
          const wrong = [d.map((x, i) => x * 10 ** (2 - i)).filter(Boolean).map(fmt).join(" + "), d.map(String).join(" + "), [...parts].reverse().map((x, i) => (i === 0 ? x * 10 : x)).map(fmt).join(" + ")];
          return choice(r, { prompt: `Which is ${fmt(n)} in expanded form?`, answer: parts.map(fmt).join(" + "), visual: { type: "placevalue", n, places: ["thousands", "hundreds", "tens", "ones"] },
            hint: "Each digit times its place.", explain: `${fmt(n)} = ${parts.map(fmt).join(" + ")}.` }, wrong);
        } },
    ] },
    { id: "computation", title: "Computation", color: "#1E8449", icon: "➕", subs: [
      { id: "add-regroup", title: "Adding 3-digit numbers with regrouping",
        bigIdea: "Add place by place from the right. Any time a column makes 10 or more, write the ones digit and carry 1 to the next column. Sometimes you carry more than once.",
        steps: ["Line up ones, tens and hundreds.", "Add the ones. Carry if 10 or more.", "Add the tens plus any carry. Carry again if needed.", "Add the hundreds plus any carry."],
        examples: [
          { q: "468 + 375", work: ["Ones 8 + 5 = 13: write 3, carry 1.", "Tens 1 + 6 + 7 = 14: write 4, carry 1.", "Hundreds 1 + 4 + 3 = 8."], answer: "843" },
          { q: "599 + 206", work: ["9 + 6 = 15, carry 1.", "1 + 9 + 0 = 10, write 0, carry 1.", "1 + 5 + 2 = 8."], answer: "805" },
        ],
        visual: { type: "column", op: "+", a: 468, b: 375, carry: "11" },
        gen: (r) => { const a = r.int(150, 799), b = r.int(150, 999 - a); return { prompt: `${a} + ${b} = ?`, kind: "number", answer: String(a + b), visual: { type: "column", op: "+", a, b },
          hint: "Start with the ones. Carry when a column makes 10 or more.", explain: `${a} + ${b} = ${a + b}.` }; } },
      { id: "sub-regroup", title: "Subtracting with regrouping (and across zeros)",
        bigIdea: "When a top digit is too small, borrow from the next place. Across a zero, you borrow a hundred first: 400 is 3 hundreds, 9 tens and 10 ones.",
        steps: ["Line the numbers up.", "Start with the ones. Borrow a ten if needed.", "If the tens digit is 0, borrow a hundred: it becomes 10 tens, then lend one ten to the ones.", "Subtract each column. Check by adding."],
        examples: [
          { q: "503 − 268", work: ["3 − 8: need to borrow, but tens is 0.", "503 = 4 hundreds, 9 tens, 13 ones.", "13 − 8 = 5, 9 − 6 = 3, 4 − 2 = 2."], answer: "235" },
          { q: "724 − 351", work: ["4 − 1 = 3.", "2 − 5: borrow. 12 − 5 = 7, hundreds 6 − 3 = 3."], answer: "373" },
        ],
        visual: { type: "column", op: "-", a: 503, b: 268 },
        gen: (r) => { const a = r.chance(0.35) ? r.int(2, 9) * 100 + r.int(0, 9) : r.int(300, 999); const b = r.int(101, a - 20);
          return { prompt: `${a} − ${b} = ?`, kind: "number", answer: String(a - b), visual: { type: "column", op: "-", a, b },
            hint: "Start with the ones. If a top digit is smaller, borrow from the left.", explain: `${a} − ${b} = ${a - b}. Check: ${a - b} + ${b} = ${a}.` }; } },
      { id: "mult-facts", title: "Multiplication facts (0–10)",
        bigIdea: "Multiplication is quick adding of equal groups. 4 × 3 means 4 groups of 3: 3 + 3 + 3 + 3 = 12. Knowing the facts by heart makes all later math easier.",
        steps: ["Read a × b as “a groups of b”.", "Use a fact you know: double, then double again for ×4; ×5 ends in 0 or 5; ×9: one less than ×10.", "Turn it around if it helps: 3 × 8 = 8 × 3."],
        examples: [
          { q: "6 × 4", work: ["Double 6 = 12, double again = 24."], answer: "24" },
          { q: "9 × 7", work: ["10 × 7 = 70, take away one 7."], answer: "63" },
        ],
        visual: { type: "groups", groups: 4, each: 3 },
        tip: "×0 is always 0. ×1 keeps the number the same. ×10 adds a zero.",
        gen: (r) => { const a = r.int(2, 10), b = r.int(0, 10); return { prompt: `${a} × ${b} = ?`, kind: "number", answer: String(a * b),
          visual: a * b <= 40 && b > 0 ? { type: "groups", groups: a, each: b } : undefined, hint: `${a} groups of ${b}.`, explain: `${a} × ${b} = ${a * b}.` }; } },
      { id: "arrays", title: "Arrays and equal groups",
        bigIdea: "An array is objects in equal rows. Rows × columns tells you how many there are. An array also shows why 3 × 5 = 5 × 3: turn it on its side and the total is the same.",
        steps: ["Count the rows.", "Count how many are in one row.", "Multiply rows × number in each row."],
        examples: [
          { q: "4 rows of 6 chairs", work: ["4 × 6 = 24."], answer: "24 chairs" },
          { q: "Write two facts for an array with 3 rows of 7.", work: ["3 × 7 = 21 and 7 × 3 = 21."], answer: "21" },
        ],
        visual: { type: "array", rows: 3, cols: 5 },
        gen: (r) => { const rows = r.int(2, 6), cols = r.int(2, 9);
          return { prompt: `How many dots are in this array? (${rows} rows)`, kind: "number", answer: String(rows * cols), visual: { type: "array", rows, cols },
            hint: "Rows × how many in one row.", explain: `${rows} rows of ${cols}: ${rows} × ${cols} = ${rows * cols}.` }; } },
      { id: "div-facts", title: "Division facts",
        bigIdea: "Division shares a number into equal groups. 12 ÷ 3 asks: if 12 is shared into 3 equal groups, how many in each? Every division has a multiplication partner: 3 × 4 = 12, so 12 ÷ 3 = 4.",
        steps: ["Read a ÷ b as “a shared into b groups”.", "Think of the multiplication: b × ? = a.", "Check: answer × b = a."],
        examples: [
          { q: "35 ÷ 5", work: ["5 × 7 = 35."], answer: "7" },
          { q: "24 cookies shared by 6 children", work: ["6 × 4 = 24."], answer: "4 each" },
        ],
        visual: { type: "groups", groups: 3, each: 4 },
        gen: (r) => { const b = r.int(2, 10), q = r.int(1, 10); return { prompt: `${b * q} ÷ ${b} = ?`, kind: "number", answer: String(q),
          visual: b * q <= 40 ? { type: "groups", groups: b, each: q } : undefined, hint: `${b} × ? = ${b * q}`, explain: `${b} × ${q} = ${b * q}, so ${b * q} ÷ ${b} = ${q}.` }; } },
    ] },
    { id: "fractions", title: "Fractions", color: "#AF601A", icon: "🍕", subs: [
      { id: "name-fractions", title: "Naming fractions",
        bigIdea: "A fraction names equal parts of a whole. The bottom number (denominator) says how many equal parts the whole is cut into. The top number (numerator) says how many parts we are talking about.",
        steps: ["Count all the equal parts: that is the denominator.", "Count the shaded parts: that is the numerator.", "Write numerator / denominator."],
        examples: [
          { q: "A pizza cut into 8 equal slices, 3 eaten.", work: ["8 parts in all, 3 taken."], answer: "3/8" },
          { q: "A bar in 4 parts, 4 shaded.", work: ["4/4 is one whole."], answer: "4/4 = 1" },
        ],
        visual: { type: "fraction", num: 3, den: 8, shape: "circle" },
        gen: (r) => { const den = r.pick([2, 3, 4, 6, 8]), num = r.int(1, den - 1);
          return { prompt: "What fraction is shaded?", kind: "fraction", answer: `${num}/${den}`, visual: { type: "fraction", num, den, shape: r.pick(["bar", "circle"] as const) },
            hint: "Bottom: all the parts. Top: the shaded parts.", explain: `${num} of ${den} equal parts are shaded: ${num}/${den}.` }; } },
      { id: "compare-fractions", title: "Comparing fractions",
        bigIdea: "With the same denominator, the bigger numerator is the bigger fraction: 5/8 > 3/8. With the same numerator, the smaller denominator wins, because the pieces are bigger: 1/3 > 1/6.",
        steps: ["Same bottom? Compare the tops.", "Same top? The smaller bottom means bigger pieces, so a bigger fraction.", "Draw bars of the same length to check."],
        examples: [
          { q: "2/6 ? 5/6", work: ["Same sixths. 2 < 5."], answer: "2/6 < 5/6" },
          { q: "1/4 ? 1/8", work: ["Quarters are bigger than eighths."], answer: "1/4 > 1/8" },
        ],
        visual: { type: "fractions", items: [{ num: 1, den: 4 }, { num: 1, den: 8 }] },
        gen: (r) => { const sameDen = r.chance(0.5); const d = r.pick([3, 4, 6, 8]);
          let a, b; if (sameDen) { a = { num: r.int(1, d - 1), den: d }; b = { num: r.int(1, d - 1), den: d }; } else { const n = r.int(1, 2); a = { num: n, den: r.pick([2, 3, 4, 6, 8]) }; b = { num: n, den: r.pick([2, 3, 4, 6, 8]) }; }
          const va = a.num / a.den, vb = b.num / b.den; const sign = va > vb ? ">" : va < vb ? "<" : "=";
          return choice(r, { prompt: `${a.num}/${a.den}  ?  ${b.num}/${b.den}`, answer: sign, visual: { type: "fractions", items: [a, b] },
            hint: sameDen ? "Same denominator: compare the numerators." : "Same numerator: smaller denominator means bigger pieces.", explain: `${a.num}/${a.den} ${sign} ${b.num}/${b.den}.` }, [">", "<", "="]); } },
    ] },
    { id: "measurement", title: "Measurement and Geometry", color: "#B7950B", icon: "📏", subs: [
      { id: "time-minute", title: "Telling time to the minute",
        bigIdea: "The short hand shows the hour. The long hand shows the minutes: each number on the clock is 5 minutes, and each small tick is 1 minute.",
        steps: ["Hour: the number the short hand has just passed.", "Minutes: count by 5s to the last number the long hand passed, then count on the small ticks by 1s.", "Write hour:minutes, like 4:37."],
        examples: [
          { q: "Short hand just past 4, long hand 2 ticks after the 7", work: ["Hour 4. 7 × 5 = 35, plus 2 = 37."], answer: "4:37" },
          { q: "Short hand near 9, long hand on 12", work: ["On the 12 means 00 minutes."], answer: "9:00" },
        ],
        visual: { type: "clock", h: 4, m: 37 },
        gen: (r) => { const h = r.int(1, 12), m = r.int(0, 59);
          return { prompt: "What time does the clock show?", kind: "time", answer: `${h}:${pad(m)}`, visual: { type: "clock", h, m },
            hint: "Short hand = hour. Long hand: count 5s, then 1s.", explain: `The time is ${h}:${pad(m)}.` }; } },
      { id: "elapsed-time", title: "Elapsed time",
        bigIdea: "Elapsed time is how much time passes from start to end. Jump forward on a time line: first to the next full hour, then by hours, then the extra minutes.",
        steps: ["Write the start time.", "Jump in friendly steps: to the next o'clock, then whole hours, then minutes.", "Add up the jumps, or find the end time."],
        examples: [
          { q: "Starts 2:40, lasts 35 minutes. Ends?", work: ["2:40 + 20 min = 3:00.", "15 more minutes = 3:15."], answer: "3:15" },
          { q: "From 9:15 to 11:30?", work: ["9:15 → 11:15 is 2 hours.", "+15 min."], answer: "2 h 15 min" },
        ],
        visual: { type: "numberline", from: 160, to: 200, step: 5, labelEvery: 4, marks: [160, 180, 195] },
        gen: (r) => { const start = r.int(1, 11) * 60 + r.int(0, 11) * 5; const add = r.pick([15, 20, 25, 30, 35, 40, 45, 50, 55, 70, 85, 95]);
          const who = r.pick(NAMES); const he = ["Ali", "Yusuf", "Omar", "Bilal", "Hamza"].includes(who) ? "he" : "she";
          return { prompt: `${who} starts reading at ${clock(start)} and reads for ${add} minutes. What time does ${he} stop?`, kind: "time", answer: clock(start + add),
            hint: `Jump to the next o'clock first: ${clock(start)} → ${clock(Math.ceil(start / 60) * 60)}.`, explain: `${clock(start)} + ${add} min = ${clock(start + add)}.` }; } },
      { id: "area-perimeter", title: "Area and perimeter of rectangles",
        bigIdea: "Area is how many unit squares cover a shape (inside). Perimeter is the distance all the way around (outside edge). For a rectangle, area = length × width; perimeter = add all four sides.",
        steps: ["Area: count the squares, or multiply length × width. Units: square units.", "Perimeter: add the four sides: length + width + length + width.", "Do not mix them up: inside = area, around = perimeter."],
        examples: [
          { q: "Rectangle 5 by 3: area?", work: ["5 × 3 = 15 squares."], answer: "15 square units" },
          { q: "Rectangle 5 by 3: perimeter?", work: ["5 + 3 + 5 + 3 = 16."], answer: "16 units" },
        ],
        visual: { type: "grid", w: 5, h: 3, showSides: true },
        gen: (r) => { const w = r.int(2, 9), h = r.int(2, 6); const area = r.chance(0.5);
          return { prompt: `What is the ${area ? "area" : "perimeter"} of this rectangle?`, kind: "number", answer: String(area ? w * h : 2 * (w + h)), unit: area ? "square units" : "units",
            visual: { type: "grid", w, h, showSides: true }, hint: area ? "Count the squares inside, or multiply length × width." : "Add all four sides.",
            explain: area ? `${w} × ${h} = ${w * h} square units.` : `${w} + ${h} + ${w} + ${h} = ${2 * (w + h)} units.` }; } },
    ] },
    { id: "problem-solving", title: "Problem Solving", color: "#7D3C98", icon: "🧩", subs: [
      { id: "two-step", title: "Two-step word problems",
        bigIdea: "Some stories need two steps. Find the hidden question first, solve it, then use that answer for the main question.",
        steps: ["Read the whole problem. What is the final question?", "What do you need to know first? Solve that step.", "Use it to solve the final step.", "Does the answer make sense?"],
        examples: [
          { q: "Omar buys 3 packs of 6 pencils and gives away 5. How many are left?", work: ["Step 1: 3 × 6 = 18 pencils.", "Step 2: 18 − 5 = 13."], answer: "13 pencils" },
          { q: "48 dates shared equally into 6 boxes, then 2 eaten from one box. How many in that box?", work: ["48 ÷ 6 = 8.", "8 − 2 = 6."], answer: "6 dates" },
        ],
        visual: { type: "groups", groups: 3, each: 6 },
        gen: (r) => { const who = r.pick(NAMES); const packs = r.int(2, 6), each = r.int(3, 9), give = r.int(1, packs * each - 1);
          if (r.chance(0.5)) return { prompt: `${who} buys ${packs} packs of ${each} stickers and gives away ${give}. How many stickers are left?`, kind: "number", answer: String(packs * each - give), unit: "stickers",
            hint: `First find the total: ${packs} × ${each}.`, explain: `${packs} × ${each} = ${packs * each}. ${packs * each} − ${give} = ${packs * each - give}.` };
          const more = r.int(2, 20);
          return { prompt: `A class has ${packs} rows of ${each} chairs. ${more} more chairs are brought in. How many chairs are there now?`, kind: "number", answer: String(packs * each + more), unit: "chairs",
            hint: `First: ${packs} rows × ${each}.`, explain: `${packs} × ${each} = ${packs * each}. ${packs * each} + ${more} = ${packs * each + more}.` }; } },
    ] },
  ],
};

