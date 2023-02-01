import { Response, Request, response } from "express";
import userModal from "../schemas/user";


const userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body;
        const resp = await userModal.find({ emp_ID: body.emp_ID, password: body.password }).populate('role');
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
    try {
        const users = await userModal.find().populate('role');
        res
            .status(200)
            .json({ users: users })
    } catch (error) {
        res.send(error);
    }
}

const createNewUser = async (req: Request, res: Response) => {
    res.send('creating New users')
}

const getUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const user = await userModal.find({ _id: id }).populate('role');
        res
            .status(200)
            .json({ userDetails: user })
    } catch (error) {
        res.send(error);
    }

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