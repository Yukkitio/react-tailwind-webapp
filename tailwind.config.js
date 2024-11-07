// tailwind.config.js
const themeColors = require('./src/theme/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: themeColors,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
        'inner-md': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '2xs': '0.25rem',
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
};
