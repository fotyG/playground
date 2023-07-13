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
  slug: "music-app",
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
  cardFeatures: "Music-upload, Stripe-Subscription",
  cardBadge: "App",
  cardImg: "/images/guitar.png",
};

export default musicAppContent;
