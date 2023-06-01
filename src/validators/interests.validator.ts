import { validateBody } from "./validator";
import Joi from "joi";

export const validateCreateInterest = validateBody(Joi.object({
  type: Joi.valid("BOOK", "MOVIE", "GAME").default("BOOK"),
  status: Joi.valid("PLANNED", "PROGRESS", "FINISHED").default("PLANNED"),
  subject: Joi.string().required()
}));

export const validateUpdateInterest = validateBody(Joi.object({
  status: Joi.valid("PLANNED", "PROGRESS", "FINISHED")
}));
