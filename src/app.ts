import express, { json } from "express";
import { connect } from "mongoose";

import { usersRouter } from "./routers";

const app = (async () => {
  await connect("mongodb://localhost:27017/test");

  const app = express();

  app.use(json());

  app.use("/users", usersRouter);

  return app;
})();

export { app };