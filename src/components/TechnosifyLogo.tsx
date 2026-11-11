import React from 'react';

interface TechnosifyLogoProps {
  variant?: 'dark' | 'light' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  className?: string;
}

export const TechnosifyLogo: React.FC<TechnosifyLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSlogan = false,
  className = '',
}) => {
  const strokeColor =
    variant === 'light'
      ? '#FFFFFF'
      : variant === 'blue'
      ? '#0026FF'
      : '#23272E';

  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'blue'
      ? 'text-[#0026FF]'
      : 'text-[#23272E]';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Technosify Geometric T Outline Mark */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0`}
        aria-hidden="true"
      >
        {/* Left Top Bar + Vertical Stem with rounded top-left and rounded bottom-right */}
        <path
          d="M18 10H33V54H28C23.5817 54 20 50.4183 20 46V23H9V19C9 14.0294 13.0294 10 18 10Z"
          stroke={strokeColor}
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
        {/* Right Top Crossbar with rounded bottom-right */}
        <path
          d="M33 10H55V14C55 18.9706 50.9706 23 46 23H33V10Z"
          stroke={strokeColor}
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-tight leading-none ${textSizes[size]} ${textColor}`}
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          Technosify
        </span>
        {showSlogan && (
          <span
            className={`text-[10px] font-bold tracking-wide mt-0.5 ${
              variant === 'light' ? 'text-blue-100' : 'text-[#0026FF]'
            }`}
          >
            Tech Stars you can trust
          </span>
        )}
      </div>
    </div>
  );
};
