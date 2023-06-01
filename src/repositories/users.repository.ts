import { NotFound } from "http-errors";
import { CreateUserParams, User } from "../types";
import { UserModel } from "../models";

export const saveUser = async (data: CreateUserParams): Promise<User> => {
  const user = new UserModel(data);

  return await user.save();
};

export const getUser = async (id: string): Promise<User> => {
  const document = await UserModel.findById(id).exec();

  if (!document) {
    throw new NotFound("user not found");
  }

  return document;
};