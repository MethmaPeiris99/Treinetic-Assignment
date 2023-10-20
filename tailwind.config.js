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
      },
      colors: {
        coral: "#E97F7E",
        gray: "#E6E8E9",
        light_gray: "#EDECEB",
        black: "#463E33"
      }
    },
  },
  plugins: [],
}