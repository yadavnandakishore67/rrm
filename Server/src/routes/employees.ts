import { Router } from "express";
import employeesController from "../controllers/employees.controller";

const employeesRoute: Router = Router();
employeesRoute.get("/", employeesController.getAllEmployees);
employeesRoute.post("/employee", employeesController.createEmployee);
employeesRoute.put("/employee/:id", employeesController.updateEmployee);
employeesRoute.delete("/employee/:Id", employeesController.deleteEmployee);

export default employeesRoute;
