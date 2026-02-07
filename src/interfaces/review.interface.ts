export interface ReviewComment {
  id: number;
  name_user: string;
  url_image_user: string | null;
  message: string;
  rating: number;
  created_at: Date;
}


export interface ReviewMetadata {
  current_page: number;
  next_page: boolean;
  size_page: number;
}


export interface ReviewResponse {
  data: ReviewComment[];
  metadata: ReviewMetadata;
}

export interface ReviewRepository {
  findByProductId(productId: number, page: number, limit: number): Promise<ReviewResponse>;
  getReviewSummary(productId: number): Promise<ReviewSummary>;
}

export interface ReviewSummary {
  reviews: number;
  excellent: number;
  good: number;
  average: number;
  below_average: number;
  poor: number;
  media: number;
}