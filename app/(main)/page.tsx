"use client";

import Hero from "@/app/(main)/components/Hero";
import Facts from "@/app/(main)/components/Facts";
import JumpIn from "@/app/(main)/components/JumpIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <Hero />
      <Facts />
      <JumpIn />
    </motion.main>
  );
}
