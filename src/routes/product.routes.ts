import { Router } from "express";
import {
  findAll,
  findByTag,
  findBrands,
  findAndFilter,
  findById,
  findByBrand,
  findAllAndFilter,
  searchProducts
} from "../controllers/product.controller";

const productRoutes: Router = Router();

productRoutes.get("/test", findAll);
productRoutes.get("/tag/:tag_name", findByTag);
productRoutes.get("/brands", findBrands);
productRoutes.get("/", findAllAndFilter);
productRoutes.get("/category/:category_name", findAndFilter);
productRoutes.get('/search', searchProducts);
productRoutes.get("/:id", findById);
productRoutes.get("/related/:brand", findByBrand);

export default productRoutes;
