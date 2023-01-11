import { Response, Request } from "express";

const getAllUserProfiles = async (req:Request, res:Response) => {
    res.send('Returning all user profiles')
}


const createUserProfile = async (req:Request, res:Response) => {
    res.send('creating new user profile')
}

const getUserProfile = async (req:Request, res:Response) => {
    res.send('getting user profile with id')
}

const updateUserProfile = async (req:Request, res:Response) => {
    res.send('updating user profile with id')
}

const deleteUserProfile = async (req:Request, res:Response) => {
    res.send('deleting user profile with id')
}

const userProfileController = {
    getAllUserProfiles,
    createUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
}

export default userProfileController;