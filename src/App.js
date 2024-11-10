import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { Settings } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { DarkModeProvider } from './context/DarkModeContext';
import { LoginForm } from './components/forms/LoginForm';
import { Sidebar } from './components/common/Sidebar';
import { BackgroundAnimed } from './components/common/BackgroundAnimed';
import { BackgroundMain } from './components/common/BackgroundMain';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return (
      <DarkModeProvider>
        <BackgroundAnimed>
          <div className="w-full max-w-md">
            <LoginForm onLogin={handleLogin} />
          </div>
        </BackgroundAnimed>
      </DarkModeProvider>
    );
  }

  return (
    <DarkModeProvider>
      <div className="flex h-screen">
        <Sidebar onLogout={handleLogout} />
        <BackgroundMain>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Route 404 */}
          </Routes>
        </BackgroundMain>
      </div>
    </DarkModeProvider>
  );
}

export default App;
