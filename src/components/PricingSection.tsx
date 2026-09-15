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
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 scroll-mt-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 leading-tight text-slate-900 tracking-tight">
            {salesContent.pricing.titlePrefix}
            <span style={{ color: salesContent.brand.primary }}>
              {salesContent.pricing.titleHighlight}
            </span>
          </h2>

          <div
            className="inline-block px-5 py-2 rounded-full text-white text-xs sm:text-sm font-black mb-6 shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight})`,
            }}
          >
            {salesContent.pricing.badge}
          </div>

          {/* Countdown timer blocks */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-md border-2 min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: salesContent.brand.gold }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: salesContent.brand.primaryDark }}
                >
                  {minutes}
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 text-center">
                  Minutos
                </div>
              </div>

              <div className="text-xl sm:text-3xl font-black text-slate-400">:</div>

              <div
                className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2.5 sm:py-4 shadow-md border-2 min-w-[76px] sm:min-w-[95px]"
                style={{ borderColor: salesContent.brand.gold }}
              >
                <div
                  className="text-2xl sm:text-5xl font-black text-center"
                  style={{ color: salesContent.brand.primaryDark }}
                >
                  {seconds}
                </div>
                <div className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 text-center">
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
            className="relative w-full rounded-3xl bg-white p-6 sm:p-7 shadow-lg border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-xl"
          >
            <p className="text-xs font-black tracking-widest mb-4 text-slate-500">
              {essentialPlan.name}
            </p>

            <div className="w-full mb-5 flex items-center justify-center min-h-[190px]">
              <img
                src={essentialPlan.mockupImage}
                alt={essentialPlan.altText}
                width={420}
                height={420}
                className="w-full h-auto object-contain max-h-48 drop-shadow-xl transition-transform hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="text-base sm:text-lg font-black mb-4 text-slate-900">
              {essentialPlan.title}
            </h3>

            {/* Features Included */}
            <ul className="space-y-2.5 mb-6">
              {essentialPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-800">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: salesContent.brand.greenLight }}
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}

              {/* Excluded Features */}
              {essentialPlan.excludedFeatures?.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-400 line-through">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100">
                    <Lock className="w-3 h-3 text-slate-400" strokeWidth={2.5} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="text-center mb-4">
                <p className="text-xs font-bold" style={{ color: salesContent.brand.greenLight }}>
                  por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: salesContent.brand.greenLight }}
                >
                  R$ {essentialPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{essentialPlan.priceCents}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {essentialPlan.paymentNotice}
                </p>
              </div>

              {/* Clicking triggers the discount upsell modal */}
              <button
                id="btn-buy-essential"
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full px-4 py-4 text-white text-sm sm:text-base font-black rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight})`,
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
                  className="mt-4 rounded-xl border border-dashed px-3 py-2.5 flex items-start gap-2 bg-red-50"
                  style={{ borderColor: '#fca5a5' }}
                >
                  <span className="text-lg leading-none font-bold text-red-600">↓</span>
                  <p className="text-xs sm:text-sm leading-snug text-slate-800">
                    <span className="font-extrabold text-red-700">92% das pessoas</span> preferem
                    levar os <span className="font-extrabold text-red-700">4 bônus</span> no plano completo
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: PLANO PREMIUM (Highlighted) */}
          <div
            id="plan-card-premium"
            className="relative w-full rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border-2 flex flex-col mt-4 md:mt-0 transition-all duration-300 hover:shadow-2xl"
            style={{ borderColor: salesContent.brand.greenLight }}
          >
            {/* Best choice badge */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-[11px] sm:text-xs font-black tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5"
              style={{
                background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight})`,
              }}
            >
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              {premiumPlan.badge}
            </div>

            <p
              className="text-xs font-black tracking-widest mb-4 mt-1"
              style={{ color: salesContent.brand.greenLight }}
            >
              {premiumPlan.name}
            </p>

            <div className="w-full mb-5 flex items-center justify-center min-h-[190px]">
              <img
                src={premiumPlan.mockupImage}
                alt={premiumPlan.altText}
                width={577}
                height={433}
                className="w-full h-auto object-contain max-h-56 drop-shadow-2xl transition-transform hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className="text-base sm:text-lg font-black mb-4 text-slate-900">
              {premiumPlan.title}
            </h3>

            {/* Included Features */}
            <ul className="space-y-2.5 mb-4">
              {premiumPlan.features.map((feat, idx) => (
                <li key={`${feat}-${idx}`} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-800">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: salesContent.brand.greenLight }}
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
              style={{ background: '#eef6ff', borderColor: '#d3e4f7' }}
            >
              <p className="text-xs font-black uppercase text-blue-900 mb-2 flex items-center gap-1.5">
                <span>🎁</span> E MAIS:
              </p>
              <ul className="space-y-1.5 text-sm text-slate-900">
                {premiumPlan.bonusHighlights?.map((bonus) => (
                  <li key={bonus.tag} className="flex items-start gap-1.5">
                    <span className="font-extrabold text-blue-900 shrink-0">BÔNUS {bonus.tag} —</span>
                    <span className="leading-snug font-semibold text-slate-800">
                      {bonus.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="text-center mb-4">
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  De <span className="line-through">{premiumPlan.originalPrice}</span> por apenas:
                </p>
                <div
                  className="text-5xl sm:text-6xl font-black my-1"
                  style={{ color: salesContent.brand.greenLight }}
                >
                  R$ {premiumPlan.currentPrice}
                  <span className="text-2xl sm:text-3xl font-bold">{premiumPlan.priceCents}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium whitespace-nowrap">
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
                className="cta-pulse flex items-center justify-center gap-2 w-full px-4 py-4 text-white text-base font-black rounded-xl shadow-xl hover:opacity-95 transition-all text-center cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight}, ${salesContent.brand.greenDark})`,
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

              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
