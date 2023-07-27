"use client";

import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";

import {
  createState,
  shuffleCards,
  encodeNumber,
} from "./helpers/helperFunctions";
import Card from "./components/Card";
import Modal from "./components/Modal";
import getState from "./helpers/getState";
import { useMute } from "@/hooks/useMute";
import SoundMute from "./components/SoundMute";
import SkipModal from "./components/SkipModal";
import useIsCheating from "./hooks/useIsCheating";
import ProgressBar from "./components/ProgressBar";
import setLocalState from "./helpers/setLocalState";
import CheaterModal from "./components/CheaterModal";
import pokemonCardArray from "./lib/pokemonCardData";
import { playSound } from "./helpers/helperFunctions";
import { useUnlockStore } from "@/hooks/useUnlockStore";
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

  const matchSound = useRef<HTMLAudioElement>(null);
  const gameWinSound = useRef<HTMLAudioElement>(null);
  const soundMuted = useMute((state) => state.soundMuted);

  const unlock = useUnlockStore((state) => state.unlockMg);
  const stateOfUnlock = useUnlockStore((state) => state.mg);

  const isCheating = useIsCheating(totalMoveCounter, resetTrigger);

  const completeGame = useGameCompleteStore((state) => state.completeGame);
  const scoreSubmitted = useGameCompleteStore((state) => state.scoreSubmitted);
  const gameCompleteState = useGameCompleteStore((state) => state.gameComplete);
  const resetGameCompleteState = useGameCompleteStore(
    (state) => state.resetGameComplete
  );

  // Initiation UseEffect
  useEffect(() => {
    setIsMounted(true);
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

  // Every move update to LocalStorage
  useEffect(() => {
    if (isMounted) {
      setLocalState({
        cardState,
        cardArray,
        moveCounter,
        matchCounter,
        totalMoveCounter,
        recentlyFlippedCardIndexes,
      });
    }
  }, [
    cardState,
    isMounted,
    moveCounter,
    matchCounter,
    resetTrigger,
    totalMoveCounter,
  ]);

  // Game progress UseEffect
  useEffect(() => {
    try {
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
        if (matchSound.current) {
          playSound(matchSound.current);
        }
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
          if (gameWinSound.current) {
            playSound(gameWinSound.current);
          }
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
    completeGame,
    totalMoveCounter,
    gameCompleteState,
  ]);

  const restartGame = () => {
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
        className="text-xl md:text-2xl font-bold relative"
      >
        <SoundMute />
        Total Moves: {totalMoveCounter}
      </motion.p>
      <ProgressBar
        matchCounter={matchCounter}
        max={14}
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
            onClick={restartGame}
            className="btn-primary btn transition-[border-radius] duration-500"
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
      {isMounted && (
        <>
          <audio
            ref={matchSound}
            muted={soundMuted}
          >
            <source src="/sounds/success.wav" />
          </audio>
          <audio
            ref={gameWinSound}
            muted={soundMuted}
          >
            <source src="/sounds/gameWin.mp3" />
          </audio>
        </>
      )}
    </div>
  );
};
export default MemoryGame;
