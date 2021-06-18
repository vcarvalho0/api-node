import { response, Router } from "express";

import * as UserController from "../controller/UserController";

const router = Router();

//Default Route
router.get("/", (req, res) => {
    res.json({message: "Welcome!"})
})

router.get("/users/", UserController.index);
router.post(`/users/`, UserController.create);

export default router;
