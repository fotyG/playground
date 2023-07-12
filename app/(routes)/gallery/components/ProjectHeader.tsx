"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      className="container mt-16"
    >
      <div className="flex flex-col-reverse items-center justify-center sm:flex-row h-96  rounded-md">
        <div className="p-6 w-full sm:p-8 sm:w-2/3 max-w-lg">
          <h1 className="text-lg font-bold sm:text-4xl mb-2">
            Training projects
          </h1>
          <p className="text-sm leading-tight sm:text-xl text-justify">
            This gallery will present you with an opportunity to view the
            projects that were the most crucial ones for my progress as a
            developer.
            <br />
            Utility Meter App is the first full-stack application that I
            developed and deployed for a client. It is being used internally for
            the company's needs so until I make a demo with dummy data - I can
            only share some pictures and the code of the app. <br /> Visiting
            the link will unlock a detailed blog post about the project in the{" "}
            <Link
              className="border px-2 rounded-full font-bold hover:text-secondary hover:border-secondary transition-colors shadow-md"
              href={"/blog"}
            >
              <button>Secret Blog</button>
            </Link>{" "}
            section!
          </p>
        </div>
        <div className="relative w-1/3 h-full">
          <Image
            fill
            className="object-contain overflow-visible"
            alt="killua"
            src={"/images/killua.png"}
          />
        </div>
      </div>

      <Separator
        className={"mt-10 bg-secondary/50"}
        decorative
      />
    </motion.div>
  );
};
export default ProjectHeader;
