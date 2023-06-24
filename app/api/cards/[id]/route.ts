import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

const cardsDirectory = path.join(process.cwd(), "public", "images", "pokemon");
// const cardsDirectory = path.join("public", "images", "pokemon");

export async function GET(request: NextRequest, { params }: { params: any }) {
  const id = params.id;
  const imagePath = path.join(cardsDirectory, `${id}.png`);
  // const corrected = "/" + imagePath.replaceAll("\\", "/");

  try {
    const data = await fs.promises.readFile(imagePath);

    return new NextResponse(data, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (err) {
    return NextResponse.error();
  }
}
