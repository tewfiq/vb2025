"use client";

import React from "react";

interface GradientBlobCardProps {
  icon: string;
  title: string;
  text: string;
}

const GradientBlobCard: React.FC<GradientBlobCardProps> = ({ icon, title, text }) => {
  return (
    <div className="relative w-full h-full rounded-2xl flex flex-col overflow-hidden gradient-animated-border">
      {/* Inner Card */}
      <div className="relative z-10 bg-white dark:bg-neutral-900 rounded-xl flex flex-col h-full p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-2xl shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <span aria-hidden>{icon}</span>
        </div>
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 flex-grow">
          {text}
        </p>
      </div>

      {/* CSS for animated gradient border */}
      <style jsx>{`
        .gradient-animated-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ec4899, #ef4444, #eab308, #ec4899);
          background-size: 400% 400%;
          border-radius: 16px;
          z-index: -1;
          animation: animatedGradient 3s ease infinite;
          opacity: 0.75;
        }
        
        @keyframes animatedGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .dark .gradient-animated-border::before {
          background: linear-gradient(45deg, #ec4899, #ef4444, #eab308, #ec4899);
        }
      `}</style>
    </div>
  );
};

export default GradientBlobCard;