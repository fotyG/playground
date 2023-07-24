"use client";

import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen transition duration-300">
      <GridLoader
        size={50}
        color="hsl(var(--bc))"
      />
    </div>
  );
};
export default Loading;
