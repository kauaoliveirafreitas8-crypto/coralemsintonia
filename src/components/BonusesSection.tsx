import React from 'react';
import { salesContent } from '../data/salesContent';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-block px-5 py-2 rounded-full text-white text-[11px] sm:text-xs font-black mb-4 tracking-widest uppercase shadow-sm"
            style={{
              background: `linear-gradient(135deg, #b8962e, ${salesContent.brand.gold})`,
            }}
          >
            {salesContent.bonuses.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black leading-tight text-slate-900 tracking-tight">
            {salesContent.bonuses.headingPrefix}{' '}
            <span style={{ color: salesContent.brand.primary }}>
              {salesContent.bonuses.headingHighlight}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {salesContent.bonuses.description}
          </p>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-4"
            style={{ background: salesContent.brand.gold }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {salesContent.bonuses.items.map((bonus) => (
            <div
              key={bonus.title}
              className="rounded-3xl border-2 shadow-lg overflow-hidden bg-white flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ borderColor: salesContent.brand.gold }}
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

              <div className="p-6 flex flex-col flex-1 border-t border-slate-100">
                <span
                  className="inline-block text-[10px] font-extrabold px-3 py-1 rounded-full mb-2 text-white tracking-wider self-start"
                  style={{
                    background: `linear-gradient(135deg, #b8962e, ${salesContent.brand.gold})`,
                  }}
                >
                  {bonus.tag}
                </span>
                <h3
                  className="text-lg sm:text-xl font-black mb-1 tracking-tight"
                  style={{ color: salesContent.brand.primaryDark }}
                >
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold mb-2 text-slate-800">
                  {bonus.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
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
