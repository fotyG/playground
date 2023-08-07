"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  const isLg = useMediaQuery({ minWidth: 1024 });
  const carouselRef = useRef<HTMLDivElement>(null);

  const onScroll = (direction: string) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }}
      className="flex items-center justify-center gap-1 container my-10"
    >
      {isLg && (
        <button
          onClick={() => {
            onScroll("left");
          }}
        >
          <ArrowLeftCircle
            size={40}
            className="opacity-80 hover:opacity-100"
          />
        </button>
      )}
      <div
        ref={carouselRef}
        className="flex-1 grid md:grid-flow-col mx-5 gap-10 md:overflow-x-scroll snap-x scroll-smooth rounded-md"
      >
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            url={product.url}
            name={product.name}
            images={product.images}
          />
        ))}
      </div>
      {isLg && (
        <button
          onClick={() => {
            onScroll("right");
          }}
        >
          <ArrowRightCircle
            size={40}
            className="opacity-80 hover:opacity-100"
          />
        </button>
      )}
    </motion.div>
  );
};
export default ProductCardContainer;
