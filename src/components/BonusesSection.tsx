import React from 'react';
import { salesContent } from '../data/salesContent';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-block px-5 py-2 rounded-full text-white text-[11px] sm:text-xs font-black mb-4 tracking-widest uppercase shadow-xs"
            style={{
              backgroundColor: '#D97706',
              border: '1px solid #FDE68A',
            }}
          >
            {salesContent.bonuses.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight text-black">
            {salesContent.bonuses.headingPrefix}{' '}
            <span className="inline-block" style={{ color: '#1E4FC2' }}>
              {salesContent.bonuses.headingHighlight}
            </span>
          </h2>
          <p className="text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#475569' }}>
            {salesContent.bonuses.description}
          </p>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-4"
            style={{ backgroundColor: '#EAB308' }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {salesContent.bonuses.items.map((bonus) => (
            <div
              key={bonus.title}
              className="rounded-3xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div className="aspect-square w-full overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={bonus.img}
                  alt={bonus.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 border-t" style={{ borderColor: '#E2E8F0' }}>
                <span
                  className="inline-block text-[11px] font-extrabold px-3 py-1 rounded-full mb-2 tracking-wider self-start"
                  style={{
                    backgroundColor: '#FEF3C7',
                    color: '#B45309',
                    border: '1px solid #FDE68A',
                  }}
                >
                  {bonus.tag}
                </span>
                <h3
                  className="text-lg sm:text-xl font-black mb-1 tracking-tight"
                  style={{ color: '#0F172A' }}
                >
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                  {bonus.subtitle}
                </p>
                <p className="text-sm leading-relaxed mt-auto font-medium" style={{ color: '#475569' }}>
                  {bonus.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
