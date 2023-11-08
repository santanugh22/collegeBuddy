import { Router } from "express";
import { emailIdVerifier } from "../utils/RegexEmail.js";
import { registerController ,loginController,updatePassword} from "../controllers/authController.js";
const router = Router();

router.post("/register",registerController);
router.post("/login",loginController)
router.post("/updatePass",updatePassword)

export default router;
