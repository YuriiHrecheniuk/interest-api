import { Interest } from "../types";
import { interestsRepository } from "../repositories";
import { CreateInterestData } from "../types/create-interest-data";

export const getInterests = async (userId: string): Promise<Interest[]> => {
  return await interestsRepository.getInterests(userId);
};

export const createInterest = async (data: CreateInterestData): Promise<Interest> => {
  const interest = await interestsRepository.createInterest(data);

  return interest;
};

export const updateInterest = async (interestId: string, data: Partial<CreateInterestData>): Promise<Interest> => {
  return await interestsRepository.updateInterest(interestId, data);
};

export const getInterestPostText = (interest: Interest): string => {
  const { status, type, subject } = interest;

  switch (type) {
    case "BOOK":
      switch (status) {
        case "PLANNED":
          return `Planning to read "${subject}" book`;
        case "PROGRESS":
          return `Reads "${subject}" book`;
        case "FINISHED":
          return `Finished reading "${subject}" book`;
        default:
          throw new Error(`Invalid interest status: ${status}`);
      }
    case "MOVIE":
      switch (status) {
        case "PLANNED":
          return `Planning to watch "${subject}" movie`;
        case "PROGRESS":
          return `Watching "${subject}" movie`;
        case "FINISHED":
          return `Finished watching "${subject}" movie`;
        default:
          throw new Error(`Invalid interest status: ${status}`);
      }
    case "GAME":
      switch (status) {
        case "PLANNED":
          return `Planning to play "${subject}" game`;
        case "PROGRESS":
          return `Playing "${subject}" game`;
        case "FINISHED":
          return `Finished playing "${subject}" game`;
        default:
          throw new Error(`Invalid interest status: ${status}`);
      }
    default:
      throw new Error(`Invalid interest type: ${type}`);
  }
};

