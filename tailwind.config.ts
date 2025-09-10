import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "16px", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        fw: {
          black: "#0B0F14",
          white: "#F8FAFC",
          hot: "#F97316",
          cool: "#22D3EE",
          violet: "#7C3AED",
          slate: "#111827",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dmsans: ["var(--font-dmsans)"],
      },
    },
  },
  plugins: [],
};
export default config;

