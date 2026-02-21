import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        content: "720px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "720px",
            color: "var(--foreground)",
            a: {
              color: "var(--foreground)",
              textDecoration: "underline",
              textDecorationColor: "rgba(0,0,0,0.2)",
              textUnderlineOffset: "3px",
              "&:hover": {
                textDecorationColor: "var(--foreground)",
              },
            },
            "h1, h2, h3, h4": {
              color: "var(--foreground)",
              fontWeight: "600",
            },
            code: {
              color: "var(--foreground)",
              backgroundColor: "var(--code-bg)",
              padding: "0.15em 0.35em",
              borderRadius: "0.25em",
              fontSize: "0.875em",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: {
              borderLeftColor: "var(--accent)",
              color: "var(--foreground)",
              fontStyle: "normal",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
