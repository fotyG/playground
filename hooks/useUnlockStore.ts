import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UnlockState {
  mg: boolean;
  ecommerceStore: boolean;
  ecommerceCMS: boolean;
  utilityMeters: boolean;
  rentingApp: boolean;
  musicApp: boolean;
  newUnlock: boolean;
  unlockMg: () => void;
  unlockEcommerceStore: () => void;
  unlockEcommerceCMS: () => void;
  unlockUtilityMeters: () => void;
  unlockRentingApp: () => void;
  unlockMusicApp: () => void;
  resetNewUnlock: () => void;
}

export const useUnlockStore = create<UnlockState>()(
  devtools(
    persist(
      (set) => ({
        mg: false,
        ecommerceStore: false,
        ecommerceCMS: false,
        utilityMeters: false,
        rentingApp: false,
        musicApp: false,
        newUnlock: false,
        unlockMg: () =>
          set((state) => {
            if (!state.mg) {
              return { mg: true, newUnlock: true };
            }
            return { mg: true };
          }),
        unlockEcommerceStore: () =>
          set((state) => {
            if (!state.ecommerceStore) {
              return { ecommerceStore: true, newUnlock: true };
            }
            return { ecommerceStore: true };
          }),
        unlockEcommerceCMS: () =>
          set((state) => {
            if (!state.ecommerceCMS) {
              return { ecommerceCMS: true, newUnlock: true };
            }
            return { ecommerceCMS: true };
          }),
        unlockUtilityMeters: () =>
          set((state) => {
            if (!state.utilityMeters) {
              return { utilityMeters: true, newUnlock: true };
            }
            return { utilityMeters: true };
          }),
        unlockRentingApp: () =>
          set((state) => {
            if (!state.rentingApp) {
              return { rentingApp: true, newUnlock: true };
            }
            return { rentingApp: true };
          }),
        unlockMusicApp: () =>
          set((state) => {
            if (!state.musicApp) {
              return { musicApp: true, newUnlock: true };
            }
            return { musicApp: true };
          }),
        resetNewUnlock: () => set((state) => ({ newUnlock: false })),
      }),
      {
        name: "unlocks",
      }
    )
  )
);
