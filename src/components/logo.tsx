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
  const fontSize = variant === 'desktop' ? 16 : 16;
  const tspanFontSize = variant === 'desktop' ? 14 : 14;
  const svgHeight = variant === 'desktop' ? 35 : 35;
  
  return (
    <svg 
      width={width} 
      height={svgHeight} 
      viewBox={`0 0 180 ${svgHeight}`} 
      xmlns="http://www.w3.org/2000/svg" 
      className={`logo-svg ${className}`}
    >
      <rect width="180" height={svgHeight} fill="transparent" />
      <text 
        x="10" 
        y={variant === 'desktop' ? "22" : "22"} 
        fontFamily="Poppins, sans-serif" 
        fontSize={fontSize} 
        fontWeight="700" 
        className="logo-text"
      >
        Vibe Coding Paris 
        <tspan fontSize={tspanFontSize} dy="0">🚀</tspan>
      </text>
    </svg>
  );
}