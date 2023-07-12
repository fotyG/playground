import BlogCardContainer from "./components/BlogCardContainer";
import BlogHeader from "./components/BlogHeader";

const BlogPage = () => {
  return (
    <div className="container mb-20 flex flex-col justify-center">
      <BlogHeader />
      <BlogCardContainer />
    </div>
  );
};
export default BlogPage;
