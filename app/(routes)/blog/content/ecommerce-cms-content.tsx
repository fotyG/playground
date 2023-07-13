import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandStripe,
  TbBrandMysql,
  TbBrandPrisma,
} from "react-icons/tb";

const ecommerceCMSContent = {
  cardTitle: "Ecommerce CMS",
  slug: "ecommerce-cms",
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
  cardFeatures: "Multiple Store CMS, Dynamic API, Clerk Auth",
  cardBadge: "CMS",
  cardImg: "/images/cms.png",
};

export default ecommerceCMSContent;
