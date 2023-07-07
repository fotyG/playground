"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { usePathname, useRouter } from "next/navigation";
import { useUnlockStore } from "@/hooks/useUnlockStore";

const Navbar = () => {
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const mg = useUnlockStore((state) => state.mg);
  const newUnlock = useUnlockStore((state) => state.newUnlock);
  const resetNewUnlock = useUnlockStore((state) => state.resetNewUnlock);
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden relative">
            {newUnlock && (
              <span className="absolute flex h-3 w-3 top-1 right-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            )}
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
            <ul className="menu menu-horizontal [&>li]:mx-1">
              {/* Navbar menu content here */}
              <li className="focus">
                <button
                  onClick={() => {
                    resetNewUnlock();
                    router.push("/blog");
                  }}
                  disabled={!mg}
                  className={
                    "relative disabled:cursor-not-allowed " +
                    (active === "/blog" ? "active" : "")
                  }
                >
                  {newUnlock && (
                    <span className="absolute flex h-3 w-3 -right-1 -top-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                  )}
                  {!mg && <span>🔒</span>}Secrets
                </button>
              </li>
              <li className="focus">
                <Link
                  className={active === "/store" ? "active" : ""}
                  href={"/store"}
                >
                  Store
                </Link>
              </li>
              <li className="focus">
                <Link
                  className={active === "/memory-game" ? "active" : ""}
                  href={"/memory-game"}
                >
                  Memory Game
                </Link>
              </li>
            </ul>
            <select
              data-choose-theme
              className="select select-bordered select-xs w-fit"
            >
              <option value="night">🌑 Dark</option>
              <option value="emerald">💡 Light</option>
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
            <option value="night">🌑 Dark</option>
            <option value="emerald">💡 Light</option>
            <option value="cupcake">🧁 Cupcake</option>
            <option value="retro">📽 Retro</option>
            <option value="lofi">🎹 Lofi</option>
            <option value="luxury">💰 Luxury</option>
            <option value="pastel">🎨 Pastel</option>
          </select>
          <li className="mt-2 mb-1">
            <Link
              className={active === "/memory-game" ? "active" : ""}
              href={"/memory-game"}
            >
              Memory Game
            </Link>
          </li>
          <li className="my-1">
            <Link
              className={active === "/store" ? "active" : ""}
              href={"/store"}
            >
              Store
            </Link>
          </li>
          <li className="my-1">
            <button
              onClick={() => {
                resetNewUnlock();
                router.push("/blog");
              }}
              disabled={!mg}
              className={
                "relative disabled:cursor-not-allowed " +
                (active === "/blog" ? "active" : "")
              }
            >
              {newUnlock && (
                <span className="absolute flex h-3 w-3 left-0 top-1/2 -translate-y-1/2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
              )}
              Secrets{!mg && <span>🔒</span>}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
