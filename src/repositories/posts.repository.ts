import { Post } from "../types";
import { PostModel } from "../models";

export const getUserPosts = async (userId: string): Promise<Post[]> => {
  return await PostModel.find({ author: userId }).sort({ createdAt: -1 }).exec();
};

export const createPost = async (author: string, text: string): Promise<Post> => {
  const post = new PostModel({ author, text });

  return await post.save();
};