import { Response, Request } from "express";
import mongoose, { Collection, get } from "mongoose";
import { ILogin } from "../types/types";


const userModal = require('../modals/login');

const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
       
        const body = req.body;
        console.log('body',body);   
        const resp = await userModal.findOne({emp_ID:body});
        if(resp.length >0){
            res
            .status(200)
            .json({ message: "Loged in succesfully" })
        }else{
            throw {message:'not a valid user'}
        }
       
    } catch (error) {
        console.log(error)
    }
}


export { loginUser }