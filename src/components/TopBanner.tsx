import React from 'react';
import { Flame } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const TopBanner: React.FC = () => {
  return (
    <div
      id="top-banner"
      className="relative w-full text-white py-2.5 px-4 text-center z-40 shadow-sm"
      style={{ backgroundColor: salesContent.brand.primaryDark }}
    >
      <div className="text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 animate-pulse shrink-0" />
        <span>{salesContent.topBanner.text}</span>
      </div>
    </div>
  );
};
