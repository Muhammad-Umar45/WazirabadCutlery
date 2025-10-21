import { useState } from "react";
import ProductModal from "../ProductModal";
import { Button } from "@/components/ui/button";
import chefKnifeImage from "@assets/generated_images/Premium_chef_knife_product_ed106f82.png";

export default function ProductModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const mockProduct = {
    id: "1",
    name: "Damascus Chef Knife",
    price: 299.99,
    image: chefKnifeImage,
    description: "Handcrafted Damascus steel blade with ergonomic wooden handle",
    fullDescription: "This exquisite Damascus chef knife represents the pinnacle of Wazirabad craftsmanship. Each blade is meticulously forged using traditional techniques passed down through generations, featuring distinctive wave patterns that are both beautiful and functional.",
    features: [
      "67-layer Damascus steel construction",
      "Ergonomic pakkawood handle with brass rivets",
      "8-inch blade length for versatile cutting",
      "Hand-sharpened to razor edge",
      "Lifetime warranty on craftsmanship"
    ],
    material: "Damascus Steel",
    origin: "Wazirabad, Pakistan"
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Product Modal</Button>
      <ProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={mockProduct}
      />
    </div>
  );
}
