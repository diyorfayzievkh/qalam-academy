import type { Config } from "tailwindcss";

/**
 * Iman Academy design tokens. Colors come from CSS variables (see globals.css)
 * so light/dark is a single class swap on <html>, as in Digital Workspace.
 * Palette: deep emerald + gold on a sage-tinted ground.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          surface: "rgb(var(--surface) / <alpha-value>)",
          inset: "rgb(var(--surface-2) / <alpha-value>)",
        },
        border: "rgb(var(--line) / <alpha-value>)",
        fg: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-soft) / <alpha-value>)",
        },
        emerald: {
          DEFAULT: "rgb(var(--emerald) / <alpha-value>)",
          soft: "rgb(var(--emerald-soft) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          bright: "rgb(var(--gold-bright) / <alpha-value>)",
          soft: "rgb(var(--gold-soft) / <alpha-value>)",
        },
        band: {
          DEFAULT: "rgb(var(--band) / <alpha-value>)",
          fg: "rgb(var(--band-ink) / <alpha-value>)",
        },
        success: { DEFAULT: "rgb(var(--ok) / <alpha-value>)", soft: "rgb(var(--ok-soft) / <alpha-value>)" },
        danger: { DEFAULT: "rgb(var(--bad) / <alpha-value>)", soft: "rgb(var(--bad-soft) / <alpha-value>)" },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        display: ['"Reem Kufi"', '"Nunito Sans"', "system-ui", "sans-serif"],
        arabic: ["Amiri", '"Traditional Arabic"', "serif"],
      },
      borderRadius: { card: "14px" },
    },
  },
  plugins: [],
};

export default config;
