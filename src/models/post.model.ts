import { model, Schema } from "mongoose";
import { Post } from "../types";

const schema = new Schema<Post>({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String
}, {
  timestamps: true
});

export const PostModel = model("Post", schema);