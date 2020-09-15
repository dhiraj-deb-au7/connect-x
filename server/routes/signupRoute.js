import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

router.post("/", userController.signup);

export default router;
