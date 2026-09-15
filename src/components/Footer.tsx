import React from 'react';
import { salesContent } from '../data/salesContent';

export const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="py-8 px-4 text-center text-xs bg-black" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="font-semibold text-slate-200">
          {salesContent.footer.copyright}
        </p>
        <p className="text-[11px] leading-relaxed max-w-2xl mx-auto text-slate-400">
          {salesContent.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};
