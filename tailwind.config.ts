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
        cream: "#faf7f0",
        gold: "#d4af37",
        rose: "#f4c2c2",
        blush: "#ffc0cb",
        maroon: "#800020",
        sage: "#9caf88",
        champagne: "#f7e7ce",
        pearl: "#f8f6f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        script: ["var(--font-dancing-script)", "Dancing Script", "cursive"],
        elegant: ["var(--font-playfair-display)", "Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        romantic: "0 10px 25px rgba(212, 175, 55, 0.1)",
        soft: "0 4px 15px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
