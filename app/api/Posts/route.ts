import { NextApiRequest, NextApiResponse } from "next";
import { Blog } from "../../(models)/Blog";
import { IBlog } from "../../(models)/Blog";

interface PostRequestBody {
  formData: IBlog;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("POST RAN");
  try {
    if (req.method === "POST") {
      const body: PostRequestBody = JSON.parse(req.body);
      const blogData = body.formData;
      await Blog.create(blogData);
      res.status(201).json({ message: "Blog Created" });
    } else {
      res.status(405).json({ message: "Invalid Method" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
}
