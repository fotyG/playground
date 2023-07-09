"use client";

import { useUnlockStore } from "@/hooks/useUnlockStore";

import Image from "next/image";
import { motion } from "framer-motion";

import BlogCard from "./components/BlogCard";
import { Separator } from "@/components/ui/separator";
import musicAppContent from "./content/music-app-content";
import memoryGameContent from "./content/memory-game-content";
import rentingAppContent from "./content/renting-app-content";
import futureProjects from "./content/future-projects-content";
import ecommerceCMSContent from "./content/ecommerce-cms-content";
import utilityMeterReadingAppContent from "./content/utility-meter-reading-app-content";

const BlogPage = () => {
  const mg = useUnlockStore((state) => state.mg);

  return (
    <div className="container mb-10 flex flex-col justify-center">
      <Separator
        className="mb-10 bg-primary/50"
        decorative
      />
      <div className="flex flex-col-reverse items-center justify-center sm:flex-row h-80  rounded-md">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          className="p-6 w-full sm:p-8 sm:w-2/3 max-w-lg"
        >
          <h1 className="text-lg font-bold sm:text-4xl mb-2">
            Welcome to the Secret Blog!
          </h1>
          <p className="text-sm leading-tight sm:text-xl text-justify">
            In this section you will find blog articles for my projects. Each
            card represents a different project with a brief summary of the
            technology and some cool features used to develop it. <br />
            If you are interested to know more about the project and want to see
            a live demo - click on the card and enjoy!
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
        className="my-10 bg-primary/50"
        decorative
      />

      <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:gap-y-10 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <BlogCard
          key={memoryGameContent.cardTitle}
          state={mg}
          content={memoryGameContent}
        />
        <BlogCard
          key={utilityMeterReadingAppContent.cardTitle}
          state={mg}
          content={utilityMeterReadingAppContent}
        />
        <BlogCard
          key={ecommerceCMSContent.cardTitle}
          state={mg}
          content={ecommerceCMSContent}
        />
        <BlogCard
          key={rentingAppContent.cardTitle}
          state={mg}
          content={rentingAppContent}
        />
        <BlogCard
          key={musicAppContent.cardTitle}
          state={mg}
          content={musicAppContent}
        />
        <BlogCard
          key={futureProjects.cardTitle}
          state={false}
          content={futureProjects}
        />
      </div>
    </div>
  );
};
export default BlogPage;
