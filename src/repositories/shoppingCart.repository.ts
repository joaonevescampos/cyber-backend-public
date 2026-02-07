import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ShoppingCartRepository {
  async createCart(
    userId: string,
    products: { productId: number; quantity: number }[]
  ) {
    const cart = await prisma.shoppingCart.create({
      data: {
        userId,
        items: {
          create: products.map((p) => ({
            productId: p.productId,
            quantity: p.quantity,
          })),
        },
      },
      include: { items: true },
    });

    return cart;
  }

  async findCartById(cartId: number, userId: string) {
    return prisma.shoppingCart.findFirst({
      where: { id: cartId, userId },
    });
  }

  async updateStatus(cartId: number, userId: string, status: string) {
    const updated = await prisma.shoppingCart.updateMany({
      where: { id: cartId, userId },
      data: { status },
    });
    return updated;
  }
}
