import { create } from "zustand";
import { persist } from "zustand/middleware";

interface muteState {
  soundMuted: boolean;
  toggleSoundMuted: () => void;
}

export const useMute = create<muteState>()(
  persist(
    (set) => ({
      soundMuted: false,
      toggleSoundMuted: () =>
        set((state) => ({ soundMuted: !state.soundMuted })),
    }),
    { name: "mute" }
  )
);
