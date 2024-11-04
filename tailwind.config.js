const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Active le mode sombre
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Assure que Tailwind détecte toutes les classes utilisées dans le projet
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo, // Définit la couleur principale
        secondary: colors.purple, // Définit une couleur secondaire
        accent: colors.pink, // Accentuation (ex: boutons d'action)
        neutral: colors.gray, // Couleurs neutres
        success: colors.green, // Couleur de succès
        warning: colors.yellow, // Couleur de mise en garde
        danger: colors.red, // Couleur d'erreur ou de danger
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Utilisation d'une police sans-serif (peut être personnalisée)
        heading: ['Poppins', 'sans-serif'], // Option pour une police de titres
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
