import React, { useState } from 'react';
import { Home, Users, Settings, BarChart2, FileText, LogOut, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar({ onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const menuItemsBottom = [
    { icon: LogOut, label: 'Logout', action: onLogout },
  ];

  const toggleSidebar = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div
      className={`relative h-screen bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 flex flex-col transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      <div className="p-4 flex items-center justify-center overflow-hidden">
        <h2
          className={`font-bold text-primary-600 whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'text-2xl max-w-full' : 'text-2xl max-w-[2.5rem]'
          }`}
          style={{ display: isExpanded ? 'block' : 'inline' }}
        >
          {isExpanded ? 'App Logo' : 'AL'}
        </h2>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center ${isExpanded ? 'px-4' : 'justify-center'} py-2.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary-50 dark:bg-primary-700 text-primary-600 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                >
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${!isExpanded && 'mx-auto'}`} />
                  <span
                    className={`font-medium ml-3 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-w-full' : 'max-w-0'}`}
                    style={{ display: isExpanded ? 'inline' : 'none' }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
        <ul className="space-y-2">
          {menuItemsBottom.map((item) => (
            <li key={item.label}>
              <button
                onClick={item.action || null}
                className={`flex items-center py-2.5 w-full rounded-lg text-neutral-700 hover:bg-neutral-100 transition-all duration-300 ${isExpanded ? 'px-4' : 'justify-center'} dark:text-neutral-300 dark:hover:bg-neutral-800`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span
                  className={`font-medium ml-3 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-w-full' : 'max-w-0'}`}
                  style={{ display: isExpanded ? 'inline' : 'none' }}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle button to expand or collapse the sidebar */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-1/2 -right-3 transform -translate-y-1/2 rounded-full p-1 shadow-md border transition-colors duration-300 ${
          isExpanded ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600' : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600'
        }`}
      >
        {isExpanded ? (
          <ChevronLeft className="h-4 w-4 text-indigo-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-indigo-500" />
        )}
      </button>
    </div>
  );
}
