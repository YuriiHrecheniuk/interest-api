import { model, Schema } from "mongoose";
import { User } from "../types";

const schema = new Schema<User>({
  name: String,
  nickname: String,
  email: String,
  birthDate: Date,
  friends: {
    type: [Schema.Types.ObjectId],
    default: []
  }
});

export const UserModel = model("User", schema);