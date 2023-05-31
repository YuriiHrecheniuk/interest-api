import { Schema } from "joi";
import { RequestHandler } from "express";
import { BadRequest } from "http-errors";

export const validateBody = (schema: Schema): RequestHandler =>
  (req, res, next) => {
    const { value, error } = schema.validate(req.body);

    if (error) throw BadRequest("validation error");

    req.body = value;

    next();
  };