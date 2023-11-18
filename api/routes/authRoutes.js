import { Router } from "express";

import { registerController ,loginController,updatePassword,verifyToken,getUserDetails} from "../controllers/authController.js";
const router = Router();


router.post("/register",registerController);
router.post("/login",loginController)
router.post("/update",updatePassword)
router.post("/auth-verify",verifyToken)
router.post("/user/:id",getUserDetails)

export default router;
