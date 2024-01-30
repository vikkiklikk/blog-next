import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import BlogForm from "@/app/(components)/BlogForm";

interface BlogPageProps {
  params: ParsedUrlQuery;
}

const BlogPage: FC<BlogPageProps> = ({ params }) => {
  return <BlogForm />;
};

export default BlogPage;
