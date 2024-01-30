import mongoose, { Schema, Document, Model } from "mongoose";

mongoose.connect(process.env.MONGODB_URI ?? "default-mongodb-uri");
mongoose.Promise = global.Promise;

interface IBlog extends Document {
  title: string;
  description: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema: Schema<IBlog> = new Schema(
  {
    title: String,
    description: String,
    user: String,
  },
  {
    timestamps: true,
  }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export type { IBlog };
export { Blog };
