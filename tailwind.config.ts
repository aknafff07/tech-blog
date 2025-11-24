import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // Gunakan import, bukan require

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // Masukkan variabel plugin di sini
  ],
};
export default config;