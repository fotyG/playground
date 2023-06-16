"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Confetti from "react-confetti";
import secureLocalStorage from "react-secure-storage";

import pokemonCardArray from "./libs/pokemonCardData";
import {
  createState,
  shuffleCards,
  playSound,
  setLocalIntItem,
  setLocalStringItem,
} from "./helpers/helperFunctions";
import getState from "./helpers/getState";

import Card from "./components/Card";
import Modal from "./components/Modal";
import CheaterModal from "./components/CheaterModal";
import LeaderBoardModal from "./components/LeaderBoardModal";
import ProgressBar from "./components/ProgressBar";

let cardArray = shuffleCards(pokemonCardArray);
let recentlyFlippedCardIndexes: number[] = [];

let matchSound: HTMLAudioElement;
let gameWinSound: HTMLAudioElement;

const MemoryGame = () => {
  const [isCheating, setIsCheating] = useState(false);
  const [cardState, setCardState] = useState(createState(pokemonCardArray));
  const [moveCounter, setMoveCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [totalMoveCounter, setTotalMoveCounter] = useState(0);
  const [victoryConfetti, setVictoryConfetti] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    const [
      localCardState,
      localMoveCounter,
      localMatchCounter,
      localTotalMoveCounter,
      localCardArray,
      localRFCIndexArray,
    ] = getState();
    const y = {
      a: localCardState,
      b: localCardArray,
      c: localMoveCounter,
      d: localMatchCounter,
      e: localTotalMoveCounter,
      f: localRFCIndexArray,
    };
    secureLocalStorage.setItem("y7545", y);
    const yy = secureLocalStorage.getItem("y7545");
    const xx = secureLocalStorage.getItem("x7545");

    if (xx !== null && yy !== null) {
      if (JSON.stringify(yy) !== JSON.stringify(xx)) {
        setIsCheating(true);
        localStorage.removeItem("mg_card_array");
        localStorage.removeItem("mg_rf_array");
        localStorage.removeItem("mg_match_counter");
        localStorage.removeItem("mg_move_counter");
        localStorage.removeItem("mg_total_move_counter");
        localStorage.removeItem("mg_state");
        cardArray = shuffleCards(pokemonCardArray);
        recentlyFlippedCardIndexes = [];
        return;
      }
    }

    if (
      localCardState === null ||
      localMoveCounter === null ||
      localMatchCounter === null ||
      localTotalMoveCounter === null ||
      localCardArray === null ||
      localRFCIndexArray === null ||
      xx === null ||
      localMatchCounter === 14
    ) {
      return restartGame();
    }

    cardArray = localCardArray;
    recentlyFlippedCardIndexes = localRFCIndexArray;

    matchSound = new Audio("/sounds/success.wav");
    gameWinSound = new Audio("/sounds/gameWin.mp3");

    setCardState(localCardState);
    setTotalMoveCounter(localTotalMoveCounter);
    setMatchCounter(localMatchCounter);
    setMoveCounter(localMoveCounter);
  }, []);

  useEffect(() => {
    const [
      localCardState,
      localMoveCounter,
      localMatchCounter,
      localTotalMoveCounter,
      localCardArray,
      localRFCIndexArray,
    ] = getState();

    if (
      localCardState?.cheater ||
      localMoveCounter?.cheater ||
      localMatchCounter?.cheater ||
      localTotalMoveCounter?.cheater ||
      localRFCIndexArray?.cheater ||
      localCardArray?.cheater
    ) {
      setIsCheating(true);
      localStorage.removeItem("mg_card_array");
      localStorage.removeItem("mg_rf_array");
      localStorage.removeItem("mg_match_counter");
      localStorage.removeItem("mg_move_counter");
      localStorage.removeItem("mg_total_move_counter");
      localStorage.removeItem("mg_state");
      cardArray = shuffleCards(pokemonCardArray);
      recentlyFlippedCardIndexes = [];
      return;
    }
  }, [totalMoveCounter]);

  useEffect(() => {
    setLocalStringItem(cardState, "mg_state");
    setLocalStringItem(cardArray, "mg_card_array");
    setLocalIntItem(moveCounter, "mg_move_counter");
    setLocalIntItem(matchCounter, "mg_match_counter");
    setLocalIntItem(totalMoveCounter, "mg_total_move_counter");
    setLocalStringItem(recentlyFlippedCardIndexes, "mg_rf_array");

    const x = {
      a: cardState,
      b: cardArray,
      c: moveCounter,
      d: matchCounter,
      e: totalMoveCounter,
      f: recentlyFlippedCardIndexes,
    };
    secureLocalStorage.setItem("x7545", x);
  }, [totalMoveCounter, cardState, matchCounter, moveCounter]);

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
      playSound(matchSound);
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
      setGameComplete(true);
      setVictoryConfetti(true);
      playSound(gameWinSound);
      toast.success("Well Done Amigo - You Won! 🎉");
      setFetchDataOnOpen((prev) => !prev);
    }
  }, [moveCounter, matchCounter]);

  const flipCard = (index: number) => {
    if (
      !cardState[index].hidden ||
      cardState[index].matched ||
      moveCounter === 2 ||
      isCheating ||
      gameComplete
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

  const openModal = () => {
    setFetchDataOnOpen((prev) => !prev);
    window.lb_modal.showModal();
  };

  const restartGame = () => {
    setCardState(createState(pokemonCardArray));
    cardArray = shuffleCards(pokemonCardArray);
    recentlyFlippedCardIndexes = [];
    matchSound = new Audio("/sounds/success.wav");
    gameWinSound = new Audio("/sounds/gameWin.mp3");
    setMoveCounter(0);
    setTotalMoveCounter(0);
    setMatchCounter(0);
    setVictoryConfetti(false);
    setIsCheating(false);
    setGameComplete(false);
  };

  return (
    <div className="container px-2 py-2 flex flex-col items-center justify-center gap-2 md:gap-4">
      <h1 className="text-center text-xl">Welcome To The Memory Game!</h1>
      <p className="text-xl font-bold">Total Moves: {totalMoveCounter}</p>
      <ProgressBar
        matchCounter={matchCounter}
        max={14}
      />
      {victoryConfetti && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
        />
      )}
      <div className="game-container m-1 grid grid-cols-7 justify-center gap-2 lg:gap-5">
        {cardArray?.map((pokemon, idx) => (
          <Card
            key={idx}
            cardState={cardState}
            flipCard={flipCard}
            cardUrl={pokemon}
            index={idx}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        <button
          className="btn-primary btn"
          onClick={restartGame}
        >
          Restart
        </button>
        <button
          className="btn border-primary hover:btn-secondary"
          onClick={openModal}
        >
          Show LeaderBoard
        </button>
      </div>
      {isCheating && <CheaterModal restartGame={restartGame} />}
      {gameComplete && (
        <Modal
          totalMoveCounter={totalMoveCounter}
          matchCounter={matchCounter}
          setTotalMoveCounter={setTotalMoveCounter}
          fetchDataOnOpen={fetchDataOnOpen}
        />
      )}
      <LeaderBoardModal fetchDataOnOpen={fetchDataOnOpen} />
    </div>
  );
};
export default MemoryGame;
