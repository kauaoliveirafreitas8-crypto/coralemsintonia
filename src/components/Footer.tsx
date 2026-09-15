import React from 'react';
import { salesContent } from '../data/salesContent';

export const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="py-8 px-4 text-center text-xs text-slate-500 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="font-semibold text-slate-700">
          {salesContent.footer.copyright}
        </p>
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {salesContent.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};
