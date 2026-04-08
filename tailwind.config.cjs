/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        "surface-2": "rgb(var(--surface-2))",
        brand: {
          DEFAULT: "rgb(var(--brand-1))",
          soft: "rgb(var(--brand-2))",
        },
        gold: "rgb(var(--brand-1))",
        platinum: "rgb(var(--platinum))",
        muted: "rgb(var(--muted))",
      },
      fontFamily: {
        display: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "Inter",
          "Poppins",
          "sans-serif",
        ],
        body: ["Inter", "Poppins", "sans-serif"],
        luxury: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 25px 70px rgba(201, 161, 74, 0.35)",
        soft: "0 16px 40px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(600px 300px at 80% 0%, rgba(201, 161, 74, 0.25), transparent 60%)",
        "gold-glow":
          "radial-gradient(420px 240px at 20% 0%, rgba(201, 161, 74, 0.35), transparent 60%)",
        "dark-gradient":
          "linear-gradient(135deg, rgba(11, 11, 11, 0.98), rgba(26, 26, 26, 0.95))",
        grid:
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
