import BlogCard from "./(components)/BlogCard";

export default function Home() {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
