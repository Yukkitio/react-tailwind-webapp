import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDarkMode } from '../../context/DarkModeContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function LineChart({ data, title }) {
  const { isDarkMode } = useDarkMode();

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(d => d.value),
        borderColor: isDarkMode ? '#A5B4FC' : '#4F46E5',
        backgroundColor: isDarkMode ? 'rgba(165, 180, 252, 0.1)' : 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: isDarkMode ? '#A5B4FC' : '#4F46E5',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: isDarkMode ? '#E5E7EB' : '#111827',
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
        color: isDarkMode ? '#E5E7EB' : '#111827',
      },
      tooltip: {
        backgroundColor: isDarkMode ? '#374151' : '#fff',
        titleColor: isDarkMode ? '#D1D5DB' : '#111827',
        bodyColor: isDarkMode ? '#9CA3AF' : '#4B5563',
        borderColor: isDarkMode ? '#6B7280' : '#E5E7EB',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: isDarkMode ? '#9CA3AF' : '#6B7280' },
      },
      y: {
        beginAtZero: true,
        grid: { color: isDarkMode ? '#4B5563' : '#F3F4F6' },
        ticks: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <Line data={chartData} options={options} />
  );
}
