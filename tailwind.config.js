/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "heading-xl": ["48px", "61px"],
        "heading-md": ["36px", "58px"],
        "heading-sm": ["28px", "46px"],
        "content-md": ["16px", "32px"],
        "content-lg": ["18px", "32px"],
        line: ["16px", "58px"],
      },
    },
  },
  plugins: [],
};
