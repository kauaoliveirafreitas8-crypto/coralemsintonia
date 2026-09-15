import React from 'react';
import { salesContent } from '../data/salesContent';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="audience-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-block px-6 py-2 rounded-full mb-4 shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${salesContent.brand.primary}, ${salesContent.brand.primaryDark})`,
            }}
          >
            <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              {salesContent.targetAudience.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {salesContent.targetAudience.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {salesContent.targetAudience.items.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white shadow-[0_4px_20px_-8px_rgba(10,26,63,0.12)] hover:shadow-[0_12px_28px_-8px_rgba(10,26,63,0.22)] transition-all duration-200 hover:-translate-y-1 border border-slate-100"
            >
              <div
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 text-2xl sm:text-3xl transition-transform group-hover:scale-110 shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${salesContent.brand.primaryDark}, ${salesContent.brand.primary})`,
                  boxShadow: `inset 0 0 0 1px ${salesContent.brand.gold}66`,
                }}
              >
                {item.emoji}
              </div>
              <h3 className="font-extrabold text-sm sm:text-base leading-snug text-slate-900 mb-1.5">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
