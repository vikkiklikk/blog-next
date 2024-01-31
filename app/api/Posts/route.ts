// /app/api/Posts/route.ts

import { NextApiRequest, NextApiResponse } from "next";

// Example middleware (uncomment and customize as needed)
/*
export const middleware = (req: NextApiRequest, res: NextApiResponse, next) => {
  // Middleware logic here
  next();
};
*/

// Export named functions for each HTTP method
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Handle POST logic
    try {
      const { formData } = req.body;
      // Your logic to create a post using formData

      res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Default handler for other methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
