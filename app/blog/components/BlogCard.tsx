"use client";

import { useState } from "react";

const BlogCard = () => {
  const [hovering, setIsHovering] = useState(false);
  const hover = () => {
    setIsHovering(true);
  };
  return (
    <>
      <div
        className="
          card 
          lg:w-72 
          bg-base-100 
          shadow-sm 
          shadow-neutral 
          transition-all 
          lg:hover:scale-110 
          hover:z-50 
          hover:shadow-xl 
          hover:shadow-neutral
          hover:cursor-pointer
        "
      >
        <figure className="bg-primary px-10 pt-10">
          <img
            src="/images/1.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Memory Game
            <div className="badge badge-secondary p-3">🔒</div>
          </h2>
          <p>Made using: ???</p>
          <p>Secrets: ???</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Game</div>
            <div className="badge badge-outline">Anti-cheat</div>
          </div>
        </div>
      </div>

      {/* <div className="card lg:card-side bg-base-100 shadow-sm shadow-neutral transition-all hover:shadow-neutral hover:shadow-lg lg:hover:scale-110 lg:hover:z-50">
        <figure className="bg-primary">
          <img
            src="/images/1.webp"
            alt="blog"
          />
        </figure>

        <div className="card-body text-sm sm:text-normal">
          <h2 className="card-title text-sm sm:text-normal">Memory Game</h2>
          <div className="badge badge-secondary p-3">🔒</div>
          <p>Made using: ???</p>
          <p>Secrets: ???</p>
          <div className="card-actions justify-center sm:justify-end lg:justify-center">
            <button
              onMouseOver={hover}
              onMouseLeave={() => setIsHovering(false)}
              className="btn btn-primary btn-sm"
            >
              {hovering ? "Unlock info 🔑" : "Unlock info 🔒"}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default BlogCard;
