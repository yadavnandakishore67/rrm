import { Response, Request } from "express";
import employeeModal from "../schemas/employee";
import suggestionsController from "./suggestions.controller";

const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const result = await employeeModal.find();
    res.status(200).json({ employees: result });
  } catch (err) {
    res.send(err);
  }
};

const createEmployee = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const employee = new employeeModal(body);
    const result = await employee.save();
    await suggestionsController.updateSkillSuggestions(req.body.skills);
    res.status(201).json({ message: "created succesfully" });
  } catch (err) {
    res.send(err);
  }
};

const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const employee = await employeeModal.findOneAndUpdate(
      { _id: id },
      req.body
    );
    await suggestionsController.updateSkillSuggestions(req.body.skills);
    res.status(200).json({ employee: employee });
  } catch (err) {
    res.send(err);
  }
};

const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    console.log("id", Id);
    await employeeModal.findOneAndDelete({ empId: Id });
    const result = await employeeModal.find();
    console.log("result", result);
    res.status(200).json({ employees: result });
  } catch (err) {
    res.send(err);
  }
};

const employeesController = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

export default employeesController;
