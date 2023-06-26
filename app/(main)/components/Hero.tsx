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
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to my Portfolio PlayGround
          </h1>
          <p className="mb-5">
            Instead of boring you with "amazing" design, let's make this more
            creative and interactive..
          </p>
          <button
            className="btn-primary btn"
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
