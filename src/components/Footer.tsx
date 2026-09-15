import React from 'react';
import { salesContent } from '../data/salesContent';

export const Footer: React.FC = () => {
  return (
    <footer id="page-footer" className="py-8 px-4 text-center text-xs" style={{ backgroundColor: '#0C2D25' }}>
      <div className="max-w-3xl mx-auto space-y-2">
        <p className="font-semibold" style={{ color: '#F2F5F1' }}>
          {salesContent.footer.copyright}
        </p>
        <p className="text-[11px] leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(242, 245, 241, 0.75)' }}>
          {salesContent.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};
