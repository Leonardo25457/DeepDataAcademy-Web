// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts,js,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { xl: "1180px" } },
    extend: {
      colors: {
        primary: { 200: "#c4dafa", 500: "#84b6f4", 700: "#4d82bc", 900: "#005187" },
        base: { 50: "#fcffff" },
        textc: { 900: "#0f172a", 700: "#334155" },
      },
      borderRadius: { xl: "18px", "2xl": "20px" },
      boxShadow: {
        smx: "0 1px 2px rgba(0,0,0,.06)",
        mdx: "0 6px 20px rgba(0,28,61,.12)",
        lgx: "0 18px 40px rgba(0,28,61,.18)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
