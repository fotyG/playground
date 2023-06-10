import { createState } from "../helpers/helperFunctions";
import pokemonCardArray from "../libs/pokemonCardData";
import AES from "crypto-js/aes";
import { enc } from "crypto-js";

const useGetState = () => {
  const secret = process.env.NEXT_PUBLIC_SUPER_SECRET;

  const localMoveCounter = localStorage.getItem("mg_move_counter")
    ? parseInt(
        AES.decrypt(localStorage.getItem("mg_move_counter"), secret).toString(
          enc.Utf8
        )
      )
    : null;

  const initialState = createState(pokemonCardArray);

  const localCardState = localStorage.getItem("mg_state")
    ? JSON.parse(
        AES.decrypt(localStorage.getItem("mg_state"), secret).toString(enc.Utf8)
      )
    : null;

  const localTotalMoveCounter = localStorage.getItem("mg_total_move_counter")
    ? parseInt(
        AES.decrypt(
          localStorage.getItem("mg_total_move_counter"),
          secret
        ).toString(enc.Utf8)
      )
    : null;

  const localMatchCounter = localStorage.getItem("mg_match_counter")
    ? parseInt(
        AES.decrypt(localStorage.getItem("mg_match_counter"), secret).toString(
          enc.Utf8
        )
      )
    : null;

  return [
    localMoveCounter,
    initialState,
    localCardState,
    localTotalMoveCounter,
    localMatchCounter,
  ];
};

export default useGetState;
