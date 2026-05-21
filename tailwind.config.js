/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f1e6",
        linen: "#eadcc7",
        gold: "#b99558",
        taupe: "#9a8673",
        clay: "#855d4d",
        charcoal: "#27231f",
        umber: "#4b3930",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 90px rgba(45, 35, 27, 0.18)",
        soft: "0 18px 60px rgba(63, 48, 36, 0.12)",
      },
      backgroundImage: {
        "paper-wash":
          "linear-gradient(135deg, rgba(247, 241, 230, 0.98), rgba(234, 220, 199, 0.84))",
      },
    },
  },
  plugins: [],
};
