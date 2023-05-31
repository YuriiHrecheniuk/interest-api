import { Router } from "express";
import { usersValidator } from "../validators";
import { usersController } from "../controllers";

const usersRouter = Router();

usersRouter.post("/", usersValidator.validateCreateUser, usersController.createUser);
usersRouter.get("/:id", usersController.getUser);

export { usersRouter };