"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Modal from "./Modal";

interface BlogCardProps {
  state: boolean;
  position: number;
  content: {
    cardTitle: string;
    cardDescription: JSX.Element[] | string[];
    cardFeatures: string;
    cardBadge: string;
    cardImg: string;
    blogContent: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({
  state,
  position,
  content: {
    cardTitle,
    cardDescription,
    cardFeatures,
    cardBadge,
    cardImg,
    blogContent,
  },
}) => {
  const [openModal, setOpenModal] = useState(false);
  const isLg = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, delay: position * 0.1 },
        }}
        whileHover={isLg ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
        onClick={() => setOpenModal(true)}
        className="
          card 
          lg:w-72 
          bg-base-100 
          shadow-sm 
          shadow-neutral
          transition-shadow
          hover:z-50 
          hover:shadow-xl 
          hover:shadow-neutral
          hover:cursor-pointer
        "
      >
        <figure className="bg-primary/50 p-5">
          <img
            src={cardImg}
            alt={cardTitle}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {cardTitle}
            <div
              className={
                "badge badge-accent bg-opacity-70 p-3 " +
                (!state ? "badge-outline" : "")
              }
            >
              {state ? "✔" : "🔒"}
            </div>
          </h2>
          <p className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold">Made using:</span>{" "}
            {state ? cardDescription.map((item) => item) : "???"}
          </p>
          <p>
            <span className="font-semibold">Features:</span>{" "}
            {state ? cardFeatures : "???"}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{cardBadge}</div>
          </div>
        </div>
      </motion.div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        cardTitle={cardTitle}
        blogContent={blogContent}
        state={state}
      />
    </>
  );
};
export default BlogCard;
