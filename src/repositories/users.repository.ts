import { CreateUserParams } from "../types/create-user-params";
import { User, UserModel } from "../models/user.model";
import { NotFound } from "http-errors";

export const saveUser = async (data: CreateUserParams): Promise<User> => {
  console.log(data);

  const user = new UserModel(data);

  return await user.save();
};

export const getUser = async (id: string): Promise<User> => {
  const document = await UserModel.findById(id).exec();

  if (!document) {
    throw new NotFound('user not found')
  }

  return document;
};