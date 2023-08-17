"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

import MemoryGame from "./components/MemoryGame";

const MemoryGamePage = () => {
  const [victoryConfetti, setVictoryConfetti] = useState(false);

  const { width } = useWindowSize();

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
      <div className="container mt-3 sm:mt-10 px-2 py-2 flex flex-col items-center justify-center gap-2 md:gap-4 relative">
        <MemoryGame setVictoryConfetti={setVictoryConfetti} />
      </div>
    </>
  );
};
export default MemoryGamePage;
