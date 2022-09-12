/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        sky:'#2EA3F2',
        'sky-hover':'#1996EB',
      },
    },
  },
  plugins: [
  ],
}
