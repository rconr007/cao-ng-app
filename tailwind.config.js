/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tsukimi': ['Arial', 'sans-serif'], // You can replace with actual Tsukimi font if needed
      },
    },
  },
  plugins: [],
}