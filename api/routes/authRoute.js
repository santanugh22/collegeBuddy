import { Router } from "express";

import { registerController ,loginController,updatePassword,allUsers} from "../controllers/authController.js";
const router = Router();

router.post("/register",registerController);
router.post("/login",loginController)
router.post("/update",updatePassword)
router.get("/getall",allUsers)

export default router;
