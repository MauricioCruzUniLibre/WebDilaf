
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, light = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract Growth Waves / Bars */}
        <path 
          d="M20 80C20 80 25 50 50 30L50 80Z" 
          fill="url(#logo-grad-1)" 
          className="opacity-40"
        />
        <path 
          d="M35 80C35 80 40 40 70 20L70 80Z" 
          fill="url(#logo-grad-1)" 
          className="opacity-70"
        />
        <path 
          d="M50 80C50 80 55 25 90 10L90 80Z" 
          fill="url(#logo-grad-1)" 
        />
        
        {/* Decorative Data Nodes */}
        <circle cx="90" cy="10" r="3" fill="#22d3ee" className="animate-pulse" />
        
        <defs>
          <linearGradient id="logo-grad-1" x1="20" y1="80" x2="90" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-2xl font-bold tracking-[0.15em] ${light ? 'text-white' : 'text-slate-900'}`}>
            DILAF
          </span>
          <span className={`text-[8px] uppercase tracking-[0.3em] font-medium ${light ? 'text-cyan-400/80' : 'text-slate-500'}`}>
            Soluciones Contables
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
