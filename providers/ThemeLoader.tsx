"use client";

import Loading from "@/components/Loading";
import { ReactNode, useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return <div className="min-h-screen flex flex-col">{children}</div>;
};
export default ThemeProvider;
