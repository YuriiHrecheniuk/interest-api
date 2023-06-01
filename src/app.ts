import express, { json } from "express";
import { connect } from "mongoose";

import { postsRouter, usersRouter } from "./routers";
import { logMiddleware } from "./middlewares";

const app = (async () => {
  await connect("mongodb://localhost:27017/test");

  const app = express();

  app.use(json(), logMiddleware);

  app.use("/users", usersRouter);

  app.use("/posts", postsRouter);

  return app;
})();

export { app };