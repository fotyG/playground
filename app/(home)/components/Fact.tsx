"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface FactProps {
  title: string;
  description: string;
  image: string;
}

const Fact: React.FC<FactProps> = ({ title, description, image }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="flex flex-col gap-5 my-5 sm:flex-row sm:odd:flex-row-reverse"
    >
      <div className="my-2 flex-1">
        <h2 className="font-bold">{title}</h2>
        <p className="text-justify leading-snug">{description}</p>
      </div>
      <div className="w-full flex-1 flex items-center justify-center aspect-square relative">
        <Image
          src={`/images/${image}`}
          fill
          alt=""
          className="object-cover justify-self-center rounded-md shadow-md shadow-neutral"
        />
      </div>
    </motion.section>
  );
};
export default Fact;
