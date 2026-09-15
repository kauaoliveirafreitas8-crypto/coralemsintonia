import React from 'react';
import { Star } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: '#123C32' }}>
            {salesContent.testimonials.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ backgroundColor: '#C79A3B' }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {salesContent.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between"
              style={{
                border: '1px solid #DED6C8',
                boxShadow: '0 4px 14px rgba(18, 60, 50, 0.07)',
              }}
            >
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C79A3B] text-[#C79A3B]"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed mb-4 italic" style={{ color: '#25302B' }}>
                  "{item.text}"
                </p>
              </div>

              <div className="pt-2 border-t" style={{ borderColor: '#DED6C8' }}>
                <p className="font-extrabold text-sm sm:text-base" style={{ color: '#123C32' }}>
                  {item.name}
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#66726C' }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
