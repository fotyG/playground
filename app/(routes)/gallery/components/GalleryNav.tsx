"use client";

import { useEffect, useState } from "react";

import { GalleryNavProps } from "@/types";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const GalleryNav: React.FC<GalleryNavProps> = ({ projectCount }) => {
  const [visited, setVisited] = useState(0);
  const unlockStore = useUnlockStore();
  const { ecommerceStore, ecommerceCMS, utilityMeters, rentingApp, musicApp } =
    unlockStore;

  useEffect(() => {
    let localArray = [
      ecommerceStore,
      ecommerceCMS,
      utilityMeters,
      rentingApp,
      musicApp,
    ];
    setVisited(localArray.filter((item) => item === true).length);
  }, [ecommerceStore, ecommerceCMS, utilityMeters, rentingApp, musicApp]);

  return (
    <div className="scroll-smooth sticky top-0 z-30 bg-base-100 py-3 flex items-center gap-x-2 shadow-sm shadow-secondary">
      <h1 className="text-2xl text-transparent bg-gradient-to-r bg-clip-text from-indigo-300 to-pink-600 ml-8 font-extrabold">
        Projects Visited:
      </h1>
      <p className="text-xl">
        {visited} out of {projectCount} {visited === projectCount && "🎉"}
      </p>
    </div>
  );
};
export default GalleryNav;
