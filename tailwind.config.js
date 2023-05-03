/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#7867ED',
        light: '#F3FAFF',
        orange : '#F3907B',
        blue : '#156BED',
      }
    },
  },
  plugins: [],
}
