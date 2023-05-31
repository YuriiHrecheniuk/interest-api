import { app } from "./app";

app.then((app) => {
  const port = 3000;

  app.listen(port, () => {
    console.log(`server listening on: http://localhost:${port}`);
  });
});