import React from 'react';
import { Link } from 'react-router-dom';
import ErrorIcon from '../components/icons/ErrorIcon';

export function NotFoundPage() {
  return (
    <div className="h-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 text-center p-4">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <ErrorIcon />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
