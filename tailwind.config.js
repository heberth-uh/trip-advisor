/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E7AB06',
        'secondary': '#E5E5E5',
        'yellow': '#FFC014',
        'dark-gray': '#9C9C9C',
        'light-gray': '#DCDCDC'
      },
      fontFamily: {
        content: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

