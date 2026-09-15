export interface SalesPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  mockupImage: string;
  altText: string;
  title: string;
  features: string[];
  excludedFeatures?: string[];
  bonusHighlights?: { tag: string; title: string }[];
  originalPrice?: string;
  currentPrice: string;
  priceCents: string;
  paymentNotice: string;
  buttonText: string;
  checkoutUrl: string;
  triggerModalOnEssential?: boolean;
  highlightNotice?: string;
}

export interface BonusItem {
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TargetAudienceItem {
  emoji: string;
  title: string;
  desc?: string;
}

export interface SkillItem {
  emoji: string;
  title: string;
  desc?: string;
}
