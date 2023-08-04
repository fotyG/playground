"use client";

import { RefObject, useEffect } from "react";

import { useMute } from "@/hooks/useMute";

const usePlaySound = (soundRef: RefObject<HTMLAudioElement>) => {
  const sound = soundRef.current;
  const muted = useMute((state) => state.soundMuted);

  const playSound = () => {
    if (sound) {
      try {
        sound.load();
        sound.play();
      } catch (error) {
        return;
      }
    }
  };

  useEffect(() => {
    if (sound && muted) {
      sound.muted = true;
    } else {
      if (sound) sound.muted = false;
    }
  }, [muted, sound]);

  return { playSound };
};

export default usePlaySound;
