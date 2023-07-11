"use client";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductCardContainerProps {
  products: Product[];
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({
  products,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isLg = useMediaQuery({ minWidth: 1024 });

  const onScroll = (direction: string) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container my-10 relative">
      {isLg && (
        <button
          onClick={() => {
            onScroll("left");
          }}
          className="absolute -left-7 top-1/2 -translate-y-1/2"
        >
          <ArrowLeftCircle
            className="opacity-80 hover:opacity-100"
            size={40}
          />
        </button>
      )}
      <div
        ref={carouselRef}
        className="grid md:grid-flow-col gap-5 md:gap-10 md:overflow-x-scroll snap-x scroll-smooth rounded-md"
      >
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            url={product.url}
            images={product.images}
          />
        ))}
      </div>
      {isLg && (
        <button
          onClick={() => {
            onScroll("right");
          }}
          className="absolute -right-7 top-1/2 -translate-y-1/2"
        >
          <ArrowRightCircle
            className="opacity-80 hover:opacity-100"
            size={40}
          />
        </button>
      )}
    </div>
  );
};
export default ProductCardContainer;
