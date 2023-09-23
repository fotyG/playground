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
    if (cardArray?.length > 0 && isMounted) {
      setLocalState({
        cardArray,
        cardState,
        moveCounter,
        matchCounter,
        totalMoveCounter,
        recentlyFlippedCardIndexes,
      });
    }
  }, [cardState, resetTrigger]);
};
