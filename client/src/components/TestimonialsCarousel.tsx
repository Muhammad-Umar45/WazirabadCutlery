import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import chef1Image from "@assets/generated_images/Chef_testimonial_portrait_one_f8a78080.png";
import customer2Image from "@assets/generated_images/Customer_testimonial_portrait_two_087f94f0.png";
import chef3Image from "@assets/generated_images/Chef_testimonial_portrait_three_ea4eba01.png";

const testimonials = [
  {
    id: 1,
    name: "Chef Marcus Chen",
    role: "Executive Chef, The Golden Plate",
    image: chef1Image,
    rating: 5,
    text: "These Damascus knives have transformed my kitchen. The precision and balance are unmatched. After 20 years in professional kitchens, I can confidently say these are the finest blades I've worked with."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Home Chef & Food Blogger",
    image: customer2Image,
    rating: 5,
    text: "I purchased the luxury cutlery set for my dinner parties and guests always ask about them. The craftsmanship is evident in every piece. Absolutely worth the investment for anyone who values quality."
  },
  {
    id: 3,
    name: "Chef Antonio Rivera",
    role: "Culinary Director, Riverside Bistro",
    image: chef3Image,
    rating: 5,
    text: "The professional knife set is exceptional. Each blade holds its edge beautifully and the balance is perfect. My entire team now uses Wazirabad knives exclusively."
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by professional chefs and cooking enthusiasts worldwide
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarImage src={testimonials[currentIndex].image} />
                      <AvatarFallback>
                        {testimonials[currentIndex].name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-lg md:text-xl leading-relaxed mb-6" data-testid="text-testimonial">
                      {testimonials[currentIndex].text}
                    </p>
                    
                    <div className="flex items-center gap-1 mb-3 justify-center md:justify-start">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <div>
                      <p className="font-semibold text-lg" data-testid="text-testimonial-name">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground" data-testid="text-testimonial-role">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              data-testid="button-prev-testimonial"
              className="hover-elevate active-elevate-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              data-testid="button-next-testimonial"
              className="hover-elevate active-elevate-2"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
