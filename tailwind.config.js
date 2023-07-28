/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          from: { transform: "translateY(-15px)" },
          to: { transform: "translateY(0) scale(1.03)" },
        },
        move2: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10)" },
        },
      },
      animation: {
        move: "move 3s infinite ease alternate",
        move2: "move2 3s infinite ease alternate",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
