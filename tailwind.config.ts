import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#162660",  // Main blue
        accent: "#F1E4D1",   // Soft beige
        lightblue: "#D0E6FD", // Light blue for highlights
      },
    },
  },
  plugins: [],
} satisfies Config;
