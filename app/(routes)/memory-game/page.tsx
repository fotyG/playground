"use client";

import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useWindowSize } from "usehooks-ts";
import secureLocalStorage from "react-secure-storage";
import { useCallback, useEffect, useState } from "react";

import {
  createState,
  shuffleCards,
  encodeNumber,
} from "./helpers/helperFunctions";
import Card from "./components/Card";
import Modal from "./components/Modal";
import getState from "./helpers/getState";
import SoundMute from "./components/SoundMute";
import SkipModal from "./components/SkipModal";
import usePlaySound from "./hooks/usePlaySound";
import BlurDots from "@/components/ui/blur-dots";
import useIsCheating from "./hooks/useIsCheating";
import ProgressBar from "./components/ProgressBar";
import CheaterModal from "./components/CheaterModal";
import pokemonCardArray from "./lib/pokemonCardData";
import { useUnlockStore } from "@/hooks/useUnlockStore";
import { useUpdateLocal } from "./hooks/useUpdateLocal";
import LeaderBoardModal from "./components/LeaderBoardModal";
import { useGameCompleteStore } from "@/hooks/useGameComplete";

let cardArray: { id: number }[];
let recentlyFlippedCardIndexes: number[] = [];

const MemoryGame = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [moveCounter, setMoveCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [flipComplete, setFlipComplete] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [totalMoveCounter, setTotalMoveCounter] = useState(0);
  const [victoryConfetti, setVictoryConfetti] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);
  const [cardState, setCardState] = useState(createState(pokemonCardArray));

  const { width } = useWindowSize();

  const playMatchSound = usePlaySound("/sounds/success.wav");
  const playGameWinSound = usePlaySound("/sounds/gameWin.mp3", { volume: 0.3 });

  const { mg: stateOfUnlock, unlockMg: unlock } = useUnlockStore();

  // Check if cheating hook
  const isCheating = useIsCheating(totalMoveCounter, resetTrigger);

  // Every move update to LocalStorage hook
  useUpdateLocal({
    cardArray,
    cardState,
    isMounted,
    moveCounter,
    matchCounter,
    resetTrigger,
    totalMoveCounter,
    recentlyFlippedCardIndexes,
  });

  const {
    completeGame,
    scoreSubmitted,
    gameComplete: gameCompleteState,
    resetGameComplete: resetGameCompleteState,
  } = useGameCompleteStore();

  const restartGame = useCallback(() => {
    setMoveCounter(0);
    setMatchCounter(0);
    setTotalMoveCounter(0);
    setGameComplete(false);
    resetGameCompleteState();
    setVictoryConfetti(false);
    recentlyFlippedCardIndexes = [];
    setResetTrigger((prev) => !prev);
    cardArray = shuffleCards(pokemonCardArray);
    setCardState(createState(pokemonCardArray));
  }, [resetGameCompleteState]);

  // Initiation UseEffect
  useEffect(() => {
    setIsMounted(true);
    if (isCheating) return;
    try {
      const {
        localCardState,
        localCardArray,
        localMoveCounter,
        localMatchCounter,
        localRFCIndexArray,
        localTotalMoveCounter,
      } = getState();

      const xx = secureLocalStorage.getItem("x7545");

      if (
        xx === null ||
        localCardArray === null ||
        localCardState === null ||
        localMoveCounter === null ||
        localMatchCounter === null ||
        localRFCIndexArray === null ||
        localTotalMoveCounter === null ||
        (gameCompleteState && scoreSubmitted)
      ) {
        return restartGame();
      }

      if (Array.isArray(localCardArray) && Array.isArray(localRFCIndexArray)) {
        cardArray = localCardArray;
        recentlyFlippedCardIndexes = localRFCIndexArray;
      } else {
        recentlyFlippedCardIndexes = [];
        cardArray = shuffleCards(pokemonCardArray);
      }

      if (
        typeof localMoveCounter === "number" &&
        typeof localMatchCounter === "number" &&
        typeof localTotalMoveCounter === "number"
      ) {
        setCardState(localCardState);
        setMoveCounter(localMoveCounter);
        setMatchCounter(localMatchCounter);
        setTotalMoveCounter(localTotalMoveCounter);
      }

      localStorage.removeItem("@secure.j.y7545");
    } catch (error) {
      toast.error("Something went wrong, restarting the game!");
      restartGame();
    }
  }, []);

  // Game progress UseEffect
  useEffect(() => {
    try {
      if (
        moveCounter === 2 &&
        cardArray[recentlyFlippedCardIndexes[0]]?.id !==
          cardArray[recentlyFlippedCardIndexes[1]]?.id &&
        flipComplete
      ) {
        const timeout = setTimeout(() => {
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
        return () => clearTimeout(timeout);
      } else if (
        moveCounter === 2 &&
        cardArray[recentlyFlippedCardIndexes[0]]?.id ===
          cardArray[recentlyFlippedCardIndexes[1]]?.id
      ) {
        playMatchSound();
        setMoveCounter(0);
        setMatchCounter((prev) => prev + 1);

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
        setFetchDataOnOpen((prev) => !prev);
        if (!gameCompleteState) {
          playGameWinSound();
          setVictoryConfetti(true);
        }
        unlock();
        completeGame();
      }
    } catch (error) {
      toast.error("Something went wrong, restarting the game!");
      restartGame();
    }
  }, [
    unlock,
    moveCounter,
    matchCounter,
    flipComplete,
    gameComplete,
    totalMoveCounter,
    gameCompleteState,
  ]);

  return (
    <div className="container mt-3 sm:mt-10 px-2 py-2 flex flex-col items-center justify-center gap-2 md:gap-4 relative">
      <BlurDots className="top-1/2 -translate-y-1/3 bg-opacity-20" />
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
        className="text-xl md:text-2xl font-bold relative"
      >
        <SoundMute />
        Total Moves: {totalMoveCounter}
      </motion.p>
      <ProgressBar
        max={14}
        matchCounter={matchCounter}
      />
      {victoryConfetti && (
        <Confetti
          width={width}
          recycle={false}
          numberOfPieces={500}
          style={{ zIndex: 1001 }}
          onConfettiComplete={() => setVictoryConfetti(false)}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="game-container m-1 grid grid-cols-7 justify-center gap-2 lg:gap-5 "
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
        <div className="mt-3 mb-5 flex justify-center gap-2">
          <button
            onClick={restartGame}
            className="btn btn-ghost transition-[border-radius] duration-500"
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
          matchCounter={matchCounter}
          fetchDataOnOpen={fetchDataOnOpen}
          setMatchCounter={setMatchCounter}
          totalMoveCounter={totalMoveCounter}
          setTotalMoveCounter={setTotalMoveCounter}
        />
      )}
    </div>
  );
};
export default MemoryGame;
