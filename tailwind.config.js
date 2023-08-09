/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'autoFill': 'repeat(auto-fill, minmax(0, 1fr))'
      },
      screens: {
        '3xl': '1700px'
      }
    },
  },
  plugins: [],
}

