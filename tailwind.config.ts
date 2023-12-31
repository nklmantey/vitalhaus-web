import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cosiBold: ["var(--font-cosi-bold)"],
        cosiUltra: ["var(--font-cosi-ultra)"],
        csBold: ["var(--font-cs-bold)"],
        csMedium: ["var(--font-cs-medium)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
