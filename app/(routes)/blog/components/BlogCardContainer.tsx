"use client";

import BlogCard from "./BlogCard";
import { getCardContent } from "../content/blog-card-content";

const BlogCardContainer = () => {
  const blogCardContent = getCardContent();
  const sorted = blogCardContent.sort((a, b) => {
    return a.position - b.position;
  });

  return (
    <div className="grid grid-cols-1 gap-x-5 xl:gap-x-0 gap-y-5 lg:gap-y-10 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {sorted.map((item, index) => (
        <BlogCard
          custom={index}
          content={item}
          key={item.cardTitle}
        />
      ))}
    </div>
  );
};
export default BlogCardContainer;
