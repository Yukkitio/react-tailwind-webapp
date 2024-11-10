const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.purple,
        accent: colors.pink,
        neutral: colors.gray,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
      },
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
      },
    },
  },
  plugins: [],
  safelist: [
    'text-primary-600',
    'text-secondary-600',
    'text-accent-600',
    'text-neutral-600',
    'text-success-600',
    'text-warning-600',
    'text-danger-600',
  ],
};