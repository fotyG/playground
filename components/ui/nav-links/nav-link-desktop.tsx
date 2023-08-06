"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkDesktopProps = {
  href: string;
  label: string;
  active: string;
  activeHref: string;
};

const NavLinkDesktop = ({
  href,
  label,
  active,
  activeHref,
}: NavLinkDesktopProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      className="hover:cursor-pointer relative"
      href={href}
    >
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
      </motion.span>
      {active === activeHref && (
        <motion.span
          layoutId="activeSection"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
          className="bg-neutral absolute inset-0 -z-10 rounded-[inherit]"
        />
      )}
    </MotionLink>
  );
};
export default NavLinkDesktop;
