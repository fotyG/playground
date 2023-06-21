"use client";

import { useQuery } from "convex/react";

const CollectionPage = () => {
  const getSketches = useQuery("sketches:getSketches");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      {getSketches?.map((sketch) => (
        <div key={sketch._id}>{sketch.prompt}</div>
      ))}
    </main>
  );
};

export default CollectionPage;
