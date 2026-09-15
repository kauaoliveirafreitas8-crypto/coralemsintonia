import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { salesContent } from '../data/salesContent';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section id="hero-section" className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center py-6 sm:py-10">
        {/* Security badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border mb-4 sm:mb-6 border-emerald-600 bg-emerald-50">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-emerald-700">
            {salesContent.hero.securityBadge}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-black leading-tight mb-4 tracking-tight">
          <span
            className="block text-3xl sm:text-5xl md:text-6xl font-black"
            style={{
              background: `linear-gradient(135deg, #2563eb, ${salesContent.brand.primary})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {salesContent.hero.headlineHighlight}
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 text-slate-900 font-extrabold">
            {salesContent.hero.headlineSubtitle}
          </span>
        </h1>

        {/* Subtitle / Promise */}
        <h2 className="text-sm sm:text-xl text-slate-800 mb-5 sm:mb-6 max-w-3xl mx-auto leading-relaxed font-bold">
          {salesContent.hero.subHeading}
        </h2>

        {/* Hero Mockup */}
        <div id="hero-mockup-wrapper" className="my-5 sm:my-8 max-w-2xl mx-auto px-2 flex justify-center">
          <img
            src={salesContent.hero.mockupImage}
            alt="+80 Atividades Prontas para Coral de Igreja"
            width={1000}
            height={700}
            className="w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl transition-transform hover:scale-[1.02] duration-300 block"
            loading="eager"
          />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-lg text-slate-700 mt-5 sm:mt-6 max-w-2xl mx-auto leading-relaxed">
          {salesContent.hero.leadText}
        </p>

        {/* Audience Pills */}
        <div className="mt-4 sm:mt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold">
          {salesContent.hero.audienceTags.map((tag) => (
            <span
              key={tag}
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white shadow-sm transition-transform hover:scale-105 font-bold"
              style={{
                background: `linear-gradient(135deg, ${salesContent.brand.primaryDark}, ${salesContent.brand.primary})`,
                borderTop: `2px solid ${salesContent.brand.gold}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mt-6 sm:mt-7">
          <button
            id="hero-cta-btn"
            type="button"
            onClick={onScrollToOffer}
            className="cta-pulse inline-block w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-4 text-white text-base sm:text-lg font-black rounded-xl shadow-xl cursor-pointer hover:opacity-95 transition-all"
            style={{
              background: `linear-gradient(135deg, ${salesContent.brand.greenDark}, ${salesContent.brand.greenLight}, ${salesContent.brand.greenDark})`,
            }}
          >
            {salesContent.hero.ctaText}
          </button>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            {salesContent.hero.trustNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
