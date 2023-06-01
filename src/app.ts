import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";

import { interestsRouter, postsRouter, usersRouter } from "./routers";
import { logMiddleware } from "./middlewares";

const app = (async () => {
  await connect("mongodb://localhost:27017/test");

  const app = express();

  app.use(json(), cors(), logMiddleware);

  app.use("/users", usersRouter);

  app.use("/posts", postsRouter);

  app.use("/interests", interestsRouter);

  return app;
})();

export { app };