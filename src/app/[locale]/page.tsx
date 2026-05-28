import { 
  Hero, 
  StatsCounter, 
  ServicesGrid, 
  WhyChooseUs, 
  Testimonials, 
  CTABanner, 
  FAQAccordion, 
  BrandsSlider,
  FeaturedProducts
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CTABanner />
      <FAQAccordion />
      <BrandsSlider />
    </>
  );
}
