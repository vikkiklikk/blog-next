"use client";

import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

const BlogForm = () => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("api/Posts", {
      method: "POST",
      body: JSON.stringify({ blogData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Post");
    }
  };

  const startingBlogData: { title: string; description: string } = {
    title: "",
    description: "",
  };

  const [blogData, setBlogData] = useState(startingBlogData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Post</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={blogData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={blogData.description}
          rows={5}
        />
        <input type="submit" className="btn" value="Create Post" />
      </form>
    </div>
  );
};

export default BlogForm;
