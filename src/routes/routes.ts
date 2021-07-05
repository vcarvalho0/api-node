import { Router } from "express";

import * as UserController from "../controller/UserController";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

router.get("/users/", UserController.index);
router.post(`/users/`, UserController.create);

router.get("/users/:id", UserController.findUser);
router.patch("/users/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

export default router;
