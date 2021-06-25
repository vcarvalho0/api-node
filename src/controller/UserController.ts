import { Request, Response } from "express";

import User from "../model/IUser";

export const index = async (req: Request, res: Response): Promise<Response> => {
  const users = await User.find();
  return res.json(users);
};

export const create = async (req: Request, res: Response): Promise<Response> => {
  const user = await User.create(req.body);
  return res.json(user)
}

export const findUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch {
    res.status(404).send({error: "Id not found!"});
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    Object.assign(user, req.body);
    user?.save();
    res.json(user);
  } catch {
    res.status(404).send({error: "Id not found!"});
  }
}
