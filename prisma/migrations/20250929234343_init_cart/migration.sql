-- CreateTable
CREATE TABLE "public"."ShoppingCart" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItensShoppingCart" (
    "id" SERIAL NOT NULL,
    "shoppingCartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ItensShoppingCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ItensShoppingCart" ADD CONSTRAINT "ItensShoppingCart_shoppingCartId_fkey" FOREIGN KEY ("shoppingCartId") REFERENCES "public"."ShoppingCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
