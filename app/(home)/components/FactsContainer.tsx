import { motion } from "framer-motion";

import Fact from "./Fact";
import factsData from "../facts-data/data";

const FactsContainer = () => {
  return (
    <div className="container my-10 md:my-20">
      <div className="md:text-xl lg:text-2xl 2xl:text-3xl">
        {factsData.map((fact, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            key={idx}
            className="flex flex-col gap-5 my-5 sm:flex-row sm:odd:flex-row-reverse"
          >
            <Fact
              title={fact.title}
              description={fact.description}
              image={fact.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FactsContainer;
