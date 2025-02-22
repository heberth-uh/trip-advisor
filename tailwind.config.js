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
        'light-gray': '#DCDCDC',
        'lighter-gray': '#EFEFEF',
        'dry-green': '#909C5F'
      },
      backgroundImage: {
        'search-form': "url('public/vacation.jpg')",
        'hero': "url('public/blob-scene.svg')",
        'hero-desktop': "url('public/blob-scene-desktop.svg')"
      },
      fontFamily: {
        content: ['Poppins', 'sans-serif']
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },      }
    }
  },
  plugins: [],
}

