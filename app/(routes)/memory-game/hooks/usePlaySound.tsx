// A really cool hook that I made. I want to keep it as a reference for future projects.

// import { RefObject, useEffect } from "react";

// const usePlaySound = (
//   soundRef: RefObject<HTMLAudioElement>,
//   muted: boolean
// ) => {
//   const sound = soundRef.current;
//   const playSound = () => {
//     if (sound) {
//       try {
//         sound.load();
//         sound.play();
//       } catch (error) {
//         return;
//       }
//     }
//   };

//   useEffect(() => {
//     if (sound && muted) {
//       sound.muted = true;
//     } else {
//       if (sound) sound.muted = false;
//     }
//   }, [muted, sound]);

//   return { playSound };
// };

// export default usePlaySound;
