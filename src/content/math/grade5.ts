import type { Grade } from "./types";
import { choice, fmt, fracText, gcd, lcm } from "./util";

// Decimal answers are built from whole numbers to avoid rounding errors.
const dec = (n: number, places: number) => { const s = (n / 10 ** places).toFixed(places); return s.includes(".") ? s.replace(/0+$/, "").replace(/\.$/, "") : s; };
const NAMES = ["Ali", "Maryam", "Yusuf", "Aisha", "Omar", "Zaynab", "Bilal", "Fatima", "Hamza", "Khadija"];

export const GRADE5: Grade = {
  id: "g5", n: 5, title: "Grade 5", color: "#7D3C98",
  sub: "Powers of 10, decimal operations, long multiplication and division, fractions with unlike denominators, order of operations, volume and the coordinate plane.",
  topics: [
    { id: "number", title: "Number and Place Value", color: "#2E86C1", icon: "🔢", subs: [
      { id: "powers-of-ten", title: "Multiplying and dividing by 10, 100 and 1,000",
        bigIdea: "Multiplying by 10 moves every digit one place to the left (the number gets 10 times bigger). Dividing by 10 moves every digit one place to the right. For 100 move two places, for 1,000 three places.",
        steps: ["Count the zeros: 10 → 1 place, 100 → 2, 1,000 → 3.", "× : digits move left (decimal point moves right).", "÷ : digits move right (decimal point moves left).", "Fill empty places with zeros."],
        examples: [
          { q: "4.7 × 100", work: ["Move the point 2 places right: 470."], answer: "470" },
          { q: "36 ÷ 1,000", work: ["Move the point 3 places left: 0.036."], answer: "0.036" },
        ],
        gen: (r) => { const p = r.int(1, 3), base = r.int(1, 999), bp = r.int(0, 2); const mult = r.chance(0.5);
          const n = dec(base, bp);
          const exact = mult ? (bp - p >= 0 ? dec(base, bp - p) : String(base * 10 ** (p - bp))) : dec(base, bp + p);
          return { prompt: `${n} ${mult ? "×" : "÷"} ${fmt(10 ** p)} = ?`, kind: "number", answer: exact,
            hint: `${fmt(10 ** p)} has ${p} zero${p > 1 ? "s" : ""}: move the decimal point ${p} place${p > 1 ? "s" : ""} to the ${mult ? "right" : "left"}.`, explain: `${n} ${mult ? "×" : "÷"} ${fmt(10 ** p)} = ${exact}.` }; } },
      { id: "decimal-place-value", title: "Decimal place value and comparing",
        bigIdea: "After the decimal point come tenths, hundredths and thousandths. To compare decimals, line up the decimal points and compare place by place from the left. Adding zeros at the end does not change a decimal: 0.5 = 0.50.",
        steps: ["Line up the decimal points.", "Add zeros so they have the same number of places.", "Compare from the left, like whole numbers."],
        examples: [
          { q: "0.47 ? 0.5", work: ["0.5 = 0.50. 47 < 50."], answer: "0.47 < 0.5" },
          { q: "Value of the 3 in 2.638", work: ["It is in the hundredths place."], answer: "0.03" },
        ],
        gen: (r) => { if (r.chance(0.5)) { const a = r.int(1, 999), pa = r.int(1, 3), b = r.int(1, 999), pb = r.int(1, 3);
            const va = a / 10 ** pa, vb = b / 10 ** pb; const sign = va > vb + 1e-12 ? ">" : va < vb - 1e-12 ? "<" : "=";
            return choice(r, { prompt: `${dec(a, pa)}  ?  ${dec(b, pb)}`, answer: sign, hint: "Line up the points, add zeros, compare from the left.", explain: `${dec(a, pa)} ${sign} ${dec(b, pb)}.` }, [">", "<", "="]); }
          const whole = r.int(1, 9), frac = r.int(100, 999); const n = `${whole}.${frac}`; let i = r.int(0, 2); while (String(frac)[i] === "0") i = r.int(0, 2); const d = Number(String(frac)[i]);
          const names = ["tenths", "hundredths", "thousandths"]; const val = dec(d, i + 1);
          return choice(r, { prompt: `In ${n}, what is the value of the digit in the ${names[i]} place?`, answer: val, hint: "First place after the point is tenths, then hundredths, then thousandths.", explain: `${d} ${names[i]} = ${val}.` },
            [String(d), dec(d, 1), dec(d, 2), dec(d, 3)].filter((x) => x !== val)); } },
    ] },
    { id: "computation", title: "Computation", color: "#1E8449", icon: "✖️", subs: [
      { id: "long-multiplication", title: "Multi-digit multiplication",
        bigIdea: "Multiply by each digit of the bottom number in turn, shifting one place left each time (because the next digit is worth 10 times more). Then add the partial products.",
        steps: ["Multiply the top number by the ones digit.", "Write a 0, then multiply by the tens digit.", "Add the rows. Estimate first to check: 312 × 24 ≈ 300 × 20 = 6,000."],
        examples: [
          { q: "312 × 24", work: ["312 × 4 = 1,248", "312 × 20 = 6,240", "1,248 + 6,240 = 7,488"], answer: "7,488" },
          { q: "205 × 31", work: ["205 × 1 = 205", "205 × 30 = 6,150", "Total 6,355"], answer: "6,355" },
        ],
        visual: { type: "column", op: "×", a: 312, b: 24 },
        gen: (r) => { const a = r.int(102, 999), b = r.int(11, 99);
          return { prompt: `${a} × ${b} = ?`, kind: "number", answer: String(a * b), visual: { type: "column", op: "×", a, b },
            hint: `${a} × ${b % 10}, then ${a} × ${b - (b % 10)}, then add.`, explain: `${fmt(a * (b % 10))} + ${fmt(a * (b - (b % 10)))} = ${fmt(a * b)}.` }; } },
      { id: "divide-2digit", title: "Dividing by 2-digit numbers",
        bigIdea: "Use the same Divide, Multiply, Subtract, Bring down steps. With a 2-digit divisor, estimate using a rounded divisor: for 23, think 20.",
        steps: ["Estimate: round the divisor to the nearest ten.", "Divide, multiply, subtract, bring down.", "If the subtraction is too big or negative, adjust your estimate by 1.", "Check: quotient × divisor + remainder."],
        examples: [
          { q: "736 ÷ 23", work: ["73 ÷ 23 ≈ 3: 3 × 23 = 69, 73 − 69 = 4.", "Bring down 6: 46 ÷ 23 = 2."], answer: "32" },
          { q: "500 ÷ 12", work: ["50 ÷ 12 = 4: 48, left 2. Bring down 0: 20 ÷ 12 = 1, left 8."], answer: "41 R 8" },
        ],
        gen: (r) => { const d = r.int(11, 49), q = r.int(11, 99), rem = r.chance(0.5) ? 0 : r.int(1, d - 1); const n = d * q + rem;
          return { prompt: `${fmt(n)} ÷ ${d} = ?  (write a remainder like 32 R 5)`, kind: "remainder", answer: rem ? `${q} R ${rem}` : String(q),
            hint: `Think of ${d} as about ${Math.round(d / 10) * 10}.`, explain: `${d} × ${q} = ${fmt(d * q)}${rem ? `, and ${fmt(n)} − ${fmt(d * q)} = ${rem}` : ""}. So ${q}${rem ? ` R ${rem}` : ""}.` }; } },
      { id: "decimal-add-sub", title: "Adding and subtracting decimals",
        bigIdea: "Line up the decimal points, so tenths are under tenths and hundredths under hundredths. Fill empty places with zeros, then add or subtract just like whole numbers. The point in the answer drops straight down.",
        steps: ["Write the numbers with the decimal points in a column.", "Add zeros so both have the same number of decimal places.", "Add or subtract from the right, regrouping as usual.", "Bring the decimal point straight down."],
        examples: [
          { q: "3.75 + 2.6", work: ["3.75 + 2.60 = 6.35."], answer: "6.35" },
          { q: "8 − 2.45", work: ["8.00 − 2.45 = 5.55."], answer: "5.55" },
        ],
        gen: (r) => { const a = r.int(100, 9999), b = r.int(10, a - 1); const add = r.chance(0.5);
          return { prompt: `${dec(a, 2)} ${add ? "+" : "−"} ${dec(b, 2)} = ?`, kind: "number", answer: dec(add ? a + b : a - b, 2),
            hint: "Line up the decimal points. Add zeros if needed.", explain: `${dec(a, 2)} ${add ? "+" : "−"} ${dec(b, 2)} = ${dec(add ? a + b : a - b, 2)}.` }; } },
      { id: "decimal-multiply", title: "Multiplying decimals",
        bigIdea: "Multiply as if there were no decimal points. Then count the decimal places in both numbers together, and put that many decimal places in the answer.",
        steps: ["Ignore the points and multiply.", "Count the digits after the points in both numbers.", "Place the point in the answer with that many digits after it.", "Estimate to check: 2.4 × 3 ≈ 2 × 3 = 6."],
        examples: [
          { q: "2.4 × 3", work: ["24 × 3 = 72.", "1 decimal place → 7.2."], answer: "7.2" },
          { q: "0.6 × 0.4", work: ["6 × 4 = 24.", "2 decimal places → 0.24."], answer: "0.24" },
        ],
        gen: (r) => { const a = r.int(2, 99), pa = 1, b = r.chance(0.5) ? r.int(2, 9) : r.int(2, 9), pb = r.chance(0.5) ? 0 : 1;
          return { prompt: `${dec(a, pa)} × ${dec(b, pb)} = ?`, kind: "number", answer: dec(a * b, pa + pb),
            hint: `Multiply ${a} × ${b}, then place ${pa + pb} decimal place${pa + pb > 1 ? "s" : ""}.`, explain: `${a} × ${b} = ${a * b} → ${dec(a * b, pa + pb)}.` }; } },
      { id: "order-of-operations", title: "Order of operations",
        bigIdea: "When a problem has several operations, everyone must do them in the same order to get the same answer: Parentheses first, then multiply and divide (left to right), then add and subtract (left to right).",
        steps: ["Parentheses ( ) first.", "Then × and ÷, from left to right.", "Then + and −, from left to right."],
        examples: [
          { q: "3 + 4 × 5", work: ["4 × 5 = 20 first.", "3 + 20 = 23."], answer: "23" },
          { q: "(3 + 4) × 5", work: ["Parentheses first: 7.", "7 × 5 = 35."], answer: "35" },
        ],
        tip: "Remember: Please Excuse My Dear Aunt Sally? Ours is simpler: ( ) → × ÷ → + −.",
        gen: (r) => { const a = r.int(2, 9), b = r.int(2, 9), c = r.int(2, 9), d = r.int(1, 9); const k = r.int(0, 3);
          const forms: [string, number][] = [[`${a} + ${b} × ${c}`, a + b * c], [`(${a} + ${b}) × ${c}`, (a + b) * c], [`${a * c} ÷ ${c} + ${b} × ${d}`, a + b * d], [`${a} × (${b + c} − ${c}) + ${d}`, a * b + d]];
          const [e, v] = forms[k];
          return { prompt: `${e} = ?`, kind: "number", answer: String(v), hint: "Parentheses first, then × and ÷, then + and −.", explain: `${e} = ${v}.` }; } },
    ] },
    { id: "fractions", title: "Fractions", color: "#AF601A", icon: "🍕", subs: [
      { id: "add-unlike", title: "Adding and subtracting fractions with unlike denominators",
        bigIdea: "You can only add pieces of the same size. Find a common denominator, rewrite each fraction as an equivalent fraction, then add or subtract the numerators. Simplify at the end.",
        steps: ["Find a common denominator (the least common multiple is best).", "Rewrite each fraction with that denominator.", "Add or subtract the numerators.", "Simplify, and change to a mixed number if it is more than 1."],
        examples: [
          { q: "1/3 + 1/4", work: ["Common denominator 12: 4/12 + 3/12.", "= 7/12."], answer: "7/12" },
          { q: "5/6 − 1/4", work: ["12ths: 10/12 − 3/12 = 7/12."], answer: "7/12" },
        ],
        visual: { type: "fractions", items: [{ num: 1, den: 3 }, { num: 1, den: 4 }] },
        gen: (r) => { const ds = [2, 3, 4, 5, 6, 8, 10, 12]; let a = r.pick(ds), b = r.pick(ds); while (b === a) b = r.pick(ds);
          const na = r.int(1, a - 1), nb = r.int(1, b - 1); const L = lcm(a, b); const add = r.chance(0.6) || na / a < nb / b;
          const top = add ? na * (L / a) + nb * (L / b) : na * (L / a) - nb * (L / b);
          const ans = fracText(top, L, true);
          return { prompt: `${na}/${a} ${add ? "+" : "−"} ${nb}/${b} = ?  (simplest form)`, kind: "fraction", strict: "simplest", answer: ans,
            visual: { type: "fractions", items: [{ num: na, den: a }, { num: nb, den: b }] },
            hint: `Use ${L} as the common denominator.`, explain: `${na * (L / a)}/${L} ${add ? "+" : "−"} ${nb * (L / b)}/${L} = ${top}/${L}${ans !== `${top}/${L}` ? ` = ${ans}` : ""}.` }; } },
      { id: "multiply-fractions", title: "Multiplying fractions",
        bigIdea: "To multiply fractions, multiply the tops together and the bottoms together. A fraction of a whole number is the same idea: 2/3 of 12 = 2/3 × 12 = 8.",
        steps: ["Write a whole number as a fraction over 1.", "Multiply numerators. Multiply denominators.", "Simplify."],
        examples: [
          { q: "2/3 × 3/4", work: ["2 × 3 = 6, 3 × 4 = 12 → 6/12 = 1/2."], answer: "1/2" },
          { q: "3/4 of 20", work: ["20 ÷ 4 = 5, × 3 = 15."], answer: "15" },
        ],
        gen: (r) => { if (r.chance(0.5)) { const d = r.pick([2, 3, 4, 5, 6, 8, 10]), n = r.int(1, d - 1), w = d * r.int(1, 9);
            return { prompt: `${n}/${d} of ${w} = ?`, kind: "number", answer: String((w / d) * n), hint: `Find 1/${d} of ${w} first, then multiply by ${n}.`, explain: `${w} ÷ ${d} = ${w / d}, × ${n} = ${(w / d) * n}.` }; }
          const a = r.pick([2, 3, 4, 5, 6]), b = r.pick([2, 3, 4, 5, 6, 8]); const na = r.int(1, a - 1), nb = r.int(1, b - 1);
          return { prompt: `${na}/${a} × ${nb}/${b} = ?  (simplest form)`, kind: "fraction", strict: "simplest", answer: fracText(na * nb, a * b),
            hint: "Top × top, bottom × bottom, then simplify.", explain: `${na * nb}/${a * b}${gcd(na * nb, a * b) > 1 ? ` = ${fracText(na * nb, a * b)}` : ""}.` }; } },
      { id: "divide-unit-fractions", title: "Dividing with unit fractions",
        bigIdea: "3 ÷ 1/4 asks: how many quarters fit in 3 wholes? Each whole has 4 quarters, so 12. And 1/4 ÷ 3 shares one quarter into 3 parts: each part is 1/12.",
        steps: ["Whole ÷ unit fraction: whole × denominator.", "Unit fraction ÷ whole: multiply the denominator by the whole.", "Draw it to check."],
        examples: [
          { q: "3 ÷ 1/4", work: ["4 quarters in each whole, 3 wholes."], answer: "12" },
          { q: "1/2 ÷ 4", work: ["Half shared by 4: 1/8 each."], answer: "1/8" },
        ],
        visual: { type: "fraction", num: 1, den: 4, shape: "bar" },
        gen: (r) => { const d = r.int(2, 8), w = r.int(2, 9);
          if (r.chance(0.5)) return { prompt: `${w} ÷ 1/${d} = ?`, kind: "number", answer: String(w * d), hint: `How many 1/${d}s fit in one whole? In ${w} wholes?`, explain: `${w} × ${d} = ${w * d}.` };
          return { prompt: `1/${d} ÷ ${w} = ?`, kind: "fraction", answer: `1/${d * w}`, hint: `Share 1/${d} into ${w} equal parts.`, explain: `1/${d} ÷ ${w} = 1/${d * w}.` }; } },
    ] },
    { id: "geometry", title: "Measurement and Geometry", color: "#B7950B", icon: "📦", subs: [
      { id: "volume", title: "Volume of rectangular prisms",
        bigIdea: "Volume is how many unit cubes fill a solid. For a box (rectangular prism): Volume = length × width × height. The answer is in cubic units.",
        steps: ["Find the length, width and height.", "Multiply length × width: cubes in one layer.", "Multiply by the height: how many layers.", "Write cubic units (cm³, ft³)."],
        examples: [
          { q: "Box 4 × 3 × 2", work: ["One layer: 4 × 3 = 12 cubes.", "2 layers: 24."], answer: "24 cubic units" },
          { q: "Volume 60, base 5 × 4: height?", work: ["5 × 4 = 20, 60 ÷ 20 = 3."], answer: "3" },
        ],
        visual: { type: "prism", l: 4, w: 3, h: 2 },
        gen: (r) => { const l = r.int(2, 9), w = r.int(2, 6), h = r.int(2, 6);
          return { prompt: `What is the volume of this box: ${l} × ${w} × ${h} units?`, kind: "number", answer: String(l * w * h), unit: "cubic units", visual: { type: "prism", l, w, h },
            hint: "Length × width × height.", explain: `${l} × ${w} = ${l * w}, × ${h} = ${l * w * h} cubic units.` }; } },
      { id: "coordinate-plane", title: "The coordinate plane",
        bigIdea: "A point on a grid has an address (x, y). x tells how far to go across from 0; y tells how far to go up. Always across first, then up: “walk before you climb”.",
        steps: ["Start at the origin (0, 0).", "Move right x squares.", "Move up y squares.", "Write the point as (x, y)."],
        examples: [
          { q: "Point A is 3 right and 5 up.", work: ["x = 3, y = 5."], answer: "(3, 5)" },
          { q: "Where is (0, 4)?", work: ["Don't move across; go up 4."], answer: "on the y-axis" },
        ],
        visual: { type: "coord", size: 8, points: [{ x: 3, y: 5, label: "A" }] },
        gen: (r) => { const x = r.int(0, 8), y = r.int(0, 8); const ans = `(${x}, ${y})`;
          return choice(r, { prompt: "What are the coordinates of point P?", answer: ans, visual: { type: "coord", size: 9, points: [{ x, y, label: "P" }] },
            hint: "Across first (x), then up (y).", explain: `P is ${x} across and ${y} up: ${ans}.` }, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${Math.max(0, y - 1)})`, `(${y + 1}, ${x})`]); } },
      { id: "metric-conversions", title: "Converting metric units",
        bigIdea: "Metric units go up in tens: 1 km = 1,000 m, 1 m = 100 cm, 1 cm = 10 mm, 1 kg = 1,000 g, 1 L = 1,000 mL. Converting is just multiplying or dividing by 10, 100 or 1,000.",
        steps: ["Big unit → small unit: multiply (more of the small units).", "Small unit → big unit: divide.", "Move the decimal point the right number of places."],
        examples: [
          { q: "2.5 km = ? m", work: ["2.5 × 1,000 = 2,500."], answer: "2,500 m" },
          { q: "450 cm = ? m", work: ["450 ÷ 100 = 4.5."], answer: "4.5 m" },
        ],
        gen: (r) => { const U = r.pick([["km", "m", 1000], ["m", "cm", 100], ["cm", "mm", 10], ["kg", "g", 1000], ["L", "mL", 1000]] as const);
          if (r.chance(0.5)) { const n = r.int(11, 95); return { prompt: `${dec(n, 1)} ${U[0]} = ? ${U[1]}`, kind: "number", answer: String((n * U[2]) / 10), unit: U[1], hint: `1 ${U[0]} = ${fmt(U[2])} ${U[1]}. Multiply.`, explain: `${dec(n, 1)} × ${fmt(U[2])} = ${fmt((n * U[2]) / 10)} ${U[1]}.` }; }
          const n = r.int(2, 99) * (U[2] / 10); return { prompt: `${fmt(n)} ${U[1]} = ? ${U[0]}`, kind: "number", answer: dec(n * 10 / U[2], 1), unit: U[0], hint: `Divide by ${fmt(U[2])}.`, explain: `${fmt(n)} ÷ ${fmt(U[2])} = ${dec(n * 10 / U[2], 1)} ${U[0]}.` }; } },
    ] },
    { id: "problem-solving", title: "Problem Solving", color: "#7D3C98", icon: "🧩", subs: [
      { id: "fraction-decimal-word", title: "Word problems with fractions and decimals",
        bigIdea: "Real problems often use money, lengths and recipes. Decide the operation from the story, line up decimals carefully, and give the answer with the right unit.",
        steps: ["What is asked? What do I know?", "Choose the operation (often more than one).", "Solve carefully, keeping decimal points lined up.", "Check that the answer is sensible."],
        examples: [
          { q: "A notebook costs $2.35. How much do 4 cost?", work: ["2.35 × 4 = 9.40."], answer: "$9.40" },
          { q: "A recipe needs 3/4 cup of flour. How much for 2 batches?", work: ["3/4 × 2 = 6/4 = 1 1/2."], answer: "1 1/2 cups" },
        ],
        gen: (r) => { const who = r.pick(NAMES);
          if (r.chance(0.5)) { const price = r.int(105, 995), qty = r.int(2, 6);
            return { prompt: `A book costs $${dec(price, 2)}. ${who} buys ${qty}. How many dollars is that?`, kind: "number", answer: dec(price * qty, 2), unit: "dollars",
              hint: "Multiply the price by how many.", explain: `$${dec(price, 2)} × ${qty} = $${(price * qty / 100).toFixed(2)}.` }; }
          const d = r.pick([2, 3, 4, 8]); let n = r.int(1, d - 1); while (gcd(n, d) !== 1) n = r.int(1, d - 1); const k = r.int(2, 5);
          return { prompt: `A recipe needs ${n}/${d} cup of sugar. How many cups for ${k} batches?`, kind: "fraction", answer: fracText(n * k, d, true), unit: "cups",
            hint: `${n}/${d} × ${k}.`, explain: `${n}/${d} × ${k} = ${n * k}/${d} = ${fracText(n * k, d, true)} cups.` }; } },
    ] },
  ],
};
