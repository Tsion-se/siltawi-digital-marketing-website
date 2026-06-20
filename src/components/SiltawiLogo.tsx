import React from 'react';

interface SiltawiLogoProps {
  className?: string;
  showText?: boolean;
  lightMode?: boolean;
}

export default function SiltawiLogo({ className = 'h-10', showText = true, lightMode = false }: SiltawiLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon part */}
      <svg
        id="siltawi-logo-svg"
        viewBox="0 0 100 100"
        className="h-full w-auto filter drop-shadow-[0_2px_8px_rgba(216,39,93,0.25)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Official branding gradients */}
          <linearGradient id="yellow-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9A03F" />
            <stop offset="100%" stopColor="#F57E20" />
          </linearGradient>
          
          <linearGradient id="magenta-plum" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E43E54" />
            <stop offset="50%" stopColor="#D8275D" />
            <stop offset="100%" stopColor="#631B5D" />
          </linearGradient>

          <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E1E62" />
            <stop offset="35%" stopColor="#D8275D" />
            <stop offset="70%" stopColor="#E43E54" />
            <stop offset="100%" stopColor="#F57E20" />
          </linearGradient>
          
          <linearGradient id="bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E43E54" />
            <stop offset="50%" stopColor="#D8275D" />
            <stop offset="100%" stopColor="#631B5D" />
          </linearGradient>
        </defs>

        {/* Tilted square element (top-right of lightning mark) */}
        {/* Rounded tilted rectangle: standard path */}
        <path
          d="M 62,22 C 60,18 64,14 68,16 L 82,23 C 86,25 86,31 82,33 L 74,37 C 70,39 65,37 63,33 Z"
          fill="url(#yellow-orange)"
        />

        {/* Lightning Bolt core shape */}
        <path
          d="M 52,43 
             L 32,48 
             C 28,49 26,47 28,43 
             L 42,16 
             C 44,12 42,9 37,10 
             L 12,47 
             C 9,51 11,54 16,53 
             L 34,49 
             L 24,78 
             C 22,84 26,86 29,81 
             L 53,49 
             C 55,46 54,43 52,43 Z"
          fill="url(#bolt-grad)"
        />
      </svg>

      {/* Styled text SiLTAWi */}
      {showText && (
        <span 
          id="siltawi-brand-text"
          className="font-bold relative flex items-baseline select-none"
          style={{
            fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif',
            fontSize: '1.45rem',
            letterSpacing: '0.01em',
            lineHeight: '1',
          }}
        >
          {/* We style the word "SiLTAWi" using high-fidelity markup to mimic the letter shapes */}
          <span className="flex items-center">
            {/* S */}
            <span className="bg-gradient-to-r from-[#631B5D] to-[#D8275D] bg-clip-text text-transparent font-extrabold text-[1.65rem] tracking-tight leading-none leading-none select-none">
              S
            </span>
            {/* i */}
            <span className="relative flex flex-col items-center mx-[1.5px] leading-none">
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-[#F9A03F] to-[#F57E20] mb-[2px] transform rotate-12"></span>
              <span className="w-2 h-5 rounded-[1px] bg-gradient-to-b from-[#D8275D] to-[#631B5D]"></span>
            </span>
            {/* L */}
            <span className="bg-gradient-to-b from-[#D8275D] to-[#631B5D] bg-clip-text text-transparent font-extrabold text-[1.55rem] tracking-tight ml-[1.5px] select-none">
              L
            </span>
            {/* T */}
            <span className="bg-gradient-to-b from-[#D8275D] to-[#631B5D] bg-clip-text text-transparent font-extrabold text-[1.55rem] tracking-tight mx-[1px] select-none">
              T
            </span>
            {/* A (Greek Δ-style triangle or stylized A inside the official logo) */}
            <span 
              className="bg-gradient-to-b from-[#E43E54] to-[#631B5D] bg-clip-text text-transparent font-black text-[1.65rem] mx-[1px] tracking-tight select-none select-none"
              style={{ clipPath: 'polygon(50% 10%, 0% 100%, 100% 100%)' }}
            >
              A
            </span>
            {/* W */}
            <span className="bg-gradient-to-b from-[#E43E54] to-[#631B5D] bg-clip-text text-transparent font-extrabold text-[1.55rem] tracking-tight select-none">
              W
            </span>
            {/* i */}
            <span className="relative flex flex-col items-center mx-[1.5px] leading-none">
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-[#F57E20] to-[#E43E54] mb-[2px] transform rotate-12"></span>
              <span className="w-2 h-5 rounded-[1px] bg-gradient-to-b from-[#E43E54] to-[#631B5D]"></span>
            </span>
          </span>
          <span className={`text-[9px] uppercase tracking-widest font-semibold ml-2 ${lightMode ? 'text-slate-600' : 'text-slate-400'}`}>
            Digital
          </span>
        </span>
      )}
    </div>
  );
}
