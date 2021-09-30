module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './build/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '12': '12rem',
      '15': '15rem',
      '18': '18rem',
    },
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"]
    },
    extend: {
      colors: {
        'dark': 'hsl(229, 25%, 31%)',
        'dark-alt': 'hsl(229, 64%, 46%)',
        'white-alt': 'hsl(217, 16%, 45%)'
      },
      backgroundImage: {
        'triangle': "url('./images/bg-triangle.svg')",
        'pentagon': "url('./images/bg-pentagon.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
