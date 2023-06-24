import { NextResponse } from "next/server";
import pokemonCardArray from "../../memory-game/libs/pokemonCardData";

const cardMap = {
  1: "api/cards/belsprout",
  2: "api/cards/bulbasaur",
  3: "api/cards/caterpy",
  4: "api/cards/charmander",
  5: "api/cards/dratini",
  6: "api/cards/eevee",
  7: "api/cards/golbat",
  8: "api/cards/jigglypuff",
  9: "api/cards/meowth",
  10: "api/cards/pikachu",
  11: "api/cards/psyduck",
  12: "api/cards/snorlax",
  13: "api/cards/squirtle",
  14: "api/cards/venonat",
};

export async function GET() {
  return NextResponse.json(cardMap);
}
