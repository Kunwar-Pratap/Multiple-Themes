/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "th-main": "var(--main)",
        "th-button": "var(--button)",
        "th-t-button": "var(--t-button)",
        "th-heading": "var(--heading)",
        "th-p-heading": "var(--p-heading)",
        "th-navbar": "var(--navbar)",
        "th-brand": "var(--brand)",
        "th-f-brand": "var(--f-brand)",
        "th-t-navbar": "var(--t-navbar)",
        "th-footer": "var(--footer)",
        "th-t-footer": "var(--t-footer)",
        "th-t-primary": "var(--t-primary)",
        "th-t-secondary": "var(--t-secondary)",
        "th-placeholder": "var(--placeholder)",
      },
    },
  },
  plugins: [],
};
