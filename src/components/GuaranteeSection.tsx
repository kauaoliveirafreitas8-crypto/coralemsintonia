import React from 'react';
import { salesContent } from '../data/salesContent';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y" style={{ backgroundColor: '#FEF9EE', borderColor: '#E2E8F0' }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-6 sm:p-10 text-center bg-white"
          style={{
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
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

          <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight text-black" style={{ color: '#000000' }}>
            {salesContent.guarantee.heading}
          </h2>

          <div className="space-y-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium" style={{ color: '#0F172A' }}>
            <p className="text-black" style={{ color: '#000000' }}>
              Você terá <strong className="font-extrabold text-black" style={{ color: '#000000' }}>7 dias para conhecer o material e avaliar se ele faz sentido para você e para a rotina do seu coral.</strong>
            </p>

            <p>
              {salesContent.guarantee.paragraph2}
            </p>

            <p className="pt-2 font-black text-black" style={{ color: '#000000' }}>
              {salesContent.guarantee.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
