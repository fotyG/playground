import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BlurDotProps = {
  className?: string;
};

const BlurDot = ({ className }: BlurDotProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "bg-primary bg-opacity-30 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] will-change-transform",
          className
        )}
      />
    </>
  );
};
export default BlurDot;
