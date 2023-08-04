import { useEffect } from "react";

import setLocalState from "../helpers/setLocalState";

export const useUpdateLocal = ({
  cardArray,
  cardState,
  isMounted,
  moveCounter,
  matchCounter,
  resetTrigger,
  totalMoveCounter,
  recentlyFlippedCardIndexes,
}: any) => {
  useEffect(() => {
    if (isMounted && cardArray?.length > 0) {
      setLocalState({
        cardState,
        cardArray,
        moveCounter,
        matchCounter,
        totalMoveCounter,
        recentlyFlippedCardIndexes,
      });
    }
  }, [
    cardState,
    isMounted,
    moveCounter,
    matchCounter,
    resetTrigger,
    totalMoveCounter,
  ]);
};
