import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  return (
    <div className="mr-8 relative">
      <ShoppingCart />
      <div className="absolute bg-primary font-bold text-base-100 rounded-full  w-5 h-5 flex items-center justify-center -top-3 -right-3 text-xs">
        9
      </div>
    </div>
  );
};
export default CartIcon;
