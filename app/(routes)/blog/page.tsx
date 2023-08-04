import BlogHeader from "./components/BlogHeader";
import BlogCardContainer from "./components/BlogCardContainer";

const BlogPage = () => {
  return (
    <div className="container mb-20 min-h-screen">
      <BlogHeader />
      <BlogCardContainer />
    </div>
  );
};
export default BlogPage;
