import { motion } from "framer-motion";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  onQuickView: () => void;
}

export default function ProductCard({
  name,
  price,
  image,
  description,
  onQuickView,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView();
              }}
              data-testid="button-quick-view"
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="bg-primary/90 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Add to cart:", name);
              }}
              data-testid="button-add-to-cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-serif text-xl font-semibold mb-2" data-testid="text-product-name">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1" data-testid="text-product-description">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary" data-testid="text-product-price">
              ${price.toFixed(2)}
            </span>
            <Button
              variant="outline"
              size="sm"
              data-testid="button-view-details"
              onClick={onQuickView}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
