import React from 'react';

export default function Logo({ size = 'default', showText = true }) {
  const isLarge = size === 'large';
  const iconSize = isLarge ? 42 : 34;

  return (
    <div className={`brand-logo-container ${isLarge ? 'logo-lg' : ''}`}>
      <div className="logo-icon-wrapper" style={{ width: iconSize, height: iconSize }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-logo-svg"
        >
          <defs>
            <linearGradient id="fitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10B981" floodOpacity="0.4" />
            </filter>
          </defs>
          
          {/* Outer Rounded Hexagon / Shield */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="12"
            fill="url(#fitGrad)"
            filter="url(#glow)"
          />
          
          {/* Dynamic Fitness Pulse & Lightning Bolt */}
          <path
            d="M13 25L19 25L23 15L27 33L31 22L35 25"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Reward Star / Accent */}
          <circle cx="34" cy="14" r="3" fill="url(#boltGrad)" />
        </svg>
      </div>
      {showText && (
        <div className="brand-text">
          <span className="brand-fit">FIT</span>
          <span className="brand-reward">REWARD</span>
          <span className="brand-badge">PRO</span>
        </div>
      )}
    </div>
  );
}
