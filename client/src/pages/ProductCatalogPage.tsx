import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import chefKnifeImage from "@assets/generated_images/Premium_chef_knife_product_ed106f82.png";
import cutlerySetImage from "@assets/generated_images/Luxury_cutlery_set_display_4a79cdf8.png";
import knifeCollectionImage from "@assets/generated_images/Knife_collection_set_showcase_f91c522d.png";
import kitchenwareImage from "@assets/generated_images/Premium_kitchenware_collection_display_19ec040d.png";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  fullDescription?: string;
  features?: string[];
  material?: string;
  origin?: string;
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Damascus Chef Knife",
    price: 299.99,
    image: chefKnifeImage,
    description: "Handcrafted Damascus steel blade with ergonomic wooden handle",
    category: "knives",
    fullDescription: "This exquisite Damascus chef knife represents the pinnacle of Wazirabad craftsmanship.",
    features: ["67-layer Damascus steel", "Ergonomic pakkawood handle", "8-inch blade", "Hand-sharpened", "Lifetime warranty"],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "2",
    name: "Luxury Cutlery Set",
    price: 499.99,
    image: cutlerySetImage,
    description: "24-piece premium cutlery set with elegant presentation box",
    category: "cutlery",
    fullDescription: "A complete dining experience with our premium 24-piece cutlery set.",
    features: ["24 pieces", "Premium stainless steel", "Wooden presentation box", "Dishwasher safe", "Gold finish"],
    material: "Stainless Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "3",
    name: "Professional Knife Set",
    price: 799.99,
    image: knifeCollectionImage,
    description: "5-piece Damascus steel knife collection for culinary professionals",
    category: "sets",
    fullDescription: "This comprehensive knife set includes everything a professional chef needs.",
    features: ["5 essential knives", "Damascus steel blades", "Wooden handles", "Magnetic block", "Professional grade"],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "4",
    name: "Premium Kitchenware",
    price: 599.99,
    image: kitchenwareImage,
    description: "Complete cookware set with copper-bottom construction",
    category: "kitchenware",
    fullDescription: "Elevate your cooking with this premium kitchenware collection.",
    features: ["Multiple pots and pans", "Copper-bottom", "Stainless steel", "Heat-resistant handles", "Oven safe"],
    material: "Stainless Steel & Copper",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "5",
    name: "Santoku Knife",
    price: 249.99,
    image: chefKnifeImage,
    description: "Japanese-style Damascus steel knife for precision cutting",
    category: "knives",
    fullDescription: "Perfect for slicing, dicing, and mincing with precision.",
    features: ["Damascus steel", "7-inch blade", "Lightweight design", "Granton edge", "Ergonomic grip"],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  },
  {
    id: "6",
    name: "Premium Dinner Set",
    price: 699.99,
    image: cutlerySetImage,
    description: "48-piece deluxe cutlery set for formal occasions",
    category: "sets",
    fullDescription: "The ultimate dining collection for sophisticated entertaining.",
    features: ["48 pieces", "Premium quality", "Luxury box", "Service for 8", "Gold accents"],
    material: "Stainless Steel",
    origin: "Wazirabad, Pakistan"
  },
];

interface ProductCatalogPageProps {
  category: string;
  title: string;
  description: string;
}

export default function ProductCatalogPage({ category, title, description }: ProductCatalogPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  let filteredProducts = allProducts.filter(p => p.category === category);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (priceFilter !== "all") {
    filteredProducts = filteredProducts.filter(p => {
      if (priceFilter === "under-300") return p.price < 300;
      if (priceFilter === "300-500") return p.price >= 300 && p.price < 500;
      if (priceFilter === "over-500") return p.price >= 500;
      return true;
    });
  }

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

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
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-product-search"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48" data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full md:w-48" data-testid="select-price-filter">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-300">Under $300</SelectItem>
                <SelectItem value="300-500">$300 - $500</SelectItem>
                <SelectItem value="over-500">Over $500</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No products found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard
                    {...product}
                    onQuickView={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
