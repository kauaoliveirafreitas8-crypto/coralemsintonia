import React from 'react';
import { Check } from 'lucide-react';
import { salesContent } from '../data/salesContent';

interface DeliverablesSectionProps {
  onScrollToOffer: () => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="deliverables-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: '#123C32' }}>
            {salesContent.deliverables.titlePrefix}
            <span style={{ color: '#123C32' }}>
              {salesContent.deliverables.titleHighlight}
            </span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ backgroundColor: '#C79A3B' }}
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
                backgroundColor: '#8B1E2D',
              }}
            >
              {salesContent.deliverables.badge}
            </span>
            <h3
              className="text-xl sm:text-3xl font-black mb-2 tracking-tight"
              style={{ color: '#123C32' }}
            >
              {salesContent.deliverables.productName}
            </h3>

            <p className="text-sm sm:text-base mb-5 font-medium leading-relaxed" style={{ color: '#66726C' }}>
              {salesContent.deliverables.subtitle}
            </p>

            <ul className="space-y-2.5 mb-6">
              {salesContent.deliverables.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base" style={{ color: '#25302B' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#167347' }}
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
                backgroundColor: '#F2F5F1',
                borderColor: '#DED6C8',
                color: '#25302B',
              }}
            >
              💡 {salesContent.deliverables.footerNote}
            </div>

            <button
              id="deliverables-cta-btn"
              type="button"
              onClick={onScrollToOffer}
              className="cta-pulse inline-block w-full sm:w-auto px-8 py-4 text-white text-base font-black rounded-lg shadow-md text-center cursor-pointer hover:bg-[#0F5C38] transition-all"
              style={{
                backgroundColor: '#167347',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 6px 16px rgba(22, 115, 71, 0.18)',
              }}
            >
              {salesContent.deliverables.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
