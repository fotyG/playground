"use client";

import { toast } from "react-hot-toast";

const Hero = () => {
  const agree = () => {
    toast.success("Good answer - I like you already!", {
      position: "bottom-center",
    });
  };

  return (
    <div
      className="hero min-h-screen md:bg-fixed"
      style={{
        backgroundImage: `url(/images/anime-car.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 transition-colors duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold transition-colors duration-500">
            Welcome to my Portfolio PlayGround
          </h1>
          <p className="mb-5 transition-colors duration-500">
            Instead of telling you what I can do, I'd rather guide you through
            my skills in a small and interactive adventure..
          </p>
          <button
            className="btn-primary btn transition-all duration-500"
            onClick={agree}
          >
            Sounds fun
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
