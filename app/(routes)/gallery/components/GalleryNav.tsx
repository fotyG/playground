"use client";

import { motion } from "framer-motion";

import { GalleryNavProps } from "@/types";
import { useVisited } from "../hooks/useVisited";

const GalleryNav: React.FC<GalleryNavProps> = ({ projectCount }) => {
  const visited = useVisited();

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
      className="scroll-smooth sticky top-16 lg:top-0 z-30 bg-base-100 bg-opacity-80 backdrop-blur-[0.2rem] py-3 flex items-center gap-x-2 shadow-sm shadow-secondary transition-colors duration-500"
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
