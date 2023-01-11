
import { Router } from "express";
import userController   from "../controllers/user.controller"


const userRoute: Router = Router();

userRoute.post("/login", userController.userLogin)

userRoute.get("/", userController.getAllUsers)

userRoute.post("/", userController.createNewUser)

userRoute.get("/:id", userController.getUser)
userRoute.put("/:id", userController.updateUser)
userRoute.delete("/:id", userController.deleteUser)

export default userRoute