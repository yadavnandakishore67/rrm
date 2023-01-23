import { Response, Request, response } from "express";

const userModal = require('../modals/user');

const userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body;
        const resp = await userModal.find({ emp_ID: body.emp_ID, password: body.password });
        if (resp.length > 0) {
            res
                .status(200)
                .json({ userDetails: resp, message: "Loged in succesfully" });
        } else {
            throw new Error("invalid credentials/not a valid user")
        }

    } catch (error: any) {
        console.log(JSON.stringify(error))
        res
            .status(401)
            .json({ message: error.message });
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    res.send('getting All Users');
}

const createNewUser = async (req: Request, res: Response) => {
    res.send('creating New users')
}

const getUser = async (req: Request, res: Response) => {
    res.send(' getting user with id')
}

const updateUser = async (req: Request, res: Response) => {
    res.send(' updating user with id')
}

const deleteUser = async (req: Request, res: Response) => {
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