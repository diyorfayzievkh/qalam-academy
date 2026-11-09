/** Mix up the answer order, the same way every time for a given question, so the right answer isn't always in the same place. */
export function mixOptions<Q extends { q: string; options: string[]; answer: number }>(q: Q): Q {
  let h = 2166136261;
  for (const c of q.q) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const order = q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) };
}
