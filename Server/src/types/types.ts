import { Document } from "mongoose";

export interface ILogin extends Document {
    userName: string,
}