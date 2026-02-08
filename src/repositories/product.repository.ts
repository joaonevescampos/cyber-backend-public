import { prisma } from "../database/prisma-client";
import {
  ProductCard,
  ProductRepository,
  BrandTotal,
  ProductDetails,
} from "../interfaces/product.interface";

type SortOrder = "asc" | "desc";

type ProductOrderBy = {
  price?: SortOrder;
  discounted_price?: SortOrder;
};

class ProductRepositoryPrisma implements ProductRepository {

  async findAll(): Promise<ProductCard[]> {
    return prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
    });
  }

  async findByTag(tag: string): Promise<ProductCard[]> {
    return prisma.product.findMany({
      where: { tag },
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
    }) as Promise<ProductCard[]>;
  }

  async findBrandsWithTotal(): Promise<BrandTotal[]> {
    const brands = await prisma.product.groupBy({
      by: ["brand"],
      _count: { brand: true },
      orderBy: {
        _count: { brand: "desc" },
      },
    });

    return brands.map(item => ({
      brand: item.brand,
      total: item._count.brand,
    }));
  }

  async findAllAndFilter(
    page: number,
    sort?: string,
    order?: string,
    brands?: string[]
  ): Promise<{ products: ProductCard[]; totalItems: number }> {

    const productsPerPage = 9;
    const skip = (page - 1) * productsPerPage;

    const whereClause: any = {};

    if (brands?.length) {
      whereClause.brand = { in: brands };
    }

    const orderByClause: ProductOrderBy[] = [];
    if (sort === "price" && order) {
      orderByClause.push({ price: order as SortOrder });
      orderByClause.push({ discounted_price: order as SortOrder });
    }

    const [products, totalItems] = await prisma.$transaction([
      prisma.product.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip,
        take: productsPerPage,
        select: {
          id: true,
          name: true,
          price: true,
          discounted_price: true,
          url_image: true,
          tag: true,
        },
      }),
      prisma.product.count({ where: whereClause }),
    ]);

    return { products: products as ProductCard[], totalItems };
  }

  async findFilteredProducts(
    categoryName: string,
    page: number,
    sort?: string,
    order?: string,
    brands?: string[]
  ): Promise<{ products: ProductCard[]; totalItems: number }> {

    const productsPerPage = 9;
    const skip = (page - 1) * productsPerPage;

    const whereClause: any = {
      category: { name: categoryName },
    };

    if (brands?.length) {
      whereClause.brand = { in: brands };
    }

    const orderByClause: ProductOrderBy[] = [];
    if (sort === "price" && order) {
      orderByClause.push({ price: order as SortOrder });
      orderByClause.push({ discounted_price: order as SortOrder });
    }

    const [products, totalItems] = await prisma.$transaction([
      prisma.product.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip,
        take: productsPerPage,
        select: {
          id: true,
          name: true,
          price: true,
          discounted_price: true,
          url_image: true,
          tag: true,
        },
      }),
      prisma.product.count({ where: whereClause }),
    ]);

    return { products: products as ProductCard[], totalItems };
  }

  async findById(id: number): Promise<ProductDetails | null> {
    return prisma.product.findUnique({
      where: { id },
      include: {
        category: {
          select: { id: true, name: true },
        },
        colors: true,
        storage_options: true,
        specs: true,
      },
    }) as Promise<ProductDetails | null>;
  }

  async findByBrand(brand: string): Promise<ProductCard[]> {
    return prisma.product.findMany({
      where: { brand },
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
      take: 4,
    }) as Promise<ProductCard[]>;
  }

  async searchProducts(query: string): Promise<ProductCard[]> {
    return prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
      take: 10,
    }) as Promise<ProductCard[]>;
  }
}

export { ProductRepositoryPrisma };
