import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request: Request) {
  const { prompt, image } = await request.json();
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
  });

  if (typeof prompt !== "string" || typeof image !== "string") {
    return NextResponse.json({ msg: "Something went wrong" });
  }

  const output = (await replicate.run(
    "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
    {
      input: {
        image,
        scale: 7,
        prompt,
        image_resolution: "512",
        n_prompt:
          "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
      },
    }
  )) as [string, string];

  return NextResponse.json(output[1]);
}
