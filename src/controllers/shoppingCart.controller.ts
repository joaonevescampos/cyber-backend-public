import { Request, Response } from "express";
import { ShoppingCartUseCases } from "../usecases/shoppingCart.usecase";
import { getAuth } from "@clerk/express";

const useCases = new ShoppingCartUseCases();

export const createCart = async (req: Request, res: Response) => {
  try {
    const userId = getAuth(req).userId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const { products } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Invalid products" });
    }

    const validProducts = products.filter(
      (p) => p.productId && p.quantity > 0
    );

    if (validProducts.length === 0) {
      return res
        .status(400)
        .json({ message: "No one valid product to add." });
    }

    const cart = await useCases.createCart(userId, validProducts);

    return res.status(200).json({
      message: "Cart created sucessfully",
      status_code: 200,
      shopping_cart_id: cart.id,
    });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

export const finalizeCart = async (req: Request, res: Response) => {
  try {
    const userId = getAuth(req).userId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const cartId = Number(req.params.shopping_cart_id);

    if (!cartId) {
      return res.status(400).json({ message: "Cannot get the cart ID" });
    }

    const { status } = req.body;

    const result = await useCases.finalizeCart(cartId, userId, status);

    return res.status(200).json({
      message: "Status updated",
      status_code: 200,
      new_status: result.newStatus,
    });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};
