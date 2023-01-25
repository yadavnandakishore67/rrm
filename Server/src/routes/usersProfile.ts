
import express, { Router } from "express";
import userProfileController  from "../controllers/usersProfile.controller"

const usersProfileRoute: Router = Router();

usersProfileRoute.get("/", userProfileController.getAllUserProfiles)

usersProfileRoute.post("/", userProfileController.createUserProfile)

usersProfileRoute.get("/:Id", userProfileController.getUserProfile)

usersProfileRoute.put("/:Id", userProfileController.updateUserProfile)

usersProfileRoute.delete("/:Id", userProfileController.deleteUserProfile)

usersProfileRoute.get('/Users/:UserId', userProfileController.getUserProfilesByUserId)

export default usersProfileRoute;