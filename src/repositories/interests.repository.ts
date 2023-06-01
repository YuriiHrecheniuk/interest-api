import { Interest } from "../types";
import { InterestModel } from "../models";
import { CreateInterestData } from "../types/create-interest-data";
import { NotFound } from "http-errors";

export const getInterests = async (author: string): Promise<Interest[]> => {
  return await InterestModel.find({ author }).sort({ createdAt: -1 }).exec();
};

export const createInterest = async (data: CreateInterestData): Promise<Interest> => {
  const interest = new InterestModel(data);

  return await interest.save();
};

export const updateInterest = async (interestId: string, data: Partial<CreateInterestData>): Promise<Interest> => {
  const doc = await InterestModel.findByIdAndUpdate(interestId, data, { returnDocument: "after" }).exec();

  if (!doc) throw new NotFound("interest is not found");

  return doc;
};
