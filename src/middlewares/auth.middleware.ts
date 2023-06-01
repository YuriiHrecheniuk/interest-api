import { RequestHandler } from "express";
import { usersService } from "../services";
import { Unauthorized } from "http-errors";

export const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) throw new Unauthorized();

    await usersService.getUser(token);

    next();
  } catch {
    next(new Unauthorized());
  }
};