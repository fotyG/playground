"use client";

import { motion } from "framer-motion";

import Hero from "@/app/(home)/components/Hero";
import JumpIn from "@/app/(home)/components/JumpIn";
import FactsContainer from "@/app/(home)/components/FactsContainer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Hero />
      <FactsContainer />
      <JumpIn />
    </motion.main>
  );
}
