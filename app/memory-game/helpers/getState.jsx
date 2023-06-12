import {
  createState,
  getLocalIntItem,
  getLocalStringItem,
} from "./helperFunctions.jsx";
import pokemonCardArray from "../libs/pokemonCardData.js";

const getState = () => {
  const initialState = createState(pokemonCardArray);
  let localCardState = null;
  let localMoveCounter = null;
  let localMatchCounter = null;
  let localTotalMoveCounter = null;

  if (typeof window !== "undefined") {
    localCardState = getLocalStringItem("mg_state");
    localMoveCounter = getLocalIntItem("mg_move_counter");
    localMatchCounter = getLocalIntItem("mg_match_counter");
    localTotalMoveCounter = getLocalIntItem("mg_total_move_counter");
  }

  return [
    initialState,
    localCardState,
    localMoveCounter,
    localMatchCounter,
    localTotalMoveCounter,
  ];
};

export default getState;
