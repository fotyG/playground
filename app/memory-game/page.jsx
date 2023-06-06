"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Confetti from "react-confetti";

import pokemonCardArray from "./libs/pokemonCardData";
import {
  createState,
  shuffleCards,
  playMatchSound,
  playGameWinSound,
} from "./helpers/helperFunctions";
import Card from "./components/Card";

const initialState = createState(pokemonCardArray);
let cardArray = shuffleCards(pokemonCardArray);
let recentlyFlippedCardIndexes = [];

const MemoryGame = () => {
  const [cardState, setCardState] = useState(initialState);
  const [moveCounter, setMoveCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [totalMoveCounter, setTotalMoveCounter] = useState(0);
  const [victoryConfetti, setVictoryConfetti] = useState(false);

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
      }, 1000);
    } else if (
      moveCounter === 2 &&
      cardArray[recentlyFlippedCardIndexes[0]] ===
        cardArray[recentlyFlippedCardIndexes[1]]
    ) {
      playMatchSound();
      setMatchCounter((prev) => prev + 1);
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

    if (matchCounter === 14) {
      setVictoryConfetti(true);
      playGameWinSound();
      toast.success("Congratz Amigo - You Won! 🎉");
    }
  }, [moveCounter, matchCounter]);

  const flipCard = (index) => {
    if (
      !cardState[index].hidden ||
      cardState[index].matched ||
      moveCounter === 2
    )
      return;
    setTotalMoveCounter((prev) => prev + 1);
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
      {victoryConfetti && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
        />
      )}
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
          recentlyFlippedCardIndexes = [];
          setMoveCounter(0);
          setTotalMoveCounter(0);
          setMatchCounter(0);
          setVictoryConfetti(false);
        }}
      >
        Restart
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setMatchCounter(14);
        }}
      >
        Cheat win
      </button>

      <p>Move: {moveCounter}</p>
      <p>Total Moves: {totalMoveCounter}</p>
    </div>
  );
};
export default MemoryGame;
