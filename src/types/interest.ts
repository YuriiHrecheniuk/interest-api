import type { Schema } from "mongoose";

export type Interest = {
  type: "BOOK" | "MOVIE" | "GAME",
  author: Schema.Types.ObjectId,
  status: "PLANNED" | "PROGRESS" | "FINISHED",
  subject: string,
  startedAt: string,
  finishedAt: string,
}