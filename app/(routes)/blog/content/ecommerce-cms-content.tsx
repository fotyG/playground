import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandStripe,
  TbBrandMysql,
} from "react-icons/tb";

const ecommerceCMSContent = {
  cardTitle: "Ecommerce CMS",
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
    <TbBrandStripe
      className="text-primary hover:text-secondary"
      title="Stripe"
      size={25}
    />,
    <TbBrandMysql
      className="text-primary hover:text-secondary"
      title="MySQL"
      size={25}
    />,
  ],
  cardFeatures: "Multiple Store CMS, Dynamic API",
  cardBadge: "App",
  cardImg: "/images/cms.png",
  blogContent: "loremp ipsum",
};

export default ecommerceCMSContent;
