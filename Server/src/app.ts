import { Request, Response } from "express";
import express, { Express } from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user";
import usersProfileRoute from "./routes/usersProfile";

var bodyParser = require('body-parser');


const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.fcmnr5b.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login', userRoute)

app.use('/users', userRoute)

app.use('/userProfiles', usersProfileRoute)


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)



mongoose
    .connect(uri,()=> {
        console.log('connected mango')
    })

    module.exports = mongoose; 