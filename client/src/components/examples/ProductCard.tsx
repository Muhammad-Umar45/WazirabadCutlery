import ProductCard from "../ProductCard";
import chefKnifeImage from "@assets/generated_images/Premium_chef_knife_product_ed106f82.png";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        name="Damascus Chef Knife"
        price={299.99}
        image={chefKnifeImage}
        description="Handcrafted Damascus steel blade with ergonomic wooden handle"
        onQuickView={() => console.log("Quick view clicked")}
      />
    </div>
  );
}
