const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'theme-light-green': '#a8d5ba',
        'theme-light-blue': '#a2d2ff',
        "vtd-primary": colors.green,
        "vtd-secondary": colors.white
      },
    },
  },
  plugins: [],
}
