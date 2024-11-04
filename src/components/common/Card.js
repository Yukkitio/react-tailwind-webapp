import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
}
