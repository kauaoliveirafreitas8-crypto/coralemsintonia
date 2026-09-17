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
              backgroundColor: '#123C32',
              border: '1px solid #C79A3B',
            }}
          >
            <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              {salesContent.targetAudience.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black" style={{ color: '#000000' }}>
            {salesContent.targetAudience.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {salesContent.targetAudience.items.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center text-center p-3.5 sm:p-5 rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2.5 sm:mb-3 text-xl sm:text-3xl transition-transform group-hover:scale-110 shrink-0"
                style={{
                  backgroundColor: '#FEF9EE',
                  border: '1px solid #FDE68A',
                }}
              >
                {item.emoji}
              </div>
              <h3 className="font-black text-xs sm:text-base leading-tight sm:leading-snug mb-1 sm:mb-1.5" style={{ color: '#0F172A' }}>
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed font-medium" style={{ color: '#475569' }}>
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
