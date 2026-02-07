/*
  Warnings:

  - You are about to drop the `ItensShoppingCart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ItensShoppingCart" DROP CONSTRAINT "ItensShoppingCart_shoppingCartId_fkey";

-- DropTable
DROP TABLE "public"."ItensShoppingCart";

-- DropTable
DROP TABLE "public"."ShoppingCart";

-- CreateTable
CREATE TABLE "public"."shopping_cart" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shopping_cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."itens_shopping_cart" (
    "id" SERIAL NOT NULL,
    "shopping_cart_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "itens_shopping_cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "itens_shopping_cart_shopping_cart_id_product_id_key" ON "public"."itens_shopping_cart"("shopping_cart_id", "product_id");

-- AddForeignKey
ALTER TABLE "public"."itens_shopping_cart" ADD CONSTRAINT "itens_shopping_cart_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "public"."shopping_cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."itens_shopping_cart" ADD CONSTRAINT "itens_shopping_cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
