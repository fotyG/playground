import facts from "../facts-data/data";

import FactBlock from "./FactBlock";

const Facts = () => {
  return (
    <div className="container">
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
