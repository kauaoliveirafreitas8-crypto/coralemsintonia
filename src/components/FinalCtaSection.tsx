import React from 'react';
import { salesContent } from '../data/salesContent';

interface FinalCtaSectionProps {
  onScrollToOffer: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section
      id="final-cta-section"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden"
      style={{
        backgroundColor: '#123C32',
      }}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm font-black tracking-widest uppercase mb-3" style={{ color: '#FACC15' }}>
          {salesContent.finalCta.title}
        </p>

        <h2 className="text-2xl sm:text-4xl font-black mb-4 leading-tight tracking-tight text-white">
          {salesContent.finalCta.heading}
        </h2>

        <p className="text-sm sm:text-base mb-5 leading-relaxed max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
          {salesContent.finalCta.subtitle}
        </p>

        <p className="text-base sm:text-xl font-black mb-6 sm:mb-8" style={{ color: '#FACC15' }}>
          {salesContent.finalCta.punchline}
        </p>

        <button
          id="final-cta-btn"
          type="button"
          onClick={onScrollToOffer}
          className="cta-pulse inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 text-white text-base sm:text-xl font-black rounded-full shadow-2xl cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 12px 28px -3px rgba(22, 163, 74, 0.5), 0 4px 12px -2px rgba(22, 163, 74, 0.3)',
          }}
        >
          <span className="leading-snug">{salesContent.finalCta.buttonText}</span>
        </button>

        <p className="text-xs sm:text-sm mt-4 font-medium" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
          {salesContent.finalCta.trustText}
        </p>
      </div>
    </section>
  );
};
