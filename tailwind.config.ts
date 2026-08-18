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
        neon: {
          DEFAULT: "#6B9686", // Sage / Muted Mint
          dark: "#1A3830",    // Deep Pine Green
          light: "#8BB5A8",   // Light Mint
          glow: "rgba(107, 150, 134, 0.25)",
        },
        dark: {
          DEFAULT: "#09090b", // zinc-950
          card: "#121214",    // zinc-900 custom dark
          border: "#1d1d21",  // zinc-800 custom border
          hover: "#2a2a30",   // zinc-700 custom hover
        },
        light: {
          DEFAULT: "#f4f4f5", // zinc-100
          muted: "#a1a1aa",   // zinc-400
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.75rem, 4vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem, 2.5vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 8rem)",
        "section-sm": "clamp(3rem, 5vw, 5rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card": "0 4px 20px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 15px rgba(107, 150, 134, 0.1)",
        "neon": "0 0 10px rgba(107, 150, 134, 0.25)",
        "neon-lg": "0 0 15px rgba(107, 150, 134, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.1)" },
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, #09090b, #121214)",
        "gradient-neon": "linear-gradient(135deg, #09090b 0%, rgba(29, 61, 53, 0.2) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
