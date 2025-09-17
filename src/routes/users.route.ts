import { Router } from "express";
import * as UsersController from "../controllers/users.controller";

const router = Router();

router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUserById);
router.post("/", UsersController.createUser);

export default router;