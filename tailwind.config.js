/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/Welcome/scrrenshot.png')",
      }),
      colors: {
        'dark-black': '#1A1C1E',
        'primary': '#00E2F2',
        'btn': '#FFECA8'
      },
      ontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
