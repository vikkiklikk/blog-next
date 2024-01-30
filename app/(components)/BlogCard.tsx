import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";

const BlogCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Blog Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">this is the blog description!</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/31/23 10:43PM</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
