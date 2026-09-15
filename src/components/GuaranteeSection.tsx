import React from 'react';
import { salesContent } from '../data/salesContent';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y" style={{ backgroundColor: '#FBF4E5', borderColor: '#DED6C8' }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-6 sm:p-10 text-center bg-white"
          style={{
            border: '1px solid #DED6C8',
            boxShadow: '0 4px 14px rgba(18, 60, 50, 0.07)',
          }}
        >
          <div className="flex justify-center mb-5">
            <img
              src={salesContent.guarantee.sealImage}
              alt="Garantia incondicional de 7 dias"
              width={300}
              height={300}
              loading="lazy"
              decoding="async"
              className="w-28 h-28 object-contain drop-shadow-md transition-transform hover:scale-105"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight" style={{ color: '#123C32' }}>
            {salesContent.guarantee.heading}
          </h2>

          <div className="space-y-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium" style={{ color: '#25302B' }}>
            <p>
              Você terá <strong className="font-extrabold" style={{ color: '#8B1E2D' }}>7 dias para conhecer o material e avaliar se ele faz sentido para você e para a rotina do seu coral.</strong>
            </p>

            <p>
              {salesContent.guarantee.paragraph2}
            </p>

            <p className="pt-2 font-black" style={{ color: '#123C32' }}>
              {salesContent.guarantee.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
