import { getLocalIntItem, getLocalStringItem } from "./helperFunctions";

const getState = () => {
  const localCardState = getLocalStringItem("mg_state");
  const localCardArray = getLocalStringItem("mg_card_array");
  const localMoveCounter = getLocalIntItem("mg_move_counter");
  const localRFCIndexArray = getLocalStringItem("mg_rf_array");
  const localMatchCounter = getLocalIntItem("mg_match_counter");
  const localTotalMoveCounter = getLocalIntItem("mg_total_move_counter");

  return {
    localCardState,
    localCardArray,
    localMoveCounter,
    localMatchCounter,
    localRFCIndexArray,
    localTotalMoveCounter,
  };
};

export default getState;
