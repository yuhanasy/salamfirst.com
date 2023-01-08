const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["var(--serif-font)", ...fontFamily.serif],
      sans: ["var(--sans-font)", ...fontFamily.sans],
    },
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
  },
  plugins: [require("@tailwindcss/typography")],
};
