import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ cardState, flipCard, cardUrl, index }) => {
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: cardState[index].hidden ? 0 : 180 }}
      transition={{ duration: 0.4 }}
      draggable={false}
      className="card h-[60px] w-[45px] border-[2px] border-primary bg-slate-500 shadow-sm hover:cursor-pointer hover:border-accent md:h-[150px] md:w-[100px]"
      onClick={() => flipCard(index)}
    >
      <Image
        src={
          cardState[index].hidden
            ? "/images/pokemon/pokeball.png"
            : "/images/pokemon/" + cardUrl
        }
        fill
        priority={true}
        quality={25}
        draggable={false}
        alt="pokeball"
        className={"object-contain p-[1px] md:p-2"}
      />
    </motion.div>
  );
};

export default Card;
