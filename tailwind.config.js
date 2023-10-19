/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       fontFamily: {
        primary_font: ["Nothing You Could Do"],
        secondary_font: ["Open Sans"]
      }
    },
  },
  plugins: [],
}