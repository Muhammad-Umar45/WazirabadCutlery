import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <TestimonialsCarousel />
      <Newsletter />
    </div>
  );
}
