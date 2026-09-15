import React from 'react';
import { Star } from 'lucide-react';
import { salesContent } from '../data/salesContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {salesContent.testimonials.heading}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mt-3"
            style={{ background: salesContent.brand.gold }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {salesContent.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-8px_rgba(10,26,63,0.08)] hover:shadow-[0_10px_30px_-8px_rgba(10,26,63,0.16)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <p className="font-extrabold text-sm sm:text-base text-slate-900">
                  {item.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
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
