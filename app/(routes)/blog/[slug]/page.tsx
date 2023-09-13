"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import BlurDots from "@/components/ui/blur-dots";
import Restricted from "./components/Restricted";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const BlogArticlePage = ({ params }: { params: { slug: string } }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { slug } = params;
  const router = useRouter();
  const DynamicMdx = dynamic(() => import(`./mdx-content/${slug}.mdx`));

  const mg = useUnlockStore((state) => state.mg);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (
    (slug === "memory-game" && !mg) ||
    (slug === "music-app" && !musicApp) ||
    (slug === "renting-app" && !rentingApp) ||
    (slug === "ecommerce-cms" && !ecommerceCMS) ||
    (slug === "ecommerce-store" && !ecommerceStore) ||
    (slug === "utility-meter-reading-app" && !utilityMeters)
  )
    return <Restricted />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
      className="container min-h-screen my-5 md:my-14 prose md:prose-lg xl:prose-xl 2xl:prose-2xl prose-img:max-w-full prose-img:h-auto prose-img:mx-auto prose-img:rounded-md hover:prose-a:text-secondary relative"
    >
      <button
        className="mb-5"
        onClick={() => router.push("/blog")}
      >
        ⬅ Go Back
      </button>
      <BlurDots className="top-[10%] bg-opacity-20" />
      <BlurDots className="top-[70%] bg-opacity-20" />
      <DynamicMdx />
    </motion.div>
  );
};
export default BlogArticlePage;
