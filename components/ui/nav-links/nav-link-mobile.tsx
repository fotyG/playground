"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavLinkMobileProps = {
  href: string;
  label: string;
  active: string;
  Icon: JSX.Element;
  activeHref: string;
};

const NavLinkMobile = ({
  href,
  Icon,
  label,
  active,
  activeHref,
}: NavLinkMobileProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={href}
      className="hover:cursor-pointer relative"
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
      </motion.span>
      {active === activeHref && (
        <motion.span
          layoutId="activeSectionSideBar"
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
export default NavLinkMobile;
