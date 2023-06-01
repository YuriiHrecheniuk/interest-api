import { Post } from "../types";
import { postsRepository } from "../repositories";

export const getUserPosts = async (userId: string): Promise<Post[]> => {
  return await postsRepository.getUserPosts(userId);
};

export const createPost = async (authorId: string, text: string): Promise<Post> => {
  return await postsRepository.createPost(authorId, text);
};
