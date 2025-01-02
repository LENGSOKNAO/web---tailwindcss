/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: [`Playfair Display`],
        Roboto: [`Roboto`],
      },
    },
  },
  plugins: [],
};
