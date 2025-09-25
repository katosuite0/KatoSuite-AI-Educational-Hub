import HeroSection from '../../components/marketing/hero-section';
import VoiceAIDemo from '../../components/marketing/voice-ai-demo';
import FeaturesShowcase from '../../components/marketing/features-showcase';
import PricingCards from '../../components/marketing/pricing-cards';
import TestimonialsSection from '../../components/marketing/testimonials-section';
import NewsletterSignup from '../../components/marketing/newsletter-signup';

export default function MarketingHomePage() {
  return (
    <main>
      <HeroSection />
      <VoiceAIDemo />
      <FeaturesShowcase />
      <PricingCards />
      <TestimonialsSection />
      <NewsletterSignup />
    </main>
  );
}
