"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Modal from "./Modal";

interface BlogCardProps {
  state: boolean;
  content: {
    cardTitle: string;
    cardDescription: string;
    cardFeatures: string;
    cardBadge: string;
    cardImg: string;
    blogContent: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({
  state,
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
        animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
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
        <figure className="bg-primary px-10 pt-10 pb-1">
          <img
            src={cardImg}
            alt={cardTitle}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {cardTitle}
            <div className="badge badge-secondary p-3">
              {state ? "✔" : "🔒"}
            </div>
          </h2>
          <p>Made using: {state ? cardDescription : "???"}</p>
          <p>Features: {state ? cardFeatures : "???"}</p>
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
