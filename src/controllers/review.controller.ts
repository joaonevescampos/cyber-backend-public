import { Request, Response } from "express";
import ReviewUsecase from "../usecases/review.usecase";
import { format } from 'date-fns';

export const findByProductId = async (req: Request, res: Response) => {
    try {
        const { product_id } = req.params;

        const productId = parseInt(product_id as string);
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 3;

        if (isNaN(productId)) {
            return res.status(400).json({ error: "The product_id must be a number" });
        }

        const response = await ReviewUsecase.findByProductId(productId, page, limit);

        const formattedData = response.data.map(comment => {
            const formattedDate = format(new Date(comment.created_at), 'dd MMMM, yyyy');

            return {
                ...comment,
                created_at: formattedDate
            };
        });

        const formattedResponse = {
            ...response,
            data: formattedData
        };

        return res.status(200).json(formattedResponse);
    }

    catch (error) {
        return res.status(500).json({ error: "Failed to retrieve reviews." });
    }
};

export const getReviewSummary = async (req: Request, res: Response) => {
    try {
        const { product_id } = req.params;

        const productId = parseInt(product_id as string);

        if (isNaN(productId)) {
            return res.status(400).json({ error: "The product_id must be a number" });
        }

        const response = await ReviewUsecase.getReviewSummary(productId);
        return res.status(200).json(response);
    }

    catch (error) {
        return res.status(500).json({ error: "Failed to retrieve review summary." });
    }
};