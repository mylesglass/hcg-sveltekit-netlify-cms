/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      fun: ['Fredoka One', 'sans-serif'],
      logo: ['Montserrat', 'sans-serif'],
      title: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
