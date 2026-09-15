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
    <section id="faq-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: '#123C32' }}>
            {salesContent.faqs.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ backgroundColor: '#C79A3B' }}
          />
        </div>

        <div className="space-y-3">
          {salesContent.faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl overflow-hidden bg-white transition-all duration-200"
                style={{
                  border: '1px solid #DED6C8',
                  boxShadow: '0 2px 8px rgba(18, 60, 50, 0.05)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-5 hover:bg-[#FAF8F3]/50 cursor-pointer transition-colors"
                >
                  <span
                    className="font-extrabold text-sm sm:text-base pr-3"
                    style={{ color: isOpen ? '#123C32' : '#25302B' }}
                  >
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: '#123C32' }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: '#123C32' }}
                    />
                  )}
                </button>

                {isOpen && (
                  <div
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm sm:text-base leading-relaxed border-t pt-3 animate-in fade-in duration-150"
                    style={{ borderColor: '#DED6C8', color: '#25302B' }}
                  >
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
