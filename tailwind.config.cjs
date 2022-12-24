/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "g-100": "rgb(110, 94, 254)",
        "g-200": "rgba(73, 63, 252, 1)",
        "link-hover": "#6d76f7",
        "button-color": "#3acbf7",
      },
    },
  },
  plugins: [],
};
