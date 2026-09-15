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
        background: `linear-gradient(135deg, ${salesContent.brand.primary}, ${salesContent.brand.primaryDark})`,
      }}
    >
      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm font-black tracking-widest uppercase mb-3 text-amber-300">
          {salesContent.finalCta.title}
        </p>

        <h2 className="text-xl sm:text-3xl font-black mb-4 leading-tight tracking-tight">
          {salesContent.finalCta.heading}
        </h2>

        <p className="text-sm sm:text-base opacity-90 mb-5 leading-relaxed max-w-xl mx-auto">
          {salesContent.finalCta.subtitle}
        </p>

        <p className="text-base sm:text-lg font-black text-amber-300 mb-6 sm:mb-8">
          {salesContent.finalCta.punchline}
        </p>

        <button
          id="final-cta-btn"
          type="button"
          onClick={onScrollToOffer}
          className="cta-pulse inline-block w-full sm:w-auto px-8 sm:px-12 py-4 text-white text-base sm:text-lg font-black rounded-xl shadow-2xl cursor-pointer hover:opacity-95 transition-all"
          style={{
            background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight}, ${salesContent.brand.greenDark})`,
          }}
        >
          {salesContent.finalCta.buttonText}
        </button>

        <p className="text-xs opacity-75 mt-3.5 font-medium">
          {salesContent.finalCta.trustText}
        </p>
      </div>
    </section>
  );
};
