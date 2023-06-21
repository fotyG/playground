import BlogCard from "./components/BlogCard";

const BlogPage = () => {
  return (
    <div className="container my-5 lg:my-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center flex-wrap gap-5">
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
