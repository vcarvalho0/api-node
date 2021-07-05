import { Request, Response } from "express";

import User from "../model/IUser";

export const index = async (req: Request, res: Response): Promise<Response> => {
  const users = await User.find();
  return res.json(users);
}

export const create = async (req: Request, res: Response): Promise<Response> => {
  const user = await User.create(req.body);
  return res.json(user)
}

export const findUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const findUser = await User.findById(req.params.id);
    res.json(findUser);
  } catch {
    res.status(404).send({error: "Id not found!"});
  }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateUser = await User.findById(req.params.id);
    Object.assign(updateUser, req.body);
    updateUser?.save();
    res.status(200).send(updateUser)
  } catch {
    res.status(404).send({error: "Id not found!"});
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({message: "Deleted!", deletedPost: deleteUser})  
  } catch {
    res.status(404).send({error: "Id not found!"});
  }
}
