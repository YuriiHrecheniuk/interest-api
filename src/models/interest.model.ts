import { model, Schema } from "mongoose";
import { Interest } from "../types";

const schema = new Schema<Interest>({
  type: String,
  author: Schema.Types.ObjectId,
  status: String,
  subject: String
});

export const InterestModel = model("Interest", schema);