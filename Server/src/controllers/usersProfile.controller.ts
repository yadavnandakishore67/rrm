import { Response, Request } from "express";
import userProfileModal from '../schemas/userProfile';
import APIError from "../errors/APIError";
import userModal from '../schemas/user';
import path from "path";

const getAllUserProfiles = async (req: Request, res: Response) => { 
    try {
        const requestList = await userProfileModal.find().populate([{path:'createdBy',select:'first_name'},{path:'updatedBy',select:'first_name'},{path:'enagagementManager',select:'first_name'},{path:'comments.author',select:'first_name'}]);
        res
            .status(200)
            .json({ requestList: requestList })
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

const createUserProfile = async (req: any, res: any) => {
  
    try {
        const body = req.body

        const userProfile = new userProfileModal(body);

         const result = await userProfile.save();

         console.log(result)
        res
            .status(201)
            .json({ message: "created succesfully" })
    } catch (error) {
        res.send(error);
    }

}

const getUserProfile = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await userProfileModal.find({ _id: id });
        res
            .status(200)
            .json({ user: user })
    } catch (error) {
        res.send(error);
    }
}

const updateUserProfile = async (req: Request, res: Response, next:any) => {
    try {
        const {id} = req.params;
        console.log(id)
        console.log(req.body)
        const user = await userProfileModal.findOneAndUpdate({ _id: id }, req.body);
        res
            .status(200)
            .json({ user: user })
    } catch (error) {
        res.send(error);
    }
}

const deleteUserProfile = async (req: Request, res: Response) => {
    try {
        const {Id} = req.params;
        await userProfileModal.findOneAndDelete({ _id: Id });
        const requestList = await userProfileModal.find().populate([{path:'createdBy',select:'first_name'},{path:'enagagementManager',select:'first_name'},{path:'comments.author',select:'first_name'}]);
        res
            .status(200)
            .json({ requestList: requestList })
    } catch (error) {
        res.send(error);
    }
}

const getUserProfilesByUserId =async (req:Request, res: Response) => {
    try {
        const {UserId} = req.params;
        
        const userProfiles = await userProfileModal.find().populate('createdBy', 'emp_ID')
       
        const result = userProfiles.filter((profile)=> {
            return profile.createdBy.emp_ID === UserId;
        })
        res.status(200).json({data: result})
    } catch(error) {
        res.send(error)
    }
}

const userProfileController = {
    getAllUserProfiles,
    createUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    getUserProfilesByUserId
}

export default userProfileController;