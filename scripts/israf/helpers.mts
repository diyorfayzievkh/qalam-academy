// Bilingual helpers: every translatable string is "English || O‘zbekcha".
export const B = (section: string) => `Israf, “${section}”`;
export const P = (text: string) => ({ type: "p", text });
export const L = (title: string, items: string[]) => ({ type: "points", title, items });
export const Q = (en: string, src: string) => ({ type: "quote", en, src });
