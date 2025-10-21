import { X, ShoppingCart, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    fullDescription?: string;
    features?: string[];
    material?: string;
    origin?: string;
  };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-product-modal"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" data-testid="badge-rating">
                <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                4.9
              </Badge>
              <span className="text-sm text-muted-foreground">127 reviews</span>
            </div>

            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-modal-price">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-base leading-relaxed mb-6" data-testid="text-modal-description">
              {product.fullDescription || product.description}
            </p>

            {product.features && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-md">
              {product.material && (
                <div>
                  <p className="text-sm text-muted-foreground">Material</p>
                  <p className="font-semibold">{product.material}</p>
                </div>
              )}
              {product.origin && (
                <div>
                  <p className="text-sm text-muted-foreground">Origin</p>
                  <p className="font-semibold">{product.origin}</p>
                </div>
              )}
            </div>

            <div className="mt-auto flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => console.log("Added to cart:", product.name)}
                data-testid="button-modal-add-to-cart"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onClose}
                data-testid="button-modal-close"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
