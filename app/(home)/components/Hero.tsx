"use client";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import animeCar from "@/public/images/anime-car.jpg";

const Hero = () => {
  const agree = () => {
    toast.success(
      "Good answer - I like you already! My name is Shota - Nice to meet you 🧙🏾‍♂️",
      {
        position: "bottom-center",
        style: {
          border: "hsl(var(--s))",
          padding: "24px",
          color: "hsl(var(--b))",
          backgroundColor: "hsl(var(--b1))",
        },
        iconTheme: {
          primary: "hsl(var(--s))",
          secondary: "hsl(var(--b1))",
        },
        duration: 4000,
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="hero min-h-screen md:bg-fixed"
      style={{
        backgroundImage: `url(${animeCar.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 transition-colors duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold transition-colors duration-500">
            Welcome to my Portfolio{" "}
            <motion.span
              animate={{
                color: [
                  "rgba(255, 0, 0, 1)",
                  "rgba(255, 165, 0, 1)",
                  "rgba(255, 255, 0, 1)",
                  "rgba(0, 128, 0, 1)",
                  "rgba(0, 0, 255, 1)",
                  "rgba(75, 0, 130, 1)",
                  "rgba(128, 0, 128, 1)",
                ],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  type: "tween",
                },
              }}
              className="transition-none"
            >
              PlayGround
            </motion.span>
          </h1>
          <p className="mb-5 transition-colors duration-500 text-xl">
            Instead of telling you what I can do, I'd rather guide you through
            my skills in a small and interactive adventure...
          </p>
          <button
            className="btn-primary btn transition-all duration-500"
            onClick={agree}
          >
            Sounds fun
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
