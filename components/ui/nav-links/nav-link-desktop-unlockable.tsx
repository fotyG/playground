"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useUnlockStore } from "@/hooks/useUnlockStore";
import { useBlogUnlocked } from "@/hooks/useBlogUnlocked";
import PingDesktopNavbar from "../ping-indicators/ping-desktop-navbar";

type NavLinkDesktopUnlockableProps = {
  href: string;
  label: string;
  active: string;
  activeHref: string;
};

const NavLinkDesktopUnlockable = ({
  href,
  label,
  active,
  activeHref,
}: NavLinkDesktopUnlockableProps) => {
  const MotionLink = motion(Link);
  const blogUnlocked = useBlogUnlocked();
  const { newUnlock, resetNewUnlock } = useUnlockStore();

  return (
    <MotionLink
      onClick={() => {
        if (!blogUnlocked) return;
        resetNewUnlock();
      }}
      onAuxClick={() => {
        if (!blogUnlocked) return;
        resetNewUnlock();
      }}
      href={blogUnlocked ? href : "#"}
      className={cn(
        "hover:cursor-pointer relative",
        !blogUnlocked && "hover:cursor-not-allowed"
      )}
    >
      {newUnlock && <PingDesktopNavbar />}
      <motion.span
        className="transition-colors duration-300"
        initial={{ color: "hsl(var(--bc))" }}
        animate={
          active === activeHref && {
            color: "hsl(var(--nc))",
          }
        }
      >
        {!blogUnlocked && <span>🔒 </span>}
        {label}
      </motion.span>
      {active === activeHref && (
        <motion.span
          layoutId="activeSection"
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 380,
          }}
          className="bg-neutral absolute inset-0 -z-10 rounded-[inherit]"
        />
      )}
    </MotionLink>
  );
};
export default NavLinkDesktopUnlockable;
