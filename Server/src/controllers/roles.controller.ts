import { Response, Request, response } from "express";
import roleModal from "../schemas/roles";

const createRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body;
    const userProfile = new roleModal(body);
    const result = await userProfile.save();
    res.status(201).json({ message: "created succesfully" });
  } catch (error) {
    res.send(error);
  }
};

const getAllRoles = async (req: Request, res: Response) => {
  try {
    const users = await roleModal.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.send(error);
  }
};

const rolesController = {
  createRole,
  getAllRoles,
};

export default rolesController;
