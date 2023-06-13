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
  setLocalIntItem,
  setLocalStringItem,
} from "./helpers/helperFunctions.jsx";
import getState from "./helpers/getState.jsx";

import Card from "./components/Card";
import Modal from "./components/Modal";
import CheaterModal from "./components/CheaterModal";
import LeaderBoardModal from "./components/LeaderBoardModal";
import ProgressBar from "./components/ProgressBar";

let cardArray = shuffleCards(pokemonCardArray);
let recentlyFlippedCardIndexes = [];

const MemoryGame = () => {
  const [isCheating, setIsCheating] = useState(false);
  const [cardState, setCardState] = useState(createState(pokemonCardArray));
  const [moveCounter, setMoveCounter] = useState(0);
  const [matchCounter, setMatchCounter] = useState(0);
  const [totalMoveCounter, setTotalMoveCounter] = useState(0);
  const [victoryConfetti, setVictoryConfetti] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);

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
      localCardState === null ||
      localMoveCounter === null ||
      localMatchCounter === null ||
      localTotalMoveCounter === null ||
      localCardArray === null ||
      localRFCIndexArray === null
    ) {
      return restartGame();
    }

    cardArray = localCardArray;
    recentlyFlippedCardIndexes = localRFCIndexArray;

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
      window.hs_modal.showModal();
      setVictoryConfetti(true);
      playGameWinSound();
      toast.success("Congratz Amigo - You Won! 🎉");
      setFetchDataOnOpen((prev) => !prev);
    }
  }, [moveCounter, matchCounter]);

  const flipCard = (index) => {
    if (
      !cardState[index].hidden ||
      cardState[index].matched ||
      moveCounter === 2 ||
      isCheating
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
    setMoveCounter(0);
    setTotalMoveCounter(0);
    setMatchCounter(0);
    setVictoryConfetti(false);
    setIsCheating(false);
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center gap-4 md:gap-0">
      <h1 className="my-2 text-center text-xl">Welcome To The Memory Game!</h1>
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
      <div className="game-container m-1 grid grid-cols-7 justify-center gap-2 md:m-5 md:gap-5">
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
      {/* <button
        className="btn btn-primary m-2"
        onClick={() => {
          setMatchCounter(14);
        }}
      >
        Cheat win
      </button> */}
      {isCheating && <CheaterModal restartGame={restartGame} />}
      <Modal
        totalMoveCounter={totalMoveCounter}
        setTotalMoveCounter={setTotalMoveCounter}
        fetchDataOnOpen={fetchDataOnOpen}
      />
      <LeaderBoardModal fetchDataOnOpen={fetchDataOnOpen} />
    </div>
  );
};
export default MemoryGame;
