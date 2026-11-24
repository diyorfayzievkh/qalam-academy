import type { Coin, Grade, Problem, Rng } from "./types";
import { cents, choice, fmt, halfText } from "./util";

// Grade 2, following the Descriptive Learning Plan (Checkup #2A, Part A).
// Item codes match the plan so a teacher can find each skill.

const COIN_VALUE: Record<Coin, number> = { penny: 1, nickel: 5, dime: 10, quarter: 25, half: 50, dollar: 100 };
export const coinValue = (c: Coin) => COIN_VALUE[c];

const NAMES = ["Ali", "Maryam", "Yusuf", "Aisha", "Omar", "Zaynab", "Hadiya", "Bilal", "Fatima", "Ibrahim"];
const THINGS = [["marbles", "red", "blue"], ["apples", "green", "red"], ["stickers", "star", "heart"], ["books", "story", "science"], ["dates", "soft", "dry"], ["pencils", "yellow", "green"]] as const;

// Several ways of asking the same skill, so long tests don't repeat themselves.
const askHalf = (r: Rng, n: number) => r.pick([`What is half of ${n}?`, `Share ${n} equally into 2 groups. How many in each group?`, `${n} ÷ 2 = ?`, `Half of ${n} is ___.`, `Two friends share ${n} dates equally. How many does each get?`]);

function halfProblem(n: number, r: Rng): Problem {
  const odd = n % 2 === 1;
  return {
    prompt: askHalf(r, n), visual: { type: "half", n }, kind: odd ? "half" : "number", answer: halfText(n),
    hint: odd ? `${n} is odd. Take half of ${n - 1}, then add one half.` : `Share ${n} into 2 equal groups. How many in each?`,
    explain: odd ? `Half of ${n - 1} is ${(n - 1) / 2}. One is left over, and half of 1 is ½. So half of ${n} is ${halfText(n)}.` : `${n} ÷ 2 = ${n / 2}, because ${n / 2} + ${n / 2} = ${n}.`,
  };
}

function halfTensProblem(n: number, r: Rng): Problem {
  const t = Math.floor(n / 10) * 10, o = n % 10, odd = o % 2 === 1;
  return {
    prompt: askHalf(r, n), visual: { type: "blocks", n }, kind: odd ? "half" : "number", answer: halfText(n),
    hint: `Split ${n} into ${t} and ${o}. Find half of each part.`,
    explain: `Half of ${t} is ${t / 2}. Half of ${o} is ${halfText(o)}. ${t / 2} + ${halfText(o)} = ${halfText(n)}.`,
  };
}

export const GRADE2: Grade = {
  id: "g2", n: 2, title: "Grade 2", color: "#2E86C1",
  sub: "Halves, place value to 1,000, adding and subtracting with one regroup, missing addends, coins and part-whole word problems.",
  topics: [
    { id: "number", title: "Number", color: "#2E86C1", icon: "🔢", subs: [
      { id: "ordering-1000", code: "PK-3034-00", title: "Ordering whole numbers up to 1,000",
        bigIdea: "To put numbers in order, compare them place by place, starting from the biggest place. The number with more hundreds is bigger. If the hundreds are the same, look at the tens, then the ones.",
        steps: ["Line the numbers up so the hundreds, tens and ones sit under each other.", "Compare the hundreds digits first.", "If they are the same, compare the tens. If those are the same too, compare the ones.", "Write them from least (smallest) to greatest (biggest)."],
        examples: [
          { q: "Order 352, 325, 532 from least to greatest.", work: ["Hundreds: 3, 3, 5. So 532 is the greatest.", "352 and 325 both have 3 hundreds. Tens: 5 and 2, so 325 is smaller."], answer: "325, 352, 532" },
          { q: "Which is greater: 708 or 780?", work: ["Hundreds: 7 and 7, the same.", "Tens: 0 and 8. 8 tens is more."], answer: "780 > 708" },
        ],
        visual: { type: "placevalue", n: 352, places: ["hundreds", "tens", "ones"] },
        tip: "The alligator mouth > and < always opens toward the bigger number.",
        gen: (r) => {
          const base = r.int(1, 8) * 100; const pool = new Set<number>();
          while (pool.size < 4) pool.add(r.chance(0.6) ? base + r.int(0, 99) : r.int(100, 999));
          const nums = [...pool]; const sorted = [...nums].sort((a, b) => a - b);
          const asc = r.chance(0.5);
          const right = (asc ? sorted : [...sorted].reverse()).join(", ");
          const wrong = [r.shuffle(nums).join(", "), [sorted[1], sorted[0], sorted[2], sorted[3]].join(", "), [...nums].sort((a, b) => (a % 100) - (b % 100)).join(", "), (asc ? [...sorted].reverse() : sorted).join(", ")];
          return choice(r, { prompt: `Put these in order from ${asc ? "least to greatest" : "greatest to least"}: ${r.shuffle(nums).join(", ")}`, answer: right,
            hint: "Compare hundreds first, then tens, then ones.", explain: `In order: ${right}.` }, wrong);
        } },
      { id: "100-more-less", code: "PK-3035-00", title: "100 more and 100 less",
        bigIdea: "Adding 100 changes only the hundreds digit: it goes up by 1. Taking away 100 makes the hundreds digit go down by 1. The tens and ones stay exactly the same.",
        steps: ["Find the hundreds digit.", "100 more: add 1 to the hundreds digit.", "100 less: take 1 from the hundreds digit.", "Copy the tens and ones without changing them."],
        examples: [
          { q: "What is 100 more than 457?", work: ["Hundreds digit is 4. 4 + 1 = 5.", "Tens and ones stay 5 and 7."], answer: "557" },
          { q: "What is 100 less than 603?", work: ["Hundreds digit is 6. 6 − 1 = 5.", "Tens 0 and ones 3 stay."], answer: "503" },
        ],
        visual: { type: "numberline", from: 200, to: 700, step: 100, marks: [457], jumps: [[357, 457], [457, 557]] },
        gen: (r) => {
          const n = r.int(100, 899); const more = r.chance(0.5);
          const ans = more ? n + 100 : n - 100;
          return { prompt: `What is 100 ${more ? "more" : "less"} than ${n}?`, kind: "number", answer: String(ans),
            visual: { type: "placevalue", n, places: ["hundreds", "tens", "ones"], highlight: 0 },
            hint: `Only the hundreds digit changes: ${Math.floor(n / 100)} becomes ${Math.floor(n / 100) + (more ? 1 : -1)}.`,
            explain: `${n} ${more ? "+" : "−"} 100 = ${ans}. The tens and ones stay the same.` };
        } },
      { id: "place-value", code: "PK-3038-00", title: "Place value: identify the digits",
        bigIdea: "Every digit has a place, and the place tells its value. In 472, the 4 is in the hundreds place, so it means 400. The 7 is in the tens place, so it means 70. The 2 means 2 ones.",
        steps: ["Read the number from the right: ones, tens, hundreds, thousands.", "Find which place the digit is in.", "Its value = the digit × the place (for example 7 tens = 70)."],
        examples: [
          { q: "In 836, which digit is in the tens place?", work: ["Ones: 6. Tens: 3. Hundreds: 8."], answer: "3" },
          { q: "What is the value of the 5 in 571?", work: ["The 5 is in the hundreds place.", "5 hundreds = 500."], answer: "500" },
        ],
        visual: { type: "placevalue", n: 472, places: ["hundreds", "tens", "ones"] },
        gen: (r) => {
          const big = r.chance(0.3); const n = big ? r.int(1000, 9999) : r.int(100, 999);
          const places = big ? ["thousands", "hundreds", "tens", "ones"] : ["hundreds", "tens", "ones"];
          const digits = String(n).split("").map(Number);
          if (r.chance(0.5)) {
            const i = r.int(0, digits.length - 1);
            return { prompt: `In ${fmt(n)}, which digit is in the ${places[i]} place?`, kind: "number", answer: String(digits[i]),
              hint: "Start from the right: ones, tens, hundreds, thousands.", explain: `The ${places[i]} digit of ${fmt(n)} is ${digits[i]}.` };
          }
          let i = r.int(0, digits.length - 1); while (digits[i] === 0) i = r.int(0, digits.length - 1);
          const val = digits[i] * 10 ** (digits.length - 1 - i);
          return choice(r, { prompt: `What is the value of the ${digits[i]} in ${fmt(n)}?${digits.filter((d) => d === digits[i]).length > 1 ? ` (the one in the ${places[i]} place)` : ""}`, answer: fmt(val),
            visual: { type: "placevalue", n, places, highlight: i }, hint: `Which place is it in? Multiply the digit by that place.`, explain: `${digits[i]} ${places[i]} = ${fmt(val)}.` },
            [digits[i], digits[i] * 10, digits[i] * 100, digits[i] * 1000].filter((v) => v !== val).map(fmt));
        } },
    ] },
    { id: "computation", title: "Computation", color: "#1E8449", icon: "➕", subs: [
      { id: "missing-addend-10", code: "PK-3030-00", title: "Missing addends to multiples of 10",
        bigIdea: "A missing addend is the number that is missing from an addition. To make a multiple of 10 (10, 20, 30…), ask: how much more do I need? Count up from the number you have.",
        steps: ["Look at the ones digit of the number you have.", "How many more to make 10 ones? That fills the next ten.", "Then count on by tens until you reach the target."],
        examples: [
          { q: "36 + ? = 50", work: ["36 needs 4 to make 40.", "40 needs 10 more to make 50.", "4 + 10 = 14."], answer: "14" },
          { q: "7 + ? = 30", work: ["7 needs 3 to make 10.", "10 needs 20 more to make 30.", "3 + 20 = 23."], answer: "23" },
        ],
        visual: { type: "numberline", from: 30, to: 50, step: 1, labelEvery: 5, marks: [36, 40, 50], jumps: [[36, 40], [40, 50]] },
        tip: "Make-a-ten partners: 1+9, 2+8, 3+7, 4+6, 5+5.",
        gen: (r) => {
          const target = r.int(1, 10) * 10; const a = r.int(1, target - 1);
          const ans = target - a; const first = r.chance(0.5);
          return { prompt: first ? `${a} + ? = ${target}` : `? + ${a} = ${target}`, kind: "number", answer: String(ans),
            visual: { type: "numberline", from: Math.floor(a / 10) * 10, to: target, step: target - Math.floor(a / 10) * 10 > 30 ? 10 : 1, labelEvery: target - Math.floor(a / 10) * 10 > 30 ? 1 : 5, marks: [a, target] },
            hint: `How many from ${a} to the next ten? Then count the tens up to ${target}.`,
            explain: `${a} + ${ans} = ${target}. Check: ${target} − ${a} = ${ans}.` };
        } },
      { id: "add-1-carry", code: "PK-3022-00", title: "Multi-digit addition with carrying (1 carry)",
        bigIdea: "Line the numbers up by place and add from the right. When the ones add up to 10 or more, you have made a new ten. Write the ones and carry the ten to the top of the tens column.",
        steps: ["Write one number under the other, ones under ones.", "Add the ones. If the answer is 10 or more, write the ones digit and carry 1 to the tens.", "Add the tens, including the carried 1.", "Add the hundreds."],
        examples: [
          { q: "47 + 38", work: ["Ones: 7 + 8 = 15. Write 5, carry 1.", "Tens: 1 + 4 + 3 = 8."], answer: "85" },
          { q: "256 + 127", work: ["Ones: 6 + 7 = 13. Write 3, carry 1.", "Tens: 1 + 5 + 2 = 8.", "Hundreds: 2 + 1 = 3."], answer: "383" },
        ],
        visual: { type: "column", op: "+", a: 47, b: 38, carry: "1" },
        gen: (r) => {
          const three = r.chance(0.5); let a = 0, b = 0;
          for (;;) {
            a = three ? r.int(100, 899) : r.int(11, 89); b = three ? r.int(100, 899) : r.int(11, 89);
            const o = (a % 10) + (b % 10), t = Math.floor(a / 10) % 10 + Math.floor(b / 10) % 10 + 1, h = Math.floor(a / 100) + Math.floor(b / 100) + (t >= 10 ? 1 : 0);
            if (o >= 10 && t < 10 && (!three || h < 10)) break;
          }
          return { prompt: `${a} + ${b} = ?`, kind: "number", answer: String(a + b), visual: { type: "column", op: "+", a, b },
            hint: `Add the ones first: ${a % 10} + ${b % 10} = ${(a % 10) + (b % 10)}. Carry the ten.`,
            explain: `Ones: ${a % 10} + ${b % 10} = ${(a % 10) + (b % 10)}, write ${((a % 10) + (b % 10)) % 10} and carry 1. Then add the tens${three ? " and hundreds" : ""}: ${a + b}.` };
        } },
      { id: "sub-1-borrow", code: "PK-3026-00", title: "Multi-digit subtraction with borrowing (1 borrow)",
        bigIdea: "Subtract from the right, place by place. If the top ones digit is too small, borrow: take 1 ten from the tens place and turn it into 10 ones.",
        steps: ["Write the bigger number on top, ones under ones.", "Can you take the bottom ones from the top ones? If not, borrow 1 ten: the tens digit goes down by 1 and the ones get 10 more.", "Subtract the ones, then the tens, then the hundreds."],
        examples: [
          { q: "62 − 27", work: ["2 − 7: not enough ones. Borrow: 6 tens becomes 5 tens, 2 ones becomes 12.", "Ones: 12 − 7 = 5. Tens: 5 − 2 = 3."], answer: "35" },
          { q: "541 − 218", work: ["1 − 8: borrow. 4 tens becomes 3, 1 becomes 11.", "Ones: 11 − 8 = 3. Tens: 3 − 1 = 2. Hundreds: 5 − 2 = 3."], answer: "323" },
        ],
        visual: { type: "column", op: "-", a: 62, b: 27 },
        tip: "Check by adding: 35 + 27 = 62.",
        gen: (r) => {
          const three = r.chance(0.5); let a = 0, b = 0;
          for (;;) {
            a = three ? r.int(200, 999) : r.int(30, 99); b = three ? r.int(100, a - 50) : r.int(11, a - 5);
            const ao = a % 10, bo = b % 10, at = Math.floor(a / 10) % 10, bt = Math.floor(b / 10) % 10;
            if (ao < bo && at - 1 >= bt && b < a && (!three || Math.floor(a / 100) >= Math.floor(b / 100))) break;
          }
          return { prompt: `${a} − ${b} = ?`, kind: "number", answer: String(a - b), visual: { type: "column", op: "-", a, b },
            hint: `${a % 10} − ${b % 10}? Not enough ones: borrow a ten.`,
            explain: `Borrow: ${a % 10} becomes ${(a % 10) + 10}. ${(a % 10) + 10} − ${b % 10} = ${(a % 10) + 10 - (b % 10)}. Then subtract the rest: ${a - b}. Check: ${a - b} + ${b} = ${a}.` };
        } },
    ] },
    { id: "fractions", title: "Fraction Concepts", color: "#AF601A", icon: "🍕", subs: [
      { id: "half-even-24", code: "PK-3006-00", title: "Half of even numbers up to 24",
        bigIdea: "Half means sharing into 2 equal groups. Half of an even number is a whole number, because even numbers split into two equal groups with nothing left over.",
        steps: ["Share the objects into 2 groups, one at a time, like dealing cards.", "Count one group: that is half.", "Check with a double: half + half = the number."],
        examples: [
          { q: "Half of 14", work: ["7 + 7 = 14, so each group has 7."], answer: "7" },
          { q: "Half of 20", work: ["10 + 10 = 20."], answer: "10" },
        ],
        visual: { type: "half", n: 14, split: true },
        tip: "Know your doubles and you know your halves: double 6 is 12, so half of 12 is 6.",
        gen: (r) => halfProblem(r.int(1, 12) * 2, r) },
      { id: "half-odd-25", code: "PK-3007-00", title: "Half of odd numbers up to 25",
        bigIdea: "An odd number cannot be split into two equal whole groups: one is always left over. We cut that last one in half, so each group gets a half too. Half of 7 is 3½.",
        steps: ["Take away 1 to make an even number.", "Find half of the even number.", "Add ½ for the leftover one."],
        examples: [
          { q: "Half of 7", work: ["7 − 1 = 6. Half of 6 is 3.", "The leftover 1 is shared: ½ each."], answer: "3½" },
          { q: "Half of 15", work: ["Half of 14 is 7.", "Add ½."], answer: "7½" },
        ],
        visual: { type: "half", n: 7, split: true },
        tip: "You can write 3½ as 3 1/2 or 3.5. They mean the same.",
        gen: (r) => halfProblem(r.int(0, 12) * 2 + 1, r) },
      { id: "half-even-tens-even", code: "PK-3049-00", title: "Half of even numbers: even digit in the tens place",
        bigIdea: "For a two-digit number, split it into tens and ones and halve each part. When the tens digit is even, its half is easy: half of 40 is 20, half of 80 is 40.",
        steps: ["Split the number into tens and ones: 48 = 40 + 8.", "Half of the tens: half of 40 is 20.", "Half of the ones: half of 8 is 4.", "Put them together: 20 + 4 = 24."],
        examples: [
          { q: "Half of 68", work: ["68 = 60 + 8.", "Half of 60 is 30, half of 8 is 4."], answer: "34" },
          { q: "Half of 86", work: ["Half of 80 is 40, half of 6 is 3."], answer: "43" },
        ],
        visual: { type: "blocks", n: 48 },
        gen: (r) => halfTensProblem(r.pick([2, 4, 6, 8]) * 10 + r.pick([0, 2, 4, 6, 8]), r) },
      { id: "half-odd-tens-even", code: "PK-3051-00", title: "Half of odd numbers: even digit in the tens place",
        bigIdea: "Same idea as before: split into tens and ones and halve each part. Now the ones digit is odd, so its half has a ½. Half of 47 = half of 40 + half of 7 = 20 + 3½ = 23½.",
        steps: ["Split: 47 = 40 + 7.", "Half of 40 is 20.", "Half of 7 is 3½.", "Add: 20 + 3½ = 23½."],
        examples: [
          { q: "Half of 65", work: ["Half of 60 is 30. Half of 5 is 2½."], answer: "32½" },
          { q: "Half of 29", work: ["Half of 20 is 10. Half of 9 is 4½."], answer: "14½" },
        ],
        visual: { type: "blocks", n: 47 },
        gen: (r) => halfTensProblem(r.pick([2, 4, 6, 8]) * 10 + r.pick([1, 3, 5, 7, 9]), r) },
    ] },
    { id: "problem-solving", title: "Problem Solving and Algebraic Reasoning", color: "#7D3C98", icon: "🧩", subs: [
      { id: "wholes-parts", code: "PK-3042-00", title: "Problem solving: wholes and parts",
        bigIdea: "Many word problems have a whole and two parts. If you know both parts, add them to find the whole. If you know the whole and one part, subtract to find the other part. A part-whole bar helps you see which one is missing.",
        steps: ["Read the story. What is the whole? What are the parts?", "Draw a bar: the whole on top, the parts underneath.", "Missing the whole? Add the parts. Missing a part? Whole − known part.", "Answer in a sentence with the right word (marbles, apples…)."],
        examples: [
          { q: "Ali has 24 red marbles and 18 blue marbles. How many marbles does he have?", work: ["Parts: 24 and 18. Whole: missing.", "24 + 18 = 42."], answer: "42 marbles" },
          { q: "There are 50 apples. 32 are green and the rest are red. How many are red?", work: ["Whole: 50. One part: 32.", "50 − 32 = 18."], answer: "18 red apples" },
        ],
        visual: { type: "partwhole", whole: null, parts: [24, 18], labels: ["red", "blue"] },
        gen: (r) => {
          const [thing, k1, k2] = r.pick(THINGS); const who = r.pick(NAMES);
          const p1 = r.int(8, 60), p2 = r.int(5, 40), whole = p1 + p2;
          if (r.chance(0.5)) return { prompt: `${who} has ${p1} ${k1} ${thing} and ${p2} ${k2} ${thing}. How many ${thing} does ${who} have in all?`, kind: "number", answer: String(whole), unit: thing,
            visual: { type: "partwhole", whole: null, parts: [p1, p2], labels: [k1, k2] }, hint: "Both parts are known. Put them together.", explain: `${p1} + ${p2} = ${whole} ${thing}.` };
          return { prompt: `${who} has ${whole} ${thing}. ${p1} are ${k1} and the rest are ${k2}. How many are ${k2}?`, kind: "number", answer: String(p2), unit: thing,
            visual: { type: "partwhole", whole, parts: [p1, null], labels: [k1, k2] }, hint: "You know the whole and one part. Take the part away from the whole.", explain: `${whole} − ${p1} = ${p2} ${k2} ${thing}.` };
        } },
    ] },
    { id: "measurement", title: "Measurement, Data Analysis, and Probability", color: "#B7950B", icon: "🪙", subs: [
      { id: "coins", code: "PK-3048-00", title: "Finding the total value of coins",
        bigIdea: "Each coin has a value: penny 1¢, nickel 5¢, dime 10¢, quarter 25¢, half-dollar 50¢. To count a handful, start with the coin worth the most and count on.",
        steps: ["Sort the coins from the most valuable to the least.", "Start with the biggest: count quarters by 25s (25, 50, 75).", "Count on the dimes by 10s, then nickels by 5s, then pennies by 1s.", "Write the total with ¢ (or $ and a point for 100¢ or more)."],
        examples: [
          { q: "2 quarters, 1 dime, 3 pennies", work: ["25, 50 (quarters)", "60 (dime)", "61, 62, 63 (pennies)"], answer: "63¢" },
          { q: "1 half-dollar, 2 dimes, 1 nickel", work: ["50", "60, 70", "75"], answer: "75¢" },
        ],
        visual: { type: "coins", coins: ["quarter", "quarter", "dime", "penny", "penny", "penny"] },
        tip: "100¢ = $1.00.",
        gen: (r) => {
          const coins: Coin[] = [];
          const kinds: Coin[] = r.chance(0.25) ? ["half", "quarter", "dime", "nickel", "penny"] : ["quarter", "dime", "nickel", "penny"];
          const n = r.int(3, 8);
          for (let i = 0; i < n; i++) coins.push(r.pick(kinds));
          coins.sort((a, b) => COIN_VALUE[b] - COIN_VALUE[a]);
          const total = coins.reduce((s, c) => s + COIN_VALUE[c], 0);
          return { prompt: "How much money is this?", kind: "number", answer: String(total), unit: "¢", visual: { type: "coins", coins: r.shuffle(coins) },
            hint: "Sort them: start with the biggest coins and count on.",
            explain: `Counting on from the biggest coin: ${coins.map((c) => COIN_VALUE[c]).reduce<number[]>((acc, v) => [...acc, (acc[acc.length - 1] ?? 0) + v], []).join(", ")}. Total ${cents(total)}.` };
        } },
    ] },
  ],
};

