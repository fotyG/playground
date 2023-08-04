import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UnlockState {
  mg: boolean;
  aiSaas: boolean;
  musicApp: boolean;
  newUnlock: boolean;
  rentingApp: boolean;
  ecommerceCMS: boolean;
  utilityMeters: boolean;
  ecommerceStore: boolean;
  unlockMg: () => void;
  unlockAISaas: () => void;
  unlockMusicApp: () => void;
  resetNewUnlock: () => void;
  unlockRentingApp: () => void;
  unlockEcommerceCMS: () => void;
  unlockUtilityMeters: () => void;
  unlockEcommerceStore: () => void;
}

export const useUnlockStore = create<UnlockState>()(
  devtools(
    persist(
      (set) => ({
        mg: false,
        aiSaas: false,
        musicApp: false,
        newUnlock: false,
        rentingApp: false,
        ecommerceCMS: false,
        utilityMeters: false,
        ecommerceStore: false,
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
        unlockAISaas: () =>
          set((state) => {
            if (!state.aiSaas) {
              return { aiSaas: true, newUnlock: true };
            }
            return { aiSaas: true };
          }),
        resetNewUnlock: () => set((state) => ({ newUnlock: false })),
      }),
      {
        name: "unlocks",
      }
    )
  )
);
