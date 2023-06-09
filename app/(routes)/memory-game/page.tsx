"use client";

import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import secureLocalStorage from "react-secure-storage";

import {
  createState,
  shuffleCards,
  playSound,
  setLocalIntItem,
  setLocalStringItem,
  encodeNumber,
} from "./helpers/helperFunctions";
import getState from "./helpers/getState";
import pokemonCardArray from "./libs/pokemonCardData";
import { useUnlockStore } from "@/hooks/useUnlockStore";

import Card from "./components/Card";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";
import CheaterModal from "./components/CheaterModal";
import LeaderBoardModal from "./components/LeaderBoardModal";
import SkipModal from "./components/SkipModal";

let cardArray: { id: number }[];
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
  const [flipComplete, setFlipComplete] = useState(true);

  const { width } = useWindowSize();
  const unlock = useUnlockStore((state) => state.unlockMg);
  const gameState = useUnlockStore((state) => state.mg);
  const stateOfUnlock = useUnlockStore((state) => state.mg);

  // Initiation UseEffect
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

    matchSound = new Audio("/sounds/success.wav");
    gameWinSound = new Audio("/sounds/gameWin.mp3");

    if (xx !== null && yy !== null) {
      if (JSON.stringify(yy) !== JSON.stringify(xx)) {
        setIsCheating(true);
        localStorage.removeItem("mg_card_array");
        localStorage.removeItem("mg_rf_array");
        localStorage.removeItem("mg_match_counter");
        localStorage.removeItem("mg_move_counter");
        localStorage.removeItem("mg_total_move_counter");
        localStorage.removeItem("mg_state");
        localStorage.removeItem("@secure.j.y7545");
        localStorage.removeItem("@secure.j.x7545");
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
      xx === null
    ) {
      return restartGame();
    }

    cardArray = localCardArray;
    recentlyFlippedCardIndexes = localRFCIndexArray;

    setCardState(localCardState);
    setTotalMoveCounter(localTotalMoveCounter);
    setMatchCounter(localMatchCounter);
    setMoveCounter(localMoveCounter);
    localStorage.removeItem("@secure.j.y7545");
  }, []);

  // Cheater Check UseEffect
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

  // Every move update to LocalStorage
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

  // Game progress UseEffect
  useEffect(() => {
    if (
      moveCounter === 2 &&
      cardArray[recentlyFlippedCardIndexes[0]]?.id !==
        cardArray[recentlyFlippedCardIndexes[1]]?.id &&
      flipComplete
    ) {
      setTimeout(() => {
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
          setMoveCounter(0);
          setFlipComplete(false);

          return newState;
        });
      }, 1000);
    } else if (
      moveCounter === 2 &&
      cardArray[recentlyFlippedCardIndexes[0]]?.id ===
        cardArray[recentlyFlippedCardIndexes[1]]?.id
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
      setFetchDataOnOpen((prev) => !prev);
      if (!gameState) {
        playSound(gameWinSound);
      }
      unlock();
    }
  }, [moveCounter, matchCounter, totalMoveCounter, flipComplete]);

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
    <div className="container mb-5 px-2 py-2 flex flex-col items-center justify-center gap-2 md:gap-4">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-lg font-extrabold uppercase"
      >
        Memorize 'em all!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl font-bold"
      >
        Total Moves: {totalMoveCounter}
      </motion.p>
      <ProgressBar
        matchCounter={matchCounter}
        max={14}
      />
      {victoryConfetti && (
        <Confetti
          width={width}
          numberOfPieces={500}
          recycle={false}
          onConfettiComplete={() => setVictoryConfetti(false)}
          style={{ zIndex: 1000 }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="game-container m-1 grid grid-cols-7 justify-center gap-2 lg:gap-5"
      >
        {cardArray?.map((pokemon: { id: number }, idx: number) => {
          const encodedId = encodeNumber(pokemon.id);
          return (
            <Card
              key={idx}
              index={idx}
              randomId={encodedId}
              cardState={cardState}
              isCheating={isCheating}
              moveCounter={moveCounter}
              gameComplete={gameComplete}
              setCardState={setCardState}
              setMoveCounter={setMoveCounter}
              setFlipComplete={setFlipComplete}
              setTotalMoveCounter={setTotalMoveCounter}
              recentlyFlippedCardIndexes={recentlyFlippedCardIndexes}
            />
          );
        })}
      </motion.div>
      {!cardArray ? (
        ""
      ) : (
        <div className="mt-3 flex justify-center gap-2">
          <button
            className="btn-primary btn"
            onClick={restartGame}
          >
            Restart
          </button>
          <LeaderBoardModal fetchDataOnOpen={fetchDataOnOpen} />
        </div>
      )}
      {cardArray ? !stateOfUnlock && <SkipModal unlock={unlock} /> : <></>}
      {isCheating && <CheaterModal restartGame={restartGame} />}
      {gameComplete && (
        <Modal
          totalMoveCounter={totalMoveCounter}
          matchCounter={matchCounter}
          setMatchCounter={setMatchCounter}
          setTotalMoveCounter={setTotalMoveCounter}
          fetchDataOnOpen={fetchDataOnOpen}
        />
      )}
    </div>
  );
};
export default MemoryGame;
