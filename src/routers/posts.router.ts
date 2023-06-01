import { Router } from "express";
import { postsController } from "../controllers";
import { authMiddleware } from "../middlewares";
import { postsValidator } from "../validators";

const postsRouter = Router();

postsRouter.get("/", authMiddleware, postsController.getPosts);
postsRouter.post("/", authMiddleware, postsValidator.validateCreatePost, postsController.createPost);

export { postsRouter };