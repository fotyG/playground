"use client";

import { useState, useEffect } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";

import { useMute } from "@/hooks/useMute";

const SoundMute = () => {
  const [isMounted, setIsMounted] = useState(false);

  const soundMuted = useMute((state) => state.soundMuted);
  const toggleSoundMuted = useMute((state) => state.toggleSoundMuted);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      {soundMuted ? (
        <TbMusicOff
          onClick={toggleSoundMuted}
          className="absolute -left-8 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:text-secondary"
        />
      ) : (
        <TbMusic
          onClick={toggleSoundMuted}
          className="absolute -left-8 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:text-secondary"
        />
      )}
    </>
  );
};
export default SoundMute;
