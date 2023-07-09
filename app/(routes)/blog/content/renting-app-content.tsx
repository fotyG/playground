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
  cardDescription: [
    <TbBrandNextjs
      className="text-primary hover:text-secondary"
      title="Next.js"
      size={25}
    />,
    <TbBrandTypescript
      className="text-primary hover:text-secondary"
      title="TypeScript"
      size={25}
    />,
    <TbBrandTailwind
      className="text-primary hover:text-secondary"
      title="Tailwind CSS"
      size={25}
    />,
    <TbBrandPrisma
      className="text-primary hover:text-secondary"
      title="Prisma"
      size={25}
    />,
    <TbBrandMongodb
      className="text-primary hover:text-secondary"
      title="MongoDB"
      size={25}
    />,
  ],
  cardFeatures: "Advanced Reservation, NextAuth",
  cardBadge: "App",
  cardImg: "/images/rent.png",
  blogContent: "loremp ipsum",
};

export default rentingAppContent;
