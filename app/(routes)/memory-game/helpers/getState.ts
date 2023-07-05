import { getLocalIntItem, getLocalStringItem } from "./helperFunctions";

const getState = () => {
  const localCardState = getLocalStringItem("mg_state");
  const localMoveCounter = getLocalIntItem("mg_move_counter");
  const localMatchCounter = getLocalIntItem("mg_match_counter");
  const localTotalMoveCounter = getLocalIntItem("mg_total_move_counter");
  const localCardArray = getLocalStringItem("mg_card_array");
  const localRFCIndexArray = getLocalStringItem("mg_rf_array");

  return [
    localCardState,
    localMoveCounter,
    localMatchCounter,
    localTotalMoveCounter,
    localCardArray,
    localRFCIndexArray,
  ];
};

export default getState;
