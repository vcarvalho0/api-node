import { Request, Response } from "express";

import User from "../model/IUser";

export const index = async (req: Request, res: Response): Promise<Response> => {
  const users = await User.find();
  return res.json(users);
};

export const create = async (req: Request, res: Response): Promise<Response> => {
  const _id = await User.create(req.body);
  return res.json(_id)
};
