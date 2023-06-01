export type CreateInterestData = {
  status: "PLANNED" | "PROGRESS" | "FINISHED",
  subject: string,
  author: string
}