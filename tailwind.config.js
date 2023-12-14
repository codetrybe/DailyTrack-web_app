/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx. js}"],
  theme: {
    extend: {
      colors: {
        'primary':' #af8b31',
         'black': "var(--tracker-bg-color)",
         'secondary': "var(--tracker-bg-secondary)",
         'grey': "var(--tracker-grey)"
      
      },
    },
  },
  plugins: [],
}