-- CreateTable
CREATE TABLE "public"."products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discounted_price" DOUBLE PRECISION,
    "stock" INTEGER NOT NULL,
    "url_image" TEXT,
    "tag" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_specs_smartphone" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."smartphone_specs" (
    "id" SERIAL NOT NULL,
    "screen_size" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "total_cores" TEXT NOT NULL,
    "main_camera" TEXT NOT NULL,
    "front_camera" TEXT NOT NULL,
    "battery" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "smartphone_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reviews" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "url_image_user" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_colors" (
    "id" SERIAL NOT NULL,
    "hex_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "product_colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."storage_options" (
    "id" SERIAL NOT NULL,
    "size" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "storage_options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_category_key" ON "public"."products"("id_category");

-- CreateIndex
CREATE UNIQUE INDEX "products_id_specs_smartphone_key" ON "public"."products"("id_specs_smartphone");

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "public"."categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_id_specs_smartphone_fkey" FOREIGN KEY ("id_specs_smartphone") REFERENCES "public"."smartphone_specs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_colors" ADD CONSTRAINT "product_colors_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."storage_options" ADD CONSTRAINT "storage_options_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
