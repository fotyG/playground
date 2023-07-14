"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Restricted from "./components/Restricted";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const BlogArticlePage = ({ params }: { params: { slug: string } }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { slug } = params;
  const router = useRouter();
  const DynamicMdx = dynamic(() => import(`./mdx-content/${slug}.mdx`));

  const {
    mg,
    ecommerceStore,
    ecommerceCMS,
    utilityMeters,
    rentingApp,
    musicApp,
  } = useUnlockStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (
    (slug === "memory-game" && !mg) ||
    (slug === "ecommerce-cms" && !ecommerceCMS) ||
    (slug === "ecommerce-store" && !ecommerceStore) ||
    (slug === "utility-meter-reading-app" && !utilityMeters) ||
    (slug === "renting-app" && !rentingApp) ||
    (slug === "music-app" && !musicApp)
  )
    return <Restricted />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      className="container my-5 md:my-14 prose md:prose-lg xl:prose-xl 2xl:prose-2xl prose-img:max-w-full prose-img:h-auto prose-img:mx-auto prose-img:rounded-md hover:prose-a:text-secondary"
    >
      <button
        className="mb-5"
        onClick={() => router.push("/blog")}
      >
        ⬅ Go Back
      </button>
      <DynamicMdx />
    </motion.div>
  );
};
export default BlogArticlePage;
