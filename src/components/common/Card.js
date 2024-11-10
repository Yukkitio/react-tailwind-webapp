import React from 'react';
import ErrorIcon from '../icons/ErrorIcon';

export function Card({ children, className = '', loading = false, error = false, errorMessage = 'Oups, something is missing.', type = 'Text' }) {
  const renderSkeleton = () => {
    switch (type) {
      case 'Graph':
        return (
          <div className="animate-pulse flex items-center justify-center w-full h-full">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );
      case 'Table':
        return (
          <div className="animate-pulse space-y-2">
            <div className="flex items-center space-x-4 justify-between mb-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            ))}
          </div>
        );
      default:
        return (
          <div className="animate-pulse flex flex-col items-center justify-center h-full text-center">
            <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        );
    }
  };

  return (
    <div className={`bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md ${className}`}>
      {loading ? (
        renderSkeleton()
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 dark:text-gray-500">
          <ErrorIcon className="w-10 h-10 mb-2" />
          <p className="font-semibold">{errorMessage}</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
