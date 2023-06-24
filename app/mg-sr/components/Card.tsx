"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardState } from "@/types";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface CardProps {
  cardState: CardState[];
  flipCard: (index: number) => void;
  cardUrl: number;
  index: number;
}

const Card: React.FC<CardProps> = ({
  cardState,
  cardUrl,
  index,
  moveCounter,
  isCheating,
  gameComplete,
  setTotalMoveCounter,
  recentlyFlippedCardIndexes,
  setMoveCounter,
  setCardState,
  clickNotAllowed,
  setFlipComplete,
}) => {
  const [cardImage, setCardImage] = useState<string>(null);
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const cardMap = await axios.get("/api/cards");
      const cardApiUrl = cardMap.data[cardUrl];
      const picture = await axios.get(cardApiUrl, {
        responseType: "arraybuffer",
      });

      const base64Image = Buffer.from(picture.data, "binary").toString(
        "base64"
      );
      const imageDataUrl = `data:image/png;base64,${base64Image}`;
      setCardImage(imageDataUrl);
    };

    if (cardState[index].matched || !cardState[index].hidden) {
      fetchData();
    }

    if (recentlyFlippedCardIndexes.length === 0 && !cardState[index].matched) {
      setCardImage("");
    }
  }, [recentlyFlippedCardIndexes]);

  const flipCard = async (index: number) => {
    if (
      !cardState[index].hidden ||
      cardState[index].matched ||
      moveCounter === 2 ||
      recentlyFlippedCardIndexes.length === 2 ||
      isCheating ||
      gameComplete ||
      alreadyClicked ||
      clickNotAllowed
    )
      return;

    setAlreadyClicked(true);
    recentlyFlippedCardIndexes.push(index);
    setMoveCounter((prev) => prev + 1);

    try {
      const cardMap = await axios.get("/api/cards");
      const cardApiUrl = cardMap.data[cardUrl];
      const picture = await axios.get(cardApiUrl, {
        responseType: "arraybuffer",
      });

      const base64Image = Buffer.from(picture.data, "binary").toString(
        "base64"
      );
      const imageDataUrl = `data:image/png;base64,${base64Image}`;
      setCardImage(imageDataUrl);
      setTotalMoveCounter((prev) => prev + 1);
      // recentlyFlippedCardIndexes.push(index);
      // setMoveCounter((prev) => prev + 1);
      setCardState((prev) => {
        const newState = [...prev];
        newState[index] = { ...prev[index], hidden: !prev[index].hidden };

        setAlreadyClicked(false);
        // recentlyFlippedCardIndexes.push(index);
        // setMoveCounter((prev) => prev + 1);
        if (recentlyFlippedCardIndexes.length === 2 && moveCounter === 1) {
          setFlipComplete(true);
        }

        return newState;
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: cardState[index].hidden ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      draggable={false}
      className="card h-[60px] w-[45px] border-[2px] border-primary bg-slate-500 shadow-sm hover:cursor-pointer hover:border-accent sm:h-[130px] sm:w-[80px] md:h-[150px] md:w-[100px]"
      onClick={() => flipCard(index)}
    >
      <Image
        src={
          cardState[index].hidden ? "/images/pokemon/pokeball.png" : cardImage
        }
        fill
        priority={true}
        quality={100}
        draggable={false}
        alt="pokeball"
        className={"object-contain p-1 md:p-2"}
      />
    </motion.div>
  );
};

export default Card;
