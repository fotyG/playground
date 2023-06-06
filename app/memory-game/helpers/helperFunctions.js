export const shuffleCards = (arr) => {
  const localArr = [...arr, ...arr];
  for (let i = localArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [localArr[i], localArr[j]] = [localArr[j], localArr[i]];
  }
  return localArr;
};

export const createState = (arr) => {
  let localArr = [];
  for (let i = 0; i < arr.length * 2; i++) {
    localArr.push({ hidden: true, matched: false });
  }
  return localArr;
};

const matchSound = new Audio("/sounds/success.wav");
export const playMatchSound = () => {
  if (!matchSound) return
  matchSound.pause();
  matchSound.currentTime = 0;
  matchSound.play();
}

const gameWinSound = new Audio("/sounds/gameWin.mp3");
export const playGameWinSound = () => {
  if (!gameWinSound) return
  gameWinSound.pause();
  gameWinSound.currentTime = 0;
  gameWinSound.play();
}