import { Request, Response } from "express";
import ProductUsecase from "../usecases/product.usecase";

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await ProductUsecase.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve products." });
  }
};

export const findByTag = async (req: Request, res: Response) => {
  try {
    const { tag_name } = req.params;

    if (!tag_name) {
      return res.status(400).json({ error: "Tag name is required." });
    }

    const products = await ProductUsecase.findByTag(tag_name);
    return res.status(200).json({ data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to retrieve products by tag." });
  }
};

export const findBrands = async (req: Request, res: Response) => {
  try {
    const brands = await ProductUsecase.findBrandsWithTotal();
    return res.status(200).json({ data: brands });
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve brands." });
  }
};

export const findAllAndFilter = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const sort = req.query.sort as string;
    const order = req.query.order as string;

    const brandsQuery = req.query.brands as string | undefined;
    const brands = brandsQuery ? brandsQuery.split(",") : [];

    const response = await ProductUsecase.findAllAndFilter(
      page,
      sort,
      order,
      brands
    );

    return res.status(200).json(response);
  } catch (error) {
    console.error("Erro na rota de todos os produtos:", error);
    return res.status(500).json({ error: "Failed to retrieve all products." });
  }
};

export const findAndFilter = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.params;

    if (!category_name) {
      return res.status(400).json({ error: "Category name is required." });
    }

    const databaseCategoryName = category_name.replace(/-/g, " ");

    const page = parseInt(req.query.page as string) || 1;
    const sort = req.query.sort as string;
    const order = req.query.order as string;

    const brandsQuery = req.query.brands as string | undefined;
    const brands = brandsQuery ? brandsQuery.split(",") : [];

    const response = await ProductUsecase.findAndFilter(
      databaseCategoryName,
      page,
      sort,
      order,
      brands
    );

    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to retrieve filtered products." });
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required." });
    }

    const productId = parseInt(id);

    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID." });
    }

    const product = await ProductUsecase.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    return res.status(200).json({ data: product });
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve product." });
  }
};

export const findByBrand = async (req: Request, res: Response) => {
  try {
    const { brand } = req.params;

    if (!brand) {
      return res.status(400).json({ error: "Brand is required." });
    }

    const products = await ProductUsecase.findByBrand(brand);
    return res.status(200).json({ data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to retrieve related products." });
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required.' });
    }

    const products = await ProductUsecase.searchProducts(query);
    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to search for products.' });
  }
};
