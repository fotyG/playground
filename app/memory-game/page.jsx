"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Confetti from "react-confetti";
import AES from "crypto-js/aes";
import { enc } from "crypto-js";

import pokemonCardArray from "./libs/pokemonCardData";
import {
  createState,
  shuffleCards,
  playMatchSound,
  playGameWinSound,
} from "./helpers/helperFunctions";
import Card from "./components/Card";
import Modal from "./components/Modal";
import LeaderBoardModal from "./components/LeaderBoardModal";

const secret = process.env.NEXT_PUBLIC_SUPER_SECRET;
const storedEncryptedCardState = localStorage.getItem("mg_state");
const decryptedCardState = AES.decrypt(
  storedEncryptedCardState,
  secret
).toString(enc.Utf8);
const localCardState = JSON.parse(decryptedCardState);

const storedEncryptedCardArray = localStorage.getItem("mg_card_array");
let decryptedCardArray;
let localCardArray;
if (storedEncryptedCardArray) {
  decryptedCardArray = AES.decrypt(
  storedEncryptedCardArray,
  secret
).toString(enc.Utf8)
}
if (decryptedCardArray) {
  localCardArray = JSON.parse(decryptedCardArray);
}

// const storedEncryptedTotalMoveCounter = localStorage.getItem(
//   "mg_total_move_counter"
// );
// const decryptedTotalMoveCounter = AES.decrypt(
//   storedEncryptedTotalMoveCounter,
//   secret
// ).toString(enc.Utf8);
// const localTotalMoveCounter = parseInt(decryptedTotalMoveCounter);

const localRFCIndexArray = JSON.parse(localStorage.getItem("mg_rf_array"));
const localMatchCounter = parseInt(localStorage.getItem("mg_match_counter"));
const localMoveCounter = parseInt(localStorage.getItem("mg_move_counter"));

const initialState = createState(pokemonCardArray);
let cardArray = localCardArray || shuffleCards(pokemonCardArray);
let recentlyFlippedCardIndexes = localRFCIndexArray || [];

const MemoryGame = () => {
  const [cardState, setCardState] = useState(localCardState || initialState);
  const [moveCounter, setMoveCounter] = useState(localMoveCounter || 0);
  const [matchCounter, setMatchCounter] = useState(localMatchCounter || 0);
  const [totalMoveCounter, setTotalMoveCounter] = useState(0
    // localTotalMoveCounter || 0
  );
  const [victoryConfetti, setVictoryConfetti] = useState(false);
  const [fetchDataOnOpen, setFetchDataOnOpen] = useState(false);

  useEffect(() => {
    const encryptedCardState = AES.encrypt(
      JSON.stringify(cardState),
      secret
    ).toString();
    localStorage.setItem("mg_state", encryptedCardState);

    const encryptedCardArray = AES.encrypt(
      JSON.stringify(cardArray),
      secret
    ).toString();
    localStorage.setItem("mg_card_array", encryptedCardArray);

    // const encryptedTotalMoveCounter = AES.encrypt(
    //   totalMoveCounter,
    //   secret
    // ).toString();
    localStorage.setItem("mg_total_move_counter", totalMoveCounter);

    localStorage.setItem("mg_match_counter", matchCounter);
    localStorage.setItem("mg_move_counter", moveCounter);
    localStorage.setItem(
      "mg_rf_array",
      JSON.stringify(recentlyFlippedCardIndexes)
    );
  }, [moveCounter]);

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

  const openModal = () => {
    setFetchDataOnOpen((prev) => !prev);
    window.lb_modal.showModal();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 md:gap-0 my-4">
      <h1 className="text-center text-xl my-2">Welcome To The Memory Game!</h1>
      <p className="text-xl font-bold">Total Moves: {totalMoveCounter}</p>
      {victoryConfetti && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
        />
      )}
      <div className="game-container grid grid-cols-7 gap-2 md:gap-5 justify-center m-1 md:m-5">
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
      <div className="flex justify-center gap-2 mt-3">
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
