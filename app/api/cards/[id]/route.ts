import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { decodeNumber } from "@/app/(routes)/memory-game/helpers/helperFunctions";

const cardMap: any = {
  "1": "belsprout",
  "2": "bulbasaur",
  "3": "caterpy",
  "4": "charmander",
  "5": "dratini",
  "6": "eevee",
  "7": "golbat",
  "8": "jigglypuff",
  "9": "meowth",
  "10": "pikachu",
  "11": "psyduck",
  "12": "snorlax",
  "13": "squirtle",
  "14": "venonat",
};

const cardsDirectory = path.join(process.cwd(), "public", "images", "pokemon");

export async function GET(request: NextRequest, { params }: { params: any }) {
  try {
    const id = decodeNumber(params.id);
    const imagePath = path.join(cardsDirectory, `${cardMap[id!]}.png`);
    const data = await fs.promises.readFile(imagePath);
    const imageBase64 = Buffer.from(data).toString("base64");

    return new NextResponse(imageBase64, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (err) {
    return NextResponse.error();
  }
}
