"use client";

import { CardState } from "@/types";

import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

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
  const [cardImage, setCardImage] = useState("/images/1.webp");

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
      if (cardImage === "/images/1.webp") {
        fetchData();
      }
    }
  }, [cardImage, randomId, index, cardState, isCheating]);

  const flipCard = async (index: number) => {
    if (
      !cardState[index]?.hidden ||
      cardState[index]?.matched ||
      moveCounter === 2 ||
      recentlyFlippedCardIndexes.length === 2 ||
      isCheating ||
      gameComplete ||
      isLoading ||
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
      initial={{ rotateY: 0 }}
      animate={{ rotateY: cardState[index]?.hidden ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      whileTap={
        cardState[index]?.hidden
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
        src={
          cardState[index]?.hidden ? "/images/pokemon/pokeball.png" : cardImage
        }
        fill
        priority={true}
        sizes="100%"
        quality={100}
        draggable={false}
        alt="pokeball"
        className={"object-contain p-1 md:p-2"}
      />
    </motion.div>
  );
};

export default Card;
