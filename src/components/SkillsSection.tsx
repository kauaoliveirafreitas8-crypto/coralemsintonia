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
        background: `linear-gradient(135deg, ${salesContent.brand.primary}, ${salesContent.brand.primaryDark})`,
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight">
            {salesContent.skills.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: salesContent.brand.gold }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {salesContent.skills.items.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 text-3xl sm:text-4xl shadow-md transition-transform hover:scale-110 shrink-0"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 8px 20px -6px rgba(0, 0, 0, 0.25)',
                }}
              >
                {item.emoji}
              </div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight text-white mb-2 drop-shadow-sm">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-medium">
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
            className="cta-pulse inline-block w-full sm:w-auto px-8 sm:px-12 py-4 text-white text-base sm:text-lg font-black rounded-xl shadow-2xl cursor-pointer hover:opacity-95 transition-all"
            style={{
              background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight}, ${salesContent.brand.greenDark})`,
            }}
          >
            {salesContent.skills.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};
