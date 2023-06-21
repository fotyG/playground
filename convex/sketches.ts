import { Id } from "./_generated/dataModel";
import { internalMutation, mutation, query } from "./_generated/server";

export const saveSketch = mutation(
  async (
    { db, scheduler },
    { prompt, image }: { prompt: string; image: string }
  ) => {
    const sketchId = await db.insert("sketches", {
      prompt,
    });

    await scheduler.runAfter<any>(0, "generate:generate", {
      sketchId,
      prompt,
      image,
    });

    return {
      message: "success",
    };
  }
);

export const updateSketchResult = internalMutation(
  async (
    { db },
    { sketchId, result }: { sketchId: Id<string>; result: string }
  ) => {
    await db.patch(sketchId, { result });
  }
);

export const getSketches = query(async ({ db }) => {
  const sketches = await db.query("sketches").collect();
  return sketches;
});
