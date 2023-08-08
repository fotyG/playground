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
} from "../helpers/helperFunctions";
import Card from "./Card";
import Modal from "./Modal";
import SoundMute from "./SoundMute";
import SkipModal from "./SkipModal";
import ProgressBar from "./ProgressBar";
import CheaterModal from "./CheaterModal";
import getState from "../helpers/getState";
import BlurDot from "@/components/ui/blur-dot";
import usePlaySound from "../hooks/usePlaySound";
import LeaderBoardModal from "./LeaderBoardModal";
import useIsCheating from "../hooks/useIsCheating";
import pokemonCardArray from "../lib/pokemonCardData";
import { useUnlockStore } from "@/hooks/useUnlockStore";
import { useUpdateLocal } from "../hooks/useUpdateLocal";
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

  // Unlock store
  const unlock = useUnlockStore((s) => s.unlockMg);
  const stateOfUnlock = useUnlockStore((s) => s.mg);

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

  // Game Complete store
  const completeGame = useGameCompleteStore((s) => s.completeGame);
  const scoreSubmitted = useGameCompleteStore((s) => s.scoreSubmitted);
  const gameCompleteState = useGameCompleteStore((s) => s.gameComplete);
  const resetGameCompleteState = useGameCompleteStore(
    (s) => s.resetGameComplete
  );

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initiation UseEffect
  useEffect(() => {
    if (!isMounted || isCheating) return;
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
  }, [isMounted]);

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
    <>
      {victoryConfetti && (
        <Confetti
          width={width}
          recycle={false}
          numberOfPieces={500}
          style={{ zIndex: 1001 }}
          onConfettiComplete={() => setVictoryConfetti(false)}
        />
      )}
      <BlurDot className="left-1/2 -translate-x-1/2 top-1/4 h-2/3 w-2/3 sm:w-2/3" />
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="game-container m-1 grid grid-cols-7 justify-center gap-2 lg:gap-5 relative"
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
    </>
  );
};
export default MemoryGame;
