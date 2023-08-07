import { cn } from "@/lib/utils";

type BlurDotsProps = {
  className?: string;
};

const BlurDots = ({ className }: BlurDotsProps) => {
  return (
    <>
      <div
        className={cn(
          "bg-primary bg-opacity-30 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]",
          className
        )}
      />
      <div
        className={cn(
          "bg-secondary bg-opacity-30 absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem]",
          className
        )}
      />
    </>
  );
};
export default BlurDots;
