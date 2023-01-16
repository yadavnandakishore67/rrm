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
         await new userProfileModal(body).save();
        res
            .status(200)
            .json({ message: "created succesfully" })
    } catch (error) {
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
        res.send(error);
    }
}

const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        var myquery = { emp_ID: params.Id };
        const user = await userProfileModal.updateOne({ emp_ID: params.Id }, req.body);
        res
            .status(200)
            .json({ user: user })
    } catch (error) {
        res.send(error);
    }
}

const deleteUserProfile = async (req: Request, res: Response) => {
    try {
        const params = req.params;
        var myquery = { emp_ID: params.Id };
        const user = await userProfileModal.deleteOne({ emp_ID: params.Id });
        res
            .status(200)
            .json({ user: user })
    } catch (error) {
        res.send(error);
    }
}

const userProfileController = {
    getAllUserProfiles,
    createUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
}

export default userProfileController;