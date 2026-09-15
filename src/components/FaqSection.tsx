import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const FaqSection: React.FC = () => {
  // Default open first item as in original
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {salesContent.faqs.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ background: salesContent.brand.gold }}
          />
        </div>

        <div className="space-y-3">
          {salesContent.faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-5 hover:bg-slate-50/80 cursor-pointer transition-colors"
                >
                  <span className="font-extrabold text-sm sm:text-base pr-3 text-slate-900">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: salesContent.brand.primary }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: salesContent.brand.primary }}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
