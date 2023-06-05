"use client";

import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Navbar = () => {

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <nav className="flex justify-between items-center h-[100px] mx-10 scroll-smooth">
      <Link
        href={"/"}
        className="relative"
      >
        <span className="absolute -left-6 bottom-0 animate-[bounce_1s_ease-in-out_infinite]">
          ⚽
        </span>
        <p className="text-xl font-bold">Foty</p>
      </Link>
      <Link href={"/memory-game"}>
        Memory Game
      </Link>
      <select
        data-choose-theme
        className="select select-bordered select-xs w-fit"
      >
        <option value="cupcake">🧁 Cupcake</option>
        <option value="dark">🌑 Dark</option>
        <option value="light">💡 Light</option>
        <option value="retro">📽 Retro</option>
        <option value="lofi">🎹 Lofi</option>
        <option value="luxury">💰 Luxury</option>
        <option value="pastel">🎨 Pastel</option>
      </select>
    </nav>
  );

};
export default Navbar;
