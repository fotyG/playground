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
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-5 mx-2">
            <Link
              href={"/"}
              className="relative"
            >
              <span className="absolute -left-6 bottom-0 animate-[bounce_1s_ease-in-out_infinite]">
                ⚽
              </span>
              <p className="text-xl font-bold">Foty</p>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link href={"/memory-game"}>Memory Game</Link>
              </li>
              {/* <li>
                <Link href={"/sketch"}>AI Picasso</Link>
              </li> */}
            </ul>
            <select
              data-choose-theme
              className="select select-bordered select-xs w-fit"
            >
              <option value="dark">🌑 Dark</option>
              <option value="light">💡 Light</option>
              <option value="cupcake">🧁 Cupcake</option>
              <option value="retro">📽 Retro</option>
              <option value="lofi">🎹 Lofi</option>
              <option value="luxury">💰 Luxury</option>
              <option value="pastel">🎨 Pastel</option>
            </select>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-[55%] sm:w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <select
            data-choose-theme
            className="select select-bordered select-xs w-fit mx-4"
          >
            <option value="cupcake">🧁 Cupcake</option>
            <option value="dark">🌑 Dark</option>
            <option value="light">💡 Light</option>
            <option value="retro">📽 Retro</option>
            <option value="lofi">🎹 Lofi</option>
            <option value="luxury">💰 Luxury</option>
            <option value="pastel">🎨 Pastel</option>
          </select>
          <li className="my-4">
            <Link href={"/memory-game"}>Memory Game</Link>
          </li>
          {/* <li>
            <Link href={"/sketch"}>AI Picasso</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
