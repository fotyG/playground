import AES from "crypto-js/aes";
import { enc, HmacSHA256 } from "crypto-js";

const secret = process.env.NEXT_PUBLIC_SUPER_SECRET;

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

export const playMatchSound = () => {
  const matchSound = new Audio("/sounds/success.wav");
  if (!matchSound) return;
  matchSound.pause();
  matchSound.currentTime = 0;
  matchSound.play();
};

export const playGameWinSound = () => {
  const gameWinSound = new Audio("/sounds/gameWin.mp3");
  if (!gameWinSound) return;
  gameWinSound.pause();
  gameWinSound.currentTime = 0;
  gameWinSound.play();
};

const generateMac = (value) => {
  const mac = HmacSHA256(value, secret);
  return mac.toString(enc.Hex);
};

export const getLocalIntItem = (key) => {
  if (!localStorage.getItem(key)) {
    return null;
  } else {
    const storedValue = localStorage.getItem(key);
    const [storedMac, encryptedValue] = storedValue.split(".");
    const calculatedMac = generateMac(encryptedValue);

    if (storedMac === calculatedMac) {
      return parseInt(AES.decrypt(encryptedValue, secret).toString(enc.Utf8));
    } else {
      console.log("cheater detected");
    }
  }
};

export const getLocalStringItem = (key) => {
  if (!localStorage.getItem(key)) {
    return null;
  } else {
    return JSON.parse(
      AES.decrypt(localStorage.getItem(key), secret).toString(enc.Utf8)
    );
  }
};

export function setLocalIntItem(item, key) {
  const encrypted = AES.encrypt(String(item), secret).toString();
  const mac = generateMac(encrypted);
  const storedValue = `${mac}.${encrypted}`;
  localStorage.setItem(key, storedValue);
}

export function setLocalStringItem(item, key) {
  const encrypted = AES.encrypt(JSON.stringify(item), secret).toString();
  localStorage.setItem(key, encrypted);
}
