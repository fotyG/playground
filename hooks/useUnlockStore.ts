import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UnlockState {
  mg: boolean;
  newUnlock: boolean;
  unlockMg: () => void;
  resetNewUnlock: () => void;
}

export const useUnlockStore = create<UnlockState>()(
  devtools(
    persist(
      (set) => ({
        mg: false,
        newUnlock: false,
        unlockMg: () =>
          set((state) => {
            if (!state.mg) {
              return { mg: true, newUnlock: true };
            }
            return { mg: true };
          }),
        resetNewUnlock: () => set((state) => ({ newUnlock: false })),
      }),
      {
        name: "unlocks",
      }
    )
  )
);
