import React from "react";
import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* iPhone 15 Pro Frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
        {/* Screen Container */}
        <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[2.5rem] bg-black dark:bg-black rounded-b-[1.25rem] z-10 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {/* Camera */}
              <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
            </div>
          </div>

          {/* Content Area */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            {children}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-[3px] top-[120px] w-[3px] h-[40px] bg-gray-800 rounded-l-lg" />
        <div className="absolute -left-[3px] top-[180px] w-[3px] h-[60px] bg-gray-800 rounded-l-lg" />
        <div className="absolute -left-[3px] top-[250px] w-[3px] h-[60px] bg-gray-800 rounded-l-lg" />
        <div className="absolute -right-[3px] top-[180px] w-[3px] h-[80px] bg-gray-800 rounded-r-lg" />
      </div>
    </div>
  );
}
