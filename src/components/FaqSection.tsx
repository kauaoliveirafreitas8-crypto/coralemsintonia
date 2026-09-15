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
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black" style={{ color: '#000000' }}>
            {salesContent.faqs.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ backgroundColor: '#EAB308' }}
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
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-5 hover:bg-[#F8FAFC] cursor-pointer transition-colors"
                >
                  <span
                    className="font-extrabold text-sm sm:text-base pr-3"
                    style={{ color: isOpen ? '#1642A8' : '#0F172A' }}
                  >
                    {item.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: '#1642A8' }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-transform"
                      style={{ color: '#64748B' }}
                    />
                  )}
                </button>

                {isOpen && (
                  <div
                    className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm sm:text-base leading-relaxed border-t pt-3 animate-in fade-in duration-150 font-medium"
                    style={{ borderColor: '#E2E8F0', color: '#0F172A' }}
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
