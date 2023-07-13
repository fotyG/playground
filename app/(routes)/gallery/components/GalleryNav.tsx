"use client";

import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
      className="scroll-smooth sticky max-lg:top-16 z-30 bg-base-100 py-3 flex items-center gap-x-2 shadow-sm shadow-secondary"
    >
      <h1 className="text-2xl text-transparent bg-gradient-to-r bg-clip-text from-primary to-base-content ml-8 font-extrabold">
        Projects Visited:
      </h1>
      <p className="text-xl">
        {visited} out of {projectCount} {visited === projectCount && "🎉"}
      </p>
    </motion.div>
  );
};
export default GalleryNav;
