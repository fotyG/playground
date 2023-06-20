import Image from "next/image";
import BlogCard from "./components/BlogCard";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 justify-center flex-wrap gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
export default BlogPage;
