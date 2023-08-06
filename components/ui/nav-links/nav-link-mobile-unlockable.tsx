"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useUnlockStore } from "@/hooks/useUnlockStore";
import { useBlogUnlocked } from "@/hooks/useBlogUnlocked";
import PingMobileDrawer from "../ping-indicators/ping-mobile-drawer";

type NavLinkMobileUnlockableProps = {
  href: string;
  label: string;
  active: string;
  Icon: JSX.Element;
  activeHref: string;
};

const NavLinkMobileUnlockable = ({
  href,
  Icon,
  label,
  active,
  activeHref,
}: NavLinkMobileUnlockableProps) => {
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
      {newUnlock && <PingMobileDrawer />}
      <motion.span
        className="transition-colors duration-300"
        initial={{ color: "hsl(var(--bc))" }}
        animate={
          active === activeHref && {
            color: "hsl(var(--nc))",
          }
        }
      >
        {Icon}
      </motion.span>
      <motion.span
        className="transition-colors duration-300"
        initial={{ color: "hsl(var(--bc))" }}
        animate={
          active === activeHref && {
            color: "hsl(var(--nc))",
          }
        }
      >
        {label}
        {!blogUnlocked && <span> 🔒</span>}
      </motion.span>

      {active === activeHref && (
        <motion.span
          layoutId="activeSectionSideBar"
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
export default NavLinkMobileUnlockable;
