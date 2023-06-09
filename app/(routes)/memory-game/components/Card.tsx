"use client";

import { CardState } from "@/types";

import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  index: number;
  randomId: string;
  cardState: CardState[];
  isCheating: boolean;
  moveCounter: number;
  gameComplete: boolean;
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
  recentlyFlippedCardIndexes,
  setCardState,
  setFlipComplete,
  setMoveCounter,
  setTotalMoveCounter,
}) => {
  const [cardImage, setCardImage] = useState("/images/1.webp");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

    if (cardState[index].matched || !cardState[index].hidden) {
      if (cardImage === "/images/1.webp") {
        fetchData();
      }
    }
  }, [cardState[index].matched, cardState[index].hidden]);

  const flipCard = async (index: number) => {
    if (
      !cardState[index].hidden ||
      cardState[index].matched ||
      moveCounter === 2 ||
      recentlyFlippedCardIndexes.length === 2 ||
      isCheating ||
      gameComplete ||
      isLoading ||
      recentlyFlippedCardIndexes.includes(index)
    )
      return;

    // recentlyFlippedCardIndexes.push(index);
    // setMoveCounter((prev) => prev + 1);

    try {
      setIsLoading(true);
      recentlyFlippedCardIndexes.push(index);
      setMoveCounter((prev) => prev + 1);
      const picture = await axios.get(`/api/cards/${randomId}`, {
        responseType: "arraybuffer",
      });
      const base64Image = Buffer.from(picture.data, "binary").toString(
        "base64"
      );
      const imageDataUrl = `data:image/png;base64,${base64Image}`;
      setCardImage(imageDataUrl);
      setTotalMoveCounter((prev) => prev + 1);
      setCardState((prev) => {
        const newState = [...prev];
        newState[index] = { ...prev[index], hidden: !prev[index].hidden };

        if (recentlyFlippedCardIndexes.length === 2 && moveCounter >= 1) {
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
      animate={{ rotateY: cardState[index].hidden ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      draggable={false}
      className={twMerge(
        "card h-[60px] w-[45px] border-[2px] border-primary bg-slate-500 shadow-sm hover:cursor-pointer hover:border-accent sm:h-[130px] sm:w-[80px] md:h-[150px] md:w-[100px]",
        isLoading && "animate-pulse"
      )}
      onClick={() => flipCard(index)}
    >
      <Image
        src={
          cardState[index].hidden ? "/images/pokemon/pokeball.png" : cardImage
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
