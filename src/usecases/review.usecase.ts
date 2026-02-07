import {
    ReviewRepository,
    ReviewResponse,
} from "../interfaces/review.interface";
import { ReviewRepositoryPrisma } from "../repositories/review.repository";

class ReviewUsecase {
    private reviewRepository: ReviewRepository;

    constructor() {
        this.reviewRepository = new ReviewRepositoryPrisma();
    }

    async findByProductId(productId: number, page: number, limit: number): Promise<ReviewResponse> {
        const result = await this.reviewRepository.findByProductId(productId, page, limit);
        return result;
    }

    async getReviewSummary(productId: number) {
        const result = await this.reviewRepository.getReviewSummary(productId);
        return result;
    }
}

export default new ReviewUsecase();