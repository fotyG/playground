import AES from "crypto-js/aes";
import { enc, HmacSHA256 } from "crypto-js";
import { CardState } from "@/types";

const secret: string = process.env.NEXT_PUBLIC_SUPER_SECRET || "";

export const shuffleCards = (arr: string[]) => {
  const localArr = [...arr, ...arr];
  for (let i = localArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [localArr[i], localArr[j]] = [localArr[j], localArr[i]];
  }
  return localArr;
};

export const createState = (arr: string[]) => {
  let localArr = [];
  for (let i = 0; i < arr.length * 2; i++) {
    localArr.push({ hidden: true, matched: false });
  }
  return localArr;
};

export const playSound = (sound: HTMLAudioElement) => {
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play();
};

const generateMac = (value: string) => {
  const mac = HmacSHA256(value, secret);
  return mac.toString(enc.Hex);
};

export const getLocalIntItem = (key: string) => {
  if (!localStorage.getItem(key)) {
    return null;
  } else {
    const storedValue: string | null = localStorage.getItem(key);
    const [storedMac, encryptedValue] = storedValue!.split(".");
    const calculatedMac = generateMac(encryptedValue);

    if (storedMac === calculatedMac) {
      return parseInt(AES.decrypt(encryptedValue, secret).toString(enc.Utf8));
    } else {
      return { cheater: true };
    }
  }
};

export const getLocalStringItem = (key: string) => {
  if (!localStorage.getItem(key)) {
    return null;
  } else {
    const storedValue: string | null = localStorage.getItem(key);
    const [storedMac, encryptedValue] = storedValue!.split(".");
    const calculatedMac = generateMac(encryptedValue);
    if (storedMac === calculatedMac) {
      return JSON.parse(AES.decrypt(encryptedValue, secret).toString(enc.Utf8));
    } else {
      return { cheater: true };
    }
  }
};

export function setLocalIntItem(item: number, key: string) {
  const encrypted = AES.encrypt(String(item), secret).toString();
  const mac = generateMac(encrypted);
  const storedValue = `${mac}.${encrypted}`;
  localStorage.setItem(key, storedValue);
}

export function setLocalStringItem(
  item: CardState[] | string[] | number[],
  key: string
) {
  const encrypted = AES.encrypt(JSON.stringify(item), secret).toString();
  const mac = generateMac(encrypted);
  const storedValue = `${mac}.${encrypted}`;
  localStorage.setItem(key, storedValue);
}
