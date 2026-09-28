import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF8",
        ink: "#111827",
        muted: "#6B7280",
        mist: "#F0EDF6",
        /* Brand palette */
        purple: "#54209C",
        blue: "#0454DC",
        cyan: "#049CC4",
        gold: "#C4941C",
        "gold-light": "#CCA45C",
        /* Legacy aliases → purple / gold primary pairing */
        sand: "#C4941C",
        forest: "#C4941C",
        ocean: "#54209C",
      },
      fontFamily: {
        display: ["var(--font-praktika)", "system-ui", "sans-serif"],
        body: ["var(--font-praktika)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "0.03em" }],
        "display-sm": ["clamp(1.35rem, 2vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "0.035em" }],
      },
      borderRadius: {
        card: "1rem",
        panel: "1.25rem",
      },
      maxWidth: {
        site: "1400px",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
