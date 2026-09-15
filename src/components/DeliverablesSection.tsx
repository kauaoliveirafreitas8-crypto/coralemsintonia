import React from 'react';
import { Check } from 'lucide-react';
import { salesContent } from '../data/salesContent';

interface DeliverablesSectionProps {
  onScrollToOffer: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="deliverables-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            <span className="text-black" style={{ color: '#000000' }}>
              {salesContent.deliverables.titlePrefix}
            </span>
            <span style={{ color: '#1E4FC2' }}>
              {salesContent.deliverables.titleHighlight}
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ backgroundColor: '#EAB308' }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Book Mockup */}
          <div className="flex justify-center">
            <img
              src={salesContent.deliverables.mockupImage}
              alt="Coral em Sintonia — Material principal"
              width={680}
              height={680}
              className="w-full max-w-[340px] h-auto object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right: Feature list */}
          <div>
            <span
              className="inline-block text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 text-white tracking-wider"
              style={{
                backgroundColor: '#1E4FC2',
              }}
            >
              {salesContent.deliverables.badge}
            </span>
            <h3
              className="text-xl sm:text-3xl font-black mb-2 tracking-tight"
              style={{ color: '#1E4FC2' }}
            >
              {salesContent.deliverables.productName}
            </h3>

            <p className="text-sm sm:text-base mb-5 font-semibold leading-relaxed" style={{ color: '#475569' }}>
              {salesContent.deliverables.subtitle}
            </p>

            <ul className="space-y-2.5 mb-6">
              {salesContent.deliverables.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: '#0F172A' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#16A34A' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="p-4 rounded-xl border mb-6 text-xs sm:text-sm font-semibold leading-relaxed"
              style={{
                backgroundColor: '#EFF6FF',
                borderColor: '#BFDBFE',
                color: '#1E3A8A',
              }}
            >
              💡 {salesContent.deliverables.footerNote}
            </div>

            <button
              id="deliverables-cta-btn"
              type="button"
              onClick={onScrollToOffer}
              className="cta-pulse inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 text-white text-base sm:text-lg font-black rounded-full shadow-xl text-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 10px 25px -3px rgba(22, 163, 74, 0.45), 0 4px 10px -2px rgba(22, 163, 74, 0.3)',
              }}
            >
              <span className="leading-snug">{salesContent.deliverables.ctaText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
