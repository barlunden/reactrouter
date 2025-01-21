const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@heroui/theme/dist/components/toggle.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}