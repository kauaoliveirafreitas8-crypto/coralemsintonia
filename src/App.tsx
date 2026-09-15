import { useCallback } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { SkillsSection } from './components/SkillsSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { QuickSearchSection } from './components/QuickSearchSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SalesNotification } from './components/SalesNotification';

export default function App() {
  const handleScrollToOffer = useCallback(() => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#25302B] flex flex-col selection:bg-[#167347]/20 selection:text-[#123C32]">
      {/* Top Banner */}
      <TopBanner />

      {/* Main Landing Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection onScrollToOffer={handleScrollToOffer} />

        {/* Dynamic Dual Horizontal Showcase Marquee */}
        <ShowcaseCarousel />

        {/* Target Audience: Este material é para você */}
        <TargetAudienceSection />

        {/* What you will work on: O que você poderá trabalhar */}
        <SkillsSection onScrollToOffer={handleScrollToOffer} />

        {/* Main Deliverables: O que você vai receber */}
        <DeliverablesSection onScrollToOffer={handleScrollToOffer} />

        {/* Organization / Quick Search: Encontre rapidamente o que seu coral precisa trabalhar */}
        <QuickSearchSection />

        {/* Bonuses: 4 Bônus Exclusivos */}
        <BonusesSection />

        {/* Pricing / Offers: Garanta seu acesso hoje */}
        <PricingSection />

        {/* Testimonials: O que dizem regentes e líderes de coral */}
        <TestimonialsSection />

        {/* Guarantee: 7 dias */}
        <GuaranteeSection />

        {/* FAQs: Perguntas Frequentes */}
        <FaqSection />

        {/* Final CTA: Pare de procurar uma atividade nova... */}
        <FinalCtaSection onScrollToOffer={handleScrollToOffer} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Social Proof Purchase Notification */}
      <SalesNotification />
    </div>
  );
}
