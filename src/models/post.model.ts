import { model, Schema } from "mongoose";
import { Post } from "../types";

const schema = new Schema<Post>({
  author: Schema.Types.ObjectId,
  text: String
}, {
  timestamps: true
});

export const PostModel = model("Post", schema);