"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Image, { StaticImageData } from "next/image";

import Modal from "./Modal";

interface BlogCardProps {
  index: number;
  content: {
    slug: string;
    state: boolean;
    cardTitle: string;
    cardBadge: string;
    cardFeatures: string;
    blogContent?: string;
    cardImg: StaticImageData;
    cardDescription: JSX.Element[] | string[];
  };
}

const fadeInAnimationVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.05,
    },
  }),
};

const BlogCard: React.FC<BlogCardProps> = ({ index, content }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const isLg = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        custom={index}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInAnimationVariants}
        whileHover={isLg ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
        onClick={() => {
          content.state
            ? router.push(`/blog/${content.slug}`)
            : setOpenModal(true);
        }}
        className="
          card 
          lg:w-72 
          bg-base-100 
          shadow-sm 
          shadow-neutral
          transition-shadow
          hover:z-[47] 
          hover:shadow-xl 
          hover:shadow-neutral
          hover:cursor-pointer
        "
      >
        <figure className="bg-primary/50 p-5">
          <Image
            priority
            src={content.cardImg}
            alt={content.cardTitle}
            className={content.state ? "" : "grayscale"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {content.cardTitle}
            <div
              className={
                "badge badge-accent bg-opacity-70 p-3 " +
                (!content.state ? "badge-outline" : "")
              }
            >
              {content.state ? "✔" : "🔒"}
            </div>
          </h2>
          <p className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold">Made using:</span>{" "}
            {content.state
              ? content.cardDescription.map((item) => item)
              : "???"}
          </p>
          <p>
            <span className="font-semibold">Features:</span>{" "}
            {content.state ? content.cardFeatures : "???"}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {content.state ? content.cardBadge : "???"}
            </div>
          </div>
        </div>
      </motion.div>
      <Modal
        state={content.state}
        openModal={openModal}
        setOpenModal={setOpenModal}
        cardTitle={content.cardTitle}
        blogContent={content.blogContent}
      />
    </>
  );
};
export default BlogCard;
