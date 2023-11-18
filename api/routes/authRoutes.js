import { Router } from "express";

import { registerController ,loginController,updatePassword,allUsers,verifyToken} from "../controllers/authController.js";
const router = Router();


router.post("/register",registerController);
router.post("/login",loginController)
router.post("/update",updatePassword)
router.get("/getall",allUsers)
router.post("/auth-verify",verifyToken)

export default router;
