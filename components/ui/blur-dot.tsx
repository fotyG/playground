import { cn } from "@/lib/utils";

type BlurDotProps = {
  className?: string;
};

const BlurDot = ({ className }: BlurDotProps) => {
  return (
    <>
      <div
        className={cn(
          "bg-primary bg-opacity-30 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] will-change-transform",
          className
        )}
      />
    </>
  );
};
export default BlurDot;
