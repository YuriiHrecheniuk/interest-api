import Joi from "joi";
import { validateBody } from "./validator";

export const validateCreatePost = validateBody(Joi.object({
  text: Joi.string()
}));