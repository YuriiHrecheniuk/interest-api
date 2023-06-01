import { RequestHandler } from "express";
import { postsService } from "../services";

export const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.header("Authorization")!;

    const posts = await postsService.getUserPosts(userId);

    res.json(posts);
  } catch (err) {
    next(err);
  }
};

export const createPost: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.header("Authorization")!;
    const { text } = req.body;

    const post = await postsService.createPost(userId, text);

    res.json(post);
  } catch (err) {
    next(err);
  }
};
