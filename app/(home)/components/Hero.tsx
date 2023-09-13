"use client";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import animeCar from "@/public/images/anime-car.jpg";
import AnimatedText from "@/components/ui/animated-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const agree = () => {
    toast.success(
      "Good answer - I like you already! My name is Shota - Nice to meet you 🧙🏾‍♂️",
      {
        position: "bottom-center",
        style: {
          padding: "24px",
          color: "hsl(var(--b))",
          border: "1px solid hsl(var(--s))",
          backgroundColor: "hsl(var(--b1))",
        },
        icon: (
          <Avatar>
            <AvatarImage src="/images/portrait.jpg" />
            <AvatarFallback>"😎"</AvatarFallback>
          </Avatar>
        ),
        // iconTheme: {
        //   primary: "hsl(var(--s))",
        //   secondary: "hsl(var(--b1))",
        // },
        duration: 4000,
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="hero min-h-screen md:bg-fixed"
      style={{
        backgroundImage: `url(${animeCar.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 transition-colors duration-500"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 transition-colors duration-500">
            <AnimatedText text="Welcome to my Portfolio">
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
                    repeatType: "reverse",
                  },
                }}
                className=""
              >
                PlayGround
              </motion.span>
            </AnimatedText>
          </h1>
          <AnimatedText
            text="Instead of telling you what I can do, I'd rather guide you through
            my skills in a small and interactive adventure..."
            className="mb-5 font-semibold transition-colors duration-500 text-base sm:text-xl max-w-xl"
          />
          <button
            className="btn-secondary btn transition-all duration-500"
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
