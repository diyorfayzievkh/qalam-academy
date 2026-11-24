import type { Grade } from "./types";
import { choice, fmt, fracText, near } from "./util";

const NAMES = ["Ali", "Maryam", "Yusuf", "Aisha", "Omar", "Zaynab", "Bilal", "Fatima", "Hamza", "Khadija"];
const PLACES = ["ones", "tens", "hundreds", "thousands", "ten thousands", "hundred thousands", "millions"];

export const GRADE4: Grade = {
  id: "g4", n: 4, title: "Grade 4", color: "#B9770E",
  sub: "Place value to a million, multi-digit multiplication, long division, factors, equivalent fractions, decimals, conversions and angles.",
  topics: [
    { id: "number", title: "Number", color: "#2E86C1", icon: "🔢", subs: [
      { id: "place-value-million", title: "Place value to 1,000,000",
        bigIdea: "Big numbers are read in groups of three digits, separated by commas: thousands, then ones. Each place is 10 times the place to its right. In 352,618 the 5 is worth 50,000.",
        steps: ["Find the digit's place: ones, tens, hundreds, thousands, ten thousands, hundred thousands.", "Value = digit × place.", "Each step to the left is ×10."],
        examples: [
          { q: "Value of the 7 in 274,031?", work: ["7 is in the ten thousands place."], answer: "70,000" },
          { q: "Read 506,240.", work: ["506 thousand, 240."], answer: "five hundred six thousand, two hundred forty" },
        ],
        visual: { type: "placevalue", n: 352618, places: ["hundred thousands", "ten thousands", "thousands", "hundreds", "tens", "ones"] },
        gen: (r) => {
          const n = r.int(100000, 999999); const d = String(n).split("").map(Number);
          let i = r.int(0, 5); while (d[i] === 0) i = r.int(0, 5);
          const place = 5 - i; const val = d[i] * 10 ** place;
          return choice(r, { prompt: `What is the value of the digit in the ${PLACES[place]} place of ${fmt(n)}?`, answer: fmt(val),
            visual: { type: "placevalue", n, places: ["hundred thousands", "ten thousands", "thousands", "hundreds", "tens", "ones"], highlight: i },
            hint: "Digit × its place.", explain: `${d[i]} × ${fmt(10 ** place)} = ${fmt(val)}.` },
            [0, 1, 2, 3, 4, 5].filter((p) => p !== place).slice(0, 5).map((p) => fmt(d[i] * 10 ** p)).slice(0, 3));
        } },
      { id: "round-big", title: "Rounding to thousands and ten thousands",
        bigIdea: "The same rounding rule works for big numbers: look one place to the right of the rounding place. 5 or more rounds up, 4 or less rounds down. Rounding helps us estimate.",
        steps: ["Underline the rounding place.", "Look at the next digit to the right.", "Round up or keep, then write zeros after."],
        examples: [
          { q: "Round 46,812 to the nearest thousand.", work: ["Thousands digit 6. Next digit 8 → up."], answer: "47,000" },
          { q: "Round 46,812 to the nearest ten thousand.", work: ["Ten thousands digit 4. Next digit 6 → up."], answer: "50,000" },
        ],
        gen: (r) => { const n = r.int(10001, 989999); const to = r.pick([1000, 10000, 100]);
          const ans = n % to >= to / 2 ? Math.ceil(n / to) * to : Math.floor(n / to) * to;
          return { prompt: `Round ${fmt(n)} to the nearest ${to === 100 ? "hundred" : to === 1000 ? "thousand" : "ten thousand"}.`, kind: "number", answer: String(ans),
            hint: "Look one place to the right. 5 or more rounds up.", explain: `${fmt(n)} → ${fmt(ans)}.` }; } },
      { id: "factors", title: "Factors, multiples and primes",
        bigIdea: "Factors are numbers that multiply to make a number: the factors of 12 are 1, 2, 3, 4, 6, 12. Multiples are what you get when you skip-count: 3, 6, 9, 12… A prime number has exactly two factors, 1 and itself.",
        steps: ["To find factors, test 1, 2, 3… and find the partner: 12 = 1×12, 2×6, 3×4.", "Stop when the factors start repeating.", "Only two factors → prime. More → composite."],
        examples: [
          { q: "Factors of 18", work: ["1×18, 2×9, 3×6."], answer: "1, 2, 3, 6, 9, 18" },
          { q: "Is 29 prime?", work: ["No number from 2 to 5 divides it."], answer: "Yes, prime" },
        ],
        visual: { type: "array", rows: 3, cols: 4 },
        gen: (r) => {
          const kind = r.int(0, 2);
          if (kind === 0) { const n = r.pick([12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 48]); const f = r.pick([...Array(n).keys()].map((x) => x + 1).filter((x) => n % x === 0 && x > 1 && x < n));
            const non = r.shuffle([...Array(n).keys()].map((x) => x + 1).filter((x) => n % x !== 0)).slice(0, 3).map(String);
            return choice(r, { prompt: `Which number is a factor of ${n}?`, answer: String(f), hint: `Does it divide ${n} with nothing left over?`, explain: `${f} × ${n / f} = ${n}.` }, non); }
          if (kind === 1) { const n = r.int(3, 12), k = r.int(3, 12); const m = n * k;
            return choice(r, { prompt: `Which number is a multiple of ${n}?`, answer: String(m), hint: `Skip-count by ${n}.`, explain: `${n} × ${k} = ${m}.` }, near(r, m, [-1, 1, 2, -2, 3, -3]).filter((x) => Number(x) % n !== 0)); }
          const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
          const n = r.int(2, 99); const prime = primes.includes(n);
          return choice(r, { prompt: `Is ${n} prime or composite?`, answer: prime ? "Prime" : "Composite", hint: "Does any number other than 1 and itself divide it?",
            explain: prime ? `${n} has only two factors: 1 and ${n}.` : `${n} has more factors, for example ${[...Array(n).keys()].find((x) => x > 1 && n % x === 0)}.` }, ["Prime", "Composite"]);
        } },
    ] },
    { id: "computation", title: "Computation", color: "#1E8449", icon: "✖️", subs: [
      { id: "mult-1digit", title: "Multiplying by a 1-digit number",
        bigIdea: "Multiply each place by the 1-digit number, starting with the ones. Carry tens to the next place, just like in addition, and add them after you multiply.",
        steps: ["Multiply the ones. Write the ones digit, carry the tens.", "Multiply the tens, then add the carry.", "Keep going left. The last carry goes in front."],
        examples: [
          { q: "346 × 4", work: ["6 × 4 = 24: write 4, carry 2.", "4 × 4 = 16 + 2 = 18: write 8, carry 1.", "3 × 4 = 12 + 1 = 13."], answer: "1,384" },
          { q: "52 × 7 (area model)", work: ["50 × 7 = 350, 2 × 7 = 14.", "350 + 14 = 364."], answer: "364" },
        ],
        visual: { type: "column", op: "×", a: 346, b: 4 },
        gen: (r) => { const a = r.chance(0.5) ? r.int(12, 99) : r.int(102, 999), b = r.int(2, 9);
          return { prompt: `${a} × ${b} = ?`, kind: "number", answer: String(a * b), visual: { type: "column", op: "×", a, b },
            hint: "Multiply ones first, carry the tens.", explain: `Break it apart: ${String(a).split("").map((d, i, arr) => `${Number(d) * 10 ** (arr.length - 1 - i)} × ${b}`).join(" + ")} = ${fmt(a * b)}.` }; } },
      { id: "mult-2digit", title: "Multiplying two 2-digit numbers",
        bigIdea: "Split one number into tens and ones and multiply in two parts, then add. 34 × 26 = 34 × 20 + 34 × 6 = 680 + 204 = 884. The area model shows these parts as rectangles.",
        steps: ["Multiply by the ones digit of the bottom number.", "Multiply by the tens digit (put a 0 first, because it is tens).", "Add the two partial products."],
        examples: [
          { q: "34 × 26", work: ["34 × 6 = 204", "34 × 20 = 680", "204 + 680 = 884"], answer: "884" },
          { q: "45 × 12", work: ["45 × 2 = 90", "45 × 10 = 450", "90 + 450 = 540"], answer: "540" },
        ],
        visual: { type: "column", op: "×", a: 34, b: 26 },
        gen: (r) => { const a = r.int(12, 99), b = r.int(11, 99); const o = b % 10, t = b - o;
          return { prompt: `${a} × ${b} = ?`, kind: "number", answer: String(a * b), visual: { type: "column", op: "×", a, b },
            hint: `${a} × ${o}, then ${a} × ${t}, then add.`, explain: `${a} × ${o} = ${a * o}; ${a} × ${t} = ${fmt(a * t)}; total ${fmt(a * b)}.` }; } },
      { id: "long-division", title: "Long division with remainders",
        bigIdea: "Long division repeats four steps: Divide, Multiply, Subtract, Bring down. Whatever is left at the end, smaller than the divisor, is the remainder (R).",
        steps: ["Divide: how many times does the divisor go into the first digit(s)?", "Multiply and write it under.", "Subtract.", "Bring down the next digit and repeat. What is left is the remainder."],
        examples: [
          { q: "87 ÷ 4", work: ["8 ÷ 4 = 2. 2 × 4 = 8, 8 − 8 = 0.", "Bring down 7: 7 ÷ 4 = 1, 1 × 4 = 4, 7 − 4 = 3."], answer: "21 R 3" },
          { q: "635 ÷ 5", work: ["6 ÷ 5 = 1 R 1, bring down 3: 13 ÷ 5 = 2 R 3, bring down 5: 35 ÷ 5 = 7."], answer: "127" },
        ],
        tip: "Check: quotient × divisor + remainder = the number.",
        gen: (r) => { const d = r.int(2, 9), q = r.int(11, 199), rem = r.int(0, d - 1); const n = d * q + rem;
          return { prompt: `${n} ÷ ${d} = ?  (write a remainder like 12 R 3)`, kind: "remainder", answer: rem ? `${q} R ${rem}` : String(q),
            hint: "Divide, Multiply, Subtract, Bring down.", explain: `${d} × ${q} = ${d * q}, and ${n} − ${d * q} = ${rem}. So ${n} ÷ ${d} = ${q}${rem ? ` R ${rem}` : ""}.` }; } },
    ] },
    { id: "fractions", title: "Fractions and Decimals", color: "#AF601A", icon: "🍕", subs: [
      { id: "equivalent-fractions", title: "Equivalent fractions",
        bigIdea: "Equivalent fractions name the same amount with different pieces. Multiply (or divide) the top and bottom by the same number: 1/2 = 2/4 = 3/6 = 4/8.",
        steps: ["Find what the denominator was multiplied by.", "Multiply the numerator by the same number.", "Same amount, more (or fewer) pieces."],
        examples: [
          { q: "3/4 = ?/12", work: ["4 × 3 = 12, so 3 × 3 = 9."], answer: "9/12" },
          { q: "10/15 in simplest form", work: ["Divide top and bottom by 5."], answer: "2/3" },
        ],
        visual: { type: "fractions", items: [{ num: 1, den: 2 }, { num: 2, den: 4 }, { num: 4, den: 8 }] },
        gen: (r) => { const den = r.pick([2, 3, 4, 5, 6]), num = r.int(1, den - 1), k = r.int(2, 5);
          return { prompt: `${num}/${den} = ?/${den * k}  (type the missing numerator)`, kind: "number", answer: String(num * k),
            visual: { type: "fraction", num, den, shape: "bar" },
            hint: `${den} × ${k} = ${den * k}. Do the same to the top.`, explain: `${num} × ${k} = ${num * k}, so ${num}/${den} = ${num * k}/${den * k}.` }; } },
      { id: "compare-unlike", title: "Comparing fractions with different denominators",
        bigIdea: "To compare fractions with different denominators, make the denominators the same, then compare the numerators. Or compare each fraction to a benchmark like 1/2.",
        steps: ["Find a common denominator (multiply the two denominators, or use a smaller one).", "Rewrite both fractions.", "Compare the numerators."],
        examples: [
          { q: "2/3 ? 3/5", work: ["Common denominator 15: 10/15 and 9/15."], answer: "2/3 > 3/5" },
          { q: "3/8 ? 1/2", work: ["1/2 = 4/8, and 3 < 4."], answer: "3/8 < 1/2" },
        ],
        visual: { type: "fractions", items: [{ num: 2, den: 3 }, { num: 3, den: 5 }] },
        gen: (r) => { const ds = [2, 3, 4, 5, 6, 8, 10, 12]; const a = { den: r.pick(ds), num: 0 }, b = { den: r.pick(ds), num: 0 };
          a.num = r.int(1, a.den - 1); b.num = r.int(1, b.den - 1);
          const x = a.num * b.den, y = b.num * a.den; const sign = x > y ? ">" : x < y ? "<" : "=";
          return choice(r, { prompt: `${a.num}/${a.den}  ?  ${b.num}/${b.den}`, answer: sign,
            hint: "Make the denominators the same, then compare the tops.", explain: `${a.num}/${a.den} = ${x}/${a.den * b.den} and ${b.num}/${b.den} = ${y}/${a.den * b.den}. So ${a.num}/${a.den} ${sign} ${b.num}/${b.den}.` }, [">", "<", "="]); } },
      { id: "add-like-fractions", title: "Adding and subtracting fractions (same denominator)",
        bigIdea: "When the pieces are the same size, just add or subtract how many pieces you have. The denominator stays the same: 2/7 + 3/7 = 5/7.",
        steps: ["Check the denominators are the same.", "Add or subtract the numerators.", "Keep the denominator.", "If the answer is more than one whole, you can write it as a mixed number."],
        examples: [
          { q: "3/8 + 4/8", work: ["3 + 4 = 7 eighths."], answer: "7/8" },
          { q: "5/6 − 1/6", work: ["5 − 1 = 4 sixths = 4/6, simplest 2/3."], answer: "4/6 = 2/3" },
        ],
        visual: { type: "fraction", num: 7, den: 8, shape: "bar" },
        gen: (r) => { const d = r.pick([4, 5, 6, 8, 10, 12]); const add = r.chance(0.5);
          const a = add ? r.int(1, d - 1) : r.int(2, d - 1), b = add ? r.int(1, d - a) : r.int(1, a - 1);
          const res = add ? a + b : a - b; if (res === 0) return { prompt: `${a}/${d} − ${a}/${d} = ?`, kind: "number", answer: "0", hint: "Same amount taken away.", explain: "Nothing is left: 0." };
          return { prompt: `${a}/${d} ${add ? "+" : "−"} ${b}/${d} = ?`, kind: "fraction", answer: `${res}/${d}`,
            hint: "Keep the denominator. Add or subtract the tops.", explain: `${a} ${add ? "+" : "−"} ${b} = ${res}, so ${res}/${d}${fracText(res, d) !== `${res}/${d}` ? ` (= ${fracText(res, d)})` : ""}.` }; } },
      { id: "decimals", title: "Decimals: tenths and hundredths",
        bigIdea: "Decimals are another way to write tenths and hundredths. 3/10 = 0.3 and 45/100 = 0.45. The first place after the decimal point is tenths; the second is hundredths.",
        steps: ["Tenths: one digit after the point. 7/10 = 0.7.", "Hundredths: two digits after the point. 7/100 = 0.07.", "To compare decimals, line up the points and compare place by place."],
        examples: [
          { q: "Write 38/100 as a decimal.", work: ["38 hundredths."], answer: "0.38" },
          { q: "0.6 ? 0.58", work: ["0.6 = 0.60, and 60 > 58."], answer: "0.6 > 0.58" },
        ],
        visual: { type: "grid", w: 10, h: 10, shade: 45 },
        gen: (r) => { if (r.chance(0.5)) { const tenths = r.chance(0.4); const n = tenths ? r.int(1, 9) : r.int(1, 99); const d = tenths ? 10 : 100;
            const ans = (n / d).toFixed(tenths ? 1 : 2);
            return { prompt: `Write ${n}/${d} as a decimal.`, kind: "number", answer: ans, hint: tenths ? "Tenths: one digit after the point." : "Hundredths: two digits after the point.", explain: `${n}/${d} = ${ans}.` }; }
          const a = r.int(1, 99) / 100, b = r.int(1, 9) / 10; const A = a.toFixed(2), B = b.toFixed(1);
          const sign = a > b ? ">" : a < b ? "<" : "=";
          return choice(r, { prompt: `${A}  ?  ${B}`, answer: sign, hint: `Write ${B} as ${b.toFixed(2)} and compare.`, explain: `${A} ${sign} ${b.toFixed(2)}.` }, [">", "<", "="]); } },
    ] },
    { id: "measurement", title: "Measurement and Geometry", color: "#B7950B", icon: "📐", subs: [
      { id: "conversions", title: "Converting measurements",
        bigIdea: "To change a big unit into a smaller unit, multiply: there are more of the small units. 1 foot = 12 inches, 1 yard = 3 feet, 1 hour = 60 minutes, 1 kilogram = 1,000 grams, 1 liter = 1,000 milliliters, 1 meter = 100 centimeters.",
        steps: ["Know the rule: how many small units in one big unit?", "Big → small: multiply.", "Small → big: divide."],
        examples: [
          { q: "4 feet = ? inches", work: ["4 × 12 = 48."], answer: "48 inches" },
          { q: "3 hours = ? minutes", work: ["3 × 60 = 180."], answer: "180 minutes" },
        ],
        gen: (r) => { const U = r.pick([["feet", "inches", 12], ["yards", "feet", 3], ["hours", "minutes", 60], ["minutes", "seconds", 60], ["kilograms", "grams", 1000], ["liters", "milliliters", 1000], ["meters", "centimeters", 100], ["pounds", "ounces", 16]] as const);
          const n = r.int(2, 9);
          return { prompt: `${n} ${U[0]} = ? ${U[1]}`, kind: "number", answer: String(n * U[2]), unit: U[1], hint: `1 ${U[0].replace(/s$/, "")} = ${fmt(U[2])} ${U[1]}. Big to small: multiply.`, explain: `${n} × ${fmt(U[2])} = ${fmt(n * U[2])} ${U[1]}.` }; } },
      { id: "area-perimeter-formula", title: "Area and perimeter formulas",
        bigIdea: "For any rectangle: Area = length × width (square units). Perimeter = 2 × length + 2 × width (units). You can also work backwards to find a missing side.",
        steps: ["Area: multiply the two sides.", "Perimeter: add all four sides, or 2 × (length + width).", "Missing side from area: area ÷ known side."],
        examples: [
          { q: "Room 12 ft by 9 ft: area?", work: ["12 × 9 = 108."], answer: "108 sq ft" },
          { q: "Area 56, one side 8: other side?", work: ["56 ÷ 8 = 7."], answer: "7" },
        ],
        visual: { type: "grid", w: 6, h: 4, showSides: true },
        gen: (r) => { const l = r.int(4, 20), w = r.int(2, 12); const k = r.int(0, 2);
          if (k === 0) return { prompt: `A rectangle is ${l} m long and ${w} m wide. What is its area?`, kind: "number", answer: String(l * w), unit: "square meters", hint: "Length × width.", explain: `${l} × ${w} = ${l * w} m².` };
          if (k === 1) return { prompt: `A rectangle is ${l} cm long and ${w} cm wide. What is its perimeter?`, kind: "number", answer: String(2 * (l + w)), unit: "cm", hint: "2 × (length + width).", explain: `2 × (${l} + ${w}) = ${2 * (l + w)} cm.` };
          return { prompt: `A rectangle has an area of ${l * w} square feet. One side is ${w} feet. How long is the other side?`, kind: "number", answer: String(l), unit: "feet", hint: "Area ÷ known side.", explain: `${l * w} ÷ ${w} = ${l} feet.` }; } },
      { id: "angles", title: "Angles",
        bigIdea: "An angle measures a turn, in degrees (°). A right angle is 90°, like the corner of a book. Acute angles are smaller than 90°. Obtuse angles are between 90° and 180°. A straight angle is 180°.",
        steps: ["Compare the angle to a square corner (90°).", "Smaller → acute. Exactly a corner → right. Bigger (but not flat) → obtuse. A flat line → straight (180°)."],
        examples: [
          { q: "An angle of 45°", work: ["Less than 90°."], answer: "acute" },
          { q: "An angle of 120°", work: ["More than 90°, less than 180°."], answer: "obtuse" },
        ],
        visual: { type: "angle", deg: 120 },
        gen: (r) => { const deg = r.pick([20, 30, 45, 60, 75, 90, 90, 110, 120, 135, 150, 165, 180]);
          const ans = deg < 90 ? "Acute" : deg === 90 ? "Right" : deg < 180 ? "Obtuse" : "Straight";
          return choice(r, { prompt: `What kind of angle is this? (${deg}°)`, answer: ans, visual: { type: "angle", deg }, hint: "Compare it to a square corner, 90°.", explain: `${deg}° is ${ans.toLowerCase()}.` }, ["Acute", "Right", "Obtuse", "Straight"]); } },
    ] },
    { id: "problem-solving", title: "Problem Solving", color: "#7D3C98", icon: "🧩", subs: [
      { id: "multi-step", title: "Multi-step word problems",
        bigIdea: "Break a long problem into small steps. Write what you know, decide each operation, and check that the answer is reasonable by estimating.",
        steps: ["Underline the numbers and the question.", "Plan the steps: what do I find first?", "Solve each step and label it.", "Estimate to check."],
        examples: [
          { q: "A school orders 12 boxes of 24 pencils and gives out 150. How many are left?", work: ["12 × 24 = 288.", "288 − 150 = 138."], answer: "138 pencils" },
          { q: "Tickets cost $8. A family of 5 pays with $50. Change?", work: ["5 × 8 = 40.", "50 − 40 = 10."], answer: "$10" },
        ],
        gen: (r) => { const who = r.pick(NAMES); const k = r.int(0, 1);
          if (k === 0) { const boxes = r.int(3, 15), each = r.int(12, 30), out = r.int(10, boxes * each - 5);
            return { prompt: `A shop has ${boxes} boxes with ${each} books in each. It sells ${out} books. How many books are left?`, kind: "number", answer: String(boxes * each - out), unit: "books",
              hint: "First find how many books there are in all.", explain: `${boxes} × ${each} = ${boxes * each}. ${boxes * each} − ${out} = ${boxes * each - out}.` }; }
          const price = r.int(3, 15), qty = r.int(2, 6), pay = Math.ceil((price * qty + 1) / 10) * 10 + r.pick([0, 10, 20]);
          return { prompt: `${who} buys ${qty} toys that cost $${price} each and pays with $${pay}. How much change does ${who} get?`, kind: "number", answer: String(pay - price * qty), unit: "dollars",
            hint: "First find the total cost.", explain: `${qty} × $${price} = $${qty * price}. $${pay} − $${qty * price} = $${pay - price * qty}.` }; } },
    ] },
  ],
};
