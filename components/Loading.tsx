"use client";

import { GridLoader } from "react-spinners";

import BlurDots from "@/components/ui/blur-dots";

const Loading = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen transition duration-300 relative">
      <BlurDots className="top-[50%] bg-opacity-10" />
      <GridLoader
        size={50}
        color="hsl(var(--bc))"
      />
    </div>
  );
};
export default Loading;
