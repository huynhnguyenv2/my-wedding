import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#fbf9f6",
        dark: "rgb(47, 51, 59)",
      },
      fontFamily: {
        whisper: ["Whisper-Regular", "sans-serif"],
        garamond: ["CormorantGaramond", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
