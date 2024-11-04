import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/forms/LoginForm';
import { HomePage } from './pages/HomePage';
import { Settings } from './pages/SettingsPage';
import { Sidebar } from './components/common/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="h-screen flex">
      {!isLoggedIn ? (
        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-100 dark:from-neutral-900 dark:to-neutral-800 p-4">
          <div className="w-full max-w-md">
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      ) : (
        <>
          <Sidebar onLogout={handleLogout} />
          <main className="flex-1 p-8 overflow-auto bg-neutral-50 dark:bg-neutral-900">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
