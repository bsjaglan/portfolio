/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'customGray': '#5A5658',
        'customOrange': '#FF7B00'
      }
    },
  },
  plugins: [],
};
