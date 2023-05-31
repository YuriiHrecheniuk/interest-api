import { User } from "../models";
import { CreateUserParams } from "../types";
import { usersRepository } from "../repositories";

export const getUser = async (id: string): Promise<User> => {
  return await usersRepository.getUser(id);
};

export const createUser = async (userData: CreateUserParams): Promise<User> => {
  return await usersRepository.saveUser(userData);
};