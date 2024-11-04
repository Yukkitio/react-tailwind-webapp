import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { Card } from '../components/common/Card';

export function Settings() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <header className="flex items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mr-4">Settings</h1>
        <div className="flex-grow border-b border-neutral-300 dark:border-neutral-700"></div>
      </header>

      <Card className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 font-heading">Dark Mode</h1>

        <div className="flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg shadow-inner">
          <h2 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">On / Off</h2>
          <button
            onClick={toggleDarkMode}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isDarkMode ? 'bg-primary-600' : 'bg-neutral-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </Card>
    </>
  );
}
