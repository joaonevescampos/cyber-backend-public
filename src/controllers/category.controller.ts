import { Request, Response } from "express";
import CategoryUsecase from "../usecases/category.usecase";
import { CategoryCreate } from "../interfaces/category.interface";

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await CategoryUsecase.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve categories." });
  }
};

export const create = async (
  req: Request<{}, {}, CategoryCreate>,
  res: Response
) => {
  const { name, description, url_icon } = req.body;

  try {
    const data = await CategoryUsecase.create({
      name,
      description,
      url_icon,
    });

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create category." });
  }
};
