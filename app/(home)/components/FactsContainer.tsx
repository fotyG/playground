import Fact from "./Fact";
import factsData from "../facts-data/data";

const FactsContainer = () => {
  return (
    <div className="container my-10 md:my-20">
      <div className="md:text-xl lg:text-2xl 2xl:text-3xl">
        {factsData.map((fact, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-5 my-5 sm:flex-row sm:odd:flex-row-reverse"
          >
            <Fact
              title={fact.title}
              description={fact.description}
              image={fact.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FactsContainer;
