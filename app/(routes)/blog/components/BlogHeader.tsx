"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const BlogHeader = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Separator
        className={twMerge(
          "mb-10 sm:mb-20 bg-primary/50 scale-0 transition-transform duration-500",
          isMounted ? "scale-100" : ""
        )}
        decorative
      />

      <div className="flex flex-col-reverse items-center justify-center sm:flex-row h-80  rounded-md">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className="p-6 w-full sm:p-8 sm:w-2/3 max-w-lg"
        >
          <h1 className="text-lg font-bold sm:text-4xl mb-2">
            You've found the Secret Blog!
          </h1>
          <p className="text-sm leading-tight sm:text-xl text-justify">
            In this section you can explore blog articles for my projects. Each
            card represents a different project with a brief summary of the
            technology and some cool features used to develop it. <br />
            If you are interested to know more about the project be sure to
            unlock the card by visiting the link in the{" "}
            <Link
              className="border px-2 rounded-full font-bold hover:text-secondary hover:border-secondary transition-colors shadow-md"
              href={"/gallery"}
            >
              Gallery
            </Link>{" "}
            section first!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className="relative w-1/3 h-full"
        >
          <Image
            fill
            className="object-contain overflow-visible"
            alt="naruto"
            src={"/images/naruto.png"}
          />
        </motion.div>
      </div>

      <Separator
        className={twMerge(
          "my-10 sm:my-20 bg-primary/50 scale-0 transition-transform duration-500",
          isMounted ? "scale-100" : ""
        )}
        decorative
      />
    </>
  );
};
export default BlogHeader;
