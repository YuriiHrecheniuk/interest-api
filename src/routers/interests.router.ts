import { Router } from "express";
import { interestsController } from "../controllers";
import { interestsValidator } from "../validators";
import { authMiddleware } from "../middlewares";

const interestsRouter = Router();

interestsRouter.get("/", authMiddleware, interestsController.getInterests);
interestsRouter.post("/", authMiddleware, interestsValidator.validateCreateInterest, interestsController.createInterest);
interestsRouter.patch("/:interestId", authMiddleware, interestsValidator.validateUpdateInterest, interestsController.updateInterest);

export { interestsRouter };