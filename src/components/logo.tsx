"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'desktop' | 'mobile';
}

export default function Logo({ 
  className = '', 
  width = 180, 
  height = 40, 
  variant = 'desktop' 
}: LogoProps) {
  const fontSize = variant === 'desktop' ? 18 : 16;
  const tspanFontSize = variant === 'desktop' ? 20 : 18;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 40" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`logo-svg ${className}`}
    >
      <rect width="180" height="40" fill="transparent" />
      <text 
        x="10" 
        y="25" 
        fontFamily="Poppins, sans-serif" 
        fontSize={fontSize} 
        fontWeight="700" 
        className="logo-text"
      >
        Vibe Coding Paris 
        <tspan fontSize={tspanFontSize}>🚀</tspan>
      </text>
    </svg>
  );
}