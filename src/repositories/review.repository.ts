import { prisma } from "../database/prisma-client";
import {
    ReviewRepository,
    ReviewResponse,
    ReviewSummary
} from "../interfaces/review.interface";

class ReviewRepositoryPrisma implements ReviewRepository {

    async findByProductId(productId: number, page: number, limit: number): Promise<ReviewResponse> {

        const [comments, totalItems] = await prisma.$transaction([
            prisma.review.findMany({
                where: {
                    id_product: productId
                },
                select: {
                    id: true,
                    name_user: true,
                    url_image_user: true,
                    message: true,
                    rating: true,
                    created_at: true
                },
                orderBy: {
                    created_at: 'desc'
                },
                take: limit * page,
            }),

            prisma.review.count({
                where: {
                    id_product: productId
                }
            })
        ]);

        const totalPages = Math.ceil(totalItems / limit);

        const reviewResponse = {
            data: comments,
            metadata: {
                current_page: page,
                next_page: page < totalPages,
                size_page: comments.length
            }
        }

        return reviewResponse;
    }

    async getReviewSummary(productId: number): Promise<ReviewSummary> {

        const reviews : {rating: number}[] = await prisma.review.findMany({
            where: {
                id_product: productId
            },
            select: {
                rating: true
            }
        });

        const totalReviews = reviews.length;
        const excellentReviews = reviews.filter(r => r.rating === 5).length;
        const goodReviews = reviews.filter(r => r.rating === 4).length;
        const averageReviews = reviews.filter(r => r.rating === 3).length;
        const below_averageReviews = reviews.filter(r => r.rating === 2).length;
        const poorReviews = reviews.filter(r => r.rating === 1).length;
        const mediaResult = ((excellentReviews * 5 + goodReviews * 4 + averageReviews * 3 + below_averageReviews * 2 + poorReviews * 1) / totalReviews) || 0;

        const summary = {
            reviews: totalReviews,
            excellent: excellentReviews,
            good: goodReviews,
            average: averageReviews,
            below_average: below_averageReviews,
            poor: poorReviews,
            media: mediaResult
        }

        return summary;
    }
}

export { ReviewRepositoryPrisma };

