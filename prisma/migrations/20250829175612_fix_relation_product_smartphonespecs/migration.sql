-- DropForeignKey
ALTER TABLE "public"."products" DROP CONSTRAINT "products_id_specs_smartphone_fkey";

-- AlterTable
ALTER TABLE "public"."products" ALTER COLUMN "id_specs_smartphone" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_id_specs_smartphone_fkey" FOREIGN KEY ("id_specs_smartphone") REFERENCES "public"."smartphone_specs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
