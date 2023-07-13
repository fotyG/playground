"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import Restricted from "./components/Restricted";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const BlogArticlePage = ({ params }: { params: { slug: string } }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { slug } = params;
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
    <div className="container prose-lg">
      <DynamicMdx />
    </div>
  );
};
export default BlogArticlePage;
