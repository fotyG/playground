"use client";

import { useEffect, useMemo, useState } from "react";

import { useMute } from "@/hooks/useMute";

const usePlaySound = (
  source: string,
  { volume = 1, interrupt = true } = {}
) => {
  const [playFn, setPlayFn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const muted = useMute((state) => state.soundMuted);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sound = useMemo(() => {
    if (isMounted) {
      return new Audio(source);
    }
  }, [source, isMounted]);

  useEffect(() => {
    if (sound && muted) {
      sound.muted = true;
      sound.pause();
      sound.currentTime = 0;
    } else if (sound && !muted) {
      sound.muted = false;
    }
  }, [sound, muted]);

  useEffect(() => {
    if (playFn && !muted) {
      playSound();
    }
    setPlayFn(false);
  }, [playFn, muted]);

  function playSound() {
    if (sound && interrupt) {
      if (volume) {
        sound.volume = volume;
      }
      sound.load();
      sound.play();
    } else if (sound && !interrupt) {
      const tempAudio = new Audio(source);
      if (volume) {
        tempAudio.volume = volume;
      }
      tempAudio.load();
      tempAudio.play();
    }
  }

  function play() {
    setPlayFn(true);
  }

  return play;
};

export default usePlaySound;
