"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import BlogPosts from "./components/BlogPosts";

const BlogPage = () => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPosts />
    </QueryClientProvider>
  );
};
export default BlogPage;
