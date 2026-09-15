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
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t scroll-mt-6 bg-white"
      style={{ borderColor: '#E2E8F0' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 leading-tight tracking-tight">
            <span className="text-black" style={{ color: '#000000' }}>
              {salesContent.pricing.titlePrefix}
            </span>
            <span style={{ color: '#1E4FC2' }}>
              {salesContent.pricing.titleHighlight}
            </span>
          </h2>

          <div
            className="inline-block px-5 py-2 rounded-full text-xs sm:text-sm font-black mb-6 shadow-xs"
            style={{
              backgroundColor: '#EAF7F2',
              borderColor: '#2BB89B',
              color: '#008269',
              border: '1px solid #2BB89B',
            }}
          >
            {salesContent.pricing.badge}
          </div>

          {/* Countdown timer blocks */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-sm border-2 min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: '#1642A8' }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: '#1642A8' }}
                >
                  {minutes}
                </div>
                <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 text-center" style={{ color: '#475569' }}>
                  Minutos
                </div>
              </div>

              <div className="text-xl sm:text-3xl font-black" style={{ color: '#1642A8' }}>:</div>

              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-sm border-2 min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: '#1642A8' }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: '#1642A8' }}
                >
                  {seconds}
                </div>
                <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 text-center" style={{ color: '#475569' }}>
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
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)' }}
          >
            <p className="text-xs font-black tracking-widest mb-4" style={{ color: '#475569' }}>
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

            <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: '#0F172A' }}>
              {essentialPlan.title}
            </h3>

            {/* Features Included */}
            <ul className="space-y-2.5 mb-6">
              {essentialPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px]" style={{ color: '#0F172A' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#167347' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug font-medium">{feat}</span>
                </li>
              ))}

              {/* Excluded Features */}
              {essentialPlan.excludedFeatures?.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px] line-through font-medium" style={{ color: '#475569' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#F1F5F9' }}>
                    <Lock className="w-3 h-3" style={{ color: '#475569' }} strokeWidth={2.5} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
              <div className="text-center mb-4">
                <p className="text-xs font-bold" style={{ color: '#475569' }}>
                  por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: '#16A34A' }}
                >
                  R$ {essentialPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{essentialPlan.priceCents}</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#475569' }}>
                  {essentialPlan.paymentNotice}
                </p>
              </div>

              {/* Clicking triggers the discount upsell modal */}
              <button
                id="btn-buy-essential"
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full px-6 sm:px-8 py-4 text-white text-sm sm:text-base font-black rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  boxShadow: '0 8px 20px -2px rgba(22, 163, 74, 0.35)',
                }}
              >
                <span className="leading-snug">{essentialPlan.buttonText}</span>
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
                  style={{ backgroundColor: '#F1F5F9', borderColor: '#E2E8F0' }}
                >
                  <span className="text-lg leading-none font-bold" style={{ color: '#1E4FC2' }}>↓</span>
                  <p className="text-xs sm:text-sm leading-snug" style={{ color: '#0F172A' }}>
                    <span className="font-extrabold" style={{ color: '#1E4FC2' }}>92% das pessoas</span> preferem
                    levar os <span className="font-extrabold" style={{ color: '#1E4FC2' }}>4 bônus</span> no plano completo
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: PLANO PREMIUM (Highlighted - Refined & Beautiful) */}
          <div
            id="plan-card-premium"
            className="relative w-full rounded-3xl bg-white p-6 sm:p-8 shadow-xl border-2 flex flex-col mt-6 md:mt-0 transition-all duration-300 hover:shadow-2xl ring-4 ring-emerald-500/10"
            style={{ borderColor: '#16A34A' }}
          >
            {/* Best choice badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-white text-xs font-black tracking-wider uppercase shadow-xl whitespace-nowrap flex items-center gap-2 border border-amber-300/40"
              style={{
                background: 'linear-gradient(135deg, #1E4FC2 0%, #1642A8 100%)',
              }}
            >
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{premiumPlan.badge} • PACOTE COMPLETO</span>
            </div>

            <div className="flex items-center justify-between gap-2 mb-3 mt-1.5">
              <span className="text-xs font-black tracking-widest text-[#16A34A] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {premiumPlan.name}
              </span>
            </div>

            <div className="w-full mb-5 flex items-center justify-center min-h-[200px] p-2 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-100">
              <img
                src={premiumPlan.mockupImage}
                alt={premiumPlan.altText}
                width={577}
                height={433}
                className="w-full h-auto object-contain max-h-56 drop-shadow-md transition-transform hover:scale-105 duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: '#0F172A' }}>
              {premiumPlan.title}
            </h3>

            {/* Included Features */}
            <ul className="space-y-2.5 mb-5">
              {premiumPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px]" style={{ color: '#0F172A' }}>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                    style={{ backgroundColor: '#16A34A' }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug font-semibold">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Highlighted Bonus Box (Refined) */}
            <div
              className="rounded-2xl p-4.5 mb-6 border border-emerald-300 bg-gradient-to-br from-emerald-50/90 via-slate-50 to-amber-50/40 shadow-xs"
            >
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-base">🎁</span>
                <p className="text-xs font-black uppercase tracking-wider" style={{ color: '#123C32' }}>
                  E MAIS: 4 BÔNUS EXCLUSIVOS INCLUÍDOS
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                {premiumPlan.bonusHighlights?.map((bonus) => (
                  <li key={bonus.tag} className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold text-white bg-[#1E4FC2] shrink-0 shadow-xs">
                      BÔNUS {bonus.tag}
                    </span>
                    <span className="leading-snug font-bold text-[#0F172A] text-xs sm:text-sm">
                      {bonus.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
              <div className="text-center mb-4">
                <p className="text-xs sm:text-sm font-semibold" style={{ color: '#475569' }}>
                  De <span className="line-through font-extrabold text-[#DC2626] text-sm sm:text-base">{premiumPlan.originalPrice}</span> por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: '#16A34A' }}
                >
                  R$ {premiumPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{premiumPlan.priceCents}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mt-1 border border-emerald-200">
                  <span>⚡</span> {premiumPlan.paymentNotice}
                </div>
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
                className="cta-pulse flex items-center justify-center gap-2.5 w-full px-6 sm:px-10 py-4.5 sm:py-5 text-white text-base sm:text-lg font-black rounded-full shadow-2xl transition-all duration-200 text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 12px 28px -3px rgba(22, 163, 74, 0.5), 0 4px 12px -2px rgba(22, 163, 74, 0.3)',
                }}
              >
                <span className="leading-snug">{premiumPlan.buttonText}</span>
              </a>

              <img
                src="/assets/bandeiras-pagamento.webp"
                alt="Formas de pagamento aceitas: Visa, Mastercard, Hipercard, Elo e Pix"
                width={520}
                height={70}
                loading="lazy"
                decoding="async"
                className="mt-3.5 w-full max-w-[200px] mx-auto h-auto opacity-90"
              />

              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold" style={{ color: '#475569' }}>
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
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
