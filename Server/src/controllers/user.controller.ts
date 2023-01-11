import { Response, Request } from "express";
import mongoose, { Collection, get } from "mongoose";
import { ILogin } from "../types/types";


const userModal = require('../modals/login');

const userLogin = async (req: Request, res: Response): Promise<void> => {

    res.send('login Success');
    // try {
       
    //     const body = req.body;
    //     console.log('body',body);   
    //     const resp = await userModal.findOne({emp_ID: body.params.emp_ID});
    //     if(resp.length >0){
    //         res
    //         .status(200)
    //         .json({ message: "Loged in succesfully" })
    //     }else{
    //         throw {message:'not a valid user'}
    //     }
       
    // } catch (error) {
    //     console.log(error)
    // }
}

const getAllUsers =async (req:Request, res:Response) => {
    res.send('getting All Users');
}

const createNewUser =async (req:Request, res:Response) => {
    res.send('creating New users')
}

const getUser =async (req:Request, res:Response) => {
    res.send(' getting user with id')
}

const updateUser =async (req:Request, res:Response) => {
    res.send(' updating user with id')
}

const deleteUser = async (req:Request, res:Response) => {
    res.send(' deleting user with id')
}

const userController = {
    userLogin,
    getAllUsers,
    createNewUser,
    getUser,
    updateUser,
    deleteUser
};

export default userController;