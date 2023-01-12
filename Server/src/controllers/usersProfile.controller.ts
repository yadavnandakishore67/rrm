import { Response, Request } from "express";
import userProfileModal from '../modals/userProfile';

const getAllUserProfiles = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        const user = await userProfileModal.find();
        res
            .status(200)
            .json({ users: user })
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const createUserProfile = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const newuser = await new userProfileModal(body).save();
        res
            .status(200)
            .json({ message: "created succesfully" })
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const getUserProfile = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        const user = await userProfileModal.find({ emp_ID: params.Id });
        res
            .status(200)
            .json({ user: user })
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const updateUserProfile = async (req: Request, res: Response) => {
    res.send('updating user profile with id')
}

const deleteUserProfile = async (req: Request, res: Response) => {
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