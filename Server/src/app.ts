import { Application, Request, Response } from "express";
import express from "express";

const app: Application = express();
const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("i have connected");
});
