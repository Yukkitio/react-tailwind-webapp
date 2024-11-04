import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useDarkMode } from '../../context/DarkModeContext'; // Assurez-vous d'avoir un contexte pour le mode sombre

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ data, title }) {
  const { isDarkMode } = useDarkMode(); // Détection du mode sombre

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: isDarkMode
          ? data.map(d => d.darkColor || d.color) // Utilisation de `darkColor` si fourni
          : data.map(d => d.color),
        borderColor: isDarkMode
          ? data.map(d => d.darkColor || d.color)
          : data.map(d => d.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
          },
          color: isDarkMode ? '#E5E7EB' : '#111827', // Couleur de la légende
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: '600',
        },
        padding: { bottom: 20 },
        color: isDarkMode ? '#E5E7EB' : '#111827', // Couleur du titre
      },
      tooltip: {
        backgroundColor: isDarkMode ? '#374151' : '#fff',
        titleColor: isDarkMode ? '#D1D5DB' : '#111827',
        bodyColor: isDarkMode ? '#9CA3AF' : '#4B5563',
        borderColor: isDarkMode ? '#6B7280' : '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.raw / total) * 100).toFixed(1);
            return `${context.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <Pie data={chartData} options={options} />
  );
}
