import { RequestHandler } from "express";
import { interestsService, postsService } from "../services";

export const getInterests: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.header("Authorization")!;

    const interests = await interestsService.getInterests(userId);

    res.json(interests);
  } catch (err) {
    next(err);
  }
};

export const createInterest: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.header("Authorization")!;

    const interest = await interestsService.createInterest({
      ...req.body,
      author: userId
    });

    const interestPostText = interestsService.getInterestPostText(interest);
    await postsService.createPost(userId, interestPostText);

    res.json(interest);
  } catch (err) {
    next(err);
  }
};

export const updateInterest: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.header("Authorization")!;

    const { interestId } = req.params;

    const interest = await interestsService.updateInterest(interestId, req.body);

    const interestPostText = interestsService.getInterestPostText(interest);
    await postsService.createPost(userId, interestPostText);

    res.json(interest);
  } catch (err) {
    next(err);
  }
};
