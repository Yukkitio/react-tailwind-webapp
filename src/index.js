import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';

import App from './App';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <Router>
        <App />
      </Router>
    </DarkModeProvider>
  </StrictMode>
);