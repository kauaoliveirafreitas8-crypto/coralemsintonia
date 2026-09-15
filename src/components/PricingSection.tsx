import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Lock, Star } from 'lucide-react';
import { salesContent } from '../data/salesContent';
import { buildCheckoutUrl } from '../utils/tracking';
import { DiscountModal } from './DiscountModal';

export const PricingSection: React.FC = () => {
  // 15-minute countdown timer (900 seconds)
  const [timeLeft, setTimeLeft] = useState(900);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const essentialPlan = salesContent.pricing.plans[0];
  const premiumPlan = salesContent.pricing.plans[1];

  const premiumCheckoutUrl = buildCheckoutUrl(premiumPlan.checkoutUrl);

  return (
    <section
      id="oferta"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t scroll-mt-6"
      style={{ backgroundColor: '#FAF8F3', borderColor: '#DED6C8' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 leading-tight tracking-tight" style={{ color: '#123C32' }}>
            {salesContent.pricing.titlePrefix}
            <span style={{ color: '#8B1E2D' }}>
              {salesContent.pricing.titleHighlight}
            </span>
          </h2>

          <div
            className="inline-block px-5 py-2 rounded-full text-white text-xs sm:text-sm font-black mb-6 shadow-xs"
            style={{
              backgroundColor: '#8B1E2D',
            }}
          >
            {salesContent.pricing.badge}
          </div>

          {/* Countdown timer blocks */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-sm border min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: '#DED6C8' }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: '#8B1E2D' }}
                >
                  {minutes}
                </div>
                <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 text-center" style={{ color: '#66726C' }}>
                  Minutos
                </div>
              </div>

              <div className="text-xl sm:text-3xl font-black" style={{ color: '#8B1E2D' }}>:</div>

              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-sm border min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: '#DED6C8' }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: '#8B1E2D' }}
                >
                  {seconds}
                </div>
                <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 text-center" style={{ color: '#66726C' }}>
                  Segundos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 items-stretch">
          {/* Card 1: PLANO ESSENCIAL */}
          <div
            id="plan-card-essential"
            className="relative w-full rounded-3xl bg-white p-6 sm:p-7 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md"
            style={{ border: '1px solid #DED6C8' }}
          >
            <p className="text-xs font-black tracking-widest mb-4" style={{ color: '#66726C' }}>
              {essentialPlan.name}
            </p>

            <div className="w-full mb-5 flex items-center justify-center min-h-[190px]">
              <img
                src={essentialPlan.mockupImage}
                alt={essentialPlan.altText}
                width={420}
                height={420}
                className="w-full h-auto object-contain max-h-48 drop-shadow-md transition-transform hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: '#25302B' }}>
              {essentialPlan.title}
            </h3>

            {/* Features Included */}
            <ul className="space-y-2.5 mb-6">
              {essentialPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px]" style={{ color: '#25302B' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#167347' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}

              {/* Excluded Features */}
              {essentialPlan.excludedFeatures?.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px] line-through" style={{ color: '#66726C' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#F2F5F1' }}>
                    <Lock className="w-3 h-3" style={{ color: '#66726C' }} strokeWidth={2.5} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t" style={{ borderColor: '#DED6C8' }}>
              <div className="text-center mb-4">
                <p className="text-xs font-bold" style={{ color: '#66726C' }}>
                  por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: '#123C32' }}
                >
                  R$ {essentialPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{essentialPlan.priceCents}</span>
                </div>
                <p className="text-xs font-medium" style={{ color: '#66726C' }}>
                  {essentialPlan.paymentNotice}
                </p>
              </div>

              {/* Clicking triggers the discount upsell modal */}
              <button
                id="btn-buy-essential"
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full px-4 py-4 text-white text-sm sm:text-base font-black rounded-lg transition-all cursor-pointer hover:bg-[#0F5C38]"
                style={{
                  backgroundColor: '#167347',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: '0 6px 16px rgba(22, 115, 71, 0.18)',
                }}
              >
                {essentialPlan.buttonText}
              </button>

              <img
                src="/assets/bandeiras-pagamento.webp"
                alt="Formas de pagamento aceitas: Visa, Mastercard, Hipercard, Elo e Pix"
                width={520}
                height={70}
                loading="lazy"
                decoding="async"
                className="mt-3 w-full max-w-[200px] mx-auto h-auto opacity-90"
              />

              {essentialPlan.highlightNotice && (
                <div
                  className="mt-4 rounded-xl border border-dashed px-3 py-2.5 flex items-start gap-2"
                  style={{ backgroundColor: '#F2F5F1', borderColor: '#DED6C8' }}
                >
                  <span className="text-lg leading-none font-bold" style={{ color: '#8B1E2D' }}>↓</span>
                  <p className="text-xs sm:text-sm leading-snug" style={{ color: '#25302B' }}>
                    <span className="font-extrabold" style={{ color: '#8B1E2D' }}>92% das pessoas</span> preferem
                    levar os <span className="font-extrabold" style={{ color: '#8B1E2D' }}>4 bônus</span> no plano completo
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: PLANO PREMIUM (Highlighted) */}
          <div
            id="plan-card-premium"
            className="relative w-full rounded-3xl bg-white p-6 sm:p-7 shadow-lg border-2 flex flex-col mt-4 md:mt-0 transition-all duration-300 hover:shadow-xl"
            style={{ borderColor: '#C79A3B' }}
          >
            {/* Best choice badge */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-[11px] sm:text-xs font-black tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5"
              style={{
                backgroundColor: '#8B1E2D',
              }}
            >
              <Star className="w-3.5 h-3.5 fill-[#C79A3B] text-[#C79A3B]" />
              {premiumPlan.badge}
            </div>

            <p
              className="text-xs font-black tracking-widest mb-4 mt-1"
              style={{ color: '#167347' }}
            >
              {premiumPlan.name}
            </p>

            <div className="w-full mb-5 flex items-center justify-center min-h-[190px]">
              <img
                src={premiumPlan.mockupImage}
                alt={premiumPlan.altText}
                width={577}
                height={433}
                className="w-full h-auto object-contain max-h-56 drop-shadow-md transition-transform hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: '#25302B' }}>
              {premiumPlan.title}
            </h3>

            {/* Included Features */}
            <ul className="space-y-2.5 mb-4">
              {premiumPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px]" style={{ color: '#25302B' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#167347' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Highlighted Bonus Box */}
            <div
              className="rounded-2xl p-4 mb-5 border"
              style={{ backgroundColor: '#F2F5F1', borderColor: '#DED6C8' }}
            >
              <p className="text-xs font-black uppercase mb-2 flex items-center gap-1.5" style={{ color: '#123C32' }}>
                <span>🎁</span> E MAIS:
              </p>
              <ul className="space-y-1.5 text-sm">
                {premiumPlan.bonusHighlights?.map((bonus) => (
                  <li key={bonus.tag} className="flex items-start gap-1.5">
                    <span className="font-extrabold shrink-0" style={{ color: '#8B1E2D' }}>BÔNUS {bonus.tag} —</span>
                    <span className="leading-snug font-semibold" style={{ color: '#25302B' }}>
                      {bonus.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t" style={{ borderColor: '#DED6C8' }}>
              <div className="text-center mb-4">
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#66726C' }}>
                  De <span className="line-through">{premiumPlan.originalPrice}</span> por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: '#167347' }}
                >
                  R$ {premiumPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{premiumPlan.priceCents}</span>
                </div>
                <p className="text-xs font-medium whitespace-nowrap" style={{ color: '#66726C' }}>
                  {premiumPlan.paymentNotice}
                </p>
              </div>

              {/* Direct checkout link with UTM parameter pass-through */}
              <a
                id="btn-buy-premium"
                href={premiumCheckoutUrl && premiumCheckoutUrl !== '#' ? premiumCheckoutUrl : '#'}
                target={premiumCheckoutUrl && premiumCheckoutUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!premiumCheckoutUrl || premiumCheckoutUrl === '#') {
                    e.preventDefault();
                  }
                }}
                className="cta-pulse flex items-center justify-center gap-2 w-full px-4 py-4 text-white text-base font-black rounded-lg shadow-md hover:bg-[#0F5C38] transition-all text-center cursor-pointer"
                style={{
                  backgroundColor: '#167347',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: '0 6px 16px rgba(22, 115, 71, 0.18)',
                }}
              >
                {premiumPlan.buttonText}
              </a>

              <img
                src="/assets/bandeiras-pagamento.webp"
                alt="Formas de pagamento aceitas: Visa, Mastercard, Hipercard, Elo e Pix"
                width={520}
                height={70}
                loading="lazy"
                decoding="async"
                className="mt-3 w-full max-w-[200px] mx-auto h-auto opacity-90"
              />

              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-medium" style={{ color: '#66726C' }}>
                <ShieldCheck className="w-4 h-4" style={{ color: '#167347' }} />
                <span>Compra 100% segura • Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Downsell Modal */}
      <DiscountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
