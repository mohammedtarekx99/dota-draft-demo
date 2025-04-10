const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1s linear infinite",
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: 'inset 0 0 10px var(--glow-color), inset 0 0 20px var(--glow-color)',
          },
          '50%': {
            boxShadow: 'inset 0 0 30px var(--glow-color), inset 0 0 50px var(--glow-color)',
          },
        },
      },
    },
  },
  plugins: [],
};
