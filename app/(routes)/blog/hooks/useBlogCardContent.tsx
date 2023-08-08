import {
  TbBrandVite,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandStripe,
  TbBrandPrisma,
  TbBrandFramer,
  TbBrandMongodb,
  TbBrandTailwind,
  TbBrandSupabase,
  TbBrandTypescript,
  TbBrandHeadlessui,
} from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import aiImage from "@/public/images/ai.png";
import CMSImage from "@/public/images/cms.png";
import musicImage from "@/public/images/guitar.png";
import rentingImage from "@/public/images/rent.png";
import hatchEggImage from "@/public/images/hatch.png";
import { useUnlockStore } from "@/hooks/useUnlockStore";
import utilityImage from "@/public/images/utilities.png";
import pokeBallImage from "@/public/images/pokeball.png";
import ecomStoreImage from "@/public/images/online-shop.png";

export const useBlogCardContent = () => {
  const mg = useUnlockStore((state) => state.mg);
  const aiSaas = useUnlockStore((state) => state.aiSaas);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  return [
    {
      position: 2,
      state: aiSaas,
      slug: "ai-saas",
      cardBadge: "AI",
      cardImg: aiImage,
      cardTitle: "AI SaaS",
      cardFeatures: "openAI, Replicate",
      cardDescription: [
        <TbBrandNextjs
          key={"nextjs"}
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key={"typescript"}
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key={"tailwind"}
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandStripe
          key={"stripe"}
          className="text-primary hover:text-secondary"
          title="Stripe"
          size={25}
        />,
        <TbBrandPrisma
          key="prisma"
          className="text-primary hover:text-secondary"
          title="Prisma"
          size={25}
        />,
        <TbBrandMysql
          key={"mysql"}
          className="text-primary hover:text-secondary"
          title="MySQL"
          size={25}
        />,
      ],
    },
    {
      position: 3,
      cardBadge: "CMS",
      cardImg: CMSImage,
      state: ecommerceCMS,
      slug: "ecommerce-cms",
      cardTitle: "Ecommerce CMS",
      cardFeatures: "Multiple Store CMS, Dynamic API, Clerk Auth",
      cardDescription: [
        <TbBrandNextjs
          key={"nextjs"}
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key={"typescript"}
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key={"tailwind"}
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandStripe
          key={"stripe"}
          className="text-primary hover:text-secondary"
          title="Stripe"
          size={25}
        />,
        <TbBrandPrisma
          key="prisma"
          className="text-primary hover:text-secondary"
          title="Prisma"
          size={25}
        />,
        <TbBrandMysql
          key={"mysql"}
          className="text-primary hover:text-secondary"
          title="MySQL"
          size={25}
        />,
      ],
    },
    {
      position: 4,
      cardBadge: "App",
      state: ecommerceStore,
      slug: "ecommerce-store",
      cardImg: ecomStoreImage,
      cardTitle: "Ecommerce Store",
      cardFeatures: "Managed by CMS",
      cardDescription: [
        <TbBrandNextjs
          key={"nextjs"}
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key={"typescript"}
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key={"tailwind"}
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandHeadlessui
          key={"headlessui"}
          className="text-primary hover:text-secondary"
          title="Headless UI"
          size={25}
        />,
        <TbBrandStripe
          key={"stripe"}
          className="text-primary hover:text-secondary"
          title="Stripe"
          size={25}
        />,
      ],
    },
    {
      position: 8,
      state: false,
      cardBadge: "???",
      cardFeatures: "???",
      cardImg: hatchEggImage,
      slug: "future-projects",
      cardDescription: ["???"],
      cardTitle: "Coming Soon...",
      blogContent:
        "I will be adding more projects soon - be sure to unlock them all!",
    },
    {
      state: mg,
      position: 1,
      cardBadge: "Game",
      slug: "memory-game",
      cardImg: pokeBallImage,
      cardTitle: "Memory Game",
      cardFeatures: "Anti-cheat, SSR",
      cardDescription: [
        <TbBrandNextjs
          key={"nextjs"}
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key={"typescript"}
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key={"tailwind"}
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandSupabase
          key={"supabase"}
          className="text-primary hover:text-secondary"
          title="Supabase"
          size={25}
        />,
        <TbBrandFramer
          key={"framer"}
          className="text-primary hover:text-secondary"
          title="Framer Motion"
          size={25}
        />,
        <BiLogoPostgresql
          key="postgresql"
          className="text-primary hover:text-secondary"
          title="PostgreSQL"
          size={25}
        />,
      ],
    },
    {
      position: 5,
      state: musicApp,
      cardBadge: "App",
      slug: "music-app",
      cardImg: musicImage,
      cardTitle: "Music App",
      cardFeatures: "Music-upload, Stripe-Subscription",
      cardDescription: [
        <TbBrandNextjs
          key="nextjs"
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key="typescript"
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key="tailwind"
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandSupabase
          key="supabase"
          className="text-primary hover:text-secondary"
          title="Supabase"
          size={25}
        />,
        <TbBrandStripe
          key="stripe"
          className="text-primary hover:text-secondary"
          title="Stripe"
          size={25}
        />,
        <BiLogoPostgresql
          key="postgresql"
          className="text-primary hover:text-secondary"
          title="PostgreSQL"
          size={25}
        />,
      ],
    },
    {
      position: 6,
      cardBadge: "App",
      state: rentingApp,
      slug: "renting-app",
      cardImg: rentingImage,
      cardTitle: "Renting App",
      cardFeatures: "Advanced Reservation, NextAuth",
      cardDescription: [
        <TbBrandNextjs
          key="nextjs"
          className="text-primary hover:text-secondary"
          title="Next.js"
          size={25}
        />,
        <TbBrandTypescript
          key="typescript"
          className="text-primary hover:text-secondary"
          title="TypeScript"
          size={25}
        />,
        <TbBrandTailwind
          key="tailwind"
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandPrisma
          key="prisma"
          className="text-primary hover:text-secondary"
          title="Prisma"
          size={25}
        />,
        <TbBrandMongodb
          key="mongodb"
          className="text-primary hover:text-secondary"
          title="MongoDB"
          size={25}
        />,
      ],
    },
    {
      position: 7,
      cardBadge: "App",
      state: utilityMeters,
      cardImg: utilityImage,
      cardFeatures: "Express BE, JWT",
      slug: "utility-meter-reading-app",
      cardTitle: "Utility Meter Reading App",
      cardDescription: [
        <FaReact
          key="react"
          className="text-primary hover:text-secondary"
          title="React"
          size={25}
        />,
        <TbBrandVite
          key="vite"
          className="text-primary hover:text-secondary"
          title="Vite"
          size={25}
        />,
        <SiExpress
          key="express"
          className="text-primary hover:text-secondary"
          title="Express.js"
          size={25}
        />,
        <TbBrandTailwind
          key="tailwind"
          className="text-primary hover:text-secondary"
          title="Tailwind CSS"
          size={25}
        />,
        <TbBrandMongodb
          key="mongodb"
          className="text-primary hover:text-secondary"
          title="MongoDB"
          size={25}
        />,
      ],
    },
  ];
};
