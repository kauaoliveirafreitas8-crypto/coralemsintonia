import React from 'react';
import { salesContent } from '../data/salesContent';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/70 border-y border-amber-100/60">
      <div className="max-w-3xl mx-auto text-center">
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

        <h2 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 tracking-tight">
          {salesContent.guarantee.heading}
        </h2>

        <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
          <p>
            Você terá <strong className="text-slate-900 font-extrabold">7 dias para conhecer o material e avaliar se ele faz sentido para você e para a rotina do seu coral.</strong>
          </p>

          <p>
            {salesContent.guarantee.paragraph2}
          </p>

          <p className="pt-2 font-black text-slate-900">
            {salesContent.guarantee.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};
