"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BadgeCheck, ExternalLink, Github } from "lucide-react";

import { ProductCardProps } from "@/types";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const ProductCard: React.FC<ProductCardProps> = ({ name, url, images }) => {
  const [unlockState, setUnlockState] = useState(false);

  const aiSaas = useUnlockStore((state) => state.aiSaas);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  const unlockAISaas = useUnlockStore((state) => state.unlockAISaas);
  const unlockMusicApp = useUnlockStore((state) => state.unlockMusicApp);
  const unlockRentingApp = useUnlockStore((state) => state.unlockRentingApp);
  const unlockEcommerceCMS = useUnlockStore(
    (state) => state.unlockEcommerceCMS
  );
  const unlockUtilityMeters = useUnlockStore(
    (state) => state.unlockUtilityMeters
  );
  const unlockEcommerceStore = useUnlockStore(
    (state) => state.unlockEcommerceStore
  );

  useEffect(() => {
    if (name === "Utility Meter Reading App") {
      setUnlockState(utilityMeters);
    } else if (name === "Ecommerce Store") {
      setUnlockState(ecommerceStore);
    } else if (name === "Ecommerce CMS") {
      setUnlockState(ecommerceCMS);
    } else if (name === "Renting App") {
      setUnlockState(rentingApp);
    } else if (name === "Music App") {
      setUnlockState(musicApp);
    } else if (name === "AI - SaaS") {
      setUnlockState(aiSaas);
    }
  }, [
    name,
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  ]);

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
    } else if (name === "AI - SaaS") {
      unlockAISaas();
    }
  }, [
    name,
    unlockAISaas,
    unlockMusicApp,
    unlockRentingApp,
    unlockEcommerceCMS,
    unlockUtilityMeters,
    unlockEcommerceStore,
  ]);

  return (
    <div className="md:min-w-[320px] lg:min-w-[400px] xl:min-w-[340px] 2xl:min-w-[310px] snap-start md:mb-10 bg-base-200/50 border border-secondary/30 group rounded-xl p-5 space-y-5 shadow-md">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          priority
          alt={name}
          src={`${images[0].url}`}
          className="object-cover object-center rounded-md shadow shadow-secondary"
        />
      </div>
      <div>
        <div className="font-semibold text-lg flex gap-1 items-center">
          <p>{name}</p>
          {name === "Utility Meter Reading App" && <Github size={20} />}
        </div>
        <div className="flex justify-between">
          <Link
            onAuxClick={() => action()}
            onClick={() => action()}
            target="_blank"
            href={
              url ? url : "https://github.com/fotyG/tipo-meter-readings-app"
            }
          >
            <p className="text-sm md:opacity-0 md:group-hover:opacity-100 transition inline-flex gap-x-1 hover:text-secondary">
              Visit <ExternalLink size={20} />
            </p>
          </Link>

          {unlockState && <BadgeCheck />}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
