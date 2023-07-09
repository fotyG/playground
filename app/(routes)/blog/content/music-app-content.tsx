import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandStripe,
  TbBrandSupabase,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const musicAppContent = {
  cardTitle: "Music App",
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
    <TbBrandSupabase
      className="text-primary hover:text-secondary"
      title="Supabase"
      size={25}
    />,
    <TbBrandStripe
      className="text-primary hover:text-secondary"
      title="Stripe"
      size={25}
    />,
    <BiLogoPostgresql
      className="text-primary hover:text-secondary"
      title="PostgreSQL"
      size={25}
    />,
  ],
  cardFeatures: "Music-upload, Stripe-Subscription",
  cardBadge: "App",
  cardImg: "/images/guitar.png",
  blogContent: "loremp ipsum",
};

export default musicAppContent;
