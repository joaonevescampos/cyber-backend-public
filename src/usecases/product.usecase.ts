import {
  ProductCard,
  ProductRepository,
  BrandTotal,
  ProductResponse,
  PaginatedProductsResponse,
  ProductDetails,
} from "../interfaces/product.interface";
import { ProductRepositoryPrisma } from "../repositories/product.repository";

class ProductUsecase {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepositoryPrisma();
  }

  async findAll(): Promise<ProductCard[]> {
    const result = await this.productRepository.findAll();
    return result;
  }

  async findByTag(tag: string): Promise<ProductCard[]> {
    const products = await this.productRepository.findByTag(tag);
    return products;
  }

  async findBrandsWithTotal(): Promise<BrandTotal[]> {
    const brands = await this.productRepository.findBrandsWithTotal();
    return brands;
  }

  async findAllAndFilter(
    page: number,
    sort?: string,
    order?: string,
    brands?: string[]
  ): Promise<PaginatedProductsResponse> {
    const { products, totalItems } =
      await this.productRepository.findAllAndFilter(page, sort, order, brands);

    const productsPerPage = 9;
    const totalPages = Math.ceil(totalItems / productsPerPage);

    const metadata = {
      total_pages: totalPages,
      actual_page: page,
      total_items: totalItems,
    };

    return { metadata, data: products };
  }

  async findAndFilter(
    categoryName: string,
    page: number,
    sort: string,
    order: string,
    brands: string[]
  ): Promise<ProductResponse> {
    const { products, totalItems } =
      await this.productRepository.findFilteredProducts(
        categoryName,
        page,
        sort,
        order,
        brands
      );

    const totalPages = Math.ceil(totalItems / 9);

    return {
      data: products,
      metadata: {
        total_pages: totalPages,
        actual_page: page,
        total_items: totalItems,
      },
    };
  }

  async findById(id: number): Promise<ProductDetails | null> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      return null;
    }

    if (product.category.name !== "Phones") {
      product.specs = null;
    }

    return product;
  }

  async findByBrand(brand: string): Promise<ProductCard[]> {
    const products = await this.productRepository.findByBrand(brand);
    return products;
  }

  async searchProducts(query: string): Promise<ProductCard[]> {
    return this.productRepository.searchProducts(query);
  }
}

export default new ProductUsecase();
