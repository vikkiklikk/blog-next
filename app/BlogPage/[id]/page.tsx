import { FC } from "react";
import { ParsedUrlQuery } from "querystring";

interface BlogPageProps {
  params: ParsedUrlQuery;
}

const BlogPage: FC<BlogPageProps> = ({ params }) => {
  return <div>BlogPage ${params.id}</div>;
};

export default BlogPage;
