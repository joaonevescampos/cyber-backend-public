import { Router } from "express";
import { findAll, create } from "../controllers/category.controller";

const categoryRoutes: Router = Router();

categoryRoutes.get("/", findAll);
categoryRoutes.post("/", create);

export default categoryRoutes;
