import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface gameCompleteState {
  gameComplete: boolean;
  scoreSubmitted: boolean;
  submitScore: () => void;
  completeGame: () => void;
  resetGameComplete: () => void;
}

export const useGameCompleteStore = create<gameCompleteState>()(
  devtools(
    persist(
      (set) => ({
        gameComplete: false,
        scoreSubmitted: false,
        completeGame: () => set(() => ({ gameComplete: true })),
        submitScore: () => set(() => ({ scoreSubmitted: true })),
        resetGameComplete: () =>
          set(() => ({ gameComplete: false, scoreSubmitted: false })),
      }),
      {
        name: "gameComplete",
      }
    )
  )
);
