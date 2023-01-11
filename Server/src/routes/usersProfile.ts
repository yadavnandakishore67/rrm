
import express, { Router } from "express";
import userProfileController  from "../controllers/usersProfile.controller"

const usersProfileRoute: Router = Router();

usersProfileRoute.get("/", userProfileController.getAllUserProfiles)

usersProfileRoute.post("/", userProfileController.createUserProfile)

usersProfileRoute.get("/", userProfileController.getUserProfile)

usersProfileRoute.put("/", userProfileController.updateUserProfile)

usersProfileRoute.delete("/", userProfileController.deleteUserProfile)

export default usersProfileRoute;