"use client";

import { toast } from "react-hot-toast";

const Hero = () => {
  const agree = () => {
    toast.success("Good choice - I like you!", {position: "bottom-center"})
  }

  return (
    <div
      className="hero min-h-[800px] bg-fixed"
      style={{
        backgroundImage: `url(/images/pexels-gerardo-mendoza-16696103.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Scroll further to witness greatness
          </h1>
          <p className="mb-5">
            While you scroll, I'll think about how to entertain you..
          </p>
          <button
            className="btn btn-primary"
            onClick={agree}
          >
            Sounds fun
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero