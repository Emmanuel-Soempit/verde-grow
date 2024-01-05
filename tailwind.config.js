/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: '#307c31',
        mediumgreen: '#7bd017',
        lightgreen: '#cfff91',
        backgroundgreen: '#f4fee5',
        backgroundgreen2: '#c3dac7'
      },
      fontFamily: {
        display: 'Oswald, ui-serif'
      }
    },
  },
  plugins: [],
}