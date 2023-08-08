"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

import { CardState } from "@/types";
import pikaLoading from "@/public/images/1.webp";
import pokeball from "@/public/images/pokemon/pokeball.png";

interface CardProps {
  index: number;
  randomId: string;
  isCheating: boolean;
  moveCounter: number;
  gameComplete: boolean;
  cardState: CardState[];
  recentlyFlippedCardIndexes: number[];
  setCardState: Dispatch<SetStateAction<CardState[]>>;
  setFlipComplete: Dispatch<SetStateAction<boolean>>;
  setMoveCounter: Dispatch<SetStateAction<number>>;
  setTotalMoveCounter: Dispatch<SetStateAction<number>>;
}

const fadeInAnimationVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.04,
    },
  }),
};

const Card: React.FC<CardProps> = ({
  index,
  randomId,
  cardState,
  isCheating,
  moveCounter,
  gameComplete,
  setCardState,
  setMoveCounter,
  setFlipComplete,
  setTotalMoveCounter,
  recentlyFlippedCardIndexes,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardImage, setCardImage] = useState<StaticImageData | string>(
    pikaLoading
  );

  useEffect(() => {
    if (isCheating) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const picture = await axios.get(`/api/cards/${randomId}`, {
          responseType: "arraybuffer",
        });
        const base64Image = Buffer.from(picture.data, "binary").toString(
          "base64"
        );
        const imageDataUrl = `data:image/png;base64,${base64Image}`;
        setCardImage(imageDataUrl);
      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    if (cardState[index]?.matched || !cardState[index]?.hidden) {
      if (cardImage === pikaLoading) {
        fetchData();
      }
    }
  }, [cardImage, randomId, index, cardState, isCheating]);

  const flipCard = async (index: number) => {
    if (
      isLoading ||
      isCheating ||
      gameComplete ||
      moveCounter === 2 ||
      !cardState[index]?.hidden ||
      cardState[index]?.matched ||
      recentlyFlippedCardIndexes.length === 2 ||
      recentlyFlippedCardIndexes.includes(index)
    )
      return;

    try {
      setIsLoading(true);
      recentlyFlippedCardIndexes.push(index);

      const picture = await axios.get(`/api/cards/${randomId}`, {
        responseType: "arraybuffer",
      });
      const base64Image = Buffer.from(picture.data, "binary").toString(
        "base64"
      );
      const imageDataUrl = `data:image/png;base64,${base64Image}`;
      setCardImage(imageDataUrl);

      setMoveCounter((prev) => prev + 1);
      setTotalMoveCounter((prev) => prev + 1);
      setCardState((prev) => {
        const newState = [...prev];
        newState[index] = { ...prev[index], hidden: !prev[index].hidden };

        if (recentlyFlippedCardIndexes.length === 2) {
          setFlipComplete(true);
          return newState;
        }

        return newState;
      });
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      custom={index}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
      variants={fadeInAnimationVariants}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: cardState[index]?.hidden ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        whileTap={
          cardState[index]?.hidden && recentlyFlippedCardIndexes.length < 2
            ? { y: 5, scale: 0.95, transition: { duration: 0.1 } }
            : {}
        }
        draggable={false}
        className={twMerge(
          "card h-[60px] w-[45px] border-[2px] transition-[border-radius] border-primary bg-slate-500 shadow-sm hover:cursor-pointer hover:border-accent sm:h-[130px] sm:w-[80px] md:h-[150px] md:w-[100px]",
          isLoading && "animate-pulse"
        )}
        onClick={() => flipCard(index)}
      >
        <Image
          fill
          sizes="100%"
          quality={100}
          alt="pokeball"
          priority={true}
          draggable={false}
          className={"object-contain p-1 md:p-2"}
          src={cardState[index]?.hidden ? pokeball : cardImage}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
