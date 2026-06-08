import { 
  Hero, 
  StatsCounter, 
  ServicesGrid, 
  WhyChooseUs, 
  Testimonials, 
  CTABanner, 
  FAQAccordion, 
  FeaturedProducts,
  TrustStrip
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatsCounter />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CTABanner />
      <FAQAccordion />
    </>
  );
}
