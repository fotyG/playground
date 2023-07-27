import Replicate from "replicate";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt, image } = await request.json();
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
  });

  if (typeof prompt !== "string" || typeof image !== "string") {
    return NextResponse.json({ msg: "Something went wrong" });
  }

  const output = (await replicate.run(
    "batouresearch/photorealistic-fx-controlnet:667615bff074702df10cd0ac9d316cd1b68b0253b01b313306dc9a556ed36920",
    {
      input: {
        image,
        scale: 7,
        prompt,
        structure: "scribble",
        image_resolution: "512",
        n_prompt:
          "(semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck",
      },
    }
  )) as [string, string];

  return NextResponse.json(output[1]);
}
