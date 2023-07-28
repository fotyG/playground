import { useMute } from "@/hooks/useMute";

interface GameAudioProps {
  matchSound: React.RefObject<HTMLAudioElement>;
  gameWinSound: React.RefObject<HTMLAudioElement>;
}

const GameAudio = ({ matchSound, gameWinSound }: GameAudioProps) => {
  const soundMuted = useMute((state) => state.soundMuted);
  return (
    <>
      <audio
        ref={matchSound}
        muted={soundMuted}
      >
        <source src="/sounds/success.wav" />
      </audio>
      <audio
        ref={gameWinSound}
        muted={soundMuted}
      >
        <source src="/sounds/gameWin.mp3" />
      </audio>
    </>
  );
};
export default GameAudio;
