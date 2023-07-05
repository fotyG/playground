"use client";

import Loading from "@/components/Loading";
import { ReactNode, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div
      data-theme=""
      className="min-h-screen flex flex-col duration-500"
    >
      {children}
    </div>
  );
};
export default ThemeProvider;
