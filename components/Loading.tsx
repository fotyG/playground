"use client";

import { GridLoader } from "react-spinners";
import { useEffect, useState } from "react";

import BlurDots from "@/components/ui/blur-dots";

const Loading = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="container flex justify-center items-center min-h-screen transition-all duration-300 relative">
      <BlurDots className="top-[50%] bg-opacity-10" />
      <GridLoader
        size={50}
        color="hsl(var(--bc))"
      />
    </div>
  );
};
export default Loading;
