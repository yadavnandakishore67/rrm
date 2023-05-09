import { Request, Response } from "express";
import express, { Express } from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user";
import usersProfileRoute from "./routes/usersProfile";
import APIErrorHandler from "./errors/APIError.handler";
import suggestionsRoute from "./routes/suggestions";

var bodyParser = require("body-parser");

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.fcmnr5b.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.use("/users", userRoute);
app.use("/userProfiles", usersProfileRoute);
app.use("/suggestions", suggestionsRoute);

app.use(APIErrorHandler);

mongoose.set("strictQuery", false);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
mongoose.set("strictQuery", false);
mongoose.connect(uri, () => {
  console.log("connected mango");
});
module.exports = mongoose;
