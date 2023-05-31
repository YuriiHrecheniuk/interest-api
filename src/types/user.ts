import { Schema } from "mongoose";

export type User = {
  name: string;
  nickname: string;
  email: string;
  birthDate: string;
  friends: Schema.Types.ObjectId[];
}