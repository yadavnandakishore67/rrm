import { Router } from "express";
import suggestionsController from "../controllers/suggestions.controller";

const suggestionsRoute: Router = Router();
suggestionsRoute.get("/", suggestionsController.getSuggestions);

export default suggestionsRoute;
