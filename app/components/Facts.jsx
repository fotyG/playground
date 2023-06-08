import Image from "next/image";
import facts from "./facts-data/data";

import FactBlock from "./FactBlock";

const Facts = () => {
  return (
    <div className="mx-10 sm:mx-20 md:mx-32 lg:mx-44 2xl:mx-96 my-14">
      {facts.map((fact, idx) => (
        <FactBlock
          key={idx}
          title={fact.title}
          description={fact.description}
          image={fact.image}
          idx={idx}
        />
      ))}
    </div>
  );
};
export default Facts;
