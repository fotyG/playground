import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandPrisma,
  TbBrandSupabase,
  TbBrandMongodb,
} from "react-icons/tb";

const rentingAppContent = {
  cardTitle: "Renting App",
  slug: "renting-app",
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
  cardFeatures: "Advanced Reservation, NextAuth",
  cardBadge: "App",
  cardImg: "/images/rent.png",
};

export default rentingAppContent;
