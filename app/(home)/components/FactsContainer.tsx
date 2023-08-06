import Fact from "./Fact";
import factsData from "../facts-data/data";

const FactsContainer = () => {
  return (
    <div className="container my-10 md:my-20 md:text-xl lg:text-2xl 2xl:text-3xl overflow-hidden">
      {factsData.map((fact, idx) => (
        <Fact
          key={idx}
          index={idx}
          title={fact.title}
          image={fact.image}
          description={fact.description}
        />
      ))}
    </div>
  );
};
export default FactsContainer;
