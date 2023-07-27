import { RefObject, useEffect } from "react";

const usePlaySound = (
  soundRef: RefObject<HTMLAudioElement>,
  muted: boolean
) => {
  const sound = soundRef.current;
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
    if (muted && sound) {
      sound.muted = true;
    } else {
      if (sound) sound.muted = false;
    }
  }, [muted]);

  return { playSound };
};

export default usePlaySound;
