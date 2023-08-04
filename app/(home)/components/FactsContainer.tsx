import Fact from "./Fact";
import factsData from "../facts-data/data";

const FactsContainer = () => {
  return (
    <div className="container my-10 md:my-20 md:text-xl lg:text-2xl 2xl:text-3xl">
      {factsData.map((fact, idx) => (
        <Fact
          key={idx}
          title={fact.title}
          description={fact.description}
          image={fact.image}
        />
      ))}
    </div>
  );
};
export default FactsContainer;
