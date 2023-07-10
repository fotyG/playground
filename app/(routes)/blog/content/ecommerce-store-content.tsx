import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandStripe,
  TbBrandHeadlessui,
} from "react-icons/tb";

const ecommerceStoreContent = {
  cardTitle: "Ecommerce Store",
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
  cardFeatures: "Managed by CMS",
  cardBadge: "App",
  cardImg: "/images/online-shop.png",
  blogContent: "loremp ipsum",
};

export default ecommerceStoreContent;
