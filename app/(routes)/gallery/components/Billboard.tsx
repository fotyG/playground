"use client";

import { motion } from "framer-motion";

import { BillboardProps } from "@/types";

const Billboard: React.FC<BillboardProps> = ({ billboard }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="overflow-hidden"
    >
      <div
        className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
      >
        <div className="absolute bg-primary/30 w-full h-full"></div>
        <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
          <div className="bg-base-300/60 px-5 py-4 rounded-xl font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-[45]">
            <p className=" text-center text-transparent bg-gradient-to-r bg-clip-text from-base-content to-primary">
              {billboard?.label}{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Billboard;
