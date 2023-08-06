import Link from "next/link";

import ninja from "@/public/images/ninja.jpg";

const JumpIn = () => {
  return (
    <div
      className="hero h-[90vh] md:bg-fixed"
      style={{
        backgroundImage: `url(${ninja.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 shadow-sm shadow-neutral transition-colors duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold animate-pulse transition-colors">
            ⚠ Warning ⚠
          </h1>
          <p className="mb-5 transition-colors duration-500 text-xl">
            The treasury of local secrets is guarded by the most dangerous
            monsters known to mankind. Proceed at your own risk..
          </p>
          <Link
            href={"/memory-game"}
            className="btn btn-primary transition-all duration-500"
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JumpIn;
