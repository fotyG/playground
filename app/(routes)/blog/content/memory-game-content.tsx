import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramer,
  TbBrandSupabase,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const memoryGameContent = {
  cardTitle: "Memory Game",
  slug: "memory-game",
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
  cardFeatures: "Anti-cheat, SSR",
  cardBadge: "Game",
  cardImg: "/images/pokeball.png",
};

export default memoryGameContent;
