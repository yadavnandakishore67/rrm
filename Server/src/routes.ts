import express, { Router } from "express";
import { loginUser } from "./controllers/login.controller"

const router: Router = Router();
const app = express();

router.post("/login", loginUser)

export default router