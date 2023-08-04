import { useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";

import getState from "../helpers/getState";

const useIsCheating = (totalMoveCounter: number, resetTrigger: boolean) => {
  const initialRender = useRef(true);
  const [isCheating, setIsCheating] = useState(false);

  useEffect(() => {
    const {
      localCardState,
      localCardArray,
      localMoveCounter,
      localMatchCounter,
      localRFCIndexArray,
      localTotalMoveCounter,
    } = getState();

    if (
      localCardArray?.hasOwnProperty("cheater") ||
      localCardState?.hasOwnProperty("cheater") ||
      localMoveCounter?.hasOwnProperty("cheater") ||
      localMatchCounter?.hasOwnProperty("cheater") ||
      localRFCIndexArray?.hasOwnProperty("cheater") ||
      localTotalMoveCounter?.hasOwnProperty("cheater")
    ) {
      setIsCheating(true);
    } else {
      setIsCheating(false);
    }
  }, [totalMoveCounter]);

  useEffect(() => {
    const {
      localCardState,
      localCardArray,
      localMoveCounter,
      localMatchCounter,
      localRFCIndexArray,
      localTotalMoveCounter,
    } = getState();
    const y = {
      a: localCardState,
      b: localCardArray,
      c: localMoveCounter,
      d: localMatchCounter,
      e: localRFCIndexArray,
      f: localTotalMoveCounter,
    };
    secureLocalStorage.setItem("y7545", y);
    const yy = secureLocalStorage.getItem("y7545");
    const xx = secureLocalStorage.getItem("x7545");

    if (xx !== null && yy !== null) {
      if (JSON.stringify(yy) !== JSON.stringify(xx)) {
        setIsCheating(true);
      }
    }
    localStorage.removeItem("@secure.j.y7545");
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    setIsCheating(false);
  }, [resetTrigger]);

  return isCheating;
};

export default useIsCheating;
