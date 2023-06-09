import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCreditStore = create(
  persist(
    (set, get) => ({
      credits: 0,
      addCredits: () => set({ credits: get().credits + 45 }),
      spendCredits: (amount) => set({ credits: get().credits - amount }),
      resetCredits: () => set({credits: 0})
    }),
    {
      name: "treasury-storage", // unique name
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
