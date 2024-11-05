import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Lock, Mail } from 'lucide-react';
import { Card } from '../common/Card';

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    onLogin();
  };

  const handleDebugLogin = () => {
    onLogin();
  };

  return (
    <Card className="max-w-md mx-auto p-8 bg-white bg-opacity-10 dark:bg-neutral-800 dark:bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-20 dark:border-neutral-600 dark:border-opacity-20 rounded-2xl shadow-lg space-y-6">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 bg-indigo-100 dark:bg-indigo-500 bg-opacity-80 dark:bg-opacity-60 rounded-full flex items-center justify-center">
          <LogIn className="h-6 w-6 text-indigo-600 dark:text-indigo-100" />
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="email"
              type="email"
              required
              className="block w-full pl-10 pr-3 py-2 bg-white bg-opacity-30 dark:bg-neutral-800 dark:bg-opacity-30 backdrop-blur-lg border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder-gray-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="block w-full pl-10 pr-10 py-2 bg-white bg-opacity-30 dark:bg-neutral-800 dark:bg-opacity-30 backdrop-blur-lg border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder-gray-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 bg-opacity-80 hover:bg-opacity-90 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Sign in'
          )}
        </button>

        <button
          type="button"
          onClick={handleDebugLogin}
          className="w-full flex justify-center py-2.5 px-4 border border-indigo-200 dark:border-indigo-700 rounded-lg shadow-sm text-sm font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 bg-opacity-20 backdrop-blur-lg dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Debug Login
        </button>
      </form>
    </Card>
  );
}
