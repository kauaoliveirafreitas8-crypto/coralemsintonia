import React from 'react';
import { salesContent } from '../data/salesContent';

interface FinalCtaSectionProps {
  onScrollToOffer: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section
      id="final-cta-section"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden"
      style={{
        backgroundColor: '#123C32',
      }}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm font-black tracking-widest uppercase mb-3" style={{ color: '#C79A3B' }}>
          {salesContent.finalCta.title}
        </p>

        <h2 className="text-xl sm:text-3xl font-black mb-4 leading-tight tracking-tight text-white">
          {salesContent.finalCta.heading}
        </h2>

        <p className="text-sm sm:text-base mb-5 leading-relaxed max-w-xl mx-auto" style={{ color: '#FAF8F3' }}>
          {salesContent.finalCta.subtitle}
        </p>

        <p className="text-base sm:text-lg font-black mb-6 sm:mb-8" style={{ color: '#C79A3B' }}>
          {salesContent.finalCta.punchline}
        </p>

        <button
          id="final-cta-btn"
          type="button"
          onClick={onScrollToOffer}
          className="cta-pulse inline-block w-full sm:w-auto px-8 sm:px-12 py-4 text-white text-base sm:text-lg font-black rounded-lg shadow-md cursor-pointer hover:bg-[#0F5C38] transition-all"
          style={{
            backgroundColor: '#167347',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            boxShadow: '0 6px 16px rgba(22, 115, 71, 0.18)',
          }}
        >
          {salesContent.finalCta.buttonText}
        </button>

        <p className="text-xs mt-3.5 font-medium" style={{ color: 'rgba(250, 248, 243, 0.8)' }}>
          {salesContent.finalCta.trustText}
        </p>
      </div>
    </section>
  );
};
