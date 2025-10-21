import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import chefKnifeImage from "@assets/generated_images/Premium_chef_knife_product_ed106f82.png";
import cutlerySetImage from "@assets/generated_images/Luxury_cutlery_set_display_4a79cdf8.png";
import knifeCollectionImage from "@assets/generated_images/Knife_collection_set_showcase_f91c522d.png";
import kitchenwareImage from "@assets/generated_images/Premium_kitchenware_collection_display_19ec040d.png";

const products = [
  {
    id: "1",
    name: "Damascus Chef Knife",
    price: 299.99,
    image: chefKnifeImage,
    description: "Handcrafted Damascus steel blade with ergonomic wooden handle",
    fullDescription: "This exquisite Damascus chef knife represents the pinnacle of Wazirabad craftsmanship. Each blade is meticulously forged using traditional techniques passed down through generations.",
    features: [
      "67-layer Damascus steel construction",
      "Ergonomic pakkawood handle",
      "8-inch blade length",
      "Hand-sharpened to razor edge",
      "Lifetime warranty"
    ],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "2",
    name: "Luxury Cutlery Set",
    price: 499.99,
    image: cutlerySetImage,
    description: "24-piece premium cutlery set with elegant presentation box",
    fullDescription: "A complete dining experience with our premium 24-piece cutlery set, crafted from the finest stainless steel with gold accents.",
    features: [
      "24 pieces including knives, forks, and spoons",
      "Premium stainless steel with gold finish",
      "Elegant wooden presentation box",
      "Dishwasher safe",
      "Perfect for formal dining"
    ],
    material: "Stainless Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "3",
    name: "Professional Knife Set",
    price: 799.99,
    image: knifeCollectionImage,
    description: "5-piece Damascus steel knife collection for culinary professionals",
    fullDescription: "This comprehensive knife set includes everything a professional chef needs, from paring to carving, all crafted with Damascus steel.",
    features: [
      "5 essential knives for all tasks",
      "Damascus steel blades",
      "Premium wooden handles",
      "Magnetic display block included",
      "Professional grade quality"
    ],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "4",
    name: "Premium Kitchenware",
    price: 599.99,
    image: kitchenwareImage,
    description: "Complete cookware set with copper-bottom construction",
    fullDescription: "Elevate your cooking with this premium kitchenware collection, featuring superior heat distribution and elegant design.",
    features: [
      "Multiple pots and pans",
      "Copper-bottom construction",
      "Stainless steel body",
      "Heat-resistant handles",
      "Oven safe up to 500°F"
    ],
    material: "Stainless Steel & Copper",
    origin: "Wazirabad, Pakistan"
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="featured-products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium knives and kitchenware,
            each piece a testament to centuries of craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                {...product}
                onQuickView={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </section>
  );
}
