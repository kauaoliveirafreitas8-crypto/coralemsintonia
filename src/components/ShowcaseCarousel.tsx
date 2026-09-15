import React from 'react';
import { salesContent } from '../data/salesContent';

export const ShowcaseCarousel: React.FC = () => {
  const row1Images = [...salesContent.showcase.row1, ...salesContent.showcase.row1, ...salesContent.showcase.row1];
  const row2Images = [...salesContent.showcase.row2, ...salesContent.showcase.row2, ...salesContent.showcase.row2];

  return (
    <section id="showcase-section" className="py-6 sm:py-10 overflow-hidden space-y-6 bg-white">
      {/* Row 1: Forward track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 showcase-track" style={{ width: 'max-content' }}>
          {row1Images.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden border shadow-sm transition-transform hover:scale-105"
              style={{
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                width: 'min(70vw, 280px)',
              }}
            >
              <img
                src={src}
                alt="Página material Coral em Sintonia"
                width={620}
                height={876}
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 showcase-track-reverse" style={{ width: 'max-content' }}>
          {row2Images.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 rounded-2xl overflow-hidden border shadow-sm transition-transform hover:scale-105"
              style={{
                borderColor: '#E2E8F0',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                width: 'min(70vw, 280px)',
              }}
            >
              <img
                src={src}
                alt="Página material Coral em Sintonia"
                width={620}
                height={876}
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
