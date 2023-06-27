"use client";

import { useUnlockStore } from "@/hooks/useUnlockStore";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const BlogCard = () => {
  const mg = useUnlockStore((state) => state.mg);
  const isLg = useMediaQuery({ minWidth: 1024 });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
      whileHover={isLg ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
      className="
          card 
          lg:w-72 
          bg-base-100 
          shadow-sm 
          shadow-neutral
          transition-shadow
          hover:z-50 
          hover:shadow-xl 
          hover:shadow-neutral
          hover:cursor-pointer
        "
    >
      <figure className="bg-primary px-10 pt-10">
        <img
          src="/images/1.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Memory Game
          <div className="badge badge-secondary p-3">{mg ? "✔" : "🔒"}</div>
        </h2>
        <p>Made using: {mg ? "NextJS13" : "???"}</p>
        <p>Features: {mg ? "Anti-cheat, SSR" : "???"}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Game</div>
        </div>
      </div>
    </motion.div>
  );
};
export default BlogCard;
