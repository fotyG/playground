"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import naruto from "@/public/images/naruto.png";
import { Separator } from "@/components/ui/separator";
import BlurDots from "@/components/ui/blur-dots";

const BlogHeader = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
        className="relative"
      >
        <Separator
          className="mb-5 sm:mb-20 bg-primary/50"
          decorative
        />
      </motion.div>

      <div className="flex flex-col-reverse items-center justify-center sm:flex-row h-96">
        <BlurDots className="bg-opacity-30" />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className="p-6 w-full sm:p-8 sm:w-2/3 max-w-lg"
        >
          <h1 className="text-lg font-bold sm:text-5xl mb-2">
            You've found the Secret Blog!
          </h1>
          <p className="leading-tight sm:text-2xl text-justify">
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
          className="relative w-1/3 h-full min-h-16"
        >
          <Image
            fill
            className="object-contain"
            alt="naruto"
            src={naruto}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
      >
        <Separator
          className="mt-5 mb-10 sm:my-20 bg-primary/50"
          decorative
        />
      </motion.div>
    </>
  );
};
export default BlogHeader;
