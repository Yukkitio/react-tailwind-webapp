import axios from 'axios';
import statsData from './components/data/statsData.json';
import salesData from './components/data/salesData.json';
import marketShareData from './components/data/marketShareData.json';
import recentOrders from './components/data/recentOrders.json';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 3000,
});

// Fonction de délai pour simuler le temps de réponse
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fonction de récupération de données avec simulation de fallback et délai
const fetchDataWithFallback = async (endpoint, defaultData, simulate = true, delayTime = 1000) => {
  console.log(`Fetching data from ${endpoint} with a simulated delay of ${delayTime}ms...`);

  await delay(delayTime); // Ajoute un délai avant de continuer

  try {
    const response = await api.get(endpoint);
    console.log(`Data successfully fetched from ${endpoint}:`, response.data);
    return response.data;
  } catch (error) {
    if (simulate) {
      return defaultData;
    }
    throw error;
  }
};

export const fetchStatsData = (simulate = true) => fetchDataWithFallback('/stats', statsData, simulate, 0);
export const fetchSalesData = (simulate = true) => fetchDataWithFallback('/sales', salesData, simulate, 500);
export const fetchMarketShareData = (simulate = true) => fetchDataWithFallback('/market-share', marketShareData, simulate, 1500);
export const fetchRecentOrders = (simulate = true) => fetchDataWithFallback('/recent-orders', recentOrders, simulate, 3000);

export default api;
