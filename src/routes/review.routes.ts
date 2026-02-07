import { Router } from "express";
import { findByProductId, getReviewSummary } from "../controllers/review.controller";

const reviewRoutes: Router = Router();

reviewRoutes.get("/comments/:product_id", findByProductId);
reviewRoutes.get("/summary/:product_id", getReviewSummary);

export default reviewRoutes;