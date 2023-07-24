"use client";

import { useUnlockStore } from "@/hooks/useUnlockStore";

import BlogCard from "./BlogCard";
import aiSaasContent from "../content/ai-saas-content";
import musicAppContent from "../content/music-app-content";
import rentingAppContent from "../content/renting-app-content";
import memoryGameContent from "../content/memory-game-content";
import futureProjects from "../content/future-projects-content";
import ecommerceCMSContent from "../content/ecommerce-cms-content";
import ecommerceStoreContent from "../content/ecommerce-store-content";
import utilityMeterReadingAppContent from "../content/utility-meter-reading-app-content";

const BlogCardContainer = () => {
  const mg = useUnlockStore((state) => state.mg);
  const aiSaas = useUnlockStore((state) => state.aiSaas);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  return (
    <div className="grid grid-cols-1 gap-x-5 xl:gap-x-0 gap-y-5 lg:gap-y-10 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <BlogCard
        position={1}
        key={memoryGameContent.cardTitle}
        state={mg}
        content={memoryGameContent}
      />
      <BlogCard
        position={2}
        key={aiSaasContent.cardTitle}
        state={aiSaas}
        content={aiSaasContent}
      />
      <BlogCard
        position={3}
        key={utilityMeterReadingAppContent.cardTitle}
        state={utilityMeters}
        content={utilityMeterReadingAppContent}
      />
      <BlogCard
        position={4}
        key={ecommerceCMSContent.cardTitle}
        state={ecommerceCMS}
        content={ecommerceCMSContent}
      />
      <BlogCard
        position={5}
        key={ecommerceStoreContent.cardTitle}
        state={ecommerceStore}
        content={ecommerceStoreContent}
      />
      <BlogCard
        position={6}
        key={rentingAppContent.cardTitle}
        state={rentingApp}
        content={rentingAppContent}
      />
      <BlogCard
        position={7}
        key={musicAppContent.cardTitle}
        state={musicApp}
        content={musicAppContent}
      />
      <BlogCard
        position={8}
        key={futureProjects.cardTitle}
        state={false}
        content={futureProjects}
      />
    </div>
  );
};
export default BlogCardContainer;
