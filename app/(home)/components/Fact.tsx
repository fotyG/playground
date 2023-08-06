"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface FactProps {
  title: string;
  index: number;
  description: string;
  image: StaticImageData;
}

const Fact: React.FC<FactProps> = ({ title, description, image, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.95", "0.65 1"], // Animation starts: [first value: 0 or start of target:ref, second value: bottom of screen] Animation end: [0.65 ends when 65% of ref is visible judging by the 1(end) of bottom of the screen]
  });
  const translateXProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 ? -500 : 500, 0]
  );
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      style={{
        x: translateXProgress,
        opacity: opacityProgress,
      }}
      className="flex flex-col gap-5 my-5 sm:flex-row sm:odd:flex-row-reverse"
      ref={ref}
    >
      <div className="my-2 flex-1 overflow-hidden">
        <h2 className="font-bold">{title}</h2>
        <p className="text-justify leading-snug">{description}</p>
      </div>
      <div className="w-full flex-1 flex items-center justify-center aspect-square relative">
        <Image
          src={image}
          alt={title}
          className="aspect-square object-cover rounded-md shadow-md shadow-neutral"
        />
      </div>
    </motion.section>
  );
};
export default Fact;
