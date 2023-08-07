"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

const AnimatedText = ({
  text,
  children,
  className = "",
}: AnimatedTextProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={cn(
          "inline-block w-full font-bold capitalize text-5xl sm:text-8xl",
          className
        )}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            className="inline-block"
            key={word + "-" + index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
        {children}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
