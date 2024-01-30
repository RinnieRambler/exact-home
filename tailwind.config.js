/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },

    fontFamily: {
      'body-sans': ['archivo', 'ui-sans-serif'],
      'header-sans': ['bebas neue', 'ui-sans-serif'],
      'serif': ['playfair display', 'ui-serif'],
    },

    extend: {
      colors: {
        'navyblue': '#233D4D',
        'orangerust': '#D28F56',
        'orangebright': '#FE7F2D',
        'yellowbright': '#FCCA46',
        'offwhite': '#FFFEF9',
        'creamy': '#F0EBD8',
      },
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
        '25': '25vh',
        '20': '20vh',
        '10': '10vh',
      },
      aspectRatio: {
        'landscape': '3 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
        '5/3': '5 / 3',
      },
    },
  },
  plugins: [
  ],
}
