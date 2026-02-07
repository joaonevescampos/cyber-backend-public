export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discounted_price: number | null;
  stock: number;
  url_image: string | null;
  tag: string | null;
}

export interface ProductCard {
  id: number;
  name: string;
  price: number;
  discounted_price: number | null;
  url_image: string | null;
  tag: string | null;
}

export interface BrandTotal {
  brand: string;
  total: number;
}

export interface PaginationMetadata {
  total_pages: number;
  actual_page: number;
  total_items: number;
}

export interface PaginatedProductsResponse {
  metadata: PaginationMetadata;
  data: ProductCard[];
}

export interface ProductResponse {
  data: ProductCard[];
  metadata: PaginationMetadata;
}

export interface ProductColor {
  id: number;
  hex_code: string;
  name: string;
}

export interface StorageOption {
  id: number;
  size: string;
}

export interface SmartphoneSpecs {
  id: number;
  screen_size: string;
  cpu: string;
  total_cores: string;
  main_camera: string;
  front_camera: string;
  battery: string;
}

export interface ProductDetails {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discounted_price: number | null;
  stock: number;
  url_image: string | null;
  tag: string | null;
  category: {
    id: number;
    name: string;
  };
  colors: ProductColor[];
  storage_options: StorageOption[];
  specs?: SmartphoneSpecs | null;
}

export interface ProductRepository {
  findAll(): Promise<ProductCard[]>;
  findByTag(tag: string): Promise<ProductCard[]>;
  findBrandsWithTotal(): Promise<BrandTotal[]>;
  findAllAndFilter(
    page: number,
    sort?: string,
    order?: string,
    brands?: string[]
  ): Promise<{ products: ProductCard[]; totalItems: number }>;
  findFilteredProducts(
    categoryName: string,
    page: number,
    sort?: string,
    order?: string,
    brands?: string[]
  ): Promise<{ products: ProductCard[]; totalItems: number }>;
  findById(id: number): Promise<ProductDetails | null>;
  findByBrand(brand: string): Promise<ProductCard[]>;
  searchProducts(query: string): Promise<ProductCard[]>;
}
