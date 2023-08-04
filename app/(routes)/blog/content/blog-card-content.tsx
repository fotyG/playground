import {
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandStripe,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandHeadlessui,
  TbBrandFramer,
  TbBrandSupabase,
  TbBrandMongodb,
  TbBrandVite,
} from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { useUnlockStore } from "@/hooks/useUnlockStore";

export const getCardContent = () => {
  const {
    mg,
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  } = useUnlockStore();

  return [
    {
      position: 2,
      state: aiSaas,
      slug: "ai-saas",
      cardBadge: "AI",
      cardTitle: "AI SaaS",
      cardImg: "/images/ai.png",
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
      state: ecommerceCMS,
      slug: "ecommerce-cms",
      cardTitle: "Ecommerce CMS",
      cardImg: "/images/cms.png",
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
      cardTitle: "Ecommerce Store",
      cardFeatures: "Managed by CMS",
      cardImg: "/images/online-shop.png",
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
      state: false,
      position: 8,
      cardBadge: "???",
      cardFeatures: "???",
      slug: "future-projects",
      cardDescription: ["???"],
      cardTitle: "Coming Soon...",
      cardImg: "/images/hatch.png",
      blogContent:
        "I will be adding more projects soon - be sure to unlock them all!",
    },
    {
      state: mg,
      position: 1,
      cardBadge: "Game",
      slug: "memory-game",
      cardTitle: "Memory Game",
      cardFeatures: "Anti-cheat, SSR",
      cardImg: "/images/pokeball.png",
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
      cardTitle: "Music App",
      cardImg: "/images/guitar.png",
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
      cardTitle: "Renting App",
      cardImg: "/images/rent.png",
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
      cardFeatures: "Express BE, JWT",
      cardImg: "/images/utilities.png",
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
