import Link from "next/link";

const JumpIn = () => {
  return (
    <div
      className="hero h-[40rem]"
      style={{
        backgroundImage: `url(/images/ninja.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 shadow-sm shadow-neutral"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold animate-pulse">⚠ Warning ⚠</h1>
          <p className="mb-5">
            Place your cursor below this point at your own risk.. The treasury
            of local secrets is guarded by the most dangerous monsters known to
            mankind. Proceed at your own risk..
          </p>
          <Link
            href={"/memory-game"}
            className="btn btn-primary"
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JumpIn;
