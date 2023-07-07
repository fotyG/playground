import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";

interface ProductImage {
  url: string;
}

interface ProductCardProps {
  name: string;
  price: number;
  images: ProductImage[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, images }) => {
  return (
    <div className="col-span-4 sm:max-xl:last:odd:col-span-4 sm:col-span-2 xl:col-span-1 mb-5 bg-base-200/50 border border-secondary/30 group cursor-pointer rounded-xl p-5 space-y-5 shadow-md">
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={`${images[0].url}`}
          fill
          className="aspect-square object-cover object-center rounded-md shadow shadow-secondary"
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
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm">{price} creds</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        {/* <Currency value={data?.price} /> */}
      </div>
    </div>
  );
};
export default ProductCard;
