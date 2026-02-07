import { Router } from "express";
import categoryRoutes from "./category.routes";
import productRoutes from "./product.routes";
import reviewRoutes from "./review.routes";
import shoppingCartRoutes from "./shoppingCart.routes"

const rootRouter: Router = Router();

rootRouter.use("/categories", categoryRoutes);
rootRouter.use("/products", productRoutes);
rootRouter.use("/reviews", reviewRoutes);
rootRouter.use("/shopping_carts", shoppingCartRoutes)

export default rootRouter;
