import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-primary group cursor-pointer rounded-xl p-3 space-y-4">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={"/images/1.webp"}
          fill
          className="aspect-square object-cover object-center rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600"
                />
              }
            />
            <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">text1</p>
        <p className="text-sm text-gray-500">text2</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        {/* <Currency value={data?.price} /> */}
      </div>
    </div>
  );
};
export default ProductCard;
