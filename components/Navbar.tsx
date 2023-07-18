"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { BsPostageHeart, BsPen } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

import { useUnlockStore } from "@/hooks/useUnlockStore";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [blogUnlocked, setBlogUnlocked] = useState(false);

  const router = useRouter();
  const fullPathname = usePathname();
  const formattedPathname = fullPathname.split("/")[1];

  const unlockStore = useUnlockStore();
  const {
    mg,
    ecommerceStore,
    ecommerceCMS,
    utilityMeters,
    rentingApp,
    musicApp,
    newUnlock,
    resetNewUnlock,
  } = unlockStore;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let localArray = [
      mg,
      ecommerceStore,
      ecommerceCMS,
      utilityMeters,
      rentingApp,
      musicApp,
    ];
    const filtered = localArray.filter((item) => item === true).length;
    if (filtered <= 0) return;
    setBlogUnlocked(true);
  }, [mg, ecommerceStore, ecommerceCMS, utilityMeters, rentingApp, musicApp]);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, [isMounted]);

  useEffect(() => {
    setActive(formattedPathname);
  }, [formattedPathname]);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-lg:fixed max-lg:top-0 z-[49] drawer bg-base-100"
    >
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
              title="Home"
            >
              <span className="absolute -left-6 bottom-0 animate-[bounce_1s_ease-in-out_infinite]">
                ⚽
              </span>
              <p className="text-xl font-bold">PlayGround</p>
            </Link>
          </div>
          <div className="flex-none hidden lg:flex lg:text-sm lg:items-center">
            <ul className="inline-flex items-center p-2 [&>li>*]:grid [&>li>*]:grid-flow-col [&>li>*]:gap-2 [&>li>*]:py-2 [&>li>*]:px-4 [&>li>*]:transition-[border-radius] [&>li>*]:duration-500 [&>li>*]:mx-1 [&>li>*]:rounded-btn">
              {/* Navbar menu content here */}
              <li>
                <Link
                  className={
                    active === "memory-game"
                      ? "bg-neutral text-neutral-content"
                      : "hover:bg-base-content/10 hover:cursor-pointer active:opacity-75"
                  }
                  href={"/memory-game"}
                >
                  Memory Game
                </Link>
              </li>
              <li>
                <Link
                  className={
                    active === "gallery"
                      ? "bg-neutral text-neutral-content"
                      : "hover:bg-base-content/10 hover:cursor-pointer active:opacity-75"
                  }
                  href={"/gallery"}
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    if (!blogUnlocked) return;
                    resetNewUnlock();
                  }}
                  onAuxClick={() => {
                    if (!blogUnlocked) return;
                    resetNewUnlock();
                  }}
                  href={blogUnlocked ? "/blog" : "#"}
                  className={
                    active === "blog"
                      ? "bg-neutral text-neutral-content"
                      : "relative hover:bg-base-content/10 active:opacity-75 " +
                        (blogUnlocked
                          ? "hover:cursor-pointer"
                          : "hover:cursor-not-allowed")
                  }
                >
                  {newUnlock && (
                    <span className="absolute flex h-3 w-3 -right-1 -top-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                  )}
                  {!blogUnlocked && <span>🔒</span>}Blog
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
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay "
        ></label>

        <ul className="flex flex-col text-sm [&>li>*]:flex [&>li]:flex [&>li]:flex-col [&>li>*]:grid-flow-col [&>li>*]:auto-cols-[max-content_auto_max-content] [&>li>*]:justify-start [&>li>*]:items-center [&>li>*]:gap-2 [&>li>*]:px-4 [&>li>*]:py-2 [&>li>*]:rounded-btn [&>li>*]:transition-[border-radius] [&>li>*]:duration-500 p-4 w-[55%] sm:w-80 h-full bg-base-200">
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
              className={
                active === ""
                  ? "bg-neutral text-neutral-content"
                  : "hover:bg-base-content/10 hover:cursor-pointer active:opacity-75"
              }
              href={"/"}
            >
              <FaHome size={20} /> Home
            </Link>
          </li>
          <li className="mb-1">
            <Link
              className={
                active === "memory-game"
                  ? "bg-neutral text-neutral-content"
                  : "hover:bg-base-content/10 hover:cursor-pointer active:opacity-75"
              }
              href={"/memory-game"}
            >
              <MdCatchingPokemon size={20} />
              Memory Game
            </Link>
          </li>
          <li className="my-1">
            <Link
              className={
                active === "gallery"
                  ? "bg-neutral text-neutral-content"
                  : "hover:bg-base-content/10 hover:cursor-pointer active:opacity-75"
              }
              href={"/gallery"}
            >
              <BsPostageHeart size={20} />
              Project Gallery
            </Link>
          </li>
          <li className="my-1">
            <Link
              onClick={() => {
                if (!blogUnlocked) return;
                resetNewUnlock();
              }}
              onAuxClick={() => {
                if (!blogUnlocked) return;
                resetNewUnlock();
              }}
              href={blogUnlocked ? "/blog" : "#"}
              className={
                active === "blog"
                  ? "bg-neutral text-neutral-content"
                  : "relative hover:bg-base-content/10 active:opacity-75 " +
                    (blogUnlocked
                      ? "hover:cursor-pointer"
                      : "hover:cursor-not-allowed")
              }
            >
              {newUnlock && (
                <span className="absolute flex h-3 w-3 left-0 top-1/2 -translate-y-1/2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
              )}
              <BsPen size={20} />
              Blog{!blogUnlocked && <span>🔒</span>}
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
export default Navbar;
