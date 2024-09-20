import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E20C18",
        text: "#151515",
        subText: "#6d6d6d",
        gray: "#F9F9F9",
      },
      screens: {
        mob: "480px",
        tab: "768px",
        pc: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
