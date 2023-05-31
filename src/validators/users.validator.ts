import { validateBody } from "./validator";
import Joi from "joi";

export const validateCreateUser = validateBody(Joi.object({
  name: Joi.string(),
  nickname: Joi.string(),
  email: Joi.string().email(),
  birthDate: Joi.string().isoDate()
}));