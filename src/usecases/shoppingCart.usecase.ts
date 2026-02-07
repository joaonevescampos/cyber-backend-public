import { ShoppingCartRepository } from "../repositories/shoppingCart.repository";

const repo = new ShoppingCartRepository();

export class ShoppingCartUseCases {
  async createCart(
    userId: string,
    products: { productId: number; quantity: number }[]
  ) {
    return repo.createCart(userId, products);
  }

  async finalizeCart(cartId: number, userId: string, status: string) {
    const cart = await repo.findCartById(cartId, userId);
    if (!cart) throw new Error("Cart not found");

    if (cart.status === "finish") {
      throw new Error("Cart is already finished");
    }

    await repo.updateStatus(cartId, userId, status);
    return { newStatus: status };
  }
}
