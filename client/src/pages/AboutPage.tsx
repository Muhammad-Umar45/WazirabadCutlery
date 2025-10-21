import { motion } from "framer-motion";
import { Hammer, Award, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import heritageImage from "@assets/generated_images/Historical_workshop_heritage_photo_e08c81ff.png";
import craftsmanshipImage from "@assets/generated_images/Craftsmanship_detail_close-up_ccb195cf.png";

const timelineEvents = [
  {
    year: "1960s",
    title: "The Beginning",
    description: "Wazirabad establishes itself as Pakistan's premier cutlery manufacturing hub with traditional forging techniques.",
    image: heritageImage,
  },
  {
    year: "1980s",
    title: "Modernization",
    description: "Introduction of Damascus steel techniques while preserving traditional craftsmanship methods.",
    image: craftsmanshipImage,
  },
  {
    year: "2000s",
    title: "Global Recognition",
    description: "Wazirabad cutlery gains international acclaim, exporting to premium markets worldwide.",
    image: heritageImage,
  },
  {
    year: "2024",
    title: "Digital Excellence",
    description: "Combining centuries-old craftsmanship with modern e-commerce to reach global customers.",
    image: craftsmanshipImage,
  },
];

const features = [
  {
    icon: Hammer,
    title: "Traditional Craftsmanship",
    description: "Every piece is handcrafted using techniques passed down through generations of master artisans.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest materials, including Damascus steel and premium hardwoods.",
  },
  {
    icon: Users,
    title: "Family Heritage",
    description: "Multi-generational families of craftsmen dedicated to perfecting their art.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Exporting excellence from Wazirabad to kitchens and restaurants worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our Heritage
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              For generations, Wazirabad has been synonymous with exceptional cutlery and kitchenware. 
              Our craftsmen combine centuries-old techniques with modern precision to create pieces 
              that are both beautiful and functional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
          >
            What Makes Us Different
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-12 flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center md:text-right" style={{ 
                  textAlign: index % 2 === 0 ? "right" : "left" 
                }}>
                  <span className="inline-block text-3xl font-bold text-primary mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full bg-primary flex-shrink-0 flex items-center justify-center border-4 border-background z-10">
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>

                <div className="flex-1">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg shadow-md w-full max-w-md mx-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Join Our Legacy
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the perfect balance of tradition and innovation. 
              Each piece tells a story of dedication, skill, and passion.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
