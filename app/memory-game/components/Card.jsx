import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({cardState, flipCard, cardUrl, index}) => {
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: cardState[index].hidden ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      draggable={false}
      className="card w-[45px] md:w-[100px] h-[60px] md:h-[150px] relative border-[2px] border-primary hover:border-accent hover:cursor-pointer bg-slate-500 shadow-sm"
      onClick={() => flipCard(index)}
    >
      <div
        className="front"
        draggable={false}
      >
        {cardState[index].hidden && (
          <Image
            src={"/images/pokemon/pokeball.png"}
            fill
            draggable={false}
            alt="pokeball"
            className={"object-contain p-[1px] md:p-2"}
          />
        )}
      </div>
      <div
        className="back"
        draggable={false}
      >
        {!cardState[index].hidden && (
          <Image
            src={"/images/pokemon/" + cardUrl}
            fill
            draggable={false}
            alt={cardUrl}
            className={"object-contain p-[1px] md:p-2"}
          />
        )}
      </div>
    </motion.div>
  );
};
export default Card;
