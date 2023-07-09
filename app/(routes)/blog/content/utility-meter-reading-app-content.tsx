import { TbBrandVite, TbBrandTailwind, TbBrandMongodb } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const utilityMeterReadingAppContent = {
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
  cardFeatures: "Express BE, JWT",
  cardBadge: "App",
  cardImg: "/images/utilities.png",
  blogContent: "loremp ipsum",
};

export default utilityMeterReadingAppContent;
