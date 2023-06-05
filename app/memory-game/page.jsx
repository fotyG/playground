"use client";

import { useEffect, useState } from "react";

import pokemonCardArray from "./libs/pokemonCardData";
import { createState, shuffleCards } from "./helpers/helperFunctions";
import Card from "./components/Card";

const initialState = createState(pokemonCardArray);
let cardArray = shuffleCards(pokemonCardArray);
let recentlyFlippedCardIndexes = [];

const MemoryGame = () => {
  const [cardState, setCardState] = useState(initialState);
  const [moveCounter, setMoveCounter] = useState(0);

  useEffect(() => {
    if (
      moveCounter === 2 &&
      cardArray[recentlyFlippedCardIndexes[0]] !==
        cardArray[recentlyFlippedCardIndexes[1]]
    ) {
      setTimeout(() => {
        setMoveCounter(0);
        setCardState((prev) => {
          const newState = [...prev];
          newState[recentlyFlippedCardIndexes[0]] = {
            ...prev[recentlyFlippedCardIndexes[0]],
            hidden: !prev[recentlyFlippedCardIndexes[0]]?.hidden,
          };
          newState[recentlyFlippedCardIndexes[1]] = {
            ...prev[recentlyFlippedCardIndexes[1]],
            hidden: !prev[recentlyFlippedCardIndexes[1]]?.hidden,
          };
          recentlyFlippedCardIndexes = [];
          return newState;
        });
      }, "1000");
    } else if (
      moveCounter === 2 &&
      cardArray[recentlyFlippedCardIndexes[0]] ===
        cardArray[recentlyFlippedCardIndexes[1]]
    ) {
      setMoveCounter(0);
      setCardState((prev) => {
        const newState = [...prev];
        newState[recentlyFlippedCardIndexes[0]] = {
          ...prev[recentlyFlippedCardIndexes[0]],
          matched: !prev[recentlyFlippedCardIndexes[0]].matched,
        };
        newState[recentlyFlippedCardIndexes[1]] = {
          ...prev[recentlyFlippedCardIndexes[1]],
          matched: !prev[recentlyFlippedCardIndexes[1]].matched,
        };
        recentlyFlippedCardIndexes = [];
        return newState;
      });
    }
  }, [moveCounter]);

  const flipCard = (index) => {
    if (!cardState[index].hidden || cardState[index].matched || moveCounter === 2) return;
    recentlyFlippedCardIndexes.push(index);
    setMoveCounter((prev) => prev + 1);
    setCardState((prev) => {
      const newState = [...prev];
      newState[index] = { ...prev[index], hidden: !prev[index].hidden };
      return newState;
    });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center">Welcome To The Memory Game!</h1>
      <div className="game-container grid grid-cols-7 gap-5 justify-center m-5">
        {cardArray.map((pokemon, idx) => (
          <Card
            key={idx}
            cardState={cardState}
            flipCard={flipCard}
            cardUrl={pokemon}
            index={idx}
          />
        ))}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCardState(createState(pokemonCardArray));
          cardArray = shuffleCards(pokemonCardArray);
          setMoveCounter(0);
          recentlyFlippedCardIndexes = [];
        }}
      >
        Restart
      </button>
      <p>{moveCounter}</p>
    </div>
  );
};
export default MemoryGame;
