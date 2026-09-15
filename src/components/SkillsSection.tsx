import React from 'react';
import { salesContent } from '../data/salesContent';

interface SkillsSectionProps {
  onScrollToOffer: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section
      id="skills-section"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{
        backgroundColor: '#1642A8',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight text-white">
            {salesContent.skills.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#EAB308' }}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {salesContent.skills.items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: '#113382',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2.5 sm:mb-3 text-2xl sm:text-4xl shadow-md transition-transform hover:scale-110 shrink-0"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                }}
              >
                {item.emoji}
              </div>
              <h3 className="font-black text-xs sm:text-base leading-tight text-white mb-1 sm:mb-2 drop-shadow-sm">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-[11px] sm:text-sm text-white/90 leading-snug sm:leading-relaxed font-medium">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            id="skills-cta-btn"
            type="button"
            onClick={onScrollToOffer}
            className="cta-pulse inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-4.5 text-white text-base sm:text-lg font-black rounded-full cursor-pointer transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 10px 25px -3px rgba(22, 163, 74, 0.45), 0 4px 10px -2px rgba(22, 163, 74, 0.3)',
            }}
          >
            <span className="leading-snug">{salesContent.skills.ctaText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
