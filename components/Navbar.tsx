"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdCatchingPokemon } from "react-icons/md";
import { BsPostageHeart, BsPen } from "react-icons/bs";

import { useUnlockStore } from "@/hooks/useUnlockStore";
import ThemeSelect from "@/components/ui/nav-links/theme-select";
import NavLinkMobile from "@/components/ui/nav-links/nav-link-mobile";
import NavLinkDesktop from "@/components/ui/nav-links/nav-link-desktop";
import DrawerToggleButton from "@/components/ui/nav-links/drawer-toggle-button";
import PingDrawerButton from "@/components/ui/ping-indicators/ping-drawer-button";
import NavLinkMobileUnlockable from "@/components/ui/nav-links/nav-link-mobile-unlockable";
import NavLinkDesktopUnlockable from "@/components/ui/nav-links/nav-link-desktop-unlockable";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();
  const formattedPathname = pathname.split("/")[1];

  const newUnlock = useUnlockStore((s) => s.newUnlock);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    setActive(formattedPathname);
  }, [formattedPathname, isMounted]);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 1 } }}
      className="max-lg:fixed max-lg:top-0 z-[49] drawer bg-base-100 bg-opacity-60 backdrop-blur-[0.2rem] transition-colors duration-500"
    >
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar">
          <div className="flex-none lg:hidden relative">
            {newUnlock && <PingDrawerButton />}
            <DrawerToggleButton />
          </div>
          <div className="mx-2 lg:mx-5 lg:flex-1 px-5">
            <Link
              href={"/"}
              title="Home"
              className="relative"
            >
              <span className="absolute -left-6 bottom-0 animate-[bounce_1s_ease-in-out_infinite]">
                ⚽
              </span>
              <p className="text-xl font-bold">PlayGround</p>
            </Link>
          </div>
          <div className="flex-none hidden lg:flex lg:text-sm lg:items-center">
            <ul className="inline-flex items-center p-2 [&>li>*]:grid [&>li>*]:grid-flow-col [&>li>*]:gap-2 [&>li>*]:py-2 [&>li>*]:px-4 [&>li>*]:transition-[border-radius] [&>li>*]:duration-300 [&>li>*]:mx-1 [&>li>*]:rounded-btn">
              {/* Navbar menu content here */}
              <motion.span
                layoutId="activeSection"
                className="absolute"
              />
              <li>
                <NavLinkDesktop
                  active={active}
                  href="/memory-game"
                  label="Memory Game"
                  activeHref={"memory-game"}
                />
              </li>
              <li>
                <NavLinkDesktop
                  href="/gallery"
                  active={active}
                  activeHref={"gallery"}
                  label="Project Gallery"
                />
              </li>
              <li>
                <NavLinkDesktopUnlockable
                  href="/blog"
                  label="Blog"
                  active={active}
                  activeHref={"blog"}
                />
              </li>
            </ul>
            <ThemeSelect />
          </div>
        </div>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          className="drawer-overlay "
        ></label>

        <ul className="flex flex-col gap-y-2 text-sm [&>li>*]:flex [&>li]:flex [&>li]:flex-col [&>li>*]:grid-flow-col [&>li>*]:auto-cols-[max-content_auto_max-content] [&>li>*]:justify-start [&>li>*]:items-center [&>li>*]:gap-2 [&>li>*]:px-4 [&>li>*]:py-2 [&>li>*]:rounded-btn [&>li>*]:transition-[border-radius] [&>li>*]:duration-300 p-4 w-[55%] sm:w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <ThemeSelect className="mx-4" />
          <motion.span
            layoutId="activeSectionSideBar"
            className="absolute"
          />
          <li className="mt-2 ">
            <NavLinkMobile
              href="/"
              label="Home"
              active={active}
              activeHref={""}
              Icon={<FaHome size={20} />}
            />
          </li>
          <li className="">
            <NavLinkMobile
              active={active}
              href="/memory-game"
              label="Memory Game"
              activeHref={"memory-game"}
              Icon={<MdCatchingPokemon size={20} />}
            />
          </li>
          <li className="">
            <NavLinkMobile
              href="/gallery"
              active={active}
              activeHref={"gallery"}
              label="Project Gallery"
              Icon={<BsPostageHeart size={20} />}
            />
          </li>
          <li className="">
            <NavLinkMobileUnlockable
              href="/blog"
              label="Blog"
              active={active}
              activeHref={"blog"}
              Icon={<BsPen size={20} />}
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
export default Navbar;
