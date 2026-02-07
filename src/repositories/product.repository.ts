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
    const result = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
    });

    return result;
  }

  async findByTag(tag: string): Promise<ProductCard[]> {
    const result = await prisma.product.findMany({
      where: {
        tag: tag,
      },
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
    });

    return result as ProductCard[];
  }

  async findBrandsWithTotal(): Promise<BrandTotal[]> {
    const brands = await prisma.product.groupBy({
      by: ["brand"],
      _count: {
        brand: true,
      },
      orderBy: {
        _count: {
          brand: "desc",
        },
      },
    });

    const result = brands.map((item : any) => ({
      brand: item.brand,
      total: item._count.brand,
    }));

    return result;
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

    if (brands && brands.length > 0) {
      whereClause.brand = {
        in: brands,
      };
    }

    const orderByClause: any[] = [];
    if (sort === "price" && order) {
      orderByClause.push({
        price: order,
      });
      orderByClause.push({
        discounted_price: order,
      });
    }

    const [products, totalItems] = await prisma.$transaction([
      prisma.product.findMany({
        where: whereClause,
        orderBy: orderByClause,
        skip: skip,
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
      prisma.product.count({
        where: whereClause,
      }),
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
      category: {
        name: categoryName,
      },
    };

    if (brands && brands.length > 0) {
      whereClause.brand = {
        in: brands,
      };
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
        skip: skip,
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
      prisma.product.count({
        where: whereClause,
      }),
    ]);

    return { products: products as ProductCard[], totalItems };
  }

  async findById(id: number): Promise<ProductDetails | null> {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        colors: true,
        storage_options: true,
        specs: true,
      },
    });

    if (!product) {
      return null;
    }

    return product as ProductDetails;
  }

  async findByBrand(brand: string): Promise<ProductCard[]> {
    const result = await prisma.product.findMany({
      where: {
        brand: brand,
      },
      select: {
        id: true,
        name: true,
        price: true,
        discounted_price: true,
        url_image: true,
        tag: true,
      },
      take: 4,
    });

    return result as ProductCard[];
  }

  async searchProducts(query: string): Promise<ProductCard[]> {
    const result = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
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
    });

    return result as ProductCard[];
  }
}

export { ProductRepositoryPrisma };
