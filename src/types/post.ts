import type { Schema } from "mongoose";

export type Post = {
  author: Schema.Types.ObjectId;
  text: string;
  createdAt: string;
}