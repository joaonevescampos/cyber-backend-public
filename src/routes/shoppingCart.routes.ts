
import { Router } from "express";
import { createCart, finalizeCart } from "../controllers/shoppingCart.controller";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.post("/", authMiddleware, createCart);
router.patch("/:shopping_cart_id", authMiddleware, finalizeCart);

export default router;

