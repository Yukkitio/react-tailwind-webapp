import React from 'react';

export function BackgroundMain({ children, className = '' }) {
  return (
    <main className={`flex-1 p-8 overflow-auto bg-neutral-50 dark:bg-neutral-900 ${className}`}>
      {children}
    </main>
  );
}
