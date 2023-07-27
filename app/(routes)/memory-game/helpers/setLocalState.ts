import secureLocalStorage from "react-secure-storage";

import { setLocalIntItem, setLocalStringItem } from "./helperFunctions";

const setLocalState = ({ ...args }) => {
  const {
    cardState,
    cardArray,
    moveCounter,
    matchCounter,
    totalMoveCounter,
    recentlyFlippedCardIndexes,
  } = args;
  setLocalStringItem(cardState, "mg_state");
  setLocalStringItem(cardArray, "mg_card_array");
  setLocalIntItem(moveCounter, "mg_move_counter");
  setLocalIntItem(matchCounter, "mg_match_counter");
  setLocalIntItem(totalMoveCounter, "mg_total_move_counter");
  setLocalStringItem(recentlyFlippedCardIndexes, "mg_rf_array");

  const x = {
    a: cardState,
    b: cardArray,
    c: moveCounter,
    d: matchCounter,
    e: recentlyFlippedCardIndexes,
    f: totalMoveCounter,
  };
  secureLocalStorage.setItem("x7545", x);
};

export default setLocalState;
