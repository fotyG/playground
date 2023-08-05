"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import purpleHair from "@/public/images/pngs/purplehair.png";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="container"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:p-8 sm:w-2/3 xl:w-1/2">
          <h1 className="text-lg font-bold sm:text-4xl mt-10 sm:mt-0 mb-2">
            Training projects
          </h1>
          <p className="leading-tight sm:text-xl text-justify">
            This gallery will present you with an opportunity to view the
            projects that were the most crucial ones for my progress as a
            developer.
            <br />
            Utility Meter App is the first full-stack application that I
            developed and deployed for a client. It is being used internally for
            the company's needs so until I make a demo with dummy data - I can
            only share some pictures and the code of the app. <br /> Visiting a
            project link will unlock a detailed blog post about it in the{" "}
            <Link
              className="border px-2 rounded-full font-bold hover:text-secondary hover:border-secondary transition-colors shadow-md"
              href={"/blog"}
            >
              <button>Secret Blog</button>
            </Link>{" "}
            section!
          </p>
        </div>
        <div className="mt-5 relative p-6 aspect-square sm:w-1/3 xl:w-1/2 w-full">
          <Image
            fill
            className="object-contain"
            alt="bleach"
            src={purpleHair}
          />
        </div>
      </div>

      <Separator
        className={"sm:mt-0 bg-secondary/50"}
        decorative
      />
    </motion.div>
  );
};
export default ProjectHeader;
