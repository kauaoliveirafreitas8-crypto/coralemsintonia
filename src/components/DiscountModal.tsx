import React from 'react';
import { Star, ShieldCheck, X } from 'lucide-react';
import { salesContent } from '../data/salesContent';
import { buildCheckoutUrl } from '../utils/tracking';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const upsellUrl = buildCheckoutUrl(salesContent.upsellModal.acceptCheckoutUrl);
  const basicUrl = buildCheckoutUrl(salesContent.upsellModal.declineCheckoutUrl);

  return (
    <div
      id="discount-modal-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="discount-modal-card"
        className="relative w-full max-w-[24rem] rounded-3xl bg-white shadow-2xl border-2 overflow-hidden my-auto"
        style={{ borderColor: salesContent.brand.gold }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative px-5 pt-5 pb-5 text-center text-white"
          style={{
            background: `linear-gradient(135deg, ${salesContent.brand.primary}, ${salesContent.brand.primaryDark})`,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 text-white text-lg leading-none font-bold flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-white mb-2"
            style={{ background: 'rgba(255, 255, 255, 0.18)' }}
          >
            <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
            {salesContent.upsellModal.badge}
          </span>

          <h3 className="text-white text-base sm:text-lg font-black leading-snug px-1">
            {salesContent.upsellModal.title}
          </h3>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Benefit items */}
          <div className="space-y-2">
            {salesContent.upsellModal.benefits.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5"
              >
                <div className="text-xl leading-none">{b.icon}</div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {b.label}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Highlight Box */}
          <div
            className="relative mt-4 rounded-2xl border-2 px-3 pt-5 pb-3 text-center bg-amber-50"
            style={{ borderColor: '#fcd34d' }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-black tracking-wider text-white whitespace-nowrap shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight})`,
              }}
            >
              {salesContent.upsellModal.dealBadge}
            </span>

            <p className="text-xs font-semibold text-slate-700">
              De <span className="line-through text-slate-400">{salesContent.upsellModal.originalPrice}</span> por apenas
            </p>

            <p
              className="text-4xl font-black leading-none mt-1 text-[#16A34A]"
            >
              R$ {salesContent.upsellModal.dealPrice}
              <span className="text-2xl font-bold">{salesContent.upsellModal.dealPriceCents}</span>
            </p>

            <p className="text-[11px] text-slate-500 mt-1 font-medium">
              {salesContent.upsellModal.paymentNotice}
            </p>
          </div>

          {/* Upgrade CTA */}
          <a
            href={upsellUrl && upsellUrl !== '#' ? upsellUrl : '#'}
            target={upsellUrl && upsellUrl !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!upsellUrl || upsellUrl === '#') {
                e.preventDefault();
              }
            }}
            className="cta-pulse flex items-center justify-center w-full mt-4 px-6 py-4 text-white text-sm sm:text-base font-black rounded-full shadow-xl text-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 8px 20px -2px rgba(22, 163, 74, 0.4)',
            }}
          >
            <span className="leading-snug">{salesContent.upsellModal.acceptButtonText}</span>
          </a>

          {/* Decline CTA (keeps standard basic purchase) */}
          <a
            href={basicUrl && basicUrl !== '#' ? basicUrl : '#'}
            target={basicUrl && basicUrl !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!basicUrl || basicUrl === '#') {
                e.preventDefault();
              }
            }}
            className="flex items-center justify-center w-full mt-2.5 px-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span className="leading-snug">{salesContent.upsellModal.declineButtonText}</span>
          </a>

          <p className="flex items-center justify-center gap-1.5 pt-3.5 text-[11px] font-medium text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Compra 100% segura • Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
};
