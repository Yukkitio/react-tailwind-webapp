// src/theme/colors.js
const colors = require('tailwindcss/colors');

const themeColors = {
  primary: colors.indigo,
  secondary: colors.purple,
  accent: colors.pink,
  neutral: colors.gray,
  success: colors.green,
  warning: colors.yellow,
  danger: colors.red,
  // Ajouter des couleurs personnalisées pour clair et sombre si besoin
  lightMode: {
    background: '#FFFFFF',
    headerBackground: '#F3F4F6',
    headerBorder: '#D1D5DB',
    text: '#1F2937',
    hoverBackground: '#f3f4f6',
    border: '#6366f1',
    paginationBackground: '#F3F4F6',
    paginationText: '#374151',
  },
  darkMode: {
    background: '#111827',
    headerBackground: '#1E293B',
    headerBorder: '#4B5563',
    text: '#E5E7EB',
    hoverBackground: '#374151',
    border: '#6366f1',
    paginationBackground: '#1E293B',
    paginationText: '#FFFFFF',
  },
};

module.exports = themeColors;
