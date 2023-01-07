/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  extend: {
    typography: {
      DEFAULT: {
        css: {
          img: {
            maxWidth: 768,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
