import React from 'react';

export function BackgroundAnimed({ children, className = '' }) {
  return (
    <div className={`relative min-h-screen flex items-center justify-center ${className}`}>
      {/* Background Animation */}
      <div className="absolute inset-0 area z-[-1]">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default BackgroundAnimed;
