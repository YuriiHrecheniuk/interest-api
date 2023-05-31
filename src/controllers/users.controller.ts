import { RequestHandler } from "express";
import { usersService } from "../services";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await usersService.createUser(req.body);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await usersService.getUser(req.params.id);

    res.json(user);
  } catch (err) {
    next(err);
  }
};
