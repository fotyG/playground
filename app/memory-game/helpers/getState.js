import {
  createState,
  getLocalIntItem,
  getLocalStringItem,
} from "./helperFunctions";
import pokemonCardArray from "../libs/pokemonCardData";

const getState = () => {
  const initialState = createState(pokemonCardArray);
  const localCardState = getLocalStringItem("mg_state");
  const localMoveCounter = getLocalIntItem("mg_move_counter");
  const localMatchCounter = getLocalIntItem("mg_match_counter");
  const localTotalMoveCounter = getLocalIntItem("mg_total_move_counter");

  return [
    initialState,
    localCardState,
    localMoveCounter,
    localMatchCounter,
    localTotalMoveCounter,
  ];
};

export default getState;
