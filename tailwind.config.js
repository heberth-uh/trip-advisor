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
        'highlight': '#FFC014',
        'dark-gray': '#9C9C9C',
        'light-gray': '#DCDCDC'
      },
      backgroundImage: {
        'search-form': "url('public/vacation.jpg')"
      },
      fontFamily: {
        content: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

