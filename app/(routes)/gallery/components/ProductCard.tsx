"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { ProductCardProps } from "@/types";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const ProductCard: React.FC<ProductCardProps> = ({ name, url, images }) => {
  const unlockStore = useUnlockStore();
  const {
    unlockUtilityMeters,
    unlockEcommerceStore,
    unlockEcommerceCMS,
    unlockRentingApp,
    unlockMusicApp,
  } = unlockStore;

  const action = useCallback(() => {
    if (name === "Utility Meter Reading App") {
      unlockUtilityMeters();
    } else if (name === "Ecommerce Store") {
      unlockEcommerceStore();
    } else if (name === "Ecommerce CMS") {
      unlockEcommerceCMS();
    } else if (name === "Renting App") {
      unlockRentingApp();
    } else if (name === "Music App") {
      unlockMusicApp();
    }
  }, [
    name,
    unlockUtilityMeters,
    unlockEcommerceStore,
    unlockEcommerceCMS,
    unlockRentingApp,
    unlockMusicApp,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="col-span-4 sm:max-xl:last:odd:col-span-4 sm:col-span-2 xl:col-span-1 mb-5 bg-base-200/50 border border-secondary/30 group cursor-pointer rounded-xl p-5 space-y-5 shadow-md"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={`${images[0].url}`}
          fill
          className="aspect-square object-cover object-center rounded-md shadow shadow-secondary"
        />
      </div>
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <Link
          onAuxClick={() => action()}
          onClick={() => action()}
          target="_blank"
          href={url ? url : "/gallery"}
        >
          <p className="text-sm md:opacity-0 md:group-hover:opacity-100 transition inline-flex gap-x-1 hover:text-secondary">
            Visit <ExternalLink size={20} />
          </p>
        </Link>
      </div>
    </motion.div>
  );
};
export default ProductCard;
