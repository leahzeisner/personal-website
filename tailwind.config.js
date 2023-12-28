/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#F9D1C0",
        yellow: "#FEE4AD",
        pink: "#D62598",
        darkblue: "#050A61",
        lightblue: "#84BCDA",
        orange: "#F37748",
        red: "#D56062",
        blue: "#067BC2",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
